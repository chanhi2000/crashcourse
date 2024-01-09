import{_ as v,r as d,o as h,c as g,a as n,b as s,t as k,d as e,w as a,n as f,g as y,f as _,e as u}from"./app-d223f2a5.js";const w={},x={id:"frontmatter-title-관련",tabindex:"-1"},S=n("a",{class:"header-anchor",href:"#frontmatter-title-관련","aria-hidden":"true"},"#",-1),T={class:"table-of-contents"},R=n("hr",null,null,-1),q=n("hr",null,null,-1),A=n("h2",{id:"data-types",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#data-types","aria-hidden":"true"},"#"),s(" Data Types")],-1),E=n("h3",{id:"introduction",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#introduction","aria-hidden":"true"},"#"),s(" Introduction")],-1),z=n("p",null,[s("Every value in Rust is of a certain "),n("em",null,"data type"),s(", which tells Rust what kind of data is being specified so it knows how to work with that data. We’ll look at two data type subsets: scalar and compound.")],-1),C=n("em",null,"statically typed",-1),M={href:"https://doc.rust-lang.org/book/ch02-00-guessing-game-tutorial.html#comparing-the-guess-to-the-secret-number",target:"_blank",rel:"noopener noreferrer"},F=u(`<div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">let</span> guess<span class="token punctuation">:</span> <span class="token keyword">u32</span> <span class="token operator">=</span> <span class="token string">&quot;42&quot;</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">expect</span><span class="token punctuation">(</span><span class="token string">&quot;Not a number!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If we don’t add the <code>: u32</code> type annotation shown in the preceding code, Rust will display the following error, which means the compiler needs more information from us to know which type we want to use:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cargo</span> build
<span class="token comment">#    Compiling no_type_annotations v0.1.0 (file:///projects/no_type_annotations)</span>
<span class="token comment"># error[E0282]: type annotations needed</span>
<span class="token comment">#  --&gt; src/main.rs:2:9</span>
<span class="token comment">#   |</span>
<span class="token comment"># 2 |     let guess = &quot;42&quot;.parse().expect(&quot;Not a number!&quot;);</span>
<span class="token comment">#   |         ^^^^^</span>
<span class="token comment">#   |</span>
<span class="token comment"># help: consider giving \`guess\` an explicit type</span>
<span class="token comment">#   |</span>
<span class="token comment"># 2 |     let guess: _ = &quot;42&quot;.parse().expect(&quot;Not a number!&quot;);</span>
<span class="token comment">#   |              +++</span>
<span class="token comment"># </span>
<span class="token comment"># For more information about this error, try \`rustc --explain E0282\`.</span>
<span class="token comment"># error: could not compile \`no_type_annotations\` due to previous error</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You’ll see different type annotations for other data types.</p><h3 id="scalar-types" tabindex="-1"><a class="header-anchor" href="#scalar-types" aria-hidden="true">#</a> Scalar Types</h3><p>A <em>scalar</em> type represents a single value. Rust has four primary scalar types: integers, floating-point numbers, Booleans, and characters. You may recognize these from other programming languages. Let’s jump into how they work in Rust.</p><h4 id="integer-types" tabindex="-1"><a class="header-anchor" href="#integer-types" aria-hidden="true">#</a> Integer Types</h4><p>An <em>integer</em> is a number without a fractional component. We used one integer type in Chapter 2, the <code>u32</code> type. This type declaration indicates that the value it’s associated with should be an unsigned integer (signed integer types start with i instead of u) that takes up 32 bits of space. Table 3-1 shows the built-in integer types in Rust. We can use any of these variants to declare the type of an integer value.</p><h5 id="table-3-1-integer-types-in-rust" tabindex="-1"><a class="header-anchor" href="#table-3-1-integer-types-in-rust" aria-hidden="true">#</a> Table 3-1: Integer Types in Rust</h5><table><thead><tr><th style="text-align:left;">Length</th><th style="text-align:left;">Sigend</th><th style="text-align:left;">Unsigned</th></tr></thead><tbody><tr><td style="text-align:left;">8-bit</td><td style="text-align:left;"><code>i8</code></td><td style="text-align:left;"><code>u8</code></td></tr><tr><td style="text-align:left;">16-bit</td><td style="text-align:left;"><code>i16</code></td><td style="text-align:left;"><code>u16</code></td></tr><tr><td style="text-align:left;">32-bit</td><td style="text-align:left;"><code>i32</code></td><td style="text-align:left;"><code>u32</code></td></tr><tr><td style="text-align:left;">64-bit</td><td style="text-align:left;"><code>i64</code></td><td style="text-align:left;"><code>u64</code></td></tr><tr><td style="text-align:left;">128-bit</td><td style="text-align:left;"><code>i128</code></td><td style="text-align:left;"><code>u128</code></td></tr><tr><td style="text-align:left;">arch</td><td style="text-align:left;"><code>isize</code></td><td style="text-align:left;"><code>usize</code></td></tr></tbody></table>`,10),I=n("code",null,"Signed",-1),N=n("code",null,"unsigned",-1),P={href:"https://en.wikipedia.org/wiki/Two%27s_complement",target:"_blank",rel:"noopener noreferrer"},O=n("p",null,[s("Each signed variant can store numbers from "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mo",null,"−"),n("mo",{stretchy:"false"},"("),n("msup",null,[n("mn",null,"2"),n("mrow",null,[n("mi",null,"n"),n("mo",null,"−"),n("mn",null,"1")])]),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"-(2^{n-1})")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1.0641em","vertical-align":"-0.25em"}}),n("span",{class:"mord"},"−"),n("span",{class:"mopen"},"("),n("span",{class:"mord"},[n("span",{class:"mord"},"2"),n("span",{class:"msupsub"},[n("span",{class:"vlist-t"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.8141em"}},[n("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mtight"},[n("span",{class:"mord mathnormal mtight"},"n"),n("span",{class:"mbin mtight"},"−"),n("span",{class:"mord mtight"},"1")])])])])])])])]),n("span",{class:"mclose"},")")])])]),s(" to "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("msup",null,[n("mn",null,"2"),n("mrow",null,[n("mi",null,"n"),n("mo",null,"−"),n("mn",null,"1")])]),n("mo",null,"−"),n("mn",null,"1")]),n("annotation",{encoding:"application/x-tex"},"2^{n-1} - 1")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.8974em","vertical-align":"-0.0833em"}}),n("span",{class:"mord"},[n("span",{class:"mord"},"2"),n("span",{class:"msupsub"},[n("span",{class:"vlist-t"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.8141em"}},[n("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mtight"},[n("span",{class:"mord mathnormal mtight"},"n"),n("span",{class:"mbin mtight"},"−"),n("span",{class:"mord mtight"},"1")])])])])])])])]),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),n("span",{class:"mbin"},"−"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6444em"}}),n("span",{class:"mord"},"1")])])]),s(" inclusive, where "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"n")]),n("annotation",{encoding:"application/x-tex"},"n")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.4306em"}}),n("span",{class:"mord mathnormal"},"n")])])]),s(" is the number of bits that variant uses. So an i8 can store numbers from "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mo",null,"−"),n("mo",{stretchy:"false"},"("),n("msup",null,[n("mn",null,"2"),n("mn",null,"7")]),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"-(2^7)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1.0641em","vertical-align":"-0.25em"}}),n("span",{class:"mord"},"−"),n("span",{class:"mopen"},"("),n("span",{class:"mord"},[n("span",{class:"mord"},"2"),n("span",{class:"msupsub"},[n("span",{class:"vlist-t"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.8141em"}},[n("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mtight"},"7")])])])])])])]),n("span",{class:"mclose"},")")])])]),s(" to "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("msup",null,[n("mn",null,"2"),n("mn",null,"7")]),n("mo",null,"−"),n("mn",null,"1")]),n("annotation",{encoding:"application/x-tex"},"2^7-1")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.8974em","vertical-align":"-0.0833em"}}),n("span",{class:"mord"},[n("span",{class:"mord"},"2"),n("span",{class:"msupsub"},[n("span",{class:"vlist-t"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.8141em"}},[n("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mtight"},"7")])])])])])])]),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),n("span",{class:"mbin"},"−"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6444em"}}),n("span",{class:"mord"},"1")])])]),s(", which equals "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mo",null,"−"),n("mn",null,"128")]),n("annotation",{encoding:"application/x-tex"},"-128")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),n("span",{class:"mord"},"−"),n("span",{class:"mord"},"128")])])]),s(" to "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mn",null,"127")]),n("annotation",{encoding:"application/x-tex"},"127")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6444em"}}),n("span",{class:"mord"},"127")])])]),s(". Unsigned variants can store numbers from "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mn",null,"0")]),n("annotation",{encoding:"application/x-tex"},"0")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6444em"}}),n("span",{class:"mord"},"0")])])]),s(" to "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("msup",null,[n("mn",null,"2"),n("mi",null,"n")]),n("mo",null,"−"),n("mn",null,"1")]),n("annotation",{encoding:"application/x-tex"},"2^n-1")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.7477em","vertical-align":"-0.0833em"}}),n("span",{class:"mord"},[n("span",{class:"mord"},"2"),n("span",{class:"msupsub"},[n("span",{class:"vlist-t"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.6644em"}},[n("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mathnormal mtight"},"n")])])])])])])]),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),n("span",{class:"mbin"},"−"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6444em"}}),n("span",{class:"mord"},"1")])])]),s(", so a "),n("code",null,"u8"),s(" can store numbers from "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mn",null,"0")]),n("annotation",{encoding:"application/x-tex"},"0")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6444em"}}),n("span",{class:"mord"},"0")])])]),s(" to "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("msup",null,[n("mn",null,"2"),n("mn",null,"8")]),n("mo",null,"−"),n("mn",null,"1")]),n("annotation",{encoding:"application/x-tex"},"2^8-1")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.8974em","vertical-align":"-0.0833em"}}),n("span",{class:"mord"},[n("span",{class:"mord"},"2"),n("span",{class:"msupsub"},[n("span",{class:"vlist-t"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.8141em"}},[n("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mtight"},"8")])])])])])])]),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),n("span",{class:"mbin"},"−"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6444em"}}),n("span",{class:"mord"},"1")])])]),s(", which equals "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mn",null,"0")]),n("annotation",{encoding:"application/x-tex"},"0")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6444em"}}),n("span",{class:"mord"},"0")])])]),s(" to "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mn",null,"255")]),n("annotation",{encoding:"application/x-tex"},"255")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6444em"}}),n("span",{class:"mord"},"255")])])]),s(".")],-1),D=u('<p>Additionally, the <code>isize</code> and <code>usize</code> types depend on the architecture of the computer your program is running on, which is denoted in the table as “arch”: 64 bits if you’re on a 64-bit architecture and 32 bits if you’re on a 32-bit architecture.</p><p>You can write integer literals in any of the forms shown in Table 3-2. Note that number literals that can be multiple numeric types allow a type suffix, such as <code>57u8</code>, to designate the type. Number literals can also use _ as a visual separator to make the number easier to read, such as 1_000, which will have the same value as if you had specified 1000.</p><h5 id="table-3-2-integer-literals-in-rust" tabindex="-1"><a class="header-anchor" href="#table-3-2-integer-literals-in-rust" aria-hidden="true">#</a> Table 3-2 Integer Literals in Rust</h5><table><thead><tr><th style="text-align:left;">Number literals</th><th style="text-align:left;">Example</th></tr></thead><tbody><tr><td style="text-align:left;">Decimal</td><td style="text-align:left;"><code>98_222</code></td></tr><tr><td style="text-align:left;">Hex</td><td style="text-align:left;"><code>0xff</code></td></tr><tr><td style="text-align:left;">Octal</td><td style="text-align:left;"><code>0o77</code></td></tr><tr><td style="text-align:left;">Binary</td><td style="text-align:left;"><code>0b1111_0000</code></td></tr><tr><td style="text-align:left;">Byte (<code>u8</code> only)</td><td style="text-align:left;"><code>b&#39;A&#39;</code></td></tr></tbody></table><p>So how do you know which type of integer to use? If you’re unsure, Rust’s defaults are generally good places to start: integer types default to <code>i32</code>. The primary situation in which you’d use <code>isize</code> or <code>usize</code> is when indexing some sort of collection.</p>',5),B={class:"hint-container info"},L=n("p",{class:"hint-container-title"},"Integer Overflow",-1),U=n("code",null,"u8",-1),K=n("em",null,"integer overflow",-1),W=n("em",null,"panic",-1),H=n("em",null,"panicking",-1),V={href:"https://doc.rust-lang.org/book/ch09-01-unrecoverable-errors-with-panic.html",target:"_blank",rel:"noopener noreferrer"},X=n("code",null,"panic",-1),Y=u("<p>When you’re compiling in release mode with the <code>--release</code> flag, Rust does <em>not</em> include checks for integer overflow that cause panics. Instead, if overflow occurs, Rust performs <em>two’s complement wrapping</em>. In short, values greater than the maximum value the type can hold “wrap around” to the minimum of the values the type can hold. In the case of a <code>u8</code>, the value 256 becomes 0, the value 257 becomes 1, and so on. The program won’t panic, but the variable will have a value that probably isn’t what you were expecting it to have. Relying on integer overflow’s wrapping behavior is considered an error.</p><p>To explicitly handle the possibility of overflow, you can use these families of methods provided by the standard library for primitive numeric types:</p><ul><li>Wrap in all modes with the <code>wrapping_*</code> methods, such as <code>wrapping_add</code>.</li><li>Return the <code>None</code> value if there is overflow with the <code>checked_*</code> methods.</li><li>Return the value and a boolean indicating whether there was overflow with the <code>overflowing_*</code> methods.</li><li>Saturate at the value’s minimum or maximum values with the <code>saturating_*</code> methods.</li></ul>",3),j=u('<h4 id="floating-point-types" tabindex="-1"><a class="header-anchor" href="#floating-point-types" aria-hidden="true">#</a> Floating-Point Types</h4><p>Rust also has two primitive types for <em>floating-point numbers</em>, which are numbers with decimal points. Rust’s floating-point types are <code>f32</code> and <code>f64</code>, which are 32 bits and 64 bits in size, respectively. The default type is <code>f64</code> because on modern CPUs, it’s roughly the same speed as <code>f32</code> but is capable of more precision. All floating-point types are signed.</p><p>Here’s an example that shows floating-point numbers in action:</p>',3),Z=n("code",null,"src/main.rs",-1),J=u(`<div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">2.0</span><span class="token punctuation">;</span> <span class="token comment">// f64</span>

    <span class="token keyword">let</span> y<span class="token punctuation">:</span> <span class="token keyword">f32</span> <span class="token operator">=</span> <span class="token number">3.0</span><span class="token punctuation">;</span> <span class="token comment">// f32</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Floating-point numbers are represented according to the IEEE-754 standard. The <code>f32</code> type is a single-precision float, and <code>f64</code> has double precision.</p><h4 id="numeric-operations" tabindex="-1"><a class="header-anchor" href="#numeric-operations" aria-hidden="true">#</a> Numeric Operations</h4><p>Rust supports the basic mathematical operations you’d expect for all the number types: addition, subtraction, multiplication, division, and remainder. Integer division truncates toward zero to the nearest integer. The following code shows how you’d use each numeric operation in a <code>let</code> statement:</p>`,4),$=n("code",null,"src/main.rs",-1),G=u(`<div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// addition</span>
    <span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">5</span> <span class="token operator">+</span> <span class="token number">10</span><span class="token punctuation">;</span>

    <span class="token comment">// subtraction</span>
    <span class="token keyword">let</span> difference <span class="token operator">=</span> <span class="token number">95.5</span> <span class="token operator">-</span> <span class="token number">4.3</span><span class="token punctuation">;</span>

    <span class="token comment">// multiplication</span>
    <span class="token keyword">let</span> product <span class="token operator">=</span> <span class="token number">4</span> <span class="token operator">*</span> <span class="token number">30</span><span class="token punctuation">;</span>

    <span class="token comment">// division</span>
    <span class="token keyword">let</span> quotient <span class="token operator">=</span> <span class="token number">56.7</span> <span class="token operator">/</span> <span class="token number">32.2</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> truncated <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">5</span> <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token comment">// Results in -1</span>

    <span class="token comment">// remainder</span>
    <span class="token keyword">let</span> remainder <span class="token operator">=</span> <span class="token number">43</span> <span class="token operator">%</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),Q={href:"https://doc.rust-lang.org/book/appendix-02-operators.html",target:"_blank",rel:"noopener noreferrer"},nn=n("h4",{id:"the-boolean-type",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#the-boolean-type","aria-hidden":"true"},"#"),s(" The Boolean Type")],-1),sn=n("p",null,[s("As in most other programming languages, a Boolean type in Rust has two possible values: "),n("code",null,"true"),s(" and "),n("code",null,"false"),s(". Booleans are one byte in size. The Boolean type in Rust is specified using "),n("code",null,"bool"),s(". For example:")],-1),an=n("code",null,"src/main.rs",-1),en=u(`<div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> t <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> f<span class="token punctuation">:</span> <span class="token keyword">bool</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// with explicit type annotation</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),tn=n("code",null,"if",-1),on={href:"https://doc.rust-lang.org/book/ch03-05-control-flow.html#control-flow",target:"_blank",rel:"noopener noreferrer"},ln=n("h4",{id:"the-character-type",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#the-character-type","aria-hidden":"true"},"#"),s(" The Character Type")],-1),cn=n("p",null,[s("Rust’s "),n("code",null,"char"),s(" type is the language’s most primitive alphabetic type. Here are some examples of declaring "),n("code",null,"char"),s(" values:")],-1),un=n("code",null,"src/main.rs",-1),pn=u(`<div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token char">&#39;z&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> z<span class="token punctuation">:</span> <span class="token keyword">char</span> <span class="token operator">=</span> <span class="token char">&#39;ℤ&#39;</span><span class="token punctuation">;</span> <span class="token comment">// with explicit type annotation</span>
    <span class="token keyword">let</span> heart_eyed_cat <span class="token operator">=</span> &#39;😻&#39;<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),rn=n("code",null,"char",-1),dn=n("code",null,"char",-1),mn=n("code",null,"char",-1),kn=n("code",null,"U+0000",-1),bn=n("code",null,"U+D7FF",-1),vn=n("code",null,"U+E000",-1),hn=n("code",null,"U+10FFFF",-1),gn=n("code",null,"char",-1),fn={href:"https://doc.rust-lang.org/book/ch08-02-strings.html#storing-utf-8-encoded-text-with-strings",target:"_blank",rel:"noopener noreferrer"},yn=n("h3",{id:"compound-types",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#compound-types","aria-hidden":"true"},"#"),s(" Compound Types")],-1),_n=n("p",null,[n("em",null,"Compound types"),s(" can group multiple values into one type. Rust has two primitive compound types: tuples and arrays.")],-1),wn=n("h4",{id:"the-tuple-type",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#the-tuple-type","aria-hidden":"true"},"#"),s(" The Tuple Type")],-1),xn=n("p",null,[s("A "),n("em",null,"tuple"),s(" is a general way of grouping together a number of values with a variety of types into one compound type. Tuples have a fixed length: once declared, they cannot grow or shrink in size.")],-1),Sn=n("p",null,"We create a tuple by writing a comma-separated list of values inside parentheses. Each position in the tuple has a type, and the types of the different values in the tuple don’t have to be the same. We’ve added optional type annotations in this example:",-1),Tn=n("code",null,"src/main.rs",-1),Rn=u(`<div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> tup<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token keyword">i32</span><span class="token punctuation">,</span> <span class="token keyword">f64</span><span class="token punctuation">,</span> <span class="token keyword">u8</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">,</span> <span class="token number">6.4</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The variable <code>tup</code> binds to the entire tuple because a tuple is considered a single compound element. To get the individual values out of a tuple, we can use pattern matching to destructure a tuple value, like this:</p>`,2),qn=n("code",null,"src/main.rs",-1),An=u(`<div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> tup <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">,</span> <span class="token number">6.4</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> <span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z<span class="token punctuation">)</span> <span class="token operator">=</span> tup<span class="token punctuation">;</span>

    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;The value of y is: {y}&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This program first creates a tuple and binds it to the variable <code>tup</code>. It then uses a pattern with let to take tup and turn it into three separate variables, <code>x</code>, <code>y</code>, and <code>z</code>. This is called <em>destructuring</em> because it breaks the single tuple into three parts. Finally, the program prints the value of <code>y</code>, which is <code>6.4</code>.</p><p>We can also access a tuple element directly by using a period (<code>.</code>) followed by the index of the value we want to access. For example:</p>`,3),En=n("code",null,"src/main.rs",-1),zn=u(`<div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> x<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token keyword">i32</span><span class="token punctuation">,</span> <span class="token keyword">f64</span><span class="token punctuation">,</span> <span class="token keyword">u8</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">,</span> <span class="token number">6.4</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> five_hundred <span class="token operator">=</span> x<span class="token number">.0</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> six_point_four <span class="token operator">=</span> x<span class="token number">.1</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> one <span class="token operator">=</span> x<span class="token number">.2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This program creates the tuple <code>x</code> and then accesses each element of the tuple using their respective indices. As with most programming languages, the first index in a tuple is 0.</p><p>The tuple without any values has a special name, <em>unit</em>. This value and its corresponding type are both written <code>()</code> and represent an empty value or an empty return type. Expressions implicitly return the unit value if they don’t return any other value.</p><h4 id="the-array-type" tabindex="-1"><a class="header-anchor" href="#the-array-type" aria-hidden="true">#</a> The Array Type</h4><p>Another way to have a collection of multiple values is with an <em>array</em>. Unlike a tuple, every element of an array must have the same type. Unlike arrays in some other languages, arrays in Rust have a fixed length.</p><p>We write the values in an array as a comma-separated list inside square brackets:</p>`,6),Cn=n("code",null,"src/main.rs",-1),Mn=u(`<div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),Fn={href:"https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html#the-stack-and-the-heap",target:"_blank",rel:"noopener noreferrer"},In=n("em",null,"vector",-1),Nn=n("em",null,"is",-1),Pn={href:"https://doc.rust-lang.org/book/ch08-01-vectors.html",target:"_blank",rel:"noopener noreferrer"},On=u(`<p>However, arrays are more useful when you know the number of elements will not need to change. For example, if you were using the names of the month in a program, you would probably use an array rather than a vector because you know it will always contain 12 elements:</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">let</span> months <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;January&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;February&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;March&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;April&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;May&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;June&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;July&quot;</span><span class="token punctuation">,</span>
              <span class="token string">&quot;August&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;September&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;October&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;November&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;December&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>You write an array’s type using square brackets with the type of each element, a semicolon, and then the number of elements in the array, like so:</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">let</span> a<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token keyword">i32</span><span class="token punctuation">;</span> <span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Here, <code>i32</code> is the type of each element. After the semicolon, the number <code>5</code> indicates the array contains five elements.</p><p>You can also initialize an array to contain the same value for each element by specifying the initial value, followed by a semicolon, and then the length of the array in square brackets, as shown here:</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">;</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The array named <code>a</code> will contain <code>5</code> elements that will all be set to the value <code>3</code> initially. This is the same as writing <code>let a = [3, 3, 3, 3, 3];</code> but in a more concise way.</p><h5 id="accessing-array-elements" tabindex="-1"><a class="header-anchor" href="#accessing-array-elements" aria-hidden="true">#</a> Accessing Array Elements</h5><p>An array is a single chunk of memory of a known, fixed size that can be allocated on the stack. You can access elements of an array using indexing, like this:</p>`,10),Dn=n("code",null,"src/main.rs",-1),Bn=u(`<p>fn main() { let a = [1, 2, 3, 4, 5];</p><pre><code>let first = a[0];
let second = a[1];
</code></pre><p>} In this example, the variable named <code>first</code> will get the value <code>1</code> because that is the value at index <code>[0]</code> in the array. The variable named <code>second</code> will get the value <code>2</code> from index <code>[1]</code> in the array.</p><h5 id="invalid-array-element-access" tabindex="-1"><a class="header-anchor" href="#invalid-array-element-access" aria-hidden="true">#</a> Invalid Array Element Access</h5><p>Let’s see what happens if you try to access an element of an array that is past the end of the array. Say you run this code, similar to the guessing game in Chapter 2, to get an array index from the user:</p>`,5),Ln=n("code",null,"src/main.rs",-1),Un=u(`<figure><img src="https://doc.rust-lang.org/book/ch00-00-introduction.html#ferris" alt="This code panics! x80" tabindex="0" loading="lazy"><figcaption>This code panics! x80</figcaption></figure><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span></span>io<span class="token punctuation">;</span>

<span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;Please enter an array index.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> <span class="token keyword">mut</span> index <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token namespace">io<span class="token punctuation">::</span></span><span class="token function">stdin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">read_line</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">mut</span> index<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">expect</span><span class="token punctuation">(</span><span class="token string">&quot;Failed to read line&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> index<span class="token punctuation">:</span> <span class="token keyword">usize</span> <span class="token operator">=</span> index
        <span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">expect</span><span class="token punctuation">(</span><span class="token string">&quot;Index entered was not a number&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> element <span class="token operator">=</span> a<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;The value of the element at index {index} is: {element}&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This code compiles successfully. If you run this code using <code>cargo run</code> and enter <code>0</code>, <code>1</code>, <code>2</code>, <code>3</code>, or <code>4</code>, the program will print out the corresponding value at that index in the array. If you instead enter a number past the end of the array, such as <code>10</code>, you’ll see output like this:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cargo</span> run
<span class="token comment"># thread &#39;main&#39; panicked at &#39;index out of bounds: the len is 5 but the index is 10&#39;, src/main.rs:19:19</span>
<span class="token comment"># note: run with \`RUST_BACKTRACE=1\` environment variable to display a backtrace</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The program resulted in a <em>runtime</em> error at the point of using an invalid value in the indexing operation. The program exited with an error message and didn’t execute the final println! statement. When you attempt to access an element using indexing, Rust will check that the index you’ve specified is less than the array length. If the index is greater than or equal to the length, Rust will panic. This check has to happen at runtime, especially in this case, because the compiler can’t possibly know what value a user will enter when they run the code later.</p><p>This is an example of Rust’s memory safety principles in action. In many low-level languages, this kind of check is not done, and when you provide an incorrect index, invalid memory can be accessed. Rust protects you against this kind of error by immediately exiting instead of allowing the memory access and continuing. Chapter 9 discusses more of Rust’s error handling and how you can write readable, safe code that neither panics nor allows invalid memory access.</p><hr><h2 id="numbers" tabindex="-1"><a class="header-anchor" href="#numbers" aria-hidden="true">#</a> Numbers</h2><h3 id="integer" tabindex="-1"><a class="header-anchor" href="#integer" aria-hidden="true">#</a> Integer</h3><h4 id="_1-🌟" tabindex="-1"><a class="header-anchor" href="#_1-🌟" aria-hidden="true">#</a> 1. 🌟</h4><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>If we don&#39;t explicitly assign a type to a variable, then the compiler will infer one for us.</p></div>`,11),Kn=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token comment"},"// Remove something to make it work"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" x"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"i32"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token keyword"},"mut"),s(" y"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"u32"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},";"),s(`

    y `),n("span",{class:"token operator"},"="),s(" x"),n("span",{class:"token punctuation"},";"),s(`
    
    `),n("span",{class:"token keyword"},"let"),s(" z "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// Type of z ? "),s(`

    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Success!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//    Compiling playground v0.0.1 (/playground)"),s(`
`),n("span",{class:"token comment"},"// error[E0308]: mismatched types"),s(`
`),n("span",{class:"token comment"},"//  --> src/main.rs:7:9"),s(`
`),n("span",{class:"token comment"},"//   |"),s(`
`),n("span",{class:"token comment"},"// 5 |     let mut y: u32 = 5;"),s(`
`),n("span",{class:"token comment"},"//   |                --- expected due to this type"),s(`
`),n("span",{class:"token comment"},"// 6 |"),s(`
`),n("span",{class:"token comment"},"// 7 |     y = x;"),s(`
`),n("span",{class:"token comment"},"//   |         ^ expected `u32`, found `i32`"),s(`
`),n("span",{class:"token comment"},"// "),s(`
`),n("span",{class:"token comment"},"// For more information about this error, try `rustc --explain E0308`."),s(`
`),n("span",{class:"token comment"},'// error: could not compile `playground` (bin "playground") due to previous error'),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Wn=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token comment"},"// Remove something to make it work"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" x"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"i32"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token keyword"},"mut"),s(" y "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},";"),s(`

    y `),n("span",{class:"token operator"},"="),s(" x"),n("span",{class:"token punctuation"},";"),s(`
    
    `),n("span",{class:"token keyword"},"let"),s(" z "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// type of z : i32"),s(`
    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Success!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},`/*
  Success!
*/`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Hn=n("h4",{id:"_2-🌟",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2-🌟","aria-hidden":"true"},"#"),s(" 2. 🌟")],-1),Vn=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token comment"},"// Fill the blank"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" v"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"u16"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"38_u8"),s(),n("span",{class:"token keyword"},"as"),s(),n("span",{class:"token constant"},"__"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Success!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//    Compiling playground v0.0.1 (/playground)"),s(`
`),n("span",{class:"token comment"},"// error[E0412]: cannot find type `__` in this scope"),s(`
`),n("span",{class:"token comment"},"//  --> src/main.rs:4:27"),s(`
`),n("span",{class:"token comment"},"//   |"),s(`
`),n("span",{class:"token comment"},"// 4 |     let v: u16 = 38_u8 as __;"),s(`
`),n("span",{class:"token comment"},"//   |                           ^^ not found in this scope"),s(`
`),n("span",{class:"token comment"},"// "),s(`
`),n("span",{class:"token comment"},"// For more information about this error, try `rustc --explain E0412`."),s(`
`),n("span",{class:"token comment"},'// error: could not compile `playground` (bin "playground") due to previous error'),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Xn=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token comment"},"// Fill the blank"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" v"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"u16"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"38_u8"),s(),n("span",{class:"token keyword"},"as"),s(),n("span",{class:"token keyword"},"u16"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Success!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},`/*
  Success!
*/`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Yn=n("h4",{id:"_3-🌟🌟🌟",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3-🌟🌟🌟","aria-hidden":"true"},"#"),s(" 3. 🌟🌟🌟")],-1),jn=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"Tips"),n("p",null,"If we don't explicitly assign a type to a variable, then the compiler will infer one for us.")],-1),Zn=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token comment"},"// Modify `assert_eq!` to make it work"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" x "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token macro property"},"assert_eq!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"u32"'),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"to_string"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function"},"type_of"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),s("x"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Success!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},'// Get the type of given variable, return a string representation of the type  , e.g "i8", "u8", "i32", "u32"'),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"type_of"),n("span",{class:"token operator"},"<"),n("span",{class:"token class-name"},"T"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),s("_"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token operator"},"&"),n("span",{class:"token class-name"},"T"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"->"),s(),n("span",{class:"token class-name"},"String"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token macro property"},"format!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"{}"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},[s("std"),n("span",{class:"token punctuation"},"::"),s("any"),n("span",{class:"token punctuation"},"::")]),n("span",{class:"token function"},"type_name"),n("span",{class:"token punctuation"},"::"),n("span",{class:"token operator"},"<"),n("span",{class:"token class-name"},"T"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//    Compiling playground v0.0.1 (/playground)"),s(`
`),n("span",{class:"token comment"},"//     Finished dev [unoptimized + debuginfo] target(s) in 0.98s"),s(`
`),n("span",{class:"token comment"},"//      Running `target/debug/playground`"),s(`
`),n("span",{class:"token comment"},"// thread 'main' panicked at 'assertion failed: `(left == right)`"),s(`
`),n("span",{class:"token comment"},'//   left: `"u32"`,'),s(`
`),n("span",{class:"token comment"},'//  right: `"i32"`\', src/main.rs:5:5'),s(`
`),n("span",{class:"token comment"},"// note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Jn=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token comment"},"// Modify `assert_eq!` to make it work"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" x "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token macro property"},"assert_eq!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"i32"'),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"to_string"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function"},"type_of"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),s("x"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Success!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},'// Get the type of given variable, return a string representation of the type  , e.g "i8", "u8", "i32", "u32"'),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"type_of"),n("span",{class:"token operator"},"<"),n("span",{class:"token class-name"},"T"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),s("_"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token operator"},"&"),n("span",{class:"token class-name"},"T"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"->"),s(),n("span",{class:"token class-name"},"String"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token macro property"},"format!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"{}"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},[s("std"),n("span",{class:"token punctuation"},"::"),s("any"),n("span",{class:"token punctuation"},"::")]),n("span",{class:"token function"},"type_name"),n("span",{class:"token punctuation"},"::"),n("span",{class:"token operator"},"<"),n("span",{class:"token class-name"},"T"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},`/*
  Success!
*/`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),$n=n("h4",{id:"_4-🌟🌟",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_4-🌟🌟","aria-hidden":"true"},"#"),s(" 4. 🌟🌟")],-1),Gn=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token comment"},"// Fill the blanks to make it work"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token macro property"},"assert_eq!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"i8"),n("span",{class:"token punctuation"},"::"),n("span",{class:"token constant"},"MAX"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token constant"},"__"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(` 
    `),n("span",{class:"token macro property"},"assert_eq!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"u8"),n("span",{class:"token punctuation"},"::"),n("span",{class:"token constant"},"MAX"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token constant"},"__"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(` 

    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Success!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},`/*
      Compiling playground v0.0.1 (/playground)
   error[E0425]: cannot find value \`__\` in this scope
    --> src/main.rs:4:25
     |
   4 |     assert_eq!(i8::MAX, __); 
     |                         ^^ not found in this scope
   
   error[E0425]: cannot find value \`__\` in this scope
    --> src/main.rs:5:25
     |
   5 |     assert_eq!(u8::MAX, __); 
     |                         ^^ not found in this scope
   
   For more information about this error, try \`rustc --explain E0425\`.
   error: could not compile \`playground\` (bin "playground") due to 2 previous errors
*/`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Qn=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token comment"},"// Fill the blanks to make it work"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token macro property"},"assert_eq!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"i8"),n("span",{class:"token punctuation"},"::"),n("span",{class:"token constant"},"MAX"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"127"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(` 
    `),n("span",{class:"token macro property"},"assert_eq!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"u8"),n("span",{class:"token punctuation"},"::"),n("span",{class:"token constant"},"MAX"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"255"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(` 

    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Success!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},`/*
  Success!
*/`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ns=n("h4",{id:"_5-🌟🌟",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_5-🌟🌟","aria-hidden":"true"},"#"),s(" 5. 🌟🌟")],-1),ss=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token comment"},"// Fix errors and panics to make it work"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
   `),n("span",{class:"token keyword"},"let"),s(" v1 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"251_u8"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},";"),s(`
   `),n("span",{class:"token keyword"},"let"),s(" v2 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"i8"),n("span",{class:"token punctuation"},"::"),n("span",{class:"token function"},"checked_add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"251"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"unwrap"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
   `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"{},{}"'),n("span",{class:"token punctuation"},","),s("v1"),n("span",{class:"token punctuation"},","),s("v2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},'/*    \n      Compiling playground v0.0.1 (/playground)\n   error: literal out of range for `i8`\n    --> src/main.rs:5:29\n     |\n   5 |    let v2 = i8::checked_add(251, 8).unwrap();\n     |                             ^^^\n     |\n     = note: the literal `251` does not fit into the type `i8` whose range is `-128..=127`\n     = help: consider using the type `u8` instead\n     = note: `#[deny(overflowing_literals)]` on by default\n   \n   error: could not compile `playground` (bin "playground") due to previous error\n*/'),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),as=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token comment"},"// Fix errors and panics to make it work"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
   `),n("span",{class:"token keyword"},"let"),s(" v1 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"247_u8"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},";"),s(`
   `),n("span",{class:"token keyword"},"let"),s(" v2 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"i8"),n("span",{class:"token punctuation"},"::"),n("span",{class:"token function"},"checked_add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"119"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"unwrap"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
   `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"{},{}"'),n("span",{class:"token punctuation"},","),s("v1"),n("span",{class:"token punctuation"},","),s("v2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},`/*
  255,127
*/`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),es=n("h4",{id:"_6-🌟🌟",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-🌟🌟","aria-hidden":"true"},"#"),s(" 6. 🌟🌟")],-1),ts=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token comment"},"// Modify `assert!` to make it work"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" v "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1_024"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"0xff"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"0o77"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"0b1111_1111"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token macro property"},"assert!"),n("span",{class:"token punctuation"},"("),s("v "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"1579"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Success!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},`/* 
      Compiling playground v0.0.1 (/playground)
       Finished dev [unoptimized + debuginfo] target(s) in 0.55s
        Running \`target/debug/playground\`
   thread 'main' panicked at 'assertion failed: v == 1579', src/main.rs:5:5
   note: run with \`RUST_BACKTRACE=1\` environment variable to display a backtrace
*/`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),os=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token comment"},"// Modify `assert!` to make it work"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" v "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1_024"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"0xff"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"0o77"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"0b1111_1111"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token macro property"},"assert!"),n("span",{class:"token punctuation"},"("),s("v "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"1597"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Success!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},`/*
  Success!
*/`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ls=n("h3",{id:"floating-point",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#floating-point","aria-hidden":"true"},"#"),s(" Floating-Point")],-1),is=n("h4",{id:"_7-🌟",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_7-🌟","aria-hidden":"true"},"#"),s(" 7. 🌟")],-1),cs=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token comment"},"// Fill the blank to make it work"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" x "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1_000.000_1"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// ?"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" y"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"f32"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0.12"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// f32"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" z "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0.01_f64"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// f64"),s(`

    `),n("span",{class:"token macro property"},"assert_eq!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"type_of"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),s("x"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"__"'),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"to_string"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Success!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"type_of"),n("span",{class:"token operator"},"<"),n("span",{class:"token class-name"},"T"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),s("_"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token operator"},"&"),n("span",{class:"token class-name"},"T"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"->"),s(),n("span",{class:"token class-name"},"String"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token macro property"},"format!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"{}"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},[s("std"),n("span",{class:"token punctuation"},"::"),s("any"),n("span",{class:"token punctuation"},"::")]),n("span",{class:"token function"},"type_name"),n("span",{class:"token punctuation"},"::"),n("span",{class:"token operator"},"<"),n("span",{class:"token class-name"},"T"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},`/*
     Compiling playground v0.0.1 (/playground)
  warning: unused variable: \`y\`
   --> src/main.rs:5:9
    |
  5 |     let y: f32 = 0.12; // f32
    |         ^ help: if this is intentional, prefix it with an underscore: \`_y\`
    |
    = note: \`#[warn(unused_variables)]\` on by default
  
  warning: unused variable: \`z\`
   --> src/main.rs:6:9
    |
  6 |     let z = 0.01_f64; // f64
    |         ^ help: if this is intentional, prefix it with an underscore: \`_z\`
  
  warning: \`playground\` (bin "playground") generated 2 warnings (run \`cargo fix --bin "playground"\` to apply 2 suggestions)
      Finished dev [unoptimized + debuginfo] target(s) in 0.58s
       Running \`target/debug/playground\`
  thread 'main' panicked at 'assertion failed: \`(left == right)\`
    left: \`"f64"\`,
   right: \`"__"\`', src/main.rs:8:5
  note: run with \`RUST_BACKTRACE=1\` environment variable to display a backtrace
*/`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),us=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token comment"},"// Fill the blank to make it work"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" x "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1_000.000_1"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// f64"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" y"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"f32"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0.12"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// f32"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" z "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0.01_f64"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// f64"),s(`

    `),n("span",{class:"token macro property"},"assert_eq!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"type_of"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),s("x"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"f64"'),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"to_string"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Success!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"type_of"),n("span",{class:"token operator"},"<"),n("span",{class:"token class-name"},"T"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),s("_"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token operator"},"&"),n("span",{class:"token class-name"},"T"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"->"),s(),n("span",{class:"token class-name"},"String"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token macro property"},"format!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"{}"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},[s("std"),n("span",{class:"token punctuation"},"::"),s("any"),n("span",{class:"token punctuation"},"::")]),n("span",{class:"token function"},"type_name"),n("span",{class:"token punctuation"},"::"),n("span",{class:"token operator"},"<"),n("span",{class:"token class-name"},"T"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},`/*
  Success!
*/`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ps=n("h4",{id:"_8-🌟🌟-make-it-work-in-two-distinct-ways",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_8-🌟🌟-make-it-work-in-two-distinct-ways","aria-hidden":"true"},"#"),s(" 8. 🌟🌟 Make it work in two distinct ways")],-1),rs=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token macro property"},"assert!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0.1"),n("span",{class:"token operator"},"+"),n("span",{class:"token number"},"0.2"),n("span",{class:"token operator"},"=="),n("span",{class:"token number"},"0.3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Success!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},`/*
     Compiling playground v0.0.1 (/playground)
      Finished dev [unoptimized + debuginfo] target(s) in 0.55s
       Running \`target/debug/playground\`
  thread 'main' panicked at 'assertion failed: 0.1 + 0.2 == 0.3', src/main.rs:3:5
  note: run with \`RUST_BACKTRACE=1\` environment variable to display a backtrace
*/`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ds=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token macro property"},"assert!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0.1_f32"),n("span",{class:"token operator"},"+"),n("span",{class:"token number"},"0.2_f32"),n("span",{class:"token operator"},"=="),n("span",{class:"token number"},"0.3_f32"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Success!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},`/*
  Success!
*/`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ms=u('<h3 id="range" tabindex="-1"><a class="header-anchor" href="#range" aria-hidden="true">#</a> Range</h3><h4 id="_9-🌟🌟" tabindex="-1"><a class="header-anchor" href="#_9-🌟🌟" aria-hidden="true">#</a> 9. 🌟🌟</h4><p>Two goals:</p><ol><li>Modify assert! to make it work</li><li>Make <code>println!</code> output: <code>97 - 122</code></li></ol>',4),ks=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token keyword"},"mut"),s(" sum "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"for"),s(" i "),n("span",{class:"token keyword"},"in"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},".."),n("span",{class:"token number"},"2"),s(),n("span",{class:"token punctuation"},"{"),s(`
        sum `),n("span",{class:"token operator"},"+="),s(` i
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token macro property"},"assert!"),n("span",{class:"token punctuation"},"("),s("sum "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"for"),s(" c "),n("span",{class:"token keyword"},"in"),s(),n("span",{class:"token char"},"'a'"),n("span",{class:"token punctuation"},"..="),n("span",{class:"token char"},"'z'"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"{}"'),n("span",{class:"token punctuation"},","),s("c"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},`/*
     Compiling playground v0.0.1 (/playground)
      Finished dev [unoptimized + debuginfo] target(s) in 2.13s
       Running \`target/debug/playground\`
  thread 'main' panicked at 'assertion failed: sum == -3', src/main.rs:7:5
  note: run with \`RUST_BACKTRACE=1\` environment variable to display a backtrace
*/`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),bs=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token keyword"},"mut"),s(" sum "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"for"),s(" i "),n("span",{class:"token keyword"},"in"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},".."),n("span",{class:"token number"},"2"),s(),n("span",{class:"token punctuation"},"{"),s(`
        sum `),n("span",{class:"token operator"},"+="),s(` i
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token macro property"},"assert!"),n("span",{class:"token punctuation"},"("),s("sum "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"for"),s(" c "),n("span",{class:"token keyword"},"in"),s(),n("span",{class:"token char"},"'a'"),n("span",{class:"token punctuation"},"..="),n("span",{class:"token char"},"'z'"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"{}"'),n("span",{class:"token punctuation"},","),s("c "),n("span",{class:"token keyword"},"as"),s(),n("span",{class:"token keyword"},"u8"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},`/*
97
98
99
100
101
102
103
104
105
106
107
108
109
110
111
112
113
114
115
116
117
118
119
120
121
122
*/`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),vs=n("h4",{id:"_10-🌟🌟",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_10-🌟🌟","aria-hidden":"true"},"#"),s(" 10. 🌟🌟")],-1),hs=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token comment"},"// Fill the blanks"),s(`
`),n("span",{class:"token keyword"},"use"),s(),n("span",{class:"token namespace"},[s("std"),n("span",{class:"token punctuation"},"::"),s("ops"),n("span",{class:"token punctuation"},"::")]),n("span",{class:"token punctuation"},"{"),n("span",{class:"token class-name"},"Range"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"RangeInclusive"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token macro property"},"assert_eq!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},".."),n("span",{class:"token constant"},"__"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"Range"),n("span",{class:"token punctuation"},"{"),s(" start"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(" end"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"5"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token macro property"},"assert_eq!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},".."),n("span",{class:"token constant"},"__"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"RangeInclusive"),n("span",{class:"token punctuation"},"::"),n("span",{class:"token function"},"new"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Success!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},`/*
     Compiling playground v0.0.1 (/playground)
  error[E0425]: cannot find value \`__\` in this scope
   --> src/main.rs:5:20
    |
  5 |     assert_eq!((1..__), Range{ start: 1, end: 5 });
    |                    ^^ not found in this scope
    |
  help: you might have meant to write \`.\` instead of \`..\`
    |
  5 -     assert_eq!((1..__), Range{ start: 1, end: 5 });
  5 +     assert_eq!((1.__), Range{ start: 1, end: 5 });
    |
  
  error[E0425]: cannot find value \`__\` in this scope
   --> src/main.rs:6:20
    |
  6 |     assert_eq!((1..__), RangeInclusive::new(1, 5));
    |                    ^^ not found in this scope
    |
  help: you might have meant to write \`.\` instead of \`..\`
    |
  6 -     assert_eq!((1..__), RangeInclusive::new(1, 5));
  6 +     assert_eq!((1.__), RangeInclusive::new(1, 5));
    |
  
  error[E0277]: can't compare \`std::ops::Range<{integer}>\` with \`RangeInclusive<{integer}>\`
   --> src/main.rs:6:5
    |
  6 |     assert_eq!((1..__), RangeInclusive::new(1, 5));
    |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ no implementation for \`std::ops::Range<{integer}> == RangeInclusive<{integer}>\`
    |
    = help: the trait \`PartialEq<RangeInclusive<{integer}>>\` is not implemented for \`std::ops::Range<{integer}>\`
    = help: the following other types implement trait \`PartialEq<Rhs>\`:
              <std::ops::Range<Idx> as PartialEq>
              <std::ops::Range<usize> as PartialEq<aho_corasick::Span>>
    = note: this error originates in the macro \`assert_eq\` (in Nightly builds, run with -Z macro-backtrace for more info)
  
  Some errors have detailed explanations: E0277, E0425.
  For more information about an error, try \`rustc --explain E0277\`.
  error: could not compile \`playground\` (bin "playground") due to 3 previous errors
*/`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),gs=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token comment"},"// Fill the blanks"),s(`
`),n("span",{class:"token keyword"},"use"),s(),n("span",{class:"token namespace"},[s("std"),n("span",{class:"token punctuation"},"::"),s("ops"),n("span",{class:"token punctuation"},"::")]),n("span",{class:"token punctuation"},"{"),n("span",{class:"token class-name"},"Range"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"RangeInclusive"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token macro property"},"assert_eq!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},".."),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"Range"),n("span",{class:"token punctuation"},"{"),s(" start"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(" end"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"5"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token macro property"},"assert_eq!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"..="),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"RangeInclusive"),n("span",{class:"token punctuation"},"::"),n("span",{class:"token function"},"new"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Success!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},`/*
  Success!
*/`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),fs=n("h3",{id:"computations",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#computations","aria-hidden":"true"},"#"),s(" Computations")],-1),ys=n("h4",{id:"_11-🌟",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_11-🌟","aria-hidden":"true"},"#"),s(" 11. 🌟")],-1),_s=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token comment"},"// Fill the blanks and fix the errors"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// Integer addition"),s(`
    `),n("span",{class:"token macro property"},"assert!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1u32"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"2"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token constant"},"__"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token comment"},"// Integer subtraction"),s(`
    `),n("span",{class:"token macro property"},"assert!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1i32"),s(),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"2"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token constant"},"__"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token macro property"},"assert!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1u8"),s(),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"2"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(` 
    
    `),n("span",{class:"token macro property"},"assert!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"3"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"50"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token constant"},"__"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token macro property"},"assert!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"9.6"),s(),n("span",{class:"token operator"},"/"),s(),n("span",{class:"token number"},"3.2"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"3.0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// error ! make it work"),s(`

    `),n("span",{class:"token macro property"},"assert!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"24"),s(),n("span",{class:"token operator"},"%"),s(),n("span",{class:"token number"},"5"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token constant"},"__"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token comment"},"// Short-circuiting boolean logic"),s(`
    `),n("span",{class:"token macro property"},"assert!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),s(),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token boolean"},"false"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token constant"},"__"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token macro property"},"assert!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),s(),n("span",{class:"token operator"},"||"),s(),n("span",{class:"token boolean"},"false"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token constant"},"__"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token macro property"},"assert!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),n("span",{class:"token boolean"},"true"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token constant"},"__"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token comment"},"// Bitwise operations"),s(`
    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"0011 AND 0101 is {:04b}"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0b0011u32"),s(),n("span",{class:"token operator"},"&"),s(),n("span",{class:"token number"},"0b0101"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"0011 OR 0101 is {:04b}"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0b0011u32"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token number"},"0b0101"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"0011 XOR 0101 is {:04b}"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0b0011u32"),s(),n("span",{class:"token operator"},"^"),s(),n("span",{class:"token number"},"0b0101"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"1 << 5 is {}"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1u32"),s(),n("span",{class:"token operator"},"<<"),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"0x80 >> 2 is 0x{:x}"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0x80u32"),s(),n("span",{class:"token operator"},">>"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},`/*
     Compiling playground v0.0.1 (/playground)
  error[E0425]: cannot find value \`__\` in this scope
   --> src/main.rs:5:25
    |
  5 |     assert!(1u32 + 2 == __);
    |                         ^^ not found in this scope
  
  error[E0425]: cannot find value \`__\` in this scope
   --> src/main.rs:8:25
    |
  8 |     assert!(1i32 - 2 == __);
    |                         ^^ not found in this scope
  
  error[E0425]: cannot find value \`__\` in this scope
    --> src/main.rs:11:23
     |
  11 |     assert!(3 * 50 == __);
     |                       ^^ not found in this scope
  
  error[E0425]: cannot find value \`__\` in this scope
    --> src/main.rs:15:23
     |
  15 |     assert!(24 % 5 == __);
     |                       ^^ not found in this scope
  
  error[E0425]: cannot find value \`__\` in this scope
    --> src/main.rs:17:30
     |
  17 |     assert!(true && false == __);
     |                              ^^ not found in this scope
  
  error[E0425]: cannot find value \`__\` in this scope
    --> src/main.rs:18:30
     |
  18 |     assert!(true || false == __);
     |                              ^^ not found in this scope
  
  error[E0425]: cannot find value \`__\` in this scope
    --> src/main.rs:19:22
     |
  19 |     assert!(!true == __);
     |                      ^^ not found in this scope
  
  error[E0277]: the trait bound \`u8: Neg\` is not satisfied
   --> src/main.rs:9:24
    |
  9 |     assert!(1u8 - 2 == -1); 
    |                        ^^ the trait \`Neg\` is not implemented for \`u8\`
    |
    = help: the following other types implement trait \`Neg\`:
              &f32
              &f64
              &i128
              &i16
              &i32
              &i64
              &i8
              &isize
            and 8 others
  
  Some errors have detailed explanations: E0277, E0425.
  For more information about an error, try \`rustc --explain E0277\`.
  error: could not compile \`playground\` (bin "playground") due to 8 previous errors
*/`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ws=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token comment"},"// Fill the blanks and fix the errors"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// Integer addition"),s(`
    `),n("span",{class:"token macro property"},"assert!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1u32"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"2"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token comment"},"// Integer subtraction"),s(`
    `),n("span",{class:"token macro property"},"assert!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1i32"),s(),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"2"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token macro property"},"assert!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1i8"),s(),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"2"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    
    `),n("span",{class:"token macro property"},"assert!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"3"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"50"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"150"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token macro property"},"assert!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"9"),s(),n("span",{class:"token operator"},"/"),s(),n("span",{class:"token number"},"3"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// error ! make it work"),s(`

    `),n("span",{class:"token macro property"},"assert!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"24"),s(),n("span",{class:"token operator"},"%"),s(),n("span",{class:"token number"},"5"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token comment"},"// Short-circuiting boolean logic"),s(`
    `),n("span",{class:"token macro property"},"assert!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),s(),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token boolean"},"false"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token macro property"},"assert!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),s(),n("span",{class:"token operator"},"||"),s(),n("span",{class:"token boolean"},"false"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token macro property"},"assert!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),n("span",{class:"token boolean"},"true"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token comment"},"// Bitwise operations"),s(`
    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"0011 AND 0101 is {:04b}"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0b0011u32"),s(),n("span",{class:"token operator"},"&"),s(),n("span",{class:"token number"},"0b0101"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"0011 OR 0101 is {:04b}"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0b0011u32"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token number"},"0b0101"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"0011 XOR 0101 is {:04b}"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0b0011u32"),s(),n("span",{class:"token operator"},"^"),s(),n("span",{class:"token number"},"0b0101"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"1 << 5 is {}"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1u32"),s(),n("span",{class:"token operator"},"<<"),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"0x80 >> 2 is 0x{:x}"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0x80u32"),s(),n("span",{class:"token operator"},">>"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},`/*
  0011 AND 0101 is 0001
  0011 OR 0101 is 0111
  0011 XOR 0101 is 0110
  1 << 5 is 32
  0x80 >> 2 is 0x20
*/`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),xs=u('<hr><h2 id="char-bool-and-unit" tabindex="-1"><a class="header-anchor" href="#char-bool-and-unit" aria-hidden="true">#</a> Char, Bool and Unit</h2><h3 id="char" tabindex="-1"><a class="header-anchor" href="#char" aria-hidden="true">#</a> Char</h3><h4 id="_1-🌟-1" tabindex="-1"><a class="header-anchor" href="#_1-🌟-1" aria-hidden="true">#</a> 1. 🌟</h4>',4),Ss=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token comment"},"// Make it work"),s(`
`),n("span",{class:"token keyword"},"use"),s(),n("span",{class:"token namespace"},[s("std"),n("span",{class:"token punctuation"},"::"),s("mem"),n("span",{class:"token punctuation"},"::")]),s("size_of_val"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" c1 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token char"},"'a'"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token macro property"},"assert_eq!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"size_of_val"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),s("c1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(` 

    `),n("span",{class:"token keyword"},"let"),s(" c2 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token char"},"'中'"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token macro property"},"assert_eq!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"size_of_val"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),s("c2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(` 

    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Success!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"/*\n   Compiling playground v0.0.1 (/playground)\n      Finished dev [unoptimized + debuginfo] target(s) in 0.59s\n       Running `target/debug/playground`\n  thread 'main' panicked at 'assertion failed: `(left == right)`\n    left: `4`,\n   right: `1`', src/main.rs:6:5\n  note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace  \n*/"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ts=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token comment"},"// Make it work"),s(`
`),n("span",{class:"token keyword"},"use"),s(),n("span",{class:"token namespace"},[s("std"),n("span",{class:"token punctuation"},"::"),s("mem"),n("span",{class:"token punctuation"},"::")]),s("size_of_val"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" c1 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token char"},"'a'"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token macro property"},"assert_eq!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"size_of_val"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),s("c1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"let"),s(" c2 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token char"},"'中'"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token macro property"},"assert_eq!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"size_of_val"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),s("c2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Success!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},`/*
  Success!
*/`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Rs=n("h4",{id:"_2-🌟-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2-🌟-1","aria-hidden":"true"},"#"),s(" 2. 🌟")],-1),qs=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token comment"},"// Make it work"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" c1 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"中"'),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token function"},"print_char"),n("span",{class:"token punctuation"},"("),s("c1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(` 

`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"print_char"),n("span",{class:"token punctuation"},"("),s("c "),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"char"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"{}"'),n("span",{class:"token punctuation"},","),s(" c"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},`/*
     Compiling playground v0.0.1 (/playground)
  error[E0308]: mismatched types
   --> src/main.rs:5:16
    |
  5 |     print_char(c1);
    |     ---------- ^^ expected \`char\`, found \`&str\`
    |     |
    |     arguments to this function are incorrect
    |
  note: function defined here
   --> src/main.rs:8:4
    |
  8 | fn print_char(c : char) {
    |    ^^^^^^^^^^ --------
  
  For more information about this error, try \`rustc --explain E0308\`.
  error: could not compile \`playground\` (bin "playground") due to previous error
*/`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),As=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token comment"},"// Make it work"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" c1 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token char"},"'中'"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token function"},"print_char"),n("span",{class:"token punctuation"},"("),s("c1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"print_char"),n("span",{class:"token punctuation"},"("),s("c "),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"char"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"{}"'),n("span",{class:"token punctuation"},","),s(" c"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},`/*
  中
*/`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Es=n("h3",{id:"bool",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#bool","aria-hidden":"true"},"#"),s(" Bool")],-1),zs=n("h4",{id:"_3-🌟",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3-🌟","aria-hidden":"true"},"#"),s(" 3. 🌟")],-1),Cs=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token comment"},"// Make println! work"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" _f"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"bool"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"let"),s(" t "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token operator"},"!"),s("t "),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Success!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},`/*
*/`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ms=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token comment"},"// Make println! work"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" _f"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"bool"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"let"),s(" t "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token operator"},"!"),s("t "),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"hello, world"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(` 
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},`/*
  hello, world
*/`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Fs=n("h4",{id:"_4-🌟",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_4-🌟","aria-hidden":"true"},"#"),s(" 4. 🌟")],-1),Is=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token comment"},"// Make it work"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" f "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" t "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true"),s(),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token macro property"},"assert_eq!"),n("span",{class:"token punctuation"},"("),s("t"),n("span",{class:"token punctuation"},","),s(" f"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Success!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"/*\n     Compiling playground v0.0.1 (/playground)\n      Finished dev [unoptimized + debuginfo] target(s) in 0.54s\n       Running `target/debug/playground`\n  thread 'main' panicked at 'assertion failed: `(left == right)`\n    left: `false`,\n   right: `true`', src/main.rs:6:5\n  note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace\n*/"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ns=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token comment"},"// Make it work"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" f "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" t "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true"),s(),n("span",{class:"token operator"},"||"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token macro property"},"assert_eq!"),n("span",{class:"token punctuation"},"("),s("t"),n("span",{class:"token punctuation"},","),s(" f"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Success!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},`/*
  Success!
*/`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ps=n("h3",{id:"unit-type",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#unit-type","aria-hidden":"true"},"#"),s(" Unit type")],-1),Os=n("h4",{id:"_5-🌟🌟-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_5-🌟🌟-1","aria-hidden":"true"},"#"),s(" 5. 🌟🌟")],-1),Ds=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token comment"},"// Make it work, don't modify `implicitly_ret_unit` !"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" _v"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"let"),s(" v "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token macro property"},"assert_eq!"),n("span",{class:"token punctuation"},"("),s("v"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function"},"implicitly_ret_unit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Success!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"implicitly_ret_unit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"I will return a ()"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// Don't use this one"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"explicitly_ret_unit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"->"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"I will return a ()"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},`/*
     Compiling playground v0.0.1 (/playground)
  error[E0308]: mismatched types
   --> src/main.rs:7:5
    |
  7 |     assert_eq!(v, implicitly_ret_unit());
    |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |     |
    |     expected \`({integer}, {integer})\`, found \`()\`
    |     expected because this is \`({integer}, {integer})\`
    |
    = note:  expected tuple \`({integer}, {integer})\`
            found unit type \`()\`
    = note: this error originates in the macro \`assert_eq\` (in Nightly builds, run with -Z macro-backtrace for more info)
  
  For more information about this error, try \`rustc --explain E0308\`.
  error: could not compile \`playground\` (bin "playground") due to previous error
*/`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Bs=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token comment"},"// Make it work, don't modify `implicitly_ret_unit` !"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" v0"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"let"),s(" v "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token macro property"},"assert_eq!"),n("span",{class:"token punctuation"},"("),s("v0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function"},"implicitly_ret_unit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Success!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"implicitly_ret_unit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"I will return a ()"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// Don't use this one"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"explicitly_ret_unit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"->"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"I will return a ()"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},`/*
  I will return a ()
  Success!
*/`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ls=n("h4",{id:"_6-🌟🌟-what-s-the-size-of-the-unit-type",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-🌟🌟-what-s-the-size-of-the-unit-type","aria-hidden":"true"},"#"),s(" 6. 🌟🌟 What's the size of the unit type?")],-1),Us=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token comment"},"// Modify `4` in assert to make it work"),s(`
`),n("span",{class:"token keyword"},"use"),s(),n("span",{class:"token namespace"},[s("std"),n("span",{class:"token punctuation"},"::"),s("mem"),n("span",{class:"token punctuation"},"::")]),s("size_of_val"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" unit"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token macro property"},"assert!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"size_of_val"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),s("unit"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Success!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},`/*
     Compiling playground v0.0.1 (/playground)
      Finished dev [unoptimized + debuginfo] target(s) in 0.71s
       Running \`target/debug/playground\`
  thread 'main' panicked at 'assertion failed: size_of_val(&unit) == 4', src/main.rs:6:5
  note: run with \`RUST_BACKTRACE=1\` environment variable to display a backtrace
*/`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ks=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token comment"},"// Modify `4` in assert to make it work"),s(`
`),n("span",{class:"token keyword"},"use"),s(),n("span",{class:"token namespace"},[s("std"),n("span",{class:"token punctuation"},"::"),s("mem"),n("span",{class:"token punctuation"},"::")]),s("size_of_val"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" unit"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token macro property"},"assert!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"size_of_val"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),s("unit"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Success!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},`/*
  Success!
*/`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ws=u(`<hr><h2 id="statements-and-expressions" tabindex="-1"><a class="header-anchor" href="#statements-and-expressions" aria-hidden="true">#</a> Statements and Expressions</h2><h3 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h3><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">5u32</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> x_squared <span class="token operator">=</span> x <span class="token operator">*</span> x<span class="token punctuation">;</span>
        <span class="token keyword">let</span> x_cube <span class="token operator">=</span> x_squared <span class="token operator">*</span> x<span class="token punctuation">;</span>

        <span class="token comment">// This expression will be assigned to \`y\`</span>
        x_cube <span class="token operator">+</span> x_squared <span class="token operator">+</span> x
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> z <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token comment">// The semicolon suppresses this expression and \`()\` is assigned to \`z\`</span>
        <span class="token number">2</span> <span class="token operator">*</span> x<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;x is {:?}&quot;</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;y is {:?}&quot;</span><span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;z is {:?}&quot;</span><span class="token punctuation">,</span> z<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//</span>
<span class="token comment">//</span>
<span class="token comment">/*
  x is 5
  y is 155
  z is ()
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="exercises" tabindex="-1"><a class="header-anchor" href="#exercises" aria-hidden="true">#</a> Exercises</h3><h4 id="_1-🌟🌟" tabindex="-1"><a class="header-anchor" href="#_1-🌟🌟" aria-hidden="true">#</a> 1. 🌟🌟</h4>`,6),Hs=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token comment"},"// Make it work with two ways"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
   `),n("span",{class:"token keyword"},"let"),s(" v "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
       `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token keyword"},"mut"),s(" x "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
       x `),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"2"),s(`
   `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

   `),n("span",{class:"token macro property"},"assert_eq!"),n("span",{class:"token punctuation"},"("),s("v"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

   `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Success!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},`/*
     Compiling playground v0.0.1 (/playground)
  error[E0308]: mismatched types
   --> src/main.rs:8:4
    |
  8 |    assert_eq!(v, 3);
    |    ^^^^^^^^^^^^^^^^
    |    |
    |    expected \`()\`, found integer
    |    expected because this is \`()\`
    |
    = note: this error originates in the macro \`assert_eq\` (in Nightly builds, run with -Z macro-backtrace for more info)
  
  For more information about this error, try \`rustc --explain E0308\`.
  error: could not compile \`playground\` (bin "playground") due to previous error
*/`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Vs=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token comment"},"// Make it work with two ways"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" v "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token keyword"},"mut"),s(" x "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
        x `),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"2"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
 
    `),n("span",{class:"token macro property"},"assert_eq!"),n("span",{class:"token punctuation"},"("),s("v"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

   `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Success!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},`/*
  Success!
*/`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Xs=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token comment"},"// Make it work with two ways"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" v "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token keyword"},"mut"),s(" x "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
        x `),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},";"),s(`
        x
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token macro property"},"assert_eq!"),n("span",{class:"token punctuation"},"("),s("v"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

   `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Success!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},`/*
  Success!
*/`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ys=n("h4",{id:"_2-🌟-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2-🌟-2","aria-hidden":"true"},"#"),s(" 2. 🌟")],-1),js=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
   `),n("span",{class:"token keyword"},"let"),s(" v "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" x "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

   `),n("span",{class:"token macro property"},"assert!"),n("span",{class:"token punctuation"},"("),s("v "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

   `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Success!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},`/*
     Compiling playground v0.0.1 (/playground)
  error: expected expression, found \`let\` statement
   --> src/main.rs:3:13
    |
  3 |    let v = (let x = 3);
    |             ^^^
  
  error: expected expression, found statement (\`let\`)
   --> src/main.rs:3:13
    |
  3 |    let v = (let x = 3);
    |             ^^^^^^^^^
    |
    = note: variable declaration using \`let\` is a statement
  
  error[E0658]: \`let\` expressions in this position are unstable
   --> src/main.rs:3:13
    |
  3 |    let v = (let x = 3);
    |             ^^^^^^^^^
    |
    = note: see issue #53667 <https://github.com/rust-lang/rust/issues/53667> for more information
  
  warning: unnecessary parentheses around assigned value
   --> src/main.rs:3:12
    |
  3 |    let v = (let x = 3);
    |            ^         ^
    |
    = note: \`#[warn(unused_parens)]\` on by default
  help: remove these parentheses
    |
  3 -    let v = (let x = 3);
  3 +    let v = let x = 3;
    |
  
  error[E0308]: mismatched types
   --> src/main.rs:5:17
    |
  5 |    assert!(v == 3);
    |            -    ^ expected \`bool\`, found integer
    |            |
    |            expected because this is \`bool\`
  
  Some errors have detailed explanations: E0308, E0658.
  For more information about an error, try \`rustc --explain E0308\`.
  warning: \`playground\` (bin "playground") generated 1 warning
  error: could not compile \`playground\` (bin "playground") due to 4 previous errors; 1 warning
*/`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Zs=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" v "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" x "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},";"),s(`
        x
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

   `),n("span",{class:"token macro property"},"assert!"),n("span",{class:"token punctuation"},"("),s("v "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

   `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Success!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},`/*
  Success!
*/`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Js=n("h4",{id:"_3-🌟-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3-🌟-1","aria-hidden":"true"},"#"),s(" 3. 🌟")],-1),$s=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" s "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"sum"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),s(),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token macro property"},"assert_eq!"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Success!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"sum"),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"i32"),n("span",{class:"token punctuation"},","),s(" y"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"i32"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"->"),s(),n("span",{class:"token keyword"},"i32"),s(),n("span",{class:"token punctuation"},"{"),s(`
    x `),n("span",{class:"token operator"},"+"),s(" y"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},`/*
     Compiling playground v0.0.1 (/playground)
  error[E0308]: mismatched types
    --> src/main.rs:9:27
     |
  9  | fn sum(x: i32, y: i32) -> i32 {
     |    ---                    ^^^ expected \`i32\`, found \`()\`
     |    |
     |    implicitly returns \`()\` as its body has no tail or \`return\` expression
  10 |     x + y;
     |          - help: remove this semicolon to return this value
  
  For more information about this error, try \`rustc --explain E0308\`.
  error: could not compile \`playground\` (bin "playground") due to previous error
*/`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Gs=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" s "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"sum"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),s(),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token macro property"},"assert_eq!"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Success!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"sum"),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"i32"),n("span",{class:"token punctuation"},","),s(" y"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"i32"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"->"),s(),n("span",{class:"token keyword"},"i32"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" x "),n("span",{class:"token operator"},"+"),s(" y"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},`/*
  Success!
*/`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Qs=n("hr",null,null,-1),na=n("h2",{id:"functions",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#functions","aria-hidden":"true"},"#"),s(" Functions")],-1),sa=n("h4",{id:"_1-🌟🌟🌟",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-🌟🌟🌟","aria-hidden":"true"},"#"),s(" 1. 🌟🌟🌟")],-1),aa=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// Don't modify the following two lines!"),s(`
    `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token punctuation"},","),s(" y"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" s "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"sum"),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token punctuation"},","),s(" y"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token macro property"},"assert_eq!"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Success!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"sum"),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token punctuation"},","),s(" y"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"i32"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    x `),n("span",{class:"token operator"},"+"),s(" y"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},`/*
     Compiling playground v0.0.1 (/playground)
  error: expected one of \`:\`, \`@\`, or \`|\`, found \`,\`
    --> src/main.rs:12:9
     |
  12 | fn sum(x, y: i32) {
     |         ^ expected one of \`:\`, \`@\`, or \`|\`
     |
     = note: anonymous parameters are removed in the 2018 edition (see RFC 1685)
  help: if this is a \`self\` type, give it a parameter name
     |
  12 | fn sum(self: x, y: i32) {
     |        +++++
  help: if this is a parameter name, give it a type
     |
  12 | fn sum(x: TypeName, y: i32) {
     |         ++++++++++
  help: if this is a type, explicitly ignore the parameter name
     |
  12 | fn sum(_: x, y: i32) {
     |        ++
  
  error[E0308]: mismatched types
   --> src/main.rs:7:5
    |
  7 |     assert_eq!(s, 3);
    |     ^^^^^^^^^^^^^^^^
    |     |
    |     expected \`()\`, found integer
    |     expected because this is \`()\`
    |
    = note: this error originates in the macro \`assert_eq\` (in Nightly builds, run with -Z macro-backtrace for more info)
  
  For more information about this error, try \`rustc --explain E0308\`.
  error: could not compile \`playground\` (bin "playground") due to 2 previous errors 
*/`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ea=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// Don't modify the following two lines!"),s(`
    `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token punctuation"},","),s(" y"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" s "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"sum"),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token punctuation"},","),s(" y"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token macro property"},"assert_eq!"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Success!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"sum"),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"i32"),n("span",{class:"token punctuation"},","),s(" y"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"i32"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"->"),s(),n("span",{class:"token keyword"},"i32"),s(),n("span",{class:"token punctuation"},"{"),s(`
    x `),n("span",{class:"token operator"},"+"),s(` y
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},`/*
  Success!
*/`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ta=n("h4",{id:"_2-🌟-3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2-🌟-3","aria-hidden":"true"},"#"),s(" 2. 🌟")],-1),oa=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
   `),n("span",{class:"token function"},"print"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// Replace i32 with another type"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"print"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"->"),s(),n("span",{class:"token keyword"},"i32"),s(),n("span",{class:"token punctuation"},"{"),s(`
   `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Success!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},'/*\n     Compiling playground v0.0.1 (/playground)\n  error[E0308]: mismatched types\n   --> src/main.rs:6:15\n    |\n  6 | fn print() -> i32 {\n    |    -----      ^^^ expected `i32`, found `()`\n    |    |\n    |    implicitly returns `()` as its body has no tail or `return` expression\n  \n  For more information about this error, try `rustc --explain E0308`.\n  error: could not compile `playground` (bin "playground") due to previous error\n*/'),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),la=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
   `),n("span",{class:"token function"},"print"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// replace i32 with another type"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"print"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"->"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"hello,world"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},`/*
  hello,world
*/`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ia=n("h4",{id:"_3-🌟🌟🌟-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3-🌟🌟🌟-1","aria-hidden":"true"},"#"),s(" 3. 🌟🌟🌟")],-1),ca=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token comment"},"// Solve it in two ways"),s(`
`),n("span",{class:"token comment"},"// DON'T let `println!` works"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"never_return"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Failed!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"never_return"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"->"),s(),n("span",{class:"token operator"},"!"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// Implement this function, don't modify the fn signatures"),s(`
    
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},`/*
     Compiling playground v0.0.1 (/playground)
  warning: unreachable statement
   --> src/main.rs:6:5
    |
  4 |     never_return();
    |     -------------- any code following this expression is unreachable
  5 |
  6 |     println!("Failed!");
    |     ^^^^^^^^^^^^^^^^^^^ unreachable statement
    |
    = note: \`#[warn(unreachable_code)]\` on by default
    = note: this warning originates in the macro \`println\` (in Nightly builds, run with -Z macro-backtrace for more info)
  
  error[E0308]: mismatched types
   --> src/main.rs:9:22
    |
  9 | fn never_return() -> ! {
    |    ------------      ^ expected \`!\`, found \`()\`
    |    |
    |    implicitly returns \`()\` as its body has no tail or \`return\` expression
    |
    = note:   expected type \`!\`
            found unit type \`()\`
  
  For more information about this error, try \`rustc --explain E0308\`.
  warning: \`playground\` (bin "playground") generated 1 warning
  error: could not compile \`playground\` (bin "playground") due to previous error; 1 warning emitted
 */`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ua=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token comment"},"// Solve it in two ways"),s(`
