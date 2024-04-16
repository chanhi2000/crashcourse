---
lang: ko-KR
title: How to disable autocorrect in a TextField
description: SwiftUI by Example > How to disable autocorrect in a TextField
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
      content: SwiftUI by Example > How to disable autocorrect in a TextField
    - property: og:description
      content: How to disable autocorrect in a TextField
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/swift/swiftui-by-example/06-user-interface-controls/how-to-disable-autocorrect-in-a-textfield.html
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
  "title": "SwiftUI by Example > How to disable autocorrect in a TextField",
  "desc": "How to disable autocorrect in a TextField",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-disable-autocorrect-in-a-textfield",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI’s `TextField` enables autocorrect by default, which is what you’ll want in most cases. However, if you want to disable it you can do so by using the `disableAutocorrection()` modifier, like this:

```swift
struct ContentView: View {
    @State private var name = ""

    var body: some View {
        TextField("Enter your name", text: $name)
            .disableAutocorrection(true)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-disable-autocorrect-in-a-textfield-1.zip)

<VidStack src="https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-disable-autocorrect-in-a-textfield-1~dark.mp4" />

::: tip

In earlier Xcode releases, the icon for disabling autocorrect is a duck with a line through it. I’ll let you figure out why for yourself…

:::

::: details Similar solutions…

```component VPCard
{
  "title": "SwiftUI by Example > How to disable taps for a view using allowsHitTesting()",
  "desc": "How to disable taps for a view using allowsHitTesting()",
  "link": "/swift/swiftui-by-example/08-taps-and-gestures/how-to-disable-taps-for-a-view-using-allowshittesting.md",
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
  "title": "SwiftUI by Example > How to make a TextField expand vertically as the user types",
  "desc": "How to make a TextField expand vertically as the user types",
  "link": "/swift/swiftui-by-example/06-user-interface-controls/how-to-make-a-textfield-expand-vertically-as-the-user-types.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to dismiss the keyboard for a TextField",
  "desc": "How to dismiss the keyboard for a TextField",
  "link": "/swift/swiftui-by-example/06-user-interface-controls/how-to-dismiss-the-keyboard-for-a-textfield.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />