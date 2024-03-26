---
lang: ko-KR
title: Text Processing with GNU awk
description: Text Processing with GNU awk
icon: iconfont icon-shell
category: 
  - CLI
  - Linux
tags:
  - crashcourse
  - cli
  - sh
  - shell
  - gnu
  - linux
  - awk
head:
  - - meta:
  - property: og:title
    content: Text Processing with GNU awk
  - property: og:description
    content: Text Processing with GNU awk
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/cli/text-processing-w-gnu-awk/
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

```component VPCard
{
  "title": "Preface",
  "desc": "CLI Text Processing with GNU awk",
  "link": "https://learnbyexample.github.io/learn_gnuawk",
  "logo": "https://learnbyexample.github.io/favicon.svg",
  "background": "rgba(22,25,35,0.2)"
}
```

<!-- https://learnbyexample.github.io/learn_gnuawk -->

---

## Table of Contents

```component VPCard
{
  "title": "Text Processing with GNU awk > 1. Installation and Documentation",
  "desc": "1. Installation and Documentation",
  "link": "01-installation-and-documentation.md",
  "logo": "https://learnbyexample.github.io/favicon.svg",
  "background": "rgba(22,25,35,0.2)"
}
```

```component VPCard
{
  "title": "Text Processing with GNU awk > 2. awk Introduction",
  "desc": "2. awk Introduction",
  "link": "02-awk-introduction.md",
  "logo": "https://learnbyexample.github.io/favicon.svg",
  "background": "rgba(22,25,35,0.2)"
}
```

```component VPCard
{
  "title": "Text Processing with GNU awk > 3. Regular Expressions",
  "desc": "3. Regular Expressions",
  "link": "03-regular-expressions.md",
  "logo": "https://learnbyexample.github.io/favicon.svg",
  "background": "rgba(22,25,35,0.2)"
}
```

```component VPCard
{
  "title": "Text Processing with GNU awk > 4. Field separators",
  "desc": "4. Field separators",
  "link": "04-field-separators.md",
  "logo": "https://learnbyexample.github.io/favicon.svg",
  "background": "rgba(22,25,35,0.2)"
}
```

```component VPCard
{
  "title": "Text Processing with GNU awk > 5. Record separators",
  "desc": "5. Record separators",
  "link": "05-record-separators.md",
  "logo": "https://learnbyexample.github.io/favicon.svg",
  "background": "rgba(22,25,35,0.2)"
}
```

```component VPCard
{
  "title": "Text Processing with GNU awk > 6. In-place file editing",
  "desc": "6. In-place file editing",
  "link": "06-in-place-file-editing.md",
  "logo": "https://learnbyexample.github.io/favicon.svg",
  "background": "rgba(22,25,35,0.2)"
}
```

```component VPCard
{
  "title": "Text Processing with GNU awk > 7. Using shell variables",
  "desc": "7. Using shell variables",
  "link": "07-using-shell-variables.md",
  "logo": "https://learnbyexample.github.io/favicon.svg",
  "background": "rgba(22,25,35,0.2)"
}
```

```component VPCard
{
  "title": "Text Processing with GNU awk > 8. Control Structures",
  "desc": "8. Control Structures",
  "link": "08-control-structures.md",
  "logo": "https://learnbyexample.github.io/favicon.svg",
  "background": "rgba(22,25,35,0.2)"
}
```

```component VPCard
{
  "title": "Text Processing with GNU awk > 9. Built-in functions",
  "desc": "9. Built-in functions",
  "link": "09-built-in-functions.md",
  "logo": "https://learnbyexample.github.io/favicon.svg",
  "background": "rgba(22,25,35,0.2)"
}
```

```component VPCard
{
  "title": "Text Processing with GNU awk > 10. Multiple file input",
  "desc": "10. Multiple file input",
  "link": "10-multiple-file-input.md",
  "logo": "https://learnbyexample.github.io/favicon.svg",
  "background": "rgba(22,25,35,0.2)"
}
```

```component VPCard
{
  "title": "Text Processing with GNU awk > 11. Processing multiple records",
  "desc": "11. Processing multiple records",
  "link": "11-processing-multiple-records.md",
  "logo": "https://learnbyexample.github.io/favicon.svg",
  "background": "rgba(22,25,35,0.2)"
}
```

```component VPCard
{
  "title": "Text Processing with GNU awk > 12. Two file processing",
  "desc": "12. Two file processing",
  "link": "12-two-file-processing.md",
  "logo": "https://learnbyexample.github.io/favicon.svg",
  "background": "rgba(22,25,35,0.2)"
}
```

```component VPCard
{
  "title": "Text Processing with GNU awk > 13. Dealing with duplicates",
  "desc": "13. Dealing with duplicates",
  "link": "13-dealing-with-duplicates.md",
  "logo": "https://learnbyexample.github.io/favicon.svg",
  "background": "rgba(22,25,35,0.2)"
}
```

```component VPCard
{
  "title": "Text Processing with GNU awk > 14.awk scripts",
  "desc": "14. awk scripts",
  "link": "14-awk-scripts.md",
  "logo": "https://learnbyexample.github.io/favicon.svg",
  "background": "rgba(22,25,35,0.2)"
}
```

```component VPCard
{
  "title": "Text Processing with GNU awk > 15. Gotchas and Tips",
  "desc": "15. Gotchas and Tips",
  "link": "15-gotchas-and-tips.md",
  "logo": "https://learnbyexample.github.io/favicon.svg",
  "background": "rgba(22,25,35,0.2)"
}
```

```component VPCard
{
  "title": "Text Processing with GNU awk > 16. Further Reading",
  "desc": "16. Further Reading",
  "link": "16-further-reading.md",
  "logo": "https://learnbyexample.github.io/favicon.svg",
  "background": "rgba(22,25,35,0.2)"
}
```

---

When it comes to command line text processing, the three major pillars are `grep` for filtering, `sed` for substitution and `awk` for field processing. These tools have overlapping features too, for example, all three of them have extensive filtering capabilities.

Unlike `grep` and `sed`, `awk` is a programming language. However, this book intends to showcase `awk` one-liners that can be composed from the command line instead of focusing on larger scripts.

This book heavily leans on examples to present features one by one. Regular expressions will also be discussed in detail.

It is recommended that you manually type each example. Make an effort to understand the sample input as well as the solution presented and check if the output changes (or not!) when you alter some part of the input and the command. As an analogy, consider learning to drive a car — no matter how much you read about them or listen to explanations, you'd need practical experience to become proficient.

---

## Prerequisites

You should be familiar with command line usage in a Unix-like environment. You should also be comfortable with concepts like file redirection and command pipelines. Knowing the basics of the `grep` and `sed` commands will be handy in understanding the filtering and substitution features of awk.

As `awk` is a programming language, you are also expected to be familiar with concepts like variables, printing, functions, control structures, arrays and so on.

If you are new to the world of the command line, check out my [<FontIcon icon="iconfont icon-github"/> Computing from the Command Line](https://github.com/learnbyexample/cli-computing) ebook and curated resources on [Linux CLI and Shell scripting](https://learnbyexample.github.io/curated_resources/linux_cli_scripting.html) before starting this book.

--- 

## Conventions

- The examples presented here have been tested with **GNU awk** version **5.2.2** and includes features not available in earlier versions.
- Code snippets are copy pasted from the `GNU bash` shell and modified for presentation purposes. Some commands are preceded by comments to provide context and explanations. Blank lines to improve readability, only real time shown for speed comparisons, output skipped for commands like `wget` and so on.
- Unless otherwise noted, all examples and explanations are meant for **ASCII input**.
- `awk` would mean `GNU awk`, `sed` would mean `GNU sed`, `grep` would mean `GNU grep` and so on unless otherwise specified.
External links are provided throughout the book for you to explore certain topics in more depth.
The [<FontIcon icon="iconfont icon-github"/> learn_gnuawk repo](https://github.com/learnbyexample/learn_gnuawk) has all the code snippets and files used in examples, exercises and other details related to the book. If you are not familiar with the `git` command, click the **Code** button on the webpage to get the files.

---

## Acknowledgements

- [GNU awk documentation](https://www.gnu.org/software/gawk/manual/) — manual and examples
- [stackoverflow](https://stackoverflow.com) and [unix.stackexchange](https://unix.stackexchange.com) — for getting answers to pertinent questions on awk and related commands
- [tex.stackexchange](https://tex.stackexchange.com) — for help on [pandoc](https://github.com/jgm/pandoc) and tex related questions
- [/r/commandline/](https://old.reddit.com/r/commandline), [/r/linux4noobs/](https://old.reddit.com/r/linux4noobs), [/r/linuxquestions/](https://old.reddit.com/r/linuxquestions) and [/r/linux/](https://old.reddit.com/r/linux) — helpful forums
- [canva](https://www.canva.com) — cover image
- [<FontIcon icon="iconfont icon-github"/> `shssoichiro/oxipng`](https://github.com/shssoichiro/oxipng), [pngquant](https://pngquant.org) and [<FontIcon icon="iconfont icon-github"/> `RazrFalcon/svgcleaner`](https://github.com/RazrFalcon/svgcleaner) — optimizing images
- [Warning](https://commons.wikimedia.org/wiki/File:Warning_icon.svg) and [Info](https://commons.wikimedia.org/wiki/File:Info_icon_002.svg) icons by [Amada44](https://commons.wikimedia.org/wiki/User:Amada44) under public domain
- [arifmahmudrana](https://github.com/arifmahmudrana) for spotting an ambiguous explanation
- [Pound-Hash](https://github.com/Pound-Hash) for critical feedback
- [<FontIcon icon="iconfont icon-github"/> mdBook](https://github.com/rust-lang/mdBook) — for web version of the book that you are currently reading
  - [<FontIcon icon="iconfont icon-github"/> mdBook-pagetoc](https://github.com/JorelAli/mdBook-pagetoc) — for adding table of contents for each chapter
  - [<FontIcon icon="iconfont icon-github"/> minify-html](https://github.com/wilsonzlin/minify-html) — for minifying html files

Special thanks to all my friends and online acquaintances for their help, support and encouragement, especially during these difficult times.

---

## License

This work is licensed under a [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-nc-sa/4.0/).

Code snippets are available under [MIT License](https://github.com/learnbyexample/learn_gnuawk/blob/master/LICENSE).

Resources mentioned in Acknowledgements section are available under original licenses.

---

<TagLinks />