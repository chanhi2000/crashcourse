---
lang: ko-KR
title: 언제나 최신 Kubernetes
description: 언제나 최신 Kubernetes
icon: fas fa-dharmachakra
category:
  - Kubernetes
tag:
  - crashcourse
  - digitalocean
  - kubernetes
  - minkube
  - kubctl
head:
  - - meta:
    - property: og:title
      content: 언제나 최신 Kubernetes
    - property: og:description
      content: 언제나 최신 Kubernetes
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/kubernetes/always-up-to-date-kubernetes/
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

```component VPCard
{
  "title": "언제나 최신 Kubernetes",
  "desc": "언제나 최신 Kubernetes",
  "link": "https://pyrasis.com/jHLsAlwaysUpToDateKubernetes",
  "logo": "https://pyrasis.com/assets/images/pyrasis.png",
  "background": "rgba(31,41,55,0.2)"
}
```

## Table of Contents

- [01. Kubernetes](01.md)
- [02. Minikube 설치하기](02.md)
  - [<FontIcon icon="fa-brands fa-linux"/>리눅스](02A.md)
  - [<FontIcon icon="iconfont icon-macos"/>macOS](02B.md)
  - [<FontIcon icon="fa-brands fa-windows"/>Windows](02C.md)
- [03. Nginx 웹서버 실행하기](03.md)
  - [Minikube 클러스터 생성하기](03A.md)
  - [Nginx 웹서버 실행하기](03B.md)
- [04. Nginx YAML 설정 파일 작성하기](04.md)
  - [Nginx 디플로이먼트](04A.md)
  - [Nginx 서비스](04B.md)
  - [Nginx 디플로이먼트와 서비스의 구조 살펴보기](04C.md)
- [05. Spring Boot와 MySQL 실행하기](05.md)
  - [MySQL 스테이트풀셋 생성하기](05A.md)
  - [MySQL 스테이트풀셋과 서비스의 구조 살펴보기](05B.md)
  - [GitHub Personal Token 생성하기](05C.md)
  - [Spring Boot Docker 이미지와 디플로이먼트 생성하기](05D.md)
- [06. 로컬에서 Kubernetes 클러스터 구축하기](06.md)
  - [VirtualBox와 Vagrant 설치하기](06A.md)
  - [Vagrant와 kubeadm으로 가상머신에 클러스터 구축하기](06A.md)
  - [Vagrantfile 살펴보기](06B.md)
  - [NodePort로 서비스 생성하기](06C.md)
  - [인그레스와 LoadBalancer 서비스 생성하기](06D.md)
- [07. AWS에서 EC2로 Kubernetes 클러스터 구축하기](07.md)
  - [kOps 설치하기](07A.md)
  - [AWS CLI 설치 및 설정하기](07B.md)
  - [kOps로 클러스터 생성하기](07C.md)
  - [인그레스와 ELB LoadBalancer 서비스 생성하기](07D.md)
- [08. Helm으로 패키지 설치하기](08.md)
  - [Helm 설치하기](08A.md)
  - [Helm으로 MySQL 설치하기](08B.md)
- [09. Special Thanks](09.md)

---

<TagLinks />