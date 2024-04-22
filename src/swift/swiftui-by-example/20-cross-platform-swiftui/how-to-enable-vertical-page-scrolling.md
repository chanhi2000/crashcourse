---
lang: ko-KR
title: How to enable vertical page scrolling
description: SwiftUI by Example > How to enable vertical page scrolling
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
      content: SwiftUI by Example > How to enable vertical page scrolling
    - property: og:description
      content: How to enable vertical page scrolling
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/swift/swiftui-by-example/20-cross-platform-swiftui/how-to-enable-vertical-page-scrolling.html
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
  "title": "SwiftUI by Example > How to enable vertical page scrolling",
  "desc": "How to enable vertical page scrolling",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-enable-vertical-page-scrolling",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in watchOS 10**

SwiftUI provides a `.verticalPage` tab view style that allows us to make vertically scrolling tabs on watchOS, as opposed to the default horizontal. Because these live alongside scrolling lists, it’s really important you think carefully about mixing the two.

First, here’s a simple code sample:

```swift
TabView {
    Text("First")
        .navigationTitle("First Title")
    Text("Second")
        .navigationTitle("Second Title")
    Text("Third")
        .navigationTitle("Third Title")
}
.tabViewStyle(.verticalPage)
```

watchOS will automatically use each tab’s navigation title as the user scrolls through.

When dealing with other scrolling containers inside tabs, it’s imperative you keep scrolling to the last view in a tab, otherwise users might be trying to flick through and accidentally change tabs instead.

So, in this code sample there are two regular tabs, followed by a scrolling list:

```swift
TabView {
    Text("First")
        .navigationTitle("First Title")
    Text("Second")
        .navigationTitle("Second Title")
    List(1..<50) { i in
        Text("Row \(i)")
    }
    .navigationTitle("Third Title")
}
.tabViewStyle(.verticalPage)
```

::: details Similar solutions…

```component VPCard
{
  "title": "SwiftUI by Example > How to add horizontal and vertical scrolling using ScrollView",
  "desc": "How to add horizontal and vertical scrolling using ScrollView",
  "link": "/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-add-horizontal-and-vertical-scrolling-using-scrollview.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to create scrolling pages of content using tabViewStyle()",
  "desc": "How to create scrolling pages of content using tabViewStyle()",
  "link": "/swift/swiftui-by-example/12-containers/how-to-create-scrolling-pages-of-content-using-tabviewstyle.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to enable editing on a list using EditButton",
  "desc": "How to enable editing on a list using EditButton",
  "link": "/swift/swiftui-by-example/10-lists/how-to-enable-editing-on-a-list-using-editbutton.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to enable pull to refresh",
  "desc": "How to enable pull to refresh",
  "link": "/swift/swiftui-by-example/10-lists/how-to-enable-pull-to-refresh.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to disable ScrollView clipping so contents overflow",
  "desc": "How to disable ScrollView clipping so contents overflow",
  "link": "/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-disable-scrollview-clipping-so-contents-overflow",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />