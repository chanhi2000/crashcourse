---
lang: ko-KR
title: SwiftUI vs Interface Builder and storyboards
description: 🕊️SwiftUI by Example > SwiftUI vs Interface Builder and storyboards
category:
  - 🕊️Swift
tag: 
  - crashcourse
  - paul-hudson
  - swift
  - swiftui
  - hacking-with-swift
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: 🕊️SwiftUI by Example > SwiftUI vs Interface Builder and storyboards
    - property: og:description
      content: SwiftUI vs Interface Builder and storyboards
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/swift/swiftui-by-example/00-introduction/swiftui-vs-interface-builder-and-storyboards.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```component VPCard
{
  "title": "SwiftUI by Example – SwiftUI vs Interface Builder and storyboards",
  "desc": "SwiftUI vs Interface Builder and storyboards",
  "link": "https://www.hackingwithswift.com/quick-start/swiftui/swiftui-vs-interface-builder-and-storyboards",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Every experienced iOS developer is familiar with Interface Builder and storyboards, and perhaps even XIBs too. They might not _like_ them, but they are at least _familiar_ with them. If you haven’t used these before, you should just skip this bit.

Still here? That means you’ve used IB before and are probably curious how SwiftUI is different. Well, let me ask you this: have you ever edited a storyboard or XIB by hand?

Probably not. Well, apart from that one time once, but broadly the answer is _no_ – storyboards and XIBs contain a fairly large amount of XML that isn’t easy to read or easy to edit.

Worse, storyboards have a habit of growing larger and larger over time. Sure, they might _start off_ small, but then you add another view controller and another, and another, and suddenly you realize that you have ten screens of data in a single file, and any source control changes you make are suddenly quite painful.

But although being a single point of failure isn’t great, and it’s basically impossible to see what’s changed when someone opens a pull request with a storyboard modification, storyboards and XIBs have a bigger problem.

You see, Interface Builder doesn’t know much about our Swift code, and our Swift code doesn’t know much about Interface Builder. As a result, we end up with lots of unsafe functionality: we <kbd>Ctrl</kbd>-drag from IB into our code to connect something to an action, but if we then delete that action the code still compiles – IB really doesn’t mind if the code it intends to call no longer exists.

Similarly, when we create view controllers from a storyboard or dequeue table view cells, we use strings to identify important objects in our code – a system so pervasive, it even has its own name: “stringly typed APIs”. Even then we need to use typecasts because Swift can’t know that the table view cell it got back is actually a `MooncakeTableViewCell`.

These problems exist because IB and Swift are very separate things. This isn’t a huge surprise – not only does Interface Builder date from way before the original Mac OS X was a thing, but it’s also very much designed around the way Objective-C works.

SwiftUI makes a hard break from that past. It’s a Swift-only framework, not because Apple has decided that it’s time for Objective-C to die, but because it lets SwiftUI leverage the full range of Swift’s functionality – value types, opaque return types, protocol extensions, and more.

Anyway, we’ll get onto exactly how SwiftUI works soon. For now, the least you need to know is that SwiftUI fixes many problems people had with the old Swift + Interface Builder approach:

- We no longer have to argue about programmatic or storyboard-based design, because SwiftUI gives us both at the same time.
- We no longer have to worry about creating source control problems when committing user interface work, because code is much easier to read and manage than storyboard XML.
- We no longer need to worry so much about stringly typed APIs – there are still some, but significantly fewer.
- We no longer need to worry about calling functions that don’t exist, because our user interface gets checked by the Swift compiler.

So, I hope you’ll agree there are lots of benefits to be had from moving to SwiftUI!

---

<TagLinks />