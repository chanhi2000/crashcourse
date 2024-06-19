---
lang: ko-KR
title: Scaling GPU-Accelerated Applications with the C++ Standard Library | NVIDIA
description: Scaling GPU-Accelerated Applications with the C++ Standard Library | NVIDIA
icon: fas fa-dice-two
category:
  - Cpp
  - GPU
tag: 
  - crashcourse
  - cpp
  - c-plus-plus
  - accelerated-computing
head:
  - - meta:
    - property: og:title
      content: Scaling GPU-Accelerated Applications with the C++ Standard Library | NVIDIA
    - property: og:description
      content: Scaling GPU-Accelerated Applications with the C++ Standard Library | NVIDIA
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/cpp/nvidia-dli+s-ac-09/
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

```component VPCard
{
  "title": "Scaling GPU-Accelerated Applications with the C++ Standard Library | NVIDIA",
  "desc": "Learn how to accelerate and optimize existing C/C++ CPU-only applications using the most essential CUDA tools and techniques. You’ll also learn an iterative style of CUDA development that will allow you to ship accelerated applications fast.",
  "link": "https://courses.nvidia.com/courses/course-v1:DLI+S-AC-09+V1/",
  "logo": "https://courses.nvidia.com/wp-content/themes/nvidia-ibl-web-theme/inc/images/favicon.png",
  "background": "rgba(118,185,0,0.2)"
}
```

## About This Course

Harnessing the incredible acceleration of NVIDIA GPUs is easier than ever. For over a decade NVIDIA has been collaborating in the C++ standard language committees on the adoption of features to enable parallel programming without the need for additional extensions or APIs. On account of this work, developers can now write GPU-accelerated C++ code using only standard language features: no language extensions, pragmas, directives, or non-standard libraries.

Standard language parallelism is the simplest, most productive, and most portable approach to accelerated computing. It requires nothing more than ISO standard C++ and allows developers to write applications that are parallel-first such that there is never a need to port them to new platforms or to run them on GPU-accelerators.

---

## Learning Objectives

In this interactive hands-on workshop, which is intended as a followup to [GPU Acceleration with the C++ Standard Library](/cpp/nvida-dli+s-ac-08/README.md) we present how to write scalable GPU-accelerated hybrid applications using C++ standard language features alongside MPI. By the time you complete this workshop you will be able to:

- Rewrite serial C++ / MPI hybrid applications to use C++ standard template library parallel algorithms that can leverage GPU accelerators
- Use the NVIDIA HPC C++ compiler (NVC++) to compile standard C++ / MPI hybrid applications for execution on NVIDIA GPUs and/or multiple nodes with GPUs
- Utilize C++ standard library features to support effective inter-rank communication alongside the use of C++ STL parallel algorithms
- Use NVIDIA's [reference implementation](https://github.com/NVIDIA/stdexec) of Senders, a [proposed](https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2022/p2300r5.html) standard model for asynchronous execution in C++

---

## Tools, Libraries, and Frameworks Used

- [C++](https://isocpp.org/)
- [NVIDIA HPC SDK](https://developer.nvidia.com/hpc-sdk)
- [MPI](https://www.open-mpi.org/)

---

## Course Prerequisites

```component VPCard
{
  "title": "Learn C++ | Codecademy",
  "desc": "Learn C++ — a versatile programming language that’s important for developing software, games, databases, and more.",
  "link": "https://www.codecademy.com/learn/learn-c-plus-plus",
  "logo": "https://www.codecademy.com/favicon.ico",
  "background": "rgba(255,255,255,0.2)"
}
```

```component VPCard
{
  "title": "C++ Standard Library Algorithms Introduction | hacking C++",
  "desc": "Introduction, examples and visual explanations of the basic principles behind C++ standard library algorithms.",
  "link": "https://hackingcpp.com/cpp/std/algorithms/intro.html",
  "logo": "https://hackingcpp.com/icon.svg",
  "background": "rgba(0,112,192,0.2)"
}
```

```component VPCard
{
  "title": "Tutorials · MPI Tutorial",
  "desc": "Welcome to the MPI tutorials! In these tutorials, you will learn a wide array of concepts about MPI. Below are the available lessons, each of which contain example code.",
  "link": "https://mpitutorial.com/tutorials/",
  "logo": "https://mpitutorial.com/public/favicon.ico",
  "background": "rgba(255,255,255,0.2)"
}
```

```component VPCard
{
  "title": "Modern C++ Concurrency: Get the most out of any machine - AI-Powered Learning for Developers",
  "desc": "Concurrency with Modern C++ is a journey through the present and upcoming concurrency features in C++.",
  "link": "https://www.educative.io/courses/modern-cpp-concurrency-in-practice-get-the-most-out-of-any-machine",
  "logo": "https://www.educative.io/static/favicons/favicon-whiteV2.png",
  "background": "rgba(73,81,245,0.2)"
}
```

---

## Related Trainings

```component VPCard
{
  "title": "GPU Acceleration with the C++ Standard Library | NVIDIA",
  "desc": "GPU Acceleration with the C++ Standard Library | NVIDIA",
  "link": "/cpp/nvida-dli+s-ac-08/README.md",
  "logo": "https://courses.nvidia.com/wp-content/themes/nvidia-ibl-web-theme/inc/images/favicon.png",
  "background": "rgba(118,185,0,0.2)"
}
```

- [Fundamentals of Accelerated Computing with CUDA C/C++](https://courses.nvidia.com/courses/course-v1:DLI+C-AC-01+V1/)
- [Accelerating CUDA C++ Applications with Concurrent Streams](https://courses.nvidia.com/courses/course-v1:DLI+S-AC-01+V1/)
- [Scaling Workloads Across Multiple GPUs with CUDA C++](https://courses.nvidia.com/courses/course-v1:DLI+S-AC-02+V1/)

```component VPCard
{
  "title": "Scaling CUDA C++ Applications to Multiple Nodes | NVIDIA",
  "desc": "Scaling CUDA C++ Applications to Multiple Nodes | NVIDIA",
  "link": "/cpp/nvida-dli+s-ac-07/README.md",
  "logo": "https://courses.nvidia.com/wp-content/themes/nvidia-ibl-web-theme/inc/images/favicon.png",
  "background": "rgba(118,185,0,0.2)"
}
```

---

<TagLinks />