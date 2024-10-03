import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as p,a as e,t as d,b as t,n as m,g as u,d as o,w as h,e as g,r as a,o as k}from"./app-U_bew1in.js";const y={},_={id:"frontmatter-title-관련",tabindex:"-1"},v={class:"header-anchor",href:"#frontmatter-title-관련"},f=e("nav",{class:"table-of-contents"},[e("ul")],-1),b=e("hr",null,null,-1),V=e("code",null,"VOLUME",-1),E=e("code",null,"Dockerfile",-1),L=g(`<div class="language-docker line-numbers-mode" data-highlighter="prismjs" data-ext="docker" data-title="docker"><pre><code><span class="line"><span class="token instruction"><span class="token keyword">VOLUME</span> /data</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">VOLUME</span> [<span class="token string">&quot;/data&quot;</span>, <span class="token string">&quot;/var/log/hello&quot;</span>]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>VOLUME &lt;컨테이너 디렉터리&gt; 또는 VOLUME [&quot;컨테이너 디렉터리 1&quot;, &quot;컨테이너 디렉터리2&quot;]</code> 형식입니다. <strong>/data</strong>처럼 바로 경로를 설정할 수도 있고, <code>[&quot;/data&quot;, &quot;/var/log/hello&quot;]</code>처럼 배열 형태로 설정할 수도 있습니다. 단, <code>VOLUME</code>으로는 호스트의 특정 디렉터리와 연결할 수는 없습니다.</p><p>데이터 볼륨을 호스트의 특정 디렉터리와 연결하려면 <code>docker run</code> 명령에서 <code>-v</code> 옵션을 사용해야 합니다.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> <span class="token function">docker</span> run <span class="token parameter variable">-v</span> /root/data:/data example</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>옵션은 <code>-v &lt;호스트 디렉터리&gt;:&lt;컨테이너 디렉터리&gt;</code> 형식입니다.</p><hr>`,6);function O(s,U){const n=a("VPCard"),r=a("SiteInfo"),c=a("RouteLink"),i=a("FontIcon");return k(),p("div",null,[e("h1",_,[e("a",v,[e("span",null,d(s.$frontmatter.title)+" 관련",1)])]),t(n,m(u({title:"목차",desc:"언제나 최신 Docker",link:"/docker/always-up-to-date-docker/README.md",logo:"https://pyrasis.com/assets/images/pyrasis.png",background:"rgba(31,41,55,0.2)"})),null,16),f,b,t(r,{name:"7장 - 11. VOLUME",desc:"언제나 최신 Docker",url:"https://pyrasis.com/jHLsAlwaysUpToDateDocker/Unit07/11",logo:"https://pyrasis.com/assets/images/pyrasis.png",preview:"https://pyrasis.com/assets/images/profile1.png"}),e("p",null,[V,o("은 디렉터리의 내용을 컨테이너에 저장하지 않고 호스트에 저장하도록 설정합니다. "),t(c,{to:"/docker/always-up-to-date-docker/06D.html"},{default:h(()=>[o("Unit 6.4 Docker 데이터 볼륨 사용하기")]),_:1}),o("에서 설명한 내용과 같습니다.")]),e("blockquote",null,[e("p",null,[o("."),t(i,{icon:"fa-brands fa-docker"}),E])]),L])}const D=l(y,[["render",O],["__file","07K.html.vue"]]),q=JSON.parse('{"path":"/docker/always-up-to-date-docker/07K.html","title":"07K. VOLUME","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"07K. VOLUME","description":"언제나 최신 Docker > 07K. VOLUME","category":["DevOps","Docker"],"tag":["crashcourse","pyrasis.com","docker","devops"],"head":[[{"meta":null},{"property":"og:title","content":"언제나 최신 Docker > 07K. VOLUME"},{"property":"og:description","content":"07K. VOLUME"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/docker/always-up-to-date-docker/07K.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/crashcourse/docker/always-up-to-date-docker/07K.html"}],["meta",{"property":"og:site_name","content":"🥁Crashcourse"}],["meta",{"property":"og:title","content":"07K. VOLUME"}],["meta",{"property":"og:description","content":"언제나 최신 Docker > 07K. VOLUME"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-10-03T01:20:13.000Z"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"pyrasis.com"}],["meta",{"property":"article:tag","content":"docker"}],["meta",{"property":"article:tag","content":"devops"}],["meta",{"property":"article:published_time","content":"2022-10-03T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-03T01:20:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"07K. VOLUME\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-10-03T00:00:00.000Z\\",\\"dateModified\\":\\"2024-10-03T01:20:13.000Z\\",\\"author\\":[]}"]],"date":"2022-10-03T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"createdTime":1716977950000,"updatedTime":1727918413000,"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":3}]},"readingTime":{"minutes":0.47,"words":141},"filePathRelative":"docker/always-up-to-date-docker/07K.md","localizedDate":"2022년 10월 3일","excerpt":"\\n"}');export{D as comp,q as data};