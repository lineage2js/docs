import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',
  title: 'Lineage 2 JavaScript Server',
  description: 'Server emulator written in Node.js',
  theme: defaultTheme({
    navbar: ['/', '/get-started'],
  }),
  bundler: viteBundler(),
})
