---
lang: ko-KR
title: Wrap up - our SwiftUI project is complete
description: SwiftUI by Example > Wrap up - our SwiftUI project is complete
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
      content: SwiftUI by Example > Wrap up - our SwiftUI project is complete
    - property: og:description
      content: Wrap up - our SwiftUI project is complete
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/swift/swiftui-by-example/01-building-a-complete-project/two-way-bindings-in-swiftui.html
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

```component VPCard
{
  "title": "SwiftUI by Example > Wrap up: our SwiftUI project is complete",
  "desc": "Wrap up: our SwiftUI project is complete",
  "link": "https://hackingwithswift.com/quick-start/swiftui/wrap-up-our-swiftui-project-is-complete",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

<VidStack src="youtube/ki-vvd5ulDw" />

I’m not going to claim this was an easy project, particularly because SwiftUI forces us to think in such a different way from UIKit. Not only do we have the declarative, reactive approach to logic, but we also have `@State`, environment objects, two-way bindings, and more to deal with – it’s a combination of powerful new Swift language features in tandem with a whole new UI framework.

In this project I’ve tried to expose you to a number of different things all at once, including lists, stacks, forms, navigation, alerts, and more. But even though we’ve only built a simple app, I hope you can appreciate how powerful SwiftUI is, and how it makes it easy to build real-world projects quickly.

If you’ve enjoyed this brief exposure to SwiftUI and want to learn more, I have a massive, free course to teach you all about it called the 100 Days of SwiftUI. You can find that [here](/swift/100-days-of-swiftui/README.md)

And if you’d like to see my completed version of this project, you can find it here on GitHub: [<FontIcon icon="iconfont icon-github"/>`twostraws/iDine`](https://github.com/twostraws/iDine).

---

## Challenges

One of the best ways to learn is to write your own code as often as possible, so here are three ways you should try your new knowledge to make sure you fully understand what’s going on:

1. Customize the “Order This” button with a custom font, background, and more.
2. Add “Pickup time” to `CheckoutView`, with the options “Now”, “Tonight”, and “Tomorrow Morning”.
3. Add a Favorite navigation bar item to `ItemDetail` and a Favorites tab showing them all.

---

<TagLinsk />