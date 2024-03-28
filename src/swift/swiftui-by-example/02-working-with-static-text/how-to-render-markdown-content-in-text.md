---
lang: ko-KR
title: How to render Markdown content in text
description: SwiftUI by Example > How to render Markdown content in text
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
      content: SwiftUI by Example > How to render Markdown content in text
    - property: og:description
      content: How to render Markdown content in text
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/swift/swiftui-by-example/02-working-with-static-text/how-to-render-markdown-content-in-text.html
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

```component VPCard
{
  "title": "SwiftUI by Example > How to render Markdown content in text",
  "desc": "How to render Markdown content in text",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-render-markdown-content-in-text",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 15**

SwiftUI has built-in support for rendering Markdown, including bold, italic, links, and more. It’s literally built right into SwiftUI’s `Text` view, so you can write code like this:

```swift
VStack {
    Text("This is regular text.")
    Text("* This is **bold** text, this is *italic* text, and this is ***bold, italic*** text.")
    Text("~~A strikethrough example~~")
    Text("`Monospaced works too`")
    Text("Visit Apple: [click here](https://apple.com)")
}
```

> [<FontIcon icon="fas fa-download"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-render-markdown-content-in-text-1.zip)

Several lines of text appropriately formatted with Markdown styling.

And yes, that link is automatically tappable. Markdown links will use your app’s accent color by default, but you can change that using the `tint()` modifier:

```swift
Text("Visit Apple: [click here](https://apple.com)")
    .tint(.indigo)
```

> [<FontIcon icon="fas fa-download"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-render-markdown-content-in-text-2.zipp)

::: note

Images aren’t supported.

:::

This automatic Markdown conversion happens because SwiftUI interprets those strings as being instances of `LocalizedStringKey` – strings that can be localized by our app. This means if you want to create Markdown text from a property or variable, you should mark it explicitly as being `LocalizedStringKey` to get the Markdown rendering:

```swift
struct ContentView: View {
    let markdownText: LocalizedStringKey = "* This is **bold** text, this is *italic* text, and this is ***bold, italic*** text."

    var body: some View {
        Text(markdownText)
    }
}
```

> [<FontIcon icon="fas fa-download"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-render-markdown-content-in-text-3.zip)

If you wanted the original text unchanged – i.e., you wanted the raw, unformatted Markdown symbols to be left in place – just remove the `LocalizedStringKey` annotation. Alternatively, you can disable both Markdown and localization entirely using the `Text(verbatim:)` initializer.

::: details Similar solutions…

```component VPCard
{
  "title": "SwiftUI by Example > How to render a SwiftUI view to a PDF",
  "desc": "How to render a SwiftUI view to a PDF",
  "link": "/swift/swiftui-by-example/17-drawing/how-to-render-a-swiftui-view-to-a-pdf.md",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to render a gradient",
  "desc": "How to render a gradient",
  "link": "/swift/swiftui-by-example/03-images-shapes-and-media/how-to-render-a-gradient.md",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to render images using SF Symbols",
  "desc": "How to render images using SF Symbols",
  "link": "/swift/swiftui-by-example/03-images-shapes-and-media/how-to-render-images-using-sf-symbols.md",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to format text inside text views",
  "desc": "How to format text inside text views",
  "link": "/swift/swiftui-by-example/02-working-with-static-text/how-to-format-text-inside-text-views.md",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to create scrolling pages of content using tabViewStyle()",
  "desc": "How to create scrolling pages of content using tabViewStyle()",
  "link": "/swift/swiftui-by-example/12-containers/how-to-create-scrolling-pages-of-content-using-tabviewstyle.md",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />