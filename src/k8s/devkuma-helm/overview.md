---
lang: ko-KR
title: Helm 개요
description: devkuma > Helm 개요
category: 
  - DevOps
  - Kubernetes
  - VM
  - Helm
tag: 
  - crashcourse
  - devkuma.com
  - kubernetes
  - k8s
  - helm
head:
  - - meta:
    - property: og:title
      content: devkuma > Helm 개요
    - property: og:description
      content: Helm 개요
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/k8s/devkuma-helm/overview.html
date: 2022-09-14
isOriginal: false
cover: https://www.devkuma.com/docs/helm/helm-site.png
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "목차",
  "desc": "Helm | devkuma",
  "link": "/k8s/devkuma-helm/README.md",
  "logo": "https://devkuma.com/favicons/favicon.ico",
  "background": "rgba(48,99,142,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="Helm 개요 | devkuma"
  desc="헬름(Helm)를 배우기 전에 먼저 쿠버네티스에 대해서 알아야 하기 때문에 쿠버네티스에 대해서 모른다면, Kubernetes에 대해 먼저 학습을 하고 오길 바란다."
  url="https://devkuma.com/docs/helm/overview/"
  logo="https://devkuma.com/favicons/favicon.ico"
  preview="https://www.devkuma.com/docs/helm/helm-site.png"/>

헬름(Helm)를 배우기 전에 먼저 쿠버네티스에 대해서 알아야 하기 때문에 쿠버네티스에 대해서 모른다면, [Kubernetes](/k8s/devkuma/README.md)에 대해 먼저 학습을 하고 오길 바란다.

---

## Helm 개요

Helm(헬름)은 Kubernetes 클러스터용 패키지 매니저로, Kubernetes 클러스터에서 실행되는 응용 프로그램에서 배포에 이 “Helm(헬름)” 이라는 도구를 활용된다.

Helm은 설정 파일을 바탕으로 어플리케이션의 배포를 자동 실행하는 도구로 Kubernetes 어플리케이션 패키지 매니저(package manger)로서 현재 가장 인기 있는 제품이다.

Helm은 Deis(2017년에 Microsoft가 인수)한 프로젝트 중 하나로, 2015년에 개최된 최초의 KubeCon(The Kubernetes Community Conference)에서 Helm Classic으로 발표되었다. Helm 프로젝트는 2016년 1월 Kubernetes 프로젝트와 통합되어 Kubernetes의 하위 프로젝트가 되었다. 그리고 2016년 후반에 Helm 2.0, 2018년 6월에 Helm 3.0이 출시되어 본격적인 CNCF(Cloud Native Computing Foundation) 프로젝트로 승격되었다.

---

## Kubernetes에 응용 프로그램을 배포하기 위한 사실상 표준 도구인 “Helm”

최근에는 컨테이너 클러스터 기술인 Kubernetes를 활용한 서비스의 운용이 늘어나고 있으며, Kubernetes에서 동작하는 것을 전제로 하는 소프트웨어도 등장하고 있다. 한편, Kubernetes에서의 어플리케이션의 배치에 대해서는 과제도 많다.

Kubernetes는 서비스를 여러 소규모 컴포넌트로 분할하여 구현하는 마이크로서비스 아키텍처와 궁합이 좋다. 이러한 구성의 서비스에서는 각 컨포넌트를 개별적으로 클러스터에 배포해야 한다. 또, 서비스를 외부에 공개해야 하거나, 각종 설정을 하기 위해서 Kubernetes 클러스터에 “리소스"를 작성하여 설정을 실행해야 한다. 이러한 작업은 때로는 복잡해지기 때문에 Kubernetes 클러스터에서 배포를 지원하거나 배포된 컨테이너를 관리하기 위한 다양한 도구가 등장하고 있다.

이번에 소개하려는 Helm은 그러한 Kubernetes 클러스터에의 어플리케이션의 배포를 지원하는 툴 중에 하나이다 (그림 1).

![Helm 공식 웹사이트](https://www.devkuma.com/docs/helm/helm-site.png)

최근의 OS나 프로그래밍 언어의 대부분에서는 제3자(Third-party)로 인해 만들어진 소프트웨어(패키지) 모와서 공개하는 서비스(리포지토리)가 제공되고 있고, 거기에 공개되고 있는 소프트웨어의 검색이나 다운로드, 인스톨 등을 간단한 조작으로 할 수 있는 “패키지 매니저"라고 하는 소프트웨어가 제공되어 있다. Helm은 Kubernetes용 패키지 매니저라고도 불리며, OS나 프로그래밍 언어의 패키지 매니저와 유사한 기능을 갖추고 있다. Helm이 제공하는 구체적인 기능을 간단히 정리하면 다음과 같다.

- Chart라고 하는 설정 파일을 기반으로 다양한 리소스 자동 생성
- 배포된 애플리케이션 삭제 및 업데이트와 같은 관리
- 리포지토리에 게시된 Chart 찾기, 다운로드 및 설치
- Chart 패키징 및 리포지토리에 업로드

Kubernetes의 베이스가 되고 있는 컨테이너 기술의 Docker에서는 이미 컨테이너 이미지를 제공하는 리포지토리 메카니즘이 이미 준비되어 있다. 그래서 Helm에서는 이미지 자체는 직접 다루지 않고, “Chart(차트)“라고 하는 설정 파일만을 리포지토리로 관리하는 구조로 되고 있다. 그 점을 제외하면 Helm에서 제공하는 기능은 일반적인 패키지 관리자가 제공하는 기능과 거의 동일하며, <code>helm</code>이라는 CLI 도구를 사용하여 Chart를 다운로드하거나, 이를 기반으로 클러스터에 자동으로 응용 프로그램을 배포할 수 있다.

또, Helm에서는 “stable"나 “incubator"라고 하는 명칭의 공식 리포지토리가 제공되고 있는 것 외에, 써드 파티에 의한 리포지토리도 많이 제공되고 있다. 이러한 리포지토리에 공개된 Chart는 [<FontIcon icon="fas fa-globe"/>Arfifact Hub](https://artifacthub.io/)라는 사이트에서 통해서 검색할 수 있게 되어 있다(그림 2).

![Helm의 공식 저장소 “Arfifact Hub”](https://www.devkuma.com/docs/helm/artifact-hub-site.png)

---

## Helm의 역사와 커뮤니티

Helm은 2016년 2월에 v1.0이 릴리스되어, 현재까지 2번의 메이저 업데이트가 진행되고 있다. 최신판은 2022년 8월에 발매된 v3.9.4이다.

- Helm v1
  - 2015년 DEIS의 내부 프로젝트로 시작
    - 2017년 DEIS는 Microsoft에 인수
- Helm v2
  - 2016년 1월 : Google 프로젝트에 합류
  - 2016 ~ 2018년 : Helm2 고도화(2.0.0 ~ 2.12.2)
  - 2018년 6월 : CNCF 프로젝트에 합류
- Helm v3
  - 2019년 11월 : 릴리즈 발표
  - 2019년 ~ 2021년 : Helm3 고도화(3.0.0 ~3.5.2)

예당초 Kubernetes의 서브 프로젝트로서 개발이 진행되고 있었지만, 그 후 Linux Foundation 산하의 비영리 단체인 Cloud Native Computing Foundation(CNCF) 산하가 되어, 현재도 그 체제로 개발이 진행되고 있다. CNCF는 클라우드 관련 기술 개발을 추진하는 단체로 Kubernetes 자체도 CNCF 산하에서 개발이 진행되고 있다. 이러한 역사적 배경 때문에 Helm은 Kubernetes의 (사실상) 공식 패키지 매니저라고도 알려져 있다.

Helm 프로젝트 자신이 제공하는 “stable"이나 “incubator” 등의 공식 리포지토리에서는 이미 다양한 어플리케이션의 Chart가 공개되고 있으며, 유지에 의해 작성된 Chart도 많이 공개되고 있다. 또, 이전에 소개한 Kubernetes 관련 툴의 Istio 나 Jenkins X 라고 하는 소프트웨어에서도, Helm이 공식의 설치 도구으로서 채택되어 사용되고 있다.

덧붙여, helm은 선박 등에서 사용되는 배의 키를 의미하는 단어이다. 또, chart는 향해용 지도에서 유래하고 있다.

---

## Helm의 주요 특징

Helm은 Go 언어로 작성되었으며 Helm 클라이언트와 Helm 라이브러리의 두 가지 구성 요소로 구성된다.

Helm은 Helm 클라이언트를 통해 Kubernetes에서 실행되는 응용 프로그램을 Linux yum 명령과 같이 설치 (배포)하고 제거 할 수 있다. 애플리케이션 관리는 차트(Chart)라는 패키지화된 구성 파일을 사용하여 수행된다. 차트에는 애플리케이션 자체가 포함되어 있지 않으며 애플리케이션을 구축하는 데 필요한 정보가 포함되어 있다. 또한 Artifact Hub라는 사이트에는 다양한 차트가 공개되어 있어 사용할 수 있다.

Helm 라이브러리는 Kubernetes 클라이언트 라이브러리를 사용하여 Kubernetes와 통신한다. 통신에는 REST+JSON이 사용된다. 자체 데이터베이스는 필요하지 않으며 Kubernetes 비밀에 데이터를 보관한다.

Helm의 기본 개념은 다음과 같다.

- **차트**: 응용 프로그램 인스턴스를 만드는데 필요한 구성 파일 집합이다.
- **구성**: 차트 설치시 응용 프로그램에 대한 다양한 매개 변수를 설정하기 위한 것이다.
- **릴리스**: 차트가 설치되고 애플리케이션(릴리스 오브젝트)이 실행 가능한 상태가 된 인스턴스를 릴리스라고 한다.

Helm은 다음을 할 수 있다.

- 차트 새로 만들기
- 차트를 차트 아카이브(tgz)로 패키징
- 차트가 저장된 차트 리포지토리 작업
- Kubernetes 클러스터에 차트 설치 및 제거
- Helm으로 설치한 차트의 릴리스주기 관리

Helm 클라이언트와 라이브러리의 역할은 각각 다음과 같다.

### Helm 클라이언트

최종 사용자를 위한 명령줄 프로그램에서 다음을 담당한다.

- 로컬 차트 개발
- 리포지토리 관리
- 릴리스 관리
- Helm 라이브러리와 협력하여 차트를 제출하거나 릴리스 업그레이드 및 제거 요청을 할 수 있다.

### Helm 라이브러리

모든 Helm 작업을 Kubernetes API와 함께 실행한다.

- 차트에서 릴리스 객체 만들기
- 릴리스 객체를 구축하고 Kubernetes에 설치
- 릴리스 객체를 업그레이드하거나 제거하기

---

## Helm과 유사한 도구

Helm과 유사한 도구로는 Ksonnet, Kapitan, Kustomize, kompose 및 Ansible이 있다.

---

## Helm 명령의 예

```sh
helm install   # 차트를 설치한다.
helm list      # 릴리스 목록을 표시한다. 
helm pull      # 차트를 다운로드하여 로컬로 확장한다. 
helm repo add  # 차트 리포지토리를 추가한다.
helm repo list # 차트 리포지토리 목록을 표시한다.
helm search    # 차트를 검색한다. 
helm show      # 차트의 세부 정보를 표시한다.
helm uninstall # 릴리스를 삭제한다.
helm upgrade   # 새 차트로 업그레이드한다.
```

---

## 참고

<SiteInfo
  name="Helm"
  desc="Helm - The Kubernetes Package Manager."
  url="https://helm.sh/"
  logo="https://helm.sh/img/favicon-152.png"
  preview="https://helm.sh/img/og-image.png"/>

<SiteInfo
  name="GitHub - helm/helm: The Kubernetes Package Manager"
  desc="The Kubernetes Package Manager. Contribute to helm/helm development by creating an account on GitHub."
  url="https://github.com/helm/helm"
  logo="https://avatars.githubusercontent.com/u/15859888?s=200&v=4"
  preview="https://opengraph.githubassets.com/f815db305c57d8c347529b4dbe0065898ecfc72616d504f7f291d587ce2e0878/helm/helm"/>

<SiteInfo
  name="Artifact Hub"
  desc="Find, install and publish Cloud Native packages"
  url="https://artifacthub.io/"
  logo="https://artifacthub.io/static/media/logo_v2.png"
  preview="https://artifacthub.io/static/media/artifactHub_v2.png"/>

---

<TagLinks />