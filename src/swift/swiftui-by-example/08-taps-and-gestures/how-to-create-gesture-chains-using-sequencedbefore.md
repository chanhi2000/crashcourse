---
lang: ko-KR
title: How to create gesture chains using sequenced(before)
description: SwiftUI by Example > How to create gesture chains using sequenced(before)
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
      content: SwiftUI by Example > How to create gesture chains using sequenced(before)
    - property: og:description
      content: How to create gesture chains using sequenced(before)
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/swift/swiftui-by-example/08-taps-and-gestures/how-to-create-gesture-chains-using-sequencedbefore.html
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
  "title": "SwiftUI by Example > How to create gesture chains using sequenced(before:)",
  "desc": "How to create gesture chains using sequenced(before:)",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-create-gesture-chains-using-sequencedbefore",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI lets us create new gestures out of sequences of other gestures, which allows us to trigger an action only when two gestures occur back to back – for example if the user drags a view then long-presses on it.

Because the sequenced views need to be able to reference each other, you can’t really create them as properties of your view. Instead, create them directly inside your `body` property, then use `firstGesture.sequenced(before: secondGesture)` to chain the two together into a single gesture.

As an example, this next code requires you to long press on the text view before dragging it:

```swift
struct ContentView: View {
    @State private var message = "Long press then drag"

    var body: some View {
        let longPress = LongPressGesture()
            .onEnded { _ in
                message = "Now drag me"
            }

        let drag = DragGesture()
            .onEnded { _ in
                message = "Success!"
            }

        let combined = longPress.sequenced(before: drag)

        Text(message)
            .gesture(combined)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-create-gesture-chains-using-sequenced-before-1.zip)

<VidStack src="https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-gesture-chains-using-sequencedbefore-1~dark.mp4"/>

As you can see, I’ve made the text view update as the two gestures happen, so if you try it out you’ll be able to follow the progress of the gesture sequence.

::: details Similar solutions…

```component VPCard
{
  "title": "SwiftUI by Example > How to add a gesture recognizer to a view",
  "desc": "How to add a gesture recognizer to a view",
  "link": "/swift/swiftui-by-example/08-taps-and-gestures/how-to-add-a-gesture-recognizer-to-a-view.md",
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
  "title": "SwiftUI by Example > How to create multi-column lists using Table",
  "desc": "How to create multi-column lists using Table",
  "link": "/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-create-multi-column-lists-using-table.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > What is the @GestureState property wrapper?",
  "desc": "What is the @GestureState property wrapper?",
  "link": "/swift/swiftui-by-example/25-appendix-a/what-is-the-gesturestate-property-wrapper.md",
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