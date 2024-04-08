---
lang: ko-KR
title: How to draw part of a solid shape using trim()
description: SwiftUI by Example > How to draw part of a solid shape using trim()
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
      content: SwiftUI by Example > How to draw part of a solid shape using trim()
    - property: og:description
      content: How to draw part of a solid shape using trim()
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/swift/swiftui-by-example/03-images-shapes-and-media/how-to-draw-part-of-a-solid-shape-using-trim.html
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
  "title": "SwiftUI by Example > How to draw part of a solid shape using trim()",
  "desc": "How to draw part of a solid shape using trim()",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-draw-part-of-a-solid-shape-using-trim",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI lets us draw only part of a stroke or fill for a shape using its `trim()` modifier, which takes two parameters: a start value and an end value, both stored as a number between 0 and 1.

For example, if you wanted a semicircle you would write this:

```swift
Circle()
    .trim(from: 0, to: 0.5)
    .frame(width: 200, height: 200)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-draw-part-of-a-solid-shape-using-trim-1.zip)

![The bottom half of a circle.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-draw-part-of-a-solid-shape-using-trim-1~dark.png)

SwiftUI draws its shapes so that 0 degrees is directly to the right, so if you want to change that so 0 degrees is directly up you should apply a `rotationEffect()` modifier.

For example, this uses a timer to adjust the values being passed into `trim()` so that a rectangle’s stroke grows over time, like a progress indicator:

```swift
struct ContentView: View {
    @State private var completionAmount = 0.0
    let timer = Timer.publish(every: 1, on: .main, in: .common).autoconnect()

    var body: some View {
        Rectangle()
            .trim(from: 0, to: completionAmount)
            .stroke(.red, lineWidth: 20)
            .frame(width: 200, height: 200)
            .rotationEffect(.degrees(-90))
            .onReceive(timer) { _ in
                withAnimation {
                    if completionAmount == 1 { 
                        completionAmount = 0
                    } else {
                        completionAmount += 0.2
                    }
                }
            }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-draw-part-of-a-solid-shape-using-trim-2.zip)

<VidStack src="https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-draw-part-of-a-solid-shape-using-trim-2~dark.mp4" />

You can also use `trim()` with filled shapes, although the result is a little weird when animated.

::: details Similar solutions…

```component VPCard
{
  "title": "SwiftUI by Example > How to display solid shapes",
  "desc": "How to display solid shapes",
  "link": "/swift/swiftui-by-example/03-images-shapes-and-media/how-to-display-solid-shapes.md",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to clip a view so only part is visible",
  "desc": "How to clip a view so only part is visible",
  "link": "/swift/swiftui-by-example/16-transforming-views/how-to-clip-a-view-so-only-part-is-visible.md",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to draw a custom path",
  "desc": "How to draw a custom path",
  "link": "/swift/swiftui-by-example/17-drawing/how-to-draw-a-custom-path.md",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to draw a shadow around a view",
  "desc": "How to draw a shadow around a view",
  "link": "/swift/swiftui-by-example/16-transforming-views/how-to-draw-a-shadow-around-a-view.md",
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

:::
---

<TagLinks />