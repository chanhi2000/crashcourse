---
lang: ko-KR
title: How to create a slider and read values from it
description: SwiftUI by Example > How to create a slider and read values from it
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
      content: SwiftUI by Example > How to create a slider and read values from it
    - property: og:description
      content: How to create a slider and read values from it
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/swift/swiftui-by-example/06-user-interface-controls/how-to-create-a-slider-and-read-values-from-it.html
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
  "title": "SwiftUI by Example > How to create a slider and read values from it",
  "desc": "How to create a slider and read values from it",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-create-a-slider-and-read-values-from-it",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI’s `Slider` view works much like `UISlider`, although you need to bind it somewhere so you can store its value.

When you create it there are a variety of parameters you can provide, but the ones you probably care about most are:

- Value: What Double to bind it to.
- In: The range of the slider.
- Step: How much to change the value when you move the slider. This parameter is optional.

For example, this code creates a slider bound to a `Celsius` property, then updates a text view as the slider moves so that it converts between Celsius and Fahrenheit:

```swift
struct ContentView: View {
    @State private var celsius: Double = 0

    var body: some View {
        VStack {
            Slider(value: $celsius, in: -100...100)
            Text("\(celsius, specifier: "%.1f") Celsius is \(celsius * 9 / 5 + 32, specifier: "%.1f") Fahrenheit")
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-create-a-slider-and-read-values-from-it-1.zip)

![A slider with a blue-grey bar and white handle. Below is the text “0.0 Celsius is 32.0 Fahrenheit”.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-a-slider-and-read-values-from-it-1~dark.png)

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
  "title": "SwiftUI by Example > How to create a segmented control and read values from it",
  "desc": "How to create a segmented control and read values from it",
  "link": "/swift/swiftui-by-example/06-user-interface-controls/how-to-create-a-segmented-control-and-read-values-from-it.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to create a picker and read values from it",
  "desc": "How to create a picker and read values from it",
  "link": "/swift/swiftui-by-example/06-user-interface-controls/how-to-create-a-picker-and-read-values-from-it.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > SwiftUI tips and tricks",
  "desc": "SwiftUI tips and tricks",
  "link": "/swift/swiftui-by-example/24-what-now/swiftui-tips-and-tricks.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example > How to read the red, green, and blue values from a Color",
  "desc": "How to read the red, green, and blue values from a Color",
  "link": "/swift/swiftui-by-example/03-images-shapes-and-media/how-to-read-the-red-green-and-blue-values-from-a-color.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />