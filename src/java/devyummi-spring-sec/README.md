---
lang: ko-KR
title: "개발자 유미 - 스프링 시큐리티"
description: "스프링 부트에 세션 방식의 스프링 시큐리티를 적용하고 인증/인가를 구현하는 방법"
icon: iconfont icon-springboot
category: 
  - Java
  - Spring
  - Spring Boot
tag: 
  - crashcourse
  - java
  - jdk
  - jdk8
  - spring
  - springframework
  - springboot
head:
  - - meta:
    - property: og:title
      content: "개발자 유미 - 스프링 시큐리티"
    - property: og:description
      content: "스프링 부트에 세션 방식의 스프링 시큐리티를 적용하고 인증/인가를 구현하는 방법"
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/java/devyummi-spring-sec/
isOriginal: false
date: 2024-07-27
cover: https://yummi-image-1.s3.amazonaws.com/image-cd122909-caf3-4a36-9ac0-6158d0962d69.jpg
---

# {{ $frontmatter.title }} 관련

<SiteInfo
  name="스프링 시큐리티 | 개발자 유미"
  desc="백엔드 개발자 유미 공식 커뮤니티 사이트"
  url="https://devyummi.com/page?id=668bd2d92b88a1ef5f2be2e3"
  logo="https://yt3.googleusercontent.com/Ut0VEs84KLh62WyPC4QcQTBFo0GAjHUXv9Z1YUYKAVBV0vbgp90HT68ejnZ0NncO1X-gDfcfGQ=s160-c-k-c0x00ffffff-no-rj"
  preview="https://yummi-image-1.s3.amazonaws.com/image-cd122909-caf3-4a36-9ac0-6158d0962d69.jpg"/>

스프링 부트에 세션 방식의 스프링 시큐리티를 적용하고 인증/인가를 구현하는 방법

```component VPCard
{
  "title": 1. 실습 목표 및 간단한 동작 원리",
  "desc": "(1/14) 스프링 시큐리티",
  "link": "/java/devyummi-spring-sec/01.md",
  "logo": "https://yt3.googleusercontent.com/Ut0VEs84KLh62WyPC4QcQTBFo0GAjHUXv9Z1YUYKAVBV0vbgp90HT68ejnZ0NncO1X-gDfcfGQ=s160-c-k-c0x00ffffff-no-rj",
  "background": "rgba(88,88,88,0.2)"
}
```

```component VPCard
{
  "title": 2. 프로젝트 생성",
  "desc": "(2/14) 스프링 시큐리티",
  "link": "/java/devyummi-spring-sec/02.md",
  "logo": "https://yt3.googleusercontent.com/Ut0VEs84KLh62WyPC4QcQTBFo0GAjHUXv9Z1YUYKAVBV0vbgp90HT68ejnZ0NncO1X-gDfcfGQ=s160-c-k-c0x00ffffff-no-rj",
  "background": "rgba(88,88,88,0.2)"
}
```

```component VPCard
{
  "title": 3. Security Config 클래스",
  "desc": "(3/14) 스프링 시큐리티",
  "link": "/java/devyummi-spring-sec/03.md",
  "logo": "https://yt3.googleusercontent.com/Ut0VEs84KLh62WyPC4QcQTBFo0GAjHUXv9Z1YUYKAVBV0vbgp90HT68ejnZ0NncO1X-gDfcfGQ=s160-c-k-c0x00ffffff-no-rj",
  "background": "rgba(88,88,88,0.2)"
}
```

```component VPCard
{
  "title": 4. 커스텀 로그인",
  "desc": "(4/14) 스프링 시큐리티",
  "link": "/java/devyummi-spring-sec/04.md",
  "logo": "https://yt3.googleusercontent.com/Ut0VEs84KLh62WyPC4QcQTBFo0GAjHUXv9Z1YUYKAVBV0vbgp90HT68ejnZ0NncO1X-gDfcfGQ=s160-c-k-c0x00ffffff-no-rj",
  "background": "rgba(88,88,88,0.2)"
}
```

```component VPCard
{
  "title": 5. BCrypt 암호화 메소드",
  "desc": "(5/14) 스프링 시큐리티",
  "link": "/java/devyummi-spring-sec/05.md",
  "logo": "https://yt3.googleusercontent.com/Ut0VEs84KLh62WyPC4QcQTBFo0GAjHUXv9Z1YUYKAVBV0vbgp90HT68ejnZ0NncO1X-gDfcfGQ=s160-c-k-c0x00ffffff-no-rj",
  "background": "rgba(88,88,88,0.2)"
}
```

```component VPCard
{
  "title": 6. DB 연결",
  "desc": "(6/14) 스프링 시큐리티",
  "link": "/java/devyummi-spring-sec/06.md",
  "logo": "https://yt3.googleusercontent.com/Ut0VEs84KLh62WyPC4QcQTBFo0GAjHUXv9Z1YUYKAVBV0vbgp90HT68ejnZ0NncO1X-gDfcfGQ=s160-c-k-c0x00ffffff-no-rj",
  "background": "rgba(88,88,88,0.2)"
}
```

```component VPCard
{
  "title": 7. 회원 가입 로직",
  "desc": "(7/14) 스프링 시큐리티",
  "link": "/java/devyummi-spring-sec/07.md",
  "logo": "https://yt3.googleusercontent.com/Ut0VEs84KLh62WyPC4QcQTBFo0GAjHUXv9Z1YUYKAVBV0vbgp90HT68ejnZ0NncO1X-gDfcfGQ=s160-c-k-c0x00ffffff-no-rj",
  "background": "rgba(88,88,88,0.2)"
}
```

```component VPCard
{
  "title": 8. DB기반 로그인 검증 로직",
  "desc": "(8/14) 스프링 시큐리티",
  "link": "/java/devyummi-spring-sec/08.md",
  "logo": "https://yt3.googleusercontent.com/Ut0VEs84KLh62WyPC4QcQTBFo0GAjHUXv9Z1YUYKAVBV0vbgp90HT68ejnZ0NncO1X-gDfcfGQ=s160-c-k-c0x00ffffff-no-rj",
  "background": "rgba(88,88,88,0.2)"
}
```

```component VPCard
{
  "title": 9. 세션 정보",
  "desc": "(9/14) 스프링 시큐리티",
  "link": "/java/devyummi-spring-sec/09.md",
  "logo": "https://yt3.googleusercontent.com/Ut0VEs84KLh62WyPC4QcQTBFo0GAjHUXv9Z1YUYKAVBV0vbgp90HT68ejnZ0NncO1X-gDfcfGQ=s160-c-k-c0x00ffffff-no-rj",
  "background": "rgba(88,88,88,0.2)"
}
```

```component VPCard
{
  "title": "10. 세션 설정",
  "desc": "(10/14) 스프링 시큐리티",
  "link": "/java/devyummi-spring-sec/10.md",
  "logo": "https://yt3.googleusercontent.com/Ut0VEs84KLh62WyPC4QcQTBFo0GAjHUXv9Z1YUYKAVBV0vbgp90HT68ejnZ0NncO1X-gDfcfGQ=s160-c-k-c0x00ffffff-no-rj",
  "background": "rgba(88,88,88,0.2)"
}
```

```component VPCard
{
  "title": "11. CSRF 설정",
  "desc": "(11/14) 스프링 시큐리티",
  "link": "/java/devyummi-spring-sec/11.md",
  "logo": "https://yt3.googleusercontent.com/Ut0VEs84KLh62WyPC4QcQTBFo0GAjHUXv9Z1YUYKAVBV0vbgp90HT68ejnZ0NncO1X-gDfcfGQ=s160-c-k-c0x00ffffff-no-rj",
  "background": "rgba(88,88,88,0.2)"
}
```

```component VPCard
{
  "title": "12. InMemory 유저 정보 저장",
  "desc": "(12/14) 스프링 시큐리티",
  "link": "/java/devyummi-spring-sec/12.md",
  "logo": "https://yt3.googleusercontent.com/Ut0VEs84KLh62WyPC4QcQTBFo0GAjHUXv9Z1YUYKAVBV0vbgp90HT68ejnZ0NncO1X-gDfcfGQ=s160-c-k-c0x00ffffff-no-rj",
  "background": "rgba(88,88,88,0.2)"
}
```

```component VPCard
{
  "title": "13. HttpBasic 인증",
  "desc": "(13/14) 스프링 시큐리티",
  "link": "/java/devyummi-spring-sec/13.md",
  "logo": "https://yt3.googleusercontent.com/Ut0VEs84KLh62WyPC4QcQTBFo0GAjHUXv9Z1YUYKAVBV0vbgp90HT68ejnZ0NncO1X-gDfcfGQ=s160-c-k-c0x00ffffff-no-rj",
  "background": "rgba(88,88,88,0.2)"
}
```

```component VPCard
{
  "title": "14. Role Hierarchy",
  "desc": "(14/14) 스프링 시큐리티",
  "link": "/java/devyummi-spring-sec/14.md",
  "logo": "https://yt3.googleusercontent.com/Ut0VEs84KLh62WyPC4QcQTBFo0GAjHUXv9Z1YUYKAVBV0vbgp90HT68ejnZ0NncO1X-gDfcfGQ=s160-c-k-c0x00ffffff-no-rj",
  "background": "rgba(88,88,88,0.2)"
}
```

---

## deprecated 대처

```component VPCard
{
  "title": "Role Hierarchy 6.3.x 이후 버전 Deprecated",
  "desc": "(14/14) 스프링 시큐리티",
  "link": "/java/devyummi-spring-sec/deprecated.md", 
  "logo": "https://yt3.googleusercontent.com/Ut0VEs84KLh62WyPC4QcQTBFo0GAjHUXv9Z1YUYKAVBV0vbgp90HT68ejnZ0NncO1X-gDfcfGQ=s160-c-k-c0x00ffffff-no-rj",
  "background": "rgba(88,88,88,0.2)"
}
```

---

<TagLinks />