(function() {var type_impls = {
"hotshot_stake_table":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-CRHF-for-FixedLengthRescueCRHF%3CF,+INPUT_LEN,+OUTPUT_LEN%3E\" class=\"impl\"><a href=\"#impl-CRHF-for-FixedLengthRescueCRHF%3CF,+INPUT_LEN,+OUTPUT_LEN%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F, const INPUT_LEN: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a>, const OUTPUT_LEN: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a>&gt; CRHF for FixedLengthRescueCRHF&lt;F, INPUT_LEN, OUTPUT_LEN&gt;<span class=\"where fmt-newline\">where\n    F: RescueParameter,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.evaluate\" class=\"method trait-impl\"><a href=\"#method.evaluate\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">evaluate</a>&lt;T&gt;(\n    input: T\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;FixedLengthRescueCRHF&lt;F, INPUT_LEN, OUTPUT_LEN&gt; as CRHF&gt;::Output, PrimitivesError&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;&lt;FixedLengthRescueCRHF&lt;F, INPUT_LEN, OUTPUT_LEN&gt; as CRHF&gt;::Input&gt;,</span></h4></section></summary><div class=\"docblock\"><h6 id=\"padding\"><a href=\"#padding\">Padding</a></h6>\n<p>if <code>input</code> length is not a multiple of <code>CRHF_RATE</code>, then it will be\npadded. By default, we use “zero padding”-style where as many “0” as\nrequired are added.</p>\n</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Input\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Input\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Input</a> = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.array.html\">[F; INPUT_LEN]</a></h4></section></summary><div class='docblock'>Input to the CRHF</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Output\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Output\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Output</a> = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.array.html\">[F; OUTPUT_LEN]</a></h4></section></summary><div class='docblock'>Output of the CRHF</div></details></div></details>","CRHF","hotshot_stake_table::mt_based::config::Digest"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-FixedLengthRescueCRHF%3CF,+INPUT_LEN,+OUTPUT_LEN%3E\" class=\"impl\"><a href=\"#impl-Debug-for-FixedLengthRescueCRHF%3CF,+INPUT_LEN,+OUTPUT_LEN%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F, const INPUT_LEN: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a>, const OUTPUT_LEN: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for FixedLengthRescueCRHF&lt;F, INPUT_LEN, OUTPUT_LEN&gt;<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + RescueParameter,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","hotshot_stake_table::mt_based::config::Digest"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-FixedLengthRescueCRHF%3CF,+INPUT_LEN,+OUTPUT_LEN%3E\" class=\"impl\"><a href=\"#impl-Clone-for-FixedLengthRescueCRHF%3CF,+INPUT_LEN,+OUTPUT_LEN%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F, const INPUT_LEN: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a>, const OUTPUT_LEN: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for FixedLengthRescueCRHF&lt;F, INPUT_LEN, OUTPUT_LEN&gt;<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + RescueParameter,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; FixedLengthRescueCRHF&lt;F, INPUT_LEN, OUTPUT_LEN&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","hotshot_stake_table::mt_based::config::Digest"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()