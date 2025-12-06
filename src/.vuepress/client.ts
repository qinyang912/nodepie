import { defineClientConfig } from 'vuepress/client'
import Authcode from './layouts/Authcode.vue'

export default defineClientConfig({
  layouts: {
    Authcode,
  },
  setup() {
    if (typeof window === 'undefined') return
    const setLang = (l: string) => {
      localStorage.setItem('lang', l)
      document.body.setAttribute('data-lang', l)
      document.documentElement.setAttribute('lang', l === 'zh' ? 'zh-CN' : 'en-US')
      const root = document.querySelector('.authcode-layout') as HTMLElement | null
      if (root) root.setAttribute('data-lang', l)
    }
    const init = () => {
      const l = localStorage.getItem('lang') || 'en'
      setLang(l)
    }
    init()
    document.addEventListener('click', (e: Event) => {
      const t = (e.target as Element | null)?.closest('[data-lang-switch]') as HTMLElement | null
      if (!t) return
      e.preventDefault()
      const l = t.getAttribute('data-lang-switch') || 'en'
      setLang(l)
    })
  },
})
