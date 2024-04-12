---
lang: ko-KR
title: How to create a stepper and read values from it
description: SwiftUI by Example > How to create a stepper and read values from it
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
      content: SwiftUI by Example > How to create a stepper and read values from it
    - property: og:description
      content: How to create a stepper and read values from it
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/swift/swiftui-by-example/06-user-interface-controls/how-to-create-a-stepper-and-read-values-from-it.html
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
  "title": "SwiftUI by Example > How to create a stepper and read values from it",
  "desc": "How to create a stepper and read values from it",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-create-a-stepper-and-read-values-from-it",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI’s `Stepper` control lets users select values from a range we specify, providing the same functionality as `UIStepper` from UIKit.

As an example, this creates a stepper bound to an `age` property, letting users select values in the range 0 through 130 inclusive:

```swift
struct ContentView: View {
    @State private var age = 18

    var body: some View {
        VStack {
            Stepper("Enter your age", value: $age, in: 0...130)
            Text("Your age is \(age)")
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-create-a-stepper-and-read-values-from-it-1.zip)

![The words “Enter your age” beside a grey capsule containing a minus and a plus button. Below are the words “Your age is 18”.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-a-stepper-and-read-values-from-it-1~dark.png)

Rather than binding directly to a value, you can also provide custom `onIncrement` and `onDecrement` closures to do custom work, like this:

```swift
struct ContentView: View {
    @State private var age = 18

    var body: some View {
        VStack {
            Stepper("Enter your age", onIncrement: {
                age += 1
            }, onDecrement: {
                age -= 1
            })

            Text("Your age is \(age)")
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-create-a-stepper-and-read-values-from-it-2.zip)

![The words “Enter your age” beside a grey capsule containing a minus and a plus button. Below are the words “Your age is 18”.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-a-stepper-and-read-values-from-it-2~dark.png)

::: details Similar solutions…

```component VPCard
{
  "title": "SwiftUI by Example > How to hide the label of a Picker, Stepper, Toggle, and more using labelsHidden()",
  "desc": "How to hide the label of a Picker, Stepper, Toggle, and more using labelsHidden()",
  "link": "/swift/swiftui-by-example/06-user-interface-controls/how-to-hide-the-label-of-a-picker-stepper-toggle-and-more-using-labelshidden.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to create a date picker and read values from it",
  "desc": "How to create a date picker and read values from it",
  "link": "/swift/swiftui-by-example/06-user-interface-controls/how-to-create-a-date-picker-and-read-values-from-it.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to create a segmented control and read values from it",
  "desc": "How to create a segmented control and read values from it",
  "link": "/swift/swiftui-by-example/06-user-interface-controls/how-to-create-a-segmented-control-and-read-values-from-it.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to create a picker and read values from it",
  "desc": "How to create a picker and read values from it",
  "link": "/swift/swiftui-by-example/06-user-interface-controls/how-to-create-a-picker-and-read-values-from-it.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to create a slider and read values from it",
  "desc": "How to create a slider and read values from it",
  "link": "/swift/swiftui-by-example/06-user-interface-controls/how-to-create-a-slider-and-read-values-from-it.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />