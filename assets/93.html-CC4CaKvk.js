import{_ as u}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as d,a as t,t as w,b as e,w as n,n as s,g as i,e as h,r as a,o as y,d as c}from"./app-U_bew1in.js";const m={},f={id:"frontmatter-title-관련",tabindex:"-1"},g={class:"header-anchor",href:"#frontmatter-title-관련"},k={class:"table-of-contents"},b=t("hr",null,null,-1),_=h('<h2 id="project-28-part-two" tabindex="-1"><a class="header-anchor" href="#project-28-part-two"><span>Project 28, part two</span></a></h2><p>In the Secret Swift project you’ve learned about two important security techniques in iOS: biometric authentication and the keychain. Both of these in theory add some sort of security, but only if you use them correctly:</p><ul><li>If you use biometric authentication but store your data in <code>UserDefaults</code>, it can be read out by bypassing the app.</li><li>If you store your data in the iOS keychain but don’t put it behind biometric authentication or similar, anyone can launch the app and just take it.</li></ul><p>But even with both of those two combined, is our data truly secure? As Gene Spafford once said, “the online truly secure system is one that is powered off, cast in a block of concrete and sealed in a lead-lined room with armed guards.”</p><p>That doesn’t mean you shouldn’t <em>try</em>. As you’ve seen, Apple gives us a variety of tools we can use to keep our user data safe, and it’s worth using them all as best as we can.</p><p><strong>Today you should work through the wrap up chapter for project 28, complete its review, then work through all three of its challenges.</strong></p><h3 id="wrap-up" tabindex="-1"><a class="header-anchor" href="#wrap-up"><span>Wrap up</span></a></h3>',7),v={class:"hint-container details"},D=t("summary",null,"Wrap up",-1),j=h('<p>The great thing about biometric authentication is that you don&#39;t get any access to fingerprints, face scans, or other secure information. Instead, the system does all the authentication for you, which keeps both your app and users safe.</p><p>More importantly, users <em>trust</em> it: they know that Touch ID and Face ID are highly secure system that guarantee security in our apps, so it immediately makes our apps feel both more personal and more safe.</p><h4 id="review-what-you-learned" tabindex="-1"><a class="header-anchor" href="#review-what-you-learned"><span>Review what you learned</span></a></h4><p>Anyone can sit through a tutorial, but it takes actual work to remember what was taught. It’s my job to make sure you take as much from these tutorials as possible, so I’ve prepared a short review to help you check your learning.</p><p><a href="https://www.hackingwithswift.com/review/hws/project-28-secret-swift" target="_blank" rel="noopener noreferrer">Click here to review what you learned in project 28.</a></p><h4 id="challenge" tabindex="-1"><a class="header-anchor" href="#challenge"><span>Challenge</span></a></h4><p>One of the best ways to learn is to write your own code as often as possible, so here are three ways you should try your new knowledge to make sure you fully understand what’s going on:</p><ol><li>Add a Done button as a navigation bar item that causes the app to re-lock immediately rather than waiting for the user to quit. This should only be shown when the app is unlocked.</li><li>Create a password system for your app so that the Touch ID/Face ID fallback is more useful. You&#39;ll need to use an alert controller with a text field like we did in project 5, and I suggest you save the password in the keychain!</li><li>Go back to project 10 (Names to Faces) and add biometric authentication so the user’s pictures are shown only when they have unlocked the app. You’ll need to give some thought to how you can hide the pictures – perhaps leave the array empty until they are authenticated?</li></ol>',8),S=t("div",{class:"hint-container info"},[t("p",{class:"hint-container-title"},"Wrap up - Additional"),t("p",null,[t("a",{href:"https://www.hackingwithswift.com/review/hws/project-28-secret-swift",target:"_blank",rel:"noopener noreferrer"},"Review for Project 28: Secret Swift")])],-1),x=t("p",null,"In this project you learned two crucial techniques for keeping user data safe – make sure you tell others about your progress!",-1),T=t("hr",null,null,-1);function I(l,P){const o=a("router-link"),r=a("VPCard"),p=a("VidStack");return y(),d("div",null,[t("h1",f,[t("a",g,[t("span",null,w(l.$frontmatter.title)+" 관련",1)])]),t("nav",k,[t("ul",null,[t("li",null,[e(o,{to:"#project-28-part-two"},{default:n(()=>[c("Project 28, part two")]),_:1}),t("ul",null,[t("li",null,[e(o,{to:"#wrap-up"},{default:n(()=>[c("Wrap up")]),_:1})])])])])]),b,e(r,s(i({title:"100 Days of Swift - Day 93",desc:"Project 28, part two",link:"https://www.hackingwithswift.com/100/93",logo:"https://www.hackingwithswift.com/favicon.svg",background:"rgb(213,52,58,0.2)"})),null,16),_,t("details",v,[D,e(r,s(i({title:"100 Days of Swift - Day 93 - Wrap Up",desc:"Wrap Up",link:"https://www.hackingwithswift.com/read/28/5/wrap-up",logo:"https://www.hackingwithswift.com/favicon.svg",background:"rgb(213,52,58,0.2)"})),null,16),e(p,{src:"youtube/4-VfhcMSvSY"}),j]),S,x,T])}const A=u(m,[["render",I],["__file","93.html.vue"]]),R=JSON.parse('{"path":"/swift/100-days-of-swift/93.html","title":"Day 93","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Day 93","description":"100 Days of Swift > Day 93","category":["Swift"],"tag":["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"100 Days of Swift > Day 93"},{"property":"og:description","content":"Day 93"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/swift/100-days-of-swift/93.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/crashcourse/swift/100-days-of-swift/93.html"}],["meta",{"property":"og:site_name","content":"🥁Crashcourse"}],["meta",{"property":"og:title","content":"Day 93"}],["meta",{"property":"og:description","content":"100 Days of Swift > Day 93"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-10-03T01:20:13.000Z"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"paul-hudson"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"hacking-with-swift"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:modified_time","content":"2024-10-03T01:20:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Day 93\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-03T01:20:13.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Project 28, part two","slug":"project-28-part-two","link":"#project-28-part-two","children":[{"level":3,"title":"Wrap up","slug":"wrap-up","link":"#wrap-up","children":[]}]}],"git":{"createdTime":1707972191000,"updatedTime":1727918413000,"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":9}]},"readingTime":{"minutes":2.22,"words":667},"filePathRelative":"swift/100-days-of-swift/93.md","localizedDate":"2024년 2월 15일","excerpt":"\\n\\n<hr>\\n"}');export{A as comp,R as data};