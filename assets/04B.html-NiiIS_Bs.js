import{_ as g}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,a as t,t as d,b as n,w as a,n as h,g as _,d as e,e as l,r as s,o as u}from"./app-U_bew1in.js";const f={},m={id:"frontmatter-title-관련",tabindex:"-1"},w={class:"header-anchor",href:"#frontmatter-title-관련"},k={class:"table-of-contents"},S=t("hr",null,null,-1),A=l('<hr><p>AWS에 관심이 있다면 &quot;AWS는 어렵고 비싸다&quot;라는 말을 많이 들었을 것이다. 하지만 AWS 라이트세일(AWS Lightsail)로 AWS를 쉽고 저렴하게 사용할 수 있다. 여기서는 AWS 라이트세일을 어떻게 사용하는지 알아보자.</p><hr><h2 id="aws-라이트세일이란" tabindex="-1"><a class="header-anchor" href="#aws-라이트세일이란"><span>AWS 라이트세일이란?</span></a></h2><p>AWS 라이트세일은 아마존에서 운영하는 웹 서비스에 특화된 클라우드 서비스이다. AWS를 처음 시작하려면 공부할 내용이 무척 많다. 하지만 AWS 라이트세일은 웹 서비스 운영에 꼭 필요한 기능만 준비되어 있어 비교적 공부할 내용이 적다. 또한 AWS와 비교하면 AWS 라이트세일은 정말 가성비가 좋다. 처음 3달은 무료이며 그 이후 비용은 월 5달러이다. 이렇게 저렴한 비용에 꽤 좋은 웹 서버를 운영할 수 있다. 참고로 비용이 부담스럽다면 AWS 라이트 세일을 첫 세달만 사용하고 삭제하면 추가 요금이 발생하지 않는다. 월 5달러로 여러분에게 제공될 서버의 사양은 다음과 같다.</p><blockquote><p><a href="https://wikidocs.net/163575" target="_blank" rel="noopener noreferrer">AWS 라이트세일 삭제는 부록에서 안내한다.</a></p></blockquote><div class="hint-container info"><p class="hint-container-title">AWS 라이트세일의 사양 (월 5$)</p><ul><li>메모리: 1GB</li><li>CPU: 1vCPU</li><li>SSD: 40GB</li><li>트래픽: 2TB</li></ul></div><p>이 정도면 서비스 초기 단계에는 충분하다. 물론 사용자가 많아져 트래픽이 많아지면 좀 더 좋은 사양으로 업그레이드 해야 한다.</p><hr><h2 id="aws-가입하기" tabindex="-1"><a class="header-anchor" href="#aws-가입하기"><span>AWS 가입하기</span></a></h2><p>AWS 라이트세일을 이용하려면 AWS 계정이 필요하다. 먼저 AWS 공식 홈페이지에서 AWS 계정을 생성하자.</p><h3 id="aws-공식-홈페이지-접속" tabindex="-1"><a class="header-anchor" href="#aws-공식-홈페이지-접속"><span>AWS 공식 홈페이지 접속</span></a></h3>',12),W=t("img",{src:"https://wikidocs.net/images/page/162889/C_4-02_1.png",alt:'AWS 공식 홈페이지에 접속한 다음 <FontIcon icon="iconfont icon-select"/>을 누르자.',tabindex:"0",loading:"lazy"},null,-1),b=t("a",{href:"https://aws.amazon.com/ko",target:"_blank",rel:"noopener noreferrer"},"AWS 공식 홈페이지",-1),y=t("code",null,"[AWS 계정 생성]",-1),x=t("h3",{id:"aws-계정-생성",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#aws-계정-생성"},[t("span",null,"AWS 계정 생성")])],-1),v=t("figure",null,[t("img",{src:"https://wikidocs.net/images/page/162889/O_4-02_2.png",alt:"그러면 다음과 같은 'AWS 계정 생성' 화면이 나타난다.",tabindex:"0",loading:"lazy"}),t("figcaption",null,"그러면 다음과 같은 'AWS 계정 생성' 화면이 나타난다.")],-1),z=t("code",null,"[이메일 주소 확인]",-1),O=t("figure",null,[t("img",{src:"https://wikidocs.net/images/page/162889/O_4-02_3.png",alt:'그러면 다음과 같은 "사용자 확인" 화면이 나타난다.',tabindex:"0",loading:"lazy"}),t("figcaption",null,'그러면 다음과 같은 "사용자 확인" 화면이 나타난다.')],-1),C=t("code",null,"[확인]",-1),j=t("figure",null,[t("img",{src:"https://wikidocs.net/images/page/162889/O_4-02_4.png",alt:"그러면 다음과 같이 암호를 입력하는 화면이 나타난다.",tabindex:"0",loading:"lazy"}),t("figcaption",null,"그러면 다음과 같이 암호를 입력하는 화면이 나타난다.")],-1),B=t("code",null,"[계속]",-1),q=l('<h3 id="aws-연락처-정보-화면" tabindex="-1"><a class="header-anchor" href="#aws-연락처-정보-화면"><span>AWS 연락처 정보 화면</span></a></h3><figure><img src="https://wikidocs.net/images/page/162889/O_4-02_5.png" alt="그러면 다음과 같은 &#39;연락처 정보 화면&#39;이 나타난다." tabindex="0" loading="lazy"><figcaption>그러면 다음과 같은 &#39;연락처 정보 화면&#39;이 나타난다.</figcaption></figure><p>이름과 주소 정보는 반드시 영문으로 입력해야 한다. 영문 주소는 <a href="http://juso.go.kr" target="_blank" rel="noopener noreferrer"><code>juso.go.kr</code></a>에 접속해 자신의 집 주소를 검색하고 &#39;영문 보기&#39;를 누르면 쉽게 알 수 있다.</p><p>연락처 정보를 입력하고 &lt;계속&gt;을 누른다.</p><h3 id="aws-결제-정보" tabindex="-1"><a class="header-anchor" href="#aws-결제-정보"><span>AWS 결제 정보</span></a></h3><figure><img src="https://wikidocs.net/images/page/162889/C_4-02_6.png" alt="그러면 다음과 같은 &#39;결제 정보&#39; 화면이 나타난다." tabindex="0" loading="lazy"><figcaption>그러면 다음과 같은 &#39;결제 정보&#39; 화면이 나타난다.</figcaption></figure><p>계정을 생성하려면 해외 결제 가능한 신용카드 또는 체크카드가 필요하다. 결제 정보를 입력할 때 카드 인증을 위해 100원이 자동으로 결제된다. 만약 이 과정이 어려운 학생이라면 부모님께 부탁드리자.</p><blockquote><p>출금된 100원은 바로 다시 입금된다.</p></blockquote>',8),T=t("img",{src:"https://wikidocs.net/images/page/162889/O_4-02_7.png",alt:'결제 정보를 입력하고 <FontIcon icon="iconfont icon-select"/>을 누르면 다음과 같이 "카드 정보입력" 화면이 나타난다.',tabindex:"0",loading:"lazy"},null,-1),F=t("code",null,"[계속]",-1),I=t("p",null,"비밀번호와 생년월일 정보를 입력한 후 <다음>을 누른다.",-1),P=t("h3",{id:"aws-자격-증명-확인",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#aws-자격-증명-확인"},[t("span",null,"AWS 자격 증명 확인")])],-1),U=t("figure",null,[t("img",{src:"https://wikidocs.net/images/page/162889/C_4-02_8.png",alt:"그러면 다음과 같은 '자격 증명 확인' 화면이 나타난다.",tabindex:"0",loading:"lazy"}),t("figcaption",null,"그러면 다음과 같은 '자격 증명 확인' 화면이 나타난다.")],-1),V=t("code",null,"[SMS 전송]",-1),D=t("figure",null,[t("img",{src:"https://wikidocs.net/images/page/162889/O_4-02_9.png",alt:'그러면 다음과 같은 "코드 확인" 화면이 나타난다.',tabindex:"0",loading:"lazy"}),t("figcaption",null,'그러면 다음과 같은 "코드 확인" 화면이 나타난다.')],-1),J=t("code",null,"[계속]",-1),N=l('<h3 id="aws-지원-플랜-선택" tabindex="-1"><a class="header-anchor" href="#aws-지원-플랜-선택"><span>AWS 지원 플랜 선택</span></a></h3><figure><img src="https://wikidocs.net/images/page/162889/O_4-02_10.png" alt="그러면 다음과 같은 &#39;Support 플랜 선택&#39; 화면이 나타난다." tabindex="0" loading="lazy"><figcaption>그러면 다음과 같은 &#39;Support 플랜 선택&#39; 화면이 나타난다.</figcaption></figure><p>여기서 <code>[기본 지원 - 무료]</code> 지원 플랜을 선택을 하고 <code>[가입 완료]</code>를 누른다.</p><figure><img src="https://wikidocs.net/images/page/162889/O_4-02_11.png" alt="그러면 다음과 같은 가입완료 화면이 나타난다." tabindex="0" loading="lazy"><figcaption>그러면 다음과 같은 가입완료 화면이 나타난다.</figcaption></figure><hr><h2 id="aws-라이트세일-인스턴스-생성하기" tabindex="-1"><a class="header-anchor" href="#aws-라이트세일-인스턴스-생성하기"><span>AWS 라이트세일 인스턴스 생성하기</span></a></h2><p>AWS 계정 생성을 마쳤다면 AWS 라이트세일을 사용할 수 있다. AWS에 로그인하여 다음 단계를 순서대로 따라 해보자.</p><h3 id="aws-라이트세일-접속" tabindex="-1"><a class="header-anchor" href="#aws-라이트세일-접속"><span>AWS 라이트세일 접속</span></a></h3><p>AWS 공식 홈페이지에서 계정을 생성했으니 AWS에 로그인한 후 <a href="https://lightsail.aws.amazon.com" target="_blank" rel="noopener noreferrer">🌐라이트세일 홈페이지</a>에 접속하자.</p><h3 id="aws-라이트세일-로그인" tabindex="-1"><a class="header-anchor" href="#aws-라이트세일-로그인"><span>AWS 라이트세일 로그인</span></a></h3><figure><img src="https://wikidocs.net/images/page/162889/O_4-02_12.png" alt="라이트세일 홈페이지에 접속하면 다음과 같은 로그인 화면이 나타난다." tabindex="0" loading="lazy"><figcaption>라이트세일 홈페이지에 접속하면 다음과 같은 로그인 화면이 나타난다.</figcaption></figure>',11),R=t("code",null,"[다음]",-1),L=t("img",{src:"https://wikidocs.net/images/page/162889/O_4-02_13.png",alt:'이어서 이미지 보안 문자를 입력하고 <FontIcon icon="iconfont icon-select"/>을 누른다.',tabindex:"0",loading:"lazy"},null,-1),$=t("code",null,"[제출]",-1),K=l('<figure><img src="https://wikidocs.net/images/page/162889/O_4-02_14.png" alt="비밀번호를 입력하고 을 누른다." tabindex="0" loading="lazy"><figcaption>비밀번호를 입력하고 <code>[로그인]</code>을 누른다.</figcaption></figure><figure><img src="https://wikidocs.net/images/page/162889/O_4-02_15.png" alt="그러면 다음과 같이 라이트세일 시작 화면이 나타난다." tabindex="0" loading="lazy"><figcaption>그러면 다음과 같이 라이트세일 시작 화면이 나타난다.</figcaption></figure><p><code>[Let&#39;s get started]</code>를 누른다.</p><figure><img src="https://wikidocs.net/images/page/162889/C_4-02_16.png" alt="그러면 다음과 같이 라이트세일 메인 화면이 나타난다." tabindex="0" loading="lazy"><figcaption>그러면 다음과 같이 라이트세일 메인 화면이 나타난다.</figcaption></figure><p>메인 화면은 디폴트로 영문으로 구성된다. 한국어로 바꾸려면 우하단의 &quot;English&quot;를 &quot;한국어&quot;로 변경하자.</p><figure><img src="https://wikidocs.net/images/page/162889/O_4-02_17.png" alt="그러면 다음과 같이 영문이 한국어로 표시된다." tabindex="0" loading="lazy"><figcaption>그러면 다음과 같이 영문이 한국어로 표시된다.</figcaption></figure><h3 id="인스턴스-생성" tabindex="-1"><a class="header-anchor" href="#인스턴스-생성"><span>인스턴스 생성</span></a></h3>',7),Z=t("img",{src:"https://wikidocs.net/images/page/162889/C_4-02_18.png",alt:'라이트세일 메인 화면에서 <FontIcon icon="iconfont icon-select"/>을 누르자.',tabindex:"0",loading:"lazy"},null,-1),E=t("code",null,"[인스턴스 생성]",-1),G=t("h3",{id:"인스턴스-이미지-선택",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#인스턴스-이미지-선택"},[t("span",null,"인스턴스 이미지 선택")])],-1),M=t("figure",null,[t("img",{src:"https://wikidocs.net/images/page/162889/C_4-02_19.png",alt:"그러면 다음과 같은 '인스턴스 이미지 선택' 화면이 나타난다.",tabindex:"0",loading:"lazy"}),t("figcaption",null,"그러면 다음과 같은 '인스턴스 이미지 선택' 화면이 나타난다.")],-1),H=t("code",null,"[Linux/Unix]",-1),Q=t("code",null,"[OS 전용]",-1),X=t("code",null,"[Ubuntu 20.04 LTS]",-1),Y=l('<blockquote><p>우분투는 16.04, 18.04, 20.04 버전이 있는데 최신 버전인 20.04를 선택했다.</p></blockquote><h3 id="인스턴스-플랜-선택" tabindex="-1"><a class="header-anchor" href="#인스턴스-플랜-선택"><span>인스턴스 플랜 선택</span></a></h3><figure><img src="https://wikidocs.net/images/page/162889/C_4-02_20.png" alt="&#39;인스턴스 플랜 선택&#39;에서 과 를 선택하자." tabindex="0" loading="lazy"><figcaption>&#39;인스턴스 플랜 선택&#39;에서 <code>[월별 요금]</code>과 <code>[$5 USD]</code>를 선택하자.</figcaption></figure><p>참고로 월 3.5달러, 5달러, 10달러 이외의 요금제는 첫 3개월 무료 혜택이 없다.</p><blockquote><p>더 저렴한 $3.5 인스턴스도 있지만 스프링부트를 사용하기에는 메모리가 부족하여 적당하지 않다.</p></blockquote><h3 id="인스턴스-생성-실행" tabindex="-1"><a class="header-anchor" href="#인스턴스-생성-실행"><span>인스턴스 생성 실행</span></a></h3>',6),tt=t("img",{src:"https://wikidocs.net/images/page/162889/C_4-02_21.png",alt:'이어서 스크롤을 내려 마지막으로 <FontIcon icon="iconfont icon-select"/>을 누르자.',tabindex:"0",loading:"lazy"},null,-1),et=t("code",null,"[인스턴스 생성]",-1),nt=t("p",null,"인스턴스명은 자동으로 선택한 OS명에 인덱스를 붙여 'Ubuntu-1'과 같이 표시되는데 원하는 이름으로 바꿔도 된다.",-1),it=t("h3",{id:"인스턴스-생성-대기중",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#인스턴스-생성-대기중"},[t("span",null,"인스턴스 생성 대기중")])],-1),at=t("code",null,"[인스턴스 생성]",-1),ot=t("figure",null,[t("img",{src:"https://wikidocs.net/images/page/162889/C_4-02_22.png",alt:"인스턴스를 생성하는 동안에는 '대기 중'이라는 메시지를 보여 준다.",tabindex:"0",loading:"lazy"}),t("figcaption",null,"인스턴스를 생성하는 동안에는 '대기 중'이라는 메시지를 보여 준다.")],-1),lt=t("h3",{id:"인스턴스-생성-완료",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#인스턴스-생성-완료"},[t("span",null,"인스턴스 생성 완료")])],-1),st=t("figure",null,[t("img",{src:"https://wikidocs.net/images/page/162889/C_4-02_23.png",alt:"1~2분 지나면 인스턴스가 '대기 중'에서 '실행 중'으로 바뀐다.",tabindex:"0",loading:"lazy"}),t("figcaption",null,"1~2분 지나면 인스턴스가 '대기 중'에서 '실행 중'으로 바뀐다.")],-1),ct=t("p",null,"축하한다. 여러분의 서버가 생성되었다.",-1),pt=t("hr",null,null,-1);function gt(c,rt){const i=s("router-link"),p=s("VPCard"),o=s("FontIcon");return u(),r("div",null,[t("h1",m,[t("a",w,[t("span",null,d(c.$frontmatter.title)+" 관련",1)])]),t("nav",k,[t("ul",null,[t("li",null,[n(i,{to:"#aws-라이트세일이란"},{default:a(()=>[e("AWS 라이트세일이란?")]),_:1})]),t("li",null,[n(i,{to:"#aws-가입하기"},{default:a(()=>[e("AWS 가입하기")]),_:1}),t("ul",null,[t("li",null,[n(i,{to:"#aws-공식-홈페이지-접속"},{default:a(()=>[e("AWS 공식 홈페이지 접속")]),_:1})]),t("li",null,[n(i,{to:"#aws-계정-생성"},{default:a(()=>[e("AWS 계정 생성")]),_:1})]),t("li",null,[n(i,{to:"#aws-연락처-정보-화면"},{default:a(()=>[e("AWS 연락처 정보 화면")]),_:1})]),t("li",null,[n(i,{to:"#aws-결제-정보"},{default:a(()=>[e("AWS 결제 정보")]),_:1})]),t("li",null,[n(i,{to:"#aws-자격-증명-확인"},{default:a(()=>[e("AWS 자격 증명 확인")]),_:1})]),t("li",null,[n(i,{to:"#aws-지원-플랜-선택"},{default:a(()=>[e("AWS 지원 플랜 선택")]),_:1})])])]),t("li",null,[n(i,{to:"#aws-라이트세일-인스턴스-생성하기"},{default:a(()=>[e("AWS 라이트세일 인스턴스 생성하기")]),_:1}),t("ul",null,[t("li",null,[n(i,{to:"#aws-라이트세일-접속"},{default:a(()=>[e("AWS 라이트세일 접속")]),_:1})]),t("li",null,[n(i,{to:"#aws-라이트세일-로그인"},{default:a(()=>[e("AWS 라이트세일 로그인")]),_:1})]),t("li",null,[n(i,{to:"#인스턴스-생성"},{default:a(()=>[e("인스턴스 생성")]),_:1})]),t("li",null,[n(i,{to:"#인스턴스-이미지-선택"},{default:a(()=>[e("인스턴스 이미지 선택")]),_:1})]),t("li",null,[n(i,{to:"#인스턴스-플랜-선택"},{default:a(()=>[e("인스턴스 플랜 선택")]),_:1})]),t("li",null,[n(i,{to:"#인스턴스-생성-실행"},{default:a(()=>[e("인스턴스 생성 실행")]),_:1})]),t("li",null,[n(i,{to:"#인스턴스-생성-대기중"},{default:a(()=>[e("인스턴스 생성 대기중")]),_:1})]),t("li",null,[n(i,{to:"#인스턴스-생성-완료"},{default:a(()=>[e("인스턴스 생성 완료")]),_:1})])])])])]),S,n(p,h(_({title:"4-02. AWS 라이트세일",desc:"점프 투 스프링부트 - WikiDocs",link:"https://wikidocs.net/162889",logo:"https://wikidocs.net/static/img/favicon.ico",background:"rgba(255,255,255,0.2)"})),null,16),A,t("figure",null,[W,t("figcaption",null,[b,e("에 접속한 다음 "),n(o,{icon:"iconfont icon-select"}),y,e("을 누르자.")])]),x,v,t("p",null,[e("이메일 주소와 계정 이름을 입력하고 "),n(o,{icon:"iconfont icon-select"}),z,e("을 누른다.")]),O,t("p",null,[e("등록한 이메일로 전달된 보안코드를 확인하고 확인 코드에 보안코드를 입력한 후 "),n(o,{icon:"iconfont icon-select"}),C,e("을 누른다.")]),j,t("p",null,[e("암호를 입력하고 "),n(o,{icon:"iconfont icon-select"}),B,e("을 누른다.")]),q,t("figure",null,[T,t("figcaption",null,[e("결제 정보를 입력하고 "),n(o,{icon:"iconfont icon-select"}),F,e('을 누르면 다음과 같이 "카드 정보입력" 화면이 나타난다.')])]),I,P,U,t("p",null,[e("자격 증명 확인을 위해 자신의 휴대전화 번호를 입력하고 "),n(o,{icon:"iconfont icon-select"}),V,e("을 누른다.")]),D,t("p",null,[e("휴대전화로 전달된 4자리 확인 코드를 입력하고 "),n(o,{icon:"iconfont icon-select"}),J,e("을 누른다.")]),N,t("p",null,[e("사용자 이메일 주소를 입력한후 "),n(o,{icon:"iconfont icon-select"}),R,e("을 누른다.")]),t("figure",null,[L,t("figcaption",null,[e("이어서 이미지 보안 문자를 입력하고 "),n(o,{icon:"iconfont icon-select"}),$,e("을 누른다.")])]),K,t("figure",null,[Z,t("figcaption",null,[e("라이트세일 메인 화면에서 "),n(o,{icon:"iconfont icon-select"}),E,e("을 누르자.")])]),G,M,t("p",null,[e("이 화면에서 인스턴스를 생성하는 데 필요한 여러 옵션을 지정하자. '인스턴스 이미지 선택'에서 플랫폼으로 "),n(o,{icon:"iconfont icon-select"}),H,e("를 선택하고 블루프린트는 "),n(o,{icon:"iconfont icon-select"}),Q,e("을 선택한다. 그런 다음 "),n(o,{icon:"iconfont icon-select"}),X,e("를 선택한다. 운영체제는 아주 다양한데 가장 안정되고 많은 사람이 사용하는 우분투를 설치할 것이다.")]),Y,t("figure",null,[tt,t("figcaption",null,[e("이어서 스크롤을 내려 마지막으로 "),n(o,{icon:"iconfont icon-select"}),et,e("을 누르자.")])]),nt,it,t("p",null,[e("."),n(o,{icon:"iconfont icon-select"}),at,e("을 누르면 다음과 같은 화면이 나타난다.")]),ot,lt,st,ct,pt])}const _t=g(f,[["render",gt],["__file","04B.html.vue"]]),ut=JSON.parse('{"path":"/java/jump-to-spring-boot/04B.html","title":"4-02. AWS 라이트세일","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"4-02. AWS 라이트세일","description":"Jump to Spring Boot > 4-02. AWS 라이트세일","category":["Java","Spring","AWS"],"tag":["crashcourse","java","jdk","jdk8","stream","spring","springframework","springboot","aws","aws-ec2"],"head":[[{"meta":null},{"property":"og:title","content":"Jump to Spring Boot > 4-02. AWS 라이트세일"},{"property":"og:description","content":"4-02. AWS"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/java/jump-to-spring-boot/04B.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/crashcourse/java/jump-to-spring-boot/04B.html"}],["meta",{"property":"og:site_name","content":"🥁Crashcourse"}],["meta",{"property":"og:title","content":"4-02. AWS 라이트세일"}],["meta",{"property":"og:description","content":"Jump to Spring Boot > 4-02. AWS 라이트세일"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://aws.amazon.com/ko"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-10-03T01:20:13.000Z"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"java"}],["meta",{"property":"article:tag","content":"jdk"}],["meta",{"property":"article:tag","content":"jdk8"}],["meta",{"property":"article:tag","content":"stream"}],["meta",{"property":"article:tag","content":"spring"}],["meta",{"property":"article:tag","content":"springframework"}],["meta",{"property":"article:tag","content":"springboot"}],["meta",{"property":"article:tag","content":"aws"}],["meta",{"property":"article:tag","content":"aws-ec2"}],["meta",{"property":"article:modified_time","content":"2024-10-03T01:20:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"4-02. AWS 라이트세일\\",\\"image\\":[\\"https://aws.amazon.com/ko\\",\\"https://wikidocs.net/images/page/162889/O_4-02_2.png\\",\\"https://wikidocs.net/images/page/162889/O_4-02_3.png\\",\\"https://wikidocs.net/images/page/162889/O_4-02_4.png\\",\\"https://wikidocs.net/images/page/162889/O_4-02_5.png\\",\\"https://wikidocs.net/images/page/162889/C_4-02_6.png\\",\\"https://wikidocs.net/images/page/162889/O_4-02_7.png\\",\\"https://wikidocs.net/images/page/162889/C_4-02_8.png\\",\\"https://wikidocs.net/images/page/162889/O_4-02_9.png\\",\\"https://wikidocs.net/images/page/162889/O_4-02_10.png\\",\\"https://wikidocs.net/images/page/162889/O_4-02_11.png\\",\\"https://wikidocs.net/images/page/162889/O_4-02_12.png\\",\\"https://wikidocs.net/images/page/162889/O_4-02_13.png\\",\\"https://wikidocs.net/images/page/162889/O_4-02_14.png\\",\\"https://wikidocs.net/images/page/162889/O_4-02_15.png\\",\\"https://wikidocs.net/images/page/162889/C_4-02_16.png\\",\\"https://wikidocs.net/images/page/162889/O_4-02_17.png\\",\\"https://wikidocs.net/images/page/162889/C_4-02_18.png\\",\\"https://wikidocs.net/images/page/162889/C_4-02_19.png\\",\\"https://wikidocs.net/images/page/162889/C_4-02_20.png\\",\\"https://wikidocs.net/images/page/162889/C_4-02_21.png\\",\\"https://wikidocs.net/images/page/162889/C_4-02_22.png\\",\\"https://wikidocs.net/images/page/162889/C_4-02_23.png\\"],\\"dateModified\\":\\"2024-10-03T01:20:13.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"AWS 라이트세일이란?","slug":"aws-라이트세일이란","link":"#aws-라이트세일이란","children":[]},{"level":2,"title":"AWS 가입하기","slug":"aws-가입하기","link":"#aws-가입하기","children":[{"level":3,"title":"AWS 공식 홈페이지 접속","slug":"aws-공식-홈페이지-접속","link":"#aws-공식-홈페이지-접속","children":[]},{"level":3,"title":"AWS 계정 생성","slug":"aws-계정-생성","link":"#aws-계정-생성","children":[]},{"level":3,"title":"AWS 연락처 정보 화면","slug":"aws-연락처-정보-화면","link":"#aws-연락처-정보-화면","children":[]},{"level":3,"title":"AWS 결제 정보","slug":"aws-결제-정보","link":"#aws-결제-정보","children":[]},{"level":3,"title":"AWS 자격 증명 확인","slug":"aws-자격-증명-확인","link":"#aws-자격-증명-확인","children":[]},{"level":3,"title":"AWS 지원 플랜 선택","slug":"aws-지원-플랜-선택","link":"#aws-지원-플랜-선택","children":[]}]},{"level":2,"title":"AWS 라이트세일 인스턴스 생성하기","slug":"aws-라이트세일-인스턴스-생성하기","link":"#aws-라이트세일-인스턴스-생성하기","children":[{"level":3,"title":"AWS 라이트세일 접속","slug":"aws-라이트세일-접속","link":"#aws-라이트세일-접속","children":[]},{"level":3,"title":"AWS 라이트세일 로그인","slug":"aws-라이트세일-로그인","link":"#aws-라이트세일-로그인","children":[]},{"level":3,"title":"인스턴스 생성","slug":"인스턴스-생성","link":"#인스턴스-생성","children":[]},{"level":3,"title":"인스턴스 이미지 선택","slug":"인스턴스-이미지-선택","link":"#인스턴스-이미지-선택","children":[]},{"level":3,"title":"인스턴스 플랜 선택","slug":"인스턴스-플랜-선택","link":"#인스턴스-플랜-선택","children":[]},{"level":3,"title":"인스턴스 생성 실행","slug":"인스턴스-생성-실행","link":"#인스턴스-생성-실행","children":[]},{"level":3,"title":"인스턴스 생성 대기중","slug":"인스턴스-생성-대기중","link":"#인스턴스-생성-대기중","children":[]},{"level":3,"title":"인스턴스 생성 완료","slug":"인스턴스-생성-완료","link":"#인스턴스-생성-완료","children":[]}]}],"git":{"createdTime":1703642364000,"updatedTime":1727918413000,"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":6}]},"readingTime":{"minutes":1.34,"words":402},"filePathRelative":"java/jump-to-spring-boot/04B.md","localizedDate":"2023년 12월 27일","excerpt":"\\n\\n<hr>\\n"}');export{_t as comp,ut as data};