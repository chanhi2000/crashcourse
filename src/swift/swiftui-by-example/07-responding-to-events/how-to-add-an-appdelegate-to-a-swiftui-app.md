---
lang: ko-KR
title: How to add an AppDelegate to a SwiftUI app
description: SwiftUI by Example > How to add an AppDelegate to a SwiftUI app
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
      content: SwiftUI by Example > How to add an AppDelegate to a SwiftUI app
    - property: og:description
      content: How to add an AppDelegate to a SwiftUI app
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/swift/swiftui-by-example/07-responding-to-events/how-to-add-an-appdelegate-to-a-swiftui-app.html
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
  "title": "SwiftUI by Example > How to add an AppDelegate to a SwiftUI app",
  "desc": "How to add an AppDelegate to a SwiftUI app",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-add-an-appdelegate-to-a-swiftui-app",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI apps launch using a custom struct that conforms to the `App` protocol, but sometimes you might want to get back the old `UIApplicationDelegate` functionality we used to have – perhaps to handle registration for push notifications, to respond to memory warnings, to detect time changes, and so on.

To do this, first create a custom class that inherits from `NSObject` and conforms to the `UIApplicationDelegate` protocol, like this:

```swift
class AppDelegate: NSObject, UIApplicationDelegate {
    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey : Any]? = nil) -> Bool {
        print("Your code here")
        return true
    }
}
```

I’ve added `didFinishLaunchingWithOptions` in there, but you only need to implement the methods you care about.

And now in your `App` scene, use the `UIApplicationDelegateAdaptor` property wrapper to tell SwiftUI it should use your `AppDelegate` class for the application delegate.

```swift
@main
struct NewIn14App: App {
    @UIApplicationDelegateAdaptor(AppDelegate.self) var appDelegate

    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}
```

SwiftUI is responsible for creating that delegate and looking after its lifetime, so you can go ahead and add any other app delegate functionality to that class to have it called.

::: tip

For push notifications, you should probably adjust the `delegate` property of `UNUserNotificationCenter.current()` so that it points to a custom class you own.

:::

::: details Similar solutions…

```component VPCard
{
  "title": "SwiftUI by Example > How to add in-app purchases in SwiftUI",
  "desc": "How to add in-app purchases in SwiftUI",
  "link": "/swift/swiftui-by-example/14-alerts-and-menus/how-to-add-in-app-purchases-in-swiftui.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to add Metal shaders to SwiftUI views using layer effects",
  "desc": "How to add Metal shaders to SwiftUI views using layer effects",
  "link": "/swift/swiftui-by-example/17-drawing/how-to-add-metal-shaders-to-swiftui-views-using-layer-effects.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to create a document-based app using FileDocument and DocumentGroup",
  "desc": "How to create a document-based app using FileDocument and DocumentGroup",
  "link": "/swift/swiftui-by-example/21-data/how-to-create-a-document-based-app-using-filedocument-and-documentgroup.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to add Core Data objects from SwiftUI views",
  "desc": "How to add Core Data objects from SwiftUI views",
  "link": "/swift/swiftui-by-example/21-data/how-to-add-core-data-objects-from-swiftui-views.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to detect when your app moves to the background or foreground with scenePhase",
  "desc": "How to detect when your app moves to the background or foreground with scenePhase",
  "link": "/swift/swiftui-by-example/07-responding-to-events/how-to-detect-when-your-app-moves-to-the-background-or-foreground-with-scenephase.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />