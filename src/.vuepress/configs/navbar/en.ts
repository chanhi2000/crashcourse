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
        text: 'Kodeco - Swift',
        link: '/swift/kodeco/README.md',
        icon: 'fa-brands fa-swift'
      }, {
        text: 'OSX 구조를 이해하면서 배우는 Objective-C',
        link: '/swift/shuokai-objc/README.md',
        icon: 'fas fa-landmark'
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
        icon: 'fa-brands fa-envira'
      }, {
        text: 'Java Web App with Quarkus and JPAStreamer',
        link: '/java/freecodecamp-quarkus-jpastreamer/README.md',
        icon: 'iconfont icon-java'
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
        icon: 'fa-brands fa-python'
      }, {
        text: '사장님 몰래 하는 파이썬 업무자동화 (들키면 일 많아짐)',
        link: '/python/rpa-excel/README.md',
        icon: 'fa-brands fa-python'
      }
    ],
  }, {
    text: '',
    icon: 'fa-brands fa-rust',
    children: [
      {
        text: 'freecodecamp.org - Rust by Practice',
        link: '/rust/freecodecamp-rust-by-practice/README.md',
        icon: 'fa-brands fa-rust'
      }, {
        text: 'Wasm by Example',
        link: '/rust/wasm-by-example/README.md',
        icon: 'fa-brands fa-rust'
      }, {
        text: 'Rust to Assembly',
        link: '/rust/eventhelix-rust-to-assembly/README.md',
        icon: 'fa-brands fa-rust'
      }
    ],
  }, {
    text: '',
    icon: 'fas fa-dice-two',
    children: [
      {
        text: 'Algorithms for Competitive Programming',
        link: '/cpp/algorithms-for-competitive-programming/README.md',
        icon: 'fas fa-dice-two',
      }
    ]
  }, {
    text: '',
    icon: 'fas fa-gem',
    children: [
      {
        text: 'Jets - Learning Content',
        link: '/ruby/rubyonjets-learning-content/README.md',
        icon: 'fas fa-gem',
      },
    ]
  }, {
    text: '🐑',
    children: [
      {
        text: '🐑Megaparsec tutorial',
        link: '/haskell/megaparsec/README.md'
      }, {
        text: '🐑Template Haskell tutorial',
        link: '/haskell/template-haskell/README.md'
      }
    ]
  }, {
    text: '',
    icon: 'fas fa-cubes-stacked',
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
        text: 'DigitalOcean - Kubernetes',
        link: '/devops/digitalocean-kubernetes/README.md',
        icon: 'fas fa-dharmachakra'
      }, {
        text: '아마존 웹 서비스를 다루는 기술 - 실무에서 필요한 AWS 클라우드의 모든 것!',
        link: '/devops/art-of-aws/README.md',
        icon: 'fa-brands fa-aws'
      }, {
        text: 'Linux Journey',
        link: '/devops/linux-journey/README.md',
        icon: 'fa-brands fa-linux'
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
// {
//   text: '📍Misc.',
//   children: [
//     {
//       text: '🕶️Github',
//       link: 'https://github.com/chanhi2000',
//     }, {
//       text: '🅽Notion',
//       link: 'https://www.notion.so/MarkiiimarK-c231ae6c157d4baba89a3713c92449dd',
//     },{
//       text: "📢Tell Me What's Wrong",
//       link: "https://github.com/chanhi2000/devlog/issues",
//     }
//   ]
// }, 
])