import{_ as u}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as d,a as n,t as k,b as a,w as o,n as m,g,d as s,e as i,r as p,o as b}from"./app-U_bew1in.js";const h={},v={id:"frontmatter-title-관련",tabindex:"-1"},_={class:"header-anchor",href:"#frontmatter-title-관련"},y={class:"table-of-contents"},f=n("hr",null,null,-1),w=n("hr",null,null,-1),q=n("h2",{id:"_02-컨트롤러",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_02-컨트롤러"},[n("span",null,"02. 컨트롤러")])],-1),x={href:"https://github.com/pahkey/sbb3/tree/2-02",target:"_blank",rel:"noopener noreferrer"},B=n("code",null,"pahkey/sbb3",-1),j=n("code",null,"2-02",-1),C=n("p",null,"이제 차근차근 스프링부트 게시판(SBB)을 만들면서 스프링부트의 기능을 하나씩 알아가 보자.",-1),R=n("hr",null,null,-1),S=n("h2",{id:"url-매핑",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#url-매핑"},[n("span",null,"URL 매핑")])],-1),M=n("code",null,"http://localhost:8080/sbb",-1),L=i('<p>STS의 Boot Dashboard의 시작 버튼을 눌러 로컬서버를 먼저 구동하자.</p><figure><img src="https://wikidocs.net/images/page/160543/C_2-02_1.png" alt="그리고 그냥 한번 브라우저에서  페이지를 요청해 보자." tabindex="0" loading="lazy"><figcaption>그리고 그냥 한번 브라우저에서 <code>http://localhost:8080/sbb</code> 페이지를 요청해 보자.</figcaption></figure><figure><img src="https://wikidocs.net/images/page/160543/O_2-02_2.png" alt="아마 위처럼 &quot;Not found (404)&quot; 라는 오류가 발생할 것이다. 여기서 404는 HTTP 오류코드 중 하나이다." tabindex="0" loading="lazy"><figcaption>아마 위처럼 &quot;Not found (404)&quot; 라는 오류가 발생할 것이다. 여기서 404는 HTTP 오류코드 중 하나이다.</figcaption></figure><blockquote><p>404 오류는 브라우저가 요청한 페이지를 찾을 수 없을 경우에 발생한다.</p></blockquote><p>오류가 발생한 원인은 스프링부트 서버가 <code>http://localhost:8080/sbb</code>라는 요청을 해석할 수 없기 때문이다. 그렇다면 오류를 해결하기 위해 해야 할일은 무엇일까? 컨트롤러를 작성하고 <code>/sbb</code> URL에 대한 매핑을 추가하는 것이다. 페이지 요청이 발생하면 스프링부트는 가장 먼저 컨트롤러에 요청된 페이지의 URL 매핑이 있는지를 조사한다.</p><hr><h2 id="컨트롤러" tabindex="-1"><a class="header-anchor" href="#컨트롤러"><span>컨트롤러</span></a></h2>',7),U=n("code",null,"MainController.java",-1),T=n("code",null,"/sbb/src/main/java/com/mysite/sbb/",-1),G=n("code",null,"MainController.java",-1),V=i(`<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>mysite<span class="token punctuation">.</span>sbb</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Controller</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">GetMapping</span></span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token annotation punctuation">@Controller</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MainController</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/sbb&quot;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;index&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>MainController</code> 클래스에 <code>@Controller</code> 애너테이션을 적용하면 <code>MainController</code> 클래스는 스프링부트의 컨트롤러가 된다. 그리고 메서드의 <code>@GetMapping</code> 애너테이션은 요청된 URL과의 매핑을 담당한다. 서버에 요청이 발생하면 스프링부트는 요청 페이지와 매핑되는 메서드를 컨트롤러를 대상으로 찾는다. 즉, 스프링부트는 <code>http://localhost:8080/sbb</code> 요청이 발생하면 <code>/sbb</code> URL과 매핑되는 <code>index</code> 메서드를 <code>MainController</code> 클래스에서 찾아 실행한다.</p><blockquote><p><code>@GetMapping</code>에 <code>http://localhost:8080</code> 과 같은 도메인명과 포트는 적지 않는다. 왜냐하면 도메인명과 포트는 서버 설정에 따라 변하기 때문이다.</p></blockquote><p>이제 다시 <code>http://localhost:8080/sbb</code> URL을 호출해 보자.</p><figure><img src="https://wikidocs.net/images/page/160543/C_2-02_3.png" alt="이번에도 오류가 발생한다. 하지만 404 오류가 아닌 500 오류코드로 바뀐것을 확인할 수 있다." tabindex="0" loading="lazy"><figcaption>이번에도 오류가 발생한다. 하지만 404 오류가 아닌 500 오류코드로 바뀐것을 확인할 수 있다.</figcaption></figure><p><code>http://localhost:8080/sbb</code> 호출시 <code>MainController</code>의 <code>index</code> 함수는 호출되었지만 오류가 발생한 것이다. URL과 매핑된 함수는 결괏값을 리턴해야 하는데 아무런 값도 리턴하지 않기 때문에 오류가 발생한 것이다. 오류를 해결하려면 클라이언트(브라우저)로 응답을 리턴해야 한다.</p><blockquote><p>콘솔 로그를 보면 index 메스드에서 실행한 <code>System.out.println(&quot;index&quot;);</code>가 실행되어 &quot;index&quot;라는 문자열이 출력된 것을 확인할 수 있다.</p></blockquote><p>다음과 같이 <code>MainController</code>를 수정하자.</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>mysite<span class="token punctuation">.</span>sbb</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Controller</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">GetMapping</span></span><span class="token punctuation">;</span></span>
<span class="line highlighted"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">ResponseBody</span></span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token annotation punctuation">@Controller</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MainController</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/sbb&quot;</span><span class="token punctuation">)</span></span>
<span class="line highlighted">    <span class="token annotation punctuation">@ResponseBody</span></span>
<span class="line highlighted">    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">        <span class="token keyword">return</span> <span class="token string">&quot;index&quot;</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>응답으로 <code>&quot;index&quot;</code>라는 문자열을 브라우저에 출력하기 위해 index 함수의 리턴값을 <code>String</code>으로 변경하고 <code>&quot;index&quot;</code>라는 문자열을 리턴했다. <code>@ResponseBody</code> 애너테이션은 URL 요청에 대한 응답으로 문자열을 리턴하라는 의미이다.</p><blockquote><p>만약 <code>@ResponseBody</code> 애너테이션을 생략한다면 &quot;index&quot;라는 이름의 템플릿 파일을 찾게 되는데 이에 대한 내용은 나중에 자세히 알아본다.</p></blockquote><figure><img src="https://wikidocs.net/images/page/160543/O_2-02_4.png" alt="오류가 해결되었는지  URL을 호출해 확인해 보자." tabindex="0" loading="lazy"><figcaption>오류가 해결되었는지 <code>http://localhost:8080/sbb</code> URL을 호출해 확인해 보자.</figcaption></figure><p>이번에는 <code>MainController</code>의 출력 문자열 <code>&quot;index&quot;</code>를 &quot;안녕하세요 sbb에 오신것을 환영합니다.&quot;로 바꾸어보자.</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>mysite<span class="token punctuation">.</span>sbb</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Controller</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">GetMapping</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">ResponseBody</span></span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token annotation punctuation">@Controller</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MainController</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/sbb&quot;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token annotation punctuation">@ResponseBody</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">        <span class="token keyword">return</span> <span class="token string">&quot;안녕하세요 sbb에 오신것을 환영합니다.&quot;</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://wikidocs.net/images/page/160543/C_2-02_5.png" alt="그리고 브라우저에서 변경한 문자열이 잘 출력되었는지 확인해 보자." tabindex="0" loading="lazy"><figcaption>그리고 브라우저에서 변경한 문자열이 잘 출력되었는지 확인해 보자.</figcaption></figure><p>Spring Boot Devtools와 Live Reload 기능에 의해 서버는 물론 브라우저도 리로딩되어 변경된 사항을 추가 작업 없이 즉시 확인할 수 있을 것이다.</p><hr><h2 id="첫번째-프로그램-완성" tabindex="-1"><a class="header-anchor" href="#첫번째-프로그램-완성"><span>첫번째 프로그램 완성</span></a></h2><p>여러분의 첫번째 SBB 프로그램을 만들었다. 축하한다!</p><hr>`,20);function z(c,N){const e=p("router-link"),l=p("VPCard"),t=p("FontIcon"),r=p("VidStack");return b(),d("div",null,[n("h1",v,[n("a",_,[n("span",null,k(c.$frontmatter.title)+" 관련",1)])]),n("nav",y,[n("ul",null,[n("li",null,[a(e,{to:"#_02-컨트롤러"},{default:o(()=>[s("02. 컨트롤러")]),_:1})]),n("li",null,[a(e,{to:"#url-매핑"},{default:o(()=>[s("URL 매핑")]),_:1})]),n("li",null,[a(e,{to:"#컨트롤러"},{default:o(()=>[s("컨트롤러")]),_:1})]),n("li",null,[a(e,{to:"#첫번째-프로그램-완성"},{default:o(()=>[s("첫번째 프로그램 완성")]),_:1})])])]),f,a(l,m(g({title:"2-02. 컨트롤러 프로젝트의 구조",desc:"점프 투 스프링부트 - WikiDocs",link:"https://wikidocs.net/160543",logo:"https://wikidocs.net/static/img/favicon.ico",background:"rgba(255,255,255,0.2)"})),null,16),w,q,n("blockquote",null,[n("p",null,[n("a",x,[a(t,{icon:"iconfont icon-github"}),s(),B,s(" - "),a(t,{icon:"fas fa-folder-open"}),s(),j])])]),a(r,{src:"youtube/wI9y5uQKj0g"}),C,R,S,n("p",null,[s("이제 본격적으로 SBB 프로그램을 만들어 보자. 브라우저에서 "),a(t,{icon:"fas fa-globe"}),M,s(' 페이지를 요청했을 때 "안녕하세요 sbb에 오신것을 환영합니다."라는 문자열을 출력하도록 만들어 보자.')]),L,n("p",null,[s("URL 매핑을 추가하기 위해 "),a(t,{icon:"fa-brands fa-java"}),s(),U,s(" 파일을 다음과 같이 작성하자.")]),n("blockquote",null,[n("p",null,[s("파일명: "),a(t,{icon:"fas fa-folder-open"}),T,a(t,{icon:"fa-brands fa-java"}),G])]),V])}const J=u(h,[["render",z],["__file","02B.html.vue"]]),O=JSON.parse('{"path":"/java/jump-to-spring-boot/02B.html","title":"02B. 컨트롤러 프로젝트의 구조","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"02B. 컨트롤러 프로젝트의 구조","description":"Jump to Spring Boot > 02B. 컨트롤러 프로젝트의 구조","category":["Java","Spring","AWS"],"tag":["crashcourse","java","jdk","jdk8","stream","spring","springframework","springboot","aws","aws-ec2"],"head":[[{"meta":null},{"property":"og:title","content":"Jump to Spring Boot > 02B. 컨트롤러 프로젝트의 구조"},{"property":"og:description","content":"02B. 컨트롤러 프로젝트의 구조"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/java/jump-to-spring-boot/02B.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/crashcourse/java/jump-to-spring-boot/02B.html"}],["meta",{"property":"og:site_name","content":"🥁Crashcourse"}],["meta",{"property":"og:title","content":"02B. 컨트롤러 프로젝트의 구조"}],["meta",{"property":"og:description","content":"Jump to Spring Boot > 02B. 컨트롤러 프로젝트의 구조"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://wikidocs.net/images/page/160543/C_2-02_1.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-10-03T01:20:13.000Z"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"java"}],["meta",{"property":"article:tag","content":"jdk"}],["meta",{"property":"article:tag","content":"jdk8"}],["meta",{"property":"article:tag","content":"stream"}],["meta",{"property":"article:tag","content":"spring"}],["meta",{"property":"article:tag","content":"springframework"}],["meta",{"property":"article:tag","content":"springboot"}],["meta",{"property":"article:tag","content":"aws"}],["meta",{"property":"article:tag","content":"aws-ec2"}],["meta",{"property":"article:modified_time","content":"2024-10-03T01:20:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"02B. 컨트롤러 프로젝트의 구조\\",\\"image\\":[\\"https://wikidocs.net/images/page/160543/C_2-02_1.png\\",\\"https://wikidocs.net/images/page/160543/O_2-02_2.png\\",\\"https://wikidocs.net/images/page/160543/C_2-02_3.png\\",\\"https://wikidocs.net/images/page/160543/O_2-02_4.png\\",\\"https://wikidocs.net/images/page/160543/C_2-02_5.png\\"],\\"dateModified\\":\\"2024-10-03T01:20:13.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"02. 컨트롤러","slug":"_02-컨트롤러","link":"#_02-컨트롤러","children":[]},{"level":2,"title":"URL 매핑","slug":"url-매핑","link":"#url-매핑","children":[]},{"level":2,"title":"컨트롤러","slug":"컨트롤러","link":"#컨트롤러","children":[]},{"level":2,"title":"첫번째 프로그램 완성","slug":"첫번째-프로그램-완성","link":"#첫번째-프로그램-완성","children":[]}],"git":{"createdTime":1703642364000,"updatedTime":1727918413000,"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":10}]},"readingTime":{"minutes":1.08,"words":324},"filePathRelative":"java/jump-to-spring-boot/02B.md","localizedDate":"2023년 12월 27일","excerpt":"\\n\\n<hr>\\n"}');export{J as comp,O as data};