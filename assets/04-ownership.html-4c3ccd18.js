import{_ as h,r as c,o as f,c as g,a as n,b as s,t as p,d as e,w as a,n as y,g as _,f as w,e as d}from"./app-d223f2a5.js";const x={},S={id:"frontmatter-title-관련",tabindex:"-1"},E=n("a",{class:"header-anchor",href:"#frontmatter-title-관련","aria-hidden":"true"},"#",-1),A={class:"table-of-contents"},C=n("hr",null,null,-1),P=d('<hr><h2 id="understanding-ownership" tabindex="-1"><a class="header-anchor" href="#understanding-ownership" aria-hidden="true">#</a> Understanding Ownership</h2><p>Ownership is Rust’s most unique feature and has deep implications for the rest of the language. It enables Rust to make memory safety guarantees without needing a garbage collector, so it’s important to understand how ownership works. In this chapter, we’ll talk about ownership as well as several related features: borrowing, slices, and how Rust lays data out in memory.</p><hr><h2 id="ownership" tabindex="-1"><a class="header-anchor" href="#ownership" aria-hidden="true">#</a> Ownership</h2><h4 id="_1-🌟🌟" tabindex="-1"><a class="header-anchor" href="#_1-🌟🌟" aria-hidden="true">#</a> 1. 🌟🌟</h4>',6),q=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// Use as many approaches as you can to make it work"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" x "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},"::"),n("span",{class:"token function"},"from"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"hello, world"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" y "),n("span",{class:"token operator"},"="),s(" x"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"{},{}"'),n("span",{class:"token punctuation"},","),s("x"),n("span",{class:"token punctuation"},","),s("y"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},`/*
     Compiling playground v0.0.1 (/playground)
  error[E0382]: borrow of moved value: \`x\`
   --> src/main.rs:6:22
    |
  4 |     let x = String::from("hello, world");
    |         - move occurs because \`x\` has type \`String\`, which does not implement the \`Copy\` trait
  5 |     let y = x;
    |             - value moved here
  6 |     println!("{},{}",x,y);
    |                      ^ value borrowed here after move
    |
    = note: this error originates in the macro \`$crate::format_args_nl\` which comes from the expansion of the macro \`println\` (in Nightly builds, run with -Z macro-backtrace for more info)
  help: consider cloning the value if the performance cost is acceptable
    |
  5 |     let y = x.clone();
    |              ++++++++
  
  For more information about this error, try \`rustc --explain E0382\`.
  error: could not compile \`playground\` (bin "playground") due to previous error
*/`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),F=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// Use as many approaches as you can to make it work"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" x "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},"::"),n("span",{class:"token function"},"from"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"hello, world"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" y "),n("span",{class:"token operator"},"="),s(" x"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"{},{}"'),n("span",{class:"token punctuation"},","),s("x"),n("span",{class:"token punctuation"},","),s("y"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),I=n("h4",{id:"_2-🌟🌟",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2-🌟🌟","aria-hidden":"true"},"#"),s(" 2. 🌟🌟")],-1),T=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token comment"},"// Don't modify code in main!"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" s1 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},"::"),n("span",{class:"token function"},"from"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"hello, world"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" s2 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"take_ownership"),n("span",{class:"token punctuation"},"("),s("s1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"{}"'),n("span",{class:"token punctuation"},","),s(" s2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// Only modify the code below!"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"take_ownership"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"{}"'),n("span",{class:"token punctuation"},","),s(" s"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},'/*\n     Compiling playground v0.0.1 (/playground)\n  error[E0277]: `()` doesn\'t implement `std::fmt::Display`\n   --> src/main.rs:6:20\n    |\n  6 |     println!("{}", s2);\n    |                    ^^ `()` cannot be formatted with the default formatter\n    |\n    = help: the trait `std::fmt::Display` is not implemented for `()`\n    = note: in format strings you may be able to use `{:?}` (or {:#?} for pretty-print) instead\n    = note: this error originates in the macro `$crate::format_args_nl` which comes from the expansion of the macro `println` (in Nightly builds, run with -Z macro-backtrace for more info)\n  \n  For more information about this error, try `rustc --explain E0277`.\n  error: could not compile `playground` (bin "playground") due to previous error\n*/'),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),O=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token comment"},"// Don't modify code in main!"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" s1 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},"::"),n("span",{class:"token function"},"from"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"hello, world"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" s2 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"take_ownership"),n("span",{class:"token punctuation"},"("),s("s1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"{}"'),n("span",{class:"token punctuation"},","),s(" s2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// Only modify the code below!"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"take_ownership"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"{}"'),n("span",{class:"token punctuation"},","),s(" s"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),V=n("h4",{id:"_3-🌟🌟",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3-🌟🌟","aria-hidden":"true"},"#"),s(" 3. 🌟🌟")],-1),B=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" s "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"give_ownership"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"{}"'),n("span",{class:"token punctuation"},","),s(" s"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// Only modify the code below!"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"give_ownership"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"->"),s(),n("span",{class:"token class-name"},"String"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" s "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},"::"),n("span",{class:"token function"},"from"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"hello, world"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token comment"},"// Convert String to Vec"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" _s "),n("span",{class:"token operator"},"="),s(" s"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"into_bytes"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    s
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},'/*\n     Compiling playground v0.0.1 (/playground)\n  error[E0382]: use of moved value: `s`\n    --> src/main.rs:12:5\n     |\n  9  |     let s = String::from("hello, world");\n     |         - move occurs because `s` has type `String`, which does not implement the `Copy` trait\n  10 |     // Convert String to Vec\n  11 |     let _s = s.into_bytes();\n     |                ------------ `s` moved due to this method call\n  12 |     s\n     |     ^ value used here after move\n     |\n  note: `String::into_bytes` takes ownership of the receiver `self`, which moves `s`\n    --> /rustc/cc66ad468955717ab92600c770da8c1601a4ff33/library/alloc/src/string.rs:849:23\n  help: you can `clone` the value and consume it, but this might not be your desired behavior\n     |\n  11 |     let _s = s.clone().into_bytes();\n     |               ++++++++\n  \n  For more information about this error, try `rustc --explain E0382`.\n  error: could not compile `playground` (bin "playground") due to previous error\n*/'),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),D=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" s "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"give_ownership"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"{}"'),n("span",{class:"token punctuation"},","),s(" s"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// Only modify the code below!"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"give_ownership"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"->"),s(),n("span",{class:"token class-name"},"String"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" s "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},"::"),n("span",{class:"token function"},"from"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"hello, world"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token comment"},"// Convert String to Vec"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" _s "),n("span",{class:"token operator"},"="),s(" s"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"into_bytes"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    s
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),N=n("h4",{id:"_4-🌟🌟",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_4-🌟🌟","aria-hidden":"true"},"#"),s(" 4. 🌟🌟")],-1),M=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token comment"},"// Fix the error without removing code line"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" s "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},"::"),n("span",{class:"token function"},"from"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"hello, world"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token function"},"print_str"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"{}"'),n("span",{class:"token punctuation"},","),s(" s"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"print_str"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},")"),s("  "),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"{}"'),n("span",{class:"token punctuation"},","),s("s"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},`/*
     Compiling playground v0.0.1 (/playground)
  error[E0382]: borrow of moved value: \`s\`
    --> src/main.rs:7:20
     |
  3  |     let s = String::from("hello, world");
     |         - move occurs because \`s\` has type \`String\`, which does not implement the \`Copy\` trait
  4  |
  5  |     print_str(s);
     |               - value moved here
  6  |
  7  |     println!("{}", s);
     |                    ^ value borrowed here after move
     |
  note: consider changing this parameter type in function \`print_str\` to borrow instead if owning the value isn't necessary
    --> src/main.rs:10:17
     |
  10 | fn print_str(s: String)  {
     |    ---------    ^^^^^^ this parameter takes ownership of the value
     |    |
     |    in this function
     = note: this error originates in the macro \`$crate::format_args_nl\` which comes from the expansion of the macro \`println\` (in Nightly builds, run with -Z macro-backtrace for more info)
  help: consider cloning the value if the performance cost is acceptable
     |
  5  |     print_str(s.clone());
     |                ++++++++
  
  For more information about this error, try \`rustc --explain E0382\`.
  error: could not compile \`playground\` (bin "playground") due to previous error
*/`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),$=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token comment"},"// Fix the error without removing code line"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" s "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},"::"),n("span",{class:"token function"},"from"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"hello, world"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token function"},"print_str"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"{}"'),n("span",{class:"token punctuation"},","),s(" s"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"print_str"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},")"),s("  "),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"{}"'),n("span",{class:"token punctuation"},","),s("s"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),R=n("h4",{id:"_5-🌟🌟",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_5-🌟🌟","aria-hidden":"true"},"#"),s(" 5. 🌟🌟")],-1),L=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token comment"},"// Don't use clone ,use copy instead"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" x "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"hello"'),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"to_string"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" y "),n("span",{class:"token operator"},"="),s(" x"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"clone"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"{:?}, {:?}"'),n("span",{class:"token punctuation"},","),s(" x"),n("span",{class:"token punctuation"},","),s(" y"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},`/*
  (1, 2, (), "hello"), (1, 2, (), "hello")
*/`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),U=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token comment"},"// Don't use clone ,use copy instead"),s(`
`),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" x "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"hello"'),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"to_string"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" y "),n("span",{class:"token operator"},"="),s(" x"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"clone"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"{:?}, {:?}"'),n("span",{class:"token punctuation"},","),s(" x"),n("span",{class:"token punctuation"},","),s(" y"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Z=n("h3",{id:"mutability",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#mutability","aria-hidden":"true"},"#"),s(" Mutability")],-1),j=n("p",null,"Mutability can be changed when ownership is transferred.",-1),z=n("h4",{id:"_6-🌟",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-🌟","aria-hidden":"true"},"#"),s(" 6. 🌟")],-1),W=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" s "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},"::"),n("span",{class:"token function"},"from"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"hello, "'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    
    `),n("span",{class:"token comment"},"// Modify this line only !"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" s1 "),n("span",{class:"token operator"},"="),s(" s"),n("span",{class:"token punctuation"},";"),s(`

    s1`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push_str"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"world"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Success!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},`/*
     Compiling playground v0.0.1 (/playground)
  error[E0596]: cannot borrow \`s1\` as mutable, as it is not declared as mutable
   --> src/main.rs:8:5
    |
  8 |     s1.push_str("world");
    |     ^^ cannot borrow as mutable
    |
  help: consider changing this to be mutable
    |
  6 |     let mut s1 = s;
    |         +++
  
  For more information about this error, try \`rustc --explain E0596\`.
  error: could not compile \`playground\` (bin "playground") due to previous error
*/`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Y=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" s "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},"::"),n("span",{class:"token function"},"from"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"hello, "'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    
    `),n("span",{class:"token comment"},"// Modify this line only !"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" s1 "),n("span",{class:"token operator"},"="),s(" s"),n("span",{class:"token punctuation"},";"),s(`

    s1`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push_str"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"world"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Success!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),G=n("h4",{id:"_7-🌟🌟🌟",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_7-🌟🌟🌟","aria-hidden":"true"},"#"),s(" 7. 🌟🌟🌟")],-1),H=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" x "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"Box"),n("span",{class:"token punctuation"},"::"),n("span",{class:"token function"},"new"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    
    `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token punctuation"},"..."),s("      "),n("span",{class:"token comment"},"// Implement this line, dont change other lines!"),s(`
    
    `),n("span",{class:"token operator"},"*"),s("y "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},";"),s(`
    
    `),n("span",{class:"token macro property"},"assert_eq!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"*"),s("x"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Success!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},`/*
     Compiling playground v0.0.1 (/playground)
  error: unexpected \`...\`
   --> src/main.rs:5:9
    |
  5 |     let ...      // Implement this line, dont change other lines!
    |         ^^^
    |         |
    |         not a valid pattern
    |         help: for a rest pattern, use \`..\` instead of \`...\`
  
  error: expected \`;\`, found \`*\`
   --> src/main.rs:5:12
    |
  5 |     let ...      // Implement this line, dont change other lines!
    |            ^ help: add \`;\` here
  6 |     
  7 |     *y = 4;
    |     - unexpected token
  
  error[E0425]: cannot find value \`y\` in this scope
   --> src/main.rs:7:6
    |
  7 |     *y = 4;
    |      ^ help: a local variable with a similar name exists: \`x\`
  
  error: \`..\` patterns are not allowed here
   --> src/main.rs:5:9
    |
  5 |     let ...      // Implement this line, dont change other lines!
    |         ^^^
    |
    = note: only allowed in tuple, tuple struct, and slice patterns
  
  For more information about this error, try \`rustc --explain E0425\`.
  error: could not compile \`playground\` (bin "playground") due to 4 previous errors
*/`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),J=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" x "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"Box"),n("span",{class:"token punctuation"},"::"),n("span",{class:"token function"},"new"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    
    `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token punctuation"},"..."),s("      "),n("span",{class:"token comment"},"// Implement this line, dont change other lines!"),s(`
    
    `),n("span",{class:"token operator"},"*"),s("y "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},";"),s(`
    
    `),n("span",{class:"token macro property"},"assert_eq!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"*"),s("x"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Success!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),K=d(`<h3 id="partial-move" tabindex="-1"><a class="header-anchor" href="#partial-move" aria-hidden="true">#</a> Partial move</h3><p>Within the destructuring of a single variable, both by-move and by-reference pattern bindings can be used at the same time. Doing this will result in a partial move of the variable, which means that parts of the variable will be moved while other parts stay. In such a case, the parent variable cannot be used afterwards as a whole, however the parts that are only referenced (and not moved) can still be used.</p><h4 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h4><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token attribute attr-name">#[derive(Debug)]</span>
    <span class="token keyword">struct</span> <span class="token type-definition class-name">Person</span> <span class="token punctuation">{</span>
        name<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">,</span>
        age<span class="token punctuation">:</span> <span class="token class-name">Box</span><span class="token operator">&lt;</span><span class="token keyword">u8</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
        name<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;Alice&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        age<span class="token punctuation">:</span> <span class="token class-name">Box</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">// \`name\` is moved out of person, but \`age\` is referenced</span>
    <span class="token keyword">let</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> <span class="token keyword">ref</span> age <span class="token punctuation">}</span> <span class="token operator">=</span> person<span class="token punctuation">;</span>

    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;The person&#39;s age is {}&quot;</span><span class="token punctuation">,</span> age<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;The person&#39;s name is {}&quot;</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Error! borrow of partially moved value: \`person\` partial move occurs</span>
    <span class="token comment">//println!(&quot;The person struct is {:?}&quot;, person);</span>

    <span class="token comment">// \`person\` cannot be used but \`person.age\` can be used as it is not moved</span>
    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;The person&#39;s age from person struct is {}&quot;</span><span class="token punctuation">,</span> person<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//</span>
<span class="token comment">//</span>
<span class="token comment">/*
  The person&#39;s age is 20
  The person&#39;s name is Alice
  The person&#39;s age from person struct is 20
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="exercises" tabindex="-1"><a class="header-anchor" href="#exercises" aria-hidden="true">#</a> Exercises</h3><h4 id="_8-🌟" tabindex="-1"><a class="header-anchor" href="#_8-🌟" aria-hidden="true">#</a> 8. 🌟</h4>`,6),Q=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
   `),n("span",{class:"token keyword"},"let"),s(" t "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},"::"),n("span",{class:"token function"},"from"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"hello"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},"::"),n("span",{class:"token function"},"from"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"world"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

   `),n("span",{class:"token keyword"},"let"),s(" _s "),n("span",{class:"token operator"},"="),s(" t"),n("span",{class:"token number"},".0"),n("span",{class:"token punctuation"},";"),s(`

   `),n("span",{class:"token comment"},"// Modify this line only, don't use `_s`"),s(`
   `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"{:?}"'),n("span",{class:"token punctuation"},","),s(" t"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},'/*\n     Compiling playground v0.0.1 (/playground)\n  error[E0382]: borrow of partially moved value: `t`\n   --> src/main.rs:8:21\n    |\n  5 |    let _s = t.0;\n    |             --- value partially moved here\n  ...\n  8 |    println!("{:?}", t);\n    |                     ^ value borrowed here after partial move\n    |\n    = note: partial move occurs because `t.0` has type `String`, which does not implement the `Copy` trait\n    = note: this error originates in the macro `$crate::format_args_nl` which comes from the expansion of the macro `println` (in Nightly builds, run with -Z macro-backtrace for more info)\n  \n  For more information about this error, try `rustc --explain E0382`.\n  error: could not compile `playground` (bin "playground") due to previous error\n*/'),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),X=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
   `),n("span",{class:"token keyword"},"let"),s(" t "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},"::"),n("span",{class:"token function"},"from"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"hello"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},"::"),n("span",{class:"token function"},"from"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"world"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

   `),n("span",{class:"token keyword"},"let"),s(" _s "),n("span",{class:"token operator"},"="),s(" t"),n("span",{class:"token number"},".0"),n("span",{class:"token punctuation"},";"),s(`

   `),n("span",{class:"token comment"},"// Modify this line only, don't use `_s`"),s(`
   `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"{:?}"'),n("span",{class:"token punctuation"},","),s(" t"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),nn=n("h4",{id:"_9-🌟🌟",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_9-🌟🌟","aria-hidden":"true"},"#"),s(" 9. 🌟🌟")],-1),sn=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
   `),n("span",{class:"token keyword"},"let"),s(" t "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},"::"),n("span",{class:"token function"},"from"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"hello"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},"::"),n("span",{class:"token function"},"from"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"world"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token comment"},"// Fill the blanks"),s(`
    `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token constant"},"__"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token constant"},"__"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token constant"},"__"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"{:?}, {:?}, {:?}"'),n("span",{class:"token punctuation"},","),s(" s1"),n("span",{class:"token punctuation"},","),s(" s2"),n("span",{class:"token punctuation"},","),s(" t"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},'// -> "hello", "world", ("hello", "world")'),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},"//"),s(`
`),n("span",{class:"token comment"},`/*
     Compiling playground v0.0.1 (/playground)
  error[E0416]: identifier \`__\` is bound more than once in the same pattern
   --> src/main.rs:6:14
    |
  6 |     let (__, __) = __;
    |              ^^ used in a pattern more than once
  
  error[E0425]: cannot find value \`__\` in this scope
   --> src/main.rs:6:20
    |
  6 |     let (__, __) = __;
    |                    ^^ not found in this scope
  
  error[E0425]: cannot find value \`s1\` in this scope
   --> src/main.rs:8:34
    |
  8 |     println!("{:?}, {:?}, {:?}", s1, s2, t); // -> "hello", "world", ("hello", "world")
    |                                  ^^ not found in this scope
  
  error[E0425]: cannot find value \`s2\` in this scope
   --> src/main.rs:8:38
    |
  8 |     println!("{:?}, {:?}, {:?}", s1, s2, t); // -> "hello", "world", ("hello", "world")
    |                                      ^^ not found in this scope
  
  Some errors have detailed explanations: E0416, E0425.
  For more information about an error, try \`rustc --explain E0416\`.
  error: could not compile \`playground\` (bin "playground") due to 4 previous errors
*/`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),an=n("div",{class:"language-rust line-numbers-mode","data-ext":"rs"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
   `),n("span",{class:"token keyword"},"let"),s(" t "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},"::"),n("span",{class:"token function"},"from"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"hello"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},"::"),n("span",{class:"token function"},"from"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"world"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token comment"},"// Fill the blanks"),s(`
    `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token constant"},"__"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token constant"},"__"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token constant"},"__"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token macro property"},"println!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"{:?}, {:?}, {:?}"'),n("span",{class:"token punctuation"},","),s(" s1"),n("span",{class:"token punctuation"},","),s(" s2"),n("span",{class:"token punctuation"},","),s(" t"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},'// -> "hello", "world", ("hello", "world")'),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),en={class:"hint-container note"},tn=n("p",{class:"hint-container-title"},"tips",-1),on={href:"https://github.com/sunface/rust-by-practice",target:"_blank",rel:"noopener noreferrer"},ln=n("code",null,"sunface/rust-by-practice",-1),cn=n("hr",null,null,-1);function un(r,rn){const u=c("router-link"),m=c("VPCard"),i=c("Tabs"),k=c("FontIcon"),v=c("ExternalLinkIcon"),b=c("TagLinks");return f(),g("div",null,[n("h1",S,[E,s(" "+p(r.$frontmatter.title)+" 관련",1)]),n("blockquote",null,[n("p",null,p(r.$frontmatter.description),1)]),n("nav",A,[n("ul",null,[n("li",null,[e(u,{to:"#understanding-ownership"},{default:a(()=>[s("Understanding Ownership")]),_:1})]),n("li",null,[e(u,{to:"#ownership"},{default:a(()=>[s("Ownership")]),_:1}),n("ul",null,[n("li",null,[e(u,{to:"#mutability"},{default:a(()=>[s("Mutability")]),_:1})]),n("li",null,[e(u,{to:"#partial-move"},{default:a(()=>[s("Partial move")]),_:1})]),n("li",null,[e(u,{to:"#exercises"},{default:a(()=>[s("Exercises")]),_:1})])])])])]),C,e(m,y(_({title:"Rust By Practice",desc:"4. Ownership and Borrowing",link:"https://practice.rs/ownership/ownership.html",logo:"https://github.com/sunface/rust-by-practice/blob/master/en/assets/header.jpg?raw=true",color:"rgba(22, 25, 35, 0.2)"})),null,16),w(" https://practice.rs/elegant-code-base.html "),P,e(i,{id:"28",data:[{title:"💀Problem"},{title:"Solution"}],active:0},{tab0:a(({title:t,value:o,isActive:l})=>[q]),tab1:a(({title:t,value:o,isActive:l})=>[F]),_:1}),I,e(i,{id:"39",data:[{title:"💀Problem"},{title:"Solution"}],active:0},{tab0:a(({title:t,value:o,isActive:l})=>[T]),tab1:a(({title:t,value:o,isActive:l})=>[O]),_:1}),V,e(i,{id:"50",data:[{title:"💀Problem"},{title:"Solution"}],active:0},{tab0:a(({title:t,value:o,isActive:l})=>[B]),tab1:a(({title:t,value:o,isActive:l})=>[D]),_:1}),N,e(i,{id:"61",data:[{title:"💀Problem"},{title:"Solution"}],active:0},{tab0:a(({title:t,value:o,isActive:l})=>[M]),tab1:a(({title:t,value:o,isActive:l})=>[$]),_:1}),R,e(i,{id:"72",data:[{title:"💀Problem"},{title:"Solution"}],active:0},{tab0:a(({title:t,value:o,isActive:l})=>[L]),tab1:a(({title:t,value:o,isActive:l})=>[U]),_:1}),Z,j,z,e(i,{id:"89",data:[{title:"💀Problem"},{title:"Solution"}],active:0},{tab0:a(({title:t,value:o,isActive:l})=>[W]),tab1:a(({title:t,value:o,isActive:l})=>[Y]),_:1}),G,e(i,{id:"100",data:[{title:"💀Problem"},{title:"Solution"}],active:0},{tab0:a(({title:t,value:o,isActive:l})=>[H]),tab1:a(({title:t,value:o,isActive:l})=>[J]),_:1}),K,e(i,{id:"124",data:[{title:"💀Problem"},{title:"Solution"}],active:0},{tab0:a(({title:t,value:o,isActive:l})=>[Q]),tab1:a(({title:t,value:o,isActive:l})=>[X]),_:1}),nn,e(i,{id:"135",data:[{title:"💀Problem"},{title:"Solution"}],active:0},{tab0:a(({title:t,value:o,isActive:l})=>[sn]),tab1:a(({title:t,value:o,isActive:l})=>[an]),_:1}),n("div",en,[tn,n("p",null,[s("You can find the solutions "),n("a",on,[s("here ("),e(k,{icon:"iconfont icon-github"}),ln,s(")"),e(v)]),s(" (under the solutions path), but only use it when you need it")])]),cn,e(b)])}const dn=h(x,[["render",un],["__file","04-ownership.html.vue"]]);export{dn as default};
