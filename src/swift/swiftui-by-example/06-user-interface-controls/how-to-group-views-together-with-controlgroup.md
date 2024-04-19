---
lang: ko-KR
title: How to group views together with ControlGroup
description: SwiftUI by Example > How to group views together with ControlGroup
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
      content: SwiftUI by Example > How to group views together with ControlGroup
    - property: og:description
      content: How to group views together with ControlGroup
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/swift/swiftui-by-example/06-user-interface-controls/how-to-group-views-together-with-controlgroup.html
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
  "title": "SwiftUI by Example > How to group views together with ControlGroup",
  "desc": "How to group views together with ControlGroup",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-group-views-together-with-controlgroup",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 15**

SwiftUI’s `ControlGroup` View lets us tell the system that two or more views should be grouped together because they are related. What it *does* with that information is down to the context where they are used and the platform your code is running on.

For example, on iOS and macOS, this will display three buttons attached horizontally, in a style sometimes called “momentary segmented”:

```swift
ControlGroup {
    Button("First") { }
    Button("Second") { }
    Button("Third") { }
}
.padding()
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-group-views-together-with-controlgroup-1.zip)

When you run that code you’ll see the buttons are clearly attached to each other visually, but still operate individually.

`ControlGroup` is particularly useful when creating customizable toolbars, where buttons in a control group must be added or removed together rather than split up.

::: details Similar solutions…

```component VPCard
{
  "title": "SwiftUI by Example > How to group views together",
  "desc": "How to group views together",
  "link": "/swift/swiftui-by-example/12-containers/how-to-group-views-together.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to combine text views together",
  "desc": "How to combine text views together",
  "link": "/swift/swiftui-by-example/19-composing-view/how-to-combine-text-views-together.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to blend views together",
  "desc": "How to blend views together",
  "link": "/swift/swiftui-by-example/16-transforming-views/how-to-blend-views-together.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to group views visually using GroupBox",
  "desc": "How to group views visually using GroupBox",
  "link": "/swift/swiftui-by-example/12-containers/how-to-group-views-visually-using-groupbox.md",
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

:::

---

<TagLinks />