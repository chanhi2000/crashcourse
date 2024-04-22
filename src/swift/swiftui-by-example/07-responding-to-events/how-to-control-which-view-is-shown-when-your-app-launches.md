---
lang: ko-KR
title: How to control which view is shown when your app launches
description: SwiftUI by Example > How to control which view is shown when your app launches
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
      content: SwiftUI by Example > How to control which view is shown when your app launches
    - property: og:description
      content: How to control which view is shown when your app launches
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/swift/swiftui-by-example/07-responding-to-events/how-to-control-which-view-is-shown-when-your-app-launches.html
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
  "title": "SwiftUI by Example > How to control which view is shown when your app launches",
  "desc": "How to control which view is shown when your app launches",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-control-which-view-is-shown-when-your-app-launches",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

When you make a new SwiftUI project, Xcode will automatically create a new Swift file with the same name as your project, which will be used to bootstrap your app – to present your initial user interface.

For example, the default file will look like this:

```swift
struct SwiftUITestApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}
```

So, you can just change `ContentView` to whatever other view you want to show.

However, this is a great place to set up all the core UI you need, such as a tab view:

```swift
WindowGroup {
    TabView {
        HomeView()
        ContactsView()
        LocationView()
        AccountView()
    }
}
```

![A line of 4 tab labels, one of which is blue to denote that it is active.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-control-which-view-is-shown-when-your-app-launches-1~dark.png)

::: details Similar solutions…

How to control which NavigationSplitView column is shown in compact layouts <!-- TODO: add link -->

```component VPCard
{
  "title": "SwiftUI by Example > How to run code when your app launches",
  "desc": "How to run code when your app launches",
  "link": "/swift/swiftui-by-example/07-responding-to-events/how-to-run-code-when-your-app-launches.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to run an asynchronous task when a view is shown",
  "desc": "How to run an asynchronous task when a view is shown",
  "link": "/swift/swiftui-by-example/07-responding-to-events/how-to-run-an-asynchronous-task-when-a-view-is-shown.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to find which data change is causing a SwiftUI view to update",
  "desc": "How to find which data change is causing a SwiftUI view to update",
  "link": "/swift/swiftui-by-example/23-tooling/how-to-find-which-data-change-is-causing-a-swiftui-view-to-update.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard  
{
  "title": "SwiftUI by Example > How to fix “Function declares an opaque return type, but has no return statements in its body from which to infer an underlying type”",
  "desc": "How to fix “Function declares an opaque return type, but has no return statements in its body from which to infer an underlying type”",
  "link": "/swift/swiftui-by-example/26-appendix-b/how-to-fix-function-declares-an-opaque-return-type-but-has-no-return-statements-in-its-body-from-which-to-infer-an-underlying-type.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />