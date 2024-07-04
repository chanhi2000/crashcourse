---
lang: ko-KR
title: "datetime: 날짜와 시간을 다루는 표준 라이브러리"
description: "함께해요 파이썬 생태계 > datetime: 날짜와 시간을 다루는 표준 라이브러리"
category:
  - Python
tag: 
  - crashcourse
  - python
  - py
head:
  - - meta:
    - property: og:title
      content: "함께해요 파이썬 생태계 > datetime: 날짜와 시간을 다루는 표준 라이브러리"
    - property: og:description
      content: "datetime: 날짜와 시간을 다루는 표준 라이브러리"
    - property: og:url
      content: https://chanhi2002.github.io/crashcourse/py/ecostystem/02/datetime.html
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
  "title": "datetime: 날짜와 시간을 다루는 표준 라이브러리 | WikiDocs",
  "desc": "함께해요 파이썬 생태계",
  "link": "https://wikidocs.net/227592",
  "logo": "https://wikidocs.net/static/img/favicon.ico",
  "background": "rgba(51,122,183,0.2)"
}
```

Python의 `datetime`[^1]라이브러리는 날짜와 시간을 다루기 위한 내장 라이브러리입니다. 이 라이브러리는 날짜와 시간의 생성, 조작, 연산 및 포맷팅과 관련된 다양한 클래스와 함수를 제공합니다. `datetime`은 프로그램에서 시간에 기반한 기능을 구현하는 데 필요한 광범위한 도구를 갖추고 있어, 시간 데이터를 다루는 다양한 애플리케이션에 매우 유용합니다.

---

::: tabs

@tab:active 주요 특징

1. **날짜와 시간 처리**: 날짜(date), 시간(time), 날짜와 시간의 조합(datetime), 시간 간격(timedelta) 등을 다룰 수 있는 클래스를 포함합니다.
2. **시간대 인식**: `datetime`은 시간대를 인식하고 처리할 수 있는 기능을 제공합니다. 이를 통해 다양한 시간대의 시간을 처리하고 변환할 수 있습니다.
3. **편리한 날짜/시간 연산**: 두 날짜/시간 간의 차이를 계산하거나, 특정 기간을 더하고 빼는 것과 같은 연산을 쉽게 수행할 수 있습니다.
4. **다양한 포맷팅과 파싱**: 날짜와 시간을 문자열로 변환하거나, 문자열에서 날짜와 시간을 파싱하는 기능을 제공합니다. 이를 통해 사용자 정의 포맷을 생성하거나 표준 포맷을 사용할 수 있습니다.

@tab 예제

```py
import datetime

# 현재 날짜와 시간
now = datetime.datetime.now()
print("Current date and time:", now)

# 특정 날짜 생성
some_date = datetime.date(2020, 1, 30)
print("Specific date:", some_date)

# 날짜와 시간 간격 계산 (timedelta)
ten_days_later = now + datetime.timedelta(days=10)
print("Ten days from now:", ten_days_later)

# 날짜 포맷팅
formatted_date = now.strftime("%Y-%m-%d %H:%M:%S")
print("Formatted date and time:", formatted_date)

# 문자열로부터 날짜 파싱
date_from_string = datetime.datetime.strptime("2024-01-15", "%Y-%m-%d")
print("Parsed date from string:", date_from_string)
```

@tab 활용처

1. **시간 기반 기능**: 웹 애플리케이션, 데이터베이스 관리 시스템, 로그 관리 시스템 등에서 시간 데이터를 저장, 처리 및 표시하는 데 사용됩니다.
2. **일정 관리 및 예약 시스템**: 회의, 예약, 이벤트 관리 등의 기능을 구현하는 데 사용됩니다.
3. **데이터 분석 및 보고서 작성**: 시간에 따른 데이터 추세 분석, 시계열 데이터 처리, 보고서의 타임스탬프 생성 등에 사용됩니다.

@tab 결론

`datetime` 라이브러리는 Python에서 날짜와 시간을 다루는 데 필수적인 도구입니다. 이 라이브러리의 유연성과 다양한 기능은 시간 관련 데이터의 처리와 분석을 간단하고 효율적으로 만들어 줍니다. 사용자 친화적인 API와 다양한 클래스들은 개발자가 복잡한 날짜 및 시간 연산을 쉽게 수행할 수 있도록 하며, 이는 파이썬을 시간 관련 애플리케이션 개발에 적합한 언어로 만듭니다.

:::

---

## Arrow: 날짜와 시간을 다루는 라이브러리

```component VPCard
{
  "title": "Arrow: 날짜와 시간을 다루는 라이브러리 | WikiDocs",
  "desc": "함께해요 파이썬 생태계",
  "link": "https://wikidocs.net/230471",
  "logo": "https://wikidocs.net/static/img/favicon.ico",
  "background": "rgba(51,122,183,0.2)"
}
```

<SiteInfo
  name="arrow-py/arrow"
  desc="🏹 Better dates & times for Python"
  url="https://github.com/arrow-py/arrow"
  logo="https://avatars.githubusercontent.com/u/68518399?s=200&v=4"
  preview="https://repository-images.githubusercontent.com/6750871/2d2ca080-cec5-11ea-9ec9-a472dcd7be5e"/>

<iframe frameborder="0" scrolling="0" width="170" height="30" align="right" title="arrow-py/arrow"
  src="https://ghbtns.com/github-btn.html?user=arrow-py&repo=arrow&type=star&count=true&size=large">
</iframe>

`arrow`[^2]는 Python에서 날짜와 시간을 다루기 위한 라이브러리로, `datetime` 모듈의 기능을 보완하고 사용자 친화적인 API를 제공합니다. `arrow`는 시간대를 처리하는 복잡성을 단순화하고, 다양한 날짜 형식을 쉽게 파싱하고 포맷팅할 수 있는 기능을 제공하여, 날짜와 시간 작업을 보다 직관적이고 편리하게 만듭니다.

::: tabs

@tab:active 주요 특징

- **사용자 친화적**: `arrow`는 `datetime` 모듈보다 더 직관적이고 간결한 API를 제공합니다. 이를 통해 날짜와 시간을 쉽게 조작하고 포맷할 수 있습니다.
- **시간대 지원**: `arrow`는 내장된 시간대 지원을 통해 시간대를 쉽게 다룰 수 있습니다. 이를 통해 다양한 시간대의 날짜와 시간을 쉽게 변환하고 처리할 수 있습니다.
- **국제화**: `arrow`는 다양한 언어로 날짜를 포맷하는 기능을 지원하여, 국제화된 애플리케이션 개발을 용이하게 합니다.
- **유연한 파싱 및 포맷팅**: 다양한 날짜 및 시간 형식을 쉽게 파싱하고 사용자 정의 포맷으로 날짜를 출력할 수 있습니다.

@tab 설치 방법

```sh
pip install arrow
```

@tab 기본 사용 예시

`arrow`를 사용하여 현재 날짜와 시간을 얻고, 다른 시간대로 변환하며, 다양한 형식으로 날짜와 시간을 포맷하는 방법은 다음과 같습니다:

```py
import arrow

# 현재 시간 가져오기
now = arrow.now()
print("현재 시간:", now)

# 특정 시간대의 현재 시간 가져오기
now_in_tokyo = arrow.now('Asia/Tokyo')
print("도쿄의 현재 시간:", now_in_tokyo)

# 날짜 파싱
date = arrow.get('2023-01-01', 'YYYY-MM-DD')
print("파싱된 날짜:", date)

# 날짜 포맷팅
formatted_date = now.format('YYYY-MM-DD HH:mm:ss')
print("포맷된 날짜:", formatted_date)

# 날짜 조작
tomorrow = now.shift(days=+1)
print("내일:", tomorrow)

# 특정 언어로 날짜 포맷팅
formatted_date_kr = now.format('YYYY년 MM월 DD일', locale='ko')
print("한국어로 포맷된 날짜:", formatted_date_kr)
```

@tab 결론

`arrow`는 Python에서 날짜와 시간을 다루는 작업을 보다 쉽고 직관적으로 만들어주는 강력한 라이브러리입니다. 시간대 처리, 국제화, 유연한 날짜 포맷팅 등의 기능을 제공하여, 개발자가 날짜와 시간 관련 작업을 보다 효율적으로 수행할 수 있도록 돕습니다.

:::

---

## pendulum: 날짜와 시간을 다루는 강력한 라이브러리

```component VPCard
{
  "title": "pendulum: 날짜와 시간을 다루는 강력한 라이브러리 | WikiDocs",
  "desc": "함께해요 파이썬 생태계",
  "link": "https://wikidocs.net/236271",
  "logo": "https://wikidocs.net/static/img/favicon.ico",
  "background": "rgba(51,122,183,0.2)"
}
```

<SiteInfo
  name="sdispater/pendulum"
  desc="Python datetimes made easy"
  url="https://github.com/sdispater/pendulum"
  logo="https://avatars.githubusercontent.com/u/555648?v=4"
  preview="https://opengraph.githubassets.com/09802e2306f616bc1292c3b0639ed3f88a2f9890b1f3c8cd3faedf70e6982b6f/sdispater/pendulum"/>

<iframe frameborder="0" scrolling="0" width="170" height="30" align="right" title="sdispater/pendulum"
  src="https://ghbtns.com/github-btn.html?user=sdispater&repo=pendulum&type=star&count=true&size=large" >
</iframe>

![](https://wikidocs.net/images/page/236271/Pendulum_logo.png)

`pendulum`[^3]은 파이썬의 날짜와 시간을 다루기 위한 강력하고 쉬운 방법을 제공하는 서드파티 라이브러리입니다. `datetime` 표준 라이브러리의 기능을 대체하거나 확장하며, 날짜와 시간 처리를 더욱 직관적이고 편리하게 만듭니다. `pendulum`은 시간대 처리를 간단하게 하고, 더욱 정확한 날짜 및 시간 연산을 지원합니다. 개발자가 일상적으로 직면하는 날짜와 시간에 관련된 다양한 문제를 쉽게 해결할 수 있도록 설계되었습니다.

::: tabs

@tab 주요 기능

- **향상된 시간대 지원**: 시간대를 간단하고 정확하게 처리
- **사람 친화적인 형식**: 날짜와 시간을 인간이 읽기 쉬운 형식으로 쉽게 변환
- **풍부한 연산 기능**: 날짜 간의 차이를 계산하거나, 특정 기간을 더하고 빼는 등의 연산을 지원
- **불변성**: `pendulum`의 날짜와 시간 객체는 불변(immutable)이기 때문에, 안전하게 사용
- **국제화 지원**: 다국어로 날짜와 시간을 형식화하는 기능을 제공

@tab 설치 방법

```sh
pip install pendulum
```

@tab 예제 코드

`pendulum` 라이브러리를 사용하여 현재 시간을 특정 시간대로 변환하고, 사람이 읽을 수 있는 형식으로 출력하는 예제입니다:

```py
import pendulum

now = pendulum.now('UTC')
print(now.to_datetime_string())

# 특정 시간대로 변환
seoul = now.in_timezone('Asia/Seoul')
print(seoul.to_datetime_string())

# 사람 친화적인 형식으로 출력
print(seoul.to_day_datetime_string())
```

@tab 사용 사례

- **웹 애플리케이션**: 사용자의 로컬 시간대에 맞춰 날짜와 시간을 표시해야 할 때 유용합니다.
- **데이터 분석 및 처리**: 시간대를 고려한 날짜와 시간의 연산이 필요한 데이터 분석 작업에 적합합니다.
- **시스템 스케줄링**: 특정 시간대에 따른 작업 스케줄링이 필요할 때 사용할 수 있습니다.

@tab 결론

`pendulum`은 파이썬에서 날짜와 시간을 다루는 작업을 보다 쉽고 직관적으로 만들어주는 라이브러리입니다. 특히 시간대 처리와 불변성을 제공함으로써, 날짜와 시간 관련 코드의 신뢰성과 안정성을 크게 향상시킬 수 있습니다. 다양한 프로젝트에서 날짜와 시간 처리가 필수적인 경우, `pendulum`은 매우 유용한 선택이 될 것입니다.

:::

---

## python-dateutil: datetime 라이브러리의 확장판

```component VPCard
{
  "title": "python-dateutil: datetime 라이브러리의 확장판 | WikiDocs",
  "desc": "함께해요 파이썬 생태계",
  "link": "https://wikidocs.net/235930",
  "logo": "https://wikidocs.net/static/img/favicon.ico",
  "background": "rgba(51,122,183,0.2)"
}
```

<SiteInfo
  name="dateutil/dateutil"
  desc="Useful extensions to the standard Python datetime features"
  url="https://github.com/dateutil/dateutil"
  logo="https://avatars.githubusercontent.com/u/9849410?s=200&v=4"
  preview="https://opengraph.githubassets.com/b8013803a22f84d18ecd13f61b1e675d91a17fa57ae6f5b86bb68e719331fd91/dateutil/dateutil"/>

<iframe frameborder="0" scrolling="0" width="170" height="30" align="right" title="dateutil/dateutil"
  src="https://ghbtns.com/github-btn.html?user=dateutil&repo=dateutil&type=star&count=true&size=large" >
</iframe>

`python-dateutil` 라이브러리는 복잡한 날짜 및 시간 계산을 위한 파이썬 표준 라이브러리인 `datetime`의 기능을 확장합니다. 이 라이브러리는 다양한 날짜/시간 포맷의 파싱, 상대적 및 절대적 날짜/시간 계산, 시간대 처리 등을 쉽게 할 수 있게 해줍니다. 다양한 날짜 및 시간 관련 작업을 수행해야 하는 애플리케이션 개발에 있어서 유용한 도구입니다.

::: tabs

@tab:active 주요 기능

- **날짜/시간 포맷 파싱**: 다양한 문자열 포맷의 날짜 및 시간을 파이썬 `datetime` 객체로 변환합니다.
- **상대적 및 절대적 날짜/시간 계산**: 날짜 및 시간의 덧셈, 뺄셈과 같은 계산을 쉽게 수행할 수 있습니다.
- **시간대 처리**: 시간대를 고려한 날짜 및 시간 계산을 지원합니다.
- **복잡한 규칙을 사용한 반복 발생 이벤트 처리**: 예를 들어, "매월 마지막 금요일"과 같은 복잡한 규칙을 사용하여 반복 발생하는 이벤트를 처리할 수 있습니다.

@tab 설치 방법

`python-dateutil`은 pip를 통해 쉽게 설치할 수 있습니다. 설치를 위해 터미널이나 명령 프롬프트에서 다음 명령어를 입력합니다.

```sh
pip install python-dateutil
```

@tab 예제 코드

문자열 포맷의 날짜를 파싱하여 `datetime` 객체로 변환하는 예제입니다.

```py
from dateutil import parser

date_string = "2023-04-01 12:34:56"
date_obj = parser.parse(date_string)

print(date_obj)
```

이 코드는 문자열 `"2023-04-01 12:34:56"`을 파싱하여 `datetime` 객체로 변환하고 출력합니다.

@tab 사용 사례

- **날짜/시간 데이터의 파싱 및 변환**: 로그 파일, 사용자 입력 등 다양한 소스에서 얻은 날짜 및 시간 정보를 처리할 때 사용됩니다.
- **일정 관리 애플리케이션**: 반복되는 일정, 시간대를 고려한 일정 계산 등을 수행할 때 유용합니다.
- **데이터 분석 및 시각화**: 시간대를 고려한 시계열 데이터 분석, 날짜/시간 관련 데이터의 전처리에 사용됩니다.

@tab 결론

`python-dateutil`은 날짜 및 시간 처리를 위한 강력하고 유연한 라이브러리입니다. 복잡한 날짜/시간 계산과 포맷 변환, 시간대 처리 등을 쉽게 할 수 있어, 다양한 파이썬 애플리케이션 개발에 있어 필수적인 도구로 활용될 수 있습니다. 이를 통해 개발자는 시간 관련 로직을 더욱 효과적으로 구현할 수 있습니다.

:::

---

## zoneinfo, pytz: IANA 시간대 지원 라이브러리

```component VPCard
{
  "title": "zoneinfo, pytz: IANA 시간대 지원 라이브러리 | WikiDocs",
  "desc": "함께해요 파이썬 생태계",
  "link": "https://wikidocs.net/236273",
  "logo": "https://wikidocs.net/static/img/favicon.ico",
  "background": "rgba(51,122,183,0.2)"
}
```

::: info IANA 시간대 표현을 위한 pytz와 zoneinfo의 비교

| 특징 | `pytz` | `zoneinfo` (Python 3.9 이상) |
| :---: | :--- | :--- |
| **설치** | 별도 설치 필요 (`pip install pytz`) | 기본 제공 (Python 3.9 이상) |
| **사용법** | 시간대 설정 시 `replace` 메서드 사용 | `datetime` 객체에 직접 시간대 지정 가능 |
| **통합성** | `datetime` 모듈과 통합 가능 | `datetime` 모듈과 자연스럽게 통합 |
| **시간대 데이터베이스** | Olson/IANA 시간대 데이터베이스 사용 | IANA 시간대 데이터베이스 사용 |
| **호환성** | Python 3.9 이전 버전에서도 사용 가능 | Python 3.9 이상에서만 사용 가능
| **유지 관리** | 커뮤니티에서 유지 관리 | Python 표준 라이브러리로 유지 관리

**저자의 의견:**

- **Python 3.9 이상**: `zoneinfo`를 사용하는 것이 더 간편하고 자연스러움.
- **Python 3.9 미만**: `pytz`를 사용하는 것이 적합.

:::

### `pytz`: Olson/IANA 시간대 처리 라이브러리

<iframe frameborder="0" scrolling="0" width="170" height="30" align="right" title="GitHub"
  src="https://ghbtns.com/github-btn.html?user=stub42&repo=pytz&type=star&count=true&size=large">
</iframe>

<SiteInfo
  name="stub42/pytz"
  desc="pytz Python historical timezone library and database"
  url="https://github.com/stub42/pytz"
  logo="https://avatars.githubusercontent.com/u/2928805?v=4"
  preview="https://opengraph.githubassets.com/36e7081f1890aa99e550851a672cd2015f5b244a6879c162f3077e40219c5f92/stub42/pytz"/>

`pytz` 라이브러리는 Python에서 시간대(time zone)를 처리하는 데 사용됩니다. 이 라이브러리는 전 세계의 모든 시간대를 지원하며, 표준 시간대와 일광 절약 시간제를 다루는 데 유용합니다. Python의 기본 datetime 모듈과 함께 사용하면 특정 시간대의 시간을 정확하게 관리하고 변환할 수 있습니다.

::: tabs

@tab:active 주요 기능

- 전 세계의 모든 시간대 지원
- 표준 시간대와 일광 절약 시간제 자동 관리
- 시간대 변환 기능 제공
- datetime 객체와의 통합

@tab 설치 방법

`pytz` 라이브러리는 pip를 통해 쉽게 설치할 수 있습니다. 다음 명령어를 사용하여 설치할 수 있습니다:

```sh
pip install pytz
```

@tab 예제 코드

pytz를 사용하는 예제 코드를 통해 시간대를 설정하고 변환하는 방법을 살펴보겠습니다.

```py
import pytz
from datetime import datetime

# 현재 시간 가져오기 (UTC 기준)
utc_now = datetime.utcnow()
print(f"현재 UTC 시간: {utc_now}")

# 뉴욕 시간대로 변환
new_york_tz = pytz.timezone('America/New_York')
new_york_time = utc_now.replace(tzinfo=pytz.utc).astimezone(new_york_tz)
print(f"뉴욕 시간: {new_york_time}")

# 서울 시간대로 변환
seoul_tz = pytz.timezone('Asia/Seoul')
seoul_time = utc_now.replace(tzinfo=pytz.utc).astimezone(seoul_tz)
print(f"서울 시간: {seoul_time}")
```

:::

### `zoneinfo`: IANA 시간대 지원 표준 라이브러리

`zoneinfo`[^4] 라이브러리는 Python 3.9 버전부터 표준 라이브러리의 일부로 추가된 모듈로, IANA 시간대 데이터베이스를 기반으로 한 시간대 처리를 지원합니다. 이 라이브러리를 사용하면 사용자는 다양한 시간대에 대한 정확한 시간 정보를 쉽게 처리할 수 있으며, 시간대 변환과 관련된 복잡성을 간소화할 수 있습니다.

::: tabs

@tab:active 주요 기능

- **시간대 지원**: `zoneinfo.ZoneInfo` 키를 사용하여 전 세계의 다양한 시간대 정보를 로드할 수 있습니다.
- **자동 업데이트**: 시스템 시간대 데이터를 사용하기 때문에, IANA 데이터베이스가 업데이트되면 자동으로 반영됩니다.
- **호환성**: Python의 `datetime` 모듈과 완벽하게 호환되어, 시간대를 고려한 날짜 및 시간 계산이 가능합니다.

@tab 설치 방법

Python 3.9 이상에서는 별도의 설치 과정 없이 바로 사용할 수 있습니다. 
하지만 Python 3.9 미만 버전을 사용하는 경우 `pip install backports.zoneinfo`로 패키지를 설치해야 합니다.

@tab 예제 코드

```py
from datetime import datetime
from zoneinfo import ZoneInfo

# 현재 시간 가져오기 (UTC 기준)
utc_now = datetime.utcnow()
print(f"현재 UTC 시간: {utc_now}")

# 뉴욕 시간대로 변환
new_york_time = utc_now.replace(tzinfo=ZoneInfo('America/New_York'))
print(f"뉴욕 시간: {new_york_time}")

# 서울 시간대로 변환
seoul_time = utc_now.replace(tzinfo=ZoneInfo('Asia/Seoul'))
print(f"서울 시간: {seoul_time}")
```

@tab 사용 사례

- **글로벌 이벤트 스케줄링**: 다국적 회사에서 전 세계 직원들을 위한 회의 시간을 조정할 때 사용할 수 있습니다.
- **로그 데이터 관리**: 서버 로그 데이터의 시간대를 통합하여 분석할 때 유용합니다.
- **여행 앱 개발**: 사용자의 현지 시간과 여행 목적지의 시간을 표시하는 기능을 개발할 때 활용됩니다.

@tab 결론

`pytz`와 `zoneinfo`는 모두 시간대 처리를 위한 강력한 도구입니다. Python 3.9 이상을 사용한다면 zoneinfo를 사용하는 것이 더 간편하고 자연스러울 수 있습니다. 그러나 pytz는 여전히 널리 사용되고 있으며, Python 3.9 이전 버전에서도 사용할 수 있다는 장점이 있습니다. 프로젝트의 요구 사항과 Python 버전에 따라 적절한 라이브러리를 선택하는 것이 중요합니다.

:::

---

<TagLinks />

[^1]: [https://docs.python.org/ko/3/library/datetime.html](https://docs.python.org/ko/3/library/datetime.html)
[^2]: [https://arrow.readthedocs.io/](https://arrow.readthedocs.io/)
[^3]: [https://pendulum.eustace.io/](https://pendulum.eustace.io/)
[^4]: [https://docs.python.org/ko/3/library/zoneinfo.html](https://docs.python.org/ko/3/library/zoneinfo.html)
