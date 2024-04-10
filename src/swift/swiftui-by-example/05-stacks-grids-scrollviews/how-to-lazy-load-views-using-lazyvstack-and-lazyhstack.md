---
lang: ko-KR
title: How to lazy load views using LazyVStack and LazyHStack
description: SwiftUI by Example > How to lazy load views using LazyVStack and LazyHStack
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
      content: SwiftUI by Example > How to lazy load views using LazyVStack and LazyHStack
    - property: og:description
      content: How to lazy load views using LazyVStack and LazyHStack
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-lazy-load-views-using-lazyvstack-and-lazyhstack.html
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
  "title": "SwiftUI by Example > How to lazy load views using LazyVStack and LazyHStack",
  "desc": "How to lazy load views using LazyVStack and LazyHStack",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-lazy-load-views-using-lazyvstack-and-lazyhstack",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

By default, SwiftUI’s `VStack` and `HStack` load all their contents up front, which is likely to be slow if you use them inside a scroll view. If you want to load content lazily – i.e., only when it scrolls into view, you should use `LazyVStack` and `LazyHStack` as appropriate.

For example, this will display 1000 text views lined up vertically, making sure each one is created only as it’s scrolled into view:

```swift
struct ContentView: View {
    var body: some View {
        ScrollView {
            LazyVStack {
                ForEach(1...100, id: \.self) { value in
                    Text("Row \(value)")
                }
            }
        }
        .frame(height: 300)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-lazy-load-views-using-lazyvstack-and-lazyhstack-1.zip)

![A long vertical list of rows saying “Row 1”, “Row 2”, etc.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-lazy-load-views-using-lazyvstack-and-lazyhstack-1~dark.png)

::: warning

These lazy stacks automatically have a flexible preferred width, so they will take up free space in a way that regular stacks do not. To see the difference, try the code above and you’ll find you can drag around using the whitespace around the text, but if you switch to a regular `VStack` you’ll see you need to scroll using the text itself.

:::

When using lazy stacks, SwiftUI will automatically create a view when it gets shown for the first time. After that the view will remain in memory, so be careful how much you show.

If you want to see how the lazy loading works in practice, try this example in an iOS app:

```swift
struct SampleRow: View {
    let id: Int

    var body: some View {
        Text("Row \(id)")
    }

    init(id: Int) {
        print("Loading row \(id)")
        self.id = id
    }
}

struct ContentView: View {
    var body: some View {
        ScrollView {
            LazyVStack {
                ForEach(1...100, id: \.self, content: SampleRow.init)
            }
        }
        .frame(height: 300)
    }
}
```

<VidStack src="https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-lazy-load-views-using-lazyvstack-and-lazyhstack-2~dark.mp4"/>

If you run that in Xcode, you’ll see the “Loading row…” messages bring printed out in the console as you scroll around.

::: details Similar solutions…

```component VPCard
{
  "title": "SwiftUI by Example > SwiftUI tips and tricks",
  "desc": "SwiftUI tips and tricks",
  "link": "/swift/swiftui-by-example/24-what-now/swiftui-tips-and-tricks.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > All SwiftUI property wrappers explained and compared",
  "desc": "All SwiftUI property wrappers explained and compared",
  "link": "/swift/swiftui-by-example/25-appendix-a/all-swiftui-property-wrappers-explained-and-compared.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to save and load NavigationStack paths using Codable",
  "desc": "How to save and load NavigationStack paths using Codable",
  "link": "/swift/swiftui-by-example/13-navigation/how-to-save-and-load-navigationstack-paths-using-codable.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to load a remote image from a URL",
  "desc": "How to load a remote image from a URL",
  "link": "/swift/swiftui-by-example/03-images-shapes-and-media/how-to-load-a-remote-image-from-a-url.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to load custom colors from an asset catalog",
  "desc": "How to load custom colors from an asset catalog",
  "link": "/swift/swiftui-by-example/03-images-shapes-and-media/how-to-load-custom-colors-from-an-asset-catalog.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />