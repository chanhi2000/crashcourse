import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,a as n,t as c,b as e,w as a,n as d,g as u,e as m,r as i,o as h,d as t}from"./app-U_bew1in.js";const v={},k={id:"frontmatter-title-관련",tabindex:"-1"},b={class:"header-anchor",href:"#frontmatter-title-관련"},g={class:"table-of-contents"},y=n("hr",null,null,-1),f=m(`<hr><blockquote><p>Rust enum-match code generation</p></blockquote><h2 id="matching-an-enum-and-associated-fields" tabindex="-1"><a class="header-anchor" href="#matching-an-enum-and-associated-fields"><span>Matching an enum and associated fields</span></a></h2><p>Enums in Rust are discriminated unions that can save one of the multiple variants. The enum discriminator identifies the current interpretation of the discriminated union.</p><p>The following code shows a simple enum in Rust that represents a generalized <code>Number</code> that can be an <code>Integer</code>, a <code>Float</code> or <code>Complex</code>. Here <code>Number</code> is a container that can store a 64-bit integer (<code>i64</code>), a 64-bit floating-point number (<code>f64</code>) <strong>or</strong> a complex number (stored in a struct with two <code>f64</code> fields).</p><p>The code following the enum declaration declares a function <code>double</code> that takes a <code>Number</code> parameter and returns a <code>Number</code> that doubles the fields of whatever type of <code>Number</code> is found in the enum. The match statement in Rust is used to pattern match the contents and return the appropriate variant.</p><div class="language-rust line-numbers-mode" data-highlighter="prismjs" data-ext="rs" data-title="rs"><pre><code><span class="line"><span class="token keyword">pub</span> <span class="token keyword">enum</span> <span class="token type-definition class-name">Number</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">Integer</span><span class="token punctuation">(</span><span class="token keyword">i64</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token class-name">Float</span><span class="token punctuation">(</span><span class="token keyword">f64</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token class-name">Complex</span> <span class="token punctuation">{</span> real<span class="token punctuation">:</span> <span class="token keyword">f64</span><span class="token punctuation">,</span> imaginary<span class="token punctuation">:</span> <span class="token keyword">f64</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">double</span><span class="token punctuation">(</span>num<span class="token punctuation">:</span> <span class="token class-name">Number</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Number</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">match</span> num <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">Number</span><span class="token punctuation">::</span><span class="token class-name">Integer</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token class-name">Number</span><span class="token punctuation">::</span><span class="token class-name">Integer</span><span class="token punctuation">(</span>n <span class="token operator">+</span> n<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token class-name">Number</span><span class="token punctuation">::</span><span class="token class-name">Float</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token class-name">Number</span><span class="token punctuation">::</span><span class="token class-name">Float</span><span class="token punctuation">(</span>n <span class="token operator">+</span> n<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token class-name">Number</span><span class="token punctuation">::</span><span class="token class-name">Complex</span> <span class="token punctuation">{</span> real<span class="token punctuation">,</span> imaginary <span class="token punctuation">}</span> <span class="token operator">=&gt;</span> <span class="token class-name">Number</span><span class="token punctuation">::</span><span class="token class-name">Complex</span> <span class="token punctuation">{</span></span>
<span class="line">            real<span class="token punctuation">:</span> real <span class="token operator">+</span> real<span class="token punctuation">,</span></span>
<span class="line">            imaginary<span class="token punctuation">:</span> imaginary <span class="token operator">+</span> imaginary<span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="memory-layout-of-a-rust-enum" tabindex="-1"><a class="header-anchor" href="#memory-layout-of-a-rust-enum"><span>Memory layout of a Rust enum</span></a></h2><p>Before we proceed any further, let&#39;s look at the enum organization in memory. The size of the enum depends upon the largest variant. This example a <code>Number::Complex</code> requires two 64-bit floats. The total memory needed for the variant is 16 bytes. The size of the enum is 24 bytes. The extra 8 bytes are used to store a 64-bit discriminator that is used to identify the variant currently saved in the enum.</p><table><thead><tr><th style="text-align:left;"><strong>Byte offset</strong></th><th style="text-align:left;"><code>Integer</code></th><th style="text-align:left;"><code>Float</code></th><th style="text-align:left;"><code>Complex</code></th></tr></thead><tbody><tr><td style="text-align:left;">0</td><td style="text-align:left;">Discriminator (0)</td><td style="text-align:left;">Discriminator (1)</td><td style="text-align:left;">Discriminator (2)</td></tr><tr><td style="text-align:left;">8</td><td style="text-align:left;">i64</td><td style="text-align:left;">f64</td><td style="text-align:left;">f64</td></tr><tr><td style="text-align:left;">16</td><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;">f64</td></tr></tbody></table><div class="hint-container tip"><p class="hint-container-title">Note</p><p><strong>Note</strong>: A 64-bit discriminator might seem wasteful here. Due to padding rules, a smaller discriminator would not have saved any memory. Rust does switch to a smaller discriminator when reducing the size permits addition of smaller fields.</p></div><hr><h2 id="overview-of-the-generated-code" tabindex="-1"><a class="header-anchor" href="#overview-of-the-generated-code"><span>Overview of the generated code</span></a></h2><p>Before we dig deep into the assembly, let&#39;s get an overview of the generated code via the following flowchart. The code branches based on the enum discriminator and handles the processing of each enum tag separately. The results and the discriminator values are written at the provided return address.</p><figure><img src="https://eventhelix.com/rust/rust-to-assembly-enum-match/enum-match-rust-generated-assembly-overview.svg" alt="Assembly code overview enum matching" tabindex="0" loading="lazy"><figcaption>Assembly code overview enum matching</figcaption></figure><hr><h2 id="deep-dive-into-the-generated-code" tabindex="-1"><a class="header-anchor" href="#deep-dive-into-the-generated-code"><span>Deep dive into the generated code</span></a></h2><p>Now that we understand the basic flow of the generated code, let&#39;s analyze the generated assembly code. The following graph shows the branching structure of the generated assembly. The top box and middle-right boxes check the discriminator and then invoke the appropriate variant handling code (the three leaf boxes).</p><figure><img src="https://eventhelix.com/rust/images/rust-enum-match-assembly-branching-tree.png" alt="Branching structure of the generated assembly" tabindex="0" loading="lazy"><figcaption>Branching structure of the generated assembly</figcaption></figure><p>Let&#39;s now look at each line of the generated assembly. We have annotated the assembly code to aid in the understanding of the code. The generated code looks at the discriminator and then accesses the fields corresponding to selected variants. The code then doubles the individual fields associated with the variant. The enum with doubled values is returned from the function. The function also copies the discriminator field to the enum that is being returned.</p><div class="language-armasm line-numbers-mode" data-highlighter="prismjs" data-ext="armasm" data-title="armasm"><pre><code><span class="line"><span class="token comment">; The caller passes the following parameters:</span></span>
<span class="line"><span class="token comment">;   🔡 rsi: Address of the enum</span></span>
<span class="line"><span class="token comment">;   🔡 rdi: Address of the enum to be returned. </span></span>
<span class="line"></span>
<span class="line">example::double:</span>
<span class="line">        mov     rax<span class="token punctuation">,</span> rdi                   <span class="token comment">; rax now contains the address to the return value</span></span>
<span class="line">        mov     rcx<span class="token punctuation">,</span> qword ptr <span class="token punctuation">[</span>rsi<span class="token punctuation">]</span>       <span class="token comment">; Extract the union discriminator</span></span>
<span class="line">        test    rcx<span class="token punctuation">,</span> rcx                   <span class="token comment">; Check if the discriminator is 0 (Number::Integer)</span></span>
<span class="line">        je      .LBB0_5                    <span class="token comment">; Jump if the discriminator is 0.</span></span>
<span class="line">        cmp     ecx<span class="token punctuation">,</span> <span class="token number">1</span>                     <span class="token comment">; Check if the discriminator is 1 (Number::Float).</span></span>
<span class="line">        jne     .LBB0_3                    <span class="token comment">; Jump if discriminator is 2 (Number::Complex)</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">; ⭐ Number::Float match processing (discriminator is 1)</span></span>
<span class="line">        movsd   xmm0<span class="token punctuation">,</span> qword ptr <span class="token punctuation">[</span>rsi <span class="token operator">+</span> <span class="token number">8</span><span class="token punctuation">]</span>  <span class="token comment">; Move the floating point number in xmm0</span></span>
<span class="line">        addsd   xmm0<span class="token punctuation">,</span> xmm0                 <span class="token comment">; Double the number</span></span>
<span class="line">        movsd   qword ptr <span class="token punctuation">[</span>rax <span class="token operator">+</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">,</span> xmm0  <span class="token comment">; Save in value in the return value</span></span>
<span class="line">        mov     qword ptr <span class="token punctuation">[</span>rax<span class="token punctuation">]</span><span class="token punctuation">,</span> rcx       <span class="token comment">; Copy the discriminator into the return value</span></span>
<span class="line">        ret</span>
<span class="line">.LBB0_5:</span>
<span class="line">        <span class="token comment">; ⭐ Number::Integer match processing (discriminator is 0)</span></span>
<span class="line">        mov     rdx<span class="token punctuation">,</span> qword ptr <span class="token punctuation">[</span>rsi <span class="token operator">+</span> <span class="token number">8</span><span class="token punctuation">]</span>    <span class="token comment">; Move the integer</span></span>
<span class="line">        add     rdx<span class="token punctuation">,</span> rdx                    <span class="token comment">; Double the number</span></span>
<span class="line">        mov     qword ptr <span class="token punctuation">[</span>rax <span class="token operator">+</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">,</span> rdx    <span class="token comment">; Write the number to the return value</span></span>
<span class="line">        mov     qword ptr <span class="token punctuation">[</span>rax<span class="token punctuation">]</span><span class="token punctuation">,</span> rcx        <span class="token comment">; Write the discriminator to the return value</span></span>
<span class="line">        ret</span>
<span class="line">.LBB0_3:</span>
<span class="line">        <span class="token comment">; ⭐ Number::Complex match processing (discriminator is 2)</span></span>
<span class="line">        <span class="token comment">; The following code performs vector operations on the real and imaginary parts.</span></span>
<span class="line">        <span class="token comment">; The vector operations 64-bit real and imaginary parts are processed in parallel</span></span>
<span class="line">        <span class="token comment">; in the xmm0 register.</span></span>
<span class="line"></span>
<span class="line">        movupd  xmm0<span class="token punctuation">,</span> xmmword ptr <span class="token punctuation">[</span>rsi <span class="token operator">+</span> <span class="token number">8</span><span class="token punctuation">]</span> <span class="token comment">; Read the real and imaginary parts into xmm0</span></span>
<span class="line">        addpd   xmm0<span class="token punctuation">,</span> xmm0                  <span class="token comment">; Double the real and imaginary parts </span></span>
<span class="line">        movupd  xmmword ptr <span class="token punctuation">[</span>rax <span class="token operator">+</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">,</span> xmm0 <span class="token comment">; Update the real and imaginary parts</span></span>
<span class="line">        mov     qword ptr <span class="token punctuation">[</span>rax<span class="token punctuation">]</span><span class="token punctuation">,</span> rcx        <span class="token comment">; Set the discriminator in the return value</span></span>
<span class="line">        ret</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="key-takeaways" tabindex="-1"><a class="header-anchor" href="#key-takeaways"><span>Key takeaways</span></a></h2><ul><li>The Rust compiler adds an extra 8 bytes to the enum to store the discriminator. This is used to identify the variant currently stored in the enum.</li><li>The size of the enum depends upon the largest variant. In this example, the largest variant is <code>Number::Complex</code> that requires 16 bytes. The discriminator is 64-bits wide and hence requires 8 bytes.</li><li>The size of the discriminator depends upon the range of values that can be stored in the enum. However, in most scenarios, the alignment requirements dictate the size of the discriminator.</li><li>The generated assembly code branches based on the discriminator and then processes the fields of the variant.</li></ul><hr><h2 id="experiment-in-the-compiler-explorer" tabindex="-1"><a class="header-anchor" href="#experiment-in-the-compiler-explorer"><span>Experiment in the Compiler Explorer</span></a></h2><p>Experiment in the <a href="https://godbolt.org/z/eqTKs79fd" target="_blank" rel="noopener noreferrer">Compiler Explorer</a> with the code in this post. Change the <code>Number</code> enum to use 32-bit types as shown below. The enum discriminator field is 32-bit.</p><div class="language-rust line-numbers-mode" data-highlighter="prismjs" data-ext="rs" data-title="rs"><pre><code><span class="line"><span class="token keyword">pub</span> <span class="token keyword">enum</span> <span class="token type-definition class-name">Number</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">Integer</span><span class="token punctuation">(</span><span class="token keyword">i32</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token class-name">Float</span><span class="token punctuation">(</span><span class="token keyword">f32</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token class-name">Complex</span> <span class="token punctuation">{</span> real<span class="token punctuation">:</span> <span class="token keyword">f32</span><span class="token punctuation">,</span> imaginary<span class="token punctuation">:</span> <span class="token keyword">f32</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29);function x(o,w){const s=i("router-link"),l=i("VPCard");return h(),r("div",null,[n("h1",k,[n("a",b,[n("span",null,c(o.$frontmatter.title)+" 관련",1)])]),n("nav",g,[n("ul",null,[n("li",null,[e(s,{to:"#matching-an-enum-and-associated-fields"},{default:a(()=>[t("Matching an enum and associated fields")]),_:1})]),n("li",null,[e(s,{to:"#memory-layout-of-a-rust-enum"},{default:a(()=>[t("Memory layout of a Rust enum")]),_:1})]),n("li",null,[e(s,{to:"#overview-of-the-generated-code"},{default:a(()=>[t("Overview of the generated code")]),_:1})]),n("li",null,[e(s,{to:"#deep-dive-into-the-generated-code"},{default:a(()=>[t("Deep dive into the generated code")]),_:1})]),n("li",null,[e(s,{to:"#key-takeaways"},{default:a(()=>[t("Key takeaways")]),_:1})]),n("li",null,[e(s,{to:"#experiment-in-the-compiler-explorer"},{default:a(()=>[t("Experiment in the Compiler Explorer")]),_:1})])])]),y,e(l,d(u({title:"Rust enum and match representation in assembly",desc:"Learn how enums are organized in memory. Also understand the generated assembly code for match on an enum.",link:"https://eventhelix.com/rust/rust-to-assembly-enum-match",logo:"https://eventhelix.com/images/EventHelix-white-rounded-bg-blue.png",background:"rgba(250,250,250,0.2)"})),null,16),f])}const N=p(v,[["render",x],["__file","rust-enum-and-match-representation-in-assembly.html.vue"]]),R=JSON.parse('{"path":"/rust/eventhelix-rust-to-assembly/rust-enum-and-match-representation-in-assembly.html","title":"Rust enum and match representation in assembly","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Rust enum and match representation in assembly","description":"Rust to Assembly > Rust enum and match representation in assembly","category":["Rust"],"tag":["crashcourse","digitalocean","eventhelix","rust","rs","wasm","assembly"],"head":[[{"meta":null},{"property":"og:title","content":"Rust to Assembly > Rust enum and match representation in assembly"},{"property":"og:description","content":"Rust enum and match representation in assembly"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/rust/eventhelix-rust-to-assembly/rust-enum-and-match-representation-in-assembly.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/crashcourse/rust/eventhelix-rust-to-assembly/rust-enum-and-match-representation-in-assembly.html"}],["meta",{"property":"og:site_name","content":"🥁Crashcourse"}],["meta",{"property":"og:title","content":"Rust enum and match representation in assembly"}],["meta",{"property":"og:description","content":"Rust to Assembly > Rust enum and match representation in assembly"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://eventhelix.com/rust/rust-to-assembly-enum-match/enum-match-rust-generated-assembly-overview.svg"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-03-20T07:03:32.000Z"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"digitalocean"}],["meta",{"property":"article:tag","content":"eventhelix"}],["meta",{"property":"article:tag","content":"rust"}],["meta",{"property":"article:tag","content":"rs"}],["meta",{"property":"article:tag","content":"wasm"}],["meta",{"property":"article:tag","content":"assembly"}],["meta",{"property":"article:modified_time","content":"2024-03-20T07:03:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Rust enum and match representation in assembly\\",\\"image\\":[\\"https://eventhelix.com/rust/rust-to-assembly-enum-match/enum-match-rust-generated-assembly-overview.svg\\",\\"https://eventhelix.com/rust/images/rust-enum-match-assembly-branching-tree.png\\"],\\"dateModified\\":\\"2024-03-20T07:03:32.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Matching an enum and associated fields","slug":"matching-an-enum-and-associated-fields","link":"#matching-an-enum-and-associated-fields","children":[]},{"level":2,"title":"Memory layout of a Rust enum","slug":"memory-layout-of-a-rust-enum","link":"#memory-layout-of-a-rust-enum","children":[]},{"level":2,"title":"Overview of the generated code","slug":"overview-of-the-generated-code","link":"#overview-of-the-generated-code","children":[]},{"level":2,"title":"Deep dive into the generated code","slug":"deep-dive-into-the-generated-code","link":"#deep-dive-into-the-generated-code","children":[]},{"level":2,"title":"Key takeaways","slug":"key-takeaways","link":"#key-takeaways","children":[]},{"level":2,"title":"Experiment in the Compiler Explorer","slug":"experiment-in-the-compiler-explorer","link":"#experiment-in-the-compiler-explorer","children":[]}],"git":{"createdTime":1703642364000,"updatedTime":1710918212000,"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":6}]},"readingTime":{"minutes":3.68,"words":1103},"filePathRelative":"rust/eventhelix-rust-to-assembly/rust-enum-and-match-representation-in-assembly.md","localizedDate":"2023년 12월 27일","excerpt":"\\n\\n<hr>\\n"}');export{N as comp,R as data};