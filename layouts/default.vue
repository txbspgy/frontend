<template>
  <div id="app" class="wrapper">
    <Navbar />
    <keep-alive>
      <nuxt keep-alive />
    </keep-alive>
    <Load />
    <Footbar class="space-y-4" />
  </div>
</template>
<script>
import Navbar from './sections/Navbar.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    Load: () => import('./sections/Load.vue'),
    Footbar: () => import('./sections/Footbar.vue')
  },
  head() {
    return {
      title: '运河名城-临清',
      meta: [
        {
          hid: '临清云,临清品牌,运河名城,临清狮猫',
          name: '临清云,临清品牌,运河名城,临清狮猫',
          content: '临清云,临清品牌,运河名城,临清狮猫'
        }
      ]
    }
  }
}
</script>
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: #2c3e50;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
