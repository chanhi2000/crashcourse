---
lang: ko-KR
title: Kubernetes 사용하기
description: devkuma > Kubernetes 사용하기
icon: iconfont icon-k8s
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
      content: devkuma > Kubernetes 사용하기
    - property: og:description
      content: Kubernetes 사용하기
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/k8s/devkuma/environment.html
date: 2022-09-09
isOriginal: false
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

```component VPCard
{
  "title": "Kubernetes 사용하기 | devkuma", 
  "desc": "Kubernetes 사용하기", 
  "link": "https://devkuma.com/docs/kubernetes/environment/", 
  "logo": "https://devkuma.com/favicons/favicon.ico",
  "background": "rgba(48,99,142,0.2)"
}
```

---

## Kubernetes 환경
  
### 로컬 환경

로컬 환경에서 학습 환경을 구축하는 경우는 아래의 내용을 참고로 설치하여라.

```component VPCard
{
  "title": "Kubernetes 로컬 개발 환경 만들기 - minikube 설치 및 사용 | devkuma",
  "desc": "Kubernetes 로컬 개발 환경 만들기 - minikube 설치 및 사용",
  "link": "k8s/devkuma/minikube.md",
  "logo": "https://devkuma.com/favicons/favicon.ico",
  "background": "rgba(48,99,142,0.2)"
}
```

### 설치 없이 쿠버네티스 사용하기

웹상에서 Kubernetes를 사용할 수 있는 사이트는 아래와 같다. 로컬 환경에 환경을 구축하는 것이 귀찮다면 아래 사이트를 이용해도 된다.

- ~~카타코다 쿠버네티스 플레이 그라운드~~
  - ~~Master, node1이 구성되어 있어 바로 사용 가능~~
  - *2022년 6월 15일에 사이트를 폐쇄*
- [<FontIcon icon="fas fa-globe"/>Play with Kubernetes](https://labs.play-with-k8s.com/)
  - doccker 에서 제공. docker hub 계정 혹은 GitHub 계정으로 로그인
  - 4시간 사용 가능. Master, work Node를 직접 구성한 후 사용 가능

### 클라우드 서비스에 제공하는 쿠버네티스 도구

<SiteInfo
  name="Google Kubernetes Engine (GKE) | Google Cloud"
  desc="GKE is the industry's first fully managed Kubernetes service with full Kubernetes API, 4-way autoscaling, release channels, and multi-cluster support."
  url="https://cloud.google.com/kubernetes-engine"
  logo="https://www.gstatic.com/devrel-devsite/prod/v0d244f667a3683225cca86d0ecf9b9b81b1e734e55a030bdcd3f3094b835c987/cloud/images/favicons/onecloud/favicon.ico"
  preview="https://cloud.google.com/_static/cloud/images/social-icon-google-cloud-1200-630.png"/>

```component VPCard
{
  "title": "Amazon EKS란 무엇입니까? - Amazon EKS",
  "desc": "Amazon Elastic Kubernetes Service(Amazon EKS)는 Amazon Web Services(AWS)에 Kubernetes 컨트롤 플레인을 설치, 운영 및 유지 관리할 필요가 없는 관리형 서비스입니다.",
  "link": "https://docs.aws.amazon.com/ko_kr/eks/latest/userguide/what-is-eks.html",
  "logo": "https://docs.aws.amazon.com/assets/images/favicon.ico",
  "background": "rgba(247,155,38,0.2)"
}
```

<SiteInfo
  name="Azure Kubernetes Service (AKS) documentation"
  desc="AKS allows you to quickly deploy a production ready Kubernetes cluster in Azure. Learn how to use AKS with these quickstarts, tutorials, and samples."
  url="https://learn.microsoft.com/en-us/azure/aks/"
  logo="https://learn.microsoft.com/favicon.ico"
  preview="https://learn.microsoft.com/en-us/media/open-graph-image.png"/>

---

## kubeadm을 이용한 쿠버네티스 설치 - 온프레미스

1. Docker Install
  a. Master, Node 모든 시스템에 설치해야 한다.
  b. [Install Docker Desktop on Linux | 공식 문서](https://docs.docker.com/desktop/install/linux-install/)
2. Kubenetes Intall
3. 설치 전 환경 설정
4. `kubeadm`, `kubectl`, `kubelet` 설치
5. `control-plane` 구성
6. worker node 구성
7. 설치 확인

---
