---
lang: ko-KR
title: 04. 데이터 시각화
description: 함께해요 파이썬 생태계 > 04. 데이터 시각화
category:
  - Python
tag: 
  - crashcourse
  - python
  - py
head:
  - - meta:
    - property: og:title
      content: 함께해요 파이썬 생태계 > 04. 데이터 시각화
    - property: og:description
      content: 04. 데이터 시각화
    - property: og:url
      content: https://chanhi2002.github.io/crashcourse/py/ecostystem/04.html
prev: /py/ecosystem/03/stats.md
date: 2024-01-25
isOriginal: false
cover: https://wikidocs.net/images/page/226671/%ED%8F%AC%EB%A7%B7%EB%B3%80%ED%99%98DALLE_2023-12-09_12.10.16_-_A_16_9_ratio_digital_artwork_illustrating_th_inH0bhs.jpg
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
  name="04. 데이터 시각화 | WikiDocs"
  desc="함께해요 파이썬 생태계"
  url="https://wikidocs.net/226671"
  logo="https://wikidocs.net/static/img/favicon.ico"
  preview="https://wikidocs.net/images/page/226671/%ED%8F%AC%EB%A7%B7%EB%B3%80%ED%99%98DALLE_2023-12-09_12.10.16_-_A_16_9_ratio_digital_artwork_illustrating_th_inH0bhs.jpg"/>

데이터 시각화는 복잡한 데이터 세트를 이해하기 쉬운 형태로 변환하는 강력한 도구입니다. 이 과정에서 다양한 Python 모듈을 사용할 수 있으며, 각각은 고유한 기능과 스타일을 제공합니다. 효과적인 시각화를 위해서는 한 가지 모듈에 깊게 파고들기보다는 여러 모듈이 제공하는 다양한 뷰를 이해하고 머릿속에 그림을 그리는 것이 중요합니다.

데이터가 준비 된 상황에서 실제 시각화 작업을 할 때는 다음과 같은 세 단계를 추천합니다:

1. **상상하기**: 먼저, 만들고 싶은 뷰를 상상해보세요. 이 때, 데이터의 종류, 복잡도, 그리고 전달하고자 하는 메시지를 고려하면 좋습니다.
2. **모듈 선택하기**: 상상한 뷰에 가장 적합한 모듈을 생각해보세요. 여기서는 모듈의 기능, 사용 용이성, 그리고 시각적 매력을 고려해야 합니다.
3. **예시 찾기**: 선택한 모듈에 대한 예시를 찾아보세요. 대부분의 모듈은 다양한 예시와 튜토리얼을 제공합니다. 이를 통해 기본적인 사용법을 익히고, 자신의 데이터에 맞게 수정해보세요.

다음은 데이터 시각화에 자주 사용되는 주요 Python 패키지들입니다:

- **Matplotlib**: 가장 널리 사용되는 시각화 라이브러리로, 간단한 차트부터 복잡한 그래프까지 다양한 시각화를 생성할 수 있습니다.
- **Seaborn**: Matplotlib을 기반으로 하며, 보다 세련된 시각화 스타일과 통계적 그래픽을 쉽게 만들 수 있습니다.
- **Plotly**: 인터랙티브한 그래프를 만들기에 적합하며, 웹 기반 시각화에 특화되어 있습니다.
- **Bokeh**: 대규모 데이터 세트를 처리하고, 동적이고 인터랙티브한 시각화를 만들기에 좋습니다.
- **Vega-Altair**: 선언적 시각화를 지원하는 라이브러리로, 간결하고 이해하기 쉬운 구문을 제공합니다.

각 모듈은 고유한 장점과 특성을 가지고 있으며, 프로젝트의 요구 사항과 개인의 선호에 따라 적절한 도구를 선택하는 것이 중요합니다. 다양한 예시와 문서를 참고하며, 데이터 시각화의 세계를 탐험해보세요!

![](https://wikidocs.net/images/page/226671/%ED%8F%AC%EB%A7%B7%EB%B3%80%ED%99%98DALLE_2023-12-09_12.10.16_-_A_16_9_ratio_digital_artwork_illustrating_th_inH0bhs.jpg)

```component VPCard
{
  "title": "Apache Superset: 데이터 탐색과 시각화를 위한 오픈 소스 BI 툴",
  "desc": "함께해요 파이썬 생태계",
  "link": "/py/ecosystem/04/apache-superset.md",
  "logo": "https://wikidocs.net/static/img/favicon.ico",
  "background": "rgba(51,122,183,0.2)"
}
```

```component VPCard
{
  "title": "Bokeh: 대규모 데이터의 웹 시각화",
  "desc": "함께해요 파이썬 생태계",
  "link": "/py/ecosystem/04/bokeh.md",
  "logo": "https://wikidocs.net/static/img/favicon.ico",
  "background": "rgba(51,122,183,0.2)"
}
```

```component VPCard
{
  "title": "Cartopy: 지리학적 데이터 시각화 라이브러리",
  "desc": "함께해요 파이썬 생태계",
  "link": "/py/ecosystem/04/cartopy.md",
  "logo": "https://wikidocs.net/static/img/favicon.ico",
  "background": "rgba(51,122,183,0.2)"
}
```

```component VPCard
{
  "title": "Chartify: Spotify에서 개발한 데이터 시각화 라이브러리",
  "desc": "함께해요 파이썬 생태계",
  "link": "/py/ecosystem/04/chartify.md",
  "logo": "https://wikidocs.net/static/img/favicon.ico",
  "background": "rgba(51,122,183,0.2)"
}
```

```component VPCard
{
  "title": "Diagrams: 시스템 구성도 다이어그램 생성 라이브러리",
  "desc": "함께해요 파이썬 생태계",
  "link": "/py/ecosystem/04/diagrams.md",
  "logo": "https://wikidocs.net/static/img/favicon.ico",
  "background": "rgba(51,122,183,0.2)"
}
```

```component VPCard
{
  "title": "Graphviz: 그래프 및 네트워크 다이어그램 생성",
  "desc": "함께해요 파이썬 생태계",
  "link": "/py/ecosystem/04/graphviz.md",
  "logo": "https://wikidocs.net/static/img/favicon.ico",
  "background": "rgba(51,122,183,0.2)"
}
```

```component VPCard
{
  "title": "HiPlot: 다차원의 데이터 시각화",
  "desc": "함께해요 파이썬 생태계",
  "link": "/py/ecosystem/04/hiPlot.md",
  "logo": "https://wikidocs.net/static/img/favicon.ico",
  "background": "rgba(51,122,183,0.2)"
}
```

```component VPCard
{
  "title": "Jupyter 기반 데이터 시각화",
  "desc": "함께해요 파이썬 생태계",
  "link": "/py/ecosystem/04/jupyter.md",
  "logo": "https://wikidocs.net/static/img/favicon.ico",
  "background": "rgba(51,122,183,0.2)"
}
```

```component VPCard
{
  "title": "Matplotlib: 가장 일반적인 시각화 라이브러리",
  "desc": "함께해요 파이썬 생태계",
  "link": "/py/ecosystem/04/matplotlib.md",
  "logo": "https://wikidocs.net/static/img/favicon.ico",
  "background": "rgba(51,122,183,0.2)"
}
```

```component VPCard
{
  "title": "NetworkX: 네트워크 구조의 모델링 및 시각화",
  "desc": "함께해요 파이썬 생태계",
  "link": "/py/ecosystem/04/network-x.md",
  "logo": "https://wikidocs.net/static/img/favicon.ico",
  "background": "rgba(51,122,183,0.2)"
}
```

```component VPCard
{
  "title": "PandasGUI: DataFrame을 쉽게 시각화하고 조작",
  "desc": "함께해요 파이썬 생태계",
  "link": "/py/ecosystem/04/pandas-gui.md",
  "logo": "https://wikidocs.net/static/img/favicon.ico",
  "background": "rgba(51,122,183,0.2)"
}
```

```component VPCard
{
  "title": "Plotly: 웹 기반 인터렉티브 시각화",
  "desc": "함께해요 파이썬 생태계",
  "link": "/py/ecosystem/04/plotly.md",
  "logo": "https://wikidocs.net/static/img/favicon.ico",
  "background": "rgba(51,122,183,0.2)"
}
```

```component VPCard
{
  "title": "Pygal: 파이썬 SVG 그래프 시각화 라이브러리",
  "desc": "함께해요 파이썬 생태계",
  "link": "/py/ecosystem/04/pygal.md",
  "logo": "https://wikidocs.net/static/img/favicon.ico",
  "background": "rgba(51,122,183,0.2)"
}
```

```component VPCard
{
  "title": "Seaborn: Matplotlib을 기반 통계적 데이터 시각화",
  "desc": "함께해요 파이썬 생태계",
  "link": "/py/ecosystem/04/seaborn.md",
  "logo": "https://wikidocs.net/static/img/favicon.ico",
  "background": "rgba(51,122,183,0.2)"
}
```

```component VPCard
{
  "title": "Vega-Altair: 선언적(Declarative) 방식의 웹 시각화",
  "desc": "함께해요 파이썬 생태계",
  "link": "/py/ecosystem/04/vega-altair.md",
  "logo": "https://wikidocs.net/static/img/favicon.ico",
  "background": "rgba(51,122,183,0.2)"
}
```

```component VPCard
{
  "title": "VisPy: 고성능 인터랙티브 데이터 시각화 라이브러리",
  "desc": "함께해요 파이썬 생태계",
  "link": "/py/ecosystem/04/vispy.md",
  "logo": "https://wikidocs.net/static/img/favicon.ico",
  "background": "rgba(51,122,183,0.2)"
}
```

```component VPCard
{
  "title": "Visvis: 객체 지향적인 3D 및 2D 시각화 라이브러리",
  "desc": "함께해요 파이썬 생태계",
  "link": "/py/ecosystem/04/visvis.md",
  "logo": "https://wikidocs.net/static/img/favicon.ico",
  "background": "rgba(51,122,183,0.2)"
}
```

```component VPCard
{
  "title": "flowfunc: flume 기반 노드 에디터 Web app.",
  "desc": "함께해요 파이썬 생태계",
  "link": "/py/ecosystem/04/flowfunc.md",
  "logo": "https://wikidocs.net/static/img/favicon.ico",
  "background": "rgba(51,122,183,0.2)"
}
```

```component VPCard
{
  "title": "folium: 지도 시각화 라이브러리",
  "desc": "함께해요 파이썬 생태계",
  "link": "/py/ecosystem/04/folium.md",
  "logo": "https://wikidocs.net/static/img/favicon.ico",
  "background": "rgba(51,122,183,0.2)"
}
```

```component VPCard
{
  "title": "h2o-wave: 실시간 웹 앱 및 대화형 대시보드",
  "desc": "함께해요 파이썬 생태계",
  "link": "/py/ecosystem/04/h2o-wave.md",
  "logo": "https://wikidocs.net/static/img/favicon.ico",
  "background": "rgba(51,122,183,0.2)"
}
```

```component VPCard
{
  "title": "nodezator: pygame 기반 노드 에디터",
  "desc": "함께해요 파이썬 생태계",
  "link": "/py/ecosystem/04/nodezator.md",
  "logo": "https://wikidocs.net/static/img/favicon.ico",
  "background": "rgba(51,122,183,0.2)"
}
```

```component VPCard
{
  "title": "turtle: 교육용 거북이 그래픽스 라이브러리",
  "desc": "함께해요 파이썬 생태계",
  "link": "/py/ecosystem/04/turtle.md",
  "logo": "https://wikidocs.net/static/img/favicon.ico",
  "background": "rgba(51,122,183,0.2)"
}
```

---
