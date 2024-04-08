---
lang: ko-KR
title:  How to stop system gestures from interfering with your own
description: SwiftUI by Example >  How to stop system gestures from interfering with your own
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
      content: SwiftUI by Example >  How to stop system gestures from interfering with your own
    - property: og:description
      content:  How to stop system gestures from interfering with your own
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/swift/swiftui-by-example/04-view-layout/how-to-stop-system-gestures-from-interfering-with-your-own.html
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
  "title": "SwiftUI by Example >  How to stop system gestures from interfering with your own",
  "desc": " How to stop system gestures from interfering with your own",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-stop-system-gestures-from-interfering-with-your-own",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 16**

SwiftUI’s `defersSystemGestures()` modifier lets us request that our gestures take precedence over the system’s own built-in gestures. This is important in various places, such as games where the user might be swiping around a lot, or when you place your own gestures at the screen edges.

As an example, you might be using a drag gesture to let the user control the value of some input – perhaps they are getting fine control over a color, maybe they are working with audio such as a theremin, or maybe it’s a game where they are swiping to move their character around. Here we could use `defersSystemGestures()` like this:

```swift
struct ContentView: View {
    @State private var input = 0.0

    var body: some View {
        Text("Current value: \(input)")
            .frame(maxWidth: .infinity, maxHeight: .infinity)
            .contentShape(Rectangle())
            .gesture(
                DragGesture().onChanged { value in
                    input = value.location.y - value.startLocation.y
                }
            )
            .defersSystemGestures(on: .vertical)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-return-different-view-types-4.zip)

On iOS that does three distinct things:

1. If the user pulls down from the top, rather than Control Center appearing immediately they’ll see a little tab that needs to be pulled again – it’s much harder for them to active Control Center by accident.
2. The home indicator will fade to a lower opacity, and if the user drags directly on that faded home indicator then it will fade back in. They can then swipe up again to get to the task switcher or home screen.
3. If the user swipes up from the bottom but to either side of the home indicator, our drag gesture will happen instead.

::: details Similar solutions…

```component VPCard
{
  "title": "SwiftUI by Example > How to make two gestures recognize at the same time using simultaneousGesture()",
  "desc": "How to make two gestures recognize at the same time using simultaneousGesture()",
  "link": "/swift/swiftui-by-example/08-taps-and-gestures/how-to-make-two-gestures-recognize-at-the-same-time-using-simultaneousgesture.md",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to let users share content using the system share sheet",
  "desc": "How to let users share content using the system share sheet",
  "link": "/swift/swiftui-by-example/07-responding-to-events/how-to-let-users-share-content-using-the-system-share-sheet.md",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to hide the home indicator and other system UI",
  "desc": "How to hide the home indicator and other system UI",
  "link": "/swift/swiftui-by-example/04-view-layout/how-to-hide-the-home-indicator-and-other-system-ui.md",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to detect shake gestures",
  "desc": "How to detect shake gestures",
  "link": "/swift/swiftui-by-example/08-taps-and-gestures/how-to-detect-shake-gestures.md",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to read tap and double-tap gestures",
  "desc": "How to read tap and double-tap gestures",
  "link": "/swift/swiftui-by-example/08-taps-and-gestures/how-to-read-tap-and-double-tap-gestures.md",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />