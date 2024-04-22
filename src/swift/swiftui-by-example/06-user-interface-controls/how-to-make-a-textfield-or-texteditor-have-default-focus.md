---
lang: ko-KR
title: How to make a TextField or TextEditor have default focus
description: SwiftUI by Example > How to make a TextField or TextEditor have default focus
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
      content: SwiftUI by Example > How to make a TextField or TextEditor have default focus
    - property: og:description
      content: How to make a TextField or TextEditor have default focus
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/swift/swiftui-by-example/06-user-interface-controls/how-to-make-a-textfield-or-texteditor-have-default-focus.html
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
  "title": "SwiftUI by Example > How to make a TextField or TextEditor have default focus",
  "desc": "How to make a TextField or TextEditor have default focus",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-make-a-textfield-or-texteditor-have-default-focus",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI on macOS provides a `defaultFocus()` modifier that lets us activate one view as the first responder to user input as soon as a view is shown. Sadly it doesn’t exist on iOS, but we can work around that using `onAppear()`.

First, here’s the code with the workaround in place, suitable for use on iOS:

```swift
struct ContentView: View {
    enum FocusedField {
        case firstName, lastName
    }

    @State private var firstName = ""
    @State private var lastName = ""
    @FocusState private var focusedField: FocusedField?

    var body: some View {
        Form {
            TextField("First name", text: $firstName)
                .focused($focusedField, equals: .firstName)

            TextField("Last name", text: $lastName)
                .focused($focusedField, equals: .lastName)
        }
        .onAppear {
            focusedField = .firstName
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-make-a-textfield-or-texteditor-have-default-focus-1.zip)

And here’s the code using `defaultFocus()`, suitable for use on macOS:

```swift
struct ContentView: View {
    enum FocusedField {
        case firstName, lastName
    }

    @State private var firstName = ""
    @State private var lastName = ""
    @FocusState private var focusedField: FocusedField?

    var body: some View {
        Form {
            TextField("First name", text: $firstName)
                .focused($focusedField, equals: .firstName)

            TextField("Last name", text: $lastName)
                .focused($focusedField, equals: .lastName)
        }
        .defaultFocus($focusedField, .firstName)
    }
}
```

Hopefully `defaultFocus()` comes to iOS in a future update!

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
  "title": "SwiftUI by Example > How to make a TextField expand vertically as the user types",
  "desc": "How to make a TextField expand vertically as the user types",
  "link": "/swift/swiftui-by-example/06-user-interface-controls/how-to-make-a-textfield-expand-vertically-as-the-user-types.md",
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

:::

---

<TagLinks />