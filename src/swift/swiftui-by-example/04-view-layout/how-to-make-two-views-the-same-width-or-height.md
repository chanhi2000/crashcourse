---
lang: ko-KR
title: How to make two views the same width or height
description: SwiftUI by Example > How to make two views the same width or height
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
      content: SwiftUI by Example > How to make two views the same width or height
    - property: og:description
      content: How to make two views the same width or height
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/swift/swiftui-by-example/04-view-layout/how-to-make-two-views-the-same-width-or-height.html
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
  "title": "SwiftUI by Example > How to make two views the same width or height",
  "desc": "How to make two views the same width or height",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-make-two-views-the-same-width-or-height",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI makes it easy to create two views that are the same size, regardless of whether you want the same height or the same width, by combining a `frame()` modifier with `fixedSize()` – there’s no need for a `GeometryReader` or similar.

On iOS, the key is to give each view you want to size an infinite maximum height or width, which will automatically make it stretch to fill all the available space. You then apply `fixedSize()` to the container they are in, which tells SwiftUI those views should only take up the space they need. The result is that SwiftUI figures out the least amount of space the views need, then allows them to take up that full amount – the two views will always match their sizes no matter what they contain.

Here’s an example showing how to make two text views have the same height even though they have very different text lengths. Thanks to the `frame()` and `fixedSize()` combination both text views are laid out at the same size:

```swift
HStack {
    Text("This is a short string.")
        .padding()
        .frame(maxHeight: .infinity)
        .background(.red)

    Text("This is a very long string with lots and lots of text that will definitely run across multiple lines because it's just so long.")
        .padding()
        .frame(maxHeight: .infinity)
        .background(.green)
}
.fixedSize(horizontal: false, vertical: true)
.frame(maxHeight: 200)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-make-two-views-the-same-width-or-height-1.zip)

![A red rectangle containing a one line sentence beside a green rectangle containing a two line sentence. Both rectangles are the same height.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-make-two-views-the-same-width-or-height-1~dark.png)

This approach works just as well when you want to make two views have the same width:

```swift
VStack {
    Button("Log in") { }
        .foregroundStyle(.white)
        .padding()
        .frame(maxWidth: .infinity)
        .background(.red)
        .clipShape(Capsule())

    Button("Reset Password") { }
        .foregroundStyle(.white)
        .padding()
        .frame(maxWidth: .infinity)
        .background(.red)
        .clipShape(Capsule())
}
.fixedSize(horizontal: true, vertical: false)
```

![A red capsule containing the white text “Log In” above a similar capsule containing “Reset Password”. Both capsules are the same width.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-make-two-views-the-same-width-or-height-2~dark.png)

There are many other significantly more complex solutions to this same problem, which is quite strange given how well the simple solution works for most people. I first learned this solution from [<FontIcon icon="fa-brands fa-twitter-x"/>Becky Hansmeyer](https://twitter.com/bhansmeyer) and now I use nothing else!

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
  "title": "SwiftUI by Example > How to customize a view’s width in NavigationSplitView",
  "desc": "How to customize a view’s width in NavigationSplitView",
  "link": "/swift/swiftui-by-example/13-navigation/how-to-customize-a-views-width-in-navigationsplitview.md",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to fill and stroke shapes at the same time",
  "desc": "How to fill and stroke shapes at the same time",
  "link": "/swift/swiftui-by-example/03-images-shapes-and-media/how-to-fill-and-stroke-shapes-at-the-same-time.md",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > Two-way bindings in SwiftUI",
  "desc": "Two-way bindings in SwiftUI",
  "link": "/swift/swiftui-by-example/01-building-a-complete-project/two-way-bindings-in-swiftui.md",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to create a two-column or three-column layout with NavigationSplitView",
  "desc": "How to create a two-column or three-column layout with NavigationSplitView",
  "link": "/swift/swiftui-by-example/13-navigation/how-to-create-a-two-column-or-three-column-layout-with-navigationsplitview.md",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />