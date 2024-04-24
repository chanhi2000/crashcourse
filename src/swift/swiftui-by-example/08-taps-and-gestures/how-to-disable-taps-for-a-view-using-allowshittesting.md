---
lang: ko-KR
title: How to disable taps for a view using allowsHitTesting()
description: SwiftUI by Example > How to disable taps for a view using allowsHitTesting()
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
      content: SwiftUI by Example > How to disable taps for a view using allowsHitTesting()
    - property: og:description
      content: How to disable taps for a view using allowsHitTesting()
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/swift/swiftui-by-example/08-taps-and-gestures/how-to-disable-taps-for-a-view-using-allowshittesting.html
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
  "title": "SwiftUI by Example > How to disable taps for a view using allowsHitTesting()",
  "desc": "How to disable taps for a view using allowsHitTesting()",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-disable-taps-for-a-view-using-allowshittesting",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI lets us stop a view from receiving any kind of taps using the `allowsHitTesting()` modifier. If hit testing is disallowed for a view, any taps automatically continue through the view on to whatever is behind it.

To demonstrate this, here’s a `ZStack` containing a translucent rectangle with a button underneath:

```swift
ZStack {
    Button("Tap Me") {
        print("Button was tapped")
    }
    .frame(width: 100, height: 100)
    .background(.gray)

    Rectangle()
        .fill(.red.opacity(0.2))
        .frame(width: 300, height: 300)
        .clipShape(Circle())
        .allowsHitTesting(false)
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-disable-taps-for-a-view-using-allowshittesting-1.zip)

<VidStack src="https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-disable-taps-for-a-view-using-allowshittesting-1~dark.mp4" />

Even though the rectangle is on top of the button, it has `allowsHitTesting(false)` – any taps on the rectangle won’t be trapped by the rectangle, but instead passed through to the button below.

This kind of effect is useful for when you want to highlight one view with another – the red circle above might be part of a tutorial saying “Tap here to get started”, and that wouldn’t work if the circle itself caught the tap.

::: details Similar solutions…

```component VPCard
{
  "title": "SwiftUI by Example > How to disable autocorrect in a TextField",
  "desc": "How to disable autocorrect in a TextField",
  "link": "/swift/swiftui-by-example/06-user-interface-controls/how-to-disable-autocorrect-in-a-textfield.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to disable the overlay color for images inside Button and NavigationLink",
  "desc": "How to disable the overlay color for images inside Button and NavigationLink",
  "link": "/swift/swiftui-by-example/06-user-interface-controls/how-to-disable-the-overlay-color-for-images-inside-button-and-navigationlink.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to disable ScrollView clipping so contents overflow",
  "desc": "How to disable ScrollView clipping so contents overflow",
  "link": "/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-disable-scrollview-clipping-so-contents-overflow",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > SwiftUI tips and tricks",
  "desc": "SwiftUI tips and tricks",
  "link": "/swift/swiftui-by-example/24-what-now/swiftui-tips-and-tricks.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to convert a SwiftUI view to an image",
  "desc": "How to convert a SwiftUI view to an image",
  "link": "/swift/swiftui-by-example/17-drawing/how-to-convert-a-swiftui-view-to-an-image.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />