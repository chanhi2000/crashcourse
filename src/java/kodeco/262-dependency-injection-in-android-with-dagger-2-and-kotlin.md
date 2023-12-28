---
lang: ko-KR
title: Dependency Injection in Android with Dagger 2 and Kotlin
description: 🅺Kodeco - Android & Kotlin > Dependency Injection in Android with Dagger 2 and Kotlin
tags: ["crashcourse", "kotiln", "android"]
meta:
  - name: 🅺Kodeco - Android & Kotlin > Dependency Injection in Android with Dagger 2 and Kotlin
    content: Dependency Injection in Android with Dagger 2 and Kotlin
  - property: og:title
    content: Dependency Injection in Android with Dagger 2 and Kotlin
  - property: og:description
    content: 🅺Kodeco - Android & Kotlin > Dependency Injection in Android with Dagger 2 and Kotlin
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/kotlin-android-kodeco/262-dependency-injection-in-android-with-dagger-2-and-kotlin.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: Dependency Injection in Android with Dagger 2 and Kotlin
desc: In this Android with Kotlin tutorial, you’ll learn about dependency injection and how to make use of the Dagger 2 Java/Android framework for this purpose.
link: https://www.kodeco.com/262-dependency-injection-in-android-with-dagger-2-and-kotlin
logo: https://assets.carolus.kodeco.com/assets/murakami/category-icons/category-tools-libraries-android-ac31fd227119039e3e4b8fe5b5ca86abdf928764640b62fe05286565f238b802.svg
color: rgba(0, 184, 126, 0.2)
```

---

::: note Update

This Dagger 2 tutorial is now up to date with the latest version of Android Studio, version 3.0.1, and uses Kotlin for app development. Update by Dario Coletto. Original tutorial by Joe Howard.

:::

It turns out that Dependency Injection is nowhere near as complex as its name implies. And it is a key tool for building software systems that are maintainable and testable. In the end, relying on dependency injection will simplify your code quite a bit and also allow for a clearer path to writing testable code.

In this tutorial, you’ll update an existing app named DroidWiki to use DI. The __DroidWiki__ app is a simple wikipedia client for android, based on __Dagger 2__ and __OkHttp 3__. The Wikipedia API is based on MediaWiki, and you can find the documentation [here](https://www.mediawiki.org/wiki/API:Main_page). These API are public and there is no need to get API keys or other stuff. But you should definitely check out [MediaWiki Etiquette](https://www.mediawiki.org/wiki/API:Etiquette).

Here’s a quick peek at the search result screen in DroidWiki:

![DroidWiki app](https://koenig-media.raywenderlich.com/uploads/2017/09/DroidWiki-SearchActivity-333x500.png)

---

## Introduction

Before we begin, if you don’t know what Dependency Injection is, here’s some great news: you’re probably already using it without knowing it!

### What is Dependency Injection?

First, what is a dependency? Any non-trivial software program is going to contain components that pass information and send message calls back and forth between one another.

For example, when using an Object Oriented Programming language (such as Java/Kotlin on Android), objects will call methods on other objects that they have references to. A _dependency_ is when one of the objects depends on the concrete implementation of another object.

### Practical example of Dependency Injection

Consider a practical example in Kotlin code. You can identify a dependency in your code whenever you instantiate an object within another. In such a case, you are responsible for creating and configuring the object that is being created. For example, consider the following class `Parent`:

```kotlin
class Parent {
    private val child = Child()
}
```

A `Parent` instance creates its `child` field when it’s instantiated. The `Parent` instance is dependent on the concrete implementation of `Child` and on configuring the `child` field to use it.

This presents a coupling or dependency of the `Parent` class on the `Child` class. If the setup of a `Child` object is complex, all that complexity will be reflected within the `Parent` class as well. You will need to edit `Parent` to configure a `Child` object.

If the `Child` class itself depends on a class `C`, which in turn depends on class `D`, then all that complexity will propagate throughout the code base and hence result in a tight coupling between the components of the application.

__Dependency Injection__ is the term used to describe the technique of loosening the coupling just described. In the simple example above, only one tiny change is needed:

```kotlin
class Parent(private val child: Child)
```

Voilà — that’s dependency injection at its core!

Rather than creating the child object inside the `Parent` class, the `child` object is passed into or _injected_ into `Parent`‘s constructor. The responsibility for configuring `child` is elsewhere, and the `Parent` class is a consumer of the `Child` class.

### The Dependency Inversion Principle

Dependency injection is often discussed in conjunction with one of the five __SOLID principles__ of Object-Oriented Design: the __Dependency Inversion principle__. For a great introduction to the SOLID principles, particularly on Android, check out this [post from Realm on Dependency Inversion](https://realm.io/news/donn-felker-solid-part-5/).

The gist of the Dependency Inversion principle is that it is important to depend on abstractions rather than concrete implementations.

In the simple example above, this means changing `Child` to a Kotlin `interface` rather than a Kotlin `class`. With this change, many different types of concrete `Child` type objects that adhere to the `Child` interface can be passed into the `Parent` constructor. This presents several key benefits:

- Allows for the `Parent` class to be tested with various kinds of `Child` objects.
- Mock `Child` objects can be used as needed in certain test scenarios.
- Testing of `Parent` is independent of the implementation of `Child`.

### How can Dagger 2 help with DI

[Dagger 2](https://google.github.io/dagger/) is the result of a collaboration between the team behind [<FontIcon icon="iconfont icon-github"/>`google/guice`](https://github.com/google/guice) (developed by Google) and Dagger (the predecessor of Dagger 2, created by Square).

They fixed a lot of problems from their previous work, and Dagger 2 is the faster framework for DI (since it works at compile time rather than at runtime with reflection).

::: note Note

Dagger 2 is written in Java, but it works with Kotlin without any modification. However, the code generated by the annotation processor will be Java code (that is 100% interoperable with Kotlin).

:::

The name “Dagger” is inspired in part by the nature of dependencies in software development. The web of dependencies that occur between objects such as `Parent`, `Child`, `OtherClass`, etc., create a structure called a __Directed Acyclic Graph__. Dagger 2 is used to simplify the creation of such graphs in your Java and Android projects.

Enough theory! Time to start writing some code.

---

## Getting Started

Download the starter project [<FontIcon icon="iconfont icon-select"/>`[here]`][download-material].

Open the starter app in Android Studio 3.0.1 or greater and if it prompts you to update your gradle version, go ahead and do so. 

![Run the starter app in either an emulator or on a device, and you should see a screen like the following](https://koenig-media.raywenderlich.com/uploads/2017/09/DroidWiki-HomepageActivity.png =240x)

The app consists of three screens. The first one is just a splashscreen.

In the second one you’ll see an HTML version of the Wikipedia homepage, obtained through the WikiMedia API. The `Toolbar` at the top of the page contains a magnifier that, when tapped, will lead you to the third screen.

From there, you can type something to search on Wikipedia and press the search button to run a query. Results will be displayed as a list of `CardViews` inside a `RecyclerView`.

Examine the app project structure and existing classes. You’ll see that the app uses the __Model-View-Presenter__ (MVP) pattern to structure the code. Besides Dagger 2, the app uses common Android libraries such as:

- [OkHttp 3](http://square.github.io/okhttp/)
- `RecyclerView`
- [Kotlin synthetic properties](https://kotlinlang.org/docs/tutorials/android-plugin.html)

The subpackages in the main package are `application`, `model`, `network`, `ui` and `utils`. If you explore the `ui` package, you’ll see subpackages for the three screens. 

![Except for the splashscreen, each other package has classes for the view and presenter classes for the screen.](https://koenig-media.raywenderlich.com/uploads/2017/12/Screenshot-from-2017-12-04-14-54-59.png)

By examining the app <FontIcon icon="iconfont icon-engine"/>`build.gradle` file, you’ll also see that the app applies the plugin `kotlin-android-extensions`. It is used to implement view binding and `kotlin-kapt` for annotation processing.

### MVP

### Dependencies in DroidWiki

---

## Configure the Project With Dagger 2

---

## Dagger 2 public APIs

### Module

### `@Provides` and `@Singleton`

### Component

---

## Your first (dependency) injection

### Update HomepageActivity

### The General Pattern

---

## Injecting the Network Graph

### NetworkModule

### Simplifying API builder

### WikiModule

### Update PresenterModule

### Update WikiApi

---

## Where to Go From Here?

You can download the final project [<FontIcon icon="iconfont icon-select"/>Here][download-material-final].

A lot of developers asks themselves if all the changes you’ve applied to the DroidWiki app are useful or not. Especially since everything was already working before implementing dependency injection. The utility of dependency injection and a framework like Dagger 2 become most evident in real-world production apps, where the dependency graph can get very complex.

Dagger 2 and dependency injection become especially useful when implementing proper testing into your app, allowing mock implementations of back-end APIs and data repositories to be used in testing.

There’s much more to learn about in Dagger 2 and its usage, including:

- Scopes
- Subcomponents
- Testing with Mockito

There are many great resources out there on the interwebs to dive into these topics and one I must suggest is a __talk by Jake Wharton at DevOxx__, where you can get some more information about the history of DI on Android, some theory and some nice examples. As you do, happy injecting!

<YouTube id="plK0zyRLIP8"/>

If you have any questions or comments, please join the discussion below!

---

<TagLinks />

[download-material]: https://koenig-media.raywenderlich.com/uploads/2017/12/droidwiki-starter.zip
[download-material-final]: https://koenig-media.raywenderlich.com/uploads/2017/12/droidwiki-final.zip