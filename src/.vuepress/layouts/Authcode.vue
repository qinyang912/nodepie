<template>
  <div class="authcode-layout" :data-lang="lang">
    <Content/>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const lang = ref('en')
onMounted(() => {
  const l = localStorage.getItem('lang') || 'en'
  lang.value = l
  document.body.setAttribute('data-lang', l)
  document.documentElement.setAttribute('lang', l === 'zh' ? 'zh-CN' : 'en-US')
})
</script>

<style>
.authcode-layout{min-height:100vh}
</style>
