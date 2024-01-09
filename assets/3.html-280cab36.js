import{_ as d,r as c,o as r,c as k,a as n,b as s,t as u,d as a,w as t,e as i}from"./app-d223f2a5.js";const v={},m={id:"frontmatter-title-관련",tabindex:"-1"},b=n("a",{class:"header-anchor",href:"#frontmatter-title-관련","aria-hidden":"true"},"#",-1),y={class:"table-of-contents"},h=i('<hr><h2 id="_3-1-unit-overview" tabindex="-1"><a class="header-anchor" href="#_3-1-unit-overview" aria-hidden="true">#</a> 3.1 Unit overview</h2><ul><li>we will learn about deployments and take our website project and deploy it to the AWS cloud.</li><li>learn about other DevOps practices such as CI/CD</li></ul><hr><h2 id="_3-2-a-quick-introduction-to-aws" tabindex="-1"><a class="header-anchor" href="#_3-2-a-quick-introduction-to-aws" aria-hidden="true">#</a> 3.2 A quick introduction to AWS</h2><ul><li>AWS (Amazon Web Services) is a cloud platform provider offering over 200 products &amp; services available in data centers all over the world</li><li>you need an AWS account to continue with the rest of the course</li></ul><h3 id="📚-resources" tabindex="-1"><a class="header-anchor" href="#📚-resources" aria-hidden="true">#</a> 📚 Resources</h3>',7),g={href:"https://aws.amazon.com",target:"_blank",rel:"noopener noreferrer"},_=i('<hr><h2 id="_3-3-aws-s3" tabindex="-1"><a class="header-anchor" href="#_3-3-aws-s3" aria-hidden="true">#</a> 3.3 AWS S3</h2><ul><li>the first AWS service that we will use is AWS S3 which stands for simple storage service</li><li>the website is static and requires no computing power or a database</li><li>we will use AWS S3 to store the public files and serve them over HTTP</li><li>AWS S3 files (which AWS calls objects) are stored in buckets</li><li>the name of the bucket needs to be unique</li><li>the AWS console allows us to manually upload files through the web interface</li></ul><hr><h2 id="_3-4-aws-cli" tabindex="-1"><a class="header-anchor" href="#_3-4-aws-cli" aria-hidden="true">#</a> 3.4 AWS CLI</h2><ul><li>to interact with the AWS cloud services, we need to use a CLI tool called AWS CLI</li><li>we will use AWS CLI v2 throughout the course</li><li>when using Docker images in pipelines, I highly recommend specifying a tag or at least a major version (if available)</li><li>if you don&#39;t specify a tag, at least log the version of every tool you use, as this can help with debugging later on</li><li>example: <code>aws --version</code></li></ul>',6),f={class:"hint-container details"},w=n("summary",null,"Pipeline after this lecture",-1),A=i(`<code>.gitlab-ci.yml</code><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">stages</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> build
  <span class="token punctuation">-</span> test
  <span class="token punctuation">-</span> deploy

<span class="token key atrule">build website</span><span class="token punctuation">:</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span> node<span class="token punctuation">:</span>16<span class="token punctuation">-</span>alpine
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> build
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> yarn install
    <span class="token punctuation">-</span> yarn lint
    <span class="token punctuation">-</span> yarn test
    <span class="token punctuation">-</span> yarn build
  <span class="token key atrule">artifacts</span><span class="token punctuation">:</span>
    <span class="token key atrule">paths</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> build

<span class="token key atrule">test website</span><span class="token punctuation">:</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span> node<span class="token punctuation">:</span>16<span class="token punctuation">-</span>alpine
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> test
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> yarn global add serve
    <span class="token punctuation">-</span> apk add curl
    <span class="token punctuation">-</span> serve <span class="token punctuation">-</span>s build &amp;
    <span class="token punctuation">-</span> sleep 10
    <span class="token punctuation">-</span> curl http<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>3000 <span class="token punctuation">|</span> grep &quot;React App&quot;

<span class="token key atrule">deploy to s3</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> deploy
  <span class="token key atrule">image</span><span class="token punctuation">:</span> 
    <span class="token key atrule">name</span><span class="token punctuation">:</span> amazon/aws<span class="token punctuation">-</span>cli<span class="token punctuation">:</span>2.4.11
    <span class="token key atrule">entrypoint</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;&quot;</span><span class="token punctuation">]</span>
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> aws <span class="token punctuation">-</span><span class="token punctuation">-</span>version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),C=n("h3",{id:"📚-resources-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#📚-resources-1","aria-hidden":"true"},"#"),s(" 📚 Resources")],-1),I={href:"https://awscli.amazonaws.com/v2/documentation/api/latest/reference/index.html",target:"_blank",rel:"noopener noreferrer"},E={href:"https://hub.docker.com/r/amazon/aws-cli",target:"_blank",rel:"noopener noreferrer"},S=n("hr",null,null,-1),q=n("h2",{id:"_3-5-uploading-a-file-to-s3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3-5-uploading-a-file-to-s3","aria-hidden":"true"},"#"),s(" 3.5 Uploading a file to S3")],-1),R=n("ul",null,[n("li",null,[s("to upload a file to S3, we will use the copy command "),n("code",null,"cp")]),n("li",null,[n("code",null,"aws s3 cp"),s(" allows us to copy a file to and from AWS S3")])],-1),N={class:"hint-container details"},x=n("summary",null,"Pipeline after this lecture",-1),T=i(`<code>.gitlab-ci.yml</code><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">stages</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> build
  <span class="token punctuation">-</span> test
  <span class="token punctuation">-</span> deploy

<span class="token key atrule">.build website</span><span class="token punctuation">:</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span> node<span class="token punctuation">:</span>16<span class="token punctuation">-</span>alpine
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> build
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> yarn install
    <span class="token punctuation">-</span> yarn lint
    <span class="token punctuation">-</span> yarn test
    <span class="token punctuation">-</span> yarn build
  <span class="token key atrule">artifacts</span><span class="token punctuation">:</span>
    <span class="token key atrule">paths</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> build

<span class="token key atrule">.test website</span><span class="token punctuation">:</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span> node<span class="token punctuation">:</span>16<span class="token punctuation">-</span>alpine
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> test
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> yarn global add serve
    <span class="token punctuation">-</span> apk add curl
    <span class="token punctuation">-</span> serve <span class="token punctuation">-</span>s build &amp;
    <span class="token punctuation">-</span> sleep 10
    <span class="token punctuation">-</span> curl http<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>3000 <span class="token punctuation">|</span> grep &quot;React App&quot;

<span class="token key atrule">deploy to s3</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> deploy
  <span class="token key atrule">image</span><span class="token punctuation">:</span> 
    <span class="token key atrule">name</span><span class="token punctuation">:</span> amazon/aws<span class="token punctuation">-</span>cli<span class="token punctuation">:</span>2.4.11
    <span class="token key atrule">entrypoint</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;&quot;</span><span class="token punctuation">]</span>
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> aws <span class="token punctuation">-</span><span class="token punctuation">-</span>version
    <span class="token punctuation">-</span> echo &quot;Hello S3&quot; <span class="token punctuation">&gt;</span> test.txt
    <span class="token punctuation">-</span> aws s3 cp test.txt s3<span class="token punctuation">:</span>//YOUR_BUCKET_NAME/test.txt

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),U=n("h3",{id:"📚-resources-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#📚-resources-2","aria-hidden":"true"},"#"),s(" 📚 Resources")],-1),M={href:"https://awscli.amazonaws.com/v2/documentation/api/latest/reference/s3/index.html",target:"_blank",rel:"noopener noreferrer"},P=i('<hr><h2 id="_3-6-masking-protecting-variables" tabindex="-1"><a class="header-anchor" href="#_3-6-masking-protecting-variables" aria-hidden="true">#</a> 3.6 Masking &amp; protecting variables</h2><ul><li>to define a variable, go to <code>[Settings]</code> &gt; <code>[CI/CD]</code> &gt; <code>[Variables]</code> &gt; <code>[Add variable]</code></li><li>we typically store passwords or other secrets</li><li>a variable has a key and a value</li><li>it is a good practice to write the key in uppercase and to separate any words with underscores</li><li>flags: <ul><li><em>Protect variable</em>: if enabled, the variable is not available in branches, apart from the default branch (main), which is a protected branch</li><li><em>Mask variable</em>: if enabled, the variable value is never displayed in clear text in job logs</li></ul></li></ul>',3),$={class:"hint-container details"},L=n("summary",null,"Pipeline after this lecture",-1),W=i(`<code>.gitlab-ci.yml</code><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">stages</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> build
  <span class="token punctuation">-</span> test
  <span class="token punctuation">-</span> deploy

<span class="token key atrule">.build website</span><span class="token punctuation">:</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span> node<span class="token punctuation">:</span>16<span class="token punctuation">-</span>alpine
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> build
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> yarn install
    <span class="token punctuation">-</span> yarn lint
    <span class="token punctuation">-</span> yarn test
    <span class="token punctuation">-</span> yarn build
  <span class="token key atrule">artifacts</span><span class="token punctuation">:</span>
    <span class="token key atrule">paths</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> build

<span class="token key atrule">.test website</span><span class="token punctuation">:</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span> node<span class="token punctuation">:</span>16<span class="token punctuation">-</span>alpine
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> test
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> yarn global add serve
    <span class="token punctuation">-</span> apk add curl
    <span class="token punctuation">-</span> serve <span class="token punctuation">-</span>s build &amp;
    <span class="token punctuation">-</span> sleep 10
    <span class="token punctuation">-</span> curl http<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>3000 <span class="token punctuation">|</span> grep &quot;React App&quot;

<span class="token key atrule">deploy to s3</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> deploy
  <span class="token key atrule">image</span><span class="token punctuation">:</span> 
    <span class="token key atrule">name</span><span class="token punctuation">:</span> amazon/aws<span class="token punctuation">-</span>cli<span class="token punctuation">:</span>2.4.11
    <span class="token key atrule">entrypoint</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;&quot;</span><span class="token punctuation">]</span>
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> aws <span class="token punctuation">-</span><span class="token punctuation">-</span>version
    <span class="token punctuation">-</span> echo &quot;Hello S3&quot; <span class="token punctuation">&gt;</span> test.txt
    <span class="token punctuation">-</span> aws s3 cp test.txt s3<span class="token punctuation">:</span>//$AWS_S3_BUCKET/test.txt

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),O=i('<hr><h2 id="_3-7-identity-management-with-aws-iam" tabindex="-1"><a class="header-anchor" href="#_3-7-identity-management-with-aws-iam" aria-hidden="true">#</a> 3.7 Identity management with AWS IAM</h2><ul><li>we don&#39;t want to use our username and password to use AWS services from the CLI (I am not even sure if this is even possible!)</li><li>as we only need access to S3, it makes sense to work with an account with limited permissions</li><li>IAM allows us to manage access to the AWS services</li><li>we will create a new user with the following settings: <ul><li>account type: programmatic access</li><li>permissions: attach existing policy: AmazonS3FullAccess</li></ul></li><li>the account details will be displayed only once</li><li>go to <em>Settings &gt; CI/CD &gt; Variables &gt; Add variable</em> and define the following unprotected variables: <ul><li><code>AWS_ACCESS_KEY_ID</code></li><li><code>AWS_SECRET_ACCESS_KEY</code></li><li><code>AWS_DEFAULT_REGION</code></li></ul></li><li>AWS CLI will look for these variables and use them to authenticate</li></ul><hr><h2 id="_3-8-uploading-multiple-files-to-s3" tabindex="-1"><a class="header-anchor" href="#_3-8-uploading-multiple-files-to-s3" aria-hidden="true">#</a> 3.8 Uploading multiple files to S3</h2><ul><li>using cp to copy individual files can take a lot of space in the pipeline config</li><li>some file names are generated during the build process, and we can&#39;t know them in advance</li><li>we will use sync to align the content between the build folder in GitLab and the S3 bucket</li></ul>',6),B={class:"hint-container details"},D=n("summary",null,"Pipeline after this lecture",-1),F=i(`<code>.gitlab-ci.yml</code><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">stages</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> build
  <span class="token punctuation">-</span> test
  <span class="token punctuation">-</span> deploy

<span class="token key atrule">build website</span><span class="token punctuation">:</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span> node<span class="token punctuation">:</span>16<span class="token punctuation">-</span>alpine
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> build
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> yarn install
    <span class="token punctuation">-</span> yarn lint
    <span class="token punctuation">-</span> yarn test
    <span class="token punctuation">-</span> yarn build
  <span class="token key atrule">artifacts</span><span class="token punctuation">:</span>
    <span class="token key atrule">paths</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> build

<span class="token key atrule">test website</span><span class="token punctuation">:</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span> node<span class="token punctuation">:</span>16<span class="token punctuation">-</span>alpine
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> test
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> yarn global add serve
    <span class="token punctuation">-</span> apk add curl
    <span class="token punctuation">-</span> serve <span class="token punctuation">-</span>s build &amp;
    <span class="token punctuation">-</span> sleep 10
    <span class="token punctuation">-</span> curl http<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>3000 <span class="token punctuation">|</span> grep &quot;React App&quot;

<span class="token key atrule">deploy to s3</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> deploy
  <span class="token key atrule">image</span><span class="token punctuation">:</span> 
    <span class="token key atrule">name</span><span class="token punctuation">:</span> amazon/aws<span class="token punctuation">-</span>cli<span class="token punctuation">:</span>2.4.11
    <span class="token key atrule">entrypoint</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;&quot;</span><span class="token punctuation">]</span>
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> aws <span class="token punctuation">-</span><span class="token punctuation">-</span>version
    <span class="token punctuation">-</span> aws s3 sync build s3<span class="token punctuation">:</span>//$AWS_S3_BUCKET <span class="token punctuation">-</span><span class="token punctuation">-</span>delete
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),z=n("h3",{id:"📚-resources-3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#📚-resources-3","aria-hidden":"true"},"#"),s(" 📚 Resources")],-1),G={href:"https://awscli.amazonaws.com/v2/documentation/api/latest/reference/s3/sync.html",target:"_blank",rel:"noopener noreferrer"},V=i(`<hr><h2 id="_3-9-hosting-a-website-on-s3" tabindex="-1"><a class="header-anchor" href="#_3-9-hosting-a-website-on-s3" aria-hidden="true">#</a> 3.9 Hosting a website on S3</h2><ul><li>files in the S3 bucket are not publicly available</li><li>to get the website to work, we need to configure the bucket</li><li>from the bucket, click on <em>Properties</em> and enable Static website hosting</li><li>from the bucket, click on the <em>Permissions</em> tab and disable <em>Block public access</em></li><li>from the bucket, click on the <em>Permissions</em> tab and set a bucket policy</li></ul><details class="hint-container details"><summary>S3 bucket policy example</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;Version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2012-10-17&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;Statement&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;Sid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;PublicRead&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Effect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Allow&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Principal&quot;</span><span class="token operator">:</span> <span class="token string">&quot;*&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Action&quot;</span><span class="token operator">:</span> <span class="token string">&quot;s3:GetObject&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Resource&quot;</span><span class="token operator">:</span> <span class="token string">&quot;arn:aws:s3:::YOUR-BUCKET-NAME/*&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><hr><h2 id="_3-10-controlling-when-jobs-run" tabindex="-1"><a class="header-anchor" href="#_3-10-controlling-when-jobs-run" aria-hidden="true">#</a> 3.10 Controlling when jobs run</h2><ul><li>we don’t want to deploy to production from every branch</li><li>to decide which jobs to run, we can use <code>rules:</code> to set a condition</li><li><code>CI_COMMIT_REF_NAME</code> gives us the current branch that is running the pipeline</li><li><code>CI_DEFAULT_BRANCH</code> gives us the name of the default branch (typically main or master)</li></ul>`,7),H={class:"hint-container details"},K=n("summary",null,"Pipeline after this lectur",-1),j=i(`<code>.gitlab-ci.yml</code><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">stages</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> build
  <span class="token punctuation">-</span> test
  <span class="token punctuation">-</span> deploy

<span class="token key atrule">build website</span><span class="token punctuation">:</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span> node<span class="token punctuation">:</span>16<span class="token punctuation">-</span>alpine
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> build
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> yarn install
    <span class="token punctuation">-</span> yarn lint
    <span class="token punctuation">-</span> yarn test
    <span class="token punctuation">-</span> yarn build
  <span class="token key atrule">artifacts</span><span class="token punctuation">:</span>
    <span class="token key atrule">paths</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> build

<span class="token key atrule">test website</span><span class="token punctuation">:</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span> node<span class="token punctuation">:</span>16<span class="token punctuation">-</span>alpine
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> test
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> yarn global add serve
    <span class="token punctuation">-</span> apk add curl
    <span class="token punctuation">-</span> serve <span class="token punctuation">-</span>s build &amp;
    <span class="token punctuation">-</span> sleep 10
    <span class="token punctuation">-</span> curl http<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>3000 <span class="token punctuation">|</span> grep &quot;React App&quot;

<span class="token key atrule">deploy to s3</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> deploy
  <span class="token key atrule">image</span><span class="token punctuation">:</span> 
    <span class="token key atrule">name</span><span class="token punctuation">:</span> amazon/aws<span class="token punctuation">-</span>cli<span class="token punctuation">:</span>2.4.11
    <span class="token key atrule">entrypoint</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;&quot;</span><span class="token punctuation">]</span>
  <span class="token key atrule">rules</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">if</span><span class="token punctuation">:</span> $CI_COMMIT_REF_NAME == $CI_DEFAULT_BRANCH
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> aws <span class="token punctuation">-</span><span class="token punctuation">-</span>version
    <span class="token punctuation">-</span> aws s3 sync build s3<span class="token punctuation">:</span>//$AWS_S3_BUCKET <span class="token punctuation">-</span><span class="token punctuation">-</span>delete
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Y=n("h3",{id:"📚-resources-4",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#📚-resources-4","aria-hidden":"true"},"#"),s(" 📚 Resources")],-1),J={href:"https://docs.gitlab.com/ee/ci/yaml/#rules",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://docs.gitlab.com/ee/ci/variables/predefined_variables.html",target:"_blank",rel:"noopener noreferrer"},X=n("hr",null,null,-1),Z=n("h2",{id:"_3-11-post-deployment-testing",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3-11-post-deployment-testing","aria-hidden":"true"},"#"),s(" 3.11 Post-deployment testing")],-1),nn=n("ul",null,[n("li",null,[s("we will use "),n("code",null,"cURL"),s(" to download the index.html file from the website")]),n("li",null,[s("with "),n("code",null,"grep"),s(", we will check to see if the index.html file contains a specific string")])],-1),sn={class:"hint-container details"},an=n("summary",null,"Pipeline after this lecture",-1),en=i(`<code>.gitlab-ci.yml</code><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">stages</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> build
  <span class="token punctuation">-</span> test
  <span class="token punctuation">-</span> deploy
  <span class="token punctuation">-</span> post deploy

<span class="token key atrule">variables</span><span class="token punctuation">:</span>
  <span class="token key atrule">APP_BASE_URL</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//YOUR<span class="token punctuation">-</span>BUCKET<span class="token punctuation">-</span>NAME.s3<span class="token punctuation">-</span>website<span class="token punctuation">-</span>YOUR<span class="token punctuation">-</span>REGION.amazonaws.com

<span class="token key atrule">build website</span><span class="token punctuation">:</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span> node<span class="token punctuation">:</span>16<span class="token punctuation">-</span>alpine
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> build
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> yarn install
    <span class="token punctuation">-</span> yarn lint
    <span class="token punctuation">-</span> yarn test
    <span class="token punctuation">-</span> yarn build
  <span class="token key atrule">artifacts</span><span class="token punctuation">:</span>
    <span class="token key atrule">paths</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> build

<span class="token key atrule">test website</span><span class="token punctuation">:</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span> node<span class="token punctuation">:</span>16<span class="token punctuation">-</span>alpine
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> test
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> yarn global add serve
    <span class="token punctuation">-</span> apk add curl
    <span class="token punctuation">-</span> serve <span class="token punctuation">-</span>s build &amp;
    <span class="token punctuation">-</span> sleep 10
    <span class="token punctuation">-</span> curl http<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>3000 <span class="token punctuation">|</span> grep &quot;React App&quot;

<span class="token key atrule">deploy to s3</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> deploy
  <span class="token key atrule">image</span><span class="token punctuation">:</span> 
    <span class="token key atrule">name</span><span class="token punctuation">:</span> amazon/aws<span class="token punctuation">-</span>cli<span class="token punctuation">:</span>2.4.11
    <span class="token key atrule">entrypoint</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;&quot;</span><span class="token punctuation">]</span>
  <span class="token key atrule">rules</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">if</span><span class="token punctuation">:</span> $CI_COMMIT_REF_NAME == $CI_DEFAULT_BRANCH
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> aws <span class="token punctuation">-</span><span class="token punctuation">-</span>version
    <span class="token punctuation">-</span> aws s3 sync build s3<span class="token punctuation">:</span>//$AWS_S3_BUCKET <span class="token punctuation">-</span><span class="token punctuation">-</span>delete

<span class="token key atrule">production tests</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> post deploy
  <span class="token key atrule">image</span><span class="token punctuation">:</span> curlimages/curl
  <span class="token key atrule">rules</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">if</span><span class="token punctuation">:</span> $CI_COMMIT_REF_NAME == $CI_DEFAULT_BRANCH
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> curl $APP_BASE_URL <span class="token punctuation">|</span> grep &quot;React App&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),tn=i('<hr><h2 id="_3-12-what-is-ci-cd" tabindex="-1"><a class="header-anchor" href="#_3-12-what-is-ci-cd" aria-hidden="true">#</a> 3.12 What is CI/CD?</h2><ul><li>the pipeline goes through multiple stages: build, test &amp; deploy</li><li>right now, we consider the website hosted at AWS S3 our production environment</li><li>quite often, pipelines will also have a staging environment</li><li>a staging environment is a non-production, usually non-public environment that is very close to the actual production environment</li><li>we often use automation to create these environments and to ensure that they are indeed identical</li><li>we use a staging environment as a pre-production environment</li><li>essentially, we try out our deployment in the pre-production environment</li><li>CD can refer to two concepts: <ul><li>Continuous Deployment - where every change is automatically deployed to production</li><li>Continuous Delivery - where every change is automatically deployed to staging but where we need some manual intervention to deploy to production</li></ul></li></ul><hr><h2 id="_3-13-assignment" tabindex="-1"><a class="header-anchor" href="#_3-13-assignment" aria-hidden="true">#</a> 3.13 Assignment</h2><ul><li>create a staging environment and add it to the CI/CD pipeline</li></ul><hr><h2 id="_3-14-assignment-solution" tabindex="-1"><a class="header-anchor" href="#_3-14-assignment-solution" aria-hidden="true">#</a> 3.14 Assignment solution</h2>',8),ln={class:"hint-container details"},pn=n("summary",null,"Pipeline after this lecture",-1),cn=i(`<code>.gitlab-ci.yml</code><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">stages</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> build
  <span class="token punctuation">-</span> test
  <span class="token punctuation">-</span> deploy staging
  <span class="token punctuation">-</span> test staging
  <span class="token punctuation">-</span> deploy production
  <span class="token punctuation">-</span> test production

<span class="token key atrule">variables</span><span class="token punctuation">:</span>
  <span class="token key atrule">APP_BASE_URL</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//YOUR<span class="token punctuation">-</span>BUCKET<span class="token punctuation">-</span>NAME.s3<span class="token punctuation">-</span>website<span class="token punctuation">-</span>YOUR<span class="token punctuation">-</span>REGION.amazonaws.com
  <span class="token key atrule">APP_BASE_URL_STAGING</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//YOUR<span class="token punctuation">-</span>BUCKET<span class="token punctuation">-</span>NAME<span class="token punctuation">-</span>STAGING.s3<span class="token punctuation">-</span>website<span class="token punctuation">-</span>YOUR<span class="token punctuation">-</span>REGION.amazonaws.com

<span class="token key atrule">build website</span><span class="token punctuation">:</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span> node<span class="token punctuation">:</span>16<span class="token punctuation">-</span>alpine
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> build
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> yarn install
    <span class="token punctuation">-</span> yarn lint
    <span class="token punctuation">-</span> yarn test
    <span class="token punctuation">-</span> yarn build
  <span class="token key atrule">artifacts</span><span class="token punctuation">:</span>
    <span class="token key atrule">paths</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> build

<span class="token key atrule">test website</span><span class="token punctuation">:</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span> node<span class="token punctuation">:</span>16<span class="token punctuation">-</span>alpine
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> test
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> yarn global add serve
    <span class="token punctuation">-</span> apk add curl
    <span class="token punctuation">-</span> serve <span class="token punctuation">-</span>s build &amp;
    <span class="token punctuation">-</span> sleep 10
    <span class="token punctuation">-</span> curl http<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>3000 <span class="token punctuation">|</span> grep &quot;React App&quot;

<span class="token key atrule">deploy to staging</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> deploy staging
  <span class="token key atrule">image</span><span class="token punctuation">:</span> 
    <span class="token key atrule">name</span><span class="token punctuation">:</span> amazon/aws<span class="token punctuation">-</span>cli<span class="token punctuation">:</span>2.4.11
    <span class="token key atrule">entrypoint</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;&quot;</span><span class="token punctuation">]</span>
  <span class="token key atrule">rules</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">if</span><span class="token punctuation">:</span> $CI_COMMIT_REF_NAME == $CI_DEFAULT_BRANCH
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> aws <span class="token punctuation">-</span><span class="token punctuation">-</span>version
    <span class="token punctuation">-</span> aws s3 sync build s3<span class="token punctuation">:</span>//$AWS_S3_BUCKET_STAGING <span class="token punctuation">-</span><span class="token punctuation">-</span>delete

<span class="token key atrule">staging tests</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> test staging
  <span class="token key atrule">image</span><span class="token punctuation">:</span> curlimages/curl
  <span class="token key atrule">rules</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">if</span><span class="token punctuation">:</span> $CI_COMMIT_REF_NAME == $CI_DEFAULT_BRANCH
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> curl $APP_BASE_URL_STAGING <span class="token punctuation">|</span> grep &quot;React App&quot;

<span class="token key atrule">deploy to production</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> deploy production
  <span class="token key atrule">image</span><span class="token punctuation">:</span> 
    <span class="token key atrule">name</span><span class="token punctuation">:</span> amazon/aws<span class="token punctuation">-</span>cli<span class="token punctuation">:</span>2.4.11
    <span class="token key atrule">entrypoint</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;&quot;</span><span class="token punctuation">]</span>
  <span class="token key atrule">rules</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">if</span><span class="token punctuation">:</span> $CI_COMMIT_REF_NAME == $CI_DEFAULT_BRANCH
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> aws <span class="token punctuation">-</span><span class="token punctuation">-</span>version
    <span class="token punctuation">-</span> aws s3 sync build s3<span class="token punctuation">:</span>//$AWS_S3_BUCKET <span class="token punctuation">-</span><span class="token punctuation">-</span>delete

<span class="token key atrule">production tests</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> test production
  <span class="token key atrule">image</span><span class="token punctuation">:</span> curlimages/curl
  <span class="token key atrule">rules</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">if</span><span class="token punctuation">:</span> $CI_COMMIT_REF_NAME == $CI_DEFAULT_BRANCH
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> curl $APP_BASE_URL <span class="token punctuation">|</span> grep &quot;React App&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),on=n("hr",null,null,-1),un=n("h2",{id:"_3-15-environments",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3-15-environments","aria-hidden":"true"},"#"),s(" 3.15 Environments")],-1),dn=n("ul",null,[n("li",null,"every system where we deploy an application is an environment"),n("li",null,"typical environments include test, staging & production"),n("li",null,"GitLab offers support for environments"),n("li",null,[s("we can define environments in "),n("code",null,"[Deployments]"),s(" > "),n("code",null,"[Environments]")])],-1),rn={class:"hint-container details"},kn=n("summary",null,"Pipeline after this lecture",-1),vn=i(`<code>.gitlab-ci.yml</code><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">stages</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> build
  <span class="token punctuation">-</span> test
  <span class="token punctuation">-</span> deploy staging
  <span class="token punctuation">-</span> deploy production

<span class="token key atrule">build website</span><span class="token punctuation">:</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span> node<span class="token punctuation">:</span>16<span class="token punctuation">-</span>alpine
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> build
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> yarn install
    <span class="token punctuation">-</span> yarn lint
    <span class="token punctuation">-</span> yarn test
    <span class="token punctuation">-</span> yarn build
  <span class="token key atrule">artifacts</span><span class="token punctuation">:</span>
    <span class="token key atrule">paths</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> build

<span class="token key atrule">test website</span><span class="token punctuation">:</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span> node<span class="token punctuation">:</span>16<span class="token punctuation">-</span>alpine
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> test
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> yarn global add serve
    <span class="token punctuation">-</span> apk add curl
    <span class="token punctuation">-</span> serve <span class="token punctuation">-</span>s build &amp;
    <span class="token punctuation">-</span> sleep 10
    <span class="token punctuation">-</span> curl http<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>3000 <span class="token punctuation">|</span> grep &quot;React App&quot;

<span class="token key atrule">deploy to staging</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> deploy staging
  <span class="token key atrule">environment</span><span class="token punctuation">:</span> staging
  <span class="token key atrule">image</span><span class="token punctuation">:</span> 
    <span class="token key atrule">name</span><span class="token punctuation">:</span> amazon/aws<span class="token punctuation">-</span>cli<span class="token punctuation">:</span>2.4.11
    <span class="token key atrule">entrypoint</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;&quot;</span><span class="token punctuation">]</span>
  <span class="token key atrule">rules</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">if</span><span class="token punctuation">:</span> $CI_COMMIT_REF_NAME == $CI_DEFAULT_BRANCH
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> aws <span class="token punctuation">-</span><span class="token punctuation">-</span>version
    <span class="token punctuation">-</span> aws s3 sync build s3<span class="token punctuation">:</span>//$AWS_S3_BUCKET <span class="token punctuation">-</span><span class="token punctuation">-</span>delete
    <span class="token punctuation">-</span> curl $CI_ENVIRONMENT_URL <span class="token punctuation">|</span> grep &quot;React App&quot;

<span class="token key atrule">deploy to production</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> deploy production
  <span class="token key atrule">environment</span><span class="token punctuation">:</span> production
  <span class="token key atrule">image</span><span class="token punctuation">:</span> 
    <span class="token key atrule">name</span><span class="token punctuation">:</span> amazon/aws<span class="token punctuation">-</span>cli<span class="token punctuation">:</span>2.4.11
    <span class="token key atrule">entrypoint</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;&quot;</span><span class="token punctuation">]</span>
  <span class="token key atrule">rules</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">if</span><span class="token punctuation">:</span> $CI_COMMIT_REF_NAME == $CI_DEFAULT_BRANCH
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> aws <span class="token punctuation">-</span><span class="token punctuation">-</span>version
    <span class="token punctuation">-</span> aws s3 sync build s3<span class="token punctuation">:</span>//$AWS_S3_BUCKET <span class="token punctuation">-</span><span class="token punctuation">-</span>delete
    <span class="token punctuation">-</span> curl $CI_ENVIRONMENT_URL <span class="token punctuation">|</span> grep &quot;React App&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),mn=n("h3",{id:"📚-resources-5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#📚-resources-5","aria-hidden":"true"},"#"),s(" 📚 Resources")],-1),bn={href:"https://docs.gitlab.com/ee/ci/variables/predefined_variables.html",target:"_blank",rel:"noopener noreferrer"},yn=n("hr",null,null,-1),hn=n("h2",{id:"_3-16-reusing-configuration",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3-16-reusing-configuration","aria-hidden":"true"},"#"),s(" 3.16 Reusing configuration")],-1),gn=n("ul",null,[n("li",null,"sometimes, multiple jobs may look almost the same, and we should try to avoid repeating ourselves"),n("li",null,[s("GitLab allows us to inherit from an exiting job with the "),n("code",null,"extends:"),s(" keyword")])],-1),_n={class:"hint-container details"},fn=n("summary",null,"Pipeline after this lecture",-1),wn=i(`<code>.gitlab-ci.yml</code><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">stages</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> build
  <span class="token punctuation">-</span> test
  <span class="token punctuation">-</span> deploy staging
  <span class="token punctuation">-</span> deploy production

<span class="token key atrule">build website</span><span class="token punctuation">:</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span> node<span class="token punctuation">:</span>16<span class="token punctuation">-</span>alpine
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> build
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> yarn install
    <span class="token punctuation">-</span> yarn lint
    <span class="token punctuation">-</span> yarn test
    <span class="token punctuation">-</span> yarn build
  <span class="token key atrule">artifacts</span><span class="token punctuation">:</span>
    <span class="token key atrule">paths</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> build

<span class="token key atrule">test website</span><span class="token punctuation">:</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span> node<span class="token punctuation">:</span>16<span class="token punctuation">-</span>alpine
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> test
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> yarn global add serve
    <span class="token punctuation">-</span> apk add curl
    <span class="token punctuation">-</span> serve <span class="token punctuation">-</span>s build &amp;
    <span class="token punctuation">-</span> sleep 10
    <span class="token punctuation">-</span> curl http<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>3000 <span class="token punctuation">|</span> grep &quot;React App&quot;

<span class="token key atrule">.deploy</span><span class="token punctuation">:</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span> 
    <span class="token key atrule">name</span><span class="token punctuation">:</span> amazon/aws<span class="token punctuation">-</span>cli<span class="token punctuation">:</span>2.4.11
    <span class="token key atrule">entrypoint</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;&quot;</span><span class="token punctuation">]</span>
  <span class="token key atrule">rules</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">if</span><span class="token punctuation">:</span> $CI_COMMIT_REF_NAME == $CI_DEFAULT_BRANCH
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> aws <span class="token punctuation">-</span><span class="token punctuation">-</span>version
    <span class="token punctuation">-</span> aws s3 sync build s3<span class="token punctuation">:</span>//$AWS_S3_BUCKET <span class="token punctuation">-</span><span class="token punctuation">-</span>delete
    <span class="token punctuation">-</span> curl $CI_ENVIRONMENT_URL <span class="token punctuation">|</span> grep &quot;React App&quot;

<span class="token key atrule">deploy to staging</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> deploy staging
  <span class="token key atrule">environment</span><span class="token punctuation">:</span> staging
  <span class="token key atrule">extends</span><span class="token punctuation">:</span> .deploy

<span class="token key atrule">deploy to production</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> deploy production
  <span class="token key atrule">environment</span><span class="token punctuation">:</span> production
  <span class="token key atrule">extends</span><span class="token punctuation">:</span> .deploy

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),An=i('<hr><h2 id="_3-17-assignment" tabindex="-1"><a class="header-anchor" href="#_3-17-assignment" aria-hidden="true">#</a> 3.17 Assignment</h2><ul><li>the goal of this assignment is to expand the post-deployment tests to ensure that the correct version has been deployed</li><li>add a file named <code>version.html</code> which contains the current build number</li><li>the current build number is given by a predefined GitLab CI variable named <code>CI_PIPELINE_IID</code></li></ul><h3 id="📚-resources-6" tabindex="-1"><a class="header-anchor" href="#📚-resources-6" aria-hidden="true">#</a> 📚 Resources</h3>',4),Cn={href:"https://docs.gitlab.com/ee/ci/variables/predefined_variables.html",target:"_blank",rel:"noopener noreferrer"},In=n("hr",null,null,-1),En=n("h2",{id:"_3-18-assignment-solution",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3-18-assignment-solution","aria-hidden":"true"},"#"),s(" 3.18 Assignment solution")],-1),Sn={class:"hint-container details"},qn=n("summary",null,"Pipeline after this lecture",-1),Rn=i(`<code>.gitlab-ci.yml</code><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">stages</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> build
  <span class="token punctuation">-</span> test
  <span class="token punctuation">-</span> deploy staging
  <span class="token punctuation">-</span> deploy production

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

<span class="token key atrule">test website</span><span class="token punctuation">:</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span> node<span class="token punctuation">:</span>16<span class="token punctuation">-</span>alpine
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> test
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> yarn global add serve
    <span class="token punctuation">-</span> apk add curl
    <span class="token punctuation">-</span> serve <span class="token punctuation">-</span>s build &amp;
    <span class="token punctuation">-</span> sleep 10
    <span class="token punctuation">-</span> curl http<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>3000 <span class="token punctuation">|</span> grep &quot;React App&quot;

<span class="token key atrule">.deploy</span><span class="token punctuation">:</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span> 
    <span class="token key atrule">name</span><span class="token punctuation">:</span> amazon/aws<span class="token punctuation">-</span>cli<span class="token punctuation">:</span>2.4.11
    <span class="token key atrule">entrypoint</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;&quot;</span><span class="token punctuation">]</span>
  <span class="token key atrule">rules</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">if</span><span class="token punctuation">:</span> $CI_COMMIT_REF_NAME == $CI_DEFAULT_BRANCH
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> aws <span class="token punctuation">-</span><span class="token punctuation">-</span>version
    <span class="token punctuation">-</span> aws s3 sync build s3<span class="token punctuation">:</span>//$AWS_S3_BUCKET <span class="token punctuation">-</span><span class="token punctuation">-</span>delete
    <span class="token punctuation">-</span> curl $CI_ENVIRONMENT_URL <span class="token punctuation">|</span> grep &quot;React App&quot;
    <span class="token punctuation">-</span> curl $CI_ENVIRONMENT_URL/version.html <span class="token punctuation">|</span> grep $APP_VERSION

<span class="token key atrule">deploy to staging</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> deploy staging
  <span class="token key atrule">environment</span><span class="token punctuation">:</span> staging
  <span class="token key atrule">extends</span><span class="token punctuation">:</span> .deploy

<span class="token key atrule">deploy to production</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> deploy production
  <span class="token key atrule">environment</span><span class="token punctuation">:</span> production
  <span class="token key atrule">extends</span><span class="token punctuation">:</span> .deploy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Nn=n("hr",null,null,-1),xn=n("h2",{id:"_3-19-continuous-delivery-pipeline",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3-19-continuous-delivery-pipeline","aria-hidden":"true"},"#"),s(" 3.19 Continuous Delivery pipeline")],-1),Tn=n("ul",null,[n("li",null,[s("adding "),n("code",null,"when: manual"),s(" allows us to manually trigger the production deployment")])],-1),Un={class:"hint-container details"},Mn=n("summary",null,"Pipeline after this lecture",-1),Pn=i(`<code>.gitlab-ci.yml</code><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">stages</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> build
  <span class="token punctuation">-</span> test
  <span class="token punctuation">-</span> deploy staging
  <span class="token punctuation">-</span> deploy production

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

<span class="token key atrule">test website</span><span class="token punctuation">:</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span> node<span class="token punctuation">:</span>16<span class="token punctuation">-</span>alpine
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> test
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> yarn global add serve
    <span class="token punctuation">-</span> apk add curl
    <span class="token punctuation">-</span> serve <span class="token punctuation">-</span>s build &amp;
    <span class="token punctuation">-</span> sleep 10
    <span class="token punctuation">-</span> curl http<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>3000 <span class="token punctuation">|</span> grep &quot;React App&quot;

<span class="token key atrule">.deploy</span><span class="token punctuation">:</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span> 
    <span class="token key atrule">name</span><span class="token punctuation">:</span> amazon/aws<span class="token punctuation">-</span>cli<span class="token punctuation">:</span>2.4.11
    <span class="token key atrule">entrypoint</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;&quot;</span><span class="token punctuation">]</span>
  <span class="token key atrule">rules</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">if</span><span class="token punctuation">:</span> $CI_COMMIT_REF_NAME == $CI_DEFAULT_BRANCH
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> aws <span class="token punctuation">-</span><span class="token punctuation">-</span>version
    <span class="token punctuation">-</span> aws s3 sync build s3<span class="token punctuation">:</span>//$AWS_S3_BUCKET <span class="token punctuation">-</span><span class="token punctuation">-</span>delete
    <span class="token punctuation">-</span> curl $CI_ENVIRONMENT_URL <span class="token punctuation">|</span> grep &quot;React App&quot;
    <span class="token punctuation">-</span> curl $CI_ENVIRONMENT_URL/version.html <span class="token punctuation">|</span> grep $APP_VERSION

<span class="token key atrule">deploy to staging</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> deploy staging
  <span class="token key atrule">environment</span><span class="token punctuation">:</span> staging
  <span class="token key atrule">extends</span><span class="token punctuation">:</span> .deploy

<span class="token key atrule">deploy to production</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> deploy production
  <span class="token key atrule">when</span><span class="token punctuation">:</span> manual
  <span class="token key atrule">environment</span><span class="token punctuation">:</span> production
  <span class="token key atrule">extends</span><span class="token punctuation">:</span> .deploy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function $n(o,Ln){const e=c("router-link"),p=c("ExternalLinkIcon"),l=c("FontIcon");return r(),k("div",null,[n("h1",m,[b,s(" "+u(o.$frontmatter.title)+" 관련",1)]),n("blockquote",null,[n("p",null,u(o.$frontmatter.description),1)]),n("nav",y,[n("ul",null,[n("li",null,[a(e,{to:"#_3-1-unit-overview"},{default:t(()=>[s("3.1 Unit overview")]),_:1})]),n("li",null,[a(e,{to:"#_3-2-a-quick-introduction-to-aws"},{default:t(()=>[s("3.2 A quick introduction to AWS")]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#📚-resources"},{default:t(()=>[s("📚 Resources")]),_:1})])])]),n("li",null,[a(e,{to:"#_3-3-aws-s3"},{default:t(()=>[s("3.3 AWS S3")]),_:1})]),n("li",null,[a(e,{to:"#_3-4-aws-cli"},{default:t(()=>[s("3.4 AWS CLI")]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#📚-resources-1"},{default:t(()=>[s("📚 Resources")]),_:1})])])]),n("li",null,[a(e,{to:"#_3-5-uploading-a-file-to-s3"},{default:t(()=>[s("3.5 Uploading a file to S3")]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#📚-resources-2"},{default:t(()=>[s("📚 Resources")]),_:1})])])]),n("li",null,[a(e,{to:"#_3-6-masking-protecting-variables"},{default:t(()=>[s("3.6 Masking & protecting variables")]),_:1})]),n("li",null,[a(e,{to:"#_3-7-identity-management-with-aws-iam"},{default:t(()=>[s("3.7 Identity management with AWS IAM")]),_:1})]),n("li",null,[a(e,{to:"#_3-8-uploading-multiple-files-to-s3"},{default:t(()=>[s("3.8 Uploading multiple files to S3")]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#📚-resources-3"},{default:t(()=>[s("📚 Resources")]),_:1})])])]),n("li",null,[a(e,{to:"#_3-9-hosting-a-website-on-s3"},{default:t(()=>[s("3.9 Hosting a website on S3")]),_:1})]),n("li",null,[a(e,{to:"#_3-10-controlling-when-jobs-run"},{default:t(()=>[s("3.10 Controlling when jobs run")]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#📚-resources-4"},{default:t(()=>[s("📚 Resources")]),_:1})])])]),n("li",null,[a(e,{to:"#_3-11-post-deployment-testing"},{default:t(()=>[s("3.11 Post-deployment testing")]),_:1})]),n("li",null,[a(e,{to:"#_3-12-what-is-ci-cd"},{default:t(()=>[s("3.12 What is CI/CD?")]),_:1})]),n("li",null,[a(e,{to:"#_3-13-assignment"},{default:t(()=>[s("3.13 Assignment")]),_:1})]),n("li",null,[a(e,{to:"#_3-14-assignment-solution"},{default:t(()=>[s("3.14 Assignment solution")]),_:1})]),n("li",null,[a(e,{to:"#_3-15-environments"},{default:t(()=>[s("3.15 Environments")]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#📚-resources-5"},{default:t(()=>[s("📚 Resources")]),_:1})])])]),n("li",null,[a(e,{to:"#_3-16-reusing-configuration"},{default:t(()=>[s("3.16 Reusing configuration")]),_:1})]),n("li",null,[a(e,{to:"#_3-17-assignment"},{default:t(()=>[s("3.17 Assignment")]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#📚-resources-6"},{default:t(()=>[s("📚 Resources")]),_:1})])])]),n("li",null,[a(e,{to:"#_3-18-assignment-solution"},{default:t(()=>[s("3.18 Assignment solution")]),_:1})]),n("li",null,[a(e,{to:"#_3-19-continuous-delivery-pipeline"},{default:t(()=>[s("3.19 Continuous Delivery pipeline")]),_:1})])])]),h,n("ul",null,[n("li",null,[n("a",g,[s("Amazon Web Services"),a(p)])])]),_,n("details",f,[w,a(l,{icon:"iconfont icon-gitlab"}),s(),A]),C,n("ul",null,[n("li",null,[n("a",I,[s("AWS CLI documentation"),a(p)])]),n("li",null,[n("a",E,[s("AWS CLI on Dockerhub"),a(p)])])]),S,q,R,n("details",N,[x,a(l,{icon:"iconfont icon-gitlab"}),s(),T]),U,n("ul",null,[n("li",null,[n("a",M,[s("AWS CLI for S3 documentation"),a(p)])])]),P,n("details",$,[L,a(l,{icon:"iconfont icon-gitlab"}),s(),W]),O,n("details",B,[D,a(l,{icon:"iconfont icon-gitlab"}),s(),F]),z,n("ul",null,[n("li",null,[n("a",G,[s("AWS S3 sync command documentation"),a(p)])])]),V,n("details",H,[K,a(l,{icon:"iconfont icon-gitlab"}),s(),j]),Y,n("ul",null,[n("li",null,[n("a",J,[s("GitLab reference for the .gitlab-ci.yml file - rules:"),a(p)])]),n("li",null,[n("a",Q,[s("Predefined variables in GitLab"),a(p)])])]),X,Z,nn,n("details",sn,[an,a(l,{icon:"iconfont icon-gitlab"}),s(),en]),tn,n("details",ln,[pn,a(l,{icon:"iconfont icon-gitlab"}),s(),cn]),on,un,dn,n("details",rn,[kn,a(l,{icon:"iconfont icon-gitlab"}),s(),vn]),mn,n("ul",null,[n("li",null,[n("a",bn,[s("Predefined variables in GitLab"),a(p)])])]),yn,hn,gn,n("details",_n,[fn,a(l,{icon:"iconfont icon-gitlab"}),s(),wn]),An,n("ul",null,[n("li",null,[n("a",Cn,[s("Predefined variables in GitLab"),a(p)])])]),In,En,n("details",Sn,[qn,a(l,{icon:"iconfont icon-gitlab"}),s(),Rn]),Nn,xn,Tn,n("details",Un,[Mn,a(l,{icon:"iconfont icon-gitlab"}),s(),Pn])])}const On=d(v,[["render",$n],["__file","3.html.vue"]]);export{On as default};
