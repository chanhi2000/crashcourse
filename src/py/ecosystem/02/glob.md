---
lang: ko-KR
title: "glob: 패턴 매칭 기반 파일 목록 찾기"
description: "함께해요 파이썬 생태계 > glob: 패턴 매칭 기반 파일 목록 찾기"
category:
  - Python
tag: 
  - crashcourse
  - python
  - py
head:
  - - meta:
    - property: og:title
      content: "함께해요 파이썬 생태계 > glob: 패턴 매칭 기반 파일 목록 찾기"
    - property: og:description
      content: "glob: 패턴 매칭 기반 파일 목록 찾기"
    - property: og:url
      content: https://chanhi2002.github.io/crashcourse/py/ecostystem/02/glob.html
date: 2024-05-06
isOriginal: false
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

```component VPCard
{
  "title": "glob: 패턴 매칭 기반 파일 목록 찾기 | WikiDocs",
  "desc": "함께해요 파이썬 생태계",
  "link": "https://wikidocs.net/230408",
  "logo": "https://wikidocs.net/static/img/favicon.ico",
  "background": "rgba(51,122,183,0.2)"
}
```

Glob 라이브러리는 파일 시스템에서 패턴 매칭을 사용하여 파일 목록을 찾는 Python의 내장 라이브러리입니다. 특정 규칙을 따르는 파일 이름을 검색할 때 유용하며, 복잡한 디렉토리 구조에서도 원하는 파일을 쉽게 찾을 수 있게 도와줍니다. Glob는 주로 와일드카드 문자(예: `*`, `?`, `[...]`)를 사용하여 파일 패턴을 지정합니다.

::: tabs

@tab:active 예제 코드

Glob[^1] 라이브러리의 주요 함수는 `glob.glob()` 입니다. 이 함수는 지정된 패턴과 일치하는 모든 파일 경로의 리스트를 반환합니다.

```py
import glob

# 현재 디렉토리의 모든 .txt 파일 목록을 찾습니다.
for filename in glob.glob('*.txt'):
    print(filename)

# 하위 디렉토리를 포함하여 모든 .py 파일을 찾습니다.
for filename in glob.glob('**/*.py', recursive=True):
    print(filename)
```

첫 번째 예제에서는 현재 디렉토리에 있는 모든 `.txt` 파일을 찾습니다. 두 번째 예제에서는 `**` 패턴과 `recursive=True` 옵션을 사용하여 현재 디렉토리와 모든 하위 디렉토리에서 `.py` 파일을 찾습니다.

@tab 사용 사례

- **파일 정리 및 관리**: 특정 패턴을 가진 파일을 찾아서 정리하거나 이동시킬 때 사용할 수 있습니다.
- **데이터 분석**: 데이터 분석 프로젝트에서 특정 패턴을 가진 데이터 파일만을 선택적으로 로드하기 위해 사용될 수 있습니다.
- **자동화 스크립트**: 백업, 로그 분석, 파일 시스템 관리 등의 자동화 스크립트에서 특정 파일을 대상으로 작업할 때 활용됩니다.

@tab 결론

Glob 라이브러리는 파일 시스템에서 패턴 기반의 파일 검색을 간단하게 해주는 매우 유용한 Python의 내장 라이브러리입니다. 간단한 API와 와일드카드 패턴을 사용하여 다양한 파일 처리 작업을 효율적으로 수행할 수 있으며, 파일 관리 및 데이터 처리 작업의 자동화에 큰 도움을 줍니다.

:::

---


[^1]: [https://docs.python.org/ko/3/library/glob.html](https://docs.python.org/ko/3/library/glob.html)