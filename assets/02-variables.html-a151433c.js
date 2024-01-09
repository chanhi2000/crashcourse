import{_ as v,r as u,o as h,c as g,a as n,b as s,t as m,d as e,w as a,n as f,g as y,f as _,e as p}from"./app-d223f2a5.js";const w={},x={id:"frontmatter-title-관련",tabindex:"-1"},S=n("a",{class:"header-anchor",href:"#frontmatter-title-관련","aria-hidden":"true"},"#",-1),A={class:"table-of-contents"},F=n("hr",null,null,-1),q=n("hr",null,null,-1),R=n("h2",{id:"binding-and-mutability",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#binding-and-mutability","aria-hidden":"true"},"#"),s(" Binding and mutability")],-1),E=n("h3",{id:"_1-🌟-a-variable-can-be-used-only-if-it-has-been-initialized",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-🌟-a-variable-can-be-used-only-if-it-has-been-initialized","aria-hidden":"true"},"#"),s(" 1. 🌟 A variable can be used only if it has been initialized.")],-1),z=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token comment"},"// Fix the error below with least amount of modification to the code"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" x"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"i32"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// Uninitialized but used, ERROR !"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" y"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"i32"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// Uninitialized but also unused, only a Warning !"),s(`

    `),n("span",{class:"token macro property"},"assert_eq!"),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Success!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//  Compiling playground v0.0.1 (/playground)"),s(`
`),n("span",{class:"token comment"},"// warning: unused variable: `y`"),s(`
`),n("span",{class:"token comment"},"//  --> src/main.rs:5:9"),s(`
`),n("span",{class:"token comment"},"//   |"),s(`
`),n("span",{class:"token comment"},"// 5 |     let y: i32; // Uninitialized but also unused, only a Warning !"),s(`
`),n("span",{class:"token comment"},"//   |         ^ help: if this is intentional, prefix it with an underscore: `_y`"),s(`
`),n("span",{class:"token comment"},"//   |"),s(`
`),n("span",{class:"token comment"},"//   = note: `#[warn(unused_variables)]` on by default"),s(`
`),n("span",{class:"token comment"},"// "),s(`
`),n("span",{class:"token comment"},"// error[E0381]: used binding `x` isn't initialized"),s(`
`),n("span",{class:"token comment"},"//  --> src/main.rs:7:5"),s(`
`),n("span",{class:"token comment"},"//   |"),s(`
`),n("span",{class:"token comment"},"// 4 |     let x: i32; // Uninitialized but used, ERROR !"),s(`
`),n("span",{class:"token comment"},"//   |         - binding declared here but left uninitialized"),s(`
`),n("span",{class:"token comment"},"// ..."),s(`
`),n("span",{class:"token comment"},"// 7 |     assert_eq!(x, 5);"),s(`
`),n("span",{class:"token comment"},"//   |     ^^^^^^^^^^^^^^^^ `x` used here but it isn't initialized"),s(`
`),n("span",{class:"token comment"},"//   |"),s(`
`),n("span",{class:"token comment"},"//   = note: this error originates in the macro `assert_eq` (in Nightly builds, run with -Z macro-backtrace for more info)"),s(`
`),n("span",{class:"token comment"},"// help: consider assigning a value"),s(`
`),n("span",{class:"token comment"},"//   |"),s(`
`),n("span",{class:"token comment"},"// 4 |     let x: i32 = 0; // Uninitialized but used, ERROR !"),s(`
`),n("span",{class:"token comment"},"//   |                +++"),s(`
`),n("span",{class:"token comment"},"// "),s(`
`),n("span",{class:"token comment"},"// For more information about this error, try `rustc --explain E0381`."),s(`
`),n("span",{class:"token comment"},'// warning: `playground` (bin "playground") generated 1 warning'),s(`
`),n("span",{class:"token comment"},'// error: could not compile `playground` (bin "playground") due to previous error; 1 warning emitted'),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),P=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token comment"},"// Fix the error below with least amount of modification to the code"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" x"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"i32"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// uninitialized but using, ERROR !"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" y"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"i32"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// uninitialized but also unusing, only warning"),s(`
    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"{} is equal to 5"'),n("span",{class:"token punctuation"},","),s(" x"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"// Success!"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("h3",{id:"_2-🌟-use-mut-to-mark-a-variable-as-mutable",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2-🌟-use-mut-to-mark-a-variable-as-mutable","aria-hidden":"true"},"#"),s(" 2. 🌟 Use mut to mark a variable as mutable.")],-1),T=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token comment"},"// Fill the blanks in the code to make it compile"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token constant"},"__"),s(),n("span",{class:"token constant"},"__"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token constant"},"__"),s(),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},";"),s(` 
    
    `),n("span",{class:"token macro property"},"assert_eq!"),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Success!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//    Compiling playground v0.0.1 (/playground)"),s(`
`),n("span",{class:"token comment"},"// error: expected one of `:`, `;`, `=`, `@`, or `|`, found `__`"),s(`
`),n("span",{class:"token comment"},"//  --> src/main.rs:4:12"),s(`
`),n("span",{class:"token comment"},"//   |"),s(`
`),n("span",{class:"token comment"},"// 4 |     let __ __ = 1;"),s(`
`),n("span",{class:"token comment"},"//   |            ^^ expected one of `:`, `;`, `=`, `@`, or `|`"),s(`
`),n("span",{class:"token comment"},"// "),s(`
`),n("span",{class:"token comment"},'// error: could not compile `playground` (bin "playground") due to previous error'),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),N=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token comment"},"// Fill the blanks in the code to make it compile"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token keyword"},"mut"),s(" x "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
    x `),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token macro property"},"assert_eq!"),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Success!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"// Success!:"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),U=n("hr",null,null,-1),V=n("h2",{id:"scope",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#scope","aria-hidden":"true"},"#"),s(" Scope")],-1),I=n("p",null,"A scope is the range within the program for which the item is valid.",-1),B=n("h3",{id:"_3-🌟",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3-🌟","aria-hidden":"true"},"#"),s(" 3. 🌟")],-1),O=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token comment"},"// Fix the error below with least amount of modification"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" x"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"i32"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" y"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"i32"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"The value of x is {} and value of y is {}"'),n("span",{class:"token punctuation"},","),s(" x"),n("span",{class:"token punctuation"},","),s(" y"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"The value of x is {} and value of y is {}"'),n("span",{class:"token punctuation"},","),s(" x"),n("span",{class:"token punctuation"},","),s(" y"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(` 
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//    Compiling playground v0.0.1 (/playground)"),s(`
`),n("span",{class:"token comment"},"// error[E0425]: cannot find value `y` in this scope"),s(`
`),n("span",{class:"token comment"},"//  --> src/main.rs:9:62"),s(`
`),n("span",{class:"token comment"},"//   |"),s(`
`),n("span",{class:"token comment"},'// 9 |     println!("The value of x is {} and value of y is {}", x, y); '),s(`
`),n("span",{class:"token comment"},"//   |                                                              ^ help: a local variable with a similar name exists: `x`"),s(`
`),n("span",{class:"token comment"},"// "),s(`
`),n("span",{class:"token comment"},"// For more information about this error, try `rustc --explain E0425`."),s(`
`),n("span",{class:"token comment"},'// error: could not compile `playground` (bin "playground") due to previous error'),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),D=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token comment"},"// Fix the error below with least amount of modification"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" x"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"i32"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" y"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"i32"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" y"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"i32"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"The value of x is {} and value of y is {}"'),n("span",{class:"token punctuation"},","),s(" x"),n("span",{class:"token punctuation"},","),s(" y"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"The value of x is {} and value of y is {}"'),n("span",{class:"token punctuation"},","),s(" x"),n("span",{class:"token punctuation"},","),s(" y"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(` 
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"// The value of x is 10 and value of y is 5"),s(`
`),n("span",{class:"token comment"},"// The value of x is 10 and value of y is 20"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),W=n("h3",{id:"_4-🌟🌟",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_4-🌟🌟","aria-hidden":"true"},"#"),s(" 4. 🌟🌟")],-1),Y=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token comment"},"// Fix the error with the use of define_x"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"{}, world"'),n("span",{class:"token punctuation"},","),s(" x"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(` 
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"define_x"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" x "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"hello"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//    Compiling playground v0.0.1 (/playground)"),s(`
`),n("span",{class:"token comment"},"// error[E0425]: cannot find value `x` in this scope"),s(`
`),n("span",{class:"token comment"},"//  --> src/main.rs:4:27"),s(`
`),n("span",{class:"token comment"},"//   |"),s(`
`),n("span",{class:"token comment"},'// 4 |     println!("{}, world", x); '),s(`
`),n("span",{class:"token comment"},"//   |                           ^ not found in this scope"),s(`
`),n("span",{class:"token comment"},"// "),s(`
`),n("span",{class:"token comment"},"// For more information about this error, try `rustc --explain E0425`."),s(`
`),n("span",{class:"token comment"},'// error: could not compile `playground` (bin "playground") due to previous error'),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),L=n("p",null,null,-1),$=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token comment"},"// Fix the error with the use of define_x"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" x "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"define_x"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"{}, world"'),n("span",{class:"token punctuation"},","),s(" x"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(` 
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"define_x"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"->"),s(),n("span",{class:"token class-name"},"String"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" x "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"hello"'),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"to_string"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    x
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"// "),s(`
`),n("span",{class:"token comment"},"// "),s(`
`),n("span",{class:"token comment"},"// hello, world"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),j=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token comment"},"// Fix the error below with least amount of modification"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" x "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"define_x"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"{:?}, world"'),n("span",{class:"token punctuation"},","),s(" x"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"define_x"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"->"),s(),n("span",{class:"token operator"},"&"),n("span",{class:"token lifetime-annotation symbol"},"'static"),s(),n("span",{class:"token keyword"},"str"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" x "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"hello"'),n("span",{class:"token punctuation"},";"),s(`
    x
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},'// "hello", world'),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),K=n("hr",null,null,-1),M=n("h2",{id:"shadowing",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#shadowing","aria-hidden":"true"},"#"),s(" Shadowing")],-1),Z=n("p",null,"You can declare a new variable with the same name as a previous variable, here we can say **the first one is shadowed by the second one.",-1),G=n("h3",{id:"_5-🌟🌟",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_5-🌟🌟","aria-hidden":"true"},"#"),s(" 5. 🌟🌟")],-1),H=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token comment"},"// Only modify `assert_eq!` to make the `println!` work(print `42` in terminal)"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" x"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"i32"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" x "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"12"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token macro property"},"assert_eq!"),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token macro property"},"assert_eq!"),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"12"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"let"),s(" x "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"42"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"{}"'),n("span",{class:"token punctuation"},","),s(" x"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},'// Prints "42".'),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//   Compiling playground v0.0.1 (/playground)"),s(`
`),n("span",{class:"token comment"},"//     Finished dev [unoptimized + debuginfo] target(s) in 0.55s"),s(`
`),n("span",{class:"token comment"},"//      Running `target/debug/playground`"),s(`
`),n("span",{class:"token comment"},"// thread 'main' panicked at 'assertion failed: `(left == right)`"),s(`
`),n("span",{class:"token comment"},"//   left: `12`,"),s(`
`),n("span",{class:"token comment"},"//  right: `5`', src/main.rs:7:9"),s(`
`),n("span",{class:"token comment"},"// note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),J=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token comment"},"// Only modify `assert_eq!` to make the `println!` work(print `42` in terminal)"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" x"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"i32"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" x "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"12"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token macro property"},"assert_eq!"),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"12"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token macro property"},"assert_eq!"),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"let"),s(" x "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"42"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"{}"'),n("span",{class:"token punctuation"},","),s(" x"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},'// Prints "42".'),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"// 42"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Q=n("h3",{id:"_6-🌟🌟",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-🌟🌟","aria-hidden":"true"},"#"),s(" 6. 🌟🌟")],-1),X=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token comment"},"// Remove a line in the code to make it compile"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token keyword"},"mut"),s(" x"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"i32"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
    x `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"7"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token comment"},"// Shadowing and re-binding"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" x "),n("span",{class:"token operator"},"="),s(" x"),n("span",{class:"token punctuation"},";"),s(` 
    x `),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},";"),s(`


    `),n("span",{class:"token keyword"},"let"),s(" y "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token comment"},"// Shadowing"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" y "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"I can also be bound to text!"'),n("span",{class:"token punctuation"},";"),s(` 

    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Success!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//    Compiling playground v0.0.1 (/playground)"),s(`
`),n("span",{class:"token comment"},"// warning: value assigned to `x` is never read"),s(`
`),n("span",{class:"token comment"},"//  --> src/main.rs:4:13"),s(`
`),n("span",{class:"token comment"},"//   |"),s(`
`),n("span",{class:"token comment"},"// 4 |     let mut x: i32 = 1;"),s(`
`),n("span",{class:"token comment"},"//   |             ^"),s(`
`),n("span",{class:"token comment"},"//   |"),s(`
`),n("span",{class:"token comment"},"//   = help: maybe it is overwritten before being read?"),s(`
`),n("span",{class:"token comment"},"//   = note: `#[warn(unused_assignments)]` on by default"),s(`
`),n("span",{class:"token comment"},"// "),s(`
`),n("span",{class:"token comment"},"// warning: variable `x` is assigned to, but never used"),s(`
`),n("span",{class:"token comment"},"//  --> src/main.rs:7:9"),s(`
`),n("span",{class:"token comment"},"//   |"),s(`
`),n("span",{class:"token comment"},"// 7 |     let x = x; "),s(`
`),n("span",{class:"token comment"},"//   |         ^"),s(`
`),n("span",{class:"token comment"},"//   |"),s(`
`),n("span",{class:"token comment"},"//   = note: consider using `_x` instead"),s(`
`),n("span",{class:"token comment"},"//   = note: `#[warn(unused_variables)]` on by default"),s(`
`),n("span",{class:"token comment"},"// "),s(`
`),n("span",{class:"token comment"},"// warning: value assigned to `x` is never read"),s(`
`),n("span",{class:"token comment"},"//  --> src/main.rs:8:5"),s(`
`),n("span",{class:"token comment"},"//   |"),s(`
`),n("span",{class:"token comment"},"// 8 |     x += 3;"),s(`
`),n("span",{class:"token comment"},"//   |     ^"),s(`
`),n("span",{class:"token comment"},"//   |"),s(`
`),n("span",{class:"token comment"},"//   = help: maybe it is overwritten before being read?"),s(`
`),n("span",{class:"token comment"},"// "),s(`
`),n("span",{class:"token comment"},"// warning: unused variable: `y`"),s(`
`),n("span",{class:"token comment"},"//   --> src/main.rs:11:9"),s(`
`),n("span",{class:"token comment"},"//    |"),s(`
`),n("span",{class:"token comment"},"// 11 |     let y = 4;"),s(`
`),n("span",{class:"token comment"},"//    |         ^ help: if this is intentional, prefix it with an underscore: `_y`"),s(`
`),n("span",{class:"token comment"},"// "),s(`
`),n("span",{class:"token comment"},"// warning: unused variable: `y`"),s(`
`),n("span",{class:"token comment"},"//   --> src/main.rs:13:9"),s(`
`),n("span",{class:"token comment"},"//    |"),s(`
`),n("span",{class:"token comment"},'// 13 |     let y = "I can also be bound to text!"; '),s(`
`),n("span",{class:"token comment"},"//    |         ^ help: if this is intentional, prefix it with an underscore: `_y`"),s(`
`),n("span",{class:"token comment"},"// "),s(`
`),n("span",{class:"token comment"},"// error[E0384]: cannot assign twice to immutable variable `x`"),s(`
`),n("span",{class:"token comment"},"//  --> src/main.rs:8:5"),s(`
`),n("span",{class:"token comment"},"//   |"),s(`
`),n("span",{class:"token comment"},"// 7 |     let x = x; "),s(`
`),n("span",{class:"token comment"},"//   |         -"),s(`
`),n("span",{class:"token comment"},"//   |         |"),s(`
`),n("span",{class:"token comment"},"//   |         first assignment to `x`"),s(`
`),n("span",{class:"token comment"},"//   |         help: consider making this binding mutable: `mut x`"),s(`
`),n("span",{class:"token comment"},"// 8 |     x += 3;"),s(`
`),n("span",{class:"token comment"},"//   |     ^^^^^^ cannot assign twice to immutable variable"),s(`
`),n("span",{class:"token comment"},"// "),s(`
`),n("span",{class:"token comment"},"// For more information about this error, try `rustc --explain E0384`."),s(`
`),n("span",{class:"token comment"},'// warning: `playground` (bin "playground") generated 5 warnings'),s(`
`),n("span",{class:"token comment"},'// error: could not compile `playground` (bin "playground") due to previous error; 5 warnings emitted'),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),nn=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token comment"},"// Remove a line in the code to make it compile"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token keyword"},"mut"),s(" x"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"i32"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
    x `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"7"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token comment"},"// Shadowing and re-binding"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" x "),n("span",{class:"token operator"},"="),s(" x"),n("span",{class:"token punctuation"},";"),s(`


    `),n("span",{class:"token keyword"},"let"),s(" y "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token comment"},"// Shadowing"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" y "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"I can also be bound to text!"'),n("span",{class:"token punctuation"},";"),s(` 

    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Success!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"// Success!"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),sn=p('<hr><h2 id="unused-variables" tabindex="-1"><a class="header-anchor" href="#unused-variables" aria-hidden="true">#</a> Unused variables</h2><h3 id="_7-fix-the-warning-below-with" tabindex="-1"><a class="header-anchor" href="#_7-fix-the-warning-below-with" aria-hidden="true">#</a> 7. Fix the warning below with :</h3><ul><li>🌟 Only one solution</li><li>🌟🌟 Two distinct solutions</li></ul><div class="hint-container note"><p class="hint-container-title">Note</p><p>none of the solutions is to remove the line <code>let x = 1</code></p></div>',5),an=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" x "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(` 
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"// Warning: unused variable: `x`"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"// No output"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),en=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" _x "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),tn=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token attribute attr-name"},"#[allow(unused_variables)]"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" x "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),on=p('<hr><h2 id="destructuring" tabindex="-1"><a class="header-anchor" href="#destructuring" aria-hidden="true">#</a> Destructuring</h2><h3 id="_8-🌟🌟-we-can-use-a-pattern-with-let-to-destructure-a-tuple-to-separate-variables" tabindex="-1"><a class="header-anchor" href="#_8-🌟🌟-we-can-use-a-pattern-with-let-to-destructure-a-tuple-to-separate-variables" aria-hidden="true">#</a> 8. 🌟🌟 We can use a pattern with let to destructure a tuple to separate variables.</h3><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>you can use Shadowing or Mutability</p></div>',4),ln=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token comment"},"// Fix the error below with least amount of modification"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token punctuation"},","),s(" y"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    x `),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token macro property"},"assert_eq!"),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token macro property"},"assert_eq!"),n("span",{class:"token punctuation"},"("),s("y"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Success!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//    Compiling playground v0.0.1 (/playground)"),s(`
`),n("span",{class:"token comment"},"// error[E0384]: cannot assign twice to immutable variable `x`"),s(`
`),n("span",{class:"token comment"},"//  --> src/main.rs:5:5"),s(`
`),n("span",{class:"token comment"},"//   |"),s(`
`),n("span",{class:"token comment"},"// 4 |     let (x, y) = (1, 2);"),s(`
`),n("span",{class:"token comment"},"//   |          -"),s(`
`),n("span",{class:"token comment"},"//   |          |"),s(`
`),n("span",{class:"token comment"},"//   |          first assignment to `x`"),s(`
`),n("span",{class:"token comment"},"//   |          help: consider making this binding mutable: `mut x`"),s(`
`),n("span",{class:"token comment"},"// 5 |     x += 2;"),s(`
`),n("span",{class:"token comment"},"//   |     ^^^^^^ cannot assign twice to immutable variable"),s(`
`),n("span",{class:"token comment"},"// "),s(`
`),n("span",{class:"token comment"},"// For more information about this error, try `rustc --explain E0384`."),s(`
`),n("span",{class:"token comment"},'// error: could not compile `playground` (bin "playground") due to previous error'),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),cn=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token comment"},"// Fix the error below with least amount of modification"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"mut"),s(" x"),n("span",{class:"token punctuation"},","),s(" y"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    x `),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token macro property"},"assert_eq!"),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token macro property"},"assert_eq!"),n("span",{class:"token punctuation"},"("),s("y"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),un=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token comment"},"// Fix the error below with least amount of modification"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token punctuation"},","),s(" y"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" x "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token macro property"},"assert_eq!"),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token macro property"},"assert_eq!"),n("span",{class:"token punctuation"},"("),s("y"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),pn=p('<hr><h2 id="destructuring-assignments" tabindex="-1"><a class="header-anchor" href="#destructuring-assignments" aria-hidden="true">#</a> Destructuring assignments</h2><p>Introduced in Rust 1.59: You can now use tuple, slice, and struct patterns as the left-hand side of an assignment.</p><h3 id="_9-🌟🌟" tabindex="-1"><a class="header-anchor" href="#_9-🌟🌟" aria-hidden="true">#</a> 9. 🌟🌟</h3><div class="hint-container note"><p class="hint-container-title">Note</p><p>the feature <code>Destructuring assignments</code> need 1.59 or higher Rust version</p></div>',5),rn=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token punctuation"},","),s(" y"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token punctuation"},","),n("span",{class:"token punctuation"},".."),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},".."),n("span",{class:"token punctuation"},","),s(" y"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token comment"},"// Fill the blank to make the code work"),s(`
    `),n("span",{class:"token macro property"},"assert_eq!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),s("x"),n("span",{class:"token punctuation"},","),s("y"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token constant"},"__"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Success!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(` 
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//   Compiling playground v0.0.1 (/playground)"),s(`
`),n("span",{class:"token comment"},"// error[E0425]: cannot find value `__` in this scope"),s(`
`),n("span",{class:"token comment"},"//  --> src/main.rs:7:23"),s(`
`),n("span",{class:"token comment"},"//   |"),s(`
`),n("span",{class:"token comment"},"// 7 |     assert_eq!([x,y], __);"),s(`
`),n("span",{class:"token comment"},"//   |                       ^^ not found in this scope"),s(`
`),n("span",{class:"token comment"},"// "),s(`
`),n("span",{class:"token comment"},"// For more information about this error, try `rustc --explain E0425`."),s(`
`),n("span",{class:"token comment"},'// error: could not compile `playground` (bin "playground") due to previous error'),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),mn=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token punctuation"},","),s(" y"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},".."),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},".."),n("span",{class:"token punctuation"},","),s(" y"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token comment"},"// fill the blank to make the code work"),s(`
    `),n("span",{class:"token macro property"},"assert_eq!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),s("x"),n("span",{class:"token punctuation"},","),s(" y"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),dn={class:"hint-container note"},kn=n("p",{class:"hint-container-title"},"Note",-1),bn={href:"https://github.com/sunface/rust-by-practice",target:"_blank",rel:"noopener noreferrer"},vn=n("code",null,"sunface/rust-by-practice",-1);function hn(r,gn){const c=u("router-link"),d=u("VPCard"),i=u("Tabs"),k=u("FontIcon"),b=u("ExternalLinkIcon");return h(),g("div",null,[n("h1",x,[S,s(" "+m(r.$frontmatter.title)+" 관련",1)]),n("blockquote",null,[n("p",null,m(r.$frontmatter.description),1)]),n("nav",A,[n("ul",null,[n("li",null,[e(c,{to:"#binding-and-mutability"},{default:a(()=>[s("Binding and mutability")]),_:1}),n("ul",null,[n("li",null,[e(c,{to:"#_1-🌟-a-variable-can-be-used-only-if-it-has-been-initialized"},{default:a(()=>[s("1. 🌟 A variable can be used only if it has been initialized.")]),_:1})]),n("li",null,[e(c,{to:"#_2-🌟-use-mut-to-mark-a-variable-as-mutable"},{default:a(()=>[s("2. 🌟 Use mut to mark a variable as mutable.")]),_:1})])])]),n("li",null,[e(c,{to:"#scope"},{default:a(()=>[s("Scope")]),_:1}),n("ul",null,[n("li",null,[e(c,{to:"#_3-🌟"},{default:a(()=>[s("3. 🌟")]),_:1})]),n("li",null,[e(c,{to:"#_4-🌟🌟"},{default:a(()=>[s("4. 🌟🌟")]),_:1})])])]),n("li",null,[e(c,{to:"#shadowing"},{default:a(()=>[s("Shadowing")]),_:1}),n("ul",null,[n("li",null,[e(c,{to:"#_5-🌟🌟"},{default:a(()=>[s("5. 🌟🌟")]),_:1})]),n("li",null,[e(c,{to:"#_6-🌟🌟"},{default:a(()=>[s("6. 🌟🌟")]),_:1})])])]),n("li",null,[e(c,{to:"#unused-variables"},{default:a(()=>[s("Unused variables")]),_:1}),n("ul",null,[n("li",null,[e(c,{to:"#_7-fix-the-warning-below-with"},{default:a(()=>[s("7. Fix the warning below with :")]),_:1})])])]),n("li",null,[e(c,{to:"#destructuring"},{default:a(()=>[s("Destructuring")]),_:1}),n("ul",null,[n("li",null,[e(c,{to:"#_8-🌟🌟-we-can-use-a-pattern-with-let-to-destructure-a-tuple-to-separate-variables"},{default:a(()=>[s("8. 🌟🌟 We can use a pattern with let to destructure a tuple to separate variables.")]),_:1})])])]),n("li",null,[e(c,{to:"#destructuring-assignments"},{default:a(()=>[s("Destructuring assignments")]),_:1}),n("ul",null,[n("li",null,[e(c,{to:"#_9-🌟🌟"},{default:a(()=>[s("9. 🌟🌟")]),_:1})])])])])]),F,e(d,f(y({title:"Rust By Practice",desc:"2. Variables",link:"https://practice.rs/variables.html",logo:"https://github.com/sunface/rust-by-practice/blob/master/en/assets/header.jpg?raw=true",color:"rgba(22, 25, 35, 0.2)"})),null,16),_(" https://practice.rs/elegant-code-base.html "),q,R,E,e(i,{id:"21",data:[{title:"💀Problem"},{title:"Solution"}],active:0},{tab0:a(({title:t,value:o,isActive:l})=>[z]),tab1:a(({title:t,value:o,isActive:l})=>[P]),_:1}),C,e(i,{id:"32",data:[{title:"💀Problem"},{title:"Solution"}],active:0},{tab0:a(({title:t,value:o,isActive:l})=>[T]),tab1:a(({title:t,value:o,isActive:l})=>[N]),_:1}),U,V,I,B,e(i,{id:"50",data:[{title:"💀Problem"},{title:"Solution"}],active:0},{tab0:a(({title:t,value:o,isActive:l})=>[O]),tab1:a(({title:t,value:o,isActive:l})=>[D]),_:1}),W,e(i,{id:"61",data:[{title:"💀Problem"},{title:"Solution 🌟"},{title:"Solution 🌟🌟"}],active:0},{tab0:a(({title:t,value:o,isActive:l})=>[Y,L]),tab1:a(({title:t,value:o,isActive:l})=>[$]),tab2:a(({title:t,value:o,isActive:l})=>[j]),_:1}),K,M,Z,G,e(i,{id:"85",data:[{title:"💀Problem"},{title:"Solution"}],active:0},{tab0:a(({title:t,value:o,isActive:l})=>[H]),tab1:a(({title:t,value:o,isActive:l})=>[J]),_:1}),Q,e(i,{id:"96",data:[{title:"💀Problem"},{title:"Solution"}],active:0},{tab0:a(({title:t,value:o,isActive:l})=>[X]),tab1:a(({title:t,value:o,isActive:l})=>[nn]),_:1}),sn,e(i,{id:"128",data:[{title:"💀Problem"},{title:"Solution 🌟"},{title:"Solution 🌟🌟"}],active:0},{tab0:a(({title:t,value:o,isActive:l})=>[an]),tab1:a(({title:t,value:o,isActive:l})=>[en]),tab2:a(({title:t,value:o,isActive:l})=>[tn]),_:1}),on,e(i,{id:"151",data:[{title:"💀Problem"},{title:"Solution 🌟"},{title:"Solution 🌟🌟"}],active:0},{tab0:a(({title:t,value:o,isActive:l})=>[ln]),tab1:a(({title:t,value:o,isActive:l})=>[cn]),tab2:a(({title:t,value:o,isActive:l})=>[un]),_:1}),pn,e(i,{id:"177",data:[{title:"💀Problem"},{title:"Solution"}],active:0},{tab0:a(({title:t,value:o,isActive:l})=>[rn]),tab1:a(({title:t,value:o,isActive:l})=>[mn]),_:1}),n("div",dn,[kn,n("p",null,[s("You can find the solutions "),n("a",bn,[s("here ("),e(k,{icon:"iconfont icon-github"}),vn,s(")"),e(b)]),s(" (under the solutions path), but only use it when you need it")])])])}const yn=v(w,[["render",hn],["__file","02-variables.html.vue"]]);export{yn as default};
