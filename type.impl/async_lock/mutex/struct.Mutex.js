(function() {var type_impls = {
"hotshot":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Mutex%3CT%3E\" class=\"impl\"><a href=\"#impl-Mutex%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; Mutex&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><h4 class=\"code-header\">pub const fn <a class=\"fn\">new</a>(data: T) -&gt; Mutex&lt;T&gt;</h4></section></summary><div class=\"docblock\"><p>Creates a new async mutex.</p>\n<h5 id=\"examples\"><a href=\"#examples\">Examples</a></h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>async_lock::Mutex;\n\n<span class=\"kw\">let </span>mutex = Mutex::new(<span class=\"number\">0</span>);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_inner\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">into_inner</a>(self) -&gt; T</h4></section></summary><div class=\"docblock\"><p>Consumes the mutex, returning the underlying data.</p>\n<h5 id=\"examples-1\"><a href=\"#examples-1\">Examples</a></h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>async_lock::Mutex;\n\n<span class=\"kw\">let </span>mutex = Mutex::new(<span class=\"number\">10</span>);\n<span class=\"macro\">assert_eq!</span>(mutex.into_inner(), <span class=\"number\">10</span>);</code></pre></div>\n</div></details></div></details>",0,"hotshot::traits::networking::libp2p_network::TakeReceiver"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Mutex%3CT%3E\" class=\"impl\"><a href=\"#impl-Mutex%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; Mutex&lt;T&gt;<div class=\"where\">where\n    T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.lock\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">lock</a>(&amp;self) -&gt; Lock&lt;'_, T&gt;</h4></section></summary><div class=\"docblock\"><p>Acquires the mutex.</p>\n<p>Returns a guard that releases the mutex when dropped.</p>\n<h5 id=\"examples\"><a href=\"#examples\">Examples</a></h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>async_lock::Mutex;\n\n<span class=\"kw\">let </span>mutex = Mutex::new(<span class=\"number\">10</span>);\n<span class=\"kw\">let </span>guard = mutex.lock().<span class=\"kw\">await</span>;\n<span class=\"macro\">assert_eq!</span>(<span class=\"kw-2\">*</span>guard, <span class=\"number\">10</span>);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_lock\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">try_lock</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.76.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;MutexGuard&lt;'_, T&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Attempts to acquire the mutex.</p>\n<p>If the mutex could not be acquired at this time, then <a href=\"https://doc.rust-lang.org/1.76.0/core/option/enum.Option.html#variant.None\" title=\"variant core::option::Option::None\"><code>None</code></a> is returned. Otherwise, a\nguard is returned that releases the mutex when dropped.</p>\n<h5 id=\"examples-1\"><a href=\"#examples-1\">Examples</a></h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>async_lock::Mutex;\n\n<span class=\"kw\">let </span>mutex = Mutex::new(<span class=\"number\">10</span>);\n<span class=\"kw\">if let </span><span class=\"prelude-val\">Some</span>(guard) = mutex.try_lock() {\n    <span class=\"macro\">assert_eq!</span>(<span class=\"kw-2\">*</span>guard, <span class=\"number\">10</span>);\n}</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_mut\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">get_mut</a>(&amp;mut self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.reference.html\">&amp;mut T</a></h4></section></summary><div class=\"docblock\"><p>Returns a mutable reference to the underlying data.</p>\n<p>Since this call borrows the mutex mutably, no actual locking takes place – the mutable\nborrow statically guarantees the mutex is not already acquired.</p>\n<h5 id=\"examples-2\"><a href=\"#examples-2\">Examples</a></h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>async_lock::Mutex;\n\n<span class=\"kw\">let </span><span class=\"kw-2\">mut </span>mutex = Mutex::new(<span class=\"number\">0</span>);\n<span class=\"kw-2\">*</span>mutex.get_mut() = <span class=\"number\">10</span>;\n<span class=\"macro\">assert_eq!</span>(<span class=\"kw-2\">*</span>mutex.lock().<span class=\"kw\">await</span>, <span class=\"number\">10</span>);</code></pre></div>\n</div></details></div></details>",0,"hotshot::traits::networking::libp2p_network::TakeReceiver"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Mutex%3CT%3E\" class=\"impl\"><a href=\"#impl-Mutex%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; Mutex&lt;T&gt;<div class=\"where\">where\n    T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.lock_arc\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">lock_arc</a>(self: &amp;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;Mutex&lt;T&gt;&gt;) -&gt; LockArc&lt;T&gt;</h4></section></summary><div class=\"docblock\"><p>Acquires the mutex and clones a reference to it.</p>\n<p>Returns an owned guard that releases the mutex when dropped.</p>\n<h5 id=\"examples\"><a href=\"#examples\">Examples</a></h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>async_lock::Mutex;\n<span class=\"kw\">use </span>std::sync::Arc;\n\n<span class=\"kw\">let </span>mutex = Arc::new(Mutex::new(<span class=\"number\">10</span>));\n<span class=\"kw\">let </span>guard = mutex.lock_arc().<span class=\"kw\">await</span>;\n<span class=\"macro\">assert_eq!</span>(<span class=\"kw-2\">*</span>guard, <span class=\"number\">10</span>);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_lock_arc\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">try_lock_arc</a>(self: &amp;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;Mutex&lt;T&gt;&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.76.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;MutexGuardArc&lt;T&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Attempts to acquire the mutex and clone a reference to it.</p>\n<p>If the mutex could not be acquired at this time, then <a href=\"https://doc.rust-lang.org/1.76.0/core/option/enum.Option.html#variant.None\" title=\"variant core::option::Option::None\"><code>None</code></a> is returned. Otherwise, an\nowned guard is returned that releases the mutex when dropped.</p>\n<h5 id=\"examples-1\"><a href=\"#examples-1\">Examples</a></h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>async_lock::Mutex;\n<span class=\"kw\">use </span>std::sync::Arc;\n\n<span class=\"kw\">let </span>mutex = Arc::new(Mutex::new(<span class=\"number\">10</span>));\n<span class=\"kw\">if let </span><span class=\"prelude-val\">Some</span>(guard) = mutex.try_lock() {\n    <span class=\"macro\">assert_eq!</span>(<span class=\"kw-2\">*</span>guard, <span class=\"number\">10</span>);\n}</code></pre></div>\n</div></details></div></details>",0,"hotshot::traits::networking::libp2p_network::TakeReceiver"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CT%3E-for-Mutex%3CT%3E\" class=\"impl\"><a href=\"#impl-From%3CT%3E-for-Mutex%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;T&gt; for Mutex&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(val: T) -&gt; Mutex&lt;T&gt;</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<T>","hotshot::traits::networking::libp2p_network::TakeReceiver"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Mutex%3CT%3E\" class=\"impl\"><a href=\"#impl-Debug-for-Mutex%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for Mutex&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.76.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.76.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","hotshot::traits::networking::libp2p_network::TakeReceiver"],["<section id=\"impl-Sync-for-Mutex%3CT%3E\" class=\"impl\"><a href=\"#impl-Sync-for-Mutex%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for Mutex&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h3></section>","Sync","hotshot::traits::networking::libp2p_network::TakeReceiver"],["<section id=\"impl-Send-for-Mutex%3CT%3E\" class=\"impl\"><a href=\"#impl-Send-for-Mutex%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for Mutex&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h3></section>","Send","hotshot::traits::networking::libp2p_network::TakeReceiver"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-Mutex%3CT%3E\" class=\"impl\"><a href=\"#impl-Default-for-Mutex%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for Mutex&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; Mutex&lt;T&gt;</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/1.76.0/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","hotshot::traits::networking::libp2p_network::TakeReceiver"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ReadState-for-Mutex%3CState%3E\" class=\"impl\"><a href=\"#impl-ReadState-for-Mutex%3CState%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;State&gt; ReadState for Mutex&lt;State&gt;<div class=\"where\">where\n    State: 'static + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.State\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.State\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">State</a> = State</h4></section></summary><div class='docblock'>The type of state which this type allows a caller to read.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.read\" class=\"method trait-impl\"><a href=\"#method.read\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">read</a>&lt;'life0, 'async_trait, T&gt;(\n    &amp;'life0 self,\n    op: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + for&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(&amp;'a &lt;Mutex&lt;State&gt; as ReadState&gt;::State) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = T&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'a&gt;&gt; + 'async_trait\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = T&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'async_trait&gt;&gt;<div class=\"where\">where\n    'life0: 'async_trait,\n    T: 'async_trait,\n    Mutex&lt;State&gt;: 'async_trait,</div></h4></section></summary><div class='docblock'>Do an operation with immutable access to the state. <a>Read more</a></div></details></div></details>","ReadState","hotshot::traits::networking::libp2p_network::TakeReceiver"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-WriteState-for-Mutex%3CState%3E\" class=\"impl\"><a href=\"#impl-WriteState-for-Mutex%3CState%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;State&gt; WriteState for Mutex&lt;State&gt;<div class=\"where\">where\n    State: 'static + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.write\" class=\"method trait-impl\"><a href=\"#method.write\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">write</a>&lt;'life0, 'async_trait, T&gt;(\n    &amp;'life0 self,\n    op: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + for&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(&amp;'a mut &lt;Mutex&lt;State&gt; as ReadState&gt;::State) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = T&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'a&gt;&gt; + 'async_trait\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = T&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'async_trait&gt;&gt;<div class=\"where\">where\n    'life0: 'async_trait,\n    T: 'async_trait,\n    Mutex&lt;State&gt;: 'async_trait,</div></h4></section></summary><div class='docblock'>Do an operation with mutable access to the state. <a>Read more</a></div></details></div></details>","WriteState","hotshot::traits::networking::libp2p_network::TakeReceiver"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()