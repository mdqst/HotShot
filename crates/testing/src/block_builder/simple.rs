use std::{
    collections::HashMap,
    num::NonZeroUsize,
    sync::{
        atomic::{AtomicBool, Ordering},
        Arc,
    },
    time::{Duration, Instant},
};

use hotshot_types::traits::block_contents::Transaction;

use async_broadcast::{broadcast, Sender};
use async_compatibility_layer::art::async_spawn;
use async_lock::RwLock;
use async_trait::async_trait;
use committable::{Commitment, Committable};
use futures::{future::BoxFuture, Stream, StreamExt};
use hotshot::{
    traits::BlockPayload,
    types::{Event, EventType, SignatureKey},
};
use hotshot_builder_api::v0_1::{
    block_info::{AvailableBlockData, AvailableBlockHeaderInput, AvailableBlockInfo},
    builder::{BuildError, Error, Options},
    data_source::BuilderDataSource,
};
use hotshot_example_types::block_types::TestTransaction;
use hotshot_types::{
    traits::{
        block_contents::BlockHeader, node_implementation::NodeType,
        signature_key::BuilderSignatureKey,
    },
    utils::BuilderCommitment,
    vid::VidCommitment,
};
use lru::LruCache;
use tide_disco::{method::ReadState, App, Url};
use tracing::error;
use vbs::version::StaticVersionType;

use super::{build_block, run_builder_source, BlockEntry, BuilderTask, TestBuilderImplementation};
use crate::test_builder::BuilderChange;

pub struct SimpleBuilderImplementation;

impl SimpleBuilderImplementation {
    pub async fn create<TYPES: NodeType>(
        transaction_size: usize,
        num_storage_nodes: usize,
        changes: HashMap<u64, BuilderChange>,
        change_sender: Sender<BuilderChange>,
    ) -> (SimpleBuilderSource<TYPES>, SimpleBuilderTask<TYPES>) {
        let (pub_key, priv_key) =
            TYPES::BuilderSignatureKey::generated_from_seed_indexed([1; 32], 0);

        let transactions = Arc::new(RwLock::new(HashMap::new()));
        let blocks = Arc::new(RwLock::new(HashMap::new()));
        let should_fail_claims = Arc::new(AtomicBool::new(false));

        let source = SimpleBuilderSource {
            pub_key,
            priv_key,
            transactions: transactions.clone(),
            blocks: blocks.clone(),
            num_storage_nodes,
            should_fail_claims: Arc::clone(&should_fail_claims),
            transaction_size: transaction_size,
        };

        let task = SimpleBuilderTask {
            transactions,
            blocks,
            decided_transactions: LruCache::new(NonZeroUsize::new(u16::MAX.into()).expect("> 0")),
            should_fail_claims,
            change_sender,
            changes,
        };

        (source, task)
    }
}

#[async_trait]
impl<TYPES: NodeType> TestBuilderImplementation<TYPES> for SimpleBuilderImplementation
where
    <TYPES as NodeType>::InstanceState: Default,
{
    type Config = ();

    async fn start(
        transaction_size: usize,
        num_storage_nodes: usize,
        url: Url,
        _config: Self::Config,
        changes: HashMap<u64, BuilderChange>,
    ) -> Box<dyn BuilderTask<TYPES>> {
        let (change_sender, change_receiver) = broadcast(128);
        let (mut source, task) =
            Self::create(transaction_size, num_storage_nodes, changes, change_sender).await;

        run_builder_source(url, change_receiver, source);

        Box::new(task)
    }
}

#[derive(Debug, Clone)]
pub struct SimpleBuilderSource<TYPES: NodeType> {
    pub_key: TYPES::BuilderSignatureKey,
    priv_key: <TYPES::BuilderSignatureKey as BuilderSignatureKey>::BuilderPrivateKey,
    num_storage_nodes: usize,
    #[allow(clippy::type_complexity)]
    transactions: Arc<RwLock<HashMap<Commitment<TYPES::Transaction>, SubmittedTransaction<TYPES>>>>,
    blocks: Arc<RwLock<HashMap<BuilderCommitment, BlockEntry<TYPES>>>>,
    should_fail_claims: Arc<AtomicBool>,
    transaction_size: usize,
}

#[async_trait]
impl<TYPES: NodeType> ReadState for SimpleBuilderSource<TYPES> {
    type State = Self;

