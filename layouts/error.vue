<template>
  <div class="error w-6/12 mx-auto pt-20">
    <h1 class="text-brand font-bold text-3xl px-2">网页不存在或异常 404</h1>
    <button class="btn px-5 hover:bg-blue-800">
      <nuxt-link to="/" class="text-brand">回到主页</nuxt-link>
    </button>
  </div>
</template>
<script>
export default {
  name: 'error',
  components: {},
  data() {
    return {}
  }
}
</script>
