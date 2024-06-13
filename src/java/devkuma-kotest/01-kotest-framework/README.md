---
lang: ko-KR
title: 01. Kotest 프레임워크(Framework)
description: 코틀린 테스팅 프레임워크 - Kotest > 01. Kotest 프레임워크(Framework)
category: 
  - Kotlin
  - Test
  - Kotest
tag: 
  - crashcourse
  - kotlin
  - test
  - kotest
head:
  - - meta:
    - property: og:title
      content: 코틀린 테스팅 프레임워크 - Kotest > 01. Kotest 프레임워크(Framework)
    - property: og:description
      content: 01. Kotest 프레임워크(Framework)
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/java/devkuma-kotest/01-kotest-framework/
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

```component VPCard
{
  "title": "Kotest 프레임워크(Framework)",
  "desc": "Kotlin의 테스팅 프레임워크에 대해 소개한다.",
  "link": "https://devkuma.com/docs/kotest/framework/",
  "logo": "https://devkuma.com/favicons/favicon.ico",
  "background": "rgba(48,99,142,0.2)"
}
```

Kotlin의 테스팅 프레임워크에 대해 소개한다.

---

## Table of Contents

```component VPCard
{
  "title": "Kotest 개요(overview)",
  "desc": "Kotlin의 테스팅 프레임워크에 대해 소개한다.",
  "link": "01A.md",
  "logo": "https://devkuma.com/favicons/favicon.ico",
  "background": "rgba(48,99,142,0.2)"
}
```

```component VPCard
{
  "title": "Kotest 프로젝트 설정(Setup)",
  "desc": "Kotest는 Kotlin으로 작성된 강력한 테스트 프레임워크이다. 프로젝트 설정을 하는 방법에 대해서 설명한다.",
  "link": "01B.md",
  "logo": "https://devkuma.com/favicons/favicon.ico",
  "background": "rgba(48,99,142,0.2)"
}
```

```component VPCard
{
  "title": "Kotest 기본 작성법(Writing tests)",
  "desc": "Kotest의 기본 작성법에 대해 설명한다.",
  "link": "01C.md",
  "logo": "https://devkuma.com/favicons/favicon.ico",
  "background": "rgba(48,99,142,0.2)"
}
```

```component VPCard
{
  "title": "Kotest 테스팅 스타일(Testing Styles)",
  "desc": "Kotest에는 다양한 테스트 스타일(Testing Styles)을 제공하고 있다. 여기서는 다양한 테스트 스타일에 대해서 설명한다.",
  "link": "01D.md",
  "logo": "https://devkuma.com/favicons/favicon.ico",
  "background": "rgba(48,99,142,0.2)"
}
```

```component VPCard
{
  "title": "Kotest 조건부 테스트(Conditional evaluation)",
  "desc": "테스트를 비활성화하는 방법에는 여러 가지가 있다. 테스트에서 하드 코딩하거나, 런타임에 조건부로 비활성화할 수도 있다.",
  "link": "01E.md",
  "logo": "https://devkuma.com/favicons/favicon.ico",
  "background": "rgba(48,99,142,0.2)"
}
```

```component VPCard
{
  "title": "Kotest 격리 모드(Isolation Modes)",
  "desc": "격리 모드(Isolation Modes)의 설정으로 테스트 엔진이 테스트 케이스에 대한 스펙 인스턴스를 생성하는 방법을 제어할 수 있다. 즉, 테스트 케이스마다 테스트 인스턴스를 어떻게 생성할지를 결정한다.",
  "link": "01F.md",
  "logo": "https://devkuma.com/favicons/favicon.ico",
  "background": "rgba(48,99,142,0.2)"
}
```

```component VPCard
{
  "title": "Kotest 기본 확장(Extensions)",
  "desc": "Kotest의 Extensions는 Kotest 테스트 실행 프레임워크에서 테스트 라이프사이클에 통합할 수 있는 다양한 기능을 제공하는 확장 기능이다.",
  "link": "01G.md",
  "logo": "https://devkuma.com/favicons/favicon.ico",
  "background": "rgba(48,99,142,0.2)"
}
```

```component VPCard
{
  "title": "Kotest 코루틴(Coroutines)",
  "desc": "Kotest에서 코루틴을 테스트하는 방법에 대해서 설명하다.",
  "link": "01H.md",
  "logo": "https://devkuma.com/favicons/favicon.ico",
  "background": "rgba(48,99,142,0.2)"
}
```

```component VPCard
{
  "title": "Kotest 예외 테스트(Testing Exceptions)",
  "desc": "",
  "link": "01I.md",
  "logo": "https://devkuma.com/favicons/favicon.ico",
  "background": "rgba(48,99,142,0.2)"
}
```

```component VPCard
{
  "title": "Kotest 데이터 기반 테스트(Data-Driven Testing)",
  "desc": "효과적인 테스트를 위해서는 테스트 데이터의 생성, 관리 및 정리가 중요한다. 이번 섹션에서는 Kotest를 사용하여 테스트 데이터를 어떻게 관리하는지에 대해 알아보겠다.",
  "link": "01J.md",
  "logo": "https://devkuma.com/favicons/favicon.ico",
  "background": "rgba(48,99,142,0.2)"  
}
```

```component VPCard
{
  "title": "Kotest 비결정적 테스트(Non-deterministic Testing)",
  "desc": "Non-deterministic Testing은 소프트웨어의 무결성을 검증하는 데 도움이 될 수 있다. 예를 들어, 병렬 프로세스, 외부 네트워크 호출, 다양한 시스템 자원에 대한 액세스 등과 같이 무작위성을 가지는 요소들을 포함하는 소프트웨어 시스템을 효과적으로 테스트할 수 있다.",
  "link": "01K.md",
  "logo": "https://devkuma.com/favicons/favicon.ico",
  "background": "rgba(48,99,142,0.2)"
}
```

```component VPCard
{
  "title": "Kotest 통합(Intergrations)",
  "desc": "Kotest와 모킹 프레임워크(mockk) 및 JaCoCo를 함께 사용하여 좀 더 견고하고 품질 높은 테스트를 작성할 수 있다. 여기에서는 테스트의 격리와 의존성 관리를 도와주는 mockk과 코드 커버리지 도구로, 코드베이스에서 얼마나 많은 부분이 테스트되었는지를 측정할 수 있는 JaCoCo에 대해서 설명한다.",
  "link": "01L.md",
  "logo": "https://devkuma.com/favicons/favicon.ico",
  "background": "rgba(48,99,142,0.2)"
}
```

```component VPCard
{
  "title": "Kotest 테스트 순서 제어(Ordering)",
  "desc": "Kotest에서의 Ordering은 테스트 실행의 순서를 제어하는 기능이다. 특정한 순서로 테스트를 실행하고 싶거나, 특정 조건에 따라 테스트를 필터링하고 실행할 때 유용하다.",
  "link": "01M.md",
  "logo": "https://devkuma.com/favicons/favicon.ico",
  "background": "rgba(48,99,142,0.2)"  
}
```

```component VPCard
{
  "title": "Kotest 태그를 사용하여 테스트 그룹화(Grouping Tests with Tags)",
  "desc": "효과적인 소프트웨어 테스트를 위해서는 테스트 케이스를 작성하고 관리하는 것이 중요하다. 이번 섹션에서는 Kotest를 사용하여 테스트 케이스를 작성하는 방법에 대해 알아보겠다.",
  "link": "01N.md",
  "logo": "https://devkuma.com/favicons/favicon.ico",
  "background": "rgba(48,99,142,0.2)"
}
```

```component VPCard
{
  "title": "Kotest 자원(Resources)",
  "desc": "Kotest에서의 리소스 자동으로 닫도록 하는 방법과 테스트에 필요한 파일 및 디렉터리 임시 생성 방법에 대해서 설명한다.",
  "link": "01O.md",
  "logo": "https://devkuma.com/favicons/favicon.ico",
  "background": "rgba(48,99,142,0.2)"
}
```

```component VPCard
{
  "title": "Kotest 설정(Configuration)",
  "desc": "Kotest 설정(Configuration)은 테스트 실행 동작을 커스터마이징하고 제어하는 데 사용된다. 다양한 설정 옵션을 제공하여 사용자가 테스트 환경을 원하는 대로 조정할 수 있다.",
  "link": "01P.md",
  "logo": "https://devkuma.com/favicons/favicon.ico",
  "background": "rgba(48,99,142,0.2)"
}
```

```component VPCard
{
  "title": "Kotest 테스트 팩토리(Test Factories)",
  "desc": "때로는 일반 테스트 세트를 작성한 다음 특정 입력에 재사용하고 싶을 때가 있다. Kotest에서는 하나 이상의 스펙에 포함될 수 있는 테스트를 생성하는 테스트 팩토리를 통해 이를 수행할 수 있다.",
  "link": "01Q.md",
  "logo": "https://devkuma.com/favicons/favicon.ico",
  "background": "rgba(48,99,142,0.2)"
}
```

```component VPCard
{
  "title": "Kotest 테스트 출력(Test Output)",
  "desc": "Kotest 테스트 결과를 출력하는 방법에 대해서 설명한다.",
  "link": "01R.md",
  "logo": "https://devkuma.com/favicons/favicon.ico",
  "background": "rgba(48,99,142,0.2)"
}
```

```component VPCard
{
  "title": "Kotest 타임아웃(timeouts)",
  "desc": "테스트에 호출 시간 제한을 두고 테스트를 하는 방법에 대해서 설명한다.",
  "link": "01S.md",
  "logo": "https://devkuma.com/favicons/favicon.ico",
  "background": "rgba(48,99,142,0.2)"
}
```

```component VPCard
{
  "title": "Kotest 다른 설정(Other settings)",
  "desc": "Kotest에서 빠르게 실패하는 방법, 빈 테스트인 경우 실패하게 하는 방법 등에 대해서 설명한다.",
  "link": "01T.md",
  "logo": "https://devkuma.com/favicons/favicon.ico",
  "background": "rgba(48,99,142,0.2)"
}
```

---

<TagLinks />