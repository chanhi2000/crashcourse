---
lang: ko-KR
title: How to indent the content or scroll indicators in a ScrollView
description: SwiftUI by Example > How to indent the content or scroll indicators in a ScrollView
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
      content: SwiftUI by Example > How to indent the content or scroll indicators in a ScrollView
    - property: og:description
      content: How to indent the content or scroll indicators in a ScrollView
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/swift/swiftui-by-example/04-view-layout/how-to-indent-the-content-or-scroll-indicators-in-a-scrollview.html
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
  "title": "SwiftUI by Example > How to indent the content or scroll indicators in a ScrollView",
  "desc": "How to indent the content or scroll indicators in a ScrollView",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-indent-the-content-or-scroll-indicators-in-a-scrollview",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 17**

By default, SwiftUI’s `ScrollView` allows its content to fill all the available space, and the scroll indicators sit neatly on the trailing edge of the screen. However, with the `contentMargins()` modifier we can adjust either of these, insetting the content or the scroll indicators by any amount and on any edges.

For example, this indents a scroll view’s contents by 50 points on each edge, without adjusting the scroll indicators:

```swift
ScrollView {
    ForEach(0..<50) { i in
        Text("Item \(i)")
            .frame(maxWidth: .infinity)
            .foregroundStyle(.white)
            .background(.blue)
    }
}
.contentMargins(50, for: .scrollContent)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-indent-the-content-or-scroll-indicators-in-a-scrollview-1.zip)

![50 items in a scrollview, inset by 50 points on all edges.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-indent-the-content-or-scroll-indicators-in-a-scrollview-1~dark.png)

If you want only some edges, you can specify either a single value or an option set of your choosing. For example, this indents the content by 150 points on the top edge only:

```swift
ScrollView {
    ForEach(0..<50) { i in
        Text("Item \(i)")
            .frame(maxWidth: .infinity)
            .background(.blue)
            .foregroundStyle(.white)
    }
}
.contentMargins(.top, 150, for: .scrollContent)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-indent-the-content-or-scroll-indicators-in-a-scrollview-2.zip)

![50 items in a scrollview, inset by 150 points on the top edge.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-indent-the-content-or-scroll-indicators-in-a-scrollview-2~dark.png)

In a similar way you can adjust the inset amount for the scroll view’s indicators, either by itself or alongside adjusting the content insets.

As before you can adjust all edges at once or chose only the ones you care about, so for example this adds 100 points of margin to the top of the scroll indicator, but leaves the rest untouched:

```swift
ScrollView {
    ForEach(0..<50) { i in
        Text("Item \(i)")
            .frame(maxWidth: .infinity)
            .background(.blue)
            .foregroundStyle(.white)
    }
}
.contentMargins(.top, 100, for: .scrollIndicators)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-indent-the-content-or-scroll-indicators-in-a-scrollview-3.zip)

Using content margins rather than simple padding allows your content to scroll edge to edge as the user interacts with it, while also adding a little extra space for scrolling – it’s a much better optional than simple padding.

::: details Similar solutions…

```component VPCard
{
  "title": "SwiftUI by Example > How to flash the scroll bar indicators of a ScrollView or List",
  "desc": "How to flash the scroll bar indicators of a ScrollView or List",
  "link": "/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-flash-the-scroll-bar-indicators-of-a-scrollview-or-list.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to hide the scroll indicators in ScrollView, List, and more",
  "desc": "How to hide the scroll indicators in ScrollView, List, and more",
  "link": "/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-hide-the-scroll-indicators-in-scrollview-list-and-more.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to make views scroll with a custom transition",
  "desc": "How to make views scroll with a custom transition",
  "link": "/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-make-views-scroll-with-a-custom-transition.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to make a scroll view move to a location using ScrollViewReader",
  "desc": "How to make a scroll view move to a location using ScrollViewReader",
  "link": "/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-make-a-scroll-view-move-to-a-location-using-scrollviewreader.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to add horizontal and vertical scrolling using ScrollView",
  "desc": "How to add horizontal and vertical scrolling using ScrollView",
  "link": "/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-add-horizontal-and-vertical-scrolling-using-scrollview.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />