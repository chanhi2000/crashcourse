import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,a as e,t as r,b as t,n as p,g,w as d,e as m,r as a,o as u,d as f}from"./app-U_bew1in.js";const k={},b={id:"frontmatter-title-관련",tabindex:"-1"},h={class:"header-anchor",href:"#frontmatter-title-관련"},v={class:"table-of-contents"},y=e("hr",null,null,-1),j=m(`<h2 id="eliminate-obsolete-object-references" tabindex="-1"><a class="header-anchor" href="#eliminate-obsolete-object-references"><span>Eliminate obsolete object references</span></a></h2><p><strong>스택이 커졌다가 줄어들면서</strong> 제거한 객체들을 GC가 처리하지 못하는 경우가 있다. 첨자 값이 <code>size</code>보다 작은 곳에 있는 요소들은 실제로 쓰이는 참조들이지만, 나머지 영역에 있는 참조들은 그렇지 않다. 문제는 남아있는 객체를 통해 참조되는 다른 객체들도 쓰레기 수집에서 제외된다.</p><figure><img src="https://1371820085-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-Lej4tgjCgS0Wyj6JGe2%2F-Lf3aFiJ5iI8PxEdUh03%2F-Lf3aT-IMlC59PxB14Mg%2Fstack.PNG?generation=1558076584419169&amp;alt=media" alt="하지만 GC 입장에서는 free object라는 사실을 알 도리가 없다." tabindex="0" loading="lazy"><figcaption>하지만 GC 입장에서는 free object라는 사실을 알 도리가 없다.</figcaption></figure><p>이런 문제는 간단히 고칠 수 있다. 쓸 일 없는 객체 참조는 무조건 <code>null</code>로 만드는 것이다.</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span><span class="token punctuation">(</span>size <span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">EmptyStackException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token class-name">Object</span> result <span class="token operator">=</span> elements<span class="token punctuation">[</span><span class="token operator">--</span>size<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    elements<span class="token punctuation">[</span>size<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token comment">//만기 참조 제거</span></span>
<span class="line">    <span class="token keyword">return</span> result<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>만기 참조를 제거하는 가장 좋은 방법은 해당 참조가 보관된 변수가 유효범위를 벗아나게 두는 것이다.</strong></p><p><strong>캐시도 메모리 누수가 흔히 발생하는 장소다. 메모리 누수가 흔히 발견되는 또 한곳은 리스너 등의 역호출자(callback)다.</strong></p><hr>`,8);function _(n,w){const s=a("VPCard"),o=a("router-link"),i=a("SiteInfo");return u(),l("div",null,[e("h1",b,[e("a",h,[e("span",null,r(n.$frontmatter.title)+" 관련",1)])]),t(s,p(g({title:"목차",desc:"Effective Java",link:"/java/effective-java/README.md",logo:"https://81465973-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/spaces%2F-Lej4tgjCgS0Wyj6JGe2%2Favatar.png?generation=1557720343650540&alt=media",background:"rgba(31,31,31,0.2)"})),null,16),e("nav",v,[e("ul",null,[e("li",null,[t(o,{to:"#eliminate-obsolete-object-references"},{default:d(()=>[f("Eliminate obsolete object references")]),_:1})])])]),y,t(i,{name:"객체의 생성과 삭제 | 양봉수 블로그",desc:"객체를 만들어야하는 시점과 그 방법, 객체 생성을 피해야 하는 경우와 그 방법, 적절한 순간에 객체가 삭제되도록 보장하는 방법, 그리고 삭제 전에 반드시 이루어져야 하는 청소 작업들을 관리하는 방법을 살펴본다.",url:"https://yangbongsoo.gitbook.io/study/effective-java/creating_and_destroying_objects",logo:"https://81465973-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/spaces%2F-Lej4tgjCgS0Wyj6JGe2%2Favatar.png?generation=1557720343650540&alt=media",preview:"https://yangbongsoo.gitbook.io/study/~gitbook/ogimage/-Lf3aHUKi8T1aUZM7Y49"}),j])}const E=c(k,[["render",_],["__file","07.html.vue"]]),F=JSON.parse('{"path":"/java/effective-java/07.html","title":"규칙7 : 유효기간이 지난 객체 참조는 폐기하라","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"규칙7 : 유효기간이 지난 객체 참조는 폐기하라","description":"Effective Java > 규칙7 : 유효기간이 지난 객체 참조는 폐기하라","category":["Java"],"tag":["crashcourse","java","jdk","jdk8"],"head":[[{"meta":null},{"property":"og:title","content":"Effective Java > 규칙7 : 유효기간이 지난 객체 참조는 폐기하라"},{"property":"og:description","content":"규칙7 : 유효기간이 지난 객체 참조는 폐기하라"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/java/effective-java/07.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/crashcourse/java/effective-java/07.html"}],["meta",{"property":"og:site_name","content":"🥁Crashcourse"}],["meta",{"property":"og:title","content":"규칙7 : 유효기간이 지난 객체 참조는 폐기하라"}],["meta",{"property":"og:description","content":"Effective Java > 규칙7 : 유효기간이 지난 객체 참조는 폐기하라"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://yangbongsoo.gitbook.io/study/~gitbook/ogimage/-Lf3aHUKi8T1aUZM7Y49"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-10-03T01:20:13.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://yangbongsoo.gitbook.io/study/~gitbook/ogimage/-Lf3aHUKi8T1aUZM7Y49"}],["meta",{"name":"twitter:image:alt","content":"규칙7 : 유효기간이 지난 객체 참조는 폐기하라"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"java"}],["meta",{"property":"article:tag","content":"jdk"}],["meta",{"property":"article:tag","content":"jdk8"}],["meta",{"property":"article:modified_time","content":"2024-10-03T01:20:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"규칙7 : 유효기간이 지난 객체 참조는 폐기하라\\",\\"image\\":[\\"https://1371820085-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-Lej4tgjCgS0Wyj6JGe2%2F-Lf3aFiJ5iI8PxEdUh03%2F-Lf3aT-IMlC59PxB14Mg%2Fstack.PNG?generation=1558076584419169&alt=media\\"],\\"dateModified\\":\\"2024-10-03T01:20:13.000Z\\",\\"author\\":[]}"]],"isOriginal":false,"cover":"https://yangbongsoo.gitbook.io/study/~gitbook/ogimage/-Lf3aHUKi8T1aUZM7Y49"},"headers":[{"level":2,"title":"Eliminate obsolete object references","slug":"eliminate-obsolete-object-references","link":"#eliminate-obsolete-object-references","children":[]}],"git":{"createdTime":1720075859000,"updatedTime":1727918413000,"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":0.54,"words":161},"filePathRelative":"java/effective-java/07.md","localizedDate":"2024년 7월 4일","excerpt":"\\n"}');export{E as comp,F as data};