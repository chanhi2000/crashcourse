---
lang: ko-KR
title: How to add horizontal and vertical scrolling using ScrollView
description: SwiftUI by Example > How to add horizontal and vertical scrolling using ScrollView
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
      content: SwiftUI by Example > How to add horizontal and vertical scrolling using ScrollView
    - property: og:description
      content: How to add horizontal and vertical scrolling using ScrollView
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-add-horizontal-and-vertical-scrolling-using-scrollview.html
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
  "title": "SwiftUI by Example > How to add horizontal and vertical scrolling using ScrollView",
  "desc": "How to add horizontal and vertical scrolling using ScrollView",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-add-horizontal-and-vertical-scrolling-using-scrollview",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI’s `ScrollView` allows us to create scrolling containers of views relatively easily, because it automatically sizes itself to fit the content we place inside it and also automatically adds extra insets to avoid the safe area.

For example, we could create a scroll list of ten text views like this:

```swift
ScrollView {
    VStack(spacing: 20) {
        ForEach(0..<10) {
            Text("Item \($0)")
                .foregroundStyle(.white)
                .font(.largeTitle)
                .frame(width: 200, height: 200)
                .background(.red)
        }
    }
}
.frame(height: 350)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-add-horizontal-and-vertical-scrolling-using-scrollview-1.zip)

Some red squares stretching off of the top and bottom of the image.

Scroll views are vertical by default, but you can control the axis by passing in `.horizontal` as the first parameter. So, we could flip our previous example to be horizontal like this:

```swift
ScrollView(.horizontal) {
    HStack(spacing: 20) {
        ForEach(0..<10) {
            Text("Item \($0)")
                .foregroundStyle(.white)
                .font(.largeTitle)
                .frame(width: 200, height: 200)
                .background(.red)
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-add-horizontal-and-vertical-scrolling-using-scrollview-2.zip)

![Some red squares stretching off of the left and right of the image.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-add-horizontal-and-vertical-scrolling-using-scrollview-2~dark.png)

You can specify both axes at the same time using `[.horizontal, .vertical]`.

Finally, you can decide whether to show the scroll indicators as the scroll action happens, like this:

```swift
ScrollView(.horizontal, showsIndicators: false) {
    HStack(spacing: 20) {
        ForEach(0..<10) {
            Text("Item \($0)")
                .foregroundStyle(.white)
                .font(.largeTitle)
                .frame(width: 200, height: 200)
                .background(.red)
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-add-horizontal-and-vertical-scrolling-using-scrollview-3.zip)

<VidStack src="https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-add-horizontal-and-vertical-scrolling-using-scrollview-3~dark.mp4" />

::: details Similar solutions…

How to enable vertical page scrolling

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
  "title": "SwiftUI by Example > How to disable ScrollView clipping so contents overflow",
  "desc": "How to disable ScrollView clipping so contents overflow",
  "link": "/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-disable-scrollview-clipping-so-contents-overflow",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to indent the content or scroll indicators in a ScrollView",
  "desc": "How to indent the content or scroll indicators in a ScrollView",
  "link": "/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-indent-the-content-or-scroll-indicators-in-a-scrollview.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > SwiftUI tips and tricks",
  "desc": "SwiftUI tips and tricks",
  "link": "/swift/swiftui-by-example/24-what-now/swiftui-tips-and-tricks.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />