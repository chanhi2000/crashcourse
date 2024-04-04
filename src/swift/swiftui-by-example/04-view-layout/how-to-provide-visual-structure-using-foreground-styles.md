---
lang: ko-KR
title: How to provide visual structure using foreground styles
description: SwiftUI by Example > How to provide visual structure using foreground styles
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
      content: SwiftUI by Example > How to provide visual structure using foreground styles
    - property: og:description
      content: How to provide visual structure using foreground styles
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/swift/swiftui-by-example/04-view-layout/how-to-provide-visual-structure-using-foreground-styles.html
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

```component VPCard
{
  "title": "SwiftUI by Example > How to provide visual structure using foreground styles",
  "desc": "How to provide visual structure using foreground styles",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-provide-visual-structure-using-foreground-styles",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 15**

SwiftUI provides a `foregroundStyle()` modifier to control the way text, images, and shapes are styled all at once. In its simplest form this is similar to using `foregroundStyle()` with `.secondary`, but not only does it unlock more of the semantic colors – `.tertiary` and `.quaternary`, it also adds support for anything that conforms to `ShapeStyle`.

So, here’s an example of an image and some text rendered using quaternary style, which is the lowest of four importance levels for content:

```swift
HStack {
    Image(systemName: "clock.fill")
    Text("Set the time")
}
.font(.largeTitle.bold())
.foregroundStyle(.quaternary)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-provide-visual-structure-using-foreground-styles-1.zip)

A clock symbol beside the words “Set the time”, both in faint grey.

Like I said, anything that conforms to `ShapeStyle` also works, meaning that we can render our `HStack` with a red to black linear gradient using the same modifier:

```swift
HStack {
    Image(systemName: "clock.fill")
    Text("Set the time")
}
.font(.largeTitle.bold())
.foregroundStyle(
    .linearGradient(
        colors: [.red, .black],
        startPoint: .top,
        endPoint: .bottom
    )
)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-provide-visual-structure-using-foreground-styles-2.zip)

![A clock symbol beside the words “Set the time”, both with a gradient running from red at the top to black at the bottom.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-provide-visual-structure-using-foreground-styles-2~dark.png)

::: details Similar solutions…

```component VPCard
{
  "title": "SwiftUI by Example > How to detect when your app moves to the background or foreground with scenePhase",
  "desc": "How to detect when your app moves to the background or foreground with scenePhase",
  "link": "/swift/swiftui-by-example/07-responding-to-events/how-to-detect-when-your-app-moves-to-the-background-or-foreground-with-scenephase.md",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to add visual effect blurs",
  "desc": "How to add visual effect blurs",
  "link": "/swift/swiftui-by-example/17-drawing/how-to-add-visual-effect-blurs.md",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to provide relative sizes using GeometryReader",
  "desc": "How to provide relative sizes using GeometryReader",
  "link": "/swift/swiftui-by-example/04-view-layout/how-to-provide-relative-sizes-using-geometryreader.md",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to get custom colors and transparency with SF Symbols",
  "desc": "How to get custom colors and transparency with SF Symbols",
  "link": "/swift/swiftui-by-example/03-images-shapes-and-media/how-to-get-custom-colors-and-transparency-with-sf-symbols.md",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > SwiftUI tips and tricks",
  "desc": "SwiftUI tips and tricks",
  "link": "/swift/swiftui-by-example/24-what-now/swiftui-tips-and-tricks.md",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />