<template>
  <div class="flex items-center justify-center">
    <div class="relative" @mouseover="open = true" @mouseout="open = false">
      <div v-if="open" class="fixed inset-0" @click="open = false"></div>
      <button
        class="relative ml-2 p-2 flex items-center bg-gray-100 rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 md:mt-0 hover:bg-blue-200 focus:bg-blue-200 focus:outline-none focus:shadow-outline"
        @click="open = !open"
      >
        <span
          class="text-lg font-medium text-blue-800 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-blue-600"
        >
          临清品牌
        </span>
        <span class="flex h-3 w-3 place-content-center">
          <span
            class="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-pink-400 opacity-75"
          ></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
        </span>
      </button>
      <transition
        enter-active-class="transition-all transition-fastest ease-out-quad"
        leave-active-class="transition-all transition-faster ease-in-quad"
        enter-class="opacity-0 scale-70"
        enter-to-class="opacity-100 scale-100"
        leave-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-70"
      >
        <div
          v-if="open"
          class="origin-top-right absolute right-0 mt-2 w-80 bg-purple-200 rounded-lg border shadow-2xl py-1"
        >
          <ul>
            <li>
              <a href="/brand/cock" class="p-2 flex items-start hover:bg-blue-400">
                <img
                  class="w-10 h-10 rounded-full"
                  src="https://source.unsplash.com/50x50/?nature"
                />
                <div class="ml-2">
                  <p class="text-base font-medium text-brand">鬼子鸡</p>
                  <p class="mt-1 text-sm text-gray-600">金和庄名吃鬼子鸡有三百年历史</p>
                </div>
              </a>
            </li>
            <li>
              <a href="/brand/tuandui" class="p-2 flex items-start hover:bg-blue-400">
                <img
                  class="w-10 h-10 rounded-full"
                  src="https://source.unsplash.com/50x50/?water"
                />
                <div class="ml-2">
                  <p class="text-base font-medium text-brand">烧饼夹肉</p>
                  <p class="mt-1 text-sm text-gray-600">临清名吃烧饼夹肉</p>
                </div>
              </a>
            </li>
            <li>
              <a href="/brand/hunter" class="p-2 flex items-start hover:bg-blue-400">
                <img class="w-10 h-10 rounded-full" src="https://source.unsplash.com/50x50/?logo" />
                <div class="ml-2">
                  <p class="text-base font-medium text-brand">智联招聘</p>
                  <p class="mt-1 text-sm text-gray-600">招聘各方人才</p>
                </div>
              </a>
            </li>
            <li>
              <a href="/brand/shoubiao" class="p-2 flex items-start hover:bg-blue-400">
                <img class="w-10 h-10 rounded-full" src="https://source.unsplash.com/50x50/?dog" />
                <div class="ml-2">
                  <p class="text-base font-medium text-brand">手表店</p>
                  <p class="mt-1 text-sm text-gray-600">亨得利手表专卖店</p>
                </div>
              </a>
            </li>
            <li>
              <a href="/brand/cover" class="p-2 flex items-start hover:bg-blue-400">
                <img class="w-10 h-10 rounded-full" src="https://source.unsplash.com/50x50/?car" />
                <div class="ml-2">
                  <p class="text-base font-medium text-brand">烧饼夹肉</p>
                  <p class="mt-1 text-sm text-gray-600">临清名吃烧饼夹肉</p>
                </div>
              </a>
            </li>
            <li>
              <a href="/brand/jobs" class="p-2 flex items-start hover:bg-blue-400">
                <img class="w-10 h-10 rounded-full" src="https://source.unsplash.com/50x50/?car" />
                <div class="ml-2">
                  <p class="text-base font-medium text-brand">实验室</p>
                  <p class="mt-1 text-sm text-gray-600">临时页</p>
                </div>
              </a>
            </li>
          </ul>
          <div class="p-2 flex justify-center mx-auto">
            <h3 class="text text-xl tracking-wide font-medium">临清欢迎您</h3>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false
    }
  },
  head() {
    return {
      title: '临清云,临清品牌',
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
