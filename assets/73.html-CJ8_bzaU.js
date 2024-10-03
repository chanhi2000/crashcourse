import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as u,a as e,t as w,b as t,w as r,n as i,g as s,e as l,r as o,o as m,d as c}from"./app-U_bew1in.js";const f={},y={id:"frontmatter-title-관련",tabindex:"-1"},g={class:"header-anchor",href:"#frontmatter-title-관련"},k={class:"table-of-contents"},v=e("hr",null,null,-1),_=l('<h2 id="project-21-part-two" tabindex="-1"><a class="header-anchor" href="#project-21-part-two"><span>Project 21, part two</span></a></h2><p>As I write this, Apple is running a series of adverts with the tagline “if privacy matters in your life, it should matter to the phone your life is on.” Of course, privacy <em>does</em> matter to the vast majority of us – it’s a bit like saying “you only need to floss the teeth you want to keep.”</p><p>It makes sense that Apple is running these ads right now: with companies like Facebook, Amazon, Google, and more making a lot of money over data collection, Apple’s policy of putting users in control really sets the company apart from the pack in a really positive way.</p><p>However, this policy doesn’t end at the border of Cupertino. You’re now a developer on Apple’s platforms, and it behoves you to attempt to follow in their footsteps: put the user in control, respect their settings, and treat their data with respect.</p><p>Today you’re going to be taking on some challenges to do with notifications, but when you’re doing it I want you to keep in mind what I said above: don’t abuse the trust users have placed in us, and remember that millions of apps have shipped before you that worked hard to maintain Apple’s high standards. You’re part of that now and I hope you feel increasingly able to rise to match that heritage.</p><p><strong>Today you should work through the wrap up chapter for project 21, complete its review, then work through all three of its challenges.</strong></p><h3 id="wrap-up" tabindex="-1"><a class="header-anchor" href="#wrap-up"><span>Wrap up</span></a></h3>',7),b={class:"hint-container details"},j=e("summary",null,"Wrap up",-1),A=l('<p>That was easy, right? And yet it&#39;s such a great feature to have, because now your app can talk to users even when it isn&#39;t running. You want to show a step count for how far they&#39;ve walked? Use a notification. You want to trigger an alert because it&#39;s their turn to play in a game? Use a notification. You want to send them marketing messages to make them buy more stuff? Actually, just don&#39;t do that, you bad person.</p><p>We’ve only scratched the surface of what notifications can do, but if you’d like to explore more advanced topics – such as attaching pictures or letting the user type responses rather than tapping buttons – see my book <a href="https://gum.co/advanced-ios-1" target="_blank" rel="noopener noreferrer">Advanced iOS: Volume One</a>.</p><p>We’ll be coming back to notifications again in project 33, where CloudKit is used to create and deliver remote notifications when server data has changed.</p><h4 id="review-what-you-learned" tabindex="-1"><a class="header-anchor" href="#review-what-you-learned"><span>Review what you learned</span></a></h4><p>Anyone can sit through a tutorial, but it takes actual work to remember what was taught. It’s my job to make sure you take as much from these tutorials as possible, so I’ve prepared a short review to help you check your learning.</p><p><a href="https://www.hackingwithswift.com/review/hws/project-21-local-notifications" target="_blank" rel="noopener noreferrer">Click here to review what you learned in project 21.</a></p><h4 id="challenge" tabindex="-1"><a class="header-anchor" href="#challenge"><span>Challenge</span></a></h4><p>One of the best ways to learn is to write your own code as often as possible, so here are three ways you should try your new knowledge to make sure you fully understand what’s going on:</p><ol><li>Update the code in <code>didReceive</code> so that it shows different instances of <code>UIAlertController</code> depending on which action identifier was passed in.</li><li>For a harder challenge, add a second <code>UNNotificationAction</code> to the <code>alarm</code> category of project 21. Give it the title “Remind me later”, and make it call <code>scheduleLocal()</code> so that the same alert is shown in 24 hours. (For the purpose of these challenges, a time interval notification with 86400 seconds is good enough – that’s roughly how many seconds there are in a day, excluding summer time changes and leap seconds.)</li><li>And for an even harder challenge, update project 2 so that it reminds players to come back and play every day. This means scheduling a week of notifications ahead of time, each of which launch the app. When the app is finally launched, make sure you call <code>removeAllPendingNotificationRequests()</code> to clear any un-shown alerts, then make new alerts for future days.</li></ol>',9),D=e("div",{class:"hint-container info"},[e("p",{class:"hint-container-title"},"Wrap up - Additional"),e("p",null,[e("a",{href:"https://www.hackingwithswift.com/review/hws/project-21-local-notifications",target:"_blank",rel:"noopener noreferrer"},"Review for Project 21: Local Notifications")])],-1),x=e("p",null,"That’s another project finished, and one that teaches you a technique you’ll come back to time and time again. Just remember to use your new-found power wisely!",-1),S=e("hr",null,null,-1);function T(h,C){const a=o("router-link"),n=o("VPCard"),p=o("VidStack");return m(),u("div",null,[e("h1",y,[e("a",g,[e("span",null,w(h.$frontmatter.title)+" 관련",1)])]),e("nav",k,[e("ul",null,[e("li",null,[t(a,{to:"#project-21-part-two"},{default:r(()=>[c("Project 21, part two")]),_:1}),e("ul",null,[e("li",null,[t(a,{to:"#wrap-up"},{default:r(()=>[c("Wrap up")]),_:1})])])])])]),v,t(n,i(s({title:"100 Days of Swift - Day 73",desc:"Project 21, part two",link:"https://www.hackingwithswift.com/100/73",logo:"https://www.hackingwithswift.com/favicon.svg",background:"rgba(213,52,58,0.2)"})),null,16),_,e("details",b,[j,t(n,i(s({title:"100 Days of Swift - Day 73 - Wrap up",desc:"Wrap up",link:"https://www.hackingwithswift.com/read/21/4/wrap-up",logo:"https://www.hackingwithswift.com/favicon.svg",background:"rgba(213,52,58,0.2)"})),null,16),t(p,{src:"youtube/iAMuDXSi2Cc"}),A]),D,x,S])}const W=d(f,[["render",T],["__file","73.html.vue"]]),N=JSON.parse('{"path":"/swift/100-days-of-swift/73.html","title":"Day 73","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Day 73","description":"100 Days of Swift > Day 73","category":["Swift"],"tag":["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"100 Days of Swift > Day 73"},{"property":"og:description","content":"Day 73"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/swift/100-days-of-swift/73.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/crashcourse/swift/100-days-of-swift/73.html"}],["meta",{"property":"og:site_name","content":"🥁Crashcourse"}],["meta",{"property":"og:title","content":"Day 73"}],["meta",{"property":"og:description","content":"100 Days of Swift > Day 73"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-10-03T01:20:13.000Z"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"paul-hudson"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"hacking-with-swift"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:modified_time","content":"2024-10-03T01:20:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Day 73\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-03T01:20:13.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Project 21, part two","slug":"project-21-part-two","link":"#project-21-part-two","children":[{"level":3,"title":"Wrap up","slug":"wrap-up","link":"#wrap-up","children":[]}]}],"git":{"createdTime":1703642364000,"updatedTime":1727918413000,"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":11}]},"readingTime":{"minutes":2.81,"words":842},"filePathRelative":"swift/100-days-of-swift/73.md","localizedDate":"2023년 12월 27일","excerpt":"\\n\\n<hr>\\n"}');export{W as comp,N as data};