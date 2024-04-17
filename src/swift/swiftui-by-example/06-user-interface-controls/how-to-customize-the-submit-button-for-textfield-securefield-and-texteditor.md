---
lang: ko-KR
title: How to customize the submit button for TextField, SecureField, and TextEditor
description: SwiftUI by Example > How to customize the submit button for TextField, SecureField, and TextEditor
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
      content: SwiftUI by Example > How to customize the submit button for TextField, SecureField, and TextEditor
    - property: og:description
      content: How to customize the submit button for TextField, SecureField, and TextEditor
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/swift/swiftui-by-example/06-user-interface-controls/how-to-customize-the-submit-button-for-textfield-securefield-and-texteditor.html
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
  "title": "SwiftUI by Example > How to customize the submit button for TextField, SecureField, and TextEditor",
  "desc": "How to customize the submit button for TextField, SecureField, and TextEditor",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-customize-the-submit-button-for-textfield-securefield-and-texteditor",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 15**

By default, `TextField` and `SecureField` show a simple “Return” button on the keyboard, but the `submitLabel()` modifier let us choose from a range of alternatives.

For example, if you wanted to show the localized form of “Join” for the button, you would use this:

```swift
struct ContentView: View {
    @State private var username = ""

    var body: some View {
        TextField("Username", text: $username)
            .submitLabel(.join)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-customize-the-submit-button-for-textfield-securefield-and-texteditor-1.zip)

![A keyboard with a blue “join” button in the bottom right.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-customize-the-submit-button-for-textfield-securefield-and-texteditor-1~dark.png)

There are lots of different button options you choose from by passing different values to `submitLabel()`:

- `continue`
- `done`
- `go`
- `join`
- `next`
- `return`
- `route`
- `search`
- `send`

All those work equally well with `TextField`, `SecureField`, and `TextView`.

::: details Similar solutions…

```component VPCard
{
  "title": "SwiftUI by Example > How to create secure text fields using SecureField",
  "desc": "How to create secure text fields using SecureField",
  "link": "/swift/swiftui-by-example/06-user-interface-controls/how-to-create-secure-text-fields-using-securefield.md",
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
  "title": "SwiftUI by Example > How to create multi-line editable text with TextEditor",
  "desc": "How to create multi-line editable text with TextEditor",
  "link": "/swift/swiftui-by-example/06-user-interface-controls/how-to-create-multi-line-editable-text-with-texteditor.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to change the background color of List, TextEditor, and more",
  "desc": "How to change the background color of List, TextEditor, and more",
  "link": "/swift/swiftui-by-example/16-transforming-views/how-to-change-the-background-color-of-list-texteditor-and-more.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to take action when the user submits a TextField",
  "desc": "How to take action when the user submits a TextField",
  "link": "/swift/swiftui-by-example/06-user-interface-controls/how-to-take-action-when-the-user-submits-a-textfield.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />