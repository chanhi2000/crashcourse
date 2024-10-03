import{_ as u}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as h,a as s,t as m,b as e,w as o,n as i,g as c,e as t,r as p,o as w,d as l}from"./app-U_bew1in.js";const k={},y={id:"frontmatter-title-관련",tabindex:"-1"},f={class:"header-anchor",href:"#frontmatter-title-관련"},g={class:"table-of-contents"},v=s("hr",null,null,-1),b=t('<h2 id="structs-part-two" tabindex="-1"><a class="header-anchor" href="#structs-part-two"><span>Structs, part two</span></a></h2><p>As you’ve seen, structs let us combine individual pieces of data to make something new, then attach methods so we can manipulate that data.</p><p>Today you’re going to learn about some of the more advanced features of structs that make them more powerful, including static properties and access control – the art of stopping other parts of your code from meddling in places they ought not to be.</p><p>There’s a famous quote that is sadly anonymous, but I think it fits well here: “privacy is power – what people don’t know, they can’t ruin.” As you’ll see, the same is true in Swift: hiding access to certain properties and methods can actually make our code <em>better</em>, because there are fewer places able to access it.</p><p>As a reminder, both of these things are used extensively in SwiftUI, so it’s worth taking the time to master them now because they’ll be in use from our very first project onwards.</p><p><strong>Today you have two tutorials to work through, where you’ll meet multiple levels of access control, and also the ability to create static properties and methods.</strong> Once you’ve watched each video and any optional extra reading you wanted, there’s a short test to help make sure you’ve understood what was taught.</p><h3 id="_1-how-to-limit-access-to-internal-data-using-access-control" tabindex="-1"><a class="header-anchor" href="#_1-how-to-limit-access-to-internal-data-using-access-control"><span>1. How to limit access to internal data using access control</span></a></h3>',7),_={class:"hint-container details"},S=s("summary",null,"1. How to limit access to internal data using access control",-1),x=t(`<p>By default, Swift’s structs let us access their properties and methods freely, but often that isn’t what you want – sometimes you want to hide some data from external access. For example, maybe you have some logic you need to apply before touching your properties, or maybe you know that some methods need to be called in a certain way or order, and so shouldn’t be touched externally.</p><p>We can demonstrate the problem with an example struct:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">struct</span> <span class="token class-name">BankAccount</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">var</span> funds <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">mutating</span> <span class="token keyword">func</span> <span class="token function-definition function">deposit</span><span class="token punctuation">(</span>amount<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        funds <span class="token operator">+=</span> amount</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">mutating</span> <span class="token keyword">func</span> <span class="token function-definition function">withdraw</span><span class="token punctuation">(</span>amount<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Bool</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> funds <span class="token operator">&gt;=</span> amount <span class="token punctuation">{</span></span>
<span class="line">            funds <span class="token operator">-=</span> amount</span>
<span class="line">            <span class="token keyword">return</span> <span class="token boolean">true</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token boolean">false</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>That has methods to deposit and withdraw money from a bank account, and should be used like this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">var</span> account <span class="token operator">=</span> <span class="token class-name">BankAccount</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">account<span class="token punctuation">.</span><span class="token function">deposit</span><span class="token punctuation">(</span>amount<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">let</span> success <span class="token operator">=</span> account<span class="token punctuation">.</span><span class="token function">withdraw</span><span class="token punctuation">(</span>amount<span class="token punctuation">:</span> <span class="token number">200</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> success <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Withdrew money successfully&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Failed to get the money&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>But the <code>funds</code> property is just exposed to us externally, so what’s stopping us from touching it directly? The answer is <em>nothing at all</em> – this kind of code is allowed:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line">account<span class="token punctuation">.</span>funds <span class="token operator">-=</span> <span class="token number">1000</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>That completely bypasses the logic we put in place to stop people taking out more money than they have, and now our program could behave in weird ways.</p><p>To solve this, we can tell Swift that <code>funds</code> should be accessible only inside the struct – by methods that belong to the struct, as well as any computed properties, property observers, and so on.</p><p>This takes only one extra word:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">private</span> <span class="token keyword">var</span> funds <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>And now accessing <code>funds</code> from outside the struct isn’t possible, but it is possible inside both <code>deposit()</code> and <code>withdraw()</code>. If you try to read or write <code>funds</code> from outside the struct Swift will refuse to build your code.</p><p>This is called _ _, because it controls how a struct’s properties and methods can be accessed from outside the struct.</p><p>Swift provides us with several options, but when you’re learning you’ll only need a handful:</p><ul><li>Use <code>private</code> for “don’t let anything outside the struct use this.”</li><li>Use <code>fileprivate</code> for “don’t let anything outside the current file use this.”</li><li>Use <code>public</code> for “let anyone, anywhere use this.”</li></ul><p>There’s one extra option that is sometimes useful for learners, which is this: <code>private(set)</code>. This means “let anyone read this property, but only let my methods write it.” If we had used that with <code>BankAccount</code>, it would mean we could print <code>account.funds</code> outside of the struct, but only <code>deposit()</code> and <code>withdraw()</code> could actually <em>change</em> the value.</p><p>In this case, I think <code>private(set)</code> is the best choice for funds: you can read the current bank account balance at any time, but you can’t change it without running through my logic.</p><p>If you think about it, access control is really about limiting what you and other developers on your team are able to do – and that’s sensible! If we can make Swift itself stop us from making mistakes, that’s always a smart move.</p><p>Important: If you use <code>private</code> access control for one or more properties, chances are you’ll need to create your own initializer.</p>`,19),I=t('<div class="hint-container info"><p class="hint-container-title">1. How to limit access to internal data using access control - Additional</p><ul><li>Optional: <a href="https://hackingwithswift.com/quick-start/understanding-swift/whats-the-point-of-access-control" target="_blank" rel="noopener noreferrer">What’s the point of access control?</a></li><li>Test: <a href="https://hackingwithswift.com/review/sixty/access-control" target="_blank" rel="noopener noreferrer">Access control</a></li></ul></div><h3 id="_2-static-properties-and-methods" tabindex="-1"><a class="header-anchor" href="#_2-static-properties-and-methods"><span>2. Static properties and methods</span></a></h3>',2),T={class:"hint-container details"},q=s("summary",null,"2. Static properties and methods",-1),D=t(`<p>You’ve seen how we can attach properties and methods to structs, and how each struct has its own unique copy of those properties so that calling a method on the struct won’t read the properties of a different struct from the same type.</p><p>Well, sometimes – only sometimes – you want to add a property or method to the struct itself, rather than to one particular instance of the struct, which allows you to use them directly. I use this technique a lot with SwiftUI for two things: creating example data, and storing fixed data that needs to be accessed in various places.</p><p>First, let’s look at a simplified example of how to create and use static properties and methods:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">struct</span> <span class="token class-name">School</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">static</span> <span class="token keyword">var</span> studentCount <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">static</span> <span class="token keyword">func</span> <span class="token function-definition function">add</span><span class="token punctuation">(</span>student<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;</span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">student</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string"> joined the school.&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">        studentCount <span class="token operator">+=</span> <span class="token number">1</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Notice the keyword <code>static</code> in there, which means both the <code>studentCount</code> property and <code>add()</code> method belong to the <code>School</code> struct itself, rather than to individual instances of the struct.</p><p>To use that code, we’d write the following:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token class-name">School</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>student<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;Taylor Swift&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">print</span><span class="token punctuation">(</span><span class="token class-name">School</span><span class="token punctuation">.</span>studentCount<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>I haven’t created an instance of <code>School</code> – we can literally use <code>add()</code> and <code>studentCount</code> directly on the struct. This is because those are both static, which means they don’t exist uniquely on instances of the struct.</p><p>This should also explain why we’re able to modify the <code>studentCount</code> property without marking the method as <code>mutating</code> – that’s only needed with regular struct functions for times when an instance of struct was created as a constant, and there <em>is</em> no instance when calling <code>add()</code>.</p><p>If you want to mix and match static and non-static properties and methods, there are two rules:</p><ol><li>To access non-static code from static code… you’re out of luck: static properties and methods can’t refer to non-static properties and methods because it just doesn’t make sense – which instance of <code>School</code> would you be referring to?</li><li>To access static code from non-static code, always use your type’s name such as <code>School.studentCount</code>. You can also use <code>Self</code> to refer to the current type.</li></ol><p>Now we have <code>self</code> <em>and</em> <code>Self</code>, and they mean different things: <code>self</code> refers to the current value of the struct, and <code>Self</code> refers to the current <em>type</em>.</p><p><strong>Tip</strong>: It’s easy to forget the difference between <code>self</code> and <code>Self</code>, but if you think about it it’s just like the rest of Swift’s naming – we start all our data types with a capital letter (<code>Int</code>, <code>Double</code>, <code>Bool</code>, etc), so it makes sense for <code>Self</code> to start with a capital letter too.</p><p>Now, that sound you can hear is a thousand other learners saying “why the heck is this needed?” And I get it – this can seem like a rather redundant feature at first. So, I want to show you the two main ways I use static data.</p><p>First, I use static properties to organize common data in my apps. For example, I might have a struct like <code>AppData</code> to store lots of shared values I use in many places:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">struct</span> <span class="token class-name">AppData</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">static</span> <span class="token keyword">let</span> version <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;1.3 beta 2&quot;</span></span></span>
<span class="line">    <span class="token keyword">static</span> <span class="token keyword">let</span> saveFilename <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;settings.json&quot;</span></span></span>
<span class="line">    <span class="token keyword">static</span> <span class="token keyword">let</span> homeURL <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;https://www.hackingwithswift.com&quot;</span></span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Using this approach, everywhere I need to check or display something like my app’s version number – an about screen, debug output, logging information, support emails, etc – I can read <code>AppData.version</code>.</p><p>The second reason I commonly use static data is to create examples of my structs. As you’ll see later on, SwiftUI works best when it can show previews of your app as you develop, and those previews often require sample data. For example, if you’re showing a screen that displays data on one employee, you’ll want to be able to show an example employee in the preview screen so you can check it all looks correct as you work.</p><p>This is best done using a static <code>example</code> property on the struct, like this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">struct</span> <span class="token class-name">Employee</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> username<span class="token punctuation">:</span> <span class="token class-name">String</span></span>
<span class="line">    <span class="token keyword">let</span> password<span class="token punctuation">:</span> <span class="token class-name">String</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">static</span> <span class="token keyword">let</span> example <span class="token operator">=</span> <span class="token class-name">Employee</span><span class="token punctuation">(</span>username<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;cfederighi&quot;</span></span><span class="token punctuation">,</span> password<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;hairforceone&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>And now whenever you need an <code>Employee</code> instance to work with in your design previews, you can use <code>Employee.example</code> and you’re done.</p><p>Like I said at the beginning, there are only a handful of occasions when a static property or method makes sense, but they are still a useful tool to have around.</p>`,22),A=t('<div class="hint-container info"><p class="hint-container-title">2. Static properties and methods - Additional</p><ul><li>Optional: <a href="https://hackingwithswift.com/quick-start/understanding-swift/whats-the-point-of-static-properties-and-methods-in-swift" target="_blank" rel="noopener noreferrer">What’s the point of static properties and methods in Swift?</a></li><li>Test: <a href="https://hackingwithswift.com/review/sixty/static-properties-and-methods" target="_blank" rel="noopener noreferrer">Static properties and methods</a></li></ul></div><h3 id="_3-summary-structs" tabindex="-1"><a class="header-anchor" href="#_3-summary-structs"><span>3. Summary: Structs</span></a></h3>',2),C={class:"hint-container details"},U=s("summary",null,"3. Summary: Structs",-1),j=t("<p>Structs are used almost everywhere in Swift: <code>String</code>, <code>Int</code>, <code>Double</code>, <code>Array</code> and even <code>Bool</code> are all implemented as structs, and now you can recognize that a function such as <code>isMultiple(of:)</code> is really a method belonging to <code>Int</code>.</p><p>Let’s recap what else we learned:</p><ul><li>You can create your own structs by writing <code>struct</code>, giving it a name, then placing the struct’s code inside braces.</li><li>Structs can have variable and constants (known as properties) and functions (known as methods)</li><li>If a method tries to modify properties of its struct, you must mark it as <code>mutating</code>.</li><li>You can store properties in memory, or create computed properties that calculate a value every time they are accessed.</li><li>We can attach <code>didSet</code> and <code>willSet</code> property observers to properties inside a struct, which is helpful when we need to be sure that some code is always executed when the property changes.</li><li>Initializers are a bit like specialized functions, and Swift generates one for all structs using their property names.</li><li>You can create your own custom initializers if you want, but you must always make sure all properties in your struct have a value by the time the initializer finishes, and before you call any other methods.</li><li>We can use access to mark any properties and methods as being available or unavailable externally, as needed.</li><li>It’s possible to attach a property or methods directly to a struct, so you can use them without creating an instance of the struct.</li></ul>",3),B=s("h3",{id:"_4-checkpoint-6",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_4-checkpoint-6"},[s("span",null,"4. Checkpoint 6")])],-1),z={class:"hint-container details"},N=s("summary",null,"4. Checkpoint 6",-1),F=t("<p>Structs sit at the core of every SwiftUI app, so it’s really important you take some extra time to make sure you understand what they do and how they work.</p><p>To check your knowledge, here’s a small task for you: create a struct to store information about a car, including its model, number of seats, and current gear, then add a method to change gears up or down. Have a think about variables and access control: what data should be a variable rather than a constant, and what data should be exposed publicly? Should the gear-changing method validate its input somehow?</p><p>As always I’ll write some hints below, but first I’m going to leave some space so you don’t see the hints by accident. As always, it’s a really good idea to try this challenge yourself before looking at the hints – it’s the fastest way to identify parts you feel less confident with.</p><p>Still here? Okay, here are some hints:</p><ul><li>A car’s model and seat count aren’t going to change once produced, so they can be constant. But its <em>current</em> gear clearly <em>does</em> change, so make that a variable.</li><li>Changing gears up or down should ensure such a change is possible – there is no gear 0, for example, and it’s safe to assume a maximum of 10 gears should cover most if not all cars.</li><li>If you use <code>private</code> access control, you will probably also need to create your own initializer. (Is <code>private</code> the best choice here? Try it for yourself and see what you think!)</li><li>Remember to use the <code>mutating</code> keyword on methods that change properties!</li></ul>",5),H=s("p",null,"That’s day 11 complete, so hopefully by now you know what to do: go and post about your progress online on Twitter, Facebook, Reddit, or whatever social media you like.",-1),R=s("hr",null,null,-1);function V(d,W){const a=p("router-link"),n=p("VPCard"),r=p("VidStack");return w(),h("div",null,[s("h1",y,[s("a",f,[s("span",null,m(d.$frontmatter.title)+" 관련",1)])]),s("nav",g,[s("ul",null,[s("li",null,[e(a,{to:"#structs-part-two"},{default:o(()=>[l("Structs, part two")]),_:1}),s("ul",null,[s("li",null,[e(a,{to:"#_1-how-to-limit-access-to-internal-data-using-access-control"},{default:o(()=>[l("1. How to limit access to internal data using access control")]),_:1})]),s("li",null,[e(a,{to:"#_2-static-properties-and-methods"},{default:o(()=>[l("2. Static properties and methods")]),_:1})]),s("li",null,[e(a,{to:"#_3-summary-structs"},{default:o(()=>[l("3. Summary: Structs")]),_:1})]),s("li",null,[e(a,{to:"#_4-checkpoint-6"},{default:o(()=>[l("4. Checkpoint 6")]),_:1})])])])])]),v,e(n,i(c({title:"100 Days of SwiftUI - Day 11",desc:"Structs, part two",link:"https://www.hackingwithswift.com/100/swiftui/11",logo:"https://www.hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),b,s("details",_,[S,e(n,i(c({title:"100 Days of SwfitUI - Day 11 - 1. How to limit access to internal data using access control",desc:"1. How to limit access to internal data using access control",link:"https://hackingwithswift.com/quick-start/beginners/how-to-limit-access-to-internal-data-using-access-control",logo:"https://www.hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),e(r,{src:"youtube/n0ycUw4SSNM"}),x]),I,s("details",T,[q,e(n,i(c({title:"100 Days of SwfitUI - Day 11 - 2. Static properties and methods",desc:"2. Static properties and methods",link:"https://hackingwithswift.com/quick-start/beginners/static-properties-and-methods",logo:"https://www.hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),e(r,{src:"youtube/qin6oM6PtGg"}),D]),A,s("details",C,[U,e(n,i(c({title:"100 Days of SwfitUI - Day 11 - 3. Summary: Structs",desc:"3. Summary: Structs",link:"https://hackingwithswift.com/quick-start/beginners/summary-structs",logo:"https://www.hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),e(r,{src:"youtube/Qr_Ls6Tyviw"}),j]),B,s("details",z,[N,e(n,i(c({title:"100 Days of SwfitUI - Day 11 - 4. Checkpoint 6",desc:"4. Checkpoint 6",link:"https://hackingwithswift.com/quick-start/beginners/checkpoint-6",logo:"https://www.hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),e(r,{src:"youtube/as6DkW9pXrw"}),F]),H,R])}const O=u(k,[["render",V],["__file","11.html.vue"]]),Y=JSON.parse('{"path":"/swift/100-days-of-swiftui/11.html","title":"Day 11","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Day 11","description":"100 Days of SwiftUI > Day 11","category":["Swift"],"tag":["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"100 Days of SwiftUI > Day 11"},{"property":"og:description","content":"Day 11"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/swift/100-days-of-swiftui/11.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/crashcourse/swift/100-days-of-swiftui/11.html"}],["meta",{"property":"og:site_name","content":"🥁Crashcourse"}],["meta",{"property":"og:title","content":"Day 11"}],["meta",{"property":"og:description","content":"100 Days of SwiftUI > Day 11"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-10-03T01:20:13.000Z"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"paul-hudson"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swiftui"}],["meta",{"property":"article:tag","content":"hacking-with-swift"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:modified_time","content":"2024-10-03T01:20:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Day 11\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-03T01:20:13.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Structs, part two","slug":"structs-part-two","link":"#structs-part-two","children":[{"level":3,"title":"1. How to limit access to internal data using access control","slug":"_1-how-to-limit-access-to-internal-data-using-access-control","link":"#_1-how-to-limit-access-to-internal-data-using-access-control","children":[]},{"level":3,"title":"2. Static properties and methods","slug":"_2-static-properties-and-methods","link":"#_2-static-properties-and-methods","children":[]},{"level":3,"title":"3. Summary: Structs","slug":"_3-summary-structs","link":"#_3-summary-structs","children":[]},{"level":3,"title":"4. Checkpoint 6","slug":"_4-checkpoint-6","link":"#_4-checkpoint-6","children":[]}]}],"git":{"createdTime":1703642364000,"updatedTime":1727918413000,"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":9}]},"readingTime":{"minutes":8.22,"words":2467},"filePathRelative":"swift/100-days-of-swiftui/11.md","localizedDate":"2023년 12월 27일","excerpt":"\\n\\n<hr>\\n"}');export{O as comp,Y as data};