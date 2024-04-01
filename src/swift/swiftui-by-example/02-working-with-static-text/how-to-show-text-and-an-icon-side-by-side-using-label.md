---
lang: ko-KR
title: How to show text and an icon side by side using Label
description: SwiftUI by Example > How to show text and an icon side by side using Label
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
      content: SwiftUI by Example > How to show text and an icon side by side using Label
    - property: og:description
      content: How to show text and an icon side by side using Label
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/swift/swiftui-by-example/02-working-with-static-text/how-to-show-text-and-an-icon-side-by-side-using-label.html
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

```component VPCard
{
  "title": "SwiftUI by Example > How to show text and an icon side by side using Label",
  "desc": "How to show text and an icon side by side using Label",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-show-text-and-an-icon-side-by-side-using-label",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**Updated in iOS 15**

SwiftUI has a dedicated view type for showing text and icons side by side, which will be particularly helpful for menus, lists, and more.

To use labels, you can either use SF Symbols like this:

```swift
Label("Your account", systemImage: "folder.circle")
```

> [<FontIcon icon="fas fa-download"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-show-text-and-an-icon-side-by-side-using-label-1.zip)

![A folder symbol inside a circle beside the text “Your Account”.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-show-text-and-an-icon-side-by-side-using-label-1~dark.png)

Or use your own images, like this:

```swift
Label("Welcome to the app", image: "star")
```

> [<FontIcon icon="fas fa-download"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-show-text-and-an-icon-side-by-side-using-label-2.zip)

![A yellow star beside the text “Welcome to the app”.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-show-text-and-an-icon-side-by-side-using-label-2~dark.png)

You can scale the text and icon in parallel using the `font()` modifier, like this:

```swift
Label("Your account", systemImage: "person.crop.circle")
    .font(.title)
```

> [<FontIcon icon="fas fa-download"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-show-text-and-an-icon-side-by-side-using-label-3.zip)

A circular person symbol beside the text “Your Account”.

You can control how the label is displayed by applying the `labelStyle()` modifier using `.titleOnly`, `.iconOnly`, and `.titleAndIcon`, like this:

```swift
VStack {
    Label("Text Only", systemImage: "heart")
        .font(.title)
        .labelStyle(.titleOnly)

    Label("Icon Only", systemImage: "star")
        .font(.title)
        .labelStyle(.iconOnly)

    Label("Both", systemImage: "paperplane")
        .font(.title)
        .labelStyle(.titleAndIcon)
}
```

> [<FontIcon icon="fas fa-download"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-show-text-and-an-icon-side-by-side-using-label-4.zip)

![The words “Text Only”. The outline of a star. A paper airplane symbol beside the word “Both”.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-show-text-and-an-icon-side-by-side-using-label-4~dark.png)

::: important

If you’re using Xcode 12, you need to use `TitleOnlyLabelStyle()`, `IconOnlyLabelStyle()`, and `TitleAndIconLabelStyle()` instead. `TitleAndIconLabelStyle()` is only available from iOS 14.5.

:::

If you want, you can provide entirely custom views for the text and image, like this:

```swift
Label {
    Text("Paul Hudson")
        .foregroundStyle(.primary)
        .font(.largeTitle)
        .padding()
        .background(.gray.opacity(0.2))
        .clipShape(Capsule())
} icon: {
    RoundedRectangle(cornerRadius: 10)
        .fill(.blue)
        .frame(width: 64, height: 64)
}
```

> [<FontIcon icon="fas fa-download"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-show-text-and-an-icon-side-by-side-using-label-5.zip)

![A blue rounded rectangle beside a grey capsule containing “Paul Hudson”.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-show-text-and-an-icon-side-by-side-using-label-5~dark.png)

::: details Similar solutions…

```component VPCard
{
  "title": "SwiftUI by Example > How to hide the label of a Picker, Stepper, Toggle, and more using labelsHidden()",
  "desc": "How to hide the label of a Picker, Stepper, Toggle, and more using labelsHidden()",
  "link": "/swift/swiftui-by-example/06-user-interface-controls/how-to-hide-the-label-of-a-picker-stepper-toggle-and-more-using-labelshidden.md",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > SwiftUI tips and tricks",
  "desc": "SwiftUI tips and tricks",
  "link": "/swift/swiftui-by-example/24-what-now/swiftui-tips-and-tricks.md",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to force views to one side inside a stack using Spacer",
  "desc": "How to force views to one side inside a stack using Spacer",
  "link": "/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-force-views-to-one-side-inside-a-stack-using-spacer.md",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > All SwiftUI property wrappers explained and compared",
  "desc": "All SwiftUI property wrappers explained and compared",
  "link": "/swift/swiftui-by-example/25-appendix-a/all-swiftui-property-wrappers-explained-and-compared.md",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to format text inside text views",
  "desc": "How to format text inside text views",
  "link": "/swift/swiftui-by-example/02-working-with-static-text/how-to-format-text-inside-text-views.md",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />