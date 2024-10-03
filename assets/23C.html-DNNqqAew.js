import{_ as g}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as k,a as s,t as v,b as a,n as d,g as u,d as n,w as i,e as t,r as l,o as b}from"./app-U_bew1in.js";const f={},_={id:"frontmatter-title-관련",tabindex:"-1"},y={class:"header-anchor",href:"#frontmatter-title-관련"},X=s("nav",{class:"table-of-contents"},[s("ul")],-1),w=s("hr",null,null,-1),A=s("p",null,"분산형 버전 관리 시스템인 Git으로 Elastic Beanstalk Node.js 애플리케이션을 Elastic Beanstalk 환경에 배포해보겠습니다.",-1),x=s("figure",null,[s("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter23/25.png",alt:"Git을 이용한 Elastic Beanstalk 작업 흐름",tabindex:"0",loading:"lazy"}),s("figcaption",null,"Git을 이용한 Elastic Beanstalk 작업 흐름")],-1),j={href:"http://git-scm.com",target:"_blank",rel:"noopener noreferrer"},S=s("ul",null,[s("li",null,[n("Windows: "),s("a",{href:"http://msysgit.github.com",target:"_blank",rel:"nofollow"},"http://msysgit.github.com")]),s("li",null,[n("Mac OS X: "),s("a",{href:"http://sourceforge.net/projects/git-osx-installer",target:"_blank",rel:"nofollow"},"http://sourceforge.net/projects/git-osx-installer")])],-1),B=s("div",{class:"language-bash line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{class:"token function"},"sudo"),n(" yum "),s("span",{class:"token function"},"install"),n(),s("span",{class:"token function"},"git")]),n(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"})])],-1),E=s("div",{class:"language-bash line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"apt-get"),n(),s("span",{class:"token function"},"install"),n(),s("span",{class:"token function"},"git")]),n(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"})])],-1),C=s("a",{href:"https://aws.amazon.com/code/6752709412171743",target:"_blank",rel:"noopener noreferrer"},"https://aws.amazon.com/code/6752709412171743",-1),W=s("code",null,"AWS-ElasticBeanstalk-CLI-2.6.3.zip",-1),z=s("code",null,"AWS-ElasticBeanstalk-CLI-2.6.3.zip",-1),T=s("code",null,"/home/pyrasis",-1),G=t(`<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">wget</span> https://s3.amazonaws.com/elasticbeanstalk/cli/AWS-ElasticBeanstalk-CLI-2.6.3.zip</span>
<span class="line"><span class="token function">unzip</span> AWS-ElasticBeanstalk-CLI-2.6.3.zip</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">unzip 설치</p><p>unzip 명령이 없다면 패키지를 이용하여 설치합니다.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># CentOS</span></span>
<span class="line"><span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token function">unzip</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># Ubuntu</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">unzip</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></div>`,2),O={href:"www.python.org/downloads"},q=t(`<div class="hint-container info"><p class="hint-container-title">Linux에서 Elastic Beanstalk 명령행 도구와 Python 버전</p><p>Elastic Beanstalk 명령행 도구를 사용하려면 Python 2.7 버전 이상 필요합니다. 일부 CentOS와 Amazon Linux는 Python 2.6 버전이 설치되어 있습니다. Elastic Beanstalk 명령행 도구는 2.6 버전에서는 사용할 수 없으로 2.7 버전을 설치합니다(이 책에서는 2.7 버전을 기준으로 설명하겠습니다. 3.0 버전 이상을 사용해도 됩니다).</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">wget</span> https://www.python.org/ftp/python/2.7.6/Python-2.7.6.tgz</span>
<span class="line"><span class="token function">tar</span> vxzf Python-2.7.6.tgz</span>
<span class="line"><span class="token builtin class-name">cd</span> Python-2.7.6</span>
<span class="line">./configure</span>
<span class="line"><span class="token function">sudo</span> <span class="token function">make</span><span class="token punctuation">;</span> <span class="token function">sudo</span> <span class="token function">make</span> <span class="token function">install</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><p>이제 Windows에서는 Git Bash를 실행합니다 (Git Bash에서는 Unix/Linux 방식의 명령을 실행할 수 있으므로 지금부터 나오는 명령은 Mac OS X, Linux, Windows에서 모두 동일합니다). Mac OS X는 터미널을 실행하고, Linux에서는 터미널에서 그대로 진행합니다.</p><figure><img src="https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter23/26_.png" alt="Windows에서 Git Bash 실행" tabindex="0" loading="lazy"><figcaption>Windows에서 Git Bash 실행</figcaption></figure>`,3),L={href:"https://github.com/boto/boto",target:"_blank",rel:"noopener noreferrer"},P=s("code",null,"boto/boto",-1),N=t(`<ul><li>Windows Git Bash에서는 <code>sudo</code>를 제외하고 <code>python setup.py install</code>만 입력합니다.</li><li>CentOS, Amazon Linux에서 Python 2.7 소스를 컴파일하여 설치했다면 <code>sudo python2.7 setup.py install</code>을 입력합니다.</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">git</span> clone https://github.com/boto/boto.git</span>
<span class="line"><span class="token builtin class-name">cd</span> boto</span>
<span class="line"><span class="token function">sudo</span> python setup.py <span class="token function">install</span></span>
<span class="line"><span class="token builtin class-name">cd</span> <span class="token punctuation">..</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>애플리케이션 디렉터리를 생성하고, Git 저장소를 초기화합니다.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">mkdir</span> exampleapp</span>
<span class="line"><span class="token builtin class-name">cd</span> exampleapp</span>
<span class="line"><span class="token function">git</span> init</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),R=s("code",null,"aws.push",-1),I=s("code",null,"AWSDevTools-RepositorySetup.sh",-1),M=t(`<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token punctuation">..</span>/AWS-ElasticBeanstalk-CLI-2.6.2/AWSDevTools/Linux/AWSDevTools-RepositorySetup.sh</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,1),D=s("li",null,[s("strong",null,"AWS Access Key"),n(": 액세스 키를 입력합니다.")],-1),F=s("li",null,[s("strong",null,"AWS Secret Key"),n(": 시크릿 키를 입력합니다.")],-1),K=s("strong",null,"AWS Region",-1),U=s("li",null,[s("strong",null,"AWS Elastic Beanstalk Application"),n(": Elastic Beanstalk 애플리케이션 이름을 입력합니다. 앞에서 만든 exampleapp를 입력합니다.")],-1),V=s("li",null,[s("strong",null,"AWS Elastic Beanstalk Environment"),n(": Elastic Beanstalk 환경 이름을 입력합니다. 앞에서 만든 exampleapp-env를 입력합니다.")],-1),Z=t(`<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">git</span> aws.config</span>
<span class="line"><span class="token comment"># </span></span>
<span class="line"><span class="token comment"># AWS Access Key: XXXXXXXXXXXXXXXXXXXXXXXXXXXX</span></span>
<span class="line"><span class="token comment"># AWS Secret Key: XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</span></span>
<span class="line"><span class="token comment"># AWS Region [default to us-east-1]: ap-northeast-1</span></span>
<span class="line"><span class="token comment"># AWS Elastic Beanstalk Application: exampleapp</span></span>
<span class="line"><span class="token comment"># AWS Elastic Beanstalk Environment: exampleapp-env</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),H=s("code",null,"app.js",-1),J=s("code",null,"app.js",-1),$=t(`<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">var</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">,</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">,</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/index.html&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;Hello Elastic Beanstalk - Git&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">PORT</span> <span class="token operator">||</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),Q=s("code",null,"package.json",-1),Y=s("code",null,"package.json",-1),ss=t(`<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Hello Elastic Beanstalk&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.0.1&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;express&quot;</span><span class="token operator">:</span> <span class="token string">&quot;4.4.x&quot;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),ns=s("code",null,"app.js",-1),as=s("code",null,"package.json",-1),es=t(`<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">git</span> <span class="token function">add</span> app.js</span>
<span class="line"><span class="token function">git</span> <span class="token function">add</span> package.json</span>
<span class="line"><span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;Hello Elastic Beanstalk&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 Elastic Beanstalk에 애플리케이션의 소스를 <code>aws.push</code> 명령으로 올립니다.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">git</span> aws.push</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Elastic Beanstalk 환경 페이지로 이동합니다.</p><p><img src="https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter23/27_.png" alt="잠시 기다리면 Health가 Updating에서 Green으로 바뀌고, Elastic Beanstalk 애플리케이션 배포가 완료됩니다. 그리고 Running Version에는 으로 표시됩니다. 이제 위쪽  링크를 클릭합니다." loading="lazy">완료</p>`,5),ts=s("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter23/28_.png",alt:'웹 브라우저에서 Elastic Beanstalk URL에 접속하면 <FontIcon icon="fa-brands fa-js"/>의 내용이 표시됩니다.',tabindex:"0",loading:"lazy"},null,-1),is=s("code",null,"app.js",-1),ls=s("p",null,"이처럼 Git으로 Elastic Beanstalk 애플리케이션을 배포할 수 있습니다.",-1),os=s("hr",null,null,-1);function cs(m,ps){const p=l("VPCard"),e=l("FontIcon"),h=l("CodeTabs"),r=l("RouteLink");return b(),k("div",null,[s("h1",_,[s("a",y,[s("span",null,v(m.$frontmatter.title)+" 관련",1)])]),a(p,d(u({title:"목차",desc:"아마존 웹 서비스를 다루는 기술",link:"/aws/art-of-aws/README.md",logo:"https://pyrasis.com/assets/images/pyrasis.png",background:"rgba(31,41,55,0.2)"})),null,16),X,w,a(p,d(u({title:"23장 - 3. Git으로 Elastic Beanstalk Node.js 애플리케이션 배포하기",desc:"아마존 웹 서비스를 다루는 기술",link:"https://pyrasis.com/book/TheArtOfAmazonWebServices/Chapter23/03",logo:"https://pyrasis.com/favicon.ico",background:"rgba(31,41,55,0.2)"})),null,16),A,x,s("p",null,[n("Git을 설치하지 않았다면 "),s("a",j,[a(e,{icon:"iconfont icon-git"}),n("Git")]),n("을 설치합니다. "),a(e,{icon:"fa-brands fa-windows"}),n("Windows와 "),a(e,{icon:"iconfont icon-macos"}),n("Mac OS X에서는 아래 주소에서 설치 파일을 다운로드하여 설치하면 됩니다. 설치 방법은 특별한 것이 없으므로 따로 설명하지 않겠습니다.")]),S,a(h,{id:"30",data:[{id:'<FontIcon icon="fa-brands fa-aws"/>Amazon Linux, <FontIcon icon="fa-brands fa-centos"/>CentOS'},{id:'<FontIcon icon="fa-brands fa-ubuntu"/>Ubuntu Linux'}],active:0,"tab-id":"sh"},{title0:i(({value:o,isActive:c})=>[a(e,{icon:"fa-brands fa-aws"}),n("Amazon Linux, "),a(e,{icon:"fa-brands fa-centos"}),n("CentOS")]),title1:i(({value:o,isActive:c})=>[a(e,{icon:"fa-brands fa-ubuntu"}),n("Ubuntu Linux")]),tab0:i(({value:o,isActive:c})=>[B]),tab1:i(({value:o,isActive:c})=>[E]),_:1}),s("p",null,[n("이제 Elastic Beanstalk 명령행 도구가 필요합니다. 구글에서 AWS Elastic Beanstalk Command Line Tool을 검색하거나 "),C,n("에 접속하여 Download 버튼을 클릭하면 "),a(e,{icon:"fas fa-file-zipper"}),W,n(" 다운로드할 수 있습니다(이 책에서 설명한 버전보다 높을 수 있습니다).")]),s("p",null,[n("."),a(e,{icon:"fas fa-file-zipper"}),z,n(" 파일을 사용자 홈 디렉터리(예: "),a(e,{icon:"fas fa-folder-open"}),T,n(")에 받고 압축을 해제합니다(Windows와 Mac OS X에서는 탐색기와 Finder에서 zip 파일 압축을 해제합니다).")]),G,s("p",null,[n("Elastic Beanstalk 명령행 도구를 실행하려면 Python이 필요합니다. Windows에는 Python이 기본적으로 설치되어 있지 않으므로 "),s("a",O,[a(e,{icon:"fas fa-globe"}),n("http://www.python.org/downloads")]),n("에서 "),a(e,{icon:"fa-brands fa-python"}),n("Python 2.7.x 버전을 받고 설치합니다. 설치 방법은 특별한 것이 없으므로 따로 설명하지 않겠습니다. Linux와 Mac OS X에는 Python이 기본적으로 설치되어 있습니다.")]),q,s("p",null,[n("Elastic Beanstalk 명령행 도구를 실행하려면 "),s("a",L,[a(e,{icon:"iconfont icon-github"}),P]),n("가 필요합니다. 다음과 같이 입력하여 boto를 설치합니다.")]),N,s("p",null,[n("방금 생성한 Git 저장소에 "),R,n(" 명령을 설치합니다. "),a(e,{icon:"iconfont icon-shell"}),I,n("는 Windows의 Git Bash에서 그대로 설치할 수 있습니다.")]),M,s("p",null,[n("Git에 AWS 액세스 키와 시크릿 키를 설정합니다. 액세스 키와 시크릿 키가 없다면 "),a(r,{to:"/aws/art-of-aws/09.html"},{default:i(()=>[n("'9장 API와 툴 사용을 위한 액세스 키 생성하기'")]),_:1}),n("를 참조하기 바랍니다.")]),s("ul",null,[D,F,s("li",null,[K,n(": Tokyo 리전인 ap-northeast-1을 입력합니다. 리전 약칭 목록은 "),a(r,{to:"/aws/art-of-aws/02A.html"},{default:i(()=>[n("'2.1 리전, 지역'")]),_:1}),n("을 참조하기 바랍니다.")]),U,V]),Z,s("p",null,[n("이제 간단한 웹 페이지를 작성할 차례입니다. 메모장이나 기타 텍스트 편집기를 열고 아래와 같이 작성한 뒤 "),a(e,{icon:"fa-brands fa-js"}),H,n("로 저장합니다.")]),s("blockquote",null,[a(e,{icon:"fa-brands fa-js"}),J]),$,s("p",null,[n("Node.js npm 패키지 사용을 위해 아래와 같이 작성한 뒤 "),a(e,{icon:"iconfont icon-json"}),Q,n("로 저장합니다.")]),s("blockquote",null,[a(e,{icon:"iconfont icon-json"}),Y]),ss,s("p",null,[n("Git 저장소에 "),a(e,{icon:"fa-brands fa-js"}),ns,n(", "),a(e,{icon:"iconfont icon-json"}),as,n(" 파일을 커밋합니다.")]),es,s("figure",null,[ts,s("figcaption",null,[n("웹 브라우저에서 Elastic Beanstalk URL에 접속하면 "),a(e,{icon:"fa-brands fa-js"}),is,n("의 내용이 표시됩니다.")])]),ls,os])}const us=g(f,[["render",cs],["__file","23C.html.vue"]]),ms=JSON.parse('{"path":"/aws/art-of-aws/23C.html","title":"23C. Git으로 Elastic Beanstalk Node.js 애플리케이션 배포하기","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"23C. Git으로 Elastic Beanstalk Node.js 애플리케이션 배포하기","description":"아마존 웹 서비스를 다루는 기술 > 23C. Git으로 Elastic Beanstalk Node.js 애플리케이션 배포하기","category":["AWS"],"tag":["crashcourse","pyrasis","aws","amazon-web-services"],"head":[[{"meta":null},{"property":"og:title","content":"아마존 웹 서비스를 다루는 기술 > 23C. Git으로 Elastic Beanstalk Node.js 애플리케이션 배포하기"},{"property":"og:description","content":"23C. Git으로 Elastic Beanstalk Node.js 애플리케이션 배포하기"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/aws/art-of-aws/23C.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/crashcourse/aws/art-of-aws/23C.html"}],["meta",{"property":"og:site_name","content":"🥁Crashcourse"}],["meta",{"property":"og:title","content":"23C. Git으로 Elastic Beanstalk Node.js 애플리케이션 배포하기"}],["meta",{"property":"og:description","content":"아마존 웹 서비스를 다루는 기술 > 23C. Git으로 Elastic Beanstalk Node.js 애플리케이션 배포하기"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter23/25.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-10-03T01:20:13.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter23/25.png"}],["meta",{"name":"twitter:image:alt","content":"23C. Git으로 Elastic Beanstalk Node.js 애플리케이션 배포하기"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"pyrasis"}],["meta",{"property":"article:tag","content":"aws"}],["meta",{"property":"article:tag","content":"amazon-web-services"}],["meta",{"property":"article:published_time","content":"2014-09-30T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-03T01:20:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"23C. Git으로 Elastic Beanstalk Node.js 애플리케이션 배포하기\\",\\"image\\":[\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter23/25.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter23/26_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter23/27_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter23/28_.png\\"],\\"datePublished\\":\\"2014-09-30T00:00:00.000Z\\",\\"dateModified\\":\\"2024-10-03T01:20:13.000Z\\",\\"author\\":[]}"]],"date":"2014-09-30T00:00:00.000Z","isOriginal":false,"cover":"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter23/25.png"},"headers":[],"git":{"createdTime":1712541541000,"updatedTime":1727918413000,"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":4}]},"readingTime":{"minutes":2.32,"words":696},"filePathRelative":"aws/art-of-aws/23C.md","localizedDate":"2014년 9월 30일","excerpt":"\\n"}');export{us as comp,ms as data};