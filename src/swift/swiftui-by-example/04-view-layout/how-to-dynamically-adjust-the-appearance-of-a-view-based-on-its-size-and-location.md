---
lang: ko-KR
title: How to dynamically adjust the appearance of a view based on its size and location
description: SwiftUI by Example > How to dynamically adjust the appearance of a view based on its size and location
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
      content: SwiftUI by Example > How to dynamically adjust the appearance of a view based on its size and location
    - property: og:description
      content: How to dynamically adjust the appearance of a view based on its size and location
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/swift/swiftui-by-example/04-view-layout/how-to-dynamically-adjust-the-appearance-of-a-view-based-on-its-size-and-location.html
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
  "title": "SwiftUI by Example > How to dynamically adjust the appearance of a view based on its size and location",
  "desc": "How to dynamically adjust the appearance of a view based on its size and location",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-dynamically-adjust-the-appearance-of-a-view-based-on-its-size-and-location",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 17**

SwiftUI’s `visualEffect()` modifier lets us read the geometry proxy for a view *without* using a `GeometryReader`, which means we can look at the size and location of a view without affecting its layout behavior.

::: important

This modifier is specifically for applying visual effects such as adjusting colors or adding blur, and cannot adjust how the frame of your content is calculated for layout purposes. It *can* adjust frame-*like* things such as the offset and scale of your view, because they don’t affect layout.

:::

As an example, the following code blurs each view in a scroll view by some blur amount that’s calculated by how far away the view is away from the center of its scroll view. That means views near the vertical center have little or no blur, whereas views on the outside are heavily blurred:

```swift
struct ContentView: View {
    var body: some View {
        ScrollView {
            ForEach(0..<100) { i in
                Text("Row \(i)")
                    .font(.largeTitle)
                    .frame(maxWidth: .infinity)
                    .visualEffect { content, proxy in
                        content.blur(radius: blurAmount(for: proxy))
                    }
            }
        }
    }

    func blurAmount(for proxy: GeometryProxy) -> Double {
        let scrollViewHeight = proxy.bounds(of: .scrollView)?.height ?? 100
        let ourCenter = proxy.frame(in: .scrollView).midY
        let distanceFromCenter = abs(scrollViewHeight / 2 - ourCenter)
        return Double(distanceFromCenter) / 100
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-dynamically-adjust-the-appearance-of-a-view-based-on-its-size-and-location-1.zip)

![A scrolling list of rows, where rows near the center are sharp and rows near the edges are blurry.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-dynamically-adjust-the-appearance-of-a-view-based-on-its-size-and-location-1~dark.gif)

::: tip

Calling `proxy.frame(in: .scrollView)` finds the size of this view in the innermost scroll view that contains it.

:::

These visual effects work with any kind of position, including that generated through animation. For example, this makes a series of circles in a grid spin around, with each one dynamically recoloring based on a hue rotation:

```swift
struct ContentView: View {
    @State private var rotationAmount = 0.0

    var body: some View {
        Grid {
            ForEach(0..<3) { _ in
                GridRow {
                    ForEach(0..<3) { _ in
                        Circle()
                            .fill(.green)
                            .frame(width: 100, height: 100)
                            .visualEffect { content, proxy in
                                content.hueRotation(.degrees(proxy.frame(in: .global).midY / 2))
                            }
                    }
                }
            }
        }
        .rotationEffect(.degrees(rotationAmount))
        .onAppear {
            withAnimation(.linear(duration: 5).repeatForever(autoreverses: false)) {
                rotationAmount = 360
            }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-dynamically-adjust-the-appearance-of-a-view-based-on-its-size-and-location-2.zip)

![A 3x3 grid of rotating circles, where each circle changes colors as it moves.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-dynamically-adjust-the-appearance-of-a-view-based-on-its-size-and-location-2~dark.gif)

The modifier’s name, `visualEffect()`, should make it clear that any adjustments you make are limited how the finished view looks – if you find yourself wanting to use it to adjust view *content*, you’re looking in the wrong place.

::: details Similar solutions…

```component VPCard
{
  "title": "SwiftUI by Example > How to adjust the size of a view relative to its container",
  "desc": "How to adjust the size of a view relative to its container",
  "link": "/swift/swiftui-by-example/04-view-layout/how-to-adjust-the-size-of-a-view-relative-to-its-containe",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to automatically switch between HStack and VStack based on size class",
  "desc": "How to automatically switch between HStack and VStack based on size class",
  "link": "/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-automatically-switch-between-hstack-and-vstack-based-on-size-class.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to dynamically adjust the color of an SF Symbol",
  "desc": "How to dynamically adjust the color of an SF Symbol",
  "link": "/swift/swiftui-by-example/03-images-shapes-and-media/how-to-dynamically-adjust-the-color-of-an-sf-symbol.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to adjust the position of a view using its offset",
  "desc": "How to adjust the position of a view using its offset",
  "link": "/swift/swiftui-by-example/16-transforming-views/how-to-adjust-the-position-of-a-view-using-its-offset.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to create a document-based app using FileDocument and DocumentGroup",
  "desc": "How to create a document-based app using FileDocument and DocumentGroup",
  "link": "/swift/swiftui-by-example/21-data/how-to-create-a-document-based-app-using-filedocument-and-documentgroup.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />