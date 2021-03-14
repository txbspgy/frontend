<template>
  <div ref="scroll" class="scroll">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
export default {
  name: 'Scroll',
  props: {
    probeType: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {}
  },
  mounted() {
    this.$nextTick(() => {
      // 1.创建BScroll对象
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.scroll, {
          click: true,
          probeType: 3
        })
        // 2.监听滚动的位置
        this.scroll.on('scroll', position => {
          this.$emit('scroll', position)
        })
      } else {
        this.scroll && this.scroll.refresh()
      }
    })
  },
  beforeDestroy() {
    this.scroll.destroy()
  },
  methods: {
    getScroll() {
      return this.scroll
    },
    refresh() {
      this.scroll && this.scroll.refresh()
    }
  }
}
</script>

<style scoped>
.scroll {
  overflow: hidden;
  height: 100%;
}
</style>
