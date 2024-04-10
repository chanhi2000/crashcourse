---
lang: ko-KR
title: How to control layout priority using layoutPriority()
description: SwiftUI by Example > How to control layout priority using layoutPriority()
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
      content: SwiftUI by Example > How to control layout priority using layoutPriority()
    - property: og:description
      content: How to control layout priority using layoutPriority()
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/swift/swiftui-by-example/04-view-layout/how-to-control-layout-priority-using-layoutpriority.html
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

```component VPCard
{
  "title": "SwiftUI by Example > How to control layout priority using layoutPriority()",
  "desc": "How to control layout priority using layoutPriority()",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-control-layout-priority-using-layoutpriority",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI’s `layoutPriority()` modifier lets us request that certain views should be given more room on the screen when space is limited. All views have a layout priority of 0 by default, but if you’re finding one particular view is squashed you can ask it to be given a higher priority using `layoutPriority()`.

As an example, here are two pieces of text laid out side by side:

```swift
struct ContentView: View {
    var body: some View {
        HStack {
            Text("The rain Spain falls mainly on the Spaniards.")
            Text("Knowledge is power, France is bacon.")
        }
        .font(.largeTitle)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-control-layout-priority-using-layoutpriority-1.zip)

![Two sentences, both wrapped onto a second line, arranged side by side.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-control-layout-priority-using-layoutpriority-1~dark.png)

Both text strings are long enough that they will wrap across two lines on an iPhone, and SwiftUI will try to size them fairly so they each get a fair amount of space depending on their length.

We can use the `layoutPriority()` modifier to change this by making one of the two strings more important. SwiftUI will calculate the minimum amount of space required for the low-priority text view, then offer the remaining space to the higher-priority text so it can take up as much as it wants.

Here’s how that looks:

```swift
struct ContentView: View {
    var body: some View {
        HStack {
            Text("The rain Spain falls mainly on the Spaniards.")
            Text("Knowledge is power, France is bacon.")
                .layoutPriority(1)
        }
        .font(.largeTitle)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-control-layout-priority-using-layoutpriority-2.zip)

![Two sentences arranged side by side. The left sentence is wrapped over four lines, the right sentence is displayed in one long line.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-control-layout-priority-using-layoutpriority-2~dark.png)

Obviously the result of that depends on what size screen you’re using, but it’s likely the higher-priority text view won’t use all the available space it was offered, and so the remainder will be given to the lower-priority text view to use.

::: details Similar solutions…

```component VPCard
{
  "title": "SwiftUI by Example > How to create a custom layout using the Layout protocol",
  "desc": "How to create a custom layout using the Layout protocol",
  "link": "/swift/swiftui-by-example/04-view-layout/how-to-create-a-custom-layout-using-the-layout-protocol.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to control spacing around individual views using padding",
  "desc": "How to control spacing around individual views using padding",
  "link": "/swift/swiftui-by-example/04-view-layout/how-to-control-spacing-around-individual-views-using-padding.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to create a segmented control and read values from it",
  "desc": "How to create a segmented control and read values from it",
  "link": "/swift/swiftui-by-example/06-user-interface-controls/how-to-create-a-segmented-control-and-read-values-from-it.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to control the tappable area of a view using contentShape()",
  "desc": "How to control the tappable area of a view using contentShape()",
  "link": "/swift/swiftui-by-example/08-taps-and-gestures/how-to-control-the-tappable-area-of-a-view-using-contentshape.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

How to add custom activation commands for Voice Control

:::

---

<TagLinks />