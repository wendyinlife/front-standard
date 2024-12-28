import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    locales: {
      '/': {
        lang: 'zh-CN',
        title: '印客学院',
        description: '前端编码规范工程化',
      },
    },
    logo: '/img/logo.png',
    searchMaxSuggestions: 10,
		docsDir: 'docs',
    head: [
      ['link', { rel: 'icon', href: '/img/logo.png' }],
      [
        'meta',
        {
          name: 'keywords',
          content: '前端编码规范工程化',
        },
      ],
    ],
    navbar: [ 

      // {
      //   text: 'Home',
      //   link: '/'
      // },
      {
        text: '编码规范',
        link: 'coding/',
        children: [
          { text: 'HTML 编码规范', link: '/coding/html.md' },
					{ text: 'CSS 编码规范', link: '/coding/css.md' },
					{ text: 'JavaScript 编码规范', link: '/coding/javascript.md' },
					{ text: 'Node 编码规范', link: '/coding/node.md' },
					{ text: 'Typescript 编码规范', link: '/coding/typescript.md' },
        ]
      },
      {
				text: '工程规范',
        link: "engineering/",
				children: [
					{ text: 'Git 规范', link: '/engineering/git.md' },
					{ text: '文档规范', link: '/engineering/doc.md' },
					{ text: 'CHANGELOG 规范', link: '/engineering/changelog.md' },
				],
			},
    ]
  }),
})
