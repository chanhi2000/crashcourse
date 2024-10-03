import{_ as h}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as b,a as s,t as k,b as a,w as e,n as v,g,d as n,e as p,r,o as f}from"./app-U_bew1in.js";const _={},w={id:"frontmatter-title-관련",tabindex:"-1"},x={class:"header-anchor",href:"#frontmatter-title-관련"},y={class:"table-of-contents"},T=s("hr",null,null,-1),E=s("hr",null,null,-1),R=s("p",null,[n("So far, you've only seen how to provide "),s("code",null,"awk"),n(" scripts directly on the command line. In this chapter, you'll see basic examples for executing scripts saved in files.")],-1),S={class:"hint-container info"},N=s("p",{class:"hint-container-title"},"Info",-1),A={href:"https://github.com/learnbyexample/learn_gnuawk/tree/master/example_files",target:"_blank",rel:"noopener noreferrer"},C=s("code",null,"learnbyexample/learn_gnuawk",-1),F=p(`<hr><h2 id="f-option" tabindex="-1"><a class="header-anchor" href="#f-option"><span><code>-f</code> option</span></a></h2><p>The <code>-f</code> command line option allows you to pass the <code>awk</code> script via files instead of writing everything on the command line. Here&#39;s an one-liner seen earlier that&#39;s been converted to a multiline script. Note that <code>;</code> is no longer necessary to separate the commands, newline will do that too.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">cat</span> buf.awk</span>
<span class="line"><span class="token comment"># /error/{</span></span>
<span class="line"><span class="token comment">#     f = 1</span></span>
<span class="line"><span class="token comment">#     buf = $0</span></span>
<span class="line"><span class="token comment">#     next</span></span>
<span class="line"><span class="token comment"># }</span></span>
<span class="line"><span class="token comment"># </span></span>
<span class="line"><span class="token comment"># f{</span></span>
<span class="line"><span class="token comment">#     buf = buf ORS $0</span></span>
<span class="line"><span class="token comment"># }</span></span>
<span class="line"><span class="token comment"># </span></span>
<span class="line"><span class="token comment"># /state/{</span></span>
<span class="line"><span class="token comment">#     if(f)</span></span>
<span class="line"><span class="token comment">#         print buf</span></span>
<span class="line"><span class="token comment">#     f = 0</span></span>
<span class="line"><span class="token comment"># }</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),$=s("div",{class:"language-bash line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{class:"token function"},"awk"),n(),s("span",{class:"token parameter variable"},"-f"),n(" buf.awk broken.txt")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# error 2")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# 1234")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# 6789")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# state 1")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# error 4")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# abcd")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# state 3")]),n(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),j=p(`<p>Another advantage is that single quotes can be freely used.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&#39;cue us on this example&#39;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token parameter variable">-v</span> <span class="token assign-left variable">q</span><span class="token operator">=</span><span class="token string">&quot;&#39;&quot;</span> <span class="token string">&#39;{gsub(/\\w+/, q &quot;&amp;&quot; q)} 1&#39;</span></span>
<span class="line"><span class="token comment"># &#39;cue&#39; &#39;us&#39; &#39;on&#39; &#39;this&#39; &#39;example&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,2),q=s("p",null,"the above solution is simpler to write as a script",-1),I=s("div",{class:"language-bash line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{class:"token function"},"cat"),n(" quotes.awk")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# {")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},`#     gsub(/\\w+/, "'&'")`)]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# }")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# ")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# 1")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},"'cue us on this example'"),n(),s("span",{class:"token operator"},"|"),n(),s("span",{class:"token function"},"awk"),n(),s("span",{class:"token parameter variable"},"-f"),n(" quotes.awk")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# 'cue' 'us' 'on' 'this' 'example'")]),n(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),P=s("hr",null,null,-1),O=s("h2",{id:"o-option",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#o-option"},[s("span",null,[s("code",null,"-o"),n(" option")])])],-1),G=s("p",null,[n("If the code has been first tried out on the command line, you can use the "),s("code",null,"-o"),n(" option to get a pretty printed version. Output filename can be passed along as an argument to this option. By default, "),s("code",null,"awkprof.out"),n(" will be used as the filename.")],-1),V=s("p",null,[n("adding "),s("code",null,"-o"),n(" after the one-liner has been tested input filenames and "),s("code",null,"-v"),n(" would be simply ignored")],-1),B=s("div",{class:"language-bash line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{class:"token function"},"awk"),n(),s("span",{class:"token parameter variable"},"-o"),n(),s("span",{class:"token parameter variable"},"-v"),n(),s("span",{class:"token assign-left variable"},"OFS"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},"'\\t'"),n(),s("span",{class:"token string"},"'NR==FNR{r[$1]=$2; next}"),n(`
`),s("span",{class:"line"},`       {$(NF+1) = FNR==1 ? "Role" : r[$2]} 1'`),n(" role.txt marks.txt")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# pretty printed version")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token function"},"cat"),n(" awkprof.out")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"#")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# NR == FNR {")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"#         r[$1] = $2")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"#         next")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# }")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# ")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# {")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},'#         $(NF + 1) = FNR == 1 ? "Role" : r[$2]')]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# }")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# ")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# 1 {")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"#         print")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# }")]),n(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),L=s("p",null,"calling the script. note that other command line options have to be provided as usual",-1),Q=s("div",{class:"language-bash line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{class:"token function"},"awk"),n(),s("span",{class:"token parameter variable"},"-v"),n(),s("span",{class:"token assign-left variable"},"OFS"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},"'\\t'"),n(),s("span",{class:"token parameter variable"},"-f"),n(" awkprof.out role.txt marks.txt")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# Dept    Name    Marks   Role")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# ECE     Raj     53      class_rep")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# ECE     Joel    72      ")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# EEE     Moi     68      ")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# CSE     Surya   81      ")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# EEE     Tia     59      placement_rep")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# ECE     Om      92      ")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# CSE     Amy     67      sports_rep")]),n(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),U=p('<hr><h2 id="summary" tabindex="-1"><a class="header-anchor" href="#summary"><span>Summary</span></a></h2><p>So, now you know how to write program files for <code>awk</code> instead of just the one-liners. And about the <code>-o</code> option, which helps to convert complicated one-liners to pretty printed program files.</p><p>Next chapter will discuss a few gotchas and tricks.</p><hr><h2 id="exercises" tabindex="-1"><a class="header-anchor" href="#exercises"><span>Exercises</span></a></h2>',6),D={class:"hint-container info"},K=s("p",{class:"hint-container-title"},"Info",-1),M={href:"https://github.com/learnbyexample/learn_gnuawk/tree/master/exercises",target:"_blank",rel:"noopener noreferrer"},Z=s("code",null,"learnbyexample/learn_gnuawk",-1),z=p(`<h3 id="exercise-1" tabindex="-1"><a class="header-anchor" href="#exercise-1"><span>Exercise 1</span></a></h3><p>Before explaining the problem statement, here&#39;s an example of markdown headers and their converted link version. Note the use of <code>-1</code> for the second occurrence of the <code>Summary</code> header. Also note that this sample doesn&#39;t illustrate every rule explained below.</p><div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre><code><span class="line"><span class="token title important"><span class="token punctuation">#</span> Field separators</span></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> Summary</span></span>
<span class="line"><span class="token title important"><span class="token punctuation">#</span> Gotchas and Tips</span></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> Summary</span></span>
<span class="line"></span>
<span class="line"><span class="token list punctuation">*</span> <span class="token url">[<span class="token content">Field separators</span>](<span class="token url">#field-separators</span>)</span></span>
<span class="line">  <span class="token list punctuation">*</span> <span class="token url">[<span class="token content">Summary</span>](<span class="token url">#summary</span>)</span></span>
<span class="line"><span class="token list punctuation">*</span> <span class="token url">[<span class="token content">Gotchas and Tips</span>](<span class="token url">#gotchas-and-tips</span>)</span></span>
<span class="line">  <span class="token list punctuation">*</span> <span class="token url">[<span class="token content">Summary</span>](<span class="token url">#summary-1</span>)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),J=s("code",null,"gawk.md",-1),H=p("<ul><li>Identify all header lines <ul><li>there are two types of header lines, one starting with <code>#</code> and the other starting with <code>##</code></li><li>lines starting with <code>#</code> inside code blocks defined by ```bash and ``` markers should be ignored</li></ul></li><li>The headers lines should then be converted as per the following rules: <ul><li>content is defined as the portion of the header ignoring the initial <code>#</code> or <code>##</code> characters and the space character</li><li><code>##</code> should be replaced with four spaces and a <code>*</code> character</li><li>else, <code>#</code> should be replaced with <code>*</code> character</li><li>create a copy of the content, change it to all lowercase, replace all space characters with the - character and then enclose it within <code>(#</code> and <code>)</code><ul><li>if there are multiple headers with the same content, append <code>-1</code>, <code>-2</code>, etc respectively for the second header, third header, etc</li></ul></li><li>surround the original content with <code>[]</code> and then append the string obtained from the previous step</li></ul></li><li>Note that the output should have only the converted headers, all other input lines should not be present</li></ul>",1),W=s("code",null,"toc.awk",-1),X=s("code",null,"out.md",-1),Y=s("div",{class:"language-bash line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{class:"token function"},"awk"),n(),s("span",{class:"token parameter variable"},"-f"),n(" toc.awk gawk.md "),s("span",{class:"token operator"},">"),n(" out.md")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token function"},"diff"),n(),s("span",{class:"token parameter variable"},"-sq"),n(" out.md toc_expected.md")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# Files out.md and toc_expected.md are identical")]),n(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),ss=s("div",{class:"language-bash line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{class:"token function"},"cat"),n(" toc.awk ")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# ")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# /^```bash$/ {")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"#     f = 1")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# }")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# ")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# /^```$/ {")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"#     f = 0")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# }")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# ")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# !f && /^#+ / {")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"#     m = tolower($0)")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},'#     a[m]++ && m = m "-" (a[m]-1)')]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},'#     sub(/^#+ /, "", m)')]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},'#     gsub(/ /, "-", m)')]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# ")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},'#     /^# / ? sub(/^# /, "* ") : sub(/^## /, "    * ")')]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},'#     print gensub(/* (.+)/, "* [\\\\1](#" m ")", 1)')]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# }")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# ")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token function"},"awk"),n(),s("span",{class:"token parameter variable"},"-f"),n(" toc.awk gawk.md "),s("span",{class:"token operator"},">"),n(" out.md")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token function"},"diff"),n(),s("span",{class:"token parameter variable"},"-sq"),n(" out.md toc_expected.md")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# Files out.md and toc_expected.md are identical")]),n(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),ns=s("h3",{id:"exercise-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#exercise-2"},[s("span",null,"Exercise 2")])],-1),es=s("code",null,"odd.txt",-1),as=s("code",null,"{}",-1),ls=s("div",{class:"language-bash line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{class:"token function"},"cat"),n(" odd.txt")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# ")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# -oreo-not:a _a2_ roar<=>took%22")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# RoaR to wow-")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{class:"token function"},"awk"),n(),s("span",{class:"token parameter variable"},"-f"),n(" same.awk odd.txt")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"#")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# -{oreo}-not:{a} _a2_ roar<=>took%22")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# {RoaR} to {wow}-")]),n(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),ts=s("div",{class:"language-bash line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{class:"token function"},"cat"),n(" odd.txt")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# ")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# -oreo-not:a _a2_ roar<=>took%22")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# RoaR to wow-")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{class:"token function"},"cat"),n(" same.awk ")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# {")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"#     c = 0")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"#     n = split($0, a, /\\W+/, seps)")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"#     for (i = 1; i <= n; i++) {")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"#         len = length(a[i])")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"#         if (len && substr(a[i], 1, 1) == substr(a[i], len) && c++ < 2) {")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},'#             a[i] = "{" a[i] "}"')]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"#         }")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},'#         printf "%s%s", a[i], seps[i]')]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"#     }")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},'#     print ""')]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# }")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{class:"token function"},"awk"),n(),s("span",{class:"token parameter variable"},"-f"),n(" same.awk odd.txt")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# ")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# -{oreo}-not:{a} _a2_ roar<=>took%22")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# {RoaR} to {wow}-")]),n(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),is=s("hr",null,null,-1);function cs(m,os){const i=r("router-link"),d=r("VPCard"),c=r("FontIcon"),o=r("Tabs"),u=r("TagLinks");return f(),b("div",null,[s("h1",w,[s("a",x,[s("span",null,k(m.$frontmatter.title)+" 관련",1)])]),s("nav",y,[s("ul",null,[s("li",null,[a(i,{to:"#f-option"},{default:e(()=>[n("-f option")]),_:1})]),s("li",null,[a(i,{to:"#o-option"},{default:e(()=>[n("-o option")]),_:1})]),s("li",null,[a(i,{to:"#summary"},{default:e(()=>[n("Summary")]),_:1})]),s("li",null,[a(i,{to:"#exercises"},{default:e(()=>[n("Exercises")]),_:1}),s("ul",null,[s("li",null,[a(i,{to:"#exercise-1"},{default:e(()=>[n("Exercise 1")]),_:1})]),s("li",null,[a(i,{to:"#exercise-2"},{default:e(()=>[n("Exercise 2")]),_:1})])])])])]),T,a(d,v(g({title:"14. awk scripts",desc:"CLI Text Processing with GNU awk",link:"https://learnbyexample.github.io/learn_gnuawk/awk-scripts.html",logo:"https://learnbyexample.github.io/favicon.svg",background:"rgba(22, 25, 35, 0.2)"})),null,16),E,R,s("div",S,[N,s("p",null,[n("The "),s("a",A,[n("example_files ("),a(c,{icon:"iconfont icon-github"}),C,n(")")]),n(" directory has all the files used in the examples.")])]),F,a(o,{id:"25",data:[{id:"Case 1"}],active:0},{title0:e(({value:l,isActive:t})=>[n("Case 1")]),tab0:e(({value:l,isActive:t})=>[$]),_:1}),j,a(o,{id:"34",data:[{id:"Case 1"}],active:0},{title0:e(({value:l,isActive:t})=>[n("Case 1")]),tab0:e(({value:l,isActive:t})=>[q,I]),_:1}),P,O,G,a(o,{id:"49",data:[{id:"Case 1"}],active:0},{title0:e(({value:l,isActive:t})=>[n("Case 1")]),tab0:e(({value:l,isActive:t})=>[V,B,L,Q]),_:1}),U,s("div",D,[K,s("p",null,[n("The "),s("a",M,[n("exercises ("),a(c,{icon:"iconfont icon-github"}),Z,n(")")]),n(" directory has all the files used in this section.")])]),z,s("p",null,[n("For the input file "),a(c,{icon:"fa-brands fa-markdown"}),n(),J,n(", construct a Table of Content section as per the details described below:")]),H,s("p",null,[n("The script file should be named as "),a(c,{icon:"fas fa-file-lines"}),n(),W,n(" and save the output in "),a(c,{icon:"fa-brands fa-markdown"}),n(),X,n(".")]),a(o,{id:"156",data:[{id:"Question"},{id:"Solution"}],active:0},{title0:e(({value:l,isActive:t})=>[n("Question")]),title1:e(({value:l,isActive:t})=>[n("Solution")]),tab0:e(({value:l,isActive:t})=>[Y]),tab1:e(({value:l,isActive:t})=>[ss]),_:1}),ns,s("p",null,[n("For the input file "),a(c,{icon:"fas fa-file-lines"}),n(),es,n(", surround the first two whole words of each line with "),as,n(" that start and end with the same word character. Assume that the input file will not require case insensitive comparison. This is a contrived exercise that needs around 10 instructions and makes you use various features presented in this book.")]),a(o,{id:"170",data:[{id:"Question"},{id:"Solution"}],active:0},{title0:e(({value:l,isActive:t})=>[n("Question")]),title1:e(({value:l,isActive:t})=>[n("Solution")]),tab0:e(({value:l,isActive:t})=>[ls]),tab1:e(({value:l,isActive:t})=>[ts]),_:1}),is,a(u)])}const ms=h(_,[["render",cs],["__file","14-awk-scripts.html.vue"]]),ds=JSON.parse('{"path":"/cli/text-processing-w-gnu-awk/14-awk-scripts.html","title":"14. awk scripts","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"14. awk scripts","description":"Text Processing with GNU awk > 14. awk scripts","category":["CLI","Linux"],"tag":["crashcourse","cli","sh","shell","gnu","linux","awk"],"head":[[{"meta":null},{"property":"og:title","content":"Text Processing with GNU awk > 14. awk scripts"},{"property":"og:description","content":"14. awk scripts"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/cli/text-processing-w-gnu-awk/14-awk-scripts.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/crashcourse/cli/text-processing-w-gnu-awk/14-awk-scripts.html"}],["meta",{"property":"og:site_name","content":"🥁Crashcourse"}],["meta",{"property":"og:title","content":"14. awk scripts"}],["meta",{"property":"og:description","content":"Text Processing with GNU awk > 14. awk scripts"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://raw.githubusercontent.com/learnbyexample/learn_gnuawk/master/images/gawk_ls.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-10-03T01:20:13.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://raw.githubusercontent.com/learnbyexample/learn_gnuawk/master/images/gawk_ls.png"}],["meta",{"name":"twitter:image:alt","content":"14. awk scripts"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"cli"}],["meta",{"property":"article:tag","content":"sh"}],["meta",{"property":"article:tag","content":"shell"}],["meta",{"property":"article:tag","content":"gnu"}],["meta",{"property":"article:tag","content":"linux"}],["meta",{"property":"article:tag","content":"awk"}],["meta",{"property":"article:modified_time","content":"2024-10-03T01:20:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"14. awk scripts\\",\\"image\\":[\\"https://raw.githubusercontent.com/learnbyexample/learn_gnuawk/master/images/gawk_ls.png\\"],\\"dateModified\\":\\"2024-10-03T01:20:13.000Z\\",\\"author\\":[]}"]],"isOriginal":false,"cover":"https://raw.githubusercontent.com/learnbyexample/learn_gnuawk/master/images/gawk_ls.png"},"headers":[{"level":2,"title":"-f option","slug":"f-option","link":"#f-option","children":[]},{"level":2,"title":"-o option","slug":"o-option","link":"#o-option","children":[]},{"level":2,"title":"Summary","slug":"summary","link":"#summary","children":[]},{"level":2,"title":"Exercises","slug":"exercises","link":"#exercises","children":[{"level":3,"title":"Exercise 1","slug":"exercise-1","link":"#exercise-1","children":[]},{"level":3,"title":"Exercise 2","slug":"exercise-2","link":"#exercise-2","children":[]}]}],"git":{"createdTime":1703642364000,"updatedTime":1727918413000,"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":9}]},"readingTime":{"minutes":3.57,"words":1072},"filePathRelative":"cli/text-processing-w-gnu-awk/14-awk-scripts.md","localizedDate":"2023년 12월 27일","excerpt":"\\n\\n<hr>\\n"}');export{ms as comp,ds as data};