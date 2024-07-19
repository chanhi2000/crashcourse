import{_ as b}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as d,o as v,c as k,a as e,t as g,b as l,w as s,n as _,g as f,d as n,e as r}from"./app-Ds0QsEfe.js";const w={},x={id:"frontmatter-title-관련",tabindex:"-1"},y={class:"header-anchor",href:"#frontmatter-title-관련"},A={class:"table-of-contents"},C=e("hr",null,null,-1),$=e("hr",null,null,-1),F=e("p",null,[n("Often, you need to eliminate duplicates from an input file. This could be based on the entire line content or based on certain fields. These are typically solved with the "),e("code",null,"sort"),n(" and "),e("code",null,"uniq"),n(" commands. Advantages with "),e("code",null,"awk"),n(" include regexp based field and record separators, input doesn't have to be sorted, and in general more flexibility because it is a programming language.")],-1),N={class:"hint-container info"},T=e("p",{class:"hint-container-title"},"Info",-1),E={href:"https://github.com/learnbyexample/learn_gnuawk/tree/master/example_files",target:"_blank",rel:"noopener noreferrer"},S=r(`<hr><h2 id="whole-line-duplicates" tabindex="-1"><a class="header-anchor" href="#whole-line-duplicates"><span>Whole line duplicates</span></a></h2><p><code>awk &#39;!a[$0]++&#39;</code> is one of the most famous <code>awk</code> one-liners. It eliminates line based duplicates while retaining the input order. The following example shows it in action along with an illustration of how the logic works.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> purchases.txt
<span class="token comment"># coffee</span>
<span class="token comment"># tea</span>
<span class="token comment"># washing powder</span>
<span class="token comment"># coffee</span>
<span class="token comment"># toothpaste</span>
<span class="token comment"># tea</span>
<span class="token comment"># soap</span>
<span class="token comment"># tea</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),R=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(),e("span",{class:"token string"},`'{print +a[$0] "\\t" $0; a[$0]++}'`),n(` purchases.txt
`),e("span",{class:"token comment"},"# 0       coffee"),n(`
`),e("span",{class:"token comment"},"# 0       tea"),n(`
`),e("span",{class:"token comment"},"# 0       washing powder"),n(`
`),e("span",{class:"token comment"},"# 1       coffee"),n(`
`),e("span",{class:"token comment"},"# 0       toothpaste"),n(`
`),e("span",{class:"token comment"},"# 1       tea"),n(`
`),e("span",{class:"token comment"},"# 0       soap"),n(`
`),e("span",{class:"token comment"},"# 2       tea"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),I=e("p",null,"only those entries with zero in first column will be retained",-1),D=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(),e("span",{class:"token string"},"'!a[$0]++'"),n(` purchases.txt
`),e("span",{class:"token comment"},"# coffee"),n(`
`),e("span",{class:"token comment"},"# tea"),n(`
`),e("span",{class:"token comment"},"# washing powder"),n(`
`),e("span",{class:"token comment"},"# toothpaste"),n(`
`),e("span",{class:"token comment"},"# soap"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),q={class:"hint-container info"},P=e("p",{class:"hint-container-title"},"Info",-1),L={href:"https://github.com/koraa/huniq",target:"_blank",rel:"noopener noreferrer"},G=r(`<hr><h2 id="column-wise-duplicates" tabindex="-1"><a class="header-anchor" href="#column-wise-duplicates"><span>Column wise duplicates</span></a></h2><p>Removing field based duplicates is simple for a single field comparison. Just change $0 to the required field number after setting the appropriate field separator.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> duplicates.txt
<span class="token comment"># brown,toy,bread,42</span>
<span class="token comment"># dark red,ruby,rose,111</span>
<span class="token comment"># blue,ruby,water,333</span>
<span class="token comment"># dark red,sky,rose,555</span>
<span class="token comment"># yellow,toy,flower,333</span>
<span class="token comment"># white,sky,bread,111</span>
<span class="token comment"># light red,purse,rose,333</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),Q=e("p",null,"based on the last field",-1),V=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(" -F, "),e("span",{class:"token string"},"'!seen[$NF]++'"),n(` duplicates.txt
`),e("span",{class:"token comment"},"# brown,toy,bread,42"),n(`
`),e("span",{class:"token comment"},"# dark red,ruby,rose,111"),n(`
`),e("span",{class:"token comment"},"# blue,ruby,water,333"),n(`
`),e("span",{class:"token comment"},"# dark red,sky,rose,555"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),B=e("p",null,[n("For multiple fields comparison, separate the fields with "),e("code",null,","),n(" so that "),e("code",null,"SUBSEP"),n(" is used to combine the field values to generate the key. As mentioned before, "),e("code",null,"SUBSEP"),n(" has a default value of "),e("code",null,"\\034"),n(" non-printing character, which is typically not used in text files.")],-1),U=e("p",null,"based on the first and third fields",-1),O=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(" -F, "),e("span",{class:"token string"},"'!seen[$1,$3]++'"),n(` duplicates.txt
`),e("span",{class:"token comment"},"# brown,toy,bread,42"),n(`
`),e("span",{class:"token comment"},"# dark red,ruby,rose,111"),n(`
`),e("span",{class:"token comment"},"# blue,ruby,water,333"),n(`
`),e("span",{class:"token comment"},"# yellow,toy,flower,333"),n(`
`),e("span",{class:"token comment"},"# white,sky,bread,111"),n(`
`),e("span",{class:"token comment"},"# light red,purse,rose,333"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),W=e("hr",null,null,-1),z=e("h2",{id:"duplicate-count",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#duplicate-count"},[e("span",null,"Duplicate count")])],-1),J=e("p",null,"In this section, how many times a duplicate record is found plays a role in determining the output.",-1),K=e("p",null,"First up, printing only a specific numbered duplicate.",-1),H=e("p",null,"print only the second occurrence of duplicates based on the second field",-1),M=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(" -F, "),e("span",{class:"token string"},"'++seen[$2]==2'"),n(` duplicates.txt
`),e("span",{class:"token comment"},"# blue,ruby,water,333"),n(`
`),e("span",{class:"token comment"},"# yellow,toy,flower,333"),n(`
`),e("span",{class:"token comment"},"# white,sky,bread,111"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),j=e("p",null,"print only the third occurrence of duplicates based on the last field",-1),X=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(" -F, "),e("span",{class:"token string"},"'++seen[$NF]==3'"),n(` duplicates.txt
`),e("span",{class:"token comment"},"# light red,purse,rose,333"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),Y=e("p",null,[n("Next, printing only the last copy of duplicates. Since the count isn't known, the "),e("code",null,"tac"),n(" command comes in handy again.")],-1),Z=e("p",null,"reverse the input line-wise, retain first copy and then reverse again",-1),ee=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"tac"),n(" duplicates.txt "),e("span",{class:"token operator"},"|"),n(),e("span",{class:"token function"},"awk"),n(" -F, "),e("span",{class:"token string"},"'!seen[$NF]++'"),n(),e("span",{class:"token operator"},"|"),n(),e("span",{class:"token function"},"tac"),n(`
`),e("span",{class:"token comment"},"# brown,toy,bread,42"),n(`
`),e("span",{class:"token comment"},"# dark red,sky,rose,555"),n(`
`),e("span",{class:"token comment"},"# white,sky,bread,111"),n(`
`),e("span",{class:"token comment"},"# light red,purse,rose,333"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),ne=e("p",null,"To get all the records based on a duplicate count, you can pass the input file twice. Then use the two file processing trick to make decisions.",-1),se=e("p",null,"all duplicates based on the last column",-1),ae=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(" -F, "),e("span",{class:"token string"},"'NR==FNR{a[$NF]++; next} a[$NF]>1'"),n(` duplicates.txt duplicates.txt
`),e("span",{class:"token comment"},"# dark red,ruby,rose,111"),n(`
`),e("span",{class:"token comment"},"# blue,ruby,water,333"),n(`
`),e("span",{class:"token comment"},"# yellow,toy,flower,333"),n(`
`),e("span",{class:"token comment"},"# white,sky,bread,111"),n(`
`),e("span",{class:"token comment"},"# light red,purse,rose,333"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),te=e("p",null,"all duplicates based on the last column, minimum 3 duplicates",-1),le=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(" -F, "),e("span",{class:"token string"},"'NR==FNR{a[$NF]++; next} a[$NF]>2'"),n(` duplicates.txt duplicates.txt
`),e("span",{class:"token comment"},"# blue,ruby,water,333"),n(`
`),e("span",{class:"token comment"},"# yellow,toy,flower,333"),n(`
`),e("span",{class:"token comment"},"# light red,purse,rose,333"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),ie=e("p",null,"only unique lines based on the third column",-1),ce=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(" -F, "),e("span",{class:"token string"},"'NR==FNR{a[$3]++; next} a[$3]==1'"),n(` duplicates.txt duplicates.txt
`),e("span",{class:"token comment"},"# blue,ruby,water,333"),n(`
`),e("span",{class:"token comment"},"# yellow,toy,flower,333"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),oe=r('<hr><h2 id="summary" tabindex="-1"><a class="header-anchor" href="#summary"><span>Summary</span></a></h2><p>This chapter showed how to work with duplicate contents for records and fields. If you don&#39;t need regexp based separators and if your input is too big to handle, then specialized command line tools like <code>sort</code> and <code>uniq</code> will be better suited compared to <code>awk</code>.</p><p>Next chapter will show how to write <code>awk</code> scripts instead of the usual one-liners.</p><hr><h2 id="exercises" tabindex="-1"><a class="header-anchor" href="#exercises"><span>Exercises</span></a></h2>',6),de={class:"hint-container info"},re=e("p",{class:"hint-container-title"},"Info",-1),ue={href:"https://github.com/learnbyexample/learn_gnuawk/tree/master/exercises",target:"_blank",rel:"noopener noreferrer"},me=e("h3",{id:"exercise-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#exercise-1"},[e("span",null,"Exercise 1")])],-1),he=e("code",null,"lines.txt",-1),pe=e("code",null,"hi there",-1),be=e("code",null,"HI TheRE",-1),ve=r(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> lines.txt
<span class="token comment"># Go There</span>
<span class="token comment"># come on</span>
<span class="token comment"># go there</span>
<span class="token comment"># ---</span>
<span class="token comment"># 2 apples and 5 mangoes</span>
<span class="token comment"># come on!</span>
<span class="token comment"># ---</span>
<span class="token comment"># 2 Apples</span>
<span class="token comment"># COME ON</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),ke=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(),e("span",{class:"token comment"},"##### add your solution here"),n(`
Go There
come on
---
`),e("span",{class:"token number"},"2"),n(" apples and "),e("span",{class:"token number"},"5"),n(` mangoes
come on`),e("span",{class:"token operator"},"!"),n(`
`),e("span",{class:"token number"},"2"),n(` Apples
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),ge=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(),e("span",{class:"token string"},"'!seen[tolower($0)]++'"),n(` lines.txt
`),e("span",{class:"token comment"},"# Go There"),n(`
`),e("span",{class:"token comment"},"# come on"),n(`
`),e("span",{class:"token comment"},"# ---"),n(`
`),e("span",{class:"token comment"},"# 2 apples and 5 mangoes"),n(`
`),e("span",{class:"token comment"},"# come on!"),n(`
`),e("span",{class:"token comment"},"# 2 Apples"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),_e=e("h3",{id:"exercise-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#exercise-2"},[e("span",null,"Exercise 2")])],-1),fe=e("code",null,"twos.txt",-1),we=e("code",null,"hehe haha",-1),xe=e("code",null,"haha hehe",-1),ye=r(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> twos.txt
<span class="token comment"># hehe haha</span>
<span class="token comment"># door floor</span>
<span class="token comment"># haha hehe</span>
<span class="token comment"># 6;8 3-4</span>
<span class="token comment"># true blue</span>
<span class="token comment"># hehe bebe</span>
<span class="token comment"># floor door</span>
<span class="token comment"># 3-4 6;8</span>
<span class="token comment"># tru eblue</span>
<span class="token comment"># haha hehe</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),Ae=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(),e("span",{class:"token comment"},"##### add your solution here"),n(`
`),e("span",{class:"token comment"},"# hehe haha"),n(`
`),e("span",{class:"token comment"},"# door floor"),n(`
`),e("span",{class:"token comment"},"# 6;8 3-4"),n(`
`),e("span",{class:"token comment"},"# true blue"),n(`
`),e("span",{class:"token comment"},"# hehe bebe"),n(`
`),e("span",{class:"token comment"},"# tru eblue"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),Ce=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(),e("span",{class:"token string"},"'!($1,$2) in seen && !($2,$1) in seen; {seen[$1,$2]}'"),n(` twos.txt
`),e("span",{class:"token comment"},"# hehe haha"),n(`
`),e("span",{class:"token comment"},"# door floor"),n(`
`),e("span",{class:"token comment"},"# 6;8 3-4"),n(`
`),e("span",{class:"token comment"},"# true blue"),n(`
`),e("span",{class:"token comment"},"# hehe bebe"),n(`
`),e("span",{class:"token comment"},"# tru eblue"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),$e=e("h3",{id:"exercise-3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#exercise-3"},[e("span",null,"Exercise 3")])],-1),Fe=e("code",null,"twos.txt",-1),Ne=e("code",null,"uniq.txt",-1),Te=e("code",null,"dupl.txt",-1),Ee=e("code",null,"hehe haha",-1),Se=e("code",null,"haha hehe",-1),Re=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(),e("span",{class:"token comment"},"##### add your solution here"),n(`

`),e("span",{class:"token function"},"cat"),n(` uniq.txt 
`),e("span",{class:"token comment"},"# true blue"),n(`
`),e("span",{class:"token comment"},"# hehe bebe"),n(`
`),e("span",{class:"token comment"},"# tru eblue"),n(`

`),e("span",{class:"token function"},"cat"),n(` dupl.txt 
`),e("span",{class:"token comment"},"# hehe haha"),n(`
`),e("span",{class:"token comment"},"# door floor"),n(`
`),e("span",{class:"token comment"},"# haha hehe"),n(`
`),e("span",{class:"token comment"},"# 6;8 3-4"),n(`
`),e("span",{class:"token comment"},"# floor door"),n(`
`),e("span",{class:"token comment"},"# 3-4 6;8"),n(`
`),e("span",{class:"token comment"},"# haha hehe"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),Ie=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(),e("span",{class:"token string"},`'NR==FNR{c[$1,$2]++; next} {if((c[$1,$2] + c[$2,$1]) == 1) print > "uniq.txt";
     else print > "dupl.txt"}'`),n(` twos.txt twos.txt

