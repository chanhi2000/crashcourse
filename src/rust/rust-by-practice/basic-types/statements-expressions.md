---
lang: ko-KR
title: 3.3 Statements and Expressions
description: Rust by Practice > 3.3 Statements and Expressions
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
      content: Rust by Practice > 3.3 Statements and Expressions
    - property: og:description
      content: 3.3 Statements and Expressions
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/rust/rust-by-practice/basic-types/statements-expressions.html
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
  name="4.3 Statements and Expressions | Rust By Practice"
  desc="4.3 Statements and Expressions"
  url="https://practice.rs/basic-types/statements-expressions.html"
  logo="https://practice.course.rs/favicon.svg"
  preview="https://github.com/sunface/rust-by-practice/blob/master/en/assets/header.jpg?raw=true"/>

## Examples

```rs
fn main() {
    let x = 5u32;

    let y = {
        let x_squared = x * x;
        let x_cube = x_squared * x;

        // This expression will be assigned to `y`
        x_cube + x_squared + x
    };

    let z = {
        // The semicolon suppresses this expression and `()` is assigned to `z`
        2 * x;
    };

    println!("x is {:?}", x);
    println!("y is {:?}", y);
    println!("z is {:?}", z);
}
//
//
/*
  x is 5
  y is 155
  z is ()
*/
```

---

## Exercises

### 1. 🌟🌟

::: tabs

@tab:active 💀Problem

```rs
// Make it work with two ways
fn main() {
   let v = {
       let mut x = 1;
       x += 2
   };

   assert_eq!(v, 3);

   println!("Success!");
}
//
//
/*
     Compiling playground v0.0.1 (/playground)
  error[E0308]: mismatched types
   --> src/main.rs:8:4
    |
  8 |    assert_eq!(v, 3);
    |    ^^^^^^^^^^^^^^^^
    |    |
    |    expected `()`, found integer
    |    expected because this is `()`
    |
    = note: this error originates in the macro `assert_eq` (in Nightly builds, run with -Z macro-backtrace for more info)
  
  For more information about this error, try `rustc --explain E0308`.
  error: could not compile `playground` (bin "playground") due to previous error
*/
```

@tab Solution 1

```rs
// Make it work with two ways
fn main() {
    let v = {
        let mut x = 1;
        x += 2
    };
 
    assert_eq!(v, ());

   println!("Success!");
}
//
//
/*
  Success!
*/
```

@tab Solution 2

```rs
// Make it work with two ways
fn main() {
    let v = {
        let mut x = 1;
        x += 2;
        x
    };

    assert_eq!(v, 3);

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
fn main() {
   let v = (let x = 3);

   assert!(v == 3);

   println!("Success!");
}
//
//
/*
     Compiling playground v0.0.1 (/playground)
  error: expected expression, found `let` statement
   --> src/main.rs:3:13
    |
  3 |    let v = (let x = 3);
    |             ^^^
  
  error: expected expression, found statement (`let`)
   --> src/main.rs:3:13
    |
  3 |    let v = (let x = 3);
    |             ^^^^^^^^^
    |
    = note: variable declaration using `let` is a statement
  
  error[E0658]: `let` expressions in this position are unstable
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
    = note: `#[warn(unused_parens)]` on by default
  help: remove these parentheses
    |
  3 -    let v = (let x = 3);
  3 +    let v = let x = 3;
    |
  
  error[E0308]: mismatched types
   --> src/main.rs:5:17
    |
  5 |    assert!(v == 3);
    |            -    ^ expected `bool`, found integer
    |            |
    |            expected because this is `bool`
  
  Some errors have detailed explanations: E0308, E0658.
  For more information about an error, try `rustc --explain E0308`.
  warning: `playground` (bin "playground") generated 1 warning
  error: could not compile `playground` (bin "playground") due to 4 previous errors; 1 warning
*/
```

@tab Solution

```rs
fn main() {
    let v = {
        let x = 3;
        x
    };

   assert!(v == 3);

   println!("Success!");
}
//
//
/*
  Success!
*/
```

:::

### 3. 🌟

::: tabs

@tab:active 💀Problem

```rs
fn main() {
    let s = sum(1 , 2);
    assert_eq!(s, 3);

    println!("Success!");
}

fn sum(x: i32, y: i32) -> i32 {
    x + y;
}
//
//
/*
     Compiling playground v0.0.1 (/playground)
  error[E0308]: mismatched types
    --> src/main.rs:9:27
     |
  9  | fn sum(x: i32, y: i32) -> i32 {
     |    ---                    ^^^ expected `i32`, found `()`
     |    |
     |    implicitly returns `()` as its body has no tail or `return` expression
  10 |     x + y;
     |          - help: remove this semicolon to return this value
  
  For more information about this error, try `rustc --explain E0308`.
  error: could not compile `playground` (bin "playground") due to previous error
*/
```

@tab Solution

```rs
fn main() {
    let s = sum(1 , 2);
    assert_eq!(s, 3);

    println!("Success!");
}

fn sum(x: i32, y: i32) -> i32 {
    return x + y;
}
//
//
/*
  Success!
*/
```

:::

---

<TagLinks />