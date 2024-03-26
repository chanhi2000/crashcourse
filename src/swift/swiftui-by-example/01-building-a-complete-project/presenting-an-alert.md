---
lang: ko-KR
title: Presenting an alert
description: SwiftUI by Example > Presenting an alert
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
      content: SwiftUI by Example > Presenting an alert
    - property: og:description
      content: Presenting an alert
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/swift/swiftui-by-example/01-building-a-complete-project/presenting-an-alert.html
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

```component VPCard
{
  "title": "SwiftUI by Example > Presenting an alert",
  "desc": "Presenting an alert",
  "link": "https://hackingwithswift.com/quick-start/swiftui/presenting-an-alert",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

<VidStack src="youtube/ClZES_lQ214" />

There’s one more thing to add in order to finish off this screen, which is to make the Confirm Order button work. We’re not actually going to send the order off somewhere, but we _are_ going to show an alert confirming that it all went through successfully.

Like other things in this form this requires us to add another `@State` property, this time tracking whether the alert is visible or not. And this is where I hope the reactive nature of SwiftUI starts to become clear: we don’t say “show the alert” or “hide the alert” like we would do in UIKit, but instead say “here are the conditions where the alert should be shown” and let SwiftUI figure out when those conditions are met.

So, first let’s create another `@State` property saying that the payment alert isn’t currently showing:

```swift
@State private var showingPaymentAlert = false
```

Now we’ll attach an `alert()` modifier to our form, with a simple title, a two-way binding to that property, and some text to show as the alert’s message:

```swift
.alert("Order confirmed", isPresented: $showingPaymentAlert) {
    // add buttons here
} message: {
    Text("Your total was \(totalPrice) – thank you!")
}
```

That uses a two-way binding so that SwiftUI knows to show the alert when `showingPaymentAlert` becomes true, and will also set `showingPaymentAlert` back to false when the alert is dismissed.

Where I’ve placed the `// add buttons here` comment is where to add some custom buttons for your alert if you want them, but as we haven’t added any SwiftUI will automatically add a default “OK” button that dismisses the alert.

Now we can make that alert show whenever we want, just by setting `showingPaymentAlert` to true. So, change our button to this:

```swift
Button("Confirm order") {
    showingPaymentAlert.toggle()
}
```

Run the program and see what you think – it’s really coming together now!

![An iOS alert showing the order was confirmed.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/2-15~dark.png)

::: details Further reading

Working with presentations
How to show an alert

:::

---

<TagLinks />