import * as dotenv from 'dotenv' 
import { defineUserConfig } from 'vuepress'
import { hopeTheme } from 'vuepress-theme-hope'
import { viteBundler } from '@vuepress/bundler-vite'
// import { webpackBundler } from '@vuepress/bundler-webpack'
import { getDirname, path } from 'vuepress/utils'

/* plugins V2 */
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics';
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom';

/* plugins 3rd-party */
import MdDefinePlugin from 'vuepress-plugin-markdown-define2';
import { usePagesPlugin } from 'vuepress-plugin-use-pages'

import {
  // head,
  navbarEn,
  sidebarEn,
} from './configs/index.js'

const __dirname = getDirname(import.meta.url)
const { description, version } = require('../../package.json')
dotenv.config()
const isProd = process.env.NODE_ENV === 'production'
const CONSTS = {
  __VERSION__: version
}
const imgLogoPath = '/images/ico-school.svg'
// const imgLogoPath = 'https://avatars.githubusercontent.com/u/6296241?v=4'

export default defineUserConfig({
  define: {
     __BLOG_VERSION__: version, // reveal.js에서 같은 변수를 사용함으로 이름이 겹치지 않도록 정의
    __YOUTUBE_API_KEY__: process.env.YOUTUBE_API_KEY,
    __IS_DEBUG__: process.env.IS_DEBUG ?? false,
  },
  title: 'crashcourse',
  description: description,
  head: [['link', { rel: 'icon', href: imgLogoPath }]],
  base: '/crashcourse/',
  locales: {
    '/': {
      lang: "en-US"      
    }
  },
  bundler: viteBundler({}),
  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  theme: hopeTheme({
    fullscreen: true,
    logo: imgLogoPath,
    docsDir: '',
    lastUpdated: true,
    footer: 'MIT Licensed | Copyright © 2022-present <a href="https://github.com/chanhi2000">Chan Hee Lee</a>',
    displayFooter: true,
    // footerHtml: true,
    locales: {
      "/": {
        navbar: navbarEn,
        sidebar: sidebarEn,
      },
    },
    breadcrumbIcon: true,
    plugins: {
      components: {
        components: [
          "VidStack", "FontIcon", "Badge", "Share", "PDF", "SiteInfo", "VPCard", "VPBanner"
        ],
        componentOptions: {
          fontIcon: {
            assets: ["iconfont", "fontawesome", "fontawesome-with-brands"],
          }
        },
        rootComponents: {
          // backToTop: false,
        }
      },
      copyright: {
        author: 'Chan Hee Lee',
        license: 'MIT Licensed',
      },
      mdEnhance: {
        mark: true,
        tabs: true,
        demo: true,
        hint: true,
        tasklist: true,
        codetabs: true,
        component: true,
        chart: true,
        echarts: true,
        mermaid: true,
        katex: true,
        footnote: true,
        attrs: true,
        figure:true,
        flowchart: true,
        imgLazyload: true,
        imgSize: true,
        revealJs: {
          plugins: ["highlight", "math", "search", "notes", "zoom"],
        },
        sub: true,
        sup: true,
        vPre: true,
        vuePlayground: true,
        kotlinPlayground: true,
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
      },
      search: {
        isSearchable: (page) => page.path !== '/',
      },
      searchPro: {
        indexContent: true,
      },
      prismjs: {
        light: "material-light",
        dark: "dracula"
      }, 
    }
  }),
  clientConfigFile: path.resolve(__dirname, './client.ts'),
  markdown: {
    code: {
      lineNumbers: true,
    },
  },
  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
    googleAnalyticsPlugin({
      id: 'G-XFRP81YMEP',
      debug: true
    }),
    MdDefinePlugin(CONSTS),
    usePagesPlugin({
      startsWith: '/'
    }),
  ],
})