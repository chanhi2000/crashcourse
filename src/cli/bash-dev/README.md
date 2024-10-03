---
lang: ko-KR
title: Bash 쉘스크립트 개발 시작하기
description: Bash 쉘스크립트 개발 시작하기
icon: iconfont icon-shell
category: 
  - CLI
  - Linux
tag: 
  - crashcourse
  - cli
  - sh
  - shell
  - linux
head:
  - - meta:
    - property: og:title
      content: Bash 쉘스크립트 개발 시작하기
    - property: og:description
      content: Bash 쉘스크립트 개발 시작하기
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/bash-dev/
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

```component VPCard
{
  "title": "Bash 쉘스크립트 개발 시작하기",
  "desc": "Bash 쉘스크립트 개발 시작하기 - WikiDocs",
  "link": "https://wikidocs.net/book/2370",
  "logo": "https://wikidocs.net/static/img/favicon.ico",
  "background": "rgba(255,255,255,0.2)"
}
```

이 책은 처음으로 리눅스로 시스템을 운영하게 되면서 Bash 쉘로 스크립트를 작성하게 되는 개발자를 위해서 도움이 되는 리눅스의 기본 개념과 기본 명령어, 스크립트 작성 Tip을 정리하기 위해 작성하였습니다.

윈도우 환경에서만 개발을 하다가 처음으로 리눅스 CLI환경을 접하게 되면 당황할 수 있습니다. 하지만 기본 개념을 이해하고, 명령어를 사용하다 보면 CLI환경이 더 쉽게 느껴질 것입니다.

이 책의 기준은 아마존 AWS EC2의 CentOS, Ubuntu를 기반으로 bash 쉘을 기반으로 작성되었습니다. 내용이 이상하거나 수정해야 할 사항은 연락주시면 바로 수정하겠습니다.

업무에 많은 도움이 되면 좋겠습니다. 감사합니다.

---

## Table of Contents

```component VPCard
{
  "title": "Bash 쉘스크립트 개발 시작하기 > 1. 리눅스 기초",
  "desc": "1. 리눅스 기초",
  "link": "01.md",
  "logo": "https://wikidocs.net/static/img/favicon.ico",
  "background": "rgba(255,255,255,0.2)"
}
```

```component VPCard
{
  "title": "Bash 쉘스크립트 개발 시작하기 > 2. 명령어",
  "desc": "2. 명령어",
  "link": "02.md",
  "logo": "https://wikidocs.net/static/img/favicon.ico",
  "background": "rgba(255,255,255,0.2)"
}
```

```component VPCard
{
  "title": "Bash 쉘스크립트 개발 시작하기 > 3. 쉘스크립트",
  "desc": "3. 쉘스크립트",
  "link": "03.md",
  "logo": "https://wikidocs.net/static/img/favicon.ico",
  "background": "rgba(255,255,255,0.2)"
}
```

```component VPCard
{
  "title": "Bash 쉘스크립트 개발 시작하기 > 4. 서비스 운영 스크립트",
  "desc": "4. 서비스 운영 스크립트",
  "link": "04.md",
  "logo": "https://wikidocs.net/static/img/favicon.ico",
  "background": "rgba(255,255,255,0.2)"
}
```

---

## 📚참고문서

쉘스크립트 작성에 도움이 될 사이트 들을 정리하였습니다.

```component VPCard
{
  "title": "Bash Reference Manual",
  "desc": "This text is a brief description of the features that are present in the Bash shell (version 5.2, 19 September 2022)",
  "link": "https://www.gnu.org/savannah-checkouts/gnu/bash/manual/bash.html",
  "logo": "https://www.gnu.org/favicon.ico",
  "background": "rgb(231,231,231,0.2)"
}
```

```component VPCard
{
  "title": "고급 Bash 스트립팅 가이드",
  "desc": "Bash를 이용한 쉘 스크립팅 완전 가이드",
  "link": "https://wiki.kldp.org/HOWTO/html/Adv-Bash-Scr-HOWTO/index.html",
  "logo": "https://wiki.kldp.org/favicon.ico",
  "background": "rgb(255,255,255,0.2)"
}
```

```component VPCard
{
  "title": "NHNCloud Meetup > 리눅스 서버의 TCP 네트워크 성능을 결정짓는 커널 파라미터 이야기 - 1편",
  "desc": "리눅스 서버의 TCP 네트워크 성능을 결정짓는 커널 파라미터 이야기 - 1편",
  "link": "https://meetup.toast.com/posts/53",
  "logo": "https://meetup.nhncloud.com/resources/img/favicon.ico",
  "background": "rgb(255,255,255,0.2)"
}
```

```component VPCard
{
  "title": "NHNCloud Meetup > 리눅스 서버의 TCP 네트워크 성능을 결정짓는 커널 파라미터 이야기 - 2편",
  "desc": "리눅스 서버의 TCP 네트워크 성능을 결정짓는 커널 파라미터 이야기 - 2편",
  "link": "https://meetup.toast.com/posts/54",
  "logo": "https://meetup.nhncloud.com/resources/img/favicon.ico",
  "background": "rgb(255,255,255,0.2)"
}
```

```component VPCard
{
  "title": "NHNCloud Meetup > 리눅스 서버의 TCP 네트워크 성능을 결정짓는 커널 파라미터 이야기 - 3편",
  "desc": "리눅스 서버의 TCP 네트워크 성능을 결정짓는 커널 파라미터 이야기 - 3편",
  "link": "https://meetup.toast.com/posts/55",
  "logo": "https://meetup.nhncloud.com/resources/img/favicon.ico",
  "background": "rgb(255,255,255,0.2)"
}
```

---