    async fn read<T>(
        &self,
        op: impl Send + for<'a> FnOnce(&'a Self::State) -> BoxFuture<'a, T> + 'async_trait,
    ) -> T {
        op(self).await
    }
}

#[async_trait]
impl<TYPES: NodeType> BuilderDataSource<TYPES> for SimpleBuilderSource<TYPES>
where
    <TYPES as NodeType>::InstanceState: Default,
{
    async fn available_blocks(
        &self,
        _for_parent: &VidCommitment,
        _view_number: u64,
        _sender: TYPES::SignatureKey,
        _signature: &<TYPES::SignatureKey as SignatureKey>::PureAssembledSignatureType,
    ) -> Result<Vec<AvailableBlockInfo<TYPES>>, BuildError> {
        // TODO ED Get config value of tx size for below
        //let transaction = TYPES::Transaction::default(self.transaction_size);
        //let transactions = vec![transaction];

        let transactions = self
            .transactions
            .read(|txns| {
                Box::pin(async {
                    txns.values()
                        .filter(|txn| {
                            // We want transactions that are either unclaimed, or claimed long ago
                            // and thus probably not included, or they would've been decided on
                            // already and removed from the queue
                            txn.claimed
                                .map(|claim_time| claim_time.elapsed() > Duration::from_secs(30))
                                .unwrap_or(true)
                        })
                        .cloned()
                        .map(|txn| txn.transaction)
                        .collect::<Vec<TYPES::Transaction>>()
                })
            })
            .await;

        if transactions.is_empty() {
            // We don't want to return an empty block if we have no trasnactions, as we would end up
            // driving consensus to produce empty blocks extremely quickly when mempool is empty.
            // Instead, we return no blocks, so that view leader will keep asking for blocks until
            // either we have something non-trivial to propose, or leader runs out of time to propose,
            // in which case view leader will finally propose an empty block themselves.
            // return Ok(vec![]);
            // let var_name = TYPES::Transaction::default(self.transaction_size);
            // let transaction = var_name;
            // let transactions = vec![transaction];
            // let block_entry = build_block(
            //     transactions,
            //     self.num_storage_nodes,
            //     self.pub_key.clone(),
            //     self.priv_key.clone(),
            // )
            // .await;
    
            // let metadata = block_entry.metadata.clone();
    
            // self.blocks
            //     .write()
            //     .await
            //     .insert(block_entry.metadata.block_hash.clone(), block_entry);
    
            // return Ok(vec![metadata])
            return Ok(vec![])
            
        }

        let block_entry = build_block(
            transactions,
            self.num_storage_nodes,
            self.pub_key.clone(),
            self.priv_key.clone(),
        )
        .await;

        let metadata = block_entry.metadata.clone();

        self.blocks
            .write()
            .await
            .insert(block_entry.metadata.block_hash.clone(), block_entry);

        Ok(vec![metadata])
    }

    async fn claim_block(
        &self,
        block_hash: &BuilderCommitment,
        _view_number: u64,
        _sender: TYPES::SignatureKey,
        _signature: &<TYPES::SignatureKey as SignatureKey>::PureAssembledSignatureType,
    ) -> Result<AvailableBlockData<TYPES>, BuildError> {
        if self.should_fail_claims.load(Ordering::Relaxed) {
            return Err(BuildError::Missing);
        }

        let payload = {
            let mut blocks = self.blocks.write().await;
            let entry = blocks.get_mut(block_hash).ok_or(BuildError::NotFound)?;
            entry.payload.take().ok_or(BuildError::Missing)?
        };

        let now = Instant::now();

        let claimed_transactions = payload
            .block_payload
            .transaction_commitments(&payload.metadata);

        let mut transactions = self.transactions.write().await;
        for txn_hash in claimed_transactions {
            if let Some(txn) = transactions.get_mut(&txn_hash) {
                txn.claimed = Some(now);
            }
        }

        Ok(payload)
    }

    async fn claim_block_header_input(
        &self,
        block_hash: &BuilderCommitment,
        _view_number: u64,
        _sender: TYPES::SignatureKey,
        _signature: &<TYPES::SignatureKey as SignatureKey>::PureAssembledSignatureType,
    ) -> Result<AvailableBlockHeaderInput<TYPES>, BuildError> {
        if self.should_fail_claims.load(Ordering::Relaxed) {
            return Err(BuildError::Missing);
        }

        let mut blocks = self.blocks.write().await;
        let entry = blocks.get_mut(block_hash).ok_or(BuildError::NotFound)?;
        entry.header_input.take().ok_or(BuildError::Missing)
    }

    async fn builder_address(&self) -> Result<TYPES::BuilderSignatureKey, BuildError> {
        Ok(self.pub_key.clone())
    }
}

