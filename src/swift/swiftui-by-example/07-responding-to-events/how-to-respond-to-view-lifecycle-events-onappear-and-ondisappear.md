---
lang: ko-KR
title: How to respond to view lifecycle events - onAppear() and onDisappear()
description: SwiftUI by Example > How to respond to view lifecycle events - onAppear() and onDisappear()
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
      content: SwiftUI by Example > How to respond to view lifecycle events - onAppear() and onDisappear()
    - property: og:description
      content: How to respond to view lifecycle events - onAppear() and onDisappear()
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/swift/swiftui-by-example/07-responding-to-events/how-to-respond-to-view-lifecycle-events-onappear-and-ondisappear.html
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
  "title": "SwiftUI by Example > How to respond to view lifecycle events: onAppear() and onDisappear()",
  "desc": "How to respond to view lifecycle events: onAppear() and onDisappear()",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-respond-to-view-lifecycle-events-onappear-and-ondisappear",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI gives us equivalents to UIKit’s `viewDidAppear()` and `viewDidDisappear()` in the form of `onAppear()` and `onDisappear()`. You can attach any code to these two events that you want, and SwiftUI will execute them when they occur.

As an example, this creates two views that use `onAppear()` and `onDisappear()` to print messages, with a navigation link to move between the two:

```swift
struct ContentView: View {
    var body: some View {
        NavigationStack {
            VStack {
                NavigationLink {
                    DetailView()
                } label: {
                    Text("Hello World")
                }
            }
            .onAppear {
                print("ContentView appeared!")
            }
            .onDisappear {
                print("ContentView disappeared!")
            }
        }
    }
}

struct DetailView: View {
    var body: some View {
        VStack {
            Text("Second View")
        }
        .onAppear {
            print("DetailView appeared!")
        }
        .onDisappear {
            print("DetailView disappeared!")
        }
    }
}
```

<VidStack src="https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-respond-to-view-lifecycle-events-onappear-and-ondisappear-1~dark.mp4" />

When that code runs you should be able to move between the two views and see messages printed in your Xcode debug console.

::: details Similar solutions…

```component VPCard
{
  "title": "SwiftUI by Example > How to detect and respond to key press events",
  "desc": "How to detect and respond to key press events",
  "link": "/swift/swiftui-by-example/07-responding-to-events/how-to-detect-and-respond-to-key-press-events.md",
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
  "title": "SwiftUI by Example > How to use Instruments to profile your SwiftUI code and identify slow layouts",
  "desc": "How to use Instruments to profile your SwiftUI code and identify slow layouts",
  "link": "/swift/swiftui-by-example/23-tooling/how-to-use-instruments-to-profile-your-swiftui-code-and-identify-slow-layouts.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > Building a menu using List",
  "desc": "Building a menu using List",
  "link": "/swift/swiftui-by-example/01-building-a-complete-project/building-a-menu-using-list.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />