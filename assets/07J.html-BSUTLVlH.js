import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as d,a as t,t as p,b as o,n as u,g as m,d as e,e as l,r as s,o as g}from"./app-U_bew1in.js";const h={},k={id:"frontmatter-title-관련",tabindex:"-1"},_={class:"header-anchor",href:"#frontmatter-title-관련"},y=t("nav",{class:"table-of-contents"},[t("ul")],-1),P=t("hr",null,null,-1),f=t("p",null,[t("code",null,"COPY"),e("는 파일을 이미지에 추가합니다. "),t("code",null,"ADD"),e("와는 달리 "),t("code",null,"COPY"),e("는 압축 파일을 추가할 때 압축을 해제하지 않고, 파일 URL도 사용할 수 없습니다.")],-1),q=t("code",null,"Dockerfile",-1),C=l(`<div class="language-docker line-numbers-mode" data-highlighter="prismjs" data-ext="docker" data-title="docker"><pre><code><span class="line">&lt;span class=&quot;code-line&quot;&gt;&lt;span class=&quot;token instruction&quot;&gt;&lt;span class=&quot;token keyword&quot;&gt;COPY&lt;/span&gt; hello-entrypoint.sh /entrypoint.sh&lt;/span&gt;</span>
<span class="line">&lt;/span&gt;&lt;span class=&quot;code-line&quot;&gt;&lt;span class=&quot;token instruction&quot;&gt;&lt;span class=&quot;token keyword&quot;&gt;COPY&lt;/span&gt; hello-dir /hello-dir&lt;/span&gt;</span>
<span class="line">&lt;/span&gt;&lt;span class=&quot;code-line&quot;&gt;&lt;span class=&quot;token instruction&quot;&gt;&lt;span class=&quot;token keyword&quot;&gt;COPY&lt;/span&gt; zlib-1.2.8.tar.gz /zlib-1.2.8.tar.gz&lt;/span&gt;</span>
<span class="line">&lt;/span&gt;&lt;span class=&quot;code-line&quot;&gt;&lt;span class=&quot;token instruction&quot;&gt;&lt;span class=&quot;token keyword&quot;&gt;COPY&lt;/span&gt; *.txt /root/&lt;/span&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>COPY &lt;복사할 파일 경로&gt; &lt;이미지에서 파일이 위치할 경로&gt;</code> 형식입니다.</p>`,2),O=l("<li><code>&lt;복사할 파일 경로&gt;</code>는 컨텍스트 아래를 기준으로 하며 컨텍스트 바깥의 파일, 디렉터리나, 절대 경로는 사용할 수 없습니다. <ul><li>예) <code>COPY ../hello.txt /home/hello</code> (X)</li><li>예) <code>COPY /home/hello/hello.txt /home/hello</code> (X)</li></ul></li><li><code>&lt;복사할 파일 경로&gt;</code>는 파일뿐만 아니라 디렉터리도 설정할 수 있으며, 디렉터리를 지정하면 디렉터리의 모든 파일을 복사합니다. 또한, 와일드카드를 사용하여 특정 파일만 복사할 수 있습니다. <ul><li>예) <code>COPY *.txt /root/</code></li></ul></li><li><code>&lt;복사할 파일 경로&gt;</code>에 인터넷에 있는 파일의 URL은 사용할 수 없습니다.</li><li>압축 파일은 압축을 해제하지 않고 그대로 복사됩니다.</li><li><code>&lt;이미지에서 파일이 위치할 경로&gt;</code>는 항상 절대 경로로 설정해야 합니다. 그리고 마지막이 /로 끝나면 디렉터리가 생성되고 파일은 그 아래에 복사됩니다.</li>",5),b=t("code",null,"COPY ./ /hello",-1),v=t("code",null,".dockerignore",-1),Y=t("p",null,[t("code",null,"COPY"),e("로 추가되는 파일은 소유자(UID) 0, 그룹(GID) 0으로 설정되고 권한은 기존 파일의 권한을 따릅니다.")],-1),D=t("hr",null,null,-1);function J(a,w){const c=s("VPCard"),r=s("SiteInfo"),n=s("FontIcon");return g(),d("div",null,[t("h1",k,[t("a",_,[t("span",null,p(a.$frontmatter.title)+" 관련",1)])]),o(c,u(m({title:"목차",desc:"언제나 최신 Docker",link:"/docker/always-up-to-date-docker/README.md",logo:"https://pyrasis.com/assets/images/pyrasis.png",background:"rgba(31,41,55,0.2)"})),null,16),y,P,o(r,{name:"7장 - 10. COPY",desc:"언제나 최신 Docker",url:"https://pyrasis.com/jHLsAlwaysUpToDateDocker/Unit07/10",logo:"https://pyrasis.com/assets/images/pyrasis.png",preview:"https://pyrasis.com/assets/images/profile1.png"}),f,t("blockquote",null,[t("p",null,[e("."),o(n,{icon:"fa-brands fa-docker"}),q])]),C,t("ul",null,[O,t("li",null,[b,e("와 같이 현재 디렉터리를 추가할 때 "),o(n,{icon:"fa-brands fa-docker"}),v,e(" 파일에 설정한 파일과 디렉터리는 제외됩니다.")])]),Y,D])}const R=i(h,[["render",J],["__file","07J.html.vue"]]),z=JSON.parse('{"path":"/docker/always-up-to-date-docker/07J.html","title":"07J. COPY","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"07J. COPY","description":"언제나 최신 Docker > 07J. COPY","category":["DevOps","Docker"],"tag":["crashcourse","pyrasis.com","docker","devops"],"head":[[{"meta":null},{"property":"og:title","content":"언제나 최신 Docker > 07J. COPY"},{"property":"og:description","content":"07J. COPY"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/docker/always-up-to-date-docker/07J.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/crashcourse/docker/always-up-to-date-docker/07J.html"}],["meta",{"property":"og:site_name","content":"🥁Crashcourse"}],["meta",{"property":"og:title","content":"07J. COPY"}],["meta",{"property":"og:description","content":"언제나 최신 Docker > 07J. COPY"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-10-03T01:20:13.000Z"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"pyrasis.com"}],["meta",{"property":"article:tag","content":"docker"}],["meta",{"property":"article:tag","content":"devops"}],["meta",{"property":"article:published_time","content":"2022-10-03T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-03T01:20:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"07J. COPY\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-10-03T00:00:00.000Z\\",\\"dateModified\\":\\"2024-10-03T01:20:13.000Z\\",\\"author\\":[]}"]],"date":"2022-10-03T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"createdTime":1716977950000,"updatedTime":1727918413000,"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":3}]},"readingTime":{"minutes":0.73,"words":220},"filePathRelative":"docker/always-up-to-date-docker/07J.md","localizedDate":"2022년 10월 3일","excerpt":"\\n"}');export{R as comp,z as data};