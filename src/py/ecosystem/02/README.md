---
lang: ko-KR
title: 02. 운영 체제 및 시스템 관련
description: 함께해요 파이썬 생태계 > 02. 운영 체제 및 시스템 관련
category:
  - Python
tag: 
  - crashcourse
  - python
  - py
head:
  - - meta:
    - property: og:title
      content: 함께해요 파이썬 생태계 > 02. 운영 체제 및 시스템 관련
    - property: og:description
      content: 02. 운영 체제 및 시스템 관련
    - property: og:url
      content: https://chanhi2002.github.io/crashcourse/py/ecostystem/02.html
prev: /py/ecosystem/01B.md
date: 2024-05-06
isOriginal: false
cover: https://wikidocs.net/images/page/226619/00_%ED%8C%8C%EC%9D%B4%EC%8D%AC_%EC%83%9D%ED%83%9C%EA%B3%84_%EB%A1%9C%EA%B3%A0%EB%93%A4.png
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "목차",
  "desc": "함께해요 파이썬 생태계",
  "link": "/py/ecosystem/README.md",
  "logo": "https://wikidocs.net/static/img/favicon.ico",
  "background": "rgba(51,122,183,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="02. 운영 체제 및 시스템 관련 | WikiDocs"
  desc="함께해요 파이썬 생태계"
  url="https://wikidocs.net/238581"
  logo="https://wikidocs.net/static/img/favicon.ico"
  preview="https://wikidocs.net/images/page/226619/00_%ED%8C%8C%EC%9D%B4%EC%8D%AC_%EC%83%9D%ED%83%9C%EA%B3%84_%EB%A1%9C%EA%B3%A0%EB%93%A4.png"/>

이번 챕터에서는 파이썬을 사용하여 날짜, 시간, 파일, 그리고 시스템과 관련된 다양한 작업을 처리하는 데 도움이 되는 여러 라이브러리를 살펴볼 것입니다. 먼저, `datetime`과 그 확장 라이브러리인 `python-dateutil`, 그리고 더 고급 기능을 제공하는 `Arrow`와 `pendulum`을 통해 복잡한 날짜 및 시간 조작을 손쉽게 할 수 있습니다. 또한, `zoneinfo`를 사용하여 다양한 시간대 정보를 정확하게 처리하는 방법을 배울 것입니다.

파일과 디렉토리에 대한 조작은 `os`, `pathlib`, `shutil`, 그리고 `glob`을 통해 학습할 예정이며, 이들 라이브러리를 통해 파일 시스템을 보다 효과적으로 관리하고 자동화할 수 있는 방법을 알아볼 것입니다. `tempfile` 라이브러리를 사용하여 임시 파일과 폴더를 생성하고 관리하는 방법도 다룰 예정입니다.

마지막으로, `sys`와 `time` 라이브러리를 통해 시스템에 관련된 정보를 추출하고, 시간에 대한 저수준의 접근 및 조작 방법을 이해하게 될 것입니다. 이 모든 내용은 파이썬을 통한 효율적인 시스템 관리와 데이터 처리 작업에 꼭 필요한 지식을 제공할 것입니다. 이 챕터를 통해 파이썬의 강력한 기능을 활용하여 다양한 문제를 해결하는 데 필요한 실용적인 기술들을 배우게 됩니다.

```component VPCard
{
  "title": "datetime: 날짜와 시간을 다루는 표준 라이브러리",
  "desc": "함께해요 파이썬 생태계",
  "link": "/py/ecosystem/02/datetime.md",
  "logo": "https://wikidocs.net/static/img/favicon.ico",
  "background": "rgba(51,122,183,0.2)"
}
```

```component VPCard
{
  "title": "glob: 패턴 매칭 기반 파일 목록 찾기",
  "desc": "함께해요 파이썬 생태계",
  "link": "/py/ecosystem/02/glob.md",
  "logo": "https://wikidocs.net/static/img/favicon.ico",
  "background": "rgba(51,122,183,0.2)"
}
```

```component VPCard
{
  "title": "os: 운영 체제와 상호 작용하는 라이브러리",
  "desc": "함께해요 파이썬 생태계",
  "link": "/py/ecosystem/02/os.md",
  "logo": "https://wikidocs.net/static/img/favicon.ico",
  "background": "rgba(51,122,183,0.2)"
}
```

```component VPCard
{
  "title": "pathlib: 객체 지향 파일 시스템 경로",
  "desc": "함께해요 파이썬 생태계",
  "link": "/py/ecosystem/02/pathlib.md",
  "logo": "https://wikidocs.net/static/img/favicon.ico",
  "background": "rgba(51,122,183,0.2)"
}
```

```component VPCard
{
  "title": "shutil: 고수준 파일 연산 라이브러리",
  "desc": "함께해요 파이썬 생태계",
  "link": "/py/ecosystem/02/shutil.md",
  "logo": "https://wikidocs.net/static/img/favicon.ico",
  "background": "rgba(51,122,183,0.2)"
}
```

```component VPCard
{
  "title": "sys: 시스템 특정 파라미터와 함수",
  "desc": "함께해요 파이썬 생태계",
  "link": "/py/ecosystem/02/sys.md",
  "logo": "https://wikidocs.net/static/img/favicon.ico",
  "background": "rgba(51,122,183,0.2)"
}
```

```component VPCard
{
  "title": "tempfile: 임시 파일과 임시 폴더 생성",
  "desc": "함께해요 파이썬 생태계",
  "link": "/py/ecosystem/02/tempfile.md",
  "logo": "https://wikidocs.net/static/img/favicon.ico",
  "background": "rgba(51,122,183,0.2)"
}
```

```component VPCard
{
  "title": "time: 시간 액세스와 변환",
  "desc": "함께해요 파이썬 생태계",
  "link": "/py/ecosystem/02/time.md",
  "logo": "https://wikidocs.net/static/img/favicon.ico",
  "background": "rgba(51,122,183,0.2)"
}
```

---
