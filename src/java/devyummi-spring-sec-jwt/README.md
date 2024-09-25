---
lang: ko-KR
title: "개발자 유미 - 스프링 시큐리티 JWT"
description: "스프링 부트에 JWT 방식으로 인증을 진행하는 스프링 시큐리티를 적용하고 JWT 발급, 인증/인가를 구현하는 방법"
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
      content: "개발자 유미 - 스프링 시큐리티 JWT"
    - property: og:description
      content: "스프링 부트에 JWT 방식으로 인증을 진행하는 스프링 시큐리티를 적용하고 JWT 발급, 인증/인가를 구현하는 방법"
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/java/devyummi-spring-sec-jwt/
isOriginal: false
date: 2024-07-10
---

# {{ $frontmatter.title }} 관련

<SiteInfo
  name="스프링 시큐리티 JWT | 개발자 유미"
  desc="백엔드 개발자 유미 공식 커뮤니티 사이트"
  url="https://devyummi.com/page?id=668cfe58d3b43a6241eb6b6c"
  logo="https://yt3.googleusercontent.com/Ut0VEs84KLh62WyPC4QcQTBFo0GAjHUXv9Z1YUYKAVBV0vbgp90HT68ejnZ0NncO1X-gDfcfGQ=s160-c-k-c0x00ffffff-no-rj"
  preview="https://yummi-image-1.s3.amazonaws.com/image-0046f9c5-ec90-4f1a-bc08-aa2dbe7f34be.jpg"/>

스프링 부트에 JWT 방식으로 인증을 진행하는 스프링 시큐리티를 적용하고 JWT 발급, 인증/인가를 구현하는 방법

```component VPCard
{
  "title": "1. 실습 목표 및 간단한 동작 원리",
  "desc": "(1/14) 스프링 시큐리티 JWT",
  "link": "/java/devyummi-spring-sec-jwt/01.md",
  "logo": "https://yt3.googleusercontent.com/Ut0VEs84KLh62WyPC4QcQTBFo0GAjHUXv9Z1YUYKAVBV0vbgp90HT68ejnZ0NncO1X-gDfcfGQ=s160-c-k-c0x00ffffff-no-rj",
  "background": "rgba(88,88,88,0.2)"
}
```

```component VPCard
{
  "title": "2. 프로젝트 생성 및 의존성 추가",
  "desc": "(2/14) 스프링 시큐리티 JWT",
  "link": "/java/devyummi-spring-sec-jwt/02.md",
  "logo": "https://yt3.googleusercontent.com/Ut0VEs84KLh62WyPC4QcQTBFo0GAjHUXv9Z1YUYKAVBV0vbgp90HT68ejnZ0NncO1X-gDfcfGQ=s160-c-k-c0x00ffffff-no-rj",
  "background": "rgba(88,88,88,0.2)"
}
```

```component VPCard
{
  "title": "3. SecurityConfig 클래스",
  "desc": "(3/14) 스프링 시큐리티 JWT",
  "link": "/java/devyummi-spring-sec-jwt/03.md",
  "logo": "https://yt3.googleusercontent.com/Ut0VEs84KLh62WyPC4QcQTBFo0GAjHUXv9Z1YUYKAVBV0vbgp90HT68ejnZ0NncO1X-gDfcfGQ=s160-c-k-c0x00ffffff-no-rj",
  "background": "rgba(88,88,88,0.2)"
}
```

```component VPCard
{
  "title": "4. POSTMAN 설치",
  "desc": "(4/14) 스프링 시큐리티 JWT",
  "link": "/java/devyummi-spring-sec-jwt/04.md",
  "logo": "https://yt3.googleusercontent.com/Ut0VEs84KLh62WyPC4QcQTBFo0GAjHUXv9Z1YUYKAVBV0vbgp90HT68ejnZ0NncO1X-gDfcfGQ=s160-c-k-c0x00ffffff-no-rj",
  "background": "rgba(88,88,88,0.2)"
}
```

```component VPCard
{
  "title": "5. DB연결 및 Entity 작성",
  "desc": "(5/14) 스프링 시큐리티 JWT",
  "link": "/java/devyummi-spring-sec-jwt/05.md",
  "logo": "https://yt3.googleusercontent.com/Ut0VEs84KLh62WyPC4QcQTBFo0GAjHUXv9Z1YUYKAVBV0vbgp90HT68ejnZ0NncO1X-gDfcfGQ=s160-c-k-c0x00ffffff-no-rj",
  "background": "rgba(88,88,88,0.2)"
}
```

```component VPCard
{
  "title": "6. 회원가입 로직 구현",
  "desc": "(6/14) 스프링 시큐리티 JWT",
  "link": "/java/devyummi-spring-sec-jwt/06.md",
  "logo": "https://yt3.googleusercontent.com/Ut0VEs84KLh62WyPC4QcQTBFo0GAjHUXv9Z1YUYKAVBV0vbgp90HT68ejnZ0NncO1X-gDfcfGQ=s160-c-k-c0x00ffffff-no-rj",
  "background": "rgba(88,88,88,0.2)"
}
```

