import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as m,c as v,a as n,t as k,b as a,n as o,g as p,d as s,e as t}from"./app-Ds0QsEfe.js";const b={},y={id:"frontmatter-title-관련",tabindex:"-1"},h={class:"header-anchor",href:"#frontmatter-title-관련"},_=n("nav",{class:"table-of-contents"},[n("ul")],-1),g=n("hr",null,null,-1),f=n("p",null,"먼저 MySQL 스테이트풀셋을 생성합니다. 그런데 스테이트풀셋과 지금까지 사용했던 디플로이먼트는 어떤 차이점이 있을까요? 이름 그대로 스테이트풀셋은 상태를 가지고 있고, 디플로이먼트는 상태를 가지고 있지 않습니다(stateless). 따라서 스테이트풀셋은 퍼시스턴트 볼륨 클레임(pvc)을 통해 퍼시스턴트 볼륨(pv)을 생성하여 데이터를 저장하고 유지합니다.",-1),q=n("code",null,"mysql-statefulset.yaml",-1),A={href:"https://github.com/pyrasis/jHLsKubernetes/blob/main/Unit05/mysql-statefulset.yaml",target:"_blank",rel:"noopener noreferrer"},S=n("code",null,"pyrasis/jHLsKubernetes",-1),E=n("code",null,"/Unit05/",-1),T=n("code",null,"mysql-statefulset.yaml",-1),L=n("code",null,"mysql-statefulset.yaml",-1),P=t(`<div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> StatefulSet
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> mysql
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">serviceName</span><span class="token punctuation">:</span> mysql
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">1</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> mysql
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> mysql
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">terminationGracePeriodSeconds</span><span class="token punctuation">:</span> <span class="token number">10</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> mysql
          <span class="token key atrule">image</span><span class="token punctuation">:</span> mysql<span class="token punctuation">:</span><span class="token number">5.7</span>
          <span class="token key atrule">ports</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
              <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">3306</span>
          <span class="token key atrule">env</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> MYSQL_ROOT_PASSWORD
              <span class="token key atrule">value</span><span class="token punctuation">:</span> examplepassword
            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> MYSQL_DATABASE
              <span class="token key atrule">value</span><span class="token punctuation">:</span> example
          <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> data
              <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /var/lib/mysql
  <span class="token key atrule">volumeClaimTemplates</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> data
      <span class="token key atrule">spec</span><span class="token punctuation">:</span>
        <span class="token key atrule">storageClassName</span><span class="token punctuation">:</span> standard
        <span class="token key atrule">accessModes</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> ReadWriteOnce
        <span class="token key atrule">resources</span><span class="token punctuation">:</span>
          <span class="token key atrule">requests</span><span class="token punctuation">:</span>
            <span class="token key atrule">storage</span><span class="token punctuation">:</span> 1Gi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),x=n("code",null,"mysql-statefulset.yaml",-1),R=t(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubectl create <span class="token parameter variable">-f</span> mysql-statefulset.yaml
<span class="token comment">#</span>
<span class="token comment"># statefulset.apps/mysql created</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),M=n("code",null,"kubectl get all",-1),C=t(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubectl get all
<span class="token comment">#</span>
<span class="token comment"># NAME          READY   STATUS    RESTARTS   AGE</span>
<span class="token comment"># pod/mysql-0   1/1     Running   0          11s</span>
<span class="token comment"># </span>
<span class="token comment"># NAME                 TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE</span>
<span class="token comment"># service/kubernetes   ClusterIP   10.96.0.1    &amp;lt;none&gt;        443/TCP   5d20h</span>
<span class="token comment"># </span>
<span class="token comment"># NAME                     READY   AGE</span>
<span class="token comment"># statefulset.apps/mysql   1/1     12s</span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><div class="highlight-line"> </div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>statefulset.apps/mysql</code>이 생성된 것을 볼 수 있습니다. 특히 스테이트풀셋은 레플리카셋을 생성하지 않으며, 파드의 이름이 랜덤하지 않고 <strong>mysql-0</strong>처럼 0부터 순차적으로 증가합니다.</p>`,2),N=n("code",null,"mysql-service.yaml",-1),w={href:"https://github.com/pyrasis/jHLsKubernetes/blob/main/Unit05/mysql-service.yaml",target:"_blank",rel:"noopener noreferrer"},I=n("code",null,"pyrasis/jHLsKubernetes",-1),Q=n("code",null,"/Unit05/",-1),K=n("code",null,"mysql-service.yaml",-1),U=n("code",null,"mysql-service.yaml",-1),D=t(`<div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> mysql
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">clusterIP</span><span class="token punctuation">:</span> None
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> mysql
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
      <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">3306</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),O=n("code",null,"mysql-service.yaml",-1),G=t(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubectl create <span class="token parameter variable">-f</span> mysql-service.yaml
<span class="token comment">#</span>
<span class="token comment"># service/mysql created</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),Y=n("code",null,"kubectl get all",-1),V=t(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubectl get all
<span class="token comment">#</span>
<span class="token comment"># NAME          READY   STATUS    RESTARTS   AGE</span>
<span class="token comment"># pod/mysql-0   1/1     Running   0          21m</span>
<span class="token comment"># </span>
<span class="token comment"># NAME                 TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)    AGE</span>
<span class="token comment"># service/kubernetes   ClusterIP   10.96.0.1    &amp;lt;none&gt;        443/TCP    5d20h</span>
<span class="token comment"># service/mysql        ClusterIP   None         &amp;lt;none&gt;        3306/TCP   97s</span>
<span class="token comment"># </span>
<span class="token comment"># NAME                     READY   AGE</span>
<span class="token comment"># statefulset.apps/mysql   1/1     21m</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),j=n("img",{src:"https://pyrasis.com/assets/images/jHLsAlwaysUpToDateKubernetes/Unit05/1.png",alt:'<FontIcon icon="iconfont icon-k8s"/>이 생성된 것을 볼 수 있습니다.',tabindex:"0",loading:"lazy"},null,-1),B=n("code",null,"service/mysql",-1),H=n("p",null,"그럼 MySQL 데이터베이스가 정상적으로 동작하는지 체크해보겠습니다.",-1),F=n("code",null,"kubectl run -it --rm mysql-client --image=mysql:5.7 --restart=Never -- sh",-1),W=n("code",null,"mysql -h mysql -u root -p",-1),z=n("strong",null,"Enter password:",-1),X=n("code",null,"examplepassword",-1),J=n("code",null,"show databases;",-1),$=n("code",null,"exit",-1),Z=n("code",null,"exit",-1),nn=t(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubectl run <span class="token parameter variable">-it</span> <span class="token parameter variable">--rm</span> mysql-client <span class="token parameter variable">--image</span><span class="token operator">=</span>mysql:5.7 <span class="token parameter variable">--restart</span><span class="token operator">=</span>Never -- <span class="token function">sh</span>
<span class="token comment">#</span>
<span class="token comment"># If you don&#39;t see a command prompt, try pressing enter.</span>
<span class="token comment"># sh-4.2# </span>
mysql <span class="token parameter variable">-h</span> mysql <span class="token parameter variable">-u</span> root <span class="token parameter variable">-p</span>
<span class="token comment">#</span>
<span class="token comment"># Enter password: examplepassword</span>
<span class="token comment"># Welcome to the MySQL monitor.  Commands end with ; or \\g.</span>
<span class="token comment"># Your MySQL connection id is 2</span>
<span class="token comment"># Server version: 5.7.40 MySQL Community Server (GPL)</span>
<span class="token comment"># </span>
<span class="token comment"># Copyright (c) 2000, 2022, Oracle and/or its affiliates.</span>
<span class="token comment"># </span>
<span class="token comment"># Oracle is a registered trademark of Oracle Corporation and/or its</span>
<span class="token comment"># affiliates. Other names may be trademarks of their respective</span>
<span class="token comment"># owners.</span>
<span class="token comment"># </span>
<span class="token comment"># Type &#39;help;&#39; or &#39;\\h&#39; for help. Type &#39;\\c&#39; to clear the current input statement.</span>
<span class="token comment"># </span>
<span class="token comment"># mysql&gt;</span>
show databases<span class="token punctuation">;</span>
<span class="token comment">#</span>
<span class="token comment"># +--------------------+</span>
<span class="token comment"># | Database           |</span>
<span class="token comment"># +--------------------+</span>
<span class="token comment"># | information_schema |</span>
<span class="token comment"># | example            |</span>
<span class="token comment"># | mysql              |</span>
<span class="token comment"># | performance_schema |</span>
<span class="token comment"># | sys                |</span>
<span class="token comment"># +--------------------+</span>
<span class="token comment"># 6 rows in set (0.01 sec)</span>
<span class="token builtin class-name">exit</span>
<span class="token comment">#</span>
<span class="token comment"># Bye</span>
<span class="token comment"># sh-4.2# </span>
<span class="token builtin class-name">exit</span>
<span class="token comment"># </span>
<span class="token comment"># exit</span>
<span class="token comment"># pod &quot;mysql-client&quot; deleted</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>`,2);function sn(r,an){const i=l("VPCard"),e=l("FontIcon"),c=l("ExternalLinkIcon"),u=l("TagLinks");return m(),v("div",null,[n("h1",y,[n("a",h,[n("span",null,k(r.$frontmatter.title)+" 관련",1)])]),a(i,o(p({title:"목차",desc:"언제나 최신 Kubernetes",link:"/k8s/always-up-to-date-kubernetes/README.md",logo:"https://pyrasis.com/assets/images/pyrasis.png",background:"rgba(31,41,55,0.2)"})),null,16),_,g,a(i,o(p({title:"Unit 5. Spring Boot와 MySQL 실행하기",desc:"언제나 최신 Kubernetes",link:"https://pyrasis.com/jHLsAlwaysUpToDateKubernetes/Unit05",logo:"https://pyrasis.com/assets/images/pyrasis.png",background:"rgba(31,41,55,0.2)"})),null,16),f,n("p",null,[s("다음 내용을 "),a(e,{icon:"iconfont icon-yaml"}),q,s(" 파일로 저장합니다.")]),n("ul",null,[n("li",null,[n("a",A,[a(e,{icon:"iconfont icon-github"}),S,s(" - "),E,a(e,{icon:"iconfont icon-yaml"}),T,a(c)])])]),n("blockquote",null,[a(e,{icon:"iconfont icon-yaml"}),L]),P,n("p",null,[s("다음 명령을 실행하여 "),a(e,{icon:"iconfont icon-yaml"}),x,s(" 파일로 스테이트풀셋을 생성합니다.")]),R,a(e,{icon:"iconfont icon-shell"}),M,s(" 명령으로 오브젝트 목록을 출력해봅니다."),C,n("p",null,[s("이제 서비스를 생성해보겠습니다. 다음 내용을 "),a(e,{icon:"iconfont icon-yaml"}),N,s(" 파일로 저장합니다.")]),n("ul",null,[n("li",null,[n("a",w,[a(e,{icon:"iconfont icon-github"}),I,s(" - "),Q,a(e,{icon:"iconfont icon-yaml"}),K,a(c)])])]),n("blockquote",null,[a(e,{icon:"iconfont icon-yaml"}),U]),D,n("p",null,[s("다음 명령을 실행하여 "),a(e,{icon:"iconfont icon-yaml"}),O,s(" 파일로 서비스를 생성합니다.")]),G,a(e,{icon:"iconfont icon-shell"}),Y,s(" 명령으로 오브젝트 목록을 출력해봅니다."),V,n("figure",null,[j,n("figcaption",null,[a(e,{icon:"iconfont icon-k8s"}),B,s("이 생성된 것을 볼 수 있습니다.")])]),H,n("p",null,[s("."),a(e,{icon:"iconfont icon-shell"}),F,s("로 mysql 클라이언트 파드를 생성합니다. 그리고 "),a(e,{icon:"iconfont icon-shell"}),W,s("를 실행한 뒤 "),z,s(" 가 나오면 "),X,s("를 입력하여 "),a(e,{icon:"iconfont icon-mysql"}),s("MySQL 데이터베이스에 로그인합니다. "),J,s("를 입력하여 데이터베이스 목록을 출력해봅니다. 이상이 없으면 "),$,s(", "),Z,s("를 입력하여 빠져나옵니다.")]),nn,a(u)])}const ln=d(b,[["render",sn],["__file","05A.html.vue"]]),cn=JSON.parse('{"path":"/k8s/always-up-to-date-kubernetes/05A.html","title":"05A. MySQL 스테이트풀셋 생성하기","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"05A. MySQL 스테이트풀셋 생성하기","description":"언제나 최신 Kubernetes > 05A. MySQL 스테이트풀셋 생성하기","category":["Kubernetes"],"tag":["crashcourse","digitalocean","kubernetes","minkube","kubctl"],"head":[[{"meta":null},{"property":"og:title","content":"언제나 최신 Kubernetes > 05A. MySQL 스테이트풀셋 생성하기"},{"property":"og:description","content":"05A. MySQL 스테이트풀셋 생성하기"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/k8s/always-up-to-date-kubernetes/05A.html"}]]},"headers":[],"git":{},"readingTime":{"minutes":1.94,"words":582},"filePathRelative":"k8s/always-up-to-date-kubernetes/05A.md","excerpt":"\\n"}');export{ln as comp,cn as data};
