import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as p,a as t,t as m,b as n,n as a,g as r,d as e,r as i,o as u}from"./app-U_bew1in.js";const d={},g={id:"frontmatter-title-관련",tabindex:"-1"},h={class:"header-anchor",href:"#frontmatter-title-관련"},y=t("nav",{class:"table-of-contents"},[t("ul")],-1),b=t("hr",null,null,-1),_=t("a",{href:"https://pyrasis.com/jHLsAlwaysUpToDateKubernetes/Unit03/02",target:"_blank",rel:"noopener noreferrer"},"Unit 3.2 Nginx 웹서버 실행하기",-1),k=t("code",null,"kubectl",-1),f=t("code",null,"kubectl",-1),x=t("code",null,"{}",-1),N=t("code",null,'""',-1),A=t("hr",null,null,-1);function K(c,L){const o=i("VPCard"),s=i("FontIcon");return u(),p("div",null,[t("h1",g,[t("a",h,[t("span",null,m(c.$frontmatter.title)+" 관련",1)])]),n(o,a(r({title:"목차",desc:"언제나 최신 Kubernetes",link:"/k8s/always-up-to-date-kubernetes/README.md",logo:"https://pyrasis.com/assets/images/pyrasis.png",background:"rgba(31,41,55,0.2)"})),null,16),y,b,n(o,a(r({title:"Unit 4. Nginx YAML 설정 파일 작성하기",desc:"언제나 최신 Kubernetes",link:"https://pyrasis.com/jHLsAlwaysUpToDateKubernetes/Unit04",logo:"https://pyrasis.com/assets/images/pyrasis.png",background:"rgba(31,41,55,0.2)"})),null,16),t("p",null,[_,e("에서 "),k,e(" 명령으로 Nginx 디플로이먼트와 서비스를 만들어보았습니다. 하지만 "),f,e("로는 세부 옵션을 설정하기 불편하므로, 이번에는 같은 Nginx 디플로이먼트와 서비스를 "),n(s,{icon:"iconfont icon-yaml"}),e("YAML 파일로 작성해서 만들어보겠습니다.")]),t("p",null,[e("쿠버네티스에서는 설정파일을 매니페스트(manifest)라고 부르며 "),n(s,{icon:"iconfont icon-yaml"}),e("YAML 형식으로 작성합니다("),n(s,{icon:"iconfont icon-json"}),e("JSON 형식도 가능합니다). "),n(s,{icon:"iconfont icon-yaml"}),e("YAML은 "),n(s,{icon:"iconfont icon-json"}),e("JSON과 호환되는 슈퍼셋이지만, 중괄호("),x,e(")가 없고, 문자열을 따옴표("),N,e(")로 묶지 않아도 됩니다. 특히, 계층 관계를 들여쓰기로 표현하는데, 이 문서에서는 계층 관계를 스페이스 2칸으로 표현하겠습니다.")]),n(o,a(r({title:"Unit 4 - 4.1 Nginx 디플로이먼트",desc:"언제나 최신 Kubernetes",link:"04A.md",logo:"https://pyrasis.com/assets/images/pyrasis.png",background:"rgba(31,41,55,0.2)"})),null,16),n(o,a(r({title:"Unit 4 - 4.2 Nginx 서비스",desc:"언제나 최신 Kubernetes",link:"04B.md",logo:"https://pyrasis.com/assets/images/pyrasis.png",background:"rgba(31,41,55,0.2)"})),null,16),n(o,a(r({title:"Unit 4 - 4.3 Nginx 디플로이먼트와 서비스의 구조 살펴보기",desc:"언제나 최신 Kubernetes",link:"04C.md",logo:"https://pyrasis.com/assets/images/pyrasis.png",background:"rgba(31,41,55,0.2)"})),null,16),A])}const w=l(d,[["render",K],["__file","04.html.vue"]]),T=JSON.parse('{"path":"/k8s/always-up-to-date-kubernetes/04.html","title":"04. Nginx YAML 설정 파일 작성하기","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"04. Nginx YAML 설정 파일 작성하기","description":"언제나 최신 Kubernetes > 04. Nginx YAML 설정 파일 작성하기","category":["Kubernetes"],"tag":["crashcourse","digitalocean","kubernetes","minkube","kubctl"],"head":[[{"meta":null},{"property":"og:title","content":"언제나 최신 Kubernetes > 04. Nginx YAML 설정 파일 작성하기"},{"property":"og:description","content":"04. Nginx YAML 설정 파일 작성하기"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/k8s/always-up-to-date-kubernetes/04.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/crashcourse/k8s/always-up-to-date-kubernetes/04.html"}],["meta",{"property":"og:site_name","content":"🥁Crashcourse"}],["meta",{"property":"og:title","content":"04. Nginx YAML 설정 파일 작성하기"}],["meta",{"property":"og:description","content":"언제나 최신 Kubernetes > 04. Nginx YAML 설정 파일 작성하기"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-10-03T01:20:13.000Z"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"digitalocean"}],["meta",{"property":"article:tag","content":"kubernetes"}],["meta",{"property":"article:tag","content":"minkube"}],["meta",{"property":"article:tag","content":"kubctl"}],["meta",{"property":"article:modified_time","content":"2024-10-03T01:20:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"04. Nginx YAML 설정 파일 작성하기\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-03T01:20:13.000Z\\",\\"author\\":[]}"]],"prev":"/k8s/always-up-to-date-kubernetes/03B.md"},"headers":[],"git":{"createdTime":1712118043000,"updatedTime":1727918413000,"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":0.69,"words":207},"filePathRelative":"k8s/always-up-to-date-kubernetes/04.md","localizedDate":"2024년 4월 3일","excerpt":"\\n"}');export{w as comp,T as data};