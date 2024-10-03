---
lang: ko-KR
title: Kubernetes 개요
description: devkuma > Kubernetes 개요
category: 
  - DevOps
  - Kubernetes
  - VM
tag: 
  - crashcourse
  - devkuma.com
  - kubernetes
  - k8s
head:
  - - meta:
    - property: og:title
      content: devkuma > Kubernetes 개요
    - property: og:description
      content: Kubernetes 개요
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/k8s/devkuma/overview.html
date: 2024-04-21
isOriginal: false
cover: https://devkuma.com/docs/kubernetes/microservices.png
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "목차",
  "desc": "Kubernetes | devkuma",
  "link": "/k8s/devkuma/README.md",
  "logo": "https://devkuma.com/favicons/favicon.ico",
  "background": "rgba(48,99,142,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="Kubernetes 개요 | devkuma"
  desc="쿠버네티스(Kubernetes)를 배우기 전에 먼저 도커에 대해서 알아야 하기 때문에 도커에 대해서 모른다면, Docker에 대해 먼저 학습을 하고 오길 바란다."
  url="https://devkuma.com/docs/kubernetes/overview/"
  logo="https://devkuma.com/favicons/favicon.ico"
  preview="https://devkuma.com/docs/kubernetes/microservices.png"/>

쿠버네티스(Kubernetes)를 배우기 전에 먼저 도커에 대해서 알아야 하기 때문에 도커에 대해서 모른다면, [Docker](/docker/devkuma/README.md)에 대해 먼저 학습을 하고 오길 바란다.

---

## 쿠버네티스란?

쿠버네티스(Kubernetes, 약어로 k8s)의 [<FontIcon icon="iconfont icon-k8s"/>공식 문서](https://kubernetes.io/ko/docs/home/)에 따르면, 오픈소스 시스템으로 “컨테이너를 관리하는 기반 도구” 이다
여러 호스트에서 컨테이너를 다루려는 경우에 편리하고, 어플리케이션의 개발 및 관리가 편하고 안전할 수 있게 해준다.

Google이 2014년 6월에 시작한 Go으로 만든 오픈 소스 소프트웨어(Open source software; OSS)이다.

`docker run`과 `docker-compose`의 차이점은 동일한 호스트에서 여러 컨테이너 관리 또는 단일 컨테이너 관리인지에 대한 차이이다. 이렇게 구성하면 호스트가 중지되면 컨테이너도 같이 중지가 되어 버린다. 따라서, 호스트를 여러 개 만들고 여러 컨테이너를 이러한 생성된 호스트 그룹에 할당해는 것이 “컨테이너 오케스트레이션(Container Orchestration) 도구"이다. 이런 도구로 Kubernetes가 가장 많이 사용되고 있다.

---

## Kubernetes의 특징

K8s라고도 알려진 Kubernetes의 기본 기능으로는 컨테이너으로 된 애플리케이션을 배포, 확장, 로드 균형 조정, 로깅, 모니터링 등이 있다.

또, 어플리케이션의 운영에는 신경을 많이 써야 하는 문제로서, 고부하 등으로 이상이 발생했을 조치해야 하거나, 스케일 아웃 하거나, 자동 장애 조치(Failover) 등이 필요하다.

VM을 사용하는 구성에서는 결국에는 관리는 그 VM 단위로 해야 되서 스케일 아웃, 자동 장애 조치의 설정도 VM 단위로 할 수 밖에 없다
Kubernetes를 사용하면 컨테이너 단위 또는 어플리케이션 단위로 관리 할 수 있고(실제로 VM을 사용하고 있으며 어플리케이션 단위로 관리하는 것 처럼 다를 수 있고), 스케일 아웃, 장애 ​​조치도 응용 프로그램 단위로 설정 수 있다.

---

## 왜 쿠버네티스를 사용하는가?

마이크로서비스 아키텍처를 하기 위해서는 쿠버네티스가 필요하다.

![[<FontIcon icon="fas fa-globe"/>Figure 1: Monoliths and Microservices](https://martinfowler.com/articles/microservices.html)](https://devkuma.com/docs/kubernetes/microservices.png)

마이크로서비스 아키텍처이란?

- 어플리케이션의 기능을 세분화하고 각각을 별도의 프로세스로 동작한다. (cf. 모놀리식 아키텍처: Monolithic Architecture)
- 구성 가능하고 확장 가능하며 유연하고 탄력적이다.
- 개발 체제도 스케일하게 동작한다.

좀 더 구체적으로 시스템에 변화된 구조를 보면서 보도록 하겠다.

![예전에는 대부분의 시스템들이 다기능인 프로세스으로 구성된 모놀리식 아키텍처로 구성되었다](https://devkuma.com/docs/kubernetes/service-architecture-1.png)

![그러다가, 아래와 같은 마이크로서비스 아키텍처가 도입이 되었다.](https://devkuma.com/docs/kubernetes/service-architecture-2.png)

![그러고 다시, 다시 마이크로서비스가 컨테이너 아키텍처로 변경이 되었다](https://devkuma.com/docs/kubernetes/service-architecture-3.png)

![이렇게 되므로써, 배포 단위가 세분화 되고 업데이트, 기능 추가가 용이해 졌다.](https://devkuma.com/docs/kubernetes/service-architecture-4.png)

이것만 보면 장점만 있는 것처럼 보이겠지만, 다른 한편으로 구조는 복잡해져서 관리는 어렵게 되었다.

- 컨테이너의 기동이 번거롭다.
- 컨테이너간 통신의 제어가 복잡하다.
- 컨테이너의 데이터 지속성은 어떻게 하는가?
- 컨테이너가 장애가 발생하였거나, 정지가 되었을때 회복은 어떻게 해야 할 것인가?

이런걸 불편한 점을 해결해 주는 것이 쿠버네티스이다.

이런 마이크로서비스 아키텍처에서 Kubernetes를 사용하게 되었었을 이점은 아래와 같다.

- 여러 호스트의 여러 컨테이너에 로드 밸런싱/워크로드를 분산할 수 있다.
- 1개의 Pod(컨테이너)가 정지했을 경우에도 자동으로 회복할 수 있다.
- 무정지 갱신(롤링, 업데이트)을 할 수 있다.
- 어플리케이션 가동 중에 Scale-up, Scale-down을 할 수 있다.

---

## Kubernetes 기능

### 클러스터링(Clustering)

- 여러 시스템을 클러스터링하고 리소스 풀링 할 수 있다.
- 클러스터를 구성하는 머신을 노드(Node)라고 한다.

### 매니페스트(manifest)를 통한 선언적 자원 관리

- 애플리케이션과 관련된 다양한 요소를 리소스로 관리한다.
- 자원(resource)의 정의를 YAML로 기술한다.
  - 이를 매니페스트라고 한다.
  - 자원의 조작이 아니라, 정의만을 기술한다. 그래서 선언적이라고 한다.

### 리소스 종류

- 컨테이너 : 단일 컨테이너. 직접 정의할 수 없다.
- Pod : 컨테이너를 통합 관리하는 것. VM과 같은 개념. 배포의 최소 단위.
- Deployment : Pod의 스케일링을 하는 것을 말한다.
- Service : 가상 라우터 및 로드 밸런서와 같은 것을 말한다.
- ConfigMap, Secret : 컨테이너 내의 설정 파일 등을 나타내는 것. Secret는 암호화된다.
- PersistentVolume : 지속성 볼륨. 호스트 디렉터리 및 NFS 공유 등.

### 선언적 자원 관리

- 리소스 정의가 등록되면 Kubernetes는 실제 리소스의 상태가 정의대로 작동한다.
- Pod의 컨테이너 이미지를 바꾸고 싶다면,
  - 그렇기 위해서는, 오래된 컨테이너를 지우고, 새로운 컨테이너의 기동을 지시한다.
  - 그렇기 하기 힘들다면, 컨테이너 이미지 이름을 다시 작성된 Pod 정의로 덮어 쓴다.

### 가상 플랫 네트워크

- 각 Pod는 여러 노드 분포되어 배포되는데, 모든 Pod는 가상 네트워크의 동일한 세그먼트에 있다.
- 가상 네트워크를 Kubernetes에서 Container간 통신을 하는 인터페이스는 CNI(Contaniner Network Interface)로 표준화되어 있다.
- 다양한 종류의 플러그인 존재한다.
  - 위브넷(Weave Net): VXLAN
  - 칼리코(calico): BGP
  - 플란넬(flannel)

### 가상 네트워크 내 DNS

- 로드 밸런서의 기능을 하는 Service에는 DNS명이 붙는다.
- 이 DNS 이름은 가상 네트워크 내의 DNS로 IP 주소로 해석할 수 있다.
- 즉, Pod를 Service의 뒤에 위에하여, Pod에 DNS명으로 액세스 할 수 있다.
  - Pod의 IP 주소는 동적으로 흔들리기 때문에 Service 경로의 액세스가 기본이다.

### 자원의 논리적 분할(그룹화)

- Namespace라는 리소스로, Pod나 Service등의 리소스를 그룹핑할 수 있다.
- Namespace마다 액세스를 격리하거나 하는 것은 아니기 때문에, 관리 목적으로 사용하는 것이다.

### 컨테이너 생사 감시 및 오토 힐링(Auto Healing)

- 컨테이너의 생사 감시를 정의할 수 있다.
- 다음 중 하나를 주기적으로 수행하여 결과로 생사를 확인한다.
  - HTTP 폴링
  - TCP 핑
  - 모든 명령
- 컨테이너가 정지되었다고 판단되면, Kubernetes가 재기동해 준다.

### 그밖에

- Pod 복제
- Pod 롤링 업데이트
- 원샷 작업 (Job)
- 정기 실행 태스크(CronJob)
- Pod당 네임스페이스당 리소스(CPU, 메모리) 제한
- 가상 네트워크 액세스 정책(NetworkPolicy)

---

## 참고

<SiteInfo
  name="쿠버네티스 문서 | Kubernetes"
  desc="쿠버네티스는 컨테이너화된 애플리케이션의 배포, 확장 및 관리를 자동화하기 위한 오픈소스 컨테이너 오케스트레이션 엔진이다. 오픈소스 프로젝트는 Cloud Native Computing Foundation에서 주관한다."
  url="https://kubernetes.io/ko/docs/home/"
  logo="https://kubernetes.io/icons/icon-128x128.png"
  preview="https://kubernetes.io/images/kubernetes-horizontal-color.png"/>

<SiteInfo
  name="[따배쿠] 쿠버네티스 시리즈 - YouTube"
  desc="[따배쿠] 쿠버네티스 시리즈 - YouTube"
  url="https://www.youtube.com/playlist?list=PLApuRlvrZKohaBHvXAOhUD-RxD0uQ3z0c"
  logo="https://www.youtube.com/s/desktop/bd305dd4/img/favicon_144x144.png"
  preview="https://i.ytimg.com/vi/6n5obRKsCRQ/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLA6EVopRMxR_iGQdkDjjoXFixmE5Q&days_since_epoch=19886"/>

<!-- TODO: MyYoutubeItem으로 처리 -->

<SiteInfo
  name="쿠버네티스 #1 - 소개 | 조대협의 블로그"
  desc="Kubernetes #1 - 소개 조대협 배경도커와 쿠버네티스를 알게 된건 수년전인데, 근래에 들어서 다시 쿠버네티스를 보기 시작하였다.컨테이너 기반의 환경은 배포에 장점이 있고 마이크로 서비스 아키텍쳐 구조에 잘 맞아들어가는 듯 싶지만, 컨테이너가 약간 빠르다는 장점은 있지만, 가상 머신으로도 충분히 패키징이 가능하고, 로컬의 개발환경을 동기화 시키는 장점은 vagrant 로도 충분하다는 생각을 가지고 있었다. 그리고 결정적으로 도커 컨테이너를 운용하기 위한 컨테이너 관리 환경이 그다지 성숙하지 못했었다. Mesosphere, Swarm, Kubernetes 등 다양한 환경이 나오기는 하였지만 기능적으로 부족한 부분도 많았고, 딱히 어떤 플랫폼이 대세라고 정.."
  url="https://bcho.tistory.com/m/1255"
  logo="https://t1.daumcdn.net/tistory_admin/static/mobile/logo/bi-tistory.svg"
  preview="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F990BE94D5AFEF4A20F"/>

---
