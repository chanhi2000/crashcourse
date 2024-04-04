---
lang: ko-KR
title: How to place content outside the safe area
description: SwiftUI by Example > How to place content outside the safe area
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
      content: SwiftUI by Example > How to place content outside the safe area
    - property: og:description
      content: How to place content outside the safe area
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/swift/swiftui-by-example/04-view-layout/how-to-place-content-outside-the-safe-area.html
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

```component VPCard
{
  "title": "SwiftUI by Example > How to place content outside the safe area",
  "desc": "How to place content outside the safe area",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-place-content-outside-the-safe-area",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

By default your SwiftUI views will mostly stay inside the safe area – they will go to the bottom of the screen, but it won’t go near any notch at the top of the device.

If you want to change that – if you want your view to be truly full screen, even if that means being partly obscured by a notch or other hardware cut outs – then you should use the `ignoresSafeArea()` modifier.

For example, this creates a red text view that asks to fill all available space, then sets it to ignore any safe areas so that it goes truly edge to edge.

```swift
Text("Hello World")
    .frame(minWidth: 100, maxWidth: .infinity, minHeight: 100, maxHeight: .infinity)
    .background(.red)
    .ignoresSafeArea()
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-place-content-outside-the-safe-area-1.zip)

![A phone showing the words “Hello World” over a red background which fills the screen.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-place-content-outside-the-safe-area-1~dark.png)

There is a second, similar modifier called `safeAreaInset()`, which allows us to place distinct content outside the safe area while also adjusting the remaining safe area so that all its contents remain visible.

::: details Similar solutions…

How to place content into the safe area

```component VPCard
{
  "title": "SwiftUI by Example > How to inset the safe area with custom content",
  "desc": "How to inset the safe area with custom content",
  "link": "/swift/swiftui-by-example/04-view-layout/how-to-inset-the-safe-area-with-custom-content.md",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

How to add extra padding to the safe area

```component VPCard
{
  "title": "SwiftUI by Example > How to control the tappable area of a view using contentShape()",
  "desc": "How to control the tappable area of a view using contentShape()",
  "link": "/swift/swiftui-by-example/08-taps-and-gestures/how-to-control-the-tappable-area-of-a-view-using-contentshape.md",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

How to indent the content or scroll indicators in a ScrollView

:::

---

<TagLinks />