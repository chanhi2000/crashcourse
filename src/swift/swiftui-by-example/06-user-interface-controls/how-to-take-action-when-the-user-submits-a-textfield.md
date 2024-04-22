---
lang: ko-KR
title: How to take action when the user submits a TextField
description: SwiftUI by Example > How to take action when the user submits a TextField
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
      content: SwiftUI by Example > How to take action when the user submits a TextField
    - property: og:description
      content: How to take action when the user submits a TextField
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/swift/swiftui-by-example/06-user-interface-controls/how-to-take-action-when-the-user-submits-a-textfield.html
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
  "title": "SwiftUI by Example > How to take action when the user submits a TextField",
  "desc": "How to take action when the user submits a TextField",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-take-action-when-the-user-submits-a-textfield",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 15**

SwiftUI has an `onSubmit()` modifier that can be attached to any view in your hierarchy, and will run a function of your choice when the user has finished entering text into a `TextField` or `SecureField`.

For example, we could ask the user to enter their password, then run some code when they press return:

```swift
struct ContentView: View {
    @State private var password = ""

    var body: some View {
        SecureField("Password", text: $password)
            .onSubmit {
                print("Authenticating…")
            }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-take-action-when-the-user-submits-a-textfield-1.zip)

<VidStack src="https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-take-action-when-the-user-submits-a-textfield-1~dark.mp4" />

For simple examples like that, both `TextField` and `SecureField` accept a dedicated `onCommit` parameter where we can attach our function directly to them. However, the advantage to using `onSubmit()` is that it captures all text values submitted in its context, which makes completing forms easier:

```swift
struct ContentView: View {
    @State private var username = ""
    @State private var password = ""

    var body: some View {
        Form {
            TextField("Username", text: $username)
            SecureField("Password", text: $password)
        }
        .onSubmit {
            guard username.isEmpty == false && password.isEmpty == false else { return }
            print("Authenticating…")
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-take-action-when-the-user-submits-a-textfield-2.zip)

<VidStack src="https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-take-action-when-the-user-submits-a-textfield-2~dark.mp4" />

::: details Similar solutions…

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
  "title": "SwiftUI by Example > How to make buttons that repeat their action when pressed",
  "desc": "How to make buttons that repeat their action when pressed",
  "link": "/swift/swiftui-by-example/06-user-interface-controls/how-to-make-buttons-that-repeat-their-action-when-pressed.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to show an action sheet",
  "desc": "How to show an action sheet",
  "link": "/swift/swiftui-by-example/14-alerts-and-menus/how-to-show-an-action-sheet.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to add custom swipe action buttons to a List row",
  "desc": "How to add custom swipe action buttons to a List row",
  "link": "/swift/swiftui-by-example/10-lists/how-to-add-custom-swipe-action-buttons-to-a-list-row.md",
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