import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as u,a as e,t as h,b as t,w as n,n as d,g as m,d as a,e as r,r as i,o as g}from"./app-U_bew1in.js";const v={},b={id:"frontmatter-title-관련",tabindex:"-1"},f={class:"header-anchor",href:"#frontmatter-title-관련"},w={class:"table-of-contents"},y=e("hr",null,null,-1),k=r(`<blockquote><p>We think we are creating the system for our own purposes. We believe we are making it in our own image... But the computer is not really like us. It is a projection of a very slim part of ourselves: that portion devoted to logic, order, rule, and clarity.</p><blockquote><p>Ellen Ullman, Close to the Machine: Technophilia and its Discontents</p></blockquote></blockquote><figure><img src="https://eloquentjavascript.net/img/chapter_picture_00.jpg" alt="Illustration of a screwdriver next to a circuit board of about the same size" tabindex="0" loading="lazy"><figcaption>Illustration of a screwdriver next to a circuit board of about the same size</figcaption></figure><p>This is a book about instructing computers. Computers are about as common as screwdrivers today, but they are quite a bit more complex, and making them do what you want them to do isn’t always easy.</p><p>If the task you have for your computer is a common, well-understood one, such as showing you your email or acting like a calculator, you can open the appropriate application and get to work. But for unique or open-ended tasks, there often is no appropriate application.</p><p>That is where programming may come in. <em>Programming</em> is the act of constructing a <em>program</em>—a set of precise instructions telling a computer what to do. Because computers are dumb, pedantic beasts, programming is fundamentally tedious and frustrating.</p><p>Fortunately, if you can get over that fact—and maybe even enjoy the rigor of thinking in terms that dumb machines can deal with—programming can be rewarding. It allows you to do things in seconds that would take <em>forever</em> by hand. It is a way to make your computer tool do things that it couldn’t do before. On top of that, it makes for a wonderful game of puzzle solving and abstract thinking.</p><p>Most programming is done with <em>programming languages</em>. A programming language is an artificially constructed language used to instruct computers. It is interesting that the most effective way we’ve found to communicate with a computer borrows so heavily from the way we communicate with each other. Like human languages, computer languages allow words and phrases to be combined in new ways, making it possible to express ever new concepts.</p><p>At one point, language-based interfaces, such as the BASIC and DOS prompts of the 1980s and 1990s, were the main method of interacting with computers. For routine computer use, these have largely been replaced with visual interfaces, which are easier to learn but offer less freedom. But if you know where to look, the languages are still there. One of them, <em>JavaScript</em>, is built into every modern web browser—and is thus available on almost every device.</p><p>This book will try to make you familiar enough with this language to do useful and amusing things with it.</p><hr><h2 id="on-programming" tabindex="-1"><a class="header-anchor" href="#on-programming"><span>On programming</span></a></h2><p>Besides explaining JavaScript, I will introduce the basic principles of programming. Programming, it turns out, is hard. The fundamental rules are simple and clear, but programs built on top of these rules tend to become complex enough to introduce their own rules and complexity. You’re building your own maze, in a way, and you can easily get lost in it.</p><p>There will be times when reading this book feels terribly frustrating. If you are new to programming, there will be a lot of new material to digest. Much of this material will then be <em>combined</em> in ways that require you to make additional connections.</p><p>It is up to you to make the necessary effort. When you are struggling to follow the book, do not jump to any conclusions about your own capabilities. You are fine—you just need to keep at it. Take a break, reread some material, and make sure you read and understand the example programs and exercises. Learning is hard work, but everything you learn is yours and will make further learning easier.</p><blockquote><p>When action grows unprofitable, gather information; when information grows unprofitable, sleep.</p><blockquote><p>Ursula K. Le Guin, The Left Hand of Darkness</p></blockquote></blockquote><p>A program is many things. It is a piece of text typed by a programmer, it is the directing force that makes the computer do what it does, it is data in the computer’s memory, and at the same time it controls the actions performed on this memory. Analogies that try to compare programs to familiar objects tend to fall short. A superficially fitting one is to compare a program to a machine—lots of separate parts tend to be involved, and to make the whole thing tick, we have to consider the ways in which these parts interconnect and contribute to the operation of the whole.</p><p>A computer is a physical machine that acts as a host for these immaterial machines. Computers themselves can do only stupidly straightforward things. The reason they are so useful is that they do these things at an incredibly high speed. A program can ingeniously combine an enormous number of these simple actions to do very complicated things.</p><p>A program is a building of thought. It is costless to build, it is weightless, and it grows easily under our typing hands. But as a program grows, so does its complexity. The skill of programming is the skill of building programs that don’t confuse yourself. The best programs are those that manage to do something interesting while still being easy to understand.</p><p>Some programmers believe that this complexity is best managed by using only a small set of well-understood techniques in their programs. They have composed strict rules (“best practices”) prescribing the form programs should have and carefully stay within their safe little zone.</p><p>This is not only boring, it is ineffective. New problems often require new solutions. The field of programming is young and still developing rapidly, and it is varied enough to have room for wildly different approaches. There are many terrible mistakes to make in program design, and you should go ahead and make them at least once so that you understand them. A sense of what a good program looks like is developed with practice, not learned from a list of rules.</p><hr><h2 id="why-language-matters" tabindex="-1"><a class="header-anchor" href="#why-language-matters"><span>Why language matters</span></a></h2><p>In the beginning, at the birth of computing, there were no programming languages. Programs looked something like this:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">00110001 00000000 00000000</span>
<span class="line">00110001 00000001 00000001</span>
<span class="line">00110011 00000001 00000010</span>
<span class="line">01010001 00001011 00000010</span>
<span class="line">00100010 00000010 00001000</span>
<span class="line">01000011 00000001 00000000</span>
<span class="line">01000001 00000001 00000001</span>
<span class="line">00010000 00000010 00000000</span>
<span class="line">01100010 00000000 00000000</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),j=e("p",null,[a("This is a program to add the numbers from 1 to 10 together and print the result: "),e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mn",null,"1"),e("mo",null,"+"),e("mn",null,"2"),e("mo",null,"+"),e("mi",{mathvariant:"normal"},"."),e("mi",{mathvariant:"normal"},"."),e("mi",{mathvariant:"normal"},"."),e("mo",null,"+"),e("mn",null,"10"),e("mo",null,"="),e("mn",null,"55")]),e("annotation",{encoding:"application/x-tex"},"1 + 2 + ... + 10 = 55")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),e("span",{class:"mord"},"1"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"+"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),e("span",{class:"mord"},"2"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"+"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.6667em","vertical-align":"-0.0833em"}}),e("span",{class:"mord"},"..."),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"+"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.6444em"}}),e("span",{class:"mord"},"10"),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},"="),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.6444em"}}),e("span",{class:"mord"},"55")])])]),a(". It could run on a simple hypothetical machine. To program early computers, it was necessary to set large arrays of switches in the right position or punch holes in strips of cardboard and feed them to the computer. You can imagine how tedious and error-prone this procedure was. Even writing simple programs required much cleverness and discipline. Complex ones were nearly inconceivable.")],-1),_=r(`<p>Of course, manually entering these arcane patterns of bits (the ones and zeros) did give the programmer a profound sense of being a mighty wizard. And that has to be worth something in terms of job satisfaction.</p><p>Each line of the previous program contains a single instruction. It could be written in English like this:</p><ol><li>Store the number 0 in memory location 0.</li><li>Store the number 1 in memory location 1.</li><li>Store the value of memory location 1 in memory location 2.</li><li>Subtract the number 11 from the value in memory location 2.</li><li>If the value in memory location 2 is the number 0, continue with instruction 9.</li><li>Add the value of memory location 1 to memory location 0.</li><li>Add the number 1 to the value of memory location 1.</li><li>Continue with instruction 3.</li><li>Output the value of memory location 0.</li></ol><p>Although that is already more readable than the soup of bits, it is still rather obscure. Using names instead of numbers for the instructions and memory locations helps:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"> Set “total” to 0.</span>
<span class="line"> Set “count” to 1.</span>
<span class="line">[loop]</span>
<span class="line"> Set “compare” to “count”.</span>
<span class="line"> Subtract 11 from “compare”.</span>
<span class="line"> If “compare” is zero, continue at [end].</span>
<span class="line"> Add “count” to “total”.</span>
<span class="line"> Add 1 to “count”.</span>
<span class="line"> Continue at [loop].</span>
<span class="line">[end]</span>
<span class="line"> Output “total”.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Can you see how the program works at this point? The first two lines give two memory locations their starting values: <code>total</code> will be used to build up the result of the computation, and <code>count</code> will keep track of the number that we are currently looking at. The lines using <code>compare</code> are probably the most confusing ones. The program wants to see whether <code>count</code> is equal to 11 to decide whether it can stop running. Because our hypothetical machine is rather primitive, it can only test whether a number is zero and make a decision based on that. It therefore uses the memory location labeled <code>compare</code> to compute the value of <code>count - 11</code> and makes a decision based on that value. The next two lines add the value of <code>count</code> to the result and increment <code>count</code> by 1 every time the program decides that <code>count</code> is not 11 yet.</p><p>Here is the same program in JavaScript:</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">let</span> total <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> count <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">while</span> <span class="token punctuation">(</span>count <span class="token operator">&lt;=</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  total <span class="token operator">+=</span> count<span class="token punctuation">;</span></span>
<span class="line">  count <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>total<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// → 55</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This version gives us a few more improvements. Most importantly, there is no need to specify the way we want the program to jump back and forth anymore—the <code>while</code> construct takes care of that. It continues executing the block (wrapped in braces) below it as long as the condition it was given holds. That condition is <code>count &lt;= 10</code>, which means “the count is less than or equal to 10”. We no longer have to create a temporary value and compare that to zero, which was just an uninteresting detail. Part of the power of programming languages is that they can take care of uninteresting details for us.</p><p>At the end of the program, after the <code>while</code> construct has finished, the <code>console.log</code> operation is used to write out the result.</p><p>Finally, here is what the program could look like if we happened to have the convenient operations <code>range</code> and <code>sum</code> available, which respectively create a collection of numbers within a range and compute the sum of a collection of numbers:</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token function">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// → 55</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>The moral of this story is that the same program can be expressed in both long and short, unreadable and readable ways. The first version of the program was extremely obscure, whereas this last one is almost English: <code>log</code> the <code>sum</code> of the <code>range</code> of numbers from 1 to 10. (We will see in later chapters how to define operations like <code>sum</code> and <code>range</code>.)</p><p>A good programming language helps the programmer by allowing them to talk about the actions that the computer has to perform on a higher level. It helps omit details, provides convenient building blocks (such as <code>while</code> and <code>console.log</code>), allows you to define your own building blocks (such as <code>sum</code> and <code>range</code>), and makes those blocks easy to compose.</p><hr><h2 id="what-is-javascript" tabindex="-1"><a class="header-anchor" href="#what-is-javascript"><span>What is JavaScript?</span></a></h2><p>JavaScript was introduced in 1995 as a way to add programs to web pages in the Netscape Navigator browser. The language has since been adopted by all other major graphical web browsers. It has made modern web applications possible—that is, applications with which you can interact directly without doing a page reload for every action. JavaScript is also used in more traditional websites to provide various forms of interactivity and cleverness.</p><p>It is important to note that JavaScript has almost nothing to do with the programming language named Java. The similar name was inspired by marketing considerations rather than good judgment. When JavaScript was being introduced, the Java language was being heavily marketed and was gaining popularity. Someone thought it was a good idea to try to ride along on this success. Now we are stuck with the name.</p><p>After its adoption outside of Netscape, a standard document was written to describe the way the JavaScript language should work so that the various pieces of software that claimed to support JavaScript could make sure they actually provided the same language. This is called the ECMAScript standard, after the Ecma International organization that conducted the standardization. In practice, the terms ECMAScript and JavaScript can be used interchangeably—they are two names for the same language.</p><p>There are those who will say <em>terrible</em> things about JavaScript. Many of these things are true. When I was required to write something in JavaScript for the first time, I quickly came to despise it. It would accept almost anything I typed but interpret it in a way that was completely different from what I meant. This had a lot to do with the fact that I did not have a clue what I was doing, of course, but there is a real issue here: JavaScript is ridiculously liberal in what it allows. The idea behind this design was that it would make programming in JavaScript easier for beginners. In actuality, it mostly makes finding problems in your programs harder because the system will not point them out to you.</p><p>This flexibility also has its advantages, though. It leaves room for techniques that are impossible in more rigid languages and makes for a pleasant, informal style of programming. After learning the language properly and working with it for a while, I have come to actually <em>like</em> JavaScript.</p><p>There have been several versions of JavaScript. ECMAScript version 3 was the widely supported version during JavaScript’s ascent to dominance, roughly between 2000 and 2010. During this time, work was underway on an ambitious version 4, which planned a number of radical improvements and extensions to the language. Changing a living, widely used language in such a radical way turned out to be politically difficult, and work on the version 4 was abandoned in 2008. A much less ambitious version 5, which made only some uncontroversial improvements, came out in 2009. In 2015, version 6 came out, a major update that included some of the ideas planned for version 4. Since then we’ve had new, small updates every year.</p><p>The fact that JavaScript is evolving means that browsers have to constantly keep up. If you’re using an older browser, it may not support every feature. The language designers are careful to not make any changes that could break existing programs, so new browsers can still run old programs. In this book, I’m using the 2023 version of JavaScript.</p><p>Web browsers are not the only platforms on which JavaScript is used. Some databases, such as MongoDB and CouchDB, use JavaScript as their scripting and query language. Several platforms for desktop and server programming, most notably the Node.js project (the subject of Chapter 20), provide an environment for programming JavaScript outside of the browser.</p><hr><h2 id="code-and-what-to-do-with-it" tabindex="-1"><a class="header-anchor" href="#code-and-what-to-do-with-it"><span>Code, and what to do with it</span></a></h2><p><em>Code</em> is the text that makes up programs. Most chapters in this book contain quite a lot of code. I believe reading code and writing code are indispensable parts of learning to program. Try to not just glance over the examples—read them attentively and understand them. This may be slow and confusing at first, but I promise that you’ll quickly get the hang of it. The same goes for the exercises. Don’t assume you understand them until you’ve actually written a working solution.</p><p>I recommend you try your solutions to exercises in an actual JavaScript interpreter. That way, you’ll get immediate feedback on whether what you are doing is working, and, I hope, you’ll be tempted to experiment and go beyond the exercises.</p><p>When reading this book in your browser, you can edit (and run) all example programs by clicking them.</p><p>Running the programs defined in this book outside of the book’s website requires some care. Many examples stand on their own and should work in any JavaScript environment. But code in later chapters is often written for a specific environment (the browser or Node.js) and can run only there. In addition, many chapters define bigger programs, and the pieces of code that appear in them depend on each other or on external files. The sandbox on the website provides links to ZIP files containing all the scripts and data files necessary to run the code for a given chapter.</p><hr><h2 id="overview-of-this-book" tabindex="-1"><a class="header-anchor" href="#overview-of-this-book"><span>Overview of this book</span></a></h2><p>This book contains roughly three parts. The first 12 chapters discuss the JavaScript language. The next seven chapters are about web browsers and the way JavaScript is used to program them. Finally, two chapters are devoted to Node.js, another environment to program JavaScript in. There are five <em>project chapters</em> in the book that describe larger example programs to give you a taste of actual programming.</p>`,33),x=e("code",null,"while",-1),T=e("em",null,"abstract",-1),q=r(`<hr><h2 id="typographic-conventions" tabindex="-1"><a class="header-anchor" href="#typographic-conventions"><span>Typographic conventions</span></a></h2><p>In this book, text written in a <code>monospaced</code> font will represent elements of programs. Sometimes these are self-sufficient fragments, and sometimes they just refer to part of a nearby program. Programs (of which you have already seen a few) are written as follows:</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">factorial</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token function">factorial</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> n<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Sometimes, to show the output that a program produces, the expected output is written after it, with two slashes and an arrow in front.</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">factorial</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// → 40320</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>Good luck!</p><hr>`,8);function I(l,S){const o=i("router-link"),c=i("VPCard"),s=i("RouteLink");return g(),u("div",null,[e("h1",b,[e("a",f,[e("span",null,h(l.$frontmatter.title)+" 관련",1)])]),e("nav",w,[e("ul",null,[e("li",null,[t(o,{to:"#on-programming"},{default:n(()=>[a("On programming")]),_:1})]),e("li",null,[t(o,{to:"#why-language-matters"},{default:n(()=>[a("Why language matters")]),_:1})]),e("li",null,[t(o,{to:"#what-is-javascript"},{default:n(()=>[a("What is JavaScript?")]),_:1})]),e("li",null,[t(o,{to:"#code-and-what-to-do-with-it"},{default:n(()=>[a("Code, and what to do with it")]),_:1})]),e("li",null,[t(o,{to:"#overview-of-this-book"},{default:n(()=>[a("Overview of this book")]),_:1})]),e("li",null,[t(o,{to:"#typographic-conventions"},{default:n(()=>[a("Typographic conventions")]),_:1})])])]),y,t(c,d(m({title:"Eloquent Javascript > Introduction",desc:"Introduction",link:"https://eloquentjavascript.net/00_intro.html",logo:"https://eloquentjavascript.net/favicon.ico",background:"rgba(248,212,16,0.2)"})),null,16),k,j,_,e("p",null,[a("The language part of the book starts with four chapters that introduce the basic structure of the JavaScript language. They discuss "),t(s,{to:"/js/eloquent-javascript/02.html"},{default:n(()=>[a("control structures")]),_:1}),a(" (such as the "),x,a(" word you saw in this introduction), "),t(s,{to:"/js/eloquent-javascript/03.html"},{default:n(()=>[a("functions")]),_:1}),a(" (writing your own building blocks), and "),t(s,{to:"/js/eloquent-javascript/04.html"},{default:n(()=>[a("data structures")]),_:1}),a(". After these, you will be able to write basic programs. Next, Chapters "),t(s,{to:"/js/eloquent-javascript/05.html"},{default:n(()=>[a("5")]),_:1}),a(" and "),t(s,{to:"/js/eloquent-javascript/06.html"},{default:n(()=>[a("6")]),_:1}),a(" introduce techniques to use functions and objects to write more "),T,a(" code and keep complexity under control.")]),e("p",null,[a("After a "),t(s,{to:"/js/eloquent-javascript/07.html"},{default:n(()=>[a("first project chapter")]),_:1}),a(" that builds a crude delivery robot, the language part of the book continues with chapters on "),t(s,{to:"/js/eloquent-javascript/08.html"},{default:n(()=>[a("error handling and bug fixing")]),_:1}),a(", regular expressions (an important tool for working with text), "),t(s,{to:"/js/eloquent-javascript/10.html"},{default:n(()=>[a("modularity")]),_:1}),a(" (another defense against complexity), and "),t(s,{to:"/js/eloquent-javascript/11.html"},{default:n(()=>[a("asynchronous programming")]),_:1}),a(" (dealing with events that take time). The "),t(s,{to:"/js/eloquent-javascript/12.html"},{default:n(()=>[a("second project chapter")]),_:1}),a(", where we implement a programming language, concludes the first part of the book.")]),e("p",null,[a("The second part of the book, Chapters "),t(s,{to:"/js/eloquent-javascript/13.html"},{default:n(()=>[a("13")]),_:1}),a(" to "),t(s,{to:"/js/eloquent-javascript/19.html"},{default:n(()=>[a("19")]),_:1}),a(", describes the tools that browser JavaScript has access to. You’ll learn to display things on the screen (Chapters "),t(s,{to:"/js/eloquent-javascript/14.html"},{default:n(()=>[a("14")]),_:1}),a(" and "),t(s,{to:"/js/eloquent-javascript/17.html"},{default:n(()=>[a("17")]),_:1}),a("), respond to user input ("),t(s,{to:"/js/eloquent-javascript/15.html"},{default:n(()=>[a("Chapter 15")]),_:1}),a("), and communicate over the network ("),t(s,{to:"/js/eloquent-javascript/18.html"},{default:n(()=>[a("Chapter 18")]),_:1}),a("). There are again two project chapters in this part, building a "),t(s,{to:"/js/eloquent-javascript/16.html"},{default:n(()=>[a("platform game")]),_:1}),a(" and a "),t(s,{to:"/js/eloquent-javascript/19.html"},{default:n(()=>[a("pixel paint program")]),_:1}),a(".")]),e("p",null,[t(s,{to:"/js/eloquent-javascript/20.html"},{default:n(()=>[a("Chapter 20")]),_:1}),a(" describes Node.js, and "),t(s,{to:"/js/eloquent-javascript/21.html"},{default:n(()=>[a("Chapter 21")]),_:1}),a(" builds a small website using that tool.")]),q])}const A=p(v,[["render",I],["__file","00.html.vue"]]),z=JSON.parse('{"path":"/js/eloquent-javascript/00.html","title":"00. Introduction","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"00. Introduction","description":"Eloquent Javascript > 00. Introduction","tag":["blog","js","javascript"],"head":[[{"meta":null},{"property":"og:title","content":"Eloquent Javascript > 00. Introduction"},{"property":"og:description","content":"00. Introduction"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/js/eloquent-javascript/00.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/crashcourse/js/eloquent-javascript/00.html"}],["meta",{"property":"og:site_name","content":"🥁Crashcourse"}],["meta",{"property":"og:title","content":"00. Introduction"}],["meta",{"property":"og:description","content":"Eloquent Javascript > 00. Introduction"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://eloquentjavascript.net/img/chapter_picture_00.jpg"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-10-03T01:20:13.000Z"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"js"}],["meta",{"property":"article:tag","content":"javascript"}],["meta",{"property":"article:modified_time","content":"2024-10-03T01:20:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"00. Introduction\\",\\"image\\":[\\"https://eloquentjavascript.net/img/chapter_picture_00.jpg\\"],\\"dateModified\\":\\"2024-10-03T01:20:13.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"On programming","slug":"on-programming","link":"#on-programming","children":[]},{"level":2,"title":"Why language matters","slug":"why-language-matters","link":"#why-language-matters","children":[]},{"level":2,"title":"What is JavaScript?","slug":"what-is-javascript","link":"#what-is-javascript","children":[]},{"level":2,"title":"Code, and what to do with it","slug":"code-and-what-to-do-with-it","link":"#code-and-what-to-do-with-it","children":[]},{"level":2,"title":"Overview of this book","slug":"overview-of-this-book","link":"#overview-of-this-book","children":[]},{"level":2,"title":"Typographic conventions","slug":"typographic-conventions","link":"#typographic-conventions","children":[]}],"git":{"createdTime":1709862683000,"updatedTime":1727918413000,"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":4}]},"readingTime":{"minutes":10.58,"words":3173},"filePathRelative":"js/eloquent-javascript/00.md","localizedDate":"2024년 3월 8일","excerpt":"\\n\\n<hr>\\n"}');export{A as comp,z as data};