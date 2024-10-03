import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,a as e,t as c,b as n,n as p,g as d,d as s,e as m,r as a,o as u}from"./app-U_bew1in.js";const b={},h={id:"frontmatter-title-관련",tabindex:"-1"},g={class:"header-anchor",href:"#frontmatter-title-관련"},k=e("nav",{class:"table-of-contents"},[e("ul")],-1),v=e("hr",null,null,-1),y=m(`<p>MiniKube 설치가 끝났으니 이제 Minikube로 쿠버네티스 클러스터를 생성해보겠습니다. 앞에서 Docker를 설치했으므로 여기서는 <code>--driver=docker</code> 옵션을 사용하여 Docker 기반 Minikube 클러스터를 생성합니다.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">minikube start <span class="token parameter variable">--driver</span><span class="token operator">=</span>docker</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>잠시 기다리면 클러스터가 생성됩니다. 다음 명령을 입력하여 클러스터가 잘 동작하는지 확인해봅니다.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">kubectl get all</span>
<span class="line"><span class="token comment">#</span></span>
<span class="line"><span class="token comment"># NAME                 TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE</span></span>
<span class="line"><span class="token comment"># service/kubernetes   ClusterIP   10.96.0.1    &amp;lt;none&amp;gt;        443/TCP   4m42s</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>service/kubernetes</code>가 표시된다면 정상적으로 클러스터가 생성된 것입니다.</p><div class="hint-container info"><p class="hint-container-title">k get all</p><p>앞에서 <code>kubectl</code>을 <code>k</code>로 별칭을 설정했다면 <code>k get all</code>도 가능합니다. 문서에서는 모두 <code>kubectl</code>로 표기되어 있어도, 실제로 명령을 입력할 때는 <code>k</code>만 입력해도 됩니다.</p></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">k get</span>
<span class="line"><span class="token comment">#</span></span>
<span class="line"><span class="token comment"># NAME                 TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE</span></span>
<span class="line"><span class="token comment"># service/kubernetes   ClusterIP   10.96.0.1    &amp;lt;none&amp;gt;        443/TCP   8m59s</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그럼 MiniKube에서 대시보드를 실행해보겠습니다.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">minikube dashboard</span>
<span class="line"><span class="token comment">#   </span></span>
<span class="line"><span class="token comment"># 🔌  대시보드를 활성화하는 중 ...</span></span>
<span class="line"><span class="token comment">#     ▪ Using image docker.io/kubernetesui/metrics-scraper:v1.0.8</span></span>
<span class="line"><span class="token comment">#     ▪ Using image docker.io/kubernetesui/dashboard:v2.7.0</span></span>
<span class="line"><span class="token comment"># 🤔  Verifying dashboard health ...</span></span>
<span class="line"><span class="token comment"># 🚀  프록시를 시작하는 중 ...</span></span>
<span class="line"><span class="token comment"># 🤔  Verifying proxy health ...</span></span>
<span class="line"><span class="token comment"># 🎉  Opening http://127.0.0.1:60287/api/v1/namespaces/kubernetes-dashboard/services/http:kubernetes-dashboard:/proxy/ in your default browser...</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>명령을 실행하면 자동으로 웹 브라우저가 열릴 것입니다. 웹 브라우저가 열리지 않으면 위 출력 결과에서 Opening으로 시작하는 부분의 URL을 복사해서 웹 브라우저에서 열어봅니다.</p><figure><img src="https://pyrasis.com/assets/images/jHLsAlwaysUpToDateKubernetes/Unit03/1.png" alt="쿠버네티스 대시보드" tabindex="0" loading="lazy"><figcaption>쿠버네티스 대시보드</figcaption></figure><p>앞으로 자주 사용하게 될 쿠버네티스 대시보드입니다. 여기서는 쿠버네티스의 각종 설정을 확인하고 편집할 수 있습니다.</p>`,12),_=e("code",null,"minikube dashboard",-1),f=e("kbd",null,"Ctrl",-1),A=e("kbd",null,"C",-1),T=e("hr",null,null,-1);function P(t,M){const i=a("VPCard"),r=a("FontIcon");return u(),l("div",null,[e("h1",h,[e("a",g,[e("span",null,c(t.$frontmatter.title)+" 관련",1)])]),k,v,n(i,p(d({title:"Unit 3. Nginx 웹서버 실행하기",desc:"언제나 최신 Kubernetes",link:"https://pyrasis.com/jHLsAlwaysUpToDateKubernetes/Unit03",logo:"https://pyrasis.com/assets/images/pyrasis.png",background:"rgba(31,41,55,0.2)"})),null,16),y,e("p",null,[s("대시보드 실행을 정지하려면 "),n(r,{icon:"iconfont icon-shell"}),_,s(" 명령을 입력한 곳에서 "),f,s("+"),A,s("를 입력하면 됩니다.")]),T])}const U=o(b,[["render",P],["__file","03A.html.vue"]]),E=JSON.parse('{"path":"/k8s/always-up-to-date-kubernetes/03A.html","title":"03A. Minikube 클러스터 생성하기","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"03A. Minikube 클러스터 생성하기","description":"언제나 최신 Kubernetes > 03A. Minikube 클러스터 생성하기","category":["Kubernetes"],"tag":["crashcourse","digitalocean","kubernetes","minkube","kubctl"],"head":[[{"meta":null},{"property":"og:title","content":"언제나 최신 Kubernetes > 03A. Minikube 클러스터 생성하기"},{"property":"og:description","content":"03A. Minikube 클러스터 생성하기"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/k8s/always-up-to-date-kubernetes/03A.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/crashcourse/k8s/always-up-to-date-kubernetes/03A.html"}],["meta",{"property":"og:site_name","content":"🥁Crashcourse"}],["meta",{"property":"og:title","content":"03A. Minikube 클러스터 생성하기"}],["meta",{"property":"og:description","content":"언제나 최신 Kubernetes > 03A. Minikube 클러스터 생성하기"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://pyrasis.com/assets/images/jHLsAlwaysUpToDateKubernetes/Unit03/1.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-10-03T01:20:13.000Z"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"digitalocean"}],["meta",{"property":"article:tag","content":"kubernetes"}],["meta",{"property":"article:tag","content":"minkube"}],["meta",{"property":"article:tag","content":"kubctl"}],["meta",{"property":"article:modified_time","content":"2024-10-03T01:20:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"03A. Minikube 클러스터 생성하기\\",\\"image\\":[\\"https://pyrasis.com/assets/images/jHLsAlwaysUpToDateKubernetes/Unit03/1.png\\"],\\"dateModified\\":\\"2024-10-03T01:20:13.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1712118043000,"updatedTime":1727918413000,"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":0.65,"words":196},"filePathRelative":"k8s/always-up-to-date-kubernetes/03A.md","localizedDate":"2024년 4월 3일","excerpt":"\\n\\n<hr>\\n"}');export{U as comp,E as data};