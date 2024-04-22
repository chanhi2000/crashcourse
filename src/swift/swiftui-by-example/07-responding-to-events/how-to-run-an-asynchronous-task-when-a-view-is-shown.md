---
lang: ko-KR
title: How to run an asynchronous task when a view is shown
description: SwiftUI by Example > How to run an asynchronous task when a view is shown
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
      content: SwiftUI by Example > How to run an asynchronous task when a view is shown
    - property: og:description
      content: How to run an asynchronous task when a view is shown
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/swift/swiftui-by-example/07-responding-to-events/how-to-run-an-asynchronous-task-when-a-view-is-shown.html
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
  "title": "SwiftUI by Example > How to run an asynchronous task when a view is shown",
  "desc": "How to run an asynchronous task when a view is shown",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-run-an-asynchronous-task-when-a-view-is-shown",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 15**

SwiftUI’s `task()` modifier is a more powerful version of `onAppear()`, allowing us to start asynchronous work as soon as the view is shown. Even better, the task will automatically be cancelled when the view is destroyed, if it has not already finished.

As the task is executed asynchronously, this is a great place to fetch some initial network data for your view. For example, if we wanted to fetch a list of messages from a server, decode it into an array of `Message` structs, then show it in a list, we might write something like this:

```swift
struct Message: Decodable, Identifiable {
    let id: Int
    let from: String
    let text: String
}

struct ContentView: View {
    @State private var messages = [Message]()

    var body: some View {
        NavigationStack {
            List(messages) { message in
                VStack(alignment: .leading) {
                    Text(message.from)
                        .font(.headline)
                    Text(message.text)
                }
            }
            .navigationTitle("Inbox")
        }
        .task {
            do {
                let url = URL(string: "https://www.hackingwithswift.com/samples/messages.json")!
                let (data, _) = try await URLSession.shared.data(from: url)
                messages = try JSONDecoder().decode([Message].self, from: data)
            } catch {
                messages = []
            }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-run-an-asynchronous-task-when-a-view-is-shown-1.zip)

![The word “Inbox” in bold above a list of messages.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-run-an-asynchronous-task-when-a-view-is-shown-1~dark.png)

You can attach the `task()` modifier to any view in your hierarchy, even ones that are presented as a result of a navigation push – it will only actually start its work when the view is displayed.

To demonstrate this, we could create a simple website source code viewer where users had a choice of sites to check:

```swift
struct ContentView: View {
    let sites = ["Apple.com", "HackingWithSwift.com", "Swift.org"]

    var body: some View {
        NavigationStack {
            List(sites, id: \.self) { site in
                NavigationLink(site) {
                    SourceViewer(site: site)
                }
            }
            .navigationTitle("View Source")
        }
    }
}

struct SourceViewer: View {
    let site: String
    @State private var sourceCode = "Loading…"

    var body: some View {
        ScrollView {
            Text(sourceCode)
                .font(.system(.body, design: .monospaced))
        }
        .task {
            guard let url = URL(string: "https://\(site)") else {
                return
            }

            do {
                let (data, _) = try await URLSession.shared.data(from: url)
                sourceCode = String(decoding: data, as: UTF8.self).trimmingCharacters(in: .whitespacesAndNewlines)
            } catch {
                sourceCode = "Failed to fetch site."
            }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-run-an-asynchronous-task-when-a-view-is-shown-2.zip)

Both `task()` and `onAppear()` are able to run synchronous functions when you view is shown, so there’s no particular reason to choose one or the other beyond personal taste – there’s a nice balance to having both `onAppear()` and `onDisappear()` together.

::: tip

By default, Swift tasks created using the `task()` modifier will run at the highest available priority, but you can pass a custom priority into the modifier if you know the work is less important.

:::

::: details Similar solutions…

```component VPCard
{
  "title": "SwiftUI by Example > How to control which view is shown when your app launches",
  "desc": "How to control which view is shown when your app launches",
  "link": "/swift/swiftui-by-example/07-responding-to-events/how-to-control-which-view-is-shown-when-your-app-launches.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
How to control which NavigationSplitView column is shown in compact layouts <!-- TODO: add link -->

```component VPCard
{
  "title": "SwiftUI by Example > How to run some code when state changes using onChange()",
  "desc": "How to run some code when state changes using onChange()",
  "link": "/swift/swiftui-by-example/09-advanced-state/how-to-run-some-code-when-state-changes-using-onchange.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to show progress on a task using ProgressView",
  "desc": "How to show progress on a task using ProgressView",
  "link": "/swift/swiftui-by-example/06-user-interface-controls/how-to-show-progress-on-a-task-using-progressview.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to run code when your app launches",
  "desc": "How to run code when your app launches",
  "link": "/swift/swiftui-by-example/07-responding-to-events/how-to-run-code-when-your-app-launches.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />