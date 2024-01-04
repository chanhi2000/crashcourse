---
lang: ko-KR
title: Unsafe Swift - Using Pointers and Interacting With C
description: 🕊️Kodeco - Swift > Unsafe Swift - Using Pointers and Interacting With C
tags: ["crashcourse", "kotiln", "android"]
meta:
  - name: 🕊️Kodeco - Swift > Unsafe Swift - Using Pointers and Interacting With C
    content: Unsafe Swift - Using Pointers and Interacting With C
  - property: og:title
    content: Unsafe Swift - Using Pointers and Interacting With C
  - property: og:description
    content: 🕊️Kodeco - Swift > Unsafe Swift - Using Pointers and Interacting With C
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/swift/kodeco/7181017-unsafe-swift-using-pointers-and-interacting-with-c.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: Unsafe Swift - Using Pointers and Interacting With C
desc: In this tutorial, you’ll learn how to use unsafe Swift to directly access memory through a variety of pointer types.
link: https://www.kodeco.com/7181017-unsafe-swift-using-pointers-and-interacting-with-c
logo: https://assets.carolus.kodeco.com/assets/murakami/category-icons/category-software-engineering-ios-182a6e99292aa8fcc83771b698910d30fc0033f11a0bec8e892d092efc8e3ff4.svg
color: rgba(135, 99, 210, 0.2)
```

By default, Swift is memory safe: It prevents direct access to memory and makes sure you’ve initialized everything before you use it. The key phrase is “by default.” You can also use __unsafe Swift__, which lets you access memory directly through pointers.

This tutorial will take you on a whirlwind tour of the so-called _unsafe_ features of Swift.

Unsafe doesn’t mean dangerously bad code that might not work. Instead, it refers to code that needs extra care because it limits how the compiler can protect you from making mistakes.

These features are useful if you interoperate with an unsafe language such as C, need to gain additional runtime performance or simply want to explore the internals of Swift. In this tutorial, you’ll learn how to use pointers and interact with the memory system directly.

::: note Note

While this is an advanced topic, you’ll be able to follow along if you have reasonable competency in Swift. If you need to brush up on your skills, please check out our [iOS and Swift for Beginners](https://www.raywenderlich.com/ios/learn) series. C experience is beneficial but not necessary.

:::

---

## Getting Started

Download the begin project by clicking the [<FontIcon icon="iconfont icon-select"/>`[Download Materials]`][download-material] button at the top or bottom of the tutorial.

This tutorial consists of three empty Swift playgrounds:

---

## Exploring Memory Layout With Unsafe Swift

Start by opening the `UnsafeSwift` playground. Since all the code in this tutorial is platform-agnostic, you may select any platform.

![Sample memory addresses](https://koenig-media.raywenderlich.com/uploads/2017/01/memory-480x214.png)

Unsafe Swift works directly with the memory system. You can visualize memory as a series of boxes — billions of boxes, actually — each containing a number.

Each box has a unique __memory address__. The smallest addressable unit of storage is a __byte__, which usually consists of eight __bits__.

Eight-bit bytes can store values from 0-255. Processors can also efficiently access __words__ of memory, which are typically more than one byte.

On a 64-bit system, for example, a word is 8 bytes or 64 bits. To see this in action, you’ll use `MemoryLayout` to tell you the size and alignment of components of some native Swift types.

Add the following to your playground:

- In the first playground, you’ll use several short snippets of code to explore memory layout. You’ll also give unsafe pointers a try.
- In the second, you’ll take a low-level C API that performs streaming data compression and wrap it with a Swifty interface.
- In the final playground, you’ll create a platform-independent alternative to `arc4random` to generate random numbers. It uses unsafe Swift, but hides that detail from users.

```swift
import Foundation

MemoryLayout<Int>.size          // returns 8 (on 64-bit)
MemoryLayout<Int>.alignment     // returns 8 (on 64-bit)
MemoryLayout<Int>.stride        // returns 8 (on 64-bit)

MemoryLayout<Int16>.size        // returns 2
MemoryLayout<Int16>.alignment   // returns 2
MemoryLayout<Int16>.stride      // returns 2

MemoryLayout<Bool>.size         // returns 1
MemoryLayout<Bool>.alignment    // returns 1
MemoryLayout<Bool>.stride       // returns 1

MemoryLayout<Float>.size        // returns 4
MemoryLayout<Float>.alignment   // returns 4
MemoryLayout<Float>.stride      // returns 4

MemoryLayout<Double>.size       // returns 8
MemoryLayout<Double>.alignment  // returns 8
MemoryLayout<Double>.stride     // returns 8
```

`MemoryLayout<Type>` is a generic type evaluated at compile time. It determines the `size`, `alignment` and `stride` of each specified `Type` and returns a number in bytes.

For example, an `Int16` is two bytes in `size` and has an `alignment` of two as well. That means it has to start on even addresses — that is, addresses divisible by two.

For example, it’s legal to allocate an `Int16` at address 100, but not at 101 — an odd number violates the required alignment.

When you pack a bunch of `Int16`s together, they pack at an interval of `stride`. For these basic types, the `size` is the same as the `stride`.

### Examining Struct Layouts

Next, look at the layout of some user-defined `struct`s by adding the following to the playground:

```swift
struct EmptyStruct {}

MemoryLayout<EmptyStruct>.size      // returns 0
MemoryLayout<EmptyStruct>.alignment // returns 1
MemoryLayout<EmptyStruct>.stride    // returns 1

struct SampleStruct {
  let number: UInt32
  let flag: Bool
}

MemoryLayout<SampleStruct>.size       // returns 5
MemoryLayout<SampleStruct>.alignment  // returns 4
MemoryLayout<SampleStruct>.stride     // returns 8
```

The empty structure has a size of zero. It can exist at any address since `alignment` is one and all numbers are evenly divisible by one.

The `stride`, curiously, is one. That’s because each `EmptyStruct` you create has to have a unique memory address, even though its size is zero.

For `SampleStruct`, the `size` is five but the `stride` is eight. That’s because its `alignment` requires it to be on 4-byte boundaries. Given that, the best Swift can do is pack at an interval of eight bytes.

To see how the layout differs for `class` versus `struct`, add the following:

```swift
class EmptyClass {}

MemoryLayout<EmptyClass>.size      // returns 8 (on 64-bit)
MemoryLayout<EmptyClass>.stride    // returns 8 (on 64-bit)
MemoryLayout<EmptyClass>.alignment // returns 8 (on 64-bit)

class SampleClass {
  let number: Int64 = 0
  let flag = false
}

MemoryLayout<SampleClass>.size      // returns 8 (on 64-bit)
MemoryLayout<SampleClass>.stride    // returns 8 (on 64-bit)
MemoryLayout<SampleClass>.alignment // returns 8 (on 64-bit)
```

Classes are reference types, so `MemoryLayout` reports the size of a reference: Eight bytes.

If you want to explore memory layout in greater detail, check out Mike Ash’s excellent talk, [Exploring Swift Memory Layout](https://www.youtube.com/watch?v=ERYNyrfXjlg/).

<YouTube id="ERYNyrfXjlg" />

---

## Using Pointers in Unsafe Swift

A pointer encapsulates a memory address.

Types that involve direct memory access get an _unsafe_ prefix, so the pointer type name is `UnsafePointer`.

The extra typing may seem annoying, but it reminds you that you’re accessing memory that the compiler isn’t checking. When done incorrectly, this could lead to [undefined behavior](http://blog.llvm.org/2011/05/what-every-c-programmer-should-know.html), not just a predictable crash.

Swift doesn’t offer just a single `UnsafePointer` type that accesses memory in an unstructured way, like C’s `char *` does. Swift contains almost a dozen pointer types, each with different capabilities and purposes.

You always want to use the most appropriate pointer type for your purpose. This communicates intent better, is less error-prone and avoids undefined behavior.

Unsafe Swift pointers use a predictable naming scheme that describes the pointers’ traits: mutable or immutable, raw or typed, buffer style or not. In total, there are eight pointer combinations. You’ll learn more about them in the following sections.

![Guide to unsafe swift pointers](https://koenig-media.raywenderlich.com/uploads/2016/12/pointers-650x444.png)

---

## Using Raw Pointers

---

## Using Typed Pointers

---

## Converting Raw Pointers to Typed Pointers

---

## Getting the Bytes of an Instance

---

## Computing a Checksum

---

## Three Rules of the Unsafe Club

### Don’t Return the Pointer From withUnsafeBytes!

### Only Bind to One Type at a Time!

### Don’t Walk Off the End… Whoops!

---

## Unsafe Swift Example 1: Compression

---

## Unsafe Swift Example 2: Random Generator

---

## Where to Go From Here?

Congratulations on finishing this tutorial! You can download the completed project files at the top or bottom of this tutorial using the [<FontIcon icon="iconfont icon-select"/>`[Download Materials]`][download-material].

There are many additional resources you can explore to learn more about using unsafe Swift:

- [Swift Evolution 0107: UnsafeRawPointer API](https://github.com/apple/swift-evolution/blob/master/proposals/0107-unsaferawpointer.md) gives a detailed overview of the Swift memory model and makes reading the API documents more understandable.
- [Swift Evolution 0138: UnsafeRawBufferPointer API](https://github.com/apple/swift-evolution/blob/master/proposals/0138-unsaferawbufferpointer.md) talks extensively about working with untyped memory and has links to open-source projects that benefit from using them.
- [Imported C and Objective-C APIs](https://developer.apple.com/documentation/swift/imported_c_and_objective-c_apis) will give you insights about how Swift interacts with C.

I hope you’ve enjoyed this tutorial. If you have questions or experiences you would like to share, feel free to share them in the forums!

---

<TagLinks />

[download-material]: https://koenig-media.raywenderlich.com/uploads/2020/02/Unsafe-Swift.zip
