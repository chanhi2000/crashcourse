---
lang: ko-KR
title: Kubernetes 아키텍처
description: devkuma > Kubernetes 아키텍처
icon: fas fa-dharmachakra
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
      content: devkuma > Kubernetes 아키텍처
    - property: og:description
      content: Kubernetes 아키텍처
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/k8s/devkuma/architecture.html
date: 2022-09-10
isOriginal: false
cover: https://devkuma.com/docs/kubernetes/kubernetes-architecture-diagram.png
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
  name="Kubernetes 아키텍처 | devkuma"
  desc="Kubernetes를 배포하면 클러스터가 배포된다. 이 Kubernetes 클러스터는 컨테이너으로 된 애플리케이션을 실행하는 노드(Node)라고 하는 작업자 머신의 집합이다. 애플리케이션의 컴포넌트를 Pod라고 하며, 위에 다이어그램과 같이 이 Pod가 하나 이상의 노드에 포함되어 배포된다. 노드 제어는 kubelet이라는 에이전트에서 수행되며, 노드에 대한 액세스는 kube-proxy라는 프록시를 통해 이루어 진다. 컨트롤 플레인(Control plane)이라는 구성 요소는 클러스터를 제어하는 기능을 갖는다. Kubernetes의 노드 Kubernetes에서는 클러스터 전체를 관리하는 컨트롤러로써 마스터 노드(Master Node) 가 존재하고, 컨테이너가 배포되는 머신 (가상머신이나 물리적인 서버머신)인 워커 노드(Worker Node) 가 존재한다."
  url="https://devkuma.com/docs/kubernetes/architecture/"
  logo="https://devkuma.com/favicons/favicon.ico"
  preview="https://devkuma.com/docs/kubernetes/kubernetes-architecture-diagram.png"/>

<!-- TODO: 작성 -->

---

<TagLinks />