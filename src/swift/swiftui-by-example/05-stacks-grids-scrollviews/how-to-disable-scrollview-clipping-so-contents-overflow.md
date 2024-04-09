---
lang: ko-KR
title: How to disable ScrollView clipping so contents overflow
description: SwiftUI by Example > How to disable ScrollView clipping so contents overflow
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
      content: SwiftUI by Example > How to disable ScrollView clipping so contents overflow
    - property: og:description
      content: How to disable ScrollView clipping so contents overflow
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/swift/swiftui-by-example/04-view-layout/how-to-disable-scrollview-clipping-so-contents-overflow.html
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
  "title": "SwiftUI by Example > How to disable ScrollView clipping so contents overflow",
  "desc": "How to disable ScrollView clipping so contents overflow",
  "link": " ",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 17**

SwiftUI’s `ScrollView` automatically clips its contents, so that scrolling views always stay fully inside the scroll view area. However, if you use the `scrollClipDisabled()` modifier you can override this default behavior, allowing scrolling views to overflow.

::: important

This does not affect the touch area of the scroll view, so if users tap on views that have overflowed your `ScrollView` that tap will actually be received by whatever is below. So, it’s probably best to restrict this a little, for example to allow shadows to flow outside the scrolling area without affecting other views too much.

:::

As an example, this next example shows a `VStack` with fixed text at the top and bottom, with a scrolling area in the middle. The scrolling views will start neatly aligned below the top text, but as you scroll will overflow:

```swift
VStack {
    Text("Fixed at the top")
        .frame(maxWidth: .infinity)
        .frame(height: 100)
        .background(.green)
        .foregroundStyle(.white)

    ScrollView {
        ForEach(0..<5) { i in
            Text("Scrolling")
                .frame(maxWidth: .infinity)
                .frame(height: 200)
                .background(.blue)
                .foregroundStyle(.white)
        }
    }
    .scrollClipDisabled()

    Text("Fixed at the bottom")
        .frame(maxWidth: .infinity)
        .frame(height: 100)
        .background(.green)
        .foregroundStyle(.white)
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-disable-scrollview-clipping-so-contents-overflow-1.zip)

![Views inside a scrollview scrolling outside their container as the user moves around.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-disable-scrollview-clipping-so-contents-overflow-1~dark.gif)

There are two extra things it’s helpful to know when working with `scrollClipDisabled()`:

1. You can add a custom clip shape to limit how far things overflow. For example, adding `padding()` then `clipShape(.rect)` means you get a little overflow, but not infinite.
2. Because scrolling views now overlap their surroundings, you may need to use `zIndex()` to adjust their vertical positioning. For example, if other views have the default Z index, then using `zIndex(1)` on your scroll view will make its children render over other views.

::: details Similar solutions…

```component VPCard
{
  "title": "SwiftUI by Example > How to disable autocorrect in a TextField",
  "desc": "How to disable autocorrect in a TextField",
  "link": "/swift/swiftui-by-example/06-user-interface-controls/how-to-disable-autocorrect-in-a-textfield.md",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to disable taps for a view using allowsHitTesting()",
  "desc": "How to disable taps for a view using allowsHitTesting()",
  "link": "/swift/swiftui-by-example/08-taps-and-gestures/how-to-disable-taps-for-a-view-using-allowshittesting.md",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to disable the overlay color for images inside Button and NavigationLink",
  "desc": "How to disable the overlay color for images inside Button and NavigationLink",
  "link": "/swift/swiftui-by-example/06-user-interface-controls/how-to-disable-the-overlay-color-for-images-inside-button-and-navigationlink.md",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to indent the content or scroll indicators in a ScrollView",
  "desc": "How to indent the content or scroll indicators in a ScrollView",
  "link": "/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-indent-the-content-or-scroll-indicators-in-a-scrollview.md",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to flash the scroll bar indicators of a ScrollView or List",
  "desc": "How to flash the scroll bar indicators of a ScrollView or List",
  "link": "/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-flash-the-scroll-bar-indicators-of-a-scrollview-or-list.md",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />