---
lang: ko-KR
title: How to inset the safe area with custom content
description: SwiftUI by Example > How to inset the safe area with custom content
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
      content: SwiftUI by Example > How to inset the safe area with custom content
    - property: og:description
      content: How to inset the safe area with custom content
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/swift/swiftui-by-example/04-view-layout/how-to-inset-the-safe-area-with-custom-content.html
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

```component VPCard
{
  "title": "SwiftUI by Example > How to inset the safe area with custom content",
  "desc": "How to inset the safe area with custom content",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-inset-the-safe-area-with-custom-content",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 15**

SwiftUI provides a `safeAreaInset()` modifier that lets us place content outside the device’s safe area, while also having other views adjust their layout so their content remains visible – it effectively shrinks the safe area to ensure all content can be seen as intended. This is different from `ignoresSafeArea()`, which merely extends a view’s edges so they go edge to edge.

For example, a list would normally scroll to the very end of the screen, but we could place something outside the safe area at the bottom and have the list automatically adjust its insets so all its contents are visible when we scroll to its end:

```swift
NavigationStack {
    List(0..<100) { i in
        Text("Row \(i)")
    }
    .navigationTitle("Select a row")
    .safeAreaInset(edge: .bottom) {
        Text("Outside Safe Area")
            .font(.largeTitle)
            .foregroundStyle(.white)
            .frame(maxWidth: .infinity)
            .padding()
            .background(.indigo)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-inset-the-safe-area-with-custom-content-1.zip)

![The end of a SwiftUI list with a safe area inset view placed below, colored indigo.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-inset-the-safe-area-with-custom-content-1~dark.png)

::: important

Before iOS 15.2 this worked only with `ScrollView`, but from 15.2 and later this also works with `List` and `Form`.

:::

If you need extra space between your content and the safe area inset content, add a spacing parameter like this: `.safeAreaInset(edge: .bottom, spacing: 20)`.

You can also add an *alignment* to your safe area inset content, which is useful for times when it doesn’t take up the full amount of available space. For example, we could place an information button in the bottom trailing corner like this:

```swift
NavigationStack {
    List(0..<100) { i in
        Text("Row \(i)")
    }
    .navigationTitle("Select a row")
    .safeAreaInset(edge: .bottom, alignment: .trailing) {
        Button {
            print("Show help")
        } label: {
            Image(systemName: "info.circle.fill")
                .font(.largeTitle)
                .symbolRenderingMode(.multicolor)
                .padding(.trailing)
        }
        .accessibilityLabel("Show help")
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-inset-the-safe-area-with-custom-content-2.zip)

![The end of a SwiftUI list with an 'i' button in the bottom-right corner.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-inset-the-safe-area-with-custom-content-2~dark.png)

::: tip

You can apply `safeAreaInset()` multiple times if needed, and each inset will take into account the previous insets.

:::

::: details Similar solutions…

```component VPCard
{
  "title": "SwiftUI by Example > How to place content outside the safe area",
  "desc": "How to place content outside the safe area",
  "link": "/swift/swiftui-by-example/04-view-layout/how-to-place-content-outside-the-safe-area.md",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

How to place content into the safe area

How to add extra padding to the safe area

```component VPCard
{
  "title": "SwiftUI by Example > How to create grouped and inset grouped lists",
  "desc": "How to create grouped and inset grouped lists",
  "link": "/swift/swiftui-by-example/10-lists/how-to-create-grouped-and-inset-grouped-lists.md",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to control the tappable area of a view using contentShape()",
  "desc": "How to control the tappable area of a view using contentShape()",
  "link": "/swift/swiftui-by-example/08-taps-and-gestures/how-to-control-the-tappable-area-of-a-view-using-contentshape.md",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />