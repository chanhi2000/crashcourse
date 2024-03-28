---
lang: ko-KR
title: How to customize the way links are opened
description: SwiftUI by Example > How to customize the way links are opened
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
      content: SwiftUI by Example > How to customize the way links are opened
    - property: og:description
      content: How to customize the way links are opened
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/swift/swiftui-by-example/02-working-with-static-text/how-to-customize-the-way-links-are-opened.html
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

```component VPCard
{
  "title": "SwiftUI by Example > How to customize the way links are opened",
  "desc": "How to customize the way links are opened",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-customize-the-way-links-are-opened",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

When your user taps a URL shown inside a SwiftUI `Text` or `Link` view, it will open in Safari by default. However, you can customize this behavior by replacing the `openURL` environment key – you might want to handle the link entirely, or perhaps pass it back to the system to open once your custom action completes.

For example, this code adjusts both a `Link` and a `Text` view so that all URLs are sent to a `handleURL()` method to be acted on:

```swift
struct ContentView: View {
    var body: some View {
        VStack {
            Link("Visit Apple", destination: URL(string: "https://apple.com")!)
            Text("[Visit Apple](https://apple.com)")
        }
        .environment(\.openURL, OpenURLAction(handler: handleURL))
    }

    func handleURL(_ url: URL) -> OpenURLAction.Result {
        print("Handle \(url) somehow")
        return .handled
    }
}
```

> [<FontIcon icon="fas fa-download"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-customize-the-way-links-are-opened-1.zip)

As you can see, `handleURL()` returns a `OpenURLAction.Result` value of `.handled`, which means the method accepted the link and acted on it. There are alternatives:

- Use `.discarded` if you mean you weren’t able to handle the link.
- Use `.systemAction` if you want to trigger the default behavior, perhaps in addition to your own logic.
- Use `.systemAction(someOtherURL)` if you want to open a different URL using the default behavior, perhaps a modified version of the URL that was originally triggered.

Remember, links will use your app’s accent color by default, but you can change that using the `tint()` modifier:

```swift
Text("[Visit Apple](https://apple.com)")
    .tint(.indigo)
```

> [<FontIcon icon="fas fa-download"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-customize-the-way-links-are-opened-2.zip)

::: details Similar solutions…

```component VPCard
{
  "title": "SwiftUI by Example > How to open web links in Safari",
  "desc": "How to open web links in Safari",
  "link": "/swift/swiftui-by-example/06-user-interface-controls/how-to-open-web-links-in-safari.md",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > Two-way bindings in SwiftUI",
  "desc": "Two-way bindings in SwiftUI",
  "link": "/swift/swiftui-by-example/01-building-a-complete-project/two-way-bindings-in-swiftui.md",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to adjust the way an image is fitted to its space",
  "desc": "How to adjust the way an image is fitted to its space",
  "link": "/swift/swiftui-by-example/03-images-shapes-and-media/how-to-adjust-the-way-an-image-is-fitted-to-its-space.md",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to let users customize toolbar buttons",
  "desc": "How to let users customize toolbar buttons",
  "link": "/swift/swiftui-by-example/12-containers/how-to-let-users-customize-toolbar-buttons.md",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to customize the background color of navigation bars, tab bars, and toolbars",
  "desc": "How to customize the background color of navigation bars, tab bars, and toolbars",
  "link": "/swift/swiftui-by-example/12-containers/how-to-customize-the-background-color-of-navigation-bars-tab-bars-and-toolbars.md",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---


<TagLinks />