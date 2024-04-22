---
lang: ko-KR
title: How to show indeterminate progress using ProgressView
description: SwiftUI by Example > How to show indeterminate progress using ProgressView
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
      content: SwiftUI by Example > How to show indeterminate progress using ProgressView
    - property: og:description
      content: How to show indeterminate progress using ProgressView
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/swift/swiftui-by-example/06-user-interface-controls/how-to-show-indeterminate-progress-using-progressview.html
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
  "title": "SwiftUI by Example > How to show indeterminate progress using ProgressView",
  "desc": "How to show indeterminate progress using ProgressView",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-show-indeterminate-progress-using-progressview",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI’s `ProgressView` can be created without any sort of binding attached, which will cause them to become indeterminate – they will show a spinner that animates forever, rather than showing some sort of clear progress.

All it takes is code like this:

```swift
struct ContentView: View {
    var body: some View {
        ProgressView("Downloading…")
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-show-indeterminate-progress-using-progressview-1.zip)

<VidStack src="https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-show-indeterminate-progress-using-progressview-1~dark.mp4" />

::: details Similar solutions…

```component VPCard
{
  "title": "SwiftUI by Example > How to show progress on a task using ProgressView",
  "desc": "How to show progress on a task using ProgressView",
  "link": "/swift/swiftui-by-example/06-user-interface-controls/how-to-show-progress-on-a-task-using-progressview.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > Customizing ProgressView with ProgressViewStyle",
  "desc": "Customizing ProgressView with ProgressViewStyle",
  "link": "/swift/swiftui-by-example/16-transforming-views/customizing-progressview-with-progressviewstyle.md",
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
  "title": "SwiftUI by Example > How to hide and show the sidebar programmatically",
  "desc": "How to hide and show the sidebar programmatically",
  "link": "/swift/swiftui-by-example/13-navigation/how-to-hide-and-show-the-sidebar-programmatically.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to show text and an icon side by side using Label",
  "desc": "How to show text and an icon side by side using Label",
  "link": "/swift/swiftui-by-example/02-working-with-static-text/how-to-show-text-and-an-icon-side-by-side-using-label.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />