---
lang: ko-KR
title: How to adjust the way an image is fitted to its space
description: SwiftUI by Example > How to adjust the way an image is fitted to its space
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
      content: SwiftUI by Example > How to adjust the way an image is fitted to its space
    - property: og:description
      content: How to adjust the way an image is fitted to its space
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/swift/swiftui-by-example/03-images-shapes-and-media/how-to-adjust-the-way-an-image-is-fitted-to-its-space.html
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

```component VPCard
{
  "title": "SwiftUI by Example > How to adjust the way an image is fitted to its space",
  "desc": "How to adjust the way an image is fitted to its space",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-adjust-the-way-an-image-is-fitted-to-its-space",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI’s `Image` view has the ability to be scaled in different ways, just like the content mode of a `UIImageView`.

By default, image views automatically size themselves to their contents, which might make them go beyond the screen. If you add the `resizable()` modifier then the image will instead automatically be sized so that it fills all the available space, either in a frame you specify or whatever is available on the screen:

```swift
Image("rome")
    .resizable()
    .frame(height: 200)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-adjust-the-way-an-image-is-fitted-to-its-space-1.zip)

![A phone showing an image of the Pantheon in Rome. The image is stretched horizontally.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-adjust-the-way-an-image-is-fitted-to-its-space-1~dark.png)

However, that may also cause the image to have its original aspect ratio distorted, because it will be stretched in all dimensions by whatever amount is needed to make it fill the space.

If you want to keep its aspect ratio you should add an `aspectRatio` modifier using either `.fill` or `.fit`, like this:

```swift
Image("rome")
    .resizable()
    .aspectRatio(contentMode: .fit)
    .frame(width: 250)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-adjust-the-way-an-image-is-fitted-to-its-space-2.zip)

![A phone showing an image of the Pantheon in Rome. The image is no longer stretched.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-adjust-the-way-an-image-is-fitted-to-its-space-2~dark.png)

::: details Similar solutions…

How to dynamically adjust the appearance of a view based on its size and location

```component VPCard
{
  "title": "SwiftUI by Example > How to adjust the position of a view using its offset",
  "desc": "How to adjust the position of a view using its offset",
  "link": "/swift/swiftui-by-example/16-transforming-views/how-to-adjust-the-position-of-a-view-using-its-offset.md",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

How to adjust the size of a view relative to its container

```component VPCard
{
  "title": "SwiftUI by Example > Two-way bindings in SwiftUI",
  "desc": "Two-way bindings in SwiftUI",
  "link": "/swift/swiftui-by-example/01-building-a-complete-project/two-way-bindings-in-swiftui.md",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to customize the way links are opened",
  "desc": "How to customize the way links are opened",
  "link": "/swift/swiftui-by-example/02-working-with-static-text/how-to-customize-the-way-links-are-opened.md",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />