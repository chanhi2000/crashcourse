---
lang: ko-KR
title: Building a complete project
description: 🕊️SwiftUI by Example > Building a complete project
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
      content: 🕊️SwiftUI by Example > Building a complete project
    - property: og:description
      content: Building a complete project
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/swift/swiftui-by-example/01-building-a-complete-project.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```component VPCard
{
  "title": "SwiftUI by Example > SwiftUI tutorial: Building a complete project",
  "desc": "SwiftUI tutorial: Building a complete project",
  "link": "https://www.hackingwithswift.com/quick-start/swiftui/swiftui-tutorial-building-a-complete-project",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

<VidStack id="M6v6y-KyJs0" />

This is a complete, free SwiftUI tutorial designed to take you through lots of its functionality in a single project. It’s aimed at people who have existing programming experience with UIKit, but most things are explained in detail so newcomers ought to be able to follow along.

__Important__: This was written for iOS 16.1, so you’ll need at least Xcode 14.1 to follow along. This is available as a free download from the Mac App Store if you don’t already have it.

The project we’ll be making is called iDine, and is a restaurant app that lists items in a menu and helps folks place orders. I’ve designed the project specifically so that it covers as many different techniques as possible to give you a good grounding in how things work in SwiftUI. Of course, we’re also building a real project at the same time – it’s going to be busy!

::: tip Note

If you’d like to see my completed version of this project, you can find it here on GitHub: [<FontIcon icon="iconfont icon-github"/>`twostraws/iDine`](https://github.com/twostraws/iDine).

:::

To get started, please create a new iOS project in Xcode called “iDine”, choosing the App template. You should also select SwiftUI for the Interface, but please leave all the checkboxes unchecked.

Xcode’s project creation window, configured to create a SwiftUI app.

There are quite a few assets provided for this project that you need to copy in before you start. These are all in the assets for this project, which you can download [<FontIcon icon="iconfont icon-select"/>here](https://www.hackingwithswift.com/samples/idine.zip).

Please copy them into your project like this:

- Drag Helper.swift into your project navigator. This contains a helper extension that makes it easier to decode `Codable` data from a bundle. This is not related to SwiftUI, so we won’t be covering it here.
- You should also drag Order.swift and Menu.swift into the project navigator. These are custom types that store the data we’re using in the app.
- And drag menu.json into your project navigator too – this describes all the menu items our restaurant offers, and will be decoded into instances of `MenuSection` and `MenuItem`.
- Drag the contents of the Images directory into your asset catalog, so we have all the pictures we need.

![Dragging our artwork into Xcode’s asset catalog.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/2-2~dark.png)

OK, that’s it – we’re ready to go!

__Tip__: At the end of each chapter I’ve added a “Further reading” section that suggests links to other chapters in this book. You don’t need to read them in order to follow along; they are there to provide extra information and detail if you want to understand the bigger picture more thoroughly.

---

## Building a menu using List

::: details Building a menu using List

```component VPCard
{
  "title": "SwiftUI by Example > Building a menu using List",
  "desc": "Building a menu using List",
  "link": "https://hackingwithswift.com/quick-start/swiftui/building-a-menu-using-list",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

<VidStack src="youtube/62agNUDHh3U" />

We’re going to start simple, and work our way up. Along the way you’ll start to see some of the things that SwiftUI makes easy, and some of the things that are a bit harder.

In <FontIcon icon="fas fa-dove"/>`ContentView.swift` is a basic struct representing the only screen in our app: `ContentView`. It looks like this:

```swift
struct ContentView: View {
    var body: some View {
        VStack {
            Image(systemName: "globe")
                .imageScale(.large)
                .foregroundStyle(.accentColor)
            Text("Hello, world!")
        }
        .padding()
    }
}
```

That isn’t much code, but it already tells us a lot:

1. Views are structs in SwiftUI.
2. All views must conform to the `View` protocol.
3. That protocol requires a computed property called `body` that contains the actual layout for the view.
4. It returns `some View`, which is a Swift feature called _opaque return types_ – it means “one specific sort of view, but we don’t really care which one.”
5. Inside our content view is a small amount of UI: an image showing a globe icon and some text saying “Hello, world”, both wrapped up in a `VStack` to make them vertically aligned. We’ll be looking at these views in more detail as we progress.
6. There’s are some method calls in place: `.imageScale()`, `.foregroundStyle()`, and `padding()`. In SwiftUI we call these _modifiers_ because they modify the way the text view looks or acts.

You should also see a preview pane on the right of Xcode. This updates as you type, which makes it a great way to see your changes as you work. If you don’t see the preview pane on the right, go to the Editor menu and choose Canvas.

In the event that Xcode’s preview area stops – which will happen quite often – you can press Opt-Cmd-P to make it resume showing your layouts.

__This is really important so I’m repeating it: pressing <kbd>Cmd</kbd>+<kbd>Opt</kbd>+<kbd>P</kbd> will make your SwiftUI preview update.__

![Xcode showing code on one side and the SwiftUI preview area on the other side.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/2-3~dark.png)

In our app this screen will show us a list of items from a menu, so we’re going to use a `List` view instead of Xcode’s default template code.

So, replace the current text view with this:

```swift
List {
    Text("Hello World")
    Text("Hello World")
    Text("Hello World")
}
```

When the preview updates you’ll now see the equivalent of UIKit’s `UITableView` with three pieces of text, all saying “Hello World”. This is a _static_ list view – we’re sending in three pieces of fixed data, so it interprets them as three rows in the table.

In our app the menu will contain a list of items that can be ordered, and tapping one of them will show a new screen with details about that order item. This works just like in UIKit: we wrap our table in a navigation control.

In SwiftUI this navigation control is a `NavigationStack`, which combines the display styling of `UINavigationBar` and the view controller stack behavior of `UINavigationController`. To bring one in, just add `NavigationStack` around your list, like this:

```swift
NavigationStack {
    List {
        Text("Hello World")
        Text("Hello World")
        Text("Hello World")
    }
}
```

When the preview updates you’ll see things look the same, but that’s only because we haven’t given it a title yet.

Earlier I mentioned the `padding()` modifier briefly, saying modifiers got that name because they modify the way views look or act. SwiftUI has many modifiers – hundreds, easily – and each one lets you customize the behavior of a view in one very specific way.

Yes, modifiers _look_ like regular Swift methods, but they are more complex because they actually _change_ what they apply to. In simple terms, if you have some text and apply the `padding()` modifier, you don’t just get some text back that happens to have some space around it – you actually get a different _type_ back.

In this case, we want to apply a `navigationTitle()` modifier to our list view, which accepts some sort of text to show in the navigation bar. So, we’d write this:

```swift
NavigationStack {
    List {
        Text("Hello World")
        Text("Hello World")
        Text("Hello World")
    }
    .navigationTitle("Menu")
}
```

Yes, the modifier is attached to the list rather than the navigation stack – think of how we’d set the title of a `UIViewController` rather than try to set the title of a `UINavigationController`.

![Xcode showing code with three list items, and the SwiftUI preview showing that rendered in a virtual device.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/2-4~dark.png)

If you try running the app now you’ll see that it all works exactly as we would expect – the table scrolls around, the navigation bar shrinks as you scroll, and so on. One of the great things that SwiftUI does is give us modern system behavior by default, so we get large navigation bar titles as standard.

Static text works fine when you have fixed table cells, but in our case we have lots of menu items to load across a number of sections – breakfast, mains, dessert, and drinks. What we _really_ want to do is load our menu data from JSON, then use _that_ for our list items, and that’s actually not too hard to accomplish.

First we need to load our data. The Helper.swift file you already imported contains code for loading `Codable` JSON from the app bundle, which is perfect for loading our <FontIcon icon="iconfont icon-json"/>`menu.json` file. So, add this property to the `ContentView` struct now:

```swift
let menu = Bundle.main.decode([MenuSection].self, from: "menu.json")
```

Next we need to make our list go over the sections in our menu. This is done by using a `ForEach` block, which loops over items in an array and repeats whatever is inside:

```swift
List {
    ForEach(menu) {
        Text("Hello World")
        Text("Hello World")
        Text("Hello World")
    }
}
```

The opening braces after `List` and `ForEach` actually signify the start of a closure, and in the case of `ForEach` SwiftUI will pass into the closure each section from the array so that we can configure it.

So, we need to accept that section by modifying the code to this:

```swift
ForEach(menu) { section in
```

That _almost_ works, but there’s one last thing we need to do. SwiftUI needs to know how to identify every cell in our table – it needs to know exactly which is which, so it can add and remove things for us if we ask. When we had a static list this wasn’t a problem because it could see there were three, but now we have a dynamic list we need to tell it something about each section that makes it unique.

If you open Menu.swift you’ll see structs that define `MenuSection` and `MenuItem`, and both of them have `id` properties that contain a `UUID` – a universally unique identifier. This is perfect for our use, because every menu item in every section has a unique identifier so SwiftUI can know which is which.

We can tell SwiftUI to use those identifiers by making the two types conform to `Identifiable`. This protocol has only one requirement, which is that conforming types must have a property called `id` that can identify them uniquely. We already have that, so just adding `Identifiable` to those two types is enough:

```swift
struct MenuSection: Codable, Identifiable {
```

And:

```swift
struct MenuItem: Codable, Equatable, Identifiable {
```

If you run the code now you’ll see twelve rows containing “Hello World” – something you might not have expected.

What’s changed is that we now have a _dynamic_ list, and our `ForEach` will execute the body of its closure – three text views – once for every item in our menu sections. We have four sections, and each one has been given three text views, so we end up with 12 in total.

To fix this, we’re going to ask for _one_ text view per section, and give it the name of our section to display:

```swift
List {
    ForEach(menu) { section in
        Text(section.name)
    }
}
```

Next let’s add the items inside each section. This is another `ForEach` inside the section `ForEach`, like this:

```swift
List {
    ForEach(menu) { section in
        Text(section.name)

        ForEach(section.items) { item in
            Text(item.name)
        }
    }
}
```

Now you’ll see lots of table rows, with some containing section names (“Breakfast”, “Mains”, etc) and some containing menu item names (“Full English”, “Superfood Salad”, etc).

![Xcode showing a SwiftUI list with many items, and a navigation bar at the top. Next to it is the code required to make the preview.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/2-5~dark.png)

While this works, it’s not ideal – it doesn’t create any visual structure in our table, so we’re going to break it up. The standard UIKit way of doing this is with table view sections, and SwiftUI gives us the `Section` view just for that. We can replace `Text(section.name)` with a Section using the section name for its title, which will be used as the text at the start of the section. The inner `ForEach` – the one containing our menu items – is then _inside_ the section, so SwiftUI will understand how we’ve grouped things together.

The end result looks like this:

```swift
List {
    ForEach(menu) { section in
        Section(section.name) {
            ForEach(section.items) { item in
                Text(item.name)
            }
        }
    }
}
```

By default SwiftUI’s lists use the “inset grouped” style of `UITableView`, but we can change that by adding another modifier after `navigationTitle()`:

```swift
.listStyle(.grouped)
```

![The SwiftUI list is now split neatly into grouped sections.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/2-6~dark.png)

### Further reading

```component VPCard
{
  "title": "SwiftUI by Example > Working with lists",
  "desc": "Working with lists",
  "link": "10-lists.md#working-with-lists",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to create a list of dynamic items",
  "desc": "How to create a list of dynamic items",
  "link": "10-lists.md#how-to-create-a-list-of-dynamic-items",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to embed a view in a navigation view",
  "desc": "How to embed a view in a navigation view",
  "link": "13-navigation.md#how-to-embed-a-view-in-a-navigation-view",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to create views in a loop using ForEach",
  "desc": "How to create views in a loop using ForEach",
  "link": "04-view-layout.md#how-to-create-views-in-a-loop-using-foreach",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to add sections to a list",
  "desc": "How to add sections to a list",
  "link": "10-lists.md#how-to-add-sections-to-a-list",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to create grouped and inset grouped lists",
  "desc": "How to create grouped and inset grouped lists",
  "link": "10-lists.md#how-to-create-grouped-and-inset-grouped-lists",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

## Composing views to create a list row

::: details Composing views to create a list row

```component VPCard
{
  "title": "SwiftUI by Example > Composing views to create a list row",
  "desc": "Composing views to create a list row",
  "link": "https://hackingwithswift.com/quick-start/swiftui/composing-views-to-create-a-list-row",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

<VidStack src="youtube/tf4YQzQc6ek" />

> Updated for Xcode 15

Just having names of menu items written out isn’t particularly appealing for a restaurant, so let’s make those items look good.

First, though, an important lesson: SwiftUI is designed to be _composable_, which means you can make views out of any other views you like. We have a simple text view for our items right now, `Text(item.name)`, but we’re going to add much more in there to bring it to life. While we _could_ put that directly into <FontIcon icon="fas fa-dove"/>`ContentView.swift`, it becomes long and hard to read.

A better idea is to make a new view type that we can embed _inside_ `ContentView`, and SwiftUI is designed to make this both easy (it takes only 30 seconds to learn) and extremely fast (it has almost zero performance impact).

So, press Cmd+N to create a new file, choose SwiftUI View under the User Interface category, then call it “ItemRow”. You’ll see Xcode has generated a new view with some sample code to get us started:

```swift
struct ItemRow: View {
    var body: some View {
        Text("Hello World!")
    }
}
```

We’re going to be doing something new in just a moment, but first I want to get us to the point where we are using `ItemRow` in our code. This means we need to add a `MenuItem` property to `ItemRow`, then use it in its body, like this:

```swift
struct ItemRow : View {
    let item: MenuItem

    var body: some View {
        Text(item.name)
    }
}
```

Now we can go back to ContentView.swift and replace `Text(item.name)` with this:

```swift
ItemRow(item: item)
```

As you can see, that will create new `ItemRow` for each item in our menu section, which in turn will have some text inside.

Now, our code won’t build right now, because there’s a problem in <FontIcon icon="fas fa-dove"/>`ItemRow.swift`. This code is invalid:

```swift
struct ItemRow_Previews: PreviewProvider {
    static var previews: some View {
        ItemRow()
    }
}
```

That is SwiftUI’s previewing code, which is what allows it show live previews while we work. It’s trying to create an `ItemRow` without a menu item attached, which isn’t possible. If you really wanted to preview individual rows you could do so by instantiating a copy of our full menu and passing in an example item, but in this instance I’ve provided an example item for us so we have something to look at.

Change the code to this to make it all work again:

```swift
struct ItemRow_Previews: PreviewProvider {
    static var previews: some View {
        ItemRow(item: MenuItem.example)
    }
}
```

Once that’s done our code will build again, and if you return back to ContentView.swift you should see the same preview we had before – nothing has changed. Of course, now we can start to add new things to that `ItemRow` struct to make it more interesting!

In `ItemRow`, we’re going to start by placing the item’s thumbnail image and name side by side, like you’d normally see in a `UITableViewCell`. Try writing this:

```swift
var body: some View {
    Image(item.thumbnailImage)
    Text(item.name)
}
```

You’ll find that Xcode’s preview does something quite strange: you’ll see a thumbnail image appear, but no text for the item’s name – how come one but not both?

Well, what’s happening here is that `some View` means we will return one specific view from our method – not two different views, and certainly not no views at all. When you try and return two views like this, Swift automatically wraps them up in a single, hidden container called a _tuple view_, but without any further instructions on how to display this SwiftUI just picks the first view.

To fix this we need to put those two views inside a container, which in our case will be a `HStack`. This is a container that places its child views side by side horizontally, which is perfect for our needs.

So, try this instead:

```swift
var body: some View {
    HStack {
        Image(item.thumbnailImage)
        Text(item.name)
    }
}
```

If you wanted to put the item’s price next to its name, you might try something like this:

```swift
HStack {
    Image(item.thumbnailImage)
    Text(item.name)
    Text("$\(item.price)")
}
```

However, that will put the price to the right of the name, which isn’t great. What we usually want here is the kind of subtitle style that we get from `UITableViewCell`, where we can have an image on the left, and on the right have a title above a detail label.

We can achieve that with another stack, called a `VStack` – a _vertical_ stack. This can go inside our existing `HStack` to create the hierarchy we want:

```swift
HStack {
    Image(item.thumbnailImage)

    VStack {
        Text(item.name)
        Text("$\(item.price)")
    }
}
```

You’ll notice that our item name and price are centered. That happens because it’s the default behavior of `VStack`, but a left alignment would look much better here. We can get that by asking for a leading alignment when creating the `VStack`, like this:

```swift
VStack(alignment: .leading) {
    Text(item.name)
    Text("$\(item.price)")
}
```

If you head back to <FontIcon icon="fas fa-dove"/>`ContentView.swift`, your SwiftUI preview should update so you can see how the full list looks now – much better, I think!

![A SwiftUI list with a picture, title, and caption for each row.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/2-7~dark.png)

### Further reading

```component VPCard
{
  "title": "SwiftUI by Example > How to create and compose custom views",
  "desc": "How to create and compose custom views",
  "link": "https://www.hackingwithswift.com/quick-start/swiftui/how-to-create-and-compose-custom-views",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to draw images using Image views",
  "desc": "How to draw images using Image views",
  "link": "03-images-shapes-and-media.md#how-to-draw-images-using-image-views",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to create stacks using VStack and HStack",
  "desc": "How to create stacks using VStack and HStack",
  "link": "05-stacks-grids-scrollviews.md#how-to-create-stacks-using-vstack-and-hstack",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

## Polishing designs with fonts and colors

::: details Polishing designs with fonts and colors

```component VPCard
{
  "title": "SwiftUI by Example > Polishing designs with fonts and colors",
  "desc": "Polishing designs with fonts and colors",
  "link": "https://hackingwithswift.com/quick-start/swiftui/polishing-designs-with-fonts-and-colors",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

<VidStack src="youtube/VlpqnHOur9o" />

We’ll add some more to our design in just a moment, but first let’s pause and make what we have look better.

In <FontIcon icon="fas fa-dove"/>`ItemRow.swift`, our menu item’s name is clearly the most important thing in each row, but it has the same font size as the price below. We can bring it up in size and weight by using the `font()` modifier, which accepts any of Apple’s Dynamic Type sizes.

So, something like this will make it stand out:

```swift
Text(item.name)
    .font(.headline)
```

As for the picture, it looks _OK_ as it is, but with a little love it would look better. For example, we could apply a `clipShape()` modifier and ask it to be clipped to a circle shape:

```swift
Image(item.thumbnailImage)
    .clipShape(Circle())
```

Or we could apply a `clipShape()` modifier, then add an `overlay()` modifier so we place a shape on top of our image. For example, this will add a circle over the image, then give that circle a 2-point gray border:

```swift
Image(item.thumbnailImage)
    .clipShape(Circle())
    .overlay(Circle().stroke(.gray, lineWidth: 2))
```

OK, that’s enough styling – let’s look at something more _complex_.

If you look in menu.json you’ll see that each menu item has a string array of restrictions: “G” for containing gluten, “N” for containing nuts, “V” for being vegetarian friendly, and so on. We can use that to create colored icons representing what’s in the food at a glance, showing zero or more of them in each row as appropriate.

First, we need a dictionary of colors that we’ll use for each restriction type. Add this property to `ItemRow`:

```swift
let colors: [String: Color] = ["D": .purple, "G": .black, "N": .red, "S": .blue, "V": .green]
```

Second, we need to loop over all the restrictions and put each one into a text view. Put this after the `VStack` containing the name and cost:

```swift
ForEach(item.restrictions) { restriction in
    Text(restriction)
}
```

Now we have a problem: that code won’t compile. As I mentioned earlier, we can put arrays into a `ForEach` as long as SwiftUI knows how to identify each item in the array uniquely. We solved that by making our sections and items conform to the `Identifiable` protocol, which uses the `id` property to identify items.

Here, though, we have an array of strings, so we can’t make them conform to `Identifiable`. Instead, we need something else: we need to tell Swift that the string _itself_ is the identifier for each item. This can be done using the `id` parameter for `ForEach`, passing in `\.self` as its only parameter, like this:

```swift
ForEach(item.restrictions, id: \.self) { restriction in
    Text(restriction)
}
```

And now you should see the text “G” and “V” next to our example item in the Xcode preview.

That’s pretty dull, though, so let’s spice it up with some modifiers:

```swift
Text(restriction)
    .font(.caption)
    .fontWeight(.black)
    .padding(5)
    .background(colors[restriction, default: .black])
    .clipShape(Circle())
    .foregroundStyle(.white)
```

That will use a small, bold font with white text and a colored background, add a circular clipping shape, and add a little space around it so the text circles aren’t so near.

![A SwiftUI list row, showing a food photo, its name, and price, along with circles showing what food restrictions it has.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/2-8~dark.png)

We’re going to do one more thing before we’re done with the design of this item row: we’re going to force the restriction text to be spaced apart from the rest of the row. SwiftUI has a dedicated view for this called `Spacer`, and I’d like you to place it just before the `ForEach` for our restrictions, like this:

```swift
Spacer()

ForEach(item.restrictions, id: \.self) {
```

That will automatically take up all available free space, meaning that our picture will now be on the far left and the restrictions on the far right.

Go ahead and run the project now and I think you’ll agree it looks great! Now think about how you might have accomplished all that using a `UITableViewCell` – it would take more code than you expect!

### Further reading

```component VPCard
{
  "title": "SwiftUI by Example > How to style text views with fonts, colors, line spacing, and more",
  "desc": "How to style text views with fonts, colors, line spacing, and more",
  "link": "02-working-with-static-text.md#how-to-style-text-views-with-fonts-colors-line-spacing-and-more",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to clip a view so only part is visible",
  "desc": "How to clip a view so only part is visible",
  "link": "16-transforming-views.md#how-to-clip-a-view-so-only-part-is-visible",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to force views to one side inside a stack using Spacer",
  "desc": "How to force views to one side inside a stack using Spacer",
  "link": "05-stacks-grids-srollviews.md#how-to-force-views-to-one-side-inside-a-stack-using-spacer",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

## Displaying a detail screen with `NavigationLink`

::: details Displaying a detail screen with NavigationLink

```component VPCard
{
  "title": "SwiftUI by Example > Displaying a detail screen with NavigationLink",
  "desc": "Displaying a detail screen with NavigationLink",
  "link": "https://hackingwithswift.com/quick-start/swiftui/displaying-a-detail-screen-with-navigationlink",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

## Observable objects, environment objects, and `@Published`

::: details Observable objects, environment objects, and @Published

```component VPCard
{
  "title": "SwiftUI by Example > Observable objects, environment objects, and @Published",
  "desc": "Observable objects, environment objects, and @Published",
  "link": "https://hackingwithswift.com/quick-start/swiftui/observable-objects-environment-objects-and-published",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

## Adding items to an order with `@EnvironmentObject`

::: details Adding items to an order with @EnvironmentObject

```component VPCard
{
  "title": "SwiftUI by Example > Adding items to an order with @EnvironmentObject",
  "desc": "Adding items to an order with @EnvironmentObject",
  "link": "https://hackingwithswift.com/quick-start/swiftui/adding-items-to-an-order-with-environmentobject",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

## Adding `TabView` and `tabItem()`

::: details Adding TabView and tabItem()

```component VPCard
{
  "title": "SwiftUI by Example > Adding TabView and tabItem()",
  "desc": "Adding TabView and tabItem()",
  "link": "https://hackingwithswift.com/quick-start/swiftui/adding-tabview-and-tabitem",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

## Bindings and forms

::: details Bindings and forms

```component VPCard
{
  "title": "SwiftUI by Example > Bindings and forms",
  "desc": "Bindings and forms",
  "link": "https://hackingwithswift.com/quick-start/swiftui/bindings-and-forms",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

## Two-way bindings in SwiftUI

::: details Two-way bindings in SwiftUI

```component VPCard
{
  "title": "SwiftUI by Example > Two-way bindings in SwiftUI",
  "desc": "Two-way bindings in SwiftUI",
  "link": "https://hackingwithswift.com/quick-start/swiftui/two-way-bindings-in-swiftui",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

## Formatting interpolated strings in SwiftUI

::: details Formatting interpolated strings in SwiftUI

```component VPCard
{
  "title": "SwiftUI by Example > Formatting interpolated strings in SwiftUI",
  "desc": "Formatting interpolated strings in SwiftUI",
  "link": "https://hackingwithswift.com/quick-start/swiftui/formatting-interpolated-strings-in-swiftui",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

## Presenting an alert

::: details Presenting an alert

```component VPCard
{
  "title": "SwiftUI by Example > Presenting an alert",
  "desc": "Presenting an alert",
  "link": "https://hackingwithswift.com/quick-start/swiftui/presenting-an-alert",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

## Adding swipe to delete and `EditButton`

::: details Adding swipe to delete and EditButton

```component VPCard
{
  "title": "SwiftUI by Example > Adding swipe to delete and EditButton",
  "desc": "Adding swipe to delete and EditButton",
  "link": "https://hackingwithswift.com/quick-start/swiftui/adding-swipe-to-delete-and-editbutton",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

## Wrap up: our SwiftUI project is complete

::: details Wrap up: our SwiftUI project is complete

```component VPCard
{
  "title": "SwiftUI by Example > Wrap up: our SwiftUI project is complete",
  "desc": "Wrap up: our SwiftUI project is complete",
  "link": "https://hackingwithswift.com/quick-start/swiftui/wrap-up-our-swiftui-project-is-complete",
  "logo": "https://www.hackingwithswift.com/favicon-96x96.png",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />