import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as g,a as s,t as m,b as t,n as c,g as p,d as n,w as r,e as a,r as o,o as h}from"./app-U_bew1in.js";const _={},f={id:"frontmatter-title-관련",tabindex:"-1"},v={class:"header-anchor",href:"#frontmatter-title-관련"},b=s("nav",{class:"table-of-contents"},[s("ul")],-1),S=s("hr",null,null,-1),A=s("p",null,"S3은 정적 웹사이트 호스팅 기능이 있습니다. 정적 웹사이트 호스팅 기능을 사용하는 S3 버킷을 Route 53을 통해 도메인과 연결할 수 있습니다.",-1),y=s("p",null,"Route 53와 연동하기 위해서는 S3 버킷을 두 개를 생성해야 합니다.",-1),k=s("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter17/18_.png",alt:'S3 메인 페이지로 이동하고, 위쪽 <FontIcon icon="iconfont icon-selecgt"/> 버튼을 클릭합니다.',tabindex:"0",loading:"lazy"},null,-1),w=s("code",null,"[Create Bucket]",-1),C=s("p",null,"Route 53와 연동할 첫 번째 S3 버킷을 생성합니다.",-1),T=s("ul",null,[s("li",null,[s("strong",null,"Bucket Name"),n(": Route 53와 연동할 때에는 버킷 이름을 도메인 이름으로 설정해야 합니다여기서 www 서브도메인을 제외한 루트도메인을 입력합니다. 저는 "),s("code",null,"gaas.io"),n("를 사용하겠습니다. 각자 구입한 도메인 이름을 입력합니다.")]),s("li",null,[s("strong",null,"Region"),n(": 리전을 설정합니다. 우리나라에서 가장 가까운 Tokyo 리전을 선택합니다.")])],-1),z=s("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter17/19_.png",alt:'설정이 완료되었으면 <FontIcon icon="iconfont icon-select"/> 버튼을 클릭합니다.',tabindex:"0",loading:"lazy"},null,-1),W=s("code",null,"[Create]",-1),R=s("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter17/20_.png",alt:'S3 버킷 목록에서 방금 생성한 S3 버킷을 선택하고 위쪽의 <FontIcon icon="iconfont icon-select"/> 버튼을 클릭합니다. 그리고 Permissions 탭을 클릭한 뒤 <FontIcon icon="iconfont icon-select"/> 버튼을 클릭합니다.',tabindex:"0",loading:"lazy"},null,-1),O=s("code",null,"[Properties]",-1),q=s("code",null,"[Add bucket policy]",-1),x=a(`<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;Version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2008-10-17&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;Id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Policy1397993518062&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;Statement&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;Sid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Stmt1397993241249&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;Effect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Allow&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;Principal&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;AWS&quot;</span><span class="token operator">:</span> <span class="token string">&quot;*&quot;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;Action&quot;</span><span class="token operator">:</span> <span class="token string">&quot;s3:GetObject&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;Resource&quot;</span><span class="token operator">:</span> <span class="token string">&quot;arn:aws:s3:::gaas.io/*&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">Warning</p><p>버킷 정책의 내용 중에서 Resources의 <code>arn:aws:s3:::gaas.io/*</code>에서 <code>gaas.io</code> 부분은 여러분들이 생성한 버킷 이름(도메인 이름)으로 바꿔주어야 합니다. 책에 있는 그대로 입력하면 안됩니다.</p></div>`,2),I=s("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter17/21_.png",alt:'버킷 정책 JSON 텍스트 입력이 끝났으면 <FontIcon icon="iconfont icon-select"/> 버튼을 클릭합니다.',tabindex:"0",loading:"lazy"},null,-1),N=s("code",null,"[Save]",-1),E=s("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter17/22_.png",alt:'같은 S3 버킷에서 Static Website Hosting 탭을 클릭한 뒤 <FontIcon icon="iconfont icon-select"/>을 선택합니다. 그리고 Index Document 부분에 을 입력하고 <FontIcon icon="iconfont icon-select"/> 버튼을 클릭합니다.',tabindex:"0",loading:"lazy"},null,-1),P=s("code",null,"[Enable website hosting]",-1),F=s("code",null,"index.html",-1),L=s("code",null,"[Save]",-1),M=s("code",null,"index.html",-1),B=s("code",null,"index.html",-1),D=a(`<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Example S3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Hello S3 - Route 53<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),H=s("code",null,"index.html",-1),V=s("figure",null,[s("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter17/23_.png",alt:"S3 버킷 생성",tabindex:"0",loading:"lazy"}),s("figcaption",null,"S3 버킷 생성")],-1),j=s("p",null,"Route 53와 연동할 두 번째 S3 버킷을 생성합니다.",-1),Z=s("ul",null,[s("li",null,[s("strong",null,"Bucket Name"),n(": www 서브 도메인에 연결할 S3 버킷을 생성합니다. 저는 gaas.io를 사용하겠습니다. 각자 구입한 도메인 이름 앞에 www.를 붙여서 입력합니다.")]),s("li",null,[s("strong",null,"Region"),n(": 리전을 설정합니다. 우리나라에서 가장 가까운 Tokyo 리전을 선택합니다.")])],-1),G=s("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter17/24_.png",alt:'설정이 완료되었으면 <FontIcon icon="iconfont icon-select"/> 버튼을 클릭합니다.',tabindex:"0",loading:"lazy"},null,-1),J=s("code",null,"[Create]",-1),K=s("code",null,"[Properties]",-1),U=s("code",null,"[Static Website Hosting]",-1),Y=s("p",null,[n("앞에서 도메인 이름으로 된 S3 버킷을 생성하고, "),s("code",null,"www."),n("가 붙은 S3 버킷을 잘 생성했다면 Redirect all request to에 도메인 이름이 이미 설정되어 있을 것입니다.")],-1),$=s("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter17/25_.png",alt:'설정이 완료되었으면 <FontIcon icon="iconfont icon-select"/> 버튼을 클릭합니다.',tabindex:"0",loading:"lazy"},null,-1),Q=s("code",null,"[Save]",-1),X=a("<p><code>www.</code>가 붙은 S3 버킷으로 접속하는 모든 트래픽은 루트 도메인으로 이동하도록 설정했습니다. 저는 <code>www.gaas.io</code>를 입력하면 <code>gaas.io</code>로 이동하게 설정했습니다. 여러분도 맞게 설정했다면 <code>www.&lt;도메인&gt;</code>으로 입력하면 <code>&lt;도메인&gt;</code>으로 이동하게 됩니다. 따라서 <code>www.</code>가 붙은 S3 버킷에는 데이터를 올리지 않아도 됩니다.</p><p>Route 53 메인 페이지로 이동합니다.</p>",2),ss=s("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter17/26_.png",alt:'도메인을 선택하고 위쪽 <FontIcon icon="iconfont icon-select"/> 버튼을 클릭합니다.',tabindex:"0",loading:"lazy"},null,-1),ns=s("code",null,"[Go to Record Sets]",-1),ts=s("p",null,"도메인의 레코드 목록이 표시됩니다.",-1),es=s("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter17/27_.png",alt:'위쪽 <FontIcon icon="iconfont icon-select"/> 버튼을 클릭합니다.',tabindex:"0",loading:"lazy"},null,-1),as=s("code",null,"[Create Record Set]",-1),os=a('<p>루트 도메인 A 레코드를 생성합니다.</p><ul><li><strong>Name</strong>: 루트 도메인 A 레코드를 생성할 것이므로 아무것도 입력하지 않습니다.</li><li><strong>Type</strong>: 레코드 종류를 설정합니다. 기본값 그대로 A - IPv4 address를 선택합니다.</li><li><strong>Alias</strong>: Yes를 선택하여 IP 주소 대신 AWS 리소스를 설정합니다.</li><li><strong>Alias Target</strong>: AWS 리소스의 주소를 설정합니다. Alias Target 입력 부분을 클릭하면 사용할 수 있는 AWS 리소스(S3, ELB, CloudFront)의 목록이 표시됩니다. S3 Website Endpoint의 <code>&lt;도메인&gt;</code> <code>(s3-website-ap-northeast-1</code>)을 선택합니다.</li><li><strong>Alias Hosted Zone ID</strong>: Alias Target을 선택하면 자동으로 설정됩니다.</li><li><strong>Routing Policy</strong>: 라우팅 정책을 설정합니다. 기본값 그대로 Simple을 선택합니다. <ul><li><strong>Simple</strong>: 아무런 부가 기능 없이 IP 주소만 알려줍니다.</li><li><strong>Weighted</strong>: Weighted Round Robin 기능을 사용합니다.</li><li><strong>Latency</strong>: Latency Based Routing 기능을 사용합니다.</li><li><strong>Failover</strong>: DNS Failover 기능을 사용합니다.</li></ul></li><li><strong>Evaluate Target Health</strong>: 서버 동작 상태 체크(Health Check)를 사용할지 설정합니다. 기본값 그대로 사용합니다.</li></ul><div class="hint-container info"><p class="hint-container-title">Zone Apex 지원</p><p>루트 도메인을 IP 주소가 아닌 S3 Endpoint와 같은 URL로 연결하는 것이 Zone Apex(최상위 도메인, TLD) 지원 기능입니다.</p></div>',3),is=s("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter17/28_.png",alt:'설정이 완료되었으면 <FontIcon icon="iconfont icon-select"/> 버튼을 클릭합니다.',tabindex:"0",loading:"lazy"},null,-1),ls=s("code",null,"[Create]",-1),cs=s("p",null,"도메인의 레코드 목록에 A 레코드가 추가되었습니다.",-1),ps=s("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter17/29_.png",alt:'다시 <FontIcon icon="iconfont icon-select"/> 버튼을 클릭하여  서브도메인에 대한 CNAME 레코드를 생성하겠습니다.',tabindex:"0",loading:"lazy"},null,-1),rs=s("code",null,"[Create Record Set]",-1),us=s("code",null,"www",-1),ds=a("<p>www 서브 도메인에 대한 CNAME 레코드를 생성합니다.</p><ul><li><strong>Name</strong>: www 서브 도메인을 생성할 것이므로 www를 입력합니다.</li><li><strong>Type</strong>: 레코드 종류를 설정합니다. CNAME - Canonical name을 선택합니다. CNAME은 IP 주소 대신 도메인을 연결하는 기능입니다.</li><li><strong>Alias</strong>: A 레코드만 사용할 수 있는 기능이므로 기본값 그대로 No를 선택합니다.</li><li><strong>TTL</strong>: Time To Live의 약자이며 A 레코드가 갱신되는 주기를 설정합니다. 초 단위로 설정합니다. 이후 CNAME 레코드의 도메인을 바꾸면 TTL에 설정한 시간이 지나야 적용됩니다.</li><li><strong>Value</strong>: 연결할 도메인을 입력합니다. <code>www.</code>가 붙은 S3 버킷의 Endpoint를 입력합니다(<code>http://</code> 제외, Endpoint는 <code>www.</code>가 붙은 S3 버킷의 Properties에서 Static Website Hosting 탭에 나와있습니다).</li><li><strong>Routing Policy</strong>: 라우팅 정책을 설정합니다. 기본값 그대로 Simple을 선택합니다. <ul><li><strong>Simple</strong>: 아무런 부가 기능 없이 IP 주소만 알려줍니다.</li><li><strong>Weighted</strong>: Weighted Round Robin 기능을 사용합니다.</li><li><strong>Latency</strong>: Latency Based Routing 기능을 사용합니다.</li><li><strong>Failover</strong>: DNS Failover 기능을 사용합니다.</li></ul></li></ul>",2),gs=s("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter17/30_.png",alt:'설정이 완료되었으면 <FontIcon icon="iconfont icon-select"/> 버튼을 클릭합니다.',tabindex:"0",loading:"lazy"},null,-1),ms=s("code",null,"[Create]",-1),hs=s("figure",null,[s("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter17/31_.png",alt:"도메인의 레코드 목록에 CNAME 레코드가 추가되었습니다.",tabindex:"0",loading:"lazy"}),s("figcaption",null,"도메인의 레코드 목록에 CNAME 레코드가 추가되었습니다.")],-1),_s=s("figure",null,[s("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter17/32_.png",alt:"웹 브라우저에서 A 레코드로 설정한 도메인()과 CNAME으로 생성한 www 서브 도메인()에 접속합니다.",tabindex:"0",loading:"lazy"}),s("figcaption",null,[n("웹 브라우저에서 A 레코드로 설정한 도메인("),s("code",null,"gaas.io"),n(")과 CNAME으로 생성한 www 서브 도메인("),s("code",null,"www.gaas.io"),n(")에 접속합니다.")])],-1),fs=s("p",null,"Route 53을 사용하기 전에 루트 도메인과 www 서브 도메인의 A 레코드 TTL을 길게(예: 4시간) 설정하였다면 앞에서 설정한 내용이 바로 적용되지 않을 수 있습니다. TTL에 설정한 시간이 지난 후에 다시 확인해봅니다.",-1),vs=s("hr",null,null,-1);function bs(u,Ss){const i=o("VPCard"),e=o("FontIcon"),l=o("RouteLink");return h(),g("div",null,[s("h1",f,[s("a",v,[s("span",null,m(u.$frontmatter.title)+" 관련",1)])]),t(i,c(p({title:"목차",desc:"아마존 웹 서비스를 다루는 기술",link:"/aws/art-of-aws/README.md",logo:"https://pyrasis.com/assets/images/pyrasis.png",background:"rgba(31,41,55,0.2)"})),null,16),b,S,t(i,c(p({title:"17장 - 3. Route 53와 S3 연동하기",desc:"아마존 웹 서비스를 다루는 기술",link:"https://pyrasis.com/book/TheArtOfAmazonWebServices/Chapter17/03",logo:"https://pyrasis.com/favicon.ico",background:"rgba(31,41,55,0.2)"})),null,16),A,y,s("figure",null,[k,s("figcaption",null,[n("S3 메인 페이지로 이동하고, 위쪽 "),t(e,{icon:"iconfont icon-selecgt"}),w,n(" 버튼을 클릭합니다.")])]),C,T,s("figure",null,[z,s("figcaption",null,[n("설정이 완료되었으면 "),t(e,{icon:"iconfont icon-select"}),W,n(" 버튼을 클릭합니다.")])]),s("figure",null,[R,s("figcaption",null,[n("S3 버킷 목록에서 방금 생성한 S3 버킷을 선택하고 위쪽의 "),t(e,{icon:"iconfont icon-select"}),O,n(" 버튼을 클릭합니다. 그리고 Permissions 탭을 클릭한 뒤 "),t(e,{icon:"iconfont icon-select"}),q,n(" 버튼을 클릭합니다.")])]),s("p",null,[n("버킷 정책 편집기 화면이 나옵니다. 이곳에 아래 JSON 텍스트를 입력합니다. 인터넷에 버킷의 모든 파일을 공개하는 정책은 AWS Policy Generator에서 생성할 수 있습니다. AWS Policy Generator에 관련된 것은 "),t(l,{to:"/aws/art-of-aws/11C.html"},{default:r(()=>[n("'11.3.2 S3 버킷 권한 관리하기'")]),_:1}),n("를 참조하기 바랍니다.")]),x,s("figure",null,[I,s("figcaption",null,[n("버킷 정책 JSON 텍스트 입력이 끝났으면 "),t(e,{icon:"iconfont icon-select"}),N,n(" 버튼을 클릭합니다.")])]),s("figure",null,[E,s("figcaption",null,[n("같은 S3 버킷에서 Static Website Hosting 탭을 클릭한 뒤 "),t(e,{icon:"iconfont icon-select"}),P,n("을 선택합니다. 그리고 Index Document 부분에 "),F,n("을 입력하고 "),t(e,{icon:"iconfont icon-select"}),L,n(" 버튼을 클릭합니다.")])]),s("p",null,[n("이제 간단한 웹 페이지를 작성합니다. 메모장이나 기타 텍스트 편집기를 열고 아래와 같이 작성한 뒤 "),t(e,{icon:"fa-brands fa-html5"}),M,n("로 저장합니다.")]),s("blockquote",null,[t(e,{icon:"fa-brands fa-html5"}),B]),D,s("p",null,[n("이 "),t(e,{icon:"fa-brands fa-html5"}),H,n("을 방금 생성한 S3 버킷에 올립니다. 파일을 올리는 방법은 "),t(l,{to:"/aws/art-of-aws/11B.html"},{default:r(()=>[n("'11.2 S3 버킷에 파일 올리기/받기'")]),_:1}),n("를 참조하기 바랍니다. 이후 데이터를 올릴 때에는 이 S3 버킷에만 올립니다.")]),V,j,Z,s("figure",null,[G,s("figcaption",null,[n("설정이 완료되었으면 "),t(e,{icon:"iconfont icon-select"}),J,n(" 버튼을 클릭합니다.")])]),s("p",null,[n("S3 버킷 목록에서 www가 붙은 S3 버킷을 선택하고 위쪽의 "),t(e,{icon:"iconfont icon-select"}),K,n(" 버튼을 클릭합니다. 그리고 "),t(e,{icon:"iconfont icon-select"}),U,n(" 탭을 클릭한 뒤 Redirect all request to에 여러분들이 구입한 도메인 이름을 입력합니다(www. 제외).")]),Y,s("figure",null,[$,s("figcaption",null,[n("설정이 완료되었으면 "),t(e,{icon:"iconfont icon-select"}),Q,n(" 버튼을 클릭합니다.")])]),X,s("figure",null,[ss,s("figcaption",null,[n("도메인을 선택하고 위쪽 "),t(e,{icon:"iconfont icon-select"}),ns,n(" 버튼을 클릭합니다.")])]),ts,s("figure",null,[es,s("figcaption",null,[n("위쪽 "),t(e,{icon:"iconfont icon-select"}),as,n(" 버튼을 클릭합니다.")])]),os,s("figure",null,[is,s("figcaption",null,[n("설정이 완료되었으면 "),t(e,{icon:"iconfont icon-select"}),ls,n(" 버튼을 클릭합니다.")])]),cs,s("figure",null,[ps,s("figcaption",null,[n("다시 "),t(e,{icon:"iconfont icon-select"}),rs,n(" 버튼을 클릭하여 "),us,n(" 서브도메인에 대한 CNAME 레코드를 생성하겠습니다.")])]),ds,s("figure",null,[gs,s("figcaption",null,[n("설정이 완료되었으면 "),t(e,{icon:"iconfont icon-select"}),ms,n(" 버튼을 클릭합니다.")])]),hs,_s,fs,vs])}const ks=d(_,[["render",bs],["__file","17C.html.vue"]]),ws=JSON.parse('{"path":"/aws/art-of-aws/17C.html","title":"17C. Route 53와 S3 연동하기","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"17C. Route 53와 S3 연동하기","description":"아마존 웹 서비스를 다루는 기술 > 17C. Route 53와 S3 연동하기","category":["AWS"],"tag":["crashcourse","pyrasis","aws","amazon-web-services"],"head":[[{"meta":null},{"property":"og:title","content":"아마존 웹 서비스를 다루는 기술 > 17C. Route 53와 S3 연동하기"},{"property":"og:description","content":"17C. Route 53와 S3 연동하기"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/aws/art-of-aws/17C.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/crashcourse/aws/art-of-aws/17C.html"}],["meta",{"property":"og:site_name","content":"🥁Crashcourse"}],["meta",{"property":"og:title","content":"17C. Route 53와 S3 연동하기"}],["meta",{"property":"og:description","content":"아마존 웹 서비스를 다루는 기술 > 17C. Route 53와 S3 연동하기"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter17/18_.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-10-03T01:20:13.000Z"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"pyrasis"}],["meta",{"property":"article:tag","content":"aws"}],["meta",{"property":"article:tag","content":"amazon-web-services"}],["meta",{"property":"article:modified_time","content":"2024-10-03T01:20:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"17C. Route 53와 S3 연동하기\\",\\"image\\":[\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter17/18_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter17/19_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter17/20_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter17/21_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter17/22_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter17/23_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter17/24_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter17/25_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter17/26_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter17/27_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter17/28_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter17/29_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter17/30_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter17/31_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter17/32_.png\\"],\\"dateModified\\":\\"2024-10-03T01:20:13.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1712541541000,"updatedTime":1727918413000,"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":3}]},"readingTime":{"minutes":2.05,"words":616},"filePathRelative":"aws/art-of-aws/17C.md","localizedDate":"2024년 4월 8일","excerpt":"\\n"}');export{ks as comp,ws as data};