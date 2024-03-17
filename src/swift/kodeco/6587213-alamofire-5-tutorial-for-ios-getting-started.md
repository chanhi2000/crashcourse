---
lang: ko-KR
title: Alamofire 5 Tutorial for iOS - Getting Started
description: 🕊️Kodeco - Swift > Alamofire 5 Tutorial for iOS - Getting Started
category:
  - 🕊️Swift
tag: 
  - crashcourse
  - kodeco
  - swift
  - ios
  - xcode
head:
  - - meta:
    - property: og:title
      content: Alamofire 5 Tutorial for iOS - Getting Started
    - property: og:description
      content: 🕊️Kodeco - Swift > Alamofire 5 Tutorial for iOS - Getting Started
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/swift/kodeco/6587213-alamofire-5-tutorial-for-ios-getting-started.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```component VPCard
{
  "title": "Alamofire 5 Tutorial for iOS: Getting Started",
  "desc": "In this Alamofire tutorial, you’ll build an iOS companion app to perform networking tasks, send request parameters, decode/encode responses and more.",
  "link": "https://www.kodeco.com/6587213-alamofire-5-tutorial-for-ios-getting-started",
  "logo": "https://assets.carolus.kodeco.com/assets/murakami/category-icons/category-networking-ios-6b4c9f198b8600dc0247a590887715b4a22ecc501984031c40b11e78a54ce886.svg",
  "background": "rgba(135,99,210,0.2)"
}
```

If you’ve been developing iOS apps for some time, you’ve probably needed to access data over the network. And for that you may have used Foundation’s URLSession. This is fine and all, but sometimes it becomes cumbersome to use. And that’s where this Alamofire tutorial comes in!

Alamofire is a Swift-based, HTTP networking library. It provides an elegant interface on top of Apple’s Foundation networking stack that simplifies common networking tasks. Its features include chainable request/response methods, JSON and Codable decoding, authentication and more.

In this Alamofire tutorial, you’ll perform basic networking tasks including:

- Requesting data from a third-party RESTful API.
- Sending request parameters.
- Converting the response into JSON.
- Converting the response into a Swift data model via the Codable protocol.

::: tip Note

Before starting this tutorial, you should have a conceptual understanding of HTTP networking. Some exposure to Apple’s networking classes is helpful, but not necessary. Alamofire obscures implementation details, but it’s good to have some background knowledge if you need to troubleshoot your network requests.

:::

---

## Getting Started

To kick things off, use the [<FontIcon icon="fas fa-download"/>`[Download Materials]`][download-material] button at the top or bottom of this article to download the begin project.

The app for this tutorial is `StarWarsOpedia`, which provides quick access to data about Star Wars films as well as the starships used in those films.

Start by opening <FontIcon icon="iconfont icon-file"/>`StarWarsOpedia.xcworkspace` inside the begin project.

![Build and run. You’ll see this](https://koenig-media.raywenderlich.com/uploads/2020/01/1-1-304x500.png =240x)

It’s a blank slate now, but you’ll populate it with data soon!

::: tip Note

You’d normally integrate Alamofire using CocoaPods or another dependency manager. In this case, it’s pre-installed in your downloaded projects. For help integrating Alamofire into your projects using CocoaPods, see [CocoaPods Tutorial for Swift: Getting Started](https://www.kodeco.com/7076593-cocoapods-tutorial-for-swift-getting-started).

:::

---

## Using the SW API

---

## Understanding HTTP, REST and JSON

---

## Why Use Alamofire?

---

## Requesting Data

---

## Using a Codable Data Model

---

## Method Chaining

### Setting up Your Table View

### Updating the Detail View Controller

---

## Fetching Multiple Asynchronous Endpoints

### Creating a Data Model for Starships

### Fetching the Starship Data

### Updating Your Table View

---

## Sending Parameters With a Request

### Decoding Starships

### Searching for Ships

### Display a Ship’s List of Films

---

## Where to Go From Here?

You can download the completed project using the [<FontIcon icon="fas fa-download"/>`[Download Materials]`][download-material] button at the top or bottom of this article.

While building your app, you’ve learned a lot about Alamofire’s basics. You learned that Alamofire can make networking calls with very little setup and how to make basic calls using the request function by sending just the URL string.

Also, you learned to make more complex calls to do things like searching by sending parameters.

You learned how to use request chaining and request validation, how to convert the response into JSON and how to convert the response data into a custom data model.

This article covered the very basics. You can take a deeper dive by looking at the documentation on the Alamofire site at [<FontIcon icon="iconfont icon-github"/>`Alamofire/Alamofire`](https://github.com/Alamofire/Alamofire).

I highly suggest learning more about Apple’s URLSession, which Alamofire uses under the hood:

```component VPCard
{
  "title": "URLSession Tutorial: Getting Started",
  "desc": "In this URLSession tutorial, you’ll learn how to create HTTP requests as well as implement background downloads that can be both paused and resumed. By Felipe Laso-Marsetti.",
  "link": "https://www.kodeco.com/3244963-urlsession-tutorial-getting-started",
  "logo": "https://assets.carolus.kodeco.com/assets/murakami/category-icons/category-networking-ios-6b4c9f198b8600dc0247a590887715b4a22ecc501984031c40b11e78a54ce886.svg",
  "background": "rgba(135,99,210,0.2)"
}
```

```component VPCard
{
  "title": "Apple URL Session Programming Guide",
  "desc": "URL Loading System: Interact with URLs and communicate with servers using standard Internet protocols.",
  "link": "https://developer.apple.com/documentation/foundation/url_loading_system",
  "logo": "https://developer.apple.com/apple-logo.svg",
  "background": "rgba(255,255,255,0.2)"
}
```

---

<TagLinks />

[download-material]: https://koenig-media.raywenderlich.com/uploads/2020/02/StarWarsOpedia.zip