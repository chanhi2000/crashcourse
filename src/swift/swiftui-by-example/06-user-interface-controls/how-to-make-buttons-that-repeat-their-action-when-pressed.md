---
lang: ko-KR
title: How to make buttons that repeat their action when pressed
description: SwiftUI by Example > How to make buttons that repeat their action when pressed
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
      content: SwiftUI by Example > How to make buttons that repeat their action when pressed
    - property: og:description
      content: How to make buttons that repeat their action when pressed
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/swift/swiftui-by-example/06-user-interface-controlshow-to-make-buttons-that-repeat-their-action-when-pressed.html
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

```component VPCard
{
  "title": "SwiftUI by Example > How to make buttons that repeat their action when pressed",
  "desc": "How to make buttons that repeat their action when pressed",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-make-buttons-that-repeat-their-action-when-pressed",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 17**

SwiftUI has a dedicated `buttonRepeatBehavior()` modifier that trigger’s a button’s action repeatedly when the user holds it down. The action is triggered increasingly quickly, so it fires faster the longer the user holds it down.

For example, this adds 1 to a counter when pressed, but if you hold the button down it continues to add 1 increasingly quickly:

```swift
struct ContentView: View {
    @State private var tapCount = 0

    var body: some View {
        Button("Tap Count: \(tapCount)") {
            tapCount += 1
        }
        .buttonRepeatBehavior(.enabled)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-make-buttons-that-repeat-their-action-when-pressed-1.zip)

![A button that counts from 0 through 50 while bring pressed down.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-make-buttons-that-repeat-their-action-when-pressed-1~dark.gif)

This repeating behavior also works with keyboard shortcuts, although there its limited by whatever keyboard repeat rate your user has.

For example, this allows the user to hold down <kbd>Shift</kbd>+<kbd>Return</kbd> to trigger our button repeatedly:

```swift
struct ContentView: View {
    @State private var tapCount = 0

    var body: some View {
        Button("Tap Count: \(tapCount)") {
            tapCount += 1
        }
        .buttonRepeatBehavior(.enabled)
        .keyboardShortcut(.return, modifiers: .shift)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-make-buttons-that-repeat-their-action-when-pressed-2.zip)

::: details Similar solutions…

```component VPCard
{
  "title": "SwiftUI by Example > How to show a menu when a button is pressed",
  "desc": "How to show a menu when a button is pressed",
  "link": "/swift/swiftui-by-example/14-alerts-and-menus/how-to-show-a-menu-when-a-button-is-pressed.md",
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
  "title": "SwiftUI by Example > How to get bordered buttons that stand out",
  "desc": "How to get bordered buttons that stand out",
  "link": "/swift/swiftui-by-example/06-user-interface-controls/how-to-get-bordered-buttons-that-stand-out.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />