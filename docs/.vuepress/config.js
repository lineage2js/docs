import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  base: "/docs/",
  lang: 'en-US',
  title: 'Lineage 2 JavaScript Server',
  description: 'Server emulator written in Node.js',
  theme: defaultTheme({
    navbar: ['/', '/get-started'],
    lastUpdated: false,
    contributors: false,
  }),
  bundler: viteBundler(),
  head: [
    ['link', { rel: "shortcut icon", href: "/docs/favicon.ico"}],
  ],
})
