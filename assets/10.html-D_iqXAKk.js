import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as u,a as t,t as h,b as o,n as i,g as s,d as e,e as r,r as n,o as d}from"./app-U_bew1in.js";const g={},m={id:"frontmatter-title-관련",tabindex:"-1"},f={class:"header-anchor",href:"#frontmatter-title-관련"},S=t("nav",{class:"table-of-contents"},[t("ul")],-1),_=t("hr",null,null,-1),A=r('<p>CloudWatch는 AWS 리소스의 상태를 모니터링 하는 서비스입니다. 모니터링뿐만 아니라 측정치<sup>Metric</sup>와 연계하여 다양한 액션<sup>Action</sup>을 사용할 수 있습니다.</p><div class="hint-container info"><p class="hint-container-title">프리 티어에서 사용 가능</p><p>CloudWatch는 프리 티어에서 무료로 사용가능 합니다. 2014년 8월 기준으로 기본 모니터링(5분 주기), 측정치(Metric) 10개, 알람(Alarm) 10개, 매달 API 요청 1,000,000건을 무료로 사용할 수 있습니다.</p></div><p>CloudWatch는 EC2 인스턴스가 이상이 있을 경우 알림을 받고자 할 때, 사용량이 급증했을 때 자동으로 횡적 확장<sup>Auto</sup> <sup>Scaling</sup>을 하고 부하 분산<sup>Elastic</sup> <sup>Load</sup> Balancing^을 구축할 때 사용합니다. ELB와 Auto Scaling 사용 방법은 뒤에서 자세히 설명하겠습니다.</p><figure><img src="https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter10/1.png" alt="EC2 인스턴스와 CloudWatch 액션" tabindex="0" loading="lazy"><figcaption>EC2 인스턴스와 CloudWatch 액션</figcaption></figure>',4),C=t("sup",null,"Custom",-1),W=t("sup",null,"Metric",-1),y={href:"https://aws.amazon.com/ko/ec2/pricing/",target:"_blank",rel:"noopener noreferrer"},b=r("<ul><li><strong>EC2 인스턴스</strong>: CPU 사용률, 데이터 전송량, 디스크 사용량 등을 모니터링할 수 있습니다. 측정치와 연계하여 알림(Notification), 자동 횡적 확장(Auto Scaling), EC2 인스턴스 제어 액션을 사용할 수 있습니다.</li><li><strong>EBS 볼륨</strong>: 읽기/쓰기 사용량, 지연 시간 등을 모니터링할 수 있습니다. 측정치와 연계하여 알림(Notification), 자동 횡적 확장(Auto Scaling) 액션을 사용할 수 있습니다.</li><li><strong>ELB(Elastic Load Balancing)</strong>: 요청 수 및 지연 시간 등을 모니터링할 수 있습니다. 측정치와 연계하여 알림(Notification), 자동 횡적 확장(Auto Scaling) 액션을 사용할 수 있습니다.</li><li><strong>RDS(Relational Database Service)</strong>: CPU 사용률, DB 연결 수, 사용 가능한 메모리 및 스토리지 공간, 읽기/쓰기 지연 시간 등을 모니터링할 수 있습니다. 측정치와 연계하여 알림(Notification), 자동 횡적 확장(Auto Scaling) 액션을 사용할 수 있습니다.</li><li><strong>DynamoDB</strong>: 테이블 인덱스와 글로벌, 로컬 보조 인덱스에서 소모한 읽기/쓰기 용량 유닛, 스캔, 쿼리, 아이템 추가 및 수정(PutItem), 아이템 삭제(Delete)를 모니터링 할 수 있습니다. 측정치와 연계하여 알림(Notification), 자동 횡적 확장(Auto Scaling) 액션을 사용할 수 있습니다.</li><li><strong>ElastiCache</strong>: CPU 사용률, 데이터 읽기/쓰기, 네트워크 사용량, 캐시 엔진의 각 명령어 사용량 등을 모니터링 할 수 있습니다. 측정치와 연계하여 알림(Notification), 자동 횡적 확장(Auto Scaling) 액션을 사용할 수 있습니다.</li><li><strong>SNS(Simple Notification Service)</strong>: 게시(Published) 및 전송(Delivered) 메시지 수 등을 모니터링할 수 있습니다. 측정치와 연계하여 알림(Notification), 자동 횡적 확장(Auto Scaling) 액션을 사용할 수 있습니다.</li><li><strong>SQS(Simple Queue Service)</strong>: 전송(Send) 및 수신(Received) 된 메시지 수 등을 모니터링할 수 있습니다. 측정치와 연계하여 알림(Notification), 자동 횡적 확장(Auto Scaling) 액션을 사용할 수 있습니다.</li></ul><p>이번에는 EC2 인스턴스를 예로 들어 모니터링 하는 방법과 커스텀 측정치를 사용하는 방법을 알아보겠습니다.</p>",2),v=t("hr",null,null,-1);function w(c,k){const a=n("VPCard"),l=n("FontIcon");return d(),u("div",null,[t("h1",m,[t("a",f,[t("span",null,h(c.$frontmatter.title)+" 관련",1)])]),o(a,i(s({title:"목차",desc:"아마존 웹 서비스를 다루는 기술",link:"/aws/art-of-aws/README.md",logo:"https://pyrasis.com/assets/images/pyrasis.png",background:"rgba(31,41,55,0.2)"})),null,16),S,_,o(a,i(s({title:"10장. AWS 리소스의 상태를 모니터링하는 CloudWatch",desc:"아마존 웹 서비스를 다루는 기술",link:"https://pyrasis.com/book/TheArtOfAmazonWebServices/Chapter10",logo:"https://pyrasis.com/favicon.ico",background:"rgba(31,41,55,0.2)"})),null,16),A,t("p",null,[e("CloudWatch에서는 각 AWS 리소스의 특징에 따라 다양한 값들을 모니터링할 수 있습니다. CloudWatch이 제공하는 측정목록 이외에도 사용자가 직접 생성한 커스텀 측정치"),C,e(),W,e("도 사용할 수 있습니다. 기본 모니터링 간격은 5분이며 세부 모니터링 간격은 1분입니다. 기본 모니터링은 프리 티어에서 무료로 사용할 수 있으며 세부 모니터링은 추가 요금을 지불해야 합니다. 자세한 요금은 "),t("a",y,[o(l,{icon:"fa-brands fa-aws"}),e("AWS 사이트의 요금표")]),e("를 참조하기 바랍니다.")]),b,o(a,i(s({title:"10장 - 1. CloudWatch 알람 생성하기",desc:"아마존 웹 서비스를 다루는 기술",link:"10A.md",logo:"https://pyrasis.com/favicon.ico",background:"rgba(31,41,55,0.2)"})),null,16),o(a,i(s({title:"10장 - 2. CloudWatch 커스텀 측정치 사용하기",desc:"아마존 웹 서비스를 다루는 기술",link:"10B.md",logo:"https://pyrasis.com/favicon.ico",background:"rgba(31,41,55,0.2)"})),null,16),v])}const B=p(g,[["render",w],["__file","10.html.vue"]]),P=JSON.parse('{"path":"/aws/art-of-aws/10.html","title":"10. AWS 리소스의 상태를 모니터링하는 CloudWatch","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"10. AWS 리소스의 상태를 모니터링하는 CloudWatch","description":"아마존 웹 서비스를 다루는 기술 > 10. AWS 리소스의 상태를 모니터링하는 CloudWatch","category":["AWS"],"tag":["crashcourse","pyrasis","aws","amazon-web-services"],"head":[[{"meta":null},{"property":"og:title","content":"아마존 웹 서비스를 다루는 기술 > 10. AWS 리소스의 상태를 모니터링하는 CloudWatch"},{"property":"og:description","content":"10. AWS 리소스의 상태를 모니터링하는 CloudWatch"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/aws/art-of-aws/10.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/crashcourse/aws/art-of-aws/10.html"}],["meta",{"property":"og:site_name","content":"🥁Crashcourse"}],["meta",{"property":"og:title","content":"10. AWS 리소스의 상태를 모니터링하는 CloudWatch"}],["meta",{"property":"og:description","content":"아마존 웹 서비스를 다루는 기술 > 10. AWS 리소스의 상태를 모니터링하는 CloudWatch"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter10/1.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-10-03T01:20:13.000Z"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"pyrasis"}],["meta",{"property":"article:tag","content":"aws"}],["meta",{"property":"article:tag","content":"amazon-web-services"}],["meta",{"property":"article:modified_time","content":"2024-10-03T01:20:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"10. AWS 리소스의 상태를 모니터링하는 CloudWatch\\",\\"image\\":[\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter10/1.png\\"],\\"dateModified\\":\\"2024-10-03T01:20:13.000Z\\",\\"author\\":[]}"]],"prev":"/aws/art-of-aws/09.md"},"headers":[],"git":{"createdTime":1703642364000,"updatedTime":1727918413000,"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":4}]},"readingTime":{"minutes":0.86,"words":259},"filePathRelative":"aws/art-of-aws/10.md","localizedDate":"2023년 12월 27일","excerpt":"\\n"}');export{B as comp,P as data};