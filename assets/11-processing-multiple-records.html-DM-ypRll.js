import{_ as b}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r,o as k,c as g,a as e,t as f,b as l,w as s,n as _,g as x,d as n,e as d}from"./app-Ds0QsEfe.js";const w={},y={id:"frontmatter-title-관련",tabindex:"-1"},C={class:"header-anchor",href:"#frontmatter-title-관련"},A={class:"table-of-contents"},N=e("hr",null,null,-1),R=e("hr",null,null,-1),S=e("code",null,"condX{actionX}",-1),E={href:"https://softwareengineering.stackexchange.com/questions/47806/examples-of-finite-state-machines",target:"_blank",rel:"noopener noreferrer"},T={class:"hint-container info"},q=e("p",{class:"hint-container-title"},"Info",-1),P={href:"https://github.com/learnbyexample/learn_gnuawk/tree/master/example_files",target:"_blank",rel:"noopener noreferrer"},$=e("hr",null,null,-1),z=e("h2",{id:"processing-consecutive-records",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#processing-consecutive-records"},[e("span",null,"Processing consecutive records")])],-1),F=e("code",null,"awk",-1),H=e("code",null,"0",-1),O=e("p",null,"match and print two consecutive records the first record should contain 'he' and the second one should contain 'you'",-1),G=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(),e("span",{class:"token string"},"'p ~ /he/ && /you/{print p ORS $0} {p=$0}'"),n(` para.txt
`),e("span",{class:"token comment"},"# Hi there"),n(`
`),e("span",{class:"token comment"},"# How are you"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),Q=e("p",null,"same filtering as above, but print only the first record",-1),I=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(),e("span",{class:"token string"},"'p ~ /he/ && /you/{print p} {p=$0}'"),n(` para.txt
`),e("span",{class:"token comment"},"# Hi there"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),J=e("p",null,"same filtering as above, but print only the second record",-1),M=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(),e("span",{class:"token string"},"'p ~ /he/ && /you/; {p=$0}'"),n(` para.txt
`),e("span",{class:"token comment"},"# How are you"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),L=d(`<hr><h2 id="context-matching" tabindex="-1"><a class="header-anchor" href="#context-matching"><span>Context matching</span></a></h2><p>Sometimes you want not just the matching records, but the records relative to the matches as well. For example, it could be to see the comments at the start of a function block that was matched while searching a program file. Or, it could be to see extended information from a log file while searching for a particular error message.</p><p>Consider this sample input file:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> context.txt
<span class="token comment"># blue</span>
<span class="token comment">#     toy</span>
<span class="token comment">#     flower</span>
<span class="token comment">#     sand stone</span>
<span class="token comment"># light blue</span>
<span class="token comment">#     flower</span>
<span class="token comment">#     sky</span>
<span class="token comment">#     water</span>
<span class="token comment"># language</span>
<span class="token comment">#     english</span>
<span class="token comment">#     hindi</span>
<span class="token comment">#     spanish</span>
<span class="token comment">#     tamil</span>
<span class="token comment"># programming language</span>
<span class="token comment">#     python</span>
<span class="token comment">#     kotlin</span>
<span class="token comment">#     ruby</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="case-1" tabindex="-1"><a class="header-anchor" href="#case-1"><span>Case 1</span></a></h3><p>Here&#39;s an example that emulates the <code>grep --no-group-separator -A&lt;n&gt;</code> functionality. The <code>n &amp;&amp; n--</code> trick used in the example below works like this:</p><ul><li>If initially <code>n=2</code>, then we get <ul><li><code>2 &amp;&amp; 2</code> — evaluates to <code>true</code> and <code>n</code> becomes <code>1</code></li><li><code>1 &amp;&amp; 1</code> — evaluates to <code>true</code> and <code>n</code> becomes <code>0</code></li><li><code>0 &amp;&amp;</code> — evaluates to <code>false</code> and <code>n</code> doesn&#39;t change</li></ul></li><li>Note that when conditionals are connected with logical <code>&amp;&amp;</code>, the second expression will not be executed at all if the first one turns out to be <code>false</code> because the overall result will always be <code>false</code>. Same is the case if the first expression evaluates to <code>true</code> with the logical <code>||</code> operator. Such logical operators are also known as <strong>short-circuit</strong> operators. Thus, in the above case, <code>n--</code> won&#39;t be executed when <code>n</code> is <code>0</code> on the left hand side. This prevents n going negative and <code>n &amp;&amp; n--</code> will never become true unless <code>n</code> is assigned again.</li></ul>`,8),B=e("blockquote",null,[e("p",null,[n("same as: "),e("code",null,"grep --no-group-separator -A1 'blue'")])],-1),V=e("p",null,"print the matching line as well as the one that follows it",-1),j=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(),e("span",{class:"token string"},"'/blue/{n=2} n && n--'"),n(` context.txt
`),e("span",{class:"token comment"},"# blue"),n(`
`),e("span",{class:"token comment"},"#     toy"),n(`
`),e("span",{class:"token comment"},"# light blue"),n(`
`),e("span",{class:"token comment"},"#     flower"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),K=e("p",null,[n("overlapping example, "),e("code",null,"n"),n(" gets re-assigned before reaching "),e("code",null,"0")],-1),U=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(),e("span",{class:"token string"},"'/toy|flower/{n=2} n && n--{print NR, $0}'"),n(` context.txt
`),e("span",{class:"token comment"},"# 2     toy"),n(`
`),e("span",{class:"token comment"},"# 3     flower"),n(`
`),e("span",{class:"token comment"},"# 4     sand stone"),n(`
`),e("span",{class:"token comment"},"# 6     flower"),n(`
`),e("span",{class:"token comment"},"# 7     sky"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),Y=e("p",null,"doesn't allow overlapping cases to re-assign the counter",-1),D=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(),e("span",{class:"token string"},"'!n && /toy|flower/{n=2} n && n--{print NR, $0}'"),n(` context.txt
`),e("span",{class:"token comment"},"# 2     toy"),n(`
`),e("span",{class:"token comment"},"# 3     flower"),n(`
`),e("span",{class:"token comment"},"# 6     flower"),n(`
`),e("span",{class:"token comment"},"# 7     sky"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),X=e("p",null,"Once you've understood the above examples, the rest of the examples in this section should be easier to comprehend. They are all variations of the logic used above and re-arranged to solve the use case being discussed.",-1),W=e("h3",{id:"case-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#case-2"},[e("span",null,"Case 2")])],-1),Z=e("p",null,[n("Print "),e("code",null,"n"),n(" records after match. This is similar to previous case, except that the matching record isn't printed.")],-1),ee=e("p",null,[n("print 1 line after the matching line for overlapping cases, "),e("code",null,"n"),n(" gets re-assigned before reaching "),e("code",null,"0")],-1),ne=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(),e("span",{class:"token string"},"'n && n--; /language/{n=1}'"),n(` context.txt
    english
    python
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),se=e("p",null,[n("print "),e("code",null,"2"),n(" lines after the matching line doesn't allow overlapping cases to re-assign the counter")],-1),ae=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(),e("span",{class:"token string"},"'!n && /toy|flower/{n=2; next} n && n--'"),n(` context.txt
    flower
    sand stone
    sky
    water
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),te=e("h3",{id:"case-3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#case-3"},[e("span",null,"Case 3")])],-1),le=e("p",null,[n("Here's how to print the "),e("code",null,"n"),n("th record after the matching record.")],-1),ie=e("p",null,"print only the 2nd line found after the matching line the array saves the matching result for each record doesn't rely on a counter, thus works for overlapping cases",-1),ce=e("blockquote",null,[e("p",null,[n("same as: "),e("code",null,"awk -v n=2 'a[NR-n]; /toy|flower/{a[NR]=1}'")])],-1),oe=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(),e("span",{class:"token parameter variable"},"-v"),n(),e("span",{class:"token assign-left variable"},"n"),e("span",{class:"token operator"},"="),e("span",{class:"token number"},"2"),n(),e("span",{class:"token string"},"'NR in a; /toy|flower/{a[NR+n]}'"),n(` context.txt
`),e("span",{class:"token comment"},"#     sand stone"),n(`
`),e("span",{class:"token comment"},"# light blue"),n(`
`),e("span",{class:"token comment"},"#     water"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),re=e("p",null,[n("print only the 3rd line found after matching line "),e("code",null,"n && !--n"),n(" will be true only when "),e("code",null,"--n"),n(" yields "),e("code",null,"0"),n(" overlapping cases won't work as "),e("code",null,"n"),n(" gets re-assigned before going to "),e("code",null,"0")],-1),de=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(),e("span",{class:"token string"},"'n && !--n; /language/{n=3}'"),n(` context.txt
`),e("span",{class:"token comment"},"#     spanish"),n(`
`),e("span",{class:"token comment"},"#     ruby"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),me=e("h3",{id:"case-4",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#case-4"},[e("span",null,"Case 4")])],-1),ue=e("p",null,[n("Print "),e("code",null,"n"),n(" records before the match. Printing the matching record as well is left as an exercise. Since the file is being read in forward direction, and the problem statement is to print something before the matching record, overlapping situation like the previous examples doesn't occur.")],-1),pe=e("p",null,[e("code",null,"i>0"),n(" is used because "),e("code",null,"NR"),n(" starts from "),e("code",null,"1")],-1),he=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(),e("span",{class:"token parameter variable"},"-v"),n(),e("span",{class:"token assign-left variable"},"n"),e("span",{class:"token operator"},"="),e("span",{class:"token number"},"2"),n(),e("span",{class:"token string"},`'/toy|flower/{for(i=NR-n; i<NR; i++) if(i>0) print a[i]}
            {a[NR]=$0}'`),n(` context.txt
`),e("span",{class:"token comment"},"# blue"),n(`
`),e("span",{class:"token comment"},"# blue"),n(`
`),e("span",{class:"token comment"},"#     toy"),n(`
`),e("span",{class:"token comment"},"#     sand stone"),n(`
`),e("span",{class:"token comment"},"# light blue"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),ve=e("h3",{id:"case-5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#case-5"},[e("span",null,"Case 5")])],-1),be=e("p",null,[n("Print "),e("code",null,"n"),n("th record before the matching record.")],-1),ke=e("p",null,[n("if the count is small enough, you can save them in variables this one prints the 2nd line before the matching line "),e("code",null,"NR>2"),n(" is needed as first 2 records shouldn't be considered for a match")],-1),ge=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(),e("span",{class:"token string"},"'NR>2 && /toy|flower/{print p2} {p2=p1; p1=$0}'"),n(` context.txt
`),e("span",{class:"token comment"},"# blue"),n(`
`),e("span",{class:"token comment"},"#     sand stone"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),fe=e("p",null,"else, use an array to save previous records",-1),_e=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(),e("span",{class:"token parameter variable"},"-v"),n(),e("span",{class:"token assign-left variable"},"n"),e("span",{class:"token operator"},"="),e("span",{class:"token number"},"4"),n(),e("span",{class:"token string"},"'NR>n && /age/{print a[NR-n]} {a[NR]=$0}'"),n(` context.txt
`),e("span",{class:"token comment"},"# light blue"),n(`
`),e("span",{class:"token comment"},"#     english"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),xe=d(`<hr><h2 id="records-bounded-by-distinct-markers" tabindex="-1"><a class="header-anchor" href="#records-bounded-by-distinct-markers"><span>Records bounded by distinct markers</span></a></h2><p>This section will cover cases where the input file will always contain the same number of starting and ending patterns, arranged in an alternating fashion. For example, there cannot be two starting patterns appearing without an ending pattern between them and vice versa. Lines of text inside and between such groups are optional.</p><p>The sample file shown below will be used to illustrate examples in this section. For simplicity, assume that the starting pattern is marked by <code>start</code> and the ending pattern by <code>end</code>. They have also been given group numbers to make it easier to analyze the output.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> uniform.txt
<span class="token comment"># mango</span>
<span class="token comment"># icecream</span>
<span class="token comment"># --start 1--</span>
<span class="token comment"># 1234</span>
<span class="token comment"># 6789</span>
<span class="token comment"># **end 1**</span>
<span class="token comment"># how are you</span>
<span class="token comment"># have a nice day</span>
<span class="token comment"># --start 2--</span>
<span class="token comment"># a</span>
<span class="token comment"># b</span>
<span class="token comment"># c</span>
<span class="token comment"># **end 2**</span>
<span class="token comment"># par,far,mar,tar</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="case-1-1" tabindex="-1"><a class="header-anchor" href="#case-1-1"><span>Case 1</span></a></h3><p>Processing all the groups of records based on the distinct markers, including the records matched by markers themselves. For simplicity, the below command will just print all such records.</p>`,7),we=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(),e("span",{class:"token string"},"'/start/{f=1} f; /end/{f=0}'"),n(` uniform.txt
`),e("span",{class:"token comment"},"# --start 1--"),n(`
`),e("span",{class:"token comment"},"# 1234"),n(`
`),e("span",{class:"token comment"},"# 6789"),n(`
`),e("span",{class:"token comment"},"# **end 1**"),n(`
`),e("span",{class:"token comment"},"# --start 2--"),n(`
`),e("span",{class:"token comment"},"# a"),n(`
`),e("span",{class:"token comment"},"# b"),n(`
`),e("span",{class:"token comment"},"# c"),n(`
`),e("span",{class:"token comment"},"# **end 2**"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),ye=e("div",{class:"hint-container info"},[e("p",{class:"hint-container-title"},"Info"),e("p",null,[n("Similar to "),e("code",null,"sed -n '/start/,/end/p'"),n(" you can also use "),e("code",null,"awk '/start/,/end/'"),n(" but the state machine format is more suitable for the various cases to follow.")])],-1),Ce=e("h3",{id:"case-2-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#case-2-1"},[e("span",null,"Case 2")])],-1),Ae=e("p",null,"Processing all the groups of records but excluding the records matched by markers themselves.",-1),Ne=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(),e("span",{class:"token string"},`'/end/{f=0} f{print "*", $0} /start/{f=1}'`),n(` uniform.txt
`),e("span",{class:"token comment"},"# * 1234"),n(`
`),e("span",{class:"token comment"},"# * 6789"),n(`
`),e("span",{class:"token comment"},"# * a"),n(`
`),e("span",{class:"token comment"},"# * b"),n(`
`),e("span",{class:"token comment"},"# * c"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),Re=e("h3",{id:"case-3-4",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#case-3-4"},[e("span",null,"Case 3-4")])],-1),Se=e("p",null,"Processing all the groups of records but excluding one of the markers.",-1),Ee=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(),e("span",{class:"token string"},"'/start/{f=1} /end/{f=0} f'"),n(` uniform.txt
`),e("span",{class:"token comment"},"# --start 1--"),n(`
`),e("span",{class:"token comment"},"# 1234"),n(`
`),e("span",{class:"token comment"},"# 6789"),n(`
`),e("span",{class:"token comment"},"# --start 2--"),n(`
`),e("span",{class:"token comment"},"# a"),n(`
`),e("span",{class:"token comment"},"# b"),n(`
`),e("span",{class:"token comment"},"# c"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),Te=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(),e("span",{class:"token string"},"'f; /start/{f=1} /end/{f=0}'"),n(` uniform.txt
`),e("span",{class:"token comment"},"# 1234"),n(`
`),e("span",{class:"token comment"},"# 6789"),n(`
`),e("span",{class:"token comment"},"# **end 1**"),n(`
`),e("span",{class:"token comment"},"# a"),n(`
`),e("span",{class:"token comment"},"# b"),n(`
`),e("span",{class:"token comment"},"# c"),n(`
`),e("span",{class:"token comment"},"# **end 2**"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),qe=e("p",null,[n("The next four cases are obtained by just using "),e("code",null,"!f"),n(" instead of "),e("code",null,"f"),n(" from the cases shown above.")],-1),Pe=e("h3",{id:"case-5-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#case-5-1"},[e("span",null,"Case 5")])],-1),$e=e("p",null,"Processing all input records except the groups of records bound by the markers.",-1),ze=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(),e("span",{class:"token string"},`'/start/{f=1} !f{print $0 "."} /end/{f=0}'`),n(` uniform.txt
`),e("span",{class:"token comment"},"# mango."),n(`
`),e("span",{class:"token comment"},"# icecream."),n(`
`),e("span",{class:"token comment"},"# how are you."),n(`
`),e("span",{class:"token comment"},"# have a nice day."),n(`
`),e("span",{class:"token comment"},"# par,far,mar,tar."),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),Fe=e("h3",{id:"case-6",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#case-6"},[e("span",null,"Case 6")])],-1),He=e("p",null,"Processing all input records except the groups of records between the markers.",-1),Oe=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(),e("span",{class:"token string"},"'/end/{f=0} !f; /start/{f=1}'"),n(` uniform.txt
`),e("span",{class:"token comment"},"# mango"),n(`
`),e("span",{class:"token comment"},"# icecream"),n(`
`),e("span",{class:"token comment"},"# --start 1--"),n(`
`),e("span",{class:"token comment"},"# **end 1**"),n(`
`),e("span",{class:"token comment"},"# how are you"),n(`
`),e("span",{class:"token comment"},"# have a nice day"),n(`
`),e("span",{class:"token comment"},"# --start 2--"),n(`
`),e("span",{class:"token comment"},"# **end 2**"),n(`
`),e("span",{class:"token comment"},"# par,far,mar,tar"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),Ge=e("h3",{id:"case-7-8",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#case-7-8"},[e("span",null,"Case 7-8")])],-1),Qe=e("p",null,"Similar to case 6, but include only one of the markers.",-1),Ie=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(),e("span",{class:"token string"},"'!f; /start/{f=1} /end/{f=0}'"),n(` uniform.txt
`),e("span",{class:"token comment"},"# mango"),n(`
`),e("span",{class:"token comment"},"# icecream"),n(`
`),e("span",{class:"token comment"},"# --start 1--"),n(`
`),e("span",{class:"token comment"},"# how are you"),n(`
`),e("span",{class:"token comment"},"# have a nice day"),n(`
`),e("span",{class:"token comment"},"# --start 2--"),n(`
`),e("span",{class:"token comment"},"# par,far,mar,tar"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),Je=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(),e("span",{class:"token string"},"'/start/{f=1} /end/{f=0} !f'"),n(` uniform.txt
`),e("span",{class:"token comment"},"# mango"),n(`
`),e("span",{class:"token comment"},"# icecream"),n(`
`),e("span",{class:"token comment"},"# **end 1**"),n(`
`),e("span",{class:"token comment"},"# how are you"),n(`
`),e("span",{class:"token comment"},"# have a nice day"),n(`
`),e("span",{class:"token comment"},"# **end 2**"),n(`
`),e("span",{class:"token comment"},"# par,far,mar,tar"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),Me=e("hr",null,null,-1),Le=e("h2",{id:"specific-blocks",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#specific-blocks"},[e("span",null,"Specific blocks")])],-1),Be=e("p",null,"Instead of working with all the groups (or blocks) bound by the markers, this section will discuss how to choose blocks based on an additional criteria.",-1),Ve=e("p",null,"Here's how you can process only the first matching block.",-1),je=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(),e("span",{class:"token string"},"'/start/{f=1} f; /end/{exit}'"),n(` uniform.txt
`),e("span",{class:"token comment"},"# --start 1--"),n(`
`),e("span",{class:"token comment"},"# 1234"),n(`
`),e("span",{class:"token comment"},"# 6789"),n(`
`),e("span",{class:"token comment"},"# **end 1**"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),Ke=e("p",null,"use other tricks discussed in previous section as needed",-1),Ue=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(),e("span",{class:"token string"},"'/end/{exit} f; /start/{f=1}'"),n(` uniform.txt
`),e("span",{class:"token comment"},"# 1234"),n(`
`),e("span",{class:"token comment"},"# 6789"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),Ye=e("p",null,"Getting last block alone involves lot more work, unless you happen to know how many blocks are present in the input file.",-1),De=e("p",null,"reverse input linewise, change the order of comparison, reverse again might not work if RS has to be something other than newline",-1),Xe=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"tac"),n(" uniform.txt "),e("span",{class:"token operator"},"|"),n(),e("span",{class:"token function"},"awk"),n(),e("span",{class:"token string"},"'/end/{f=1} f; /start/{exit}'"),n(),e("span",{class:"token operator"},"|"),n(),e("span",{class:"token function"},"tac"),n(`
`),e("span",{class:"token comment"},"# --start 2--"),n(`
`),e("span",{class:"token comment"},"# a"),n(`
`),e("span",{class:"token comment"},"# b"),n(`
`),e("span",{class:"token comment"},"# c"),n(`
`),e("span",{class:"token comment"},"# **end 2**"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),We=e("p",null,"or, save the blocks in a buffer and print the last one alone",-1),Ze=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(),e("span",{class:"token string"},`'/start/{f=1; b=$0; next} f{b=b ORS $0} /end/{f=0}
     END{print b}'`),n(` uniform.txt
`),e("span",{class:"token comment"},"# --start 2--"),n(`
`),e("span",{class:"token comment"},"# a"),n(`
`),e("span",{class:"token comment"},"# b"),n(`
`),e("span",{class:"token comment"},"# c"),n(`
`),e("span",{class:"token comment"},"# **end 2**"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),en=e("p",null,[n("Only the "),e("code",null,"n"),n("th block.")],-1),nn=e("blockquote",null,[e("p",null,[n("can also use: "),e("code",null,"awk -v n=2 '/4/{c++} c==n{print; if(/6/) exit}'")])],-1),sn=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"seq"),n(),e("span",{class:"token number"},"30"),n(),e("span",{class:"token operator"},"|"),n(),e("span",{class:"token function"},"awk"),n(),e("span",{class:"token parameter variable"},"-v"),n(),e("span",{class:"token assign-left variable"},"n"),e("span",{class:"token operator"},"="),e("span",{class:"token number"},"2"),n(),e("span",{class:"token string"},"'/4/{c++} c==n; /6/ && c==n{exit}'"),n(`
`),e("span",{class:"token comment"},"# 14"),n(`
`),e("span",{class:"token comment"},"# 15"),n(`
`),e("span",{class:"token comment"},"# 16"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),an=e("p",null,"All blocks greater than nth block.",-1),tn=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"seq"),n(),e("span",{class:"token number"},"30"),n(),e("span",{class:"token operator"},"|"),n(),e("span",{class:"token function"},"awk"),n(),e("span",{class:"token parameter variable"},"-v"),n(),e("span",{class:"token assign-left variable"},"n"),e("span",{class:"token operator"},"="),e("span",{class:"token number"},"1"),n(),e("span",{class:"token string"},"'/4/{f=1; c++} f && c>n; /6/{f=0}'"),n(`
`),e("span",{class:"token comment"},"# 14"),n(`
`),e("span",{class:"token comment"},"# 15"),n(`
`),e("span",{class:"token comment"},"# 16"),n(`
`),e("span",{class:"token comment"},"# 24"),n(`
`),e("span",{class:"token comment"},"# 25"),n(`
`),e("span",{class:"token comment"},"# 26"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),ln=e("p",null,[n("Excluding the "),e("code",null,"n"),n("th block.")],-1),cn=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"seq"),n(),e("span",{class:"token number"},"30"),n(),e("span",{class:"token operator"},"|"),n(),e("span",{class:"token function"},"awk"),n(),e("span",{class:"token parameter variable"},"-v"),n(),e("span",{class:"token assign-left variable"},"n"),e("span",{class:"token operator"},"="),e("span",{class:"token number"},"2"),n(),e("span",{class:"token string"},"'/4/{f=1; c++} f && c!=n; /6/{f=0}'"),n(`
`),e("span",{class:"token comment"},"# 4"),n(`
`),e("span",{class:"token comment"},"# 5"),n(`
`),e("span",{class:"token comment"},"# 6"),n(`
`),e("span",{class:"token comment"},"# 24"),n(`
`),e("span",{class:"token comment"},"# 25"),n(`
`),e("span",{class:"token comment"},"# 26"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),on=e("p",null,"All blocks, only if the records between the markers match an additional condition.",-1),rn=e("p",null,"additional condition here is a record with entire content as '15'",-1),dn=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"seq"),n(),e("span",{class:"token number"},"30"),n(),e("span",{class:"token operator"},"|"),n(),e("span",{class:"token function"},"awk"),n(),e("span",{class:"token string"},`'/4/{f=1; buf=$0; m=0; next}
              f{buf=buf ORS $0}
              /6/{f=0; if(m) print buf}
              $0=="15"{m=1}'`),n(`
`),e("span",{class:"token comment"},"# 14"),n(`
`),e("span",{class:"token comment"},"# 15"),n(`
`),e("span",{class:"token comment"},"# 16"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),mn=d(`<hr><h2 id="broken-blocks" tabindex="-1"><a class="header-anchor" href="#broken-blocks"><span>Broken blocks</span></a></h2><p>Sometimes, you can have markers in random order and mixed in different ways. In such cases, to work with blocks without any other marker present in between them, the buffer approach comes in handy again.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> broken.txt
<span class="token comment"># qqqqqqqqqqqqqqqq</span>
<span class="token comment"># error 1</span>
<span class="token comment"># hi</span>
<span class="token comment"># error 2</span>
<span class="token comment"># 1234</span>
<span class="token comment"># 6789</span>
<span class="token comment"># state 1</span>
<span class="token comment"># bye</span>
<span class="token comment"># state 2</span>
<span class="token comment"># error 3</span>
<span class="token comment"># xyz</span>
<span class="token comment"># error 4</span>
<span class="token comment"># abcd</span>
<span class="token comment"># state 3</span>
<span class="token comment"># zzzzzzzzzzzzzzzz</span>

<span class="token function">awk</span> <span class="token string">&#39;/error/{f=1; buf=$0; next}
     f{buf=buf ORS $0}
     /state/{if(f) print buf; f=0}&#39;</span> broken.txt
<span class="token comment"># error 2</span>
<span class="token comment"># 1234</span>
<span class="token comment"># 6789</span>
<span class="token comment"># state 1</span>
<span class="token comment"># error 4</span>
<span class="token comment"># abcd</span>
<span class="token comment"># state 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="summary" tabindex="-1"><a class="header-anchor" href="#summary"><span>Summary</span></a></h2><p>This chapter covered various examples of working with multiple records. State machines play an important role in deriving solutions for such cases. Knowing various corner cases is also crucial, otherwise a solution that works for one input may fail for others.</p><p>Next chapter will discuss use cases where you need to process a file input based on contents of another file.</p><hr><h2 id="exercises" tabindex="-1"><a class="header-anchor" href="#exercises"><span>Exercises</span></a></h2>`,10),un={class:"hint-container info"},pn=e("p",{class:"hint-container-title"},"Info",-1),hn={href:"https://github.com/learnbyexample/learn_gnuawk/tree/master/exercises",target:"_blank",rel:"noopener noreferrer"},vn=e("h3",{id:"exercise-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#exercise-1"},[e("span",null,"Exercise 1")])],-1),bn=e("code",null,"sample.txt",-1),kn=e("code",null,"do",-1),gn=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(),e("span",{class:"token comment"},"##### add your solution here"),n(`
`),e("span",{class:"token comment"},"# Just do-it"),n(`
`),e("span",{class:"token comment"},"# Much ado about nothing"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),fn=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(),e("span",{class:"token string"},`'p2 ~ /you/ && p1=="" && /do/; {p2=p1; p1=$0}'`),n(` sample.txt
`),e("span",{class:"token comment"},"# Just do-it"),n(`
`),e("span",{class:"token comment"},"# Much ado about nothing"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),_n=e("h3",{id:"exercise-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#exercise-2"},[e("span",null,"Exercise 2")])],-1),xn=e("code",null,"sample.txt",-1),wn=e("code",null,"do",-1),yn=e("code",null,"not",-1),Cn=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(),e("span",{class:"token comment"},"##### add your solution here"),n(`
`),e("span",{class:"token comment"},"# No doubt you like it too"),n(`
`),e("span",{class:"token comment"},"# Much ado about nothing"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),An=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(),e("span",{class:"token parameter variable"},"-v"),n(),e("span",{class:"token assign-left variable"},"IGNORECASE"),e("span",{class:"token operator"},"="),e("span",{class:"token number"},"1"),n(),e("span",{class:"token string"},"'/do/ && ++d == 2; /not/ && ++n == 2'"),n(` sample.txt
`),e("span",{class:"token comment"},"# No doubt you like it too"),n(`
`),e("span",{class:"token comment"},"# Much ado about nothing"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),Nn=e("h3",{id:"exercise-3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#exercise-3"},[e("span",null,"Exercise 3")])],-1),Rn=e("code",null,"sample.txt",-1),Sn=e("code",null,"are",-1),En=e("code",null,"bit",-1),Tn=e("code",null,"n",-1),qn=e("code",null,"n",-1),Pn=e("code",null,"awk",-1),$n=e("code",null,"-v",-1),zn=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(),e("span",{class:"token parameter variable"},"-v"),n(),e("span",{class:"token assign-left variable"},"n"),e("span",{class:"token operator"},"="),e("span",{class:"token number"},"1"),n(),e("span",{class:"token comment"},"##### add your solution here"),n(`
`),e("span",{class:"token comment"},"# Good day"),n(`
`),e("span",{class:"token comment"},"# How are you"),n(`
`),e("span",{class:"token comment"},"#"),n(`
`),e("span",{class:"token comment"},"# Today is sunny"),n(`
`),e("span",{class:"token comment"},"# Not a bit funny"),n(`
`),e("span",{class:"token comment"},"# No doubt you like it too"),n(`

`),e("span",{class:"token comment"},"# note that the first and last line are empty for this case"),n(`
`),e("span",{class:"token function"},"awk"),n(),e("span",{class:"token parameter variable"},"-v"),n(),e("span",{class:"token assign-left variable"},"n"),e("span",{class:"token operator"},"="),e("span",{class:"token number"},"2"),n(),e("span",{class:"token comment"},"##### add your solution here"),n(`
`),e("span",{class:"token comment"},"# Good day"),n(`
`),e("span",{class:"token comment"},"# How are you"),n(`
`),e("span",{class:"token comment"},"# "),n(`
`),e("span",{class:"token comment"},"# Just do-it"),n(`
`),e("span",{class:"token comment"},"# "),n(`
`),e("span",{class:"token comment"},"# Today is sunny"),n(`
`),e("span",{class:"token comment"},"# Not a bit funny"),n(`
`),e("span",{class:"token comment"},"# No doubt you like it too"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),Fn=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(),e("span",{class:"token parameter variable"},"-v"),n(),e("span",{class:"token assign-left variable"},"n"),e("span",{class:"token operator"},"="),e("span",{class:"token number"},"1"),n(),e("span",{class:"token string"},`'/are|bit/{for(i=NR-n; i<NR; i++) if(i>0) print a[i]; c=n+1}
            c && c--; {a[NR]=$0}'`),n(` sample.txt
`),e("span",{class:"token comment"},"# Good day"),n(`
`),e("span",{class:"token comment"},"# How are you"),n(`
`),e("span",{class:"token comment"},"# "),n(`
`),e("span",{class:"token comment"},"# Today is sunny"),n(`
`),e("span",{class:"token comment"},"# Not a bit funny"),n(`
`),e("span",{class:"token comment"},"# No doubt you like it too"),n(`

`),e("span",{class:"token function"},"awk"),n(),e("span",{class:"token parameter variable"},"-v"),n(),e("span",{class:"token assign-left variable"},"n"),e("span",{class:"token operator"},"="),e("span",{class:"token number"},"2"),n(),e("span",{class:"token string"},`'/are|bit/{for(i=NR-n; i<NR; i++) if(i>0) print a[i]; c=n+1}
            c && c--; {a[NR]=$0}'`),n(` sample.txt

`),e("span",{class:"token comment"},"# Good day"),n(`
`),e("span",{class:"token comment"},"# How are you"),n(`
`),e("span",{class:"token comment"},"# "),n(`
`),e("span",{class:"token comment"},"# Just do-it"),n(`
`),e("span",{class:"token comment"},"# "),n(`
`),e("span",{class:"token comment"},"# Today is sunny"),n(`
`),e("span",{class:"token comment"},"# Not a bit funny"),n(`
`),e("span",{class:"token comment"},"# No doubt you like it too"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),Hn=e("h3",{id:"exercise-4",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#exercise-4"},[e("span",null,"Exercise 4")])],-1),On=e("code",null,"broken.txt",-1),Gn=e("code",null,"top",-1),Qn=e("code",null,"bottom",-1),In=e("code",null,"awk",-1),Jn=e("code",null,"top",-1),Mn=e("code",null,"bottom",-1),Ln=d(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> broken.txt
<span class="token comment"># top</span>
<span class="token comment"># 3.14</span>
<span class="token comment"># bottom</span>
<span class="token comment"># ---</span>
<span class="token comment"># top</span>
<span class="token comment"># 1234567890</span>
<span class="token comment"># bottom</span>
<span class="token comment"># top</span>
<span class="token comment"># Hi there</span>
<span class="token comment"># Have a nice day</span>
<span class="token comment"># Good bye</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),Bn=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token comment"},"# wrong output"),n(`
`),e("span",{class:"token function"},"awk"),n(),e("span",{class:"token string"},"'/bottom/{f=0} f; /top/{f=1}'"),n(` broken.txt
`),e("span",{class:"token comment"},"# 3.14"),n(`
`),e("span",{class:"token comment"},"# 1234567890"),n(`
`),e("span",{class:"token comment"},"# Hi there"),n(`
`),e("span",{class:"token comment"},"# Have a nice day"),n(`
`),e("span",{class:"token comment"},"# Good bye"),n(`

`),e("span",{class:"token comment"},"# expected output"),n(`
`),e("span",{class:"token comment"},"##### add your solution here"),n(`
`),e("span",{class:"token comment"},"# 3.14"),n(`
`),e("span",{class:"token comment"},"# 1234567890"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),Vn=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(),e("span",{class:"token string"},"'/bottom/{f=0} f; /top/{f=1}'"),n(` broken.txt
`),e("span",{class:"token comment"},"# 3.14"),n(`
`),e("span",{class:"token comment"},"# 1234567890"),n(`
`),e("span",{class:"token comment"},"# Hi there"),n(`
`),e("span",{class:"token comment"},"# Have a nice day"),n(`
`),e("span",{class:"token comment"},"# Good bye"),n(`

`),e("span",{class:"token comment"},"# expected output"),n(`
`),e("span",{class:"token function"},"tac"),n(" broken.txt "),e("span",{class:"token operator"},"|"),n(),e("span",{class:"token function"},"awk"),n(),e("span",{class:"token string"},"'/top/{f=0} f; /bottom/{f=1}'"),n(),e("span",{class:"token operator"},"|"),n(),e("span",{class:"token function"},"tac"),n(`
`),e("span",{class:"token comment"},"# 3.14"),n(`
`),e("span",{class:"token comment"},"# 1234567890"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),jn=e("h3",{id:"exercise-5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#exercise-5"},[e("span",null,"Exercise 5")])],-1),Kn=e("code",null,"concat.txt",-1),Un=e("code",null,"###",-1),Yn=e("code",null,"n",-1),Dn=e("code",null,"-v",-1),Xn=d(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> concat.txt
<span class="token comment">### addr.txt</span>
<span class="token comment"># How are you</span>
<span class="token comment"># This game is good</span>
<span class="token comment"># Today is sunny</span>
<span class="token comment">### broken.txt</span>
<span class="token comment"># top</span>
<span class="token comment"># 1234567890</span>
<span class="token comment"># bottom</span>
<span class="token comment">### sample.txt</span>
<span class="token comment"># Just do-it</span>
<span class="token comment"># Believe it</span>
<span class="token comment">### mixed_fs.txt</span>
<span class="token comment"># pink blue white yellow</span>
<span class="token comment"># car,mat,ball,basket</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),Wn=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(),e("span",{class:"token parameter variable"},"-v"),n(),e("span",{class:"token assign-left variable"},"n"),e("span",{class:"token operator"},"="),e("span",{class:"token number"},"2"),n(),e("span",{class:"token comment"},"##### add your solution here"),n(`
`),e("span",{class:"token comment"},"#### broken.txt"),n(`
`),e("span",{class:"token comment"},"# top"),n(`
`),e("span",{class:"token comment"},"# 1234567890"),n(`
`),e("span",{class:"token comment"},"# bottom"),n(`

`),e("span",{class:"token function"},"awk"),n(),e("span",{class:"token parameter variable"},"-v"),n(),e("span",{class:"token assign-left variable"},"n"),e("span",{class:"token operator"},"="),e("span",{class:"token number"},"4"),n(),e("span",{class:"token comment"},"##### add your solution here"),n(`
`),e("span",{class:"token comment"},"#### mixed_fs.txt"),n(`
`),e("span",{class:"token comment"},"# pink blue white yellow"),n(`
`),e("span",{class:"token comment"},"# car,mat,ball,basket"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),Zn=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(),e("span",{class:"token parameter variable"},"-v"),n(),e("span",{class:"token assign-left variable"},"n"),e("span",{class:"token operator"},"="),e("span",{class:"token number"},"2"),n(),e("span",{class:"token string"},"'/^### /{c++} c==n'"),n(` concat.txt
`),e("span",{class:"token comment"},"#### broken.txt"),n(`
`),e("span",{class:"token comment"},"# top"),n(`
`),e("span",{class:"token comment"},"# 1234567890"),n(`
`),e("span",{class:"token comment"},"# bottom"),n(`

`),e("span",{class:"token function"},"awk"),n(),e("span",{class:"token parameter variable"},"-v"),n(),e("span",{class:"token assign-left variable"},"n"),e("span",{class:"token operator"},"="),e("span",{class:"token number"},"4"),n(),e("span",{class:"token string"},"'/^### /{c++} c==n'"),n(` concat.txt
`),e("span",{class:"token comment"},"#### mixed_fs.txt"),n(`
`),e("span",{class:"token comment"},"# pink blue white yellow"),n(`
`),e("span",{class:"token comment"},"# car,mat,ball,basket"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),es=e("h3",{id:"exercise-6",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#exercise-6"},[e("span",null,"Exercise 6")])],-1),ns=e("code",null,"ruby.md",-1),ss=e("code",null,"ruby",-1),as=e("code",null,"Ruby",-1),ts=e("code",null,"ruby",-1),ls=e("code",null,"out.md",-1),is=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(),e("span",{class:"token comment"},"##### add your solution here ruby.md > out.md"),n(`
`),e("span",{class:"token function"},"diff"),n(),e("span",{class:"token parameter variable"},"-sq"),n(` out.md expected.md 
`),e("span",{class:"token comment"},"# Files out.md and expected.md are identical"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),cs=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(),e("span",{class:"token parameter variable"},"-v"),n(),e("span",{class:"token assign-left variable"},"IGNORECASE"),e("span",{class:"token operator"},"="),e("span",{class:"token number"},"1"),n(),e("span",{class:"token string"},"'/```ruby/{f=1} !f{gsub(/ruby/, \"Ruby\")} /```$/{f=0} 1'"),n(" ruby.md "),e("span",{class:"token operator"},">"),n(` out.md
`),e("span",{class:"token function"},"diff"),n(),e("span",{class:"token parameter variable"},"-sq"),n(` out.md expected.md 
`),e("span",{class:"token comment"},"# Files out.md and expected.md are identical"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),os=e("h3",{id:"exercise-7",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#exercise-7"},[e("span",null,"Exercise 7")])],-1),rs=e("code",null,"lines.txt",-1),ds=e("code",null,"---",-1),ms=d(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> lines.txt
<span class="token comment"># Go There</span>
<span class="token comment"># come on</span>
<span class="token comment"># go there</span>
<span class="token comment"># ---</span>
<span class="token comment"># 2 apples and 5 mangoes</span>
<span class="token comment"># come on!</span>
<span class="token comment"># ---</span>
<span class="token comment"># 2 Apples</span>
<span class="token comment"># COME ON</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),us=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(),e("span",{class:"token comment"},"##### add your solution here"),n(`
`),e("span",{class:"token comment"},"# Go There"),n(`
`),e("span",{class:"token comment"},"# come on"),n(`
`),e("span",{class:"token comment"},"# go there"),n(`
`),e("span",{class:"token comment"},"# ---"),n(`
`),e("span",{class:"token comment"},"# come on!"),n(`
`),e("span",{class:"token comment"},"# ---"),n(`
`),e("span",{class:"token comment"},"# COME ON"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),ps=e("blockquote",null,[e("p",null,[n("can also use: "),e("code",null,`awk '!(n && n--); $0=="---"{n=1}' lines.txt`)])],-1),hs=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(),e("span",{class:"token string"},`'p!="---"; {p=$0}'`),n(` lines.txt
`),e("span",{class:"token comment"},"# Go There"),n(`
`),e("span",{class:"token comment"},"# come on"),n(`
`),e("span",{class:"token comment"},"# go there"),n(`
`),e("span",{class:"token comment"},"# ---"),n(`
`),e("span",{class:"token comment"},"# come on!"),n(`
`),e("span",{class:"token comment"},"# ---"),n(`
`),e("span",{class:"token comment"},"# COME ON"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),vs=e("h3",{id:"exercise-8",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#exercise-8"},[e("span",null,"Exercise 8")])],-1),bs=e("code",null,"result.csv",-1),ks=e("code",null,"---",-1),gs=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(),e("span",{class:"token comment"},"##### add your solution here"),n(`
`),e("span",{class:"token comment"},"# Amy,maths,89"),n(`
`),e("span",{class:"token comment"},"# Amy,physics,75"),n(`
`),e("span",{class:"token comment"},"# ---"),n(`
`),e("span",{class:"token comment"},"# Joe,maths,79"),n(`
`),e("span",{class:"token comment"},"# ---"),n(`
`),e("span",{class:"token comment"},"# John,chemistry,77"),n(`
`),e("span",{class:"token comment"},"# John,physics,91"),n(`
`),e("span",{class:"token comment"},"# ---"),n(`
`),e("span",{class:"token comment"},"# Moe,maths,81"),n(`
`),e("span",{class:"token comment"},"# ---"),n(`
`),e("span",{class:"token comment"},"# Ravi,physics,84"),n(`
`),e("span",{class:"token comment"},"# Ravi,chemistry,70"),n(`
`),e("span",{class:"token comment"},"# ---"),n(`
`),e("span",{class:"token comment"},"# Yui,maths,92"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),fs=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(" -F, "),e("span",{class:"token string"},`'NR>1 && p!=$1{print "---"} 1; {p=$1}'`),n(` result.csv
`),e("span",{class:"token comment"},"# Amy,maths,89"),n(`
`),e("span",{class:"token comment"},"# Amy,physics,75"),n(`
`),e("span",{class:"token comment"},"# ---"),n(`
`),e("span",{class:"token comment"},"# Joe,maths,79"),n(`
`),e("span",{class:"token comment"},"# ---"),n(`
`),e("span",{class:"token comment"},"# John,chemistry,77"),n(`
`),e("span",{class:"token comment"},"# John,physics,91"),n(`
`),e("span",{class:"token comment"},"# ---"),n(`
`),e("span",{class:"token comment"},"# Moe,maths,81"),n(`
`),e("span",{class:"token comment"},"# ---"),n(`
`),e("span",{class:"token comment"},"# Ravi,physics,84"),n(`
`),e("span",{class:"token comment"},"# Ravi,chemistry,70"),n(`
`),e("span",{class:"token comment"},"# ---"),n(`
`),e("span",{class:"token comment"},"# Yui,maths,92"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1);function _s(u,xs){const i=r("router-link"),p=r("VPCard"),m=r("ExternalLinkIcon"),o=r("FontIcon"),h=r("RouteLink"),c=r("Tabs"),v=r("TagLinks");return k(),g("div",null,[e("h1",y,[e("a",C,[e("span",null,f(u.$frontmatter.title)+" 관련",1)])]),e("nav",A,[e("ul",null,[e("li",null,[l(i,{to:"#processing-consecutive-records"},{default:s(()=>[n("Processing consecutive records")]),_:1})]),e("li",null,[l(i,{to:"#context-matching"},{default:s(()=>[n("Context matching")]),_:1}),e("ul",null,[e("li",null,[l(i,{to:"#case-1"},{default:s(()=>[n("Case 1")]),_:1})]),e("li",null,[l(i,{to:"#case-2"},{default:s(()=>[n("Case 2")]),_:1})]),e("li",null,[l(i,{to:"#case-3"},{default:s(()=>[n("Case 3")]),_:1})]),e("li",null,[l(i,{to:"#case-4"},{default:s(()=>[n("Case 4")]),_:1})]),e("li",null,[l(i,{to:"#case-5"},{default:s(()=>[n("Case 5")]),_:1})])])]),e("li",null,[l(i,{to:"#records-bounded-by-distinct-markers"},{default:s(()=>[n("Records bounded by distinct markers")]),_:1}),e("ul",null,[e("li",null,[l(i,{to:"#case-1-1"},{default:s(()=>[n("Case 1")]),_:1})]),e("li",null,[l(i,{to:"#case-2-1"},{default:s(()=>[n("Case 2")]),_:1})]),e("li",null,[l(i,{to:"#case-3-4"},{default:s(()=>[n("Case 3-4")]),_:1})]),e("li",null,[l(i,{to:"#case-5-1"},{default:s(()=>[n("Case 5")]),_:1})]),e("li",null,[l(i,{to:"#case-6"},{default:s(()=>[n("Case 6")]),_:1})]),e("li",null,[l(i,{to:"#case-7-8"},{default:s(()=>[n("Case 7-8")]),_:1})])])]),e("li",null,[l(i,{to:"#specific-blocks"},{default:s(()=>[n("Specific blocks")]),_:1})]),e("li",null,[l(i,{to:"#broken-blocks"},{default:s(()=>[n("Broken blocks")]),_:1})]),e("li",null,[l(i,{to:"#summary"},{default:s(()=>[n("Summary")]),_:1})]),e("li",null,[l(i,{to:"#exercises"},{default:s(()=>[n("Exercises")]),_:1}),e("ul",null,[e("li",null,[l(i,{to:"#exercise-1"},{default:s(()=>[n("Exercise 1")]),_:1})]),e("li",null,[l(i,{to:"#exercise-2"},{default:s(()=>[n("Exercise 2")]),_:1})]),e("li",null,[l(i,{to:"#exercise-3"},{default:s(()=>[n("Exercise 3")]),_:1})]),e("li",null,[l(i,{to:"#exercise-4"},{default:s(()=>[n("Exercise 4")]),_:1})]),e("li",null,[l(i,{to:"#exercise-5"},{default:s(()=>[n("Exercise 5")]),_:1})]),e("li",null,[l(i,{to:"#exercise-6"},{default:s(()=>[n("Exercise 6")]),_:1})]),e("li",null,[l(i,{to:"#exercise-7"},{default:s(()=>[n("Exercise 7")]),_:1})]),e("li",null,[l(i,{to:"#exercise-8"},{default:s(()=>[n("Exercise 8")]),_:1})])])])])]),N,l(p,_(x({title:"11. Processing multiple records",desc:"CLI Text Processing with GNU awk",link:"https://learnbyexample.github.io/learn_gnuawk/processing-multiple-records.html",logo:"https://learnbyexample.github.io/favicon.svg",background:"rgba(22,25,35,0.2)"})),null,16),R,e("p",null,[n("Often, you need to consider multiple lines at a time to make a decision, such as the paragraph mode examples seen earlier. Sometimes, you need to match a particular record and then get records surrounding the matched record. The "),S,n(" shortcut makes it easy to code state machines concisely, which is useful to solve such multiple record use cases. See "),e("a",E,[n("softwareengineering: FSM examples"),l(m)]),n(" if you are not familiar with state machines.")]),e("div",T,[q,e("p",null,[n("The "),e("a",P,[l(o,{icon:"iconfont icon-github"}),n(" example_files"),l(m)]),n(" directory has all the files used in the examples.")])]),$,z,e("p",null,[n("You might need to define a condition that should satisfy something for one record and something else for the very next record. "),F,n(" does provide a feature to get next record, but that could get complicated (see the "),l(h,{to:"/cli/text-processing-w-gnu-awk/12-two-file-processing.html#getline"},{default:s(()=>[n("getline")]),_:1}),n(" section). Instead, you can simply save relevant records in variables/arrays and then create the required conditional expression when you have all the required records available. The default behavior of uninitialized variable to act as "),H,n(" in numerical context and empty in string context plays a role too.")]),l(c,{id:"24",data:[{id:"Case 1"},{id:"Case 2"},{id:"Case 3"}],active:0},{title0:s(({value:a,isActive:t})=>[n("Case 1")]),title1:s(({value:a,isActive:t})=>[n("Case 2")]),title2:s(({value:a,isActive:t})=>[n("Case 3")]),tab0:s(({value:a,isActive:t})=>[O,G]),tab1:s(({value:a,isActive:t})=>[Q,I]),tab2:s(({value:a,isActive:t})=>[J,M]),_:1}),L,l(c,{id:"90",data:[{id:"Case 1"},{id:"Case 2"},{id:"Case 3"}],active:0},{title0:s(({value:a,isActive:t})=>[n("Case 1")]),title1:s(({value:a,isActive:t})=>[n("Case 2")]),title2:s(({value:a,isActive:t})=>[n("Case 3")]),tab0:s(({value:a,isActive:t})=>[B,V,j]),tab1:s(({value:a,isActive:t})=>[K,U]),tab2:s(({value:a,isActive:t})=>[Y,D]),_:1}),X,W,Z,ee,l(c,{id:"127",data:[{id:"Case 1"},{id:"Case 2"}],active:0},{title0:s(({value:a,isActive:t})=>[n("Case 1")]),title1:s(({value:a,isActive:t})=>[n("Case 2")]),tab0:s(({value:a,isActive:t})=>[ne]),tab1:s(({value:a,isActive:t})=>[se,ae]),_:1}),te,le,l(c,{id:"144",data:[{id:"Case 1"},{id:"Case 2"}],active:0},{title0:s(({value:a,isActive:t})=>[n("Case 1")]),title1:s(({value:a,isActive:t})=>[n("Case 2")]),tab0:s(({value:a,isActive:t})=>[ie,ce,oe]),tab1:s(({value:a,isActive:t})=>[re,de]),_:1}),me,ue,l(c,{id:"169",data:[{id:"Case 1"}],active:0},{title0:s(({value:a,isActive:t})=>[n("Case 1")]),tab0:s(({value:a,isActive:t})=>[pe,he]),_:1}),ve,be,l(c,{id:"183",data:[{id:"Case 1"},{id:"Case 2"}],active:0},{title0:s(({value:a,isActive:t})=>[n("Case 1")]),title1:s(({value:a,isActive:t})=>[n("Case 2")]),tab0:s(({value:a,isActive:t})=>[ke,ge]),tab1:s(({value:a,isActive:t})=>[fe,_e]),_:1}),xe,l(c,{id:"214",data:[{id:"Case 1"}],active:0},{title0:s(({value:a,isActive:t})=>[n("Case 1")]),tab0:s(({value:a,isActive:t})=>[we]),_:1}),ye,Ce,Ae,l(c,{id:"230",data:[{id:"Case 1"}],active:0},{title0:s(({value:a,isActive:t})=>[n("Case 1")]),tab0:s(({value:a,isActive:t})=>[Ne]),_:1}),Re,Se,l(c,{id:"241",data:[{id:"Case 1"},{id:"Case 2"}],active:0},{title0:s(({value:a,isActive:t})=>[n("Case 1")]),title1:s(({value:a,isActive:t})=>[n("Case 2")]),tab0:s(({value:a,isActive:t})=>[Ee]),tab1:s(({value:a,isActive:t})=>[Te]),_:1}),qe,Pe,$e,l(c,{id:"258",data:[{id:"Case 1"}],active:0},{title0:s(({value:a,isActive:t})=>[n("Case 1")]),tab0:s(({value:a,isActive:t})=>[ze]),_:1}),Fe,He,l(c,{id:"269",data:[{id:"Case 1"}],active:0},{title0:s(({value:a,isActive:t})=>[n("Case 1")]),tab0:s(({value:a,isActive:t})=>[Oe]),_:1}),Ge,Qe,l(c,{id:"280",data:[{id:"Case 1"},{id:"Case 2"}],active:0},{title0:s(({value:a,isActive:t})=>[n("Case 1")]),title1:s(({value:a,isActive:t})=>[n("Case 2")]),tab0:s(({value:a,isActive:t})=>[Ie]),tab1:s(({value:a,isActive:t})=>[Je]),_:1}),Me,Le,Be,Ve,l(c,{id:"298",data:[{id:"Case 1"},{id:"Case 2"}],active:0},{title0:s(({value:a,isActive:t})=>[n("Case 1")]),title1:s(({value:a,isActive:t})=>[n("Case 2")]),tab0:s(({value:a,isActive:t})=>[je]),tab1:s(({value:a,isActive:t})=>[Ke,Ue]),_:1}),Ye,l(c,{id:"312",data:[{id:"Case 1"},{id:"Case 2"},{id:"Case 3"},{id:"Case 4"},{id:"Case 5"},{id:"Case 6"}],active:0},{title0:s(({value:a,isActive:t})=>[n("Case 1")]),title1:s(({value:a,isActive:t})=>[n("Case 2")]),title2:s(({value:a,isActive:t})=>[n("Case 3")]),title3:s(({value:a,isActive:t})=>[n("Case 4")]),title4:s(({value:a,isActive:t})=>[n("Case 5")]),title5:s(({value:a,isActive:t})=>[n("Case 6")]),tab0:s(({value:a,isActive:t})=>[De,Xe]),tab1:s(({value:a,isActive:t})=>[We,Ze]),tab2:s(({value:a,isActive:t})=>[en,nn,sn]),tab3:s(({value:a,isActive:t})=>[an,tn]),tab4:s(({value:a,isActive:t})=>[ln,cn]),tab5:s(({value:a,isActive:t})=>[on,rn,dn]),_:1}),mn,e("div",un,[pn,e("p",null,[n("The "),e("a",hn,[l(o,{icon:"iconfont icon-github"}),n(" exercises"),l(m)]),n(" directory has all the files used in this section.")])]),vn,e("p",null,[n("For the input file "),l(o,{icon:"fas fa-file-lines"}),n(),bn,n(", print lines containing "),kn,n(" only if the previous line is empty and the line before that contains you.")]),l(c,{id:"391",data:[{id:"Question"},{id:"Solution"}],active:0},{title0:s(({value:a,isActive:t})=>[n("Question")]),title1:s(({value:a,isActive:t})=>[n("Solution")]),tab0:s(({value:a,isActive:t})=>[gn]),tab1:s(({value:a,isActive:t})=>[fn]),_:1}),_n,e("p",null,[n("For the input file "),l(o,{icon:"fas fa-file-lines"}),n(),xn,n(", match lines containing "),wn,n(" or "),yn,n(" case insensitively. Each of these terms occur multiple times in the file. The goal is to print only the second occurrences of these terms (independent of each other).")]),l(c,{id:"405",data:[{id:"Question"},{id:"Solution"}],active:0},{title0:s(({value:a,isActive:t})=>[n("Question")]),title1:s(({value:a,isActive:t})=>[n("Solution")]),tab0:s(({value:a,isActive:t})=>[Cn]),tab1:s(({value:a,isActive:t})=>[An]),_:1}),Nn,e("p",null,[n("For the input file "),l(o,{icon:"fas fa-file-lines"}),n(),Rn,n(", print the matching lines containing "),Sn,n(" or "),En,n(" as well as "),Tn,n(" lines around the matching lines. The value for "),qn,n(" is passed to the "),Pn,n(" command via the "),$n,n(" option.")]),l(c,{id:"419",data:[{id:"Question"},{id:"Solution"}],active:0},{title0:s(({value:a,isActive:t})=>[n("Question")]),title1:s(({value:a,isActive:t})=>[n("Solution")]),tab0:s(({value:a,isActive:t})=>[zn]),tab1:s(({value:a,isActive:t})=>[Fn]),_:1}),Hn,e("p",null,[n("For the input file "),l(o,{icon:"fas fa-file-lines"}),n(),On,n(", print all lines between the markers "),Gn,n(" and "),Qn,n(". The first "),In,n(" command shown below doesn't work because it is matching till the end of file as the second marker isn't found. Assume that the input file cannot have two "),Jn,n(" markers without a "),Mn,n(" marker appearing in between and vice-versa.")]),Ln,l(c,{id:"434",data:[{id:"Question"},{id:"Solution"}],active:0},{title0:s(({value:a,isActive:t})=>[n("Question")]),title1:s(({value:a,isActive:t})=>[n("Solution")]),tab0:s(({value:a,isActive:t})=>[Bn]),tab1:s(({value:a,isActive:t})=>[Vn]),_:1}),jn,e("p",null,[n("For the input file "),l(o,{icon:"fas fa-file-lines"}),n(),Kn,n(", extract contents from a line starting with "),Un,n(" until but not including the next such line. The block to be extracted is indicated by the variable "),Yn,n(" passed via the "),Dn,n(" option.")]),Xn,l(c,{id:"449",data:[{id:"Question"},{id:"Solution"}],active:0},{title0:s(({value:a,isActive:t})=>[n("Question")]),title1:s(({value:a,isActive:t})=>[n("Solution")]),tab0:s(({value:a,isActive:t})=>[Wn]),tab1:s(({value:a,isActive:t})=>[Zn]),_:1}),es,e("p",null,[n("For the input file "),l(o,{icon:"fa-brands fa-markdown"}),n(),ns,n(", replace all occurrences of "),ss,n(" (irrespective of case) with "),as,n(". But, do not replace any matches between ```ruby and ``` lines ("),ts,n(" in these markers shouldn't be replaced either). Save the output in "),l(o,{icon:"fa-brands fa-markdown"}),n(),ls,n(".")]),l(c,{id:"463",data:[{id:"Question"},{id:"Solution"}],active:0},{title0:s(({value:a,isActive:t})=>[n("Question")]),title1:s(({value:a,isActive:t})=>[n("Solution")]),tab0:s(({value:a,isActive:t})=>[is]),tab1:s(({value:a,isActive:t})=>[cs]),_:1}),os,e("p",null,[n("For the input file "),l(o,{icon:"fas fa-file-lines"}),n(),rs,n(", delete the line that comes after a whole line containing "),ds,n(". Assume that such lines won't occur consecutively.")]),ms,l(c,{id:"478",data:[{id:"Question"},{id:"Solution"}],active:0},{title0:s(({value:a,isActive:t})=>[n("Question")]),title1:s(({value:a,isActive:t})=>[n("Solution")]),tab0:s(({value:a,isActive:t})=>[us]),tab1:s(({value:a,isActive:t})=>[ps,hs]),_:1}),vs,e("p",null,[n("For the input file "),l(o,{icon:"fas fa-file-csv"}),n(),bs,n(", use "),ks,n(" to separate entries with the same name in the first column. Assume that the lines with the same first column value will always be next to each other.")]),l(c,{id:"497",data:[{id:"Question"},{id:"Solution"}],active:0},{title0:s(({value:a,isActive:t})=>[n("Question")]),title1:s(({value:a,isActive:t})=>[n("Solution")]),tab0:s(({value:a,isActive:t})=>[gs]),tab1:s(({value:a,isActive:t})=>[fs]),_:1}),l(v)])}const Cs=b(w,[["render",_s],["__file","11-processing-multiple-records.html.vue"]]),As=JSON.parse('{"path":"/cli/text-processing-w-gnu-awk/11-processing-multiple-records.html","title":"11. Processing multiple records","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"11. Processing multiple records","description":"Text Processing with GNU awk > 11. Processing multiple records","category":["CLI","Linux"],"tags":["crashcourse","cli","sh","shell","gnu","linux","awk"],"head":[[{"meta":null},{"property":"og:title","content":"Text Processing with GNU awk > 11. Processing multiple records"},{"property":"og:description","content":"11. Processing multiple records"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/cli/text-processing-w-gnu-awk/11-processing-multiple-records.html"}]]},"headers":[{"level":2,"title":"Processing consecutive records","slug":"processing-consecutive-records","link":"#processing-consecutive-records","children":[]},{"level":2,"title":"Context matching","slug":"context-matching","link":"#context-matching","children":[{"level":3,"title":"Case 1","slug":"case-1","link":"#case-1","children":[]},{"level":3,"title":"Case 2","slug":"case-2","link":"#case-2","children":[]},{"level":3,"title":"Case 3","slug":"case-3","link":"#case-3","children":[]},{"level":3,"title":"Case 4","slug":"case-4","link":"#case-4","children":[]},{"level":3,"title":"Case 5","slug":"case-5","link":"#case-5","children":[]}]},{"level":2,"title":"Records bounded by distinct markers","slug":"records-bounded-by-distinct-markers","link":"#records-bounded-by-distinct-markers","children":[{"level":3,"title":"Case 1","slug":"case-1-1","link":"#case-1-1","children":[]},{"level":3,"title":"Case 2","slug":"case-2-1","link":"#case-2-1","children":[]},{"level":3,"title":"Case 3-4","slug":"case-3-4","link":"#case-3-4","children":[]},{"level":3,"title":"Case 5","slug":"case-5-1","link":"#case-5-1","children":[]},{"level":3,"title":"Case 6","slug":"case-6","link":"#case-6","children":[]},{"level":3,"title":"Case 7-8","slug":"case-7-8","link":"#case-7-8","children":[]}]},{"level":2,"title":"Specific blocks","slug":"specific-blocks","link":"#specific-blocks","children":[]},{"level":2,"title":"Broken blocks","slug":"broken-blocks","link":"#broken-blocks","children":[]},{"level":2,"title":"Summary","slug":"summary","link":"#summary","children":[]},{"level":2,"title":"Exercises","slug":"exercises","link":"#exercises","children":[{"level":3,"title":"Exercise 1","slug":"exercise-1","link":"#exercise-1","children":[]},{"level":3,"title":"Exercise 2","slug":"exercise-2","link":"#exercise-2","children":[]},{"level":3,"title":"Exercise 3","slug":"exercise-3","link":"#exercise-3","children":[]},{"level":3,"title":"Exercise 4","slug":"exercise-4","link":"#exercise-4","children":[]},{"level":3,"title":"Exercise 5","slug":"exercise-5","link":"#exercise-5","children":[]},{"level":3,"title":"Exercise 6","slug":"exercise-6","link":"#exercise-6","children":[]},{"level":3,"title":"Exercise 7","slug":"exercise-7","link":"#exercise-7","children":[]},{"level":3,"title":"Exercise 8","slug":"exercise-8","link":"#exercise-8","children":[]}]}],"git":{},"readingTime":{"minutes":10.8,"words":3240},"filePathRelative":"cli/text-processing-w-gnu-awk/11-processing-multiple-records.md","excerpt":"\\n\\n<hr>\\n"}');export{Cs as comp,As as data};
