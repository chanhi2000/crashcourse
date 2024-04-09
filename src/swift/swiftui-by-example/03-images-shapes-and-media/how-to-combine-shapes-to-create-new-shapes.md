---
lang: ko-KR
title: How to combine shapes to create new shapes
description: SwiftUI by Example > How to combine shapes to create new shapes
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
      content: SwiftUI by Example > How to combine shapes to create new shapes
    - property: og:description
      content: How to combine shapes to create new shapes
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/swift/swiftui-by-example/03-images-shapes-and-media/how-to-combine-shapes-to-create-new-shapes.html
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
  "title": "SwiftUI by Example > How to combine shapes to create new shapes",
  "desc": "How to combine shapes to create new shapes",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-combine-shapes-to-create-new-shapes",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 17**

All of SwiftUI’s shapes can be combined in various ways to create new shapes, including union (a filled region merging both shapes), intersection (a filled region containing regions common in both shapes), line intersection (returns the line of one shape overlaps the fill of another), and more.

For example, this combines a circle with a capsule inset by 100 points, then fills the result blue:

```swift
Circle()
    .union(.capsule.inset(by: 100))
    .fill(.blue)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-combine-shapes-to-create-new-shapes-1.zip)

![A circle and capsule shape combined together, then filled as one.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-combine-shapes-to-create-new-shapes-1~dark.png)

The advantage to having a single shape is that the result blends well when you add opacity – you’re not rendering two overlapping shapes individually, but combining them both into a single shape and rendering that.

Similarly, we could use `lineSubtraction()` to cut a rectangle’s shape away from a circle, then stroke the remainder with a rounded cap:

```swift
Circle()
    .lineSubtraction(.rect.inset(by: 30))
    .stroke(style: .init(lineWidth: 20, lineCap: .round))
    .padding()
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-combine-shapes-to-create-new-shapes-2.zip)

![A circle shape where four corners have been cut out.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-combine-shapes-to-create-new-shapes-2~dark.png)

Or we could place one circle off to the left, then subtract another circle offset to the right:

```swift
Circle()
    .offset(x: -100)
    .symmetricDifference(.circle.offset(x: 100))
    .fill(.red)
    .padding()
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-combine-shapes-to-create-new-shapes-3.zip)

![Two overlapping circles, where the intersection area is hollow.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-combine-shapes-to-create-new-shapes-3~dark.png)

::: details Similar solutions…

```component VPCard
{
  "title": "SwiftUI by Example > How to combine text views together",
  "desc": "How to combine text views together",
  "link": "/swift/swiftui-by-example/19-composing-view/how-to-combine-text-views-together.md",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to combine transitions",
  "desc": "How to combine transitions",
  "link": "/swift/swiftui-by-example/18-animation/how-to-combine-transitions.md",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > SwiftUI’s built-in shapes",
  "desc": "SwiftUI’s built-in shapes",
  "link": "/swift/swiftui-by-example/17-drawing/swiftuis-built-in-shapes.md",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to fill and stroke shapes at the same time",
  "desc": "How to fill and stroke shapes at the same time",
  "link": "/swift/swiftui-by-example/03-images-shapes-and-media/how-to-fill-and-stroke-shapes-at-the-same-time.md",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to display solid shapes",
  "desc": "How to display solid shapes",
  "link": "/swift/swiftui-by-example/03-images-shapes-and-media/how-to-display-solid-shapes.md",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />