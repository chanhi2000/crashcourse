---
lang: ko-KR
title: Template Haskell tutorial
description: Template Haskell tutorial
icon: iconfont icon-haskell
category:
  - Haskell
tag: 
  - crashcourse
  - haskell
  - parsec
  - attoparsec
  - trifecta
head:
- - meta:
  - property: og:title
    content: 🐑Template Haskell tutorial
  - property: og:description
    content: 🐑Template Haskell tutorial
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/haskell/template-haskell/
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

```component VPCard
{
  "title": "Template Haskell tutorial",
  "desc": "Mark Karpov > Template Haskell tutorial",
  "link": "https://markkarpov.com/tutorial/th",
  "logo": "https://markkarpov.com/static/img/site-icon.png",
  "background": "rgba(86,86,125,0.2)"
}
```

---

- [01. The Q monad](01.md)
- [02. Splicing](02.md)
- [03. Limitations of TH](03.md)
- [04. Quotation](04.md)
- [05. Typed expressions](05.md)
- [06. A few words about runQ](06.md)
- [07. Names](07.md)
- [08. Retrieving information about things](08.md)
- [09. Example 1: instance generation](09.md)
- [10. Viewing the generated code](10.md)
- [11. Lifting Haskell values into TH expressions](11.md)
- [12. Example 2: creating refined values at compile time](12.md)
- [13. Running IO in Q](13.md)
- [14. Example 3: the file-embed package](14.md)
- [15. Conclusion](15.md)

The tutorial aims to introduce the reader to _Template Haskell_ (TH)—the language extension that adds meta-programming capabilities to the Haskell language. Here I assume some familiarly with Haskell, perhaps beginner or intermediate level, although these terms are rather nebulous and subjective. To express the prerequisites in a more tangible form: if you know what a monad is, you should probably be OK.

TH has the reputation of being an expert-level topic that mere mortals are not prepared to comprehend. I don’t think this is so. The ideas behind TH are simple and make sense, while specific details can be always looked up in the Haddocks.

The tutorial cannot possibly cover every use of TH, and so it is structured in such a way so we only get to see the most common, conventional, and benign uses of this GHC feature.

---

## Motivation

One of the main difficulties with TH is perhaps deciding whether it is the best solution to a problem at hand. Writing code that generates code is generally considered an indication that the tools of expression provided by the language and/or programmer’s imagination have failed to address a particular problem and meta-programming is used as a last resort to get things done. True or not, TH is quite popular and so knowing your way around it is a valuable skill that can be used to do things that often cannot be achieved otherwise.

Let’s list some uses of TH:

- _Automatic deriving of type class instances_ is still perhaps the most common use case for TH. Even though the same problem can often be [addressed by generics](https://markkarpov.com/tutorial/generics), they are known to make compilation times longer (compared to TH-based solutions), so TH is still the preferred method of automatic instance derivation in libraries like `aeson` and `lens`.
- _Creation of TH DSLs_ that are integrated into systems built in Haskell. Examples of such DLSs are the language for model declaration used in [persistent](https://hackage.haskell.org/package/persistent), and various other mini-languages used in the [yesod](https://hackage.haskell.org/package/yesod) web framework.
- _Compile-time construction of values of refined types_ that turns invalid inputs into compilation failures.
- _Compile-time loading and processing of data from external files_, which is very useful sometimes. Even though this involves running `IO` during compilation, it’s a relatively innocent use case of that dangerous feature.

Reasons not to use TH:

TH helpers are often viewed as black boxes that do “magic”. It is not clear at all what a thing of the type Q [Dec] does, it might do anything (we will see that any code that generates declarations has the same Q [Dec] type, no matter what sort of declarations it generates). Documentation becomes the main source of information about semantics of TH code.

TH imposes restrictions on where the user should define TH functions themselves and sometimes also how to order definitions in files where TH functions are used.
