---
lang: ko-KR
title: How to force views to one side inside a stack using Spacer
description: SwiftUI by Example > How to force views to one side inside a stack using Spacer
category:
  - Swift
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
      content: SwiftUI by Example > How to force views to one side inside a stack using Spacer
    - property: og:description
      content: How to force views to one side inside a stack using Spacer
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-force-views-to-one-side-inside-a-stack-using-spacer.html
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "SwiftUI by Example",
  "desc": "Back to Home",
  "link": "/swift/swiftui-by-example/README.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "SwiftUI by Example > How to force views to one side inside a stack using Spacer",
  "desc": "How to force views to one side inside a stack using Spacer",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-force-views-to-one-side-inside-a-stack-using-spacer",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI centers its views by default, which means if you place three text views inside a `VStack` all three will sit centered vertically in the screen. If you want to change this – if you want to force views towards the top, bottom, left, or right of the screen – then you should use a `Spacer` view.

For example, this places one text view inside a `VStack`, which means it will be centered vertically:

```swift
VStack {
    Text("Hello World")
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-force-views-to-one-side-inside-a-stack-using-spacer-1.zip)

![A phone with the text “Hello World” in the center of the screen.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-force-views-to-one-side-inside-a-stack-using-spacer-1~dark.png)

To push that text view to the top of the parent, we’d place a spacer below it, like this:

```swift
VStack {
    Text("Hello World")
    Spacer()
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-force-views-to-one-side-inside-a-stack-using-spacer-2.zip)

![A phone with the text “Hello World” at the top of the screen.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-force-views-to-one-side-inside-a-stack-using-spacer-2~dark.png)

If you wanted two pieces of text on the leading and trailing edges of a `HStack`, you would use a spacer like this:

```swift
HStack {
    Text("Hello")
    Spacer()
    Text("World")
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-force-views-to-one-side-inside-a-stack-using-spacer-3.zip)

![The words “Hello” and “World” at opposite ends of the image.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-force-views-to-one-side-inside-a-stack-using-spacer-3~dark.png)

Spacers automatically divide up all remaining space, which means if you use if you use several spacers you can divide up the space in varying amounts.

For example, this will place a text view one third of the way down its parent view by putting one spacer before it and two after:

```swift
VStack {
    Spacer()
    Text("Hello World")
    Spacer()
    Spacer()
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-force-views-to-one-side-inside-a-stack-using-spacer-4.zip)

![A phone with the text “Hello World” two thirds of the way up the screen.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-force-views-to-one-side-inside-a-stack-using-spacer-4~dark.png)

::: details Similar solutions…

```component VPCard
{
  "title": "SwiftUI by Example > How to show text and an icon side by side using Label",
  "desc": "How to show text and an icon side by side using Label",
  "link": "/swift/swiftui-by-example/02-working-with-static-text/how-to-show-text-and-an-icon-side-by-side-using-label.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to make a fixed size Spacer",
  "desc": "How to make a fixed size Spacer",
  "link": "/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-make-a-fixed-size-spacer.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to force one gesture to recognize before another using highPriorityGesture()",
  "desc": "How to force one gesture to recognize before another using highPriorityGesture()",
  "link": "/swift/swiftui-by-example/08-taps-and-gestures/how-to-force-one-gesture-to-recognize-before-another-using-highprioritygesture.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to customize stack layouts with alignment and spacing",
  "desc": "How to customize stack layouts with alignment and spacing",
  "link": "/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-customize-stack-layouts-with-alignment-and-spacing.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to stack modifiers to create more advanced effects",
  "desc": "How to stack modifiers to create more advanced effects",
  "link": "/swift/swiftui-by-example/16-transforming-views/how-to-stack-modifiers-to-create-more-advanced-effects.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />