---
lang: ko-KR
title: How to show progress on a task using ProgressView
description: SwiftUI by Example > How to show progress on a task using ProgressView
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
      content: SwiftUI by Example > How to show progress on a task using ProgressView
    - property: og:description
      content: How to show progress on a task using ProgressView
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/swift/swiftui-by-example/06-user-interface-controls/how-to-show-progress-on-a-task-using-progressview.html
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
  "title": "SwiftUI by Example > How to show progress on a task using ProgressView",
  "desc": "How to show progress on a task using ProgressView",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-show-progress-on-a-task-using-progressview",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI’s `ProgressView` can be bound to a `Double` to show a horizontal progress bar. For example, this creates a progress bar with the title “Downloading”, that will read `downloadAmount` to determine how full the progress bar should be:

```swift
struct ContentView: View {
    @State private var downloadAmount = 0.0

    var body: some View {
        VStack {
            ProgressView("Downloading…", value: downloadAmount, total: 100)
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-show-progress-on-a-task-using-progressview-1.zip)

![The text “Downloading” over an almost empty progress bar.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-show-progress-on-a-task-using-progressview-1~dark.png)

In practice, you’ll need some way to actually *change* that value, such as a timer, a network request, or other user interface. For example, this will fill the progress bar up over a few seconds:

```swift
struct ContentView: View {
    @State private var downloadAmount = 0.0
    let timer = Timer.publish(every: 0.1, on: .main, in: .common).autoconnect()

    var body: some View {
        ProgressView("Downloading…", value: downloadAmount, total: 100)
            .onReceive(timer) { _ in
                if downloadAmount < 100 {
                    downloadAmount += 2
                }
            }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-show-progress-on-a-task-using-progressview-2.zip)

::: note

Xcode will get angry if you set your progress value higher than the progress total – make sure you cap it as you can see above.

:::

<VidStack src="https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-show-progress-on-a-task-using-progressview-2~dark.mp4" />

::: details Similar solutions…

```component VPCard
{
  "title": "SwiftUI by Example > How to show indeterminate progress using ProgressView",
  "desc": "How to show indeterminate progress using ProgressView",
  "link": "/swift/swiftui-by-example/06-user-interface-controls/how-to-show-indeterminate-progress-using-progressview.md",
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
  "title": "SwiftUI by Example > How to run an asynchronous task when a view is shown",
  "desc": "How to run an asynchronous task when a view is shown",
  "link": "/swift/swiftui-by-example/07-responding-to-events/how-to-run-an-asynchronous-task-when-a-view-is-shown.md",
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

:::

---

<TagLinks />