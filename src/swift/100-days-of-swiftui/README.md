---
lang: ko-KR
title: 100 Days of SwiftUI 
description: 100 Days of SwiftUI
icon: fa-brands fa-swift
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
      content: 100 Days of SwiftUI
    - property: og:description
      content: 100 Days of SwiftUI
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/swift/100-days-of-swiftui/
---

# {{ $frontmatter.title }} 관련

[[toc]]

<VidStack src="youtube/AWZzEGwkenQ" />

---

```component VPCard
{
  "title": "HACKING WITH SWIFT",
  "desc": "100 Days of SwiftUI",
  "link": "https://www.hackingwithswift.com/100/swiftui",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

---

## How it works

Welcome to the 100 Days of SwiftUI! This is a free collection of videos, tutorials, tests, and more, all drawn from around my work here on Hacking with Swift, and all designed to help you learn SwiftUI effectively.

It’s aimed squarely at beginners who want to learn to build real iOS apps, but struggle to find a good, free course that can help them achieve their goals. If that’s you, welcome – I hope you’re ready to show the iOS world what you’re made of!

If you’re looking for [my original 100 Days of Swift, click here](/swift/100-days-of-swift/README.md) – 100 Days of SwiftUI and 100 Days of Swift both teach you to build apps with Swift, but this one focuses on SwiftUI whereas the other teaches UIKit, SpriteKit, and more. If you’re not sure which to choose, stay here with SwiftUI.

__PS: If you have questions, [ask me][ask-me] – I’m here to help!__

### Rules

If you want to make a success of this course, there are only two rules:

1. Every day you spend one hour reading or watching SwiftUI tutorials, or writing SwiftUI code.
2. Every day you post about your progress to the social media site of your choosing. Tell people!

I’ll be providing all the material you need to follow along, so all you need to do is show up ready to learn. I’ve even provided a “Tweet” button at the end of every day, which composes a tweet for you saying you completed the day, and includes the hashtag to help others find you, a celebratory graphic, and a link for others to find out more – use it!

I’ve tried to make sure it takes less than one hour to complete each day, but there is a little natural variation. For example, day 4 is a little shorter because it has less ground to cover, and day 13 is a little longer because it has a few complex topics inside.

### Tips

I’ve met so many who have tried and failed to learn Swift, often multiple times, and if you’re here there’s a good chance you’ve already had a few false starts already.

Not this time. This time you’re going to learn it for real, and in just 100 days you’ll have built many full apps that you can be proud of.

You’ve already read the two rules of these 100 days, but to maximize your chance of rocking this course I have a few tips:

1. __It’s a marathon, not a sprint.__ Don’t charge ahead thinking you’re “learning faster”, because there’s a high chance you’ll get lost. Take your time!
2. __Don’t fall prey to shiny object syndrome.__ The lure of spending $100 on another course is high, I know, but you don’t learn anything by buying books. Your best chance of success is sticking with the 100 days shown here and really make it work, so if you’re already thinking “I can do this course at the same time as Other SwiftUI Course” you’re just setting yourself up to fail.
3. __Don’t lone wolf it.__ You aren’t learning by yourself – I’m here to help as are many others. If you have questions, [tweet me at @twostraws][ask-me] and I’ll do my best to help!
4. __Use the consolidation days.__ These are spaced throughout the 100 days to give you time to review what you’ve learned and make it really sink in. Use them to go back over days you weren’t sure about, complete any homework you missed, or just do some free coding.
5. I have [a glossary of common Swift terms][glossary] that you should bookmark for easy reference.
6. If you get stuck with some SwiftUI code, you should refer to my free online book [SwiftUI by Example][swiftui-by-example] – it has over 600 pages of sample code and solutions for SwiftUI.
7. [Download my Unwrap app from the App Store.](https://itunes.apple.com/app/id1440611372) It works on iPhone and iPad, contains alternative tutorials for the initial part of this course, and is free with no in-app purchases.

---

## The Course

### Preparation

This introductory day prepares you for the course, explains core concepts, and helps you avoid the most common mistakes faced by other learners.

::: details Day 0 – tips and advice before you start.

```component VPCard
{
  "title": "Hacking with SwiftUI - Day 0",
  "desc": "Before you start",
  "link": "https://www.hackingwithswift.com/100/swiftui/0",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

You have 100 days of learning ahead of you, and along the way you’re going to learn a heck of a lot about Swift, SwiftUI, and iOS app development.

Chances are you have a lot of questions, and that’s perfectly normal – questions are how we learn and grow. Voltaire once said, “judge someone by their questions, not by their answers,” and I hope that no matter how much you learn and how experienced you get, you never get tired of asking questions.

Today I have one article you should follow that I hope will answer many of your questions. It’s available as both text and as a video, so you can use whichever you prefer.

The content of both the article and video are identical: both are packed with tips on how to learn effectively, _what_ to learn, what common mistakes learners encounter, and much more, and regardless of which you choose they form the single best way to prepare yourself for this course.

Here’s the article link: [How to become an iOS developer](https://www.hackingwithswift.com/articles/230/how-to-become-an-ios-developer).

And here’s the video:

<VidStack src="youtube/HNXzcAwNqMc" />

Again, it’s available as both an article and a video, and the content is identical so you really can use whichever works best for you.

__While you’re reading the article or watching the video, now would be a great time to download Xcode from the Mac App Store by [clicking here](https://apps.apple.com/gb/app/xcode/id497799835?mt=12).__

:::

### Days 1-14: Introduction to Swift

The first 14 days provide a gentle warm up for your SwiftUI learning as we cover the fundamentals of the Swift programming language. You’ll work through a selection of tutorials every day, and there is some optional extra reading afterwards if you’d like to dig deeper.

Regardless of whether or not you go over the optional extra reading, you’ll find lots of short short tests – I recommend you take them to really solidify what you’ve learned.

- [Day 1 – variables, constants, strings, and numbers](01.md)
- [Day 2 – Booleans, string interpolation, and checkpoint 1](02.md)
- [Day 3 – Arrays, dictionaries, sets, and enums](03.md)
- [Day 4 – type annotations and checkpoint 2](04.md)
- [Day 5 – if, switch, and the ternary operator](05.md)
- [Day 6 – loops, summary, and checkpoint 3](06.md)
- [Day 7 – functions, parameters, and return values](07.md)
- [Day 8 – default values, throwing functions, and checkpoint 4](08.md)
- [Day 9 – closures, passing functions into functions, and checkpoint 5](09.md)
- [Day 10 – structs, computed properties, and property observers](10.md)
- [Day 11 – access control, static properties and methods, and checkpoint 6](11.md)
- [Day 12 – classes, inheritance, and checkpoint 7](12.md)
- [Day 13 – protocols, extensions, and checkpoint 8](13.md)
- [Day 14 – optionals, nil coalescing, and checkpoint 9](14.md)

### Day 15: Consolidation I

You just learned a lot about Swift in only 14 days, so before we continue it's important you reflect on what you've learned.

- [Day 15 – Swift review](15.md)

### Days 16-24: Starting SwiftUI

Now that you’ve mastered the basics of Swift, in these days you’ll start building real SwiftUI apps using what you learned.

- [Day 16 – Project 1, part one](16.md)
- [Day 17 – Project 1, part two](17.md)
- [Day 18 – Project 1, part three](18.md)
- [Day 19 – Challenge day](19.md)
- [Day 20 – Project 2, part one](20.md)
- [Day 21 – Project 2, part two](21.md)
- [Day 22 – Project 2, part three](22.md)
- [Day 23 – Project 3, part one](23.md)
- [Day 24 – Project 3, part two](24.md)

### Day 25: Consolidation II

In the last few days we covered some of the fundamentals of iOS development, and before we move on to the next set of projects it’s important to take a step back and review what you’ve learned.

- [Day 25 – Milestone: Projects 1-3](25.md)

### Days 26-34: Expanding your skills

In these next three projects we’re going to develop your SwiftUI skills in new directions, while also giving you chance to practice the fundamentals.

- [Day 26 – Project 4, part one](26.md)
- [Day 27 – Project 4, part two](27.md)
- [Day 28 – Project 4, part three](28.md)
- [Day 29 – Project 5, part one](29.md)
- [Day 30 – Project 5, part two](30.md)
- [Day 31 – Project 5, part three](31.md)
- [Day 32 – Project 6, part one](32.md)
- [Day 33 – Project 6, part two](33.md)
- [Day 34 – Project 6, part three](34.md)

### Day 35: Consolidation III

Now that your SwiftUI skills are starting to solidify, it’s time to review all the new things we’ve covered and get busy with another project all of your own.

- [Day 35 – Milestone: Projects 4-6](35.md)
 

### Days 36-46: Scaling up to bigger apps

Your core SwiftUI skills are strong, so it’s time to push past the basics and start building bigger apps.

- [Day 36 – Project 7, part one](36.md)
- [Day 37 – Project 7, part two](37.md)
- [Day 38 – Project 7, part three](38.md)
- [Day 39 – Project 8, part one](39.md)
- [Day 40 – Project 8, part two](40.md)
- [Day 41 – Project 8, part three](41.md)
- [Day 42 – Project 8, part four](42.md)
- [Day 43 – Project 9, part one](43.md)
- [Day 44 – Project 9, part two](44.md)
- [Day 45 – Project 9, part three](45.md)
- [Day 46 – Project 9, part four](46.md)

### Days 47-48: Consolidation IV

You’ve tackled some heavyweight skills now, so before we move on it’s time to review what has been covered, go into detail on a handful of topics, and face a fresh challenge.

- [Day 47 – Milestone: Projects 7-9](47.md)
- [Day 48 – Expanding your horizons](48.md)

### Days 49-59: Focus on data

In these projects we’re going to start looking more carefully at how we can send, retrieve, and store data in our SwiftUI apps.

- [Day 49 – Project 10, part one](49.md)
- [Day 50 – Project 10, part two](50.md)
- [Day 51 – Project 10, part three](51.md)
- [Day 52 – Project 10, part four](52.md)
- [Day 53 – Project 11, part one](53.md)
- [Day 54 – Project 11, part two](54.md)
- [Day 55 – Project 11, part three](55.md)
- [Day 56 – Project 11, part four](56.md)
- [Day 57 – Project 12, part one](57.md)
- [Day 58 – Project 12, part two](58.md)
- [Day 59 – Project 12, part three](59.md)

### Days 60-61: Consolidation V

You’ve learned about data, data, and some more data, so it’s time to pause and reflect on what was covered before tackling another new challenge.

- [Day 60 – Milestone: Projects 10-12](60.md)
- [Day 61 – Time for Core Data](61.md)

### Days 62-76: Views and view controllers

In these projects the difficulty starts to ramp up as we look at how you integrate code from frameworks outside of SwiftUI, including UIKit and MapKit.

- [Day 62 – Project 13, part one](62.md)
- [Day 63 – Project 13, part two](63.md)
- [Day 64 – Project 13, part three](64.md)
- [Day 65 – Project 13, part four](65.md)
- [Day 66 – Project 13, part five](66.md)
- [Day 67 – Project 13, part six](67.md)
- [Day 68 – Project 14, part one](68.md)
- [Day 69 – Project 14, part two](69.md)
- [Day 70 – Project 14, part three](70.md)
- [Day 71 – Project 14, part four](71.md)
- [Day 72 – Project 14, part five](72.md)
- [Day 73 – Project 14, part six](73.md)
- [Day 74 – Project 15, part one](74.md)
- [Day 75 – Project 15, part two](75.md)
- [Day 76 – Project 15, part three](76.md)

### Days 77-78: Consolidation VI

You’ve had a difficult couple of projects as we tackled various parts of UIKit and SwiftUI integration, so let’s pause and review what was learned.

- [Day 77 – Milestone: Projects 13-15](77.md)
- [Day 78 – Time for MapKit](78.md)

### Days 79-94: Controlling UI flow

In these projects we build our biggest apps yet, while also exploring more ways to let the user interact with our apps: tab bars, gestures, haptics, and more.

- [Day 79 – Project 16, part one](79.md)
- [Day 80 – Project 16, part two](80.md)
- [Day 81 – Project 16, part three](81.md)
- [Day 82 – Project 16, part four](82.md)
- [Day 83 – Project 16, part five](83.md)
- [Day 84 – Project 16, part six](84.md)
- [Day 85 – Project 16, part seven](85.md)
- [Day 86 – Project 17, part one](86.md)
- [Day 87 – Project 17, part two](87.md)
- [Day 88 – Project 17, part three](88.md)
- [Day 89 – Project 17, part four](89.md)
- [Day 90 – Project 17, part five](90.md)
- [Day 91 – Project 17, part six](91.md)
- [Day 92 – Project 18, part one](92.md)
- [Day 93 – Project 18, part two](93.md)
- [Day 94 – Project 18, part three](94.md)

### Days 95: Consolidation VII

As we approach the end of our 100 days it’s time to pause and reflect on the massive projects we’ve built, then take on a fresh app building challenge.

- [Day 95 – Milestone: Projects 16-18](95.md)

### Days 96-99: One last project

In this final project we cover some last tips and techniques to help you build great apps, including how to optimize for iPad.

- [Day 96 – Project 19, part one](96.md)
- [Day 97 – Project 19, part two](97.md)
- [Day 98 – Project 19, part three](98.md)
- [Day 99 – Project 19, part four](99.md)

### Wrap up

It’s time to see how much you remember from across the entire curriculum. Are you ready for this?

- [Day 100 – Final exam](100.md)
- [Epilogue – What now?](101.md)

---


[ask-me]: https://twitter.com/twostraws
[swiftui-by-example]: https://www.hackingwithswift.com/quick-start/swiftui
[glossary]: https://www.hackingwithswift.com/glossary