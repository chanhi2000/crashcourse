import{_ as m}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as c,o as k,c as v,a as n,t as b,b as l,n as y,g as h,w as e,e as g,d as s}from"./app-CBi7Ecoo.js";const x={},f={id:"frontmatter-title-관련",tabindex:"-1"},_={class:"header-anchor",href:"#frontmatter-title-관련"},w={class:"table-of-contents"},S=n("hr",null,null,-1),E=g(`<h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples"><span>Examples</span></a></h2><div class="language-rust line-numbers-mode" data-ext="rs" data-title="rs"><pre class="language-rust"><code><span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">5u32</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> x_squared <span class="token operator">=</span> x <span class="token operator">*</span> x<span class="token punctuation">;</span>
        <span class="token keyword">let</span> x_cube <span class="token operator">=</span> x_squared <span class="token operator">*</span> x<span class="token punctuation">;</span>

        <span class="token comment">// This expression will be assigned to \`y\`</span>
        x_cube <span class="token operator">+</span> x_squared <span class="token operator">+</span> x
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> z <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token comment">// The semicolon suppresses this expression and \`()\` is assigned to \`z\`</span>
        <span class="token number">2</span> <span class="token operator">*</span> x<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;x is {:?}&quot;</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;y is {:?}&quot;</span><span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;z is {:?}&quot;</span><span class="token punctuation">,</span> z<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//</span>
<span class="token comment">//</span>
<span class="token comment">/*
  x is 5
  y is 155
  z is ()
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="exercises" tabindex="-1"><a class="header-anchor" href="#exercises"><span>Exercises</span></a></h2><h3 id="_1-🌟🌟" tabindex="-1"><a class="header-anchor" href="#_1-🌟🌟"><span>1. 🌟🌟</span></a></h3>`,5),q=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs","data-title":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token comment"},"// Make it work with two ways"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
   `),n("span",{class:"token keyword"},"let"),s(" v "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
       `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token keyword"},"mut"),s(" x "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
       x `),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"2"),s(`
   `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

   `),n("span",{class:"token macro property"},"assert_eq!"),n("span",{class:"token punctuation"},"("),s("v"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

   `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Success!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},`/*
     Compiling playground v0.0.1 (/playground)
  error[E0308]: mismatched types
   --> src/main.rs:8:4
    |
  8 |    assert_eq!(v, 3);
    |    ^^^^^^^^^^^^^^^^
    |    |
    |    expected \`()\`, found integer
    |    expected because this is \`()\`
    |
    = note: this error originates in the macro \`assert_eq\` (in Nightly builds, run with -Z macro-backtrace for more info)
  
  For more information about this error, try \`rustc --explain E0308\`.
  error: could not compile \`playground\` (bin "playground") due to previous error
*/`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),P=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs","data-title":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token comment"},"// Make it work with two ways"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" v "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token keyword"},"mut"),s(" x "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
        x `),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"2"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
 
    `),n("span",{class:"token macro property"},"assert_eq!"),n("span",{class:"token punctuation"},"("),s("v"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

   `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Success!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},`/*
  Success!
*/`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),A=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs","data-title":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token comment"},"// Make it work with two ways"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" v "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token keyword"},"mut"),s(" x "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
        x `),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},";"),s(`
        x
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token macro property"},"assert_eq!"),n("span",{class:"token punctuation"},"("),s("v"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

   `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Success!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},`/*
  Success!
*/`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),R=n("h3",{id:"_2-🌟",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2-🌟"},[n("span",null,"2. 🌟")])],-1),T=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs","data-title":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
   `),n("span",{class:"token keyword"},"let"),s(" v "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" x "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

   `),n("span",{class:"token macro property"},"assert!"),n("span",{class:"token punctuation"},"("),s("v "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

   `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Success!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},`/*
     Compiling playground v0.0.1 (/playground)
  error: expected expression, found \`let\` statement
   --> src/main.rs:3:13
    |
  3 |    let v = (let x = 3);
    |             ^^^
  
  error: expected expression, found statement (\`let\`)
   --> src/main.rs:3:13
    |
  3 |    let v = (let x = 3);
    |             ^^^^^^^^^
    |
    = note: variable declaration using \`let\` is a statement
  
  error[E0658]: \`let\` expressions in this position are unstable
   --> src/main.rs:3:13
    |
  3 |    let v = (let x = 3);
    |             ^^^^^^^^^
    |
    = note: see issue #53667 <https://github.com/rust-lang/rust/issues/53667> for more information
  
  warning: unnecessary parentheses around assigned value
   --> src/main.rs:3:12
    |
  3 |    let v = (let x = 3);
    |            ^         ^
    |
    = note: \`#[warn(unused_parens)]\` on by default
  help: remove these parentheses
    |
  3 -    let v = (let x = 3);
  3 +    let v = let x = 3;
    |
  
  error[E0308]: mismatched types
   --> src/main.rs:5:17
    |
  5 |    assert!(v == 3);
    |            -    ^ expected \`bool\`, found integer
    |            |
    |            expected because this is \`bool\`
  
  Some errors have detailed explanations: E0308, E0658.
  For more information about an error, try \`rustc --explain E0308\`.
  warning: \`playground\` (bin "playground") generated 1 warning
  error: could not compile \`playground\` (bin "playground") due to 4 previous errors; 1 warning
*/`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),z=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs","data-title":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" v "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" x "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},";"),s(`
        x
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

   `),n("span",{class:"token macro property"},"assert!"),n("span",{class:"token punctuation"},"("),s("v "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

   `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Success!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},`/*
  Success!
*/`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("h3",{id:"_3-🌟",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3-🌟"},[n("span",null,"3. 🌟")])],-1),B=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs","data-title":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" s "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"sum"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),s(),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token macro property"},"assert_eq!"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Success!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"sum"),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"i32"),n("span",{class:"token punctuation"},","),s(" y"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"i32"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"->"),s(),n("span",{class:"token keyword"},"i32"),s(),n("span",{class:"token punctuation"},"{"),s(`
    x `),n("span",{class:"token operator"},"+"),s(" y"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},`/*
     Compiling playground v0.0.1 (/playground)
  error[E0308]: mismatched types
    --> src/main.rs:9:27
     |
  9  | fn sum(x: i32, y: i32) -> i32 {
     |    ---                    ^^^ expected \`i32\`, found \`()\`
     |    |
     |    implicitly returns \`()\` as its body has no tail or \`return\` expression
  10 |     x + y;
     |          - help: remove this semicolon to return this value
  
  For more information about this error, try \`rustc --explain E0308\`.
  error: could not compile \`playground\` (bin "playground") due to previous error
*/`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),N=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs","data-title":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" s "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"sum"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),s(),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token macro property"},"assert_eq!"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Success!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"sum"),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"i32"),n("span",{class:"token punctuation"},","),s(" y"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"i32"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"->"),s(),n("span",{class:"token keyword"},"i32"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" x "),n("span",{class:"token operator"},"+"),s(" y"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},`/*
  Success!
*/`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),V=n("hr",null,null,-1);function M(u,F){const r=c("VPCard"),i=c("router-link"),p=c("SiteInfo"),o=c("Tabs"),d=c("TagLinks");return k(),v("div",null,[n("h1",f,[n("a",_,[n("span",null,b(u.$frontmatter.title)+" 관련",1)])]),l(r,y(h({title:"Rust By Practice",desc:"Rust By Practice",link:"/rust/rust-by-practice/README.md",logo:"https://practice.course.rs/favicon.svg",background:"rgba(22,25,35,0.2)"})),null,16),n("nav",w,[n("ul",null,[n("li",null,[l(i,{to:"#examples"},{default:e(()=>[s("Examples")]),_:1})]),n("li",null,[l(i,{to:"#exercises"},{default:e(()=>[s("Exercises")]),_:1}),n("ul",null,[n("li",null,[l(i,{to:"#_1-🌟🌟"},{default:e(()=>[s("1. 🌟🌟")]),_:1})]),n("li",null,[l(i,{to:"#_2-🌟"},{default:e(()=>[s("2. 🌟")]),_:1})]),n("li",null,[l(i,{to:"#_3-🌟"},{default:e(()=>[s("3. 🌟")]),_:1})])])])])]),S,l(p,{name:"4.3 Statements and Expressions | Rust By Practice",desc:"4.3 Statements and Expressions",url:"https://practice.rs/basic-types/statements-expressions.html",logo:"https://practice.course.rs/favicon.svg",preview:"https://github.com/sunface/rust-by-practice/blob/master/en/assets/header.jpg?raw=true"}),E,l(o,{id:"20",data:[{id:"💀Problem"},{id:"Solution 1"},{id:"Solution 2"}],active:0},{title0:e(({value:a,isActive:t})=>[s("💀Problem")]),title1:e(({value:a,isActive:t})=>[s("Solution 1")]),title2:e(({value:a,isActive:t})=>[s("Solution 2")]),tab0:e(({value:a,isActive:t})=>[q]),tab1:e(({value:a,isActive:t})=>[P]),tab2:e(({value:a,isActive:t})=>[A]),_:1}),R,l(o,{id:"34",data:[{id:"💀Problem"},{id:"Solution"}],active:0},{title0:e(({value:a,isActive:t})=>[s("💀Problem")]),title1:e(({value:a,isActive:t})=>[s("Solution")]),tab0:e(({value:a,isActive:t})=>[T]),tab1:e(({value:a,isActive:t})=>[z]),_:1}),C,l(o,{id:"45",data:[{id:"💀Problem"},{id:"Solution"}],active:0},{title0:e(({value:a,isActive:t})=>[s("💀Problem")]),title1:e(({value:a,isActive:t})=>[s("Solution")]),tab0:e(({value:a,isActive:t})=>[B]),tab1:e(({value:a,isActive:t})=>[N]),_:1}),V,l(d)])}const K=m(x,[["render",M],["__file","statements-expressions.html.vue"]]),L=JSON.parse('{"path":"/rust/rust-by-practice/basic-types/statements-expressions.html","title":"3.3 Statements and Expressions","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"3.3 Statements and Expressions","description":"Rust by Practice > 3.3 Statements and Expressions","category":["Rust"],"tag":["crashcourse","freecodecamp","zubiarfan","youtube","rust","rs","wasm","assembly"],"head":[[{"meta":null},{"property":"og:title","content":"Rust by Practice > 3.3 Statements and Expressions"},{"property":"og:description","content":"3.3 Statements and Expressions"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/rust/rust-by-practice/basic-types/statements-expressions.html"}]],"isOriginal":false},"headers":[{"level":2,"title":"Examples","slug":"examples","link":"#examples","children":[]},{"level":2,"title":"Exercises","slug":"exercises","link":"#exercises","children":[{"level":3,"title":"1. 🌟🌟","slug":"_1-🌟🌟","link":"#_1-🌟🌟","children":[]},{"level":3,"title":"2. 🌟","slug":"_2-🌟","link":"#_2-🌟","children":[]},{"level":3,"title":"3. 🌟","slug":"_3-🌟","link":"#_3-🌟","children":[]}]}],"git":{},"readingTime":{"minutes":2.26,"words":678},"filePathRelative":"rust/rust-by-practice/basic-types/statements-expressions.md","excerpt":"\\n"}');export{K as comp,L as data};
