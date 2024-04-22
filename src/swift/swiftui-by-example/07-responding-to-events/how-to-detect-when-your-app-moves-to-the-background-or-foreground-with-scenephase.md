---
lang: ko-KR
title: How to detect when your app moves to the background or foreground with scenePhase
description: SwiftUI by Example > How to detect when your app moves to the background or foreground with scenePhase
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
      content: SwiftUI by Example > How to detect when your app moves to the background or foreground with scenePhase
    - property: og:description
      content: How to detect when your app moves to the background or foreground with scenePhase
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/swift/swiftui-by-example/07-responding-to-events/how-to-detect-when-your-app-moves-to-the-background-or-foreground-with-scenephase.html
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
  "title": "SwiftUI by Example > How to detect when your app moves to the background or foreground with scenePhase",
  "desc": "How to detect when your app moves to the background or foreground with scenePhase",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-detect-when-your-app-moves-to-the-background-or-foreground-with-scenephase",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI provides a `scenePhase` environment key that is automatically updated as your app moves between the foreground, background, and inactive states. You can watch for these in your `App` struct itself, or in any SwiftUI view.

First, add a property to track the key:

```swift
@Environment(\.scenePhase) var scenePhase
```

And now either add any logic you want to your body, or use `onChange()` to observe changes directly.

As an example, we could write a view that monitors `scenePhase` and prints out some text into Xcode’s debug console whenever the phase changes:

```swift
struct ContentView: View {
    @Environment(\.scenePhase) var scenePhase

    var body: some View { 
        Text("Example Text")
            .onChange(of: scenePhase) { newPhase in
                if newPhase == .inactive {
                    print("Inactive")
                } else if newPhase == .active {
                    print("Active")
                } else if newPhase == .background {
                    print("Background")
                }
            }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-add-keyboard-shortcuts-using-keyboardshortcut-3.zip)

<VidStack src="https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-detect-when-your-app-moves-to-the-background-or-foreground-with-scenephase-1~dark.mp4"/>

As you can see, there are three states:

1. The Active state is used when your app is in the foreground and interactive for the user, meaning that they are using it right now.
2. The Background state is used when your app isn’t currently visible, so you should cut back the amount of work you do.
3. The Inactive state is used when your app is visible, but not directly interactive to the user. For example, if you enter multi-tasking mode while running the app – you can see your app’s window alongside others, but you’re not directly using it.

::: details Similar solutions…

```component VPCard
{
  "title": "SwiftUI by Example > How to provide visual structure using foreground styles",
  "desc": "How to provide visual structure using foreground styles",
  "link": "/swift/swiftui-by-example/04-view-layout/how-to-provide-visual-structure-using-foreground-styles.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to customize the background color of navigation bars, tab bars, and toolbars",
  "desc": "How to customize the background color of navigation bars, tab bars, and toolbars",
  "link": "/swift/swiftui-by-example/12-containers/how-to-customize-the-background-color-of-navigation-bars-tab-bars-and-toolbars.md",
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
  "title": "SwiftUI by Example > How to set the background color of list rows using listRowBackground()",
  "desc": "How to set the background color of list rows using listRowBackground()",
  "link": "/swift/swiftui-by-example/10-lists/how-to-set-the-background-color-of-list-rows-using-listrowbackground.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to run code when your app launches",
  "desc": "How to run code when your app launches",
  "link": "/swift/swiftui-by-example/07-responding-to-events/how-to-run-code-when-your-app-launches.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />