import { navbar } from "vuepress-theme-hope";

export const navbarEn = navbar([
  {
    text: '🐚', // Projects
  children: [
      {
        text: '🐚Text Processing with GNU awk',
        link: '/cli/text-processing-w-gnu-awk/README.md'
      }, {
        text: '🐚Mastering Curl - Interactive Text Guide',
        link: '/cli/mastering-curl-interactive-text-guide/README.md'
      }, {
        text: '🐚Bash 쉘스크립트 개발 시작하기',
        link: '/cli/bash-dev/README.md',
      }
    ],
  }, {
    text: '🕊️',
    children: [
      {
        text: '🕊️100 Days of Swift',
      link: '/swift/100-days-of-swift/README.md'
      }, {
        text: '🕊️100 Days of SwiftUI',
        link: '/swift/100-days-of-swiftui/README.md'
      }, {
        text: '🕊️SwiftUI by Example',
        link: '/swift/swiftui-by-example/README.md',
      }, {
        text: '🕊️Kodeco - Swift',
        link: '/swift/kodeco/README.md'
      }, {
        text: '🕊️OSX 구조를 이해하면서 배우는 Objective-C',
        link: '/swift/shuokai-objc/README.md'
      }
    ]
  }, {
    text: '☕️🅺🍃',
    children: [
      {
        text: '☕️Java8 in Action',
        link: '/java/java-8-in-action/README.md',
      }, {
        text: '☕️Effective Java',
        link: '/java/effective-java/README.md',
      }, {
        text: '🅺Kodeco - Android & Kotlin',
        link: '/java/kodeco/README.md'
      }, {
        text: '🍃Jump to Spring Boot',
        link: '/java/jump-to-spring-boot/README.md',
      }, {
        text: '☕️Java Web App with Quarkus and JPAStreamer',
        link: '/java/freecodecamp-quarkus-jpastreamer/README.md',
      }
    ]
  }, {
    text: '🧶⚜',
    children: [
      {
        text: '⚜Learn Typescript',
        link: '/js/learn-ts/README.md',
      }, {
        text: '🧶Must Know JavaScript API',
        link: '/js/must-know-javascript-api/README.md',
      }, {
        text: '🧶Eloquent Javascript',
        link: '/js/eloquent-javascript/README.md',
      }
    ]
  }, {
    text: '🐍',
    children: [
      {
        text: '🐍Finance with Python',
        link: '/python/finance-w-python/README.md',
      }, {
        text: '🐍사장님 몰래 하는 파이썬 업무자동화 (들키면 일 많아짐)',
        link: '/python/rpa-excel/README.md',
      }
    ]
  }, {
    text: '🦀',
    children: [
      {
        text: '🦀freecodecamp.org - Rust by Practice',
        link: '/rust/freecodecamp-rust-by-practice/README.md',
      }, {
        text: '🦀Wasm by Example',
        link: '/rust/wasm-by-example/README.md',
      }, {
        text: '🦀Rust to Assembly',
        link: '/rust/eventhelix-rust-to-assembly/README.md',
      }
    ]
  }, {
    text: '➕',
    children: [
      {
        text: '➕Algorithms for Competitive Programming',
        link: '/cpp/algorithms-for-competitive-programming/README.md',
      }
    ]
  }, {
    text: '🔻',
    children: [
      {
        text: '🔻Jets - Learning Content',
        link: '/ruby/rubyonjets-learning-content/README.md',
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
    text: '🏗️',
    children: [
      {
        text: '🔺Red Hat Container Tools',
        link: '/devops/red-hat-container-tools/README.md',
      }, {
        text: '🔺Containerize Your Application With Buildah And Podman',
        link: '/devops/red-hat-containerize-your-application-w-buildah-and-podman/README.md',
      }, {
        text: '🦊freecodecamp.org - DevOps with GitLab CI',
        link: '/devops/freecodecamp-gitlab-ci/README.md',
      }, {
        text: '☸DigitalOcean - Kubernetes',
        link: '/devops/digitalocean-kubernetes/README.md',
      }, {
        text: '📦아마존 웹 서비스를 다루는 기술 - 실무에서 필요한 AWS 클라우드의 모든 것!',
        link: '/devops/art-of-aws/README.md',
      }, {
        text: '🐧Linux Journey',
        link: '/devops/linux-journey/README.md',
      }
    ]
  }, {
    text: '📍',
    children: [
      {
        text: '🎨Colt Steele - Mastering CSS Grid',
        link: '/misc/colt-steele-mastering-css-grid/README.md',
      }, {
        text: '🦙Microsoft - Generative AI for Beginners',
        link: '/misc/llm-generative-ai-for-beginners/README.md',
      }, {
        text: "DB Server 성능 향상 분석 및 튜닝 전문가 향상과정",
        link: '/misc/oracle-sql-db-tuning/README.md',
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