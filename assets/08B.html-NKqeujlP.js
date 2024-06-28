import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,o as u,c as b,a as e,t as v,b as s,n as o,g as c,d as n,e as r}from"./app-CBi7Ecoo.js";const h={},k={id:"frontmatter-title-관련",tabindex:"-1"},g={class:"header-anchor",href:"#frontmatter-title-관련"},y=e("nav",{class:"table-of-contents"},[e("ul")],-1),f=e("hr",null,null,-1),_=e("p",null,"Helm을 설치했으니 이제 Helm으로 쿠버네티스 클러스터에 MySQL을 설치해보겠습니다. 참고로 Helm은 Minikube 클러스터나 kubeadm, kOps로 만든 클러스터 모두 사용 가능합니다.",-1),S={href:"https://artifacthub.io/",target:"_blank",rel:"noopener noreferrer"},q=r(`<p>다음 명령을 입력하여 bitnami 저장소를 추가합니다.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>helm repo <span class="token function">add</span> bitnami https://charts.bitnami.com/bitnami
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이제 <code>helm</code> 명령으로 MySQL을 설치해야 하는데 <code>helm</code> 명령의 기본 형식은 다음과 같습니다.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>helm <span class="token function">install</span> <span class="token operator">&lt;</span>릴리스 이름<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>옵션<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>저장소 이름<span class="token operator">&gt;</span>/<span class="token operator">&lt;</span>차트 이름<span class="token operator">&gt;</span>\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4),O={href:"https://artifacthub.io/packages/helm/bitnami/mysql",target:"_blank",rel:"noopener noreferrer"},T=e("code",null,"helm install hello-mysql bitnami/mysql",-1),w={href:"https://artifacthub.io/packages/helm/bitnami/mysql#parameters",target:"_blank",rel:"noopener noreferrer"},R=r(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>helm <span class="token function">install</span> hello-mysql <span class="token parameter variable">--set</span> <span class="token assign-left variable">auth.rootPassword</span><span class="token operator">=</span>hellopassword bitnami/mysql
<span class="token comment">#</span>
<span class="token comment"># NAME: hello-mysql</span>
<span class="token comment"># LAST DEPLOYED: Fri Dec  2 12:16:56 2022</span>
<span class="token comment"># NAMESPACE: default</span>
<span class="token comment"># STATUS: deployed</span>
<span class="token comment"># REVISION: 1</span>
<span class="token comment"># TEST SUITE: None</span>
<span class="token comment"># NOTES:</span>
<span class="token comment"># CHART NAME: mysql</span>
<span class="token comment"># CHART VERSION: 9.4.4</span>
<span class="token comment"># APP VERSION: 8.0.31</span>
<span class="token comment"># </span>
<span class="token comment"># ** Please be patient while the chart is being deployed **</span>
<span class="token comment"># </span>
<span class="token comment"># Tip:</span>
<span class="token comment"># </span>
<span class="token comment">#   Watch the deployment status using the command: kubectl get pods -w --namespace default</span>
<span class="token comment"># </span>
<span class="token comment"># Services:</span>
<span class="token comment"># </span>
<span class="token comment">#   echo Primary: hello-mysql.default.svc.cluster.local:3306</span>
<span class="token comment"># </span>
<span class="token comment"># Execute the following to get the administrator credentials:</span>
<span class="token comment"># </span>
<span class="token comment">#   echo Username: root</span>
<span class="token comment">#   MYSQL_ROOT_PASSWORD=$(kubectl get secret --namespace default hello-mysql -o jsonpath=&quot;{.data.mysql-root-password}&quot; | base64 -d)</span>
<span class="token comment"># </span>
<span class="token comment"># To connect to your database:</span>
<span class="token comment"># </span>
<span class="token comment">#   1. Run a pod that you can use as a client:</span>
<span class="token comment"># </span>
<span class="token comment">#       kubectl run hello-mysql-client --rm --tty -i --restart=&#39;Never&#39; --image  docker.io/bitnami/mysql:8.0.31-debian-11-r10 --namespace default --env MYSQL_ROOT_PASSWORD=$MYSQL_ROOT_PASSWORD --command -- bash</span>
<span class="token comment"># </span>
<span class="token comment">#   2. To connect to primary service (read/write):</span>
<span class="token comment"># </span>
<span class="token comment">#       mysql -h hello-mysql.default.svc.cluster.local -uroot -p&quot;$MYSQL_ROOT_PASSWORD&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>helm install hello-mysql --set auth.rootPassword=hellopassword bitnami/mysql</code><ul><li><code>helm install</code>: Helm 설치 명령입니다.</li><li><code>hello-mysql</code>: Helm 차트를 클러스터에 설치했을 때 릴리스 이름입니다. 이후 이 이름으로 쿠버네티스의 오브젝트들이 생성됩니다.</li><li><code>--set auth.rootPassword=hellopassword</code>: 각종 설정값을 설정하는 부분입니다. <code>--set</code> 뒤에 <code>&lt;키&gt;=&lt;값&gt;</code> 형식으로 설정해주면 됩니다. 여러 개를 설정할 때는 <code>&lt;키&gt;=&lt;값&gt;,&lt;키&gt;=&lt;값&gt;</code>와 같이 키와 값을 콤마(,)로 구분해줍니다. 여기서는 <code>auth.rootPassword=hellopassword</code>와 같이 root 패스워드를 설정하였습니다.</li><li><code>bitnami/mysql</code>: 우리는 <code>bitnami</code> 저장소를 추가했고, <code>mysql</code> 차트를 설치할 것이므로 <code>bitnami/mysql</code>로 입력해줍니다.</li></ul></li></ul><p>MySQL 차트 설치가 끝났으니, 설치된 릴리스 목록을 출력해보겠습니다.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>helm <span class="token function">ls</span>
<span class="token comment">#</span>
<span class="token comment"># NAME            NAMESPACE       REVISION        UPDATED                                 STATUS          CHART           APP VERSION</span>
<span class="token comment"># hello-mysql     default         1               2022-12-02 12:16:56.8201411 +0900 KST   deployed        mysql-9.4.4     8.0.31</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>릴리스 이름으로 <code>hello-mysql</code>이 설치된 것을 볼 수 있습니다.</p><p>이제 설치된 MySQL 데이터베이스에 접속해보겠습니다. 위에 나와있는 <b>1. Run a pod that you can use as a client:</b>에서 <code>$MYSQL_ROOT_PASSWORD</code> 부분을 <code>hellopassword</code>로 바꾸고, <code>-p&quot;$MYSQL_ROOT_PASSWORD&quot;</code> 부분을 <code>-phellopassword</code>으로 바꿔서 실행해봅니다. 그리고 <code>show databases;</code> 명령을 실행하여 데이터베이스 목록을 출력해봅니다.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubectl run hello-mysql-client <span class="token parameter variable">--rm</span> <span class="token parameter variable">--tty</span> <span class="token parameter variable">-i</span> <span class="token parameter variable">--restart</span><span class="token operator">=</span><span class="token string">&#39;Never&#39;</span> <span class="token parameter variable">--image</span> docker.io/bitnami/mysql:8.0.31-debian-11-r10 <span class="token parameter variable">--namespace</span> default <span class="token parameter variable">--env</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>hellopassword <span class="token parameter variable">--command</span> -- <span class="token function">bash</span>
<span class="token comment"># </span>
<span class="token comment"># If you don&#39;t see a command prompt, try pressing enter.</span>
<span class="token comment"># I have no name!@hello-mysql-client:/$ mysql -h hello-mysql.default.svc.cluster.local -uroot -phellopassword</span>
<span class="token comment"># mysql: [Warning] Using a password on the command line interface can be insecure.</span>
<span class="token comment"># Welcome to the MySQL monitor.  Commands end with ; or \\g.</span>
<span class="token comment"># Your MySQL connection id is 6504</span>
<span class="token comment"># Server version: 8.0.31 Source distribution</span>
<span class="token comment"># </span>
<span class="token comment"># Copyright (c) 2000, 2022, Oracle and/or its affiliates.</span>
<span class="token comment"># </span>
<span class="token comment"># Oracle is a registered trademark of Oracle Corporation and/or its</span>
<span class="token comment"># affiliates. Other names may be trademarks of their respective</span>
<span class="token comment"># owners.</span>
<span class="token comment"># </span>
<span class="token comment"># Type &#39;help;&#39; or &#39;\\h&#39; for help. Type &#39;\\c&#39; to clear the current input statement.</span>
<span class="token comment"># </span>
<span class="token comment"># mysql&gt; show databases;</span>
<span class="token comment"># +--------------------+</span>
<span class="token comment"># | Database           |</span>
<span class="token comment"># +--------------------+</span>
<span class="token comment"># | information_schema |</span>
<span class="token comment"># | my_database        |</span>
<span class="token comment"># | mysql              |</span>
<span class="token comment"># | performance_schema |</span>
<span class="token comment"># | sys                |</span>
<span class="token comment"># +--------------------+</span>
<span class="token comment"># 5 rows in set (0.00 sec)</span>
<span class="token comment"># </span>
<span class="token comment"># mysql&gt;</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>데이터베이스 목록이 잘 출력되는 것을 볼 수 있습니다. <kbd>Ctrl</kbd>+<kbd>D</kbd>를 두 번 입력하여 MySQL 클라이언트와 파드에서 빠져나옵니다.</p><div class="hint-container info"><p class="hint-container-title">컨텍스트 전환</p><p>Helm은 현재 컨텍스트에 연결된 클러스터에 차트를 설치합니다. 먼저 <code>.kube/config</code>에 저장된 컨텍스트 목록을 확인하는 명령은 <code>kubectl config get-contexts</code>입니다.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubectl config get-contexts
<span class="token comment">#</span>
<span class="token comment"># CURRENT   NAME                               CLUSTER                            AUTHINFO                           NAMESPACE</span>
<span class="token comment"># *         k8s.ap-northeast-2.aws.hello.com   k8s.ap-northeast-2.aws.hello.com   k8s.ap-northeast-2.aws.hello.com</span>
<span class="token comment">#           kubernetes-admin@kubernetes        kubernetes                         kubernetes-admin</span>
<span class="token comment">#           minikube                           minikube                           minikube                           default</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>만약 <code>minikube</code> 컨텍스트로 전환하고 싶다면 <code>kubectl config use-context</code> 명령을 사용합니다.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubectl config use-context minikube
<span class="token comment"># </span>
<span class="token comment"># Switched to context &quot;minikube&quot;.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이렇게 하면 Minikube 클러스터에 Helm으로 차트를 설치하게 됩니다.</p></div><div class="hint-container info"><p class="hint-container-title">릴리스 삭제</p><p>설치된 릴리스를 삭제할 때는 <code>helm uninstall</code> 명령을 사용합니다.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>helm uninstall hello-mysql
<span class="token comment"># </span>
<span class="token comment"># release &quot;hello-mysql&quot; uninstalled</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><hr>`,11);function M(m,E){const i=a("VPCard"),t=a("FontIcon"),l=a("ExternalLinkIcon"),d=a("TagLinks");return u(),b("div",null,[e("h1",k,[e("a",g,[e("span",null,v(m.$frontmatter.title)+" 관련",1)])]),s(i,o(c({title:"목차",desc:"언제나 최신 Kubernetes",link:"/k8s/always-up-to-date-kubernetes/README.md",logo:"https://pyrasis.com/assets/images/pyrasis.png",background:"rgba(31,41,55,0.2)"})),null,16),y,f,s(i,o(c({title:"Unit 8.2 Helm으로 MySQL 설치하기",desc:"언제나 최신 Kubernetes",link:"https://pyrasis.com/jHLsAlwaysUpToDateKubernetes/Unit08/02",logo:"https://pyrasis.com/assets/images/pyrasis.png",background:"rgba(31,41,55,0.2)"})),null,16),_,e("p",null,[n("참고로 Helm에서는 패키지를 차트(Chart)라고 부르는데, Helm 공식 저장소(리포지토리)는 차트들이 유지보수가 되지 않은지 오래 되었습니다. 따라서 여기서는 "),e("a",S,[s(t,{icon:"fas fa-globe"}),n("https://artifacthub.io/"),s(l)]),n("에 올라와있는 저장소를 사용하도록 하겠습니다.")]),q,e("p",null,[n("우리가 설치할 MySQL 차트는 "),e("a",O,[s(t,{icon:"fas fa-globe"}),n("https://artifacthub.io/packages/helm/bitnami/mysql"),s(l)]),n("입니다. 이 차트를 "),T,n("과 같이 기본 설정으로 설치해도 되지만, 여기서는 각종 설정도 추가해서 설치해보겠습니다. 각 설정값(Parameter)은 "),e("a",w,[s(t,{icon:"fas fa-globe"}),n("https://artifacthub.io/packages/helm/bitnami/mysql#parameters"),s(l)]),n("에 잘 나와있습니다.")]),R,s(d)])}const P=p(h,[["render",M],["__file","08B.html.vue"]]),N=JSON.parse('{"path":"/k8s/always-up-to-date-kubernetes/08B.html","title":"08B. Helm으로 MySQL 설치하기","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"08B. Helm으로 MySQL 설치하기","description":"언제나 최신 Kubernetes > 08B. Helm으로 MySQL 설치하기","category":["Kubernetes"],"tag":["crashcourse","digitalocean","kubernetes","minkube","kubctl"],"head":[[{"meta":null},{"property":"og:title","content":"언제나 최신 Kubernetes > 08B. Helm으로 MySQL 설치하기"},{"property":"og:description","content":"08B. Helm으로 MySQL 설치하기"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/k8s/always-up-to-date-kubernetes/08B.html"}]],"next":"/k8s/always-up-to-date-kubernetes/README.md","date":"2022-10-22T00:00:00.000Z","isOrignial":false},"headers":[],"git":{},"readingTime":{"minutes":2.12,"words":636},"filePathRelative":"k8s/always-up-to-date-kubernetes/08B.md","localizedDate":"2022년 10월 22일","excerpt":"\\n"}');export{P as comp,N as data};
