import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  base: "/docs/",
  lang: 'en-US',
  title: 'Lineage 2 Chronicle 1: Harbingers of War – server emulator (written in JavaScript)',
  theme: defaultTheme({
    lastUpdated: false,
    contributors: false,
    sidebar: [
      {
        text: 'Guide',
        children: [
          {
            text: 'Get started',
            link: '/guide/get-started/',
          },
        ],
      },
    ],
  }),
  bundler: viteBundler(),
  head: [
    ['link', { rel: "shortcut icon", href: "/docs/favicon.ico"}],
  ],
})
