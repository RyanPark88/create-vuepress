const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'SouthChain Digital',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: SouthChain Digital Network,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
    ['meta'  { drive:       'ref：https://v1.vuepress.vuejs.org/config/#head'}]
  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'create-vuepress',
    editLinks: false,
    docsDir: '',
    editLinkText: 'southchain',
    lastUpdated: false,
    nav: [
      {
        text: 'Home',
        link: '/Home/',
      },
      {
        text: 'AboutUs',
        link: '/About.md/'
      },south
      {
        text: 'Blog',
        link: '/blog.md/'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'NavBar',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
