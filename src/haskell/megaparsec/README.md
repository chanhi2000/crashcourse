---
lang: ko-KR
title: 🐑Megaparsec tutorial
description: 🐑Megaparsec tutorial
category:
  - 🐑Haskell
tag: 
  - crashcourse
  - haskell
  - parsec
  - attoparsec
  - trifecta
head:
  - - meta:
    - property: og:title
      content: 🐑Megaparsec tutorial
    - property: og:description
      content: 🐑Megaparsec tutorial
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/haskell/megaparsec/
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```component VPCard
{
  "title": "Megaparsec tutorial",
  "desc": "Mark Karpov > Megaparsec tutorial",
  "link": "https://markkarpov.com/tutorial/megaparsec.html",
  "logo": "https://markkarpov.com/static/img/site-icon.png",
  "background": "rgba(86,86,125,0.2)"
}
```

::: info 

This is the Megaparsec tutorial which originally was written as a chapter for the [Intermediate Haskell](https://intermediatehaskell.com/) book. Due to lack of progress with the book in the last year, other authors agreed to let me publish the text as a standalone tutorial so that people can benefit at least from this part of our work.

:::

---

## Table of Contents

- [01. ParsecT and Parsec monads](01.md)
- [02. Character and binary streams](02.md)
- [03. Monadic and applicative syntax](03.md)
- [04. Forcing consumption of input with eof](04.md)
- [05. Working with alternatives](05.md)
- [06. Controlling backtracking with try](06.md)
- [07. Debugging parsers](07.md)
- [08. Labeling and hiding things](08.md)
- [09. Running a parser](09.md)
- [10. The MonadParsec type class](10.md)
- [11. Lexing](11.md)
- [12. notFollowedBy and lookAhead](12.md)
- [13. Parsing expressions](13.md)
- [14. Indentation-sensitive parsing](14.md)
- [15. Writing efficient parsers](15.md)
- [16. Parse errors](16.md)
- [17. Testing Megaparsec parsers](17.md)
- [18. Working with custom input streams](18.md)

The toy parser combinators developed in chapter “An Example: Writing Your Own Parser Combinators” are not suitable for real-world use, so let’s continue by taking a look at the libraries in the Haskell ecosystem that solve the same problem, and note various trade-offs they make:

- [`parsec`](https://hackage.haskell.org/package/parsec) has been the “default” parsing library in Haskell for a long time. The library is said to be focused on quality of error messages. It however does not have good test coverage and is currently in maintenance mode.

- [`attoparsec`](https://hackage.haskell.org/package/attoparsec) is a robust, fast parsing library with focus on performance. It is the only library from this list that has full support for incremental parsing. Its downsides are poor quality of error messages, inability to be used as a monad transformer, and limited set of types that can be used as input stream.

- [`trifecta`](https://hackage.haskell.org/package/trifecta) features good error messages but is under-documented and hard to figure out. It can parse `String` and `ByteString` out-of-the-box, but not `Text`.

- [`megaparsec`](https://hackage.haskell.org/package/megaparsec) is a fork of `parsec` that has been actively developed in the last few years. The current version tries to find a nice balance between speed, flexibility, and quality of parse errors. As an unofficial successor of `parsec`, it stays conventional and immediately familiar for users who have used that library or who have read `parsec` tutorials.

It would be impractical to try to cover all these libraries, and so we will focus on `megaparsec`. More precisely, we are going to cover the version 9, which by the time this book is published will probably have replaced the older versions almost everywhere.

---

<TagLinks />