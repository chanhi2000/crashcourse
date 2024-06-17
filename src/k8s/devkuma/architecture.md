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

---
  
## 아키텍처 이해

![쿠버네티스 아키텍처 다이어그램 - 출처 : Wikipedia](https://devkuma.com/docs/kubernetes/kubernetes-architecture-diagram.png)

Kubernetes를 배포하면 클러스터가 배포된다. 이 Kubernetes 클러스터는 컨테이너으로 된 애플리케이션을 실행하는 노드(Node)라고 하는 작업자 머신의 집합이다. 애플리케이션의 컴포넌트를 Pod라고 하며, 위에 다이어그램과 같이 이 Pod가 하나 이상의 노드에 포함되어 배포된다. 노드 제어는 `kubelet`이라는 에이전트에서 수행되며, 노드에 대한 액세스는 `kube-proxy`라는 프록시를 통해 이루어 진다.

컨트롤 플레인(Control plane)이라는 구성 요소는 클러스터를 제어하는 ​​기능을 갖는다.

---

## Kubernetes의 노드

Kubernetes에서는 클러스터 전체를 관리하는 컨트롤러로써 **마스터 노드(Master Node)** 가 존재하고, 컨테이너가 배포되는 머신 (가상머신이나 물리적인 서버머신)인 **워커 노드(Worker Node)** 가 존재한다.

![마스터 노드와 워커 노드](https://devkuma.com/docs/kubernetes/kubernetes-master-worker.png)

**마스터 노드(Master Node)** 라고 하는 Docker에서 말하는 Daemon과 같은 역할을 가진 노드에 클라이언트로부터 커멘드를 보내고, 그것을 받은 마스터 노드가 **워커 노드(Worker Node)** 라고 하는 노드에 커멘드를 보내는 구조로 되어 있다.

마스터 노드(Master node, Control plane)의 역할은 다음과 같다.

- 클러스터 제어
- 워커 노드들의 상태를 관리하고 제어
- 스케줄링, 라이프사이클 모니터링
- 부하 분산, 자동 복구
- single master
- multi master(3, 5개의 master nodes)

워커 노드(Worker node)의 역할은 다음과 같다.

- 컨테이너가 실행되는 서버
- 도커 플랫폼을 통해 컨테이너를 동작하며 실제 서비스 제공
- 다중 노드로 클러스터 형성
- 마스터 노드의 명령에 따라 Pod 생성, 삭제

각 구성 요소는 HTTPS를 통해 통신하여 클러스터를 형성한다.

클라이언트는 실행 커멘드를 입력하는 것은 콘솔이지만, Kubernetes의 경우는 `kubectl` 커멘드를 통하여 매니페스트(manifest)라고 하는 각종 설정을 작성한 파일을 생성하거나, 매니페스트 파일에 근거해 마스터 노드에 자원의 조작을 실행되도록 명령한다.

---

## 컨트롤 플레인 컨포넌트 (Control plane component, 마스터 컴포넌트)

- `kube-apiserver`
  - Kubernetes 자원 정의를 조작하기 위한 REST API 외부에 제공한다.
  - Kubernetes 컨트롤 플레인의 프런트 엔드
- `etcd`
  - `kube-apiserver`가 자원 정의 등을 저장하는 DB이다.
  - 분산 DB이므로 보통을 클러스터로 구성한다.
  - 일관성, 고가용성을 가진 Key-value 저장소
  - Kubernetes의 모든 클러스터 정보의 저장소
- `kube-scheduler`
  - Pod에 노드가 할당되어 있는지 확인하고 할당한다.
- `kube-controller-manager`
  - `kube-apiserver`의 API를 사용하여 Pod 정의 작성을 모니터링하여 Pod를 배포할 위치를 결정한다.
  - 알림 및 포드 수를 모니터링하는 여러 컨트롤러 프로세스 실행한다.
  - Pod를 관찰하며 개수를 보장한다.
- `cloud-controller-manager`
  - `kube-apiserver`의 API에서 다양한 리소스 정의를 모니터링하여 실제 리소스의 상태를 정의와 동일하게 만든다.
  - 기반인 클라우드 제공업체와 상호작용하는 컨트롤러 실행한다.

---

## 워커 노드 컴포넌트

워커 노드 컴포넌트는 Pod나 컨테이너를 관리 및 모니터링한다.

- `kubelet`
  - 클러스터의 각 노드에서 실행되는 에이전트.
  - `kube-apiserver`의 API로 Pod 정의를 감시하고, 컨테이너의 기동 및 정지를 하기 위해서 Docker과 연결된다.
  - `kube-apiserver`로부터의 API 호출을 받는 HTTPS 포트를 가지고 있어 컨테이너의 로그를 반환하기도 한다.
  - 각 컨테이너가 Pod에서 실행 중임을 보장한다.
  - 데몬 형태로 동작
- `kube-proxy`
  - 클러스터의 각 노드에서 실행되는 네트워크 프록시
  - `kube-apiserver`의 API에서 Service 정의를 감시하고, 호스트 OS에 대해 Service에 통신을 전송하는 설정을 한다.
  - iptables rule을 구성
- 컨테이너 런타임
  - 컨테이너의 실하는 엔진
  - docker, containerd, runc

---

## 쿠버네티스 클러스터를 직업 구성하는 도구

- `kubeadm`
  - 쿠버네티스에서 공식 제공하는 클러스터 생성/관리 도구
  - 쿠버네티스 공식 설치 도구 (Kubernetes admin)
- `kubespray`
  - 쿠버네티스 클러스터를 배포하는 오픈 프로젝트
  - 다양한 형식으로 쿠버네티스 클러스터 구성 가능
  - 온프레미스에서 사용 서비스 클러스터 운영시 유용

---

## 오브젝트

쿠버네티스를 이해하기 위해서 가장 중요한 부분이 오브젝트이다. 가장 기본적인 구성 단위가 되는 기본 오브젝트(Basic object)와, 이 기본 오브젝트(Basic object) 를 생성하고 관리하는 추가적인 기능을 가진 컨트롤러(Controller) 로 이루어진다. 그리고 이러한 오브젝트의 스펙(설정)이외에 추가정보인 메타 정보들로 구성이 된다고 보면 된다.

![Running app on Kubernetes](https://devkuma.com/docs/kubernetes/running-app-on-kubernetes-image-20200923101415547.png)

### 오브젝트 스펙 (Object Spec)

오브젝트들은 모두 오브젝트의 특성(설정 정보)을 기술한 오브젝트 스펙(Object Spec)으로 정의가 되고, 커맨드 라인을 통해서 오브젝트 생성시 인자로 전달하여 정의를 하거나 또는 yaml이나 json 파일로 스펙을 정의할 수 있다.

### 기본 오브젝트 (Basic Object)

쿠버네티스에 의해서 배포 및 관리되는 가장 기본적인 오브젝트는 컨테이너화되어 배포되는 애플리케이션의 워크로드를 기술하는 오브젝트로 Pod, Service, Volume, Namespace 4가지가 있다. 간단하게 설명 하자면 Pod는 컨테이너화된 애플리케이션, Volume은 디스크, Service는 로드밸런서 그리고 Namespace는 패키지명 정도로 생각하면 된다. 그러면 각각을 자세하게 살펴보도록 하자.

### 라벨

… 작성중 …

### 컨트롤러

… 작성중 …

### 애드온

- 네트워크 애드온
  - CNI - weave, calico, faneld, kube-route …
- dns 애드온
  - coreDNS
- 대시보드 애드온
  - 컨테이너 자원 모니터링
  - cAdvisor
- 클러스티 로깅
  - 컨테이너 로그, k8s 운영 로그들을 수집해서 중앙화
  - ELK(ElasticSeach, Logstash, Kibana), EFK(ElasticSeach, Fluented, Kibana), DataDog

---

## 참조

```component VPCard
{
  "title": "쿠버네티스 - 위키백과, 우리 모두의 백과사전",
  "desc": "(Kubernetes, 쿠베르네테스, "K8s")는 컨테이너화된 애플리케이션의 자동 디플로이, 스케일링 등을 제공하는 관리시스템으로, 오픈 소스 기반이다. 원래 구글에 의해 설계되었고 현재 리눅스 재단에 의해 관리되고 있다. 목적은 여러 클러스터의 호스트 간에 애플리케이션 컨테이너의 배치, 스케일링, 운영을 자동화하기 위한 플랫폼을 제공하기 위함이다. 도커를 포함하여 일련의 컨테이너 도구들과 함께 동작한다.",
  "link": "https://ko.wikipedia.org/wiki/%EC%BF%A0%EB%B2%84%EB%84%A4%ED%8B%B0%EC%8A%A4",
  "logo": "https://ko.wikipedia.org/static/favicon/wikipedia.ico",
  "background": "rgba(248,249,250,0.2)"
}
```

<SiteInfo
  name="쿠버네티스 #2 개념 이해 (1/2)"
  desc="쿠버네티스 #2 개념 이해 (1/2) 조대협 (http://bcho.tistory.com) 쿠버네티스를 공부하면서 가장 헷갈리는 부분이 용어와 컨셉이다. 이 컨셉만 잘 이해하면 쿠버네티스를 쉽게 이해하고 사용할 수 있지만, 적어도 내 기준에서는 문서들의 용어나 개념 설명이 다소 어려웠다. 쿠버네티스의 개념은 크게 오브젝트 두개의 개념에서 출발한다. 각각을 살펴보도록 하자마스터와 노드쿠버네티스를 이해하기 위해서는 먼저 클러스터의 구조를 이해할 필요가 있는데, 구조는 매우 간단하다. 클러스터 전체를 관리하는 컨트롤러로써 마스터가 존재하고, 컨테이너가 배포되는 머신 (가상머신이나 물리적인 서버머신)인 노드가 존재한다. 오브젝트쿠버네티스를 이해하기 위해서 가장 중요한 부분이 오브젝트이다. 가장 기본적인 구성단위.."
  url="https://bcho.tistory.com/m/1256"
  logo="https://t1.daumcdn.net/tistory_admin/static/mobile/logo/bi-tistory.svg"
  preview="https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99172C485B02D9C82A"/>

---

<TagLinks />