import{_ as h}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as m,a as n,t as k,b as s,w as o,n as i,g as l,d as a,e as t,r,o as g}from"./app-U_bew1in.js";const f={},w={id:"frontmatter-title-관련",tabindex:"-1"},v={class:"header-anchor",href:"#frontmatter-title-관련"},y={class:"table-of-contents"},b=n("hr",null,null,-1),_=n("h2",{id:"protocols-and-extensions",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#protocols-and-extensions"},[n("span",null,"Protocols and extensions")])],-1),x=n("p",null,"Today you’re going to learn some truly Swifty functionality: protocols and protocol-oriented programming (POP).",-1),P=n("p",null,"POP does away with large, complex inheritance hierarchies, and replaces them with much smaller, simpler protocols that can be combined together. This really is the fulfillment of something Tony Hoare said many years ago: “inside every large program, there is a small program trying to get out.”",-1),q=n("p",null,[n("strong",null,"Today you have six one-minute videos to watch, and you’ll meet protocols, extensions, and the combination of those two: protocol extensions."),a(" Once you’ve watched each video and any optional extra reading you wanted, there’s a short test to help make sure you’ve understood what was taught.")],-1),D=n("h3",{id:"_1-protocols",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-protocols"},[n("span",null,"1. Protocols")])],-1),S={class:"hint-container details"},T=n("summary",null,"1. Protocols",-1),j=t(`<p>Protocols are a way of describing what properties and methods something must have. You then tell Swift which types use that protocol – a process known as adopting or conforming to a protocol.</p><p>For example, we can write a function that accepts something with an <code>id</code> property, but we don’t care precisely what type of data is used. We’ll start by creating an <code>Identifiable</code> protocol, which will require all conforming types to have an <code>id</code> string that can be read (“get”) or written (“set”):</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">protocol</span> <span class="token class-name">Identifiable</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">var</span> id<span class="token punctuation">:</span> <span class="token class-name">String</span> <span class="token punctuation">{</span> <span class="token keyword">get</span> <span class="token keyword">set</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>We can’t create instances of that protocol - it’s a description of what we want, rather than something we can create and use directly. But we can create a struct that conforms to it:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">struct</span> <span class="token class-name">User</span><span class="token punctuation">:</span> <span class="token class-name">Identifiable</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">var</span> id<span class="token punctuation">:</span> <span class="token class-name">String</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Finally, we’ll write a <code>displayID()</code> function that accepts any <code>Identifiable</code> object:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">func</span> <span class="token function-definition function">displayID</span><span class="token punctuation">(</span>thing<span class="token punctuation">:</span> <span class="token class-name">Identifiable</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;My ID is </span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">thing<span class="token punctuation">.</span>id</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),I=t('<div class="hint-container info"><p class="hint-container-title">1. Protocols - Additional</p><ul><li>Optional: <a href="https://hackingwithswift.com/quick-start/understanding-swift/why-does-swift-need-protocols" target="_blank" rel="noopener noreferrer">Why does Swift need protocols?</a></li><li>Test: <a href="https://hackingwithswift.com/review/protocols" target="_blank" rel="noopener noreferrer">Protocols</a></li></ul></div><h3 id="_2-protocol-inheritance" tabindex="-1"><a class="header-anchor" href="#_2-protocol-inheritance"><span>2. Protocol inheritance</span></a></h3>',2),E={class:"hint-container details"},V=n("summary",null,"2. Protocol inheritance",-1),W=t(`<p>One protocol can inherit from another in a process known as protocol inheritance. Unlike with classes, you can inherit from multiple protocols at the same time before you add your own customizations on top.</p><p>We’re going to define three protocols: <code>Payable</code> requires conforming types to implement a <code>calculateWages()</code> method, <code>NeedsTraining</code> requires conforming types to implement a <code>study()</code> method, and <code>HasVacation</code> requires conforming types to implement a <code>takeVacation()</code> method:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">protocol</span> <span class="token class-name">Payable</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">func</span> <span class="token function-definition function">calculateWages</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Int</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">protocol</span> <span class="token class-name">NeedsTraining</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">func</span> <span class="token function-definition function">study</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">protocol</span> <span class="token class-name">HasVacation</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">func</span> <span class="token function-definition function">takeVacation</span><span class="token punctuation">(</span>days<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>We can now create a single <code>Employee</code> protocol that brings them together in one protocol. We don’t need to add anything on top, so we’ll just write open and close braces:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">protocol</span> <span class="token class-name">Employee</span><span class="token punctuation">:</span> <span class="token class-name">Payable</span><span class="token punctuation">,</span> <span class="token class-name">NeedsTraining</span><span class="token punctuation">,</span> <span class="token class-name">HasVacation</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Now we can make new types conform to that single protocol rather than each of the three individual ones.</p>`,6),N=t('<div class="hint-container info"><p class="hint-container-title">2. Protocol inheritance - Additional</p><ul><li>Optional: <a href="https://hackingwithswift.com/quick-start/understanding-swift/when-should-we-use-protocol-inheritance" target="_blank" rel="noopener noreferrer">When should we use protocol inheritance?</a></li><li>Test: <a href="https://hackingwithswift.com/review/protocol-inheritance" target="_blank" rel="noopener noreferrer">Protocol inheritance</a></li></ul></div><h3 id="_3-extensions" tabindex="-1"><a class="header-anchor" href="#_3-extensions"><span>3. Extensions</span></a></h3>',2),O={class:"hint-container details"},z=n("summary",null,"3. Extensions",-1),A=t(`<p>Extensions allow you to add methods to existing types, to make them do things they weren’t originally designed to do.</p><p>For example, we could add an extension to the <code>Int</code> type so that it has a <code>squared()</code> method that returns the current number multiplied by itself:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">extension</span> <span class="token class-name">Int</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">func</span> <span class="token function-definition function">squared</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Int</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token keyword">self</span> <span class="token operator">*</span> <span class="token keyword">self</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To try that out, just create an integer and you’ll see it now has a <code>squared()</code> method:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">let</span> number <span class="token operator">=</span> <span class="token number">8</span></span>
<span class="line">number<span class="token punctuation">.</span><span class="token function">squared</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>Swift doesn’t let you add stored properties in extensions, so you must use computed properties instead. For example, we could add a new <code>isEven</code> computed property to integers that returns true if it holds an even number:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">extension</span> <span class="token class-name">Int</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">var</span> isEven<span class="token punctuation">:</span> <span class="token class-name">Bool</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token keyword">self</span> <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),F=t('<div class="hint-container info"><p class="hint-container-title">3. Extensions - Additional</p><ul><li>Optional: <a href="https://hackingwithswift.com/quick-start/understanding-swift/when-should-you-use-extensions-in-swift" target="_blank" rel="noopener noreferrer">When should you use extensions in Swift?</a></li><li>Test: <a href="https://hackingwithswift.com/review/extensions" target="_blank" rel="noopener noreferrer">Extensions</a></li></ul></div><h3 id="_4-protocol-extensions" tabindex="-1"><a class="header-anchor" href="#_4-protocol-extensions"><span>4. Protocol extensions</span></a></h3>',2),U={class:"hint-container details"},B=n("summary",null,"4. Protocol extensions",-1),C=t(`<p>Protocols let you describe what methods something should have, but don’t provide the code inside. Extensions let you provide the code inside your methods, but only affect one data type – you can’t add the method to lots of types at the same time.</p><p>Protocol extensions solve both those problems: they are like regular extensions, except rather than extending a specific type like <code>Int</code> you extend a whole protocol so that all conforming types get your changes.</p><p>For example, here is an array and a set containing some names:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">let</span> pythons <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&quot;Eric&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;Graham&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;John&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;Michael&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;Terry&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;Terry&quot;</span></span><span class="token punctuation">]</span></span>
<span class="line"><span class="token keyword">let</span> beatles <span class="token operator">=</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&quot;John&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;Paul&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;George&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;Ringo&quot;</span></span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>Swift’s arrays and sets both conform to a protocol called <code>Collection</code>, so we can write an extension to that protocol to add a <code>summarize()</code> method to print the collection neatly</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">extension</span> <span class="token class-name">Collection</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">func</span> <span class="token function-definition function">summarize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;There are </span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">count</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string"> of us:&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">for</span> name <span class="token keyword">in</span> <span class="token keyword">self</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">print</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Both <code>Array</code> and <code>Set</code> will now have that method, so we can try it out:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line">pythons<span class="token punctuation">.</span><span class="token function">summarize</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">beatles<span class="token punctuation">.</span><span class="token function">summarize</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,8),M=t('<div class="hint-container info"><p class="hint-container-title">4. Protocol extensions - Additional</p><ul><li>Optional: <a href="https://hackingwithswift.com/quick-start/understanding-swift/when-are-protocol-extensions-useful-in-swift" target="_blank" rel="noopener noreferrer">When are protocol extensions useful in Swift?</a></li><li>Test: <a href="https://hackingwithswift.com/review/protocol-extensions" target="_blank" rel="noopener noreferrer">Protocol extensions</a></li></ul></div><h3 id="_5-protocol-oriented-programming" tabindex="-1"><a class="header-anchor" href="#_5-protocol-oriented-programming"><span>5. Protocol-oriented programming</span></a></h3>',2),R={class:"hint-container details"},H=n("summary",null,"5. Protocol-oriented programming",-1),J=t(`<p>Protocol extensions can provide default implementations for our own protocol methods. This makes it easy for types to conform to a protocol, and allows a technique called “protocol-oriented programming” – crafting your code around protocols and protocol extensions.</p><p>First, here’s a protocol called <code>Identifiable</code> that requires any conforming type to have an <code>id</code> property and an <code>identify()</code> method:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">protocol</span> <span class="token class-name">Identifiable</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">var</span> id<span class="token punctuation">:</span> <span class="token class-name">String</span> <span class="token punctuation">{</span> <span class="token keyword">get</span> <span class="token keyword">set</span> <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">func</span> <span class="token function-definition function">identify</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>We could make every conforming type write their own <code>identify()</code> method, but protocol extensions allow us to provide a default:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">extension</span> <span class="token class-name">Identifiable</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">func</span> <span class="token function-definition function">identify</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;My ID is </span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">id</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">.&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now when we create a type that conforms to <code>Identifiable</code> it gets <code>identify()</code> automatically:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">struct</span> <span class="token class-name">User</span><span class="token punctuation">:</span> <span class="token class-name">Identifiable</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">var</span> id<span class="token punctuation">:</span> <span class="token class-name">String</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> twostraws <span class="token operator">=</span> <span class="token class-name">User</span><span class="token punctuation">(</span>id<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;twostraws&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">twostraws<span class="token punctuation">.</span><span class="token function">identify</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),K=t('<div class="hint-container info"><p class="hint-container-title">5. Protocol-oriented programming - Additional</p><ul><li>Optional: <a href="https://hackingwithswift.com/quick-start/understanding-swift/how-is-protocol-oriented-programming-different-from-object-oriented-programming" target="_blank" rel="noopener noreferrer">How is protocol-oriented programming different from object-oriented programming?</a></li><li>Test: <a href="https://hackingwithswift.com/review/protocol-oriented-programming" target="_blank" rel="noopener noreferrer">Protocol-oriented programming</a></li></ul></div><h3 id="_6-protocols-and-extensions-summary" tabindex="-1"><a class="header-anchor" href="#_6-protocols-and-extensions-summary"><span>6. Protocols and extensions summary</span></a></h3>',2),Y={class:"hint-container details"},Z=n("summary",null,"6. Protocols and extensions summary",-1),G=n("p",null,"You’ve made it to the end of the ninth part of this series, so let’s summarize:",-1),Q=n("ol",null,[n("li",null,"Protocols describe what methods and properties a conforming type must have, but don’t provide the implementations of those methods."),n("li",null,"You can build protocols on top of other protocols, similar to classes."),n("li",null,[a("Extensions let you add methods and computed properties to specific types such as "),n("code",null,"Int"),a(".")]),n("li",null,"Protocol extensions let you add methods and computed properties to protocols."),n("li",null,"Protocol-oriented programming is the practice of designing your app architecture as a series of protocols, then using protocol extensions to provide default method implementations.")],-1),X=n("div",{class:"hint-container info"},[n("p",{class:"hint-container-title"},"6. Protocols and extensions summary - Additional"),n("ul",null,[n("li",null,[a("Test: "),n("a",{href:"https://hackingwithswift.com/review/protocols-and-extensions-summary",target:"_blank",rel:"noopener noreferrer"},"Protocols and extensions")])])],-1),$=n("p",null,"That’s day 11 complete, so hopefully by now you know what to do: go and post about your progress online on Twitter, Facebook, Reddit, or whatever social media you like. You’re powered by POP now!",-1),L=n("hr",null,null,-1);function nn(d,sn){const e=r("router-link"),u=r("Protocols"),c=r("VPCard"),p=r("VidStack");return g(),m("div",null,[n("h1",w,[n("a",v,[n("span",null,k(d.$frontmatter.title)+" 관련",1)])]),n("nav",y,[n("ul",null,[n("li",null,[s(e,{to:"#protocols-and-extensions"},{default:o(()=>[a("Protocols and extensions")]),_:1}),n("ul",null,[n("li",null,[s(e,{to:"#_1-protocols"},{default:o(()=>[a("1. Protocols")]),_:1})]),n("li",null,[s(e,{to:"#_2-protocol-inheritance"},{default:o(()=>[a("2. Protocol inheritance")]),_:1})]),n("li",null,[s(e,{to:"#_3-extensions"},{default:o(()=>[a("3. Extensions")]),_:1})]),n("li",null,[s(e,{to:"#_4-protocol-extensions"},{default:o(()=>[a("4. Protocol extensions")]),_:1})]),n("li",null,[s(e,{to:"#_5-protocol-oriented-programming"},{default:o(()=>[a("5. Protocol-oriented programming")]),_:1})]),n("li",null,[s(e,{to:"#_6-protocols-and-extensions-summary"},{default:o(()=>[a("6. Protocols and extensions summary")]),_:1})])])])])]),b,s(u,i(l({title:"100 Days of Swift - Day 11",desc:"Protocols and extensions",link:"https://www.hackingwithswift.com/100/11",logo:"https://www.hackingwithswift.com/favicon.svg",background:"rgba(213,52,58,0.2)"})),null,16),_,x,P,q,D,n("details",S,[T,s(c,i(l({title:"100 Days of Swift - Day 11 - 1. Protocols",desc:"1. Protocols",link:"https://hackingwithswift.com/sixty/9/1/protocols",logo:"https://www.hackingwithswift.com/favicon.svg",background:"rgba(213,52,58,0.2)"})),null,16),s(p,{src:"youtube/qi8a9MartqQ"}),j]),I,n("details",E,[V,s(c,i(l({title:"100 Days of Swift - Day 11 - 2. Protocol inheritance",desc:"2. Protocol inheritance",link:"https://hackingwithswift.com/sixty/9/2/protocol-inheritance",logo:"https://www.hackingwithswift.com/favicon.svg",background:"rgba(213,52,58,0.2)"})),null,16),s(p,{src:"youtube/9UzJwD8kTP0"}),W]),N,n("details",O,[z,s(c,i(l({title:"100 Days of Swift - Day 11 - 3. Extensions",desc:"3. Extensions",link:"https://hackingwithswift.com/sixty/9/3/extensions",logo:"https://www.hackingwithswift.com/favicon.svg",background:"rgba(213,52,58,0.2)"})),null,16),s(p,{src:"youtube/hq3xX_nlgB8"}),A]),F,n("details",U,[B,s(c,i(l({title:"100 Days of Swift - Day 11 - 4. Protocol extensions",desc:"4. Protocol extensions",link:"https://hackingwithswift.com/sixty/9/4/protocol-extensions",logo:"https://www.hackingwithswift.com/favicon.svg",background:"rgba(213,52,58,0.2)"})),null,16),s(p,{src:"youtube/nj5N4aMjtUw"}),C]),M,n("details",R,[H,s(c,i(l({title:"100 Days of Swift - Day 11 - 5. Protocol-oriented programming",desc:"5. Protocol-oriented programming",link:"https://hackingwithswift.com/sixty/9/5/protocol-oriented-programming",logo:"https://www.hackingwithswift.com/favicon.svg",background:"rgba(213,52,58,0.2)"})),null,16),s(p,{src:"youtube/-IU_TvFKqjo"}),J]),K,n("details",Y,[Z,s(c,i(l({title:"100 Days of Swift - Day 11 - 6. Protocols and extensions summary",desc:"6. Protocols and extensions summary",link:"https://hackingwithswift.com/sixty/9/6/protocols-and-extensions-summary",logo:"https://www.hackingwithswift.com/favicon.svg",background:"rgba(213,52,58,0.2)"})),null,16),s(p,{src:"youtube/q1UkvM2V07E"}),G,Q]),X,$,L])}const en=h(f,[["render",nn],["__file","11.html.vue"]]),on=JSON.parse('{"path":"/swift/100-days-of-swift/11.html","title":"Day 11","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Day 11","description":"100 Days of Swift > Day 11","category":["Swift"],"tag":["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"100 Days of Swift > Day 11"},{"property":"og:description","content":"Day 11"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/swift/100-days-of-swift/11.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/crashcourse/swift/100-days-of-swift/11.html"}],["meta",{"property":"og:site_name","content":"🥁Crashcourse"}],["meta",{"property":"og:title","content":"Day 11"}],["meta",{"property":"og:description","content":"100 Days of Swift > Day 11"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-10-03T01:20:13.000Z"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"paul-hudson"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"hacking-with-swift"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:modified_time","content":"2024-10-03T01:20:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Day 11\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-03T01:20:13.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Protocols and extensions","slug":"protocols-and-extensions","link":"#protocols-and-extensions","children":[{"level":3,"title":"1. Protocols","slug":"_1-protocols","link":"#_1-protocols","children":[]},{"level":3,"title":"2. Protocol inheritance","slug":"_2-protocol-inheritance","link":"#_2-protocol-inheritance","children":[]},{"level":3,"title":"3. Extensions","slug":"_3-extensions","link":"#_3-extensions","children":[]},{"level":3,"title":"4. Protocol extensions","slug":"_4-protocol-extensions","link":"#_4-protocol-extensions","children":[]},{"level":3,"title":"5. Protocol-oriented programming","slug":"_5-protocol-oriented-programming","link":"#_5-protocol-oriented-programming","children":[]},{"level":3,"title":"6. Protocols and extensions summary","slug":"_6-protocols-and-extensions-summary","link":"#_6-protocols-and-extensions-summary","children":[]}]}],"git":{"createdTime":1703642364000,"updatedTime":1727918413000,"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":9}]},"readingTime":{"minutes":5.27,"words":1580},"filePathRelative":"swift/100-days-of-swift/11.md","localizedDate":"2023년 12월 27일","excerpt":"\\n\\n<hr>\\n"}');export{en as comp,on as data};