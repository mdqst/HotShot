(function() {var implementors = {
"hotshot":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"hotshot/demos/dentry/struct.Subtraction.html\" title=\"struct hotshot::demos::dentry::Subtraction\">Subtraction</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"hotshot/demos/dentry/struct.Addition.html\" title=\"struct hotshot::demos::dentry::Addition\">Addition</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"hotshot/demos/dentry/struct.DEntryTransaction.html\" title=\"struct hotshot::demos::dentry::DEntryTransaction\">DEntryTransaction</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"hotshot/demos/dentry/struct.DEntryState.html\" title=\"struct hotshot::demos::dentry::DEntryState\">DEntryState</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"hotshot/demos/dentry/struct.DEntryGenesisBlock.html\" title=\"struct hotshot::demos::dentry::DEntryGenesisBlock\">DEntryGenesisBlock</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"hotshot/demos/dentry/struct.DEntryNormalBlock.html\" title=\"struct hotshot::demos::dentry::DEntryNormalBlock\">DEntryNormalBlock</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"enum\" href=\"hotshot/demos/dentry/enum.DEntryBlock.html\" title=\"enum hotshot::demos::dentry::DEntryBlock\">DEntryBlock</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"hotshot/demos/dentry/struct.DEntryTypes.html\" title=\"struct hotshot::demos::dentry::DEntryTypes\">DEntryTypes</a>"],["impl&lt;K:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"hotshot/types/trait.SignatureKey.html\" title=\"trait hotshot::types::SignatureKey\">SignatureKey</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"hotshot/traits/election/static_committee/struct.StaticVoteToken.html\" title=\"struct hotshot::traits::election::static_committee::StaticVoteToken\">StaticVoteToken</a>&lt;K&gt;"],["impl&lt;SIGSCHEME&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"hotshot/traits/election/vrf/struct.JfPubKey.html\" title=\"struct hotshot::traits::election::vrf::JfPubKey\">JfPubKey</a>&lt;SIGSCHEME&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;SIGSCHEME: SignatureScheme&lt;PublicParameter = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.67.0/std/primitive.unit.html\">()</a>, MessageUnit = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.67.0/std/primitive.u8.html\">u8</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;SIGSCHEME::VerificationKey: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.152/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.152/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;SIGSCHEME::SigningKey: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.152/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.152/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;SIGSCHEME::Signature: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + for&lt;'a&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.152/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'a&gt; + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.152/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,</span>"],["impl&lt;PUBKEY, PROOF&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"hotshot/traits/election/vrf/struct.VRFVoteToken.html\" title=\"struct hotshot::traits::election::vrf::VRFVoteToken\">VRFVoteToken</a>&lt;PUBKEY, PROOF&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;PUBKEY: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.152/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;PROOF: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.152/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,</span>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"hotshot/traits/election/vrf/struct.BinomialQuery.html\" title=\"struct hotshot::traits::election::vrf::BinomialQuery\">BinomialQuery</a>"]],
"libp2p_networking":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"libp2p_networking/network/behaviours/exponential_backoff/struct.ExponentialBackoff.html\" title=\"struct libp2p_networking::network::behaviours::exponential_backoff::ExponentialBackoff\">ExponentialBackoff</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"enum\" href=\"libp2p_networking/network/behaviours/dht/enum.DHTProgress.html\" title=\"enum libp2p_networking::network::behaviours::dht::DHTProgress\">DHTProgress</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()