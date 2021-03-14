<template>
  <transition name="page">
    <div class="body">
      <Lunbo :lunbos="lunbos" />
      <Scroll v-show="jobsData.length" ref="scroller" class="content" @scroll="scroll">
        <TextScroll :dataList="banners" />
        <News :items="news" class="space-y-5" />
        <Movies class="" :todos="todos" :moviesData="moviesData" />
        <House :housesData="housesData" />
        <Houses :items="items" :housesData="housesData" />
        <Job :jobsData="jobsData" />
        <Jobs :items="works" :jobsData="jobsData" />
        <Daohang @load="loadImg" />
      </Scroll>
    </div>
  </transition>
</template>
<script>
import Scroll from '../components/Scroll.vue'
import Lunbo from '../components/sections/Lunbo'
import TextScroll from '../components/sections/TextScroll'
export default {
  components: {
    Lunbo,
    Scroll,
    TextScroll,
    News: () => import('../components/sections/News'),
    Movies: () => import('../components/sections/Movies'),
    House: () => import('../components/sections/House'),
    Houses: () => import('../components/sections/Houses'),
    Job: () => import('../components/sections/Job'),
    Jobs: () => import('../components/sections/Jobs'),
    Daohang: () => import('../components/sections/Daohang')
  },
  async asyncData({ $strapi }) {
    return {
      lunbos: await $strapi.$lunbos.find(),
      banners: await $strapi.$banners.find(),
      news: await $strapi.$news.find(),
      moviesData: await $strapi.$movies.find(),
      todos: await $strapi.$todos.find(),
      items: await $strapi.$categories.find(),
      housesData: await $strapi.$houses.find(''),
      jobsData: await $strapi.$jobs.find(''),
      works: await $strapi.$works.find()
    }
  },
  data() {
    return { scrollY: 0 }
  },
  methods: {
    loadImg() {
      setTimeout(() => {
        this.$refs.scroller.refresh()
      }, 20)
    },
    scroll(position) {
      this.scrollY = -position.y > 1000
    }
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

<style scoped>
.body {
  font-family: 'Microsoft YaHei', 'Hiragino Sans GB', 'Arail';
}
.content {
  height: calc(100% - 20px);
  position: relative;
}
</style>
