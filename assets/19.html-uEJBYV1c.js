import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,a as e,t as h,b as a,w as n,e as s,r as c,o as d,d as t}from"./app-U_bew1in.js";const u={},p={id:"frontmatter-title-관련",tabindex:"-1"},f={class:"header-anchor",href:"#frontmatter-title-관련"},g={class:"table-of-contents"},b=s('<hr><h2 id="a-멀티스레드" tabindex="-1"><a class="header-anchor" href="#a-멀티스레드"><span>A. 멀티스레드</span></a></h2><h3 id="스레드의-기본-개념" tabindex="-1"><a class="header-anchor" href="#스레드의-기본-개념"><span>스레드의 기본 개념</span></a></h3><h3 id="스레드-세이프" tabindex="-1"><a class="header-anchor" href="#스레드-세이프"><span>스레드 세이프</span></a></h3><h3 id="주의사항" tabindex="-1"><a class="header-anchor" href="#주의사항"><span>주의사항</span></a></h3><h3 id="nsthread-사용해-스레드-생성" tabindex="-1"><a class="header-anchor" href="#nsthread-사용해-스레드-생성"><span><code>NSThread</code> 사용해 스레드 생성</span></a></h3><h3 id="현재-스레드" tabindex="-1"><a class="header-anchor" href="#현재-스레드"><span>현재 스레드</span></a></h3><h3 id="gui-애플리케이션과-스레드" tabindex="-1"><a class="header-anchor" href="#gui-애플리케이션과-스레드"><span>GUI 애플리케이션과 스레드</span></a></h3><hr><h2 id="b-상호-배제" tabindex="-1"><a class="header-anchor" href="#b-상호-배제"><span>B. 상호 배제</span></a></h2><h3 id="상호-배제가-필요한-예" tabindex="-1"><a class="header-anchor" href="#상호-배제가-필요한-예"><span>상호 배제가 필요한 예</span></a></h3><h3 id="락" tabindex="-1"><a class="header-anchor" href="#락"><span>락</span></a></h3><h3 id="교착-상태" tabindex="-1"><a class="header-anchor" href="#교착-상태"><span>교착 상태</span></a></h3><h3 id="락-획득-시도" tabindex="-1"><a class="header-anchor" href="#락-획득-시도"><span>락 획득 시도</span></a></h3><h3 id="조건이-있는-락" tabindex="-1"><a class="header-anchor" href="#조건이-있는-락"><span>조건이 있는 락</span></a></h3><h3 id="nsrecursivelock" tabindex="-1"><a class="header-anchor" href="#nsrecursivelock"><span><code>NSRecursiveLock</code></span></a></h3><h3 id="synchronized" tabindex="-1"><a class="header-anchor" href="#synchronized"><span><code>@synchronized</code></span></a></h3><hr><h2 id="c-오퍼레이션-객체와-병렬-처리" tabindex="-1"><a class="header-anchor" href="#c-오퍼레이션-객체와-병렬-처리"><span>C. 오퍼레이션 객체와 병렬 처리</span></a></h2><h3 id="새로운-병렬-처리-프로그래밍" tabindex="-1"><a class="header-anchor" href="#새로운-병렬-처리-프로그래밍"><span>새로운 병렬 처리 프로그래밍</span></a></h3><h3 id="nsoperation을-사용한-처리-개요" tabindex="-1"><a class="header-anchor" href="#nsoperation을-사용한-처리-개요"><span><code>NSOperation</code>을 사용한 처리 개요</span></a></h3><h3 id="nosperation과-nsoperationqueue의-간단한-사용-방법" tabindex="-1"><a class="header-anchor" href="#nosperation과-nsoperationqueue의-간단한-사용-방법"><span><code>NOSperation</code>과 <code>NSOperationQueue</code>의 간단한 사용 방법</span></a></h3><h3 id="태스크가-모두-끝날-때까지-기다리기" tabindex="-1"><a class="header-anchor" href="#태스크가-모두-끝날-때까지-기다리기"><span>태스크가 모두 끝날 때까지 기다리기</span></a></h3><h3 id="오퍼레이션-객체를-사용한-간단한-예" tabindex="-1"><a class="header-anchor" href="#오퍼레이션-객체를-사용한-간단한-예"><span>오퍼레이션 객체를 사용한 간단한 예</span></a></h3><h3 id="nsinvocationoperation-사용-방법" tabindex="-1"><a class="header-anchor" href="#nsinvocationoperation-사용-방법"><span><code>NSInvocationOperation</code> 사용 방법</span></a></h3><h3 id="nsblockoperation-사용-방법" tabindex="-1"><a class="header-anchor" href="#nsblockoperation-사용-방법"><span><code>NSBlockOperation</code> 사용 방법</span></a></h3><h3 id="nsblockoperation에-여러-블록-객체-추가" tabindex="-1"><a class="header-anchor" href="#nsblockoperation에-여러-블록-객체-추가"><span><code>NSBlockOperation</code>에 여러 블록 객체 추가</span></a></h3><h3 id="태스크-사이에-의존-관계-설정" tabindex="-1"><a class="header-anchor" href="#태스크-사이에-의존-관계-설정"><span>태스크 사이에 의존 관계 설정</span></a></h3><h3 id="태스크-에-우선순위-설정하기" tabindex="-1"><a class="header-anchor" href="#태스크-에-우선순위-설정하기"><span>태스크 에 우선순위 설정하기</span></a></h3><h3 id="병렬로-동작하는-태스크의-최대수-설정하기" tabindex="-1"><a class="header-anchor" href="#병렬로-동작하는-태스크의-최대수-설정하기"><span>병렬로 동작하는 태스크의 최대수 설정하기</span></a></h3><h3 id="태스크-중지하기" tabindex="-1"><a class="header-anchor" href="#태스크-중지하기"><span>태스크 중지하기</span></a></h3><h3 id="큐-스케줄링을-중단-상태로-만들기" tabindex="-1"><a class="header-anchor" href="#큐-스케줄링을-중단-상태로-만들기"><span>큐 스케줄링을 중단 상태로 만들기</span></a></h3><hr><h2 id="d-병렬-처리의-예제-프로그램" tabindex="-1"><a class="header-anchor" href="#d-병렬-처리의-예제-프로그램"><span>D. 병렬 처리의 예제 프로그램</span></a></h2><h3 id="프로그램-개요" tabindex="-1"><a class="header-anchor" href="#프로그램-개요"><span>프로그램 개요</span></a></h3><h3 id="클래스-browsingviewerctrl" tabindex="-1"><a class="header-anchor" href="#클래스-browsingviewerctrl"><span>클래스 <code>BrowsingViewerCtrl</code></span></a></h3><h3 id="클래스-browsingwinctrl" tabindex="-1"><a class="header-anchor" href="#클래스-browsingwinctrl"><span>클래스 <code>BrowsingWinCtrl</code></span></a></h3><h3 id="클래스-drawoperation" tabindex="-1"><a class="header-anchor" href="#클래스-drawoperation"><span>클래스 <code>DrawOperation</code></span></a></h3><h3 id="기타-변경" tabindex="-1"><a class="header-anchor" href="#기타-변경"><span>기타 변경</span></a></h3><hr><h2 id="e-커넥션을-사용한-통신" tabindex="-1"><a class="header-anchor" href="#e-커넥션을-사용한-통신"><span>E. 커넥션을 사용한 통신</span></a></h2><h3 id="커넥션" tabindex="-1"><a class="header-anchor" href="#커넥션"><span>커넥션</span></a></h3><h3 id="프록시" tabindex="-1"><a class="header-anchor" href="#프록시"><span>프록시</span></a></h3><h3 id="메서드의-포인터-인수" tabindex="-1"><a class="header-anchor" href="#메서드의-포인터-인수"><span>메서드의 포인터 인수</span></a></h3><h3 id="객체의-복사-전달" tabindex="-1"><a class="header-anchor" href="#객체의-복사-전달"><span>객체의 복사 전달</span></a></h3><h3 id="비동기-메시지" tabindex="-1"><a class="header-anchor" href="#비동기-메시지"><span>비동기 메시지</span></a></h3><h3 id="프로토콜-설정" tabindex="-1"><a class="header-anchor" href="#프로토콜-설정"><span>프로토콜 설정</span></a></h3><h3 id="실행-반복의-시작" tabindex="-1"><a class="header-anchor" href="#실행-반복의-시작"><span>실행 반복의 시작</span></a></h3><h3 id="메시지-송-수신-동작" tabindex="-1"><a class="header-anchor" href="#메시지-송-수신-동작"><span>메시지 송.수신 동작</span></a></h3><h3 id="스레드-사이의-커넥션" tabindex="-1"><a class="header-anchor" href="#스레드-사이의-커넥션"><span>스레드 사이의 커넥션</span></a></h3><h3 id="프로세스-사이의-커넥션" tabindex="-1"><a class="header-anchor" href="#프로세스-사이의-커넥션"><span>프로세스 사이의 커넥션</span></a></h3><h3 id="프로세스-사이의-커넥션-예제" tabindex="-1"><a class="header-anchor" href="#프로세스-사이의-커넥션-예제"><span>프로세스 사이의 커넥션 예제</span></a></h3><hr>',53);function k(i,v){const l=c("router-link");return d(),o("div",null,[e("h1",p,[e("a",f,[e("span",null,h(i.$frontmatter.title)+" 관련",1)])]),e("nav",g,[e("ul",null,[e("li",null,[a(l,{to:"#a-멀티스레드"},{default:n(()=>[t("A. 멀티스레드")]),_:1}),e("ul",null,[e("li",null,[a(l,{to:"#스레드의-기본-개념"},{default:n(()=>[t("스레드의 기본 개념")]),_:1})]),e("li",null,[a(l,{to:"#스레드-세이프"},{default:n(()=>[t("스레드 세이프")]),_:1})]),e("li",null,[a(l,{to:"#주의사항"},{default:n(()=>[t("주의사항")]),_:1})]),e("li",null,[a(l,{to:"#nsthread-사용해-스레드-생성"},{default:n(()=>[t("NSThread 사용해 스레드 생성")]),_:1})]),e("li",null,[a(l,{to:"#현재-스레드"},{default:n(()=>[t("현재 스레드")]),_:1})]),e("li",null,[a(l,{to:"#gui-애플리케이션과-스레드"},{default:n(()=>[t("GUI 애플리케이션과 스레드")]),_:1})])])]),e("li",null,[a(l,{to:"#b-상호-배제"},{default:n(()=>[t("B. 상호 배제")]),_:1}),e("ul",null,[e("li",null,[a(l,{to:"#상호-배제가-필요한-예"},{default:n(()=>[t("상호 배제가 필요한 예")]),_:1})]),e("li",null,[a(l,{to:"#락"},{default:n(()=>[t("락")]),_:1})]),e("li",null,[a(l,{to:"#교착-상태"},{default:n(()=>[t("교착 상태")]),_:1})]),e("li",null,[a(l,{to:"#락-획득-시도"},{default:n(()=>[t("락 획득 시도")]),_:1})]),e("li",null,[a(l,{to:"#조건이-있는-락"},{default:n(()=>[t("조건이 있는 락")]),_:1})]),e("li",null,[a(l,{to:"#nsrecursivelock"},{default:n(()=>[t("NSRecursiveLock")]),_:1})]),e("li",null,[a(l,{to:"#synchronized"},{default:n(()=>[t("@synchronized")]),_:1})])])]),e("li",null,[a(l,{to:"#c-오퍼레이션-객체와-병렬-처리"},{default:n(()=>[t("C. 오퍼레이션 객체와 병렬 처리")]),_:1}),e("ul",null,[e("li",null,[a(l,{to:"#새로운-병렬-처리-프로그래밍"},{default:n(()=>[t("새로운 병렬 처리 프로그래밍")]),_:1})]),e("li",null,[a(l,{to:"#nsoperation을-사용한-처리-개요"},{default:n(()=>[t("NSOperation을 사용한 처리 개요")]),_:1})]),e("li",null,[a(l,{to:"#nosperation과-nsoperationqueue의-간단한-사용-방법"},{default:n(()=>[t("NOSperation과 NSOperationQueue의 간단한 사용 방법")]),_:1})]),e("li",null,[a(l,{to:"#태스크가-모두-끝날-때까지-기다리기"},{default:n(()=>[t("태스크가 모두 끝날 때까지 기다리기")]),_:1})]),e("li",null,[a(l,{to:"#오퍼레이션-객체를-사용한-간단한-예"},{default:n(()=>[t("오퍼레이션 객체를 사용한 간단한 예")]),_:1})]),e("li",null,[a(l,{to:"#nsinvocationoperation-사용-방법"},{default:n(()=>[t("NSInvocationOperation 사용 방법")]),_:1})]),e("li",null,[a(l,{to:"#nsblockoperation-사용-방법"},{default:n(()=>[t("NSBlockOperation 사용 방법")]),_:1})]),e("li",null,[a(l,{to:"#nsblockoperation에-여러-블록-객체-추가"},{default:n(()=>[t("NSBlockOperation에 여러 블록 객체 추가")]),_:1})]),e("li",null,[a(l,{to:"#태스크-사이에-의존-관계-설정"},{default:n(()=>[t("태스크 사이에 의존 관계 설정")]),_:1})]),e("li",null,[a(l,{to:"#태스크-에-우선순위-설정하기"},{default:n(()=>[t("태스크 에 우선순위 설정하기")]),_:1})]),e("li",null,[a(l,{to:"#병렬로-동작하는-태스크의-최대수-설정하기"},{default:n(()=>[t("병렬로 동작하는 태스크의 최대수 설정하기")]),_:1})]),e("li",null,[a(l,{to:"#태스크-중지하기"},{default:n(()=>[t("태스크 중지하기")]),_:1})]),e("li",null,[a(l,{to:"#큐-스케줄링을-중단-상태로-만들기"},{default:n(()=>[t("큐 스케줄링을 중단 상태로 만들기")]),_:1})])])]),e("li",null,[a(l,{to:"#d-병렬-처리의-예제-프로그램"},{default:n(()=>[t("D. 병렬 처리의 예제 프로그램")]),_:1}),e("ul",null,[e("li",null,[a(l,{to:"#프로그램-개요"},{default:n(()=>[t("프로그램 개요")]),_:1})]),e("li",null,[a(l,{to:"#클래스-browsingviewerctrl"},{default:n(()=>[t("클래스 BrowsingViewerCtrl")]),_:1})]),e("li",null,[a(l,{to:"#클래스-browsingwinctrl"},{default:n(()=>[t("클래스 BrowsingWinCtrl")]),_:1})]),e("li",null,[a(l,{to:"#클래스-drawoperation"},{default:n(()=>[t("클래스 DrawOperation")]),_:1})]),e("li",null,[a(l,{to:"#기타-변경"},{default:n(()=>[t("기타 변경")]),_:1})])])]),e("li",null,[a(l,{to:"#e-커넥션을-사용한-통신"},{default:n(()=>[t("E. 커넥션을 사용한 통신")]),_:1}),e("ul",null,[e("li",null,[a(l,{to:"#커넥션"},{default:n(()=>[t("커넥션")]),_:1})]),e("li",null,[a(l,{to:"#프록시"},{default:n(()=>[t("프록시")]),_:1})]),e("li",null,[a(l,{to:"#메서드의-포인터-인수"},{default:n(()=>[t("메서드의 포인터 인수")]),_:1})]),e("li",null,[a(l,{to:"#객체의-복사-전달"},{default:n(()=>[t("객체의 복사 전달")]),_:1})]),e("li",null,[a(l,{to:"#비동기-메시지"},{default:n(()=>[t("비동기 메시지")]),_:1})]),e("li",null,[a(l,{to:"#프로토콜-설정"},{default:n(()=>[t("프로토콜 설정")]),_:1})]),e("li",null,[a(l,{to:"#실행-반복의-시작"},{default:n(()=>[t("실행 반복의 시작")]),_:1})]),e("li",null,[a(l,{to:"#메시지-송-수신-동작"},{default:n(()=>[t("메시지 송.수신 동작")]),_:1})]),e("li",null,[a(l,{to:"#스레드-사이의-커넥션"},{default:n(()=>[t("스레드 사이의 커넥션")]),_:1})]),e("li",null,[a(l,{to:"#프로세스-사이의-커넥션"},{default:n(()=>[t("프로세스 사이의 커넥션")]),_:1})]),e("li",null,[a(l,{to:"#프로세스-사이의-커넥션-예제"},{default:n(()=>[t("프로세스 사이의 커넥션 예제")]),_:1})])])])])]),b])}const m=r(u,[["render",k],["__file","19.html.vue"]]),w=JSON.parse('{"path":"/swift/shuokai-objc/19.html","title":"19. 병렬 프로그래밍","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"19. 병렬 프로그래밍","description":"OSX 구조를 이해하면서 배우는 Objective-C > 19. 병렬 프로그래밍","category":["Objective-C"],"tag":["crashcourse","xcode","objective-c","objc"],"head":[[{"meta":null},{"property":"og:title","content":"OSX 구조를 이해하면서 배우는 Objective-C > 19. 병렬 프로그래밍"},{"property":"og:description","content":"19. 병렬 프로그래밍"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/swift/shuokai-objc/19.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/crashcourse/swift/shuokai-objc/19.html"}],["meta",{"property":"og:site_name","content":"🥁Crashcourse"}],["meta",{"property":"og:title","content":"19. 병렬 프로그래밍"}],["meta",{"property":"og:description","content":"OSX 구조를 이해하면서 배우는 Objective-C > 19. 병렬 프로그래밍"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-10-03T01:20:13.000Z"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"objective-c"}],["meta",{"property":"article:tag","content":"objc"}],["meta",{"property":"article:modified_time","content":"2024-10-03T01:20:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"19. 병렬 프로그래밍\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-03T01:20:13.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"A. 멀티스레드","slug":"a-멀티스레드","link":"#a-멀티스레드","children":[{"level":3,"title":"스레드의 기본 개념","slug":"스레드의-기본-개념","link":"#스레드의-기본-개념","children":[]},{"level":3,"title":"스레드 세이프","slug":"스레드-세이프","link":"#스레드-세이프","children":[]},{"level":3,"title":"주의사항","slug":"주의사항","link":"#주의사항","children":[]},{"level":3,"title":"NSThread 사용해 스레드 생성","slug":"nsthread-사용해-스레드-생성","link":"#nsthread-사용해-스레드-생성","children":[]},{"level":3,"title":"현재 스레드","slug":"현재-스레드","link":"#현재-스레드","children":[]},{"level":3,"title":"GUI 애플리케이션과 스레드","slug":"gui-애플리케이션과-스레드","link":"#gui-애플리케이션과-스레드","children":[]}]},{"level":2,"title":"B. 상호 배제","slug":"b-상호-배제","link":"#b-상호-배제","children":[{"level":3,"title":"상호 배제가 필요한 예","slug":"상호-배제가-필요한-예","link":"#상호-배제가-필요한-예","children":[]},{"level":3,"title":"락","slug":"락","link":"#락","children":[]},{"level":3,"title":"교착 상태","slug":"교착-상태","link":"#교착-상태","children":[]},{"level":3,"title":"락 획득 시도","slug":"락-획득-시도","link":"#락-획득-시도","children":[]},{"level":3,"title":"조건이 있는 락","slug":"조건이-있는-락","link":"#조건이-있는-락","children":[]},{"level":3,"title":"NSRecursiveLock","slug":"nsrecursivelock","link":"#nsrecursivelock","children":[]},{"level":3,"title":"@synchronized","slug":"synchronized","link":"#synchronized","children":[]}]},{"level":2,"title":"C. 오퍼레이션 객체와 병렬 처리","slug":"c-오퍼레이션-객체와-병렬-처리","link":"#c-오퍼레이션-객체와-병렬-처리","children":[{"level":3,"title":"새로운 병렬 처리 프로그래밍","slug":"새로운-병렬-처리-프로그래밍","link":"#새로운-병렬-처리-프로그래밍","children":[]},{"level":3,"title":"NSOperation을 사용한 처리 개요","slug":"nsoperation을-사용한-처리-개요","link":"#nsoperation을-사용한-처리-개요","children":[]},{"level":3,"title":"NOSperation과 NSOperationQueue의 간단한 사용 방법","slug":"nosperation과-nsoperationqueue의-간단한-사용-방법","link":"#nosperation과-nsoperationqueue의-간단한-사용-방법","children":[]},{"level":3,"title":"태스크가 모두 끝날 때까지 기다리기","slug":"태스크가-모두-끝날-때까지-기다리기","link":"#태스크가-모두-끝날-때까지-기다리기","children":[]},{"level":3,"title":"오퍼레이션 객체를 사용한 간단한 예","slug":"오퍼레이션-객체를-사용한-간단한-예","link":"#오퍼레이션-객체를-사용한-간단한-예","children":[]},{"level":3,"title":"NSInvocationOperation 사용 방법","slug":"nsinvocationoperation-사용-방법","link":"#nsinvocationoperation-사용-방법","children":[]},{"level":3,"title":"NSBlockOperation 사용 방법","slug":"nsblockoperation-사용-방법","link":"#nsblockoperation-사용-방법","children":[]},{"level":3,"title":"NSBlockOperation에 여러 블록 객체 추가","slug":"nsblockoperation에-여러-블록-객체-추가","link":"#nsblockoperation에-여러-블록-객체-추가","children":[]},{"level":3,"title":"태스크 사이에 의존 관계 설정","slug":"태스크-사이에-의존-관계-설정","link":"#태스크-사이에-의존-관계-설정","children":[]},{"level":3,"title":"태스크 에 우선순위 설정하기","slug":"태스크-에-우선순위-설정하기","link":"#태스크-에-우선순위-설정하기","children":[]},{"level":3,"title":"병렬로 동작하는 태스크의 최대수 설정하기","slug":"병렬로-동작하는-태스크의-최대수-설정하기","link":"#병렬로-동작하는-태스크의-최대수-설정하기","children":[]},{"level":3,"title":"태스크 중지하기","slug":"태스크-중지하기","link":"#태스크-중지하기","children":[]},{"level":3,"title":"큐 스케줄링을 중단 상태로 만들기","slug":"큐-스케줄링을-중단-상태로-만들기","link":"#큐-스케줄링을-중단-상태로-만들기","children":[]}]},{"level":2,"title":"D. 병렬 처리의 예제 프로그램","slug":"d-병렬-처리의-예제-프로그램","link":"#d-병렬-처리의-예제-프로그램","children":[{"level":3,"title":"프로그램 개요","slug":"프로그램-개요","link":"#프로그램-개요","children":[]},{"level":3,"title":"클래스 BrowsingViewerCtrl","slug":"클래스-browsingviewerctrl","link":"#클래스-browsingviewerctrl","children":[]},{"level":3,"title":"클래스 BrowsingWinCtrl","slug":"클래스-browsingwinctrl","link":"#클래스-browsingwinctrl","children":[]},{"level":3,"title":"클래스 DrawOperation","slug":"클래스-drawoperation","link":"#클래스-drawoperation","children":[]},{"level":3,"title":"기타 변경","slug":"기타-변경","link":"#기타-변경","children":[]}]},{"level":2,"title":"E. 커넥션을 사용한 통신","slug":"e-커넥션을-사용한-통신","link":"#e-커넥션을-사용한-통신","children":[{"level":3,"title":"커넥션","slug":"커넥션","link":"#커넥션","children":[]},{"level":3,"title":"프록시","slug":"프록시","link":"#프록시","children":[]},{"level":3,"title":"메서드의 포인터 인수","slug":"메서드의-포인터-인수","link":"#메서드의-포인터-인수","children":[]},{"level":3,"title":"객체의 복사 전달","slug":"객체의-복사-전달","link":"#객체의-복사-전달","children":[]},{"level":3,"title":"비동기 메시지","slug":"비동기-메시지","link":"#비동기-메시지","children":[]},{"level":3,"title":"프로토콜 설정","slug":"프로토콜-설정","link":"#프로토콜-설정","children":[]},{"level":3,"title":"실행 반복의 시작","slug":"실행-반복의-시작","link":"#실행-반복의-시작","children":[]},{"level":3,"title":"메시지 송.수신 동작","slug":"메시지-송-수신-동작","link":"#메시지-송-수신-동작","children":[]},{"level":3,"title":"스레드 사이의 커넥션","slug":"스레드-사이의-커넥션","link":"#스레드-사이의-커넥션","children":[]},{"level":3,"title":"프로세스 사이의 커넥션","slug":"프로세스-사이의-커넥션","link":"#프로세스-사이의-커넥션","children":[]},{"level":3,"title":"프로세스 사이의 커넥션 예제","slug":"프로세스-사이의-커넥션-예제","link":"#프로세스-사이의-커넥션-예제","children":[]}]}],"git":{"createdTime":1706172246000,"updatedTime":1727918413000,"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":6}]},"readingTime":{"minutes":0.21,"words":62},"filePathRelative":"swift/shuokai-objc/19.md","localizedDate":"2024년 1월 25일","excerpt":"\\n\\n<hr>\\n<h2>A. 멀티스레드</h2>\\n<h3>스레드의 기본 개념</h3>\\n<h3>스레드 세이프</h3>\\n<h3>주의사항</h3>\\n<h3><code>NSThread</code> 사용해 스레드 생성</h3>\\n<h3>현재 스레드</h3>\\n<h3>GUI 애플리케이션과 스레드</h3>\\n<hr>\\n<h2>B. 상호 배제</h2>\\n<h3>상호 배제가 필요한 예</h3>\\n<h3>락</h3>\\n<h3>교착 상태</h3>\\n<h3>락 획득 시도</h3>\\n<h3>조건이 있는 락</h3>\\n<h3><code>NSRecursiveLock</code></h3>"}');export{m as comp,w as data};