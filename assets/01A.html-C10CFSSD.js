import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as h,a as t,t as g,b as o,n as m,g as u,w as n,d as e,e as c,r,o as k}from"./app-U_bew1in.js";const y={},f={id:"frontmatter-title-관련",tabindex:"-1"},w={class:"header-anchor",href:"#frontmatter-title-관련"},D={class:"table-of-contents"},_=t("hr",null,null,-1),b=c('<p>Docker는 지금까지 사용해왔던 VMware, Microsoft Hyper-V, Xen, 리눅스 KVM 등의 가상 머신과 비슷합니다.</p><p>가상 머신에 리눅스를 설치한 뒤 각종 서버 프로그램과 DB를 설치하고, 개발한 애플리케이션이나 웹사이트를 실행했습니다. 이렇게 구축한 가상 머신 이미지를 여러 서버에 복사해서 실행하면 이미지 하나로 서버를 계속 만들어낼 수 있었습니다.</p><p>보통 가상 머신 서버를 독자적으로 운영하거나, 서비스 형태로 제공되는 Amazon Web Services, Microsoft Azure, Google Cloud Platform을 사용하기도 합니다.</p><hr><h2 id="가상-머신" tabindex="-1"><a class="header-anchor" href="#가상-머신"><span>가상 머신</span></a></h2><p>가상 머신은 편하긴 하지만 성능이 좋지 못한 것이 단점이었습니다. 지금까지 CPU에 가상화를 위한 기능들이 많이 추가되었지만 아직도 가상 머신은 리얼 머신에 비해 속도가 느립니다.</p><p>전가상화(Full Virtualization)의 느린 속도를 개선하기 위해 반가상화(Paravirtualization) 방식이 개발되었고, 현재 널리 쓰이고 있습니다.</p><figure><img src="https://pyrasis.com/assets/images/jHLsAlwaysUpToDateDocker/Unit01/4.png" alt="전가상화와 반가상화" tabindex="0" loading="lazy"><figcaption>전가상화와 반가상화</figcaption></figure><p>가상 머신 자체는 완전한 컴퓨터라 항상 게스트 OS를 설치해야 합니다. 그래서 이미지 안에 OS가 포함되기 때문에 이미지 용량이 커집니다.</p>',9),x=t("img",{src:"https://pyrasis.com/assets/images/jHLsAlwaysUpToDateDocker/Unit01/5.webp",alt:'가상 머신 계층도 (출처: <FontIcon icon="fa-brands fa-docker"/>https://www.docker.com/resources/what-container/)',tabindex:"0",loading:"lazy"},null,-1),A={href:"https://www.docker.com/resources/what-container/",target:"_blank",rel:"noopener noreferrer"},U=t("p",null,"아무리 네트워크와 인터넷 속도가 빨라졌다 하더라도 가상화 이미지를 주고받는 것은 꽤 부담스럽습니다. 특히 오픈 소스 가상화 소프트웨어는 OS를 가상화하는 것에만 초점이 맞춰져 있습니다. 그래서 이미지를 생성하고 실행하는 기능만 있을 뿐 배포와 관리 기능이 부족합니다.",-1),C=t("div",{class:"hint-container info"},[t("p",{class:"hint-container-title"},"가상 머신 배포"),t("p",null,"가상 머신을 중앙에서 관리하고 배포하는 상용 제품은 VMware vCenter, Microsoft System Center가 있습니다.")],-1),T=t("hr",null,null,-1),L=t("h2",{id:"docker",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#docker"},[t("span",null,"Docker")])],-1),j=t("p",null,"Docker는 반가상화보다 좀더 경량화된 방식입니다. 그림 1-6와 같이 게스트 OS를 설치하지 않습니다. Docker 이미지에 서버 운영을 위한 프로그램과 라이브러리만 격리해서 설치할 수 있고, OS 자원(시스템 콜)은 호스트와 공유합니다. 이렇게 되면서 이미지 용량이 크게 줄어들었습니다.",-1),v=t("img",{src:"https://pyrasis.com/assets/images/jHLsAlwaysUpToDateDocker/Unit01/6.webp",alt:'Docker 계층도 (출처: <FontIcon icon="fa-brands fa-docker"/>https://www.docker.com/resources/what-container/)',tabindex:"0",loading:"lazy"},null,-1),H={href:"https://www.docker.com/resources/what-container/",target:"_blank",rel:"noopener noreferrer"},P=c('<p>Docker는 하드웨어를 가상화하는 계층이 없기 때문에 메모리 접근, 파일시스템, 네트워크 속도가 가상 머신에 비해 월등히 빠릅니다. 표 1-1은 Docker 20.10.17에서 우분투 22.04 호스트와 우분투 22.04 Docker 컨테이너의 성능을 측정한 결과입니다. 수치상으로 호스트와 Docker 컨테이너 사이의 성능차이는 크지 않습니다. 호스트와 거의 동일한 속도라 할 수 있습니다.</p><table><thead><tr><th style="text-align:left;"></th><th style="text-align:left;">성능 측정 도구</th><th style="text-align:center;">호스트</th><th style="text-align:center;">Docker</th></tr></thead><tbody><tr><td style="text-align:left;">CPU</td><td style="text-align:left;">sysbench</td><td style="text-align:center;">1</td><td style="text-align:center;">0.9937</td></tr><tr><td style="text-align:left;">메모리 쓰기</td><td style="text-align:left;">sysbench</td><td style="text-align:center;">1</td><td style="text-align:center;">0.9913</td></tr><tr><td style="text-align:left;">메모리 읽기</td><td style="text-align:left;">sysbench</td><td style="text-align:center;">1</td><td style="text-align:center;">0.9987</td></tr><tr><td style="text-align:left;">디스크 I/O</td><td style="text-align:left;">dd</td><td style="text-align:center;">1</td><td style="text-align:center;">0.9921</td></tr><tr><td style="text-align:left;">네트워크</td><td style="text-align:left;">iperf</td><td style="text-align:center;">1</td><td style="text-align:center;">0.9893</td></tr></tbody></table><blockquote><p>Docker 20.10.17에서 우분투 22.04 호스트와 우분투 22.04 Docker 컨테이너 성능 측정</p></blockquote><p>Docker는 가상 머신과는 달리 이미지 생성과 배포에 특화된 기능을 제공합니다. Git에서 소스를 관리하는 것처럼 이미지 버전 관리 기능을 제공합니다. 또한, 중앙 관리를 위해 저장소에 이미지를 올리고, 받을 수 있습니다(Push/Pull). 그리고 GitHub처럼 Docker 이미지를 공유할 수 있는 Docker Hub도 제공합니다(GitHub처럼 유료 개인 저장소도 제공합니다).</p><p>다양한 API를 제공하기 때문에 원하는 만큼 자동화를 할 수 있어 개발과 서버 운영에 매우 유용합니다.</p><hr><h2 id="리눅스-컨테이너" tabindex="-1"><a class="header-anchor" href="#리눅스-컨테이너"><span>리눅스 컨테이너</span></a></h2><p>오래 전부터 리눅스/유닉스 환경은 chroot라는 명령을 제공했습니다. chroot는 파일시스템에서 루트 디렉터리(/)를 변경하는 명령입니다. chroot로 특정 디렉터리를 루트 디렉터리로 설정하면 chroot jail(감옥)이라는 환경이 생성되는데, chroot jail안에서는 바깥의 파일과 디렉터리에 접근할 수 없습니다. 이처럼 chroot는 디렉터리 경로를 격리하기 때문에 서버 정보 유출과 피해를 최소화 하는데 주로 사용되었습니다.</p><figure><img src="https://pyrasis.com/assets/images/jHLsAlwaysUpToDateDocker/Unit01/7.png" alt="chroot의 디렉터리 구조" tabindex="0" loading="lazy"><figcaption>chroot의 디렉터리 구조</figcaption></figure><p>chroot는 chroot jail에 들어갈 실행 파일과 공유 라이브러리를 직접 준비해야 하고 설정 방법이 복잡합니다. 또한, 완벽한 가상 환경이 아니기 때문에 각종 제약이 많습니다. 이후 리눅스는 LXC(LinuX Container)라는 시스템 레벨 가상화를 제공했습니다.</p><p>LXC는 컴퓨터를 통째로 가상화하여 OS를 실행하는 것이 아닌 리눅스 커널 레벨에서 제공하는 일종의 격리(Isolate)된 가상 공간입니다. 이 가상 공간에는 OS가 설치되지 않기 때문에 가상 머신이라 하지 않고, 컨테이너라 부릅니다.</p><p>리눅스 커널의 Control Groups(cgroups)는 CPU, 메모리, 디스크, 네트워크 자원을 할당하여 완전한 형태의 가상 공간을 제공합니다. 또한, 프로세스 트리, 사용자 계정, 파일시스템, IPC 등을 격리시켜 호스트와 별개의 공간을 만듭니다. 이것을 Namespace isolation(namespaces)이라고 합니다.</p><p>LXC는 리눅스 커널의 cgroups와 namespaces 기능을 활용하여 가상 공간을 제공합니다.</p><figure><img src="https://pyrasis.com/assets/images/jHLsAlwaysUpToDateDocker/Unit01/8.png" alt="LXC의 구조" tabindex="0" loading="lazy"><figcaption>LXC의 구조</figcaption></figure><p>LXC는 격리된 공간만 제공할 뿐 개발 및 서버 운영에 필요한 부가 기능이 부족했습니다. Docker는 리눅스 커널의 cgroups와 namespaces를 기반으로 하여 이미지, 컨테이너 생성 및 관리 기능과 다양한 부가 기능을 제공합니다.</p><p>Docker가 처음 개발될 당시에는 LXC를 기반으로 구현을 하였지만 최근부터는 Containerd(runC)를 개발하여 사용하고 있습니다.</p>',16),S=t("img",{src:"https://pyrasis.com/assets/images/jHLsAlwaysUpToDateDocker/Unit01/9.png",alt:'Docker Engine과 Containerd(출처: <FontIcon icon="fa-brands fa-docker"/>https://www.docker.com/products/container-runtime/)',tabindex:"0",loading:"lazy"},null,-1),z={href:"https://www.docker.com/products/container-runtime/",target:"_blank",rel:"noopener noreferrer"},I=t("hr",null,null,-1);function O(i,V){const l=r("VPCard"),a=r("router-link"),p=r("SiteInfo"),s=r("FontIcon");return k(),h("div",null,[t("h1",f,[t("a",w,[t("span",null,g(i.$frontmatter.title)+" 관련",1)])]),o(l,m(u({title:"목차",desc:"언제나 최신 Docker",link:"/docker/always-up-to-date-docker/README.md",logo:"https://pyrasis.com/assets/images/pyrasis.png",background:"rgba(31,41,55,0.2)"})),null,16),t("nav",D,[t("ul",null,[t("li",null,[o(a,{to:"#가상-머신"},{default:n(()=>[e("가상 머신")]),_:1})]),t("li",null,[o(a,{to:"#docker"},{default:n(()=>[e("Docker")]),_:1})]),t("li",null,[o(a,{to:"#리눅스-컨테이너"},{default:n(()=>[e("리눅스 컨테이너")]),_:1})])])]),_,o(p,{name:"1장 - 1. 가상 머신과 Docker",desc:"언제나 최신 Docker",url:"https://pyrasis.com/jHLsAlwaysUpToDateDocker/Unit01/01",logo:"https://pyrasis.com/assets/images/pyrasis.png",preview:"https://pyrasis.com/assets/images/jHLsAlwaysUpToDateDocker/Unit01/4.png"}),b,t("figure",null,[x,t("figcaption",null,[e("가상 머신 계층도 (출처: "),t("a",A,[o(s,{icon:"fa-brands fa-docker"}),e("https://www.docker.com/resources/what-container/")]),e(")")])]),U,C,T,L,j,t("figure",null,[v,t("figcaption",null,[e("Docker 계층도 (출처: "),t("a",H,[o(s,{icon:"fa-brands fa-docker"}),e("https://www.docker.com/resources/what-container/")]),e(")")])]),P,t("figure",null,[S,t("figcaption",null,[e("Docker Engine과 Containerd(출처: "),t("a",z,[o(s,{icon:"fa-brands fa-docker"}),e("https://www.docker.com/products/container-runtime/")]),e(")")])]),I])}const F=d(y,[["render",O],["__file","01A.html.vue"]]),N=JSON.parse('{"path":"/docker/always-up-to-date-docker/01A.html","title":"01A. Docker","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"01A. Docker","description":"언제나 최신 Docker > 01A. Docker","category":["DevOps","Docker"],"tag":["crashcourse","pyrasis.com","docker","devops"],"head":[[{"meta":null},{"property":"og:title","content":"언제나 최신 Docker > 01A. Docker"},{"property":"og:description","content":"01A. Docker"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/docker/always-up-to-date-docker/01A.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/crashcourse/docker/always-up-to-date-docker/01A.html"}],["meta",{"property":"og:site_name","content":"🥁Crashcourse"}],["meta",{"property":"og:title","content":"01A. Docker"}],["meta",{"property":"og:description","content":"언제나 최신 Docker > 01A. Docker"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://pyrasis.com/assets/images/jHLsAlwaysUpToDateDocker/Unit01/4.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-10-03T01:20:13.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://pyrasis.com/assets/images/jHLsAlwaysUpToDateDocker/Unit01/4.png"}],["meta",{"name":"twitter:image:alt","content":"01A. Docker"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"pyrasis.com"}],["meta",{"property":"article:tag","content":"docker"}],["meta",{"property":"article:tag","content":"devops"}],["meta",{"property":"article:published_time","content":"2022-10-03T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-03T01:20:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"01A. Docker\\",\\"image\\":[\\"https://pyrasis.com/assets/images/jHLsAlwaysUpToDateDocker/Unit01/4.png\\",\\"https://www.docker.com/resources/what-container/\\",\\"https://www.docker.com/resources/what-container/\\",\\"https://pyrasis.com/assets/images/jHLsAlwaysUpToDateDocker/Unit01/7.png\\",\\"https://pyrasis.com/assets/images/jHLsAlwaysUpToDateDocker/Unit01/8.png\\",\\"https://www.docker.com/products/container-runtime/\\"],\\"datePublished\\":\\"2022-10-03T00:00:00.000Z\\",\\"dateModified\\":\\"2024-10-03T01:20:13.000Z\\",\\"author\\":[]}"]],"date":"2022-10-03T00:00:00.000Z","isOriginal":false,"cover":"https://pyrasis.com/assets/images/jHLsAlwaysUpToDateDocker/Unit01/4.png"},"headers":[{"level":2,"title":"가상 머신","slug":"가상-머신","link":"#가상-머신","children":[]},{"level":2,"title":"Docker","slug":"docker","link":"#docker","children":[]},{"level":2,"title":"리눅스 컨테이너","slug":"리눅스-컨테이너","link":"#리눅스-컨테이너","children":[]}],"git":{"createdTime":1716977950000,"updatedTime":1727918413000,"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":3}]},"readingTime":{"minutes":1.02,"words":306},"filePathRelative":"docker/always-up-to-date-docker/01A.md","localizedDate":"2022년 10월 3일","excerpt":"\\n"}');export{F as comp,N as data};