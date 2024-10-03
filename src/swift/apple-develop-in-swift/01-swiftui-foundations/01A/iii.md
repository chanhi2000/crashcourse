---
lang: ko-KR
title: iii. Wrap-up - Explore Xcode
description: Apple - Develop in Swift > iii. Wrap-up - Explore Xcode
category:
  - Swift
tag: 
  - crashcourse
  - apple
  - swift
  - xcode
head:
  - - meta:
    - property: og:title
      content: Apple - Develop in Swift > iii. Wrap-up - Explore Xcode
    - property: og:description
      content: iii. Wrap-up - Explore Xcode
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/swift/apple-develop-in-swift/01-swiftui-foundations/01A/iii.html
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

```component VPCard
{
  "title": "Wrap-up: Explore Xcode — Develop in Swift Tutorials | Apple Developer Documentation",
  "desc": "Reflect on the concepts you’ve learned and get ideas for ways to practice using text and modifiers.",
  "link": "https://developer.apple.com/tutorials/develop-in-swift/explore-xcode-conclusion",
  "logo": "https://docs-assets.developer.apple.com/published/43ffc40083a3528751e07e7bc7e70107/1.1chapter.png",
  "background": "rgba(18,18,18,0.2)"
}
```

> Reflect on the concepts you’ve learned and get ideas for ways to practice using text and modifiers.

---

## Reflect on the concepts

SwiftUI contains the components you use to build the interface of an app. Views and modifiers are the foundation of SwiftUI. You can use them to make the most complex, powerful, and beautiful app you can imagine.

### Topics and skills covered

- Creating a new project in Xcode
- The structure of Swift code, including keywords, braces, parentheses, and dot notation
- The Xcode Library
- Writing code using code completion
- Text views and the modifiers that change their appearance
- Ordering modifiers to achieve a desired layout

---

## Continue practicing

### Extend your app

1. Add more messages to the conversation.
2. Tinker with the color schemes of your message bubbles and their text, using code completion to explore all the built-in named `Color`s.
3. Add shadows to the bubbles using the [`.shadow`](https://developer.apple.com/documentation/swiftui/view/shadow(color:radius:x:y:)) modifier.
4. Modify the `VStack` by adding an argument to change the default spacing between its elements, like this: `VStack(spacing: 5)`.

### Challenge yourself

Present yourself. Start a new project called MyselfInSixWords. Use `Text` views to display six words that describe you. Give each word some padding and a different background color. For an extra challenge, try displaying the words horizontally and vertically by nesting `HStack` views inside the `VStack`.

### Learn more

Check out the [<FontIcon icon="fas fa-globe"/>Exploring the structure of a SwiftUI](https://developer.apple.com/tutorials/swiftui-concepts/exploring-the-structure-of-a-swiftui-app) app tutorial to explore the structure of a SwiftUI app.

Watch [<FontIcon icon="fas fa-play"/>Design with SwiftUI](https://developer.apple.com/videos/play/wwdc2023/10115) to discover how SwiftUI can help you quickly iterate and explore design ideas.

---

## What’s next?

Every Xcode project comes with one view, `ContentView`. In the next tutorial, you’ll use a structure to create your own [<FontIcon icon="fas fa-globe"/>custom view](https://developer.apple.com/documentation/swiftui/declaring-a-custom-view).

---
