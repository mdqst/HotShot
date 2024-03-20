(function() {var type_impls = {
"hotshot_testing":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ConsensusTaskState%3CTYPES,+I,+A%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hotshot_task_impls/consensus.rs.html#146-147\">source</a><a href=\"#impl-ConsensusTaskState%3CTYPES,+I,+A%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;TYPES, I, A&gt; <a class=\"struct\" href=\"hotshot_task_impls/consensus/struct.ConsensusTaskState.html\" title=\"struct hotshot_task_impls::consensus::ConsensusTaskState\">ConsensusTaskState</a>&lt;TYPES, I, A&gt;<div class=\"where\">where\n    TYPES: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>,\n    I: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeImplementation.html\" title=\"trait hotshot_types::traits::node_implementation::NodeImplementation\">NodeImplementation</a>&lt;TYPES&gt;,\n    A: <a class=\"trait\" href=\"hotshot_types/traits/consensus_api/trait.ConsensusApi.html\" title=\"trait hotshot_types::traits::consensus_api::ConsensusApi\">ConsensusApi</a>&lt;TYPES, I&gt; + 'static,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.handle\" class=\"method\"><a class=\"src rightside\" href=\"src/hotshot_task_impls/consensus.rs.html#358\">source</a><h4 class=\"code-header\">pub async fn <a href=\"hotshot_task_impls/consensus/struct.ConsensusTaskState.html#tymethod.handle\" class=\"fn\">handle</a>(\n    &amp;mut self,\n    event: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;<a class=\"enum\" href=\"hotshot_task_impls/events/enum.HotShotEvent.html\" title=\"enum hotshot_task_impls::events::HotShotEvent\">HotShotEvent</a>&lt;TYPES&gt;&gt;,\n    event_stream: Sender&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;<a class=\"enum\" href=\"hotshot_task_impls/events/enum.HotShotEvent.html\" title=\"enum hotshot_task_impls::events::HotShotEvent\">HotShotEvent</a>&lt;TYPES&gt;&gt;&gt;\n)</h4></section></summary><div class=\"docblock\"><p>Handles a consensus event received on the event stream</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.publish_proposal_if_able\" class=\"method\"><a class=\"src rightside\" href=\"src/hotshot_task_impls/consensus.rs.html#1255-1260\">source</a><h4 class=\"code-header\">pub async fn <a href=\"hotshot_task_impls/consensus/struct.ConsensusTaskState.html#tymethod.publish_proposal_if_able\" class=\"fn\">publish_proposal_if_able</a>(\n    &amp;mut self,\n    view: &lt;TYPES as <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>&gt;::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.Time\" title=\"type hotshot_types::traits::node_implementation::NodeType::Time\">Time</a>,\n    timeout_certificate: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.76.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"hotshot_types/simple_certificate/struct.SimpleCertificate.html\" title=\"struct hotshot_types::simple_certificate::SimpleCertificate\">SimpleCertificate</a>&lt;TYPES, <a class=\"struct\" href=\"hotshot_types/simple_vote/struct.TimeoutData.html\" title=\"struct hotshot_types::simple_vote::TimeoutData\">TimeoutData</a>&lt;TYPES&gt;, <a class=\"struct\" href=\"hotshot_types/simple_certificate/struct.SuccessThreshold.html\" title=\"struct hotshot_types::simple_certificate::SuccessThreshold\">SuccessThreshold</a>&gt;&gt;,\n    event_stream: &amp;Sender&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;<a class=\"enum\" href=\"hotshot_task_impls/events/enum.HotShotEvent.html\" title=\"enum hotshot_task_impls::events::HotShotEvent\">HotShotEvent</a>&lt;TYPES&gt;&gt;&gt;\n) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Sends a proposal if possible from the high qc we have</p>\n</div></details></div></details>",0,"hotshot_testing::predicates::ConsensusTaskTestState"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-CreateTaskState%3CTYPES,+I%3E-for-ConsensusTaskState%3CTYPES,+I,+SystemContextHandle%3CTYPES,+I%3E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hotshot/tasks/task_state.rs.html#174-175\">source</a><a href=\"#impl-CreateTaskState%3CTYPES,+I%3E-for-ConsensusTaskState%3CTYPES,+I,+SystemContextHandle%3CTYPES,+I%3E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;TYPES, I&gt; <a class=\"trait\" href=\"hotshot/tasks/task_state/trait.CreateTaskState.html\" title=\"trait hotshot::tasks::task_state::CreateTaskState\">CreateTaskState</a>&lt;TYPES, I&gt; for <a class=\"struct\" href=\"hotshot_task_impls/consensus/struct.ConsensusTaskState.html\" title=\"struct hotshot_task_impls::consensus::ConsensusTaskState\">ConsensusTaskState</a>&lt;TYPES, I, <a class=\"struct\" href=\"hotshot/types/handle/struct.SystemContextHandle.html\" title=\"struct hotshot::types::handle::SystemContextHandle\">SystemContextHandle</a>&lt;TYPES, I&gt;&gt;<div class=\"where\">where\n    TYPES: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>,\n    I: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeImplementation.html\" title=\"trait hotshot_types::traits::node_implementation::NodeImplementation\">NodeImplementation</a>&lt;TYPES&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.create_from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot/tasks/task_state.rs.html#177-178\">source</a><a href=\"#method.create_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot/tasks/task_state/trait.CreateTaskState.html#tymethod.create_from\" class=\"fn\">create_from</a>&lt;'life0, 'async_trait&gt;(\n    handle: &amp;'life0 <a class=\"struct\" href=\"hotshot/types/handle/struct.SystemContextHandle.html\" title=\"struct hotshot::types::handle::SystemContextHandle\">SystemContextHandle</a>&lt;TYPES, I&gt;\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"struct\" href=\"hotshot_task_impls/consensus/struct.ConsensusTaskState.html\" title=\"struct hotshot_task_impls::consensus::ConsensusTaskState\">ConsensusTaskState</a>&lt;TYPES, I, <a class=\"struct\" href=\"hotshot/types/handle/struct.SystemContextHandle.html\" title=\"struct hotshot::types::handle::SystemContextHandle\">SystemContextHandle</a>&lt;TYPES, I&gt;&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'async_trait&gt;&gt;<div class=\"where\">where\n    'life0: 'async_trait,</div></h4></section></summary><div class='docblock'>Function to create the task state from a given <code>SystemContextHandle</code>.</div></details></div></details>","CreateTaskState<TYPES, I>","hotshot_testing::predicates::ConsensusTaskTestState"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TaskState-for-ConsensusTaskState%3CTYPES,+I,+A%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hotshot_task_impls/consensus.rs.html#1402-1403\">source</a><a href=\"#impl-TaskState-for-ConsensusTaskState%3CTYPES,+I,+A%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;TYPES, I, A&gt; <a class=\"trait\" href=\"hotshot_task/task/trait.TaskState.html\" title=\"trait hotshot_task::task::TaskState\">TaskState</a> for <a class=\"struct\" href=\"hotshot_task_impls/consensus/struct.ConsensusTaskState.html\" title=\"struct hotshot_task_impls::consensus::ConsensusTaskState\">ConsensusTaskState</a>&lt;TYPES, I, A&gt;<div class=\"where\">where\n    TYPES: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>,\n    I: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeImplementation.html\" title=\"trait hotshot_types::traits::node_implementation::NodeImplementation\">NodeImplementation</a>&lt;TYPES&gt;,\n    A: <a class=\"trait\" href=\"hotshot_types/traits/consensus_api/trait.ConsensusApi.html\" title=\"trait hotshot_types::traits::consensus_api::ConsensusApi\">ConsensusApi</a>&lt;TYPES, I&gt; + 'static,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Event\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Event\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"hotshot_task/task/trait.TaskState.html#associatedtype.Event\" class=\"associatedtype\">Event</a> = <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;<a class=\"enum\" href=\"hotshot_task_impls/events/enum.HotShotEvent.html\" title=\"enum hotshot_task_impls::events::HotShotEvent\">HotShotEvent</a>&lt;TYPES&gt;&gt;</h4></section></summary><div class='docblock'>Type of event sent and received by the task</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Output\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Output\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"hotshot_task/task/trait.TaskState.html#associatedtype.Output\" class=\"associatedtype\">Output</a> = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.unit.html\">()</a></h4></section></summary><div class='docblock'>The result returned when this task compeltes</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.filter\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot_task_impls/consensus.rs.html#1407\">source</a><a href=\"#method.filter\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_task/task/trait.TaskState.html#method.filter\" class=\"fn\">filter</a>(&amp;self, event: &amp;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;<a class=\"enum\" href=\"hotshot_task_impls/events/enum.HotShotEvent.html\" title=\"enum hotshot_task_impls::events::HotShotEvent\">HotShotEvent</a>&lt;TYPES&gt;&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Return true if the event should be filtered</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.handle_event\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot_task_impls/consensus.rs.html#1424-1426\">source</a><a href=\"#method.handle_event\" class=\"anchor\">§</a><h4 class=\"code-header\">async fn <a href=\"hotshot_task/task/trait.TaskState.html#tymethod.handle_event\" class=\"fn\">handle_event</a>(\n    event: &lt;<a class=\"struct\" href=\"hotshot_task_impls/consensus/struct.ConsensusTaskState.html\" title=\"struct hotshot_task_impls::consensus::ConsensusTaskState\">ConsensusTaskState</a>&lt;TYPES, I, A&gt; as <a class=\"trait\" href=\"hotshot_task/task/trait.TaskState.html\" title=\"trait hotshot_task::task::TaskState\">TaskState</a>&gt;::<a class=\"associatedtype\" href=\"hotshot_task/task/trait.TaskState.html#associatedtype.Event\" title=\"type hotshot_task::task::TaskState::Event\">Event</a>,\n    task: &amp;mut <a class=\"struct\" href=\"hotshot_task/task/struct.Task.html\" title=\"struct hotshot_task::task::Task\">Task</a>&lt;<a class=\"struct\" href=\"hotshot_task_impls/consensus/struct.ConsensusTaskState.html\" title=\"struct hotshot_task_impls::consensus::ConsensusTaskState\">ConsensusTaskState</a>&lt;TYPES, I, A&gt;&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.76.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.unit.html\">()</a>&gt;<div class=\"where\">where\n    <a class=\"struct\" href=\"hotshot_task_impls/consensus/struct.ConsensusTaskState.html\" title=\"struct hotshot_task_impls::consensus::ConsensusTaskState\">ConsensusTaskState</a>&lt;TYPES, I, A&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Handle event and update state.  Return true if the task is finished\nfalse otherwise.  The handler can access the state through <code>Task::state_mut</code></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.should_shutdown\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot_task_impls/consensus.rs.html#1433\">source</a><a href=\"#method.should_shutdown\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_task/task/trait.TaskState.html#tymethod.should_shutdown\" class=\"fn\">should_shutdown</a>(\n    event: &amp;&lt;<a class=\"struct\" href=\"hotshot_task_impls/consensus/struct.ConsensusTaskState.html\" title=\"struct hotshot_task_impls::consensus::ConsensusTaskState\">ConsensusTaskState</a>&lt;TYPES, I, A&gt; as <a class=\"trait\" href=\"hotshot_task/task/trait.TaskState.html\" title=\"trait hotshot_task::task::TaskState\">TaskState</a>&gt;::<a class=\"associatedtype\" href=\"hotshot_task/task/trait.TaskState.html#associatedtype.Event\" title=\"type hotshot_task::task::TaskState::Event\">Event</a>\n) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Return true if the event should shut the task down</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.handle_result\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot_task/task.rs.html#52\">source</a><a href=\"#method.handle_result\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_task/task/trait.TaskState.html#method.handle_result\" class=\"fn\">handle_result</a>(&amp;self, _res: &amp;Self::<a class=\"associatedtype\" href=\"hotshot_task/task/trait.TaskState.html#associatedtype.Output\" title=\"type hotshot_task::task::TaskState::Output\">Output</a>) -&gt; impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.unit.html\">()</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a></h4></section></summary><div class='docblock'>Do something with the result of the task before it shuts down</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.shutdown\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot_task/task.rs.html#58\">source</a><a href=\"#method.shutdown\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_task/task/trait.TaskState.html#method.shutdown\" class=\"fn\">shutdown</a>(&amp;mut self) -&gt; impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.unit.html\">()</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a></h4></section></summary><div class='docblock'>Handle anything before the task is completely shutdown</div></details></div></details>","TaskState","hotshot_testing::predicates::ConsensusTaskTestState"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()