import{_ as h}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as p,a as e,t as u,b as t,w as s,n as l,g as c,e as g,r as o,o as _,d as m}from"./app-U_bew1in.js";const k={},f={id:"frontmatter-title-관련",tabindex:"-1"},v={class:"header-anchor",href:"#frontmatter-title-관련"},y={class:"table-of-contents"},b=e("hr",null,null,-1),H=e("p",null,"Kubernetes 패키지 관리(Kubernetes package manager)",-1),F=e("hr",null,null,-1),x=e("h2",{id:"개요",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#개요"},[e("span",null,"개요")])],-1),E=e("p",null,"Helm은 공식 홈페이지에도 정의가 나와있는 것 처럼 ‘Kubernetes 패키지 관리(Kubernetes package manager)‘를 도와준다.",-1),K=e("p",null,"흔히 패키지 관리를 도와주는 리눅스의 yum 또는 apt, Node.js의 npm과 Python의 pip 등과 같은 역할이라고 보면 된다.",-1),C=e("hr",null,null,-1),D=e("h2",{id:"참조-문서",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#참조-문서"},[e("span",null,"참조 문서")])],-1),R=g('<p><a href="/docs/helm/overview/">Helm 개요</a><a href="/docs/helm/what-is-helm/">Helm이란? Kubernetes 프로젝트 관리, 유스 케이스</a><a href="/docs/helm/chart/">Helm Chart</a><a href="/docs/helm/install/">Helm 설치</a><a href="/docs/helm/uses/">Helm 사용하기</a></p><hr>',2);function A(i,M){const n=o("router-link"),r=o("VPCard"),a=o("SiteInfo"),d=o("TagLInks");return _(),p("div",null,[e("h1",f,[e("a",v,[e("span",null,u(i.$frontmatter.title)+" 관련",1)])]),e("nav",y,[e("ul",null,[e("li",null,[t(n,{to:"#개요"},{default:s(()=>[m("개요")]),_:1})]),e("li",null,[t(n,{to:"#참조-문서"},{default:s(()=>[m("참조 문서")]),_:1})])])]),b,t(r,l(c({title:"Helm | devkuma",desc:"개발 지식 공유",link:"https://devkuma.com/docs/helm/",logo:"https://devkuma.com/favicons/favicon.ico",background:"rgba(48,99,142,0.2)"})),null,16),H,F,x,E,K,t(r,l(c({title:"Helm | Docs",desc:"문서 구성에 관해 알아야 할 모든 것",link:"https://helm.sh/ko/docs/",logo:"https://helm.sh/img/favicon-152.png",background:"rgba(27,83,194,0.2)"})),null,16),C,D,t(a,{name:"쿠버네티스(kubernetes)와 가까워지기 - Helm 이란?",desc:"Helm이란? Helm은 공식 홈페이지에도 정의가 나와있는 것 처럼 'Kubernetes 패키지 관리'를 도와줍니다. 흔히 패키지 관리를 도와주는 Node.js의 npm과 Python의 pip와 같은 역할이라고 보면 됩니다. Helm을 사용하기에 앞서 우선, 3가지 주요 개념을 꼭 알아야 됩니다. 1. Chart(차트) 헬름 패키지로, k8s cluster에서 애플리케이션이 기동되기 위해 필요한 모든 리소스들이 포함되어 있습니다. 아래 이미지와 같이 mariadb를 기동하기 위해 필요한 리소스인 Deployment, Secret, Service가 생성되는 것을 볼 수 있으며, mariadb가 설치되면서 새로운 Release가 만들어지게 됩니다. 2. Repository(저장소) 차트 저장소로, 차트를 모..",url:"https://tech.ktcloud.com/51",logo:"https://t1.daumcdn.net/tistory_admin/favicon/tistory_favicon_32x32.ico",preview:"https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fdm5DeV%2FbtqVh7p3OMh%2FddDn4YdLx2GilFygg9dPWK%2Fimg.png"}),t(a,{name:"쿠버네티스 패키지 매니저 Helm #2-1. Chart",desc:"쿠버네티스 패키지 매니저 HELM#2-1 .Chart조대협 http://bcho.tistory.comHelm Chart차트는 helm의 패키지 포맷으로, 하나의 애플리케이션을 설치하기 위한 파일들로 구성되어 있다. 예를 들어 tomcat을 설치하기 위한 쿠버네티스의 pod,service,deployment를 위한 YAML 파일등을 포함한다.템플릿과 밸류Helm 은 기본적으로 템플릿의 개념을 사용한다. 템플릿 파일을 만들어놓은 후에, 밸류 값을 채워 넣어서 쿠버네티스 리소스를 정의한 YAML 파일을 생성한다. 예제를 살펴보자Helm 은 기본적으로 템플릿의 개념을 사용한다. 템플릿 파일을 만들어놓은 후에, 밸류 값을 채워 넣어서 쿠버네티스 리소스를 정의한 YAML 파일을 생성한다. 예제를 살펴보자. 먼저 t..",url:"https://bcho.tistory.com/m/1337",logo:"https://t1.daumcdn.net/tistory_admin/favicon/tistory_favicon_32x32.ico",preview:"https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99B8E9475CFCE48A1C"}),t(a,{name:"Helm Chart를 이용한 Kubernetes배포/관리",desc:"Helm 특징 복잡한 애플리케이션 배포 관리 Kubernetes 오케스트레이션 된 응용프로그램의 배포는 매우 복잡할 수 있다. Kubernetes 환경에서 helm 차트는 복잡한 응용프로그램의 배포를 코드로 관리하여 자동으로 배포할 수 있도록 제공한다. 응용프로그램의 빠른 배포를 통하여 다양한 테스트 환경 배포 및 운영 환경 배포 시간을 줄여 개발에 집중하도록 한다. Hooks Kubernetes 환경에서 helm 차트로 설치, 업그레이드,삭제 그리고 롤백과 같은 응용프로그램 생명주기의 개입할 수 있는 기능을 Hook을 통하여 제공한다. 릴리즈 관리 Helm으로 배포된 응용프로그램은 하나의 릴리즈로 불립니다. 해당 릴리즈는 배포된 응용프로그램의 버전 관리를 가능하도록 한다 Helm 기본 구성 Helm C..",url:"https://cyuu.tistory.com/m/160",logo:"https://t1.daumcdn.net/tistory_admin/favicon/tistory_favicon_32x32.ico",preview:"https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FSq1M6%2FbtqzYVqeEuQ%2FjsmDpUDbD6mI0iwl9UWEaK%2Fimg.png"}),R,t(d)])}const w=h(k,[["render",A],["__file","RAEDME.html.vue"]]),P=JSON.parse('{"path":"/k8s/devkuma-helm/RAEDME.html","title":"devkuma - Helm","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"devkuma - Helm","description":"devkuma - Helm","icon":"iconfont icon-k8s","category":["DevOps","Kubernetes","VM"],"tag":["crashcourse","devkuma.com","kubernetes","k8s"],"head":[[{"meta":null},{"property":"og:title","content":"devkuma - Helm"},{"property":"og:description","content":"devkuma - Helm"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/k8s/devkuma-helm/"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/crashcourse/k8s/devkuma-helm/RAEDME.html"}],["meta",{"property":"og:site_name","content":"🥁Crashcourse"}],["meta",{"property":"og:title","content":"devkuma - Helm"}],["meta",{"property":"og:description","content":"devkuma - Helm"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-06-19T05:45:43.000Z"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"devkuma.com"}],["meta",{"property":"article:tag","content":"kubernetes"}],["meta",{"property":"article:tag","content":"k8s"}],["meta",{"property":"article:published_time","content":"2024-01-08T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-19T05:45:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"devkuma - Helm\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-01-08T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-19T05:45:43.000Z\\",\\"author\\":[]}"]],"date":"2024-01-08T00:00:00.000Z","isOriginal":false},"headers":[{"level":2,"title":"개요","slug":"개요","link":"#개요","children":[]},{"level":2,"title":"참조 문서","slug":"참조-문서","link":"#참조-문서","children":[]}],"git":{"createdTime":1718254231000,"updatedTime":1718775943000,"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":0.96,"words":288},"filePathRelative":"k8s/devkuma-helm/RAEDME.md","localizedDate":"2024년 1월 8일","excerpt":"\\n\\n<hr>\\n"}');export{w as comp,P as data};