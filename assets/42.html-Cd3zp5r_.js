import{_ as u}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as h,a as t,t as d,b as e,w as s,n,g as i,e as c,r,o as w,d as l}from"./app-U_bew1in.js";const m={},f={id:"frontmatter-title-관련",tabindex:"-1"},g={class:"header-anchor",href:"#frontmatter-title-관련"},y={class:"table-of-contents"},k=t("hr",null,null,-1),v=c('<h2 id="project-8-part-4" tabindex="-1"><a class="header-anchor" href="#project-8-part-4"><span>Project 8, part 4</span></a></h2><p>You’ve now finished Moonshot, which is the first of our projects that started to get difficult – it took longer to explain, we used custom SwiftUI layouts, and I even snuck in a few advanced Swift features. Not all our future projects are going to be difficult, but it’s certainly going to be the case that they are more <em>complex</em>; there is more to them, which means the resulting apps are more interesting, and also more representative of real-world app building.</p><p>As the complexity rises so do the odds of making mistakes, and Swift is pretty unforgiving here – as you will undoubtedly have seen by now, even one small mistake on line 20 can result in a random error appearing on line 5, and this can be disheartening.</p><p>Well, I hope today’s quote will inspire you. I’ve chosen it specially for today for reasons best left to the reader, but it’s this: don’t panic! These sorts of problems are common, and the easiest way to solve them right now is to comment out whatever code you most recently added, and keep doing so until your code works. You can then slowly re-introduce code until you find the part that causes your compile to break, then fix it.</p><p>So, don’t panic – you can do this!</p><p><strong>Today you should work through the wrap up chapter for project 8, complete its review, then work through all three of its challenges.</strong></p><h3 id="moonshot-wrap-up" tabindex="-1"><a class="header-anchor" href="#moonshot-wrap-up"><span>Moonshot: Wrap up</span></a></h3>',7),b={class:"hint-container details"},_=t("summary",null,"Moonshot: Wrap up",-1),x=c(`<p>This app is the most complex one we’ve built so far. Yes, there are multiple views, but we also strayed away from lists and forms and into our own scrolling layouts, using <code>GeometryReader</code> to get precise sizes to make the most of our space.</p><p>But this was also the most complex <em>Swift</em> code we’ve written so far – generics are an incredibly powerful feature, and once you add in constraints you open up a huge range of functionality that lets you save time while also gaining flexibility.</p><p>You’re also now starting to see how useful <code>Codable</code> is: its ability to decode a hierarchy of data in one pass is invaluable, which is why it’s central to so many Swift apps.</p><h4 id="review-what-you-learned" tabindex="-1"><a class="header-anchor" href="#review-what-you-learned"><span>Review what you learned</span></a></h4><p>Anyone can sit through a tutorial, but it takes actual work to remember what was taught. It’s my job to make sure you take as much from these tutorials as possible, so I’ve prepared a short review to help you check your learning.</p><p><a href="https://www.hackingwithswift.com/review/ios-swiftui/moonshot" target="_blank" rel="noopener noreferrer">Click here to review what you learned in this project.</a></p><h4 id="challenge" tabindex="-1"><a class="header-anchor" href="#challenge"><span>Challenge</span></a></h4><p>One of the best ways to learn is to write your own code as often as possible, so here are three ways you should try extending this app to make sure you fully understand what’s going on.</p><ol><li>Add the launch date to <code>MissionView</code>, below the mission badge. You might choose to format this differently given that more space is available, but it’s down to you.</li><li>Extract one or two pieces of view code into their own new SwiftUI views – the horizontal scroll view in <code>MissionView</code> is a great candidate, but if you followed my styling then you could also move the <code>Rectangle</code> dividers out too.</li><li>For a tough challenge, add a toolbar item to <code>ContentView</code> that toggles between showing missions as a grid and as a list.</li></ol><p><strong>Tip</strong>: For that last one, your best bet is to make all your grid code and all your list code two separate views, and switch between them using an <code>if</code> condition in <code>ContentView</code>. You can’t attach SwiftUI modifiers to an <code>if</code> condition, but you can wrap that condition in a <code>Group</code> then attach modifiers to there, like this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token class-name">Group</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> showingGrid <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">GridLayout</span><span class="token punctuation">(</span>astronauts<span class="token punctuation">:</span> astronauts<span class="token punctuation">,</span> missions<span class="token punctuation">:</span> missions<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">ListLayout</span><span class="token punctuation">(</span>astronauts<span class="token punctuation">:</span> astronauts<span class="token punctuation">,</span> missions<span class="token punctuation">:</span> missions<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">.</span><span class="token function">navigationTitle</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;My Group&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You might hit some speed bumps trying to style your list, because they have a particular look and feel on iOS by default. Try attaching <code>.listStyle(.plain)</code> to your list, then something like <code>.listRowBackground(Color.darkBackground)</code> to the contents of your list row – that should get you a long way towards your goal.</p>`,12),S=t("div",{class:"hint-container info"},[t("p",{class:"hint-container-title"},"Moonshot: Wrap up"),t("p",null,[t("a",{href:"https://www.hackingwithswift.com/review/ios-swiftui/moonshot",target:"_blank",rel:"noopener noreferrer"},"Review for Project 8: Moonshot")])],-1),j=t("hr",null,null,-1);function D(p,I){const o=r("router-link"),a=r("VPCard");return w(),h("div",null,[t("h1",f,[t("a",g,[t("span",null,d(p.$frontmatter.title)+" 관련",1)])]),t("nav",y,[t("ul",null,[t("li",null,[e(o,{to:"#project-8-part-4"},{default:s(()=>[l("Project 8, part 4")]),_:1}),t("ul",null,[t("li",null,[e(o,{to:"#moonshot-wrap-up"},{default:s(()=>[l("Moonshot: Wrap up")]),_:1})])])])])]),k,e(a,n(i({title:"100 Days of SwiftUI - Day 42",desc:"Project 8, part 4",link:"https://www.hackingwithswift.com/100/swiftui/42",logo:"https://www.hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),v,t("details",b,[_,e(a,n(i({title:"100 Days of SwiftUI - Day 42 - Moonshot: Wrap up",desc:"Moonshot: Wrap up",link:"https://www.hackingwithswift.com/books/ios-swiftui/moonshot-wrap-up",logo:"https://www.hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),x]),S,j])}const C=u(m,[["render",D],["__file","42.html.vue"]]),P=JSON.parse('{"path":"/swift/100-days-of-swiftui/42.html","title":"Day 42","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Day 42","description":"100 Days of SwiftUI > Day 42","category":["Swift"],"tag":["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"100 Days of SwiftUI > Day 42"},{"property":"og:description","content":"Day 42"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/swift/100-days-of-swiftui/42.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/crashcourse/swift/100-days-of-swiftui/42.html"}],["meta",{"property":"og:site_name","content":"🥁Crashcourse"}],["meta",{"property":"og:title","content":"Day 42"}],["meta",{"property":"og:description","content":"100 Days of SwiftUI > Day 42"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-10-03T01:20:13.000Z"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"paul-hudson"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swiftui"}],["meta",{"property":"article:tag","content":"hacking-with-swift"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:modified_time","content":"2024-10-03T01:20:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Day 42\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-03T01:20:13.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Project 8, part 4","slug":"project-8-part-4","link":"#project-8-part-4","children":[{"level":3,"title":"Moonshot: Wrap up","slug":"moonshot-wrap-up","link":"#moonshot-wrap-up","children":[]}]}],"git":{"createdTime":1703642364000,"updatedTime":1727918413000,"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":8}]},"readingTime":{"minutes":2.76,"words":828},"filePathRelative":"swift/100-days-of-swiftui/42.md","localizedDate":"2023년 12월 27일","excerpt":"\\n\\n<hr>\\n"}');export{C as comp,P as data};