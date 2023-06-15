import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Frontend About",
  description: "Frontend ",
  base: '/Frontend_About/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '前端', link: '/frontend/html', activeMatch: '^/frontend/' },
      { text: '书籍', link: '/book/', activeMatch: '^/book/'},
      { text: '面试', link: '/interview/html', activeMatch: '^/interview/'}
      // { text: '随笔', link: '/article/', activeMatch: '^/article/'}
    ],

    sidebar: {
      '/frontend/': [
        {
          items: [
            { text: 'html', link: '/frontend/html' },
            { text: 'css', link: '/frontend/css' },
            { text: 'js', link: '/frontend/js' }
          ]
        }
      ],
      '/book/': [
        {
          items: [
            { text: 'Markdown Examples', link: '/book/' },
            { text: 'Runtime API Examples', link: '/book/book1' }
          ]
        }
      ],
      '/interview/': [
        {
          items: [
            { text: 'html', link: '/interview/html' },
            { text: 'css', link: '/interview/css' },
            { text: 'js', link: '/interview/js' }
          ]
        }
      ]
    },

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   },
    //   {
    //     text: '书籍',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hua545563233' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present liu zhihua'
    }
  }
})
