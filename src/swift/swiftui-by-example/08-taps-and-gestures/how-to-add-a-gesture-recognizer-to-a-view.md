---
lang: ko-KR
title: How to add a gesture recognizer to a view
description: SwiftUI by Example > How to add a gesture recognizer to a view
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
      content: SwiftUI by Example > How to add a gesture recognizer to a view
    - property: og:description
      content: How to add a gesture recognizer to a view
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/swift/swiftui-by-example/08-taps-and-gestures/how-to-add-a-gesture-recognizer-to-a-view.html
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
  "title": "SwiftUI by Example > How to add a gesture recognizer to a view",
  "desc": "How to add a gesture recognizer to a view",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-add-a-gesture-recognizer-to-a-view",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Any SwiftUI view can have gesture recognizers attached, and those gesture recognizers in turn can have closures attached that will be run when the recognizer activates.

There are several gesture recognizers to work with, and I’m going to provide you with code samples for several of them to help get you started – you’ll see how similar they are.

First, `TapGesture`. When you create this you can specify how many taps it takes to trigger the gesture, then attach an `onEnded` closure that will be run when the gesture happens. For example, this creates an image that gets smaller every time it’s tapped:

```swift
struct ContentView: View {
    @State private var scale = 1.0

    var body: some View {
        Image("ireland")
            .scaleEffect(scale)   
            .gesture(
                TapGesture()
                    .onEnded { _ in
                        scale -= 0.1
                    }
            )
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-add-a-gesture-recognizer-to-a-view-1.zip)

<VidStack src="https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-add-a-gesture-recognizer-to-a-view-1~dark.mp4"/>

Second, `LongPressGesture` recognizes when the user presses and holds on a view for at least a period of time you specify. So, this creates an image view that halves in size when pressed for at least one second:

```swift
struct ContentView: View {
    @State private var scale = 1.0

    var body: some View {
        Image("cornwall")
            .scaleEffect(scale)
            .gesture(
                LongPressGesture(minimumDuration: 1)
                    .onEnded { _ in
                        scale /= 2
                    }
            )
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-add-a-gesture-recognizer-to-a-view-2.zip)

<VidStack src="https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-add-a-gesture-recognizer-to-a-view-2~dark.mp4" />

Finally, `DragGesture` triggers when the user presses down on a view and moves at least a certain distance away. So, this creates an image with a drag gesture that triggers when the user moves it at least 50 points:

```swift
struct ContentView: View {
    @State private var dragCompleted = false

    var body: some View {
        VStack {
            Image("iceland")
                .gesture(
                    DragGesture(minimumDistance: 50)
                        .onEnded { _ in
                            dragCompleted = true
                        }
                )

            if dragCompleted {
                Text("Drag completed!")
            }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-add-a-gesture-recognizer-to-a-view-3.zip)

<VidStack src="https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-add-a-gesture-recognizer-to-a-view-3~dark.mp4" />

Drag gestures are particularly good when combined with the `offset()` modifier, which lets us adjust the natural position of a view. For example, this offsets an image using a `dragOffset` size, which itself is attached to a drag gesture:

```swift
struct ContentView: View {
    @State private var dragOffset = CGSize.zero

    var body: some View {
        VStack {
            Image("rome")
                .offset(dragOffset)
                .gesture(
                    DragGesture()
                        .onChanged { gesture in
                            dragOffset = gesture.translation
                        }
                        .onEnded { gesture in
                            dragOffset = .zero
                        }
                )
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-add-a-gesture-recognizer-to-a-view-4.zip)

<VidStack src="https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-add-a-gesture-recognizer-to-a-view-4~dark.mp4" />

If you try that code you’ll see you can drag the image around now, and when you release your finger it snaps back to its original location.

::: details Similar solutions…

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
  "title": "SwiftUI by Example > How to create gesture chains using sequenced(before:)",
  "desc": "How to create gesture chains using sequenced(before:)",
  "link": "/swift/swiftui-by-example/08-taps-and-gestures/how-to-create-gesture-chains-using-sequencedbefore.md",
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
  "title": "SwiftUI by Example > How to add an inspector to any view",
  "desc": "How to add an inspector to any view",
  "link": "/swift/swiftui-by-example/13-navigation/how-to-add-an-inspector-to-any-view.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to add bar items to a navigation view",
  "desc": "How to add bar items to a navigation view",
  "link": "/swift/swiftui-by-example/13-navigation/how-to-add-bar-items-to-a-navigation-view.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />