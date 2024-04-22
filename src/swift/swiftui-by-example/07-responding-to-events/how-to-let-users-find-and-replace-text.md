---
lang: ko-KR
title: How to let users find and replace text
description: SwiftUI by Example > How to let users find and replace text
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
      content: SwiftUI by Example > How to let users find and replace text
    - property: og:description
      content: How to let users find and replace text
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/swift/swiftui-by-example/07-responding-to-events/how-to-let-users-find-and-replace-text.html
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
  "title": "SwiftUI by Example > How to let users find and replace text",
  "desc": "How to let users find and replace text",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-let-users-find-and-replace-text",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 16**

SwiftUI’s `TextEditor` comes with built-in support to let the user search for text, or search and replace depending on their needs. It works out of the box for users who have a keyboard attached, so a view like this will work immediately:

```swift
struct ContentView: View {
    @State private var bio = "Describe yourself."

    var body: some View {
        NavigationStack {
            TextEditor(text: $bio)
                .navigationTitle("Edit Bio")
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-let-users-find-and-replace-text-1.zip)

To try that out, tap to activate the `TextEditor`, then press <kbd>Cmd</kbd>+<kbd>F</kbd> to active search, or press <kbd>Option</kbd>+<kbd>Cmd</kbd>+<kbd>F</kbd> to activate search and replace.

::: note

Find and replace works only with `TextEditor`, not with `TextField`.

:::

For users without a hardware keyboard, you can programmatically show the find interface using the `findNavigator()` modifier. For example, this toggles search using a toolbar button:

```swift
struct ContentView: View {
    @State private var bio = "Describe yourself."
    @State private var isShowingFindNavigator = false

    var body: some View {
        NavigationStack {
            TextEditor(text: $bio)
                .findNavigator(isPresented: $isShowingFindNavigator)
                .toolbar {
                    Button("Toggle Search") {
                        isShowingFindNavigator.toggle()
                    }
                }
                .navigationTitle("Edit Bio")
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-let-users-find-and-replace-text-2.zip)

::: tip

Passing true to `findNavigator()` when no `TextEditor` is currently accepting input will make the system attempt to find and activate one automatically. If there is more than one to choose from the system will pick one for you.

:::

If you explicitly want a view to opt out of search and/or replace, use one or both of `findDisabled()` and `replaceDisabled()`, like this:

```swift
struct ContentView: View {
    @State private var bio = "Describe yourself."

    var body: some View {
        NavigationStack {
            TextEditor(text: $bio)
                .replaceDisabled()
                .navigationTitle("Edit Bio")
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-let-users-find-and-replace-text-1.zip)

::: details Similar solutions…

```component VPCard
{
  "title": "SwiftUI by Example > How to let users select text",
  "desc": "How to let users select text",
  "link": "/swift/swiftui-by-example/02-working-with-static-text/how-to-let-users-select-text.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to let users move rows in a list",
  "desc": "How to let users move rows in a list",
  "link": "/swift/swiftui-by-example/10-lists/how-to-let-users-move-rows-in-a-list.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to let users import videos using PhotosPicker",
  "desc": "How to let users import videos using PhotosPicker",
  "link": "/swift/swiftui-by-example/03-images-shapes-and-media/how-to-let-users-import-videos-using-photospicker.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to let users delete rows from a list",
  "desc": "How to let users delete rows from a list",
  "link": "/swift/swiftui-by-example/10-lists/how-to-let-users-delete-rows-from-a-list.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to let users share content using the system share sheet",
  "desc": "How to let users share content using the system share sheet",
  "link": "/swift/swiftui-by-example/07-responding-to-events/how-to-let-users-share-content-using-the-system-share-sheet.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />