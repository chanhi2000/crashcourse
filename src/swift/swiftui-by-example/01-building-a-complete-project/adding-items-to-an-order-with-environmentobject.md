---
lang: ko-KR
title: Adding items to an order with @EnvironmentObject
description: SwiftUI by Example > Adding items to an order with @EnvironmentObject
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
      content: SwiftUI by Example > Adding items to an order with @EnvironmentObject
    - property: og:description
      content: Adding items to an order with @EnvironmentObject
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/swift/swiftui-by-example/01-building-a-complete-project/adding-items-to-an-order-with-environmentobject.html
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

```component VPCard
{
  "title": "SwiftUI by Example > Adding items to an order with @EnvironmentObject",
  "desc": "Adding items to an order with @EnvironmentObject",
  "link": "https://hackingwithswift.com/quick-start/swiftui/adding-items-to-an-order-with-environmentobject",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

<VidStack src="youtube/bFwyDUhWXQ8" />

So, what did we _actually_ just do?

Well, we want a way for users to look at items in the menu and add them to an order. But we _also_ want their ordered items to appear somewhere else in the app.

Environment objects are SwiftUI’s way of sharing data across many places, but by themselves they aren’t a complete solution because it would be easy for different parts of our UI to show different things based on when they loaded. With the `ObservableObject` protocol we’ve given our `Order` class the ability to announce that it has changed, and we can now make SwiftUI watch for those announcements and reload the UI.

We just created an instance of `Order` and placed it into the environment. As a result, any view that comes from `ContentView` can read that order back out and manipulate it somehow.

We want to add items to our order from the detail screen, so head back to <FontIcon icon="fa-brands fa-swift"/>`ItemDetail.swift` and give it this property:

```swift
@EnvironmentObject var order: Order
```

We haven’t given that a default value, so you _might_ think it will cause problems thanks to Swift’s strict initialization rules. However, the `@EnvironmentObject` property wrapper does some magic: it allows this variable _not_ to have a value in code, because we’re saying it will already be set in the environment.

When this view is shown, SwiftUI will automatically look in its list of environment objects for something that is of type `Order`, and attach it to that property. If no `Order` object can be found then we have a problem: something we said would be there isn’t, and our code will crash. This is just like an implicitly unwrapped optional, so be careful with it.

`@EnvironmentObject` is another _property wrapper_ in Swift, just like `@Published` and `@StateObject`. This one means we get that automatic attachment ability I just mentioned, but also tells SwiftUI to watch the object for any changes and refresh its UI when a change announcement comes through.

Before we add some code to manipulate that order in `ItemDetail`, we need to fix another previewing problem. You see, we’re now promising the an object of type `Order` will be in the environment by the time our `ItemDetail` is shown, and we create and pass that in from <FontIcon icon="fa-brands fa-swift"/>`iDineApp.swift`. That works great when our app is running for real, but in the Xcode preview we aren’t launched from the app – we’re created by that `PreviewProvider` code at the end of our view files.

This preview code will only get built when we’re in debug mode – when we’re building from Xcode, as opposed to for the App Store. This means it’s safe to put code in there that only relates to our previews, which in this case will be a temporary `Order` instance so that it receives the same data as when it’s running for real:

```swift
struct ItemDetail_Previews: PreviewProvider {  
    static var previews: some View {
        NavigationStack {
            ItemDetail(item: MenuItem.example).environmentObject(Order())
        }
    }
}
```

That replicates the same setup we have with the app launch, which means our preview should work again.

Now _that_ works we can get on with the real deal: adding a button that adds our current menu item to the order. Buttons in SwiftUI have two parts: a title string, and an action closure that contains code to run when the button is tapped.

The `Order` class already has an `add()` method that takes a menu item, so we’ll use that for the action. As for the title, we’ll just add some text saying “Order This” – you’re welcome to add more styling if you want!

Put this into the body of `ItemDetail`, just before the spacer:

```swift
Button("Order This") {
    order.add(item: item)
}
.buttonStyle(.borderedProminent)
```

That’s all it takes to add things to the shared order, but we can’t actually _see_ anything yet.

To make _that_ happen we need to create a new screen that shows the user’s order so far, then put that into a tab bar with our existing content view.

So, press <kbd>Cmd</kbd>+<kbd>N</kbd> to make a new SwiftUI View, calling this one “OrderView”. Because this needs to have the same `Order` instance as the rest of our app, you’ll need to give it the same property we gave `ItemDetail`:

```swift
@EnvironmentObject var order: Order
```

As well as similar code in its preview to make sure that works too:

```swift
struct OrderView_Previews: PreviewProvider {  
    static var previews: some View {
        OrderView().environmentObject(Order())
    }
}
```

As for the body of our `OrderView`, this is all stuff you know already:

- A `List` view that gives us a scrolling table.
- Some `Section` blocks to let us split up our information.
- A `ForEach` and a `HStack` to show our array of order items, displaying both the name and price of each item.
- A second `Section` at the end showing a navigation link to place the order.
- A navigation bar title saying “Order”.

Putting all that together gives us this `OrderView` struct:

```swift
struct OrderView : View {
    @EnvironmentObject var order: Order

    var body: some View {
        NavigationStack {
            List {
                Section {
                    ForEach(order.items) { item in
                        HStack {
                            Text(item.name)
                            Spacer()
                            Text("$\(item.price)")
                        }
                    }
                }

                Section {
                    NavigationLink("Place Order") {
                        Text("Check out")
                    }
                }
            }
            .navigationTitle("Order")
        }
    }
}
```

__Tip__: When you just want some text for your `NavigationLink`, you can use the simpler initializer shown above rather than providing a `label` closure.

We’ll come back to that shortly, but first we need to make sure it’s working by making it accessible through our user interface.

::: details Further Reading

```component VPCard
{
  "title": "SwiftUI by Example > How to create a tappable button",
  "desc": "How to create a tappable button",
  "link": "/swift/swiftui-by-example/06-user-interface-controls.md#how-to-create-a-tappable-button",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />