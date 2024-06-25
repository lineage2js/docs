import comp from "C:/Users/ivanov/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/README.html.vue"
const data = JSON.parse("{\"path\":\"/README.html\",\"title\":\"Home\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":false,\"title\":\"Home\",\"heroImage\":\"/logo.png\",\"actions\":[{\"text\":\"Get Started\",\"link\":\"/get-started.html\",\"type\":\"primary\"}],\"footer\":\"MIT Licensed | Copyright © 2024 Lineage2JS. All rights reserved.\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"_README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
