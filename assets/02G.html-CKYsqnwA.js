import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,a as n,t as k,b as a,w as o,n as m,g as h,d as s,e,r as p,o as g}from"./app-U_bew1in.js";const v={},b={id:"frontmatter-title-관련",tabindex:"-1"},_={class:"header-anchor",href:"#frontmatter-title-관련"},q={class:"table-of-contents"},f=n("hr",null,null,-1),y=n("hr",null,null,-1),w={href:"https://github.com/pahkey/sbb3/tree/2-07",target:"_blank",rel:"noopener noreferrer"},j=n("code",null,"pahkey/sbb3",-1),x=n("code",null,"2-07",-1),C=n("p",null,"이번 장에서는 SBB의 핵심 기능인 질문 목록을 구현할 것이다. 그럼 시작해 보자.",-1),G=n("p",null,[s("우리가 원하는 질문 목록은 다음 주소에 접속할 때 동작해야 한다. 로컬 서버를 실행하고 웹 브라우저에서 "),n("code",null,"http://localhost:8080/question/list"),s("에 접속해 보자.")],-1),L=n("figure",null,[n("img",{src:"https://wikidocs.net/images/page/161186/O_2-07_1.png",alt:"아마 다음과 같은 404 오류페이지가 나타날 것이다.",tabindex:"0",loading:"lazy"}),n("figcaption",null,"아마 다음과 같은 404 오류페이지가 나타날 것이다.")],-1),M=n("hr",null,null,-1),R=n("h2",{id:"_404-오류-해결하기",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_404-오류-해결하기"},[n("span",null,"404 오류 해결하기")])],-1),S=n("code",null,"/question/list",-1),A=n("code",null,"QuestionController.java",-1),Q=n("code",null,"/sbb/src/main/java/com/mysite/sbb/question",-1),$=n("code",null,"QuestionController.java",-1),T=e(`<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>mysite<span class="token punctuation">.</span>sbb<span class="token punctuation">.</span>question</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Controller</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">GetMapping</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">ResponseBody</span></span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token annotation punctuation">@Controller</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">QuestionController</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/question/list&quot;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token annotation punctuation">@ResponseBody</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token string">&quot;question list&quot;</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이렇게 수정하고 다시 <code>http://localhost:8080/question/list</code>에 접속하면 화면에 &quot;question list&quot; 문자열이 출력될 것이다.</p><hr><h2 id="템플릿-설정하기" tabindex="-1"><a class="header-anchor" href="#템플릿-설정하기"><span>템플릿 설정하기</span></a></h2><p>하지만 보통 브라우저에 응답하는 문자열은 위의 예처럼 자바 코드에서 직접 만들지는 않는다.</p><blockquote><p>위에서는 &quot;question list&quot; 라는 문자열을 직접 자바 코드로 작성하여 브라우저에 리턴했다.</p></blockquote><p>일반적으로 많이 사용하는 방식은 템플릿 방식이다. 템플릿은 자바 코드를 삽입할 수 있는 HTML 형식의 파일이다.</p><p>템플릿을 어떻게 사용할수 있는지 알아보자. 스프링부트에서 사용할수 있는 템플릿 엔진에는 Thymeleaf, Mustache, Groovy, Freemarker, Velocity 등이 있다. 이 책에서는 스프링 진영에서 추천하는 타임리프(Thymleaf) 템플릿 엔진을 사용할 것이다.</p><ul><li>타임리프 - <a href="https://www.thymeleaf.org" target="_blank" rel="noopener noreferrer">https://www.thymeleaf.org</a></li></ul><p>타임리프를 사용하려면 설치가 필요하다. 다음과 같이 <code>build.gradle</code> 파일을 수정하자.</p>`,10),B=n("code",null,"/sbb/",-1),V=n("code",null,"build.gradle",-1),z=e(`<div class="language-groovy line-numbers-mode" data-highlighter="prismjs" data-ext="groovy" data-title="groovy"><pre><code><span class="line"><span class="token comment">// (... 생략 ...)</span></span>
<span class="line"></span>
<span class="line">dependencies <span class="token punctuation">{</span></span>
<span class="line"><span class="token comment">//  (... 생략 ...)</span></span>
<span class="line highlighted">    implementation <span class="token interpolation-string"><span class="token string">&quot;org.springframework.boot:spring-boot-starter-thymeleaf&quot;</span></span></span>
<span class="line highlighted">    implementation <span class="token interpolation-string"><span class="token string">&quot;nz.net.ultraq.thymeleaf:thymeleaf-layout-dialect&quot;</span></span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// (... 생략 ...)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위와 같이 수정하고 <code>[&quot;Refresh Gradle Project&quot;]</code>로 필요한 라이브러리를 설치하자.</p><blockquote><p>타임리프 템플릿 엔진을 적용하기 위해서는 로컬서버 재시작이 필요하다. 로컬서버를 반드시 재시작하고 이후 과정을 진행하자.</p></blockquote><hr><h2 id="템플릿-사용하기" tabindex="-1"><a class="header-anchor" href="#템플릿-사용하기"><span>템플릿 사용하기</span></a></h2>`,5),O=n("img",{src:"https://wikidocs.net/images/page/161186/C_2-07_2.png",alt:'그리고 다음의 경로에 <FontIcon icon="fa-brands fa-html5"/> 템플릿 파일을 신규로 작성하자.',tabindex:"0",loading:"lazy"},null,-1),D=n("code",null,"question_list.html",-1),P=n("code",null,"question_list.html",-1),I=n("code",null,"/sbb/src/main/resources/templates/",-1),N=n("code",null,"question_list.html",-1),F=e(`<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>Hello Template<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,1),J=n("code",null,"question_list.html",-1),H=n("code",null,"QuestionController",-1),K=e(`<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>mysite<span class="token punctuation">.</span>sbb<span class="token punctuation">.</span>question</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Controller</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">GetMapping</span></span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token annotation punctuation">@Controller</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">QuestionController</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line highlighted">    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/question/list&quot;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token comment">// @ResponseBody</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token string">&quot;question_list&quot;</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>리턴 문자열은 &quot;question list&quot;가 아닌 &quot;question_list&quot; 임에 주의하자.</p></blockquote>`,2),W=n("code",null,"@ResponseBody",-1),Z=n("code",null,"question_list.html",-1),E=n("code",null,"question_list",-1),U=n("p",null,[s("그리고 다시 "),n("code",null,"http://localhost:8080/question/list"),s("에 접속해 보자.")],-1),X=n("img",{src:"https://wikidocs.net/images/page/161186/O_2-07_3.png",alt:'우리가 <FontIcon icon="fa-brands fa-html5"/> 파일에 작성한  내용이 브라우저에 출력되는 것을 확인할 수 있다.',tabindex:"0",loading:"lazy"},null,-1),Y=n("code",null,"question_list.html",-1),nn=n("code",null,"<h2>Hello Template</h2>",-1),sn=n("hr",null,null,-1),an=n("h2",{id:"데이터-조회하여-템플릿에-전달하기",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#데이터-조회하여-템플릿에-전달하기"},[n("span",null,"데이터 조회하여 템플릿에 전달하기")])],-1),tn=n("p",null,"템플릿의 내용을 화면에 전달하는 것은 성공했다. 이제 템플릿에 질문 목록을 조회하여 출력해 보자. 질문 목록을 조회하기 위해서는 Question 리포지터리를 사용해야 한다. Question 리포지터리로 조회한 질문 목록은 Model 클래스를 사용하여 템플릿에 전달할수 있다. 예제를 통해 알아보자.",-1),en=n("p",null,[s("다음과 같이 "),n("code",null,"QuestionController"),s("를 수정하자.")],-1),ln=n("code",null,"/sbb/src/main/java/com/mysite/sbb/question/",-1),on=n("code",null,"QuestionController.java",-1),pn=e(`<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>mysite<span class="token punctuation">.</span>sbb<span class="token punctuation">.</span>question</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line highlighted"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Controller</span></span><span class="token punctuation">;</span></span>
<span class="line highlighted"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>ui<span class="token punctuation">.</span></span><span class="token class-name">Model</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">GetMapping</span></span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line highlighted"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">RequiredArgsConstructor</span></span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line highlighted"><span class="token annotation punctuation">@RequiredArgsConstructor</span></span>
<span class="line"><span class="token annotation punctuation">@Controller</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">QuestionController</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line highlighted">    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">QuestionRepository</span> questionRepository<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/question/list&quot;</span><span class="token punctuation">)</span></span>
<span class="line highlighted">    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">list</span><span class="token punctuation">(</span><span class="token class-name">Model</span> model<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Question</span><span class="token punctuation">&gt;</span></span> \`questionList\` <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>questionRepository<span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line highlighted">        model<span class="token punctuation">.</span><span class="token function">addAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;\`questionList\`&quot;</span><span class="token punctuation">,</span> \`questionList\`<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line highlighted">        <span class="token keyword">return</span> <span class="token string">&quot;question_list&quot;</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>우선 <code>@RequiredArgsConstructor</code> 애너테이션으로 <code>questionRepository</code> 속성을 포함하는 생성자를 생성하였다. <code>@RequiredArgsConstructor</code>는 롬복이 제공하는 애너테이션으로 final이 붙은 속성을 포함하는 생성자를 자동으로 생성하는 역할을 한다. 롬복의 <code>@Getter</code>, <code>@Setter</code>가 자동으로 Getter, Setter 메서드를 생성하는 것과 마찬가지로 <code>@RequiredArgsConstructor</code>는 자동으로 생성자를 생성한다. 따라서 스프링 의존성 주입 규칙에 의해 <code>questionRepository</code> 객체가 자동으로 주입된다.</p>`,2),cn={class:"hint-container info"},un=n("p",{class:"hint-container-title"},"스프링의 의존성 주입(Dependency Injection) 방식 3가지",-1),dn=n("ul",null,[n("li",null,[n("code",null,"@Autowired"),s(" 속성: 속성에 "),n("code",null,"@Autowired"),s(" 애너테이션을 적용하여 객체를 주입하는 방식")]),n("li",null,"생성자: 생성자를 작성하여 객체를 주입하는 방식 (권장하는 방식)"),n("li",null,[s("Setter: Setter 메서드를 작성하여 객체를 주입하는 방식 (메서드에 "),n("code",null,"@Autowired"),s(" 애너테이션 적용이 필요하다.)")])],-1),rn=n("code",null,"SbbApplicationTests.java",-1),kn=n("code",null,"@Autowired",-1),mn=n("p",null,[s("그리고 Question 리포지터의 findAll 메서드를 사용하여 질문 목록 데이터인 "),n("code",null,"questionList"),s('를 생성하고 Model 객체에 "'),n("code",null,"questionList"),s('" 라는 이름으로 값을 저장했다. Model 객체는 자바 클래스와 템플릿 간의 연결고리 역할을 한다. Model 객체에 값을 담아두면 템플릿에서 그 값을 사용할 수 있다.')],-1),hn=n("blockquote",null,[n("p",null,"Model 객체는 따로 생성할 필요없이 컨트롤러 메서드의 매개변수로 지정하기만 하면 스프링부트가 자동으로 Model 객체를 생성한다.")],-1),gn=n("hr",null,null,-1),vn=n("h2",{id:"템플릿에서-전달받은-데이터-사용하기",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#템플릿에서-전달받은-데이터-사용하기"},[n("span",null,"템플릿에서 전달받은 데이터 사용하기")])],-1),bn=n("p",null,"Model 객체에 저장한 값을 템플릿에서 사용할 수 있다고 했다. 어떻게 사용할수 있을까? 다음과 같이 question_list.html 템플릿을 수정해 보자.",-1),_n=n("code",null,"/sbb/src/main/resources/templates/",-1),qn=n("code",null,"question_list.html",-1),fn=e(`<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>thead</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>제목<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>작성일시<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>thead</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tbody</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span> <span class="token attr-name"><span class="token namespace">th:</span>each</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>question : \${questionList}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${question.subject}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${question.createDate}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tbody</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>질문 목록을 HTML의 테이블 구조로 표시되게 하였다.</p>`,2),yn=n("code",null,'th:each="question : ${questionList}"',-1),wn=n("code",null,"th:",-1),jn=n("code",null,"question_list.html",-1),xn=e('<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span> <span class="token attr-name"><span class="token namespace">th:</span>each</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>question : ${`questionList`}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><code>QuestionController</code>의 list 메서드에서 조회한 질문 목록 데이터를 &quot;<code>questionList</code>&quot;라는 이름으로 Model 객체에 저장했다. 타임리프는 Model 객체에 저장된 값을 읽을 수 있으므로 템플릿에서 <code>questionList</code>를 사용할수 있게 되는 것이다. 위의 코드는 <code>&lt;tr&gt; ... &lt;/tr&gt;</code> 엘리먼트를 <code>questionList</code>의 갯수만큼 반복하여 출력하는 역할을 한다. 그리고 <code>questionList</code>에 저장된 데이터를 하나씩 꺼내 question 객체에 대입하여 반복구간 내에서 사용할수 있게 한다. 자바의 for each 문을 떠올리면 쉽게 이해할 수 있을 것이다.</p><p>다음 코드는 바로 앞의 for 문에서 얻은 <code>question</code> 객체의 제목을 <code>&lt;td&gt;</code> 엘리먼트의 텍스트로 출력한다.</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>${question.subject}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>다음 코드도 같은 맥락으로 이해할 수 있다.</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>${question.createDate}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>이제 브라우저에서 다시 <code>http://localhost:8080/question/list</code>에 접속해 보자.</p><figure><img src="https://wikidocs.net/images/page/161186/O_2-07_4.png" alt="그러면 다음과 같은 화면이 보일 것이다." tabindex="0" loading="lazy"><figcaption>그러면 다음과 같은 화면이 보일 것이다.</figcaption></figure><p>이전에 테스트로 등록한 질문 1건이 조회된 모습이다. 만약 테스트시 Question 데이터를 더 추가했다면 더 많은 질문이 표시될 것이다.</p><details class="hint-container details"><summary>자주 사용하는 타임리프의 속성</summary><p>타임리프의 자주 사용하는 속성에는 다음 3가지 유형이 있다. 이 3가지 유형만 알아도 여러 기능을 충분히 만들 수 있다.</p><h3 id="_1-분기문-속성" tabindex="-1"><a class="header-anchor" href="#_1-분기문-속성"><span>1. 분기문 속성</span></a></h3><p>분기문 속성은 다음과 같이 사용한다.</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line">th:if=&quot;${question != null}&quot;</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>위의 경우 question 객체가 null 이 아닌 경우에 해당 엘리먼트가 표시된다.</p><h3 id="_2-반복문-속성" tabindex="-1"><a class="header-anchor" href="#_2-반복문-속성"><span>2. 반복문 속성</span></a></h3><p>반복문은 반복횟수만큼 해당 엘리먼트를 반복하여 표시한다. 반복문 속성은 자바의 for each 문과 유사하다.</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line">th:each=&quot;question : ${`questionList`}&quot;</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>반복문은 다음과 같이 사용할 수도 있다.</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line">th:each=&quot;question, loop : ${`questionList`}&quot;</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>추가한 loop 객체를 이용하여 루프 내에서 다음과 같은 속성을 사용할수 있다.</p><ul><li><code>loop.index</code>: 반복 순서, 0부터 1씩 증가</li><li><code>loop.count</code>: 반복 순서, 1부터 1씩 증가</li><li><code>loop.size</code>: 반복 객체의 요소 갯수 (예: <code>questionList</code>의 요소 갯수)</li><li><code>loop.first</code>: 루프의 첫번째 순서인 경우 <code>true</code></li><li><code>loop.last</code>: 루프의 마지막 순서인 경우 <code>true</code></li><li><code>loop.odd</code>: 루프의 홀수번째 순서인 경우 <code>true</code></li><li><code>loop.even</code>: 루프의 짝수번째 순서인 경우 <code>true</code></li><li><code>loop.current</code>: 현재 대입된 객체 (예: 위의 경우 <code>question</code>과 동일)</li></ul><h3 id="_3-텍스트-속성" tabindex="-1"><a class="header-anchor" href="#_3-텍스트-속성"><span>3. 텍스트 속성</span></a></h3><p><code>th:text=값</code> 속성은 해당 엘리먼트의 텍스트로 &quot;값&quot;을 출력한다.</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line">th:text=&quot;${question.subject}&quot;</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>텍스트는 th:text 속성 대신에 다음처럼 대괄호를 사용하여 값을 직접 출력할수 있다.</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span> <span class="token attr-name"><span class="token namespace">th:</span>each</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>question : ${`questionList`}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>\n<span class="line highlighted">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>[[${question.subject}]]<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span></span>\n<span class="line highlighted">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>[[${question.createDate}]]<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span></span>\n<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 책에서는 새로운 타임리프 문법이 나올 때마다 자세히 설명할 것이므로 지금 당장 모든 타임리프의 속성에 대해 알아 둘 필요는 없다.</p></details><p>이상과 같이 질문 목록을 만들었다.</p><p>축하한다!!</p><hr>',13);function Cn(i,Gn){const l=p("router-link"),c=p("VPCard"),t=p("FontIcon"),u=p("VidStack");return g(),r("div",null,[n("h1",b,[n("a",_,[n("span",null,k(i.$frontmatter.title)+" 관련",1)])]),n("nav",q,[n("ul",null,[n("li",null,[a(l,{to:"#_404-오류-해결하기"},{default:o(()=>[s("404 오류 해결하기")]),_:1})]),n("li",null,[a(l,{to:"#템플릿-설정하기"},{default:o(()=>[s("템플릿 설정하기")]),_:1})]),n("li",null,[a(l,{to:"#템플릿-사용하기"},{default:o(()=>[s("템플릿 사용하기")]),_:1})]),n("li",null,[a(l,{to:"#데이터-조회하여-템플릿에-전달하기"},{default:o(()=>[s("데이터 조회하여 템플릿에 전달하기")]),_:1})]),n("li",null,[a(l,{to:"#템플릿에서-전달받은-데이터-사용하기"},{default:o(()=>[s("템플릿에서 전달받은 데이터 사용하기")]),_:1})])])]),f,a(c,m(h({title:"2-07. 질문 목록과 템플릿",desc:"점프 투 스프링부트 - WikiDocs",link:"https://wikidocs.net/161186",logo:"https://wikidocs.net/static/img/favicon.ico",background:"rgba(255,255,255,0.2)"})),null,16),y,n("blockquote",null,[n("p",null,[n("a",w,[a(t,{icon:"iconfont icon-github"}),s(),j,s(" - "),a(t,{icon:"fas fa-folder-open"}),s(),x])])]),a(u,{src:"youtube/jPj8N8WksI0"}),C,G,L,M,R,n("p",null,[s("404 오류를 해결하려면 "),S,s(" URL에 대한 매핑이 있는 컨트롤러가 필요하다. "),a(t,{icon:"fa-brands fa-java"}),A,s(" 파일을 다음과 같이 신규 작성하자.")]),n("blockquote",null,[n("p",null,[s("파일명: "),a(t,{icon:"fas fa-folder-open"}),Q,a(t,{icon:"fa-brands fa-java"}),$])]),T,n("blockquote",null,[n("p",null,[s("파일명: "),a(t,{icon:"fas fa-folder-open"}),B,a(t,{icon:"iconfont icon-engine"}),V])]),z,n("figure",null,[O,n("figcaption",null,[s("그리고 다음의 경로에 "),a(t,{icon:"fa-brands fa-html5"}),D,s(" 템플릿 파일을 신규로 작성하자.")])]),n("p",null,[s("."),a(t,{icon:"fa-brands fa-html5"}),P,s(" 파일의 내용은 다음과 같이 작성하자.")]),n("blockquote",null,[n("p",null,[s("파일명: "),a(t,{icon:"fas fa-folder-open"}),I,a(t,{icon:"fa-brands fa-html5"}),N])]),F,n("blockquote",null,[a(t,{icon:"fa-brands fa-html5"}),J,s(" 파일이 바로 템플릿 파일이다.")]),n("p",null,[s("그리고 "),a(t,{icon:"fa-brands fa-java"}),H,s("를 다음과 같이 수정하자.")]),K,n("p",null,[s("템플릿을 사용하기 때문에 기존에 사용했던 "),W,s(" 애너테이션은 필요없으므로 삭제한다. 그리고 list 메서드에서 "),a(t,{icon:"fa-brands fa-html5"}),Z,s(' 템플릿 파일의 이름인 "'),E,s('"를 리턴한다.')]),U,n("figure",null,[X,n("figcaption",null,[s("우리가 "),a(t,{icon:"fa-brands fa-html5"}),Y,s(" 파일에 작성한 "),nn,s(" 내용이 브라우저에 출력되는 것을 확인할 수 있다.")])]),sn,an,tn,en,n("blockquote",null,[n("p",null,[s("파일명: "),a(t,{icon:"fas fa-folder-open"}),ln,a(t,{icon:"fa-brands fa-java"}),on])]),pn,n("div",cn,[un,dn,n("blockquote",null,[n("p",null,[s("테스트코드("),a(t,{icon:"fa-brands fa-java"}),rn,s(")에서는 속성에 "),kn,s(" 애너테이션을 사용하여 객체를 주입했다.")])])]),mn,hn,gn,vn,bn,n("blockquote",null,[n("p",null,[s("파일명: "),a(t,{icon:"fas fa-folder-open"}),_n,a(t,{icon:"fa-brands fa-html5"}),qn])]),fn,n("p",null,[s("템플릿 파일에 입력된 "),yn,s("와 같은 특이한 표현이 눈에띌 것이다. "),wn,s(" 로 시작하는 속성은 타임리프 템플릿 엔진이 사용하는 속성이다. 바로 이 부분이 자바 코드와 연결된다. "),a(t,{icon:"fa-brands fa-html5"}),jn,s(" 파일에 사용한 타임리프 속성들을 잠시 살펴보자.")]),xn])}const Rn=d(v,[["render",Cn],["__file","02G.html.vue"]]),Sn=JSON.parse('{"path":"/java/jump-to-spring-boot/02G.html","title":"02G. 질문 목록과 템플릿","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"02G. 질문 목록과 템플릿","description":"Jump to Spring Boot > 02G. 질문 목록과 템플릿","category":["Java","Spring","AWS"],"tag":["crashcourse","java","jdk","jdk8","stream","spring","springframework","springboot","aws","aws-ec2"],"head":[[{"meta":null},{"property":"og:title","content":"Jump to Spring Boot > 02G. 질문 목록과 템플릿"},{"property":"og:description","content":"02G. 질문 목록과 템플릿"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/java/jump-to-spring-boot/02G.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/crashcourse/java/jump-to-spring-boot/02G.html"}],["meta",{"property":"og:site_name","content":"🥁Crashcourse"}],["meta",{"property":"og:title","content":"02G. 질문 목록과 템플릿"}],["meta",{"property":"og:description","content":"Jump to Spring Boot > 02G. 질문 목록과 템플릿"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://wikidocs.net/images/page/161186/O_2-07_1.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-10-03T01:20:13.000Z"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"java"}],["meta",{"property":"article:tag","content":"jdk"}],["meta",{"property":"article:tag","content":"jdk8"}],["meta",{"property":"article:tag","content":"stream"}],["meta",{"property":"article:tag","content":"spring"}],["meta",{"property":"article:tag","content":"springframework"}],["meta",{"property":"article:tag","content":"springboot"}],["meta",{"property":"article:tag","content":"aws"}],["meta",{"property":"article:tag","content":"aws-ec2"}],["meta",{"property":"article:modified_time","content":"2024-10-03T01:20:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"02G. 질문 목록과 템플릿\\",\\"image\\":[\\"https://wikidocs.net/images/page/161186/O_2-07_1.png\\",\\"https://wikidocs.net/images/page/161186/C_2-07_2.png\\",\\"https://wikidocs.net/images/page/161186/O_2-07_3.png\\",\\"https://wikidocs.net/images/page/161186/O_2-07_4.png\\"],\\"dateModified\\":\\"2024-10-03T01:20:13.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"404 오류 해결하기","slug":"_404-오류-해결하기","link":"#_404-오류-해결하기","children":[]},{"level":2,"title":"템플릿 설정하기","slug":"템플릿-설정하기","link":"#템플릿-설정하기","children":[]},{"level":2,"title":"템플릿 사용하기","slug":"템플릿-사용하기","link":"#템플릿-사용하기","children":[]},{"level":2,"title":"데이터 조회하여 템플릿에 전달하기","slug":"데이터-조회하여-템플릿에-전달하기","link":"#데이터-조회하여-템플릿에-전달하기","children":[]},{"level":2,"title":"템플릿에서 전달받은 데이터 사용하기","slug":"템플릿에서-전달받은-데이터-사용하기","link":"#템플릿에서-전달받은-데이터-사용하기","children":[]}],"git":{"createdTime":1703642364000,"updatedTime":1727918413000,"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":9}]},"readingTime":{"minutes":2.25,"words":674},"filePathRelative":"java/jump-to-spring-boot/02G.md","localizedDate":"2023년 12월 27일","excerpt":"\\n\\n<hr>\\n"}');export{Rn as comp,Sn as data};