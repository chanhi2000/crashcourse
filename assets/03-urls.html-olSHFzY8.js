import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as u,c as p,a as n,t as m,b as s,w as t,n as v,g as b,d as e,e as h}from"./app-Ds0QsEfe.js";const k={},g={id:"frontmatter-title-관련",tabindex:"-1"},q={class:"header-anchor",href:"#frontmatter-title-관련"},f={class:"table-of-contents"},x=n("hr",null,null,-1),y=n("hr",null,null,-1),_={href:"https://datatracker.ietf.org/doc/html/rfc3986",target:"_blank",rel:"noopener noreferrer"},U=h(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>scheme://user:password@host:port/path?query<span class="token comment">#fragment</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>scheme</code> defines a protocol (like <code>https</code> or <code>ftp</code>). If omitted, curl will try to guess one.</li><li><code>user</code> and <code>password</code> are authentication credentials (passing credentials in URLs is generally not used anymore for the security reasons).</li><li><code>host</code> is the hostname, domain name or IP address of the server.</li><li><code>port</code> is the port number. If omitted, curl will use the default port associated with the scheme (such as 80 for <code>http</code> or 443 for <code>https</code>).</li><li><code>path</code> is the path to the resource on the server.</li><li><code>query</code> is usually a sequence of <code>name=value</code> pairs separated by <code>&amp;</code>.</li></ul><p>For curl, anything starting with <code>-</code> or <code>--</code> is an option, and everything else is a URL.</p><hr><h2 id="query" tabindex="-1"><a class="header-anchor" href="#query"><span>Query</span></a></h2><p>If you pass a lot of URL parameters, the query part can become quite long. The <code>--url-query</code> option allows you to specify query parts separately:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> http://httpbin/get --url-query <span class="token string">&quot;name=Alice&quot;</span> --url-query <span class="token string">&quot;age=25&quot;</span>
<span class="token comment"># {</span>
<span class="token comment">#   &quot;args&quot;: {</span>
<span class="token comment">#     &quot;age&quot;: [</span>
<span class="token comment">#       &quot;25&quot;</span>
<span class="token comment">#     ],</span>
<span class="token comment">#     &quot;name&quot;: [</span>
<span class="token comment">#       &quot;Alice&quot;</span>
<span class="token comment">#     ]</span>
<span class="token comment">#   },</span>
<span class="token comment">#   &quot;headers&quot;: {</span>
<span class="token comment">#     &quot;Accept&quot;: [</span>
<span class="token comment">#       &quot;*/*&quot;</span>
<span class="token comment">#     ],</span>
<span class="token comment">#     &quot;Host&quot;: [</span>
<span class="token comment">#       &quot;httpbin&quot;</span>
<span class="token comment">#     ],</span>
<span class="token comment">#     &quot;User-Agent&quot;: [</span>
<span class="token comment">#       &quot;curl/8.2.1&quot;</span>
<span class="token comment">#     ]</span>
<span class="token comment">#   },</span>
<span class="token comment">#   &quot;method&quot;: &quot;GET&quot;,</span>
<span class="token comment">#   &quot;origin&quot;: &quot;172.19.0.3:38126&quot;,</span>
<span class="token comment">#   &quot;url&quot;: &quot;http://httpbin/get?name=Alice&amp;age=25&quot;</span>
<span class="token comment"># }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="multiple-urls" tabindex="-1"><a class="header-anchor" href="#multiple-urls"><span>Multiple URLs</span></a></h2><p>Curl accepts any number of URLs, each of which requires a destination — stdout or a file. For example, this command saves the first UUID to <code>/tmp/uuid1.json</code> and the second UUID to <code>tmp/uuid2.json</code>:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> 
  <span class="token parameter variable">-o</span> /tmp/uuid1.json http://httpbin/uuid
  <span class="token parameter variable">-o</span> /tmp/uuid2.json http://httpbin/uuid
<span class="token operator">&amp;&amp;</span> <span class="token function">cat</span> /tmp/uuid1.json
<span class="token operator">&amp;&amp;</span> <span class="token function">cat</span> /tmp/uuid2.json
<span class="token comment"># {</span>
<span class="token comment">#   &quot;uuid&quot;: &quot;a420097a-f20b-4050-b7ef-6b529a46c287&quot;</span>
<span class="token comment"># }</span>
<span class="token comment"># {</span>
<span class="token comment">#   &quot;uuid&quot;: &quot;be26b2f8-dcde-4de5-9db1-ef5d879c8fe8&quot;</span>
<span class="token comment"># }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>(Here and beyond, I will sometimes show multiline commands for illustrative purposes. In reality curl expects a single line or line breaks with )</p></blockquote><p>The <code>-O</code> derives the filename from the URL:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> --output-dir /tmp
  <span class="token parameter variable">-O</span> http://httpbin/anything/one
  <span class="token parameter variable">-O</span> http://httpbin/anything/two

<span class="token operator">&amp;&amp;</span> <span class="token function">ls</span> /tmp
<span class="token comment"># one</span>
<span class="token comment"># two</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To write both responses to the same file, you can use redirection:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> http://httpbin/uuid http://httpbin/uuid <span class="token operator">&gt;</span> /tmp/uuid.json

<span class="token operator">&amp;&amp;</span> <span class="token function">cat</span> /tmp/uuid.json
<span class="token comment"># {</span>
<span class="token comment">#   &quot;uuid&quot;: &quot;b3d3a717-cf30-4fd8-9f9a-27c674027f98&quot;</span>
<span class="token comment"># }</span>
<span class="token comment"># {</span>
<span class="token comment">#   &quot;uuid&quot;: &quot;c21cbb31-5353-406f-8180-5e868dc001ba&quot;</span>
<span class="token comment"># }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="url-globbing" tabindex="-1"><a class="header-anchor" href="#url-globbing"><span>URL globbing</span></a></h2><p>Curl automatically expands glob expressions in URLs into multiple specific URLs.</p><p>For example, this command requests three different paths (<code>al</code>, <code>bt</code>, <code>gm</code>), each with two different parameters (<code>num=1</code> and <code>num=2</code>), for a total of six URLs:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> --output-dir /tmp <span class="token parameter variable">-o</span> <span class="token string">&quot;out_#1_#2.txt&quot;</span>
  http://httpbin/anything/<span class="token punctuation">{</span>al,bt,gm<span class="token punctuation">}</span>?num<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">1</span>-2<span class="token punctuation">]</span>

<span class="token operator">&amp;&amp;</span> <span class="token function">ls</span> /tmp
<span class="token comment"># out_al_1.txt</span>
<span class="token comment"># out_al_2.txt</span>
<span class="token comment"># out_bt_1.txt</span>
<span class="token comment"># out_bt_2.txt</span>
<span class="token comment"># out_gm_1.txt</span>
<span class="token comment"># out_gm_2.txt</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can disable globbing with the <code>--globoff</code> option if <code>[]{}</code> characters are valid in your URLs. Then curl will treat them literally.</p><figure><img src="https://antonz.org/mastering-curl/parallel-transfers.jpg" alt="Parallel transfers" tabindex="0" loading="lazy"><figcaption>Parallel transfers</figcaption></figure><blockquote><p>Use <code>--parallel</code> (<code>-Z</code>) to tell curl process URLs concurrently.</p></blockquote><hr><h2 id="config-file" tabindex="-1"><a class="header-anchor" href="#config-file"><span>Config file</span></a></h2><p>As the number of options increases, the curl command becomes harder to decipher. To make it more readable, you can prepare a config file that lists one option per line (<code>--</code> is optional):</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>output-dir /tmp
show-error
silent
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>By default, curl reads the config from <code>$HOME/.curlrc</code>, but you can change this with the <code>--config</code> (<code>-K</code>) option:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">--config</span> /sandbox/.curlrc http://httpbin/uuid
<span class="token comment"># {</span>
<span class="token comment">#   &quot;uuid&quot;: &quot;274ef701-f653-451e-976f-85fef2881c95&quot;</span>
<span class="token comment"># }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="progress-meters" tabindex="-1"><a class="header-anchor" href="#progress-meters"><span>Progress meters</span></a></h2><p>Curl has two progress meters. The default is verbose:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> --no-silent http://httpbin/uuid
<span class="token comment"># {</span>
<span class="token comment">#   &quot;uuid&quot;: &quot;0ca972e6-39f4-4b1c-9ad9-9abc34424143&quot;</span>
<span class="token comment"># }</span>
<span class="token comment"># </span>
<span class="token comment">#   % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current</span>
<span class="token comment">#                                  Dload  Upload   Total   Spent    Left  Speed</span>
<span class="token comment"># </span>
<span class="token comment">#   0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0</span>
<span class="token comment"># 100    53  100    53    0     0  38047      0 --:--:-- --:--:-- --:--:-- 53000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(I have a silent option in my config file, so I have to turn it off explicitly; by default, it&#39;s not set, so <code>--no-silent</code> is not needed)</p><p>The other is compact:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> --no-silent --progress-bar http://httpbin/uuid
<span class="token comment"># {</span>
<span class="token comment">#   &quot;uuid&quot;: &quot;6fe41e70-2ec2-4a6e-8839-2c98e9e0d5f1&quot;</span>
<span class="token comment"># }</span>
<span class="token comment"># </span>
<span class="token comment"># ######################################################################## 100.0%</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The <code>--silent</code> option turns the meter off completely:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">--silent</span> http://httpbin/uuid
<span class="token comment"># {</span>
<span class="token comment">#   &quot;uuid&quot;: &quot;96d3c300-1fd5-4a84-aef4-9f10736e9a8a&quot;</span>
<span class="token comment"># }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="state-reset" tabindex="-1"><a class="header-anchor" href="#state-reset"><span>State reset</span></a></h2><p>When you set options, they apply to all URLs curl processes. For example, here both headers are sent to both URLs:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span>
  <span class="token parameter variable">-H</span> <span class="token string">&quot;x-num: one&quot;</span> http://httpbin/headers?1
  <span class="token parameter variable">-H</span> <span class="token string">&quot;x-num: two&quot;</span> http://httpbin/headers?2
<span class="token comment"># {</span>
<span class="token comment">#   &quot;headers&quot;: {</span>
<span class="token comment">#     &quot;Accept&quot;: [</span>
<span class="token comment">#       &quot;*/*&quot;</span>
<span class="token comment">#     ],</span>
<span class="token comment">#     &quot;Host&quot;: [</span>
<span class="token comment">#       &quot;httpbin&quot;</span>
<span class="token comment">#     ],</span>
<span class="token comment">#     &quot;User-Agent&quot;: [</span>
<span class="token comment">#       &quot;curl/8.2.1&quot;</span>
<span class="token comment">#     ],</span>
<span class="token comment">#     &quot;X-Num&quot;: [</span>
<span class="token comment">#       &quot;one&quot;,</span>
<span class="token comment">#       &quot;two&quot;</span>
<span class="token comment">#     ]</span>
<span class="token comment">#   }</span>
<span class="token comment"># }</span>
<span class="token comment"># {</span>
<span class="token comment">#   &quot;headers&quot;: {</span>
<span class="token comment">#     &quot;Accept&quot;: [</span>
<span class="token comment">#       &quot;*/*&quot;</span>
<span class="token comment">#     ],</span>
<span class="token comment">#     &quot;Host&quot;: [</span>
<span class="token comment">#       &quot;httpbin&quot;</span>
<span class="token comment">#     ],</span>
<span class="token comment">#     &quot;User-Agent&quot;: [</span>
<span class="token comment">#       &quot;curl/8.2.1&quot;</span>
<span class="token comment">#     ],</span>
<span class="token comment">#     &quot;X-Num&quot;: [</span>
<span class="token comment">#       &quot;one&quot;,</span>
<span class="token comment">#       &quot;two&quot;</span>
<span class="token comment">#     ]</span>
<span class="token comment">#   }</span>
<span class="token comment"># }  </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Sometimes that&#39;s not what you want. To reset the state between URL calls, use the <code>--next</code> option:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span>
  <span class="token parameter variable">-H</span> <span class="token string">&quot;x-num: one&quot;</span> http://httpbin/headers?1
  <span class="token parameter variable">--next</span>
  <span class="token parameter variable">-H</span> <span class="token string">&quot;x-num: two&quot;</span> http://httpbin/headers?2
<span class="token comment"># {</span>
<span class="token comment">#   &quot;headers&quot;: {</span>
<span class="token comment">#     &quot;Accept&quot;: [</span>
<span class="token comment">#       &quot;*/*&quot;</span>
<span class="token comment">#     ],</span>
<span class="token comment">#     &quot;Host&quot;: [</span>
<span class="token comment">#       &quot;httpbin&quot;</span>
<span class="token comment">#     ],</span>
<span class="token comment">#     &quot;curl/8.2.1&quot;</span>
<span class="token comment">#     &quot;User-Agent&quot;: [</span>
<span class="token comment">#     &quot;X-Num&quot;: [</span>
<span class="token comment">#     ],</span>
<span class="token comment">#     ]</span>
<span class="token comment">#       &quot;one&quot;</span>
<span class="token comment">#   }</span>
<span class="token comment">#   }</span>
<span class="token comment">#   &quot;headers&quot;: {</span>
<span class="token comment"># {</span>
<span class="token comment">#       &quot;*/*&quot;</span>
<span class="token comment">#     &quot;Accept&quot;: [</span>
<span class="token comment">#     &quot;Host&quot;: [</span>
<span class="token comment">#     ],</span>
<span class="token comment">#     ],</span>
<span class="token comment">#       &quot;httpbin&quot;</span>
<span class="token comment">#       &quot;curl/8.2.1&quot;</span>
<span class="token comment">#     &quot;User-Agent&quot;: [</span>
<span class="token comment">#     &quot;X-Num&quot;: [</span>
<span class="token comment">#     ],</span>
<span class="token comment">#     ]</span>
<span class="token comment">#       &quot;two&quot;</span>
<span class="token comment"># }  </span>
<span class="token comment"># }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>`,46);function w(l,L){const a=i("router-link"),o=i("VPCard"),c=i("ExternalLinkIcon"),d=i("TagLinks");return u(),p("div",null,[n("h1",g,[n("a",q,[n("span",null,m(l.$frontmatter.title)+" 관련",1)])]),n("nav",f,[n("ul",null,[n("li",null,[s(a,{to:"#query"},{default:t(()=>[e("Query")]),_:1})]),n("li",null,[s(a,{to:"#multiple-urls"},{default:t(()=>[e("Multiple URLs")]),_:1})]),n("li",null,[s(a,{to:"#url-globbing"},{default:t(()=>[e("URL globbing")]),_:1})]),n("li",null,[s(a,{to:"#config-file"},{default:t(()=>[e("Config file")]),_:1})]),n("li",null,[s(a,{to:"#progress-meters"},{default:t(()=>[e("Progress meters")]),_:1})]),n("li",null,[s(a,{to:"#state-reset"},{default:t(()=>[e("State reset")]),_:1})])])]),x,s(o,v(b({title:"3. URLs",desc:"Mastering curl - interactive text guide",link:"https://antonz.org/mastering-curl/#urls",logo:"https://antonz.org/assets/favicon/favicon.ico",background:"rgba(22,25,35,0.2)"})),null,16),y,n("p",null,[e("Curl supports URLs (URIs, really) similar to how "),n("a",_,[e("RFC 3986"),s(c)]),e(" defines them:")]),U,s(d)])}const C=r(k,[["render",w],["__file","03-urls.html.vue"]]),I=JSON.parse('{"path":"/cli/mastering-curl-interactive-text-guide/03-urls.html","title":"3. URLs","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"3. URLs","description":"Mastering Curl - Interactive Text Guide > 3. URLs","category":["CLI","Linux"],"tag":["crashcourse","cli","sh","shell","gnu","linux","awk"],"head":[[{"meta":null},{"property":"og:title","content":"Mastering Curl - Interactive Text Guide > 3. URLs"},{"property":"og:description","content":"3. URLs"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/cli/mastering-curl-interactive-text-guide/03-urls.html"}]]},"headers":[{"level":2,"title":"Query","slug":"query","link":"#query","children":[]},{"level":2,"title":"Multiple URLs","slug":"multiple-urls","link":"#multiple-urls","children":[]},{"level":2,"title":"URL globbing","slug":"url-globbing","link":"#url-globbing","children":[]},{"level":2,"title":"Config file","slug":"config-file","link":"#config-file","children":[]},{"level":2,"title":"Progress meters","slug":"progress-meters","link":"#progress-meters","children":[]},{"level":2,"title":"State reset","slug":"state-reset","link":"#state-reset","children":[]}],"git":{},"readingTime":{"minutes":2.78,"words":835},"filePathRelative":"cli/mastering-curl-interactive-text-guide/03-urls.md","excerpt":"\\n\\n<hr>\\n"}');export{C as comp,I as data};
