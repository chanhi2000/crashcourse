import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as p,a as t,t as m,b as o,n as a,g as i,d as e,r as c,o as h}from"./app-U_bew1in.js";const g={},d={id:"frontmatter-title-관련",tabindex:"-1"},u={class:"header-anchor",href:"#frontmatter-title-관련"},_=t("nav",{class:"table-of-contents"},[t("ul")],-1),f=t("hr",null,null,-1),C=t("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter20/2_.png",alt:'이제 새로운 VPC를 추가해보겠습니다. AWS 콘솔로 접속한 뒤 메인 화면에서 Compute & Networking의 <FontIcon icon="iconfont icon-select"/>를 클릭합니다.',tabindex:"0",loading:"lazy"},null,-1),y=t("code",null,"[VPC]",-1),A=t("p",null,"오른쪽 위에서 VPC의 리전을 변경할 수 있습니다.",-1),P=t("figure",null,[t("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter20/3_.png",alt:"Tokyo 리전을 사용하겠습니다.",tabindex:"0",loading:"lazy"}),t("figcaption",null,"Tokyo 리전을 사용하겠습니다.")],-1),V=t("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter20/4_.png",alt:'VPC 목록(<FontIcon icon="iconfont icon-select"/> → )에서 위쪽 <FontIcon icon="iconfont icon-select"/> 버튼을 클릭합니다.',tabindex:"0",loading:"lazy"},null,-1),b=t("code",null,"[Virtual Private Cloud]",-1),v=t("code",null,"[Your VPCs]",-1),T=t("code",null,"[Create VPC]",-1),z=t("p",null,"VPC를 생성합니다.",-1),w=t("ul",null,[t("li",null,"Name tag: VPC의 이름입니다. ExampleVPC를 입력합니다(입력하지 않아도 상관없습니다)."),t("li",null,[e("CIDR block: CIDR 표기법으로 된 IP 대역입니다. 192.168.0.0/16을 입력합니다 "),t("ul",null,[t("li",null,"192.168.0.0/16의 서브넷 마스크는 255.255.0.0이며 이진수로 바꾸었을 때 1이 16개입니다. 그래서 192.168.0.0 ~ 192.168.255.255를 뜻합니다.")])]),t("li",null,"Tenancy: 이 VPC에서 EC2 인스턴스를 생성할 때 전용 하드웨어 사용 옵션입니다. 기본값 그대로 사용합니다.")],-1),S=t("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter20/5_.png",alt:'설정이 완료되었으면 <FontIcon icon="iconfont icon-select"/> 버튼을 클릭합니다.',tabindex:"0",loading:"lazy"},null,-1),I=t("code",null,"[Yes, Create]",-1),k=t("div",{class:"hint-container info"},[t("p",{class:"hint-container-title"},"사설망"),t("p",null,"IPv4 주소에서 공인 IP는 개수가 적기 때문에 사용하려면 반드시 구입을 해야 합니다. 하지만 사설망(내부망)을 구성할 때는 공인 IP를 구입하지 않아도 됩니다. 사설망을 구성할 때 임의로 설정해서 사용하는 IP 주소가 사설 IP 주소입니다."),t("p",null,"10.0.0.0 ~ 10.255.255.255, 172.16.0.0 ~ 172.31.255.255, 192.168.0.0 ~ 192.168.255.2550 3가지가 사설망으로 사용할 수 있는 IP 대역입니다. 특히 192.168.0.x는 흔히 볼 수 있는 사설 IP 주소입니다.")],-1),W=t("figure",null,[t("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter20/6_.png",alt:"VPC 목록에 VPC()가 생성되었습니다.",tabindex:"0",loading:"lazy"}),t("figcaption",null,[e("VPC 목록에 VPC("),t("code",null,"ExampleVPC"),e(")가 생성되었습니다.")])],-1),x=t("hr",null,null,-1);function O(r,R){const s=c("VPCard"),n=c("FontIcon");return h(),p("div",null,[t("h1",d,[t("a",u,[t("span",null,m(r.$frontmatter.title)+" 관련",1)])]),o(s,a(i({title:"목차",desc:"아마존 웹 서비스를 다루는 기술",link:"/aws/art-of-aws/README.md",logo:"https://pyrasis.com/assets/images/pyrasis.png",background:"rgba(31,41,55,0.2)"})),null,16),_,f,o(s,a(i({title:"20장 - 1. VPC 생성하기",desc:"아마존 웹 서비스를 다루는 기술",link:"https://pyrasis.com/book/TheArtOfAmazonWebServices/Chapter20/01",logo:"https://pyrasis.com/favicon.ico",background:"rgba(31,41,55,0.2)"})),null,16),t("figure",null,[C,t("figcaption",null,[e("이제 새로운 VPC를 추가해보겠습니다. AWS 콘솔로 접속한 뒤 메인 화면에서 Compute & Networking의 "),o(n,{icon:"iconfont icon-select"}),y,e("를 클릭합니다.")])]),A,P,t("figure",null,[V,t("figcaption",null,[e("VPC 목록("),o(n,{icon:"iconfont icon-select"}),b,e(" → "),v,e(")에서 위쪽 "),o(n,{icon:"iconfont icon-select"}),T,e(" 버튼을 클릭합니다.")])]),z,w,t("figure",null,[S,t("figcaption",null,[e("설정이 완료되었으면 "),o(n,{icon:"iconfont icon-select"}),I,e(" 버튼을 클릭합니다.")])]),k,W,x])}const F=l(g,[["render",O],["__file","20A.html.vue"]]),D=JSON.parse('{"path":"/aws/art-of-aws/20A.html","title":"20A. VPC 생성하기","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"20A. VPC 생성하기","description":"아마존 웹 서비스를 다루는 기술 > 20A. VPC 생성하기","category":["AWS"],"tag":["crashcourse","pyrasis","aws","amazon-web-services"],"head":[[{"meta":null},{"property":"og:title","content":"아마존 웹 서비스를 다루는 기술 > 20A. VPC 생성하기"},{"property":"og:description","content":"20A. VPC 생성하기"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/aws/art-of-aws/20A.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/crashcourse/aws/art-of-aws/20A.html"}],["meta",{"property":"og:site_name","content":"🥁Crashcourse"}],["meta",{"property":"og:title","content":"20A. VPC 생성하기"}],["meta",{"property":"og:description","content":"아마존 웹 서비스를 다루는 기술 > 20A. VPC 생성하기"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter20/2_.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-10-03T01:20:13.000Z"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"pyrasis"}],["meta",{"property":"article:tag","content":"aws"}],["meta",{"property":"article:tag","content":"amazon-web-services"}],["meta",{"property":"article:modified_time","content":"2024-10-03T01:20:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"20A. VPC 생성하기\\",\\"image\\":[\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter20/2_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter20/3_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter20/4_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter20/5_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter20/6_.png\\"],\\"dateModified\\":\\"2024-10-03T01:20:13.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1715163561000,"updatedTime":1727918413000,"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":0.62,"words":187},"filePathRelative":"aws/art-of-aws/20A.md","localizedDate":"2024년 5월 8일","excerpt":"\\n"}');export{F as comp,D as data};