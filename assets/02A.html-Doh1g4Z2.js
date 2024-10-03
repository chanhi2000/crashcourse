import{_ as u}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as d,a as n,t as m,b as a,w as t,d as s,e as c,r as o,o as h}from"./app-U_bew1in.js";const b={},v={id:"frontmatter-title-관련",tabindex:"-1"},k={class:"header-anchor",href:"#frontmatter-title-관련"},g={class:"table-of-contents"},f=c(`<hr><h2 id="메시지-표현식" tabindex="-1"><a class="header-anchor" href="#메시지-표현식"><span>메시지 표현식</span></a></h2><p>모든 클래스에서 객체는 <code>id</code>라는 특별한 형태로 표현 됩니다. 따라사 다음처럼 객체를 지향하는 변수 <code>obj</code>를 선언합니다.</p><div class="language-objc line-numbers-mode" data-highlighter="prismjs" data-ext="objc" data-title="objc"><pre><code><span class="line">id obj<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>어떤 객체 <code>obj</code>에 메시지 <code>msg</code>를 보내려면 다음처럼 쓰고 <strong>메시지 표현식</strong>(message expression)이라고 부릅니다.</p>`,5),j=n("code",null,"void",-1),_=c(`<p>메시지를 받는 쪽, 즉 위에서 본 <code>obj</code>이라고 적힌 부분에는 객체를 나타내는 표현식도 작성할 수 있습니다. 따라서 어떤 메시지 표현식의 결과가 객체라면 다음처럼 이어서 메시지를 보내도 됩니다.</p><div class="language-objc line-numbers-mode" data-highlighter="prismjs" data-ext="objc" data-title="objc"><pre><code><span class="line"><span class="token punctuation">[</span><span class="token punctuation">[</span> obj msg1 <span class="token punctuation">]</span> msg2 <span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token punctuation">[</span> obj msg1 <span class="token punctuation">]</span> msg2 <span class="token punctuation">]</span> msg3 <span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,2),y=n("code",null,"[]",-1),x=n("code",null,"[]",-1),A=c(`<div class="language-objc line-numbers-mode" data-highlighter="prismjs" data-ext="objc" data-title="objc"><pre><code><span class="line">element <span class="token operator">=</span> table<span class="token punctuation">[</span><span class="token punctuation">[</span> obj count <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>메세지는 변수명처럼 식별자와 같은 규칙으로 만들어진 메시지 키워드로 구성됩니다. 함수 호출과 마찬가지로 메시지는 인수가 따라오기도 합니다. 인수가 없는 메시지는 하나의 메시지 키워드로만 이루어집니다. 몇 가지 예를 들어봅시다.</p><div class="language-objc line-numbers-mode" data-highlighter="prismjs" data-ext="objc" data-title="objc"><pre><code><span class="line"><span class="token punctuation">[</span>aString copy<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">width <span class="token operator">=</span> <span class="token punctuation">[</span>node width<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">[</span><span class="token punctuation">[</span>doc filename<span class="token punctuation">]</span> retain<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>두 번째 예처럼 변수명과 메시지 키워드명이 같아도 됩니다. 메시지 표현식 속에서 무엇이 메시지 키워드인지 구별할 수 있기 때문입니다.</p><p>메시지에 인수가 있으면 메시지 키워드 끝에 콜론(<code>;</code>)을 붙여 인수가 있음을 나타냅니다. 콜론 뒤에는 실인수가 옵니다. 실인수는 함수 호출과 마찬가지로 일반 표현식을 적습니다. 다른 메시지 표현식을 실인수로 써도 됩니다.</p><div class="language-objc line-numbers-mode" data-highlighter="prismjs" data-ext="objc" data-title="objc"><pre><code><span class="line"><span class="token punctuation">[</span>printInfo setLeftMargin<span class="token punctuation">:</span> <span class="token number">60.0</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token punctuation">[</span>cw window<span class="token punctuation">]</span> firstResponder<span class="token punctuation">]</span> copy<span class="token punctuation">:</span> sender<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">[</span>doc isSameDirectory<span class="token punctuation">:</span> <span class="token punctuation">[</span>info objectAtIndex<span class="token punctuation">:</span> <span class="token operator">++</span>num<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>인수를 두 개 이상 사용하려면 콜론을 붙이고 다른 키워드를 추가합니다. 또는 키워드 없이 콜런만 추가해도 문법적으로는 문제가 없습니다. 하지만 콜론 없이 키워드만 추가할 수는 없습니다.</p><div class="language-objc line-numbers-mode" data-highlighter="prismjs" data-ext="objc" data-title="objc"><pre><code><span class="line">cell <span class="token operator">=</span> <span class="token punctuation">[</span>albumview cellAtRow<span class="token punctuation">:</span> i column<span class="token punctuation">:</span> j<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">[</span>maanger fileExistsAtPath<span class="token punctuation">:</span>dirname isDirectory<span class="token punctuation">:</span><span class="token operator">&amp;</span>isdir<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">[</span>view lineTo<span class="token punctuation">:</span> <span class="token number">1.4142</span> <span class="token punctuation">:</span> <span class="token punctuation">(</span>y <span class="token operator">+</span> <span class="token number">1.0</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="메시지-셀렉터" tabindex="-1"><a class="header-anchor" href="#메시지-셀렉터"><span>메시지 셀렉터</span></a></h2><p>함수를 함수명으로 호출하는 것처럼 각각의 메시지는 키워드를 나열한 것을 마치 이름처럼 써서 다른 메시지와 구별합니다. 이것을 <strong>메시지 셀렉터</strong>(message selector) 또는 <strong>셀렉터</strong>(selector)라고 부르면 <strong>메서드명</strong> 이라고도 합니다.</p><p>앞서 본 메시지 표현식 예에서 몇몇 메시지는 다음과 같은 셀렉터를 가집니다. 인수가 있는 키워드는 콜론도 셀렉터에 포함되므로 주의해야 합니다. 예제의 <code>copy</code>와 <code>copy:</code>는 서로 다른 셀렉터입니다.</p><div class="language-objc line-numbers-mode" data-highlighter="prismjs" data-ext="objc" data-title="objc"><pre><code><span class="line">copy</span>
<span class="line">retain</span>
<span class="line">firstResponder</span>
<span class="line">copy<span class="token punctuation">:</span></span>
<span class="line">objectAtIndex<span class="token punctuation">:</span></span>
<span class="line">cellAtRow<span class="token punctuation">:</span>column<span class="token punctuation">:</span></span>
<span class="line">fileExistsAtPath<span class="token punctuation">:</span>isDirectory<span class="token punctuation">:</span></span>
<span class="line">lineTo<span class="token punctuation">:</span><span class="token punctuation">:</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>메시지 키워드는 변수의 명명규칙에 따라 이름을 지으며, 소문자로 시작하는 것이 관례입니다. 여러 단어로 된 셀렉터는 첫 잔어를 제외한 단어 첫 글자마다 대문자로 표기합니다.</p>`,14),w=n("sup",{class:"footnote-ref"},[n("a",{href:"#footnote1"},"[1]"),n("a",{class:"footnote-anchor",id:"footnote-ref1"})],-1),C=n("p",null,[s("메시지에 인수가 있으면 메시지 전체가 영어 문장처럼 읽히도록 메시지 키워드를 쓴느 것이 관례입니다. 또한 인수가 여러 개라면 메시지 키워드는 각각의 인수가 무엇을 뜻하는지를 나타냅니다. 예를 들어 "),n("code",null,"cellAtRow: column:"),s("이라는 셀렉터는 가로 세로로 놓여진 셀(GUI 부품 중 하나)에서 행과 열을 지정한 하나의 셀을 참조할 때 쓰는데, 두 인수 중 무엇이 행이고 열인지 이름으로 바로 알 수 있습니다. 영어 문장으로 봐도 '~행에서 ~열에 있는 셀'로 읽힙니다")],-1),O=n("sup",{class:"footnote-ref"},[n("a",{href:"#footnote2"},"[2]"),n("a",{class:"footnote-anchor",id:"footnote-ref2"})],-1),R=n("p",null,[s("여러 개의 메시지 키워드로 구성된 셀렉터는 순서를 바꾸면 안 됩니다. 예를 들어 "),n("code",null,"dragFile:fromRect:slideBack:event:"),s("라는 셀렉터가 이걸 "),n("code",null,"dragFile:event:slideBack:fromRect:"),s("처럼 쓸 수는 없습니다. 두 셀렉터는 전혀 다른 셀렉터 입니다.")],-1),S=n("hr",null,null,-1),T=n("h2",{id:"인스턴스-생성과-초기화",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#인스턴스-생성과-초기화"},[n("span",null,"인스턴스 생성과 초기화")])],-1),X=n("p",null,[n("code",null,"id"),s("형 변수를 선언하는 것만으로는 변수에 객체가 저장되지 않습니다. 객체에 일을 시키려면 우선 클래스에서 인스턴스를 생성해야 합니다.")],-1),I=n("code",null,"alloc",-1),D=c(`<div class="language-objc line-numbers-mode" data-highlighter="prismjs" data-ext="objc" data-title="objc"><pre><code><span class="line"><span class="token comment">// 인스턴스 생성</span></span>
<span class="line"><span class="token punctuation">[</span> 클래스명 alloc<span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>이렇게 만든 인스턴스는 메모리에 필요한 영역이 확보되었다는 것일 뿐이므로 보통은 이 다음에 바로 초기화해야 합니다. 초기화 메서드는 <strong>초기자</strong>*(initializer)라고 부릅니다. 초기자 역할을 하는 메서드로 무엇이 이ㅆ을지는 클래스마다 다르며, 클래스에 따라서 여러가지 초기자를 제공하기도 합니다.</p><p>Cocoa는 초기자가 <code>init</code>이거나 메서드명이 <code>init</code>으로 시작돼야 합니다. 다음은 클래스에서 인스턴스를 만드는 기본 메시지 표현식입니다.</p><div class="language-objc line-numbers-mode" data-highlighter="prismjs" data-ext="objc" data-title="objc"><pre><code><span class="line"><span class="token comment">// Cocoa에서 사용하는 인스턴스 생성</span></span>
<span class="line"><span class="token punctuation">[</span><span class="token punctuation">[</span> 클래스명 alloc <span class="token punctuation">]</span> init <span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>인스턴스를 생성할 때 늘 이렇게 <code>alloc</code> 메시지 표현식 다음에 바로 초기자가 오도록 적는 습관을 기릅시다.</p><p>초기화가 인스턴스 정보를 &#39;리셋(reset)&#39;하지는 않습니다. 초기자에서 하는 초기화는 인스턴스가 생성된 직후 한 번만 이루어집니다. 인스턴스 변숫값을 초깃값으로 돌리는 등의 리셋에 해당되는 처리가 필요하면 초리자가 아닌 다른 메서드를 사용해야 합니다.</p><p>또한 <code>alloc</code> 이외에도 객체를 생성하는 클래스 메서드가 있으며 클래스에서 초기화를 끝낸 다음 인스턴스를 돌려주기도 합니다.</p><hr><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>명명규칙은 &#39;부록 C&#39;를 참고하세요 <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li><li id="footnote2" class="footnote-item"><p>Mac OS X의 &#39;X&#39;는 로마자 숫자로 &#39;Ten(10)&#39;이라고 읽지만 Xcode는 엑스코드라고 읽습니다. <a href="#footnote-ref2" class="footnote-backref">↩︎</a></p></li></ol></section>`,10);function B(p,E){const l=o("SiteInfo"),i=o("router-link"),e=o("FontIcon"),r=o("RouteLink");return h(),d("div",null,[n("h1",v,[n("a",k,[n("span",null,m(p.$frontmatter.title)+" 관련",1)])]),a(l,{name:"목차",desc:"OSX 구조를 이해하면서 배우는 Objective-C",url:"/swift/shuokai-objc/README.md",preview:"https://image.aladin.co.kr/product/2806/68/cover500/8968480338_1.jpg"}),n("nav",g,[n("ul",null,[n("li",null,[a(i,{to:"#메시지-표현식"},{default:t(()=>[s("메시지 표현식")]),_:1})]),n("li",null,[a(i,{to:"#메시지-셀렉터"},{default:t(()=>[s("메시지 셀렉터")]),_:1})]),n("li",null,[a(i,{to:"#인스턴스-생성과-초기화"},{default:t(()=>[s("인스턴스 생성과 초기화")]),_:1})])])]),f,n("p",null,[s("메시지 표현식은 리시버 객체가 그 메시지를 처리한 결괏값을 돌려줍니다. 즉, 메시지 표현식은 "),a(e,{icon:"iconfont icon-c"}),s("C 함수 호출처럼 다루면 됩니다. 메시지 표현식은 다른 표현식의 구셩 요소로 사용해도 되며 "),j,s("형을 돌려주는 메시지 표현식도 있습니다.")]),_,n("p",null,[s("."),a(e,{icon:"iconfont icon-c"}),s("C에서 "),y,s("는 배열 요소를 참조하는 연산자이지만 "),a(e,{icon:"iconfont icon-objectivec"}),s("Objective-C에서는 메시지 표현식을 의미합니다. 왼쪽에 배열명이나 포인터 같은 다른 표현식이 있을 떄만 "),x,s("가 배열 연산자입니다. 메시지 표현식의 값을 그대로 배열 인덱스로 쓸 떄는 다음처럼 씁니다.")]),A,n("p",null,[s("띄어쓰기를 하지 않아도 문자열의 의미를 쉽게 알 수 있습니다."),w,s(),a(e,{icon:"iconfont icon-objectivec"}),s("Objective-C는 스몰톡의 특징이 여러 부분에서 보이는데 이렇게 메시지를 메시지 키워드로 표현하는 방법도 스몰톡에서 가져왔습니다.")]),C,n("p",null,[s('인수마다 메시지 키워드를 대응시키면 프로그램이 길어지지만 코드의 가독성은 좋아집니다. "세번째 인수가 무슨 역할이였지?"라면서 메뉴얼을 뒤적거리지 않아도 되어 편리합니다. 대신에 프로그램을 작설할 때 셀렉터를 틀리지 않게 적어야만 합니다. 따라서 클래스 래퍼런스 등에서 셀렉터를 복사해서 붙여 넣는 것이 좋습니다. Mac OS X에서 제공한느 통합 개발환경인 '),a(e,{icon:"iconfont icon-xcode"}),s("Xcode"),O,s("에는 메서드명 자동 완성 기능이 있습니다.")]),R,S,T,X,n("p",null,[s("."),a(e,{icon:"iconfont icon-objectivec"}),s("Objective-C는 클래스에 메시지를 보내서 인스턴스를 생성합니다. 클래스에 메시지를 보내는 처리는 "),a(r,{to:"/swift/shuokai-objc/04.html"},{default:t(()=>[s("'4.5절'")]),_:1}),s("에서 자세히 설명하므로 여기에서는 클래스명에 메시지 "),I,s("을 보내면 인스턴스가 새로 하나 만들어진다는 것만 기억해 둡시다.")]),D])}const F=u(b,[["render",B],["__file","02A.html.vue"]]),V=JSON.parse('{"path":"/swift/shuokai-objc/02A.html","title":"02A. 객체와 메시지","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"02A. 객체와 메시지","description":"OSX 구조를 이해하면서 배우는 Objective-C > 02A. 객체와 메시지","category":["Objective-C"],"tag":["crashcourse","xcode","objective-c","objc"],"head":[[{"meta":null},{"property":"og:title","content":"OSX 구조를 이해하면서 배우는 Objective-C > 02A. 객체와 메시지"},{"property":"og:description","content":"02A. 객체와 메시지"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/swift/shuokai-objc/02A.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/crashcourse/swift/shuokai-objc/02A.html"}],["meta",{"property":"og:site_name","content":"🥁Crashcourse"}],["meta",{"property":"og:title","content":"02A. 객체와 메시지"}],["meta",{"property":"og:description","content":"OSX 구조를 이해하면서 배우는 Objective-C > 02A. 객체와 메시지"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-10-03T01:20:13.000Z"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"objective-c"}],["meta",{"property":"article:tag","content":"objc"}],["meta",{"property":"article:modified_time","content":"2024-10-03T01:20:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"02A. 객체와 메시지\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-03T01:20:13.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"메시지 표현식","slug":"메시지-표현식","link":"#메시지-표현식","children":[]},{"level":2,"title":"메시지 셀렉터","slug":"메시지-셀렉터","link":"#메시지-셀렉터","children":[]},{"level":2,"title":"인스턴스 생성과 초기화","slug":"인스턴스-생성과-초기화","link":"#인스턴스-생성과-초기화","children":[]}],"git":{"createdTime":1713943004000,"updatedTime":1727918413000,"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":3}]},"readingTime":{"minutes":0.96,"words":287},"filePathRelative":"swift/shuokai-objc/02A.md","localizedDate":"2024년 4월 24일","excerpt":"\\n"}');export{F as comp,V as data};