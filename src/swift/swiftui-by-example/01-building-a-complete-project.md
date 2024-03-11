---
lang: ko-KR
title: Building a complete project
description: 🕊️SwiftUI by Example > Building a complete project
category:
  - 🕊️Swift
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
      content: 🕊️SwiftUI by Example > Building a complete project
    - property: og:description
      content: Building a complete project
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/swift/swiftui-by-example/01-building-a-complete-project.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```component VPCard
{
  "title": "SwiftUI by Example > SwiftUI tutorial: Building a complete project",
  "desc": "SwiftUI tutorial: Building a complete project",
  "link": "https://www.hackingwithswift.com/quick-start/swiftui/swiftui-tutorial-building-a-complete-project",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

<VidStack id="M6v6y-KyJs0" />

This is a complete, free SwiftUI tutorial designed to take you through lots of its functionality in a single project. It’s aimed at people who have existing programming experience with UIKit, but most things are explained in detail so newcomers ought to be able to follow along.

__Important__: This was written for iOS 16.1, so you’ll need at least Xcode 14.1 to follow along. This is available as a free download from the Mac App Store if you don’t already have it.

The project we’ll be making is called iDine, and is a restaurant app that lists items in a menu and helps folks place orders. I’ve designed the project specifically so that it covers as many different techniques as possible to give you a good grounding in how things work in SwiftUI. Of course, we’re also building a real project at the same time – it’s going to be busy!

::: tip Note

If you’d like to see my completed version of this project, you can find it here on GitHub: [<FontIcon icon="iconfont icon-github"/>`twostraws/iDine`](https://github.com/twostraws/iDine).

:::

To get started, please create a new iOS project in Xcode called “iDine”, choosing the App template. You should also select SwiftUI for the Interface, but please leave all the checkboxes unchecked.

Xcode’s project creation window, configured to create a SwiftUI app.

There are quite a few assets provided for this project that you need to copy in before you start. These are all in the assets for this project, which you can download [<FontIcon icon="iconfont icon-select"/>here](https://www.hackingwithswift.com/samples/idine.zip).

Please copy them into your project like this:

- Drag Helper.swift into your project navigator. This contains a helper extension that makes it easier to decode `Codable` data from a bundle. This is not related to SwiftUI, so we won’t be covering it here.
- You should also drag Order.swift and Menu.swift into the project navigator. These are custom types that store the data we’re using in the app.
- And drag menu.json into your project navigator too – this describes all the menu items our restaurant offers, and will be decoded into instances of `MenuSection` and `MenuItem`.
- Drag the contents of the Images directory into your asset catalog, so we have all the pictures we need.

![Dragging our artwork into Xcode’s asset catalog.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/2-2~dark.png)

OK, that’s it – we’re ready to go!

__Tip__: At the end of each chapter I’ve added a “Further reading” section that suggests links to other chapters in this book. You don’t need to read them in order to follow along; they are there to provide extra information and detail if you want to understand the bigger picture more thoroughly.

---

## Building a menu using List

::: details Building a menu using List

```component VPCard
{
  "title": "SwiftUI by Example > Building a menu using List",
  "desc": "Building a menu using List",
  "link": "building-a-menu-using-list",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

## Composing views to create a list row

::: details Composing views to create a list row

```component VPCard
{
  "title": "SwiftUI by Example > Composing views to create a list row",
  "desc": "Composing views to create a list row",
  "link": "composing-views-to-create-a-list-row",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

## Polishing designs with fonts and colors

::: details Polishing designs with fonts and colors

```component VPCard
{
  "title": "SwiftUI by Example > Polishing designs with fonts and colors",
  "desc": "Polishing designs with fonts and colors",
  "link": "polishing-designs-with-fonts-and-colors",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

## Displaying a detail screen with `NavigationLink`

::: details Displaying a detail screen with NavigationLink

```component VPCard
{
  "title": "SwiftUI by Example > Displaying a detail screen with NavigationLink",
  "desc": "Displaying a detail screen with NavigationLink",
  "link": "displaying-a-detail-screen-with-navigationlink",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

## Observable objects, environment objects, and `@Published`

::: details Observable objects, environment objects, and @Published

```component VPCard
{
  "title": "SwiftUI by Example > Observable objects, environment objects, and @Published",
  "desc": "Observable objects, environment objects, and @Published",
  "link": "observable-objects-environment-objects-and-published",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

## Adding items to an order with `@EnvironmentObject`

::: details Adding items to an order with @EnvironmentObject

```component VPCard
{
  "title": "SwiftUI by Example > Adding items to an order with @EnvironmentObject",
  "desc": "Adding items to an order with @EnvironmentObject",
  "link": "adding-items-to-an-order-with-environmentobject",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

## Adding `TabView` and `tabItem()`

::: details Adding `TabView` and `tabItem()`

```component VPCard
{
  "title": "SwiftUI by Example > Adding TabView and tabItem()",
  "desc": "Adding TabView and tabItem()",
  "link": "adding-tabview-and-tabitem",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

## Bindings and forms

::: details Bindings and forms

```component VPCard
{
  "title": "SwiftUI by Example > Bindings and forms",
  "desc": "Bindings and forms",
  "link": "bindings-and-forms",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

## Two-way bindings in SwiftUI

::: details Two-way bindings in SwiftUI

```component VPCard
{
  "title": "SwiftUI by Example > Two-way bindings in SwiftUI",
  "desc": "Two-way bindings in SwiftUI",
  "link": "two-way-bindings-in-swiftui",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

## Formatting interpolated strings in SwiftUI

::: details Formatting interpolated strings in SwiftUI

```component VPCard
{
  "title": "SwiftUI by Example > Formatting interpolated strings in SwiftUI",
  "desc": "Formatting interpolated strings in SwiftUI",
  "link": "formatting-interpolated-strings-in-swiftui",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

## Presenting an alert

::: details Presenting an alert

```component VPCard
{
  "title": "SwiftUI by Example > Presenting an alert",
  "desc": "Presenting an alert",
  "link": "presenting-an-alert",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

## Adding swipe to delete and `EditButton`

::: details Adding swipe to delete and EditButton

```component VPCard
{
  "title": "SwiftUI by Example > Adding swipe to delete and EditButton",
  "desc": "Adding swipe to delete and EditButton",
  "link": "adding-swipe-to-delete-and-editbutton",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

## Wrap up: our SwiftUI project is complete

::: details Wrap up: our SwiftUI project is complete

```component VPCard
{
  "title": "SwiftUI by Example > Wrap up: our SwiftUI project is complete",
  "desc": "Wrap up: our SwiftUI project is complete",
  "link": "wrap-up-our-swiftui-project-is-complete",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />