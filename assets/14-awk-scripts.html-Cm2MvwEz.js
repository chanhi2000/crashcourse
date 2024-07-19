import{_ as v}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as c,o as b,c as k,a as e,t as f,b as s,w as a,n as g,g as _,d as n,e as d}from"./app-Ds0QsEfe.js";const w={},x={id:"frontmatter-title-관련",tabindex:"-1"},y={class:"header-anchor",href:"#frontmatter-title-관련"},E={class:"table-of-contents"},S=e("hr",null,null,-1),R=e("hr",null,null,-1),N=e("p",null,[n("So far, you've only seen how to provide "),e("code",null,"awk"),n(" scripts directly on the command line. In this chapter, you'll see basic examples for executing scripts saved in files.")],-1),A={class:"hint-container info"},T=e("p",{class:"hint-container-title"},"Info",-1),C={href:"https://github.com/learnbyexample/learn_gnuawk/tree/master/example_files",target:"_blank",rel:"noopener noreferrer"},F=e("code",null,"learnbyexample/learn_gnuawk",-1),$=d(`<hr><h2 id="f-option" tabindex="-1"><a class="header-anchor" href="#f-option"><span><code>-f</code> option</span></a></h2><p>The <code>-f</code> command line option allows you to pass the <code>awk</code> script via files instead of writing everything on the command line. Here&#39;s an one-liner seen earlier that&#39;s been converted to a multiline script. Note that <code>;</code> is no longer necessary to separate the commands, newline will do that too.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> buf.awk
<span class="token comment"># /error/{</span>
<span class="token comment">#     f = 1</span>
<span class="token comment">#     buf = $0</span>
<span class="token comment">#     next</span>
<span class="token comment"># }</span>
<span class="token comment"># </span>
<span class="token comment"># f{</span>
<span class="token comment">#     buf = buf ORS $0</span>
<span class="token comment"># }</span>
<span class="token comment"># </span>
<span class="token comment"># /state/{</span>
<span class="token comment">#     if(f)</span>
<span class="token comment">#         print buf</span>
<span class="token comment">#     f = 0</span>
<span class="token comment"># }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),q=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(),e("span",{class:"token parameter variable"},"-f"),n(` buf.awk broken.txt
`),e("span",{class:"token comment"},"# error 2"),n(`
`),e("span",{class:"token comment"},"# 1234"),n(`
`),e("span",{class:"token comment"},"# 6789"),n(`
`),e("span",{class:"token comment"},"# state 1"),n(`
`),e("span",{class:"token comment"},"# error 4"),n(`
`),e("span",{class:"token comment"},"# abcd"),n(`
`),e("span",{class:"token comment"},"# state 3"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),I=d(`<p>Another advantage is that single quotes can be freely used.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&#39;cue us on this example&#39;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token parameter variable">-v</span> <span class="token assign-left variable">q</span><span class="token operator">=</span><span class="token string">&quot;&#39;&quot;</span> <span class="token string">&#39;{gsub(/\\w+/, q &quot;&amp;&quot; q)} 1&#39;</span>
<span class="token comment"># &#39;cue&#39; &#39;us&#39; &#39;on&#39; &#39;this&#39; &#39;example&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,2),P=e("p",null,"the above solution is simpler to write as a script",-1),L=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"cat"),n(` quotes.awk
`),e("span",{class:"token comment"},"# {"),n(`
`),e("span",{class:"token comment"},`#     gsub(/\\w+/, "'&'")`),n(`
`),e("span",{class:"token comment"},"# }"),n(`
`),e("span",{class:"token comment"},"# "),n(`
`),e("span",{class:"token comment"},"# 1"),n(`
`),e("span",{class:"token builtin class-name"},"echo"),n(),e("span",{class:"token string"},"'cue us on this example'"),n(),e("span",{class:"token operator"},"|"),n(),e("span",{class:"token function"},"awk"),n(),e("span",{class:"token parameter variable"},"-f"),n(` quotes.awk
`),e("span",{class:"token comment"},"# 'cue' 'us' 'on' 'this' 'example'"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),O=e("hr",null,null,-1),V=e("h2",{id:"o-option",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#o-option"},[e("span",null,[e("code",null,"-o"),n(" option")])])],-1),B=e("p",null,[n("If the code has been first tried out on the command line, you can use the "),e("code",null,"-o"),n(" option to get a pretty printed version. Output filename can be passed along as an argument to this option. By default, "),e("code",null,"awkprof.out"),n(" will be used as the filename.")],-1),G=e("p",null,[n("adding "),e("code",null,"-o"),n(" after the one-liner has been tested input filenames and "),e("code",null,"-v"),n(" would be simply ignored")],-1),Q=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(),e("span",{class:"token parameter variable"},"-o"),n(),e("span",{class:"token parameter variable"},"-v"),n(),e("span",{class:"token assign-left variable"},"OFS"),e("span",{class:"token operator"},"="),e("span",{class:"token string"},"'\\t'"),n(),e("span",{class:"token string"},`'NR==FNR{r[$1]=$2; next}
       {$(NF+1) = FNR==1 ? "Role" : r[$2]} 1'`),n(` role.txt marks.txt
`),e("span",{class:"token comment"},"# pretty printed version"),n(`
`),e("span",{class:"token function"},"cat"),n(` awkprof.out
`),e("span",{class:"token comment"},"#"),n(`
`),e("span",{class:"token comment"},"# NR == FNR {"),n(`
`),e("span",{class:"token comment"},"#         r[$1] = $2"),n(`
`),e("span",{class:"token comment"},"#         next"),n(`
`),e("span",{class:"token comment"},"# }"),n(`
`),e("span",{class:"token comment"},"# "),n(`
`),e("span",{class:"token comment"},"# {"),n(`
`),e("span",{class:"token comment"},'#         $(NF + 1) = FNR == 1 ? "Role" : r[$2]'),n(`
`),e("span",{class:"token comment"},"# }"),n(`
`),e("span",{class:"token comment"},"# "),n(`
`),e("span",{class:"token comment"},"# 1 {"),n(`
`),e("span",{class:"token comment"},"#         print"),n(`
`),e("span",{class:"token comment"},"# }"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),U=e("p",null,"calling the script. note that other command line options have to be provided as usual",-1),j=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(),e("span",{class:"token parameter variable"},"-v"),n(),e("span",{class:"token assign-left variable"},"OFS"),e("span",{class:"token operator"},"="),e("span",{class:"token string"},"'\\t'"),n(),e("span",{class:"token parameter variable"},"-f"),n(` awkprof.out role.txt marks.txt
`),e("span",{class:"token comment"},"# Dept    Name    Marks   Role"),n(`
`),e("span",{class:"token comment"},"# ECE     Raj     53      class_rep"),n(`
`),e("span",{class:"token comment"},"# ECE     Joel    72      "),n(`
`),e("span",{class:"token comment"},"# EEE     Moi     68      "),n(`
`),e("span",{class:"token comment"},"# CSE     Surya   81      "),n(`
`),e("span",{class:"token comment"},"# EEE     Tia     59      placement_rep"),n(`
`),e("span",{class:"token comment"},"# ECE     Om      92      "),n(`
`),e("span",{class:"token comment"},"# CSE     Amy     67      sports_rep"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),D=d('<hr><h2 id="summary" tabindex="-1"><a class="header-anchor" href="#summary"><span>Summary</span></a></h2><p>So, now you know how to write program files for <code>awk</code> instead of just the one-liners. And about the <code>-o</code> option, which helps to convert complicated one-liners to pretty printed program files.</p><p>Next chapter will discuss a few gotchas and tricks.</p><hr><h2 id="exercises" tabindex="-1"><a class="header-anchor" href="#exercises"><span>Exercises</span></a></h2>',6),J={class:"hint-container info"},K=e("p",{class:"hint-container-title"},"Info",-1),M={href:"https://github.com/learnbyexample/learn_gnuawk/tree/master/exercises",target:"_blank",rel:"noopener noreferrer"},z=e("code",null,"learnbyexample/learn_gnuawk",-1),H=d(`<h3 id="exercise-1" tabindex="-1"><a class="header-anchor" href="#exercise-1"><span>Exercise 1</span></a></h3><p>Before explaining the problem statement, here&#39;s an example of markdown headers and their converted link version. Note the use of <code>-1</code> for the second occurrence of the <code>Summary</code> header. Also note that this sample doesn&#39;t illustrate every rule explained below.</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> Field separators</span>
<span class="token title important"><span class="token punctuation">##</span> Summary</span>
<span class="token title important"><span class="token punctuation">#</span> Gotchas and Tips</span>
<span class="token title important"><span class="token punctuation">##</span> Summary</span>

<span class="token list punctuation">*</span> <span class="token url">[<span class="token content">Field separators</span>](<span class="token url">#field-separators</span>)</span>
  <span class="token list punctuation">*</span> <span class="token url">[<span class="token content">Summary</span>](<span class="token url">#summary</span>)</span>
<span class="token list punctuation">*</span> <span class="token url">[<span class="token content">Gotchas and Tips</span>](<span class="token url">#gotchas-and-tips</span>)</span>
  <span class="token list punctuation">*</span> <span class="token url">[<span class="token content">Summary</span>](<span class="token url">#summary-1</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),W=e("code",null,"gawk.md",-1),X=d("<ul><li>Identify all header lines <ul><li>there are two types of header lines, one starting with <code>#</code> and the other starting with <code>##</code></li><li>lines starting with <code>#</code> inside code blocks defined by ```bash and ``` markers should be ignored</li></ul></li><li>The headers lines should then be converted as per the following rules: <ul><li>content is defined as the portion of the header ignoring the initial <code>#</code> or <code>##</code> characters and the space character</li><li><code>##</code> should be replaced with four spaces and a <code>*</code> character</li><li>else, <code>#</code> should be replaced with <code>*</code> character</li><li>create a copy of the content, change it to all lowercase, replace all space characters with the - character and then enclose it within <code>(#</code> and <code>)</code><ul><li>if there are multiple headers with the same content, append <code>-1</code>, <code>-2</code>, etc respectively for the second header, third header, etc</li></ul></li><li>surround the original content with <code>[]</code> and then append the string obtained from the previous step</li></ul></li><li>Note that the output should have only the converted headers, all other input lines should not be present</li></ul>",1),Y=e("code",null,"toc.awk",-1),Z=e("code",null,"out.md",-1),ee=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(),e("span",{class:"token parameter variable"},"-f"),n(" toc.awk gawk.md "),e("span",{class:"token operator"},">"),n(` out.md
`),e("span",{class:"token function"},"diff"),n(),e("span",{class:"token parameter variable"},"-sq"),n(` out.md toc_expected.md
`),e("span",{class:"token comment"},"# Files out.md and toc_expected.md are identical"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),ne=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"cat"),n(` toc.awk 
`),e("span",{class:"token comment"},"# "),n(`
`),e("span",{class:"token comment"},"# /^```bash$/ {"),n(`
`),e("span",{class:"token comment"},"#     f = 1"),n(`
`),e("span",{class:"token comment"},"# }"),n(`
`),e("span",{class:"token comment"},"# "),n(`
`),e("span",{class:"token comment"},"# /^```$/ {"),n(`
`),e("span",{class:"token comment"},"#     f = 0"),n(`
`),e("span",{class:"token comment"},"# }"),n(`
`),e("span",{class:"token comment"},"# "),n(`
`),e("span",{class:"token comment"},"# !f && /^#+ / {"),n(`
`),e("span",{class:"token comment"},"#     m = tolower($0)"),n(`
`),e("span",{class:"token comment"},'#     a[m]++ && m = m "-" (a[m]-1)'),n(`
`),e("span",{class:"token comment"},'#     sub(/^#+ /, "", m)'),n(`
`),e("span",{class:"token comment"},'#     gsub(/ /, "-", m)'),n(`
`),e("span",{class:"token comment"},"# "),n(`
`),e("span",{class:"token comment"},'#     /^# / ? sub(/^# /, "* ") : sub(/^## /, "    * ")'),n(`
`),e("span",{class:"token comment"},'#     print gensub(/* (.+)/, "* [\\\\1](#" m ")", 1)'),n(`
`),e("span",{class:"token comment"},"# }"),n(`
`),e("span",{class:"token comment"},"# "),n(`
`),e("span",{class:"token function"},"awk"),n(),e("span",{class:"token parameter variable"},"-f"),n(" toc.awk gawk.md "),e("span",{class:"token operator"},">"),n(` out.md
`),e("span",{class:"token function"},"diff"),n(),e("span",{class:"token parameter variable"},"-sq"),n(` out.md toc_expected.md
`),e("span",{class:"token comment"},"# Files out.md and toc_expected.md are identical"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),se=e("h3",{id:"exercise-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#exercise-2"},[e("span",null,"Exercise 2")])],-1),ae=e("code",null,"odd.txt",-1),te=e("code",null,"{}",-1),le=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"cat"),n(` odd.txt
`),e("span",{class:"token comment"},"# "),n(`
`),e("span",{class:"token comment"},"# -oreo-not:a _a2_ roar<=>took%22"),n(`
`),e("span",{class:"token comment"},"# RoaR to wow-"),n(`

`),e("span",{class:"token function"},"awk"),n(),e("span",{class:"token parameter variable"},"-f"),n(` same.awk odd.txt
`),e("span",{class:"token comment"},"#"),n(`
`),e("span",{class:"token comment"},"# -{oreo}-not:{a} _a2_ roar<=>took%22"),n(`
`),e("span",{class:"token comment"},"# {RoaR} to {wow}-"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),ie=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"cat"),n(` odd.txt
`),e("span",{class:"token comment"},"# "),n(`
`),e("span",{class:"token comment"},"# -oreo-not:a _a2_ roar<=>took%22"),n(`
`),e("span",{class:"token comment"},"# RoaR to wow-"),n(`

`),e("span",{class:"token function"},"cat"),n(` same.awk 
`),e("span",{class:"token comment"},"# {"),n(`
`),e("span",{class:"token comment"},"#     c = 0"),n(`
`),e("span",{class:"token comment"},"#     n = split($0, a, /\\W+/, seps)"),n(`
`),e("span",{class:"token comment"},"#     for (i = 1; i <= n; i++) {"),n(`
`),e("span",{class:"token comment"},"#         len = length(a[i])"),n(`
`),e("span",{class:"token comment"},"#         if (len && substr(a[i], 1, 1) == substr(a[i], len) && c++ < 2) {"),n(`
`),e("span",{class:"token comment"},'#             a[i] = "{" a[i] "}"'),n(`
`),e("span",{class:"token comment"},"#         }"),n(`
`),e("span",{class:"token comment"},'#         printf "%s%s", a[i], seps[i]'),n(`
`),e("span",{class:"token comment"},"#     }"),n(`
`),e("span",{class:"token comment"},'#     print ""'),n(`
`),e("span",{class:"token comment"},"# }"),n(`

`),e("span",{class:"token function"},"awk"),n(),e("span",{class:"token parameter variable"},"-f"),n(` same.awk odd.txt
`),e("span",{class:"token comment"},"# "),n(`
`),e("span",{class:"token comment"},"# -{oreo}-not:{a} _a2_ roar<=>took%22"),n(`
`),e("span",{class:"token comment"},"# {RoaR} to {wow}-"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),oe=e("hr",null,null,-1);function ce(p,re){const i=c("router-link"),u=c("VPCard"),o=c("FontIcon"),m=c("ExternalLinkIcon"),r=c("Tabs"),h=c("TagLinks");return b(),k("div",null,[e("h1",x,[e("a",y,[e("span",null,f(p.$frontmatter.title)+" 관련",1)])]),e("nav",E,[e("ul",null,[e("li",null,[s(i,{to:"#f-option"},{default:a(()=>[n("-f option")]),_:1})]),e("li",null,[s(i,{to:"#o-option"},{default:a(()=>[n("-o option")]),_:1})]),e("li",null,[s(i,{to:"#summary"},{default:a(()=>[n("Summary")]),_:1})]),e("li",null,[s(i,{to:"#exercises"},{default:a(()=>[n("Exercises")]),_:1}),e("ul",null,[e("li",null,[s(i,{to:"#exercise-1"},{default:a(()=>[n("Exercise 1")]),_:1})]),e("li",null,[s(i,{to:"#exercise-2"},{default:a(()=>[n("Exercise 2")]),_:1})])])])])]),S,s(u,g(_({title:"14. awk scripts",desc:"CLI Text Processing with GNU awk",link:"https://learnbyexample.github.io/learn_gnuawk/awk-scripts.html",logo:"https://learnbyexample.github.io/favicon.svg",background:"rgba(22, 25, 35, 0.2)"})),null,16),R,N,e("div",A,[T,e("p",null,[n("The "),e("a",C,[n("example_files ("),s(o,{icon:"iconfont icon-github"}),F,n(")"),s(m)]),n(" directory has all the files used in the examples.")])]),$,s(r,{id:"25",data:[{id:"Case 1"}],active:0},{title0:a(({value:t,isActive:l})=>[n("Case 1")]),tab0:a(({value:t,isActive:l})=>[q]),_:1}),I,s(r,{id:"34",data:[{id:"Case 1"}],active:0},{title0:a(({value:t,isActive:l})=>[n("Case 1")]),tab0:a(({value:t,isActive:l})=>[P,L]),_:1}),O,V,B,s(r,{id:"49",data:[{id:"Case 1"}],active:0},{title0:a(({value:t,isActive:l})=>[n("Case 1")]),tab0:a(({value:t,isActive:l})=>[G,Q,U,j]),_:1}),D,e("div",J,[K,e("p",null,[n("The "),e("a",M,[n("exercises ("),s(o,{icon:"iconfont icon-github"}),z,n(")"),s(m)]),n(" directory has all the files used in this section.")])]),H,e("p",null,[n("For the input file "),s(o,{icon:"fa-brands fa-markdown"}),n(),W,n(", construct a Table of Content section as per the details described below:")]),X,e("p",null,[n("The script file should be named as "),s(o,{icon:"fas fa-file-lines"}),n(),Y,n(" and save the output in "),s(o,{icon:"fa-brands fa-markdown"}),n(),Z,n(".")]),s(r,{id:"156",data:[{id:"Question"},{id:"Solution"}],active:0},{title0:a(({value:t,isActive:l})=>[n("Question")]),title1:a(({value:t,isActive:l})=>[n("Solution")]),tab0:a(({value:t,isActive:l})=>[ee]),tab1:a(({value:t,isActive:l})=>[ne]),_:1}),se,e("p",null,[n("For the input file "),s(o,{icon:"fas fa-file-lines"}),n(),ae,n(", surround the first two whole words of each line with "),te,n(" that start and end with the same word character. Assume that the input file will not require case insensitive comparison. This is a contrived exercise that needs around 10 instructions and makes you use various features presented in this book.")]),s(r,{id:"170",data:[{id:"Question"},{id:"Solution"}],active:0},{title0:a(({value:t,isActive:l})=>[n("Question")]),title1:a(({value:t,isActive:l})=>[n("Solution")]),tab0:a(({value:t,isActive:l})=>[le]),tab1:a(({value:t,isActive:l})=>[ie]),_:1}),oe,s(h)])}const pe=v(w,[["render",ce],["__file","14-awk-scripts.html.vue"]]),ue=JSON.parse('{"path":"/cli/text-processing-w-gnu-awk/14-awk-scripts.html","title":"14. awk scripts","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"14. awk scripts","description":"Text Processing with GNU awk > 14. awk scripts","category":["CLI","Linux"],"tag":["crashcourse","cli","sh","shell","gnu","linux","awk"],"head":[[{"meta":null},{"property":"og:title","content":"Text Processing with GNU awk > 14. awk scripts"},{"property":"og:description","content":"14. awk scripts"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/cli/text-processing-w-gnu-awk/14-awk-scripts.html"}]],"isOriginal":false,"cover":"https://raw.githubusercontent.com/learnbyexample/learn_gnuawk/master/images/gawk_ls.png"},"headers":[{"level":2,"title":"-f option","slug":"f-option","link":"#f-option","children":[]},{"level":2,"title":"-o option","slug":"o-option","link":"#o-option","children":[]},{"level":2,"title":"Summary","slug":"summary","link":"#summary","children":[]},{"level":2,"title":"Exercises","slug":"exercises","link":"#exercises","children":[{"level":3,"title":"Exercise 1","slug":"exercise-1","link":"#exercise-1","children":[]},{"level":3,"title":"Exercise 2","slug":"exercise-2","link":"#exercise-2","children":[]}]}],"git":{},"readingTime":{"minutes":3.57,"words":1072},"filePathRelative":"cli/text-processing-w-gnu-awk/14-awk-scripts.md","excerpt":"\\n\\n<hr>\\n"}');export{pe as comp,ue as data};
