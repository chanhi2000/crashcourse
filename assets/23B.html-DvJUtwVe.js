import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as u,a as s,t as d,b as a,n as o,g as p,d as n,e as c,r as i,o as m}from"./app-U_bew1in.js";const h={},g={id:"frontmatter-title-관련",tabindex:"-1"},k={class:"header-anchor",href:"#frontmatter-title-관련"},_=s("nav",{class:"table-of-contents"},[s("ul")],-1),f=s("hr",null,null,-1),b=s("p",null,"AWS 콘솔에서 Elastic Beanstalk node.js 애플리케이션을 Elastic Beanstalk 환경에 배포해보겠습니다.",-1),v=s("figure",null,[s("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter23/17.png",alt:"AWS 콘솔에서 Elastic Beanstalk 작업 흐름",tabindex:"0",loading:"lazy"}),s("figcaption",null,"AWS 콘솔에서 Elastic Beanstalk 작업 흐름")],-1),y=s("p",null,"간단한 웹 페이지를 작성합니다. 메모장이나 기타 텍스트 편집기를 열고 아래와 같이 작성한 뒤 app.js로 저장합니다.",-1),A=s("code",null,"app.js",-1),B=c(`<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">var</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">,</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">,</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/index.html&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;Hello Elastic Beanstalk&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">PORT</span> <span class="token operator">||</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),S=s("code",null,"package.json",-1),z=s("code",null,"package.json",-1),j=c(`<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Hello Elastic Beanstalk&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.0.1&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;express&quot;</span><span class="token operator">:</span> <span class="token string">&quot;4.4.x&quot;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),W=s("code",null,"app.js",-1),T=s("code",null,"package.json",-1),E=s("code",null,"exampleapp.zip",-1),x=s("figure",null,[s("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter23/18_.png",alt:"Elastic Beanstalk 메인 페이지에 애플리케이션과 환경 목록이 표시됩니다. 방금 생성한 Elastic Beanstalk 환경()을 클릭합니다.",tabindex:"0",loading:"lazy"}),s("figcaption",null,[n("Elastic Beanstalk 메인 페이지에 애플리케이션과 환경 목록이 표시됩니다. 방금 생성한 Elastic Beanstalk 환경("),s("code",null,"exampleapp-env"),n(")을 클릭합니다.")])],-1),C=s("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter23/19_.png",alt:'Elastic Beanstalk 환경 페이지에서 <FontIcon icon="iconfont icon-select"/> 버튼을 클릭합니다.',tabindex:"0",loading:"lazy"},null,-1),q=s("code",null,"[Upload and Deploy]",-1),O=s("p",null,"업로드 및 배포 창이 표시됩니다.",-1),w=s("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter23/20_.png",alt:'<FontIcon icon="iconfont icon-select"/> 버튼을 클릭합니다.',tabindex:"0",loading:"lazy"},null,-1),N=s("code",null,"[파일 선택]",-1),F=s("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter23/21_.png",alt:'파일 열기 창에서 방금 압축했던 <FontIcon icon="fas fa-file-zipper"/> 파일을 선택하고 <FontIcon icon="iconfont icon-select"/> 버튼을 클릭합니다.',tabindex:"0",loading:"lazy"},null,-1),I=s("code",null,"exampleapp.zip",-1),R=s("code",null,"[열기]",-1),V=s("p",null,[n("파일을 열면 Version label에 파일명이 그대로 입력됩니다. 애플리케이션을 업로드할 때마다 Version label이 달라져야 합니다. 여기서는 "),s("code",null,"exampleapp1"),n("을 입력합니다(다음 번에는 "),s("code",null,"exampleapp2"),n(),s("code",null,"exampleapp3"),n(" 등으로 입력합니다).")],-1),P=s("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter23/22_.png",alt:'설정이 완료되었으면 <FontIcon icon="iconfont icon-select"/> 버튼을 클릭합니다.',tabindex:"0",loading:"lazy"},null,-1),Z=s("code",null,"[Deploy]",-1),D=s("p",null,"잠시 기다리면 Health가 Updating에서 Green으로 바뀌고, Elastic Beanstalk 애플리케이션 배포가 완료됩니다.",-1),U=s("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter23/23_.png",alt:'이제 위쪽 <FontIcon icon="fas fa-globe"/> 링크를 클릭합니다.',tabindex:"0",loading:"lazy"},null,-1),H=s("code",null,"<환경 이름>.elasticbeanstalk.com",-1),K=s("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter23/24_.png",alt:'웹 브라우저에서 Elastic Beanstalk 환경 URL에 접속하면 <FontIcon icon="fa-brands fa-js"/>의 내용이 표시됩니다.',tabindex:"0",loading:"lazy"},null,-1),L=s("code",null,"app.js",-1),M=s("p",null,"이처럼 AWS 콘솔에서 Elastic Beanstalk 애플리케이션을 간단하게 배포할 수 있습니다.",-1),G=s("hr",null,null,-1);function J(l,$){const e=i("VPCard"),t=i("FontIcon");return m(),u("div",null,[s("h1",g,[s("a",k,[s("span",null,d(l.$frontmatter.title)+" 관련",1)])]),a(e,o(p({title:"목차",desc:"아마존 웹 서비스를 다루는 기술",link:"/aws/art-of-aws/README.md",logo:"https://pyrasis.com/assets/images/pyrasis.png",background:"rgba(31,41,55,0.2)"})),null,16),_,f,a(e,o(p({title:"23장 - 2. AWS 콘솔에서 Elastic Beanstalk Node.js 애플리케이션 배포하기",desc:"아마존 웹 서비스를 다루는 기술",link:"https://pyrasis.com/book/TheArtOfAmazonWebServices/Chapter23/02",logo:"https://pyrasis.com/favicon.ico",background:"rgba(31,41,55,0.2)"})),null,16),b,v,y,s("blockquote",null,[a(t,{icon:"fa-brands fa-js"}),A]),B,s("p",null,[n("Node.js npm 패키지 사용을 위해 아래와 같이 작성한 뒤 "),a(t,{icon:"iconfont icon-json"}),S,n("로 저장합니다.")]),s("blockquote",null,[a(t,{icon:"iconfont icon-json"}),z]),j,s("p",null,[n("."),a(t,{icon:"fa-brands fa-js"}),W,n(" 파일과 "),a(t,{icon:"iconfont icon-json"}),T,n(" 파일을 zip으로 압축합니다. 저는 "),a(t,{icon:"fas fa-file-zipper"}),E,n("으로 압축했습니다.")]),x,s("figure",null,[C,s("figcaption",null,[n("Elastic Beanstalk 환경 페이지에서 "),a(t,{icon:"iconfont icon-select"}),q,n(" 버튼을 클릭합니다.")])]),O,s("figure",null,[w,s("figcaption",null,[a(t,{icon:"iconfont icon-select"}),N,n(" 버튼을 클릭합니다.")])]),s("figure",null,[F,s("figcaption",null,[n("파일 열기 창에서 방금 압축했던 "),a(t,{icon:"fas fa-file-zipper"}),I,n(" 파일을 선택하고 "),a(t,{icon:"iconfont icon-select"}),R,n(" 버튼을 클릭합니다.")])]),V,s("figure",null,[P,s("figcaption",null,[n("설정이 완료되었으면 "),a(t,{icon:"iconfont icon-select"}),Z,n(" 버튼을 클릭합니다.")])]),D,s("figure",null,[U,s("figcaption",null,[n("이제 위쪽 "),a(t,{icon:"fas fa-globe"}),H,n(" 링크를 클릭합니다.")])]),s("figure",null,[K,s("figcaption",null,[n("웹 브라우저에서 Elastic Beanstalk 환경 URL에 접속하면 "),a(t,{icon:"fa-brands fa-js"}),L,n("의 내용이 표시됩니다.")])]),M,G])}const Y=r(h,[["render",J],["__file","23B.html.vue"]]),ss=JSON.parse('{"path":"/aws/art-of-aws/23B.html","title":"23B. AWS 콘솔에서 Elastic Beanstalk Node.js 애플리케이션 배포하기","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"23B. AWS 콘솔에서 Elastic Beanstalk Node.js 애플리케이션 배포하기","description":"아마존 웹 서비스를 다루는 기술 > 23B. AWS 콘솔에서 Elastic Beanstalk Node.js 애플리케이션 배포하기","category":["AWS"],"tag":["crashcourse","pyrasis","aws","amazon-web-services"],"head":[[{"meta":null},{"property":"og:title","content":"아마존 웹 서비스를 다루는 기술 > 23B. AWS 콘솔에서 Elastic Beanstalk Node.js 애플리케이션 배포하기"},{"property":"og:description","content":"23B. AWS 콘솔에서 Elastic Beanstalk Node.js 애플리케이션 배포하기"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/aws/art-of-aws/23B.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/crashcourse/aws/art-of-aws/23B.html"}],["meta",{"property":"og:site_name","content":"🥁Crashcourse"}],["meta",{"property":"og:title","content":"23B. AWS 콘솔에서 Elastic Beanstalk Node.js 애플리케이션 배포하기"}],["meta",{"property":"og:description","content":"아마존 웹 서비스를 다루는 기술 > 23B. AWS 콘솔에서 Elastic Beanstalk Node.js 애플리케이션 배포하기"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter23/17.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-10-03T01:20:13.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter23/17.png"}],["meta",{"name":"twitter:image:alt","content":"23B. AWS 콘솔에서 Elastic Beanstalk Node.js 애플리케이션 배포하기"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"pyrasis"}],["meta",{"property":"article:tag","content":"aws"}],["meta",{"property":"article:tag","content":"amazon-web-services"}],["meta",{"property":"article:published_time","content":"2014-09-30T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-03T01:20:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"23B. AWS 콘솔에서 Elastic Beanstalk Node.js 애플리케이션 배포하기\\",\\"image\\":[\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter23/17.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter23/18_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter23/19_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter23/20_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter23/21_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter23/22_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter23/23_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter23/24_.png\\"],\\"datePublished\\":\\"2014-09-30T00:00:00.000Z\\",\\"dateModified\\":\\"2024-10-03T01:20:13.000Z\\",\\"author\\":[]}"]],"date":"2014-09-30T00:00:00.000Z","isOriginal":false,"cover":"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter23/17.png"},"headers":[],"git":{"createdTime":1712541541000,"updatedTime":1727918413000,"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":3}]},"readingTime":{"minutes":1.04,"words":311},"filePathRelative":"aws/art-of-aws/23B.md","localizedDate":"2014년 9월 30일","excerpt":"\\n"}');export{Y as comp,ss as data};