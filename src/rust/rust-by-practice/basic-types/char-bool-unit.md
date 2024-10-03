---
lang: ko-KR
title: 3.2 Char, Bool and Unit
description: Rust by Practice > 3.2 Char, Bool and Unit
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
      content: Rust by Practice > 3.2 Char, Bool and Unit
    - property: og:description
      content: 3.2 Char, Bool and Unit
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/rust/rust-by-practice/basic-types/char-bool-unit.html
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
  name="4.2 Char, Bool and Unit | Rust By Practice"
  desc="4.2 Char, Bool and Unit"
  url="https://practice.rs/basic-types/char-bool-unit.html"
  logo="https://practice.course.rs/favicon.svg"
  preview="https://github.com/sunface/rust-by-practice/blob/master/en/assets/header.jpg?raw=true"/>

## Char

### 1. 🌟

::: tabs

@tab:active 💀Problem

```rs
// Make it work
use std::mem::size_of_val;
fn main() {
    let c1 = 'a';
    assert_eq!(size_of_val(&c1),1); 

    let c2 = '中';
    assert_eq!(size_of_val(&c2),3); 

    println!("Success!");
}
//
//
/*
   Compiling playground v0.0.1 (/playground)
      Finished dev [unoptimized + debuginfo] target(s) in 0.59s
       Running `target/debug/playground`
  thread 'main' panicked at 'assertion failed: `(left == right)`
    left: `4`,
   right: `1`', src/main.rs:6:5
  note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace  
*/
```

@tab Solution

```rs
// Make it work
use std::mem::size_of_val;
fn main() {
    let c1 = 'a';
    assert_eq!(size_of_val(&c1), 4);

    let c2 = '中';
    assert_eq!(size_of_val(&c2), 4);

    println!("Success!");
}
//
//
/*
  Success!
*/
```

:::

### 2. 🌟

::: tabs

@tab:active 💀Problem

```rs
// Make it work
fn main() {
    let c1 = "中";
    print_char(c1);
} 

fn print_char(c : char) {
    println!("{}", c);
}
//
//
/*
     Compiling playground v0.0.1 (/playground)
  error[E0308]: mismatched types
   --> src/main.rs:5:16
    |
  5 |     print_char(c1);
    |     ---------- ^^ expected `char`, found `&str`
    |     |
    |     arguments to this function are incorrect
    |
  note: function defined here
   --> src/main.rs:8:4
    |
  8 | fn print_char(c : char) {
    |    ^^^^^^^^^^ --------
  
  For more information about this error, try `rustc --explain E0308`.
  error: could not compile `playground` (bin "playground") due to previous error
*/
```

@tab Solution

```rs
// Make it work
fn main() {
    let c1 = '中';
    print_char(c1);
}

fn print_char(c : char) {
    println!("{}", c);
}
//
//
/*
  中
*/
```

:::

---

## Bool

### 3. 🌟

::: tabs

@tab:active 💀Problem

```rs
// Make println! work
fn main() {
    let _f: bool = false;

    let t = true;
    if !t {
        println!("Success!");
    }
}
//
//
/*
*/
```

@tab Solution

```rs
// Make println! work
fn main() {
    let _f: bool = false;

    let t = false;
    if !t {
        println!("hello, world");
    }
} 
//
//
/*
  hello, world
*/
```

:::

### 4. 🌟

::: tabs

@tab:active 💀Problem

```rs
// Make it work
fn main() {
    let f = true;
    let t = true && false;
    assert_eq!(t, f);

    println!("Success!");
}
//
//
/*
     Compiling playground v0.0.1 (/playground)
      Finished dev [unoptimized + debuginfo] target(s) in 0.54s
       Running `target/debug/playground`
  thread 'main' panicked at 'assertion failed: `(left == right)`
    left: `false`,
   right: `true`', src/main.rs:6:5
  note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
*/
```

@tab Solution

```rs
// Make it work
fn main() {
    let f = true;
    let t = true || false;
    assert_eq!(t, f);

    println!("Success!");
}
//
//
/*
  Success!
*/
```

:::

---

## Unit type

### 5. 🌟🌟

::: tabs

@tab:active 💀Problem

```rs
// Make it work, don't modify `implicitly_ret_unit` !
fn main() {
    let _v: () = ();

    let v = (2, 3);
    assert_eq!(v, implicitly_ret_unit());

    println!("Success!");
}

fn implicitly_ret_unit() {
    println!("I will return a ()");
}

// Don't use this one
fn explicitly_ret_unit() -> () {
    println!("I will return a ()");
}
//
//
/*
     Compiling playground v0.0.1 (/playground)
  error[E0308]: mismatched types
   --> src/main.rs:7:5
    |
  7 |     assert_eq!(v, implicitly_ret_unit());
    |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |     |
    |     expected `({integer}, {integer})`, found `()`
    |     expected because this is `({integer}, {integer})`
    |
    = note:  expected tuple `({integer}, {integer})`
            found unit type `()`
    = note: this error originates in the macro `assert_eq` (in Nightly builds, run with -Z macro-backtrace for more info)
  
  For more information about this error, try `rustc --explain E0308`.
  error: could not compile `playground` (bin "playground") due to previous error
*/
```

@tab Solution

```rs
// Make it work, don't modify `implicitly_ret_unit` !
fn main() {
    let v0: () = ();

    let v = (2, 3);
    assert_eq!(v0, implicitly_ret_unit());

    println!("Success!");
}

fn implicitly_ret_unit() {
    println!("I will return a ()");
}

// Don't use this one
fn explicitly_ret_unit() -> () {
    println!("I will return a ()");
}
//
//
/*
  I will return a ()
  Success!
*/
```

:::

### 6. 🌟🌟 What's the size of the unit type?

::: tabs

@tab:active 💀Problem

```rs
// Modify `4` in assert to make it work
use std::mem::size_of_val;
fn main() {
    let unit: () = ();
    assert!(size_of_val(&unit) == 4);

    println!("Success!");
}
//
//
/*
     Compiling playground v0.0.1 (/playground)
      Finished dev [unoptimized + debuginfo] target(s) in 0.71s
       Running `target/debug/playground`
  thread 'main' panicked at 'assertion failed: size_of_val(&unit) == 4', src/main.rs:6:5
  note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
*/
```

@tab Solution

```rs
// Modify `4` in assert to make it work
use std::mem::size_of_val;
fn main() {
    let unit: () = ();
    assert!(size_of_val(&unit) == 0);

    println!("Success!");
}
//
//
/*
  Success!
*/
```

:::

---
