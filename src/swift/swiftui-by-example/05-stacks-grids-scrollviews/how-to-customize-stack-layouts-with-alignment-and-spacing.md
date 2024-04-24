---
lang: ko-KR
title: How to customize stack layouts with alignment and spacing
description: SwiftUI by Example > How to customize stack layouts with alignment and spacing
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
      content: SwiftUI by Example > How to customize stack layouts with alignment and spacing
    - property: og:description
      content: How to customize stack layouts with alignment and spacing
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-customize-stack-layouts-with-alignment-and-spacing.html
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
  "title": "SwiftUI by Example > How to customize stack layouts with alignment and spacing",
  "desc": "How to customize stack layouts with alignment and spacing",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-customize-stack-layouts-with-alignment-and-spacing",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

You can add spacing inside your SwiftUI stacks by providing a value in the initializer, like this:

```swift
VStack(spacing: 50) {
    Text("SwiftUI")
    Text("rocks")
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-customize-stack-layouts-with-alignment-and-spacing-1.zip)

![The text “SwiftUI” some distance above the text “rocks”.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-customize-stack-layouts-with-alignment-and-spacing-1~dark.png)

Alternatively, you can create dividers between items so that SwiftUI makes a small visual distinction between each item in the stack, like this:

```swift
VStack {
    Text("SwiftUI")
    Divider()
    Text("rocks")
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-customize-stack-layouts-with-alignment-and-spacing-2.zip)


![The text “SwiftUI” above the text “rocks”. The two words are separated by a thin gray dividing line.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-customize-stack-layouts-with-alignment-and-spacing-2~dark.png)

By default, items in your stacks are aligned centrally. In the case of `HStack` that means items are aligned to be vertically in the middle, so if you have two text views of different heights they would both be aligned to their vertical center. For `VStack` that means items are aligned to be horizontally in the middle, so if you have two text views of different lengths they would both be aligned to their horizontal center.

To adjust this, pass in an alignment when you create your stack, like this:

```swift
VStack(alignment: .leading) {
    Text("SwiftUI")
    Text("rocks")
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-customize-stack-layouts-with-alignment-and-spacing-3.zip)

![The text “SwiftUI” above the text “rocks”. The words' left edges are vertically aligned.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-customize-stack-layouts-with-alignment-and-spacing-3~dark.png)

That will align both “SwiftUI” and “rocks” to their left edge, but they will still ultimately sit in the middle of the screen because the stack takes up only as much space as it needs.

You can of course use both alignment and spacing at the same time, like this:

```swift
VStack(alignment: .leading, spacing: 20) {
    Text("SwiftUI")
    Text("rocks")
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-customize-stack-layouts-with-alignment-and-spacing-4.zip)

![The text “SwiftUI” some distance above the text “rocks”. The words' left edges are vertically aligned.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-customize-stack-layouts-with-alignment-and-spacing-4~dark.png)

That will align both text views horizontally to the leading edge (that’s left for left to right languages), and place 20 points of vertical space between them.

::: details Similar solutions…

```component VPCard
{
  "title": "SwiftUI by Example > How to use Instruments to profile your SwiftUI code and identify slow layouts",
  "desc": "How to use Instruments to profile your SwiftUI code and identify slow layouts",
  "link": "/swift/swiftui-by-example/23-tooling/how-to-use-instruments-to-profile-your-swiftui-code-and-identify-slow-layouts.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to adjust text alignment using multilineTextAlignment()",
  "desc": "How to adjust text alignment using multilineTextAlignment()",
  "link": "/swift/swiftui-by-example/02-working-with-static-text/how-to-adjust-text-alignment-using-multilinetextalignment.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to add spacing between letters in text",
  "desc": "How to add spacing between letters in text",
  "link": "/swift/swiftui-by-example/02-working-with-static-text/how-to-add-spacing-between-letters-in-text.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to style text views with fonts, colors, line spacing, and more",
  "desc": "How to style text views with fonts, colors, line spacing, and more",
  "link": "/swift/swiftui-by-example/02-working-with-static-text/how-to-style-text-views-with-fonts-colors-line-spacing-and-more.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to control which NavigationSplitView column is shown in compact layouts",
  "desc": "How to control which NavigationSplitView column is shown in compact layouts",
  "link": "/swift/swiftui-by-example/13-navigation/how-to-control-which-navigationsplitview-column-is-shown-in-compact-layouts.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />