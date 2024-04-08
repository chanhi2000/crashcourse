---
lang: ko-KR
title: How to create different layouts using size classes
description: SwiftUI by Example > How to create different layouts using size classes
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
      content: SwiftUI by Example > How to create different layouts using size classes
    - property: og:description
      content: How to create different layouts using size classes
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-create-different-layouts-using-size-classes.html
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "SwiftUI by Example",
  "desc": "Back to Home",
  "link": "/swift/swiftui-by-example/README.md",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "SwiftUI by Example > How to create different layouts using size classes",
  "desc": "How to create different layouts using size classes",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-create-different-layouts-using-size-classes",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI supports size classes natively by exposing them in the environment for us to read. To use them, first create an `@Environment` object that will store its value, then check the value of that property whenever you need, looking for either the `.compact` or `.regular` size class.

For example:

```swift
struct ContentView: View {
    @Environment(\.horizontalSizeClass) var horizontalSizeClass

    var body: some View {
        if horizontalSizeClass == .compact {
            Text("Compact")
        } else {
            Text("Regular")
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-create-different-layouts-using-size-classes-1.zip)

![A phone in portrait mode showing the word “Compact” beside a phone in landscape mode showing the word “Regular”.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-different-layouts-using-size-classes-1~dark.png)

Size classes are a great way to make your user interfaces intelligently adapt to the available space by using a `VStack` or a `HStack` for your content. For example, if you have lots of space you might lay things out horizontally, but switch to vertical layout when space is limited.

::: details Similar solutions…

```component VPCard
{
  "title": "SwiftUI by Example > How to use Instruments to profile your SwiftUI code and identify slow layouts",
  "desc": "How to use Instruments to profile your SwiftUI code and identify slow layouts",
  "link": "/swift/swiftui-by-example/23-tooling/how-to-use-instruments-to-profile-your-swiftui-code-and-identify-slow-layouts.md",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to customize stack layouts with alignment and spacing",
  "desc": "How to customize stack layouts with alignment and spacing",
  "link": "/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-customize-stack-layouts-with-alignment-and-spacing.md",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

How to control which NavigationSplitView column is shown in compact layouts

```component VPCard
{
  "title": "SwiftUI by Example > How to automatically switch between HStack and VStack based on size class",
  "desc": "How to automatically switch between HStack and VStack based on size class",
  "link": "/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-automatically-switch-between-hstack-and-vstack-based-on-size-class.md",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to animate the size of text",
  "desc": "How to animate the size of text",
  "link": "/swift/swiftui-by-example/18-animation/how-to-animate-the-size-of-text.md",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />