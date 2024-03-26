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
        '/cli/bash-dev/02.md',
        '/cli/bash-dev/03.md',
        '/cli/bash-dev/04.md',
      ]
    }
  ], '/swift/' : [
    {
      text: 'Swift',
      icon: 'fa-brands fa-swift',
      children: [ '/swift/README.md' ]
    }, {
      text: 'Learn essential Swift in one hour',
      collapsible: true,
      icon: 'fa-brands fa-swift',
      children: [
        '/swift/learn-essential-swift-in-one-hour/README.md',
      ]
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
      text: 'SwiftUI by Example',
      collapsible: true,
      icon: 'fa-brands fa-swift',
      children: [
        '/swift/swiftui-by-example/README.md',
        {
          text: 'Introduction',
          collapsible: true,
          children: [
            '/swift/swiftui-by-example/00-introduction/what-is-swiftui.md',
            '/swift/swiftui-by-example/00-introduction/swiftui-vs-interface-builder-and-storyboards.md',
            '/swift/swiftui-by-example/00-introduction/frequently-asked-questions-about-swiftui.md',
            '/swift/swiftui-by-example/00-introduction/answering-the-big-question-should-you-learn-swiftui-uikit-or-both.md',
            '/swift/swiftui-by-example/00-introduction/how-to-follow-this-quick-start-guide.md',
            '/swift/swiftui-by-example/00-introduction/migrating-from-uikit-to-swiftui.md',
            '/swift/swiftui-by-example/00-introduction/whats-in-the-basic-template.md',
            '/swift/swiftui-by-example/00-introduction/dedication.md',
          ]
        }, {
          text: 'Building a complete project',
          collapsible: true,
          children: [
            '/swift/swiftui-by-example/01-building-a-complete-project/swiftui-tutorial-building-a-complete-project.md',
            '/swift/swiftui-by-example/01-building-a-complete-project/building-a-menu-using-list.md',
            '/swift/swiftui-by-example/01-building-a-complete-project/composing-views-to-create-a-list-row.md',
            '/swift/swiftui-by-example/01-building-a-complete-project/polishing-designs-with-fonts-and-colors.md',
            '/swift/swiftui-by-example/01-building-a-complete-project/displaying-a-detail-screen-with-navigationlink.md',
            '/swift/swiftui-by-example/01-building-a-complete-project/observable-objects-environment-objects-and-published.md',
            '/swift/swiftui-by-example/01-building-a-complete-project/adding-items-to-an-order-with-environmentobject.md',
            '/swift/swiftui-by-example/01-building-a-complete-project/adding-tabview-and-tabitem.md',
            '/swift/swiftui-by-example/01-building-a-complete-project/bindings-and-forms.md',
            '/swift/swiftui-by-example/01-building-a-complete-project/two-way-bindings-in-swiftui.md',
            '/swift/swiftui-by-example/01-building-a-complete-project/formatting-interpolated-strings-in-swiftui.md',
            '/swift/swiftui-by-example/01-building-a-complete-project/presenting-an-alert.md',
            '/swift/swiftui-by-example/01-building-a-complete-project/adding-swipe-to-delete-and-editbutton.md',
            '/swift/swiftui-by-example/01-building-a-complete-project/wrap-up-our-swiftui-project-is-complete.md'
          ]
        }, {
          text: 'Working with static text',
          collapsible: true,
          children: [
            '/swift/swiftui-by-example/02-working-with-static-text/how-to-create-static-labels-with-a-text-view.md',
            '/swift/swiftui-by-example/02-working-with-static-text/how-to-style-text-views-with-fonts-colors-line-spacing-and-more.md',
            '/swift/swiftui-by-example/02-working-with-static-text/how-to-add-advanced-text-styling-using-attributedstring.md',
            '/swift/swiftui-by-example/02-working-with-static-text/how-to-adjust-text-alignment-using-multilinetextalignment.md',
            '/swift/swiftui-by-example/02-working-with-static-text/how-to-format-text-inside-text-views.md',
            '/swift/swiftui-by-example/02-working-with-static-text/how-to-add-spacing-between-letters-in-text.md',
            '/swift/swiftui-by-example/02-working-with-static-text/how-to-format-dates-inside-text-views.md',
            '/swift/swiftui-by-example/02-working-with-static-text/how-to-make-textfield-uppercase-or-lowercase-using-textcase.md',
            '/swift/swiftui-by-example/02-working-with-static-text/how-to-show-text-and-an-icon-side-by-side-using-label.md',
            '/swift/swiftui-by-example/02-working-with-static-text/how-to-mark-content-as-a-placeholder-using-redacted.md',
            '/swift/swiftui-by-example/02-working-with-static-text/how-to-mark-content-as-private-using-privacysensitive.md',
            '/swift/swiftui-by-example/02-working-with-static-text/how-to-render-markdown-content-in-text.md',
            '/swift/swiftui-by-example/02-working-with-static-text/how-to-customize-the-way-links-are-opened.md',
            '/swift/swiftui-by-example/02-working-with-static-text/how-to-let-users-select-text.md',
          ]
        }, {
          text: 'Images, shapes, and media',
          collapsible: true,
          children: [
            '/swift/swiftui-by-example/03-images-shapes-and-media/how-to-draw-images-using-image-views.md',
            '/swift/swiftui-by-example/03-images-shapes-and-media/how-to-adjust-the-way-an-image-is-fitted-to-its-space.md',
            '/swift/swiftui-by-example/03-images-shapes-and-media/how-to-tile-an-image.md',
            '/swift/swiftui-by-example/03-images-shapes-and-media/how-to-render-images-using-sf-symbols.md',
            '/swift/swiftui-by-example/03-images-shapes-and-media/how-to-render-a-gradient.md',
            '/swift/swiftui-by-example/03-images-shapes-and-media/how-to-use-images-and-other-views-as-a-backgrounds.md',
            '/swift/swiftui-by-example/03-images-shapes-and-media/how-to-display-solid-shapes.md',
            '/swift/swiftui-by-example/03-images-shapes-and-media/how-to-fill-and-stroke-shapes-at-the-same-time.md',
            '/swift/swiftui-by-example/03-images-shapes-and-media/how-to-draw-part-of-a-solid-shape-using-trim.md',
            '/swift/swiftui-by-example/03-images-shapes-and-media/when-should-you-use-containerrelativeshape.md',
            '/swift/swiftui-by-example/03-images-shapes-and-media/how-to-play-movies-with-videoplayer.md',
            '/swift/swiftui-by-example/03-images-shapes-and-media/how-to-integrate-spritekit-using-spriteview.md',
            '/swift/swiftui-by-example/03-images-shapes-and-media/how-to-load-a-remote-image-from-a-url.md',
            '/swift/swiftui-by-example/03-images-shapes-and-media/how-to-get-custom-colors-and-transparency-with-sf-symbols.md',
            '/swift/swiftui-by-example/03-images-shapes-and-media/how-to-dynamically-adjust-the-color-of-an-sf-symbol.md',
            '/swift/swiftui-by-example/03-images-shapes-and-media/how-to-let-users-select-pictures-using-photospicker.md',
            '/swift/swiftui-by-example/03-images-shapes-and-media/how-to-let-users-import-videos-using-photospicker.md',
          ]
        }, {
          text: 'View layout',
          collapsible: true,
          children: [
            '/swift/swiftui-by-example/04-view-layout/how-to-give-a-view-a-custom-frame.md',
            '/swift/swiftui-by-example/04-view-layout/how-to-control-spacing-around-individual-views-using-padding.md',
            '/swift/swiftui-by-example/04-view-layout/how-to-provide-relative-sizes-using-geometryreader.md',
            '/swift/swiftui-by-example/04-view-layout/how-to-place-content-outside-the-safe-area.md',
            '/swift/swiftui-by-example/04-view-layout/how-to-return-different-view-types.md',
            '/swift/swiftui-by-example/04-view-layout/how-to-create-views-in-a-loop-using-foreach.md',
            '/swift/swiftui-by-example/04-view-layout/how-to-control-layout-priority-using-layoutpriority.md',
            '/swift/swiftui-by-example/04-view-layout/how-to-make-two-views-the-same-width-or-height.md',
            '/swift/swiftui-by-example/04-view-layout/how-to-provide-visual-structure-using-foreground-styles.md',
            '/swift/swiftui-by-example/04-view-layout/how-to-inset-the-safe-area-with-custom-content.md',
            '/swift/swiftui-by-example/04-view-layout/how-to-hide-the-home-indicator-and-other-system-ui.md',
            '/swift/swiftui-by-example/04-view-layout/how-to-stop-system-gestures-from-interfering-with-your-own.md',
            '/swift/swiftui-by-example/04-view-layout/how-to-dynamically-change-between-vstack-and-hstack.md',
            '/swift/swiftui-by-example/04-view-layout/how-to-create-a-custom-layout-using-the-layout-protocol.md',
            '/swift/swiftui-by-example/04-view-layout/how-to-create-an-adaptive-layout-with-viewthatfits.md',
          ]
        }, {
          text: 'Stacks, grids, scrollviews',
          collapsible: true,
          children: [
            '/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-create-stacks-using-vstack-and-hstack.md',
            '/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-customize-stack-layouts-with-alignment-and-spacing.md',
            '/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-force-views-to-one-side-inside-a-stack-using-spacer.md',
            '/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-make-a-fixed-size-spacer.md',
            '/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-layer-views-on-top-of-each-other-using-zstack.md',
            '/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-change-the-order-of-view-layering-using-z-index.md',
            '/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-create-different-layouts-using-size-classes.md',
            '/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-automatically-switch-between-hstack-and-vstack-based-on-size-class.md',
            '/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-add-horizontal-and-vertical-scrolling-using-scrollview.md',
            '/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-make-a-scroll-view-move-to-a-location-using-scrollviewreader.md',
            '/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-create-3d-effects-like-cover-flow-using-scrollview-and-geometryreader.md',
            '/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-lazy-load-views-using-lazyvstack-and-lazyhstack.md',
            '/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-position-views-in-a-fixed-grid.md',
            '/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-position-views-in-a-grid-using-lazyvgrid-and-lazyhgrid.md',
            '/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-dismiss-the-keyboard-when-the-user-scrolls.md',
            '/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-hide-the-scroll-indicators-in-scrollview-list-and-more.md',
            '/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-create-multi-column-lists-using-table.md',
          ]          
        }, {
          text: 'User interface controls',
          collapsible: true,
          children: [
            '/swift/swiftui-by-example/06-user-interface-controls/working-with-state.md',
            '/swift/swiftui-by-example/06-user-interface-controls/how-to-create-a-tappable-button.md',
            '/swift/swiftui-by-example/06-user-interface-controls/how-to-disable-the-overlay-color-for-images-inside-button-and-navigationlink.md',
            '/swift/swiftui-by-example/06-user-interface-controls/how-to-get-bordered-buttons-that-stand-out.md',
            '/swift/swiftui-by-example/06-user-interface-controls/how-to-group-views-together-with-controlgroup.md',
            '/swift/swiftui-by-example/06-user-interface-controls/how-to-read-text-from-a-textfield.md',
            '/swift/swiftui-by-example/06-user-interface-controls/how-to-take-action-when-the-user-submits-a-textfield.md',
            '/swift/swiftui-by-example/06-user-interface-controls/how-to-customize-the-submit-button-for-textfield-securefield-and-texteditor.md',
            '/swift/swiftui-by-example/06-user-interface-controls/how-to-add-a-border-to-a-textfield.md',
            '/swift/swiftui-by-example/06-user-interface-controls/how-to-add-a-placeholder-to-a-textfield.md',
            '/swift/swiftui-by-example/06-user-interface-controls/how-to-disable-autocorrect-in-a-textfield.md',
            '/swift/swiftui-by-example/06-user-interface-controls/how-to-dismiss-the-keyboard-for-a-textfield.md',
            '/swift/swiftui-by-example/06-user-interface-controls/how-to-make-a-textfield-or-texteditor-have-default-focus.md',
            '/swift/swiftui-by-example/06-user-interface-controls/how-to-make-a-textfield-expand-vertically-as-the-user-types.md',
            '/swift/swiftui-by-example/06-user-interface-controls/how-to-format-a-textfield-for-numbers.md',
            '/swift/swiftui-by-example/06-user-interface-controls/how-to-create-secure-text-fields-using-securefield.md',
            '/swift/swiftui-by-example/06-user-interface-controls/how-to-create-a-toggle-switch.md',
            '/swift/swiftui-by-example/06-user-interface-controls/how-to-create-a-slider-and-read-values-from-it.md',
            '/swift/swiftui-by-example/06-user-interface-controls/how-to-create-a-picker-and-read-values-from-it.md',
            '/swift/swiftui-by-example/06-user-interface-controls/how-to-create-a-date-picker-and-read-values-from-it.md',
            '/swift/swiftui-by-example/06-user-interface-controls/how-to-create-a-segmented-control-and-read-values-from-it.md',
            '/swift/swiftui-by-example/06-user-interface-controls/how-to-create-a-stepper-and-read-values-from-it.md',
            '/swift/swiftui-by-example/06-user-interface-controls/how-to-create-multi-line-editable-text-with-texteditor.md',
            '/swift/swiftui-by-example/06-user-interface-controls/how-to-let-users-select-a-color-with-colorpicker.md',
            '/swift/swiftui-by-example/06-user-interface-controls/how-to-show-progress-on-a-task-using-progressview.md',
            '/swift/swiftui-by-example/06-user-interface-controls/how-to-show-indeterminate-progress-using-progressview.md',
            '/swift/swiftui-by-example/06-user-interface-controls/how-to-show-a-map-view.md',
            '/swift/swiftui-by-example/06-user-interface-controls/how-to-show-annotations-in-a-map-view.md',
            '/swift/swiftui-by-example/06-user-interface-controls/how-to-open-web-links-in-safari.md',
            '/swift/swiftui-by-example/06-user-interface-controls/how-to-let-the-user-select-multiple-dates.md',
            '/swift/swiftui-by-example/06-user-interface-controls/how-to-hide-the-label-of-a-picker-stepper-toggle-and-more-using-labelshidden.md',
          ]
        }, {
          text: 'Responding to events',
          collapsible: true,
          children: [
            '/swift/swiftui-by-example/07-responding-to-events/how-to-detect-when-your-app-moves-to-the-background-or-foreground-with-scenephase.md',
            '/swift/swiftui-by-example/07-responding-to-events/how-to-respond-to-view-lifecycle-events-onappear-and-ondisappear.md',
            '/swift/swiftui-by-example/07-responding-to-events/how-to-add-keyboard-shortcuts-using-keyboardshortcut.md',
            '/swift/swiftui-by-example/07-responding-to-events/how-to-control-which-view-is-shown-when-your-app-launches.md',
            '/swift/swiftui-by-example/07-responding-to-events/how-to-run-code-when-your-app-launches.md',
            '/swift/swiftui-by-example/07-responding-to-events/how-to-add-an-appdelegate-to-a-swiftui-app.md',
            '/swift/swiftui-by-example/07-responding-to-events/how-to-detect-device-rotation.md',
            '/swift/swiftui-by-example/07-responding-to-events/how-to-add-a-toolbar-to-the-keyboard.md',
            '/swift/swiftui-by-example/07-responding-to-events/how-to-run-an-asynchronous-task-when-a-view-is-shown.md',
            '/swift/swiftui-by-example/07-responding-to-events/how-to-let-the-user-paste-data-into-your-app.md',
            '/swift/swiftui-by-example/07-responding-to-events/how-to-let-users-share-content-using-the-system-share-sheet.md',
            '/swift/swiftui-by-example/07-responding-to-events/how-to-let-users-find-and-replace-text.md',
            '/swift/swiftui-by-example/07-responding-to-events/how-to-support-drag-and-drop-in-swiftui.md',
          ]
        }, {
          text: 'Taps and gestures',
          collapsible: true,
          children: [
            '/swift/swiftui-by-example/08-taps-and-gestures/how-to-add-a-gesture-recognizer-to-a-view.md',
            '/swift/swiftui-by-example/08-taps-and-gestures/how-to-read-tap-and-double-tap-gestures.md',
            '/swift/swiftui-by-example/08-taps-and-gestures/how-to-force-one-gesture-to-recognize-before-another-using-highprioritygesture.md',
            '/swift/swiftui-by-example/08-taps-and-gestures/how-to-make-two-gestures-recognize-at-the-same-time-using-simultaneousgesture.md',
            '/swift/swiftui-by-example/08-taps-and-gestures/how-to-create-gesture-chains-using-sequencedbefore.md',
            '/swift/swiftui-by-example/08-taps-and-gestures/how-to-detect-the-user-hovering-over-a-view.md',
            '/swift/swiftui-by-example/08-taps-and-gestures/how-to-detect-shake-gestures.md',
            '/swift/swiftui-by-example/08-taps-and-gestures/how-to-control-the-tappable-area-of-a-view-using-contentshape.md',
            '/swift/swiftui-by-example/08-taps-and-gestures/how-to-disable-taps-for-a-view-using-allowshittesting.md',
            '/swift/swiftui-by-example/08-taps-and-gestures/how-to-detect-the-location-of-a-tap-inside-a-view.md',
          ]
        }, {
          text: 'Advanced state',
          collapsible: true,
          children: [
            '/swift/swiftui-by-example/09-advanced-state/whats-the-difference-between-observedobject-state-and-environmentobject.md',
            '/swift/swiftui-by-example/09-advanced-state/how-to-use-stateobject-to-create-and-monitor-external-objects.md',
            '/swift/swiftui-by-example/09-advanced-state/how-to-use-observedobject-to-manage-state-from-external-objects.md',
            '/swift/swiftui-by-example/09-advanced-state/how-to-use-environmentobject-to-share-data-between-views.md',
            '/swift/swiftui-by-example/09-advanced-state/how-to-send-state-updates-manually-using-objectwillchange.md',
            '/swift/swiftui-by-example/09-advanced-state/how-to-create-constant-bindings.md',
            '/swift/swiftui-by-example/09-advanced-state/how-to-create-custom-bindings.md',
            '/swift/swiftui-by-example/09-advanced-state/how-to-use-a-timer-with-swiftui.md',
            '/swift/swiftui-by-example/09-advanced-state/how-to-run-some-code-when-state-changes-using-onchange.md',
            '/swift/swiftui-by-example/09-advanced-state/how-to-show-different-images-and-other-views-in-light-or-dark-mode.md',
          ]
        }, 
        /* 
        {
          text: 'Lists',
          collapsible: true,
          children: [
            '/swift/swiftui-by-example/10-lists/',
          ]
        }, {
          text: 'Forms',
          collapsible: true,
          children: [
            '/swift/swiftui-by-example/11-forms/',
          ]
        },  {
          text: 'Containers',
          collapsible: true,
          children: [
            '/swift/swiftui-by-example/12-containers/',
          ]
        },
        */
        '/swift/swiftui-by-example/13-navigation.md',
        '/swift/swiftui-by-example/14-alerts-and-menus.md',
        '/swift/swiftui-by-example/15-presenting-views.md',
        '/swift/swiftui-by-example/16-transforming-views.md',
        '/swift/swiftui-by-example/17-drawing.md',
      ]
    }, {
      text: 'Kodeco - Swift',
      collapsible: true,
      icon: 'fa-brands fa-swift',
      children: [
        '/swift/kodeco/README.md',
        '/swift/kodeco/6398124-swiftui-tutorial-for-ios-creating-charts.md',
        '/swift/kodeco/6334294-my-app-crashed-now-what.md',
        '/swift/kodeco/6587213-alamofire-5-tutorial-for-ios-getting-started.md',        
        '/swift/kodeco/6620276-sqlite-with-swift-tutorial-getting-started.md',
        '/swift/kodeco/6747815-uigesturerecognizer-tutorial-getting-started.md',
        '/swift/kodeco/6827616-ios-accessibility-getting-started.md',
        '/swift/kodeco/6742901-protocol-oriented-programming-tutorial-in-swift-5-1-getting-started.md',
        '/swift/kodeco/7076593-cocoapods-tutorial-for-swift-getting-started.md',
        '/swift/kodeco/7181017-unsafe-swift-using-pointers-and-interacting-with-c.md',
      ]
    }, {
      text: 'OSX 구조를 이해하면서 배우는 Objective-C',
      collapsible: true,
      icon: 'fas fa-landmark',
      children: [
        '/swift/shuokai-objc/README.md',
        '/swift/shuokai-objc/01.md',
        '/swift/shuokai-objc/02.md',
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
      text: 'Kodeco - Android & Kotlin',
      collapsible: true,
      icon: 'fa-brands fa-android',
      children: [
        '/java/kodeco/README.md',
        '/java/kodeco/247-react-native-tutorial-building-android-apps-with-javascript.md',
        '/java/kodeco/249-gradle-tutorial-for-android-getting-started.md',
        '/java/kodeco/254-getting-started-with-android-wear-with-kotlin.md',
        '/java/kodeco/262-dependency-injection-in-android-with-dagger-2-and-kotlin.md',
        '/java/kodeco/272-intermediate-recyclerview-tutorial-with-kotlin.md',
        '/java/kodeco/853-couchbase-tutorial-for-android-getting-started.md',
        '/java/kodeco/523-augmented-reality-in-android-with-google-s-face-api.md',
        '/java/kodeco/324-viewpager-tutorial-getting-started-in-kotlin.md',
        '/java/kodeco/30067669-documenting-kotlin-code-for-android-using-kdoc-and-dokka.md',
        '/java/kodeco/31290959-kotlin-sequences-getting-started.md',
      ]
    }, {
      text: 'Jump to Spring Boot',
      collapsible: true,
      icon: 'fa-brands fa-envira',
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
      icon: 'fa-brands fa-envira',
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
      icon: 'iconfont icon-java',
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
      text: '요즘 IT 블로그 - Java 관련',
      collapsible: true,
      icon: 'fa-brands fa-java',
      children: [
        '/java/yozm/README.md',
        '/java/yozm/2457.md',
        '/java/yozm/2478.md',
        '/java/yozm/2499.md',
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
    }, {
      text: '요즘 IT 블로그 - JavaScript 관련',
      collapsible: true,
      icon: 'fa-brands fa-node-js',
      children: [
        '/js/yozm/README.md',
        '/js/yozm/2466.md',
        '/js/yozm/2467.md',
        '/js/yozm/2479.md',
        '/js/yozm/2483.md',
        '/js/yozm/2493.md',
        '/js/yozm/2504.md',
        '/js/yozm/2505.md',
        '/js/yozm/2511.md',
      ]
    }
  ], '/python/': [
    {
      text: 'Python',
      icon: 'fa-brands fa-python',
      children: [ '/python/README.md' ]
    }, {
      text: 'Finance with Python',
      collapsible: true,
      icon: 'fa-brands fa-python',
      children: [
        '/python/finance-w-python/README.md',
        '/python/finance-w-python/01.md',
        '/python/finance-w-python/02.md',
        '/python/finance-w-python/03.md',
        '/python/finance-w-python/04.md',
        '/python/finance-w-python/05.md',
        '/python/finance-w-python/06.md',
        '/python/finance-w-python/07.md',
        '/python/finance-w-python/08.md',
        '/python/finance-w-python/09.md', 
        '/python/finance-w-python/10.md', 
        '/python/finance-w-python/11.md', 
        '/python/finance-w-python/12.md', 
      ]
    }, {
      text: '사장님 몰래 하는 파이썬 업무자동화 (들키면 일 많아짐)',
      collapsible: true,
      icon: 'fa-brands fa-python',
      children: [
        '/python/rpa-excel/README.md',
        '/python/rpa-excel/01.md',
        '/python/rpa-excel/02a.md',
        '/python/rpa-excel/02b.md',
        '/python/rpa-excel/02c.md',
        '/python/rpa-excel/02d.md',
        '/python/rpa-excel/02e.md',
        '/python/rpa-excel/02f.md',
        '/python/rpa-excel/02g.md',
        '/python/rpa-excel/02h.md',
        '/python/rpa-excel/02i.md',
        '/python/rpa-excel/03.md',
      ]
    },  {
      text: 'OpenCV – Python 고급 기법 프로그래밍',
      collapsible: true,
      icon: 'fa-brands fa-python',
      children: [
        '/python/opencv-advacned/README.md',
        '/python/opencv-advacned/00.md',
        '/python/opencv-advacned/01.md',
        '/python/opencv-advacned/02.md',
      ],
    }
  ], '/rust/': [
    {
      text: 'Rust',
      icon: 'fa-brands fa-rust',
      children: [ '/rust/README.md' ]
    }, {
      text: 'freecodecamp.org - Rust by Practice',
      collapsible: true,
      icon: 'fa-brands fa-rust',
      children: [
        '/rust/freecodecamp-rust-by-practice/README.md',
        '/rust/freecodecamp-rust-by-practice/01-elegant-code-base.md',
        '/rust/freecodecamp-rust-by-practice/02-variables.md',
        '/rust/freecodecamp-rust-by-practice/03-basic-types.md',
        '/rust/freecodecamp-rust-by-practice/04-ownership.md',
        '/rust/freecodecamp-rust-by-practice/05-compound-types.md',
        '/rust/freecodecamp-rust-by-practice/06-flow-contro.md',
        '/rust/freecodecamp-rust-by-practice/07-pattern-match.md',
        '/rust/freecodecamp-rust-by-practice/08-method.md',
        '/rust/freecodecamp-rust-by-practice/09-generics-traits.md',
        '/rust/freecodecamp-rust-by-practice/10-collections.md',
        '/rust/freecodecamp-rust-by-practice/11-type-conversions.md',
        '/rust/freecodecamp-rust-by-practice/12-result-panic.md',
        '/rust/freecodecamp-rust-by-practice/13-crate-module.md',
        '/rust/freecodecamp-rust-by-practice/14-comments-docs.md',
        '/rust/freecodecamp-rust-by-practice/15-formatted-output.md',
        '/rust/freecodecamp-rust-by-practice/16-lifetime.md',
        '/rust/freecodecamp-rust-by-practice/17-functional-programing.md',
        '/rust/freecodecamp-rust-by-practice/18-newtype-sized.md',
        '/rust/freecodecamp-rust-by-practice/19-smart-pointers.md',
        '/rust/freecodecamp-rust-by-practice/20-weak.md',
        '/rust/freecodecamp-rust-by-practice/21-self-referential.md',
        '/rust/freecodecamp-rust-by-practice/22-threads.md',
        '/rust/freecodecamp-rust-by-practice/23-global-variables.md',
        '/rust/freecodecamp-rust-by-practice/24-errors.md',
        '/rust/freecodecamp-rust-by-practice/25-unsafe.md',
        '/rust/freecodecamp-rust-by-practice/26-macro.md',
        '/rust/freecodecamp-rust-by-practice/27-tests.md',
        '/rust/freecodecamp-rust-by-practice/28-async.md',
        '/rust/freecodecamp-rust-by-practice/29-std.md',
        '/rust/freecodecamp-rust-by-practice/30-fight-compiler.md',
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
      text: 'Cpp',
      icon: 'fas fa-dice-two',
      children: [ '/cpp/README.md' ]
    }, {
      text: 'Algorithms for Competitive Programming',
      collapsible: true,
      icon: 'fas fa-dice-two',
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
    }, 
    /*
    {
      text: 'Getting Started with Accelerated Computing in CUDA C/C++',
      collapsible: true,
      icon: 'fas fa-dice-two',
      children: [
        '/cpp/nvidia-dli+s-ac-04/README.md',
      ]
    },  {
      text: 'Scaling CUDA C++ Applications to Multiple Nodes',
      collapsible: true,
      icon: 'fas fa-dice-two',
      children: [
        '/cpp/nvidia-dli+s-ac-07/README.md',
      ]
    }, {
      text: 'GPU Acceleration with the C++ Standard Library',
      collapsible: true,
      icon: 'fas fa-dice-two',
      children: [
        '/cpp/nvidia-dli+s-ac-08/README.md',
      ]
    }, {
      text: 'Scaling GPU-Accelerated Applications with the C++ Standard Library',
      collapsible: true,
      icon: 'fas fa-dice-two',
      children: [
        '/cpp/nvidia-dli+s-ac-09/README.md',
      ]
    }
    */
  ], '/ruby/': [
    {
      text: 'Ruby',
      icon: 'fas fa-gem',
      children: [ '/ruby/README.md' ]
    }, {
      text: 'Jets - Learning Content',
      collapsible: true,
      icon: 'fas fa-gem',
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
      text: '🐑Haskell',
      children: [ '/haskell/README.md' ]

    }, {
      text: '🐑Megaparsec tutorial',
      collapsible: true,
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
      text: '🐑Template Haskell tutorial',
      collapsible: true,
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
  ], '/devops/': [
    {
      text: 'DevOps',
      icon: 'fas fa-cubes-stacked',
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
      text: 'DigitalOcean - Kubernetes',
      collapsible: true,
      icon: 'fas fa-dharmachakra',
      children: [
        '/devops/digitalocean-kubernetes/README.md',
        '/devops/digitalocean-kubernetes/2022/20221216-how-to-run-serverless-workloads-with-knative-on-digitalocean-kubernetes.md',
        '/devops/digitalocean-kubernetes/2022/20221118-how-to-secure-your-site-in-kubernetes-with-cert-manager-traefik-and-let-s-encrypt.md',
      ]
    }, {
      text: '아마존 웹 서비스를 다루는 기술 - 실무에서 필요한 AWS 클라우드의 모든 것!',
      collapsible: true,
      icon: 'fa-brands fa-aws',
      children: [
        '/devops/art-of-aws/README.md',
        '/devops/art-of-aws/01.md',
        '/devops/art-of-aws/02.md',
        '/devops/art-of-aws/03.md',
        '/devops/art-of-aws/04.md',
        '/devops/art-of-aws/05.md',
        '/devops/art-of-aws/06.md',
        '/devops/art-of-aws/07.md',
        '/devops/art-of-aws/08.md',
        '/devops/art-of-aws/09.md',
        '/devops/art-of-aws/10.md',
        '/devops/art-of-aws/11.md',
        '/devops/art-of-aws/12.md',
        '/devops/art-of-aws/13.md',
        '/devops/art-of-aws/14.md',
        '/devops/art-of-aws/15.md',
        '/devops/art-of-aws/16.md',
        '/devops/art-of-aws/17.md',
        '/devops/art-of-aws/18.md',
        '/devops/art-of-aws/19.md',
        '/devops/art-of-aws/20.md',
        '/devops/art-of-aws/21.md',
        '/devops/art-of-aws/22.md',
        '/devops/art-of-aws/23.md',
        '/devops/art-of-aws/24.md',
        '/devops/art-of-aws/25.md',
        '/devops/art-of-aws/26.md',
        '/devops/art-of-aws/27.md',
        '/devops/art-of-aws/28.md',
        '/devops/art-of-aws/29.md',
        '/devops/art-of-aws/30.md',
        '/devops/art-of-aws/31.md',
        '/devops/art-of-aws/32.md',
        '/devops/art-of-aws/33.md',
        '/devops/art-of-aws/a.md',        
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
    }, {
      text: '요즘 IT 블로그 - DevOps 관련',
      collapsible: true,
      icon: 'fas fa-cubes-stacked',
      children: [
        '/devops/yozm/README.md',
        '/devops/yozm/2464.md',
        '/devops/yozm/2503.md',
      ]
    }
  ], '/misc/': [
    {
      text: 'Misc.',
      icon: 'fas fa-object-group',
      children: [ '/misc/README.md' ]
    }, {
      text: 'Colt Steele - Mastering CSS Grid',
      collapsible: true,
      icon: 'fa-brands fa-css3-alt',
      children: [
        '/misc/colt-steele-mastering-css-grid/README.md',
        '/misc/colt-steele-mastering-css-grid/01-css-grid-basics',
        '/misc/colt-steele-mastering-css-grid/02-units-and-utilities',
        '/misc/colt-steele-mastering-css-grid/03-positioning-elements-by-lines',
        '/misc/colt-steele-mastering-css-grid/04-grid-areas',
        '/misc/colt-steele-mastering-css-grid/05-the-implicit-grid',
        '/misc/colt-steele-mastering-css-grid/06-creating-responsive-grids',
        '/misc/colt-steele-mastering-css-grid/07-building-an-example-layout',
      ]
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