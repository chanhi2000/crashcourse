import{_ as k,r,o as _,c as f,a as e,b as n,t as p,d as s,w as a,n as g,g as w,e as u}from"./app-d223f2a5.js";const x={},y={id:"frontmatter-title-관련",tabindex:"-1"},$=e("a",{class:"header-anchor",href:"#frontmatter-title-관련","aria-hidden":"true"},"#",-1),F={class:"table-of-contents"},A=e("hr",null,null,-1),N=e("hr",null,null,-1),C=e("p",null,[n("Often, you need to eliminate duplicates from an input file. This could be based on the entire line content or based on certain fields. These are typically solved with the "),e("code",null,"sort"),n(" and "),e("code",null,"uniq"),n(" commands. Advantages with "),e("code",null,"awk"),n(" include regexp based field and record separators, input doesn't have to be sorted, and in general more flexibility because it is a programming language.")],-1),T={class:"hint-container info"},E=e("p",{class:"hint-container-title"},"Info",-1),R={href:"https://github.com/learnbyexample/learn_gnuawk/tree/master/example_files",target:"_blank",rel:"noopener noreferrer"},S=u(`<hr><h2 id="whole-line-duplicates" tabindex="-1"><a class="header-anchor" href="#whole-line-duplicates" aria-hidden="true">#</a> Whole line duplicates</h2><p><code>awk &#39;!a[$0]++&#39;</code> is one of the most famous <code>awk</code> one-liners. It eliminates line based duplicates while retaining the input order. The following example shows it in action along with an illustration of how the logic works.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> purchases.txt
<span class="token comment"># coffee</span>
<span class="token comment"># tea</span>
<span class="token comment"># washing powder</span>
<span class="token comment"># coffee</span>
<span class="token comment"># toothpaste</span>
<span class="token comment"># tea</span>
<span class="token comment"># soap</span>
<span class="token comment"># tea</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),q=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(),e("span",{class:"token string"},`'{print +a[$0] "\\t" $0; a[$0]++}'`),n(` purchases.txt
`),e("span",{class:"token comment"},"# 0       coffee"),n(`
`),e("span",{class:"token comment"},"# 0       tea"),n(`
`),e("span",{class:"token comment"},"# 0       washing powder"),n(`
`),e("span",{class:"token comment"},"# 1       coffee"),n(`
`),e("span",{class:"token comment"},"# 0       toothpaste"),n(`
`),e("span",{class:"token comment"},"# 1       tea"),n(`
`),e("span",{class:"token comment"},"# 0       soap"),n(`
`),e("span",{class:"token comment"},"# 2       tea"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),I=e("p",null,"only those entries with zero in first column will be retained",-1),P=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(),e("span",{class:"token string"},"'!a[$0]++'"),n(` purchases.txt
`),e("span",{class:"token comment"},"# coffee"),n(`
`),e("span",{class:"token comment"},"# tea"),n(`
`),e("span",{class:"token comment"},"# washing powder"),n(`
`),e("span",{class:"token comment"},"# toothpaste"),n(`
`),e("span",{class:"token comment"},"# soap"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),D={class:"hint-container info"},V=e("p",{class:"hint-container-title"},"Info",-1),B={href:"https://github.com/koraa/huniq",target:"_blank",rel:"noopener noreferrer"},L=u(`<hr><h2 id="column-wise-duplicates" tabindex="-1"><a class="header-anchor" href="#column-wise-duplicates" aria-hidden="true">#</a> Column wise duplicates</h2><p>Removing field based duplicates is simple for a single field comparison. Just change $0 to the required field number after setting the appropriate field separator.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> duplicates.txt
<span class="token comment"># brown,toy,bread,42</span>
<span class="token comment"># dark red,ruby,rose,111</span>
<span class="token comment"># blue,ruby,water,333</span>
<span class="token comment"># dark red,sky,rose,555</span>
<span class="token comment"># yellow,toy,flower,333</span>
<span class="token comment"># white,sky,bread,111</span>
<span class="token comment"># light red,purse,rose,333</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),G=e("p",null,"based on the last field",-1),z=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(" -F, "),e("span",{class:"token string"},"'!seen[$NF]++'"),n(` duplicates.txt
`),e("span",{class:"token comment"},"# brown,toy,bread,42"),n(`
`),e("span",{class:"token comment"},"# dark red,ruby,rose,111"),n(`
`),e("span",{class:"token comment"},"# blue,ruby,water,333"),n(`
`),e("span",{class:"token comment"},"# dark red,sky,rose,555"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),O=e("p",null,[n("For multiple fields comparison, separate the fields with "),e("code",null,","),n(" so that "),e("code",null,"SUBSEP"),n(" is used to combine the field values to generate the key. As mentioned before, "),e("code",null,"SUBSEP"),n(" has a default value of "),e("code",null,"\\034"),n(" non-printing character, which is typically not used in text files.")],-1),Q=e("p",null,"based on the first and third fields",-1),U=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(" -F, "),e("span",{class:"token string"},"'!seen[$1,$3]++'"),n(` duplicates.txt
`),e("span",{class:"token comment"},"# brown,toy,bread,42"),n(`
`),e("span",{class:"token comment"},"# dark red,ruby,rose,111"),n(`
`),e("span",{class:"token comment"},"# blue,ruby,water,333"),n(`
`),e("span",{class:"token comment"},"# yellow,toy,flower,333"),n(`
`),e("span",{class:"token comment"},"# white,sky,bread,111"),n(`
`),e("span",{class:"token comment"},"# light red,purse,rose,333"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),W=e("hr",null,null,-1),H=e("h2",{id:"duplicate-count",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#duplicate-count","aria-hidden":"true"},"#"),n(" Duplicate count")],-1),J=e("p",null,"In this section, how many times a duplicate record is found plays a role in determining the output.",-1),M=e("p",null,"First up, printing only a specific numbered duplicate.",-1),j=e("p",null,"print only the second occurrence of duplicates based on the second field",-1),K=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(" -F, "),e("span",{class:"token string"},"'++seen[$2]==2'"),n(` duplicates.txt
`),e("span",{class:"token comment"},"# blue,ruby,water,333"),n(`
`),e("span",{class:"token comment"},"# yellow,toy,flower,333"),n(`
`),e("span",{class:"token comment"},"# white,sky,bread,111"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),X=e("p",null,"print only the third occurrence of duplicates based on the last field",-1),Y=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(" -F, "),e("span",{class:"token string"},"'++seen[$NF]==3'"),n(` duplicates.txt
`),e("span",{class:"token comment"},"# light red,purse,rose,333"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),Z=e("p",null,[n("Next, printing only the last copy of duplicates. Since the count isn't known, the "),e("code",null,"tac"),n(" command comes in handy again.")],-1),ee=e("p",null,"reverse the input line-wise, retain first copy and then reverse again",-1),ne=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"tac"),n(" duplicates.txt "),e("span",{class:"token operator"},"|"),n(),e("span",{class:"token function"},"awk"),n(" -F, "),e("span",{class:"token string"},"'!seen[$NF]++'"),n(),e("span",{class:"token operator"},"|"),n(),e("span",{class:"token function"},"tac"),n(`
`),e("span",{class:"token comment"},"# brown,toy,bread,42"),n(`
`),e("span",{class:"token comment"},"# dark red,sky,rose,555"),n(`
`),e("span",{class:"token comment"},"# white,sky,bread,111"),n(`
`),e("span",{class:"token comment"},"# light red,purse,rose,333"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),se=e("p",null,"To get all the records based on a duplicate count, you can pass the input file twice. Then use the two file processing trick to make decisions.",-1),ae=e("p",null,"all duplicates based on the last column",-1),te=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(" -F, "),e("span",{class:"token string"},"'NR==FNR{a[$NF]++; next} a[$NF]>1'"),n(` duplicates.txt duplicates.txt
`),e("span",{class:"token comment"},"# dark red,ruby,rose,111"),n(`
`),e("span",{class:"token comment"},"# blue,ruby,water,333"),n(`
`),e("span",{class:"token comment"},"# yellow,toy,flower,333"),n(`
`),e("span",{class:"token comment"},"# white,sky,bread,111"),n(`
`),e("span",{class:"token comment"},"# light red,purse,rose,333"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),le=e("p",null,"all duplicates based on the last column, minimum 3 duplicates",-1),ie=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(" -F, "),e("span",{class:"token string"},"'NR==FNR{a[$NF]++; next} a[$NF]>2'"),n(` duplicates.txt duplicates.txt
`),e("span",{class:"token comment"},"# blue,ruby,water,333"),n(`
`),e("span",{class:"token comment"},"# yellow,toy,flower,333"),n(`
`),e("span",{class:"token comment"},"# light red,purse,rose,333"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),oe=e("p",null,"only unique lines based on the third column",-1),ce=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(" -F, "),e("span",{class:"token string"},"'NR==FNR{a[$3]++; next} a[$3]==1'"),n(` duplicates.txt duplicates.txt
`),e("span",{class:"token comment"},"# blue,ruby,water,333"),n(`
`),e("span",{class:"token comment"},"# yellow,toy,flower,333"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),de=u('<hr><h2 id="summary" tabindex="-1"><a class="header-anchor" href="#summary" aria-hidden="true">#</a> Summary</h2><p>This chapter showed how to work with duplicate contents for records and fields. If you don&#39;t need regexp based separators and if your input is too big to handle, then specialized command line tools like <code>sort</code> and <code>uniq</code> will be better suited compared to <code>awk</code>.</p><p>Next chapter will show how to write <code>awk</code> scripts instead of the usual one-liners.</p><hr><h2 id="exercises" tabindex="-1"><a class="header-anchor" href="#exercises" aria-hidden="true">#</a> Exercises</h2>',6),re={class:"hint-container info"},ue=e("p",{class:"hint-container-title"},"Info",-1),me={href:"https://github.com/learnbyexample/learn_gnuawk/tree/master/exercises",target:"_blank",rel:"noopener noreferrer"},he=e("h3",{id:"exercise-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#exercise-1","aria-hidden":"true"},"#"),n(" Exercise 1")],-1),pe=e("code",null,"lines.txt",-1),be=e("code",null,"hi there",-1),ve=e("code",null,"HI TheRE",-1),ke=u(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> lines.txt
<span class="token comment"># Go There</span>
<span class="token comment"># come on</span>
<span class="token comment"># go there</span>
<span class="token comment"># ---</span>
<span class="token comment"># 2 apples and 5 mangoes</span>
<span class="token comment"># come on!</span>
<span class="token comment"># ---</span>
<span class="token comment"># 2 Apples</span>
<span class="token comment"># COME ON</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),_e=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(),e("span",{class:"token comment"},"##### add your solution here"),n(`
Go There
come on
---
`),e("span",{class:"token number"},"2"),n(" apples and "),e("span",{class:"token number"},"5"),n(` mangoes
come on`),e("span",{class:"token operator"},"!"),n(`
`),e("span",{class:"token number"},"2"),n(` Apples
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),fe=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(),e("span",{class:"token string"},"'!seen[tolower($0)]++'"),n(` lines.txt
`),e("span",{class:"token comment"},"# Go There"),n(`
`),e("span",{class:"token comment"},"# come on"),n(`
`),e("span",{class:"token comment"},"# ---"),n(`
`),e("span",{class:"token comment"},"# 2 apples and 5 mangoes"),n(`
`),e("span",{class:"token comment"},"# come on!"),n(`
`),e("span",{class:"token comment"},"# 2 Apples"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),ge=e("h3",{id:"exercise-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#exercise-2","aria-hidden":"true"},"#"),n(" Exercise 2")],-1),we=e("code",null,"twos.txt",-1),xe=e("code",null,"hehe haha",-1),ye=e("code",null,"haha hehe",-1),$e=u(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> twos.txt
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),Fe=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(),e("span",{class:"token comment"},"##### add your solution here"),n(`
`),e("span",{class:"token comment"},"# hehe haha"),n(`
`),e("span",{class:"token comment"},"# door floor"),n(`
`),e("span",{class:"token comment"},"# 6;8 3-4"),n(`
`),e("span",{class:"token comment"},"# true blue"),n(`
`),e("span",{class:"token comment"},"# hehe bebe"),n(`
`),e("span",{class:"token comment"},"# tru eblue"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),Ae=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(),e("span",{class:"token string"},"'!($1,$2) in seen && !($2,$1) in seen; {seen[$1,$2]}'"),n(` twos.txt
`),e("span",{class:"token comment"},"# hehe haha"),n(`
`),e("span",{class:"token comment"},"# door floor"),n(`
`),e("span",{class:"token comment"},"# 6;8 3-4"),n(`
`),e("span",{class:"token comment"},"# true blue"),n(`
`),e("span",{class:"token comment"},"# hehe bebe"),n(`
`),e("span",{class:"token comment"},"# tru eblue"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),Ne=e("h3",{id:"exercise-3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#exercise-3","aria-hidden":"true"},"#"),n(" Exercise 3")],-1),Ce=e("code",null,"twos.txt",-1),Te=e("code",null,"uniq.txt",-1),Ee=e("code",null,"dupl.txt",-1),Re=e("code",null,"hehe haha",-1),Se=e("code",null,"haha hehe",-1),qe=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(),e("span",{class:"token comment"},"##### add your solution here"),n(`

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
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),Ie=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"awk"),n(),e("span",{class:"token string"},`'NR==FNR{c[$1,$2]++; next} {if((c[$1,$2] + c[$2,$1]) == 1) print > "uniq.txt";
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
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1);function Pe(h,De){const c=r("router-link"),b=r("VPCard"),d=r("FontIcon"),m=r("ExternalLinkIcon"),o=r("Tabs"),v=r("TagLinks");return _(),f("div",null,[e("h1",y,[$,n(" "+p(h.$frontmatter.title)+" 관련",1)]),e("blockquote",null,[e("p",null,p(h.$frontmatter.description),1)]),e("nav",F,[e("ul",null,[e("li",null,[s(c,{to:"#whole-line-duplicates"},{default:a(()=>[n("Whole line duplicates")]),_:1})]),e("li",null,[s(c,{to:"#column-wise-duplicates"},{default:a(()=>[n("Column wise duplicates")]),_:1})]),e("li",null,[s(c,{to:"#duplicate-count"},{default:a(()=>[n("Duplicate count")]),_:1})]),e("li",null,[s(c,{to:"#summary"},{default:a(()=>[n("Summary")]),_:1})]),e("li",null,[s(c,{to:"#exercises"},{default:a(()=>[n("Exercises")]),_:1}),e("ul",null,[e("li",null,[s(c,{to:"#exercise-1"},{default:a(()=>[n("Exercise 1")]),_:1})]),e("li",null,[s(c,{to:"#exercise-2"},{default:a(()=>[n("Exercise 2")]),_:1})]),e("li",null,[s(c,{to:"#exercise-3"},{default:a(()=>[n("Exercise 3")]),_:1})])])])])]),A,s(b,g(w({title:"13. Dealing with duplicates",desc:"CLI Text Processing with GNU awk",link:"https://learnbyexample.github.io/learn_gnuawk/dealing-with-duplicates.html",logo:"https://learnbyexample.github.io/favicon.svg",color:"rgba(22, 25, 35, 0.2)"})),null,16),N,C,e("div",T,[E,e("p",null,[n("The "),e("a",R,[s(d,{icon:"iconfont icon-github"}),n(" example_files"),s(m)]),n(" directory has all the files used in the examples.")])]),S,s(o,{id:"30",data:[{title:"Case 1"},{title:"Case 2"}],active:0},{tab0:a(({title:t,value:l,isActive:i})=>[q]),tab1:a(({title:t,value:l,isActive:i})=>[I,P]),_:1}),e("div",D,[V,e("p",null,[n("See also "),e("a",B,[s(d,{icon:"iconfont icon-github"}),n(" koraa/huniq"),s(m)]),n(", a faster alternative for removing line based duplicates.")])]),L,s(o,{id:"54",data:[{title:"Case 1"}],active:0},{tab0:a(({title:t,value:l,isActive:i})=>[G,z]),_:1}),O,s(o,{id:"65",data:[{title:"Case 1"}],active:0},{tab0:a(({title:t,value:l,isActive:i})=>[Q,U]),_:1}),W,H,J,M,s(o,{id:"83",data:[{title:"Case 1"},{title:"Case 2"}],active:0},{tab0:a(({title:t,value:l,isActive:i})=>[j,K]),tab1:a(({title:t,value:l,isActive:i})=>[X,Y]),_:1}),Z,s(o,{id:"100",data:[{title:"Case 1"}],active:0},{tab0:a(({title:t,value:l,isActive:i})=>[ee,ne]),_:1}),se,s(o,{id:"111",data:[{title:"Case 1"},{title:"Case 2"},{title:"Case 3"}],active:0},{tab0:a(({title:t,value:l,isActive:i})=>[ae,te]),tab1:a(({title:t,value:l,isActive:i})=>[le,ie]),tab2:a(({title:t,value:l,isActive:i})=>[oe,ce]),_:1}),de,e("div",re,[ue,e("p",null,[n("The "),e("a",me,[s(d,{icon:"iconfont icon-github"}),n(" exercises"),s(m)]),n(" directory has all the files used in this section.")])]),he,e("p",null,[n("Retain only the first copy of a line for the input file "),s(d,{icon:"iconfont icon-file"}),n(),pe,n(". Case should be ignored while comparing the lines. For example, "),be,n(" and "),ve,n(" should be considered as duplicates.")]),ke,s(o,{id:"157",data:[{title:"Question"},{title:"Solution"}],active:0},{tab0:a(({title:t,value:l,isActive:i})=>[_e]),tab1:a(({title:t,value:l,isActive:i})=>[fe]),_:1}),ge,e("p",null,[n("Retain only the first copy of a line for the input file "),s(d,{icon:"iconfont icon-file"}),n(),we,n(". Assume space as the field separator with exactly two fields per line. Compare the lines irrespective of the order of the fields. For example, "),xe,n(" and "),ye,n(" should be considered as duplicates.")]),$e,s(o,{id:"172",data:[{title:"Question"},{title:"Solution"}],active:0},{tab0:a(({title:t,value:l,isActive:i})=>[Fe]),tab1:a(({title:t,value:l,isActive:i})=>[Ae]),_:1}),Ne,e("p",null,[n("For the input file "),s(d,{icon:"iconfont icon-file"}),n(),Ce,n(", create a file "),s(d,{icon:"iconfont icon-file"}),n(),Te,n(" with all the unique lines and "),s(d,{icon:"iconfont icon-file"}),n(),Ee,n(" with all the duplicate lines. Assume space as the field separator with exactly two fields per line. Compare the lines irrespective of the order of the fields. For example, "),Re,n(" and "),Se,n(" should be considered as duplicates.")]),s(o,{id:"186",data:[{title:"Question"},{title:"Solution"}],active:0},{tab0:a(({title:t,value:l,isActive:i})=>[qe]),tab1:a(({title:t,value:l,isActive:i})=>[Ie]),_:1}),s(v)])}const Be=k(x,[["render",Pe],["__file","13-dealing-with-duplicates.html.vue"]]);export{Be as default};
