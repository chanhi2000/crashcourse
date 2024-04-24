---
lang: ko-KR
title: How to make two gestures recognize at the same time using simultaneousGesture()
description: SwiftUI by Example > How to make two gestures recognize at the same time using simultaneousGesture()
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
      content: SwiftUI by Example > How to make two gestures recognize at the same time using simultaneousGesture()
    - property: og:description
      content: How to make two gestures recognize at the same time using simultaneousGesture()
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/swift/swiftui-by-example/08-taps-and-gestures/how-to-make-two-gestures-recognize-at-the-same-time-using-simultaneousgesture.html
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
  "title": "SwiftUI by Example > How to make two gestures recognize at the same time using simultaneousGesture()",
  "desc": "How to make two gestures recognize at the same time using simultaneousGesture()",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-make-two-gestures-recognize-at-the-same-time-using-simultaneousgesture",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

By default SwiftUI will trigger only one gesture recognizer action at a time, which is usually whichever one is the front-most view in your hierarchy – it would prefer a recognizer on a child view rather than its parent, for example. If you want to override this behavior to make two gestures trigger at once, you should use the `simultaneousGesture()` when creating your second and subsequent gestures.

For example, in this code we have two tap gestures, but SwiftUI will execute only the one attached to the circle because it’s the child of the `VStack`:

```swift
struct ContentView: View {
    var body: some View {
        VStack {
            Circle()
                .fill(.red)
                .frame(width: 200, height: 200)
                .onTapGesture {
                    print("Circle tapped")
                }
        }
        .onTapGesture {
            print("VStack tapped")
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-make-two-gestures-recognize-at-the-same-time-using-simultaneousgesture-1.zip)

<VidStack src="https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-make-two-gestures-recognize-at-the-same-time-using-simultaneousgesture-1~dark.mp4" />

If you want *both* gestures to trigger – i.e., if you want both “Circle tapped” and “VStack tapped” to be printed – you should use `simultaneousGesture()` on the `VStack` like this:

```swift
struct ContentView: View {
    var body: some View {
        VStack {
            Circle()
                .fill(.red)
                .frame(width: 200, height: 200)
                .onTapGesture {
                    print("Circle tapped")
                }
        }
        .simultaneousGesture(
            TapGesture()
                .onEnded { _ in
                    print("VStack tapped")
                }
        )
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-make-two-gestures-recognize-at-the-same-time-using-simultaneousgesture-2.zip)

<VidStack src="https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-make-two-gestures-recognize-at-the-same-time-using-simultaneousgesture-2~dark.mp4" />

::: note

You should use `simultaneousGesture()` with the gesture that would otherwise not be executed otherwise it won’t work. So, in our previous example using `simultaneousGesture()` with the circle and a simple `onTapGesture()` with the `VStack` will still print just “Circle tapped” – it won’t do what you expect.

:::

::: details Similar solutions…

```component VPCard
{
  "title": "SwiftUI by Example > How to make two views the same width or height",
  "desc": "How to make two views the same width or height",
  "link": "/swift/swiftui-by-example/04-view-layout/how-to-make-two-views-the-same-width-or-height.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to fill and stroke shapes at the same time",
  "desc": "How to fill and stroke shapes at the same time",
  "link": "/swift/swiftui-by-example/03-images-shapes-and-media/how-to-fill-and-stroke-shapes-at-the-same-time.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to force one gesture to recognize before another using highPriorityGesture()",
  "desc": "How to force one gesture to recognize before another using highPriorityGesture()",
  "link": "/swift/swiftui-by-example/08-taps-and-gestures/how-to-force-one-gesture-to-recognize-before-another-using-highprioritygesture.md",
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
  "title": "SwiftUI by Example > How to detect shake gestures",
  "desc": "How to detect shake gestures",
  "link": "/swift/swiftui-by-example/08-taps-and-gestures/how-to-detect-shake-gestures.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />