---
lang: ko-KR
title: How to add a placeholder to a TextField
description: SwiftUI by Example > How to add a placeholder to a TextField
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
      content: SwiftUI by Example > How to add a placeholder to a TextField
    - property: og:description
      content: How to add a placeholder to a TextField
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/swift/swiftui-by-example/06-user-interface-controls/how-to-add-a-placeholder-to-a-textfield.html
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
  "title": "SwiftUI by Example > How to add a placeholder to a TextField",
  "desc": "How to add a placeholder to a TextField",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-add-a-placeholder-to-a-textfield",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI’s `TextField` supports placeholder text just like `UITextField` did – gray text that is shown in the text field when it’s empty, either giving users a prompt (“Enter your password”) or showing some example data.

To set your placeholder text, pass it in as part of the initializer for your text field, like this:

```swift
struct ContentView: View {
    @State private var emailAddress = ""

    var body: some View {
        TextField("johnnyappleseed@apple.com", text: $emailAddress)
            .textFieldStyle(.roundedBorder)
            .padding()
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-add-a-placeholder-to-a-textfield-1.zip)

![A text field with a thin grey outline containing the placeholder text “johnnyappleseed@apple.com”.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-add-a-placeholder-to-a-textfield-1~dark.png)

::: important

If you’re using Xcode 12 you need to use `RoundedBorderTextFieldStyle()` rather than `.roundedBorder`.

:::

That will show “johnnyappleseed@apple.com” in the text field while it’s empty, but as soon as the user types something in there it disappears.

::: details Similar solutions…

```component VPCard
{
  "title": "SwiftUI by Example > How to mark content as a placeholder using redacted()",
  "desc": "How to mark content as a placeholder using redacted()",
  "link": "/swift/swiftui-by-example/02-working-with-static-text/how-to-mark-content-as-a-placeholder-using-redacted.md",
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

```component VPCard
{
  "title": "SwiftUI by Example > How to add a border to a TextField",
  "desc": "How to add a border to a TextField",
  "link": "/swift/swiftui-by-example/06-user-interface-controls/how-to-add-a-border-to-a-textfield.md",
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