import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as d,a as e,t as p,b as t,w as a,n as m,g as u,e as h,r as n,o as v,d as l}from"./app-U_bew1in.js";const b={},E={id:"frontmatter-title-관련",tabindex:"-1"},g={class:"header-anchor",href:"#frontmatter-title-관련"},_={class:"table-of-contents"},k=e("hr",null,null,-1),S=e("hr",null,null,-1),y=h(`<p>This video tutorial demos the jets delete command. Since all the infrastructure is codified, deleting a Jets application is a straightforward process. What’s more interesting is that it is also easy to recreate the entire environment.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">jets delete</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>For more info on the <a href="http://rubyonjets.com/reference/jets-delete/" target="_blank" rel="noopener noreferrer"><code>jets delete</code></a> command, refer to its CLI reference.</p><hr><h2 id="what-s-deleted" tabindex="-1"><a class="header-anchor" href="#what-s-deleted"><span>What’s Deleted</span></a></h2><ul><li>S3 Bucket that was created and managed by Jets</li><li>All the CloudFormation stacks that that creates most of the Jets resources: Lambda Functions, API Gateway, CloudWatch Event Rules, etc.</li><li>CloudWatch Log Groups: to clean up the listing page</li></ul><hr><h2 id="delete-in-action" tabindex="-1"><a class="header-anchor" href="#delete-in-action"><span>Delete in Action</span></a></h2><p>Here’s an example with the jets delete output:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">jets delete</span>
<span class="line"><span class="token comment"># Deleting project...</span></span>
<span class="line"><span class="token comment"># Are you sure you want to want to delete the demo-dev project? (y/N)</span></span>
<span class="line">y</span>
<span class="line"><span class="token comment"># First, deleting objects in s3 bucket demo-dev-s3bucket-6np69dibzbdl</span></span>
<span class="line"><span class="token comment"># Deleting demo-dev...</span></span>
<span class="line"><span class="token comment"># 03:08:26PM DELETE_IN_PROGRESS AWS::CloudFormation::Stack demo-dev User Initiated</span></span>
<span class="line"><span class="token comment"># 03:08:27PM DELETE_IN_PROGRESS AWS::CloudFormation::Stack ApiDeployment20181109150504</span></span>
<span class="line"><span class="token comment"># 03:08:27PM DELETE_IN_PROGRESS AWS::CloudFormation::Stack JetsPreheatJob</span></span>
<span class="line"><span class="token comment"># 03:08:38PM DELETE_COMPLETE AWS::CloudFormation::Stack ApiDeployment20181109150504</span></span>
<span class="line"><span class="token comment"># 03:08:38PM DELETE_IN_PROGRESS AWS::CloudFormation::Stack PostsController</span></span>
<span class="line"><span class="token comment"># 03:08:38PM DELETE_IN_PROGRESS AWS::CloudFormation::Stack JetsPublicController</span></span>
<span class="line"><span class="token comment"># 03:09:01PM DELETE_COMPLETE AWS::CloudFormation::Stack PostsController</span></span>
<span class="line"><span class="token comment"># 03:09:01PM DELETE_COMPLETE AWS::CloudFormation::Stack JetsPublicController</span></span>
<span class="line"><span class="token comment"># 03:09:02PM DELETE_IN_PROGRESS AWS::CloudFormation::Stack ApiGateway</span></span>
<span class="line"><span class="token comment"># 03:09:12PM DELETE_COMPLETE AWS::CloudFormation::Stack ApiGateway</span></span>
<span class="line"><span class="token comment"># 03:09:45PM DELETE_COMPLETE AWS::CloudFormation::Stack JetsPreheatJob</span></span>
<span class="line"><span class="token comment"># 03:09:46PM DELETE_IN_PROGRESS AWS::S3::Bucket S3Bucket</span></span>
<span class="line"><span class="token comment"># 03:09:46PM DELETE_IN_PROGRESS AWS::IAM::Role IamRole</span></span>
<span class="line"><span class="token comment"># 03:09:46PM DELETE_COMPLETE AWS::S3::Bucket S3Bucket</span></span>
<span class="line"><span class="token comment"># 03:09:47PM DELETE_COMPLETE AWS::IAM::Role IamRole</span></span>
<span class="line"><span class="token comment"># Stack demo-dev deleted.</span></span>
<span class="line"><span class="token comment"># Time took for deletion: 1m 26s.</span></span>
<span class="line"><span class="token comment"># Deleting CloudWatch logs</span></span>
<span class="line"><span class="token comment"># Project demo-dev deleted!</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>`,11);function P(o,T){const s=n("router-link"),i=n("VPCard"),c=n("VidStack");return v(),d("div",null,[e("h1",E,[e("a",g,[e("span",null,p(o.$frontmatter.title)+" 관련",1)])]),e("nav",_,[e("ul",null,[e("li",null,[t(s,{to:"#what-s-deleted"},{default:a(()=>[l("What’s Deleted")]),_:1})]),e("li",null,[t(s,{to:"#delete-in-action"},{default:a(()=>[l("Delete in Action")]),_:1})])])]),k,t(i,m(u({title:"Jets Delete Tutorial",desc:"...",link:"https://blog.boltops.com/2018/11/12/jets-tutorial-jets-delete",logo:"https://res.cloudinary.com/boltops/image/fetch/c_limit,f_auto,q_auto,w_746/https://blog.boltops.com/img/posts/2018/11/jets-delete-v2.png",background:"rgba(240,130,26,0.2)"})),null,16),S,t(c,{src:"youtube/RwRMTAjWVtM"}),y])}const j=r(b,[["render",P],["__file","20181112-jets-tutorial-jets-delete.html.vue"]]),f=JSON.parse('{"path":"/ruby/rubyonjets-learning-content/20181112-jets-tutorial-jets-delete.html","title":"Jets Delete Tutorial","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Jets Delete Tutorial","description":"Jets - Learning Content > Jets Delete Tutorial","category":["Ruby"],"tag":["crashcourse","ruby","jets","aws","aws-lambda","cloudwatch"],"head":[[{"meta":null},{"property":"og:title","content":"Jets - Learning Content > Jets Delete Tutorial"},{"property":"og:description","content":"Jets Delete Tutorial"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/ruby/rubyonjets-learning-content/20181112-jets-tutorial-jets-delete.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/crashcourse/ruby/rubyonjets-learning-content/20181112-jets-tutorial-jets-delete.html"}],["meta",{"property":"og:site_name","content":"🥁Crashcourse"}],["meta",{"property":"og:title","content":"Jets Delete Tutorial"}],["meta",{"property":"og:description","content":"Jets - Learning Content > Jets Delete Tutorial"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-10-03T01:20:13.000Z"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"ruby"}],["meta",{"property":"article:tag","content":"jets"}],["meta",{"property":"article:tag","content":"aws"}],["meta",{"property":"article:tag","content":"aws-lambda"}],["meta",{"property":"article:tag","content":"cloudwatch"}],["meta",{"property":"article:modified_time","content":"2024-10-03T01:20:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Jets Delete Tutorial\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-03T01:20:13.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"What’s Deleted","slug":"what-s-deleted","link":"#what-s-deleted","children":[]},{"level":2,"title":"Delete in Action","slug":"delete-in-action","link":"#delete-in-action","children":[]}],"git":{"createdTime":1703642364000,"updatedTime":1727918413000,"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":7}]},"readingTime":{"minutes":1.24,"words":372},"filePathRelative":"ruby/rubyonjets-learning-content/20181112-jets-tutorial-jets-delete.md","localizedDate":"2023년 12월 27일","excerpt":"\\n\\n<hr>\\n"}');export{j as comp,f as data};