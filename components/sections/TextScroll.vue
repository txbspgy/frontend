<template>
  <div class="text-container whitespace-no-wrap md:mt-6">
    <transition class="" name="slide" mode="out-in">
      <p
        :key="text.id"
        class="text whitespace-normal h-12 text-base font-medium md:font-semibold md:text-xl mr-2 text-right align-middle md:h-10"
      >
        {{ text.val.text }}
      </p>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'TextScroll',
  props: {
    dataList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      count: 0, // 当前索引
      intervalId: null, // 定时器ID
      playTime: 6000 // 定时器执行间隔
    }
  },
  computed: {
    text() {
      return {
        id: this.count,
        val: this.dataList[this.count]
      }
    }
  },
  created() {
    this.intervalId = setInterval(() => {
      // 定义定时器
      this.getText()
    }, this.playTime)
  },
  destroyed() {
    clearInterval(this.intervalId) // 清除定时器
  },
  methods: {
    getText() {
      const len = this.dataList.length // 获取数组长度
      if (len === 0) {
        return // 当数组为空时，直接返回
      }
      if (this.count === len - 1) {
        // 当前为最后一个时
        this.count = 0 // 从第一个开始
      } else {
        this.count++ // 自增
      }
    }
  }
}
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 1s;
}
/* 进入 */
.slide-enter {
  transform: translateY(50%);
}
/* 离开结束 */
.slide-leave-to {
  transform: translateY(-50%);
}
</style>
