(function() {var type_impls = {
"all_combined":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RunDA%3CTYPES,+CombinedNetworks%3CTYPES%3E,+CombinedNetworks%3CTYPES%3E,+NODE%3E-for-CombinedDARun%3CTYPES%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/all_combined/infra/mod.rs.html#646-725\">source</a><a href=\"#impl-RunDA%3CTYPES,+CombinedNetworks%3CTYPES%3E,+CombinedNetworks%3CTYPES%3E,+NODE%3E-for-CombinedDARun%3CTYPES%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;TYPES: NodeType&lt;Transaction = TestTransaction, BlockPayload = TestBlockPayload, BlockHeader = TestBlockHeader, InstanceState = TestInstanceState&gt;, NODE: NodeImplementation&lt;TYPES, Storage = <a class=\"struct\" href=\"hotshot/traits/storage/memory_storage/struct.MemoryStorage.html\" title=\"struct hotshot::traits::storage::memory_storage::MemoryStorage\">MemoryStorage</a>&lt;TYPES&gt;, QuorumNetwork = <a class=\"struct\" href=\"hotshot/traits/networking/combined_network/struct.CombinedNetworks.html\" title=\"struct hotshot::traits::networking::combined_network::CombinedNetworks\">CombinedNetworks</a>&lt;TYPES&gt;, CommitteeNetwork = <a class=\"struct\" href=\"hotshot/traits/networking/combined_network/struct.CombinedNetworks.html\" title=\"struct hotshot::traits::networking::combined_network::CombinedNetworks\">CombinedNetworks</a>&lt;TYPES&gt;&gt;&gt; <a class=\"trait\" href=\"all_combined/infra/trait.RunDA.html\" title=\"trait all_combined::infra::RunDA\">RunDA</a>&lt;TYPES, <a class=\"struct\" href=\"hotshot/traits/networking/combined_network/struct.CombinedNetworks.html\" title=\"struct hotshot::traits::networking::combined_network::CombinedNetworks\">CombinedNetworks</a>&lt;TYPES&gt;, <a class=\"struct\" href=\"hotshot/traits/networking/combined_network/struct.CombinedNetworks.html\" title=\"struct hotshot::traits::networking::combined_network::CombinedNetworks\">CombinedNetworks</a>&lt;TYPES&gt;, NODE&gt; for <a class=\"struct\" href=\"all_combined/infra/struct.CombinedDARun.html\" title=\"struct all_combined::infra::CombinedDARun\">CombinedDARun</a>&lt;TYPES&gt;<div class=\"where\">where\n    &lt;TYPES as NodeType&gt;::ValidatedState: TestableState,\n    &lt;TYPES as NodeType&gt;::BlockPayload: TestableBlock,\n    Leaf&lt;TYPES&gt;: TestableLeaf,\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.initialize_networking\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/all_combined/infra/mod.rs.html#666-712\">source</a><a href=\"#method.initialize_networking\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"all_combined/infra/trait.RunDA.html#tymethod.initialize_networking\" class=\"fn\">initialize_networking</a>&lt;'async_trait&gt;(\n    config: <a class=\"struct\" href=\"hotshot_orchestrator/config/struct.NetworkConfig.html\" title=\"struct hotshot_orchestrator::config::NetworkConfig\">NetworkConfig</a>&lt;TYPES::SignatureKey, TYPES::ElectionConfigType&gt;\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"struct\" href=\"all_combined/infra/struct.CombinedDARun.html\" title=\"struct all_combined::infra::CombinedDARun\">CombinedDARun</a>&lt;TYPES&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'async_trait&gt;&gt;</h4></section></summary><div class='docblock'>Initializes networking, returns self</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_da_channel\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/all_combined/infra/mod.rs.html#714-716\">source</a><a href=\"#method.get_da_channel\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"all_combined/infra/trait.RunDA.html#tymethod.get_da_channel\" class=\"fn\">get_da_channel</a>(&amp;self) -&gt; <a class=\"struct\" href=\"hotshot/traits/networking/combined_network/struct.CombinedNetworks.html\" title=\"struct hotshot::traits::networking::combined_network::CombinedNetworks\">CombinedNetworks</a>&lt;TYPES&gt;</h4></section></summary><div class='docblock'>Returns the da network for this run</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_quorum_channel\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/all_combined/infra/mod.rs.html#718-720\">source</a><a href=\"#method.get_quorum_channel\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"all_combined/infra/trait.RunDA.html#tymethod.get_quorum_channel\" class=\"fn\">get_quorum_channel</a>(&amp;self) -&gt; <a class=\"struct\" href=\"hotshot/traits/networking/combined_network/struct.CombinedNetworks.html\" title=\"struct hotshot::traits::networking::combined_network::CombinedNetworks\">CombinedNetworks</a>&lt;TYPES&gt;</h4></section></summary><div class='docblock'>Returns the quorum network for this run</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_config\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/all_combined/infra/mod.rs.html#722-724\">source</a><a href=\"#method.get_config\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"all_combined/infra/trait.RunDA.html#tymethod.get_config\" class=\"fn\">get_config</a>(\n    &amp;self\n) -&gt; <a class=\"struct\" href=\"hotshot_orchestrator/config/struct.NetworkConfig.html\" title=\"struct hotshot_orchestrator::config::NetworkConfig\">NetworkConfig</a>&lt;TYPES::SignatureKey, TYPES::ElectionConfigType&gt;</h4></section></summary><div class='docblock'>Returns the config for this run</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.initialize_state_and_hotshot\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/all_combined/infra/mod.rs.html#322-383\">source</a><a href=\"#method.initialize_state_and_hotshot\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"all_combined/infra/trait.RunDA.html#method.initialize_state_and_hotshot\" class=\"fn\">initialize_state_and_hotshot</a>&lt;'life0, 'async_trait&gt;(\n    &amp;'life0 self\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"struct\" href=\"hotshot/types/handle/struct.SystemContextHandle.html\" title=\"struct hotshot::types::handle::SystemContextHandle\">SystemContextHandle</a>&lt;TYPES, NODE&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'async_trait&gt;&gt;<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'async_trait,\n    'life0: 'async_trait,</div></h4></section></summary><div class='docblock'>Initializes the genesis state and HotShot instance; does not start HotShot consensus <a href=\"all_combined/infra/trait.RunDA.html#method.initialize_state_and_hotshot\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.run_hotshot\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/all_combined/infra/mod.rs.html#386-477\">source</a><a href=\"#method.run_hotshot\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"all_combined/infra/trait.RunDA.html#method.run_hotshot\" class=\"fn\">run_hotshot</a>&lt;'life0, 'life1, 'async_trait&gt;(\n    &amp;'life0 self,\n    context: <a class=\"struct\" href=\"hotshot/types/handle/struct.SystemContextHandle.html\" title=\"struct hotshot::types::handle::SystemContextHandle\">SystemContextHandle</a>&lt;TYPES, NODE&gt;,\n    transactions: &amp;'life1 mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;TestTransaction&gt;,\n    transactions_to_send_per_round: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.u64.html\">u64</a>\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.unit.html\">()</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'async_trait&gt;&gt;<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'async_trait,\n    'life0: 'async_trait,\n    'life1: 'async_trait,</div></h4></section></summary><div class='docblock'>Starts HotShot consensus, returns when consensus has finished</div></details></div></details>","RunDA<TYPES, CombinedNetworks<TYPES>, CombinedNetworks<TYPES>, NODE>","all_combined::types::ThisRun"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()