`),n("span",{class:"token comment"},"// DON'T let `println!` works"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"never_return"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"never_return"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"->"),s(),n("span",{class:"token operator"},"!"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// implement this function, don't modify fn signatures"),s(`
    `),n("span",{class:"token macro property"},"panic!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"I return nothing!"'),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},`/*
     Compiling playground v0.0.1 (/playground)
      Finished dev [unoptimized + debuginfo] target(s) in 0.54s
       Running \`target/debug/playground\`
  thread 'main' panicked at 'I return nothing!', src/main.rs:8:5
  note: run with \`RUST_BACKTRACE=1\` environment variable to display a backtrace
*/`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),pa=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token comment"},"// Solve it in two ways"),s(`
`),n("span",{class:"token comment"},"// DON'T let `println!` works"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"never_return"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"use"),s(),n("span",{class:"token namespace"},[s("std"),n("span",{class:"token punctuation"},"::")]),s("thread"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"use"),s(),n("span",{class:"token namespace"},[s("std"),n("span",{class:"token punctuation"},"::")]),s("time"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"never_return"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"->"),s(),n("span",{class:"token operator"},"!"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// implement this function, don't modify fn signatures"),s(`
    `),n("span",{class:"token keyword"},"loop"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"I return nothing"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token comment"},"// sleeping for 1 second to avoid exhausting the cpu resource"),s(`
        `),n("span",{class:"token namespace"},[s("thread"),n("span",{class:"token punctuation"},"::")]),n("span",{class:"token function"},"sleep"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},[s("time"),n("span",{class:"token punctuation"},"::")]),n("span",{class:"token class-name"},"Duration"),n("span",{class:"token punctuation"},"::"),n("span",{class:"token function"},"from_secs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},`/*
     Compiling playground v0.0.1 (/playground)
      Finished dev [unoptimized + debuginfo] target(s) in 0.53s
       Running \`target/debug/playground\`
  /playground/tools/entrypoint.sh: line 11:     8 Killed                  timeout --signal=KILL \${timeout} "$@"
  I return nothing
  I return nothing
  I return nothing
  I return nothing
  I return nothing
  I return nothing
  I return nothing
  I return nothing
  I return nothing
  I return nothing 
*/`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ra=n("h3",{id:"diverging-functions",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#diverging-functions","aria-hidden":"true"},"#"),s(" Diverging functions")],-1),da=n("p",null,"Diverging functions never return to the caller, so they may be used in places where a value of any type is expected.",-1),ma=n("h4",{id:"_4-🌟🌟-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_4-🌟🌟-1","aria-hidden":"true"},"#"),s(" 4. 🌟🌟")],-1),ka=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Success!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"get_option"),n("span",{class:"token punctuation"},"("),s("tp"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"u8"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"->"),s(),n("span",{class:"token class-name"},"Option"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"i32"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"match"),s(" tp "),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token number"},"1"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token comment"},"// TODO"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        _ `),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token comment"},"// TODO"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    
    `),n("span",{class:"token comment"},"// Rather than returning a None, we use a diverging function instead"),s(`
    `),n("span",{class:"token function"},"never_return_fn"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// IMPLEMENT this function in THREE ways"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"never_return_fn"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"->"),s(),n("span",{class:"token operator"},"!"),s(),n("span",{class:"token punctuation"},"{"),s(`
    
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},'/*\n     Compiling playground v0.0.1 (/playground)\n  error[E0308]: mismatched types\n    --> src/main.rs:21:25\n     |\n  21 | fn never_return_fn() -> ! {\n     |    ---------------      ^ expected `!`, found `()`\n     |    |\n     |    implicitly returns `()` as its body has no tail or `return` expression\n     |\n     = note:   expected type `!`\n             found unit type `()`\n  \n  For more information about this error, try `rustc --explain E0308`.\n  error: could not compile `playground` (bin "playground") due to previous error\n*/'),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ba=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Success!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"get_option"),n("span",{class:"token punctuation"},"("),s("tp"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"u8"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"->"),s(),n("span",{class:"token class-name"},"Option"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"i32"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"match"),s(" tp "),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token number"},"1"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token comment"},"// TODO"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        _ `),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token comment"},"// TODO"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    
    `),n("span",{class:"token comment"},"// Rather than returning a None, we use a diverging function instead"),s(`
    `),n("span",{class:"token function"},"never_return_fn"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// IMPLEMENT this function in THREE ways"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"never_return_fn"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"->"),s(),n("span",{class:"token operator"},"!"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token macro property"},"unimplemented!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"/* Success! */"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),va=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Success!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"get_option"),n("span",{class:"token punctuation"},"("),s("tp"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"u8"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"->"),s(),n("span",{class:"token class-name"},"Option"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"i32"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"match"),s(" tp "),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token number"},"1"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token comment"},"// TODO"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        _ `),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token comment"},"// TODO"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    
    `),n("span",{class:"token comment"},"// Rather than returning a None, we use a diverging function instead"),s(`
    `),n("span",{class:"token function"},"never_return_fn"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// IMPLEMENT this function in THREE ways"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"never_return_fn"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"->"),s(),n("span",{class:"token operator"},"!"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token macro property"},"panic!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"/* Success! */"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ha=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Success!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"get_option"),n("span",{class:"token punctuation"},"("),s("tp"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"u8"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"->"),s(),n("span",{class:"token class-name"},"Option"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"i32"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"match"),s(" tp "),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token number"},"1"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token comment"},"// TODO"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        _ `),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token comment"},"// TODO"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    
    `),n("span",{class:"token comment"},"// Rather than returning a None, we use a diverging function instead"),s(`
    `),n("span",{class:"token function"},"never_return_fn"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// IMPLEMENT this function in THREE ways"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"never_return_fn"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"->"),s(),n("span",{class:"token operator"},"!"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token macro property"},"todo!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"/* Success! */"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ga=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Success!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"get_option"),n("span",{class:"token punctuation"},"("),s("tp"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"u8"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"->"),s(),n("span",{class:"token class-name"},"Option"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"i32"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"match"),s(" tp "),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token number"},"1"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token comment"},"// TODO"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        _ `),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token comment"},"// TODO"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    
    `),n("span",{class:"token comment"},"// Rather than returning a None, we use a diverging function instead"),s(`
    `),n("span",{class:"token function"},"never_return_fn"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// IMPLEMENT this function in THREE ways"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"never_return_fn"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"->"),s(),n("span",{class:"token operator"},"!"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"loop"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token namespace"},[s("std"),n("span",{class:"token punctuation"},"::"),s("thread"),n("span",{class:"token punctuation"},"::")]),n("span",{class:"token function"},"sleep"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},[s("std"),n("span",{class:"token punctuation"},"::"),s("time"),n("span",{class:"token punctuation"},"::")]),n("span",{class:"token class-name"},"Duration"),n("span",{class:"token punctuation"},"::"),n("span",{class:"token function"},"from_secs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},`/* 
  Success! 
*/`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),fa=n("h4",{id:"_5-🌟🌟-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_5-🌟🌟-2","aria-hidden":"true"},"#"),s(" 5. 🌟🌟")],-1),ya=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// FILL in the blank"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" b "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token constant"},"__"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"let"),s(" _v "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"match"),s(" b "),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token boolean"},"true"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// Diverging functions can also be used in match expression to replace a value of any value"),s(`
        `),n("span",{class:"token boolean"},"false"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Success!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token macro property"},"panic!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"we have no value for `false`, but we can panic"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Exercise Failed if printing out this line!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},`/*
     Compiling playground v0.0.1 (/playground)
  error[E0425]: cannot find value \`__\` in this scope
   --> src/main.rs:4:13
    |
  4 |     let b = __;
    |             ^^ not found in this scope
  
  For more information about this error, try \`rustc --explain E0425\`.
  error: could not compile \`playground\` (bin "playground") due to previous error
*/`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_a=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// FILL in the blank"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" b "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"let"),s(" _v "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"match"),s(" b "),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token boolean"},"true"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// Diverging functions can also be used in match expression"),s(`
        `),n("span",{class:"token boolean"},"false"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Success!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token macro property"},"panic!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"we have no value for `false`, but we can panic"'),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Exercise Failed if printing out this line!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},`/*
    Compiling playground v0.0.1 (/playground)
    Finished dev [unoptimized + debuginfo] target(s) in 0.53s
     Running \`target/debug/playground\`
  thread 'main' panicked at 'we have no value for \`false\`, but we can panic', src/main.rs:10:13
  note: run with \`RUST_BACKTRACE=1\` environment variable to display a backtrace
  Success!
*/`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),wa={class:"hint-container note"},xa=n("p",{class:"hint-container-title"},"Note",-1),Sa={href:"https://github.com/sunface/rust-by-practice",target:"_blank",rel:"noopener noreferrer"},Ta=n("code",null,"sunface/rust-by-practice",-1);function Ra(m,qa){const c=d("router-link"),b=d("VPCard"),r=d("ExternalLinkIcon"),p=d("FontIcon"),i=d("Tabs");return h(),g("div",null,[n("h1",x,[S,s(" "+k(m.$frontmatter.title)+" 관련",1)]),n("blockquote",null,[n("p",null,k(m.$frontmatter.description),1)]),n("nav",T,[n("ul",null,[n("li",null,[e(c,{to:"#data-types"},{default:a(()=>[s("Data Types")]),_:1}),n("ul",null,[n("li",null,[e(c,{to:"#introduction"},{default:a(()=>[s("Introduction")]),_:1})]),n("li",null,[e(c,{to:"#scalar-types"},{default:a(()=>[s("Scalar Types")]),_:1})]),n("li",null,[e(c,{to:"#compound-types"},{default:a(()=>[s("Compound Types")]),_:1})])])]),n("li",null,[e(c,{to:"#numbers"},{default:a(()=>[s("Numbers")]),_:1}),n("ul",null,[n("li",null,[e(c,{to:"#integer"},{default:a(()=>[s("Integer")]),_:1})]),n("li",null,[e(c,{to:"#floating-point"},{default:a(()=>[s("Floating-Point")]),_:1})]),n("li",null,[e(c,{to:"#range"},{default:a(()=>[s("Range")]),_:1})]),n("li",null,[e(c,{to:"#computations"},{default:a(()=>[s("Computations")]),_:1})])])]),n("li",null,[e(c,{to:"#char-bool-and-unit"},{default:a(()=>[s("Char, Bool and Unit")]),_:1}),n("ul",null,[n("li",null,[e(c,{to:"#char"},{default:a(()=>[s("Char")]),_:1})]),n("li",null,[e(c,{to:"#bool"},{default:a(()=>[s("Bool")]),_:1})]),n("li",null,[e(c,{to:"#unit-type"},{default:a(()=>[s("Unit type")]),_:1})])])]),n("li",null,[e(c,{to:"#statements-and-expressions"},{default:a(()=>[s("Statements and Expressions")]),_:1}),n("ul",null,[n("li",null,[e(c,{to:"#examples"},{default:a(()=>[s("Examples")]),_:1})]),n("li",null,[e(c,{to:"#exercises"},{default:a(()=>[s("Exercises")]),_:1})])])]),n("li",null,[e(c,{to:"#functions"},{default:a(()=>[s("Functions")]),_:1}),n("ul",null,[n("li",null,[e(c,{to:"#diverging-functions"},{default:a(()=>[s("Diverging functions")]),_:1})])])])])]),R,e(b,f(y({title:"Rust By Practice",desc:"3. Basic Types",link:"https://practice.rs/basic-types/numbers.html",logo:"https://github.com/sunface/rust-by-practice/blob/master/en/assets/header.jpg?raw=true",color:"rgba(22, 25, 35, 0.2)"})),null,16),_(" https://practice.rs/elegant-code-base.html "),q,A,E,z,n("p",null,[s("Keep in mind that Rust is a "),C,s(" language, which means that it must know the types of all variables at compile time. The compiler can usually infer what type we want to use based on the value and how we use it. In cases when many types are possible, such as when we converted a String to a numeric type using parse in the "),n("a",M,[s("“Comparing the Guess to the Secret Number”"),e(r)]),s(" section in Chapter 2, we must add a type annotation, like this:")]),F,n("p",null,[s("Each variant can be either signed or unsigned and has an explicit size. "),I,s(" and "),N,s(" refer to whether it’s possible for the number to be negative—in other words, whether the number needs to have a sign with it (signed) or whether it will only ever be positive and can therefore be represented without a sign (unsigned). It’s like writing numbers on paper: when the sign matters, a number is shown with a plus sign or a minus sign; however, when it’s safe to assume the number is positive, it’s shown with no sign. Signed numbers are stored using "),n("a",P,[s("two’s complement"),e(r)]),s(" representation.")]),O,D,n("div",B,[L,n("p",null,[s("Let’s say you have a variable of type "),U,s(" that can hold values between 0 and 255. If you try to change the variable to a value outside that range, such as 256, "),K,s(" will occur, which can result in one of two behaviors. When you’re compiling in debug mode, Rust includes checks for integer overflow that cause your program to "),W,s(" at runtime if this behavior occurs. Rust uses the term "),H,s(" when a program exits with an error; we’ll discuss panics in more depth in the "),n("a",V,[s("“Unrecoverable Errors with "),X,s("!”"),e(r)]),s(" section in Chapter 9.")]),Y]),j,n("p",null,[s("Filename: "),e(p,{icon:"iconfont icon-file"}),Z]),J,n("p",null,[s("Filename: "),e(p,{icon:"iconfont icon-file"}),$]),G,n("p",null,[s("Each expression in these statements uses a mathematical operator and evaluates to a single value, which is then bound to a variable. "),n("a",Q,[s("Appendix B"),e(r)]),s(" contains a list of all operators that Rust provides.")]),nn,sn,n("p",null,[s("Filename: "),e(p,{icon:"iconfont icon-file"}),an]),en,n("p",null,[s("The main way to use Boolean values is through conditionals, such as an "),tn,s(" expression. We’ll cover how if expressions work in Rust in the "),n("a",on,[s("“Control Flow”"),e(r)]),s(" section.")]),ln,cn,n("p",null,[s("Filename: "),e(p,{icon:"iconfont icon-file"}),un]),pn,n("p",null,[s("Note that we specify "),rn,s(" literals with single quotes, as opposed to string literals, which use double quotes. Rust’s "),dn,s(" type is four bytes in size and represents a Unicode Scalar Value, which means it can represent a lot more than just ASCII. Accented letters; Chinese, Japanese, and Korean characters; emoji; and zero-width spaces are all valid "),mn,s(" values in Rust. Unicode Scalar Values range from "),kn,s(" to "),bn,s(" and "),vn,s(" to "),hn,s(" inclusive. However, a “character” isn’t really a concept in Unicode, so your human intuition for what a “character” is may not match up with what a "),gn,s(" is in Rust. We’ll discuss this topic in detail in "),n("a",fn,[s("“Storing UTF-8 Encoded Text with Strings”"),e(r)]),s(" in Chapter 8.")]),yn,_n,wn,xn,Sn,n("p",null,[s("Filename: "),e(p,{icon:"iconfont icon-file"}),Tn]),Rn,n("p",null,[s("Filename: "),e(p,{icon:"iconfont icon-file"}),qn]),An,n("p",null,[s("Filename: "),e(p,{icon:"iconfont icon-file"}),En]),zn,n("p",null,[s("Filename: "),e(p,{icon:"iconfont icon-file"}),Cn]),Mn,n("p",null,[s("Arrays are useful when you want your data allocated on the stack rather than the heap (we will discuss the stack and the heap more in "),n("a",Fn,[s("Chapter 4"),e(r)]),s(") or when you want to ensure you always have a fixed number of elements. An array isn’t as flexible as the vector type, though. A "),In,s(" is a similar collection type provided by the standard library that "),Nn,s(" allowed to grow or shrink in size. If you’re unsure whether to use an array or a vector, chances are you should use a vector. "),n("a",Pn,[s("Chapter 8"),e(r)]),s(" discusses vectors in more detail.")]),On,n("p",null,[s("Filename: "),e(p,{icon:"iconfont icon-file"}),Dn]),Bn,n("p",null,[s("Filename: "),e(p,{icon:"iconfont icon-file"}),Ln]),Un,e(i,{id:"423",data:[{title:"💀Problem"},{title:"Solution"}],active:0},{tab0:a(({title:t,value:o,isActive:l})=>[Kn]),tab1:a(({title:t,value:o,isActive:l})=>[Wn]),_:1}),Hn,e(i,{id:"434",data:[{title:"💀Problem"},{title:"Solution"}],active:0},{tab0:a(({title:t,value:o,isActive:l})=>[Vn]),tab1:a(({title:t,value:o,isActive:l})=>[Xn]),_:1}),Yn,jn,e(i,{id:"450",data:[{title:"💀Problem"},{title:"Solution"}],active:0},{tab0:a(({title:t,value:o,isActive:l})=>[Zn]),tab1:a(({title:t,value:o,isActive:l})=>[Jn]),_:1}),$n,e(i,{id:"461",data:[{title:"💀Problem"},{title:"Solution"}],active:0},{tab0:a(({title:t,value:o,isActive:l})=>[Gn]),tab1:a(({title:t,value:o,isActive:l})=>[Qn]),_:1}),ns,e(i,{id:"472",data:[{title:"💀Problem"},{title:"Solution"}],active:0},{tab0:a(({title:t,value:o,isActive:l})=>[ss]),tab1:a(({title:t,value:o,isActive:l})=>[as]),_:1}),es,e(i,{id:"483",data:[{title:"💀Problem"},{title:"Solution"}],active:0},{tab0:a(({title:t,value:o,isActive:l})=>[ts]),tab1:a(({title:t,value:o,isActive:l})=>[os]),_:1}),ls,is,e(i,{id:"497",data:[{title:"💀Problem"},{title:"Solution"}],active:0},{tab0:a(({title:t,value:o,isActive:l})=>[cs]),tab1:a(({title:t,value:o,isActive:l})=>[us]),_:1}),ps,e(i,{id:"508",data:[{title:"💀Problem"},{title:"Solution"}],active:0},{tab0:a(({title:t,value:o,isActive:l})=>[rs]),tab1:a(({title:t,value:o,isActive:l})=>[ds]),_:1}),ms,e(i,{id:"537",data:[{title:"💀Problem"},{title:"Solution"}],active:0},{tab0:a(({title:t,value:o,isActive:l})=>[ks]),tab1:a(({title:t,value:o,isActive:l})=>[bs]),_:1}),vs,e(i,{id:"548",data:[{title:"💀Problem"},{title:"Solution"}],active:0},{tab0:a(({title:t,value:o,isActive:l})=>[hs]),tab1:a(({title:t,value:o,isActive:l})=>[gs]),_:1}),fs,ys,e(i,{id:"562",data:[{title:"💀Problem"},{title:"Solution"}],active:0},{tab0:a(({title:t,value:o,isActive:l})=>[_s]),tab1:a(({title:t,value:o,isActive:l})=>[ws]),_:1}),xs,e(i,{id:"580",data:[{title:"💀Problem"},{title:"Solution"}],active:0},{tab0:a(({title:t,value:o,isActive:l})=>[Ss]),tab1:a(({title:t,value:o,isActive:l})=>[Ts]),_:1}),Rs,e(i,{id:"591",data:[{title:"💀Problem"},{title:"Solution"}],active:0},{tab0:a(({title:t,value:o,isActive:l})=>[qs]),tab1:a(({title:t,value:o,isActive:l})=>[As]),_:1}),Es,zs,e(i,{id:"605",data:[{title:"💀Problem"},{title:"Solution"}],active:0},{tab0:a(({title:t,value:o,isActive:l})=>[Cs]),tab1:a(({title:t,value:o,isActive:l})=>[Ms]),_:1}),Fs,e(i,{id:"616",data:[{title:"💀Problem"},{title:"Solution"}],active:0},{tab0:a(({title:t,value:o,isActive:l})=>[Is]),tab1:a(({title:t,value:o,isActive:l})=>[Ns]),_:1}),Ps,Os,e(i,{id:"630",data:[{title:"💀Problem"},{title:"Solution"}],active:0},{tab0:a(({title:t,value:o,isActive:l})=>[Ds]),tab1:a(({title:t,value:o,isActive:l})=>[Bs]),_:1}),Ls,e(i,{id:"641",data:[{title:"💀Problem"},{title:"Solution"}],active:0},{tab0:a(({title:t,value:o,isActive:l})=>[Us]),tab1:a(({title:t,value:o,isActive:l})=>[Ks]),_:1}),Ws,e(i,{id:"663",data:[{title:"💀Problem"},{title:"Solution 1"},{title:"Solution 2"}],active:0},{tab0:a(({title:t,value:o,isActive:l})=>[Hs]),tab1:a(({title:t,value:o,isActive:l})=>[Vs]),tab2:a(({title:t,value:o,isActive:l})=>[Xs]),_:1}),Ys,e(i,{id:"677",data:[{title:"💀Problem"},{title:"Solution"}],active:0},{tab0:a(({title:t,value:o,isActive:l})=>[js]),tab1:a(({title:t,value:o,isActive:l})=>[Zs]),_:1}),Js,e(i,{id:"688",data:[{title:"💀Problem"},{title:"Solution"}],active:0},{tab0:a(({title:t,value:o,isActive:l})=>[$s]),tab1:a(({title:t,value:o,isActive:l})=>[Gs]),_:1}),Qs,na,sa,e(i,{id:"703",data:[{title:"💀Problem"},{title:"Solution"}],active:0},{tab0:a(({title:t,value:o,isActive:l})=>[aa]),tab1:a(({title:t,value:o,isActive:l})=>[ea]),_:1}),ta,e(i,{id:"714",data:[{title:"💀Problem"},{title:"Solution"}],active:0},{tab0:a(({title:t,value:o,isActive:l})=>[oa]),tab1:a(({title:t,value:o,isActive:l})=>[la]),_:1}),ia,e(i,{id:"725",data:[{title:"💀Problem"},{title:"Solution 1"},{title:"Solution 2"}],active:0},{tab0:a(({title:t,value:o,isActive:l})=>[ca]),tab1:a(({title:t,value:o,isActive:l})=>[ua]),tab2:a(({title:t,value:o,isActive:l})=>[pa]),_:1}),ra,da,ma,e(i,{id:"745",data:[{title:"💀Problem"},{title:"Solution 1"},{title:"Solution 2"},{title:"Solution 3"},{title:"Solution 4"}],active:0},{tab0:a(({title:t,value:o,isActive:l})=>[ka]),tab1:a(({title:t,value:o,isActive:l})=>[ba]),tab2:a(({title:t,value:o,isActive:l})=>[va]),tab3:a(({title:t,value:o,isActive:l})=>[ha]),tab4:a(({title:t,value:o,isActive:l})=>[ga]),_:1}),fa,e(i,{id:"765",data:[{title:"💀Problem"},{title:"Solution"}],active:0},{tab0:a(({title:t,value:o,isActive:l})=>[ya]),tab1:a(({title:t,value:o,isActive:l})=>[_a]),_:1}),n("div",wa,[xa,n("p",null,[s("You can find the solutions "),n("a",Sa,[s("here ("),e(p,{icon:"iconfont icon-github"}),Ta,s(")"),e(r)]),s(" (under the solutions path), but only use it when you need it")])])])}const Ea=v(w,[["render",Ra],["__file","03-basic-types.html.vue"]]);export{Ea as default};
