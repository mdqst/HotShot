(function() {var type_impls = {
"hotshot_types":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-SchnorrSignatureScheme%3CP%3E\" class=\"impl\"><a href=\"#impl-PartialEq-for-SchnorrSignatureScheme%3CP%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for SchnorrSignatureScheme&lt;P&gt;<span class=\"where fmt-newline\">where\n    P: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;SchnorrSignatureScheme&lt;P&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/cmp.rs.html#239\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","hotshot_types::light_client::StateSignatureScheme"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-SignatureScheme-for-SchnorrSignatureScheme%3CP%3E\" class=\"impl\"><a href=\"#impl-SignatureScheme-for-SchnorrSignatureScheme%3CP%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F, P&gt; SignatureScheme for SchnorrSignatureScheme&lt;P&gt;<span class=\"where fmt-newline\">where\n    F: RescueParameter,\n    P: TECurveConfig&lt;BaseField = F&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.SigningKey\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.SigningKey\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">SigningKey</a> = SignKey&lt;&lt;P as CurveConfig&gt;::ScalarField&gt;</h4></section></summary><div class=\"docblock\"><p>Signing key.</p>\n</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.VerificationKey\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.VerificationKey\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">VerificationKey</a> = VerKey&lt;P&gt;</h4></section></summary><div class=\"docblock\"><p>Verification key</p>\n</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.PublicParameter\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.PublicParameter\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">PublicParameter</a> = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a></h4></section></summary><div class=\"docblock\"><p>Public Parameter</p>\n</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Signature\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Signature\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Signature</a> = Signature&lt;P&gt;</h4></section></summary><div class=\"docblock\"><p>Signature</p>\n</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.MessageUnit\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.MessageUnit\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">MessageUnit</a> = F</h4></section></summary><div class=\"docblock\"><p>A message is &amp;[MessageUnit]</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.param_gen\" class=\"method trait-impl\"><a href=\"#method.param_gen\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">param_gen</a>&lt;R&gt;(\n    _prng: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut R</a>&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;SchnorrSignatureScheme&lt;P&gt; as SignatureScheme&gt;::PublicParameter, PrimitivesError&gt;<span class=\"where fmt-newline\">where\n    R: <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand_core/trait.CryptoRng.html\" title=\"trait rand_core::CryptoRng\">CryptoRng</a> + <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand_core/trait.RngCore.html\" title=\"trait rand_core::RngCore\">RngCore</a>,</span></h4></section></summary><div class=\"docblock\"><p>generate public parameters from RNG.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.key_gen\" class=\"method trait-impl\"><a href=\"#method.key_gen\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">key_gen</a>&lt;R&gt;(\n    _pp: &amp;&lt;SchnorrSignatureScheme&lt;P&gt; as SignatureScheme&gt;::PublicParameter,\n    prng: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut R</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;(&lt;SchnorrSignatureScheme&lt;P&gt; as SignatureScheme&gt;::SigningKey, &lt;SchnorrSignatureScheme&lt;P&gt; as SignatureScheme&gt;::VerificationKey), PrimitivesError&gt;<span class=\"where fmt-newline\">where\n    R: <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand_core/trait.CryptoRng.html\" title=\"trait rand_core::CryptoRng\">CryptoRng</a> + <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand_core/trait.RngCore.html\" title=\"trait rand_core::RngCore\">RngCore</a>,</span></h4></section></summary><div class=\"docblock\"><p>Sample a pair of keys.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.sign\" class=\"method trait-impl\"><a href=\"#method.sign\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">sign</a>&lt;R, M&gt;(\n    _pp: &amp;&lt;SchnorrSignatureScheme&lt;P&gt; as SignatureScheme&gt;::PublicParameter,\n    sk: &amp;&lt;SchnorrSignatureScheme&lt;P&gt; as SignatureScheme&gt;::SigningKey,\n    msg: M,\n    _prng: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut R</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;SchnorrSignatureScheme&lt;P&gt; as SignatureScheme&gt;::Signature, PrimitivesError&gt;<span class=\"where fmt-newline\">where\n    R: <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand_core/trait.CryptoRng.html\" title=\"trait rand_core::CryptoRng\">CryptoRng</a> + <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand_core/trait.RngCore.html\" title=\"trait rand_core::RngCore\">RngCore</a>,\n    M: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[&lt;SchnorrSignatureScheme&lt;P&gt; as SignatureScheme&gt;::MessageUnit]&gt;,</span></h4></section></summary><div class=\"docblock\"><p>Sign a message with the signing key</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.verify\" class=\"method trait-impl\"><a href=\"#method.verify\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">verify</a>&lt;M&gt;(\n    _pp: &amp;&lt;SchnorrSignatureScheme&lt;P&gt; as SignatureScheme&gt;::PublicParameter,\n    vk: &amp;&lt;SchnorrSignatureScheme&lt;P&gt; as SignatureScheme&gt;::VerificationKey,\n    msg: M,\n    sig: &amp;&lt;SchnorrSignatureScheme&lt;P&gt; as SignatureScheme&gt;::Signature\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>, PrimitivesError&gt;<span class=\"where fmt-newline\">where\n    M: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[&lt;SchnorrSignatureScheme&lt;P&gt; as SignatureScheme&gt;::MessageUnit]&gt;,</span></h4></section></summary><div class=\"docblock\"><p>Verify a signature.</p>\n</div></details><details class=\"toggle\" open><summary><section id=\"associatedconstant.CS_ID\" class=\"associatedconstant trait-impl\"><a href=\"#associatedconstant.CS_ID\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a class=\"constant\">CS_ID</a>: &amp;'static <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a> = CS_ID_SCHNORR</h4></section></summary><div class='docblock'>Ciphersuite Identifier</div></details></div></details>","SignatureScheme","hotshot_types::light_client::StateSignatureScheme"],["<section id=\"impl-StructuralPartialEq-for-SchnorrSignatureScheme%3CP%3E\" class=\"impl\"><a href=\"#impl-StructuralPartialEq-for-SchnorrSignatureScheme%3CP%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for SchnorrSignatureScheme&lt;P&gt;</h3></section>","StructuralPartialEq","hotshot_types::light_client::StateSignatureScheme"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-SchnorrSignatureScheme%3CP%3E\" class=\"impl\"><a href=\"#impl-Debug-for-SchnorrSignatureScheme%3CP%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for SchnorrSignatureScheme&lt;P&gt;<span class=\"where fmt-newline\">where\n    P: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","hotshot_types::light_client::StateSignatureScheme"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-SchnorrSignatureScheme%3CP%3E\" class=\"impl\"><a href=\"#impl-Clone-for-SchnorrSignatureScheme%3CP%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for SchnorrSignatureScheme&lt;P&gt;<span class=\"where fmt-newline\">where\n    P: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; SchnorrSignatureScheme&lt;P&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","hotshot_types::light_client::StateSignatureScheme"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()