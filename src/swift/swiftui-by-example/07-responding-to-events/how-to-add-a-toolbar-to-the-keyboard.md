---
lang: ko-KR
title: How to add a toolbar to the keyboard
description: SwiftUI by Example > How to add a toolbar to the keyboard
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
      content: SwiftUI by Example > How to add a toolbar to the keyboard
    - property: og:description
      content: How to add a toolbar to the keyboard
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/swift/swiftui-by-example/07-responding-to-events/how-to-add-a-toolbar-to-the-keyboard.html
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
  "title": "SwiftUI by Example > How to add a toolbar to the keyboard",
  "desc": "How to add a toolbar to the keyboard",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-add-a-toolbar-to-the-keyboard",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 15**

SwiftUI lets us add input accessory views to keyboards, which means that when the user activates some text entry we can present custom buttons there.

This is all done using by attaching the `toolbar()` modifier to whatever view should own the input accessory. When creating your toolbar item group, use a placement of `.keyboard` to attach this toolbar to the keyboard, like this:

```swift
struct ContentView: View {
    @State private var name = "Taylor"

    var body: some View {
        TextField("Enter your name", text: $name)
            .textFieldStyle(.roundedBorder)
            .toolbar {
                ToolbarItemGroup(placement: .keyboard) {
                    Button("Click me!") {
                        print("Clicked")
                    }
                }
            }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-add-a-toolbar-to-the-keyboard-1.zip)

![A text field, below which is iOS's software keyboard. Above the keyboard is a grey row containing the words “Click me!” in blue.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-add-a-toolbar-to-the-keyboard-1~dark.png)

In practice this is a great place to use something like `@FocusState` to move between input fields in your UI, or to hide the keyboard altogether, like this:

```swift
struct ContentView: View {
    @State private var name = "Taylor Swift"
    @FocusState var isInputActive: Bool

    var body: some View {
        NavigationStack {
            TextField("Enter your name", text: $name)
                .textFieldStyle(.roundedBorder)
                .focused($isInputActive)
                .toolbar {
                    ToolbarItemGroup(placement: .keyboard) {
                        Spacer()

                        Button("Done") {
                            isInputActive = false
                        }
                    }
                }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-add-a-toolbar-to-the-keyboard-2.zip)

<VidStack src="https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-add-a-toolbar-to-the-keyboard-2~dark.mp4" />

::: details Similar solutions…

```component VPCard
{
  "title": "SwiftUI by Example > How to create a toolbar and add buttons to it",
  "desc": "How to create a toolbar and add buttons to it",
  "link": "/swift/swiftui-by-example/12-containers/how-to-create-a-toolbar-and-add-buttons-to-it.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to let users customize toolbar buttons",
  "desc": "How to let users customize toolbar buttons",
  "link": "/swift/swiftui-by-example/12-containers/how-to-let-users-customize-toolbar-buttons.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to add keyboard shortcuts using keyboardShortcut()",
  "desc": "How to add keyboard shortcuts using keyboardShortcut()",
  "link": "/swift/swiftui-by-example/07-responding-to-events/how-to-add-keyboard-shortcuts-using-keyboardshortcut.md",
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
  "title": "SwiftUI by Example > How to dismiss the keyboard when the user scrolls",
  "desc": "How to dismiss the keyboard when the user scrolls",
  "link": "/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-dismiss-the-keyboard-when-the-user-scrolls.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />