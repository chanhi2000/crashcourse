import { navbar } from "vuepress-theme-hope";

export const navbarEn = navbar([
  {
    text: '',
    icon: 'iconfont icon-shell',
    children: [
      {
        text: 'Text Processing with GNU awk',
        link: '/cli/text-processing-w-gnu-awk/README.md',
        icon: 'iconfont icon-shell'
      }, {
        text: 'Mastering Curl - Interactive Text Guide',
        link: '/cli/mastering-curl-interactive-text-guide/README.md',
        icon: 'iconfont icon-shell'
      }, {
        text: 'Bash 쉘스크립트 개발 시작하기',
        link: '/cli/bash-dev/README.md',
        icon: 'iconfont icon-shell'
      }
    ],
  }, {
    text: '',
    icon: 'fa-brands fa-swift',
    children: [
      {
        text: 'Learn essential Swift in one hour',
        icon: 'fa-brands fa-swift',
        link: '/swift/learn-essential-swift-in-one-hour/README.md',
      }, {
        text: '100 Days of Swift',
        link: '/swift/100-days-of-swift/README.md',
        icon: 'fa-brands fa-swift'
      }, {
        text: '100 Days of SwiftUI',
        link: '/swift/100-days-of-swiftui/README.md',
        icon: 'fa-brands fa-swift'
      }, {
        text: 'SwiftUI by Example',
        link: '/swift/swiftui-by-example/README.md',
        icon: 'fa-brands fa-swift'
      }, {
        text: 'Apple - Develop in Swift Tutorials',
        link: '/swift/apple-develop-in-swift/README.md',
        icon: 'fa-brands fa-swift',
      }, {
        text: 'Kodeco - Swift',
        link: '/swift/kodeco/README.md',
        icon: 'fa-brands fa-swift'
      }, {
        text: 'OSX 구조를 이해하면서 배우는 Objective-C',
        link: '/swift/shuokai-objc/README.md',
        icon: 'iconfont icon-objective-c'
      }
    ],
  }, {
    text: '',
    icon: 'fa-brands fa-java',
    children: [
      {
        text: 'Java8 in Action',
        link: '/java/java-8-in-action/README.md',
        icon: 'fa-brands fa-java'
      }, {
        text: 'Effective Java',
        link: '/java/effective-java/README.md',
        icon: 'fa-brands fa-java'
      }, {
        text: 'Kodeco - Android & Kotlin',
        link: '/java/kodeco/README.md',
        icon: 'fa-brands fa-android'
      }, {
        text: 'Jump to Spring Boot',
        link: '/java/jump-to-spring-boot/README.md',
        icon: 'iconfont icon-spring'
      }, {
        text: '스프링부트 개념과 활용',
        link: '/java/spring-boot-whiteship/README.md',
        icon: 'iconfont icon-spring',
      }, {
        text: 'Java Web App with Quarkus and JPAStreamer',
        link: '/java/freecodecamp-quarkus-jpastreamer/README.md',
        icon: 'iconfont icon-quarkus',
      }, {
        text: '코틀린 테스팅 프레임워크 - Kotest',
        link: '/java/devkuma-kotest/README.md',
        icon: 'iconfont icon-kotlin',
      }
    ]
  }, {
    text: '',
    icon: 'fa-brands fa-js',
    children: [
      {
        text: 'Learn Typescript',
        link: '/js/learn-ts/README.md',
        icon: 'iconfont icon-typescript'
      }, {
        text: 'Must Know JavaScript API',
        link: '/js/must-know-javascript-api/README.md',
        icon: 'fa-brands fa-js'
      }, {
        text: 'Eloquent Javascript',
        link: '/js/eloquent-javascript/README.md',
        icon: 'fa-brands fa-js'
      }
    ]
  }, {
    text: '',
    icon: 'fa-brands fa-python',
    children: [
      {
        text: 'Finance with Python',
        link: '/python/finance-w-python/README.md',
      }, {
        text: '사장님 몰래 하는 파이썬 업무자동화 (들키면 일 많아짐)',
        link: '/python/rpa-excel/README.md',
      }, {
        text: '<랭체인LangChain 노트> - LangChain 한국어 튜토리얼🇰🇷',
        link: '/python/langchain-kr/README.md',
      }, {
        text: 'OpenCV – Python 고급 기법 프로그래밍',
        link: '/python/opencv-advacned/README.md',
      }
    ],
  }, {
    text: '',
    icon: 'fa-brands fa-rust',
    children: [
      {
        text: 'freecodecamp.org - Rust by Practice',
        link: '/rust/freecodecamp-rust-by-practice/README.md',
      }, {
        text: 'Wasm by Example',
        link: '/rust/wasm-by-example/README.md',
      }, {
        text: 'Rust to Assembly',
        link: '/rust/eventhelix-rust-to-assembly/README.md',
      }
    ],
  }, {
    text: '',
    icon: 'fa-brands fa-php',
    children: [
      {
        text: 'PHP 3분 핵심 요약집',
        link: '/php/three-min-summary/README.md',
      }
    ]
  }, {
    text: '',
    icon: 'iconfont icon-cpp',
    children: [
      {
        text: 'Algorithms for Competitive Programming',
        link: '/c+c+cpp/algorithms-for-competitive-programming/README.md',
        icon: 'iconfont icon-cpp',
      }, {
        text: 'Beej\'s Guide to Network Programming',
        link: '/c+cpp/beejs-guide-to-network-programming/README.md',
        icon: 'iconfont icon-c',
      }, 
      /* 
      {
        text: 'Getting Started with Accelerated Computing in CUDA C/C++',
        link: "/cpp/nvidia-dli+s-ac-04/README.md",
        icon: 'fas fa-dice-two',
      }, {
        text: 'Scaling CUDA C++ Applications to Multiple Nodes',
        link: '/cpp/nvidia-dli+s-ac-07/README.md',
        icon: 'fas fa-dice-two',
      }, {
        text: 'GPU Acceleration with the C++ Standard Library',
        link: "/cpp/nvidia-dli+s-ac-08/README.md",
        icon: 'fas fa-dice-two',
      }, {
        text: 'Scaling GPU-Accelerated Applications with the C++ Standard Library',
        link: "/cpp/nvidia-dli+s-ac-09/README.md",
        icon: 'fas fa-dice-two',
      }
      */
    ]
  }, {
    text: '',
    icon: 'iconfont icon-ruby',
    children: [
      {
        text: 'Jets - Learning Content',
        link: '/ruby/rubyonjets-learning-content/README.md',
      },
    ]
  }, {
    text: '',
    icon: 'iconfont icon-haskell',
    children: [
      {
        text: 'Megaparsec tutorial',
        link: '/haskell/megaparsec/README.md',
      }, {
        text: 'Template Haskell tutorial',
        link: '/haskell/template-haskell/README.md',
      }
    ]
  }, {
    text: '',
    icon: 'fa-brands fa-docker',
    children: [
      {
        text: '데엔잘하고싶은데엔 - Udemy 강의정리',
        link: '/docker/pearlluck/README.md',
      }
    ]
  }, {
    text: '',
    icon: 'fas fa-dharmachakra',
    children: [
      {
        text: 'DigitalOcean - Kubernetes',
        link: '/kubernetes/digitalocean-kubernetes/README.md',
      }, {
        text: '언제나 최신 Kubernetes',
        link: '/kubernetes/always-up-to-date-kubernetes/README.md',
      }
    ]
  }, {
    text: '',
    icon: 'fa-brands fa-aws',
    children: [
      {
        text: '아마존 웹 서비스를 다루는 기술',
        link: '/aws/art-of-aws/README.md',
      }
    ]
  }, {
    text: '',
    icon: 'fas fa-network-wired',
    children: [
      {
        text: 'Red Hat Container Tools',
        link: '/devops/red-hat-container-tools/README.md',
        icon: 'fa-brands fa-redhat'
      }, {
        text: 'Containerize Your Application With Buildah And Podman',
        link: '/devops/red-hat-containerize-your-application-w-buildah-and-podman/README.md',
        icon: 'fa-brands fa-redhat'
      }, {
        text: 'freecodecamp.org - DevOps with GitLab CI',
        link: '/devops/freecodecamp-gitlab-ci/README.md',
        icon: 'fa-brands fa-gitlab'
      }, {
        text: 'Linux Journey',
        link: '/devops/linux-journey/README.md',
        icon: 'fa-brands fa-linux'
      }, {
        text: 'CYL2002 - Digital Forensics Lab',
        link: '/devops/digital-forensics-lab/README.md',
        icon: 'fas fa-shield-halved',
      }, {
        text: '요즘 IT 블로그 - DevOps 관련',
        link: '/devops/yozm/README.md',
        icon: 'fas fa-cubes-stacked',
      } 
    ]
  }, {
    text: '',
    icon: 'fas fa-object-group',
    children: [
      {
        text: 'Colt Steele - Mastering CSS Grid',
        link: '/misc/colt-steele-mastering-css-grid/README.md',
        icon: 'fa-brands fa-css3-alt'
      }, {
        text: 'Microsoft - Generative AI for Beginners',
        link: '/misc/llm-generative-ai-for-beginners/README.md',
        icon: 'fas fa-brain'
      }, {
        text: "DB Server 성능 향상 분석 및 튜닝 전문가 향상과정",
        link: '/misc/oracle-sql-db-tuning/README.md',
        icon: 'fas fa-database'
      }
    ]
  }
])