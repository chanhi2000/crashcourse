---
lang: ko-KR
title: 🕊️SwiftUI by Example
description: 🕊️SwiftUI by Example
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
      content: 🕊️SwiftUI by Example
    - property: og:description
      content: 🕊️SwiftUI by Example
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/swift/swiftui-by-example.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```component VPCard
{
  "title": "HACKING WITH SWIFT",
  "desc": "🕊️SwiftUI by Example",
  "link": "https://www.hackingwithswift.com/quick-start/swiftui",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(174,10,10,0.2)"
}
```

---

## Introduction

> A brief explanation of the basics of SwiftUI

### What is SwiftUI?

::: details What is SwiftUI?

```component VPCard
{
  "title": "SwiftUI by Example – What is SwiftUI?",
  "desc": "What is SwiftUI?",
  "link": "https://www.hackingwithswift.com/quick-start/swiftui/what-is-swiftui", 
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI is a user interface toolkit that lets us design apps in a declarative way. That’s a fancy way of saying that we tell SwiftUI how we want our user interface to look and work, and it figures out how to make that happen as the user interacts with it.

Declarative UI is best understood in comparison to imperative UI, which is what iOS developers were doing before iOS 13. In an imperative user interface we might make a function be called when a button was clicked, and inside the function we’d read a value and show a label – we regularly modify the way the user interface looks and works based on what’s happening.

Imperative UI causes all sorts of problems, most of which revolve around _state_, which is another fancy term meaning “values we store in our code.” We need to track what state our code is in, and make sure our user interface correctly reflects that state.

If we have one screen with one Boolean property that affects the UI, we have two states: the Boolean might be on or off. If we have two Booleans, A and B, we now have four states:

- A is off and B is off
- A is on and B is off
- A is off and B is on
- A is on and B is on

And if we have three Booleans? Or five? Or integers, strings, dates, and more? Well, then we have lots more complexity.

If you’ve ever used an app that says you have 1 unread message no matter how many times you try to tell if you’ve read the darn thing, that’s a state problem – that’s an imperative UI problem.

In contrast, declarative UI lets us tell iOS about all possible states of our app at once. We might say if we’re logged in show a welcome message but if we’re logged out show a login button. We don’t need to write code to move between those two states by hand – that’s the ugly, imperative way of working!

Instead, we let SwiftUI move between user interface layouts for us when the state changes. We already told it what to show based on whether the user was logged in or out, so when we change the authentication state SwiftUI can update the UI on our behalf.

That’s what it means by declarative: we aren’t making SwiftUI components show and hide by hand, we’re just telling it all the rules we want it to follow and leaving SwiftUI to make sure those rules are enforced.

But SwiftUI doesn’t stop there – it also acts as a cross-platform user interface layer that works across iOS, macOS, tvOS, watchOS, and even visionOS. This means you can now learn one language and one layout framework, then deploy your code anywhere.

:::

### SwiftUI vs Interface Builder and storyboards

::: details SwiftUI vs Interface Builder and storyboards

```component VPCard
{
  "title": "SwiftUI by Example – SwiftUI vs Interface Builder and storyboards",
  "desc": "SwiftUI vs Interface Builder and storyboards",
  "link": "https://www.hackingwithswift.com/quick-start/swiftui/swiftui-vs-interface-builder-and-storyboards",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Every experienced iOS developer is familiar with Interface Builder and storyboards, and perhaps even XIBs too. They might not _like_ them, but they are at least _familiar_ with them. If you haven’t used these before, you should just skip this bit.

Still here? That means you’ve used IB before and are probably curious how SwiftUI is different. Well, let me ask you this: have you ever edited a storyboard or XIB by hand?

Probably not. Well, apart from that one time once, but broadly the answer is _no_ – storyboards and XIBs contain a fairly large amount of XML that isn’t easy to read or easy to edit.

Worse, storyboards have a habit of growing larger and larger over time. Sure, they might _start off_ small, but then you add another view controller and another, and another, and suddenly you realize that you have ten screens of data in a single file, and any source control changes you make are suddenly quite painful.

But although being a single point of failure isn’t great, and it’s basically impossible to see what’s changed when someone opens a pull request with a storyboard modification, storyboards and XIBs have a bigger problem.

You see, Interface Builder doesn’t know much about our Swift code, and our Swift code doesn’t know much about Interface Builder. As a result, we end up with lots of unsafe functionality: we <kbd>Ctrl</kbd>-drag from IB into our code to connect something to an action, but if we then delete that action the code still compiles – IB really doesn’t mind if the code it intends to call no longer exists.

Similarly, when we create view controllers from a storyboard or dequeue table view cells, we use strings to identify important objects in our code – a system so pervasive, it even has its own name: “stringly typed APIs”. Even then we need to use typecasts because Swift can’t know that the table view cell it got back is actually a `MooncakeTableViewCell`.

These problems exist because IB and Swift are very separate things. This isn’t a huge surprise – not only does Interface Builder date from way before the original Mac OS X was a thing, but it’s also very much designed around the way Objective-C works.

SwiftUI makes a hard break from that past. It’s a Swift-only framework, not because Apple has decided that it’s time for Objective-C to die, but because it lets SwiftUI leverage the full range of Swift’s functionality – value types, opaque return types, protocol extensions, and more.

Anyway, we’ll get onto exactly how SwiftUI works soon. For now, the least you need to know is that SwiftUI fixes many problems people had with the old Swift + Interface Builder approach:

- We no longer have to argue about programmatic or storyboard-based design, because SwiftUI gives us both at the same time.
- We no longer have to worry about creating source control problems when committing user interface work, because code is much easier to read and manage than storyboard XML.
- We no longer need to worry so much about stringly typed APIs – there are still some, but significantly fewer.
- We no longer need to worry about calling functions that don’t exist, because our user interface gets checked by the Swift compiler.

So, I hope you’ll agree there are lots of benefits to be had from moving to SwiftUI!

:::

### Frequently asked questions about SwiftUI

::: details Frequently asked questions about SwiftUI

```component VPCard
{
  "title": "SwiftUI by Example – Frequently asked questions about SwiftUI",
  "desc": "Frequently asked questions about SwiftUI",
  "link": "https://www.hackingwithswift.com/quick-start/swiftui/frequently-asked-questions-about-swiftui",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Lots of people are already asking me questions about SwiftUI, and I’ve done my best to ask other people who know much more to try to find definitive answers as appropriate.

So, here goes…

#### Which to learn: SwiftUI or UIKit?

This question has been asked so many times I added a dedicated chapter to this book so I could go into more detail: [answering the big question: should you learn SwiftUI, UIKit, or both?](https://www.hackingwithswift.com/quick-start/swiftui/answering-the-big-question-should-you-learn-swiftui-uikit-or-both)

#### Where can SwiftUI be used?

SwiftUI runs on iOS 13, macOS 10.15, tvOS 13, watchOS 6, visionOS 1, or any future later versions of those platforms. This means if you work on an app that must support iOS N-1 or even N-2 – i.e., the current version and one or two before that – then you will be limited in terms of the features you can offer.

However, it’s important you don’t think of SwiftUI as being a multi-platform framework similar to Java’s Swing or React Native. The official line seems to be that SwiftUI is not a multi-platform framework, but is instead a framework for creating apps on multiple platforms.

That might sound the same, but there’s an important difference: Apple isn’t saying that you can use identical SwiftUI code on every platform, because some things just aren’t possible – there’s no way to use the Apple Watch’s digital crown on a Mac, for example.

#### Does SwiftUI replace UIKit?

No. Many parts of SwiftUI directly build on top of existing UIKit components, such as `UITableView`. Of course, many other parts don’t – they are new controls rendered by SwiftUI and not UIKit.

But the point isn’t to what extent UIKit is involved. Instead, the point is that we don’t _care_. SwiftUI more or less completely masks UIKit’s behavior, so if you write your app for SwiftUI and Apple replaces UIKit with a singing elephant in two years you don’t have to care – as long as Apple makes the elephant compatible with the same methods and properties that UIKit exposed to SwiftUI, your code doesn’t change.

#### Does SwiftUI use Auto Layout?

While Auto Layout is certainly being used for some things behind the scenes, it’s not exposed to us as SwiftUI developers. Instead, it uses a flexible box layout system that will be familiar to developers coming from the web.

#### Is SwiftUI fast?

SwiftUI is _screamingly_ fast – in all my tests so far it seems to outpace UIKit. Having spoken to the team who made it I’m starting to get an idea why: first, they aggressively flatten their layer hierarchy so the system has to do less drawing, but second many operations can bypass Core Animation entirely and go straight to Metal for extra speed.

So, yes: SwiftUI is incredibly fast, and all without us having to do any extra work.

#### Why can’t I see the preview of my code?

When working with SwiftUI it’s helpful to be able to see both the code for your view and a preview of your view – how it looks – side by side. If you can see the code and not the preview, chances are you need to go to the Editor menu and make sure Canvas is enabled.

#### How closely does the code match the preview?

When you make any change to the preview it will also update the generated code. Similarly, if you change the code it will update the user interface too. So, the code and preview are identical and always stay in sync.

#### Why do my colors look slightly off?

SwiftUI gives us standard system colors like red, blue, and green, but these aren’t the pure red, blue, and green you might be used to from `UIColor`. Instead, these are the new style colors that automatically adapt to light and dark mode, which means they will look brighter or darker depending on your system appearance.

#### Is UIKit dead?

No! Apple introduced huge amounts of new functionality even as recently as WWDC23. If Apple are still doing WWDC talks about new features in UIKit, you’re quite safe – there’s no risk of them retiring it by surprise.

However, Apple has also ramped up the narrative that the best way to build apps is with SwiftUI, and also released Swift-only frameworks such as Swift Charts, SwiftData, and WidgetKit, so the writing is on the wall: SwiftUI is the future.

#### Can you mix views from SwiftUI and UIKit?

Yes! You can embed one inside the other and it works great.

:::

### Answering the big question: should you learn SwiftUI, UIKit, or both?

::: details Answering the big question: should you learn SwiftUI, UIKit, or both?

```component VPCard
{
  "title": "SwiftUI by Example – Answering the big question: should you learn SwiftUI, UIKit, or both?",
  "desc": "Answering the big question: should you learn SwiftUI, UIKit, or both?",
  "link": "https://www.hackingwithswift.com/quick-start/swiftui/answering-the-big-question-should-you-learn-swiftui-uikit-or-both",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Of all the SwiftUI questions I’ve been asked, one comes up more than any other: “I’m learning Swift: should I learn SwiftUI or do I need to learn UIKit as well?”

The answer folks seem to want to hear is “forget that old UIKit thing – you should focus on SwiftUI!” However, the simple truth is that the vast majority of people won’t find success with that advice, and it’s worth explaining why in a little detail.

Before I get into detail I want to make one thing clear: SwiftUI is a remarkable user interface framework, and is 100% absolutely going to be the future of app development on Apple’s platforms. However, if you want to work at a large company _today_ – or indeed any point in the next one to two years or so – you almost certainly need some knowledge of UIKit.

OK, with that out of the way, the problems with focusing on SwiftUI while ignoring UIKit come down to three things:

1. Limited API coverage.
2. Limited adoption.
3. Limited support.

Let’s break that down…

#### Limited API coverage

Regardless of whether you want to work for a company or just build hobby apps in your spare time, one drawback of SwiftUI is that it does not currently have the same broad API coverage as UIKit.

For example, if you want to show rich editable text you would use `UITextView` in UIKit, but SwiftUI’s own `TextEditor` will only handle plain strings. Or if you want to embed a web view, that’s as simple as using `WKWebView` in UIKit, but in SwiftUI it’s just not possible.

This isn’t Apple being lazy, and instead seems to be deliberate: rather than releasing wrappers for all their APIs up front then having to make changes later, they are instead taking a much more cautious approach and adding APIs incrementally. This should (I hope!) reduce the number of breaking changes we see in the future, because it gives Apple’s engineers more time to hone the subset of APIs they intend to ship.

A lot of the time you’ll find workarounds, but honestly it’s tiring when you know a particular thing is trivial in UIKit but hard if not impossible in SwiftUI.

As each year goes by I fully expect to see more functionality added to SwiftUI to bring it to parity with UIKit, but right now some key components are still missing.

#### Limited adoption

SwiftUI was only announced at WWDC2019, and is available in iOS 13 devices or later. This immediately means that:

- The majority of apps written to date uses UIKit.
- Any app that needs to support iOS 12 or earlier is just out of luck for SwiftUI. (In practice this is more complicated, because SwiftUI for iOS 13 is missing some major features such as `@StateObject`.)

This means that if you intend to get a job as an iOS developer in the next two years, UIKit experience may be mandatory because that’s what many existing codebases use. No one – not even Apple, I think! – expects everyone in the iOS community to migrate over to SwiftUI at any sort of rapid pace. There’s a lot of code, a lot of time, and a lot of money invested in UIKit apps, and it has a long and happy life ahead of it.

Some folks try to draw parallels between adoption of Swift and adoption of SwiftUI, which I don’t think is helpful. Adoption of Swift was fast because it worked across every one of the frameworks Apple supported (UIKit, SpriteKit, etc), and also already supported iOS n-1, so many companies could switch to it immediately.

Again, I want to reiterate that SwiftUI is absolutely going to be the future of development for Apple’s platforms, but it will take a long time until you can be confident UIKit experience is no longer necessary for work.

In the meantime, SwiftUI is the perfect candidate for wholly new apps, smaller apps, personal apps, prototype apps, and more. And if you’re lucky enough to join a company that uses SwiftUI exclusively, enjoy it!

#### Limited support

UIKit has been around over ten years now, which means a) almost every problem you might face has probably already been faced and solved by others, and b) there are lots of libraries out there that provide extensions and customizations.

While some learners might imagine that senior developers hold vast amounts of UIKit in their head, the simple truth is that we all use Google, Stack Overflow, Hacking with Swift, and more to find solutions to problems. When you’re desperate that might literally be pasting error messages into a website, but regardless of how you get answers it saves a _lot_ of time finding them online.

SwiftUI, simply by virtue of being significantly newer, has significantly fewer solutions available. In fact, it’s common to look for things that no one has tried before, particularly if it’s shortly after WWDC – you’re literally the first person. That can be a lot of fun, but if you have an actual project that you actually want to ship it can also be a frustrating time sink.

#### So… are you saying I shouldn’t learn SwiftUI?

No! SwiftUI is great fun to work with, and you can build marvelous things with it. The whole rest of this book is designed to help you get started with SwiftUI as quickly and efficiently as possible – I wouldn’t have written it if I didn’t think SwiftUI was awesome.

What I’m trying to say is that the existence of SwiftUI hasn’t somehow rendered UIKit obsolete: if you intend to get an iOS development job within the next two years, knowing how to use UIKit will either be a firm requirement or a strong bonus.

So, to answer the question directly: yes, you should get busy learning SwiftUI because it is the future of app development on Apple’s platforms, but at some point you may still need to learn UIKit because those skills will be useful for years to come.

As each year goes by, all three problems listed above will become reduced as SwiftUI grows in strength, adoption, and support, and as SwiftUI grows UIKit will start to shrink. However, for now at least, many people need both.

:::

### How to follow this quick start guide

::: details How to follow this quick start guide

```component VPCard
{
  "title": "SwiftUI by Example – How to follow this quick start guide",
  "desc": "How to follow this quick start guide",
  "link": "https://www.hackingwithswift.com/quick-start/swiftui/how-to-follow-this-quick-start-guide",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

This guide is called SwiftUI by Example, because it focuses particularly on providing as many examples as possible, with each one solving real problems you’ll face every day.

I have literally tried to structure this so that almost every entry starts with “How to…” because this is about giving you hands-on code you can use in your own projects immediately. That also means I’ve tried to get to the point as fast as possible and stay there, so if you’re looking for a longer, slower introduction to SwiftUI I’m afraid this isn’t it.

#### Already got some experience?

If you’ve already grabbed the basics of SwiftUI and just want code that solves your problems, by all means just jump in wherever interests you.

My code examples are specifically written for folks who are following along more or less linearly, so if you’re want to make those changes you may need to do a little light editing to make it fit your code.

#### Just starting out?

If you’re just starting out with SwiftUI you should read this guide in a roughly linear order – just keep reading and clicking Next until you’re done. As far as possible I’ve written the guide so that later chapters build on earlier ones, so a linear approach really is a good idea.

If this is you, you should start by creating a new iOS app using the App template. It doesn’t matter what you call it – it’s just a sandbox where you can try out various code as you progress.

:::

### Migrating from UIKit to SwiftUI

::: details Migrating from UIKit to SwiftUI

```component VPCard
{
  "title": "Migrating from UIKit to SwiftUI",
  "desc": "Migrating from UIKit to SwiftUI",
  "link": "https://www.hackingwithswift.com/quick-start/swiftui/migrating-from-uikit-to-swiftui",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

If you’ve used UIKit before, many of the classes you know and love map pretty much directly to their SwiftUI equivalents just by dropping the `UI` prefix. That doesn’t mean they are the same thing underneath, just that they have the same or similar functionality.

Here’s a list to get you started, with UIKit class names followed by SwiftUI names:

- `UITableView`: `List`
- `UICollectionView`: `LazyVGrid` and `LazyHGrid`
- `UIScrollView`: `ScrollView`
- `UILabel`: `Text`
- `UITextField`: `TextField`
- `UITextField` with `isSecureTextEntry` set to true: `SecureField`
- `UITextView`: `TextEditor` (plain strings only)
- `UISwitch`: `Toggle`
- `UISlider`: `Slider`
- `UIButton`: `Button`
- `UINavigationController`: `NavigationStack` or `NavigationSplitView`
- `UIAlertController` with style `.alert`: `.alert()`
- `UIAlertController` with style `.actionSheet`: `.confirmationDialog()`
- `UIStackView` with horizontal axis: `HStack`
- `UIStackView` with vertical axis: `VStack`
- `UIImageView`: `Image`
- `UISegmentedControl`: `Picker`
- `UIStepper`: `Stepper`
- `UIDatePicker`: `DatePicker`
- `UIProgressView`: `ProgressView` with a value
- `UIActivityIndicatorView`: `ProgressView` without a value
- `MKMapView`: `Map`
- `NSAttributedString`: `AttributedString`.

There are many other components that are exclusive to SwiftUI, such as a stack view that lets us build things by depth rather than horizontally or vertically.

:::

### What’s in the basic template?

::: details What’s in the basic template?

```component VPCard
{
  "title": "What’s in the basic template?",
  "desc": "What’s in the basic template?",
  "link": "https://www.hackingwithswift.com/quick-start/swiftui/whats-in-the-basic-template",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

__Tip__: You might think this chapter is totally skippable, but unless you’re a Swift genius chances are you should read to the end just to be sure.

The basic App template gives you the following:

1. .<FontIcon icon="fas fa-dove"/>`YourProjectName.swift`. This performs an initial set up, then creates and displays your initial view.
2. .<FontIcon icon="fas fa-dove"/>`ContentView.swift`. This is our initial piece of user interface. If this were a UIKit project, this would be the ViewController class that Xcode gave us.
3. .<FontIcon icon="iconfont icon-file"/>`Assets.xcassets`. This is an asset catalog, which stores all the images and colors used in our project.
4. A group called Preview Content, which contains another asset catalog called Preview Assets.
And that’s it – it’s a pleasingly small amount of code and resources, which means we can build on it.

The part we really care about – in fact, here it’s the only part that matters – is <FontIcon icon="fas fa-dove"/>`ContentView.swift`. This is the main piece of functionality for our app, and it’s where we can start trying out various SwiftUI code in just a moment.

First, though: what makes <FontIcon icon="fas fa-dove"/>`ContentView.swift` get shown on the screen?

Well, if you remember I said that <FontIcon icon="fas fa-dove"/>`YourProjectName.swift` is responsible for managing the way your app is shown. Obviously it’s not actually called that – it will be named according to the project name you chose when creating your poject.

Go ahead and open this file now, and you’ll see code like this in there:

```swift
@main
struct YourProjectName: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}
```

That code creates a new `ContentView` instance (that’s the main piece of functionality we’ll be looking at soon), and places it inside a window group so it’s visible onscreen. It’s effectively bootstrapping our app by showing the first instance of `ContentView`, and from there it’s over to us – what do you want to do?

Open <FontIcon icon="fas fa-dove"/>`ContentView.swift` and let’s look at some actual SwiftUI code. You should see code like this:

```swift
import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack {
            Image(systemName: "globe")
                .imageScale(.large)
                .foregroundStyle(.tint)
            Text("Hello, world!")
        }
        .padding()
    }
}

#Preview {
    ContentView()
}
```

That’s not a lot of code, but it does pack in a great deal.

First, notice how `ContentView` is a struct. Developers familiar with UIKit will know that this is _huge_ – we get to benefit from all the immutability and simplicity of values types for our user interface! Folks who _aren’t_ familiar with UIKit… well, just nod and smile – you never knew the pain we used to have.

Second, `ContentView` conforms to the `View` protocol. Everything you want to show in SwiftUI needs to conform to `View`, and really that means only one thing: you need to have a property called `body` that returns some sort of `View`.

Third, the return type of `body` is `some View`. The `some` keyword was introduced in Swift 5.1 and is part of a feature called [<FontIcon icon="iconfont icon-play"/>opaque return types](https://www.youtube.com/watch?v=DvHkeUxiwYY), and in this case what it means is literally “this will return some sort of `View` but SwiftUI doesn’t need to know (or care) what.”

__Important__: Returning `some View` means that the `body` property will return something that conforms to the `View` protocol. You can’t forget to return anything at all – the Swift compiler will refuse to build your code.

Fourth, inside the `body` property there’s a vertical stack of content showing an image and some text.

Fifth, that stack has a `padding()` method call below it. In SwiftUI this actually creates a new view with padding around it, rather than changing the existing stack. As a result, we call these _modifiers_ because they create modified content, as opposed to _methods_. There are also modifiers to make the image scale bigger and change its color.

Finally, below `ContentView` is `#Preview`, which marks special code to display our view an interactive preview of our view inside Xcode. Right now this creates an instance of `ContentView`, but you can customize these if you need to.

:::

### Dedication

::: details Dedication

