import{_ as h,r,o as k,c as g,a as n,b as e,t as p,d as a,w as s,n as f,g as _,e as d}from"./app-d223f2a5.js";const x={},q={id:"frontmatter-title-관련",tabindex:"-1"},y=n("a",{class:"header-anchor",href:"#frontmatter-title-관련","aria-hidden":"true"},"#",-1),w={class:"table-of-contents"},T=n("hr",null,null,-1),A=d(`<hr><p>Now that we understand how curl handles URLs and options, let&#39;s talk about specific features.</p><h2 id="version" tabindex="-1"><a class="header-anchor" href="#version" aria-hidden="true">#</a> Version</h2><p><code>--version</code> (<code>-V</code>) knows everything about the installed version of curl:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-V</span>
<span class="token comment"># ➊ curl 8.2.1 (x86_64-alpine-linux-musl) libcurl/8.2.1 OpenSSL/3.1.2 zlib/1.2.13 brotli/1.0.9 libidn2/2.3.4 nghttp2/1.55.1</span>
<span class="token comment"># ➋ Release-Date: 2023-07-26</span>
<span class="token comment"># ➌ Protocols: dict file ftp ftps gopher gophers http https imap imaps mqtt pop3 pop3s rtsp smb smbs smtp smtps telnet tftp ws wss</span>
<span class="token comment"># ➍ Features: alt-svc AsynchDNS brotli HSTS HTTP2 HTTPS-proxy IDN IPv6 Largefile libz NTLM NTLM_WB SSL threadsafe TLS-SRP UnixSockets</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>It lists (line by line)</p><ul><li>➊ versions of curl itself and its dependencies,</li><li>➋ the release date,</li><li>➌ available protocols, and</li><li>➍ enabled features.</li></ul><hr><h2 id="verbose" tabindex="-1"><a class="header-anchor" href="#verbose" aria-hidden="true">#</a> Verbose</h2>`,9),C=n("p",null,[n("code",null,"--verbose"),e(" ("),n("code",null,"-v"),e(") makes curl verbose, which is useful for debugging:")],-1),I=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"curl"),e(),n("span",{class:"token parameter variable"},"-v"),e(` http://httpbin/uuid
`),n("span",{class:"token comment"},"# {"),e(`
`),n("span",{class:"token comment"},'#   "uuid": "dfc032c7-7452-4b21-aedb-3d80787e9946"'),e(`
`),n("span",{class:"token comment"},"# }"),e(`
`),n("span",{class:"token comment"},"# "),e(`
`),n("span",{class:"token comment"},"# * processing: http://httpbin/uuid"),e(`
`),n("span",{class:"token comment"},"# *   Trying 172.19.0.2:80..."),e(`
`),n("span",{class:"token comment"},"# * Connected to httpbin (172.19.0.2) port 80"),e(`
`),n("span",{class:"token comment"},"# > GET /uuid HTTP/1.1"),e(`
`),n("span",{class:"token comment"},"# > Host: httpbin"),e(`
`),n("span",{class:"token comment"},"# > User-Agent: curl/8.2.1"),e(`
`),n("span",{class:"token comment"},"# > Accept: */*"),e(`
`),n("span",{class:"token comment"},"# > "),e(`
`),n("span",{class:"token comment"},"# < HTTP/1.1 200 OK"),e(`
`),n("span",{class:"token comment"},"# < Access-Control-Allow-Credentials: true"),e(`
`),n("span",{class:"token comment"},"# < Access-Control-Allow-Origin: *"),e(`
`),n("span",{class:"token comment"},"# < Content-Type: application/json; charset=utf-8"),e(`
`),n("span",{class:"token comment"},"# < Date: Fri, 15 Sep 2023 06:35:21 GMT"),e(`
`),n("span",{class:"token comment"},"# < Content-Length: 53"),e(`
`),n("span",{class:"token comment"},"# < "),e(`
`),n("span",{class:"token comment"},"# { [53 bytes data]"),e(`
`),n("span",{class:"token comment"},"# * Connection #0 to host httpbin left intact"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),P=n("p",null,[e("If "),n("code",null,"--verbose"),e(" is not enough, try "),n("code",null,"--trace"),e(" (the single "),n("code",null,"-"),e(" sends the trace output to stdout):")],-1),S=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"curl"),e(),n("span",{class:"token parameter variable"},"--trace"),e(` - http://httpbin/uuid
`),n("span",{class:"token comment"},"# == Info: processing: http://httpbin/uuid"),e(`
`),n("span",{class:"token comment"},"# == Info:   Trying 172.19.0.2:80..."),e(`
`),n("span",{class:"token comment"},"# == Info: Connected to httpbin (172.19.0.2) port 80"),e(`
`),n("span",{class:"token comment"},"# => Send header, 74 bytes (0x4a)"),e(`
`),n("span",{class:"token comment"},"# 0000: 47 45 54 20 2f 75 75 69 64 20 48 54 54 50 2f 31 GET /uuid HTTP/1"),e(`
`),n("span",{class:"token comment"},"# 0010: 2e 31 0d 0a 48 6f 73 74 3a 20 68 74 74 70 62 69 .1..Host: httpbi"),e(`
`),n("span",{class:"token comment"},"# 0020: 6e 0d 0a 55 73 65 72 2d 41 67 65 6e 74 3a 20 63 n..User-Agent: c"),e(`
`),n("span",{class:"token comment"},"# 0030: 75 72 6c 2f 38 2e 32 2e 31 0d 0a 41 63 63 65 70 url/8.2.1..Accep"),e(`
`),n("span",{class:"token comment"},"# 0040: 74 3a 20 2a 2f 2a 0d 0a 0d 0a                   t: */*...."),e(`
`),n("span",{class:"token comment"},"# <= Recv header, 17 bytes (0x11)"),e(`
`),n("span",{class:"token comment"},"# 0000: 48 54 54 50 2f 31 2e 31 20 32 30 30 20 4f 4b 0d HTTP/1.1 200 OK."),e(`
`),n("span",{class:"token comment"},"# 0010: 0a                                              ."),e(`
`),n("span",{class:"token comment"},"# <= Recv header, 40 bytes (0x28)"),e(`
`),n("span",{class:"token comment"},"# 0000: 41 63 63 65 73 73 2d 43 6f 6e 74 72 6f 6c 2d 41 Access-Control-A"),e(`
`),n("span",{class:"token comment"},"# 0010: 6c 6c 6f 77 2d 43 72 65 64 65 6e 74 69 61 6c 73 llow-Credentials"),e(`
`),n("span",{class:"token comment"},"# 0020: 3a 20 74 72 75 65 0d 0a                         : true.."),e(`
`),n("span",{class:"token comment"},"# <= Recv header, 32 bytes (0x20)"),e(`
`),n("span",{class:"token comment"},"# 0000: 41 63 63 65 73 73 2d 43 6f 6e 74 72 6f 6c 2d 41 Access-Control-A"),e(`
`),n("span",{class:"token comment"},"# 0010: 6c 6c 6f 77 2d 4f 72 69 67 69 6e 3a 20 2a 0d 0a llow-Origin: *.."),e(`
`),n("span",{class:"token comment"},"# <= Recv header, 47 bytes (0x2f)"),e(`
`),n("span",{class:"token comment"},"# 0000: 43 6f 6e 74 65 6e 74 2d 54 79 70 65 3a 20 61 70 Content-Type: ap"),e(`
`),n("span",{class:"token comment"},"# 0010: 70 6c 69 63 61 74 69 6f 6e 2f 6a 73 6f 6e 3b 20 plication/json; "),e(`
`),n("span",{class:"token comment"},"# 0020: 63 68 61 72 73 65 74 3d 75 74 66 2d 38 0d 0a    charset=utf-8.."),e(`
`),n("span",{class:"token comment"},"# <= Recv header, 37 bytes (0x25)"),e(`
`),n("span",{class:"token comment"},"# 0000: 44 61 74 65 3a 20 46 72 69 2c 20 31 35 20 53 65 Date: Fri, 15 Se"),e(`
`),n("span",{class:"token comment"},"# 0010: 70 20 32 30 32 33 20 30 36 3a 33 35 3a 33 36 20 p 2023 06:35:36 "),e(`
`),n("span",{class:"token comment"},"# 0020: 47 4d 54 0d 0a                                  GMT.."),e(`
`),n("span",{class:"token comment"},"# <= Recv header, 20 bytes (0x14)"),e(`
`),n("span",{class:"token comment"},"# 0000: 43 6f 6e 74 65 6e 74 2d 4c 65 6e 67 74 68 3a 20 Content-Length: "),e(`
`),n("span",{class:"token comment"},"# 0010: 35 33 0d 0a                                     53.."),e(`
`),n("span",{class:"token comment"},"# <= Recv header, 2 bytes (0x2)"),e(`
`),n("span",{class:"token comment"},"# 0000: 0d 0a                                           .."),e(`
`),n("span",{class:"token comment"},"# <= Recv data, 53 bytes (0x35)"),e(`
`),n("span",{class:"token comment"},'# 0000: 7b 0a 20 20 22 75 75 69 64 22 3a 20 22 38 30 39 {.  "uuid": "809'),e(`
`),n("span",{class:"token comment"},"# 0010: 65 39 33 33 62 2d 34 62 66 32 2d 34 39 31 33 2d e933b-4bf2-4913-"),e(`
`),n("span",{class:"token comment"},"# 0020: 39 36 30 64 2d 61 63 34 35 64 30 64 61 32 39 30 960d-ac45d0da290"),e(`
`),n("span",{class:"token comment"},'# 0030: 32 22 0a 7d 0a                                  2".}.'),e(`
`),n("span",{class:"token comment"},"# {"),e(`
`),n("span",{class:"token comment"},'#   "uuid": "809e933b-4bf2-4913-960d-ac45d0da2902"'),e(`
`),n("span",{class:"token comment"},"# }"),e(`
`),n("span",{class:"token comment"},"# == Info: Connection #0 to host httpbin left intact"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),R=n("p",null,[e("Or "),n("code",null,"--trace-ascii"),e(":")],-1),H=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"curl"),e(` --trace-ascii - http://httpbin/uuid
`),n("span",{class:"token comment"},"# == Info: processing: http://httpbin/uuid"),e(`
`),n("span",{class:"token comment"},"# == Info:   Trying 172.19.0.2:80..."),e(`
`),n("span",{class:"token comment"},"# == Info: Connected to httpbin (172.19.0.2) port 80"),e(`
`),n("span",{class:"token comment"},"# => Send header, 74 bytes (0x4a)"),e(`
`),n("span",{class:"token comment"},"# 0000: GET /uuid HTTP/1.1"),e(`
`),n("span",{class:"token comment"},"# 0014: Host: httpbin"),e(`
`),n("span",{class:"token comment"},"# 0023: User-Agent: curl/8.2.1"),e(`
`),n("span",{class:"token comment"},"# 003b: Accept: */*"),e(`
`),n("span",{class:"token comment"},"# 0048: "),e(`
`),n("span",{class:"token comment"},"# <= Recv header, 17 bytes (0x11)"),e(`
`),n("span",{class:"token comment"},"# 0000: HTTP/1.1 200 OK"),e(`
`),n("span",{class:"token comment"},"# <= Recv header, 40 bytes (0x28)"),e(`
`),n("span",{class:"token comment"},"# 0000: Access-Control-Allow-Credentials: true"),e(`
`),n("span",{class:"token comment"},"# <= Recv header, 32 bytes (0x20)"),e(`
`),n("span",{class:"token comment"},"# 0000: Access-Control-Allow-Origin: *"),e(`
`),n("span",{class:"token comment"},"# <= Recv header, 47 bytes (0x2f)"),e(`
`),n("span",{class:"token comment"},"# 0000: Content-Type: application/json; charset=utf-8"),e(`
`),n("span",{class:"token comment"},"# <= Recv header, 37 bytes (0x25)"),e(`
`),n("span",{class:"token comment"},"# 0000: Date: Fri, 15 Sep 2023 06:36:59 GMT"),e(`
`),n("span",{class:"token comment"},"# <= Recv header, 20 bytes (0x14)"),e(`
`),n("span",{class:"token comment"},"# 0000: Content-Length: 53"),e(`
`),n("span",{class:"token comment"},"# <= Recv header, 2 bytes (0x2)"),e(`
`),n("span",{class:"token comment"},"# 0000: "),e(`
`),n("span",{class:"token comment"},"# <= Recv data, 53 bytes (0x35)"),e(`
`),n("span",{class:"token comment"},'# 0000: {.  "uuid": "6a4613f5-d83a-4bc3-99b2-589df9391396".}.'),e(`
`),n("span",{class:"token comment"},"# {"),e(`
`),n("span",{class:"token comment"},'#   "uuid": "6a4613f5-d83a-4bc3-99b2-589df9391396"'),e(`
`),n("span",{class:"token comment"},"# }"),e(`
`),n("span",{class:"token comment"},"# == Info: Connection #0 to host httpbin left intact"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),O=n("p",null,[e("Use "),n("code",null,"--write-out"),e(" ("),n("code",null,"-w"),e(") to extract specific information about the response. It supports over 50 variables. For example, here we extract the status code and response content type:")],-1),U=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"curl"),e(`
  `),n("span",{class:"token parameter variable"},"-w"),e(),n("span",{class:"token string"},[e('"'),n("span",{class:"token entity",title:"\\n"},"\\n"),e("status: %{response_code}"),n("span",{class:"token entity",title:"\\n"},"\\n"),e('type: %{content_type}"')]),e(`
  http://httpbin/status/429
`),n("span",{class:"token comment"},"#"),e(`
`),n("span",{class:"token comment"},"# status: 429"),e(`
`),n("span",{class:"token comment"},"# type: text/plain; charset=utf-8  "),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),L=n("p",null,"Or some response headers:",-1),F=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"curl"),e(`
  `),n("span",{class:"token parameter variable"},"-w"),e(),n("span",{class:"token string"},[e('"'),n("span",{class:"token entity",title:"\\n"},"\\n"),e("date: %header{date}"),n("span",{class:"token entity",title:"\\n"},"\\n"),e('length: %header{content-length}"')]),e(`
  http://httpbin/status/429
`),n("span",{class:"token comment"},"# "),e(`
`),n("span",{class:"token comment"},"# date: Fri, 15 Sep 2023 06:37:45 GMT"),e(`
`),n("span",{class:"token comment"},"# length: 0  "),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),G=d(`<hr><h2 id="downloads" tabindex="-1"><a class="header-anchor" href="#downloads" aria-hidden="true">#</a> Downloads</h2><p><code>--remote-name</code> (<code>-O</code>) tells curl to save the output to a file specified by the URL (specifically, by the part after the last <code>/</code>). It&#39;s often used together with <code>--output-dir</code>, which tells curl where exactly to save the file:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> --output-dir /tmp <span class="token parameter variable">-O</span> http://httpbin/uuid

<span class="token operator">&amp;&amp;</span> <span class="token function">cat</span> /tmp/uuid
<span class="token comment"># {</span>
<span class="token comment">#   &quot;uuid&quot;: &quot;d07da12c-83e1-4b30-8840-059a6dcf1666&quot;</span>
<span class="token comment"># }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If the directory does not exist, <code>--output-dir</code> won&#39;t create it for you. Use <code>--create-dirs</code> for this:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> --output-dir /tmp/some/place --create-dirs
  <span class="token parameter variable">-O</span> http://httpbin/uuid

<span class="token operator">&amp;&amp;</span> <span class="token function">cat</span> /tmp/some/place/uuid
<span class="token comment"># {</span>
<span class="token comment">#   &quot;uuid&quot;: &quot;e4e79cd5-053c-4d0c-834e-d9bddd7d00f2&quot;</span>
<span class="token comment"># }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can use <code>--max-filesize</code> (in bytes) to limit the allowed response size, but often it isn&#39;t known in advance, so it may not work.</p><hr><h2 id="retry" tabindex="-1"><a class="header-anchor" href="#retry" aria-hidden="true">#</a> Retry</h2><p>Sometimes the remote host is temporarily unavailable. To deal with these situations, curl provides the <code>--retry [num]</code> option. If a request fails, curl will try it again, but no more than num times:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-i</span> <span class="token parameter variable">--retry</span> <span class="token number">3</span> http://httpbin/unstable
<span class="token comment"># HTTP/1.1 200 OK</span>
<span class="token comment"># Access-Control-Allow-Credentials: true</span>
<span class="token comment"># Access-Control-Allow-Origin: *</span>
<span class="token comment"># Content-Type: text/plain; charset=utf-8</span>
<span class="token comment"># Date: Fri, 15 Sep 2023 06:39:56 GMT</span>
<span class="token comment"># Content-Length: 0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>(this URL fails 50% of the time)</p></blockquote><p>You can set the maximum time curl will spend retrying with <code>--retry-max-time</code> (in seconds) or the delay between retries with <code>--retry-delay</code> (also in seconds):</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-i</span> <span class="token parameter variable">--retry</span> <span class="token number">3</span> http://httpbin/unstable
  --retry-max-time <span class="token number">2</span>
  --retry-delay <span class="token number">1</span>
<span class="token comment"># HTTP/1.1 200 OK</span>
<span class="token comment"># Access-Control-Allow-Credentials: true</span>
<span class="token comment"># Access-Control-Allow-Origin: *</span>
<span class="token comment"># Content-Type: text/plain; charset=utf-8</span>
<span class="token comment"># Date: Fri, 15 Sep 2023 06:40:27 GMT</span>
<span class="token comment"># Content-Length: 0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>For curl, &quot;request failed&quot; means one of the following HTTP codes: 408, 429, 500, 502, 503 or 504. If the request fails with a &quot;connection refused&quot; error, curl will not retry. But you can change this with <code>--retry-connrefused</code>, or even enable retries for all kinds of problems with <code>--retry-all-errors</code>.</p><hr><h2 id="uploads" tabindex="-1"><a class="header-anchor" href="#uploads" aria-hidden="true">#</a> Uploads</h2><p>Curl is often used to download data from the server, but you can also upload it. Use the <code>--upload-file</code> (<code>-T</code>) option:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> hello <span class="token operator">&gt;</span> /tmp/hello.txt <span class="token operator">&amp;&amp;</span>

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
<span class="token comment">#   &quot;origin&quot;: &quot;172.19.0.3:44058&quot;,</span>
<span class="token comment">#   &quot;url&quot;: &quot;http://httpbin/put&quot;,</span>
<span class="token comment">#   &quot;data&quot;: &quot;data:application/octet-stream;base64,aGVsbG8K&quot;,</span>
<span class="token comment">#   &quot;files&quot;: {},</span>
<span class="token comment">#   &quot;form&quot;: {},</span>
<span class="token comment">#   &quot;json&quot;: null</span>
<span class="token comment"># }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>For HTTP uploads, curl uses the PUT method.</p><hr><h2 id="transfer-controls" tabindex="-1"><a class="header-anchor" href="#transfer-controls" aria-hidden="true">#</a> Transfer controls</h2><p>To stop slow transfers, set the minimum allowed download speed (in bytes per second) with <code>--speed-limit</code>. By default, curl checks the speed in 30 seconds intervals, but you can change this with <code>--speed-time</code>.</p><p>For example, allow no less than 10 bytes/sec during a 3-second interval:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-v</span> --speed-limit <span class="token number">10</span> --speed-time <span class="token number">3</span> http://httpbin/get
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
<span class="token comment">#   &quot;origin&quot;: &quot;172.19.0.3:58696&quot;,</span>
<span class="token comment">#   &quot;url&quot;: &quot;http://httpbin/get&quot;</span>
<span class="token comment"># }</span>
<span class="token comment"># </span>
<span class="token comment"># * processing: http://httpbin/get</span>
<span class="token comment"># *   Trying 172.19.0.2:80...</span>
<span class="token comment"># * Connected to httpbin (172.19.0.2) port 80</span>
<span class="token comment"># &gt; GET /get HTTP/1.1</span>
<span class="token comment"># &gt; Host: httpbin</span>
<span class="token comment"># &gt; User-Agent: curl/8.2.1</span>
<span class="token comment"># &gt; Accept: */*</span>
<span class="token comment"># &gt; </span>
<span class="token comment"># &lt; HTTP/1.1 200 OK</span>
<span class="token comment"># &lt; Access-Control-Allow-Credentials: true</span>
<span class="token comment"># &lt; Access-Control-Allow-Origin: *</span>
<span class="token comment"># &lt; Content-Type: application/json; charset=utf-8</span>
<span class="token comment"># &lt; Date: Fri, 15 Sep 2023 06:41:38 GMT</span>
<span class="token comment"># &lt; Content-Length: 236</span>
<span class="token comment"># &lt; </span>
<span class="token comment"># { [236 bytes data]</span>
<span class="token comment"># * Connection #0 to host httpbin left intact</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To limit bandwidth usage, set <code>--limit-rate</code>. It accepts anything from bytes to petabytes:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> --limit-rate <span class="token number">3</span> http://httpbin/get
<span class="token function">curl</span> --limit-rate 3k http://httpbin/get
<span class="token function">curl</span> --limit-rate 3m http://httpbin/get
<span class="token function">curl</span> --limit-rate 3g http://httpbin/get
<span class="token function">curl</span> --limit-rate 3t http://httpbin/get
<span class="token function">curl</span> --limit-rate 3p http://httpbin/get
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Another thing to limit is the number of concurrent requests (<em>e.g.</em> if you download a lot of files). Use <code>--rate</code> for this. It accepts seconds, minutes, hours or days:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">--rate</span> <span class="token number">3</span>/s http://httpbin/anything/<span class="token punctuation">[</span><span class="token number">1</span>-9<span class="token punctuation">]</span>.txt
<span class="token function">curl</span> <span class="token parameter variable">--rate</span> <span class="token number">3</span>/m http://httpbin/anything/<span class="token punctuation">[</span><span class="token number">1</span>-9<span class="token punctuation">]</span>.txt
<span class="token function">curl</span> <span class="token parameter variable">--rate</span> <span class="token number">3</span>/h http://httpbin/anything/<span class="token punctuation">[</span><span class="token number">1</span>-9<span class="token punctuation">]</span>.txt
<span class="token function">curl</span> <span class="token parameter variable">--rate</span> <span class="token number">3</span>/d http://httpbin/anything/<span class="token punctuation">[</span><span class="token number">1</span>-9<span class="token punctuation">]</span>.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="name-resolving" tabindex="-1"><a class="header-anchor" href="#name-resolving" aria-hidden="true">#</a> Name resolving</h2><p>By default, curl uses your DNS server to resolve hostnames to IP addresses. But you can force it to resolve to a specific IP with <code>--resolve</code>:</p>`,32),D=n("blockquote",null,[n("p",null,"(this one fails because no one is listening on 127.0.0.1)")],-1),E=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"curl"),e(),n("span",{class:"token parameter variable"},"--resolve"),e(` httpbingo.org:8080:127.0.0.1
  http://httpbingo.org:8080/get
`),n("span",{class:"token comment"},"# curl: (7) Failed to connect to httpbingo.org port 8080 after 0 ms: Couldn't connect to server"),e(`
`),n("span",{class:"token comment"},"# (exit status 7)  "),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),N=n("p",null,[e("Or you can even map a hostname:port pair to another hostname:port pair with "),n("code",null,"--connect-to"),e(":")],-1),V=n("blockquote",null,[n("p",null,"(this one works fine)")],-1),M=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"curl"),e(` --connect-to httpbingo.org:8080:httpbin:80
  http://httpbingo.org:8080/get
`),n("span",{class:"token comment"},"# {"),e(`
`),n("span",{class:"token comment"},'#   "args": {},'),e(`
`),n("span",{class:"token comment"},'#   "headers": {'),e(`
`),n("span",{class:"token comment"},'#     "Accept": ['),e(`
`),n("span",{class:"token comment"},'#       "*/*"'),e(`
`),n("span",{class:"token comment"},"#     ],"),e(`
`),n("span",{class:"token comment"},'#     "Host": ['),e(`
`),n("span",{class:"token comment"},'#       "httpbingo.org:8080"'),e(`
`),n("span",{class:"token comment"},"#     ],"),e(`
`),n("span",{class:"token comment"},'#     "User-Agent": ['),e(`
`),n("span",{class:"token comment"},'#       "curl/8.2.1"'),e(`
`),n("span",{class:"token comment"},"#     ]"),e(`
`),n("span",{class:"token comment"},"#   },"),e(`
`),n("span",{class:"token comment"},'#   "method": "GET",'),e(`
`),n("span",{class:"token comment"},'#   "origin": "172.19.0.3:60902",'),e(`
`),n("span",{class:"token comment"},'#   "url": "http://httpbingo.org:8080/get"'),e(`
`),n("span",{class:"token comment"},"# }  "),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),B=n("hr",null,null,-1),z={class:"hint-container info"},K=n("p",{class:"hint-container-title"},"Connections",-1),j=n("p",null,"There are also some network connection-level settings.",-1),Y=n("p",null,"Use a specific network interface",-1),$=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"curl"),e(),n("span",{class:"token parameter variable"},"--interactive"),e(` enp3s0 https://example.com
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),W=n("p",null,"local port number range",-1),J=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"curl"),e(" --local-port "),n("span",{class:"token number"},"1000"),e(`-3000 https://example.com
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),Q=n("p",null,"TCP keep alive",-1),X=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"curl"),e(),n("span",{class:"token parameter variable"},"--keepalive"),e(" - "),n("span",{class:"token function"},"time"),e(),n("span",{class:"token number"},"23"),e(` https://example.com
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),Z=n("p",null,"DNS Servers (when c-ares is used)",-1),nn=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"curl"),e(" --dns-ipv4-addr "),n("span",{class:"token number"},"10.1"),e(`.2.3 https://example.com
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),en=n("hr",null,null,-1),sn=n("h2",{id:"timeouts",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#timeouts","aria-hidden":"true"},"#"),e(" Timeouts")],-1),an=n("p",null,[e("To limit the maximum amount of time curl will spend interacting with a single URL, use "),n("code",null,"--max-time"),e(" (in fractional seconds):")],-1),tn=n("blockquote",null,[n("p",null,"(this one fails)")],-1),ln=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"curl"),e(" --max-time "),n("span",{class:"token number"},"0.5"),e(` http:/httpbin/delay/1
`),n("span",{class:"token comment"},"# curl: (28) Operation timed out after 500 milliseconds with 0 bytes received"),e(`
`),n("span",{class:"token comment"},"#  (exit status 28)"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),cn=n("p",null,[e("Instead of limiting the total time, you can use "),n("code",null,"--connect-timeout"),e(" to limit only the time it takes to establish a network connection:")],-1),on=n("blockquote",null,[n("p",null,"(this one works fine)")],-1),rn=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"curl"),e(" --connect-timeout "),n("span",{class:"token number"},"0.5"),e(` http:/httpbin/delay/1
`),n("span",{class:"token comment"},"# {"),e(`
`),n("span",{class:"token comment"},'#   "args": {},'),e(`
`),n("span",{class:"token comment"},'#   "headers": {'),e(`
`),n("span",{class:"token comment"},'#     "Accept": ['),e(`
`),n("span",{class:"token comment"},'#       "*/*"'),e(`
`),n("span",{class:"token comment"},"#     ],"),e(`
`),n("span",{class:"token comment"},'#     "Host": ['),e(`
`),n("span",{class:"token comment"},'#       "httpbin"'),e(`
`),n("span",{class:"token comment"},"#     ],"),e(`
`),n("span",{class:"token comment"},'#     "User-Agent": ['),e(`
`),n("span",{class:"token comment"},'#       "curl/8.2.1"'),e(`
`),n("span",{class:"token comment"},"#     ]"),e(`
`),n("span",{class:"token comment"},"#   },"),e(`
`),n("span",{class:"token comment"},'#   "method": "GET",'),e(`
`),n("span",{class:"token comment"},'#   "origin": "172.19.0.3:34422",'),e(`
`),n("span",{class:"token comment"},'#   "url": "http://httpbin/delay/1",'),e(`
`),n("span",{class:"token comment"},'#   "data": "",'),e(`
`),n("span",{class:"token comment"},'#   "files": {},'),e(`
`),n("span",{class:"token comment"},'#   "form": {},'),e(`
`),n("span",{class:"token comment"},'#   "json": null'),e(`
`),n("span",{class:"token comment"},"# }"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),dn=n("hr",null,null,-1),mn=n("h2",{id:"credentials",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#credentials","aria-hidden":"true"},"#"),e(" Credentials")],-1),un=n("code",null,".netrc",-1),pn=d(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>machine httpbin
login alice
password cheese

machine example.com
login bob
password nuggets
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),vn=n("code",null,"--netrc",-1),bn=n("code",null,"$HOME/.netrc",-1),hn=d(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;machine httpbin<span class="token entity" title="\\n">\\n</span>login alice<span class="token entity" title="\\n">\\n</span>password cheese&quot;</span> <span class="token operator">&gt;</span> /tmp/netrc <span class="token operator">&amp;&amp;</span>

<span class="token function">curl</span> --netrc-file /tmp/netrc
  http://httpbin/basic-auth/alice/cheese
<span class="token comment"># {</span>
<span class="token comment">#   &quot;authorized&quot;: true,</span>
<span class="token comment">#   &quot;user&quot;: &quot;alice&quot;</span>
<span class="token comment"># }  </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="exit-status" tabindex="-1"><a class="header-anchor" href="#exit-status" aria-hidden="true">#</a> Exit status</h2>`,3),kn={href:"https://everything.curl.dev/usingcurl/returns",target:"_blank",rel:"noopener noreferrer"},gn=d(`<p>For example, here is an exit status 7 (failed to connect to host):</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> http://httpbin:1313/get
<span class="token comment"># curl: (7) Failed to connect to httpbin port 1313 after 1 ms: Couldn&#39;t connect to server</span>
<span class="token comment">#  (exit status 7)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can access the exit status through the <code>$?</code> shell variable.</p>`,3);function fn(m,_n){const c=r("router-link"),v=r("VPCard"),o=r("Tabs"),u=r("FontIcon"),b=r("ExternalLinkIcon");return k(),g("div",null,[n("h1",q,[y,e(" "+p(m.$frontmatter.title)+" 관련",1)]),n("blockquote",null,[n("p",null,p(m.$frontmatter.description),1)]),n("nav",w,[n("ul",null,[n("li",null,[a(c,{to:"#version"},{default:s(()=>[e("Version")]),_:1})]),n("li",null,[a(c,{to:"#verbose"},{default:s(()=>[e("Verbose")]),_:1})]),n("li",null,[a(c,{to:"#downloads"},{default:s(()=>[e("Downloads")]),_:1})]),n("li",null,[a(c,{to:"#retry"},{default:s(()=>[e("Retry")]),_:1})]),n("li",null,[a(c,{to:"#uploads"},{default:s(()=>[e("Uploads")]),_:1})]),n("li",null,[a(c,{to:"#transfer-controls"},{default:s(()=>[e("Transfer controls")]),_:1})]),n("li",null,[a(c,{to:"#name-resolving"},{default:s(()=>[e("Name resolving")]),_:1})]),n("li",null,[a(c,{to:"#timeouts"},{default:s(()=>[e("Timeouts")]),_:1})]),n("li",null,[a(c,{to:"#credentials"},{default:s(()=>[e("Credentials")]),_:1})]),n("li",null,[a(c,{to:"#exit-status"},{default:s(()=>[e("Exit status")]),_:1})])])]),T,a(v,f(_({title:"4. Curl basics",desc:"Mastering curl - interactive text guide",link:"https://antonz.org/mastering-curl/#curl-basics",logo:"https://antonz.org/assets/favicon/favicon.ico",color:"rgba(22, 25, 35, 0.2)"})),null,16),A,a(o,{id:"53",data:[{title:"verbose"},{title:"trace"},{title:"trace-ascii"}],active:0},{tab0:s(({title:t,value:l,isActive:i})=>[C,I]),tab1:s(({title:t,value:l,isActive:i})=>[P,S]),tab2:s(({title:t,value:l,isActive:i})=>[R,H]),_:1}),O,a(o,{id:"76",data:[{title:"Case 1"},{title:"Case 2"}],active:0},{tab0:s(({title:t,value:l,isActive:i})=>[U]),tab1:s(({title:t,value:l,isActive:i})=>[L,F]),_:1}),G,a(o,{id:"159",data:[{title:"❌"},{title:"✅"}],active:0},{tab0:s(({title:t,value:l,isActive:i})=>[D,E]),tab1:s(({title:t,value:l,isActive:i})=>[N,V,M]),_:1}),B,n("div",z,[K,j,a(o,{id:"185",data:[{title:"--interface"},{title:"--local-port"},{title:"--keepalive"},{title:"--dns-ipv4-addr"}],active:0},{tab0:s(({title:t,value:l,isActive:i})=>[Y,$]),tab1:s(({title:t,value:l,isActive:i})=>[W,J]),tab2:s(({title:t,value:l,isActive:i})=>[Q,X]),tab3:s(({title:t,value:l,isActive:i})=>[Z,nn]),_:1})]),en,sn,an,a(o,{id:"219",data:[{title:"❌"},{title:"✅"}],active:0},{tab0:s(({title:t,value:l,isActive:i})=>[tn,ln]),tab1:s(({title:t,value:l,isActive:i})=>[cn,on,rn]),_:1}),dn,mn,n("p",null,[e("You almost never want to pass the username and password in the curl command itself. One way to avoid this is to use the "),a(u,{icon:"iconfont icon-file"}),un,e(" file. It specifies hostnames and credentials for accessing them:")]),pn,n("p",null,[e("Pass the "),vn,e(" option to use the "),a(u,{icon:"iconfont icon-file"}),bn,e(" file, or --netrc-file to use a specific one:")]),hn,n("p",null,[e("When curl exits, it returns a numeric value to the shell. For success, it's 0, and for errors, there are about "),n("a",kn,[e("100 different values"),a(b)]),e(".")]),gn])}const qn=h(x,[["render",fn],["__file","04-curl-basics.html.vue"]]);export{qn as default};
