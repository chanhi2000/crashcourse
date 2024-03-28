---
lang: ko-KR
title: How to display solid shapes
description: SwiftUI by Example > How to display solid shapes
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
      content: SwiftUI by Example > How to display solid shapes
    - property: og:description
      content: How to display solid shapes
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/swift/swiftui-by-example/03-images-shapes-and-media/how-to-display-solid-shapes.html
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

```component VPCard
{
  "title": "SwiftUI by Example > How to display solid shapes",
  "desc": "How to display solid shapes",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-display-solid-shapes",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI has several built-in shapes such as rectangles, circles, and capsules, each of which can be created, color, and positioned as needed.

For example, if you wanted a 200x200 red rectangle, you would use this:

```swift
Rectangle()
    .fill(.red)
    .frame(width: 200, height: 200)
```

> [<FontIcon icon="fas fa-download"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-display-solid-shapes-1.zip)

![A red square.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-display-solid-shapes-1~dark.png)

Similarly, if you wanted a 100x100 blue circle you would use this:

```swift
Circle()
    .fill(.blue)
    .frame(width: 100, height: 100)
```

> [<FontIcon icon="fas fa-download"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-display-solid-shapes-2.zip)

![A blue circle.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-display-solid-shapes-2~dark.png)

There’s a dedicated shape for rounded rectangles, allowing you to customize how much rounding should be applied, as well as having complete control over the type of rounding. For example, this creates a rounded rectangle with 25 points of rounding on each corner:

```swift
RoundedRectangle(cornerRadius: 25)
    .fill(.green)
    .frame(width: 150, height: 100)
```

> [<FontIcon icon="fas fa-download"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-display-solid-shapes-3.zip)

![A green rounded rectangle.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-display-solid-shapes-3~dark.png)

Finally, SwiftUI provides a `Capsule()` shape as a specialized form of rounded rectangles, where the shortest edge of the rectangle is always fully rounded. This is a popular style with buttons, because you get a lozenge-shaped button in just a couple of lines of code:

```swift
Capsule()
    .fill(.green)
    .frame(width: 150, height: 100)
```

> [<FontIcon icon="fas fa-download"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-display-solid-shapes-4.zip)

![A green capsule or lozenge shape.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-display-solid-shapes-4~dark.png)

::: details Similar solutions…

```component VPCard
{
  "title": "SwiftUI by Example > How to draw part of a solid shape using trim()",
  "desc": "How to draw part of a solid shape using trim()",
  "link": "/swift/swiftui-by-example/03-images-shapes-and-media/how-to-draw-part-of-a-solid-shape-using-trim.md",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

How to combine shapes to create new shapes

```component VPCard
{
  "title": "SwiftUI by Example > How to display a bottom sheet",
  "desc": "How to display a bottom sheet",
  "link": "/swift/swiftui-by-example/15-presenting-views/how-to-display-a-bottom-sheet.md",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to customize the display mode of NavigationSplitView",
  "desc": "How to customize the display mode of NavigationSplitView",
  "link": "/swift/swiftui-by-example/13-navigation/how-to-customize-the-display-mode-of-navigationsplitview.md",
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

:::

---

<TagLinks />