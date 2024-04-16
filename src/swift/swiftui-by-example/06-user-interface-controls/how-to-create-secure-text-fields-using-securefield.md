---
lang: ko-KR
title: How to create secure text fields using SecureField
description: SwiftUI by Example > How to create secure text fields using SecureField
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
      content: SwiftUI by Example > How to create secure text fields using SecureField
    - property: og:description
      content: How to create secure text fields using SecureField
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/swift/swiftui-by-example/06-user-interface-controls/how-to-create-secure-text-fields-using-securefield.html
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
  "title": "SwiftUI by Example > How to create secure text fields using SecureField",
  "desc": "How to create secure text fields using SecureField",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-create-secure-text-fields-using-securefield",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI’s `SecureField` works almost identically to a regular `TextField` except the characters are masked out for privacy. Just like `TextField`, you get to provide a placeholder giving the user a suggestion for what to enter, and the underlying value you bind to is still a plain string so you can check it as needed.

Here’s an example that creates a `SecureField` bound to a local `@State` property so we can show what they typed:

```swift
struct ContentView: View {
    @State private var password: String = ""

    var body: some View {
        VStack {
            SecureField("Enter a password", text: $password)
            Text("You entered: \(password)")
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-create-secure-text-fields-using-securefield-1.zip)

![A text field with a line of 8 dots representing hidden text above the words “You entered: password”.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-secure-text-fields-using-securefield-1~dark.png)

::: details Similar solutions…

```component VPCard
{
  "title": "SwiftUI by Example > How to customize the submit button for TextField, SecureField, and TextEditor",
  "desc": "How to customize the submit button for TextField, SecureField, and TextEditor",
  "link": "/swift/swiftui-by-example/06-user-interface-controls/how-to-customize-the-submit-button-for-textfield-securefield-and-texteditor.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to format text inside text views",
  "desc": "How to format text inside text views",
  "link": "/swift/swiftui-by-example/02-working-with-static-text/how-to-format-text-inside-text-views.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to create static labels with a Text view",
  "desc": "How to create static labels with a Text view",
  "link": "/swift/swiftui-by-example/02-working-with-static-text/how-to-create-static-labels-with-a-text-view.md",
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

```component VPCard
{
  "title": "SwiftUI by Example > How to create multi-line editable text with TextEditor",
  "desc": "How to create multi-line editable text with TextEditor",
  "link": "/swift/swiftui-by-example/06-user-interface-controls/how-to-create-multi-line-editable-text-with-texteditor.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />