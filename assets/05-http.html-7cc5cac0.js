import{_ as u,r as o,o as r,c as m,a as n,b as s,t as d,d as e,w as t,n as v,g as b,e as i}from"./app-d223f2a5.js";const h={},q={id:"frontmatter-title-관련",tabindex:"-1"},k=n("a",{class:"header-anchor",href:"#frontmatter-title-관련","aria-hidden":"true"},"#",-1),g={class:"table-of-contents"},f=n("hr",null,null,-1),T=i(`<hr><p>Curl is mostly used to work with HTTP, so let&#39;s talk about it.</p><p>HTTP/1.x is a plain-text protocol that describes the communication between the client and the server. The client sends messages like this:</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code><span class="token request-line"><span class="token method property">POST</span> <span class="token request-target url">/anything/chat</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">host</span><span class="token punctuation">:</span> <span class="token header-value">httpbingo.org</span></span>
<span class="token header"><span class="token header-name keyword">content-type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token header"><span class="token header-name keyword">user-agent</span><span class="token punctuation">:</span> <span class="token header-value">curl/7.87.0</span></span>
<span class="token application-json">
<span class="token punctuation">{</span>
    <span class="token string-property property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Hello!&quot;</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The first line is a <em>request line</em>. The method (<code>POST</code>) defines the operation the client wants to perform. The path (<code>/anything/chat</code>) is the URL of the requested resource (without the protocol, domain and port). The version (HT<code>TP/1.1</code>) indicates the version of the HTTP protocol.</p><p>Next lines (until the empty line) are headers. Each header is a key-value pair that tells the server some useful information about the request. In our case it&#39;s the hostname of the server (<code>httpbingo.org</code>), the type of the content (<code>application/json</code>) and the client&#39;s self-identification (<code>user-agent</code>).</p><p>Finally, there is the actual data that the client sends to the server.</p><p>Client receives messages like this in response:</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code><span class="token response-status"><span class="token http-version property">HTTP/1.1</span> <span class="token status-code number">200</span> <span class="token reason-phrase string">OK</span></span>
<span class="token header"><span class="token header-name keyword">date</span><span class="token punctuation">:</span> <span class="token header-value">Mon, 28 Aug 2023 07:51:49 GMT</span></span>
<span class="token header"><span class="token header-name keyword">content-type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token application-json">
<span class="token punctuation">{</span>
    <span class="token string-property property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Hi!&quot;</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),y=n("code",null,"HTTP/1.1",-1),w=n("code",null,"200",-1),x={href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status",target:"_blank",rel:"noopener noreferrer"},A=n("em",null,"status message",-1),H=i(`<p>Next lines (until the empty line) are <em>headers</em>. Similar to request headers, these provide useful information about the response to the client.</p><p>Finally, there is the actual data that the server sends to the client.</p><p>The HTTP protocol is stateless, so any state must be contained within the request itself, either in the headers or in the body.</p><figure><img src="https://antonz.org/mastering-curl/http2.jpg" alt="HTTP/2" tabindex="0" loading="lazy"><figcaption>HTTP/2</figcaption></figure><blockquote><p>HTTP/2, the successor to HTTP/1.1, is a binary protocol. However, curl displays HTTP/2 messages in plain text (just like HTTP/1.1), so we can safely ignore this fact for our purposes.</p></blockquote><hr><h2 id="http-method" tabindex="-1"><a class="header-anchor" href="#http-method" aria-hidden="true">#</a> HTTP method</h2><p>Curl supports all HTTP methods (sometimes called <em>verbs</em>).</p><p>GET (the default one, requires no options):</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> http://httpbin/get
<span class="token comment"># {</span>
<span class="token comment">#   &quot;args&quot;: {},</span>
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
<span class="token comment">#   &quot;origin&quot;: &quot;172.19.0.3:57144&quot;,</span>
<span class="token comment">#   &quot;url&quot;: &quot;http://httpbin/get&quot;</span>
<span class="token comment"># }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>HEAD (<code>-I</code>/<code>--head</code>, returns headers only):</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-I</span> http://httpbin/head
<span class="token comment"># HTTP/1.1 200 OK</span>
<span class="token comment"># Access-Control-Allow-Credentials: true</span>
<span class="token comment"># Access-Control-Allow-Origin: *</span>
<span class="token comment"># Content-Type: application/json; charset=utf-8</span>
<span class="token comment"># Date: Sat, 16 Sep 2023 12:38:23 GMT</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>POST (<code>-d</code>/<code>--data</code> for data or <code>-F</code>/<code>--form</code> for HTTP form):</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;name=alice&quot;</span> http://httpbin/post
<span class="token comment"># {</span>
<span class="token comment">#   &quot;args&quot;: {},</span>
<span class="token comment">#   &quot;headers&quot;: {</span>
<span class="token comment">#     &quot;Accept&quot;: [</span>
<span class="token comment">#       &quot;*/*&quot;</span>
<span class="token comment">#     ],</span>
<span class="token comment">#     &quot;Content-Length&quot;: [</span>
<span class="token comment">#       &quot;10&quot;</span>
<span class="token comment">#     ],</span>
<span class="token comment">#     &quot;Content-Type&quot;: [</span>
<span class="token comment">#       &quot;application/x-www-form-urlencoded&quot;</span>
<span class="token comment">#     ],</span>
<span class="token comment">#     &quot;Host&quot;: [</span>
<span class="token comment">#       &quot;httpbin&quot;</span>
<span class="token comment">#     ],</span>
<span class="token comment">#     &quot;User-Agent&quot;: [</span>
<span class="token comment">#       &quot;curl/8.2.1&quot;</span>
<span class="token comment">#     ]</span>
<span class="token comment">#   },</span>
<span class="token comment">#   &quot;method&quot;: &quot;POST&quot;,</span>
<span class="token comment">#   &quot;origin&quot;: &quot;172.19.0.3:47810&quot;,</span>
<span class="token comment">#   &quot;url&quot;: &quot;http://httpbin/post&quot;,</span>
<span class="token comment">#   &quot;data&quot;: &quot;name=alice&quot;,</span>
<span class="token comment">#   &quot;files&quot;: {},</span>
<span class="token comment">#   &quot;form&quot;: {</span>
<span class="token comment">#     &quot;name&quot;: [</span>
<span class="token comment">#       &quot;alice&quot;</span>
<span class="token comment">#     ]</span>
<span class="token comment">#   },</span>
<span class="token comment">#   &quot;json&quot;: null</span>
<span class="token comment"># }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Or any other method with <code>--request</code> (<code>-X</code>):</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-X</span> PATCH <span class="token parameter variable">-d</span> <span class="token string">&quot;name=alice&quot;</span> http://httpbin/patch
<span class="token comment"># {</span>
<span class="token comment">#   &quot;args&quot;: {},</span>
<span class="token comment">#   &quot;headers&quot;: {</span>
<span class="token comment">#     &quot;Accept&quot;: [</span>
<span class="token comment">#       &quot;*/*&quot;</span>
<span class="token comment">#     ],</span>
<span class="token comment">#     &quot;Content-Length&quot;: [</span>
<span class="token comment">#       &quot;10&quot;</span>
<span class="token comment">#     ],</span>
<span class="token comment">#     &quot;Content-Type&quot;: [</span>
<span class="token comment">#       &quot;application/x-www-form-urlencoded&quot;</span>
<span class="token comment">#     ],</span>
<span class="token comment">#     &quot;Host&quot;: [</span>
<span class="token comment">#       &quot;httpbin&quot;</span>
<span class="token comment">#     ],</span>
<span class="token comment">#     &quot;User-Agent&quot;: [</span>
<span class="token comment">#       &quot;curl/8.2.1&quot;</span>
<span class="token comment">#     ]</span>
<span class="token comment">#   },</span>
<span class="token comment">#   &quot;method&quot;: &quot;PATCH&quot;,</span>
<span class="token comment">#   &quot;origin&quot;: &quot;172.19.0.3:54320&quot;,</span>
<span class="token comment">#   &quot;url&quot;: &quot;http://httpbin/patch&quot;,</span>
<span class="token comment">#   &quot;data&quot;: &quot;name=alice&quot;,</span>
<span class="token comment">#   &quot;files&quot;: {},</span>
<span class="token comment">#   &quot;form&quot;: {</span>
<span class="token comment">#     &quot;name&quot;: [</span>
<span class="token comment">#       &quot;alice&quot;</span>
<span class="token comment">#     ]</span>
<span class="token comment">#   },</span>
<span class="token comment">#   &quot;json&quot;: null</span>
<span class="token comment"># }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="response-code" tabindex="-1"><a class="header-anchor" href="#response-code" aria-hidden="true">#</a> Response code</h2><p>Typically, status codes 2xx (specifically 200) are considered &quot;success&quot;, while 4xx are treated as client-side errors and 5xx as server-side errors. But curl doesn&#39;t care about codes: to it, every HTTP response is a success:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> http://httpbin/status/503 <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> OK
<span class="token comment"># OK</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>To make curl treat 4xx and 5xx codes as errors, use <code>--fail</code> (<code>-f</code>):</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-f</span> http://httpbin/status/503 <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> OK
<span class="token comment"># curl: (22) The requested URL returned error: 503</span>
<span class="token comment">#  (exit status 22)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To print the response code, use <code>--write-out</code> with the <code>response_code</code> variable:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-w</span> <span class="token string">&quot;%{response_code}&quot;</span> http://httpbin/status/200
<span class="token comment"># 200</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="response-headers" tabindex="-1"><a class="header-anchor" href="#response-headers" aria-hidden="true">#</a> Response headers</h2><p>To display response headers, use <code>--head</code> (<code>-i</code>):</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-i</span> http://httpbin/status/200
<span class="token comment"># HTTP/1.1 200 OK</span>
<span class="token comment"># Access-Control-Allow-Credentials: true</span>
<span class="token comment"># Access-Control-Allow-Origin: *</span>
<span class="token comment"># Content-Type: text/plain; charset=utf-8</span>
<span class="token comment"># Date: Sat, 16 Sep 2023 12:40:50 GMT</span>
<span class="token comment"># Content-Length: 0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Or save them to a file using <code>--dump-header</code> (<code>-D</code>):</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-D</span> /tmp/headers http://httpbin/status/200
<span class="token operator">&amp;&amp;</span> <span class="token function">cat</span> /tmp/headers
<span class="token comment"># HTTP/1.1 200 OK</span>
<span class="token comment"># Access-Control-Allow-Credentials: true</span>
<span class="token comment"># Access-Control-Allow-Origin: *</span>
<span class="token comment"># Content-Type: text/plain; charset=utf-8</span>
<span class="token comment"># Date: Sat, 16 Sep 2023 12:41:10 GMT</span>
<span class="token comment"># Content-Length: 0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="response-body" tabindex="-1"><a class="header-anchor" href="#response-body" aria-hidden="true">#</a> Response body</h2><p>Response body, sometimes called <em>payload</em>, is what curl outputs by default:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> http://httpbin/get
<span class="token comment"># {</span>
<span class="token comment">#   &quot;args&quot;: {},</span>
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
<span class="token comment">#   &quot;origin&quot;: &quot;172.19.0.3:57144&quot;,</span>
<span class="token comment">#   &quot;url&quot;: &quot;http://httpbin/get&quot;</span>
<span class="token comment"># }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can ask the server to compress the data with <code>--compressed</code>, but curl will still show it as uncompressed:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">--compressed</span> http://httpbin/get
<span class="token comment"># {</span>
<span class="token comment">#   &quot;args&quot;: {},</span>
<span class="token comment">#   &quot;headers&quot;: {</span>
<span class="token comment">#     &quot;Accept&quot;: [</span>
<span class="token comment">#       &quot;*/*&quot;</span>
<span class="token comment">#     ],</span>
<span class="token comment">#     &quot;Accept-Encoding&quot;: [</span>
<span class="token comment">#       &quot;deflate, gzip, br&quot;</span>
<span class="token comment">#     ],</span>
<span class="token comment">#     &quot;Host&quot;: [</span>
<span class="token comment">#       &quot;httpbin&quot;</span>
<span class="token comment">#     ],</span>
<span class="token comment">#     &quot;User-Agent&quot;: [</span>
<span class="token comment">#       &quot;curl/8.2.1&quot;</span>
<span class="token comment">#     ]</span>
<span class="token comment">#   },</span>
<span class="token comment">#   &quot;method&quot;: &quot;GET&quot;,</span>
<span class="token comment">#   &quot;origin&quot;: &quot;172.19.0.3:51748&quot;,</span>
<span class="token comment">#   &quot;url&quot;: &quot;http://httpbin/get&quot;</span>
<span class="token comment"># }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>(note how the Accept-Encoding request header has changed)</p></blockquote><hr><h2 id="ranges" tabindex="-1"><a class="header-anchor" href="#ranges" aria-hidden="true">#</a> Ranges</h2>`,39),C=n("code",null,"--range",-1),P=n("code",null,"-r",-1),_={href:"https://curl.se/docs/manpage.html#-r",target:"_blank",rel:"noopener noreferrer"},S=i(`<p>For example, here we request 50 bytes starting with the 100th byte:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">--range</span> <span class="token number">100</span>-150 http://httpbin/range/1024
<span class="token comment"># wxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstu</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Note that the server may ignore the ask and return the entire response.</p><p>If you are downloading data from a server, you can also use <code>--continue-at</code> (<code>-C</code>) to continue the previous transfer at the specified offset:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> --continue-at <span class="token number">1000</span> http://httpbin/range/1024
<span class="token comment"># mnopqrstuvwxyzabcdefghij</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="http-versions" tabindex="-1"><a class="header-anchor" href="#http-versions" aria-hidden="true">#</a> HTTP versions</h2><p>By default, curl uses HTTP/1.1 for the http scheme and HTTP/2 for <code>https</code>. You can change this with flags:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">--http0.9</span>
<span class="token parameter variable">--http1.0</span>
<span class="token parameter variable">--http1.1</span>
<span class="token parameter variable">--http2</span>
<span class="token parameter variable">--http3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To find out which version the server supports, use the <code>http_version</code> response variable:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-w</span> <span class="token string">&quot;%{http_version}&quot;</span> http://httpbin/status/200
<span class="token comment"># 1.1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="conditional-requests" tabindex="-1"><a class="header-anchor" href="#conditional-requests" aria-hidden="true">#</a> Conditional requests</h2><p>Conditional requests are useful when you want to avoid downloading already downloaded data (assuming it is not stale). Curl supports two different conditions: file timestamp and etag.</p><p>Timestamp conditions use <code>--time-cond</code> (<code>-z</code>).</p><p>Download the data only if the remote resource is newer (condition holds):</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> --time-cond <span class="token string">&quot;Aug 30, 2023&quot;</span> http://httpbin/etag/etag
<span class="token comment"># {</span>
<span class="token comment">#   &quot;args&quot;: {},</span>
<span class="token comment">#   &quot;headers&quot;: {</span>
<span class="token comment">#     &quot;Accept&quot;: [</span>
<span class="token comment">#       &quot;*/*&quot;</span>
<span class="token comment">#     ],</span>
<span class="token comment">#     &quot;Host&quot;: [</span>
<span class="token comment">#       &quot;httpbin&quot;</span>
<span class="token comment">#     ],</span>
<span class="token comment">#     &quot;If-Modified-Since&quot;: [</span>
<span class="token comment">#       &quot;Wed, 30 Aug 2023 00:00:00 GMT&quot;</span>
<span class="token comment">#     ],</span>
<span class="token comment">#     &quot;User-Agent&quot;: [</span>
<span class="token comment">#       &quot;curl/8.2.1&quot;</span>
<span class="token comment">#     ]</span>
<span class="token comment">#   },</span>
<span class="token comment">#   &quot;method&quot;: &quot;GET&quot;,</span>
<span class="token comment">#   &quot;origin&quot;: &quot;172.19.0.3:54604&quot;,</span>
<span class="token comment">#   &quot;url&quot;: &quot;http://httpbin/etag/etag&quot;</span>
<span class="token comment"># }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Or older (condition fails):</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-i</span> --time-cond <span class="token string">&quot;-Aug 30, 2023&quot;</span> http://httpbin/etag/etag
<span class="token comment"># HTTP/1.1 412 Precondition Failed</span>
<span class="token comment"># Access-Control-Allow-Credentials: true</span>
<span class="token comment"># Access-Control-Allow-Origin: *</span>
<span class="token comment"># Content-Type: text/plain; charset=utf-8</span>
<span class="token comment"># Etag: &quot;etag&quot;</span>
<span class="token comment"># Last-Modified: Sun, 17 Sep 2023 09:33:05 GMT</span>
<span class="token comment"># Date: Sun, 17 Sep 2023 09:33:05 GMT</span>
<span class="token comment"># Content-Length: 0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Etag conditions are a bit more involved. An <em>etag</em> is a value returned by the server that uniquely identifies the current version of the requested resource. It is often a hash of the data.</p><p>To checks an etag, curl must first to save it with <code>--etag-save</code>:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> --etag-save /tmp/etags http://httpbin/etag/etag
<span class="token comment"># {</span>
<span class="token comment">#   &quot;args&quot;: {},</span>
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
<span class="token comment">#   &quot;origin&quot;: &quot;172.19.0.3:48800&quot;,</span>
<span class="token comment">#   &quot;url&quot;: &quot;http://httpbin/etag/etag&quot;</span>
<span class="token comment"># }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>And use <code>--etag-compare</code> in subsequent requests:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> --etag-save /tmp/etags <span class="token parameter variable">-o</span> /dev/null http://httpbin/etag/etag <span class="token operator">&amp;&amp;</span>
<span class="token function">curl</span> <span class="token parameter variable">-i</span> --etag-compare /tmp/etags http://httpbin/etag/etag
<span class="token comment"># HTTP/1.1 304 Not Modified</span>
<span class="token comment"># Access-Control-Allow-Credentials: true</span>
<span class="token comment"># Access-Control-Allow-Origin: *</span>
<span class="token comment"># Etag: &quot;etag&quot;</span>
<span class="token comment"># Date: Sun, 17 Sep 2023 09:33:56 GMT</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Timestamp conditions rely on the Last-Modified response header, so if the server does not provide it, the resource will always be considered newer. The same goes for etag conditions and the Etag response header.</p><hr><h2 id="http-post" tabindex="-1"><a class="header-anchor" href="#http-post" aria-hidden="true">#</a> HTTP POST</h2><p>POST sends data to the server. By default, it&#39;s a set of key-value pairs encoded in a single string with a <code>application/x-www-form-urlencoded</code> Content-Type header.</p><p>You can use <code>--data</code> (<code>-d</code>) to specify individual key-value pairs (or the entire string):</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-d</span> <span class="token assign-left variable">name</span><span class="token operator">=</span>alice <span class="token parameter variable">-d</span> <span class="token assign-left variable">age</span><span class="token operator">=</span><span class="token number">25</span> http://httpbin/post
<span class="token comment"># {</span>
<span class="token comment">#   &quot;args&quot;: {},</span>
<span class="token comment">#   &quot;headers&quot;: {</span>
<span class="token comment">#     &quot;Accept&quot;: [</span>
<span class="token comment">#       &quot;*/*&quot;</span>
<span class="token comment">#     ],</span>
<span class="token comment">#     &quot;Content-Length&quot;: [</span>
<span class="token comment">#       &quot;17&quot;</span>
<span class="token comment">#     ],</span>
<span class="token comment">#     &quot;Content-Type&quot;: [</span>
<span class="token comment">#       &quot;application/x-www-form-urlencoded&quot;</span>
<span class="token comment">#     ],</span>
<span class="token comment">#     &quot;Host&quot;: [</span>
<span class="token comment">#       &quot;httpbin&quot;</span>
<span class="token comment">#     ],</span>
<span class="token comment">#     &quot;User-Agent&quot;: [</span>
<span class="token comment">#       &quot;curl/8.2.1&quot;</span>
<span class="token comment">#     ]</span>
<span class="token comment">#   },</span>
<span class="token comment">#   &quot;method&quot;: &quot;POST&quot;,</span>
<span class="token comment">#   &quot;origin&quot;: &quot;172.19.0.3:39396&quot;,</span>
<span class="token comment">#   &quot;url&quot;: &quot;http://httpbin/post&quot;,</span>
<span class="token comment">#   &quot;data&quot;: &quot;name=alice&amp;age=25&quot;,</span>
<span class="token comment">#   &quot;files&quot;: {},</span>
<span class="token comment">#   &quot;form&quot;: {</span>
<span class="token comment">#     &quot;age&quot;: [</span>
<span class="token comment">#       &quot;25&quot;</span>
<span class="token comment">#     ],</span>
<span class="token comment">#     &quot;name&quot;: [</span>
<span class="token comment">#       &quot;alice&quot;</span>
<span class="token comment">#     ]</span>
<span class="token comment">#   },</span>
<span class="token comment">#   &quot;json&quot;: null</span>
<span class="token comment"># }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To send data from a file, use <code>@</code> with a file path. Use <code>--header</code> (<code>-H</code>) to change the Content-Type header with according to the file contents:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;Alice, age 25&quot;</span> <span class="token operator">&gt;</span> /tmp/data.txt <span class="token operator">&amp;&amp;</span>

<span class="token function">curl</span> <span class="token parameter variable">-d</span> @/tmp/data.txt <span class="token parameter variable">-H</span> <span class="token string">&quot;content-type: text/plain&quot;</span>
  http://httpbin/post
<span class="token comment"># {</span>
<span class="token comment">#   &quot;args&quot;: {},</span>
<span class="token comment">#   &quot;headers&quot;: {</span>
<span class="token comment">#     &quot;Accept&quot;: [</span>
<span class="token comment">#       &quot;*/*&quot;</span>
<span class="token comment">#     ],</span>
<span class="token comment">#     &quot;Content-Length&quot;: [</span>
<span class="token comment">#       &quot;13&quot;</span>
<span class="token comment">#     ],</span>
<span class="token comment">#     &quot;Content-Type&quot;: [</span>
<span class="token comment">#       &quot;text/plain&quot;</span>
<span class="token comment">#     ],</span>
<span class="token comment">#     &quot;Host&quot;: [</span>
<span class="token comment">#       &quot;httpbin&quot;</span>
<span class="token comment">#     ],</span>
<span class="token comment">#     &quot;User-Agent&quot;: [</span>
<span class="token comment">#       &quot;curl/8.2.1&quot;</span>
<span class="token comment">#     ]</span>
<span class="token comment">#   },</span>
<span class="token comment">#   &quot;method&quot;: &quot;POST&quot;,</span>
<span class="token comment">#   &quot;origin&quot;: &quot;172.19.0.3:51978&quot;,</span>
<span class="token comment">#   &quot;url&quot;: &quot;http://httpbin/post&quot;,</span>
<span class="token comment">#   &quot;data&quot;: &quot;Alice, age 25&quot;,</span>
<span class="token comment">#   &quot;files&quot;: {},</span>
<span class="token comment">#   &quot;form&quot;: {},</span>
<span class="token comment">#   &quot;json&quot;: null</span>
<span class="token comment"># }  </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>--data-raw</code> posts data similar to <code>--data</code>, but without the special interpretation of the <code>@</code> character.</p><p>To post JSON data, use <code>--json</code>. It automatically sets the Content-Type and Accept headers accordingly:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">--json</span> <span class="token string">&#39;{&quot;name&quot;: &quot;alice&quot;}&#39;</span> http://httpbin/post
<span class="token comment"># {</span>
<span class="token comment">#   &quot;args&quot;: {},</span>
<span class="token comment">#   &quot;headers&quot;: {</span>
<span class="token comment">#     &quot;Accept&quot;: [</span>
<span class="token comment">#       &quot;application/json&quot;</span>
<span class="token comment">#     ],</span>
<span class="token comment">#     &quot;Content-Length&quot;: [</span>
<span class="token comment">#       &quot;17&quot;</span>
<span class="token comment">#     ],</span>
<span class="token comment">#     &quot;Content-Type&quot;: [</span>
<span class="token comment">#       &quot;application/json&quot;</span>
<span class="token comment">#     ],</span>
<span class="token comment">#     &quot;Host&quot;: [</span>
<span class="token comment">#       &quot;httpbin&quot;</span>
<span class="token comment">#     ],</span>
<span class="token comment">#     &quot;User-Agent&quot;: [</span>
<span class="token comment">#       &quot;curl/8.2.1&quot;</span>
<span class="token comment">#     ]</span>
<span class="token comment">#   },</span>
<span class="token comment">#   &quot;method&quot;: &quot;POST&quot;,</span>
<span class="token comment">#   &quot;origin&quot;: &quot;172.19.0.3:50854&quot;,</span>
<span class="token comment">#   &quot;url&quot;: &quot;http://httpbin/post&quot;,</span>
<span class="token comment">#   &quot;data&quot;: &quot;{\\&quot;name\\&quot;: \\&quot;alice\\&quot;}&quot;,</span>
<span class="token comment">#   &quot;files&quot;: {},</span>
<span class="token comment">#   &quot;form&quot;: {},</span>
<span class="token comment">#   &quot;json&quot;: {</span>
<span class="token comment">#     &quot;name&quot;: &quot;alice&quot;</span>
<span class="token comment">#   }</span>
<span class="token comment"># }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><figure><img src="https://antonz.org/mastering-curl/json.jpg" alt="JSON requests" tabindex="0" loading="lazy"><figcaption>JSON requests</figcaption></figure><blockquote><p>Use jo and jq to simplify working with JSON.</p></blockquote><p>To URL-encode data (escape all symbols not allowed in URLs), use <code>--data-urlencode</code>:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> --data-urlencode <span class="token string">&quot;Name: Alice Barton&quot;</span> http://httpbin/post
<span class="token comment"># {</span>
<span class="token comment">#   &quot;args&quot;: {},</span>
<span class="token comment">#   &quot;headers&quot;: {</span>
<span class="token comment">#     &quot;Accept&quot;: [</span>
<span class="token comment">#       &quot;*/*&quot;</span>
<span class="token comment">#     ],</span>
<span class="token comment">#     &quot;Content-Length&quot;: [</span>
<span class="token comment">#       &quot;20&quot;</span>
<span class="token comment">#     ],</span>
<span class="token comment">#     &quot;Content-Type&quot;: [</span>
<span class="token comment">#       &quot;application/x-www-form-urlencoded&quot;</span>
<span class="token comment">#     ],</span>
<span class="token comment">#     &quot;Host&quot;: [</span>
<span class="token comment">#       &quot;httpbin&quot;</span>
<span class="token comment">#     ],</span>
<span class="token comment">#     &quot;User-Agent&quot;: [</span>
<span class="token comment">#       &quot;curl/8.2.1&quot;</span>
<span class="token comment">#     ]</span>
<span class="token comment">#   },</span>
<span class="token comment">#   &quot;method&quot;: &quot;POST&quot;,</span>
<span class="token comment">#   &quot;origin&quot;: &quot;172.19.0.3:60484&quot;,</span>
<span class="token comment">#   &quot;url&quot;: &quot;http://httpbin/post&quot;,</span>
<span class="token comment">#   &quot;data&quot;: &quot;Name%3A+Alice+Barton&quot;,</span>
<span class="token comment">#   &quot;files&quot;: {},</span>
<span class="token comment">#   &quot;form&quot;: {</span>
<span class="token comment">#     &quot;Name: Alice Barton&quot;: [</span>
<span class="token comment">#       &quot;&quot;</span>
<span class="token comment">#     ]</span>
<span class="token comment">#   },</span>
<span class="token comment">#   &quot;json&quot;: null</span>
<span class="token comment"># }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="multipart-formpost" tabindex="-1"><a class="header-anchor" href="#multipart-formpost" aria-hidden="true">#</a> Multipart formpost</h2><p>POST can send data as a sequence of &quot;parts&quot; with a <code>multipart/form-data</code> content type. It&#39;s often used for HTML forms that contain both text fields and files.</p><p>Each part has a name, headers, and data. Parts are separated by a &quot;mime boundary&quot;:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>--------------------------d74496d66958873e
Content-Disposition: form-data; name=&quot;person&quot;

anonymous
--------------------------d74496d66958873e
Content-Disposition: form-data; name=&quot;secret&quot;; filename=&quot;file.txt&quot;
Content-Type: text/plain

contents of the file
--------------------------d74496d66958873e--
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To construct multipart requests with curl, use <code>--form</code> (<code>-F</code>). Each of these options adds a part to the request:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">touch</span> /tmp/alice.png <span class="token operator">&amp;&amp;</span>

<span class="token function">curl</span> <span class="token parameter variable">-F</span> <span class="token assign-left variable">name</span><span class="token operator">=</span>Alice <span class="token parameter variable">-F</span> <span class="token assign-left variable">age</span><span class="token operator">=</span><span class="token number">25</span> <span class="token parameter variable">-F</span> <span class="token assign-left variable">photo</span><span class="token operator">=</span>@/tmp/alice.png
  http://httpbin/post
<span class="token comment"># {</span>
<span class="token comment">#   &quot;args&quot;: {},</span>
<span class="token comment">#   &quot;headers&quot;: {</span>
<span class="token comment">#     &quot;Accept&quot;: [</span>
<span class="token comment">#       &quot;*/*&quot;</span>
<span class="token comment">#     ],</span>
<span class="token comment">#     &quot;Content-Length&quot;: [</span>
<span class="token comment">#       &quot;379&quot;</span>
<span class="token comment">#     ],</span>
<span class="token comment">#     &quot;Content-Type&quot;: [</span>
<span class="token comment">#       &quot;multipart/form-data; boundary=------------------------dbb84475f7b4d29e&quot;</span>
<span class="token comment">#     ],</span>
<span class="token comment">#     &quot;Host&quot;: [</span>
<span class="token comment">#       &quot;httpbin&quot;</span>
<span class="token comment">#     ],</span>
<span class="token comment">#     &quot;User-Agent&quot;: [</span>
<span class="token comment">#       &quot;curl/8.2.1&quot;</span>
<span class="token comment">#     ]</span>
<span class="token comment">#   },</span>
<span class="token comment">#   &quot;method&quot;: &quot;POST&quot;,</span>
<span class="token comment">#   &quot;origin&quot;: &quot;172.19.0.3:41972&quot;,</span>
<span class="token comment">#   &quot;url&quot;: &quot;http://httpbin/post&quot;,</span>
<span class="token comment">#   &quot;data&quot;: &quot;--------------------------dbb84475f7b4d29e\\r\\nContent-Disposition: form-data; name=\\&quot;name\\&quot;\\r\\n\\r\\nAlice\\r\\n--------------------------dbb84475f7b4d29e\\r\\nContent-Disposition: form-data; name=\\&quot;age\\&quot;\\r\\n\\r\\n25\\r\\n--------------------------dbb84475f7b4d29e\\r\\nContent-Disposition: form-data; name=\\&quot;photo\\&quot;; filename=\\&quot;alice.png\\&quot;\\r\\nContent-Type: image/png\\r\\n\\r\\n\\r\\n--------------------------dbb84475f7b4d29e--\\r\\n&quot;,</span>
<span class="token comment">#   &quot;files&quot;: {</span>
<span class="token comment">#     &quot;photo&quot;: [</span>
<span class="token comment">#       &quot;&quot;</span>
<span class="token comment">#     ]</span>
<span class="token comment">#   },</span>
<span class="token comment">#   &quot;form&quot;: {</span>
<span class="token comment">#     &quot;age&quot;: [</span>
<span class="token comment">#       &quot;25&quot;</span>
<span class="token comment">#     ],</span>
<span class="token comment">#     &quot;name&quot;: [</span>
<span class="token comment">#       &quot;Alice&quot;</span>
<span class="token comment">#     ]</span>
<span class="token comment">#   },</span>
<span class="token comment">#   &quot;json&quot;: null</span>
<span class="token comment"># }  </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="redirects" tabindex="-1"><a class="header-anchor" href="#redirects" aria-hidden="true">#</a> Redirects</h2><p>A <em>redirect</em> is when the server, instead of returning the requested resource, tells the client that the resource is located elsewhere (as indicated by the Location header). A redirect always has a 3xx response code.</p><p>Curl does not follow redirects by default, it returns the response as is:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-i</span> http://httpbin/redirect/1
<span class="token comment"># HTTP/1.1 302 Found</span>
<span class="token comment"># Access-Control-Allow-Credentials: true</span>
<span class="token comment"># Access-Control-Allow-Origin: *</span>
<span class="token comment"># Location: /get</span>
<span class="token comment"># Date: Sun, 17 Sep 2023 09:37:50 GMT</span>
<span class="token comment"># Content-Length: 0</span>
<span class="token comment"># </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To make curl follow redirects, use <code>--follow</code> (<code>-L</code>):</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-L</span> http://httpbin/redirect/1
<span class="token comment"># {</span>
<span class="token comment">#   &quot;args&quot;: {},</span>
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
<span class="token comment">#   &quot;origin&quot;: &quot;172.19.0.3:53994&quot;,</span>
<span class="token comment">#   &quot;url&quot;: &quot;http://httpbin/get&quot;</span>
<span class="token comment"># }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To protect against endless loop redirects, use <code>--max-redirs</code>:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-L</span> --max-redirs <span class="token number">3</span> http://httpbin/redirect/10
<span class="token comment"># curl: (47) Maximum (3) redirects followed</span>
<span class="token comment">#  (exit status 47)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="http-put" tabindex="-1"><a class="header-anchor" href="#http-put" aria-hidden="true">#</a> HTTP PUT</h2><p>The PUT method is often used to send files to the server. Use <code>--upload-file</code> (<code>-T</code>) for this:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> hello <span class="token operator">&gt;</span> /tmp/hello.txt <span class="token operator">&amp;&amp;</span>
<span class="token function">curl</span> <span class="token parameter variable">-T</span> /tmp/hello.txt http://httpbin/put
<span class="token comment"># {</span>
<span class="token comment">#   &quot;args&quot;: {},</span>
<span class="token comment">#   &quot;headers&quot;: {</span>
<span class="token comment">#     &quot;Accept&quot;: [</span>
<span class="token comment">#       &quot;*/*&quot;</span>
<span class="token comment">#     ],</span>
<span class="token comment">#     &quot;Content-Length&quot;: [</span>
<span class="token comment">#       &quot;6&quot;</span>
<span class="token comment">#     ],</span>
<span class="token comment">#     &quot;Host&quot;: [</span>
<span class="token comment">#       &quot;httpbin&quot;</span>
<span class="token comment">#     ],</span>
<span class="token comment">#     &quot;User-Agent&quot;: [</span>
<span class="token comment">#       &quot;curl/8.2.1&quot;</span>
<span class="token comment">#     ]</span>
<span class="token comment">#   },</span>
<span class="token comment">#   &quot;method&quot;: &quot;PUT&quot;,</span>
<span class="token comment">#   &quot;origin&quot;: &quot;172.19.0.3:51756&quot;,</span>
<span class="token comment">#   &quot;url&quot;: &quot;http://httpbin/put&quot;,</span>
<span class="token comment">#   &quot;data&quot;: &quot;data:application/octet-stream;base64,aGVsbG8K&quot;,</span>
<span class="token comment">#   &quot;files&quot;: {},</span>
<span class="token comment">#   &quot;form&quot;: {},</span>
<span class="token comment">#   &quot;json&quot;: null</span>
<span class="token comment"># }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Sometimes PUT is used for requests in REST APIs. For these, use <code>--request</code> (<code>-X</code>) to set the method and <code>--data</code> (<code>-d</code>) to send the data:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-X</span> PUT <span class="token parameter variable">-H</span> <span class="token string">&quot;content-type: application/json&quot;</span>
  <span class="token parameter variable">-d</span> <span class="token string">&#39;{&quot;name&quot;: &quot;alice&quot;}&#39;</span>
  http://httpbin/put
<span class="token comment"># {</span>
<span class="token comment">#   &quot;args&quot;: {},</span>
<span class="token comment">#   &quot;headers&quot;: {</span>
<span class="token comment">#     &quot;Accept&quot;: [</span>
<span class="token comment">#       &quot;*/*&quot;</span>
<span class="token comment">#     ],</span>
<span class="token comment">#     &quot;Content-Length&quot;: [</span>
<span class="token comment">#       &quot;17&quot;</span>
<span class="token comment">#     ],</span>
<span class="token comment">#     &quot;Content-Type&quot;: [</span>
<span class="token comment">#       &quot;application/json&quot;</span>
<span class="token comment">#     ],</span>
<span class="token comment">#     &quot;Host&quot;: [</span>
<span class="token comment">#       &quot;httpbin&quot;</span>
<span class="token comment">#     ],</span>
<span class="token comment">#     &quot;User-Agent&quot;: [</span>
<span class="token comment">#       &quot;curl/8.2.1&quot;</span>
<span class="token comment">#     ]</span>
<span class="token comment">#   },</span>
<span class="token comment">#   &quot;method&quot;: &quot;PUT&quot;,</span>
<span class="token comment">#   &quot;origin&quot;: &quot;172.19.0.3:36948&quot;,</span>
<span class="token comment">#   &quot;url&quot;: &quot;http://httpbin/put&quot;,</span>
<span class="token comment">#   &quot;data&quot;: &quot;{\\&quot;name\\&quot;: \\&quot;alice\\&quot;}&quot;,</span>
<span class="token comment">#   &quot;files&quot;: {},</span>
<span class="token comment">#   &quot;form&quot;: {},</span>
<span class="token comment">#   &quot;json&quot;: {</span>
<span class="token comment">#     &quot;name&quot;: &quot;alice&quot;</span>
<span class="token comment">#   }</span>
<span class="token comment"># }  </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="cookies" tabindex="-1"><a class="header-anchor" href="#cookies" aria-hidden="true">#</a> Cookies</h2><p>The HTTP protocol is stateless. Cookies are an ingenious way around this:</p><ol><li>The server wants to associate some state with the client session.</li><li>The server returns that state in the Set-Cookie response header.</li><li>The client recognizes the cookies and sends them back with each request in the Cookie request header.</li></ol><p>Each cookie has an expiration date — either explicit one or &quot;end of session&quot; one (for browser clients, this is often when the user closes the browser).</p><p>Curl ignores cookies by default. To enable them, use the <code>--cookie</code> (<code>-b</code>) option. To make curl persist cookies between calls, use <code>--cookie-jar</code> (<code>-c</code>).</p><figure><img src="https://antonz.org/mastering-curl/cookies.jpg" alt="Although their reputation has been tarnished by the ubiquitous &quot;cookie banners&quot;, cookies remain one of the finest examples of feature naming." tabindex="0" loading="lazy"><figcaption>Although their reputation has been tarnished by the ubiquitous &quot;cookie banners&quot;, cookies remain one of the finest examples of feature naming.</figcaption></figure><p>Here the server sets the cookie sessionid to <code>123456</code> and curl stores it in the cookie jar <code>/tmp/cookies</code>:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-b</span> <span class="token string">&quot;&quot;</span> <span class="token parameter variable">-c</span> /tmp/cookies
  http://httpbin/cookies/set?sessionid<span class="token operator">=</span><span class="token number">123456</span>
<span class="token operator">&amp;&amp;</span> <span class="token function">cat</span> /tmp/cookies
<span class="token comment"># Netscape HTTP Cookie File</span>
<span class="token comment"># https://curl.se/docs/http-cookies.html</span>
<span class="token comment"># This file was generated by libcurl! Edit at your own risk.</span>

<span class="token comment">#HttpOnly_httpbin	FALSE	/cookies/	FALSE	0	sessionid	123456</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Subsequent curl calls with <code>-b /tmp/cookies</code> will send the <code>sessionid</code> cookie back to the server.</p><p>Curl automatically discards cookies from the cookie jar when they expire (this requires an explicit expiration date set by the server). To discard session-based cookies, use <code>--junk-session-cookies</code> (<code>-j</code>):</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-j</span> <span class="token parameter variable">-b</span> /tmp/cookies http://httpbin/get
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr><h2 id="alternative-services" tabindex="-1"><a class="header-anchor" href="#alternative-services" aria-hidden="true">#</a> Alternative services</h2><p>The Alt-Svc HTTP response header indicates that there is another network location (an <em>alternative service</em>) that the client can use for future requests.</p><p>To enable alternative services, use <code>--alt-svc</code>. This tells curl to store the services in the specified file and consider them for future requests.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> --alt-svc /tmp/altsvc <span class="token parameter variable">-o</span> /dev/null
  http://httpbin/get
<span class="token operator">&amp;&amp;</span> <span class="token function">cat</span> /tmp/altsvc
<span class="token comment"># Your alt-svc cache. https://curl.se/docs/alt-svc.html</span>
<span class="token comment"># This file was generated by libcurl! Edit at your own risk.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="http-strict-transport-security" tabindex="-1"><a class="header-anchor" href="#http-strict-transport-security" aria-hidden="true">#</a> HTTP Strict Transport Security</h2><p>The HTTP Strict-Transport-Security response header (also known as HSTS) informs the client that the server should only be accessed via HTTPS, and that any future attempts to access it via HTTP should automatically be converted to HTTPS.</p><p>To make curl respect HSTS, use <code>--hsts</code>. This tells curl to store HSTS-enabled servers in the specified file and automatically convert http → https when accessing them.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">--hsts</span> /tmp/hsts <span class="token parameter variable">-o</span> /dev/null
  http://httpbin/get
<span class="token operator">&amp;&amp;</span> <span class="token function">cat</span> /tmp/hsts
<span class="token comment"># Your HSTS cache. https://curl.se/docs/hsts.html</span>
<span class="token comment"># This file was generated by libcurl! Edit at your own risk.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>`,85);function j(l,O){const a=o("router-link"),p=o("VPCard"),c=o("ExternalLinkIcon");return r(),m("div",null,[n("h1",q,[k,s(" "+d(l.$frontmatter.title)+" 관련",1)]),n("blockquote",null,[n("p",null,d(l.$frontmatter.description),1)]),n("nav",g,[n("ul",null,[n("li",null,[e(a,{to:"#http-method"},{default:t(()=>[s("HTTP method")]),_:1})]),n("li",null,[e(a,{to:"#response-code"},{default:t(()=>[s("Response code")]),_:1})]),n("li",null,[e(a,{to:"#response-headers"},{default:t(()=>[s("Response headers")]),_:1})]),n("li",null,[e(a,{to:"#response-body"},{default:t(()=>[s("Response body")]),_:1})]),n("li",null,[e(a,{to:"#ranges"},{default:t(()=>[s("Ranges")]),_:1})]),n("li",null,[e(a,{to:"#http-versions"},{default:t(()=>[s("HTTP versions")]),_:1})]),n("li",null,[e(a,{to:"#conditional-requests"},{default:t(()=>[s("Conditional requests")]),_:1})]),n("li",null,[e(a,{to:"#http-post"},{default:t(()=>[s("HTTP POST")]),_:1})]),n("li",null,[e(a,{to:"#multipart-formpost"},{default:t(()=>[s("Multipart formpost")]),_:1})]),n("li",null,[e(a,{to:"#redirects"},{default:t(()=>[s("Redirects")]),_:1})]),n("li",null,[e(a,{to:"#http-put"},{default:t(()=>[s("HTTP PUT")]),_:1})]),n("li",null,[e(a,{to:"#cookies"},{default:t(()=>[s("Cookies")]),_:1})]),n("li",null,[e(a,{to:"#alternative-services"},{default:t(()=>[s("Alternative services")]),_:1})]),n("li",null,[e(a,{to:"#http-strict-transport-security"},{default:t(()=>[s("HTTP Strict Transport Security")]),_:1})])])]),f,e(p,v(b({title:"5. HTTP",desc:"Mastering curl - interactive text guide",link:"https://antonz.org/mastering-curl/#http",logo:"https://antonz.org/assets/favicon/favicon.ico",color:"rgba(22, 25, 35, 0.2)"})),null,16),T,n("p",null,[s("The first line is a status line. The version ("),y,s(") indicates the version of the HTTP protocol. The status code ("),w,s(") tells whether the request was successful or not, and why (there are many status codes for "),n("a",x,[s("different situations"),e(c)]),s("). The "),A,s(" is a human-readable description of the status code (HTTP/2 does not have it).")]),H,n("p",null,[s("To ask the server for a piece of data instead of the whole thing, use the "),C,s(" ("),P,s(") option. This will cause curl to request the specified "),n("a",_,[s("byte range"),e(c)]),s(".")]),S])}const L=u(h,[["render",j],["__file","05-http.html.vue"]]);export{L as default};
