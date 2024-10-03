import{_ as h}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as m,a as n,t as g,b as a,n as t,g as l,w as i,d as s,e as c,r as p,o as _}from"./app-U_bew1in.js";const f={},v={id:"frontmatter-title-관련",tabindex:"-1"},b={class:"header-anchor",href:"#frontmatter-title-관련"},k={class:"table-of-contents"},q=n("hr",null,null,-1),y=n("p",null,"지금까지 AWS 콘솔을 이용해서 CloudSearch를 사용해보았습니다. 이번에는 검색 도메인의 엔드포인트 주소를 이용하여 문서를 올리고 검색을 해보겠습니다.",-1),S=n("hr",null,null,-1),A=n("h2",{id:"cloudsearch-인덱스-구조를-설계하고-검색-도메인-생성하기",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#cloudsearch-인덱스-구조를-설계하고-검색-도메인-생성하기"},[n("span",null,"CloudSearch 인덱스 구조를 설계하고 검색 도메인 생성하기")])],-1),C=n("code",null,"data.json",-1),z=n("code",null,"data.json",-1),T=c(`<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;add&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;lang&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ko&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;fields&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;홍길동&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;서울시 종로구&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;phone&quot;</span><span class="token operator">:</span> <span class="token string">&quot;010-1234-5678&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;rank&quot;</span><span class="token operator">:</span> <span class="token string">&quot;대리&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token number">27</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;add&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;lang&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ko&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;fields&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;이율곡&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;서울시 성북구&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;phone&quot;</span><span class="token operator">:</span> <span class="token string">&quot;010-4567-8901&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;rank&quot;</span><span class="token operator">:</span> <span class="token string">&quot;과장&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token number">35</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이와 같은 형식을 SDF<sup>Search</sup> <sup>Data</sup> <sup>Format</sup>이라고 합니다.</p><ul><li><code>type</code>: 문서를 추가할 때에는 add, 삭제할 때에는 delete입니다. 문서의 내용을 수정하려면 type은 add로 설정하고 수정할 문서의 id를 지정합니다. 그리고 version 숫자를 높이면 됩니다.</li><li><code>id</code>: 각 데이터의 고윳값입니다. 다른 데이터와 중복될 수 없고, 내용을 수정하거나 삭제할 때 사용됩니다. 영문 소문자 a 부터 z까지, 숫자 0부터 9까지, _(밑줄) 문자를 사용할 수 있으며 24자리까지입니다.</li><li><code>version</code>: 문서의 버전입니다. 문서의 내용을 수정할 때 사용됩니다.</li><li><code>lang</code>: 문서의 언어입니다. 영어는 en, 한국어는 ko를 사용합니다.</li><li><code>fields</code>: 필드 목록입니다. 필드가 하나 이상 포함되어야 합니다. <ul><li><strong>필드명</strong>: 64글자까지이며 영문 소문자, _(밑줄) 문자, 숫자를 사용할 수 있습니다. 필드명은 밑줄 문자로 시작할 수 없습니다.</li><li><strong>필드</strong> 자료형 <ul><li><strong>문자열</strong>: &quot;hello&quot;로 표현합니다.</li><li><strong>숫자</strong>: 1 또는 0.1로 표현합니다.</li><li><strong>배열</strong>: [1, 2, 3,] 또는 [&quot;hello&quot;, &quot;world&quot;]로 표현합니다.</li></ul></li></ul></li></ul><p>이 데이터를 기반으로 검색 도메인을 생성하겠습니다.</p>`,4),w=n("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter25/28_.png",alt:'<FontIcon icon="iconfont icon-select"/>를 클릭한 뒤 <FontIcon icon="iconfont icon-select"/> 버튼을 클릭합니다.',tabindex:"0",loading:"lazy"},null,-1),x=n("code",null,"[CloudSearch Dashboard]",-1),W=n("code",null,"[Create a New Domain]",-1),O=n("p",null,"CloudSearch 검색 도메인을 생성합니다.",-1),j=n("ul",null,[n("li",null,[n("strong",null,"Search Domain Name"),s(": 검색 도메인 이름입니다. .(점)은 입력할 수 없습니다. exampledomain2를 입력합니다.")]),n("li",null,[n("strong",null,"Desired Instance Type"),s(": 검색 도메인이 생성할 검색 인스턴스 유형입니다. 설정하지 않으면 search.m1.small을 사용합니다. 기본값 그대로 사용합니다.")]),n("li",null,[n("strong",null,"Desired Replication Count"),s(": 검색 도메인의 복제 개수입니다. 데이터 저장 용량과는 상관 없고, 검색 트래픽이 많을 때 설정합니다. 5개까지 설정할 수 있습니다. 기본값 그대로 사용합니다.")]),n("li",null,[n("strong",null,"Desired Partition Count"),s(": 생성할 검색 파티션 개수입니다. 검색 인스턴스 search.m2.2xlarge에서만 설정할 수 있고, 10개까지 생성할 수 있습니다.")])],-1),D=n("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter25/29_.png",alt:'설정이 완료되었으면 <FontIcon icon="iconfont icon-select"/> 버튼을 클릭합니다.',tabindex:"0",loading:"lazy"},null,-1),E=n("code",null,"[Continue]",-1),I=n("code",null,"data.json",-1),F=n("code",null,"Analyze sample file(s) from my local machine",-1),R=c('<ul><li><strong>Analyze sample file(s) from my local machine</strong>: 사용자의 컴퓨터에 저장된 데이터를 분석하여 인덱스를 생성합니다.</li><li><strong>Analyze sample object(s) from Amazon S3</strong>: S3 버킷에 저장된 데이터를 분석하여 인덱스를 생성합니다.</li><li><strong>Analyze sample item(s) from Amazon DynamoDB</strong>: DynamoDB에 저장된 데이터를 분석하여 인덱스를 생성합니다.</li><li><strong>Use a predefined configuration</strong>: 미리 정의된 설정을 사용합니다.</li><li><strong>Manual configuration</strong>: 다음 페이지에서 사용자가 인덱스를 직접 정의합니다.</li></ul><figure><img src="https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter25/30_.png" alt="CloudSearch 검색 도메인의 인덱스를 정의할 데이터 선택" tabindex="0" loading="lazy"><figcaption>CloudSearch 검색 도메인의 인덱스를 정의할 데이터 선택</figcaption></figure>',2),P=n("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter25/31_.png",alt:'파일 열기 창에서 방금 작성했던 <FontIcon icon="iconfont icon-json"/> 파일을 선택하고 <FontIcon icon="iconfont icon-select"/> 버튼을 클릭합니다.',tabindex:"0",loading:"lazy"},null,-1),L=n("code",null,"data.json",-1),U=n("code",null,"[열기]",-1),N=n("code",null,"[Continue]",-1),B=n("code",null,"data.json",-1),G=n("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter25/32_.png",alt:'설정이 완료되었으면 <FontIcon icon="iconfont icon-select"/> 버튼을 클릭합니다.',tabindex:"0",loading:"lazy"},null,-1),K=n("code",null,"[Continue]",-1),V=n("p",null,"CloudSearch 검색 도메인의 접근 정책을 설정합니다. 데이터 업로드용 엔드포인트 주소와 검색용 엔드포인트 주소에 대한 정책입니다. Search and Suggester service: Allow all. Document Service: Account owner only를 클릭합니다.",-1),H=n("ul",null,[n("li",null,[n("strong",null,"Search and Suggester service"),s(": Allow all, Document Service: Account owner only: 검색은 모두 허용하고, CloudSearch를 생성한 AWS 계정만 데이터를 업로드 할 수 있습니다.")]),n("li",null,[n("strong",null,"Allow everyone access to all services"),s(": 검색, 데이터 업로드를 모두 허용합니다. 아무나 데이터를 올릴 수 있으므로 권장하지 않습니다.")]),n("li",null,[n("strong",null,"Deny everyone access to all services"),s(": 검색, 데이터 업로드를 모두 차단합니다. AWS 콘솔에서만 데이터를 올리고 검색할 수 있습니다.")])],-1),M=n("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter25/33_.png",alt:'설정이 완료되었으면 <FontIcon icon="iconfont icon-select"/> 버튼을 클릭합니다.',tabindex:"0",loading:"lazy"},null,-1),X=n("code",null,"[Continue]",-1),Y=n("p",null,"지금까지 설정한 내용에 이상이 없는지 확인합니다.",-1),Z=n("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter25/34_.png",alt:'이상이 없으면 <FontIcon icon="iconfont icon-select"/> 버튼을 클릭합니다',tabindex:"0",loading:"lazy"},null,-1),J=n("code",null,"[Confirm]",-1),Q=n("p",null,"CloudSearch 검색 도메인 생성이 시작되었습니다.",-1),$=n("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter25/35_.png",alt:'<FontIcon icon="iconfont icon-select"/> 버튼을 클릭합니다.',tabindex:"0",loading:"lazy"},null,-1),nn=n("code",null,"[OK]",-1),sn=n("p",null,[s("CloudSearch 검색 도메인 목록에 방금 생성한 검색 도메인("),n("code",null,"exampledomain2"),s(")이 추가되었습니다.")],-1),an=n("figure",null,[n("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter25/36_.png",alt:"완전히 생성되기까지 약 10분정도 소요됩니다.",tabindex:"0",loading:"lazy"}),n("figcaption",null,"완전히 생성되기까지 약 10분정도 소요됩니다.")],-1),en=n("p",null,"CloudSearch 검색 도메인 생성이 완료되었습니다.",-1),on=n("figure",null,[n("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter25/37_.png",alt:"검색 도메인()의 세부 내용에 검색 엔드포인트 주소, 문서 엔드포인트 주소가 표시됩니다.",tabindex:"0",loading:"lazy"}),n("figcaption",null,[s("검색 도메인("),n("code",null,"exampledoamin2"),s(")의 세부 내용에 검색 엔드포인트 주소, 문서 엔드포인트 주소가 표시됩니다.")])],-1),tn=n("code",null,"[Refresh]",-1),ln=n("hr",null,null,-1),cn=n("h2",{id:"cloudsearch-검색-도메인-엔드포인트로-데이터-올리기",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#cloudsearch-검색-도메인-엔드포인트로-데이터-올리기"},[n("span",null,"CloudSearch 검색 도메인 엔드포인트로 데이터 올리기")])],-1),pn=n("code",null,"data.json",-1),rn=n("li",null,[n("code",null,"cloudsearchdomain"),s(": CloudSearch 검색 도메인용 명령입니다.")],-1),un=n("li",null,[n("code",null,"--endpoint-url"),s(": 여려분들이 생성한 검색 도메인의 엔드포인트 주소를 입력합니다. "),n("code",null,"doc-<검색 도메인 이름>-<검색 도메인 ID>-ap-northeast-1.cloudsearch.amazonaws.com"),s(" 형식입니다.")],-1),dn=n("li",null,[n("code",null,"upload-documents"),s(": 문서를 올리는 명령입니다.")],-1),hn=n("li",null,[n("code",null,"--content-type"),s(": HTTP 헤더를 설정합니다. JSON 형태의 파일이므로 application/json으로 설정합니다.")],-1),mn=n("code",null,"--documents",-1),gn=n("code",null,"data.json",-1),_n=c('<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">aws cloudsearchdomain --endpoint-url http://doc-exampledomain2-7fq636cmiddehdtdfpa3d3s454.ap-northeast-1.cloudsearch.amazonaws.com<span class="token punctuation">\\</span></span>\n<span class="line">upload-documents --content-type <span class="token string">&quot;application/json&quot;</span> <span class="token parameter variable">--documents</span> <span class="token operator">&lt;</span>FontIcon <span class="token assign-left variable">icon</span><span class="token operator">=</span><span class="token string">&quot;iconfont icon-json&quot;</span>/<span class="token operator">&gt;</span><span class="token variable"><span class="token variable">`</span>data.json<span class="token variable">`</span></span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>',1),fn=n("code",null,"exampledomain2",-1),vn=n("code",null,"[Refresh]",-1),bn=n("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter25/38_.png",alt:'잠시 기다리면 Searchable Documents가 2로 표시됩니다. <FontIcon icon="iconfont icon-json"/>에 포함된 문서 2개가 정상적으로 올라갔습니다.',tabindex:"0",loading:"lazy"},null,-1),kn=n("code",null,"data.json",-1),qn=n("code",null,"exampledomain2",-1),yn=n("code",null,"[Run a Test Search]",-1),Sn=n("code",null,"홍길동",-1),An=n("code",null,"[Go]",-1),Cn=n("figure",null,[n("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter25/39_.png",alt:"이제 홍길동의 문서가 검색됩니다.",tabindex:"0",loading:"lazy"}),n("figcaption",null,"이제 홍길동의 문서가 검색됩니다.")],-1),zn=n("p",null,"자세한 내용은 다음 링크를 참조하기 바랍니다.",-1),Tn=n("hr",null,null,-1),wn=n("h2",{id:"cloudsearch-검색-도메인-엔드포인트-주소로-검색하기",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#cloudsearch-검색-도메인-엔드포인트-주소로-검색하기"},[n("span",null,"CloudSearch 검색 도메인 엔드포인트 주소로 검색하기")])],-1),xn=n("code",null,"cURL",-1),Wn=n("p",null,":: tabs",-1),On=c(`<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token function">curl</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,1),jn=c(`<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">curl</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,1),Dn=n("p",null,[s("Windows용은 "),n("a",{href:"http://curl.haxx.se/download.html",target:"_blank",rel:"noopener noreferrer"},"http://curl.haxx.se/download.html"),s("에서 받을 수 있습니다.")],-1),En=n("p",null,":::",-1),In=n("code",null,"curl.exe",-1),Fn=n("ul",null,[n("li",null,[n("code",null,"-X GET"),s(": HTTP GET 메서드를 사용합니다.")]),n("li",null,[n("code",null,"search-<검색 도메인 이름>-<검색 도메인 ID>-ap-northeast-1.cloudsearch.amazonaws.com/2013-01-01/search"),s(": 검색용 엔드포인트 주소입니다. 여러분들이 생성한 검색 도메인의 엔드포인트 주소를 입력합니다. 맨 마지막에 /2013-01-01/search에서 2013-01-01은 엔드포인트 API의 버전입니다. 다른 날짜로 바꾸면 동작이 되지 않으니 주의하기 바랍니다.")]),n("li",null,[n("code",null,"?q=010-1234-5678"),s(": 검색어입니다. 여기서는 핸드폰 번호가 010-1234-5678인 것을 검색했습니다. 검색 방법에 대한 자세한 내용은 아래 링크를 참조하기 바랍니다."),n("br")])],-1),Rn=c(`<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">curl</span> <span class="token parameter variable">-X</span> GET search-exampledomain2-7fq636cmiddehdtdfpa3d3s454.ap-northeast-1.cloudsearch.amazonaws.com/2013-01-01/search?q<span class="token operator">=</span>010-1234-5678</span>
<span class="line"><span class="token comment">#</span></span>
<span class="line"><span class="token comment"># {&quot;status&quot;:{&quot;rid&quot;:&quot;scjNw+QoCwqYmgY=&quot;,&quot;time-ms&quot;:11},&quot;hits&quot;:{&quot;found&quot;:1,&quot;start&quot;:0,&quot;hit&quot;:[{&quot;id&quot;:&quot;1&quot;,&quot;fields&quot;:{&quot;name&quot;:&quot;홍길동&quot;,&quot;age&quot;:&quot;27&quot;,&quot;rank&quot;:&quot;대리&quot;,&quot;phone&quot;:&quot;010-1234-5678&quot;,&quot;address&quot;:&quot;서울시 종로구&quot;}}]}}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">터미널, 명령 프롬프트에서 UTF-8 한글 입력</p><p>Linux의 터미널, Windows의 명령 프롬프트에서 UTF-8로 인코딩된 한글을 입력하는 것은 상당히 까다롭습니다. 그래서 숫자로 된 핸드폰 번호로 검색했습니다. 실제로 검색용 엔드포인트 주소를 사용할 때는 프로그래밍 언어를 통해서 사용하게 됩니다.</p><p>한글을 검색할 때는 꼭 UTF-8로 인코딩해야 합니다. 특히 검색처럼 엔드포인트 URL에 GET 메서드를 이용할 경우 UTF-8에 URL 인코딩(URL Encode)을 해주어야 합니다.</p></div><p>HTTP GET 메서드는 우리가 인터넷을 할 때 흔히 사용하는 HTTP 메서드입니다. 따라서 웹 브라우저에서 엔드포인트 주소로 검색을 할 수 있습니다.</p><figure><img src="https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter25/40_.png" alt="이 때는 한글을 그대로 사용할 수 있습니다." tabindex="0" loading="lazy"><figcaption>이 때는 한글을 그대로 사용할 수 있습니다.</figcaption></figure><hr>`,5);function Pn(u,Ln){const o=p("VPCard"),r=p("router-link"),e=p("FontIcon"),d=p("RouteLink");return _(),m("div",null,[n("h1",v,[n("a",b,[n("span",null,g(u.$frontmatter.title)+" 관련",1)])]),a(o,t(l({title:"목차",desc:"아마존 웹 서비스를 다루는 기술",link:"/aws/art-of-aws/README.md",logo:"https://pyrasis.com/assets/images/pyrasis.png",background:"rgba(31,41,55,0.2)"})),null,16),n("nav",k,[n("ul",null,[n("li",null,[a(r,{to:"#cloudsearch-인덱스-구조를-설계하고-검색-도메인-생성하기"},{default:i(()=>[s("CloudSearch 인덱스 구조를 설계하고 검색 도메인 생성하기")]),_:1})]),n("li",null,[a(r,{to:"#cloudsearch-검색-도메인-엔드포인트로-데이터-올리기"},{default:i(()=>[s("CloudSearch 검색 도메인 엔드포인트로 데이터 올리기")]),_:1})]),n("li",null,[a(r,{to:"#cloudsearch-검색-도메인-엔드포인트-주소로-검색하기"},{default:i(()=>[s("CloudSearch 검색 도메인 엔드포인트 주소로 검색하기")]),_:1})])])]),q,a(o,t(l({title:"25장 - 5. CloudSearch 검색 도메인 엔드포인트 주소 활용하기",desc:"아마존 웹 서비스를 다루는 기술",link:"https://pyrasis.com/book/TheArtOfAmazonWebServices/Chapter25/05",logo:"https://pyrasis.com/favicon.ico",background:"rgba(31,41,55,0.2)"})),null,16),y,S,A,n("p",null,[s("검색을 위해 간단한 인덱스 구조를 설계합니다. 이름, 주소, 핸드폰 번호, 직급, 나이 정보를 표현한 문서를 예로 들겠습니다. 메모장이나 기타 텍스트 편집기를 열고 다음과 같이 작성한 뒤 "),a(e,{icon:"iconfont icon-json"}),C,s("으로 저장합니다.")]),n("blockquote",null,[a(e,{icon:"iconfont icon-json"}),z]),T,n("figure",null,[w,n("figcaption",null,[a(e,{icon:"iconfont icon-select"}),x,s("를 클릭한 뒤 "),a(e,{icon:"iconfont icon-select"}),W,s(" 버튼을 클릭합니다.")])]),O,j,n("figure",null,[D,n("figcaption",null,[s("설정이 완료되었으면 "),a(e,{icon:"iconfont icon-select"}),E,s(" 버튼을 클릭합니다.")])]),n("p",null,[s("CloudSearch 검색 도메인의 인덱스를 정의합니다. 방금 작성한 "),a(e,{icon:"iconfont icon-json"}),I,s("을 이용하겠습니다. "),F,s("을 선택하고 파일 선택 버튼을 클릭합니다.")]),R,n("figure",null,[P,n("figcaption",null,[s("파일 열기 창에서 방금 작성했던 "),a(e,{icon:"iconfont icon-json"}),L,s(" 파일을 선택하고 "),a(e,{icon:"iconfont icon-select"}),U,s(" 버튼을 클릭합니다.")])]),n("p",null,[s("파일을 열었으면 Create New Search Domain의 "),a(e,{icon:"iconfont icon-select"}),N,s(" 버튼을 클릭합니다.")]),n("p",null,[s("."),a(e,{icon:"iconfont icon-json"}),B,s("을 분석하여 인덱스가 생성되었습니다. Analysis Scheme에서 Address, Name, rank를 Korean으로 설정합니다. Phone과 같이 숫자로만 된 필드는 Korean으로 설정하지 않아도 상관없습니다.")]),n("figure",null,[G,n("figcaption",null,[s("설정이 완료되었으면 "),a(e,{icon:"iconfont icon-select"}),K,s(" 버튼을 클릭합니다.")])]),V,H,n("figure",null,[M,n("figcaption",null,[s("설정이 완료되었으면 "),a(e,{icon:"iconfont icon-select"}),X,s(" 버튼을 클릭합니다.")])]),Y,n("figure",null,[Z,n("figcaption",null,[s("이상이 없으면 "),a(e,{icon:"iconfont icon-select"}),J,s(" 버튼을 클릭합니다")])]),Q,n("figure",null,[$,n("figcaption",null,[a(e,{icon:"iconfont icon-select"}),nn,s(" 버튼을 클릭합니다.")])]),sn,an,en,on,n("p",null,[s("아직 생성된 검색 인스턴스 개수가 0개라고 표시됩니다. 1분 정도 기다린 후 "),a(e,{icon:"iconfont icon-select"}),tn,s(" 버튼을 클릭하면 생성된 검색 인스턴스가 표시됩니다.")]),ln,cn,a(o,t(l({title:"25장 - 5.2. CloudSearch 검색 도메인 엔드포인트로 데이터 올리기",desc:"아마존 웹 서비스를 다루는 기술",link:"https://pyrasis.com/book/TheArtOfAmazonWebServices/Chapter25/05/02",logo:"https://pyrasis.com/favicon.ico",background:"rgba(31,41,55,0.2)"})),null,16),n("p",null,[s("AWS CLI를 사용하여 검색 도메인의 엔드포인트로 데이터를 올려보겠습니다. AWS CLI를 설치하고 설정하는 방법은 "),a(d,{to:"/aws/art-of-aws/30B.html"},{default:i(()=>[s("'30.2 AWS CLI 설치하기'")]),_:1}),s("를 참조하기 바랍니다.")]),n("p",null,[s("다음 명령을 입력하여 "),a(e,{icon:"iconfont icon-json"}),pn,s(" 파일을 검색 도메인에 올립니다.")]),n("ul",null,[rn,un,dn,hn,n("li",null,[mn,s(": 올릴 파일명을 설정합니다. 여기서는 "),a(e,{icon:"iconfont icon-json"}),gn,s("을 입력합니다.")])]),_n,n("p",null,[s("검색 도메인("),fn,s(")에서 "),a(e,{icon:"iconfont icon-select"}),vn,s(" 버튼을 클릭합니다.")]),n("figure",null,[bn,n("figcaption",null,[s("잠시 기다리면 Searchable Documents가 2로 표시됩니다. "),a(e,{icon:"iconfont icon-json"}),kn,s("에 포함된 문서 2개가 정상적으로 올라갔습니다.")])]),n("p",null,[s("검색 도메인("),qn,s(")에서 "),a(e,{icon:"iconfont icon-select"}),yn,s("를 클릭 합니다. 그리고 Search 부분에 "),Sn,s("을 입력하고 "),a(e,{icon:"iconfont icon-select"}),An,s(" 버튼을 클릭합니다.")]),Cn,zn,a(o,t(l({title:"Uploading Data to an Amazon CloudSearch Domain - Amazon CloudSearch",desc:"Upload data to an Amazon CloudSearch domain for indexing.",link:"https://docs.aws.amazon.com/cloudsearch/latest/developerguide/uploading-data.html",logo:"https://docs.aws.amazon.com/assets/images/favicon.ico",background:"rgba(247,155,38,0.2)"})),null,16),Tn,wn,a(o,t(l({title:"25장 - 5.3. CloudSearch 검색 도메인 엔드포인트 주소로 검색하기",desc:"아마존 웹 서비스를 다루는 기술",link:"https://pyrasis.com/book/TheArtOfAmazonWebServices/Chapter25/05/03",logo:"https://pyrasis.com/favicon.ico",background:"rgba(31,41,55,0.2)"})),null,16),n("p",null,[s("이번에는 AWS 콘솔이 아닌 검색 도메인의 엔드포인트 주소로 검색을 해보겠습니다. 이때 HTTP 메서드를 손쉽게 사용할 수 있는 cURL을 사용하겠습니다. 보통 "),a(e,{icon:"fa-brands fa-linux"}),s("Linux 배포판이나 "),a(e,{icon:"iconfont icon-macos"}),s("Mac OS X에는 "),xn,s("이 기본적으로 설치되어 있습니다. 설치되어 있지 않다면 다음 명령으로 설치할 수 있습니다.")]),Wn,n("p",null,[s("@tab:active Amazon Linux, "),a(e,{icon:"fa-brands fa-centos"}),s("CentOS")]),On,n("p",null,[s("@tab "),a(e,{icon:"fa-brands fa-ubuntu"}),s("Ubuntu Linux")]),jn,n("p",null,[s("@tab "),a(e,{icon:"fa-brands fa-windows"}),s("Windows")]),Dn,En,n("p",null,[s("다음 명령을 입력하여 검색 도메인에서 검색을 합니다 ("),a(e,{icon:"fa-brands fa-windows"}),s("Windows에서는 "),a(e,{icon:"fas fa-gears"}),In,s("를 실행합니다).")]),Fn,a(o,t(l({title:"Search API Reference for Amazon CloudSearch - Amazon CloudSearch",desc:"You use the Search API to submit search or suggestion requests to your Amazon CloudSearch domain. For more information about searching, see . For more information about suggestions, see .",link:"https://docs.aws.amazon.com/cloudsearch/latest/developerguide/search-api.html",logo:"https://docs.aws.amazon.com/assets/images/favicon.ico",background:"rgba(247,155,38,0.2)"})),null,16),Rn])}const Bn=h(f,[["render",Pn],["__file","25E.html.vue"]]),Gn=JSON.parse('{"path":"/aws/art-of-aws/25E.html","title":"25E. CloudSearch 검색 도메인 엔드포인트 주소 활용하기","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"25E. CloudSearch 검색 도메인 엔드포인트 주소 활용하기","description":"아마존 웹 서비스를 다루는 기술 > 25E. CloudSearch 검색 도메인 엔드포인트 주소 활용하기","category":["AWS"],"tag":["crashcourse","pyrasis","aws","amazon-web-services"],"head":[[{"meta":null},{"property":"og:title","content":"아마존 웹 서비스를 다루는 기술 > 25E. CloudSearch 검색 도메인 엔드포인트 주소 활용하기"},{"property":"og:description","content":"25E. CloudSearch 검색 도메인 엔드포인트 주소 활용하기"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/aws/art-of-aws/25E.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/crashcourse/aws/art-of-aws/25E.html"}],["meta",{"property":"og:site_name","content":"🥁Crashcourse"}],["meta",{"property":"og:title","content":"25E. CloudSearch 검색 도메인 엔드포인트 주소 활용하기"}],["meta",{"property":"og:description","content":"아마존 웹 서비스를 다루는 기술 > 25E. CloudSearch 검색 도메인 엔드포인트 주소 활용하기"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter25/28_.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-10-03T01:20:13.000Z"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"pyrasis"}],["meta",{"property":"article:tag","content":"aws"}],["meta",{"property":"article:tag","content":"amazon-web-services"}],["meta",{"property":"article:modified_time","content":"2024-10-03T01:20:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"25E. CloudSearch 검색 도메인 엔드포인트 주소 활용하기\\",\\"image\\":[\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter25/28_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter25/29_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter25/30_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter25/31_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter25/32_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter25/33_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter25/34_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter25/35_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter25/36_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter25/37_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter25/38_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter25/39_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter25/40_.png\\"],\\"dateModified\\":\\"2024-10-03T01:20:13.000Z\\",\\"author\\":[]}"]],"next":"/aws/art-of-aws/26.md"},"headers":[{"level":2,"title":"CloudSearch 인덱스 구조를 설계하고 검색 도메인 생성하기","slug":"cloudsearch-인덱스-구조를-설계하고-검색-도메인-생성하기","link":"#cloudsearch-인덱스-구조를-설계하고-검색-도메인-생성하기","children":[]},{"level":2,"title":"CloudSearch 검색 도메인 엔드포인트로 데이터 올리기","slug":"cloudsearch-검색-도메인-엔드포인트로-데이터-올리기","link":"#cloudsearch-검색-도메인-엔드포인트로-데이터-올리기","children":[]},{"level":2,"title":"CloudSearch 검색 도메인 엔드포인트 주소로 검색하기","slug":"cloudsearch-검색-도메인-엔드포인트-주소로-검색하기","link":"#cloudsearch-검색-도메인-엔드포인트-주소로-검색하기","children":[]}],"git":{"createdTime":1716366673000,"updatedTime":1727918413000,"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":4}]},"readingTime":{"minutes":3.07,"words":920},"filePathRelative":"aws/art-of-aws/25E.md","localizedDate":"2024년 5월 22일","excerpt":"\\n"}');export{Bn as comp,Gn as data};