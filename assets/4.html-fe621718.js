import{_ as r,r as c,o as d,c as k,a as n,b as s,t as u,d as a,w as t,e as i}from"./app-d223f2a5.js";const v={},m={id:"frontmatter-title-관련",tabindex:"-1"},b=n("a",{class:"header-anchor",href:"#frontmatter-title-관련","aria-hidden":"true"},"#",-1),_={class:"table-of-contents"},h=i('<hr><h2 id="_4-1-section-overview" tabindex="-1"><a class="header-anchor" href="#_4-1-section-overview" aria-hidden="true">#</a> 4.1 Section overview</h2><ul><li>modern applications tend to be more complex, and most of them use Docker</li><li>we will build &amp; deploy an application that runs in a Docker container</li></ul><hr><h2 id="_4-2-introduction-to-aws-elastic-beanstalk" tabindex="-1"><a class="header-anchor" href="#_4-2-introduction-to-aws-elastic-beanstalk" aria-hidden="true">#</a> 4.2 Introduction to AWS Elastic Beanstalk</h2><ul><li>AWS Elastic Beanstalk (AWS EB) is a service that allows us to deploy an application in the AWS cloud without having to worry about managing the virtual server(s) that runs it</li></ul><hr><h2 id="_4-3-creating-a-new-aws-elastic-beanstalk-application" tabindex="-1"><a class="header-anchor" href="#_4-3-creating-a-new-aws-elastic-beanstalk-application" aria-hidden="true">#</a> 4.3 Creating a new AWS Elastic Beanstalk application</h2><ul><li>when creating an EB app, choose the <em>Docker</em> platform and deploy the sample app</li><li>AWS EB will use two AWS services to run the application: <ul><li>EC2 (virtual servers)</li><li>S3 (storage)</li></ul></li><li>to deploy a new version, go to the environment in EB and upload the file in templates called <code>Dockerrun.aws.public.json</code></li></ul>',9),y={class:"hint-container details"},g=n("summary",null,"Dockerrun.aws.public.json",-1),I=i(`<code>Dockerrun.aws.public.json</code><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),E=i(`<hr><h2 id="_4-4-creating-the-dockerfile" tabindex="-1"><a class="header-anchor" href="#_4-4-creating-the-dockerfile" aria-hidden="true">#</a> 4.4 Creating the Dockerfile</h2><ul><li>create a new file called <code>Dockerfile</code> in the root of the project</li><li>add the following contents to it:</li></ul><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> nginx:1.20-alpine</span>
<span class="token instruction"><span class="token keyword">COPY</span> build /usr/share/nginx/html</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="📚-resources" tabindex="-1"><a class="header-anchor" href="#📚-resources" aria-hidden="true">#</a> 📚 Resources</h3>`,5),R={href:"https://hub.docker.com/_/nginx",target:"_blank",rel:"noopener noreferrer"},w=n("hr",null,null,-1),S=n("h2",{id:"_4-5-building-the-docker-image",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_4-5-building-the-docker-image","aria-hidden":"true"},"#"),s(" 4.5 Building the Docker image")],-1),P=n("ul",null,[n("li",null,[s("to build the Docker image, we will use the command "),n("code",null,"docker build")]),n("li",null,"to build Docker images from a GitLab CI pipeline, we need to start the Docker Daemon as a service")],-1),A={class:"hint-container details"},f=n("summary",null,"Pipeline after this lecture",-1),$=i(`<code>.gitlab-ci.yml</code><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">stages</span><span class="token punctuation">:</span>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),N=n("h3",{id:"📚-resources-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#📚-resources-1","aria-hidden":"true"},"#"),s(" 📚 Resources")],-1),D={href:"https://docs.docker.com/engine/reference/commandline/build/",target:"_blank",rel:"noopener noreferrer"},G={href:"https://hub.docker.com/_/docker",target:"_blank",rel:"noopener noreferrer"},C={href:"https://docs.gitlab.com/ee/ci/variables/predefined_variables.html",target:"_blank",rel:"noopener noreferrer"},T={href:"https://docs.docker.com/engine/reference/commandline/image_ls/",target:"_blank",rel:"noopener noreferrer"},O=n("code",null,"docker image ls",-1),Y=n("hr",null,null,-1),M=n("h2",{id:"_4-6-docker-container-registry",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_4-6-docker-container-registry","aria-hidden":"true"},"#"),s(" 4.6 Docker container registry")],-1),V=n("ul",null,[n("li",null,"to preserve a Docker image, we need to push it to a registry"),n("li",null,"Dockerhub is a public registry with Docker images"),n("li",null,"GitLab offers a private Docker registry which is ideal for private projects")],-1),j={class:"hint-container details"},x=n("summary",null,"Pipeline after this lecture",-1),q=i(`<code>.gitlab-ci.yml</code><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">stages</span><span class="token punctuation">:</span>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),B=n("h3",{id:"📚-resources-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#📚-resources-2","aria-hidden":"true"},"#"),s(" 📚 Resources")],-1),W={href:"https://docs.docker.com/engine/reference/commandline/login/",target:"_blank",rel:"noopener noreferrer"},L={href:"https://docs.docker.com/engine/reference/commandline/push/",target:"_blank",rel:"noopener noreferrer"},K=n("hr",null,null,-1),U=n("h2",{id:"_4-7-testing-the-container",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_4-7-testing-the-container","aria-hidden":"true"},"#"),s(" 4.7 Testing the container")],-1),z=n("ul",null,[n("li",null,"we want to test the container to see if the application running on it (web server) is working properly"),n("li",null,[s("to start the container, we will use the "),n("code",null,"services:"),s(" keyword")])],-1),F={class:"hint-container details"},H=n("summary",null,"Pipeline after this lecture",-1),J=i(`<code>.gitlab-ci.yml</code><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">stages</span><span class="token punctuation">:</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Q=i('<hr><h2 id="_4-8-private-registry-authentication" tabindex="-1"><a class="header-anchor" href="#_4-8-private-registry-authentication" aria-hidden="true">#</a> 4.8 Private registry authentication</h2><ul><li>AWS EB requires authentication credentials to pull our Docker image</li><li>GitLab allows us to create a Deploy Token that AWS can use to log to the registry</li><li>to generate a Deploy Token, from your project, go to <em>Settings &gt; Repository &gt; Deploy tokens</em>.</li><li>create a new Deploy Token with the following scopes: <ul><li><code>read_repository</code></li><li><code>read_registry</code></li></ul></li></ul>',3),X={class:"hint-container details"},Z=n("summary",null,"Pipeline after this lecture",-1),nn=i(`<code>.gitlab-ci.yml</code><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">stages</span><span class="token punctuation">:</span>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),sn=n("hr",null,null,-1),an=n("h2",{id:"_4-9-deploying-to-aws-elastic-beanstalk",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_4-9-deploying-to-aws-elastic-beanstalk","aria-hidden":"true"},"#"),s(" 4.9 Deploying to AWS Elastic Beanstalk")],-1),en=n("ul",null,[n("li",null,"a new deployment to AWS EB happens in two steps"),n("li",null,[s("step 1: we create a new application version with "),n("code",null,"aws elasticbeanstalk create-application-version")]),n("li",null,[s("step 2: we update the environment with the new application version with "),n("code",null,"aws elasticbeanstalk update-environment")])],-1),tn={class:"hint-container details"},ln=n("summary",null,"Pipeline after this lecture",-1),pn=i(`<code>.gitlab-ci.yml</code><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">stages</span><span class="token punctuation">:</span>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),cn=n("hr",null,null,-1),on=n("h2",{id:"_4-10-post-deployment-testing",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_4-10-post-deployment-testing","aria-hidden":"true"},"#"),s(" 4.10 Post-deployment testing")],-1),un=n("ul",null,[n("li",null,"updating an EB environment does not happen instantly"),n("li",null,[s("we will use "),n("code",null,"aws elasticbeanstalk wait"),s(" to know when the environment has been updated")])],-1),rn={class:"hint-container details"},dn=n("summary",null,"Pipeline after this lecture",-1),kn=i(`<code>.gitlab-ci.yml</code><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">stages</span><span class="token punctuation">:</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function vn(o,mn){const e=c("router-link"),l=c("FontIcon"),p=c("ExternalLinkIcon");return d(),k("div",null,[n("h1",m,[b,s(" "+u(o.$frontmatter.title)+" 관련",1)]),n("blockquote",null,[n("p",null,u(o.$frontmatter.description),1)]),n("nav",_,[n("ul",null,[n("li",null,[a(e,{to:"#_4-1-section-overview"},{default:t(()=>[s("4.1 Section overview")]),_:1})]),n("li",null,[a(e,{to:"#_4-2-introduction-to-aws-elastic-beanstalk"},{default:t(()=>[s("4.2 Introduction to AWS Elastic Beanstalk")]),_:1})]),n("li",null,[a(e,{to:"#_4-3-creating-a-new-aws-elastic-beanstalk-application"},{default:t(()=>[s("4.3 Creating a new AWS Elastic Beanstalk application")]),_:1})]),n("li",null,[a(e,{to:"#_4-4-creating-the-dockerfile"},{default:t(()=>[s("4.4 Creating the Dockerfile")]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#📚-resources"},{default:t(()=>[s("📚 Resources")]),_:1})])])]),n("li",null,[a(e,{to:"#_4-5-building-the-docker-image"},{default:t(()=>[s("4.5 Building the Docker image")]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#📚-resources-1"},{default:t(()=>[s("📚 Resources")]),_:1})])])]),n("li",null,[a(e,{to:"#_4-6-docker-container-registry"},{default:t(()=>[s("4.6 Docker container registry")]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#📚-resources-2"},{default:t(()=>[s("📚 Resources")]),_:1})])])]),n("li",null,[a(e,{to:"#_4-7-testing-the-container"},{default:t(()=>[s("4.7 Testing the container")]),_:1})]),n("li",null,[a(e,{to:"#_4-8-private-registry-authentication"},{default:t(()=>[s("4.8 Private registry authentication")]),_:1})]),n("li",null,[a(e,{to:"#_4-9-deploying-to-aws-elastic-beanstalk"},{default:t(()=>[s("4.9 Deploying to AWS Elastic Beanstalk")]),_:1})]),n("li",null,[a(e,{to:"#_4-10-post-deployment-testing"},{default:t(()=>[s("4.10 Post-deployment testing")]),_:1})])])]),h,n("details",y,[g,a(l,{icon:"iconfont icon-json"}),s(),I]),E,n("ul",null,[n("li",null,[n("a",R,[s("Official build of Nginx on Dockerhub"),a(p)])])]),w,S,P,n("details",A,[f,a(l,{icon:"iconfont icon-gitlab"}),s(),$]),N,n("ul",null,[n("li",null,[n("a",D,[s("docker build command reference"),a(p)])]),n("li",null,[n("a",G,[s("Docker in Docker (dind) on Dockerhub"),a(p)])]),n("li",null,[n("a",C,[s("Predefined variables in GitLab"),a(p)])]),n("li",null,[n("a",T,[O,a(p)])])]),Y,M,V,n("details",j,[x,a(l,{icon:"iconfont icon-gitlab"}),s(),q]),B,n("ul",null,[n("li",null,[n("a",W,[s("docker login command reference"),a(p)])]),n("li",null,[n("a",L,[s("docker push command reference"),a(p)])])]),K,U,z,n("details",F,[H,a(l,{icon:"iconfont icon-gitlab"}),s(),J]),Q,n("details",X,[Z,a(l,{icon:"iconfont icon-gitlab"}),s(),nn]),sn,an,en,n("details",tn,[ln,a(l,{icon:"iconfont icon-gitlab"}),s(),pn]),cn,on,un,n("details",rn,[dn,a(l,{icon:"iconfont icon-gitlab"}),s(),kn])])}const _n=r(v,[["render",vn],["__file","4.html.vue"]]);export{_n as default};