```component VPCard
{
  "title": "7. 로그인 필터 구현",
  "desc": "(7/14) 스프링 시큐리티 JWT",
  "link": "/java/devyummi-spring-sec-jwt/07.md",
  "logo": "https://yt3.googleusercontent.com/Ut0VEs84KLh62WyPC4QcQTBFo0GAjHUXv9Z1YUYKAVBV0vbgp90HT68ejnZ0NncO1X-gDfcfGQ=s160-c-k-c0x00ffffff-no-rj",
  "background": "rgba(88,88,88,0.2)"
}
```

```component VPCard
{
  "title": "8. DB기반 로그인 검증 로직",
  "desc": "(8/14) 스프링 시큐리티 JWT",
  "link": "/java/devyummi-spring-sec-jwt/08.md",
  "logo": "https://yt3.googleusercontent.com/Ut0VEs84KLh62WyPC4QcQTBFo0GAjHUXv9Z1YUYKAVBV0vbgp90HT68ejnZ0NncO1X-gDfcfGQ=s160-c-k-c0x00ffffff-no-rj",
  "background": "rgba(88,88,88,0.2)"
}
```

```component VPCard
{
  "title": "9. JWT 발급 및 검증 클래스",
  "desc": "(9/14) 스프링 시큐리티 JWT",
  "link": "/java/devyummi-spring-sec-jwt/09.md",
  "logo": "https://yt3.googleusercontent.com/Ut0VEs84KLh62WyPC4QcQTBFo0GAjHUXv9Z1YUYKAVBV0vbgp90HT68ejnZ0NncO1X-gDfcfGQ=s160-c-k-c0x00ffffff-no-rj",
  "background": "rgba(88,88,88,0.2)"
}
```

```component VPCard
{
  "title": "10. 로그인 성공 JWT 발급",
  "desc": "(10/14) 스프링 시큐리티 JWT",
  "link": "/java/devyummi-spring-sec-jwt/10.md",
  "logo": "https://yt3.googleusercontent.com/Ut0VEs84KLh62WyPC4QcQTBFo0GAjHUXv9Z1YUYKAVBV0vbgp90HT68ejnZ0NncO1X-gDfcfGQ=s160-c-k-c0x00ffffff-no-rj",
  "background": "rgba(88,88,88,0.2)"
}
```

```component VPCard
{
  "title": "11. JWT 검증 필터",
  "desc": "(11/14) 스프링 시큐리티 JWT",
  "link": "/java/devyummi-spring-sec-jwt/11.md",
  "logo": "https://yt3.googleusercontent.com/Ut0VEs84KLh62WyPC4QcQTBFo0GAjHUXv9Z1YUYKAVBV0vbgp90HT68ejnZ0NncO1X-gDfcfGQ=s160-c-k-c0x00ffffff-no-rj",
  "background": "rgba(88,88,88,0.2)"
}
```

```component VPCard
{
  "title": "12. 세션 정보",
  "desc": "(12/14) 스프링 시큐리티 JWT",
  "link": "/java/devyummi-spring-sec-jwt/12.md",
  "logo": "https://yt3.googleusercontent.com/Ut0VEs84KLh62WyPC4QcQTBFo0GAjHUXv9Z1YUYKAVBV0vbgp90HT68ejnZ0NncO1X-gDfcfGQ=s160-c-k-c0x00ffffff-no-rj",
  "background": "rgba(88,88,88,0.2)"
}
```

```component VPCard
{
  "title": "13. CORS 설정",
  "desc": "(13/14) 스프링 시큐리티 JWT",
  "link": "/java/devyummi-spring-sec-jwt/13.md",
  "logo": "https://yt3.googleusercontent.com/Ut0VEs84KLh62WyPC4QcQTBFo0GAjHUXv9Z1YUYKAVBV0vbgp90HT68ejnZ0NncO1X-gDfcfGQ=s160-c-k-c0x00ffffff-no-rj",
  "background": "rgba(88,88,88,0.2)"
}
```

```component VPCard
{
  "title": "14. JWT의 궁극적인 목표",
  "desc": "(14/14) 스프링 시큐리티 JWT",
  "link": "/java/devyummi-spring-sec-jwt/14.md",
  "logo": "https://yt3.googleusercontent.com/Ut0VEs84KLh62WyPC4QcQTBFo0GAjHUXv9Z1YUYKAVBV0vbgp90HT68ejnZ0NncO1X-gDfcfGQ=s160-c-k-c0x00ffffff-no-rj",
  "background": "rgba(88,88,88,0.2)"
}
```

---

## 코드

::: info 1~11강 코드 파일

- 1강 ~ 11강을 진행하며 생성된 코드입니다.
- `application.properties` 변수 설정을 진행하신 후 사용하시면 됩니다

[SpringJWT.zip](https://substantial-park-a17.notion.site/1-11-8f1a0ab664fb4d888b279d2fcd7b0afa?pvs=4)

:::

---

<TagLinks />