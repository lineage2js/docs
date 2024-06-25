import comp from "C:/Users/ivanov/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/guide/get-started 1.html.vue"
const data = JSON.parse("{\"path\":\"/guide/get-started%201.html\",\"title\":\"Get Started 1\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"guide/get-started 1.md\"}")
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
