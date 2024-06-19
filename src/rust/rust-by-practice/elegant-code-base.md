---
lang: ko-KR
title: 1. Small projects with Elegant code
description: Rust by Practice > 1. Small projects with Elegant code
category: 
  - Rust
tag: 
  - crashcourse
  - freecodecamp
  - zubiarfan
  - youtube
  - rust
  - rs
  - wasm
  - assembly
head:
  - - meta:
    - property: og:title
      content: Rust by Practice > 1. Small projects with Elegant code
    - property: og:description
      content: 1. Small projects with Elegant code
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/rust/rust-by-practice/elegant-code-base.html
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Rust By Practice",
  "desc": "Rust By Practice",
  "link": "/rust/rust-by-practice/README.md",
  "logo": "https://practice.course.rs/favicon.svg",
  "background": "rgba(22,25,35,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="1. Small projects with Elegant code | Rust By Practice"
  desc="1. Small projects with Elegant code"
  url="https://practice.rs/elegant-code-base.html"
  logo="https://practice.course.rs/favicon.svg"
  preview="https://github.com/sunface/rust-by-practice/blob/master/en/assets/header.jpg?raw=true"/>

<!-- https://practice.rs/elegant-code-base.html -->

---

Following questions come up weekly in online Rust discussions:

- I just finished reading The Book, what should I do next ?
- What projects would you recommend to a Rust beginner?
- Looking for small projects with an elegant code base
- Codes that is easy to read and learn

The answers to these questions are always Practice: doing some exercises, and then reading some small and excellent Rust projects.

This is precisely the goal of this book, so, collecting relative resourses and representing in _Rust By Practice_ seems not a bad idea.

---

## 1. Ripgrep

Answers for above questions usually came with [<FontIcon icon="iconfont icon-github"/>`BurntSushi/ripgrep`](https://github.com/BurntSushi/ripgrep), though I don't think it is a small project, but yes, go for it if you are not afraid to delve deep a bit.

---

## 2. Building a text editor

Tutorial [https://www.philippflenker.com/hecto](https://www.philippflenker.com/hecto) will lead you to build a text editor from scratch.

---

## 3. `Ncspot`

[<FontIcon icon="iconfont icon-github"/>`hrkfdn/ncspot`](https://github.com/hrkfdn/ncspot), a terminal Spotify client. Small, simple, well organized and async, it's good for learning.

---

## 4. Command Line Rust

[This project <FontIcon icon="iconfont icon-github"/>(`kyclark/command-line-rust`)](https://github.com/kyclark/command-line-rust) is for the book `Command-Line Rust(O'Reily)`, it will show you how to write small CLIs (clones of `head`, `cat`, `ls`).

---

## 5. `pngme` book

[This book](https://picklenerd.github.io/pngme_book) will guide you to make a command line program that lets you hide secret messages in PNG files. The primary goal here is to get you writing code. The secondary goal is to get you reading documentation.

---

## 6. Writing an OS in Rust

[This blog series](https://os.phil-opp.com) creates a small operating system in the Rust programming language. Each post is a small tutorial and includes all needed code, so you can follow along if you like. The source code is also available in the corresponding [Github repository (<FontIcon icon="iconfont icon-github"/>`phil-opp/blog_os`)](https://github.com/phil-opp/blog_os).

---

## 7. CodeCrafters.io: Build your own Git, Docker, SQLite, or Redis

On [CodeCrafters](https://codecrafters.io/for/rust), you can recreate your favorite developer tools from scratch. It's a hands-on, minimally-guided approach to master Rust, while appreciating the internals and documentation of popular technology that we use every day.

---

## 8. mini-redis

[<FontIcon icon="iconfont icon-github"/>`tokio-rs/mini-redis`](https://github.com/tokio-rs/mini-redis) is an incomplete Redis client and server implementation using tokio, it has decent code base and detail explanations, very suitable for learning Rust and asynchronous programming.

---

## 9. Writing Interpreters in Rust

[This online book (<FontIcon icon="iconfont icon-github"/>`rust-hosted-langs/book`)](https://github.com/rust-hosted-langs/book) will walk through the basics of interpreted language implementation in Rust with a focus on the challenges that are specific to using Rust.

---

<TagLinks />