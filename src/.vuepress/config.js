module.exports = {
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
    searchPlaceholder: 'Buscar...',
    nav: [
      {
        text: 'TCC',
        link: '/tcc/',
      },
      {
        text: 'Sobre o aluno',
        link: '/about/',
      },
      {
        text: 'Publicações',
        link: '/publications/'
      },
      {
        text: 'Baixar monografia',
        link: 'https://v1.vuepress.vuejs.org'
      }
    ],
    sidebar: {
      '/tcc/': [
        {
          title: 'Sumário',
          collapsable: false,
          children: [
            '',
            'proposal'
          ]
        }
      ]
    }
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
