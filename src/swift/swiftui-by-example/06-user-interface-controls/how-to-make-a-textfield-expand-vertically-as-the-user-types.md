---
lang: ko-KR
title: How to make a TextField expand vertically as the user types
description: SwiftUI by Example > How to make a TextField expand vertically as the user types
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
      content: SwiftUI by Example > How to make a TextField expand vertically as the user types
    - property: og:description
      content: How to make a TextField expand vertically as the user types
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/swift/swiftui-by-example/06-user-interface-controls/how-to-make-a-textfield-expand-vertically-as-the-user-types.html
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

```component VPCard
{
  "title": "SwiftUI by Example > How to make a TextField expand vertically as the user types",
  "desc": "How to make a TextField expand vertically as the user types",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-make-a-textfield-expand-vertically-as-the-user-types",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI’s `TextField` has a single line by default, and `TextEditor` is a multiline alternative based on how much space you want to allocate. But there’s a middle ground: if we pass an `axis` parameter to `TextField`, we can ask it to *start* as a single line and grow upwards as the user types, optionally switching to scrolling once the text goes past a certain length.

For example, this creates a `TextField` that automatically expands as the user enters more and more text:

```swift
struct ContentView: View {
    @State private var bio = "About me"

    var body: some View {
        VStack {
            TextField("Describe yourself", text: $bio, axis: .vertical)
                .textFieldStyle(.roundedBorder)

            Text(bio)
        }
        .padding()
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-make-a-textfield-expand-vertically-as-the-user-types-1.zip)

You can control how big the `TextField` can grow by adding a `lineLimit()` modifier. For example, we might want to say that it should start out as a single line, but allow growth up to a maximum of five lines:

```swift
struct ContentView: View {
    @State private var bio = "About me"

    var body: some View {
        VStack {
            TextField("Describe yourself", text: $bio, axis: .vertical)
                .textFieldStyle(.roundedBorder)
                .lineLimit(5)

            Text(bio)
        }
        .padding()
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-make-a-textfield-expand-vertically-as-the-user-types-2.zip)

That doesn’t mean the user can’t type *more* than five lines, only that once the `TextField` goes beyond that limit it will switch to scrolling rather than growing further.

You can pass a range here if you want, for example using `lineLimit(2...5)` to mean “always be at least two lines high, but grow up to five.”

You can also use the `reservesSpace` parameter to `lineLimit()` so that the view automatically allocates enough space for the maximum size it can have. For example, this creates a `TextField` that reserves enough layout space to hold up to five lines of text:

```swift
struct ContentView: View {
    @State private var bio = "About me"

    var body: some View {
        VStack {
            TextField("Describe yourself", text: $bio, axis: .vertical)
                .textFieldStyle(.roundedBorder)
                .lineLimit(5, reservesSpace: true)

            Text(bio)
        }
        .padding()
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-make-a-textfield-expand-vertically-as-the-user-types-3.zip)

The combination of this growing behavior and its ability to have a placeholder makes `TextField` a really great choice for entering user text, and preferable to `TextEditor` in situations where you aren’t relying on an exact view frame and you don’t need search and replace functionality.

::: details Similar solutions…

```component VPCard
{
  "title": "SwiftUI by Example > How to take action when the user submits a TextField",
  "desc": "How to take action when the user submits a TextField",
  "link": "/swift/swiftui-by-example/06-user-interface-controls/how-to-take-action-when-the-user-submits-a-textfield.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to make a TextField or TextEditor have default focus",
  "desc": "How to make a TextField or TextEditor have default focus",
  "link": "/swift/swiftui-by-example/06-user-interface-controls/how-to-make-a-textfield-or-texteditor-have-default-focus.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to make TextField uppercase or lowercase using textCase()",
  "desc": "How to make TextField uppercase or lowercase using textCase()",
  "link": "/swift/swiftui-by-example/02-working-with-static-text/how-to-make-textfield-uppercase-or-lowercase-using-textcase.md",
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

```component VPCard
{
  "title": "SwiftUI by Example > How to add a TextField to an alert",
  "desc": "How to add a TextField to an alert",
  "link": "/swift/swiftui-by-example/14-alerts-and-menus/how-to-add-a-textfield-to-an-alert.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />