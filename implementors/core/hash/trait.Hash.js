(function() {var implementors = {
"hotshot":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"hotshot/demo/struct.DemoTypes.html\" title=\"struct hotshot::demo::DemoTypes\">DemoTypes</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"hotshot/demo/struct.SDemoState.html\" title=\"struct hotshot::demo::SDemoState\">SDemoState</a>"],["impl&lt;K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"hotshot/types/trait.SignatureKey.html\" title=\"trait hotshot::types::SignatureKey\">SignatureKey</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"hotshot/traits/election/static_committee/struct.StaticVoteToken.html\" title=\"struct hotshot::traits::election::static_committee::StaticVoteToken\">StaticVoteToken</a>&lt;K&gt;"]],
"hotshot_qc":[["impl&lt;V: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>, P: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"hotshot_qc/bit_vector_old/struct.QCParams.html\" title=\"struct hotshot_qc::bit_vector_old::QCParams\">QCParams</a>&lt;V, P&gt;"],["impl&lt;V: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"hotshot_qc/bit_vector_old/struct.StakeTableEntry.html\" title=\"struct hotshot_qc::bit_vector_old::StakeTableEntry\">StakeTableEntry</a>&lt;V&gt;"]],
"hotshot_signature_key":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"hotshot_signature_key/bn254/bn254_pub/struct.BLSPubKey.html\" title=\"struct hotshot_signature_key::bn254::bn254_pub::BLSPubKey\">BLSPubKey</a>"]],
"hotshot_stake_table":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"hotshot_stake_table/mt_based/internal/struct.MerkleCommitment.html\" title=\"struct hotshot_stake_table::mt_based::internal::MerkleCommitment\">MerkleCommitment</a>"],["impl&lt;K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"hotshot_stake_table/mt_based/internal/trait.Key.html\" title=\"trait hotshot_stake_table::mt_based::internal::Key\">Key</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"enum\" href=\"hotshot_stake_table/mt_based/internal/enum.PersistentMerkleNode.html\" title=\"enum hotshot_stake_table::mt_based::internal::PersistentMerkleNode\">PersistentMerkleNode</a>&lt;K&gt;"],["impl&lt;K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"enum\" href=\"hotshot_stake_table/mt_based/internal/enum.MerklePathEntry.html\" title=\"enum hotshot_stake_table::mt_based::internal::MerklePathEntry\">MerklePathEntry</a>&lt;K&gt;"],["impl&lt;K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"hotshot_stake_table/mt_based/internal/struct.MerkleProof.html\" title=\"struct hotshot_stake_table::mt_based::internal::MerkleProof\">MerkleProof</a>&lt;K&gt;"]],
"hotshot_task_impls":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"enum\" href=\"hotshot_task_impls/view_sync/enum.ViewSyncPhase.html\" title=\"enum hotshot_task_impls::view_sync::ViewSyncPhase\">ViewSyncPhase</a>"],["impl&lt;TYPES: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + NodeType, I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + NodeImplementation&lt;TYPES&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"enum\" href=\"hotshot_task_impls/events/enum.SequencingHotShotEvent.html\" title=\"enum hotshot_task_impls::events::SequencingHotShotEvent\">SequencingHotShotEvent</a>&lt;TYPES, I&gt;<span class=\"where fmt-newline\">where\n    TYPES::SignatureKey: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,\n    I::Leaf: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,\n    TYPES::Time: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,\n    TYPES::Transaction: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,\n    TYPES::BlockType: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,</span>"]],
"hotshot_testing":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"hotshot_testing/node_types/struct.StaticFallbackImpl.html\" title=\"struct hotshot_testing::node_types::StaticFallbackImpl\">StaticFallbackImpl</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"hotshot_testing/node_types/struct.SequencingWebImpl.html\" title=\"struct hotshot_testing::node_types::SequencingWebImpl\">SequencingWebImpl</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"hotshot_testing/node_types/struct.SequencingTestTypes.html\" title=\"struct hotshot_testing::node_types::SequencingTestTypes\">SequencingTestTypes</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"hotshot_testing/node_types/struct.SequencingMemoryImpl.html\" title=\"struct hotshot_testing::node_types::SequencingMemoryImpl\">SequencingMemoryImpl</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"hotshot_testing/node_types/struct.SequencingLibp2pImpl.html\" title=\"struct hotshot_testing::node_types::SequencingLibp2pImpl\">SequencingLibp2pImpl</a>"]],
"hotshot_types":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"hotshot_types/traits/block_contents/dummy/struct.DummyBlock.html\" title=\"struct hotshot_types::traits::block_contents::dummy::DummyBlock\">DummyBlock</a>"],["impl&lt;TYPES: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"hotshot_types/vote/struct.ViewSyncVoteInternal.html\" title=\"struct hotshot_types::vote::ViewSyncVoteInternal\">ViewSyncVoteInternal</a>&lt;TYPES&gt;<span class=\"where fmt-newline\">where\n    TYPES::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.Time\" title=\"type hotshot_types::traits::node_implementation::NodeType::Time\">Time</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,\n    TYPES::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.VoteTokenType\" title=\"type hotshot_types::traits::node_implementation::NodeType::VoteTokenType\">VoteTokenType</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,</span>"],["impl&lt;TYPES: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"enum\" href=\"hotshot_types/certificate/enum.ViewSyncCertificate.html\" title=\"enum hotshot_types::certificate::ViewSyncCertificate\">ViewSyncCertificate</a>&lt;TYPES&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"hotshot_types/block_impl/struct.VIDTransaction.html\" title=\"struct hotshot_types::block_impl::VIDTransaction\">VIDTransaction</a>"],["impl&lt;TYPES: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>, COMMITMENT: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + CommitmentBounds&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"hotshot_types/certificate/struct.QuorumCertificate.html\" title=\"struct hotshot_types::certificate::QuorumCertificate\">QuorumCertificate</a>&lt;TYPES, COMMITMENT&gt;<span class=\"where fmt-newline\">where\n    TYPES::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.Time\" title=\"type hotshot_types::traits::node_implementation::NodeType::Time\">Time</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,</span>"],["impl&lt;TYPES: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"hotshot_types/data/struct.DAProposal.html\" title=\"struct hotshot_types::data::DAProposal\">DAProposal</a>&lt;TYPES&gt;<span class=\"where fmt-newline\">where\n    TYPES::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.BlockType\" title=\"type hotshot_types::traits::node_implementation::NodeType::BlockType\">BlockType</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,\n    TYPES::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.Time\" title=\"type hotshot_types::traits::node_implementation::NodeType::Time\">Time</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,</span>"],["impl&lt;TYPES: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"hotshot_types/certificate/struct.TimeoutCertificate.html\" title=\"struct hotshot_types::certificate::TimeoutCertificate\">TimeoutCertificate</a>&lt;TYPES&gt;<span class=\"where fmt-newline\">where\n    TYPES::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.Time\" title=\"type hotshot_types::traits::node_implementation::NodeType::Time\">Time</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,</span>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"hotshot_types/traits/signature_key/struct.EncodedPublicKey.html\" title=\"struct hotshot_types::traits::signature_key::EncodedPublicKey\">EncodedPublicKey</a>"],["impl&lt;TYPES: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>, COMMITMENT: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + CommitmentBounds&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"enum\" href=\"hotshot_types/vote/enum.QuorumVote.html\" title=\"enum hotshot_types::vote::QuorumVote\">QuorumVote</a>&lt;TYPES, COMMITMENT&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"hotshot_types/traits/signature_key/struct.EncodedSignature.html\" title=\"struct hotshot_types::traits::signature_key::EncodedSignature\">EncodedSignature</a>"],["impl&lt;TYPES: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>, COMMITMENT: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + CommitmentBounds&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"hotshot_types/vote/struct.TimeoutVote.html\" title=\"struct hotshot_types::vote::TimeoutVote\">TimeoutVote</a>&lt;TYPES, COMMITMENT&gt;<span class=\"where fmt-newline\">where\n    TYPES::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.Time\" title=\"type hotshot_types::traits::node_implementation::NodeType::Time\">Time</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,\n    TYPES::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.VoteTokenType\" title=\"type hotshot_types::traits::node_implementation::NodeType::VoteTokenType\">VoteTokenType</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,</span>"],["impl&lt;TYPES: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"hotshot_types/data/struct.SequencingLeaf.html\" title=\"struct hotshot_types::data::SequencingLeaf\">SequencingLeaf</a>&lt;TYPES&gt;"],["impl&lt;TYPES: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"hotshot_types/certificate/struct.ViewSyncCertificateInternal.html\" title=\"struct hotshot_types::certificate::ViewSyncCertificateInternal\">ViewSyncCertificateInternal</a>&lt;TYPES&gt;<span class=\"where fmt-newline\">where\n    TYPES::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.Time\" title=\"type hotshot_types::traits::node_implementation::NodeType::Time\">Time</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,</span>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"hotshot_types/traits/state/dummy/struct.DummyState.html\" title=\"struct hotshot_types::traits::state::dummy::DummyState\">DummyState</a>"],["impl&lt;TYPES: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>, LEAF: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"hotshot_types/data/trait.LeafType.html\" title=\"trait hotshot_types::data::LeafType\">LeafType</a>&lt;NodeType = TYPES&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"hotshot_types/data/struct.QuorumProposal.html\" title=\"struct hotshot_types::data::QuorumProposal\">QuorumProposal</a>&lt;TYPES, LEAF&gt;<span class=\"where fmt-newline\">where\n    TYPES::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.BlockType\" title=\"type hotshot_types::traits::node_implementation::NodeType::BlockType\">BlockType</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,\n    TYPES::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.Time\" title=\"type hotshot_types::traits::node_implementation::NodeType::Time\">Time</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,</span>"],["impl&lt;TYPES&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"hotshot_types/data/struct.ValidatingLeaf.html\" title=\"struct hotshot_types::data::ValidatingLeaf\">ValidatingLeaf</a>&lt;TYPES&gt;<span class=\"where fmt-newline\">where\n    TYPES: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>,</span>"],["impl&lt;TYPES: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"hotshot_types/vote/struct.ViewSyncData.html\" title=\"struct hotshot_types::vote::ViewSyncData\">ViewSyncData</a>&lt;TYPES&gt;<span class=\"where fmt-newline\">where\n    TYPES::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.Time\" title=\"type hotshot_types::traits::node_implementation::NodeType::Time\">Time</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,</span>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"enum\" href=\"hotshot_types/traits/block_contents/dummy/enum.DummyTransaction.html\" title=\"enum hotshot_types::traits::block_contents::dummy::DummyTransaction\">DummyTransaction</a>"],["impl&lt;TYPES: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"hotshot_types/data/struct.VidDisperse.html\" title=\"struct hotshot_types::data::VidDisperse\">VidDisperse</a>&lt;TYPES&gt;<span class=\"where fmt-newline\">where\n    TYPES::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.Time\" title=\"type hotshot_types::traits::node_implementation::NodeType::Time\">Time</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,\n    TYPES::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.BlockType\" title=\"type hotshot_types::traits::node_implementation::NodeType::BlockType\">BlockType</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,</span>"],["impl&lt;TYPES: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"enum\" href=\"hotshot_types/message/enum.DataMessage.html\" title=\"enum hotshot_types::message::DataMessage\">DataMessage</a>&lt;TYPES&gt;<span class=\"where fmt-newline\">where\n    TYPES::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.Transaction\" title=\"type hotshot_types::traits::node_implementation::NodeType::Transaction\">Transaction</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,\n    TYPES::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.Time\" title=\"type hotshot_types::traits::node_implementation::NodeType::Time\">Time</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,</span>"],["impl&lt;COMMITMENT&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"enum\" href=\"hotshot_types/traits/election/enum.VoteData.html\" title=\"enum hotshot_types::traits::election::VoteData\">VoteData</a>&lt;COMMITMENT&gt;<span class=\"where fmt-newline\">where\n    COMMITMENT: CommitmentBounds + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,</span>"],["impl&lt;TYPES, LEAF&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"hotshot_types/data/struct.ValidatingProposal.html\" title=\"struct hotshot_types::data::ValidatingProposal\">ValidatingProposal</a>&lt;TYPES, LEAF&gt;<span class=\"where fmt-newline\">where\n    LEAF: Committable + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"hotshot_types/data/trait.LeafType.html\" title=\"trait hotshot_types::data::LeafType\">LeafType</a>&lt;NodeType = TYPES&gt;,\n    TYPES: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>,</span>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"hotshot_types/data/struct.ViewNumber.html\" title=\"struct hotshot_types::data::ViewNumber\">ViewNumber</a>"],["impl&lt;TYPES: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"hotshot_types/vote/struct.DAVote.html\" title=\"struct hotshot_types::vote::DAVote\">DAVote</a>&lt;TYPES&gt;<span class=\"where fmt-newline\">where\n    TYPES::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.BlockType\" title=\"type hotshot_types::traits::node_implementation::NodeType::BlockType\">BlockType</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,\n    TYPES::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.Time\" title=\"type hotshot_types::traits::node_implementation::NodeType::Time\">Time</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,\n    TYPES::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.VoteTokenType\" title=\"type hotshot_types::traits::node_implementation::NodeType::VoteTokenType\">VoteTokenType</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,</span>"],["impl&lt;TYPES: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"hotshot_types/certificate/struct.DACertificate.html\" title=\"struct hotshot_types::certificate::DACertificate\">DACertificate</a>&lt;TYPES&gt;<span class=\"where fmt-newline\">where\n    TYPES::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.Time\" title=\"type hotshot_types::traits::node_implementation::NodeType::Time\">Time</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,\n    TYPES::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.BlockType\" title=\"type hotshot_types::traits::node_implementation::NodeType::BlockType\">BlockType</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,</span>"],["impl&lt;PROPOSAL: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"hotshot_types/data/trait.ProposalType.html\" title=\"trait hotshot_types::data::ProposalType\">ProposalType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"hotshot_types/message/struct.Proposal.html\" title=\"struct hotshot_types::message::Proposal\">Proposal</a>&lt;PROPOSAL&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"hotshot_types/block_impl/struct.VIDBlockPayload.html\" title=\"struct hotshot_types::block_impl::VIDBlockPayload\">VIDBlockPayload</a>"],["impl&lt;TYPES: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"enum\" href=\"hotshot_types/certificate/enum.AssembledSignature.html\" title=\"enum hotshot_types::certificate::AssembledSignature\">AssembledSignature</a>&lt;TYPES&gt;<span class=\"where fmt-newline\">where\n    TYPES::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.SignatureKey\" title=\"type hotshot_types::traits::node_implementation::NodeType::SignatureKey\">SignatureKey</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,</span>"],["impl&lt;TYPES: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>, COMMITMENT: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + CommitmentBounds&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"hotshot_types/vote/struct.YesOrNoVote.html\" title=\"struct hotshot_types::vote::YesOrNoVote\">YesOrNoVote</a>&lt;TYPES, COMMITMENT&gt;<span class=\"where fmt-newline\">where\n    TYPES::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.Time\" title=\"type hotshot_types::traits::node_implementation::NodeType::Time\">Time</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,\n    TYPES::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.VoteTokenType\" title=\"type hotshot_types::traits::node_implementation::NodeType::VoteTokenType\">VoteTokenType</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,</span>"],["impl&lt;TYPES: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"enum\" href=\"hotshot_types/vote/enum.ViewSyncVote.html\" title=\"enum hotshot_types::vote::ViewSyncVote\">ViewSyncVote</a>&lt;TYPES&gt;"]],
"libp2p_multi_validator":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"libp2p_multi_validator/types/struct.NodeImpl.html\" title=\"struct libp2p_multi_validator::types::NodeImpl\">NodeImpl</a>"]],
"libp2p_networking":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"enum\" href=\"libp2p_networking/network/behaviours/dht/enum.DHTProgress.html\" title=\"enum libp2p_networking::network::behaviours::dht::DHTProgress\">DHTProgress</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"libp2p_networking/network/behaviours/exponential_backoff/struct.ExponentialBackoff.html\" title=\"struct libp2p_networking::network::behaviours::exponential_backoff::ExponentialBackoff\">ExponentialBackoff</a>"]],
"libp2p_orchestrator":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"libp2p_orchestrator/types/struct.NodeImpl.html\" title=\"struct libp2p_orchestrator::types::NodeImpl\">NodeImpl</a>"]],
"libp2p_validator":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"libp2p_validator/types/struct.NodeImpl.html\" title=\"struct libp2p_validator::types::NodeImpl\">NodeImpl</a>"]],
"multi_validator":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"multi_validator/types/struct.NodeImpl.html\" title=\"struct multi_validator::types::NodeImpl\">NodeImpl</a>"]],
"web_server_da_orchestrator":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"web_server_da_orchestrator/types/struct.NodeImpl.html\" title=\"struct web_server_da_orchestrator::types::NodeImpl\">NodeImpl</a>"]],
"web_server_da_validator":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"web_server_da_validator/types/struct.NodeImpl.html\" title=\"struct web_server_da_validator::types::NodeImpl\">NodeImpl</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()