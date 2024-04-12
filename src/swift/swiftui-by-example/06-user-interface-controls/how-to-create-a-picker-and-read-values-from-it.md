---
lang: ko-KR
title: How to create a picker and read values from it
description: SwiftUI by Example > How to create a picker and read values from it
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
      content: SwiftUI by Example > How to create a picker and read values from it
    - property: og:description
      content: How to create a picker and read values from it
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/swift/swiftui-by-example/06-user-interface-controls/how-to-create-a-picker-and-read-values-from-it.html
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
  "title": "SwiftUI by Example > How to create a picker and read values from it",
  "desc": "How to create a picker and read values from it",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-create-a-picker-and-read-values-from-it",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI’s `Picker` view manages to combine `UIPickerView`, `UISegmentedControl`, and `UITableView` in one, while also adapting to other styles on other operating systems. The great thing is that we really don’t have to care how it works – SwiftUI does a good job of adapting itself automatically to its environment.

As with most other controls, you must attach your picker to some sort of state that will track the picker’s selection. For example, this creates a `colors` array and an integer that stores which color was selected, then uses that with a picker and a text view so you can see values being read back:

```swift
struct ContentView: View {
    var colors = ["Red", "Green", "Blue", "Tartan"]
    @State private var selectedColor = "Red"

    var body: some View {
        VStack {
            Picker("Please choose a color", selection: $selectedColor) {
                ForEach(colors, id: \.self) {
                    Text($0)
                }
            }
            Text("You selected: \(selectedColor)")
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-create-a-picker-and-read-values-from-it-1.zip)

![A wheel picker showing Red, Green, Blue, and Tartan. Blue is selected. Below is the text “You selected: Blue”.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-a-picker-and-read-values-from-it-1~dark.png)

::: tip

Even though the label text isn’t visible, it’s still useful because VoiceOver will use it when reading the screen.

:::

::: details Similar solutions…

```component VPCard
{
  "title": "SwiftUI by Example > How to create a date picker and read values from it",
  "desc": "How to create a date picker and read values from it",
  "link": "/swift/swiftui-by-example/06-user-interface-controls/how-to-create-a-date-picker-and-read-values-from-it.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to hide the label of a Picker, Stepper, Toggle, and more using labelsHidden()",
  "desc": "How to hide the label of a Picker, Stepper, Toggle, and more using labelsHidden()",
  "link": "/swift/swiftui-by-example/06-user-interface-controls/how-to-hide-the-label-of-a-picker-stepper-toggle-and-more-using-labelshidden.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard  
{
  "title": "SwiftUI by Example > How to fix a Form Picker or a NavigationLink that isn’t tappable",
  "desc": "How to fix a Form Picker or a NavigationLink that isn’t tappable",
  "link": "/swift/swiftui-by-example/26-appendix-b/how-to-fix-a-form-picker-or-a-navigationlink-that-isnt-tappable.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to create a segmented control and read values from it",
  "desc": "How to create a segmented control and read values from it",
  "link": "/swift/swiftui-by-example/06-user-interface-controls/how-to-create-a-segmented-control-and-read-values-from-it.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to create a slider and read values from it",
  "desc": "How to create a slider and read values from it",
  "link": "/swift/swiftui-by-example/06-user-interface-controls/how-to-create-a-slider-and-read-values-from-it.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />