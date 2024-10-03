import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as d,a as t,t as h,b as n,w as s,n as g,g as u,d as e,e as a,r as l,o as _}from"./app-U_bew1in.js";const m={},f={id:"frontmatter-title-관련",tabindex:"-1"},b={class:"header-anchor",href:"#frontmatter-title-관련"},S={class:"table-of-contents"},k=t("hr",null,null,-1),y=t("hr",null,null,-1),v=t("p",null,"SBB 서비스를 서버에 적용하기 위해서는 서버에 접속하여 프로그램을 설치하고 환경 설정을 진행해야 한다. 이번 장에서는 서버 작업을 위해 필요한 SSH, SFTP 도구를 설치하고 사용해 보자.",-1),w=t("div",{class:"hint-container info"},[t("p",{class:"hint-container-title"},"SSH와 SFTP"),t("ul",null,[t("li",null,"SSH: 네트워크 상의 다른 컴퓨터에 로그인하거나 원격 시스템(서버)의 명령을 수행하기 위한 프로토콜 (기본포트: 22번)"),t("li",null,"SFTP: SSH의 파일 전송을 담당하는 역할, 서버에 파일을 업로드하거나 다운로드 할 수 있는 프로토콜 (기본포트: 22번)")])],-1),x=t("hr",null,null,-1),P=t("h2",{id:"프라이빗-키",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#프라이빗-키"},[t("span",null,"프라이빗 키")])],-1),F=t("p",null,"SSH 또는 SFTP 프로그램으로 서버에 접속하기 위해서는 AWS의 계정 프라이빗 키가 필요하다. 프라이빗 키는 다음처럼 다운로드 할 수 있다.",-1),T=t("img",{src:"https://wikidocs.net/images/page/162895/C_4-04_1.png",alt:'AWS 라이트세일 메인 화면에서 <FontIcon icon="iconfont icon-select"/>을 선택한다.',tabindex:"0",loading:"lazy"},null,-1),j=t("code",null,"[계정]",-1),H=t("img",{src:"https://wikidocs.net/images/page/162895/C_4-04_2.png",alt:'다음과 같은 계정 화면에서 <FontIcon icon="iconfont icon-select"/> 탭을 누르고 <FontIcon icon="iconfont icon-select"/>를 누르자.',tabindex:"0",loading:"lazy"},null,-1),C=t("code",null,"[SSH 키]",-1),O=t("code",null,"<다운로드>",-1),z=t("code",null,"LightsailDefaultKey-ap-northeast-2.pem",-1),I=t("code",null,"C:/",-1),q=t("code",null,"mysite.pem",-1),D=a(`<blockquote><p>맥 OS의 경우 <code>/Users/&lt;사용자명&gt;</code> 디렉터리에 붙여넣어 작업하자.</p></blockquote><div class="language-batch line-numbers-mode" data-highlighter="prismjs" data-ext="batch" data-title="batch"><pre><code><span class="line"><span class="token command"><span class="token keyword">rename</span> LightsailDefaultKey-ap-northeast<span class="token number">-2</span>.pem mysite.pem</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,2),B={class:"hint-container info"},M=t("p",{class:"hint-container-title"},"맥 OS",-1),X=t("code",null,"mysite.pem",-1),K=t("code",null,"mysite.pem",-1),N=t("code",null,"600",-1),V=a(`<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">chmod</span> <span class="token number">600</span> mysite.pem</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,1),A=a('<hr><h2 id="ssh-클라이언트" tabindex="-1"><a class="header-anchor" href="#ssh-클라이언트"><span>SSH 클라이언트</span></a></h2><p>SSH 클라이언트에 대해서 먼저 살펴보자.</p><blockquote><p>SSH 클라이언트는 서버에 접속하는 단말기 역할을 하므로 터미널 프로그램이라고도 한다.</p></blockquote><h3 id="윈도우용-ssh-터미널-프로그램" tabindex="-1"><a class="header-anchor" href="#윈도우용-ssh-터미널-프로그램"><span>윈도우용 SSH 터미널 프로그램</span></a></h3><p>프라이빗 키가 준비되었으므로 이제 SSH 터미널 프로그램을 다운로드 받고 설치해 보자. 좋은 SSH 터미널 프로그램이 많지만 여기서는 무료로 사용할 수 있고 많은 사람들이 추천하는 MobaXterm을 사용해 보기로 하자.</p><p>MobaXterm은 무료이므로 누구나 설치할 수 있다. MobaXterm 설치 주소에 접속해 &#39;무료 버전(Home Edition)&#39; 설치 파일을 내려받아 설치하자. 설치 과정은 간단하므로 생략한다.</p><blockquote><p><a href="https://mobaxterm.mobatek.net/download.html" target="_blank" rel="noopener noreferrer">MobaXterm 설치파일 다운로드</a></p></blockquote>',8),J=t("img",{src:"https://wikidocs.net/images/page/76430/4-07_3.png",alt:'설치가 완료 되었으면 다음과 같이 MobaXterm을 실행하여 <FontIcon icon="iconfont icon-select"/>을 누르자.',tabindex:"0",loading:"lazy"},null,-1),R=t("code",null,"<Session>",-1),W=t("figure",null,[t("img",{src:"https://wikidocs.net/images/page/76430/4-07_4.png",alt:"그리고 다음 그림의 순서대로 입력하자.",tabindex:"0",loading:"lazy"}),t("figcaption",null,"그리고 다음 그림의 순서대로 입력하자.")],-1),Z=t("li",null,"SSH 누르기",-1),E=t("li",null,"서버의 고정 IP 주소 입력(여러분의 고정 IP 주소를 입력해야 함)",-1),L=t("li",null,[e("체크하고 "),t("code",null,"ubuntu"),e(" 입력")],-1),U=t("code",null,"mysite.pem",-1),$=t("code",null,"[OK]",-1),G=a(`<figure><img src="https://wikidocs.net/images/page/76430/4-07_5.png" alt="이와 같이 설정값을 모두 입력하면 다음처럼 MobaXterm으로 서버에 접속할 수 있다." tabindex="0" loading="lazy"><figcaption>이와 같이 설정값을 모두 입력하면 다음처럼 MobaXterm으로 서버에 접속할 수 있다.</figcaption></figure><p>이제 MobaXterm을 이용하여 서버작업을 할수 있다.</p><hr><h2 id="맥os용-ssh-터미널-프로그램" tabindex="-1"><a class="header-anchor" href="#맥os용-ssh-터미널-프로그램"><span>맥OS용 SSH 터미널 프로그램</span></a></h2><p>맥 OS는 별도의 터미널 프로그램을 사용하지 않고 맥OS에서 기본적으로 지원하는 터미널 프로그램을 사용하면 된다.</p><p>터미널 프로그램을 실행후 다음처럼 명령어를 입력하자.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">ssh</span> <span class="token parameter variable">-i</span> ~/mysite.pem ubuntu@3.37.58.70</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p>위 예시의 3.37.58.70 대신 여러분의 고정 IP를 입력하자.</p></blockquote><figure><img src="https://wikidocs.net/images/page/162895/O_4-04_3.png" alt="그러면 다음과 같이 서버에 접속된다." tabindex="0" loading="lazy"><figcaption>그러면 다음과 같이 서버에 접속된다.</figcaption></figure><p>이제 서버에 접속한 터미널을 이용하여 서버작업을 할수 있다.</p><hr><h2 id="sftp-클라이언트" tabindex="-1"><a class="header-anchor" href="#sftp-클라이언트"><span>SFTP 클라이언트</span></a></h2><p>조금후에 알아보겠지만 SBB 서비스는 jar 형태로 서버에 배포할 것이다. 이 때 배포파일로 만든 jar 파일을 서버에 전송해야 한다. 이렇게 파일을 서버에 전송하기 위해서는 SFTP 클라이언트 프로그램이 필요하다.</p><h3 id="sftp-프로그램" tabindex="-1"><a class="header-anchor" href="#sftp-프로그램"><span>SFTP 프로그램</span></a></h3><p>좋은 SFTP 프로그램이 많지만 여기서는 무료로 사용할 수 있고 많은 사람들이 추천하는 파일질라(FileZilla)를 사용해 보기로 하자.</p><blockquote><p>SFTP 클라이언트는 윈도우와 맥OS 모두 파일질라를 설치하자.</p></blockquote><p>파일질라는 무료이므로 누구나 설치할 수 있다. 다음 주소에 접속하여 설치파일을 내려받아 설치하자.</p><blockquote><p><a href="https://filezilla-project.org/" target="_blank" rel="noopener noreferrer">🌐파일질라 홈페이지</a></p></blockquote><p>설치 과정은 간단하므로 생략한다.</p><h3 id="sftp-접속" tabindex="-1"><a class="header-anchor" href="#sftp-접속"><span>SFTP 접속</span></a></h3><figure><img src="https://wikidocs.net/images/page/162895/C_4-04_4.png" alt="파일질라를 실행하면 다음과 같은 화면이 나타난다." tabindex="0" loading="lazy"><figcaption>파일질라를 실행하면 다음과 같은 화면이 나타난다.</figcaption></figure><figure><img src="https://wikidocs.net/images/page/162895/C_4-04_5.png" alt="화면 좌측 상단의 빨간색 테두리로 표시한 아이콘을 누르면 다음 화면이 나타난다." tabindex="0" loading="lazy"><figcaption>화면 좌측 상단의 빨간색 테두리로 표시한 아이콘을 누르면 다음 화면이 나타난다.</figcaption></figure>`,22),Q=t("img",{src:"https://wikidocs.net/images/page/162895/C_4-04_6.png",alt:'<FontIcon icon="iconfont icon-select"/> 버튼을 누르고 다음 그림의 순서대로 입력하자.',tabindex:"0",loading:"lazy"},null,-1),Y=t("code",null,'["New Site"]',-1),tt=t("li",null,"sbb 라는 이름으로 변경한다.",-1),et=t("li",null,"프로토콜은 SFTP를 선택한다.",-1),nt=t("li",null,"호스트에는 서버의 고정 IP 주소 입력한다.(여러분의 고정 IP 주소를 입력해야 함)",-1),ot=t("code",null,'["키 파일"]',-1),it=t("li",null,[e("사용자에 "),t("code",null,"ubuntu를"),e(" 입력한다.")],-1),st=t("code",null,"mysite.pem",-1),at=t("img",{src:"https://wikidocs.net/images/page/162895/O_4-04_7.png",alt:'이와 같이 설정값을 모두 입력하고 <FontIcon icon="iconfont icon-select"/>버튼을 누르면 다음처럼 서버에 접속할 수 있다.',tabindex:"0",loading:"lazy"},null,-1),lt=t("code",null,'["연결"]',-1),ct=t("p",null,'좌측의 "로컬 사이트"는 내 컴퓨터를 의미하고 우측의 "리모트 사이트"는 서버를 의미한다. 드래그 앤 드롭이나 파일을 우측 마우스 버튼으로 클릭하여 "업로드" 또는 "다운로드" 할수 있다.',-1),pt=t("hr",null,null,-1);function rt(c,dt){const i=l("router-link"),p=l("VPCard"),o=l("FontIcon");return _(),d("div",null,[t("h1",f,[t("a",b,[t("span",null,h(c.$frontmatter.title)+" 관련",1)])]),t("nav",S,[t("ul",null,[t("li",null,[n(i,{to:"#프라이빗-키"},{default:s(()=>[e("프라이빗 키")]),_:1})]),t("li",null,[n(i,{to:"#ssh-클라이언트"},{default:s(()=>[e("SSH 클라이언트")]),_:1}),t("ul",null,[t("li",null,[n(i,{to:"#윈도우용-ssh-터미널-프로그램"},{default:s(()=>[e("윈도우용 SSH 터미널 프로그램")]),_:1})])])]),t("li",null,[n(i,{to:"#맥os용-ssh-터미널-프로그램"},{default:s(()=>[e("맥OS용 SSH 터미널 프로그램")]),_:1})]),t("li",null,[n(i,{to:"#sftp-클라이언트"},{default:s(()=>[e("SFTP 클라이언트")]),_:1}),t("ul",null,[t("li",null,[n(i,{to:"#sftp-프로그램"},{default:s(()=>[e("SFTP 프로그램")]),_:1})]),t("li",null,[n(i,{to:"#sftp-접속"},{default:s(()=>[e("SFTP 접속")]),_:1})])])])])]),k,n(p,g(u({title:"4-04. 서버 접속 프로그램",desc:"점프 투 스프링부트 - WikiDocs",link:"https://wikidocs.net/162895",logo:"https://wikidocs.net/static/img/favicon.ico",background:"rgba(255,255,255,0.2)"})),null,16),y,v,w,x,P,F,t("figure",null,[T,t("figcaption",null,[e("AWS 라이트세일 메인 화면에서 "),n(o,{icon:"iconfont icon-select"}),j,e("을 선택한다.")])]),t("figure",null,[H,t("figcaption",null,[e("다음과 같은 계정 화면에서 "),n(o,{icon:"iconfont icon-select"}),C,e(" 탭을 누르고 "),n(o,{icon:"iconfont icon-select"}),O,e("를 누르자.")])]),t("p",null,[e("그러면 "),n(o,{icon:"iconfont icon-token"}),z,e("과 같은 이름의 프라이빗 키가 다운로드된다. 이 프라이빗 키를 컴퓨터의 루트("),I,e(") 디렉터리에 붙여 넣고 rename 명령을 이용해 파일명을 "),q,e("으로 변경하자.")]),D,t("div",B,[M,t("p",null,[e("맥 OS의 경우 "),n(o,{icon:"iconfont icon-token"}),X,e("을 사용하여 서버에 접속하려면 "),n(o,{icon:"iconfont icon-token"}),K,e(" 파일의 권한을 "),N,e("으로 변경해야 한다. 다음과 같이 파일의 권한을 수정하자.")]),V]),A,t("figure",null,[J,t("figcaption",null,[e("설치가 완료 되었으면 다음과 같이 MobaXterm을 실행하여 "),n(o,{icon:"iconfont icon-select"}),R,e("을 누르자.")])]),W,t("ol",null,[Z,E,L,t("li",null,[e("체크하고 입력 창 오른쪽에 있는 서류 모양 아이콘을 눌러 로컬 컴퓨터에 있는 프라이빗 키 파일("),n(o,{icon:"iconfont icon-token"}),U,e(") 선택")]),t("li",null,[n(o,{icon:"iconfont icon-select"}),$,e(" 누르기")])]),G,t("figure",null,[Q,t("figcaption",null,[n(o,{icon:"iconfont icon-select"}),Y,e(" 버튼을 누르고 다음 그림의 순서대로 입력하자.")])]),t("ol",null,[tt,et,nt,t("li",null,[e("로그온 유형으로 "),n(o,{icon:"iconfont icon-select"}),ot,e("을 선택한다.")]),it,t("li",null,[e("키파일에는 이전에 저장한 "),n(o,{icon:"iconfont icon-token"}),st,e(' 파일을 "찾아보기"로 찾아서 선택한다.')])]),t("figure",null,[at,t("figcaption",null,[e("이와 같이 설정값을 모두 입력하고 "),n(o,{icon:"iconfont icon-select"}),lt,e("버튼을 누르면 다음처럼 서버에 접속할 수 있다.")])]),ct,pt])}const ut=r(m,[["render",rt],["__file","04D.html.vue"]]),_t=JSON.parse('{"path":"/java/jump-to-spring-boot/04D.html","title":"4-04. 서버 접속 프로그램","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"4-04. 서버 접속 프로그램","description":"🍃Jump to Spring Boot > 4-04. 서버 접속 프로그램","category":["Java","Spring","AWS"],"tag":["crashcourse","java","jdk","jdk8","stream","spring","springframework","springboot","aws","aws-ec2"],"head":[[{"meta":null},{"property":"og:title","content":"🍃Jump to Spring Boot > 4-04. 서버 접속 프로그램"},{"property":"og:description","content":"4-04. 서버 접속 프로그램"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/java/jump-to-spring-boot/04D.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/crashcourse/java/jump-to-spring-boot/04D.html"}],["meta",{"property":"og:site_name","content":"🥁Crashcourse"}],["meta",{"property":"og:title","content":"4-04. 서버 접속 프로그램"}],["meta",{"property":"og:description","content":"🍃Jump to Spring Boot > 4-04. 서버 접속 프로그램"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://wikidocs.net/images/page/162895/C_4-04_1.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-10-03T01:20:13.000Z"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"java"}],["meta",{"property":"article:tag","content":"jdk"}],["meta",{"property":"article:tag","content":"jdk8"}],["meta",{"property":"article:tag","content":"stream"}],["meta",{"property":"article:tag","content":"spring"}],["meta",{"property":"article:tag","content":"springframework"}],["meta",{"property":"article:tag","content":"springboot"}],["meta",{"property":"article:tag","content":"aws"}],["meta",{"property":"article:tag","content":"aws-ec2"}],["meta",{"property":"article:modified_time","content":"2024-10-03T01:20:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"4-04. 서버 접속 프로그램\\",\\"image\\":[\\"https://wikidocs.net/images/page/162895/C_4-04_1.png\\",\\"https://wikidocs.net/images/page/162895/C_4-04_2.png\\",\\"https://wikidocs.net/images/page/76430/4-07_3.png\\",\\"https://wikidocs.net/images/page/76430/4-07_4.png\\",\\"https://wikidocs.net/images/page/76430/4-07_5.png\\",\\"https://wikidocs.net/images/page/162895/O_4-04_3.png\\",\\"https://wikidocs.net/images/page/162895/C_4-04_4.png\\",\\"https://wikidocs.net/images/page/162895/C_4-04_5.png\\",\\"https://wikidocs.net/images/page/162895/C_4-04_6.png\\",\\"https://wikidocs.net/images/page/162895/O_4-04_7.png\\"],\\"dateModified\\":\\"2024-10-03T01:20:13.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"프라이빗 키","slug":"프라이빗-키","link":"#프라이빗-키","children":[]},{"level":2,"title":"SSH 클라이언트","slug":"ssh-클라이언트","link":"#ssh-클라이언트","children":[{"level":3,"title":"윈도우용 SSH 터미널 프로그램","slug":"윈도우용-ssh-터미널-프로그램","link":"#윈도우용-ssh-터미널-프로그램","children":[]}]},{"level":2,"title":"맥OS용 SSH 터미널 프로그램","slug":"맥os용-ssh-터미널-프로그램","link":"#맥os용-ssh-터미널-프로그램","children":[]},{"level":2,"title":"SFTP 클라이언트","slug":"sftp-클라이언트","link":"#sftp-클라이언트","children":[{"level":3,"title":"SFTP 프로그램","slug":"sftp-프로그램","link":"#sftp-프로그램","children":[]},{"level":3,"title":"SFTP 접속","slug":"sftp-접속","link":"#sftp-접속","children":[]}]}],"git":{"createdTime":1703642364000,"updatedTime":1727918413000,"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":7}]},"readingTime":{"minutes":1.14,"words":343},"filePathRelative":"java/jump-to-spring-boot/04D.md","localizedDate":"2023년 12월 27일","excerpt":"\\n\\n<hr>\\n"}');export{ut as comp,_t as data};