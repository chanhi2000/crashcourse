---
lang: ko-KR
title: Rust by Practice
description: Rust by Practice
icon: fa-brands fa-rust
category:
  - Rust
tag: 
  - crashcourse
  - freecodecamp.org
  - zubiarfan
  - youtube
  - rust
  - rs
  - wasm
  - assembly
head:
  - - meta:
    - property: og:title
      content: Rust by Practice
    - property: og:description
      content: Rust by Practice
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/rust/rust-by-practice/
isOriginal: false
cover: https://github.com/sunface/rust-by-practice/blob/master/en/assets/header.jpg?raw=true
---

# {{ $frontmatter.title }} 관련

<SiteInfo
  name="Rust By Practice"
  desc="Practice Rust with challenging examples, exercises and projects"
  url="https://practice.rs"
  logo="https://practice.course.rs/favicon.svg"
  preview="https://github.com/sunface/rust-by-practice/blob/master/en/assets/header.jpg?raw=true"/>

> Practice Rust with challenging examples, exercises and projects

This book was designed for easily diving into and get skilled with Rust, and it's very easy to use: All you need to do is to make each exercise compile without ERRORS and Panics !

[[toc]]

---

## Running locally

We use mdbook building our exercises. You can run locally with below steps:

```sh
cargo install mdbook
cd rust-by-practice && mdbook serve 
```

---

## Features

Part of our examples and exercises are borrowed from [<FontIcon icon="iconfont icon-github"/> Rust By Example](https://github.com/rust-lang/rust-by-example), thanks for your great works!

Although they are so awesome, we have our own secret weapons

- There are three parts in each chapter: examples, exercises and practices
- Besides examples, we have a _lot of exercises_, you can Read, Edit and Run them ONLINE
- Covering nearly all aspects of Rust, such as async/await, threads, sync primitives, optimizing, standard libraries, tool chain, data structures and algorithms etc.
- Every exercise has its own solutions
- The overall difficulties are a bit higher and from easy to super hard: easy 🌟 medium 🌟🌟 hard 🌟🌟🌟 super hard 🌟🌟🌟🌟

__What we want to do is fill in the gap between learning and getting started with real projects.__

---

## Table of Contents

- [1. Small projects with Elegant code](/rust/rust-by-practice/elegant-code-base.md)
- [2. Variables](/rust/rust-by-practice/variables.md)
- 3. Basic Types
  - [3.1. Numbers](/rust/rust-by-practice/basic-types/numbers.md)
  - [3.2. Char, Bool and Unit](/rust/rust-by-practice/basic-types/char-bool-unit.md)
  - [3.3. Statements and Expressions](/rust/rust-by-practice/basic-types/statements-expressions.md)
  - [3.4. Functions](/rust/rust-by-practice/basic-types/functions.md)
- 4. Ownership and Borrowing
  - [4.1. Ownership](/rust/rust-by-practice/ownership-borrowing/ownership.md)
  - [4.2. Reference and Borrowing](/rust/rust-by-practice/ownership-borrowing/borrowing.md)
- [5. Compound Types](05-compound-types.md)
- [6. Flow Control](06-flow-contro.md)
- [7. Pattern Match](07-pattern-match.md)
- [8. Method & Associated function](08-method.md)
- [9. Generics and Traits](09-generics-traits.md)
- [10. Collection Types](10-collections.md)
- [11. Type Conversion](11-type-conversions.md)
- [12. Result and panic](12-result-panic.md)
- [13. Crate and Module](13-crate-module.md)
- [14. Comments and Docs](14-comments-docs.md)
- [15. Formatted output](15-formatted-output.md)
- [16. Lifetime](16-lifetime.md)
- [17. Functional programing](17-functional-programing.md)
- [18. newtype and DST](18-newtype-sized.md)
- [19. Smart pointers TODO](19-smart-pointers.md)
- [20. Weak and Circle reference TODO](20-weak.md)
- [21. Self referential TODO](21-self-referential.md)
- [22. Threads TODO](22-threads.md)
- [23. Global variables TODO](23-global-variables.md)
- [24. Errors TODO](24-errors.md)
- [25. Unsafe doing](25-unsafe.md)
- [26. Macro TODO](26-macro.md)
- [27. Tests TODO](27-tests.md)
- [28. Async/Await TODO](28-async.md)
- [29. Standard Library TODO](29-std.md)
- [30. Fighting with Compiler](30-fight-compiler.md)

---
