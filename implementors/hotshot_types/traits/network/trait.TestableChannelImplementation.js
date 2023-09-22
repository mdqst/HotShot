(function() {var implementors = {
"hotshot":[["impl&lt;TYPES: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>, I: <a class=\"trait\" href=\"hotshot/traits/trait.NodeImplementation.html\" title=\"trait hotshot::traits::NodeImplementation\">NodeImplementation</a>&lt;TYPES&gt;, MEMBERSHIP: <a class=\"trait\" href=\"hotshot_types/traits/election/trait.Membership.html\" title=\"trait hotshot_types::traits::election::Membership\">Membership</a>&lt;TYPES&gt;&gt; <a class=\"trait\" href=\"hotshot_types/traits/network/trait.TestableChannelImplementation.html\" title=\"trait hotshot_types::traits::network::TestableChannelImplementation\">TestableChannelImplementation</a>&lt;TYPES, <a class=\"struct\" href=\"hotshot/types/struct.Message.html\" title=\"struct hotshot::types::Message\">Message</a>&lt;TYPES, I&gt;, MEMBERSHIP, <a class=\"struct\" href=\"hotshot/traits/networking/web_server_network/struct.WebServerNetwork.html\" title=\"struct hotshot::traits::networking::web_server_network::WebServerNetwork\">WebServerNetwork</a>&lt;<a class=\"struct\" href=\"hotshot/types/struct.Message.html\" title=\"struct hotshot::types::Message\">Message</a>&lt;TYPES, I&gt;, &lt;TYPES as <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>&gt;::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.SignatureKey\" title=\"type hotshot_types::traits::node_implementation::NodeType::SignatureKey\">SignatureKey</a>, TYPES&gt;&gt; for <a class=\"struct\" href=\"hotshot/traits/networking/web_server_network/struct.WebCommChannel.html\" title=\"struct hotshot::traits::networking::web_server_network::WebCommChannel\">WebCommChannel</a>&lt;TYPES, I, MEMBERSHIP&gt;"],["impl&lt;TYPES: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>, I: <a class=\"trait\" href=\"hotshot/traits/trait.NodeImplementation.html\" title=\"trait hotshot::traits::NodeImplementation\">NodeImplementation</a>&lt;TYPES&gt;, MEMBERSHIP: <a class=\"trait\" href=\"hotshot_types/traits/election/trait.Membership.html\" title=\"trait hotshot_types::traits::election::Membership\">Membership</a>&lt;TYPES&gt;&gt; <a class=\"trait\" href=\"hotshot_types/traits/network/trait.TestableChannelImplementation.html\" title=\"trait hotshot_types::traits::network::TestableChannelImplementation\">TestableChannelImplementation</a>&lt;TYPES, <a class=\"struct\" href=\"hotshot/types/struct.Message.html\" title=\"struct hotshot::types::Message\">Message</a>&lt;TYPES, I&gt;, MEMBERSHIP, <a class=\"struct\" href=\"hotshot/traits/networking/web_server_libp2p_fallback/struct.CombinedNetworks.html\" title=\"struct hotshot::traits::networking::web_server_libp2p_fallback::CombinedNetworks\">CombinedNetworks</a>&lt;TYPES, I, MEMBERSHIP&gt;&gt; for <a class=\"struct\" href=\"hotshot/traits/networking/web_server_libp2p_fallback/struct.WebServerWithFallbackCommChannel.html\" title=\"struct hotshot::traits::networking::web_server_libp2p_fallback::WebServerWithFallbackCommChannel\">WebServerWithFallbackCommChannel</a>&lt;TYPES, I, MEMBERSHIP&gt;"],["impl&lt;TYPES: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>, I: <a class=\"trait\" href=\"hotshot/traits/trait.NodeImplementation.html\" title=\"trait hotshot::traits::NodeImplementation\">NodeImplementation</a>&lt;TYPES&gt;, MEMBERSHIP: <a class=\"trait\" href=\"hotshot_types/traits/election/trait.Membership.html\" title=\"trait hotshot_types::traits::election::Membership\">Membership</a>&lt;TYPES&gt;&gt; <a class=\"trait\" href=\"hotshot_types/traits/network/trait.TestableChannelImplementation.html\" title=\"trait hotshot_types::traits::network::TestableChannelImplementation\">TestableChannelImplementation</a>&lt;TYPES, <a class=\"struct\" href=\"hotshot/types/struct.Message.html\" title=\"struct hotshot::types::Message\">Message</a>&lt;TYPES, I&gt;, MEMBERSHIP, <a class=\"struct\" href=\"hotshot/traits/networking/memory_network/struct.MemoryNetwork.html\" title=\"struct hotshot::traits::networking::memory_network::MemoryNetwork\">MemoryNetwork</a>&lt;<a class=\"struct\" href=\"hotshot/types/struct.Message.html\" title=\"struct hotshot::types::Message\">Message</a>&lt;TYPES, I&gt;, &lt;TYPES as <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>&gt;::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.SignatureKey\" title=\"type hotshot_types::traits::node_implementation::NodeType::SignatureKey\">SignatureKey</a>&gt;&gt; for <a class=\"struct\" href=\"hotshot/traits/networking/memory_network/struct.MemoryCommChannel.html\" title=\"struct hotshot::traits::networking::memory_network::MemoryCommChannel\">MemoryCommChannel</a>&lt;TYPES, I, MEMBERSHIP&gt;"],["impl&lt;TYPES: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>, I: <a class=\"trait\" href=\"hotshot/traits/trait.NodeImplementation.html\" title=\"trait hotshot::traits::NodeImplementation\">NodeImplementation</a>&lt;TYPES&gt;, MEMBERSHIP: <a class=\"trait\" href=\"hotshot_types/traits/election/trait.Membership.html\" title=\"trait hotshot_types::traits::election::Membership\">Membership</a>&lt;TYPES&gt;&gt; <a class=\"trait\" href=\"hotshot_types/traits/network/trait.TestableChannelImplementation.html\" title=\"trait hotshot_types::traits::network::TestableChannelImplementation\">TestableChannelImplementation</a>&lt;TYPES, <a class=\"struct\" href=\"hotshot/types/struct.Message.html\" title=\"struct hotshot::types::Message\">Message</a>&lt;TYPES, I&gt;, MEMBERSHIP, <a class=\"struct\" href=\"hotshot/traits/networking/libp2p_network/struct.Libp2pNetwork.html\" title=\"struct hotshot::traits::networking::libp2p_network::Libp2pNetwork\">Libp2pNetwork</a>&lt;<a class=\"struct\" href=\"hotshot/types/struct.Message.html\" title=\"struct hotshot::types::Message\">Message</a>&lt;TYPES, I&gt;, &lt;TYPES as <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>&gt;::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.SignatureKey\" title=\"type hotshot_types::traits::node_implementation::NodeType::SignatureKey\">SignatureKey</a>&gt;&gt; for <a class=\"struct\" href=\"hotshot/traits/networking/libp2p_network/struct.Libp2pCommChannel.html\" title=\"struct hotshot::traits::networking::libp2p_network::Libp2pCommChannel\">Libp2pCommChannel</a>&lt;TYPES, I, MEMBERSHIP&gt;"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()