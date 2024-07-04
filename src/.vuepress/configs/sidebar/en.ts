import { sidebar } from 'vuepress-theme-hope'

export const sidebarEn = sidebar({
  '/cli/': [
    {
      text: 'CLI',
      icon: 'iconfont icon-shell',
      children: [ '/cli/README.md' ],
    }, {
      text: 'Text Processing with GNU awk',
      collapsible: true,
      icon: 'iconfont icon-shell',
      children: [
        '/cli/text-processing-w-gnu-awk/README.md',
        '/cli/text-processing-w-gnu-awk/01-installation-and-documentation.md',
        '/cli/text-processing-w-gnu-awk/02-awk-introduction.md',
        '/cli/text-processing-w-gnu-awk/03-regular-expressions.md',
        '/cli/text-processing-w-gnu-awk/04-field-separators.md',
        '/cli/text-processing-w-gnu-awk/05-record-separators.md',
        '/cli/text-processing-w-gnu-awk/06-in-place-file-editing.md',
        '/cli/text-processing-w-gnu-awk/07-using-shell-variables.md',
        '/cli/text-processing-w-gnu-awk/08-control-structures.md',
        '/cli/text-processing-w-gnu-awk/09-built-in-functions.md',
        '/cli/text-processing-w-gnu-awk/10-multiple-file-input.md',
        '/cli/text-processing-w-gnu-awk/11-processing-multiple-records.md',
        '/cli/text-processing-w-gnu-awk/12-two-file-processing.md',
        '/cli/text-processing-w-gnu-awk/13-dealing-with-duplicates.md',
        '/cli/text-processing-w-gnu-awk/14-awk-scripts.md',
        '/cli/text-processing-w-gnu-awk/15-gotchas-and-tips.md',
        '/cli/text-processing-w-gnu-awk/16-further-reading.md',
      ],
    }, {
      text: 'Mastering Curl - Interactive Text Guide',
      collapsible: true,
      icon: 'iconfont icon-shell',
      children: [
        '/cli/mastering-curl-interactive-text-guide/README.md',
        '/cli/mastering-curl-interactive-text-guide/01-the-curl-project.md',
        '/cli/mastering-curl-interactive-text-guide/02-command-line-options.md',
        '/cli/mastering-curl-interactive-text-guide/03-urls.md',
        '/cli/mastering-curl-interactive-text-guide/04-curl-basics.md',
        '/cli/mastering-curl-interactive-text-guide/05-http.md'
      ]
    }, {
      text: 'Bash 쉘스크립트 개발 시작하기',
      collapsible: true,
      icon: 'iconfont icon-shell',
      children: [
        '/cli/bash-dev/README.md',
        '/cli/bash-dev/01.md',
        {
          text: '02. 명령어',
          collapsible: true,
          children: [
            '/cli/bash-dev/02.md',
            '/cli/bash-dev/02A.md',
            '/cli/bash-dev/02B.md',
          ]
        }, {
          text: '03. 쉘스크립트',
          collapsible: true,
          children: [
            '/cli/bash-dev/03.md',
            '/cli/bash-dev/03A.md',
            '/cli/bash-dev/03B.md',
            '/cli/bash-dev/03C.md',
            '/cli/bash-dev/03D.md',
          ]
        }, {
          text: '04. 서비스 운영 스크립트',
          collapsible: true,
          children: [
            '/cli/bash-dev/04.md',
            '/cli/bash-dev/04A.md',
            '/cli/bash-dev/04B.md',
            '/cli/bash-dev/04C.md',
            '/cli/bash-dev/04D.md',
          ]
        },
      ]
    }, {
      text: '고급 Bash 스크립팅 가이드',
      collapsible: true,
      icon: 'iconfont icon-shell',
      children: [
        '/cli/adv-bash-scr-howto/README.md',
        {
          text: '1. 소개',
          collapsible: true,
          children: [
            '/cli/adv-bash-scr-howto/01.md',
          ]
        }, {
          text: '2. 기초 단계',
          collapsible: true,
          children: [
            '/cli/adv-bash-scr-howto/02.md',
          ]
        }, {
          text: '3. 중급 단계 (Beyond the Basics)',
          collapsible: true,
          children: [
            '/cli/adv-bash-scr-howto/03.md',
          ]
        }, {
          text: '4. 고급 주제들 (Advanced Topics)',
          collapsible: true,
          children: [
            '/cli/adv-bash-scr-howto/04.md',
          ]
        },
      ]
    }
  ], '/swift/' : [
    {
      text: 'Swift',
      icon: 'fa-brands fa-swift',
      children: [ '/swift/README.md' ]
  }, {
      text: '100 Days of Swift',
      collapsible: true,
      icon: 'fa-brands fa-swift',
      children: [
        '/swift/100-days-of-swift/README.md',
        '/swift/100-days-of-swift/01.md',
        '/swift/100-days-of-swift/02.md',
        '/swift/100-days-of-swift/03.md',
        '/swift/100-days-of-swift/04.md',
        '/swift/100-days-of-swift/05.md',
        '/swift/100-days-of-swift/06.md',
        '/swift/100-days-of-swift/07.md',
        '/swift/100-days-of-swift/08.md',
        '/swift/100-days-of-swift/09.md',
        '/swift/100-days-of-swift/10.md',
        '/swift/100-days-of-swift/11.md',
        '/swift/100-days-of-swift/12.md',
        '/swift/100-days-of-swift/13.md',
        '/swift/100-days-of-swift/14.md',
        '/swift/100-days-of-swift/15.md',
        '/swift/100-days-of-swift/16.md',
        '/swift/100-days-of-swift/17.md',
        '/swift/100-days-of-swift/18.md',
        '/swift/100-days-of-swift/19.md',
        '/swift/100-days-of-swift/20.md',
        '/swift/100-days-of-swift/21.md',
        '/swift/100-days-of-swift/22.md',
        '/swift/100-days-of-swift/23.md',
        '/swift/100-days-of-swift/24.md',
        '/swift/100-days-of-swift/25.md',
        '/swift/100-days-of-swift/26.md',
        '/swift/100-days-of-swift/27.md',
        '/swift/100-days-of-swift/28.md',
        '/swift/100-days-of-swift/29.md',
        '/swift/100-days-of-swift/30.md',
        '/swift/100-days-of-swift/31.md',
        '/swift/100-days-of-swift/32.md',
        '/swift/100-days-of-swift/33.md',
        '/swift/100-days-of-swift/34.md',
        '/swift/100-days-of-swift/35.md',
        '/swift/100-days-of-swift/36.md',
        '/swift/100-days-of-swift/37.md',
        '/swift/100-days-of-swift/38.md',
        '/swift/100-days-of-swift/39.md',
        '/swift/100-days-of-swift/40.md',
        '/swift/100-days-of-swift/41.md',
        '/swift/100-days-of-swift/42.md',
        '/swift/100-days-of-swift/43.md',
        '/swift/100-days-of-swift/44.md',
        '/swift/100-days-of-swift/45.md',
        '/swift/100-days-of-swift/46.md',
        '/swift/100-days-of-swift/47.md',
        '/swift/100-days-of-swift/48.md',
        '/swift/100-days-of-swift/49.md',
        '/swift/100-days-of-swift/50.md',
        '/swift/100-days-of-swift/51.md',
        '/swift/100-days-of-swift/52.md',
        '/swift/100-days-of-swift/53.md',
        '/swift/100-days-of-swift/54.md',
        '/swift/100-days-of-swift/55.md',
        '/swift/100-days-of-swift/56.md',
        '/swift/100-days-of-swift/57.md',
        '/swift/100-days-of-swift/58.md',
        '/swift/100-days-of-swift/59.md',
        '/swift/100-days-of-swift/60.md',
        '/swift/100-days-of-swift/61.md',
        '/swift/100-days-of-swift/62.md',
        '/swift/100-days-of-swift/63.md',
        '/swift/100-days-of-swift/64.md',
        '/swift/100-days-of-swift/65.md',
        '/swift/100-days-of-swift/66.md',
        '/swift/100-days-of-swift/67.md',
        '/swift/100-days-of-swift/68.md',
        '/swift/100-days-of-swift/69.md',
        '/swift/100-days-of-swift/70.md',
        '/swift/100-days-of-swift/71.md',
        '/swift/100-days-of-swift/72.md',
        '/swift/100-days-of-swift/73.md',
        '/swift/100-days-of-swift/74.md',
        '/swift/100-days-of-swift/75.md',
        '/swift/100-days-of-swift/76.md',
        '/swift/100-days-of-swift/77.md',
        '/swift/100-days-of-swift/78.md',
        '/swift/100-days-of-swift/79.md',
        '/swift/100-days-of-swift/80.md',
        '/swift/100-days-of-swift/81.md',
        '/swift/100-days-of-swift/82.md',
        '/swift/100-days-of-swift/83.md',
        '/swift/100-days-of-swift/84.md',
        '/swift/100-days-of-swift/85.md',
        '/swift/100-days-of-swift/86.md',
        '/swift/100-days-of-swift/87.md',
        '/swift/100-days-of-swift/88.md',
        '/swift/100-days-of-swift/89.md',
        '/swift/100-days-of-swift/90.md',
        '/swift/100-days-of-swift/91.md',
        '/swift/100-days-of-swift/92.md',
        '/swift/100-days-of-swift/93.md',
        '/swift/100-days-of-swift/94.md',
        '/swift/100-days-of-swift/95.md',
        '/swift/100-days-of-swift/96.md',
        '/swift/100-days-of-swift/97.md',
        '/swift/100-days-of-swift/98.md',
        '/swift/100-days-of-swift/99.md',
        '/swift/100-days-of-swift/100.md',
        '/swift/100-days-of-swift/101.md',
      ]
  }, {
      text: '100 Days of SwiftUI',
      collapsible: true,
      icon: 'fa-brands fa-swift',
      children: [
        '/swift/100-days-of-swiftui/README.md',
        '/swift/100-days-of-swiftui/01.md',
        '/swift/100-days-of-swiftui/02.md',
        '/swift/100-days-of-swiftui/03.md',
        '/swift/100-days-of-swiftui/04.md',
        '/swift/100-days-of-swiftui/05.md',
        '/swift/100-days-of-swiftui/06.md',
        '/swift/100-days-of-swiftui/07.md',
        '/swift/100-days-of-swiftui/08.md',
        '/swift/100-days-of-swiftui/09.md',
        '/swift/100-days-of-swiftui/10.md',
        '/swift/100-days-of-swiftui/11.md',
        '/swift/100-days-of-swiftui/12.md',
        '/swift/100-days-of-swiftui/13.md',
        '/swift/100-days-of-swiftui/14.md',
        '/swift/100-days-of-swiftui/15.md',
        '/swift/100-days-of-swiftui/16.md',
        '/swift/100-days-of-swiftui/17.md',
        '/swift/100-days-of-swiftui/18.md',
        '/swift/100-days-of-swiftui/19.md',
        '/swift/100-days-of-swiftui/20.md',
        '/swift/100-days-of-swiftui/21.md',
        '/swift/100-days-of-swiftui/22.md',
        '/swift/100-days-of-swiftui/23.md',
        '/swift/100-days-of-swiftui/24.md',
        '/swift/100-days-of-swiftui/25.md',
        '/swift/100-days-of-swiftui/26.md',
        '/swift/100-days-of-swiftui/27.md',
        '/swift/100-days-of-swiftui/28.md',
        '/swift/100-days-of-swiftui/29.md',
        '/swift/100-days-of-swiftui/30.md',
        '/swift/100-days-of-swiftui/31.md',
        '/swift/100-days-of-swiftui/32.md',
        '/swift/100-days-of-swiftui/33.md',
        '/swift/100-days-of-swiftui/34.md',
        '/swift/100-days-of-swiftui/35.md',
        '/swift/100-days-of-swiftui/36.md',
        '/swift/100-days-of-swiftui/37.md',
        '/swift/100-days-of-swiftui/38.md',
        '/swift/100-days-of-swiftui/39.md',
        '/swift/100-days-of-swiftui/40.md',
        '/swift/100-days-of-swiftui/41.md',
        '/swift/100-days-of-swiftui/42.md',
        '/swift/100-days-of-swiftui/43.md',
        '/swift/100-days-of-swiftui/44.md',
        '/swift/100-days-of-swiftui/45.md',
        '/swift/100-days-of-swiftui/46.md',
        '/swift/100-days-of-swiftui/47.md',
        '/swift/100-days-of-swiftui/48.md',
        '/swift/100-days-of-swiftui/49.md',
        '/swift/100-days-of-swiftui/50.md',
        '/swift/100-days-of-swiftui/51.md',
        '/swift/100-days-of-swiftui/52.md',
        '/swift/100-days-of-swiftui/53.md',
        '/swift/100-days-of-swiftui/54.md',
        '/swift/100-days-of-swiftui/55.md',
        '/swift/100-days-of-swiftui/56.md',
        '/swift/100-days-of-swiftui/57.md',
        '/swift/100-days-of-swiftui/58.md',
        '/swift/100-days-of-swiftui/59.md',
        '/swift/100-days-of-swiftui/60.md',
        '/swift/100-days-of-swiftui/61.md',
        '/swift/100-days-of-swiftui/62.md',
        '/swift/100-days-of-swiftui/63.md',
        '/swift/100-days-of-swiftui/64.md',
        '/swift/100-days-of-swiftui/65.md',
        '/swift/100-days-of-swiftui/66.md',
        '/swift/100-days-of-swiftui/67.md',
        '/swift/100-days-of-swiftui/68.md',
        '/swift/100-days-of-swiftui/69.md',
        '/swift/100-days-of-swiftui/70.md',
        '/swift/100-days-of-swiftui/71.md',
        '/swift/100-days-of-swiftui/72.md',
        '/swift/100-days-of-swiftui/73.md',
        '/swift/100-days-of-swiftui/74.md',
        '/swift/100-days-of-swiftui/75.md',
        '/swift/100-days-of-swiftui/76.md',
        '/swift/100-days-of-swiftui/77.md',
        '/swift/100-days-of-swiftui/78.md',
        '/swift/100-days-of-swiftui/79.md',
        '/swift/100-days-of-swiftui/80.md',
        '/swift/100-days-of-swiftui/81.md',
        '/swift/100-days-of-swiftui/82.md',
        '/swift/100-days-of-swiftui/83.md',
        '/swift/100-days-of-swiftui/84.md',
        '/swift/100-days-of-swiftui/85.md',
        '/swift/100-days-of-swiftui/85.md',
        '/swift/100-days-of-swiftui/87.md',
        '/swift/100-days-of-swiftui/88.md',
        '/swift/100-days-of-swiftui/89.md',
        '/swift/100-days-of-swiftui/90.md',
        '/swift/100-days-of-swiftui/91.md',
        '/swift/100-days-of-swiftui/92.md',
        '/swift/100-days-of-swiftui/93.md',
        '/swift/100-days-of-swiftui/94.md',
        '/swift/100-days-of-swiftui/95.md',
        '/swift/100-days-of-swiftui/96.md',
        '/swift/100-days-of-swiftui/97.md',
        '/swift/100-days-of-swiftui/98.md',
        '/swift/100-days-of-swiftui/99.md',
        '/swift/100-days-of-swiftui/100.md',
        '/swift/100-days-of-swiftui/101.md',
      ]
    }, {
      text: 'Apple - Develop in Swift Tutorials',
      collapsible: true,
      icon: 'fa-brands fa-swift',
      children: [
        '/swift/apple-develop-in-swift/README.md',
        {
          text: '01. SwiftUI foundations',
          collapsible: true,
          children: [
            '/swift/apple-develop-in-swift/01-swiftui-foundations/README.md',
            {
              text: '01A. Explore Xcode',
              collapsible: true,
              children: [
                '/swift/apple-develop-in-swift/01-swiftui-foundations/01A/README.md',
                '/swift/apple-develop-in-swift/01-swiftui-foundations/01A/i.md',
                '/swift/apple-develop-in-swift/01-swiftui-foundations/01A/ii.md',
                '/swift/apple-develop-in-swift/01-swiftui-foundations/01A/iii.md',
              ]
            }
          ]
        }
      ]
    }, {
      text: 'OSX 구조를 이해하면서 배우는 Objective-C',
      collapsible: true,
      icon: 'iconfont icon-objective-c',
      children: [
        '/swift/shuokai-objc/README.md',
        {
          text: '01. 객체 기반 소프트웨어 작성',
          collapsible: true,
          children: [
            '/swift/shuokai-objc/01.md',
            '/swift/shuokai-objc/01A.md',
            '/swift/shuokai-objc/01B.md',
          ]
        }, {
          text: '02. Objective-C 프로그램',
          collapsible: true,
          children: [
            '/swift/shuokai-objc/02.md',
            '/swift/shuokai-objc/02A.md',
            '/swift/shuokai-objc/02B.md',
            '/swift/shuokai-objc/02C.md',
          ]
        },
        '/swift/shuokai-objc/03.md',
        '/swift/shuokai-objc/04.md',
        '/swift/shuokai-objc/05.md',
        '/swift/shuokai-objc/06.md',
        '/swift/shuokai-objc/07.md',
        '/swift/shuokai-objc/08.md',
        '/swift/shuokai-objc/09.md',
        '/swift/shuokai-objc/10.md',
        '/swift/shuokai-objc/11.md',
        '/swift/shuokai-objc/12.md',
        '/swift/shuokai-objc/13.md',
        '/swift/shuokai-objc/14.md',
        '/swift/shuokai-objc/15.md',
        '/swift/shuokai-objc/16.md',
        '/swift/shuokai-objc/17.md',
        '/swift/shuokai-objc/18.md',
        '/swift/shuokai-objc/19.md',
        '/swift/shuokai-objc/20.md',
        '/swift/shuokai-objc/21.md',
      ]
    }
  ], '/java/' : [
    {
      text: 'Java',
      icon: 'fa-brands fa-java',
      children: [ '/java/README.md' ]
    }, {
      text: 'Java8 in Action',
      icon: 'fa-brands fa-java',
      collapsible: true,
      children: [
        '/java/java-8-in-action/README.md',
        '/java/java-8-in-action/1.md',
        '/java/java-8-in-action/2-1.md',
        '/java/java-8-in-action/2-2.md',
        '/java/java-8-in-action/3-1.md',
      ]
    }, {
      text: 'Effective Java',
      collapsible: true,
      icon: 'fa-brands fa-java',
      children: [
        '/java/effective-java/README.md',
        '/java/effective-java/01-creating-and-destroying-objects.md',
        '/java/effective-java/02-methods-common-to-all-objects.md',
        '/java/effective-java/03-classes-and-interfaces.md',
        '/java/effective-java/04-generics.md',
        '/java/effective-java/05-enums-and-annotations.md',
        '/java/effective-java/06-lambda-and-stream.md',
        '/java/effective-java/07-methods.md',
        '/java/effective-java/08-general-programming.md',
        '/java/effective-java/09-exceptions.md',
        '/java/effective-java/10-concurrency.md',
        '/java/effective-java/11-serialization.md'
      ]
    }, {
      text: 'Jump to Spring Boot',
      collapsible: true,
      icon: 'iconfont icon-springboot',
      children: [
        '/java/jump-to-spring-boot/README.md',
        '/java/jump-to-spring-boot/01.md',
        {
          text: '2장 - 스프링부트의 기본 요소 익히기!',
          collapsible: true,
          children: [
            '/java/jump-to-spring-boot/02.md',
            '/java/jump-to-spring-boot/02A.md',
            '/java/jump-to-spring-boot/02B.md',
            '/java/jump-to-spring-boot/02C.md',
            '/java/jump-to-spring-boot/02D.md',
            '/java/jump-to-spring-boot/02E.md',
            '/java/jump-to-spring-boot/02F.md',
            '/java/jump-to-spring-boot/02G.md',
            '/java/jump-to-spring-boot/02H.md',
            '/java/jump-to-spring-boot/02I.md',
            '/java/jump-to-spring-boot/02J.md',
            '/java/jump-to-spring-boot/02K.md',
            '/java/jump-to-spring-boot/02L.md',
            '/java/jump-to-spring-boot/02M.md',
            '/java/jump-to-spring-boot/02N.md',
            '/java/jump-to-spring-boot/02O.md',
            '/java/jump-to-spring-boot/02P.md',
          ]
        }, {
          text: '3장 - SBB 서비스 개발!',
          collapsible: true,
          children: [
            '/java/jump-to-spring-boot/03.md',
            '/java/jump-to-spring-boot/03A.md',
            '/java/jump-to-spring-boot/03B.md',
            '/java/jump-to-spring-boot/03C.md',
            '/java/jump-to-spring-boot/03D.md',
            '/java/jump-to-spring-boot/03E.md',
            '/java/jump-to-spring-boot/03F.md',
            '/java/jump-to-spring-boot/03G.md',
            '/java/jump-to-spring-boot/03H.md',
            '/java/jump-to-spring-boot/03I.md',
            '/java/jump-to-spring-boot/03J.md',
            '/java/jump-to-spring-boot/03K.md',
            '/java/jump-to-spring-boot/03L.md',
            '/java/jump-to-spring-boot/03M.md',
            '/java/jump-to-spring-boot/03N.md',
            '/java/jump-to-spring-boot/03O.md',
          ]
        }, {
          text: '4장 - 세상에 선보이는 SBB 서비스!',
          collapsible: true,
          children: [
            '/java/jump-to-spring-boot/04.md',
            '/java/jump-to-spring-boot/04A.md',
            '/java/jump-to-spring-boot/04B.md',
            '/java/jump-to-spring-boot/04C.md',
            '/java/jump-to-spring-boot/04D.md',
            '/java/jump-to-spring-boot/04E.md',
            '/java/jump-to-spring-boot/04F.md',
            '/java/jump-to-spring-boot/04G.md',
            '/java/jump-to-spring-boot/04H.md',
            '/java/jump-to-spring-boot/04I.md',
            '/java/jump-to-spring-boot/04J.md',
            '/java/jump-to-spring-boot/04K.md',
            '/java/jump-to-spring-boot/04L.md',
          ]
        },
        '/java/jump-to-spring-boot/a.md',
      ]
    }, {
      text: '스프링부트 개념과 활용',
      collapsible: true,
      icon: 'iconfont icon-springboot',
      children: [
        '/java/spring-boot-whiteship/README.md',
        '/java/spring-boot-whiteship/01.md',
        '/java/spring-boot-whiteship/02.md',
        '/java/spring-boot-whiteship/03.md',
        '/java/spring-boot-whiteship/04.md',
        '/java/spring-boot-whiteship/05.md',
        '/java/spring-boot-whiteship/06.md',
        '/java/spring-boot-whiteship/07.md',
      ]
    }, {
      text: 'Java Web App with Quarkus and JPAStreamer',
      collapsible: true,
      icon: 'iconfont icon-quarkus',
      children: [
        '/java/freecodecamp-quarkus-jpastreamer/README.md',
        '/java/freecodecamp-quarkus-jpastreamer/01.md',
        '/java/freecodecamp-quarkus-jpastreamer/02.md',
        '/java/freecodecamp-quarkus-jpastreamer/03.md',
        '/java/freecodecamp-quarkus-jpastreamer/04.md',
        '/java/freecodecamp-quarkus-jpastreamer/05.md',
      ]
    }, {
      text: 'JavaFX 게시판 프로그램',
      collapsible: true,
      icon: 'fa-brands fa-java',
      children: [
        '/java/aloha-javafx/README.md',
        '/java/aloha-javafx/01.md',
        '/java/aloha-javafx/02.md',
      ]
    }, {
      text: '코틀린 테스팅 프레임워크 - Kotest',
      collapsible: true,
      icon: 'iconfont icon-kotlin',
      children: [
        '/java/devkuma-kotest/README.md',
        {
          text: 'Kotest 프레임워크(Framework)',
          collapsible: true,
          children: [
            '/java/devkuma-kotest/01-kotest-framework/README.md',
            '/java/devkuma-kotest/01-kotest-framework/01A.md',
            '/java/devkuma-kotest/01-kotest-framework/01B.md',
            '/java/devkuma-kotest/01-kotest-framework/01C.md',
            '/java/devkuma-kotest/01-kotest-framework/01D.md',
            '/java/devkuma-kotest/01-kotest-framework/01E.md',
            '/java/devkuma-kotest/01-kotest-framework/01F.md',
            '/java/devkuma-kotest/01-kotest-framework/01G.md',
            '/java/devkuma-kotest/01-kotest-framework/01H.md',
            '/java/devkuma-kotest/01-kotest-framework/01I.md',
            '/java/devkuma-kotest/01-kotest-framework/01J.md',
            '/java/devkuma-kotest/01-kotest-framework/01K.md',
            '/java/devkuma-kotest/01-kotest-framework/01L.md',
            '/java/devkuma-kotest/01-kotest-framework/01M.md',
            '/java/devkuma-kotest/01-kotest-framework/01N.md',
            '/java/devkuma-kotest/01-kotest-framework/01O.md',
            '/java/devkuma-kotest/01-kotest-framework/01P.md',
            '/java/devkuma-kotest/01-kotest-framework/01Q.md',
            '/java/devkuma-kotest/01-kotest-framework/01R.md',
            '/java/devkuma-kotest/01-kotest-framework/01S.md',
            '/java/devkuma-kotest/01-kotest-framework/01T.md',
          ]
        }
      ]
    }
  ], '/js/': [
    {
      text: 'JavaScript',
      icon: 'fa-brands fa-js',
      children: [ '/js/README.md' ]
    }, {
      text: 'Learn Typescript',
      icon: 'iconfont icon-typescript',
      collapsible: true,
      children: [
        '/js/learn-ts/README.md',
        '/js/learn-ts/advanced/01.md',
        '/js/learn-ts/advanced/02.md',
        '/js/learn-ts/advanced/03.md',
        '/js/learn-ts/advanced/04.md',
        '/js/learn-ts/advanced/05.md',
        '/js/learn-ts/advanced/06.md',
        '/js/learn-ts/advanced/07.md',
        '/js/learn-ts/advanced/08.md',
        '/js/learn-ts/advanced/09.md',
        '/js/learn-ts/advanced/10.md',
        '/js/learn-ts/advanced/11.md',
        '/js/learn-ts/advanced/12.md',
        '/js/learn-ts/advanced/13.md',
        '/js/learn-ts/advanced/14.md',
        '/js/learn-ts/advanced/15.md',
        '/js/learn-ts/advanced/16.md',
        '/js/learn-ts/advanced/17.md',
        '/js/learn-ts/advanced/18.md',
      ]
    }, {
      text: 'Must Know JavaScript API',
      collapsible: true,
      icon: 'fa-brands fa-js',
      children: [
        '/js/must-know-javascript-api/README.md',
        '/js/must-know-javascript-api/page-visibility.md',
        '/js/must-know-javascript-api/broadcast-channel.md',
        '/js/must-know-javascript-api/resize-observer.md',
        '/js/must-know-javascript-api/beacon.md',
        '/js/must-know-javascript-api/clipboard.md',
        '/js/must-know-javascript-api/fetch.md'
      ]
    }, {
      text: 'Eloquent Javascript',
      collapsible: true,
      icon: 'fa-brands fa-js',
      children: [
        '/js/eloquent-javascript/README.md',
        '/js/eloquent-javascript/00.md',
        '/js/eloquent-javascript/01.md',
        '/js/eloquent-javascript/02.md',
        '/js/eloquent-javascript/03.md',
        '/js/eloquent-javascript/04.md',
        '/js/eloquent-javascript/05.md',
        '/js/eloquent-javascript/06.md',
        '/js/eloquent-javascript/07.md',
        '/js/eloquent-javascript/08.md',
        '/js/eloquent-javascript/09.md',
        '/js/eloquent-javascript/10.md',
        '/js/eloquent-javascript/11.md',
        '/js/eloquent-javascript/12.md',
        '/js/eloquent-javascript/13.md',
        '/js/eloquent-javascript/14.md',
        '/js/eloquent-javascript/15.md',
        '/js/eloquent-javascript/16.md',
        '/js/eloquent-javascript/17.md',
        '/js/eloquent-javascript/18.md',
        '/js/eloquent-javascript/19.md',
        '/js/eloquent-javascript/20.md',
        '/js/eloquent-javascript/21.md',
      ]
    }
  ], '/py/': [
    {
      text: 'Python',
      icon: 'fa-brands fa-python',
      children: [ '/py/README.md' ]
    }, {
      text: '함께해요 파이썬 생태계',
      collapsible: true,
      icon: 'fa-brands fa-python',
      children: [
        '/py/ecosystem/README.md',
        {
          text: '00. 들어가기 전에',
          collapsible: true,
          children: [
            '/py/ecosystem/00.md',
            '/py/ecosystem/00A.md',
            '/py/ecosystem/00B.md',
          ]
        }, {
          text: '01. 파이썬 생태계를 소개합니다.',
          collapsible: true,
          children: [
            '/py/ecosystem/01.md',
            '/py/ecosystem/01A.md',
            '/py/ecosystem/01B.md',
          ]
        }, {
          text: '02. 운영 체제 및 시스템 관련',
          collapsible: true,
          children: [
            '/py/ecosystem/02.md',
            '/py/ecosystem/02/datetime.md',
            '/py/ecosystem/02/glob.md',
            '/py/ecosystem/02/os.md',
            '/py/ecosystem/02/pathlib.md',
            '/py/ecosystem/02/shutil.md',
            '/py/ecosystem/02/sys.md',
            '/py/ecosystem/02/tempfile.md',
            '/py/ecosystem/02/time.md',
          ]
        }, {
          text: '03. 데이터 과학 및 분석',
          collapsible: true,
          children: [
            '/py/ecosystem/03.md',
            '/py/ecosystem/03/algorithms.md',
            '/py/ecosystem/03/fakers.md',
            '/py/ecosystem/03/jupyter.md',
            '/py/ecosystem/03/pyvis.md',
            '/py/ecosystem/03/kiwisolver.md',
            '/py/ecosystem/03/numpy.md',
            '/py/ecosystem/03/pandas.md',
            '/py/ecosystem/03/pyspark.md',
            '/py/ecosystem/03/shapely.md',
            '/py/ecosystem/03/taichi.md',
            '/py/ecosystem/03/the-algorithms.md',
            '/py/ecosystem/03/datatable.md',
            '/py/ecosystem/03/python-patterns.md',
            '/py/ecosystem/03/vaex.md',
            '/py/ecosystem/03/science.md',
            '/py/ecosystem/03/time-series-data.md',
            '/py/ecosystem/03/nlp.md',
            '/py/ecosystem/03/stats.md',
          ]
        }, {
          text: '04. 데이터 시각화',
          collapsible: true,
          children: [
            '/py/ecosystem/04.md',
            '/py/ecosystem/04/apache-superset.md',
            '/py/ecosystem/04/bokeh.md',
            '/py/ecosystem/04/cartopy.md',
            '/py/ecosystem/04/chartify.md',
            '/py/ecosystem/04/diagrams.md',
            '/py/ecosystem/04/graphviz.md',
            '/py/ecosystem/04/hiplot.md',
            '/py/ecosystem/04/jupyter.md',
            '/py/ecosystem/04/matplotlib.md',
            '/py/ecosystem/04/network-x.md',
            '/py/ecosystem/04/pandas-gui.md',
            '/py/ecosystem/04/plotly.md',
            '/py/ecosystem/04/pygal.md',
            '/py/ecosystem/04/seaborn.md',
            '/py/ecosystem/04/vega-altair.md',
            '/py/ecosystem/04/vispy.md',
            '/py/ecosystem/04/visvis.md',
            '/py/ecosystem/04/flowfunc.md',
            '/py/ecosystem/04/folium.md',
            '/py/ecosystem/04/h2o-wave.md',
            '/py/ecosystem/04/nodezator.md',
            '/py/ecosystem/04/turtle.md',
          ]
        }, {
          text: '05. 머신 러닝 및 인공 지능',
          collapsible: true,
          children: [
            '/py/ecosystem/05.md',
            '/py/ecosystem/05/bob.md',
            '/py/ecosystem/05/cntk.md',
            '/py/ecosystem/05/caffe.md',
            '/py/ecosystem/05/datasets.md',
            '/py/ecosystem/05/eli5.md',
            '/py/ecosystem/05/fast-ai.md',
            '/py/ecosystem/05/gymnasium.md',
            '/py/ecosystem/05/keras.md',
            '/py/ecosystem/05/lang-chain.md',
            '/py/ecosystem/05/light-gbm.md',
            '/py/ecosystem/05/netron.md',
            '/py/ecosystem/05/nu-pic.md',
            '/py/ecosystem/05/onnx.md',
            '/py/ecosystem/05/py-caret.md',
            '/py/ecosystem/05/py-mc.md',
            '/py/ecosystem/05/py-torch.md',
            '/py/ecosystem/05/scikit-learn.md',
            '/py/ecosystem/05/tensorflow.md',
            '/py/ecosystem/05/whisper.md',
            '/py/ecosystem/05/xg-boost.md',
            '/py/ecosystem/05/diffusers.md',
            '/py/ecosystem/05/mxnet.md',
            '/py/ecosystem/05/timm.md',
            '/py/ecosystem/05/transformers.md',
          ]
        }, {
          text: '06. 파이썬 웹 개발',
          collapsible: true,
          children: [
            '/py/ecosystem/06.md',
            {
              text: '네트워킹 및 웹 스크래핑',
              collapsible: true,
              children: [
                '/py/ecosystem/06/network-web-scraping/README.md',
                '/py/ecosystem/06/network-web-scraping/beautiful-soup.md',
                '/py/ecosystem/06/network-web-scraping/httpx.md',
                '/py/ecosystem/06/network-web-scraping/mechanical-soup.md',
                '/py/ecosystem/06/network-web-scraping/py-query.md',
                '/py/ecosystem/06/network-web-scraping/py-zmq.md',
                '/py/ecosystem/06/network-web-scraping/requests.md',
                '/py/ecosystem/06/network-web-scraping/scapy.md',
                '/py/ecosystem/06/network-web-scraping/scrapy.md',
                '/py/ecosystem/06/network-web-scraping/selenium.md',
                '/py/ecosystem/06/network-web-scraping/asyncio.md',
                '/py/ecosystem/06/network-web-scraping/httpie.md',
                '/py/ecosystem/06/network-web-scraping/impacket.md',
                '/py/ecosystem/06/network-web-scraping/socket.md',
                '/py/ecosystem/06/network-web-scraping/urllib.md',
                '/py/ecosystem/06/network-web-scraping/webbrowser.md',
              ]
            }, {
              text: '실시간 통신',
              collapsible: true,
              children: [
                '/py/ecosystem/06/rtc/README.md',
                '/py/ecosystem/06/rtc/web-sockets.md',
                '/py/ecosystem/06/rtc/paho-mqtt.md',
                '/py/ecosystem/06/rtc/python-socketio.md',
              ]
            }, {
              text: '웹 애플리케이션 서버',
              collapsible: true,
              children: [
                '/py/ecosystem/06/was/README.md',
                '/py/ecosystem/06/was/gunicorn.md',
                '/py/ecosystem/06/was/u-wsgi.md',
                '/py/ecosystem/06/was/uvicorn.md',
              ]
            }, {
              text: '웹 어플리케이션 프론트엔드',
              collapsible: true,
              children: [
                '/py/ecosystem/06/fe/README.md',
                '/py/ecosystem/06/fe/fast-ui.md',
                '/py/ecosystem/06/fe/just-py.md',
                '/py/ecosystem/06/fe/nice-gui.md',
              ]
            }, {
              text: '웹 프레임워크',
              collapsible: true,
              children: [
                '/py/ecosystem/06/web-framework/README.md',
                '/py/ecosystem/06/web-framework/bottle.md',
                '/py/ecosystem/06/web-framework/cubic-web.md',
                '/py/ecosystem/06/web-framework/django.md',
                '/py/ecosystem/06/web-framework/falcon.md',
                '/py/ecosystem/06/web-framework/fast-api.md',
                '/py/ecosystem/06/web-framework/flask.md',
                '/py/ecosystem/06/web-framework/py4web.md',
                '/py/ecosystem/06/web-framework/pyramid.md',
                '/py/ecosystem/06/web-framework/quart.md',
                '/py/ecosystem/06/web-framework/reflex.md',
                '/py/ecosystem/06/web-framework/sanic.md',
                '/py/ecosystem/06/web-framework/starlette.md',
                '/py/ecosystem/06/web-framework/streamlit.md',
                '/py/ecosystem/06/web-framework/tornado.md',
                '/py/ecosystem/06/web-framework/web2py.md',
              ]
            }, {
              text: '유틸리티 및 기타',
              collapsible: true,
              children: [
                '/py/ecosystem/06/util/README.md',
                '/py/ecosystem/06/util/idna.md',
                '/py/ecosystem/06/util/jinja2.md',
                '/py/ecosystem/06/util/markup-safe.md',
                '/py/ecosystem/06/util/auth.md',
                '/py/ecosystem/06/util/pydantic.md',
                '/py/ecosystem/06/util/werkzeug.md',
              ]
            }, {
              text: '정적 사이트 생성기',
              collapsible: true,
              children: [
                '/py/ecosystem/06/ssg/README.md',
                '/py/ecosystem/06/ssg/nikola.md',
                '/py/ecosystem/06/ssg/pelican.md',
                '/py/ecosystem/06/ssg/mkdocs.md',
              ]
            }, {
              text: '컨텐츠 관리 시스템 (CMS)',
              collapsible: true,
              children: [
                '/py/ecosystem/06/cms/README.md',
                '/py/ecosystem/06/cms/django-cms.md',
                '/py/ecosystem/06/cms/mezzanine.md',
                '/py/ecosystem/06/cms/wagtail.md',
                '/py/ecosystem/06/cms/python-wordpress-xmlrpc.md',
                '/py/ecosystem/06/cms/g6.md',
              ]
            }, {
              text: '07. 데이터베이스 및 파일 처리',
              collapsible: true,
              children: [
                '/py/ecosystem/07.md',
                
              ]
            }
          ]
        }
      ]
    }, {
      text: 'Finance with Python',
      collapsible: true,
      icon: 'fa-brands fa-python',
      children: [
        '/py/finance/README.md',
        '/py/finance/01.md',
        '/py/finance/02.md',
        '/py/finance/03.md',
        '/py/finance/04.md',
        '/py/finance/05.md',
        '/py/finance/06.md',
        '/py/finance/07.md',
        '/py/finance/08.md',
        '/py/finance/09.md', 
        '/py/finance/10.md', 
        '/py/finance/11.md', 
        '/py/finance/12.md', 
      ]
    }, {
      text: '사장님 몰래 하는 파이썬 업무자동화 (들키면 일 많아짐)',
      collapsible: true,
      icon: 'fa-brands fa-python',
      children: [
        '/py/rpa-excel/README.md',
        '/py/rpa-excel/01.md',
        '/py/rpa-excel/02a.md',
        '/py/rpa-excel/02b.md',
        '/py/rpa-excel/02c.md',
        '/py/rpa-excel/02d.md',
        '/py/rpa-excel/02e.md',
        '/py/rpa-excel/02f.md',
        '/py/rpa-excel/02g.md',
        '/py/rpa-excel/02h.md',
        '/py/rpa-excel/02i.md',
        '/py/rpa-excel/03.md',
      ]
    }, {
      text: '<랭체인LangChain 노트> - LangChain 한국어 튜토리얼🇰🇷',
      collapsible: true,
      icon: 'fa-brands fa-python',
      children: [
        '/py/langchain-kr/README.md',
      ]
    }, {
      text: 'OpenCV – Python 고급 기법 프로그래밍',
      collapsible: true,
      icon: 'fa-brands fa-python',
      children: [
        '/py/opencv-advacned/README.md',
        '/py/opencv-advacned/00.md',
        '/py/opencv-advacned/01.md',
        '/py/opencv-advacned/02.md',
      ],
    }
  ], '/css/': [
    {
      text: 'CSS',
      icon: 'fa-brands fa-css3-alt',
      children: [ '/css/README.md' ]
    }, {
      text: 'Colt Steele - Mastering CSS Grid',
      collapsible: true,
      icon: 'fa-brands fa-css3-alt',
      children: [
        '/css/colt-steele-mastering-css-grid/README.md',
        {
          text: '01. CSS Grid Basics',
          collapsible: true,
          children: [
            '/css/colt-steele-mastering-css-grid/01.md',
            '/css/colt-steele-mastering-css-grid/01A.md',
            '/css/colt-steele-mastering-css-grid/01B.md',
            '/css/colt-steele-mastering-css-grid/01C.md',
            '/css/colt-steele-mastering-css-grid/01D.md',
            '/css/colt-steele-mastering-css-grid/01E.md',
            '/css/colt-steele-mastering-css-grid/01F.md',
            '/css/colt-steele-mastering-css-grid/01G.md',
            '/css/colt-steele-mastering-css-grid/01H.md',
            '/css/colt-steele-mastering-css-grid/01I.md',
          ]
        }, {
          text: '02. Units and Utilities',
          collapsible: true,
          children: [
            '/css/colt-steele-mastering-css-grid/02.md',
            '/css/colt-steele-mastering-css-grid/02A.md',
            '/css/colt-steele-mastering-css-grid/02B.md',
            '/css/colt-steele-mastering-css-grid/02C.md',
            '/css/colt-steele-mastering-css-grid/02D.md',
            '/css/colt-steele-mastering-css-grid/02E.md',
            '/css/colt-steele-mastering-css-grid/02F.md',
            '/css/colt-steele-mastering-css-grid/02G.md',
            '/css/colt-steele-mastering-css-grid/02H.md',
            '/css/colt-steele-mastering-css-grid/02I.md',
          ]
        },
        '/css/colt-steele-mastering-css-grid/03-positioning-elements-by-lines',
        '/css/colt-steele-mastering-css-grid/04-grid-areas',
        '/css/colt-steele-mastering-css-grid/05-the-implicit-grid',
        '/css/colt-steele-mastering-css-grid/06-creating-responsive-grids',
        '/css/colt-steele-mastering-css-grid/07-building-an-example-layout',
      ]
    }
  ], '/rust/': [
    {
      text: 'Rust',
      icon: 'fa-brands fa-rust',
      children: [ '/rust/README.md' ]
    }, {
      text: 'Rust by Practice',
      collapsible: true,
      icon: 'fa-brands fa-rust',
      children: [
        '/rust/rust-by-practice/README.md',
        '/rust/rust-by-practice/elegant-code-base.md',
        '/rust/rust-by-practice/variables.md',
        {
          text: '3. Basic Types',
          collapsible: true,
          children: [
            // '/rust/rust-by-practice/basic-types/README.md',
            '/rust/rust-by-practice/basic-types/numbers.md',
            '/rust/rust-by-practice/basic-types/char-bool-unit.md',
            '/rust/rust-by-practice/basic-types/statements-expressions.md',
            '/rust/rust-by-practice/basic-types/functions.md',
          ]
        }, {
          text: '4. Ownership and Borrowing',
          collapsible: true,
          children: [
            // '/rust/rust-by-practice/ownership/README.md',
            '/rust/rust-by-practice/ownership/ownership.md',
            '/rust/rust-by-practice/ownership/borrowing.md',
          ]
        }, {
          text: '5. Compound Types',
          collapsible: true,
          children: [
            // '/rust/rust-by-practice/compound-types/README.md',
            '/rust/rust-by-practice/compound-types/string.md',
            '/rust/rust-by-practice/compound-types/array.md',
            '/rust/rust-by-practice/compound-types/slice.md',
            '/rust/rust-by-practice/compound-types/tuple.md',
            '/rust/rust-by-practice/compound-types/struct.md',
            '/rust/rust-by-practice/compound-types/enum.md',
          ]
        },
        '/rust/rust-by-practice/flow-control.md',
        {
          text: '7. Pattern Match',
          collapsible: true,
          children: [
            // '/rust/rust-by-practice/pattern-match/README.md',
            '/rust/rust-by-practice/pattern-match/match-iflet.md',
            '/rust/rust-by-practice/pattern-match/pattenrs.md',
          ]
        },
        '/rust/rust-by-practice/method.md',
        {
          text: '9. Generics and Traits',
          collapsible: true,
          children: [
            // '/rust/rust-by-practice/generics-traits/README.md',
            '/rust/rust-by-practice/generics-traits/generics.md',
            '/rust/rust-by-practice/generics-traits/const-generics.md',
            '/rust/rust-by-practice/generics-traits/traits.md',
            '/rust/rust-by-practice/generics-traits/trait-object.md',
            '/rust/rust-by-practice/generics-traits/advanced-traits.md',
          ]
        }, {
          text: '10. Collection Types',
          collapsible: true,
          children: [
            // '/rust/rust-by-practice/collection-types/README.md',
            '/rust/rust-by-practice/collection-types/string.md',
            '/rust/rust-by-practice/collection-types/vector.md',
            '/rust/rust-by-practice/collection-types/hashmap.md',
          ]
        }, {
          text: '11. Type Conversion',
          collapsible: true,
          children: [
            // '/rust/rust-by-practice/type-conversion/README.md',
            '/rust/rust-by-practice/type-conversion/as.md',
            '/rust/rust-by-practice/type-conversion/from-into.md',
            '/rust/rust-by-practice/type-conversion/others.md',
          ]
        }, {
          text: '12. Result and panic',
          collapsible: true,
          children: [
            // '/rust/rust-by-practice/result-panic/README.md',
            '/rust/rust-by-practice/result-panic/panic.md',
            '/rust/rust-by-practice/result-panic/result.md',
          ]
        }, {
          text: '13. Crate and Module',
          collapsible: true,
          children: [
            // '/rust/rust-by-practice/crate-module/README.md',
            '/rust/rust-by-practice/crate-module/crate.md',
            '/rust/rust-by-practice/crate-module/module.md',
            '/rust/rust-by-practice/crate-module/use-pub.md',
          ]
        },
        '/rust/rust-by-practice/comments-docs.md',
        {
          text: '15. Formatted Output',
          collapsible: true,
          children: [
            // '/rust/rust-by-practice/formatted-output/README.md',
            '/rust/rust-by-practice/formatted-output/println.md',
            '/rust/rust-by-practice/formatted-output/debug-display.md',
            '/rust/rust-by-practice/formatted-output/formatting.md',
          ]
        }, {
          text: '16. Lifetime',
          collapsible: true,
          children: [
            // '/rust/rust-by-practice/lifetime/README.md',
            '/rust/rust-by-practice/lifetime/basic.md',
            '/rust/rust-by-practice/lifetime/static.md',
            '/rust/rust-by-practice/lifetime/advance.md',
          ]
        },
        '/rust/rust-by-practice/17-functional-programing.md',
        '/rust/rust-by-practice/18-newtype-sized.md',
        '/rust/rust-by-practice/19-smart-pointers.md',
        '/rust/rust-by-practice/20-weak.md',
        '/rust/rust-by-practice/21-self-referential.md',
        '/rust/rust-by-practice/22-threads.md',
        '/rust/rust-by-practice/23-global-variables.md',
        '/rust/rust-by-practice/24-errors.md',
        '/rust/rust-by-practice/25-unsafe.md',
        '/rust/rust-by-practice/26-macro.md',
        '/rust/rust-by-practice/27-tests.md',
        '/rust/rust-by-practice/28-async.md',
        '/rust/rust-by-practice/29-std.md',
        '/rust/rust-by-practice/30-fight-compiler.md',
      ]
    }, {
      text: 'Wasm by Example',
      collapsible: true,
      icon: 'fa-brands fa-rust',
      children: [
        '/rust/wasm-by-example/README.md',
        '/rust/wasm-by-example/01-concepts.md',
        '/rust/wasm-by-example/02-applying-the-concepts.md',
        '/rust/wasm-by-example/03-ecosystem-tools-and-language-features.md',
        '/rust/wasm-by-example/04-webassembly-outside-of-the-browser.md',
      ]
    }, {
      text: 'Rust to Assembly',
      collapsible: true,
      icon: 'fa-brands fa-rust',
      children: [
        '/rust/eventhelix-rust-to-assembly/README.md',
        '/rust/eventhelix-rust-to-assembly/rust-enum-and-match-representation-in-assembly.md',
        '/rust/eventhelix-rust-to-assembly/assembly-code-generated-when-self-is-passed-by-value-reference-or-as-a-smart-pointer.md',
        '/rust/eventhelix-rust-to-assembly/mapping-arrays-tuples-box-and-option-to-assembly.md',
        '/rust/eventhelix-rust-to-assembly/rust-to-assembly-vector-iteration.md'
      ]
    }, 
  ], '/php/': [
    {
      text: 'PHP',
      icon: 'fa-brands fa-php',
      children: [ '/php/README.md' ]
    }, {
      text: 'PHP',
      collapsible: true,
      icon: 'fa-brands fa-php',
      children: [
        '/php/three-min-summary/README.md',
        {
          text: '01. 개발 환경 설정과 기초 문법',
          collapsible: true,
          children: [
            '/php/three-min-summary/01-basics/01A.md',
            '/php/three-min-summary/01-basics/01B.md',
            '/php/three-min-summary/01-basics/01C.md',
            '/php/three-min-summary/01-basics/01D.md',
            '/php/three-min-summary/01-basics/01E.md',
            '/php/three-min-summary/01-basics/01F.md',
            '/php/three-min-summary/01-basics/01G.md',
            '/php/three-min-summary/01-basics/01H.md',
            '/php/three-min-summary/01-basics/01I.md',
            '/php/three-min-summary/01-basics/01J.md',
            '/php/three-min-summary/01-basics/01K.md',
            '/php/three-min-summary/01-basics/01L.md',
          ]
        }, {
          text: '02. 웹 다루기',
          collapsible: true,
          children: [
            '/php/three-min-summary/02-web/02A.md',
            '/php/three-min-summary/02-web/02B.md',
            '/php/three-min-summary/02-web/02C.md',
            '/php/three-min-summary/02-web/02D.md',
            '/php/three-min-summary/02-web/02E.md',
            '/php/three-min-summary/02-web/02F.md',
            '/php/three-min-summary/02-web/02G.md',
            '/php/three-min-summary/02-web/02H.md',
            '/php/three-min-summary/02-web/02I.md',
            '/php/three-min-summary/02-web/02J.md',
            '/php/three-min-summary/02-web/02K.md',
          ]
        }, {
          text: '03. 데이터베이스 다루기',
          collapsible: true,
          children: [
            '/php/three-min-summary/03-database/03A.md',
            '/php/three-min-summary/03-database/03B.md',
            '/php/three-min-summary/03-database/03C.md',
            '/php/three-min-summary/03-database/03D.md',
            '/php/three-min-summary/03-database/03E.md',
            '/php/three-min-summary/03-database/03F.md',
            '/php/three-min-summary/03-database/03G.md',
            '/php/three-min-summary/03-database/03H.md',
            '/php/three-min-summary/03-database/03I.md',
            '/php/three-min-summary/03-database/03J.md',
          ]
        }, {
          text: '04. 문자열 함수들',
          collapsible: true,
          children: [
            '/php/three-min-summary/04-string/04A.md',
            '/php/three-min-summary/04-string/04B.md',
            '/php/three-min-summary/04-string/04C.md',
            '/php/three-min-summary/04-string/04D.md',
            '/php/three-min-summary/04-string/04E.md',
            '/php/three-min-summary/04-string/04F.md',
          ]
        }, {
          text: '05. 유효성 검사와 데이터 정제',
          collapsible: true,
          children: [
            '/php/three-min-summary/05-validation/05A.md',
            '/php/three-min-summary/05-validation/05B.md',
            '/php/three-min-summary/05-validation/05C.md',
            '/php/three-min-summary/05-validation/05D.md',
            '/php/three-min-summary/05-validation/05E.md',
          ]
        }, {
          text: '06. 모던 php',
          collapsible: true,
          children: [
            '/php/three-min-summary/06-modern-php/06A.md',
            '/php/three-min-summary/06-modern-php/06B.md',
            '/php/three-min-summary/06-modern-php/06C.md',
            '/php/three-min-summary/06-modern-php/06D.md',
            '/php/three-min-summary/06-modern-php/06E.md',
            '/php/three-min-summary/06-modern-php/06F.md',
            '/php/three-min-summary/06-modern-php/06G.md',
          ]
        }, {
          text: '07. 한시간 내에 한줄 메모장 만들기',
          collapsible: true,
          children: [
            '/php/three-min-summary/07-miniproject/07A.md',
            '/php/three-min-summary/07-miniproject/07B.md',
            '/php/three-min-summary/07-miniproject/07C.md',
            '/php/three-min-summary/07-miniproject/07D.md',
            '/php/three-min-summary/07-miniproject/07E.md',
            '/php/three-min-summary/07-miniproject/07F.md',
            '/php/three-min-summary/07-miniproject/07G.md',
            '/php/three-min-summary/07-miniproject/07H.md',
            '/php/three-min-summary/07-miniproject/07I.md',
            '/php/three-min-summary/07-miniproject/07J.md',
            '/php/three-min-summary/07-miniproject/07K.md',
            '/php/three-min-summary/07-miniproject/07L.md',
            '/php/three-min-summary/07-miniproject/07M.md',
            '/php/three-min-summary/07-miniproject/07N.md',
            '/php/three-min-summary/07-miniproject/07O.md',
            '/php/three-min-summary/07-miniproject/07P.md',
          ]
        },
        '/php/three-min-summary/08-final-note.md'
      ]
    }
  ], '/cpp/':  [ 
    {
      text: 'C & C++',
      children: [ '/cpp/README.md' ]
    }, {
      text: 'Algorithms for Competitive Programming',
      collapsible: true,
      icon: 'iconfont icon-cpp',
      children: [ 
        '/cpp/algorithms-for-competitive-programming/README.md',
        {
          text: '01. Algebra',
          collapsible: true,
          children: [
            '/cpp/algorithms-for-competitive-programming/01-algebra/01A.md',
            '/cpp/algorithms-for-competitive-programming/01-algebra/01B.md',
            '/cpp/algorithms-for-competitive-programming/01-algebra/01C.md',
            '/cpp/algorithms-for-competitive-programming/01-algebra/01D.md',
            '/cpp/algorithms-for-competitive-programming/01-algebra/01E.md',
            '/cpp/algorithms-for-competitive-programming/01-algebra/01F.md',
          ]
        }, {
          text: '02. Data Structures',
          collapsible: true,
          children: [
            '/cpp/algorithms-for-competitive-programming/02-data-structures/02A.md',
            '/cpp/algorithms-for-competitive-programming/02-data-structures/02B.md',
            '/cpp/algorithms-for-competitive-programming/02-data-structures/02C.md',
          ]
        }, {
          text: '03. Dynamic Programming',
          collapsible: true,
          children: [
            '/cpp/algorithms-for-competitive-programming/03-dynamic-programming/03A.md',
            '/cpp/algorithms-for-competitive-programming/03-dynamic-programming/03B.md',
            '/cpp/algorithms-for-competitive-programming/03-dynamic-programming/03C.md',
          ]
        }, {
          text: '04. String Processing',
          collapsible: true,
          children: [
            '/cpp/algorithms-for-competitive-programming/04-string-processing/04A.md',
            '/cpp/algorithms-for-competitive-programming/04-string-processing/04B.md',
            '/cpp/algorithms-for-competitive-programming/04-string-processing/04C.md',
          ]
        }, {
          text: '05. Linear Algebra',
          collapsible: true,
          children: [
            '/cpp/algorithms-for-competitive-programming/04-string-processing/05A.md',
          ]
        }, {
          text: '06. Combinatorics',
          collapsible: true,
          children: [
            '/cpp/algorithms-for-competitive-programming/06-combinatorics/06A.md',
            '/cpp/algorithms-for-competitive-programming/06-combinatorics/06B.md',
            '/cpp/algorithms-for-competitive-programming/06-combinatorics/06C.md',
          ]
        }, {
          text: '07. Numerical Methods',
          collapsible: true,
          children: [
            '/cpp/algorithms-for-competitive-programming/07-numerical-methods/07A.md',
            '/cpp/algorithms-for-competitive-programming/07-numerical-methods/07B.md',
          ]
        }, {
          text: '08. Geometry',
          collapsible: true,
          children: [
            '/cpp/algorithms-for-competitive-programming/08-geometry/08A.md',
            '/cpp/algorithms-for-competitive-programming/08-geometry/08B.md',
            '/cpp/algorithms-for-competitive-programming/08-geometry/08C.md',
            '/cpp/algorithms-for-competitive-programming/08-geometry/08D.md',
            '/cpp/algorithms-for-competitive-programming/08-geometry/08E.md',
            '/cpp/algorithms-for-competitive-programming/08-geometry/08F.md',
          ]
        }, {
          text: '09. Graphs',
          collapsible: true,
          children: [
            '/cpp/algorithms-for-competitive-programming/09-graphs/09A.md',
            '/cpp/algorithms-for-competitive-programming/09-graphs/09B.md',
            '/cpp/algorithms-for-competitive-programming/09-graphs/09C.md',
            '/cpp/algorithms-for-competitive-programming/09-graphs/09D.md',
            '/cpp/algorithms-for-competitive-programming/09-graphs/09E.md',
            '/cpp/algorithms-for-competitive-programming/09-graphs/09F.md',
            '/cpp/algorithms-for-competitive-programming/09-graphs/09G.md',
            '/cpp/algorithms-for-competitive-programming/09-graphs/09H.md',
            '/cpp/algorithms-for-competitive-programming/09-graphs/09I.md',
            '/cpp/algorithms-for-competitive-programming/09-graphs/09J.md',
          ]
        }, {
          text: '10. Misc',
          collapsible: true,
          children: [
            '/cpp/algorithms-for-competitive-programming/10-misc/10A.md',
            '/cpp/algorithms-for-competitive-programming/10-misc/10B.md',
            '/cpp/algorithms-for-competitive-programming/10-misc/10C.md',
            '/cpp/algorithms-for-competitive-programming/10-misc/10D.md',            
          ]
        }
      ]
    }, {
      text: 'Beej\'s Guide to Network Programming',
      collapsible: true,
      children: [
        '/cpp/beejs-guide-to-network-programming/README.md',
        '/cpp/beejs-guide-to-network-programming/01.md',
      ]
    }, 
    /*
    {
      text: 'Getting Started with Accelerated Computing in CUDA C/C++',
      collapsible: true,
      icon: 'iconfont icon-cpp',
      children: [
        '/cpp/nvidia-dli+s-ac-04/README.md',
      ]
    },  {
      text: 'Scaling CUDA C++ Applications to Multiple Nodes',
      collapsible: true,
      icon: 'iconfont icon-cpp',
      children: [
        '/cpp/nvidia-dli+s-ac-07/README.md',
      ]
    }, {
      text: 'GPU Acceleration with the C++ Standard Library',
      collapsible: true,
      icon: 'iconfont icon-cpp',
      children: [
        '/cpp/nvidia-dli+s-ac-08/README.md',
      ]
    }, {
      text: 'Scaling GPU-Accelerated Applications with the C++ Standard Library',
      collapsible: true,
      icon: 'iconfont icon-cpp',
      children: [
        '/cpp/nvidia-dli+s-ac-09/README.md',
      ]
    }
    */
  ], '/ruby/': [
    {
      text: 'Ruby',
      icon: 'iconfont icon-ruby',
      children: [ '/ruby/README.md' ]
    }, {
      text: 'Jets - Learning Content',
      collapsible: true,
      icon: 'iconfont icon-ruby',
      children: [
        '/ruby/rubyonjets-learning-content/README.md',
        '/ruby/rubyonjets-learning-content/20190204-aws-lambda-function-jets-introductory-series-part-1.md',
        '/ruby/rubyonjets-learning-content/20190205-api-gateway-jets-introductory-series-part-2.md',
        '/ruby/rubyonjets-learning-content/20190206-cloudwatch-event-rule-jets-introductory-series-part-3.md',
        '/ruby/rubyonjets-learning-content/20190211-hello-world-examples-jets-introductory-series-part-4',
        '/ruby/rubyonjets-learning-content/20180907-jets-tutorial-crud-app-introduction-part-1.md',
        '/ruby/rubyonjets-learning-content/20180908-jets-tutorial-deploy-to-aws-lambda-part-2.md',
        '/ruby/rubyonjets-learning-content/20180909-jets-tutorial-debugging-logs-part-3.md',
        '/ruby/rubyonjets-learning-content/20180910-jets-tutorial-background-jobs-part-4.md',
        '/ruby/rubyonjets-learning-content/20180911-jets-tutorial-iam-policies-part-5.md',
        '/ruby/rubyonjets-learning-content/20180912-jets-tutorial-function-properties-part-6.md',
        '/ruby/rubyonjets-learning-content/20180913-jets-tutorial-extra-environments-part-7.md',
        '/ruby/rubyonjets-learning-content/20180926-jets-tutorial-different-environments-part-8.md',
        '/ruby/rubyonjets-learning-content/20180927-jets-tutorial-polymorphic-support-part-9.md',
        '/ruby/rubyonjets-learning-content/20181112-jets-tutorial-jets-delete.md',
        '/ruby/rubyonjets-learning-content/20180818-introducing-jets-a-ruby-serverless-framework.md',
        '/ruby/rubyonjets-learning-content/20181212-official-aws-ruby-support-for-jets-serverless-framework.md',
        '/ruby/rubyonjets-learning-content/20181213-jets-image-upload-carrierwave-tutorial-binary-support.md',
        '/ruby/rubyonjets-learning-content/20190113-build-an-api-service-with-jets-ruby-serverless-framework.md',
        '/ruby/rubyonjets-learning-content/20190114-serverless-slack-commands-with-ruby.md',
        '/ruby/rubyonjets-learning-content/20181221-jets-afterburner-serverless-rails-on-aws-lambda-in-5-minutes.md',
      ]
    }, 
  ], '/haskell/': [
    {
      text: 'Haskell',
      icon: 'iconfont icon-haskell',
      children: [ '/haskell/README.md' ]

    }, {
      text: 'Megaparsec tutorial',
      collapsible: true,
      icon: 'iconfont icon-haskell',
      children: [
        '/haskell/megaparsec/README.md',
        '/haskell/megaparsec/01.md',
        '/haskell/megaparsec/02.md',
        '/haskell/megaparsec/03.md',
        '/haskell/megaparsec/04.md',
        '/haskell/megaparsec/05.md',
        '/haskell/megaparsec/06.md',
        '/haskell/megaparsec/07.md',
        '/haskell/megaparsec/08.md',
        '/haskell/megaparsec/09.md',
        '/haskell/megaparsec/10.md',
        '/haskell/megaparsec/11.md',
        '/haskell/megaparsec/12.md',
        '/haskell/megaparsec/13.md',
        '/haskell/megaparsec/14.md',
        '/haskell/megaparsec/15.md',
        '/haskell/megaparsec/16.md',
        '/haskell/megaparsec/17.md',
        '/haskell/megaparsec/18.md',
      ]
    }, {
      text: 'Template Haskell tutorial',
      collapsible: true,
      icon: 'iconfont icon-haskell',
      children: [
        '/haskell/template-haskell/README.md',
        '/haskell/template-haskell/01.md',
        '/haskell/template-haskell/02.md',
        '/haskell/template-haskell/03.md',
        '/haskell/template-haskell/04.md',
        '/haskell/template-haskell/05.md',
        '/haskell/template-haskell/06.md',
        '/haskell/template-haskell/07.md',
        '/haskell/template-haskell/08.md',
        '/haskell/template-haskell/09.md',
        '/haskell/template-haskell/10.md',
        '/haskell/template-haskell/11.md',
        '/haskell/template-haskell/12.md',
        '/haskell/template-haskell/13.md',
        '/haskell/template-haskell/14.md',
        '/haskell/template-haskell/15.md',
      ]
    }
  ], '/docker/': [
    {
      text: 'Docker',
      icon: 'fa-brands fa-docker',
      children: [ '/docker/README.md' ]
    }, {
      text: '언제나 최신 Docker',
      collapsible: true,
      icon: 'fa-brands fa-docker',
      children: [
        '/docker/always-up-to-date-docker/README.md',
        {
          text: '01. Docker',
          collapsible: true,
          children: [
            '/docker/always-up-to-date-docker/01.md',
            '/docker/always-up-to-date-docker/01A.md',
            '/docker/always-up-to-date-docker/01B.md',
          ]
        }, {
          text: '02. Docker 설치하기',
          collapsible: true,
          children: [
            '/docker/always-up-to-date-docker/02.md',
            '/docker/always-up-to-date-docker/02A.md',
            '/docker/always-up-to-date-docker/02B.md',
            '/docker/always-up-to-date-docker/02C.md',
          ]
        },
        '/docker/always-up-to-date-docker/03.md',
        {
          text: '04. Docker 이미지 생성하기',
          collapsible: true,
          children: [
            '/docker/always-up-to-date-docker/04.md',
            '/docker/always-up-to-date-docker/04A.md',
            '/docker/always-up-to-date-docker/04B.md',
            '/docker/always-up-to-date-docker/04C.md',
          ]
        },
        '/docker/always-up-to-date-docker/05.md',
        {
          text: '06. Docker 좀더 활용하기',
          collapsible: true,
          children: [
            '/docker/always-up-to-date-docker/06.md',
            '/docker/always-up-to-date-docker/06A.md',
            '/docker/always-up-to-date-docker/06B.md',
            '/docker/always-up-to-date-docker/06C.md',
            '/docker/always-up-to-date-docker/06D.md',
            '/docker/always-up-to-date-docker/06E.md',
            '/docker/always-up-to-date-docker/06F.md',
            '/docker/always-up-to-date-docker/06G.md',
          ]
        }, {
          text: '07. Dockerfile 자세히 알아보기',
          collapsible: true,
          children: [
            '/docker/always-up-to-date-docker/07.md',
            '/docker/always-up-to-date-docker/07A.md',
            '/docker/always-up-to-date-docker/07B.md',
            '/docker/always-up-to-date-docker/07C.md',
            '/docker/always-up-to-date-docker/07D.md',
            '/docker/always-up-to-date-docker/07E.md',
            '/docker/always-up-to-date-docker/07F.md',
            '/docker/always-up-to-date-docker/07G.md',
            '/docker/always-up-to-date-docker/07H.md',
            '/docker/always-up-to-date-docker/07I.md',
            '/docker/always-up-to-date-docker/07J.md',
            '/docker/always-up-to-date-docker/07K.md',
            '/docker/always-up-to-date-docker/07L.md',
            '/docker/always-up-to-date-docker/07M.md',
            '/docker/always-up-to-date-docker/07N.md',
          ]
        }, {
          text: '08. Docker Compose 사용하기',
          collapsible: true,
          children: [
            '/docker/always-up-to-date-docker/08.md',
            '/docker/always-up-to-date-docker/08A.md',
            '/docker/always-up-to-date-docker/08B.md',
          ]
        }, {
          text: '09. Docker Hub 사용하기',
          collapsible: true,
          children: [
            '/docker/always-up-to-date-docker/09.md',
            '/docker/always-up-to-date-docker/09A.md',
            '/docker/always-up-to-date-docker/09B.md',
            '/docker/always-up-to-date-docker/09C.md',
          ]
        }, {
          text: '10. Docker로 Next.js 애플리케이션 구축하기',
          collapsible: true,
          children: [
            '/docker/always-up-to-date-docker/10.md',
            '/docker/always-up-to-date-docker/10A.md',
            '/docker/always-up-to-date-docker/10B.md',
            '/docker/always-up-to-date-docker/10C.md',
            '/docker/always-up-to-date-docker/10D.md',
          ]
        }, {
          text: '11. Docker로 Django 애플리케이션 구축하기',
          collapsible: true,
          children: [
            '/docker/always-up-to-date-docker/11.md',
            '/docker/always-up-to-date-docker/11A.md',
            '/docker/always-up-to-date-docker/11B.md',
            '/docker/always-up-to-date-docker/11C.md',
            '/docker/always-up-to-date-docker/11D.md',
          ]
        }, {
          text: '12. Docker로 Spring Boot 애플리케이션 구축하기',
          collapsible: true,
          children: [
            '/docker/always-up-to-date-docker/12.md',
            '/docker/always-up-to-date-docker/12A.md',
            '/docker/always-up-to-date-docker/12B.md',
            '/docker/always-up-to-date-docker/12C.md',
            '/docker/always-up-to-date-docker/12D.md',
          ]
        }, {
          text: '13. Docker 명령어 및 옵션 목록',
          collapsible: true,
          children: [
            '/docker/always-up-to-date-docker/13.md',
            '/docker/always-up-to-date/docker/13A.md',
            '/docker/always-up-to-date/docker/13B.md',
            '/docker/always-up-to-date/docker/13C.md',
            '/docker/always-up-to-date/docker/13D.md',
            '/docker/always-up-to-date/docker/13E.md',
            '/docker/always-up-to-date/docker/13F.md',
            '/docker/always-up-to-date/docker/13G.md',
            '/docker/always-up-to-date/docker/13H.md',
            '/docker/always-up-to-date/docker/13I.md',
            '/docker/always-up-to-date/docker/13J.md',
            '/docker/always-up-to-date/docker/13K.md',
            '/docker/always-up-to-date/docker/13L.md',
            '/docker/always-up-to-date/docker/13M.md',
            '/docker/always-up-to-date/docker/13N.md',
            '/docker/always-up-to-date/docker/13O.md',
            '/docker/always-up-to-date/docker/13P.md',
            '/docker/always-up-to-date/docker/13Q.md',
            '/docker/always-up-to-date/docker/13R.md',
            '/docker/always-up-to-date/docker/13S.md',
            '/docker/always-up-to-date/docker/13T.md',
            '/docker/always-up-to-date/docker/13U.md',
            '/docker/always-up-to-date/docker/13V.md',
            '/docker/always-up-to-date/docker/13W.md',
            '/docker/always-up-to-date/docker/13X.md',
            '/docker/always-up-to-date/docker/13Y.md',
            '/docker/always-up-to-date/docker/13Z.md',
            '/docker/always-up-to-date/docker/13AA.md',
            '/docker/always-up-to-date/docker/13AB.md',
            '/docker/always-up-to-date/docker/13AC.md',
            '/docker/always-up-to-date/docker/13AD.md',
            '/docker/always-up-to-date/docker/13AE.md',
            '/docker/always-up-to-date/docker/13AF.md',
            '/docker/always-up-to-date/docker/13AG.md',
            '/docker/always-up-to-date/docker/13AH.md',
            '/docker/always-up-to-date/docker/13AI.md',
            '/docker/always-up-to-date/docker/13AJ.md',
            '/docker/always-up-to-date/docker/13AK.md',
          ]
        },
      ],
    }, {
      text: '데엔잘하고싶은데엔 - Udemy 강의정리',
      collapsible: true,
      icon: 'fa-brands fa-docker',
      children: [
        '/docker/pearlluck/README.md',
      ]
    }
  ], '/k8s/': [
    {
      text: 'Kubernetes',
      icon: 'iconfont icon-k8s',
      children: [ '/k8s/README.md' ]
    }, {
      text: '언제나 최신 Kubernetes',
      collapsible: true,
      icon: 'iconfont icon-k8s',
      children: [
        '/k8s/always-up-to-date-kubernetes/README.md',
        '/k8s/always-up-to-date-kubernetes/01.md',
        {
          text: '02. Minikube 설치하기',
          collapsible: true,
          children: [
            '/k8s/always-up-to-date-kubernetes/02.md',
            '/k8s/always-up-to-date-kubernetes/02A.md',
            '/k8s/always-up-to-date-kubernetes/02B.md',
            '/k8s/always-up-to-date-kubernetes/02C.md',
          ]
        }, {
          text: '03. Nginx 웹서버 실행하기',
          collapsible: true,
          children: [
            '/k8s/always-up-to-date-kubernetes/03.md',
            '/k8s/always-up-to-date-kubernetes/03A.md',
            '/k8s/always-up-to-date-kubernetes/03B.md',
          ]
        }, {
          text: '04. Nginx YAML 설정 파일 작성하기',
          collapsible: true,
          children: [
            '/k8s/always-up-to-date-kubernetes/04.md',
            '/k8s/always-up-to-date-kubernetes/04A.md',
            '/k8s/always-up-to-date-kubernetes/04B.md',
            '/k8s/always-up-to-date-kubernetes/04C.md',
          ]
        }, {
          text: '05. Spring Boot와 MySQL 실행하기',
          collapsible: true,
          children: [
            '/k8s/always-up-to-date-kubernetes/05.md',
            '/k8s/always-up-to-date-kubernetes/05A.md',
            '/k8s/always-up-to-date-kubernetes/05B.md',
            '/k8s/always-up-to-date-kubernetes/05C.md',
            '/k8s/always-up-to-date-kubernetes/05D.md',
          ]
        }, {
          text: '06. 로컬에서 Kubernetes 클러스터 구축하기',
          collapsible: true,
          children: [
            '/k8s/always-up-to-date-kubernetes/06.md',
            '/k8s/always-up-to-date-kubernetes/06A.md',
            '/k8s/always-up-to-date-kubernetes/06B.md',
            '/k8s/always-up-to-date-kubernetes/06C.md',
            '/k8s/always-up-to-date-kubernetes/06D.md',
          ]
        }, {
          text: '07. AWS에서 EC2로 Kubernetes 클러스터 구축하기',
          collapsible: true,
          children: [
            '/k8s/always-up-to-date-kubernetes/07.md',
            '/k8s/always-up-to-date-kubernetes/07A.md',
            '/k8s/always-up-to-date-kubernetes/07B.md',
            '/k8s/always-up-to-date-kubernetes/07C.md',
          ]
        }, {
          text: '08. Helm으로 패키지 설치하기',
          collapsible: true,
          children: [
            '/k8s/always-up-to-date-kubernetes/08.md',
            '/k8s/always-up-to-date-kubernetes/08A.md',
            '/k8s/always-up-to-date-kubernetes/08B.md',
          ]
        }, 
      ]
    }, {
      text: 'devkuma - Kubernetes',
      collapsible: true,
      icon: 'iconfont icon-k8s',
      children: [
        '/k8s/devkuma/README.md',
        '/k8s/devkuma/overview.md',
        '/k8s/devkuma/architecture.md',
        '/k8s/devkuma/environment.md',
        '/k8s/devkuma/minikube.md',
        '/k8s/devkuma/kubectl.md',
        '/k8s/devkuma/node.md',
        '/k8s/devkuma/pods.md',
        '/k8s/devkuma/pod-service-expose.md',
        '/k8s/devkuma/pod-ingress.md',
        '/k8s/devkuma/pod-replica.md',
        '/k8s/devkuma/rolling-update-roll-back.md',
        '/k8s/devkuma/namespace.md',
        '/k8s/devkuma/yaml-template-api.md',
        '/k8s/devkuma/storage.md',
        '/k8s/devkuma/manifest.md',
      ]
    }, {
      text: 'devkuma - Helm',
      collapsible: true,
      icon: 'iconfont icon-helm',
      children: [
        '/k8s/devkuma-helm/README.md',
        '/k8s/devkuma-helm/overview.md',
        '/k8s/devkuma-helm/what-is-helm.md',
        '/k8s/devkuma-helm/chart.md',
        '/k8s/devkuma-helm/install.md',
        '/k8s/devkuma-helm/uses.md',
      ]
    }
  ], '/aws/': [
    {
      text: 'AWS',
      icon: 'fa-brands fa-aws',
      children: [ '/aws/README.md' ]
    }, {
      text: '아마존 웹 서비스를 다루는 기술',
      collapsible: true,
      icon: 'fa-brands fa-aws',
      children: [
        '/aws/art-of-aws/README.md',
        {
          text: '01. 왜 AWS인가',
          collapsible: true,
          children: [
            '/aws/art-of-aws/01.md',
            '/aws/art-of-aws/01A.md',
            '/aws/art-of-aws/01B.md',
            '/aws/art-of-aws/01C.md',
            '/aws/art-of-aws/01D.md',
          ]
        }, {
          text: '02. AWS 기본 개념 살펴보기',
          collapsible: true,
          children: [
            '/aws/art-of-aws/02.md',
            '/aws/art-of-aws/02A.md',
            '/aws/art-of-aws/02B.md',
            '/aws/art-of-aws/02C.md',
          ]
        },  
        '/aws/art-of-aws/03.md',
        {
          text: "04. 가상 서버를 제공하는 EC2",
          collapsible: true,
          children: [
            '/aws/art-of-aws/04.md',
            '/aws/art-of-aws/04A.md',
            '/aws/art-of-aws/04B.md',
            '/aws/art-of-aws/04C.md',
            '/aws/art-of-aws/04D.md',
            '/aws/art-of-aws/04E.md',
            '/aws/art-of-aws/04F.md',
            '/aws/art-of-aws/04G.md',
            '/aws/art-of-aws/04H.md',
          ]
        },        
        '/aws/art-of-aws/05.md',
        {
          text: '06. 고정 IP를 제공하는 Elastic IP',
          collapsible: true,
          children: [
            '/aws/art-of-aws/06.md',
            '/aws/art-of-aws/06A.md',
            '/aws/art-of-aws/06B.md',
          ]
        }, {
          text: '07. EC2 인스턴스 접속을 위한 키 쌍',
          collapsible: true,
          children: [
            '/aws/art-of-aws/07.md',
            '/aws/art-of-aws/07A.md',
            '/aws/art-of-aws/07B.md',
            '/aws/art-of-aws/07C.md',
          ]
        }, {
          text: '08. AMI',
          collapsible: true,
          children: [
            '/aws/art-of-aws/08.md',
            '/aws/art-of-aws/08A.md',
            '/aws/art-of-aws/08B.md',
            '/aws/art-of-aws/08C.md',
            '/aws/art-of-aws/08D.md',
          ]
        },
        '/aws/art-of-aws/09.md',
        {
          text: '10. AWS 리소스의 상태를 모니터링하는 CloudWatch',
          collapsible: true,
          children: [
            '/aws/art-of-aws/10.md',
            '/aws/art-of-aws/10A.md',
            '/aws/art-of-aws/10B.md',            
          ]
        }, {
          text: '11. HTTP 프로토콜과 연동되는 스토리지 S3',
          collapsible: true,
          children: [
            '/aws/art-of-aws/11.md',
            '/aws/art-of-aws/11A.md',
            '/aws/art-of-aws/11B.md',            
            '/aws/art-of-aws/11C.md',            
          ]
        }, {
          text: '12. 전 세계에 콘텐츠를 배포하는 CDN 서비스인 CloudFront',
          collapsible: true,
          children: [
            '/aws/art-of-aws/12.md',
            '/aws/art-of-aws/12A.md',
            '/aws/art-of-aws/12B.md',
            '/aws/art-of-aws/12C.md',
            '/aws/art-of-aws/12D.md',
            '/aws/art-of-aws/12E.md',
          ]
        }, {
          text: '13. 확장 가능한 관계형 데이터베이스를 제공하는 RDS',
          collapsible: true,
          children: [
            '/aws/art-of-aws/13.md',
            '/aws/art-of-aws/13A.md',
            '/aws/art-of-aws/13B.md',
            '/aws/art-of-aws/13C.md',
            '/aws/art-of-aws/13D.md',
            '/aws/art-of-aws/13E.md',
            '/aws/art-of-aws/13F.md',
            '/aws/art-of-aws/13G.md',
            '/aws/art-of-aws/13H.md',
            '/aws/art-of-aws/13I.md',
            '/aws/art-of-aws/13J.md',
            '/aws/art-of-aws/13K.md',
          ]
        }, {
          text: '14. 확장 가능한 NoSQL 분산 데이터베이스를 제공하는 DynamoDB',
          collapsible: true,
          children: [
            '/aws/art-of-aws/14.md',
            '/aws/art-of-aws/14A.md',
            '/aws/art-of-aws/14B.md',
            '/aws/art-of-aws/14C.md',
            '/aws/art-of-aws/14D.md',
            '/aws/art-of-aws/14E.md',
            '/aws/art-of-aws/14F.md',
          ]
        }, {
          text: '15. 확장 가능한 분산 인 메모리 캐시를 제공하는 ElastiCache',
          collapsible: true,
          children: [
            '/aws/art-of-aws/15.md',
            '/aws/art-of-aws/15A.md',
            '/aws/art-of-aws/15B.md',
            '/aws/art-of-aws/15C.md',
            '/aws/art-of-aws/15D.md',
            '/aws/art-of-aws/15E.md',
            '/aws/art-of-aws/15F.md',
            '/aws/art-of-aws/15G.md',
            '/aws/art-of-aws/15H.md',
            '/aws/art-of-aws/15I.md',
          ]
        }, {
          text: '16. 사용자와 그룹을 생성하여 접근제어 및 권한관리를 제공하는 IAM',
          collapsible: true,
          children: [
            '/aws/art-of-aws/16.md',
            '/aws/art-of-aws/16A.md',
            '/aws/art-of-aws/16B.md',
            '/aws/art-of-aws/16C.md',
            '/aws/art-of-aws/16D.md',
            '/aws/art-of-aws/16E.md',            
          ]
        }, {
          text: '17. AWS 리소스와 연동 가능한 DNS 서비스 Route 53',
          collapsible: true,
          children: [
            '/aws/art-of-aws/17.md',
            '/aws/art-of-aws/17A.md',
            '/aws/art-of-aws/17B.md',
            '/aws/art-of-aws/17C.md',
            '/aws/art-of-aws/17D.md',
            '/aws/art-of-aws/17E.md',
            '/aws/art-of-aws/17F.md',
            '/aws/art-of-aws/17G.md',
          ]
        }, {
          text: '18. 부하 분산과 고가용성을 제공하는 ELB',
          collapsible: true,
          children: [
            '/aws/art-of-aws/18.md',
            '/aws/art-of-aws/18A.md',
            '/aws/art-of-aws/18B.md',
            '/aws/art-of-aws/18C.md',
          ]
        }, {
          text: '19. 자동으로 EC2 인스턴스를 생성하여 서비스를 확장하는 Auto Scaling',
          collapsible: true,
          children: [
            '/aws/art-of-aws/19.md',
            '/aws/art-of-aws/19A.md',
            '/aws/art-of-aws/19B.md',
          ]
        }, {
          text: '20. 가상 네트워크를 제공하는 VPC',
          collapsible: true,
          children: [
            '/aws/art-of-aws/20.md',
            '/aws/art-of-aws/20A.md',
            '/aws/art-of-aws/20B.md',
            '/aws/art-of-aws/20C.md',
            '/aws/art-of-aws/20D.md',
          ]
        }, {
          text: '21. 데이터 보관 및 백업을 위한 매우 저렴한 스토리지 서비스 Glacier',
          collapsible: true,
          children: [
            '/aws/art-of-aws/21.md',
            '/aws/art-of-aws/21A.md',
            '/aws/art-of-aws/21B.md',
            '/aws/art-of-aws/21C.md',
          ]
        }, {
          text: '22. 서버 구성을 자동화하는 CloudFormation',
          collapsible: true,
          children: [
            '/aws/art-of-aws/22.md',
            '/aws/art-of-aws/22A.md',
            '/aws/art-of-aws/22B.md',
            '/aws/art-of-aws/22C.md',
            '/aws/art-of-aws/22D.md',
            '/aws/art-of-aws/22E.md',
          ]
        }, {
          text: '23. 간편하게 사용하는 애플리케이션 플랫폼 서비스 Elastic Beanstalk',
          collapsible: true,
          children: [
            '/aws/art-of-aws/23.md',
            '/aws/art-of-aws/23A.md',
            '/aws/art-of-aws/23B.md',
            '/aws/art-of-aws/23C.md',
            '/aws/art-of-aws/23D.md',
          ]
        }, {
          text: '24. 애플리케이션 구성과 배포를 자동화하는 OpsWorks',
          collapsible: true,
          children: [
            '/aws/art-of-aws/24.md',
            '/aws/art-of-aws/24A.md',
            '/aws/art-of-aws/24B.md',
            '/aws/art-of-aws/24C.md',
            '/aws/art-of-aws/24D.md',
            '/aws/art-of-aws/24E.md',
            '/aws/art-of-aws/24F.md',
          ]
        }, {
          text: '25. 검색 서비스를 제공하는 CloudSearch',
          collapsible: true,
          children: [
            '/aws/art-of-aws/25.md',
            '/aws/art-of-aws/25A.md',
            '/aws/art-of-aws/25B.md',
            '/aws/art-of-aws/25C.md',
            '/aws/art-of-aws/25D.md',
            '/aws/art-of-aws/25E.md',
          ]
        }, {
          text: '26. 푸시 알림 서비스 SNS',
          collapsible: true,
          children: [
            '/aws/art-of-aws/26.md',
            '/aws/art-of-aws/26A.md',
            '/aws/art-of-aws/26B.md',
            '/aws/art-of-aws/26C.md',
            '/aws/art-of-aws/26D.md',
          ]
        }, {
          text: '27. 이메일 전송 서비스 SES',
          collapsible: true,
          children: [
            '/aws/art-of-aws/27.md',
            '/aws/art-of-aws/27A.md',
            '/aws/art-of-aws/27B.md',
            '/aws/art-of-aws/27C.md',
            '/aws/art-of-aws/27D.md',
            '/aws/art-of-aws/27E.md',
          ]
        }, {
          text: '28. 메시지 큐를 제공하는 SQS',
          collapsible: true,
          children: [
            '/aws/art-of-aws/28.md',
            '/aws/art-of-aws/28A.md',
            '/aws/art-of-aws/28B.md',
            '/aws/art-of-aws/28C.md',
          ]
        }, {
          text: '29. 동영상 인코딩 서비스 Elastic Transcoder',
          collapsible: true,
          children: [
            '/aws/art-of-aws/29.md',
            '/aws/art-of-aws/29A.md',
          ]
        }, {
          text: '30. AWS API, CLI 활용하기',
          collapsible: true,
          children: [
            '/aws/art-of-aws/30.md',
            '/aws/art-of-aws/30A.md',
            '/aws/art-of-aws/30B.md',
            '/aws/art-of-aws/30C.md',
            '/aws/art-of-aws/30D.md',
            '/aws/art-of-aws/30E.md',
            '/aws/art-of-aws/30F.md',
            '/aws/art-of-aws/30G.md',
            '/aws/art-of-aws/30H.md',
            '/aws/art-of-aws/30I.md',
            '/aws/art-of-aws/30J.md',
            '/aws/art-of-aws/30K.md',
            '/aws/art-of-aws/30L.md',
            '/aws/art-of-aws/30M.md',
          ]
        }, {
          text: '31. 글로벌 사진 사이트 구축하기',
          collapsible: true,
          children: [
            '/aws/art-of-aws/31.md',
            '/aws/art-of-aws/31A.md',
            '/aws/art-of-aws/31B.md',
            '/aws/art-of-aws/31C.md',
            '/aws/art-of-aws/31D.md',
            '/aws/art-of-aws/31E.md',
            '/aws/art-of-aws/31F.md',
            '/aws/art-of-aws/31G.md',
            '/aws/art-of-aws/31H.md',
            '/aws/art-of-aws/31I.md',
            '/aws/art-of-aws/31J.md',
            '/aws/art-of-aws/31K.md',
            '/aws/art-of-aws/31L.md',
          ]
        }, {
          text: '32. 글로벌 사진 사이트 구축하기',
          collapsible: true,
          children: [
            '/aws/art-of-aws/32.md',
            '/aws/art-of-aws/32A.md',
            '/aws/art-of-aws/32B.md',
            '/aws/art-of-aws/32C.md',
            '/aws/art-of-aws/32D.md',
            '/aws/art-of-aws/32E.md',
            '/aws/art-of-aws/32F.md',
            '/aws/art-of-aws/32G.md',
            '/aws/art-of-aws/32H.md',
            '/aws/art-of-aws/32I.md',
            '/aws/art-of-aws/32J.md',
            '/aws/art-of-aws/32K.md',
          ]
        }, {
          text: '33. 자동 확장 가능한 모바일 게임 서버 구축하기',
          collapsible: true,
          children: [
            '/aws/art-of-aws/33.md',
            '/aws/art-of-aws/33A.md',
            '/aws/art-of-aws/33B.md',
            '/aws/art-of-aws/33C.md',
            '/aws/art-of-aws/33D.md',
            '/aws/art-of-aws/33E.md',
            '/aws/art-of-aws/33F.md',
            '/aws/art-of-aws/33G.md',
            '/aws/art-of-aws/33H.md',
            '/aws/art-of-aws/33I.md',
            '/aws/art-of-aws/33J.md',
            '/aws/art-of-aws/33K.md',
          ]
        }, {
          text: '34. 부록',
          collapsible: true,
          children: [
            '/aws/art-of-aws/34.md',
            '/aws/art-of-aws/34A.md',
            '/aws/art-of-aws/34B.md',
            '/aws/art-of-aws/34C.md',
            '/aws/art-of-aws/34D.md',
            '/aws/art-of-aws/34E.md',
            '/aws/art-of-aws/34F.md',
            '/aws/art-of-aws/34G.md',
            '/aws/art-of-aws/34H.md',
          ]
        },
      ]
    }
  ], '/devops/': [
    {
      text: 'DevOps',
      icon: 'fas fa-network-wired',
      children: [ '/devops/README.md' ]
    }, {
      text: 'Red Hat Container Tools',
      collapsible: true,
      icon: 'fa-brands fa-redhat',
      children: [
        '/devops/red-hat-container-tools/README.md',
        '/devops/red-hat-container-tools/01.md',
        '/devops/red-hat-container-tools/02.md',
        '/devops/red-hat-container-tools/03.md',
        '/devops/red-hat-container-tools/04.md',
        '/devops/red-hat-container-tools/05.md',
        '/devops/red-hat-container-tools/06.md',
        '/devops/red-hat-container-tools/07.md',
        '/devops/red-hat-container-tools/08.md'
      ]
    }, {
      text: 'Containerize Your Application With Buildah And Podman',
      collapsible: true,
      icon: 'fa-brands fa-redhat',
      children: [
        '/devops/red-hat-containerize-your-application-w-buildah-and-podman/README.md',
        '/devops/red-hat-containerize-your-application-w-buildah-and-podman/01.md',
        '/devops/red-hat-containerize-your-application-w-buildah-and-podman/02.md',
        '/devops/red-hat-containerize-your-application-w-buildah-and-podman/03.md'
      ]
    }, {
      text: 'freecodecamp.org - DevOps with GitLab CI',
      collapsible: true,
      icon: 'fa-brands fa-gitlab',
      children: [
        '/devops/freecodecamp-gitlab-ci/README.md',
        '/devops/freecodecamp-gitlab-ci/1.md',
        '/devops/freecodecamp-gitlab-ci/2.md',
        '/devops/freecodecamp-gitlab-ci/3.md',
        '/devops/freecodecamp-gitlab-ci/4.md',
        '/devops/freecodecamp-gitlab-ci/5.md',
      ]
    }, {
      text: 'Linux Journey',
      collapsible: true,
      icon: 'fa-brands fa-linux',
      children: [
        '/devops/linux-journey/README.md',
        {
          text: 'Grasshopper',
          collapsible: true,
          children: [
            '/devops/linux-journey/01-grasshopper/01a-getting-started.md',
            '/devops/linux-journey/01-grasshopper/01b-command-line.md',
            '/devops/linux-journey/01-grasshopper/01c-text-fu.md',
            '/devops/linux-journey/01-grasshopper/01d-advanced-text-fu.md',
            '/devops/linux-journey/01-grasshopper/01e-user-management.md',
            '/devops/linux-journey/01-grasshopper/01f-permissions.md',
            '/devops/linux-journey/01-grasshopper/01g-processes.md',
            '/devops/linux-journey/01-grasshopper/01h-packages.md',
          ]
        }, {
          text: 'Journeyman',
          collapsible: true,
          children: [
            '/devops/linux-journey/02-journeyman/02a-devices.md',
            '/devops/linux-journey/02-journeyman/02b-the-filesystem.md',
            '/devops/linux-journey/02-journeyman/02c-boot-the-system.md',
            '/devops/linux-journey/02-journeyman/02d-kernel.md',
            '/devops/linux-journey/02-journeyman/02e-init.md',
            '/devops/linux-journey/02-journeyman/02f-process-utilization.md',
            '/devops/linux-journey/02-journeyman/02g-logging.md',
          ]
        }, {
          text: 'Networking Nomad',
          collapsible: true,
          children: [
            '/devops/linux-journey/03-networking-nomad/03a-network-sharing.md',
            '/devops/linux-journey/03-networking-nomad/03b-network-basics.md',
            '/devops/linux-journey/03-networking-nomad/03c-subnetting.md',
            '/devops/linux-journey/03-networking-nomad/03d-routing.md',
            '/devops/linux-journey/03-networking-nomad/03e-network-config.md',
            '/devops/linux-journey/03-networking-nomad/03f-troubleshooting.md',
            '/devops/linux-journey/03-networking-nomad/03g-dns.md'
          ]
        }
      ]
    }, {
      text: 'CYL2002 - Digital Forensics Lab',
      collapsible: true,
      icon: 'fas fa-shield-halved',
      children: [
        '/devops/digital-forensics-lab/README.md',
        '/devops/digital-forensics-lab/01.md',
        '/devops/digital-forensics-lab/02.md',
        '/devops/digital-forensics-lab/03.md',
        '/devops/digital-forensics-lab/04.md',
        '/devops/digital-forensics-lab/05.md',
        '/devops/digital-forensics-lab/06.md',
        '/devops/digital-forensics-lab/07.md',
        '/devops/digital-forensics-lab/08.md',
        '/devops/digital-forensics-lab/09.md',
        '/devops/digital-forensics-lab/10.md',
      ]
    }
  ], '/misc/': [
    {
      text: 'Misc.',
      icon: 'fas fa-object-group',
      children: [ '/misc/README.md' ]
    }, {
      text: 'Microsoft - Generative AI for Beginners',
      collapsible: true,
      icon: 'fas fa-brain',
      children: [
        '/misc/llm-generative-ai-for-beginners/README.md',
        '/misc/llm-generative-ai-for-beginners/00-course-setup.md',
        '/misc/llm-generative-ai-for-beginners/01-introduction-to-genai.md',
        '/misc/llm-generative-ai-for-beginners/02-exploring-and-comparing-different-llms.md',
      ]
    }, {
      text: "DB Server 성능 향상 분석 및 튜닝 전문가 향상과정",
      collapsible: true,
      icon: 'fas fa-database',
      children: [
        '/misc/oracle-sql-db-tuning/README.md',
        '/misc/oracle-sql-db-tuning/01a.md',
        '/misc/oracle-sql-db-tuning/01b.md',
        '/misc/oracle-sql-db-tuning/01c.md',
        '/misc/oracle-sql-db-tuning/01d.md',
        '/misc/oracle-sql-db-tuning/02a.md',
        '/misc/oracle-sql-db-tuning/03a.md',
        '/misc/oracle-sql-db-tuning/03b.md',
        '/misc/oracle-sql-db-tuning/03c.md',
      ],
    }
  ]
});