---
lang: ko-KR
title: Rust to Assembly
description: Rust to Assembly
icon: fa-brands fa-rust
category: 
  - Rust
tag: 
  - crashcourse
  - digitalocean
  - eventhelix
  - rust
  - rs
  - wasm
  - assembly
head:
  - - meta:
    - property: og:title
      content: Rust to Assembly
    - property: og:description
      content: Rust to Assembly
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/rust/eventhelix-rust-toassembly/
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

## Understanding the Inner Workings of Rust

- [Rust enum and match representation in assembly](rust-enum-and-match-representation-in-assembly.md)
- [Assembly code generated when self is passed by value, reference or as a smart pointer](assembly-code-generated-when-self-is-passed-by-value-reference-or-as-a-smart-pointer.md)
- [Mapping Arrays, Tuples, Box and Option to assembly](mapping-arrays-tuples-box-and-option-to-assembly.md)
- [Map Rust vector iteration to assembly](rust-to-assembly-vector-iteration.md)

```component VPCard
{
  "title": "Mapping a bool vector to string slice vector",
  "desc": "Understand the assembly code generated when mapping a Vec<bool> to a Vec<& 'static str> (static string slice vector). The allocations and de-allocations operations are also covered.",
  "link": "https://eventhelix.com/rust/rust-to-assembly-mapping-to-str-slice-vector",
  "logo": "https://eventhelix.com/images/EventHelix-white-rounded-bg-blue.png",
  "background": "rgba(250,250,250,0.2)"
}
```

```component VPCard
{
  "title": "Mapping a bool vector to owned string vector",
  "desc": "Understand the assembly code generated when mapping a Vec<bool> to a Vec<String> (owned string). The allocations and de-allocations operations are also covered.",
  "link": "https://eventhelix.com/rust/rust-to-assembly-mapping-to-string-vector",
  "logo": "https://eventhelix.com/images/EventHelix-white-rounded-bg-blue.png",
  "background": "rgba(250,250,250,0.2)"
}
```

```component VPCard
{
  "title": "Compare static vs dynamic dispatch in Rust",
  "desc": "Compare the assembly code generated for static vs dynamic dispatch for traits. Understand the performance implications of each approach.",
  "link": "https://eventhelix.com/rust/rust-to-assembly-static-vs-dynamic-dispatch",
  "logo": "https://eventhelix.com/images/EventHelix-white-rounded-bg-blue.png",
  "background": "rgba(250,250,250,0.2)"
}
```

```component VPCard
{
  "title": "Understand tail call via vtable and freeing via a trait object",
  "desc": "Learn how the compiler optimizes dynamically dispatched tail calls and how it frees memory when using trait objects.",
  "link": "https://eventhelix.com/rust/rust-to-assembly-tail-call-via-vtable-and-box-trait-free",
  "logo": "https://eventhelix.com/images/EventHelix-white-rounded-bg-blue.png",
  "background": "rgba(250,250,250,0.2)"
}
```

```component VPCard
{
  "title": "Rust Recursive Tree Traversal in Assembly",
  "desc": "Learn how Rust compiles recursive tree traversal to assembly code and the optimization techniques used.",
  "link": "https://eventhelix.com/rust/rust-to-assembly-recursive-tree-fold",
  "logo": "https://eventhelix.com/images/EventHelix-white-rounded-bg-blue.png",
  "background": "rgba(250,250,250,0.2)"
}
```

```component VPCard
{
  "title": "Rust Closures - impl Fn vs Box dyn Fn",
  "desc": "Compare assembly code for Rust closures returned as impl Fn and Box<dyn Fn>",
  "link": "https://eventhelix.com/rust/rust-to-assembly-return-impl-fn-vs-dyn-fn",
  "logo": "https://eventhelix.com/images/EventHelix-white-rounded-bg-blue.png",
  "background": "rgba(250,250,250,0.2)"
}
```

```component VPCard
{
  "title": "Rust async/await - State Machines and Assembly",
  "desc": "Learn how Rust implements async functions using state machines and assembly code",
  "link": "https://eventhelix.com/rust/rust-to-assembly-async-await",
  "logo": "https://eventhelix.com/images/EventHelix-white-rounded-bg-blue.png",
  "background": "rgba(250,250,250,0.2)"
}
```

```component VPCard
{
  "title": "Rust async/await - Nested async function calls with loops",
  "desc": "Desugaring and assembly code analysis for nested async function with a loop.",
  "link": "https://eventhelix.com/rust/rust-to-assembly-async-await-nested",
  "logo": "https://eventhelix.com/images/EventHelix-white-rounded-bg-blue.png",
  "background": "rgba(250,250,250,0.2)"
}
```

```component VPCard
{
  "title": "Rust async/await - Async executor",
  "desc": "Learn how the async executor schedules async tasks in Rust. Understand the code of a simple async executor.",
  "link": "https://eventhelix.com/rust/rust-async-executor",
  "logo": "https://eventhelix.com/images/EventHelix-white-rounded-bg-blue.png",
  "background": "rgba(250,250,250,0.2)"
}
```

---