impl<TYPES: NodeType> SimpleBuilderSource<TYPES> {
    pub async fn run(self, url: Url)
    where
        <TYPES as NodeType>::InstanceState: Default,
    {
        let builder_api = hotshot_builder_api::v0_1::builder::define_api::<
            SimpleBuilderSource<TYPES>,
            TYPES,
        >(&Options::default())
        .expect("Failed to construct the builder API");
        let mut app: App<SimpleBuilderSource<TYPES>, Error> = App::with_state(self);
        app.register_module::<Error, _>("block_info", builder_api)
            .expect("Failed to register the builder API");

        async_spawn(app.serve(url, TYPES::Base::instance()));
    }
}

#[derive(Debug, Clone)]
struct SubmittedTransaction<TYPES: NodeType> {
    claimed: Option<Instant>,
    transaction: TYPES::Transaction,
}

#[derive(Clone)]
pub struct SimpleBuilderTask<TYPES: NodeType> {
    #[allow(clippy::type_complexity)]
    transactions: Arc<RwLock<HashMap<Commitment<TYPES::Transaction>, SubmittedTransaction<TYPES>>>>,
    blocks: Arc<RwLock<HashMap<BuilderCommitment, BlockEntry<TYPES>>>>,
    decided_transactions: LruCache<Commitment<TYPES::Transaction>, ()>,
    should_fail_claims: Arc<AtomicBool>,
    changes: HashMap<u64, BuilderChange>,
    change_sender: Sender<BuilderChange>,
}

impl<TYPES: NodeType> BuilderTask<TYPES> for SimpleBuilderTask<TYPES> {
    fn start(
        mut self: Box<Self>,
        mut stream: Box<dyn Stream<Item = Event<TYPES>> + std::marker::Unpin + Send + 'static>,
    ) {
        async_spawn(async move {
            let mut should_build_blocks = true;
            loop {
                match stream.next().await {
                    None => {
                        break;
                    }
                    Some(evt) => match evt.event {
                        EventType::ViewFinished { view_number } => {
                            if let Some(change) = self.changes.remove(&view_number) {
                                match change {
                                    BuilderChange::Up => should_build_blocks = true,
                                    BuilderChange::Down => {
                                        should_build_blocks = false;
                                        self.transactions.write().await.clear();
                                        self.blocks.write().await.clear();
                                    }
                                    BuilderChange::FailClaims(value) => {
                                        self.should_fail_claims.store(value, Ordering::Relaxed);
                                    }
                                }
                                let _ = self.change_sender.broadcast(change).await;
                            }
                        }
                        EventType::Decide { leaf_chain, .. } if should_build_blocks => {
                            let mut queue = self.transactions.write().await;
                            for leaf_info in leaf_chain.iter() {
                                if let Some(ref payload) = leaf_info.leaf.block_payload() {
                                    for txn in payload.transaction_commitments(
                                        leaf_info.leaf.block_header().metadata(),
                                    ) {
                                        self.decided_transactions.put(txn, ());
                                        queue.remove(&txn);
                                    }
                                }
                            }
                            self.blocks.write().await.clear();
                        }
                        EventType::DaProposal { proposal, .. } if should_build_blocks => {
                            let payload = TYPES::BlockPayload::from_bytes(
                                &proposal.data.encoded_transactions,
                                &proposal.data.metadata,
                            );
                            let now = Instant::now();

                            let mut queue = self.transactions.write().await;
                            for commitment in
                                payload.transaction_commitments(&proposal.data.metadata)
                            {
                                if let Some(txn) = queue.get_mut(&commitment) {
                                    txn.claimed = Some(now);
                                }
                            }
                        }
                        EventType::Transactions { transactions } if should_build_blocks => {
                            let mut queue = self.transactions.write().await;
                            for transaction in transactions {
                                if !self.decided_transactions.contains(&transaction.commit()) {
                                    queue.insert(
                                        transaction.commit(),
                                        SubmittedTransaction {
                                            claimed: None,
                                            transaction: transaction.clone(),
                                        },
                                    );
                                }
                            }
                        }
                        _ => {}
                    },
                }
            }
        });
    }
}
