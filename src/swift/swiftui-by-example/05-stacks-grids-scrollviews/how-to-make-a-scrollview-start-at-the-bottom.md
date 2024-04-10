---
lang: ko-KR
title: How to make a ScrollView start at the bottom
description: SwiftUI by Example > How to make a ScrollView start at the bottom
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
      content: SwiftUI by Example > How to make a ScrollView start at the bottom
    - property: og:description
      content: How to make a ScrollView start at the bottom
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/swift/swiftui-by-example/04-view-layout/how-to-make-a-scrollview-start-at-the-bottom.html
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
  "title": "SwiftUI by Example > How to make a ScrollView start at the bottom",
  "desc": "How to make a ScrollView start at the bottom",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-make-a-scrollview-start-at-the-bottom",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 17**

SwiftUI’s `ScrollView` starts scrolling from the top by default, but if you want to create a UI like Apple’s Messages app you can ask the scroll view to start at the bottom by using the `scrollPosition()` modifier with an initial anchor of `.bottom`.

For example, this shows 50 text views in a scroll view, but asks the scroll view to start its position from the bottom rather than the top:

```swift
ScrollView {
    ForEach(0..<50) { i in
        Text("Item \(i)")
            .frame(maxWidth: .infinity)
            .padding()
            .background(.blue)
            .clipShape(.rect(cornerRadius: 25))
    }
}
.scrollPosition(initialAnchor: .bottom)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-make-a-scrollview-start-at-the-bottom-1.zip)

![A scrollview containing many items, showing that it scrolls from the bottom up rather than the top down.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-make-a-scrollview-start-at-the-bottom-1~dark@2x.png)

If your UI alters somehow without the user scrolling – for example if the keyboard appears, or you adjust the size of the scroll view – then the scroll position will remain anchored to the bottom. However, if the user adjusts the scroll position manually, it will scroll freely as normal.

::: tip

The `initialAnchor` parameter is any `UnitPoint`, so you can use `.trailing` to start a horizontal scroll view from the right edge, or any exact value you need for your UI.

:::

::: details Similar solutions…

```component VPCard
{
  "title": "SwiftUI by Example > How to display a bottom sheet",
  "desc": "How to display a bottom sheet",
  "link": "/swift/swiftui-by-example/15-presenting-views/how-to-display-a-bottom-sheet.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to make a ScrollView snap with paging or between child views",
  "desc": "How to make a ScrollView snap with paging or between child views",
  "link": "/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-make-a-scrollview-snap-with-paging-or-between-child-views.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > – How to follow this quick start guide",
  "desc": "How to follow this quick start guide",
  "link": "/swift/swiftui-by-example/00-introduction/how-to-follow-this-quick-start-guide.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to start an animation immediately after a view appears",
  "desc": "How to start an animation immediately after a view appears",
  "link": "/swift/swiftui-by-example/18-animation/how-to-start-an-animation-immediately-after-a-view-appears.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to flash the scroll bar indicators of a ScrollView or List",
  "desc": "How to flash the scroll bar indicators of a ScrollView or List",
  "link": "/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-flash-the-scroll-bar-indicators-of-a-scrollview-or-list.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />