---
lang: ko-KR
title: "비동기 라이브러리 - asyncio 등"
description: "실시간 통신 > 비동기 라이브러리 - asyncio 등"
category:
  - Python
tag: 
  - crashcourse
  - python
  - py
head:
  - - meta:
    - property: og:title
      content: "실시간 통신 > 비동기 라이브러리 - asyncio 등"
    - property: og:description
      content: "비동기 라이브러리 - asyncio 등"
    - property: og:url
      content: https://chanhi2002.github.io/crashcourse/py/ecostystem/06/network-web-scraping/async.html
next: /py/ecosystem/06/was/README.md
date: 2024-06-25
isOriginal: false
cover: https://wikidocs.net/images/page/236798/websockets_logo.png
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
  "title": "비동기 라이브러리 - asyncio 등 | WikiDocs",
  "desc": "함께해요 파이썬 생태계",
  "link": "https://wikidocs.net/227613",
  "logo": "https://wikidocs.net/static/img/favicon.ico",
  "background": "rgba(51,122,183,0.2)"
}
```

파이썬은 다양한 비동기 프로그래밍 라이브러리를 제공하여 비동기 I/O 및 병렬 처리를 쉽게 구현할 수 있습니다. 이 글에서는 파이썬의 주요 비동기 라이브러리인 `Twisted`, `Tornado`, `Gevent`, `asyncio`를 소개하고, 각 라이브러리의 특징과 사용 예제를 살펴보겠습니다.

| 특징 | Twisted | Tornado | Gevent | asyncio |
| :---: | :--- | :--- | :--- | :--- |
| 도입 시기 | 2002년 | 2009년 | 2009년 | 2014년 (Python 3.4) |
| 비동기 방식 | 이벤트 드리븐(event-driven) | 이벤트 루프(event loop) | 그린 스레드(green threads) | 코루틴(coroutines) |
| 주요 사용 사례 | 다양한 네트워크 프로토콜 지원 | 비동기 웹 서버, 웹 애플리케이션 | 비동기 네트워크, I/O 바운드 애플리케이션 | 다양한 비동기 애플리케이션 |
| 네트워크 프로토콜 | HTTP, FTP, SMTP 등 다양한 프로토콜 지원 | HTTP, 웹소켓 | HTTP, 웹소켓 | HTTP, 웹소켓 |
| 주요 라이브러리 | twisted.web, twisted.conch 등 | tornado.web, tornado.websocket 등 | gevent.pywsgi, gevent.socket 등 | aiohttp, Sanic, FastAPI 등 |
| 코드 작성 방식 | 콜백(callback) 기반 | 콜백(callback) 및 Future 기반 | 동기식 코드를 비동기로 변환 | async/await 문법 |
| 학습 곡선 | 높음 | 중간 | 낮음 | 중간 |
| 커뮤니티 지원 | 중간 | 중간 | 낮음 | 높음 |

---

## 1. Twisted

<iframe src="https://ghbtns.com/github-btn.html?user=twisted&repo=twisted&type=star&count=true&size=large" frameborder="0" scrolling="0" width="170" height="30" align="right" title="GitHub"></iframe>

![](https://wikidocs.net/images/page/227613/Twisted_logo.png)

Twisted는 파이썬에서 가장 오래된 비동기 네트워크 라이브러리 중 하나로, 다양한 네트워크 프로토콜을 지원합니다. 복잡한 네트워크 애플리케이션을 구축할 때 유용하며, 풍부한 기능과 확장성을 제공합니다. 그러나 Twisted는 복잡한 API와 문서화 문제로 인해 사용이 어렵다는 평가를 받았습니다.

::: tabs

@tab:active 특징

- 다양한 네트워크 프로토콜 지원 (HTTP, FTP, SMTP, 등)
- 이벤트 드리븐(event-driven) 아키텍처
- 높은 확장성과 유연성

@tab 예제

```py
from twisted.internet import reactor
from twisted.web.server import Site
from twisted.web.resource import Resource

class HelloResource(Resource):
    isLeaf = True
    def render_GET(self, request):
        return b"Hello, world!"

resource = HelloResource()
factory = Site(resource)
reactor.listenTCP(8080, factory)
reactor.run()
```

:::

---

## 2. Tornado

<iframe src="https://ghbtns.com/github-btn.html?user=tornadoweb&repo=tornado&type=star&count=true&size=large" frameborder="0" scrolling="0" width="170" height="30" align="right" title="GitHub"></iframe>

![](https://wikidocs.net/images/page/227613/Tornado_logo.png)

Tornado는 비동기 웹 프레임워크로, 특히 웹 서버와 같은 I/O 바운드 애플리케이션에서 널리 사용됩니다. 빠른 속도와 확장성을 제공하며, 비동기 네트워크 라이브러리로도 사용될 수 있습니다. Twisted에 비해 사용이 더 간편하고, 비동기 웹 프레임워크로 많이 채택되었습니다.

::: tabs

@tab:active 특징

- 높은 성능의 비동기 웹 서버
- 웹소켓 및 장기 폴링(long-polling) 지원
- 간단하고 직관적인 API

@tab 예제

```py
import tornado.ioloop
import tornado.web

class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.write("Hello, world!")

def make_app():
    return tornado.web.Application([
        (r"/", MainHandler),
    ])

if __name__ == "__main__":
    app = make_app()
    app.listen(8888)
    tornado.ioloop.IOLoop.current().start()
```

:::

---

## 3. Gevent

<iframe src="https://ghbtns.com/github-btn.html?user=gevent&repo=gevent&type=star&count=true&size=large" frameborder="0" scrolling="0" width="170" height="30" align="right" title="GitHub"></iframe>

![](https://wikidocs.net/images/page/227613/gevent_logo.png)

Gevent는 그린 스레드(green thread)를 사용하는 비동기 I/O 라이브러리입니다. 기존의 동기 코드를 거의 수정 없이 비동기로 전환할 수 있으며, 단순한 네트워크 애플리케이션을 빠르게 작성할 수 있습니다. 그러나 라이브러리의 성숙도와 커뮤니티 지원 면에서 일부 한계가 있었습니다.

::: tabs

@tab:active 특징

- 그린 스레드를 사용한 협력적 멀티태스킹
- 블로킹 I/O 함수의 비동기 변환 지원
- 간단하고 직관적인 API

@tab 예제

```py
import gevent
from gevent import monkey
monkey.patch_all()
from gevent.pywsgi import WSGIServer
from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello():
    return "Hello, world!"

if __name__ == '__main__':
    http_server = WSGIServer(('0.0.0.0', 5000), app)
    http_server.serve_forever()
```

:::

---

## 4. asyncio

Asyncio[^1]는 파이썬 3.4에서 표준 라이브러리로 도입된 비동기 프로그래밍 프레임워크입니다. 코루틴, 이벤트 루프, 태스크, 그리고 미래(future) 객체를 사용하여 비동기 I/O를 처리합니다. 최신 파이썬 생태계와 잘 통합되며, 다양한 비동기 라이브러리와 프레임워크의 기반이 됩니다. 많은 최신 비동기 라이브러리와 프레임워크(aiohttp, Sanic, FastAPI 등)가 asyncio를 기반으로 개발되었습니다. 그러나 초기 버전에서 성능과 사용성 문제로 인해 혼란이 있었고, 여러 비동기 프레임워크가 경쟁하는 상황이 지속되었습니다.

::: tabs

@tab:active 특징

- 파이썬 표준 라이브러리로 제공
- 코루틴을 사용한 명시적 비동기 프로그래밍
- 다양한 비동기 라이브러리와 프레임워크 지원

@tab 예제

```py
import asyncio
import time

async def say_after(delay, what):
    await asyncio.sleep(delay)
    print(what)

async def main():
    print(f"started at {time.strftime('%X')}")

    # 두 개의 코루틴을 동시에 실행합니다.
    await asyncio.gather(
        say_after(1, 'hello'),
        say_after(2, 'world')
    )

    print(f"finished at {time.strftime('%X')}")

# Python 3.7 이상에서는 asyncio.run()을 사용하여 main 코루틴을 실행할 수 있습니다.
asyncio.run(main())
```

:::

### 결론

파이썬의 비동기 프로그래밍 라이브러리는 각각 고유한 특징과 강점을 가지고 있습니다. `Twisted`는 다양한 네트워크 프로토콜을 지원하는 복잡한 애플리케이션에 적합하며, `Tornado`는 높은 성능의 비동기 웹 서버를 제공합니다. `Gevent`는 그린 스레드를 사용하여 기존의 동기 코드를 비동기로 쉽게 전환할 수 있으며, `asyncio`는 최신 파이썬 표준 라이브러리로 다양한 비동기 애플리케이션에 유용합니다.

프로젝트의 요구사항과 환경에 따라 적합한 비동기 라이브러리를 선택하여 사용하면, 비동기 프로그래밍의 이점을 극대화할 수 있습니다.

---

## Asyncer: 비동기 프로그래밍을 위한 유틸리티

<SiteInfo
  name="Asyncer: 비동기 프로그래밍을 위한 유틸리티 | WikiDocs"
  desc="함께해요 파이썬 생태계"
  url="https://wikidocs.net/230465"
  logo="https://wikidocs.net/static/img/favicon.ico"
  preview="https://wikidocs.net/images/page/230465/Asyncer_logo.png"/>

<!-- TODO: 작성 -->

---

## Trio: 비동기 동시성 및 I/O를 위한 라이브러리

<SiteInfo
  name="Trio: 비동기 동시성 및 I/O를 위한 라이브러리 | WikiDocs"
  desc="함께해요 파이썬 생태계"
  url="https://wikidocs.net/237668"
  logo="https://wikidocs.net/static/img/favicon.ico"
  preview="https://wikidocs.net/images/page/237668/trio_logo.png"/>

<!-- TODO: 작성 -->

---

## Twisted: 이벤트 기반 네트워킹 엔진

<SiteInfo
  name="Twisted: 이벤트 기반 네트워킹 엔진 | WikiDocs"
  desc="함께해요 파이썬 생태계"
  url="https://wikidocs.net/236712"
  logo="https://wikidocs.net/static/img/favicon.ico"
  preview="https://wikidocs.net/images/page/236712/Twisted_logo.png"/>

<!-- TODO: 작성 -->

---

## aiohttp: 비동기 HTTP 클라이언트/서버 프레임워크

<SiteInfo
  name="aiohttp: 비동기 HTTP 클라이언트/서버 프레임워크 | WikiDocs"
  desc="함께해요 파이썬 생태계"
  url="https://wikidocs.net/229758"
  logo="https://wikidocs.net/static/img/favicon.ico"
  preview="https://wikidocs.net/images/page/229758/AIOHTTP_logo.png"/>

<!-- TODO: 작성 -->

---

## gevent: 비동기 프로그래밍을 위한 경량화된 코루틴 라이브러리

<SiteInfo
  name="aiohttp: 비동기 HTTP 클라이언트/서버 프레임워크 | WikiDocs"
  desc="함께해요 파이썬 생태계"
  url="https://wikidocs.net/232893"
  logo="https://wikidocs.net/static/img/favicon.ico"
  preview="https://wikidocs.net/images/page/232893/gevent_logo.png"/>

<!-- TODO: 작성 -->

---

<TagLinks />

[^1]: [https://docs.python.org/ko/3/library/asyncio.html](https://docs.python.org/ko/3/library/asyncio.html)