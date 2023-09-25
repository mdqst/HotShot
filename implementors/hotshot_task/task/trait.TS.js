(function() {var implementors = {
"hotshot_task_impls":[["impl&lt;TYPES: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>, I: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeImplementation.html\" title=\"trait hotshot_types::traits::node_implementation::NodeImplementation\">NodeImplementation</a>&lt;TYPES, Leaf = <a class=\"struct\" href=\"hotshot_types/data/struct.SequencingLeaf.html\" title=\"struct hotshot_types::data::SequencingLeaf\">SequencingLeaf</a>&lt;TYPES&gt;, ConsensusMessage = <a class=\"struct\" href=\"hotshot_types/message/struct.SequencingMessage.html\" title=\"struct hotshot_types::message::SequencingMessage\">SequencingMessage</a>&lt;TYPES, I&gt;&gt;&gt; <a class=\"trait\" href=\"hotshot_task/task/trait.TS.html\" title=\"trait hotshot_task::task::TS\">TS</a> for <a class=\"struct\" href=\"hotshot_task_impls/network/struct.NetworkMessageTaskState.html\" title=\"struct hotshot_task_impls::network::NetworkMessageTaskState\">NetworkMessageTaskState</a>&lt;TYPES, I&gt;"],["impl&lt;TYPES: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>, I: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeImplementation.html\" title=\"trait hotshot_types::traits::node_implementation::NodeImplementation\">NodeImplementation</a>&lt;TYPES, Leaf = <a class=\"struct\" href=\"hotshot_types/data/struct.SequencingLeaf.html\" title=\"struct hotshot_types::data::SequencingLeaf\">SequencingLeaf</a>&lt;TYPES&gt;, ConsensusMessage = <a class=\"struct\" href=\"hotshot_types/message/struct.SequencingMessage.html\" title=\"struct hotshot_types::message::SequencingMessage\">SequencingMessage</a>&lt;TYPES, I&gt;&gt;, A: <a class=\"trait\" href=\"hotshot_types/traits/consensus_api/trait.SequencingConsensusApi.html\" title=\"trait hotshot_types::traits::consensus_api::SequencingConsensusApi\">SequencingConsensusApi</a>&lt;TYPES, <a class=\"struct\" href=\"hotshot_types/data/struct.SequencingLeaf.html\" title=\"struct hotshot_types::data::SequencingLeaf\">SequencingLeaf</a>&lt;TYPES&gt;, I&gt; + 'static&gt; <a class=\"trait\" href=\"hotshot_task/task/trait.TS.html\" title=\"trait hotshot_task::task::TS\">TS</a> for <a class=\"struct\" href=\"hotshot_task_impls/da/struct.DATaskState.html\" title=\"struct hotshot_task_impls::da::DATaskState\">DATaskState</a>&lt;TYPES, I, A&gt;<span class=\"where fmt-newline\">where\n    <a class=\"type\" href=\"hotshot_types/traits/node_implementation/type.CommitteeEx.html\" title=\"type hotshot_types::traits::node_implementation::CommitteeEx\">CommitteeEx</a>&lt;TYPES, I&gt;: <a class=\"trait\" href=\"hotshot_types/traits/election/trait.ConsensusExchange.html\" title=\"trait hotshot_types::traits::election::ConsensusExchange\">ConsensusExchange</a>&lt;TYPES, <a class=\"struct\" href=\"hotshot_types/message/struct.Message.html\" title=\"struct hotshot_types::message::Message\">Message</a>&lt;TYPES, I&gt;, Certificate = <a class=\"struct\" href=\"hotshot_types/certificate/struct.DACertificate.html\" title=\"struct hotshot_types::certificate::DACertificate\">DACertificate</a>&lt;TYPES&gt;, Commitment = TYPES::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.BlockType\" title=\"type hotshot_types::traits::node_implementation::NodeType::BlockType\">BlockType</a>&gt;,</span>"],["impl&lt;TYPES: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>, I: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeImplementation.html\" title=\"trait hotshot_types::traits::node_implementation::NodeImplementation\">NodeImplementation</a>&lt;TYPES, Leaf = <a class=\"struct\" href=\"hotshot_types/data/struct.SequencingLeaf.html\" title=\"struct hotshot_types::data::SequencingLeaf\">SequencingLeaf</a>&lt;TYPES&gt;, ConsensusMessage = <a class=\"struct\" href=\"hotshot_types/message/struct.SequencingMessage.html\" title=\"struct hotshot_types::message::SequencingMessage\">SequencingMessage</a>&lt;TYPES, I&gt;&gt;&gt; <a class=\"trait\" href=\"hotshot_task/task/trait.TS.html\" title=\"trait hotshot_task::task::TS\">TS</a> for <a class=\"struct\" href=\"hotshot_task_impls/view_sync/struct.ViewSyncRelayTaskState.html\" title=\"struct hotshot_task_impls::view_sync::ViewSyncRelayTaskState\">ViewSyncRelayTaskState</a>&lt;TYPES, I&gt;"],["impl&lt;TYPES: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>, I: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeImplementation.html\" title=\"trait hotshot_types::traits::node_implementation::NodeImplementation\">NodeImplementation</a>&lt;TYPES, Leaf = <a class=\"struct\" href=\"hotshot_types/data/struct.SequencingLeaf.html\" title=\"struct hotshot_types::data::SequencingLeaf\">SequencingLeaf</a>&lt;TYPES&gt;, ConsensusMessage = <a class=\"struct\" href=\"hotshot_types/message/struct.SequencingMessage.html\" title=\"struct hotshot_types::message::SequencingMessage\">SequencingMessage</a>&lt;TYPES, I&gt;&gt;, A: <a class=\"trait\" href=\"hotshot_types/traits/consensus_api/trait.SequencingConsensusApi.html\" title=\"trait hotshot_types::traits::consensus_api::SequencingConsensusApi\">SequencingConsensusApi</a>&lt;TYPES, <a class=\"struct\" href=\"hotshot_types/data/struct.SequencingLeaf.html\" title=\"struct hotshot_types::data::SequencingLeaf\">SequencingLeaf</a>&lt;TYPES&gt;, I&gt; + 'static&gt; <a class=\"trait\" href=\"hotshot_task/task/trait.TS.html\" title=\"trait hotshot_task::task::TS\">TS</a> for <a class=\"struct\" href=\"hotshot_task_impls/transactions/struct.TransactionTaskState.html\" title=\"struct hotshot_task_impls::transactions::TransactionTaskState\">TransactionTaskState</a>&lt;TYPES, I, A&gt;<span class=\"where fmt-newline\">where\n    <a class=\"type\" href=\"hotshot_types/traits/node_implementation/type.CommitteeEx.html\" title=\"type hotshot_types::traits::node_implementation::CommitteeEx\">CommitteeEx</a>&lt;TYPES, I&gt;: <a class=\"trait\" href=\"hotshot_types/traits/election/trait.ConsensusExchange.html\" title=\"trait hotshot_types::traits::election::ConsensusExchange\">ConsensusExchange</a>&lt;TYPES, <a class=\"struct\" href=\"hotshot_types/message/struct.Message.html\" title=\"struct hotshot_types::message::Message\">Message</a>&lt;TYPES, I&gt;, Certificate = <a class=\"struct\" href=\"hotshot_types/certificate/struct.DACertificate.html\" title=\"struct hotshot_types::certificate::DACertificate\">DACertificate</a>&lt;TYPES&gt;, Commitment = TYPES::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.BlockType\" title=\"type hotshot_types::traits::node_implementation::NodeType::BlockType\">BlockType</a>&gt;,</span>"],["impl&lt;TYPES: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>, I: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeImplementation.html\" title=\"trait hotshot_types::traits::node_implementation::NodeImplementation\">NodeImplementation</a>&lt;TYPES, Leaf = <a class=\"struct\" href=\"hotshot_types/data/struct.SequencingLeaf.html\" title=\"struct hotshot_types::data::SequencingLeaf\">SequencingLeaf</a>&lt;TYPES&gt;, ConsensusMessage = <a class=\"struct\" href=\"hotshot_types/message/struct.SequencingMessage.html\" title=\"struct hotshot_types::message::SequencingMessage\">SequencingMessage</a>&lt;TYPES, I&gt;&gt;, A: <a class=\"trait\" href=\"hotshot_types/traits/consensus_api/trait.SequencingConsensusApi.html\" title=\"trait hotshot_types::traits::consensus_api::SequencingConsensusApi\">SequencingConsensusApi</a>&lt;TYPES, <a class=\"struct\" href=\"hotshot_types/data/struct.SequencingLeaf.html\" title=\"struct hotshot_types::data::SequencingLeaf\">SequencingLeaf</a>&lt;TYPES&gt;, I&gt;&gt; <a class=\"trait\" href=\"hotshot_task/task/trait.TS.html\" title=\"trait hotshot_task::task::TS\">TS</a> for <a class=\"struct\" href=\"hotshot_task_impls/consensus/struct.SequencingConsensusTaskState.html\" title=\"struct hotshot_task_impls::consensus::SequencingConsensusTaskState\">SequencingConsensusTaskState</a>&lt;TYPES, I, A&gt;<span class=\"where fmt-newline\">where\n    <a class=\"type\" href=\"hotshot_types/traits/node_implementation/type.SequencingQuorumEx.html\" title=\"type hotshot_types::traits::node_implementation::SequencingQuorumEx\">SequencingQuorumEx</a>&lt;TYPES, I&gt;: <a class=\"trait\" href=\"hotshot_types/traits/election/trait.ConsensusExchange.html\" title=\"trait hotshot_types::traits::election::ConsensusExchange\">ConsensusExchange</a>&lt;TYPES, <a class=\"struct\" href=\"hotshot_types/message/struct.Message.html\" title=\"struct hotshot_types::message::Message\">Message</a>&lt;TYPES, I&gt;, Proposal = <a class=\"struct\" href=\"hotshot_types/data/struct.QuorumProposal.html\" title=\"struct hotshot_types::data::QuorumProposal\">QuorumProposal</a>&lt;TYPES, <a class=\"struct\" href=\"hotshot_types/data/struct.SequencingLeaf.html\" title=\"struct hotshot_types::data::SequencingLeaf\">SequencingLeaf</a>&lt;TYPES&gt;&gt;, Certificate = <a class=\"struct\" href=\"hotshot_types/certificate/struct.QuorumCertificate.html\" title=\"struct hotshot_types::certificate::QuorumCertificate\">QuorumCertificate</a>&lt;TYPES, <a class=\"struct\" href=\"hotshot_types/data/struct.SequencingLeaf.html\" title=\"struct hotshot_types::data::SequencingLeaf\">SequencingLeaf</a>&lt;TYPES&gt;&gt;, Commitment = <a class=\"struct\" href=\"hotshot_types/data/struct.SequencingLeaf.html\" title=\"struct hotshot_types::data::SequencingLeaf\">SequencingLeaf</a>&lt;TYPES&gt;&gt;,\n    <a class=\"type\" href=\"hotshot_types/traits/node_implementation/type.CommitteeEx.html\" title=\"type hotshot_types::traits::node_implementation::CommitteeEx\">CommitteeEx</a>&lt;TYPES, I&gt;: <a class=\"trait\" href=\"hotshot_types/traits/election/trait.ConsensusExchange.html\" title=\"trait hotshot_types::traits::election::ConsensusExchange\">ConsensusExchange</a>&lt;TYPES, <a class=\"struct\" href=\"hotshot_types/message/struct.Message.html\" title=\"struct hotshot_types::message::Message\">Message</a>&lt;TYPES, I&gt;, Certificate = <a class=\"struct\" href=\"hotshot_types/certificate/struct.DACertificate.html\" title=\"struct hotshot_types::certificate::DACertificate\">DACertificate</a>&lt;TYPES&gt;, Commitment = TYPES::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.BlockType\" title=\"type hotshot_types::traits::node_implementation::NodeType::BlockType\">BlockType</a>&gt;,</span>"],["impl&lt;TYPES: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>, I: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeImplementation.html\" title=\"trait hotshot_types::traits::node_implementation::NodeImplementation\">NodeImplementation</a>&lt;TYPES, Leaf = <a class=\"struct\" href=\"hotshot_types/data/struct.SequencingLeaf.html\" title=\"struct hotshot_types::data::SequencingLeaf\">SequencingLeaf</a>&lt;TYPES&gt;&gt;&gt; <a class=\"trait\" href=\"hotshot_task/task/trait.TS.html\" title=\"trait hotshot_task::task::TS\">TS</a> for <a class=\"struct\" href=\"hotshot_task_impls/consensus/struct.VoteCollectionTaskState.html\" title=\"struct hotshot_task_impls::consensus::VoteCollectionTaskState\">VoteCollectionTaskState</a>&lt;TYPES, I&gt;<span class=\"where fmt-newline\">where\n    <a class=\"type\" href=\"hotshot_types/traits/node_implementation/type.SequencingQuorumEx.html\" title=\"type hotshot_types::traits::node_implementation::SequencingQuorumEx\">SequencingQuorumEx</a>&lt;TYPES, I&gt;: <a class=\"trait\" href=\"hotshot_types/traits/election/trait.ConsensusExchange.html\" title=\"trait hotshot_types::traits::election::ConsensusExchange\">ConsensusExchange</a>&lt;TYPES, <a class=\"struct\" href=\"hotshot_types/message/struct.Message.html\" title=\"struct hotshot_types::message::Message\">Message</a>&lt;TYPES, I&gt;, Proposal = <a class=\"struct\" href=\"hotshot_types/data/struct.QuorumProposal.html\" title=\"struct hotshot_types::data::QuorumProposal\">QuorumProposal</a>&lt;TYPES, <a class=\"struct\" href=\"hotshot_types/data/struct.SequencingLeaf.html\" title=\"struct hotshot_types::data::SequencingLeaf\">SequencingLeaf</a>&lt;TYPES&gt;&gt;, Certificate = <a class=\"struct\" href=\"hotshot_types/certificate/struct.QuorumCertificate.html\" title=\"struct hotshot_types::certificate::QuorumCertificate\">QuorumCertificate</a>&lt;TYPES, <a class=\"struct\" href=\"hotshot_types/data/struct.SequencingLeaf.html\" title=\"struct hotshot_types::data::SequencingLeaf\">SequencingLeaf</a>&lt;TYPES&gt;&gt;, Commitment = <a class=\"struct\" href=\"hotshot_types/data/struct.SequencingLeaf.html\" title=\"struct hotshot_types::data::SequencingLeaf\">SequencingLeaf</a>&lt;TYPES&gt;&gt;,</span>"],["impl&lt;TYPES: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>, I: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeImplementation.html\" title=\"trait hotshot_types::traits::node_implementation::NodeImplementation\">NodeImplementation</a>&lt;TYPES, Leaf = <a class=\"struct\" href=\"hotshot_types/data/struct.SequencingLeaf.html\" title=\"struct hotshot_types::data::SequencingLeaf\">SequencingLeaf</a>&lt;TYPES&gt;, ConsensusMessage = <a class=\"struct\" href=\"hotshot_types/message/struct.SequencingMessage.html\" title=\"struct hotshot_types::message::SequencingMessage\">SequencingMessage</a>&lt;TYPES, I&gt;&gt;, A: <a class=\"trait\" href=\"hotshot_types/traits/consensus_api/trait.SequencingConsensusApi.html\" title=\"trait hotshot_types::traits::consensus_api::SequencingConsensusApi\">SequencingConsensusApi</a>&lt;TYPES, <a class=\"struct\" href=\"hotshot_types/data/struct.SequencingLeaf.html\" title=\"struct hotshot_types::data::SequencingLeaf\">SequencingLeaf</a>&lt;TYPES&gt;, I&gt; + 'static&gt; <a class=\"trait\" href=\"hotshot_task/task/trait.TS.html\" title=\"trait hotshot_task::task::TS\">TS</a> for <a class=\"struct\" href=\"hotshot_task_impls/view_sync/struct.ViewSyncReplicaTaskState.html\" title=\"struct hotshot_task_impls::view_sync::ViewSyncReplicaTaskState\">ViewSyncReplicaTaskState</a>&lt;TYPES, I, A&gt;<span class=\"where fmt-newline\">where\n    <a class=\"type\" href=\"hotshot_types/traits/node_implementation/type.ViewSyncEx.html\" title=\"type hotshot_types::traits::node_implementation::ViewSyncEx\">ViewSyncEx</a>&lt;TYPES, I&gt;: <a class=\"trait\" href=\"hotshot_types/traits/election/trait.ConsensusExchange.html\" title=\"trait hotshot_types::traits::election::ConsensusExchange\">ConsensusExchange</a>&lt;TYPES, <a class=\"struct\" href=\"hotshot_types/message/struct.Message.html\" title=\"struct hotshot_types::message::Message\">Message</a>&lt;TYPES, I&gt;, Proposal = <a class=\"enum\" href=\"hotshot_types/certificate/enum.ViewSyncCertificate.html\" title=\"enum hotshot_types::certificate::ViewSyncCertificate\">ViewSyncCertificate</a>&lt;TYPES&gt;, Certificate = <a class=\"enum\" href=\"hotshot_types/certificate/enum.ViewSyncCertificate.html\" title=\"enum hotshot_types::certificate::ViewSyncCertificate\">ViewSyncCertificate</a>&lt;TYPES&gt;, Commitment = <a class=\"struct\" href=\"hotshot_types/vote/struct.ViewSyncData.html\" title=\"struct hotshot_types::vote::ViewSyncData\">ViewSyncData</a>&lt;TYPES&gt;&gt;,</span>"],["impl&lt;TYPES: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>, I: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeImplementation.html\" title=\"trait hotshot_types::traits::node_implementation::NodeImplementation\">NodeImplementation</a>&lt;TYPES, Leaf = <a class=\"struct\" href=\"hotshot_types/data/struct.SequencingLeaf.html\" title=\"struct hotshot_types::data::SequencingLeaf\">SequencingLeaf</a>&lt;TYPES&gt;, ConsensusMessage = <a class=\"struct\" href=\"hotshot_types/message/struct.SequencingMessage.html\" title=\"struct hotshot_types::message::SequencingMessage\">SequencingMessage</a>&lt;TYPES, I&gt;&gt;, MEMBERSHIP: <a class=\"trait\" href=\"hotshot_types/traits/election/trait.Membership.html\" title=\"trait hotshot_types::traits::election::Membership\">Membership</a>&lt;TYPES&gt;, COMMCHANNEL: <a class=\"trait\" href=\"hotshot_types/traits/network/trait.CommunicationChannel.html\" title=\"trait hotshot_types::traits::network::CommunicationChannel\">CommunicationChannel</a>&lt;TYPES, <a class=\"struct\" href=\"hotshot_types/message/struct.Message.html\" title=\"struct hotshot_types::message::Message\">Message</a>&lt;TYPES, I&gt;, MEMBERSHIP&gt;&gt; <a class=\"trait\" href=\"hotshot_task/task/trait.TS.html\" title=\"trait hotshot_task::task::TS\">TS</a> for <a class=\"struct\" href=\"hotshot_task_impls/network/struct.NetworkEventTaskState.html\" title=\"struct hotshot_task_impls::network::NetworkEventTaskState\">NetworkEventTaskState</a>&lt;TYPES, I, MEMBERSHIP, COMMCHANNEL&gt;"],["impl&lt;TYPES: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>, I: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeImplementation.html\" title=\"trait hotshot_types::traits::node_implementation::NodeImplementation\">NodeImplementation</a>&lt;TYPES, Leaf = <a class=\"struct\" href=\"hotshot_types/data/struct.SequencingLeaf.html\" title=\"struct hotshot_types::data::SequencingLeaf\">SequencingLeaf</a>&lt;TYPES&gt;, ConsensusMessage = <a class=\"struct\" href=\"hotshot_types/message/struct.SequencingMessage.html\" title=\"struct hotshot_types::message::SequencingMessage\">SequencingMessage</a>&lt;TYPES, I&gt;&gt;, A: <a class=\"trait\" href=\"hotshot_types/traits/consensus_api/trait.SequencingConsensusApi.html\" title=\"trait hotshot_types::traits::consensus_api::SequencingConsensusApi\">SequencingConsensusApi</a>&lt;TYPES, <a class=\"struct\" href=\"hotshot_types/data/struct.SequencingLeaf.html\" title=\"struct hotshot_types::data::SequencingLeaf\">SequencingLeaf</a>&lt;TYPES&gt;, I&gt; + 'static + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"hotshot_task/task/trait.TS.html\" title=\"trait hotshot_task::task::TS\">TS</a> for <a class=\"struct\" href=\"hotshot_task_impls/view_sync/struct.ViewSyncTaskState.html\" title=\"struct hotshot_task_impls::view_sync::ViewSyncTaskState\">ViewSyncTaskState</a>&lt;TYPES, I, A&gt;<span class=\"where fmt-newline\">where\n    <a class=\"type\" href=\"hotshot_types/traits/node_implementation/type.ViewSyncEx.html\" title=\"type hotshot_types::traits::node_implementation::ViewSyncEx\">ViewSyncEx</a>&lt;TYPES, I&gt;: <a class=\"trait\" href=\"hotshot_types/traits/election/trait.ConsensusExchange.html\" title=\"trait hotshot_types::traits::election::ConsensusExchange\">ConsensusExchange</a>&lt;TYPES, <a class=\"struct\" href=\"hotshot_types/message/struct.Message.html\" title=\"struct hotshot_types::message::Message\">Message</a>&lt;TYPES, I&gt;, Proposal = <a class=\"enum\" href=\"hotshot_types/certificate/enum.ViewSyncCertificate.html\" title=\"enum hotshot_types::certificate::ViewSyncCertificate\">ViewSyncCertificate</a>&lt;TYPES&gt;, Certificate = <a class=\"enum\" href=\"hotshot_types/certificate/enum.ViewSyncCertificate.html\" title=\"enum hotshot_types::certificate::ViewSyncCertificate\">ViewSyncCertificate</a>&lt;TYPES&gt;, Commitment = <a class=\"struct\" href=\"hotshot_types/vote/struct.ViewSyncData.html\" title=\"struct hotshot_types::vote::ViewSyncData\">ViewSyncData</a>&lt;TYPES&gt;&gt;,</span>"],["impl&lt;TYPES: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>, I: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeImplementation.html\" title=\"trait hotshot_types::traits::node_implementation::NodeImplementation\">NodeImplementation</a>&lt;TYPES&gt;&gt; <a class=\"trait\" href=\"hotshot_task/task/trait.TS.html\" title=\"trait hotshot_task::task::TS\">TS</a> for <a class=\"struct\" href=\"hotshot_task_impls/harness/struct.TestHarnessState.html\" title=\"struct hotshot_task_impls::harness::TestHarnessState\">TestHarnessState</a>&lt;TYPES, I&gt;"],["impl&lt;TYPES: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>, I: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeImplementation.html\" title=\"trait hotshot_types::traits::node_implementation::NodeImplementation\">NodeImplementation</a>&lt;TYPES, Leaf = <a class=\"struct\" href=\"hotshot_types/data/struct.SequencingLeaf.html\" title=\"struct hotshot_types::data::SequencingLeaf\">SequencingLeaf</a>&lt;TYPES&gt;&gt;&gt; <a class=\"trait\" href=\"hotshot_task/task/trait.TS.html\" title=\"trait hotshot_task::task::TS\">TS</a> for <a class=\"struct\" href=\"hotshot_task_impls/da/struct.DAVoteCollectionTaskState.html\" title=\"struct hotshot_task_impls::da::DAVoteCollectionTaskState\">DAVoteCollectionTaskState</a>&lt;TYPES, I&gt;<span class=\"where fmt-newline\">where\n    <a class=\"type\" href=\"hotshot_types/traits/node_implementation/type.CommitteeEx.html\" title=\"type hotshot_types::traits::node_implementation::CommitteeEx\">CommitteeEx</a>&lt;TYPES, I&gt;: <a class=\"trait\" href=\"hotshot_types/traits/election/trait.ConsensusExchange.html\" title=\"trait hotshot_types::traits::election::ConsensusExchange\">ConsensusExchange</a>&lt;TYPES, <a class=\"struct\" href=\"hotshot_types/message/struct.Message.html\" title=\"struct hotshot_types::message::Message\">Message</a>&lt;TYPES, I&gt;, Certificate = <a class=\"struct\" href=\"hotshot_types/certificate/struct.DACertificate.html\" title=\"struct hotshot_types::certificate::DACertificate\">DACertificate</a>&lt;TYPES&gt;, Commitment = TYPES::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.BlockType\" title=\"type hotshot_types::traits::node_implementation::NodeType::BlockType\">BlockType</a>&gt;,</span>"]],
"hotshot_testing":[["impl&lt;TYPES: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>, I: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.TestableNodeImplementation.html\" title=\"trait hotshot_types::traits::node_implementation::TestableNodeImplementation\">TestableNodeImplementation</a>&lt;TYPES&gt;&gt; <a class=\"trait\" href=\"hotshot_task/task/trait.TS.html\" title=\"trait hotshot_task::task::TS\">TS</a> for <a class=\"struct\" href=\"hotshot_testing/txn_task/struct.TxnTask.html\" title=\"struct hotshot_testing::txn_task::TxnTask\">TxnTask</a>&lt;TYPES, I&gt;"],["impl&lt;TYPES: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>, I: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.TestableNodeImplementation.html\" title=\"trait hotshot_types::traits::node_implementation::TestableNodeImplementation\">TestableNodeImplementation</a>&lt;TYPES&gt;&gt; <a class=\"trait\" href=\"hotshot_task/task/trait.TS.html\" title=\"trait hotshot_task::task::TS\">TS</a> for <a class=\"struct\" href=\"hotshot_testing/completion_task/struct.CompletionTask.html\" title=\"struct hotshot_testing::completion_task::CompletionTask\">CompletionTask</a>&lt;TYPES, I&gt;"],["impl&lt;TYPES: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>, I: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.TestableNodeImplementation.html\" title=\"trait hotshot_types::traits::node_implementation::TestableNodeImplementation\">TestableNodeImplementation</a>&lt;TYPES&gt;&gt; <a class=\"trait\" href=\"hotshot_task/task/trait.TS.html\" title=\"trait hotshot_task::task::TS\">TS</a> for <a class=\"struct\" href=\"hotshot_testing/spinning_task/struct.SpinningTask.html\" title=\"struct hotshot_testing::spinning_task::SpinningTask\">SpinningTask</a>&lt;TYPES, I&gt;"],["impl&lt;TYPES: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>, I: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.TestableNodeImplementation.html\" title=\"trait hotshot_types::traits::node_implementation::TestableNodeImplementation\">TestableNodeImplementation</a>&lt;TYPES&gt;&gt; <a class=\"trait\" href=\"hotshot_task/task/trait.TS.html\" title=\"trait hotshot_task::task::TS\">TS</a> for <a class=\"struct\" href=\"hotshot_testing/overall_safety_task/struct.OverallSafetyTask.html\" title=\"struct hotshot_testing::overall_safety_task::OverallSafetyTask\">OverallSafetyTask</a>&lt;TYPES, I&gt;"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()