```component VPCard
{
  "title": "Dedication",
  "desc": "Dedication",
  "link": "https://www.hackingwithswift.com/quick-start/swiftui/dedication",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

Updated for Xcode 15

Inside Apple it took an extraordinary amount of effort to design, build, test, document, and ship SwiftUI. As third-party developers we only really see the end result – when a senior Apple staffer gets on stage at WWDC and shows it off to huge applause, when we download the new Xcode to see a huge amount of new functionality, and when we start our own journey of figuring out how to make best use of these incredible new tools.

But SwiftUI started _long_ before that as a project from inside the watchOS team – about four years before, from what various folks have said.

_Four years._

That’s about 1500 days when Apple’s engineers were working hard to build something they knew would revolutionize the way we worked, and would be the fullest expression of what Swift is capable of for UI development. If you think how much work it took to build SwiftUI as we know it today, imagine how much change it’s seen as Swift itself went from 1.0 through to 5.1!

These engineers weren’t allowed to talk to the public about their work, and even inside Apple only a certain number of people were disclosed on SwiftUI’s existence. In order to make SwiftUI a reality folks from the UIKit team, the Swift team, the Xcode team, the developer publications team, and more, all had to come together in secret to work on our behalf, and even today you won’t find them taking credit for their incredible work.

The simple truth is that SwiftUI wouldn’t have been possible without the extraordinary efforts of many, many people. I wish I could list them here and thank them personally, but the only ones I can be sure of are the people who had “SwiftUI engineer” as their job title during a WWDC session or were people I spoke to in the labs.

So, this book is dedicated to Dave Abrahams, Luca Bernardi, Kevin Cathey, Curt Clifton, Nate Cook, Michael Gorbach, John Harper, Taylor Kelly, Kyle Macomber, Natalia Panferova, Raj Ramamurthy, Matt Ricketson, Jacob Xiao, and all the dozens of other folks who worked so hard to make SwiftUI what it is today. We may never know how many more folks from AppKit, UIKit, WatchKit, Xcode, Swift, developer publications, and beyond helped bring SwiftUI to life, but I hope every one of them feels just blown away by the incredibly positive reactions from our community.

I know WWDC can often be quite the “photo finish” where features land only a day or two before the keynote, but you folks pulled it off and we’re very, very grateful.

:::

---

## Building a complete project

> Learn SwiftUI hands-on with a real app project

```component VPCard
{
  "title": "SwiftUI by Example > Building a complete project",
  "desc": "Building a complete project",
  "link": "01-building-a-complete-project.md",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

---

## Working with static text

> Laying out text neatly

```component VPCard
{
  "title": "SwiftUI by Example > Working with static text",
  "desc": "Working with static text",
  "link": "02-working-with-static-text.md",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

---

## Images, shapes, and media

> Draw icons, circles, gradients, and more

- [How to draw images using Image views][how-to-draw-images-using-image-views]
- [How to adjust the way an image is fitted to its space][how-to-adjust-the-way-an-image-is-fitted-to-its-space]
- [How to tile an image][how-to-tile-an-image]
- [How to render images using `SF Symbols`][how-to-render-images-using-sf-symbols]
- [How to render a gradient][how-to-render-a-gradient]
- [How to use images and other views as a backgrounds][how-to-use-images-and-other-views-as-a-backgrounds]
- [How to display solid shapes][how-to-display-solid-shapes]
- [How to fill and stroke shapes at the same time][how-to-fill-and-stroke-shapes-at-the-same-time]
- [How to draw part of a solid shape using `trim()`][how-to-draw-part-of-a-solid-shape-using-trim]
- [When should you use `ContainerRelativeShape`?][when-should-you-use-containerrelativeshape]
- [How to play movies with `VideoPlayer`][how-to-play-movies-with-videoplayer]
- [How to integrate `SpriteKit` using `SpriteView`][how-to-integrate-spritekit-using-spriteview]
- [How to load a remote image from a URL][how-to-load-a-remote-image-from-a-url]
- [How to get custom colors and transparency with `SF Symbols`][how-to-get-custom-colors-and-transparency-with-sf-symbols]
- [How to dynamically adjust the color of an `SF Symbol`][how-to-dynamically-adjust-the-color-of-an-sf-symbol]
- [How to let users select pictures using `PhotosPicker`][how-to-let-users-select-pictures-using-photospicker]
- [How to let users import videos using `PhotosPicker`][how-to-let-users-import-videos-using-photospicker]

---

## View layout

> Layout sizes, priorities, and spacing

- [How to give a view a custom frame][how-to-give-a-view-a-custom-frame]
- [How to control spacing around individual views using padding][how-to-control-spacing-around-individual-views-using-padding]
- [How to provide relative sizes using `GeometryReader`][how-to-provide-relative-sizes-using-geometryreader]
- [How to place content outside the safe area][how-to-place-content-outside-the-safe-area]
- [How to return different view types][how-to-return-different-view-types]
- [How to create views in a loop using `ForEach`][how-to-create-views-in-a-loop-using-foreach]
- [How to control layout priority using `layoutPriority()`][how-to-control-layout-priority-using-layoutpriority]
- [How to make two views the same width or height][how-to-make-two-views-the-same-width-or-height]
- [How to provide visual structure using foreground styles][how-to-provide-visual-structure-using-foreground-styles]
- [How to inset the safe area with custom content][how-to-inset-the-safe-area-with-custom-content]
- [How to hide the home indicator and other system UI][how-to-hide-the-home-indicator-and-other-system-ui]
- [How to stop system gestures from interfering with your own][how-to-stop-system-gestures-from-interfering-with-your-own]
- [How to dynamically change between `VStack` and `HStack`][how-to-dynamically-change-between-vstack-and-hstack]
- [How to create a custom layout using the Layout protocol][how-to-create-a-custom-layout-using-the-layout-protocol]
- [How to create an adaptive layout with `ViewThatFits`][how-to-create-an-adaptive-layout-with-viewthatfits]

---

## Stacks, grids, scrollviews

> Position views in a structured way

- [How to create stacks using `VStack` and `HStack`][how-to-create-stacks-using-vstack-and-hstack]
- [How to customize stack layouts with alignment and spacing][how-to-customize-stack-layouts-with-alignment-and-spacing]
- [How to force views to one side inside a stack using Spacer][how-to-force-views-to-one-side-inside-a-stack-using-spacer]
- [How to make a fixed size `Spacer`][how-to-make-a-fixed-size-spacer]
- [How to layer views on top of each other using `ZStack`][how-to-layer-views-on-top-of-each-other-using-zstack]
- [How to change the order of view layering using Z index][how-to-change-the-order-of-view-layering-using-z-index]
- [How to create different layouts using size classes][how-to-create-different-layouts-using-size-classes]
- [How to automatically switch between `HStack` and `VStack` based on size class][how-to-automatically-switch-between-hstack-and-vstack-based-on-size-class]
- [How to add horizontal and vertical scrolling using `ScrollView`][how-to-add-horizontal-and-vertical-scrolling-using-scrollview]
- [How to make a scroll view move to a location using `ScrollViewReader`][how-to-make-a-scroll-view-move-to-a-location-using-scrollviewreader]
- [How to create 3D effects like Cover Flow using `ScrollView` and `GeometryReader`][how-to-create-3d-effects-like-cover-flow-using-scrollview-and-geometryreader]
- [How to lazy load views using `LazyVStack` and `LazyHStack`][how-to-lazy-load-views-using-lazyvstack-and-lazyhstack]
- [How to position views in a fixed grid][how-to-position-views-in-a-fixed-grid]
- [How to position views in a grid using `LazyVGrid` and `LazyHGrid`][how-to-position-views-in-a-grid-using-lazyvgrid-and-lazyhgrid]
- [How to dismiss the keyboard when the user scrolls][how-to-dismiss-the-keyboard-when-the-user-scrolls]
- [How to hide the scroll indicators in `ScrollView`, `List`, and more][how-to-hide-the-scroll-indicators-in-scrollview-list-and-more]
- [How to create multi-column lists using Table][how-to-create-multi-column-lists-using-table]

---

## User interface controls

> Respond to interaction and control your program state

- [Working with state][working-with-state]
- [How to create a tappable button][how-to-create-a-tappable-button]
- [How to disable the overlay color for images inside `Button` and `NavigationLink`][how-to-disable-the-overlay-color-for-images-inside-button-and-navigationlink]
- [How to get bordered buttons that stand out][how-to-get-bordered-buttons-that-stand-out]
- [How to group views together with `ControlGroup`][how-to-group-views-together-with-controlgroup]
- [How to read text from a `TextField`][how-to-read-text-from-a-textfield]
- [How to take action when the user submits a `TextField`][how-to-take-action-when-the-user-submits-a-textfield]
- [How to customize the submit button for `TextField`, `SecureField`, and `TextEditor`][how-to-customize-the-submit-button-for-textfield-securefield-and-texteditor]
- [How to add a border to a `TextField`][how-to-add-a-border-to-a-textfield]
- [How to add a placeholder to a `TextField`][how-to-add-a-placeholder-to-a-textfield]
- [How to disable autocorrect in a `TextField`][how-to-disable-autocorrect-in-a-textfield]
- [How to dismiss the keyboard for a `TextField`][how-to-dismiss-the-keyboard-for-a-textfield]
- [How to make a `TextField` or `TextEditor` have default focus][how-to-make-a-textfield-or-texteditor-have-default-focus]
- [How to make a `TextField` expand vertically as the user types][how-to-make-a-textfield-expand-vertically-as-the-user-types]
- [How to format a `TextField` for numbers][how-to-format-a-textfield-for-numbers]
- [How to create secure text fields using `SecureField`][how-to-create-secure-text-fields-using-securefield]
- [How to create a toggle switch][how-to-create-a-toggle-switch]
- [How to create a slider and read values from it][how-to-create-a-slider-and-read-values-from-it]
- [How to create a picker and read values from it][how-to-create-a-picker-and-read-values-from-it]
- [How to create a date picker and read values from it][how-to-create-a-date-picker-and-read-values-from-it]
- [How to create a segmented control and read values from it][how-to-create-a-segmented-control-and-read-values-from-it]
- [How to create a stepper and read values from it][how-to-create-a-stepper-and-read-values-from-it]
- [How to create multi-line editable text with `TextEditor`][how-to-create-multi-line-editable-text-with-texteditor]
- [How to let users select a color with `ColorPicker`][how-to-let-users-select-a-color-with-colorpicker]
- [How to show progress on a task using `ProgressView`][how-to-show-progress-on-a-task-using-progressview]
- [How to show indeterminate progress using `ProgressView`][how-to-show-indeterminate-progress-using-progressview]
- [How to show a `Map` view][how-to-show-a-map-view]
- [How to show annotations in a `Map` view][how-to-show-annotations-in-a-map-view]
- [How to open web links in Safari][how-to-open-web-links-in-safari]
- [How to let the user select multiple dates][how-to-let-the-user-select-multiple-dates]
- [How to hide the label of a `Picker`, `Stepper`, `Toggle`, and more using `labelsHidden()`][how-to-hide-the-label-of-a-picker-stepper-toggle-and-more-using-labelshidden]

---

## Responding to events

> Shortcuts, rotations, and appearance

- [How to detect when your app moves to the background or foreground with `scenePhase`][how-to-detect-when-your-app-moves-to-the-background-or-foreground-with-scenephase]
- [How to respond to view lifecycle events: `onAppear()` and `onDisappear()`][how-to-respond-to-view-lifecycle-events-onappear-and-ondisappear]
- [How to add keyboard shortcuts using `keyboardShortcut()`][how-to-add-keyboard-shortcuts-using-keyboardshortcut]
- [How to control which view is shown when your app launches][how-to-control-which-view-is-shown-when-your-app-launches]
- [How to run code when your app launches][how-to-run-code-when-your-app-launches]
- [How to add an AppDelegate to a SwiftUI app][how-to-add-an-appdelegate-to-a-swiftui-app]
- [How to detect device rotation][how-to-detect-device-rotation]
- [How to add a toolbar to the keyboard][how-to-add-a-toolbar-to-the-keyboard]
- [How to run an asynchronous task when a view is shown][how-to-run-an-asynchronous-task-when-a-view-is-shown]
- [How to let the user paste data into your app][how-to-let-the-user-paste-data-into-your-app]
- [How to let users share content using the system share sheet][how-to-let-users-share-content-using-the-system-share-sheet]
- [How to let users find and replace text][how-to-let-users-find-and-replace-text]
- [How to support drag and drop in SwiftUI][how-to-support-drag-and-drop-in-swiftui]

---

## Taps and gestures

> Swipes, taps, shakes, and other input

- [How to add a gesture recognizer to a view][how-to-add-a-gesture-recognizer-to-a-view]
- [How to read tap and double-tap gestures][how-to-read-tap-and-double-tap-gestures]
- [How to force one gesture to recognize before another using `highPriorityGesture()`][how-to-force-one-gesture-to-recognize-before-another-using-highprioritygesture]
- [How to make two gestures recognize at the same time using `simultaneousGesture()`][how-to-make-two-gestures-recognize-at-the-same-time-using-simultaneousgesture]
- [How to create gesture chains using `sequenced(before:)`][how-to-create-gesture-chains-using-sequencedbefore]
- [How to detect the user hovering over a view][how-to-detect-the-user-hovering-over-a-view]
- [How to detect shake gestures][how-to-detect-shake-gestures]
- [How to control the tappable area of a view using `contentShape()`][how-to-control-the-tappable-area-of-a-view-using-contentshape]
- [How to disable taps for a view using `allowsHitTesting()`][how-to-disable-taps-for-a-view-using-allowshittesting]
- [How to detect the location of a tap inside a view][how-to-detect-the-location-of-a-tap-inside-a-view]

## Advanced state

> Learn how to bind objects and query the environment

- [What’s the difference between @`ObservedObject`, `@State`, and `@EnvironmentObject`?][whats-the-difference-between-observedobject-state-and-environmentobject]
- [How to use `@StateObject` to create and monitor external objects][how-to-use-stateobject-to-create-and-monitor-external-objects]
- [How to use `@ObservedObject` to manage state from external objects][how-to-use-observedobject-to-manage-state-from-external-objects]
- [How to use `@EnvironmentObject` to share data between views][how-to-use-environmentobject-to-share-data-between-views]
- [How to send state updates manually using `objectWillChange`][how-to-send-state-updates-manually-using-objectwillchange]
- [How to create constant bindings][how-to-create-constant-bindings]
- [How to create custom bindings][how-to-create-custom-bindings]
- [How to use a timer with SwiftUI][how-to-use-a-timer-with-swiftui]
- [How to run some code when state changes using `onChange()`][how-to-run-some-code-when-state-changes-using-onchange]
- [How to show different images and other views in light or dark mode][how-to-show-different-images-and-other-views-in-light-or-dark-mode]

---

## Lists

> Create scrolling tables of data

- [Working with lists][working-with-lists]
- [How to create a list of static items][how-to-create-a-list-of-static-items]
- [How to create a list of dynamic items][how-to-create-a-list-of-dynamic-items]
- [How to let users delete rows from a list][how-to-let-users-delete-rows-from-a-list]
- [How to let users move rows in a list][how-to-let-users-move-rows-in-a-list]
- [How to add sections to a list][how-to-add-sections-to-a-list]
- [How to enable editing on a list using `EditButton`][how-to-enable-editing-on-a-list-using-editbutton]
- [How to set the background color of list rows using `listRowBackground()`][how-to-set-the-background-color-of-list-rows-using-listrowbackground]
- [How to create grouped and inset grouped lists][how-to-create-grouped-and-inset-grouped-lists]
- [How to create expanding lists][how-to-create-expanding-lists]
- [How to scroll to a specific row in a list][how-to-scroll-to-a-specific-row-in-a-list]
- [How to allow row selection in a list][how-to-allow-row-selection-in-a-list]
- [How to use implicit stacking][how-to-use-implicit-stacking]
- [How to adjust List row separator visibility and color][how-to-adjust-list-row-separator-visibility-and-color]
- [How to enable pull to refresh][how-to-enable-pull-to-refresh]
- [How to add custom swipe action buttons to a List row][how-to-add-custom-swipe-action-buttons-to-a-list-row]
- [How to add a search bar to filter your data][how-to-add-a-search-bar-to-filter-your-data]
- [How to add search tokens to a search field][how-to-add-search-tokens-to-a-search-field]
- [How to create a `List` or a `ForEach` from a binding][how-to-create-a-list-or-a-foreach-from-a-binding]
- [How to adjust `List` row separator insets][how-to-adjust-list-row-separator-insets]
- [How to change the tint color for individual list rows][how-to-change-the-tint-color-for-individual-list-rows]

---

## Forms

> Get user entry quickly and efficiently

- [Working with forms][working-with-forms]
- [Basic form design][basic-form-design]
- [Breaking forms into sections][breaking-forms-into-sections]
- [Pickers in forms][pickers-in-forms]
- [Enabling and disabling elements in forms][enabling-and-disabling-elements-in-forms]
- [Showing and hiding form rows][showing-and-hiding-form-rows]
- [How to align form text and controls neatly with `LabeledContent`][how-to-align-form-text-and-controls-neatly-with-labeledcontent]

---

## Containers

> Place your views inside a navigation controller and more

- [Working with containers][working-with-containers]
- [How to embed views in a tab bar using `TabView`][how-to-embed-views-in-a-tab-bar-using-tabview]
- [How to create scrolling pages of content using `tabViewStyle()`][how-to-create-scrolling-pages-of-content-using-tabviewstyle]
- [How to group views together][how-to-group-views-together]
- [How to hide and show the status bar][how-to-hide-and-show-the-status-bar]
- [How to hide and reveal content using `DisclosureGroup`][how-to-hide-and-reveal-content-using-disclosuregroup]
- [How to create a toolbar and add buttons to it][how-to-create-a-toolbar-and-add-buttons-to-it]
- [How to let users customize toolbar buttons][how-to-let-users-customize-toolbar-buttons]
- [How to add a badge to `TabView` items and List rows][how-to-add-a-badge-to-tabview-items-and-list-rows]
- [How to group views visually using `GroupBox`][how-to-group-views-visually-using-groupbox]
- [How to hide the tab bar, navigation bar, or other toolbars][how-to-hide-the-tab-bar-navigation-bar-or-other-toolbars]
- [How to customize the background color of navigation bars, tab bars, and toolbars][how-to-customize-the-background-color-of-navigation-bars-tab-bars-and-toolbars]

---

## Navigation

> Direct your user through data in your app

- [Introduction to navigation][introduction-to-navigation]
- [How to embed a view in a navigation view][how-to-embed-a-view-in-a-navigation-view]
- [How to let users edit your navigation title][how-to-let-users-edit-your-navigation-title]
- [How to add bar items to a navigation view][how-to-add-bar-items-to-a-navigation-view]
- [How to push a new view onto a `NavigationStack`][how-to-push-a-new-view-onto-a-navigationstack]
- [How to push a new view when a list row is tapped][how-to-push-a-new-view-when-a-list-row-is-tapped]
- [How to use programmatic navigation in SwiftUI][how-to-use-programmatic-navigation-in-swiftui]
- [How to save and load `NavigationStack` paths using Codable][how-to-save-and-load-navigationstack-paths-using-codable]
- [How to create a two-column or three-column layout with `NavigationSplitView`][how-to-create-a-two-column-or-three-column-layout-with-navigationsplitview]
- [How to hide and show the sidebar programmatically][how-to-hide-and-show-the-sidebar-programmatically]
- [How to customize a view’s width in `NavigationSplitView`][how-to-customize-a-views-width-in-navigationsplitview]
- [How to customize the display mode of `NavigationSplitView`][how-to-customize-the-display-mode-of-navigationsplitview]

---

## Alerts and menus

> Show modal notifications when something happens

- [Working with presentations][working-with-presentations]
- [How to show an alert][how-to-show-an-alert]
- [How to add a `TextField` to an alert][how-to-add-a-textfield-to-an-alert]
- [How to add actions to alert buttons][how-to-add-actions-to-alert-buttons]
- [How to show multiple alerts in a single view][how-to-show-multiple-alerts-in-a-single-view]
- [How to show an action sheet][how-to-show-an-action-sheet]
- [How to show a context menu][how-to-show-a-context-menu]
- [How to recommend another app using `appStoreOverlay()`][how-to-recommend-another-app-using-appstoreoverlay]
- [How to show a menu when a button is pressed][how-to-show-a-menu-when-a-button-is-pressed]
- [How to let users pick options from a menu][how-to-let-users-pick-options-from-a-menu]

---

## Presenting views

> Move your user from one view to another

- [How to present a new view using sheets][how-to-present-a-new-view-using-sheets]
- [How to present multiple sheets][how-to-present-multiple-sheets]
- [How to make a view dismiss itself][how-to-make-a-view-dismiss-itself]
- [How to present a full screen modal view using `fullScreenCover()`][how-to-present-a-full-screen-modal-view-using-fullscreencover]
- [How to show a popover view][how-to-show-a-popover-view]
- [How to prevent a sheet from being dismissed with a swipe][how-to-prevent-a-sheet-from-being-dismissed-with-a-swipe]
- [How to display a bottom sheet][how-to-display-a-bottom-sheet]
- [How to ask the user to review your app][how-to-ask-the-user-to-review-your-app]

---

## Transforming views

> Clip, size, scale, spin, and more

- [How to adjust the position of a view using its offset][how-to-adjust-the-position-of-a-view-using-its-offset]
- [How to color the padding around a view][how-to-color-the-padding-around-a-view]
- [How to stack modifiers to create more advanced effects][how-to-stack-modifiers-to-create-more-advanced-effects]
- [How to draw a border around a view][how-to-draw-a-border-around-a-view]
- [How to draw a border inside a view][how-to-draw-a-border-inside-a-view]
- [How to create a marching ants border effect][how-to-create-a-marching-ants-border-effect]
- [How to draw a shadow around a view][how-to-draw-a-shadow-around-a-view]
- [How to clip a view so only part is visible][how-to-clip-a-view-so-only-part-is-visible]
- [How to rotate a view][how-to-rotate-a-view]
- [How to rotate a view in 3D][how-to-rotate-a-view-in-3d]
- [How to scale a view up or down][how-to-scale-a-view-up-or-down]
- [How to round the corners of a view][how-to-round-the-corners-of-a-view]
- [How to adjust the opacity of a view][how-to-adjust-the-opacity-of-a-view]
- [How to adjust the accent color of a view][how-to-adjust-the-accent-color-of-a-view]
- [How to mask one view with another][how-to-mask-one-view-with-another]
- [How to blur a view][how-to-blur-a-view]
- [How to blend views together][how-to-blend-views-together]
- [How to adjust views by tinting, and desaturating, and more][how-to-adjust-views-by-tinting-and-desaturating-and-more]
- [Customizing `Button` with `ButtonStyle`][customizing-button-with-buttonstyle]
- [Customizing `ProgressView` with `ProgressViewStyle`][customizing-progressview-with-progressviewstyle]
- [Customizing `Toggle` with `ToggleStyle`][customizing-toggle-with-togglestyle]
- [How to change the background color of `List`, `TextEditor`, and more][how-to-change-the-background-color-of-list-texteditor-and-more]

---

## Drawing

> Take control of rendering using custom shapes

- [SwiftUI’s built-in shapes][swiftuis-built-in-shapes]
- [How to draw a custom path][how-to-draw-a-custom-path]
- [How to draw polygons and stars][how-to-draw-polygons-and-stars]
- [How to draw a checkerboard][how-to-draw-a-checkerboard]
- [How to use `UIBezierPath` and `CGPath` in `SwiftUI`][how-to-use-uibezierpath-and-cgpath-in-swiftui]
- [How to convert a `SwiftUI` view to an image][how-to-convert-a-swiftui-view-to-an-image]
- [How to render a `SwiftUI` view to a PDF][how-to-render-a-swiftui-view-to-a-pdf]
- [How to add visual effect blurs][how-to-add-visual-effect-blurs]
- [How to create custom animated drawings with `TimelineView` and Canvas][how-to-create-custom-animated-drawings-with-timelineview-and-canvas]

---

## Animation

> Bring your views to life with movement

- [How to create basic animations][how-to-create-basic-animations]
- [How to create a spring animation][how-to-create-a-spring-animation]
- [How to animate changes in binding values][how-to-animate-changes-in-binding-values]
- [How to create an explicit animation][how-to-create-an-explicit-animation]
- [How to delay an animation][how-to-delay-an-animation]
- [How to start an animation immediately after a view appears][how-to-start-an-animation-immediately-after-a-view-appears]
- [How to apply multiple animations to a view][how-to-apply-multiple-animations-to-a-view]
- [How to synchronize animations from one view to another with `matchedGeometryEffect()`][how-to-synchronize-animations-from-one-view-to-another-with-matchedgeometryeffect]
- [How to add and remove views with a transition][how-to-add-and-remove-views-with-a-transition]
- [How to combine transitions][how-to-combine-transitions]
- [How to create asymmetric transitions][how-to-create-asymmetric-transitions]
- [How to create a custom transition][how-to-create-a-custom-transition]
- [How to animate the size of text][how-to-animate-the-size-of-text]
- [How to override animations with transactions][how-to-override-animations-with-transactions]

---

## Composing views

> Make your UI structure easier to understand

- [How to create and compose custom views][how-to-create-and-compose-custom-views]
- [How to combine text views together][how-to-combine-text-views-together]
- [How to store views as properties][how-to-store-views-as-properties]
- [How to create custom modifiers][how-to-create-custom-modifiers]
- [How to wrap a custom `UIView` for SwiftUI][how-to-wrap-a-custom-uiview-for-swiftui]
- [How to create modifiers for a `UIViewRepresentable` `struct`][how-to-create-modifiers-for-a-uiviewrepresentable-struct]
- [How to insert images into text][how-to-insert-images-into-text]

---

## Cross-platform SwiftUI

> Learn to make your apps look great everywhere

- [Learn once, apply anywhere][learn-once-apply-anywhere]
- [How to get translucent lists on macOS][how-to-get-translucent-lists-on-macos]
- [How to make carousel lists on watchOS][how-to-make-carousel-lists-on-watchos]
- [How to read the Digital Crown on watchOS using `digitalCrownRotation()`][how-to-read-the-digital-crown-on-watchos-using-digitalcrownrotation]
- [How to open a new window][how-to-open-a-new-window]

---

## Data

> Handle data with Core Data integration and more

- [Introduction to using Core Data with SwiftUI][introduction-to-using-core-data-with-swiftui]
- [How to configure Core Data to work with SwiftUI][how-to-configure-core-data-to-work-with-swiftui]
- [How to access a Core Data managed object context from a SwiftUI view][how-to-access-a-core-data-managed-object-context-from-a-swiftui-view]
- [How to create a Core Data fetch request using `@FetchRequest`][how-to-create-a-core-data-fetch-request-using-fetchrequest]
- [How to filter Core Data fetch requests using a predicate][how-to-filter-core-data-fetch-requests-using-a-predicate]
- [How to add Core Data objects from SwiftUI views][how-to-add-core-data-objects-from-swiftui-views]
- [How to delete Core Data objects from SwiftUI views][how-to-delete-core-data-objects-from-swiftui-views]
- [How to limit the number of items in a fetch request][how-to-limit-the-number-of-items-in-a-fetch-request]
- [How to create a document-based app using `FileDocument` and `DocumentGroup`][how-to-create-a-document-based-app-using-filedocument-and-documentgroup]
- [How to export files using `fileExporter()`][how-to-export-files-using-fileexporter]
- [How to continue an `NSUserActivity` in SwiftUI][how-to-continue-an-nsuseractivity-in-swiftui]
- [How to read the user’s location using `LocationButton`][how-to-read-the-users-location-using-locationbutton]

---

## Accessibility

> How to make your apps usable by everyone

- [Introduction to accessibility with SwiftUI][introduction-to-accessibility-with-swiftui]
- [How to use Dynamic Type with a custom font][how-to-use-dynamic-type-with-a-custom-font]
- [How to specify the Dynamic Type sizes a view supports][how-to-specify-the-dynamic-type-sizes-a-view-supports]
- [How to detect the Reduce Motion accessibility setting][how-to-detect-the-reduce-motion-accessibility-setting]
- [How to detect dark mode][how-to-detect-dark-mode]
- [How to use decorative images to reduce screen reader clutter][how-to-use-decorative-images-to-reduce-screen-reader-clutter]
- [How to reduce animations when requested][how-to-reduce-animations-when-requested]
- [How to make `VoiceOver` read characters individually][how-to-make-voiceover-read-characters-individually]

---

## Tooling

> Build better apps with help from Xcode

- [How to make SwiftUI modifiers safer to use with `@warn_unqualified_access`][how-to-make-swiftui-modifiers-safer-to-use-with-warn-unqualified-access]
- [How to preview your layout at different Dynamic Type sizes][how-to-preview-your-layout-at-different-dynamic-type-sizes]
- [How to preview your layout in light and dark mode][how-to-preview-your-layout-in-light-and-dark-mode]
- [How to preview your layout in different devices][how-to-preview-your-layout-in-different-devices]
- [How to preview your layout in a navigation view][how-to-preview-your-layout-in-a-navigation-view]
- [How to preview your layout in portrait or landscape][how-to-preview-your-layout-in-portrait-or-landscape]
- [How to find which data change is causing a SwiftUI view to update][how-to-find-which-data-change-is-causing-a-swiftui-view-to-update]
- [How to use Instruments to profile your SwiftUI code and identify slow layouts][how-to-use-instruments-to-profile-your-swiftui-code-and-identify-slow-layouts]

---

## What now?

> How to continue learning SwiftUI after the basics

- [SwiftUI tips and tricks][swiftui-tips-and-tricks]
- [How to become a SwiftUI expert][how-to-become-a-swiftui-expert]

---

## Appendix A

> How to use each of SwiftUI's property wrappers

- [Understanding property wrappers in Swift and SwiftUI][understanding-property-wrappers-in-swift-and-swiftui]
- [All SwiftUI property wrappers explained and compared][all-swiftui-property-wrappers-explained-and-compared]
- [What is the `@State` property wrapper?][what-is-the-state-property-wrapper]
- [What is the `@StateObject` property wrapper?][what-is-the-stateobject-property-wrapper]
- [What is the `@Published` property wrapper?][what-is-the-published-property-wrapper]
- [What is the `@ObservedObject` property wrapper?][what-is-the-observedobject-property-wrapper]
- [What is the `@EnvironmentObject` property wrapper?][what-is-the-environmentobject-property-wrapper]
- [What is the `@Environment` property wrapper?][what-is-the-environment-property-wrapper]
- [What is the `@Binding` property wrapper?][what-is-the-binding-property-wrapper]
- [What is the `@FocusState` property wrapper?][what-is-the-focusstate-property-wrapper]
- [What is the `@GestureState` property wrapper?][what-is-the-gesturestate-property-wrapper]
- [What is the `@FetchRequest` property wrapper?][what-is-the-fetchrequest-property-wrapper]
- [What is the `@AppStorage` property wrapper?][what-is-the-appstorage-property-wrapper]
- [What is the `@SceneStorage` property wrapper?][what-is-the-scenestorage-property-wrapper]
- [What is the `@ScaledMetric` property wrapper?][what-is-the-scaledmetric-property-wrapper]
- [What is the `@UIApplicationDelegateAdaptor` property wrapper?][what-is-the-uiapplicationdelegateadaptor-property-wrapper]

---

## Appendix B

> How to understand and fix common SwiftUI errors

- [Common SwiftUI errors and how to fix them][common-swiftui-errors-and-how-to-fix-them]
- [How to fix “`Cannot assign to property: 'self' is immutable`”][how-to-fix-cannot-assign-to-property-self-is-immutable]
- [How to fix “`Initializer 'init(_:rowContent:)' requires that ‘SomeType’ conform to 'Identifiable’`”][how-to-fix-initializer-init-rowcontent-requires-that-sometype-conform-to-identifiable]
- [How to fix “`Ambiguous reference to member 'buildBlock()’`”][how-to-fix-ambiguous-reference-to-member-buildblock]
- [How to fix “`Function declares an opaque return type, but has no return statements in its body from which to infer an underlying type`”][how-to-fix-function-declares-an-opaque-return-type-but-has-no-return-statements-in-its-body-from-which-to-infer-an-underlying-type]
- [How to fix “`Property declares an opaque return type, but has no initializer expression from which to infer an underlying type`”][how-to-fix-property-declares-an-opaque-return-type-but-has-no-initializer-expression-from-which-to-infer-an-underlying-type]
- [How to fix “`Modifying state during view update, this will cause undefined behavior`”][how-to-fix-modifying-state-during-view-update-this-will-cause-undefined-behavior]
- [How to fix “`Protocol 'View' can only be used as a generic constraint because it has Self or associated type requirements`”][how-to-fix-protocol-view-can-only-be-used-as-a-generic-constraint-because-it-has-self-or-associated-type-requirements]
- [How to fix “`Fatal error: No ObservableObject of type SomeType found`”][how-to-fix-fatal-error-no-observableobject-of-type-sometype-found]
- [How to fix “`Cannot convert value of type 'String' to expected argument type 'Binding<String>’`”][how-to-fix-cannot-convert-value-of-type-string-to-expected-argument-type-binding-string]
- [How to fix “`Cannot convert value of type 'String' to expected argument type 'Text'`"][how-to-fix-cannot-convert-value-of-type-string-to-expected-argument-type-text]
- [How to fix “`Referencing initializer 'init(wrappedValue:)' on 'ObservedObject' requires that ‘SomeType’ conform to 'ObservableObject'`"][how-to-fix-referencing-initializer-initwrappedvalue-on-observedobject-requires-that-sometype-conform-to-observableobject]
- [How to fix “`Cannot convert value of type '() -> ()' to expected argument type '() -> _’`”][how-to-fix-cannot-convert-value-of-type-to-expected-argument-type]
- [How to fix “`Missing argument for parameter 'content' in call`”][how-to-fix-missing-argument-for-parameter-content-in-call]
- [How to fix images not resizing][how-to-fix-images-not-resizing]
- [How to fix a Form Picker or a `NavigationLink` that isn’t tappable][how-to-fix-a-form-picker-or-a-navigationlink-that-isnt-tappable]

<!-- Images, shapes, and media -->
[how-to-draw-images-using-image-views]: https://hackingwithswift.com/quick-start/swiftui/how-to-draw-images-using-image-views
[how-to-adjust-the-way-an-image-is-fitted-to-its-space]: https://hackingwithswift.com/quick-start/swiftui/how-to-adjust-the-way-an-image-is-fitted-to-its-space
[how-to-tile-an-image]: https://hackingwithswift.com/quick-start/swiftui/how-to-tile-an-image
[how-to-render-images-using-sf-symbols]: https://hackingwithswift.com/quick-start/swiftui/how-to-render-images-using-sf-symbols
[how-to-render-a-gradient]: https://hackingwithswift.com/quick-start/swiftui/how-to-render-a-gradient
[how-to-use-images-and-other-views-as-a-backgrounds]: https://hackingwithswift.com/quick-start/swiftui/how-to-use-images-and-other-views-as-a-backgrounds
[how-to-display-solid-shapes]: https://hackingwithswift.com/quick-start/swiftui/how-to-display-solid-shapes
[how-to-fill-and-stroke-shapes-at-the-same-time]: https://hackingwithswift.com/quick-start/swiftui/how-to-fill-and-stroke-shapes-at-the-same-time
[how-to-draw-part-of-a-solid-shape-using-trim]: https://hackingwithswift.com/quick-start/swiftui/how-to-draw-part-of-a-solid-shape-using-trim
[when-should-you-use-containerrelativeshape]: https://hackingwithswift.com/quick-start/swiftui/when-should-you-use-containerrelativeshape
[how-to-play-movies-with-videoplayer]: https://hackingwithswift.com/quick-start/swiftui/how-to-play-movies-with-videoplayer
[how-to-integrate-spritekit-using-spriteview]: https://hackingwithswift.com/quick-start/swiftui/how-to-integrate-spritekit-using-spriteview
[how-to-load-a-remote-image-from-a-url]: https://hackingwithswift.com/quick-start/swiftui/how-to-load-a-remote-image-from-a-url
[how-to-get-custom-colors-and-transparency-with-sf-symbols]: https://hackingwithswift.com/quick-start/swiftui/how-to-get-custom-colors-and-transparency-with-sf-symbols
[how-to-dynamically-adjust-the-color-of-an-sf-symbol]: https://hackingwithswift.com/quick-start/swiftui/how-to-dynamically-adjust-the-color-of-an-sf-symbol
[how-to-let-users-select-pictures-using-photospicker]: https://hackingwithswift.com/quick-start/swiftui/how-to-let-users-select-pictures-using-photospicker
[how-to-let-users-import-videos-using-photospicker]: https://hackingwithswift.com/quick-start/swiftui/how-to-let-users-import-videos-using-photospicker
<!-- View layout -->
[how-to-give-a-view-a-custom-frame]: https://hackingwithswift.com//quick-start/swiftui/how-to-give-a-view-a-custom-frame
[how-to-control-spacing-around-individual-views-using-padding]: https://hackingwithswift.com//quick-start/swiftui/how-to-control-spacing-around-individual-views-using-padding
[how-to-provide-relative-sizes-using-geometryreader]: https://hackingwithswift.com//quick-start/swiftui/how-to-provide-relative-sizes-using-geometryreader
[how-to-place-content-outside-the-safe-area]: https://hackingwithswift.com//quick-start/swiftui/how-to-place-content-outside-the-safe-area
[how-to-return-different-view-types]: https://hackingwithswift.com//quick-start/swiftui/how-to-return-different-view-types
[how-to-create-views-in-a-loop-using-foreach]: https://hackingwithswift.com//quick-start/swiftui/how-to-create-views-in-a-loop-using-foreach
[how-to-control-layout-priority-using-layoutpriority]: https://hackingwithswift.com//quick-start/swiftui/how-to-control-layout-priority-using-layoutpriority
[how-to-make-two-views-the-same-width-or-height]: https://hackingwithswift.com//quick-start/swiftui/how-to-make-two-views-the-same-width-or-height
[how-to-provide-visual-structure-using-foreground-styles]: https://hackingwithswift.com//quick-start/swiftui/how-to-provide-visual-structure-using-foreground-styles
[how-to-inset-the-safe-area-with-custom-content]: https://hackingwithswift.com//quick-start/swiftui/how-to-inset-the-safe-area-with-custom-content
[how-to-hide-the-home-indicator-and-other-system-ui]: https://hackingwithswift.com//quick-start/swiftui/how-to-hide-the-home-indicator-and-other-system-ui
[how-to-stop-system-gestures-from-interfering-with-your-own]: https://hackingwithswift.com//quick-start/swiftui/how-to-stop-system-gestures-from-interfering-with-your-own
[how-to-dynamically-change-between-vstack-and-hstack]: https://hackingwithswift.com//quick-start/swiftui/how-to-dynamically-change-between-vstack-and-hstack
[how-to-create-a-custom-layout-using-the-layout-protocol]: https://hackingwithswift.com//quick-start/swiftui/how-to-create-a-custom-layout-using-the-layout-protocol
[how-to-create-an-adaptive-layout-with-viewthatfits]: https://hackingwithswift.com//quick-start/swiftui/how-to-create-an-adaptive-layout-with-viewthatfits
<!-- Stacks, grids, scrollviews -->
[how-to-create-stacks-using-vstack-and-hstack]: https://hackingwithswift.com/quick-start/swiftui/how-to-create-stacks-using-vstack-and-hstack
[how-to-customize-stack-layouts-with-alignment-and-spacing]: https://hackingwithswift.com/quick-start/swiftui/how-to-customize-stack-layouts-with-alignment-and-spacing
[how-to-force-views-to-one-side-inside-a-stack-using-spacer]: https://hackingwithswift.com/quick-start/swiftui/how-to-force-views-to-one-side-inside-a-stack-using-spacer
[how-to-make-a-fixed-size-spacer]: https://hackingwithswift.com/quick-start/swiftui/how-to-make-a-fixed-size-spacer
[how-to-layer-views-on-top-of-each-other-using-zstack]: https://hackingwithswift.com/quick-start/swiftui/how-to-layer-views-on-top-of-each-other-using-zstack
[how-to-change-the-order-of-view-layering-using-z-index]: https://hackingwithswift.com/quick-start/swiftui/how-to-change-the-order-of-view-layering-using-z-index
[how-to-create-different-layouts-using-size-classes]: https://hackingwithswift.com/quick-start/swiftui/how-to-create-different-layouts-using-size-classes
[how-to-automatically-switch-between-hstack-and-vstack-based-on-size-class]: https://hackingwithswift.com/quick-start/swiftui/how-to-automatically-switch-between-hstack-and-vstack-based-on-size-class
[how-to-add-horizontal-and-vertical-scrolling-using-scrollview]: https://hackingwithswift.com/quick-start/swiftui/how-to-add-horizontal-and-vertical-scrolling-using-scrollview
[how-to-make-a-scroll-view-move-to-a-location-using-scrollviewreader]: https://hackingwithswift.com/quick-start/swiftui/how-to-make-a-scroll-view-move-to-a-location-using-scrollviewreader
[how-to-create-3d-effects-like-cover-flow-using-scrollview-and-geometryreader]: https://hackingwithswift.com/quick-start/swiftui/how-to-create-3d-effects-like-cover-flow-using-scrollview-and-geometryreader
[how-to-lazy-load-views-using-lazyvstack-and-lazyhstack]: https://hackingwithswift.com/quick-start/swiftui/how-to-lazy-load-views-using-lazyvstack-and-lazyhstack
[how-to-position-views-in-a-fixed-grid]: https://hackingwithswift.com/quick-start/swiftui/how-to-position-views-in-a-fixed-grid
[how-to-position-views-in-a-grid-using-lazyvgrid-and-lazyhgrid]: https://hackingwithswift.com/quick-start/swiftui/how-to-position-views-in-a-grid-using-lazyvgrid-and-lazyhgrid
[how-to-dismiss-the-keyboard-when-the-user-scrolls]: https://hackingwithswift.com/quick-start/swiftui/how-to-dismiss-the-keyboard-when-the-user-scrolls
[how-to-hide-the-scroll-indicators-in-scrollview-list-and-more]: https://hackingwithswift.com/quick-start/swiftui/how-to-hide-the-scroll-indicators-in-scrollview-list-and-more
[how-to-create-multi-column-lists-using-table]: https://hackingwithswift.com/quick-start/swiftui/how-to-create-multi-column-lists-using-table
<!-- User interface controls -->
[working-with-state]: https://hackingwithswift.com/quick-start/swiftui/working-with-state
[how-to-create-a-tappable-button]: https://hackingwithswift.com/quick-start/swiftui/how-to-create-a-tappable-button
[how-to-disable-the-overlay-color-for-images-inside-button-and-navigationlink]: https://hackingwithswift.com/quick-start/swiftui/how-to-disable-the-overlay-color-for-images-inside-button-and-navigationlink
[how-to-get-bordered-buttons-that-stand-out]: https://hackingwithswift.com/quick-start/swiftui/how-to-get-bordered-buttons-that-stand-out
[how-to-group-views-together-with-controlgroup]: https://hackingwithswift.com/quick-start/swiftui/how-to-group-views-together-with-controlgroup
[how-to-read-text-from-a-textfield]: https://hackingwithswift.com/quick-start/swiftui/how-to-read-text-from-a-textfield
[how-to-take-action-when-the-user-submits-a-textfield]: https://hackingwithswift.com/quick-start/swiftui/how-to-take-action-when-the-user-submits-a-textfield
[how-to-customize-the-submit-button-for-textfield-securefield-and-texteditor]: https://hackingwithswift.com/quick-start/swiftui/how-to-customize-the-submit-button-for-textfield-securefield-and-texteditor
[how-to-add-a-border-to-a-textfield]: https://hackingwithswift.com/quick-start/swiftui/how-to-add-a-border-to-a-textfield
[how-to-add-a-placeholder-to-a-textfield]: https://hackingwithswift.com/quick-start/swiftui/how-to-add-a-placeholder-to-a-textfield
[how-to-disable-autocorrect-in-a-textfield]: https://hackingwithswift.com/quick-start/swiftui/how-to-disable-autocorrect-in-a-textfield
[how-to-dismiss-the-keyboard-for-a-textfield]: https://hackingwithswift.com/quick-start/swiftui/how-to-dismiss-the-keyboard-for-a-textfield
[how-to-make-a-textfield-or-texteditor-have-default-focus]: https://hackingwithswift.com/quick-start/swiftui/how-to-make-a-textfield-or-texteditor-have-default-focus
[how-to-make-a-textfield-expand-vertically-as-the-user-types]: https://hackingwithswift.com/quick-start/swiftui/how-to-make-a-textfield-expand-vertically-as-the-user-types
[how-to-format-a-textfield-for-numbers]: https://hackingwithswift.com/quick-start/swiftui/how-to-format-a-textfield-for-numbers
[how-to-create-secure-text-fields-using-securefield]: https://hackingwithswift.com/quick-start/swiftui/how-to-create-secure-text-fields-using-securefield
[how-to-create-a-toggle-switch]: https://hackingwithswift.com/quick-start/swiftui/how-to-create-a-toggle-switch
[how-to-create-a-slider-and-read-values-from-it]: https://hackingwithswift.com/quick-start/swiftui/how-to-create-a-slider-and-read-values-from-it
[how-to-create-a-picker-and-read-values-from-it]: https://hackingwithswift.com/quick-start/swiftui/how-to-create-a-picker-and-read-values-from-it
[how-to-create-a-date-picker-and-read-values-from-it]: https://hackingwithswift.com/quick-start/swiftui/how-to-create-a-date-picker-and-read-values-from-it
[how-to-create-a-segmented-control-and-read-values-from-it]: https://hackingwithswift.com/quick-start/swiftui/how-to-create-a-segmented-control-and-read-values-from-it
[how-to-create-a-stepper-and-read-values-from-it]: https://hackingwithswift.com/quick-start/swiftui/how-to-create-a-stepper-and-read-values-from-it
[how-to-create-multi-line-editable-text-with-texteditor]: https://hackingwithswift.com/quick-start/swiftui/how-to-create-multi-line-editable-text-with-texteditor
[how-to-let-users-select-a-color-with-colorpicker]: https://hackingwithswift.com/quick-start/swiftui/how-to-let-users-select-a-color-with-colorpicker
[how-to-show-progress-on-a-task-using-progressview]: https://hackingwithswift.com/quick-start/swiftui/how-to-show-progress-on-a-task-using-progressview
[how-to-show-indeterminate-progress-using-progressview]: https://hackingwithswift.com/quick-start/swiftui/how-to-show-indeterminate-progress-using-progressview
[how-to-show-a-map-view]: https://hackingwithswift.com/quick-start/swiftui/how-to-show-a-map-view
[how-to-show-annotations-in-a-map-view]: https://hackingwithswift.com/quick-start/swiftui/how-to-show-annotations-in-a-map-view
[how-to-open-web-links-in-safari]: https://hackingwithswift.com/quick-start/swiftui/how-to-open-web-links-in-safari
[how-to-let-the-user-select-multiple-dates]: https://hackingwithswift.com/quick-start/swiftui/how-to-let-the-user-select-multiple-dates
[how-to-hide-the-label-of-a-picker-stepper-toggle-and-more-using-labelshidden]: https://hackingwithswift.com/quick-start/swiftui/how-to-hide-the-label-of-a-picker-stepper-toggle-and-more-using-labelshidden
<!-- Responding to events -->
[how-to-detect-when-your-app-moves-to-the-background-or-foreground-with-scenephase]: https://hackingwithswift.com/quick-start/swiftui/how-to-detect-when-your-app-moves-to-the-background-or-foreground-with-scenephase
[how-to-respond-to-view-lifecycle-events-onappear-and-ondisappear]: https://hackingwithswift.com/quick-start/swiftui/how-to-respond-to-view-lifecycle-events-onappear-and-ondisappear
[how-to-add-keyboard-shortcuts-using-keyboardshortcut]: https://hackingwithswift.com/quick-start/swiftui/how-to-add-keyboard-shortcuts-using-keyboardshortcut
[how-to-control-which-view-is-shown-when-your-app-launches]: https://hackingwithswift.com/quick-start/swiftui/how-to-control-which-view-is-shown-when-your-app-launches
[how-to-run-code-when-your-app-launches]: https://hackingwithswift.com/quick-start/swiftui/how-to-run-code-when-your-app-launches
[how-to-add-an-appdelegate-to-a-swiftui-app]: https://hackingwithswift.com/quick-start/swiftui/how-to-add-an-appdelegate-to-a-swiftui-app
[how-to-detect-device-rotation]: https://hackingwithswift.com/quick-start/swiftui/how-to-detect-device-rotation
[how-to-add-a-toolbar-to-the-keyboard]: https://hackingwithswift.com/quick-start/swiftui/how-to-add-a-toolbar-to-the-keyboard
[how-to-run-an-asynchronous-task-when-a-view-is-shown]: https://hackingwithswift.com/quick-start/swiftui/how-to-run-an-asynchronous-task-when-a-view-is-shown
[how-to-let-the-user-paste-data-into-your-app]: https://hackingwithswift.com/quick-start/swiftui/how-to-let-the-user-paste-data-into-your-app
[how-to-let-users-share-content-using-the-system-share-sheet]: https://hackingwithswift.com/quick-start/swiftui/how-to-let-users-share-content-using-the-system-share-sheet
[how-to-let-users-find-and-replace-text]: https://hackingwithswift.com/quick-start/swiftui/how-to-let-users-find-and-replace-text
[how-to-support-drag-and-drop-in-swiftui]: https://hackingwithswift.com/quick-start/swiftui/how-to-support-drag-and-drop-in-swiftui
<!-- Taps and gestures -->
[how-to-add-a-gesture-recognizer-to-a-view]: https://hackingwithswift.com/quick-start/swiftui/how-to-add-a-gesture-recognizer-to-a-view
[how-to-read-tap-and-double-tap-gestures]: https://hackingwithswift.com/quick-start/swiftui/how-to-read-tap-and-double-tap-gestures
[how-to-force-one-gesture-to-recognize-before-another-using-highprioritygesture]: https://hackingwithswift.com/quick-start/swiftui/
[how-to-make-two-gestures-recognize-at-the-same-time-using-simultaneousgesture]: https://hackingwithswift.com/quick-start/swiftui/how-to-make-two-gestures-recognize-at-the-same-time-using-simultaneousgesture
[how-to-create-gesture-chains-using-sequencedbefore]: https://hackingwithswift.com/quick-start/swiftui/how-to-create-gesture-chains-using-sequencedbefore
[how-to-detect-the-user-hovering-over-a-view]: https://hackingwithswift.com/quick-start/swiftui/how-to-detect-the-user-hovering-over-a-view
[how-to-detect-shake-gestures]: https://hackingwithswift.com/quick-start/swiftui/how-to-detect-shake-gestures
[how-to-control-the-tappable-area-of-a-view-using-contentshape]: https://hackingwithswift.com/quick-start/swiftui/how-to-control-the-tappable-area-of-a-view-using-contentshape
[how-to-disable-taps-for-a-view-using-allowshittesting]: https://hackingwithswift.com/quick-start/swiftui/how-to-disable-taps-for-a-view-using-allowshittesting
[how-to-detect-the-location-of-a-tap-inside-a-view]: https://hackingwithswift.com/quick-start/swiftui/how-to-detect-the-location-of-a-tap-inside-a-view
<!-- Advanced state -->
[whats-the-difference-between-observedobject-state-and-environmentobject]: https://hackingwithswift.com/quick-start/swiftui/whats-the-difference-between-observedobject-state-and-environmentobject
[how-to-use-stateobject-to-create-and-monitor-external-objects]: https://hackingwithswift.com/quick-start/swiftui/how-to-use-stateobject-to-create-and-monitor-external-objects
[how-to-use-observedobject-to-manage-state-from-external-objects]: https://hackingwithswift.com/quick-start/swiftui/how-to-use-observedobject-to-manage-state-from-external-objects
[how-to-use-environmentobject-to-share-data-between-views]: https://hackingwithswift.com/quick-start/swiftui/how-to-use-environmentobject-to-share-data-between-views
[how-to-send-state-updates-manually-using-objectwillchange]: https://hackingwithswift.com/quick-start/swiftui/how-to-send-state-updates-manually-using-objectwillchange
[how-to-create-constant-bindings]: https://hackingwithswift.com/quick-start/swiftui/how-to-create-constant-bindings
[how-to-create-custom-bindings]: https://hackingwithswift.com/quick-start/swiftui/how-to-create-custom-bindings
[how-to-use-a-timer-with-swiftui]: https://hackingwithswift.com/quick-start/swiftui/how-to-use-a-timer-with-swiftui
[how-to-run-some-code-when-state-changes-using-onchange]: https://hackingwithswift.com/quick-start/swiftui/how-to-run-some-code-when-state-changes-using-onchange
[how-to-show-different-images-and-other-views-in-light-or-dark-mode]: https://hackingwithswift.com/quick-start/swiftui/how-to-show-different-images-and-other-views-in-light-or-dark-mode
<!-- Lists -->
[working-with-lists]: https://hackingwithswift.com/quick-start/swiftui/working-with-lists
[how-to-create-a-list-of-static-items]: https://hackingwithswift.com/quick-start/swiftui/how-to-create-a-list-of-static-items
[how-to-create-a-list-of-dynamic-items]: https://hackingwithswift.com/quick-start/swiftui/how-to-create-a-list-of-dynamic-items
[how-to-let-users-delete-rows-from-a-list]: https://hackingwithswift.com/quick-start/swiftui/how-to-let-users-delete-rows-from-a-list
[how-to-let-users-move-rows-in-a-list]: https://hackingwithswift.com/quick-start/swiftui/how-to-let-users-move-rows-in-a-list
[how-to-add-sections-to-a-list]: https://hackingwithswift.com/quick-start/swiftui/how-to-add-sections-to-a-list
[how-to-enable-editing-on-a-list-using-editbutton]: https://hackingwithswift.com/quick-start/swiftui/how-to-enable-editing-on-a-list-using-editbutton
[how-to-set-the-background-color-of-list-rows-using-listrowbackground]: https://hackingwithswift.com/quick-start/swiftui/how-to-set-the-background-color-of-list-rows-using-listrowbackground
[how-to-create-grouped-and-inset-grouped-lists]: https://hackingwithswift.com/quick-start/swiftui/how-to-create-grouped-and-inset-grouped-lists
[how-to-create-expanding-lists]: https://hackingwithswift.com/quick-start/swiftui/how-to-create-expanding-lists
[how-to-scroll-to-a-specific-row-in-a-list]: https://hackingwithswift.com/quick-start/swiftui/how-to-scroll-to-a-specific-row-in-a-list
[how-to-allow-row-selection-in-a-list]: https://hackingwithswift.com/quick-start/swiftui/how-to-allow-row-selection-in-a-list
[how-to-use-implicit-stacking]: https://hackingwithswift.com/quick-start/swiftui/how-to-use-implicit-stacking
[how-to-adjust-list-row-separator-visibility-and-color]: https://hackingwithswift.com/quick-start/swiftui/how-to-adjust-list-row-separator-visibility-and-color
[how-to-enable-pull-to-refresh]: https://hackingwithswift.com/quick-start/swiftui/how-to-enable-pull-to-refresh
[how-to-add-custom-swipe-action-buttons-to-a-list-row]: https://hackingwithswift.com/quick-start/swiftui/how-to-add-custom-swipe-action-buttons-to-a-list-row
[how-to-add-a-search-bar-to-filter-your-data]: https://hackingwithswift.com/quick-start/swiftui/how-to-add-a-search-bar-to-filter-your-data
[how-to-add-search-tokens-to-a-search-field]: https://hackingwithswift.com/quick-start/swiftui/how-to-add-search-tokens-to-a-search-field
[how-to-create-a-list-or-a-foreach-from-a-binding]: https://hackingwithswift.com/quick-start/swiftui/how-to-create-a-list-or-a-foreach-from-a-binding
[how-to-adjust-list-row-separator-insets]: https://hackingwithswift.com/quick-start/swiftui/how-to-adjust-list-row-separator-insets
[how-to-change-the-tint-color-for-individual-list-rows]: https://hackingwithswift.com/quick-start/swiftui/how-to-change-the-tint-color-for-individual-list-rows
<!-- Forms -->
[working-with-forms]: https://hackingwithswift.com/quick-start/swiftui/working-with-forms
[basic-form-design]: https://hackingwithswift.com/quick-start/swiftui/basic-form-design
[breaking-forms-into-sections]: https://hackingwithswift.com/quick-start/swiftui/breaking-forms-into-sections
[pickers-in-forms]: https://hackingwithswift.com/quick-start/swiftui/pickers-in-forms
[enabling-and-disabling-elements-in-forms]: https://hackingwithswift.com/quick-start/swiftui/enabling-and-disabling-elements-in-forms
[showing-and-hiding-form-rows]: https://hackingwithswift.com/quick-start/swiftui/showing-and-hiding-form-rows
[how-to-align-form-text-and-controls-neatly-with-labeledcontent]: https://hackingwithswift.com/quick-start/swiftui/how-to-align-form-text-and-controls-neatly-with-labeledcontent
<!-- Containers -->
[working-with-containers]: https://hackingwithswift.com/quick-start/swiftui/working-with-containers
[how-to-embed-views-in-a-tab-bar-using-tabview]: https://hackingwithswift.com/quick-start/swiftui/how-to-embed-views-in-a-tab-bar-using-tabview
[how-to-create-scrolling-pages-of-content-using-tabviewstyle]: https://hackingwithswift.com/quick-start/swiftui/how-to-create-scrolling-pages-of-content-using-tabviewstyle
[how-to-group-views-together]: https://hackingwithswift.com/quick-start/swiftui/how-to-group-views-together
[how-to-hide-and-show-the-status-bar]: https://hackingwithswift.com/quick-start/swiftui/how-to-hide-and-show-the-status-bar
[how-to-hide-and-reveal-content-using-disclosuregroup]: https://hackingwithswift.com/quick-start/swiftui/how-to-hide-and-reveal-content-using-disclosuregroup
[how-to-create-a-toolbar-and-add-buttons-to-it]: https://hackingwithswift.com/quick-start/swiftui/how-to-create-a-toolbar-and-add-buttons-to-it
[how-to-let-users-customize-toolbar-buttons]: https://hackingwithswift.com/quick-start/swiftui/how-to-let-users-customize-toolbar-buttons
[how-to-add-a-badge-to-tabview-items-and-list-rows]: https://hackingwithswift.com/quick-start/swiftui/how-to-add-a-badge-to-tabview-items-and-list-rows
[how-to-group-views-visually-using-groupbox]: https://hackingwithswift.com/quick-start/swiftui/how-to-group-views-visually-using-groupbox
[how-to-hide-the-tab-bar-navigation-bar-or-other-toolbars]: https://hackingwithswift.com/quick-start/swiftui/how-to-hide-the-tab-bar-navigation-bar-or-other-toolbars
[how-to-customize-the-background-color-of-navigation-bars-tab-bars-and-toolbars]: https://hackingwithswift.com/quick-start/swiftui/how-to-customize-the-background-color-of-navigation-bars-tab-bars-and-toolbars
<!-- Navigation -->
[introduction-to-navigation]: https://hackingwithswift.com/quick-start/swiftui/introduction-to-navigation
[how-to-embed-a-view-in-a-navigation-view]: https://hackingwithswift.com/quick-start/swiftui/how-to-embed-a-view-in-a-navigation-view
[how-to-let-users-edit-your-navigation-title]: https://hackingwithswift.com/quick-start/swiftui/how-to-let-users-edit-your-navigation-title
[how-to-add-bar-items-to-a-navigation-view]: https://hackingwithswift.com/quick-start/swiftui/how-to-add-bar-items-to-a-navigation-view
[how-to-push-a-new-view-onto-a-navigationstack]: https://hackingwithswift.com/quick-start/swiftui/how-to-push-a-new-view-onto-a-navigationstack
[how-to-push-a-new-view-when-a-list-row-is-tapped]: https://hackingwithswift.com/quick-start/swiftui/how-to-push-a-new-view-when-a-list-row-is-tapped
[how-to-use-programmatic-navigation-in-swiftui]: https://hackingwithswift.com/quick-start/swiftui/how-to-use-programmatic-navigation-in-swiftui
[how-to-save-and-load-navigationstack-paths-using-codable]: https://hackingwithswift.com/quick-start/swiftui/how-to-save-and-load-navigationstack-paths-using-codable
[how-to-create-a-two-column-or-three-column-layout-with-navigationsplitview]: https://hackingwithswift.com/quick-start/swiftui/how-to-create-a-two-column-or-three-column-layout-with-navigationsplitview
[how-to-hide-and-show-the-sidebar-programmatically]: https://hackingwithswift.com/quick-start/swiftui/how-to-hide-and-show-the-sidebar-programmatically
[how-to-customize-a-views-width-in-navigationsplitview]: https://hackingwithswift.com/quick-start/swiftui/how-to-customize-a-views-width-in-navigationsplitview
[how-to-customize-the-display-mode-of-navigationsplitview]: https://hackingwithswift.com/quick-start/swiftui/how-to-customize-the-display-mode-of-navigationsplitview
<!-- Alerts and menus -->
[working-with-presentations]: https://hackingwithswift.com/quick-start/swiftui/working-with-presentations
[how-to-show-an-alert]: https://hackingwithswift.com/quick-start/swiftui/how-to-show-an-alert
[how-to-add-a-textfield-to-an-alert]: https://hackingwithswift.com/quick-start/swiftui/how-to-add-a-textfield-to-an-alert
[how-to-add-actions-to-alert-buttons]: https://hackingwithswift.com/quick-start/swiftui/how-to-add-actions-to-alert-buttons
[how-to-show-multiple-alerts-in-a-single-view]: https://hackingwithswift.com/quick-start/swiftui/how-to-show-multiple-alerts-in-a-single-view
[how-to-show-an-action-sheet]: https://hackingwithswift.com/quick-start/swiftui/how-to-show-an-action-sheet
[how-to-show-a-context-menu]: https://hackingwithswift.com/quick-start/swiftui/how-to-show-a-context-menu
[how-to-recommend-another-app-using-appstoreoverlay]: https://hackingwithswift.com/quick-start/swiftui/how-to-recommend-another-app-using-appstoreoverlay
[how-to-show-a-menu-when-a-button-is-pressed]: https://hackingwithswift.com/quick-start/swiftui/how-to-show-a-menu-when-a-button-is-pressed
[how-to-let-users-pick-options-from-a-menu]: https://hackingwithswift.com/quick-start/swiftui/how-to-let-users-pick-options-from-a-menu
<!-- Presenting views -->
[how-to-present-a-new-view-using-sheets]: https://hackingwithswift.com/quick-start/swiftui/how-to-present-a-new-view-using-sheets
[how-to-present-multiple-sheets]: https://hackingwithswift.com/quick-start/swiftui/how-to-present-multiple-sheets
[how-to-make-a-view-dismiss-itself]: https://hackingwithswift.com/quick-start/swiftui/how-to-make-a-view-dismiss-itself
[how-to-present-a-full-screen-modal-view-using-fullscreencover]: https://hackingwithswift.com/quick-start/swiftui/how-to-present-a-full-screen-modal-view-using-fullscreencover
[how-to-show-a-popover-view]: https://hackingwithswift.com/quick-start/swiftui/how-to-show-a-popover-view
[how-to-prevent-a-sheet-from-being-dismissed-with-a-swipe]: https://hackingwithswift.com/quick-start/swiftui/how-to-prevent-a-sheet-from-being-dismissed-with-a-swipe
[how-to-display-a-bottom-sheet]: https://hackingwithswift.com/quick-start/swiftui/how-to-display-a-bottom-sheet
[how-to-ask-the-user-to-review-your-app]: https://hackingwithswift.com/quick-start/swiftui/how-to-ask-the-user-to-review-your-app
<!-- Transforming views -->
[how-to-adjust-the-position-of-a-view-using-its-offset]: https://hackingwithswift.com/quick-start/swiftui/how-to-adjust-the-position-of-a-view-using-its-offset
[how-to-color-the-padding-around-a-view]: https://hackingwithswift.com/quick-start/swiftui/how-to-color-the-padding-around-a-view
[how-to-stack-modifiers-to-create-more-advanced-effects]: https://hackingwithswift.com/quick-start/swiftui/how-to-stack-modifiers-to-create-more-advanced-effects
[how-to-draw-a-border-around-a-view]: https://hackingwithswift.com/quick-start/swiftui/how-to-draw-a-border-around-a-view
[how-to-draw-a-border-inside-a-view]: https://hackingwithswift.com/quick-start/swiftui/how-to-draw-a-border-inside-a-view
[how-to-create-a-marching-ants-border-effect]: https://hackingwithswift.com/quick-start/swiftui/how-to-create-a-marching-ants-border-effect
[how-to-draw-a-shadow-around-a-view]: https://hackingwithswift.com/quick-start/swiftui/how-to-draw-a-shadow-around-a-view
[how-to-clip-a-view-so-only-part-is-visible]: https://hackingwithswift.com/quick-start/swiftui/how-to-clip-a-view-so-only-part-is-visible
[how-to-rotate-a-view]: https://hackingwithswift.com/quick-start/swiftui/how-to-rotate-a-view
[how-to-rotate-a-view-in-3d]: https://hackingwithswift.com/quick-start/swiftui/how-to-rotate-a-view-in-3d
[how-to-scale-a-view-up-or-down]: https://hackingwithswift.com/quick-start/swiftui/how-to-scale-a-view-up-or-down
[how-to-round-the-corners-of-a-view]: https://hackingwithswift.com/quick-start/swiftui/how-to-round-the-corners-of-a-view
[how-to-adjust-the-opacity-of-a-view]: https://hackingwithswift.com/quick-start/swiftui/how-to-adjust-the-opacity-of-a-view
[how-to-adjust-the-accent-color-of-a-view]: https://hackingwithswift.com/quick-start/swiftui/how-to-adjust-the-accent-color-of-a-view
[how-to-mask-one-view-with-another]: https://hackingwithswift.com/quick-start/swiftui/how-to-mask-one-view-with-another
[how-to-blur-a-view]: https://hackingwithswift.com/quick-start/swiftui/how-to-blur-a-view
[how-to-blend-views-together]: https://hackingwithswift.com/quick-start/swiftui/how-to-blend-views-together
[how-to-adjust-views-by-tinting-and-desaturating-and-more]: https://hackingwithswift.com/quick-start/swiftui/how-to-adjust-views-by-tinting-and-desaturating-and-more
[customizing-button-with-buttonstyle]: https://hackingwithswift.com/quick-start/swiftui/customizing-button-with-buttonstyle
[customizing-progressview-with-progressviewstyle]: https://hackingwithswift.com/quick-start/swiftui/customizing-progressview-with-progressviewstyle
[customizing-toggle-with-togglestyle]: https://hackingwithswift.com/quick-start/swiftui/customizing-toggle-with-togglestyle
[how-to-change-the-background-color-of-list-texteditor-and-more]: https://hackingwithswift.com/quick-start/swiftui/how-to-change-the-background-color-of-list-texteditor-and-more
<!-- Drawing -->
[swiftuis-built-in-shapes]: https://hackingwithswift.com/quick-start/swiftui/swiftuis-built-in-shapes
[how-to-draw-a-custom-path]: https://hackingwithswift.com/quick-start/swiftui/how-to-draw-a-custom-path
[how-to-draw-polygons-and-stars]: https://hackingwithswift.com/quick-start/swiftui/how-to-draw-polygons-and-stars
[how-to-draw-a-checkerboard]: https://hackingwithswift.com/quick-start/swiftui/how-to-draw-a-checkerboard
[how-to-use-uibezierpath-and-cgpath-in-swiftui]: https://hackingwithswift.com/quick-start/swiftui/how-to-use-uibezierpath-and-cgpath-in-swiftui
[how-to-convert-a-swiftui-view-to-an-image]: https://hackingwithswift.com/quick-start/swiftui/how-to-convert-a-swiftui-view-to-an-image
[how-to-render-a-swiftui-view-to-a-pdf]: https://hackingwithswift.com/quick-start/swiftui/how-to-render-a-swiftui-view-to-a-pdf
[how-to-add-visual-effect-blurs]: https://hackingwithswift.com/quick-start/swiftui/how-to-add-visual-effect-blurs
[how-to-create-custom-animated-drawings-with-timelineview-and-canvas]: https://hackingwithswift.com/quick-start/swiftui/how-to-create-custom-animated-drawings-with-timelineview-and-canvas
<!-- Animation -->
[how-to-create-basic-animations]: https://hackingwithswift.com/quick-start/swiftuihow-to-create-basic-animations
[how-to-create-a-spring-animation]: https://hackingwithswift.com/quick-start/swiftuihow-to-create-a-spring-animation
[how-to-animate-changes-in-binding-values]: https://hackingwithswift.com/quick-start/swiftuihow-to-animate-changes-in-binding-values
[how-to-create-an-explicit-animation]: https://hackingwithswift.com/quick-start/swiftuihow-to-create-an-explicit-animation
[how-to-delay-an-animation]: https://hackingwithswift.com/quick-start/swiftuihow-to-delay-an-animation
[how-to-start-an-animation-immediately-after-a-view-appears]: https://hackingwithswift.com/quick-start/swiftuihow-to-start-an-animation-immediately-after-a-view-appears
[how-to-apply-multiple-animations-to-a-view]: https://hackingwithswift.com/quick-start/swiftuihow-to-apply-multiple-animations-to-a-view
[how-to-synchronize-animations-from-one-view-to-another-with-matchedgeometryeffect]: https://hackingwithswift.com/quick-start/swiftuihow-to-synchronize-animations-from-one-view-to-another-with-matchedgeometryeffect
[how-to-add-and-remove-views-with-a-transition]: https://hackingwithswift.com/quick-start/swiftuihow-to-add-and-remove-views-with-a-transition
[how-to-combine-transitions]: https://hackingwithswift.com/quick-start/swiftuihow-to-combine-transitions
[how-to-create-asymmetric-transitions]: https://hackingwithswift.com/quick-start/swiftuihow-to-create-asymmetric-transitions
[how-to-create-a-custom-transition]: https://hackingwithswift.com/quick-start/swiftuihow-to-create-a-custom-transition
[how-to-animate-the-size-of-text]: https://hackingwithswift.com/quick-start/swiftuihow-to-animate-the-size-of-text
[how-to-override-animations-with-transactions]: https://hackingwithswift.com/quick-start/swiftuihow-to-override-animations-with-transactions
<!-- Composing views -->
[how-to-create-and-compose-custom-views]: https://hackingwithswift.com/quick-start/swiftui/how-to-create-and-compose-custom-views
[how-to-combine-text-views-together]: https://hackingwithswift.com/quick-start/swiftui/how-to-combine-text-views-together
[how-to-store-views-as-properties]: https://hackingwithswift.com/quick-start/swiftui/how-to-store-views-as-properties
[how-to-create-custom-modifiers]: https://hackingwithswift.com/quick-start/swiftui/how-to-create-custom-modifiers
[how-to-wrap-a-custom-uiview-for-swiftui]: https://hackingwithswift.com/quick-start/swiftui/how-to-wrap-a-custom-uiview-for-swiftui
[how-to-create-modifiers-for-a-uiviewrepresentable-struct]: https://hackingwithswift.com/quick-start/swiftui/how-to-create-modifiers-for-a-uiviewrepresentable-struct
[how-to-insert-images-into-text]: https://hackingwithswift.com/quick-start/swiftui/how-to-insert-images-into-text
<!-- Cross-platform SwiftUI -->
[learn-once-apply-anywhere]: https://hackingwithswift.com/quick-start/swiftui/learn-once-apply-anywhere
[how-to-get-translucent-lists-on-macos]: https://hackingwithswift.com/quick-start/swiftui/how-to-get-translucent-lists-on-macos
[how-to-make-carousel-lists-on-watchos]: https://hackingwithswift.com/quick-start/swiftui/how-to-make-carousel-lists-on-watchos
[how-to-read-the-digital-crown-on-watchos-using-digitalcrownrotation]: https://hackingwithswift.com/quick-start/swiftui/how-to-read-the-digital-crown-on-watchos-using-digitalcrownrotation
[how-to-open-a-new-window]: https://hackingwithswift.com/quick-start/swiftui/how-to-open-a-new-window
<!-- Data -->
[introduction-to-using-core-data-with-swiftui]: https://hackingwithswift.com/quick-start/swiftui/introduction-to-using-core-data-with-swiftui
[how-to-configure-core-data-to-work-with-swiftui]: https://hackingwithswift.com/quick-start/swiftui/how-to-configure-core-data-to-work-with-swiftui
[how-to-access-a-core-data-managed-object-context-from-a-swiftui-view]: https://hackingwithswift.com/quick-start/swiftui/how-to-access-a-core-data-managed-object-context-from-a-swiftui-view
[how-to-create-a-core-data-fetch-request-using-fetchrequest]: https://hackingwithswift.com/quick-start/swiftui/how-to-create-a-core-data-fetch-request-using-fetchrequest
[how-to-filter-core-data-fetch-requests-using-a-predicate]: https://hackingwithswift.com/quick-start/swiftui/how-to-filter-core-data-fetch-requests-using-a-predicate
[how-to-add-core-data-objects-from-swiftui-views]: https://hackingwithswift.com/quick-start/swiftui/how-to-add-core-data-objects-from-swiftui-views
[how-to-delete-core-data-objects-from-swiftui-views]: https://hackingwithswift.com/quick-start/swiftui/how-to-delete-core-data-objects-from-swiftui-views
[how-to-limit-the-number-of-items-in-a-fetch-request]: https://hackingwithswift.com/quick-start/swiftui/how-to-limit-the-number-of-items-in-a-fetch-request
[how-to-create-a-document-based-app-using-filedocument-and-documentgroup]: https://hackingwithswift.com/quick-start/swiftui/how-to-create-a-document-based-app-using-filedocument-and-documentgroup
[how-to-export-files-using-fileexporter]: https://hackingwithswift.com/quick-start/swiftui/how-to-export-files-using-fileexporter
[how-to-continue-an-nsuseractivity-in-swiftui]: https://hackingwithswift.com/quick-start/swiftui/how-to-continue-an-nsuseractivity-in-swiftui
[how-to-read-the-users-location-using-locationbutton]: https://hackingwithswift.com/quick-start/swiftui/how-to-read-the-users-location-using-locationbutton
<!-- Accessibility -->
[introduction-to-accessibility-with-swiftui]: https://hackingwithswift.com/quick-start/swiftui/introduction-to-accessibility-with-swiftui
[how-to-use-dynamic-type-with-a-custom-font]: https://hackingwithswift.com/quick-start/swiftui/how-to-use-dynamic-type-with-a-custom-font
[how-to-specify-the-dynamic-type-sizes-a-view-supports]: https://hackingwithswift.com/quick-start/swiftui/how-to-specify-the-dynamic-type-sizes-a-view-supports
[how-to-detect-the-reduce-motion-accessibility-setting]: https://hackingwithswift.com/quick-start/swiftui/how-to-detect-the-reduce-motion-accessibility-setting
[how-to-detect-dark-mode]: https://hackingwithswift.com/quick-start/swiftui/how-to-detect-dark-mode
[how-to-use-decorative-images-to-reduce-screen-reader-clutter]: https://hackingwithswift.com/quick-start/swiftui/how-to-use-decorative-images-to-reduce-screen-reader-clutter
[how-to-reduce-animations-when-requested]: https://hackingwithswift.com/quick-start/swiftui/how-to-reduce-animations-when-requested
[how-to-make-voiceover-read-characters-individually]: https://hackingwithswift.com/quick-start/swiftui/how-to-make-voiceover-read-characters-individually
<!-- Tooling -->
[how-to-make-swiftui-modifiers-safer-to-use-with-warn-unqualified-access]: https://hackingwithswift.com/quick-start/swiftuihow-to-make-swiftui-modifiers-safer-to-use-with-warn-unqualified-access
[how-to-preview-your-layout-at-different-dynamic-type-sizes]: https://hackingwithswift.com/quick-start/swiftuihow-to-preview-your-layout-at-different-dynamic-type-sizes
[how-to-preview-your-layout-in-light-and-dark-mode]: https://hackingwithswift.com/quick-start/swiftuihow-to-preview-your-layout-in-light-and-dark-mode
[how-to-preview-your-layout-in-different-devices]: https://hackingwithswift.com/quick-start/swiftuihow-to-preview-your-layout-in-different-devices
[how-to-preview-your-layout-in-a-navigation-view]: https://hackingwithswift.com/quick-start/swiftuihow-to-preview-your-layout-in-a-navigation-view
[how-to-preview-your-layout-in-portrait-or-landscape]: https://hackingwithswift.com/quick-start/swiftuihow-to-preview-your-layout-in-portrait-or-landscape
[how-to-find-which-data-change-is-causing-a-swiftui-view-to-update]: https://hackingwithswift.com/quick-start/swiftuihow-to-find-which-data-change-is-causing-a-swiftui-view-to-update
[how-to-use-instruments-to-profile-your-swiftui-code-and-identify-slow-layouts]: https://hackingwithswift.com/quick-start/swiftuihow-to-use-instruments-to-profile-your-swiftui-code-and-identify-slow-layouts
<!-- What now? -->
[swiftui-tips-and-tricks]: https://hackingwithswift.com/quick-start/swiftui/swiftui-tips-and-tricks
[how-to-become-a-swiftui-expert]: https://hackingwithswift.com/quick-start/swiftui/how-to-become-a-swiftui-expert
<!-- Appendix A -->
[understanding-property-wrappers-in-swift-and-swiftui]: https://hackingwithswift.com/quick-start/swiftui/understanding-property-wrappers-in-swift-and-swiftui
[all-swiftui-property-wrappers-explained-and-compared]: https://hackingwithswift.com/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared
[what-is-the-state-property-wrapper]: https://hackingwithswift.com/quick-start/swiftui/what-is-the-state-property-wrapper
[what-is-the-stateobject-property-wrapper]: https://hackingwithswift.com/quick-start/swiftui/what-is-the-stateobject-property-wrapper
[what-is-the-published-property-wrapper]: https://hackingwithswift.com/quick-start/swiftui/what-is-the-published-property-wrapper
[what-is-the-observedobject-property-wrapper]: https://hackingwithswift.com/quick-start/swiftui/what-is-the-observedobject-property-wrapper
[what-is-the-environmentobject-property-wrapper]: https://hackingwithswift.com/quick-start/swiftui/what-is-the-environmentobject-property-wrapper
[what-is-the-environment-property-wrapper]: https://hackingwithswift.com/quick-start/swiftui/what-is-the-environment-property-wrapper
[what-is-the-binding-property-wrapper]: https://hackingwithswift.com/quick-start/swiftui/what-is-the-binding-property-wrapper
[what-is-the-focusstate-property-wrapper]: https://hackingwithswift.com/quick-start/swiftui/what-is-the-focusstate-property-wrapper
[what-is-the-gesturestate-property-wrapper]: https://hackingwithswift.com/quick-start/swiftui/what-is-the-gesturestate-property-wrapper
[what-is-the-fetchrequest-property-wrapper]: https://hackingwithswift.com/quick-start/swiftui/what-is-the-fetchrequest-property-wrapper
[what-is-the-appstorage-property-wrapper]: https://hackingwithswift.com/quick-start/swiftui/what-is-the-appstorage-property-wrapper
[what-is-the-scenestorage-property-wrapper]: https://hackingwithswift.com/quick-start/swiftui/what-is-the-scenestorage-property-wrapper
[what-is-the-scaledmetric-property-wrapper]: https://hackingwithswift.com/quick-start/swiftui/what-is-the-scaledmetric-property-wrapper
[what-is-the-uiapplicationdelegateadaptor-property-wrapper]: https://hackingwithswift.com/quick-start/swiftui/what-is-the-uiapplicationdelegateadaptor-property-wrapper
<!-- Appendix B -->
[common-swiftui-errors-and-how-to-fix-them]: https://hackingwithswift.com/quick-start/swiftui/common-swiftui-errors-and-how-to-fix-them
[how-to-fix-cannot-assign-to-property-self-is-immutable]: https://hackingwithswift.com/quick-start/swiftui/how-to-fix-cannot-assign-to-property-self-is-immutable
[how-to-fix-initializer-init-rowcontent-requires-that-sometype-conform-to-identifiable]: https://hackingwithswift.com/quick-start/swiftui/how-to-fix-initializer-init-rowcontent-requires-that-sometype-conform-to-identifiable
[how-to-fix-ambiguous-reference-to-member-buildblock]: https://hackingwithswift.com/quick-start/swiftui/how-to-fix-ambiguous-reference-to-member-buildblock
[how-to-fix-function-declares-an-opaque-return-type-but-has-no-return-statements-in-its-body-from-which-to-infer-an-underlying-type]: https://hackingwithswift.com/quick-start/swiftui/how-to-fix-function-declares-an-opaque-return-type-but-has-no-return-statements-in-its-body-from-which-to-infer-an-underlying-type
[how-to-fix-property-declares-an-opaque-return-type-but-has-no-initializer-expression-from-which-to-infer-an-underlying-type]: https://hackingwithswift.com/quick-start/swiftui/how-to-fix-property-declares-an-opaque-return-type-but-has-no-initializer-expression-from-which-to-infer-an-underlying-type
[how-to-fix-modifying-state-during-view-update-this-will-cause-undefined-behavior]: https://hackingwithswift.com/quick-start/swiftui/how-to-fix-modifying-state-during-view-update-this-will-cause-undefined-behavior
[how-to-fix-protocol-view-can-only-be-used-as-a-generic-constraint-because-it-has-self-or-associated-type-requirements]: https://hackingwithswift.com/quick-start/swiftui/how-to-fix-protocol-view-can-only-be-used-as-a-generic-constraint-because-it-has-self-or-associated-type-requirements
[how-to-fix-fatal-error-no-observableobject-of-type-sometype-found]: https://hackingwithswift.com/quick-start/swiftui/how-to-fix-fatal-error-no-observableobject-of-type-sometype-found
[how-to-fix-cannot-convert-value-of-type-string-to-expected-argument-type-binding-string]: https://hackingwithswift.com/quick-start/swiftui/how-to-fix-cannot-convert-value-of-type-string-to-expected-argument-type-binding-string
[how-to-fix-cannot-convert-value-of-type-string-to-expected-argument-type-text]: https://hackingwithswift.com/quick-start/swiftui/how-to-fix-cannot-convert-value-of-type-string-to-expected-argument-type-text
[how-to-fix-referencing-initializer-initwrappedvalue-on-observedobject-requires-that-sometype-conform-to-observableobject]: https://hackingwithswift.com/quick-start/swiftui/how-to-fix-referencing-initializer-initwrappedvalue-on-observedobject-requires-that-sometype-conform-to-observableobject
[how-to-fix-cannot-convert-value-of-type-to-expected-argument-type]: https://hackingwithswift.com/quick-start/swiftui/how-to-fix-cannot-convert-value-of-type-to-expected-argument-type
[how-to-fix-missing-argument-for-parameter-content-in-call]: https://hackingwithswift.com/quick-start/swiftui/how-to-fix-missing-argument-for-parameter-content-in-call
[how-to-fix-images-not-resizing]: https://hackingwithswift.com/quick-start/swiftui/how-to-fix-images-not-resizing
[how-to-fix-a-form-picker-or-a-navigationlink-that-isnt-tappable]: https://hackingwithswift.com/quick-start/swiftui/how-to-fix-a-form-picker-or-a-navigationlink-that-isnt-tappable