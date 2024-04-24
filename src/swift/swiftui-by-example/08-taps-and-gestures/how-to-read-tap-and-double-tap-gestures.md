---
lang: ko-KR
title: How to read tap and double-tap gestures
description: SwiftUI by Example > How to read tap and double-tap gestures
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
      content: SwiftUI by Example > How to read tap and double-tap gestures
    - property: og:description
      content: How to read tap and double-tap gestures
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/swift/swiftui-by-example/08-taps-and-gestures/how-to-read-tap-and-double-tap-gestures.html
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
  "title": "SwiftUI by Example > How to read tap and double-tap gestures",
  "desc": "How to read tap and double-tap gestures",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-read-tap-and-double-tap-gestures",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Any SwiftUI view can have tap actions attached, and you can specify how many taps should be received before the action is triggered.

For example, this creates a text view that will print a message when tapped:

```swift
Text("Tap me!")
    .onTapGesture {
        print("Tapped!")
    }
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-read-tap-and-double-tap-gestures-1.zip)

<VidStack src="https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-read-tap-and-double-tap-gestures-1~dark.mp4" />

And this creates an image view that will print a message when double tapped:

```swift
Image("singapore")
    .onTapGesture(count: 2) {
        print("Double tapped!")
    }
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-read-tap-and-double-tap-gestures-2.zip)

<VidStack src="https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-read-tap-and-double-tap-gestures-2~dark.mp4" />

::: details Similar solutions…

```component VPCard
{
  "title": "SwiftUI by Example > How to detect the location of a tap inside a view",
  "desc": "How to detect the location of a tap inside a view",
  "link": "/swift/swiftui-by-example/08-taps-and-gestures/how-to-detect-the-location-of-a-tap-inside-a-view.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to make two gestures recognize at the same time using simultaneousGesture()",
  "desc": "How to make two gestures recognize at the same time using simultaneousGesture()",
  "link": "/swift/swiftui-by-example/08-taps-and-gestures/how-to-make-two-gestures-recognize-at-the-same-time-using-simultaneousgesture.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to detect shake gestures",
  "desc": "How to detect shake gestures",
  "link": "/swift/swiftui-by-example/08-taps-and-gestures/how-to-detect-shake-gestures.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to stop system gestures from interfering with your own",
  "desc": "How to stop system gestures from interfering with your own",
  "link": "/swift/swiftui-by-example/04-view-layout/how-to-stop-system-gestures-from-interfering-with-your-own.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > All SwiftUI property wrappers explained and compared",
  "desc": "All SwiftUI property wrappers explained and compared",
  "link": "/swift/swiftui-by-example/25-appendix-a/all-swiftui-property-wrappers-explained-and-compared.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />