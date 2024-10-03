import { hopeTheme } from "vuepress-theme-hope";

import {
  // head,
  navbarEn,
  sidebarEn,
} from './configs/index.js'

const imgLogoPath = '/assets/icon/favicon.svg'

export default hopeTheme({
  fullscreen: true,
  logo: imgLogoPath,
  repo: 'chanhi2000/crashcourse',
  repoLabel: 'Github',
  repoDisplay: true,
  lastUpdated: true,
  footer: 'MIT Licensed | Copyright © 2022-present <a href="https://github.com/chanhi2000">Chan Hee Lee</a>',
  displayFooter: true,
  hostname: "https://chanhi2000.github.io/crashcourse/",
  iconAssets: "fontawesome-with-brands",
  docsDir: "src",
  navbar: navbarEn,
  sidebar: sidebarEn,
  encrypt: {
    config: {
    },
  },
  breadcrumbIcon: true,
  blog: {
    intro: 'https://chanhi2000.github.io',
    description: "프로그램이 작성되는 환경부터 배포되는 환경까지 적용하는 개발자 이찬희 입니다.",
    avatar: 'https://avatars.githubusercontent.com/u/6296241?v=4',
    medias: {
      GitHub: "https://github.com/chanhi2000",
      Facebook: "https://facebook.com/spamlove",
      Instagram: "https://instagram.com/chanhi2000",
      Linkedin: "https://linkedin.com/in/chanhi2000",
      Gmail: "chanhi2000@gmail.com"
    }
  },
  metaLocales: {
    editLink: "Edit this page on GitHub",
  },
  plugins: {
    blog: true,
    sitemap: false, // 임시적으로 안됨
    // {
    //   excludePaths: ['/404.html']
    // },
    components: {
      components: [
        "VidStack", "FontIcon", "Badge", "Share", "PDF", "SiteInfo", "VPCard", "VPBanner"
      ],
      componentOptions: {
        fontIcon: {
          assets: [
            "fontawesome", 
            "fontawesome-with-brands", 
            "https://chanhi2000.github.io/iconfont.css",
            "https://chanhi2000.github.io/iconfont-more.css", /* 리소스 통합 필요 */
          ],
        }
      },
      rootComponents: {
      }
    },
    copyright: {
      author: 'Chan Hee Lee',
      license: 'MIT Licensed',
    },
    notice: {
      config: [
        /*{
         path: "/",
         title: "Notice Title",
         content: "Notice Content",
         actions: [
          {
             text: "Primary Action",
             link: "https://theme-hope.vuejs.press/",
             type: "primary",
          },
          { text: "Default Action" },
         ],
         fullscreen: true,
      }*/
     ]
    },
    prismjs: {
      themes: {
        light: "material-light",
        dark: "dracula"
      }
    },
    // markdownHint: {
    //   alert: true,
    //   hint: true,
    // },
    // markdownImage: {
    //   figure: true,
    //   lazyload: true,
    //   size: true,
    // },
    // markdownMath: {
    //   type: 'katex', 
    //   copy: false,
    // },
    // markdownTab: {
    //   tabs: true,
    //   codeTabs: true
    // },
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      component: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      footnote: true,
      hint: true,
      include: true,
      imgLazyload: true,
      imgSize: true,
      katex: true,
      kotlinPlayground: true,
      mark: true,
      mermaid: true,
      plantuml: true,
      sandpack: true,
      spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,
      vuePlayground: true,
      // playground: {
      //   presets: ["ts", "vue"],
      // },
    },
    copyCode: {
      locales: {
        "/": {
          // Override copy button label text
          copy: "Copy Codes from code block",
        }
      }
    },
    nprogress: true,
    git: {
      updatedTime: true,
      createdTime: true,
    },
    search: {
      isSearchable: (page) => page.path !== '/',
    },
  }
})