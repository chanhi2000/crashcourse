---
lang: ko-KR
title: How to flash the scroll bar indicators of a ScrollView or List
description: SwiftUI by Example > How to flash the scroll bar indicators of a ScrollView or List
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
      content: SwiftUI by Example > How to flash the scroll bar indicators of a ScrollView or List
    - property: og:description
      content: How to flash the scroll bar indicators of a ScrollView or List
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/swift/swiftui-by-example/04-view-layout/how-to-flash-the-scroll-bar-indicators-of-a-scrollview-or-list.html
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
  "title": "SwiftUI by Example > How to flash the scroll bar indicators of a ScrollView or List",
  "desc": "How to flash the scroll bar indicators of a ScrollView or List",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-flash-the-scroll-bar-indicators-of-a-scrollview-or-list",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 17**

SwiftUI gives us the `scrollIndicatorsFlash()` modifier to control when the scroll indicators for a `ScrollView` or `List` should flash, which is a great way to notify your users that some part of its data has changed. This modifier comes in two forms: whether the indicators should flash when the scroll view appears, or whether they should flash when a value changes.

For example, to make a scroll view’s indicators flash when it’s first shown, use this:

```swift
ScrollView {
    ForEach(0..<50) { i in
        Text("Item \(i)")
            .frame(maxWidth: .infinity)
    }
}
.scrollIndicatorsFlash(onAppear: true)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-flash-the-scroll-bar-indicators-of-a-scrollview-or-list-1.zip)

Alternatively, you can provide a custom value that tracks whether the indicators should be flashed. This can be any `Equatable` value, and whenever that value changes SwiftUI will flash the indicators.

So you could increment an integer, generate a random `UUID`, or simply flip a Boolean between true and false like this:

```swift
struct ContentView: View {
    @State private var exampleState = false

    var body: some View {
        VStack {
            ScrollView {
                ForEach(0..<50) { i in
                    Text("Item \(i)")
                        .frame(maxWidth: .infinity)
                        .background(.blue)
                        .foregroundStyle(.white)
                }
            }
            .scrollIndicatorsFlash(trigger: exampleState)

            Button("Flash!") {
                exampleState.toggle()
            }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-flash-the-scroll-bar-indicators-of-a-scrollview-or-list-2.zip)

![A scrollview containing many items. The scrollview flashes whenever a button is pressed.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-flash-the-scroll-bar-indicators-of-a-scrollview-or-list-1~dark.gif)

This same code works with `List` in just the same way it works with `ScrollView`.

::: details Similar solutions…

```component VPCard
{
  "title": "SwiftUI by Example > How to indent the content or scroll indicators in a ScrollView",
  "desc": "How to indent the content or scroll indicators in a ScrollView",
  "link": "/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-indent-the-content-or-scroll-indicators-in-a-scrollview.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to hide the scroll indicators in ScrollView, List, and more",
  "desc": "How to hide the scroll indicators in ScrollView, List, and more",
  "link": "/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-hide-the-scroll-indicators-in-scrollview-list-and-more.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to scroll to a specific row in a list",
  "desc": "How to scroll to a specific row in a list",
  "link": "/swift/swiftui-by-example/10-lists/how-to-scroll-to-a-specific-row-in-a-list.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to make views scroll with a custom transition",
  "desc": "How to make views scroll with a custom transition",
  "link": "/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-make-views-scroll-with-a-custom-transition.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to make a scroll view move to a location using ScrollViewReader",
  "desc": "How to make a scroll view move to a location using ScrollViewReader",
  "link": "/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-make-a-scroll-view-move-to-a-location-using-scrollviewreader.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />