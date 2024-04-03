---
lang: ko-KR
title: How to tile an image
description: SwiftUI by Example > How to tile an image
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
      content: SwiftUI by Example > How to tile an image
    - property: og:description
      content: How to tile an image
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/swift/swiftui-by-example/03-images-shapes-and-media/how-to-tile-an-image.html
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

```component VPCard
{
  "title": "SwiftUI by Example > How to tile an image",
  "desc": "How to tile an image",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-tile-an-image",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

If SwiftUI is asked to make an image view take up more space than the image was designed for, its default behavior is to stretch the image so that it fits the space you’ve asked for. However, it doesn’t need to be that way: it can also _tile_ the image, i.e. repeat it horizontally and vertically so the space is fully filled.

The key is to use the `resizable()` modifier with its `resizingMode` parameter. This can be either `.stretch` (the default) or `.tile`, with `.tile` being what you’re looking for.

In code it looks like this:

```swift
Image("logo")
    .resizable(resizingMode: .tile)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-tile-an-image-1.zip)

![A phone showing tiled images of the Hacking With Swift logo.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-tile-an-image-1~dark.png)

If you only want to tile part of the image – leading one or more edges fixed to the image view’s edges – you can provide edge insets to the first parameter, like this:

```swift
Image("logo")
    .resizable(capInsets: EdgeInsets(top: 20, leading: 20, bottom: 20, trailing: 20), resizingMode: .tile)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-tile-an-image-2.zip)

![A phone showing tiled images of a slightly cropped Hacking With Swift logo.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-tile-an-image-2~dark.png)

::: details Similar solutions…

```component VPCard
{
  "title": "SwiftUI by Example > How to load a remote image from a URL",
  "desc": "How to load a remote image from a URL",
  "link": "/swift/swiftui-by-example/03-images-shapes-and-media/how-to-load-a-remote-image-from-a-url.md",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to convert a SwiftUI view to an image",
  "desc": "How to convert a SwiftUI view to an image",
  "link": "/swift/swiftui-by-example/17-drawing/how-to-convert-a-swiftui-view-to-an-image.md",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to draw images using Image views",
  "desc": "How to draw images using Image views",
  "link": "/swift/swiftui-by-example/03-images-shapes-and-media/how-to-draw-images-using-image-views.md",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to adjust the way an image is fitted to its space",
  "desc": "How to adjust the way an image is fitted to its space",
  "link": "/swift/swiftui-by-example/03-images-shapes-and-media/how-to-adjust-the-way-an-image-is-fitted-to-its-space.md",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > Displaying a detail screen with NavigationLink",
  "desc": "Displaying a detail screen with NavigationLink",
  "link": "/swift/swiftui-by-example/01-building-a-complete-project/displaying-a-detail-screen-with-navigationlink.md",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />