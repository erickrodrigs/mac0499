module.exports = {
  base: '/mac0499/',
  title: 'Sorting Hat',
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    searchPlaceholder: 'Search...',
    nav: [
      {
        text: 'Capstone Project',
        link: '/project/',
      },
      {
        text: 'About me',
        link: '/about/',
      },
      {
        text: 'Publications',
        link: '/publications/'
      },
      {
        text: 'Download Monograph',
        link: 'https://v1.vuepress.vuejs.org'
      }
    ],
    sidebar: [
      {
        title: 'Capstone Project',
        collapsable: false,
        children: [
          ['/project/', 'Abstract'],
          ['/project/proposal', 'Work Proposal'],
        ]
      }
    ]
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
