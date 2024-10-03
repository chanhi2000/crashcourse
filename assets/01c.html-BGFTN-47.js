import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,a as s,t as r,b as a,w as e,e as d,r as o,o as u,d as t}from"./app-U_bew1in.js";const k={},m={id:"frontmatter-title-관련",tabindex:"-1"},h={class:"header-anchor",href:"#frontmatter-title-관련"},b={class:"table-of-contents"},v=d(`<hr><h2 id="auto-trace" tabindex="-1"><a class="header-anchor" href="#auto-trace"><span>Auto Trace</span></a></h2><h3 id="개요" tabindex="-1"><a class="header-anchor" href="#개요"><span>개요</span></a></h3><p>SQL 수행 시 실제 일량 측정 및 튜닝하는데 유용한 정보들을 많이 포함하는 도구</p><h3 id="autotrace-옵션" tabindex="-1"><a class="header-anchor" href="#autotrace-옵션"><span>AutoTrace 옵션</span></a></h3><blockquote><p>아래와 같은 옵션에 따라 필요한 부분만 출력해 볼 수 있음</p></blockquote><ol><li><code>set autotrace on</code>: SQL을 실행하고 그결과와 함께 실행 계획 및 실행통계를 출력</li><li><code>set autotrace on explain</code>: SQL을 실행하고 그결과와 함께 실행 계획을 출력</li><li><code>set autotrace on statistics</code>: SQL을 실행하고 그결과와 함께 실행통계를 출력</li><li><code>set autotrace traceonly</code>: SQL을 실행하지만 그 결과는 출력하지 않고, 실행계획과 실행통계만을 출력</li><li><code>set autotrace traceonly explain</code>: SQL을 실행하지않고 실행계획만을 출력</li><li><code>set autotrace traceonly statistics</code>: SQL을 실행하지만 그 결과는 출력하지 않고, 실행통계만을 출력</li></ol><blockquote><p>1~3 수행 결과를 출력 해야 하므로 쿼리를 실제 수행 4,6 실행 통계를 보여줘야 하므로 쿼리를 실제 수행 5 번은 실행 계획만 출력하면 되므로 실제 수행하지 않음</p></blockquote><h3 id="autotrace-필요권한" tabindex="-1"><a class="header-anchor" href="#autotrace-필요권한"><span>AutoTrace 필요권한</span></a></h3><ul><li>Autotrace 기능을 실행계획 확인 용도로 사용한다면 Plan_Table만 생성 되어 있으면 가능</li><li>실행통계 까지 확인 하려면 <code>v_$sesstat</code>, <code>v_$statname</code>, <code>v_$mystat</code> 뷰에 대한 읽기 권한이 필요</li><li><code>dba</code>, <code>select_catalog_role</code> 등의 롤을 부여받지 않은 사용자의 경우 별도의 권한 설정이 필요</li><li><code>plustrace</code> 롤을 생성하고 롤을 부여하는 것이 편리</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">SQL<span class="token operator">&gt;</span> @?/sqlplus/admin/plustrace.sql</span>
<span class="line">SQL<span class="token operator">&gt;</span> grant plustrace to scott<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dbms-xplan" tabindex="-1"><a class="header-anchor" href="#dbms-xplan"><span><code>DBMS_XPLAN</code></span></a></h3><ul><li><code>DBMS_XPLAN.DISPLAY</code></li><li><code>DBMS_XPLAN.DISPLAY_CURSOR</code></li></ul><h4 id="예제1-예상-실행계획-확인" tabindex="-1"><a class="header-anchor" href="#예제1-예상-실행계획-확인"><span>예제1: 예상 실행계획 확인</span></a></h4><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">explain</span> <span class="token keyword">plan</span> <span class="token keyword">for</span></span>
<span class="line"><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> EMP <span class="token keyword">WHERE</span> <span class="token number">1</span><span class="token operator">=</span><span class="token number">1</span></span>
<span class="line"><span class="token operator">AND</span> empno<span class="token operator">=</span><span class="token number">7900</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> <span class="token keyword">TABLE</span><span class="token punctuation">(</span>dbms_xplan<span class="token punctuation">.</span>display<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="예제2-예상-실행계획-확인-sql-id" tabindex="-1"><a class="header-anchor" href="#예제2-예상-실행계획-확인-sql-id"><span>예제2: 예상 실행계획 확인 (<code>sql_id</code>)</span></a></h4><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">SELECT</span> <span class="token operator">*</span> </span>
<span class="line">  <span class="token keyword">FROM</span> <span class="token keyword">TABLE</span><span class="token punctuation">(</span>DBMS_XPLAN<span class="token punctuation">.</span>DISPLAY<span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token string">&#39;BASIC&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">SELECT</span> <span class="token operator">*</span> </span>
<span class="line">  <span class="token keyword">FROM</span> <span class="token keyword">TABLE</span><span class="token punctuation">(</span>DBMS_XPLAN<span class="token punctuation">.</span>DISPLAY<span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token string">&#39;ADVANCED&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">-- 필수확인</span></span>
<span class="line"><span class="token keyword">SHOW</span> PARAMETER statistics_level<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">SELECT</span> <span class="token operator">*</span> </span>
<span class="line">  <span class="token keyword">FROM</span> v$parameter </span>
<span class="line"> <span class="token keyword">WHERE</span> <span class="token number">1</span><span class="token operator">=</span><span class="token number">1</span></span>
<span class="line"> <span class="token operator">AND</span> name <span class="token operator">LIKE</span> <span class="token string">&#39;%statistics_level%&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="예제3-실제실행계획-확인" tabindex="-1"><a class="header-anchor" href="#예제3-실제실행계획-확인"><span>예제3: 실제실행계획 확인</span></a></h4><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">SET</span> SERVEROUTPUT <span class="token keyword">OFF</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">ALTER</span> <span class="token keyword">SESSION</span> <span class="token keyword">SET</span> statistics_level <span class="token operator">=</span> <span class="token string">&#39;ALL&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">SELECT</span> <span class="token comment">/*+ GATHER_PLAN_STATISTICS */</span><span class="token comment">/* HNJ */</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> EMP <span class="token keyword">WHERE</span> <span class="token number">1</span><span class="token operator">=</span><span class="token number">1</span> <span class="token operator">AND</span> empno <span class="token operator">=</span> <span class="token number">7900</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">-- sql_id 확인</span></span>
<span class="line"><span class="token keyword">SELECT</span> SUBSTR<span class="token punctuation">(</span>SQL_TEXT<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span> SQL_TEXT<span class="token punctuation">,</span> SQL_ID<span class="token punctuation">,</span> CHILD_NUMBER</span>
<span class="line">  <span class="token keyword">FROM</span> V$<span class="token keyword">SQL</span></span>
<span class="line"> <span class="token keyword">WHERE</span> SQL_TEXT <span class="token operator">LIKE</span> <span class="token string">&#39;%HNJ%&#39;</span></span>
<span class="line">   <span class="token operator">AND</span> SQL_TEXT <span class="token operator">NOT</span> <span class="token operator">LIKE</span> <span class="token string">&#39;%V$SQL%&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">SELECT</span> <span class="token operator">*</span> </span>
<span class="line">  <span class="token keyword">FROM</span> <span class="token keyword">TABLE</span><span class="token punctuation">(</span>DBMS_XPLAN<span class="token punctuation">.</span>DISPLAY_CURSOR<span class="token punctuation">(</span><span class="token string">&#39;a1n5k59v630kb&#39;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&#39;ALLSTATS LAST&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="참고" tabindex="-1"><a class="header-anchor" href="#참고"><span>참고</span></a></h2><ul><li><a href="http://blog.naver.com/PostView.nhn?blogId=sophie_yeom&amp;logNo=220891529668" target="_blank" rel="noopener noreferrer">SQL 실행계획</a></li></ul><hr>`,23);function g(l,L){const n=o("router-link"),p=o("TagLinks");return u(),i("div",null,[s("h1",m,[s("a",h,[s("span",null,r(l.$frontmatter.title)+" 관련",1)])]),s("nav",b,[s("ul",null,[s("li",null,[a(n,{to:"#auto-trace"},{default:e(()=>[t("Auto Trace")]),_:1}),s("ul",null,[s("li",null,[a(n,{to:"#개요"},{default:e(()=>[t("개요")]),_:1})]),s("li",null,[a(n,{to:"#autotrace-옵션"},{default:e(()=>[t("AutoTrace 옵션")]),_:1})]),s("li",null,[a(n,{to:"#autotrace-필요권한"},{default:e(()=>[t("AutoTrace 필요권한")]),_:1})]),s("li",null,[a(n,{to:"#dbms-xplan"},{default:e(()=>[t("DBMS_XPLAN")]),_:1})])])]),s("li",null,[a(n,{to:"#참고"},{default:e(()=>[t("참고")]),_:1})])])]),v,a(p)])}const _=c(k,[["render",g],["__file","01c.html.vue"]]),T=JSON.parse('{"path":"/misc/oracle-sql-db-tuning/01c.html","title":"01C","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"01C","description":"🙆‍♂️DB Server 성능 향상, 분석 및 튜닝 전문가 향상과정 > 01C","category":["Oracle DB"],"tag":["crashcourse","oracle","oracle-db","oracle-sql"],"head":[[{"meta":null},{"property":"og:title","content":"🙆‍♂️DB Server 성능 향상, 분석 및 튜닝 전문가 향상과정 > 01C"},{"property":"og:description","content":"01C"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/assets/misc/oracle-sql-db-tuning/01c.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/crashcourse/misc/oracle-sql-db-tuning/01c.html"}],["meta",{"property":"og:site_name","content":"🥁Crashcourse"}],["meta",{"property":"og:title","content":"01C"}],["meta",{"property":"og:description","content":"🙆‍♂️DB Server 성능 향상, 분석 및 튜닝 전문가 향상과정 > 01C"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-10-03T01:20:13.000Z"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"oracle"}],["meta",{"property":"article:tag","content":"oracle-db"}],["meta",{"property":"article:tag","content":"oracle-sql"}],["meta",{"property":"article:modified_time","content":"2024-10-03T01:20:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"01C\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-03T01:20:13.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Auto Trace","slug":"auto-trace","link":"#auto-trace","children":[{"level":3,"title":"개요","slug":"개요","link":"#개요","children":[]},{"level":3,"title":"AutoTrace 옵션","slug":"autotrace-옵션","link":"#autotrace-옵션","children":[]},{"level":3,"title":"AutoTrace 필요권한","slug":"autotrace-필요권한","link":"#autotrace-필요권한","children":[]},{"level":3,"title":"DBMS_XPLAN","slug":"dbms-xplan","link":"#dbms-xplan","children":[]}]},{"level":2,"title":"참고","slug":"참고","link":"#참고","children":[]}],"git":{"createdTime":1703642364000,"updatedTime":1727918413000,"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":5}]},"readingTime":{"minutes":0.74,"words":222},"filePathRelative":"misc/oracle-sql-db-tuning/01c.md","localizedDate":"2023년 12월 27일","excerpt":"\\n\\n<hr>\\n<h2>Auto Trace</h2>\\n<h3>개요</h3>\\n<p>SQL 수행 시 실제 일량 측정 및 튜닝하는데 유용한 정보들을 많이 포함하는 도구</p>\\n<h3>AutoTrace 옵션</h3>\\n<blockquote>\\n<p>아래와 같은 옵션에 따라 필요한 부분만 출력해 볼 수 있음</p>\\n</blockquote>\\n<ol>\\n<li><code>set autotrace on</code>: SQL을 실행하고 그결과와 함께 실행 계획 및 실행통계를 출력</li>\\n<li><code>set autotrace on explain</code>: SQL을 실행하고 그결과와 함께 실행 계획을 출력</li>\\n<li><code>set autotrace on statistics</code>: SQL을 실행하고 그결과와 함께 실행통계를 출력</li>\\n<li><code>set autotrace traceonly</code>: SQL을 실행하지만 그 결과는 출력하지 않고, 실행계획과 실행통계만을 출력</li>\\n<li><code>set autotrace traceonly explain</code>: SQL을 실행하지않고 실행계획만을 출력</li>\\n<li><code>set autotrace traceonly statistics</code>: SQL을 실행하지만 그 결과는 출력하지 않고, 실행통계만을 출력</li>\\n</ol>"}');export{_ as comp,T as data};