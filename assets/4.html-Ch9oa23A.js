import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,o as d,c as k,a as n,t as v,b as a,w as t,d as s,e as i}from"./app-Ds0QsEfe.js";const m={},b={id:"frontmatter-title-관련",tabindex:"-1"},_={class:"header-anchor",href:"#frontmatter-title-관련"},h={class:"table-of-contents"},g=i('<hr><h2 id="_4-1-section-overview" tabindex="-1"><a class="header-anchor" href="#_4-1-section-overview"><span>4.1 Section overview</span></a></h2><ul><li>modern applications tend to be more complex, and most of them use Docker</li><li>we will build &amp; deploy an application that runs in a Docker container</li></ul><hr><h2 id="_4-2-introduction-to-aws-elastic-beanstalk" tabindex="-1"><a class="header-anchor" href="#_4-2-introduction-to-aws-elastic-beanstalk"><span>4.2 Introduction to AWS Elastic Beanstalk</span></a></h2><ul><li>AWS Elastic Beanstalk (AWS EB) is a service that allows us to deploy an application in the AWS cloud without having to worry about managing the virtual server(s) that runs it</li></ul><hr><h2 id="_4-3-creating-a-new-aws-elastic-beanstalk-application" tabindex="-1"><a class="header-anchor" href="#_4-3-creating-a-new-aws-elastic-beanstalk-application"><span>4.3 Creating a new AWS Elastic Beanstalk application</span></a></h2><ul><li>when creating an EB app, choose the <em>Docker</em> platform and deploy the sample app</li><li>AWS EB will use two AWS services to run the application: <ul><li>EC2 (virtual servers)</li><li>S3 (storage)</li></ul></li><li>to deploy a new version, go to the environment in EB and upload the file in templates called <code>Dockerrun.aws.public.json</code></li></ul>',9),y={class:"hint-container details"},I=n("summary",null,"Dockerrun.aws.public.json",-1),E=i(`<code>Dockerrun.aws.public.json</code><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;AWSEBDockerrunVersion&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;Image&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;Name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nginx&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;Ports&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;ContainerPort&quot;</span><span class="token operator">:</span> <span class="token number">80</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),w=i(`<hr><h2 id="_4-4-creating-the-dockerfile" tabindex="-1"><a class="header-anchor" href="#_4-4-creating-the-dockerfile"><span>4.4 Creating the Dockerfile</span></a></h2><ul><li>create a new file called <code>Dockerfile</code> in the root of the project</li><li>add the following contents to it:</li></ul><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> nginx:1.20-alpine</span>
<span class="token instruction"><span class="token keyword">COPY</span> build /usr/share/nginx/html</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="📚-resources" tabindex="-1"><a class="header-anchor" href="#📚-resources"><span>📚 Resources</span></a></h3>`,5),S={href:"https://hub.docker.com/_/nginx",target:"_blank",rel:"noopener noreferrer"},R=n("hr",null,null,-1),P=n("h2",{id:"_4-5-building-the-docker-image",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_4-5-building-the-docker-image"},[n("span",null,"4.5 Building the Docker image")])],-1),A=n("ul",null,[n("li",null,[s("to build the Docker image, we will use the command "),n("code",null,"docker build")]),n("li",null,"to build Docker images from a GitLab CI pipeline, we need to start the Docker Daemon as a service")],-1),f={class:"hint-container details"},$=n("summary",null,"Pipeline after this lecture",-1),D=i(`<code>.gitlab-ci.yml</code><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">stages</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> build
  <span class="token punctuation">-</span> package

<span class="token key atrule">variables</span><span class="token punctuation">:</span>
  <span class="token key atrule">APP_VERSION</span><span class="token punctuation">:</span> $CI_PIPELINE_IID

<span class="token key atrule">build website</span><span class="token punctuation">:</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span> node<span class="token punctuation">:</span>16<span class="token punctuation">-</span>alpine
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> build
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> yarn install
    <span class="token punctuation">-</span> yarn lint
    <span class="token punctuation">-</span> yarn test
    <span class="token punctuation">-</span> yarn build
    <span class="token punctuation">-</span> echo $APP_VERSION <span class="token punctuation">&gt;</span> build/version.html
  <span class="token key atrule">artifacts</span><span class="token punctuation">:</span>
    <span class="token key atrule">paths</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> build

<span class="token key atrule">build docker image</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> package
  <span class="token key atrule">image</span><span class="token punctuation">:</span> docker<span class="token punctuation">:</span>20.10.12
  <span class="token key atrule">services</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> docker<span class="token punctuation">:</span>20.10.12<span class="token punctuation">-</span>dind
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> echo $CI_REGISTRY_PASSWORD <span class="token punctuation">|</span> docker login <span class="token punctuation">-</span>u $CI_REGISTRY_USER $CI_REGISTRY <span class="token punctuation">-</span><span class="token punctuation">-</span>password<span class="token punctuation">-</span>stdin
    <span class="token punctuation">-</span> docker build <span class="token punctuation">-</span>t $CI_REGISTRY_IMAGE <span class="token punctuation">-</span>t $CI_REGISTRY_IMAGE<span class="token punctuation">:</span>$APP_VERSION .
    <span class="token punctuation">-</span> docker image ls
    <span class="token punctuation">-</span> docker push <span class="token punctuation">-</span><span class="token punctuation">-</span>all<span class="token punctuation">-</span>tags $CI_REGISTRY_IMAGE

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),N=n("h3",{id:"📚-resources-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#📚-resources-1"},[n("span",null,"📚 Resources")])],-1),G={href:"https://docs.docker.com/engine/reference/commandline/build/",target:"_blank",rel:"noopener noreferrer"},C={href:"https://hub.docker.com/_/docker",target:"_blank",rel:"noopener noreferrer"},T={href:"https://docs.gitlab.com/ee/ci/variables/predefined_variables.html",target:"_blank",rel:"noopener noreferrer"},O={href:"https://docs.docker.com/engine/reference/commandline/image_ls/",target:"_blank",rel:"noopener noreferrer"},Y=n("code",null,"docker image ls",-1),M=n("hr",null,null,-1),V=n("h2",{id:"_4-6-docker-container-registry",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_4-6-docker-container-registry"},[n("span",null,"4.6 Docker container registry")])],-1),j=n("ul",null,[n("li",null,"to preserve a Docker image, we need to push it to a registry"),n("li",null,"Dockerhub is a public registry with Docker images"),n("li",null,"GitLab offers a private Docker registry which is ideal for private projects")],-1),x={class:"hint-container details"},W=n("summary",null,"Pipeline after this lecture",-1),B=i(`<code>.gitlab-ci.yml</code><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">stages</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> build
  <span class="token punctuation">-</span> package

<span class="token key atrule">variables</span><span class="token punctuation">:</span>
  <span class="token key atrule">APP_VERSION</span><span class="token punctuation">:</span> $CI_PIPELINE_IID

<span class="token key atrule">build website</span><span class="token punctuation">:</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span> node<span class="token punctuation">:</span>16<span class="token punctuation">-</span>alpine
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> build
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> yarn install
    <span class="token punctuation">-</span> yarn lint
    <span class="token punctuation">-</span> yarn test
    <span class="token punctuation">-</span> yarn build
    <span class="token punctuation">-</span> echo $APP_VERSION <span class="token punctuation">&gt;</span> build/version.html
  <span class="token key atrule">artifacts</span><span class="token punctuation">:</span>
    <span class="token key atrule">paths</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> build

<span class="token key atrule">build docker image</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> package
  <span class="token key atrule">image</span><span class="token punctuation">:</span> docker<span class="token punctuation">:</span>20.10.12
  <span class="token key atrule">services</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> docker<span class="token punctuation">:</span>20.10.12<span class="token punctuation">-</span>dind
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> echo $CI_REGISTRY_PASSWORD <span class="token punctuation">|</span> docker login <span class="token punctuation">-</span>u $CI_REGISTRY_USER $CI_REGISTRY <span class="token punctuation">-</span><span class="token punctuation">-</span>password<span class="token punctuation">-</span>stdin
    <span class="token punctuation">-</span> docker build <span class="token punctuation">-</span>t $CI_REGISTRY_IMAGE <span class="token punctuation">-</span>t $CI_REGISTRY_IMAGE<span class="token punctuation">:</span>$APP_VERSION .
    <span class="token punctuation">-</span> docker image ls
    <span class="token punctuation">-</span> docker push <span class="token punctuation">-</span><span class="token punctuation">-</span>all<span class="token punctuation">-</span>tags $CI_REGISTRY_IMAGE

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),q=n("h3",{id:"📚-resources-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#📚-resources-2"},[n("span",null,"📚 Resources")])],-1),L={href:"https://docs.docker.com/engine/reference/commandline/login/",target:"_blank",rel:"noopener noreferrer"},U={href:"https://docs.docker.com/engine/reference/commandline/push/",target:"_blank",rel:"noopener noreferrer"},K=n("hr",null,null,-1),z=n("h2",{id:"_4-7-testing-the-container",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_4-7-testing-the-container"},[n("span",null,"4.7 Testing the container")])],-1),F=n("ul",null,[n("li",null,"we want to test the container to see if the application running on it (web server) is working properly"),n("li",null,[s("to start the container, we will use the "),n("code",null,"services:"),s(" keyword")])],-1),J={class:"hint-container details"},H=n("summary",null,"Pipeline after this lecture",-1),Q=i(`<code>.gitlab-ci.yml</code><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">stages</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> build
  <span class="token punctuation">-</span> package
  <span class="token punctuation">-</span> test

<span class="token key atrule">variables</span><span class="token punctuation">:</span>
  <span class="token key atrule">APP_VERSION</span><span class="token punctuation">:</span> $CI_PIPELINE_IID

<span class="token key atrule">build website</span><span class="token punctuation">:</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span> node<span class="token punctuation">:</span>16<span class="token punctuation">-</span>alpine
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> build
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> yarn install
    <span class="token punctuation">-</span> yarn lint
    <span class="token punctuation">-</span> yarn test
    <span class="token punctuation">-</span> yarn build
    <span class="token punctuation">-</span> echo $APP_VERSION <span class="token punctuation">&gt;</span> build/version.html
  <span class="token key atrule">artifacts</span><span class="token punctuation">:</span>
    <span class="token key atrule">paths</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> build

<span class="token key atrule">build docker image</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> package
  <span class="token key atrule">image</span><span class="token punctuation">:</span> docker<span class="token punctuation">:</span>20.10.12
  <span class="token key atrule">services</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> docker<span class="token punctuation">:</span>20.10.12<span class="token punctuation">-</span>dind
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> echo $CI_REGISTRY_PASSWORD <span class="token punctuation">|</span> docker login <span class="token punctuation">-</span>u $CI_REGISTRY_USER $CI_REGISTRY <span class="token punctuation">-</span><span class="token punctuation">-</span>password<span class="token punctuation">-</span>stdin
    <span class="token punctuation">-</span> docker build <span class="token punctuation">-</span>t $CI_REGISTRY_IMAGE <span class="token punctuation">-</span>t $CI_REGISTRY_IMAGE<span class="token punctuation">:</span>$APP_VERSION .
    <span class="token punctuation">-</span> docker image ls
    <span class="token punctuation">-</span> docker push <span class="token punctuation">-</span><span class="token punctuation">-</span>all<span class="token punctuation">-</span>tags $CI_REGISTRY_IMAGE

<span class="token key atrule">test docker image</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> test
  <span class="token key atrule">image</span><span class="token punctuation">:</span> curlimages/curl
  <span class="token key atrule">services</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> $CI_REGISTRY_IMAGE<span class="token punctuation">:</span>$APP_VERSION
      <span class="token key atrule">alias</span><span class="token punctuation">:</span> website
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> curl http<span class="token punctuation">:</span>//website/version.html <span class="token punctuation">|</span> grep $APP_VERSION
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),X=i('<hr><h2 id="_4-8-private-registry-authentication" tabindex="-1"><a class="header-anchor" href="#_4-8-private-registry-authentication"><span>4.8 Private registry authentication</span></a></h2><ul><li>AWS EB requires authentication credentials to pull our Docker image</li><li>GitLab allows us to create a Deploy Token that AWS can use to log to the registry</li><li>to generate a Deploy Token, from your project, go to <em>Settings &gt; Repository &gt; Deploy tokens</em>.</li><li>create a new Deploy Token with the following scopes: <ul><li><code>read_repository</code></li><li><code>read_registry</code></li></ul></li></ul>',3),Z={class:"hint-container details"},nn=n("summary",null,"Pipeline after this lecture",-1),sn=i(`<code>.gitlab-ci.yml</code><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">stages</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> build
  <span class="token punctuation">-</span> package
  <span class="token punctuation">-</span> test
  <span class="token punctuation">-</span> deploy

<span class="token key atrule">variables</span><span class="token punctuation">:</span>
  <span class="token key atrule">APP_VERSION</span><span class="token punctuation">:</span> $CI_PIPELINE_IID

<span class="token key atrule">.build website</span><span class="token punctuation">:</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span> node<span class="token punctuation">:</span>16<span class="token punctuation">-</span>alpine
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> build
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> yarn install
    <span class="token punctuation">-</span> yarn lint
    <span class="token punctuation">-</span> yarn test
    <span class="token punctuation">-</span> yarn build
    <span class="token punctuation">-</span> echo $APP_VERSION <span class="token punctuation">&gt;</span> build/version.html
  <span class="token key atrule">artifacts</span><span class="token punctuation">:</span>
    <span class="token key atrule">paths</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> build

<span class="token key atrule">.build docker image</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> package
  <span class="token key atrule">image</span><span class="token punctuation">:</span> docker<span class="token punctuation">:</span>20.10.12
  <span class="token key atrule">services</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> docker<span class="token punctuation">:</span>20.10.12<span class="token punctuation">-</span>dind
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> echo $CI_REGISTRY_PASSWORD <span class="token punctuation">|</span> docker login <span class="token punctuation">-</span>u $CI_REGISTRY_USER $CI_REGISTRY <span class="token punctuation">-</span><span class="token punctuation">-</span>password<span class="token punctuation">-</span>stdin
    <span class="token punctuation">-</span> docker build <span class="token punctuation">-</span>t $CI_REGISTRY_IMAGE <span class="token punctuation">-</span>t $CI_REGISTRY_IMAGE<span class="token punctuation">:</span>$APP_VERSION .
    <span class="token punctuation">-</span> docker image ls
    <span class="token punctuation">-</span> docker push <span class="token punctuation">-</span><span class="token punctuation">-</span>all<span class="token punctuation">-</span>tags $CI_REGISTRY_IMAGE

<span class="token key atrule">.test docker image</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> test
  <span class="token key atrule">image</span><span class="token punctuation">:</span> curlimages/curl
  <span class="token key atrule">services</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> $CI_REGISTRY_IMAGE<span class="token punctuation">:</span>$APP_VERSION
      <span class="token key atrule">alias</span><span class="token punctuation">:</span> website
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> curl http<span class="token punctuation">:</span>//website/version.html <span class="token punctuation">|</span> grep $APP_VERSION

<span class="token key atrule">deploy to production</span><span class="token punctuation">:</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> amazon/aws<span class="token punctuation">-</span>cli<span class="token punctuation">:</span>2.4.11
    <span class="token key atrule">entrypoint</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;&quot;</span><span class="token punctuation">]</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> deploy
  <span class="token key atrule">variables</span><span class="token punctuation">:</span>
    <span class="token key atrule">APP_NAME</span><span class="token punctuation">:</span> My website
    <span class="token key atrule">APP_ENV_NAME</span><span class="token punctuation">:</span> Mywebsite<span class="token punctuation">-</span>env
  <span class="token key atrule">environment</span><span class="token punctuation">:</span> production
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> aws <span class="token punctuation">-</span><span class="token punctuation">-</span>version
    <span class="token punctuation">-</span> yum install <span class="token punctuation">-</span>y gettext
    <span class="token punctuation">-</span> export DEPLOY_TOKEN=$(echo $GITLAB_DEPLOY_TOKEN <span class="token punctuation">|</span> tr <span class="token punctuation">-</span>d &quot;\\n&quot; <span class="token punctuation">|</span> base64)
    <span class="token punctuation">-</span> envsubst &lt; templates/Dockerrun.aws.json <span class="token punctuation">&gt;</span> Dockerrun.aws.json
    <span class="token punctuation">-</span> envsubst &lt; templates/auth.json <span class="token punctuation">&gt;</span> auth.json
    <span class="token punctuation">-</span> cat Dockerrun.aws.json
    <span class="token punctuation">-</span> cat auth.json
    <span class="token punctuation">-</span> aws s3 cp Dockerrun.aws.json s3<span class="token punctuation">:</span>//$AWS_S3_BUCKET/Dockerrun.aws.json
    <span class="token punctuation">-</span> aws s3 cp auth.json s3<span class="token punctuation">:</span>//$AWS_S3_BUCKET/auth.json

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),an=n("hr",null,null,-1),en=n("h2",{id:"_4-9-deploying-to-aws-elastic-beanstalk",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_4-9-deploying-to-aws-elastic-beanstalk"},[n("span",null,"4.9 Deploying to AWS Elastic Beanstalk")])],-1),tn=n("ul",null,[n("li",null,"a new deployment to AWS EB happens in two steps"),n("li",null,[s("step 1: we create a new application version with "),n("code",null,"aws elasticbeanstalk create-application-version")]),n("li",null,[s("step 2: we update the environment with the new application version with "),n("code",null,"aws elasticbeanstalk update-environment")])],-1),ln={class:"hint-container details"},cn=n("summary",null,"Pipeline after this lecture",-1),pn=i(`<code>.gitlab-ci.yml</code><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">stages</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> build
  <span class="token punctuation">-</span> package
  <span class="token punctuation">-</span> test
  <span class="token punctuation">-</span> deploy

<span class="token key atrule">variables</span><span class="token punctuation">:</span>
  <span class="token key atrule">APP_VERSION</span><span class="token punctuation">:</span> $CI_PIPELINE_IID

<span class="token key atrule">build website</span><span class="token punctuation">:</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span> node<span class="token punctuation">:</span>16<span class="token punctuation">-</span>alpine
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> build
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> yarn install
    <span class="token punctuation">-</span> yarn lint
    <span class="token punctuation">-</span> yarn test
    <span class="token punctuation">-</span> yarn build
    <span class="token punctuation">-</span> echo $APP_VERSION <span class="token punctuation">&gt;</span> build/version.html
  <span class="token key atrule">artifacts</span><span class="token punctuation">:</span>
    <span class="token key atrule">paths</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> build

<span class="token key atrule">build docker image</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> package
  <span class="token key atrule">image</span><span class="token punctuation">:</span> docker<span class="token punctuation">:</span>20.10.12
  <span class="token key atrule">services</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> docker<span class="token punctuation">:</span>20.10.12<span class="token punctuation">-</span>dind
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> echo $CI_REGISTRY_PASSWORD <span class="token punctuation">|</span> docker login <span class="token punctuation">-</span>u $CI_REGISTRY_USER $CI_REGISTRY <span class="token punctuation">-</span><span class="token punctuation">-</span>password<span class="token punctuation">-</span>stdin
    <span class="token punctuation">-</span> docker build <span class="token punctuation">-</span>t $CI_REGISTRY_IMAGE <span class="token punctuation">-</span>t $CI_REGISTRY_IMAGE<span class="token punctuation">:</span>$APP_VERSION .
    <span class="token punctuation">-</span> docker image ls
    <span class="token punctuation">-</span> docker push <span class="token punctuation">-</span><span class="token punctuation">-</span>all<span class="token punctuation">-</span>tags $CI_REGISTRY_IMAGE

<span class="token key atrule">test docker image</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> test
  <span class="token key atrule">image</span><span class="token punctuation">:</span> curlimages/curl
  <span class="token key atrule">services</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> $CI_REGISTRY_IMAGE<span class="token punctuation">:</span>$APP_VERSION
      <span class="token key atrule">alias</span><span class="token punctuation">:</span> website
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> curl http<span class="token punctuation">:</span>//website/version.html <span class="token punctuation">|</span> grep $APP_VERSION

<span class="token key atrule">deploy to production</span><span class="token punctuation">:</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> amazon/aws<span class="token punctuation">-</span>cli<span class="token punctuation">:</span>2.4.11
    <span class="token key atrule">entrypoint</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;&quot;</span><span class="token punctuation">]</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> deploy
  <span class="token key atrule">variables</span><span class="token punctuation">:</span>
    <span class="token key atrule">APP_NAME</span><span class="token punctuation">:</span> My website
    <span class="token key atrule">APP_ENV_NAME</span><span class="token punctuation">:</span> Mywebsite<span class="token punctuation">-</span>env
  <span class="token key atrule">environment</span><span class="token punctuation">:</span> production
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> aws <span class="token punctuation">-</span><span class="token punctuation">-</span>version
    <span class="token punctuation">-</span> yum install <span class="token punctuation">-</span>y gettext
    <span class="token punctuation">-</span> export DEPLOY_TOKEN=$(echo $GITLAB_DEPLOY_TOKEN <span class="token punctuation">|</span> tr <span class="token punctuation">-</span>d &quot;\\n&quot; <span class="token punctuation">|</span> base64)
    <span class="token punctuation">-</span> envsubst &lt; templates/Dockerrun.aws.json <span class="token punctuation">&gt;</span> Dockerrun.aws.json
    <span class="token punctuation">-</span> envsubst &lt; templates/auth.json <span class="token punctuation">&gt;</span> auth.json
    <span class="token punctuation">-</span> cat Dockerrun.aws.json
    <span class="token punctuation">-</span> cat auth.json
    <span class="token punctuation">-</span> aws s3 cp Dockerrun.aws.json s3<span class="token punctuation">:</span>//$AWS_S3_BUCKET/Dockerrun.aws.json
    <span class="token punctuation">-</span> aws s3 cp auth.json s3<span class="token punctuation">:</span>//$AWS_S3_BUCKET/auth.json
    <span class="token punctuation">-</span> aws elasticbeanstalk create<span class="token punctuation">-</span>application<span class="token punctuation">-</span>version <span class="token punctuation">-</span><span class="token punctuation">-</span>application<span class="token punctuation">-</span>name &quot;$APP_NAME&quot; <span class="token punctuation">-</span><span class="token punctuation">-</span>version<span class="token punctuation">-</span>label $APP_VERSION <span class="token punctuation">-</span><span class="token punctuation">-</span>source<span class="token punctuation">-</span>bundle S3Bucket=$AWS_S3_BUCKET<span class="token punctuation">,</span>S3Key=Dockerrun.aws.json
    <span class="token punctuation">-</span> aws elasticbeanstalk update<span class="token punctuation">-</span>environment <span class="token punctuation">-</span><span class="token punctuation">-</span>application<span class="token punctuation">-</span>name &quot;$APP_NAME&quot; <span class="token punctuation">-</span><span class="token punctuation">-</span>version<span class="token punctuation">-</span>label $APP_VERSION <span class="token punctuation">-</span><span class="token punctuation">-</span>environment<span class="token punctuation">-</span>name $APP_ENV_NAME

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),on=n("hr",null,null,-1),un=n("h2",{id:"_4-10-post-deployment-testing",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_4-10-post-deployment-testing"},[n("span",null,"4.10 Post-deployment testing")])],-1),rn=n("ul",null,[n("li",null,"updating an EB environment does not happen instantly"),n("li",null,[s("we will use "),n("code",null,"aws elasticbeanstalk wait"),s(" to know when the environment has been updated")])],-1),dn={class:"hint-container details"},kn=n("summary",null,"Pipeline after this lecture",-1),vn=i(`<code>.gitlab-ci.yml</code><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">stages</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> build
  <span class="token punctuation">-</span> package
  <span class="token punctuation">-</span> test
  <span class="token punctuation">-</span> deploy

<span class="token key atrule">variables</span><span class="token punctuation">:</span>
  <span class="token key atrule">APP_VERSION</span><span class="token punctuation">:</span> $CI_PIPELINE_IID

<span class="token key atrule">build website</span><span class="token punctuation">:</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span> node<span class="token punctuation">:</span>16<span class="token punctuation">-</span>alpine
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> build
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> yarn install
    <span class="token punctuation">-</span> yarn lint
    <span class="token punctuation">-</span> yarn test
    <span class="token punctuation">-</span> yarn build
    <span class="token punctuation">-</span> echo $APP_VERSION <span class="token punctuation">&gt;</span> build/version.html
  <span class="token key atrule">artifacts</span><span class="token punctuation">:</span>
    <span class="token key atrule">paths</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> build

<span class="token key atrule">build docker image</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> package
  <span class="token key atrule">image</span><span class="token punctuation">:</span> docker<span class="token punctuation">:</span>20.10.12
  <span class="token key atrule">services</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> docker<span class="token punctuation">:</span>20.10.12<span class="token punctuation">-</span>dind
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> echo $CI_REGISTRY_PASSWORD <span class="token punctuation">|</span> docker login <span class="token punctuation">-</span>u $CI_REGISTRY_USER $CI_REGISTRY <span class="token punctuation">-</span><span class="token punctuation">-</span>password<span class="token punctuation">-</span>stdin
    <span class="token punctuation">-</span> docker build <span class="token punctuation">-</span>t $CI_REGISTRY_IMAGE <span class="token punctuation">-</span>t $CI_REGISTRY_IMAGE<span class="token punctuation">:</span>$APP_VERSION .
    <span class="token punctuation">-</span> docker image ls
    <span class="token punctuation">-</span> docker push <span class="token punctuation">-</span><span class="token punctuation">-</span>all<span class="token punctuation">-</span>tags $CI_REGISTRY_IMAGE

<span class="token key atrule">test docker image</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> test
  <span class="token key atrule">image</span><span class="token punctuation">:</span> curlimages/curl
  <span class="token key atrule">services</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> $CI_REGISTRY_IMAGE<span class="token punctuation">:</span>$APP_VERSION
      <span class="token key atrule">alias</span><span class="token punctuation">:</span> website
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> curl http<span class="token punctuation">:</span>//website/version.html <span class="token punctuation">|</span> grep $APP_VERSION

<span class="token key atrule">deploy to production</span><span class="token punctuation">:</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> amazon/aws<span class="token punctuation">-</span>cli<span class="token punctuation">:</span>2.4.11
    <span class="token key atrule">entrypoint</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;&quot;</span><span class="token punctuation">]</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> deploy
  <span class="token key atrule">variables</span><span class="token punctuation">:</span>
    <span class="token key atrule">APP_NAME</span><span class="token punctuation">:</span> My website
    <span class="token key atrule">APP_ENV_NAME</span><span class="token punctuation">:</span> Mywebsite<span class="token punctuation">-</span>env
  <span class="token key atrule">environment</span><span class="token punctuation">:</span> production
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> aws <span class="token punctuation">-</span><span class="token punctuation">-</span>version
    <span class="token punctuation">-</span> yum install <span class="token punctuation">-</span>y gettext
    <span class="token punctuation">-</span> export DEPLOY_TOKEN=$(echo $GITLAB_DEPLOY_TOKEN <span class="token punctuation">|</span> tr <span class="token punctuation">-</span>d &quot;\\n&quot; <span class="token punctuation">|</span> base64)
    <span class="token punctuation">-</span> envsubst &lt; templates/Dockerrun.aws.json <span class="token punctuation">&gt;</span> Dockerrun.aws.json
    <span class="token punctuation">-</span> envsubst &lt; templates/auth.json <span class="token punctuation">&gt;</span> auth.json
    <span class="token punctuation">-</span> cat Dockerrun.aws.json
    <span class="token punctuation">-</span> cat auth.json
    <span class="token punctuation">-</span> aws s3 cp Dockerrun.aws.json s3<span class="token punctuation">:</span>//$AWS_S3_BUCKET/Dockerrun.aws.json
    <span class="token punctuation">-</span> aws s3 cp auth.json s3<span class="token punctuation">:</span>//$AWS_S3_BUCKET/auth.json
    <span class="token punctuation">-</span> aws elasticbeanstalk create<span class="token punctuation">-</span>application<span class="token punctuation">-</span>version <span class="token punctuation">-</span><span class="token punctuation">-</span>application<span class="token punctuation">-</span>name &quot;$APP_NAME&quot; <span class="token punctuation">-</span><span class="token punctuation">-</span>version<span class="token punctuation">-</span>label $APP_VERSION <span class="token punctuation">-</span><span class="token punctuation">-</span>source<span class="token punctuation">-</span>bundle S3Bucket=$AWS_S3_BUCKET<span class="token punctuation">,</span>S3Key=Dockerrun.aws.json
    <span class="token punctuation">-</span> aws elasticbeanstalk update<span class="token punctuation">-</span>environment <span class="token punctuation">-</span><span class="token punctuation">-</span>application<span class="token punctuation">-</span>name &quot;$APP_NAME&quot; <span class="token punctuation">-</span><span class="token punctuation">-</span>version<span class="token punctuation">-</span>label $APP_VERSION <span class="token punctuation">-</span><span class="token punctuation">-</span>environment<span class="token punctuation">-</span>name $APP_ENV_NAME
    <span class="token punctuation">-</span> aws elasticbeanstalk wait environment<span class="token punctuation">-</span>updated <span class="token punctuation">-</span><span class="token punctuation">-</span>application<span class="token punctuation">-</span>name &quot;$APP_NAME&quot; <span class="token punctuation">-</span><span class="token punctuation">-</span>version<span class="token punctuation">-</span>label $APP_VERSION <span class="token punctuation">-</span><span class="token punctuation">-</span>environment<span class="token punctuation">-</span>name $APP_ENV_NAME
    <span class="token punctuation">-</span> curl $CI_ENVIRONMENT_URL/version.html <span class="token punctuation">|</span> grep $APP_VERSION
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),mn=n("hr",null,null,-1);function bn(o,_n){const e=p("router-link"),l=p("FontIcon"),c=p("ExternalLinkIcon"),u=p("TagLinks");return d(),k("div",null,[n("h1",b,[n("a",_,[n("span",null,v(o.$frontmatter.title)+" 관련",1)])]),n("nav",h,[n("ul",null,[n("li",null,[a(e,{to:"#_4-1-section-overview"},{default:t(()=>[s("4.1 Section overview")]),_:1})]),n("li",null,[a(e,{to:"#_4-2-introduction-to-aws-elastic-beanstalk"},{default:t(()=>[s("4.2 Introduction to AWS Elastic Beanstalk")]),_:1})]),n("li",null,[a(e,{to:"#_4-3-creating-a-new-aws-elastic-beanstalk-application"},{default:t(()=>[s("4.3 Creating a new AWS Elastic Beanstalk application")]),_:1})]),n("li",null,[a(e,{to:"#_4-4-creating-the-dockerfile"},{default:t(()=>[s("4.4 Creating the Dockerfile")]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#📚-resources"},{default:t(()=>[s("📚 Resources")]),_:1})])])]),n("li",null,[a(e,{to:"#_4-5-building-the-docker-image"},{default:t(()=>[s("4.5 Building the Docker image")]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#📚-resources-1"},{default:t(()=>[s("📚 Resources")]),_:1})])])]),n("li",null,[a(e,{to:"#_4-6-docker-container-registry"},{default:t(()=>[s("4.6 Docker container registry")]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#📚-resources-2"},{default:t(()=>[s("📚 Resources")]),_:1})])])]),n("li",null,[a(e,{to:"#_4-7-testing-the-container"},{default:t(()=>[s("4.7 Testing the container")]),_:1})]),n("li",null,[a(e,{to:"#_4-8-private-registry-authentication"},{default:t(()=>[s("4.8 Private registry authentication")]),_:1})]),n("li",null,[a(e,{to:"#_4-9-deploying-to-aws-elastic-beanstalk"},{default:t(()=>[s("4.9 Deploying to AWS Elastic Beanstalk")]),_:1})]),n("li",null,[a(e,{to:"#_4-10-post-deployment-testing"},{default:t(()=>[s("4.10 Post-deployment testing")]),_:1})])])]),g,n("details",y,[I,a(l,{icon:"iconfont icon-json"}),s(),E]),w,n("ul",null,[n("li",null,[n("a",S,[s("Official build of Nginx on Dockerhub"),a(c)])])]),R,P,A,n("details",f,[$,a(l,{icon:"iconfont icon-gitlab"}),s(),D]),N,n("ul",null,[n("li",null,[n("a",G,[s("docker build command reference"),a(c)])]),n("li",null,[n("a",C,[s("Docker in Docker (dind) on Dockerhub"),a(c)])]),n("li",null,[n("a",T,[s("Predefined variables in GitLab"),a(c)])]),n("li",null,[n("a",O,[Y,a(c)])])]),M,V,j,n("details",x,[W,a(l,{icon:"iconfont icon-gitlab"}),s(),B]),q,n("ul",null,[n("li",null,[n("a",L,[s("docker login command reference"),a(c)])]),n("li",null,[n("a",U,[s("docker push command reference"),a(c)])])]),K,z,F,n("details",J,[H,a(l,{icon:"iconfont icon-gitlab"}),s(),Q]),X,n("details",Z,[nn,a(l,{icon:"iconfont icon-gitlab"}),s(),sn]),an,en,tn,n("details",ln,[cn,a(l,{icon:"iconfont icon-gitlab"}),s(),pn]),on,un,rn,n("details",dn,[kn,a(l,{icon:"iconfont icon-gitlab"}),s(),vn]),mn,a(u)])}const yn=r(m,[["render",bn],["__file","4.html.vue"]]),In=JSON.parse('{"path":"/devops/freecodecamp-gitlab-ci/4.html","title":"Unit 4 - Deploying a dockerized application to AWS","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Unit 4 - Deploying a dockerized application to AWS","description":"freecodecamp.org - DevOps with GitLab CI > Unit 4 - Deploying a dockerized application to AWS","category":["Gitlab"],"tag":["crashcourse","youtube","freecodecamp","vdespa","gitlab","yaml","ci","cd","cicd"],"head":[[{"meta":null},{"property":"og:title","content":"freecodecamp.org - DevOps with GitLab CI > Unit 4 - Deploying a dockerized application to AWS"},{"property":"og:description","content":"Unit 4 - Deploying a dockerized application to AWS"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/devops/freecodecamp-gitlab-ci/4.html"}]]},"headers":[{"level":2,"title":"4.1 Section overview","slug":"_4-1-section-overview","link":"#_4-1-section-overview","children":[]},{"level":2,"title":"4.2 Introduction to AWS Elastic Beanstalk","slug":"_4-2-introduction-to-aws-elastic-beanstalk","link":"#_4-2-introduction-to-aws-elastic-beanstalk","children":[]},{"level":2,"title":"4.3 Creating a new AWS Elastic Beanstalk application","slug":"_4-3-creating-a-new-aws-elastic-beanstalk-application","link":"#_4-3-creating-a-new-aws-elastic-beanstalk-application","children":[]},{"level":2,"title":"4.4 Creating the Dockerfile","slug":"_4-4-creating-the-dockerfile","link":"#_4-4-creating-the-dockerfile","children":[{"level":3,"title":"📚 Resources","slug":"📚-resources","link":"#📚-resources","children":[]}]},{"level":2,"title":"4.5 Building the Docker image","slug":"_4-5-building-the-docker-image","link":"#_4-5-building-the-docker-image","children":[{"level":3,"title":"📚 Resources","slug":"📚-resources-1","link":"#📚-resources-1","children":[]}]},{"level":2,"title":"4.6 Docker container registry","slug":"_4-6-docker-container-registry","link":"#_4-6-docker-container-registry","children":[{"level":3,"title":"📚 Resources","slug":"📚-resources-2","link":"#📚-resources-2","children":[]}]},{"level":2,"title":"4.7 Testing the container","slug":"_4-7-testing-the-container","link":"#_4-7-testing-the-container","children":[]},{"level":2,"title":"4.8 Private registry authentication","slug":"_4-8-private-registry-authentication","link":"#_4-8-private-registry-authentication","children":[]},{"level":2,"title":"4.9 Deploying to AWS Elastic Beanstalk","slug":"_4-9-deploying-to-aws-elastic-beanstalk","link":"#_4-9-deploying-to-aws-elastic-beanstalk","children":[]},{"level":2,"title":"4.10 Post-deployment testing","slug":"_4-10-post-deployment-testing","link":"#_4-10-post-deployment-testing","children":[]}],"git":{},"readingTime":{"minutes":4.53,"words":1359},"filePathRelative":"devops/freecodecamp-gitlab-ci/4.md","excerpt":"\\n\\n<hr>\\n<h2>4.1 Section overview</h2>\\n<ul>\\n<li>modern applications tend to be more complex, and most of them use Docker</li>\\n<li>we will build &amp; deploy an application that runs in a Docker container</li>\\n</ul>\\n<hr>\\n<h2>4.2 Introduction to AWS Elastic Beanstalk</h2>\\n<ul>\\n<li>AWS Elastic Beanstalk (AWS EB) is a service that allows us to deploy an application in the AWS cloud without having to worry about managing the virtual server(s) that runs it</li>\\n</ul>"}');export{yn as comp,In as data};