`),e("span",{class:"token function"},"cat"),n(` uniq.txt 
`),e("span",{class:"token comment"},"# true blue"),n(`
`),e("span",{class:"token comment"},"# hehe bebe"),n(`
`),e("span",{class:"token comment"},"# tru eblue"),n(`

`),e("span",{class:"token function"},"cat"),n(` dupl.txt 
`),e("span",{class:"token comment"},"# hehe haha"),n(`
`),e("span",{class:"token comment"},"# door floor"),n(`
`),e("span",{class:"token comment"},"# haha hehe"),n(`
`),e("span",{class:"token comment"},"# 6;8 3-4"),n(`
`),e("span",{class:"token comment"},"# floor door"),n(`
`),e("span",{class:"token comment"},"# 3-4 6;8"),n(`
`),e("span",{class:"token comment"},"# haha hehe"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),De=e("hr",null,null,-1);function qe(m,Pe){const c=d("router-link"),h=d("VPCard"),o=d("FontIcon"),u=d("ExternalLinkIcon"),i=d("Tabs"),p=d("TagLinks");return v(),k("div",null,[e("h1",x,[e("a",y,[e("span",null,g(m.$frontmatter.title)+" 관련",1)])]),e("nav",A,[e("ul",null,[e("li",null,[l(c,{to:"#whole-line-duplicates"},{default:s(()=>[n("Whole line duplicates")]),_:1})]),e("li",null,[l(c,{to:"#column-wise-duplicates"},{default:s(()=>[n("Column wise duplicates")]),_:1})]),e("li",null,[l(c,{to:"#duplicate-count"},{default:s(()=>[n("Duplicate count")]),_:1})]),e("li",null,[l(c,{to:"#summary"},{default:s(()=>[n("Summary")]),_:1})]),e("li",null,[l(c,{to:"#exercises"},{default:s(()=>[n("Exercises")]),_:1}),e("ul",null,[e("li",null,[l(c,{to:"#exercise-1"},{default:s(()=>[n("Exercise 1")]),_:1})]),e("li",null,[l(c,{to:"#exercise-2"},{default:s(()=>[n("Exercise 2")]),_:1})]),e("li",null,[l(c,{to:"#exercise-3"},{default:s(()=>[n("Exercise 3")]),_:1})])])])])]),C,l(h,_(f({title:"13. Dealing with duplicates",desc:"CLI Text Processing with GNU awk",link:"https://learnbyexample.github.io/learn_gnuawk/dealing-with-duplicates.html",logo:"https://learnbyexample.github.io/favicon.svg",background:"rgba(22,25,35,0.2)"})),null,16),$,F,e("div",N,[T,e("p",null,[n("The "),e("a",E,[l(o,{icon:"iconfont icon-github"}),n(" example_files"),l(u)]),n(" directory has all the files used in the examples.")])]),S,l(i,{id:"25",data:[{id:"Case 1"},{id:"Case 2"}],active:0},{title0:s(({value:a,isActive:t})=>[n("Case 1")]),title1:s(({value:a,isActive:t})=>[n("Case 2")]),tab0:s(({value:a,isActive:t})=>[R]),tab1:s(({value:a,isActive:t})=>[I,D]),_:1}),e("div",q,[P,e("p",null,[n("See also "),e("a",L,[l(o,{icon:"iconfont icon-github"}),n(" koraa/huniq"),l(u)]),n(", a faster alternative for removing line based duplicates.")])]),G,l(i,{id:"49",data:[{id:"Case 1"}],active:0},{title0:s(({value:a,isActive:t})=>[n("Case 1")]),tab0:s(({value:a,isActive:t})=>[Q,V]),_:1}),B,l(i,{id:"60",data:[{id:"Case 1"}],active:0},{title0:s(({value:a,isActive:t})=>[n("Case 1")]),tab0:s(({value:a,isActive:t})=>[U,O]),_:1}),W,z,J,K,l(i,{id:"78",data:[{id:"Case 1"},{id:"Case 2"}],active:0},{title0:s(({value:a,isActive:t})=>[n("Case 1")]),title1:s(({value:a,isActive:t})=>[n("Case 2")]),tab0:s(({value:a,isActive:t})=>[H,M]),tab1:s(({value:a,isActive:t})=>[j,X]),_:1}),Y,l(i,{id:"95",data:[{id:"Case 1"}],active:0},{title0:s(({value:a,isActive:t})=>[n("Case 1")]),tab0:s(({value:a,isActive:t})=>[Z,ee]),_:1}),ne,l(i,{id:"106",data:[{id:"Case 1"},{id:"Case 2"},{id:"Case 3"}],active:0},{title0:s(({value:a,isActive:t})=>[n("Case 1")]),title1:s(({value:a,isActive:t})=>[n("Case 2")]),title2:s(({value:a,isActive:t})=>[n("Case 3")]),tab0:s(({value:a,isActive:t})=>[se,ae]),tab1:s(({value:a,isActive:t})=>[te,le]),tab2:s(({value:a,isActive:t})=>[ie,ce]),_:1}),oe,e("div",de,[re,e("p",null,[n("The "),e("a",ue,[l(o,{icon:"iconfont icon-github"}),n(" exercises"),l(u)]),n(" directory has all the files used in this section.")])]),me,e("p",null,[n("Retain only the first copy of a line for the input file "),l(o,{icon:"fas fa-file-lines"}),n(),he,n(". Case should be ignored while comparing the lines. For example, "),pe,n(" and "),be,n(" should be considered as duplicates.")]),ve,l(i,{id:"152",data:[{id:"Question"},{id:"Solution"}],active:0},{title0:s(({value:a,isActive:t})=>[n("Question")]),title1:s(({value:a,isActive:t})=>[n("Solution")]),tab0:s(({value:a,isActive:t})=>[ke]),tab1:s(({value:a,isActive:t})=>[ge]),_:1}),_e,e("p",null,[n("Retain only the first copy of a line for the input file "),l(o,{icon:"fas fa-file-lines"}),n(),fe,n(". Assume space as the field separator with exactly two fields per line. Compare the lines irrespective of the order of the fields. For example, "),we,n(" and "),xe,n(" should be considered as duplicates.")]),ye,l(i,{id:"167",data:[{id:"Question"},{id:"Solution"}],active:0},{title0:s(({value:a,isActive:t})=>[n("Question")]),title1:s(({value:a,isActive:t})=>[n("Solution")]),tab0:s(({value:a,isActive:t})=>[Ae]),tab1:s(({value:a,isActive:t})=>[Ce]),_:1}),$e,e("p",null,[n("For the input file "),l(o,{icon:"fas fa-file-lines"}),n(),Fe,n(", create a file "),l(o,{icon:"fas fa-file-lines"}),n(),Ne,n(" with all the unique lines and "),l(o,{icon:"fas fa-file-lines"}),n(),Te,n(" with all the duplicate lines. Assume space as the field separator with exactly two fields per line. Compare the lines irrespective of the order of the fields. For example, "),Ee,n(" and "),Se,n(" should be considered as duplicates.")]),l(i,{id:"181",data:[{id:"Question"},{id:"Solution"}],active:0},{title0:s(({value:a,isActive:t})=>[n("Question")]),title1:s(({value:a,isActive:t})=>[n("Solution")]),tab0:s(({value:a,isActive:t})=>[Re]),tab1:s(({value:a,isActive:t})=>[Ie]),_:1}),De,l(p)])}const Qe=b(w,[["render",qe],["__file","13-dealing-with-duplicates.html.vue"]]),Ve=JSON.parse('{"path":"/cli/text-processing-w-gnu-awk/13-dealing-with-duplicates.html","title":"13. Dealing with duplicates","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"13. Dealing with duplicates","description":"Text Processing with GNU awk > 13. Dealing with duplicates","category":["CLI","Linux"],"tags":["crashcourse","cli","sh","shell","gnu","linux","awk"],"head":[[{"meta":null},{"property":"og:title","content":"Text Processing with GNU awk > 13. Dealing with duplicates"},{"property":"og:description","content":"13. Dealing with duplicates"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/cli/text-processing-w-gnu-awk/13-dealing-with-duplicates.html"}]]},"headers":[{"level":2,"title":"Whole line duplicates","slug":"whole-line-duplicates","link":"#whole-line-duplicates","children":[]},{"level":2,"title":"Column wise duplicates","slug":"column-wise-duplicates","link":"#column-wise-duplicates","children":[]},{"level":2,"title":"Duplicate count","slug":"duplicate-count","link":"#duplicate-count","children":[]},{"level":2,"title":"Summary","slug":"summary","link":"#summary","children":[]},{"level":2,"title":"Exercises","slug":"exercises","link":"#exercises","children":[{"level":3,"title":"Exercise 1","slug":"exercise-1","link":"#exercise-1","children":[]},{"level":3,"title":"Exercise 2","slug":"exercise-2","link":"#exercise-2","children":[]},{"level":3,"title":"Exercise 3","slug":"exercise-3","link":"#exercise-3","children":[]}]}],"git":{},"readingTime":{"minutes":4.3,"words":1290},"filePathRelative":"cli/text-processing-w-gnu-awk/13-dealing-with-duplicates.md","excerpt":"\\n\\n<hr>\\n"}');export{Qe as comp,Ve as data};
