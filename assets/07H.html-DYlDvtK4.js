import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as p,a as e,t as d,b as n,n as m,g as u,d as s,e as o,r as t,o as h}from"./app-U_bew1in.js";const k={},g={id:"frontmatter-title-관련",tabindex:"-1"},v={class:"header-anchor",href:"#frontmatter-title-관련"},b=e("nav",{class:"table-of-contents"},[e("ul")],-1),_=e("hr",null,null,-1),y=e("p",null,[e("code",null,"ENV"),s("는 환경 변수를 설정합니다. "),e("code",null,"ENV"),s("로 설정한 환경 변수는 "),e("code",null,"RUN"),s(", "),e("code",null,"CMD"),s(", "),e("code",null,"ENTRYPOINT"),s("에 적용됩니다.")],-1),f=e("code",null,"Dockerfile",-1),E=o(`<div class="language-docker line-numbers-mode" data-highlighter="prismjs" data-ext="docker" data-title="docker"><pre><code><span class="line"><span class="token instruction"><span class="token keyword">ENV</span> GOPATH /go</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">ENV</span> PATH /go/bin:<span class="token variable">$PATH</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>ENV &lt;환경 변수&gt; &lt;값&gt;</code> 형식입니다. 환경 변수를 사용할 때는 <code>$</code>를 사용하면 됩니다.</p><p>다음은 <code>ENV</code>에서 설정한 환경 변수를 CMD로 출력합니다.</p>`,3),N=e("code",null,"Dockerfile",-1),V=o(`<div class="language-docker line-numbers-mode" data-highlighter="prismjs" data-ext="docker" data-title="docker"><pre><code><span class="line"><span class="token instruction"><span class="token keyword">ENV</span> HELLO 1234</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">CMD</span> echo <span class="token variable">$HELLO</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,1),H=e("code",null,"Dockerfile",-1),D=e("code",null,"docker run",-1),T=o(`<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> <span class="token function">docker</span> build <span class="token parameter variable">--tag</span> example <span class="token builtin class-name">.</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">docker</span> run example</span>
<span class="line"><span class="token comment"># </span></span>
<span class="line"><span class="token comment"># 1234</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ENV에서 설정한 <code>HELLO</code>의 값 <code>1234</code>가 출력됩니다.</p><p>환경 변수는 <code>docker run</code> 명령에서도 설정할 수 있습니다.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> <span class="token function">docker</span> run <span class="token parameter variable">-e</span> <span class="token assign-left variable">HELLO</span><span class="token operator">=</span><span class="token number">4321</span> example</span>
<span class="line"><span class="token comment"># </span></span>
<span class="line"><span class="token comment"># 4321</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>-e &lt;환경 변수&gt;=&lt;값&gt;</code> 형식입니다. <code>-e</code> 옵션은 여러 번 사용할 수 있고, <code>--env</code> 옵션과 같습니다.</p><hr>`,6);function x(c,w){const r=t("VPCard"),l=t("SiteInfo"),a=t("FontIcon");return h(),p("div",null,[e("h1",g,[e("a",v,[e("span",null,d(c.$frontmatter.title)+" 관련",1)])]),n(r,m(u({title:"목차",desc:"언제나 최신 Docker",link:"/docker/always-up-to-date-docker/README.md",logo:"https://pyrasis.com/assets/images/pyrasis.png",background:"rgba(31,41,55,0.2)"})),null,16),b,_,n(l,{name:"7장 - 8. ENV",desc:"언제나 최신 Docker",url:"https://pyrasis.com/jHLsAlwaysUpToDateDocker/Unit07/08",logo:"https://pyrasis.com/assets/images/pyrasis.png",preview:"https://pyrasis.com/assets/images/profile1.png"}),y,e("blockquote",null,[e("p",null,[s("."),n(a,{icon:"fa-brands fa-docker"}),f])]),E,e("blockquote",null,[e("p",null,[s("."),n(a,{icon:"fa-brands fa-docker"}),N])]),V,e("p",null,[s("."),n(a,{icon:"fa-brands fa-docker"}),H,s("을 빌드하여 "),D,s(" 명령으로 실행합니다.")]),T])}const O=i(k,[["render",x],["__file","07H.html.vue"]]),R=JSON.parse('{"path":"/docker/always-up-to-date-docker/07H.html","title":"07H. ENV","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"07H. ENV","description":"언제나 최신 Docker > 07H. ENV","category":["DevOps","Docker"],"tag":["crashcourse","pyrasis.com","docker","devops"],"head":[[{"meta":null},{"property":"og:title","content":"언제나 최신 Docker > 07H. ENV"},{"property":"og:description","content":"07H. ENV"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/docker/always-up-to-date-docker/07H.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/crashcourse/docker/always-up-to-date-docker/07H.html"}],["meta",{"property":"og:site_name","content":"🥁Crashcourse"}],["meta",{"property":"og:title","content":"07H. ENV"}],["meta",{"property":"og:description","content":"언제나 최신 Docker > 07H. ENV"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-10-03T01:20:13.000Z"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"pyrasis.com"}],["meta",{"property":"article:tag","content":"docker"}],["meta",{"property":"article:tag","content":"devops"}],["meta",{"property":"article:published_time","content":"2022-10-03T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-03T01:20:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"07H. ENV\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-10-03T00:00:00.000Z\\",\\"dateModified\\":\\"2024-10-03T01:20:13.000Z\\",\\"author\\":[]}"]],"date":"2022-10-03T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"createdTime":1716977950000,"updatedTime":1727918413000,"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":3}]},"readingTime":{"minutes":0.6,"words":179},"filePathRelative":"docker/always-up-to-date-docker/07H.md","localizedDate":"2022년 10월 3일","excerpt":"\\n"}');export{O as comp,R as data};