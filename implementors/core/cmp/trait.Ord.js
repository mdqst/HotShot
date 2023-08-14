(function() {var implementors = {
"hotshot":[["impl&lt;SIGSCHEME&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.1/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"hotshot/traits/election/vrf/struct.JfPubKey.html\" title=\"struct hotshot::traits::election::vrf::JfPubKey\">JfPubKey</a>&lt;SIGSCHEME&gt;<span class=\"where fmt-newline\">where\n    SIGSCHEME: SignatureScheme&lt;PublicParameter = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.71.1/std/primitive.unit.html\">()</a>, MessageUnit = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.71.1/std/primitive.u8.html\">u8</a>&gt;,\n    SIGSCHEME::VerificationKey: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + for&lt;'a&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.183/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'a&gt; + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.183/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.1/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.1/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,\n    SIGSCHEME::SigningKey: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + for&lt;'a&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.183/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'a&gt; + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.183/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.1/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.1/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,\n    SIGSCHEME::Signature: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + for&lt;'a&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.183/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'a&gt; + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.183/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,</span>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.1/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"hotshot/demos/vdemo/struct.VDemoTypes.html\" title=\"struct hotshot::demos::vdemo::VDemoTypes\">VDemoTypes</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.1/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"hotshot/demos/sdemo/struct.SDemoTypes.html\" title=\"struct hotshot::demos::sdemo::SDemoTypes\">SDemoTypes</a>"]],
"hotshot_task":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.1/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"enum\" href=\"hotshot_task/task_state/enum.TaskStatus.html\" title=\"enum hotshot_task::task_state::TaskStatus\">TaskStatus</a>"]],
"hotshot_testing":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.1/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"hotshot_testing/node_types/struct.SequencingTestTypes.html\" title=\"struct hotshot_testing::node_types::SequencingTestTypes\">SequencingTestTypes</a>"]],
"hotshot_types":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.1/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"hotshot_types/data/struct.ViewNumber.html\" title=\"struct hotshot_types::data::ViewNumber\">ViewNumber</a>"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.1/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> + <a class=\"trait\" href=\"hotshot_types/traits/block_contents/trait.Block.html\" title=\"trait hotshot_types::traits::block_contents::Block\">Block</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.1/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"hotshot_types/traits/block_contents/struct.BlockCommitment.html\" title=\"struct hotshot_types::traits::block_contents::BlockCommitment\">BlockCommitment</a>&lt;T&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.1/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"hotshot_types/traits/signature_key/struct.EncodedSignature.html\" title=\"struct hotshot_types::traits::signature_key::EncodedSignature\">EncodedSignature</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.1/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"hotshot_types/traits/signature_key/struct.EncodedPublicKey.html\" title=\"struct hotshot_types::traits::signature_key::EncodedPublicKey\">EncodedPublicKey</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.1/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"hotshot_types/traits/signature_key/ed25519/ed25519_priv/struct.Ed25519Priv.html\" title=\"struct hotshot_types::traits::signature_key::ed25519::ed25519_priv::Ed25519Priv\">Ed25519Priv</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.1/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"hotshot_types/traits/signature_key/ed25519/ed25519_pub/struct.Ed25519Pub.html\" title=\"struct hotshot_types::traits::signature_key::ed25519::ed25519_pub::Ed25519Pub\">Ed25519Pub</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()