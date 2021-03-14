<template>
  <div
    id="news"
    class="container space-y-4 py-2 mx-auto mt-10 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:mt-2"
  >
    <div class="m-2 flex flex-col w-full md:m-6 lg:justify-between lg:flex-row">
      <div class="group items-center md:m-4">
        <div class="flex mx-4">
          <svg-icon icon-class="news" class="w-10 h-10" />
          <h1 class="text text-left text-2xl font-bold md:px-4">热点新闻</h1>
        </div>
        <div class="border-indigo-500 border-b-2 border-t-2 w-44 rounded-t-md flex-none"></div>
      </div>
      <p class="w-full text-gray-700 md:mr-20 lg:text-lg lg:max-w-md">汇聚时事新闻，聚焦百姓生活</p>
    </div>
    <div class="flex flex-wrap lg:-mx-4">
      <div
        v-for="item in items.slice(0, 8)"
        :key="item.id"
        class="w-full px-0 my-2 transition-transform duration-300 ease-in-out transform hover:-translate-y-1 md:w-1/2 lg:my-2 lg:px-2 lg:w-1/2 lg:flex"
      >
        <figure
          class="relative flex-none h-48 overflow-hidden text-center bg-cover rounded-lg lg:h-auto lg:w-48"
        >
          <img class="lazy w-full h-full" :src="item.imgUrl" alt="bag" loading="lazy" />
          <figcaption
            style="background-color: rgba(0, 0, 0, 0.2)"
            class="absolute px-2 py-1 mt-1 ml-1 text-sm text-white rounded top-1"
          >
            {{ changeTime(item.updatedAt) }}
          </figcaption>
        </figure>
        <article
          class="prose lg:prose-lg flex flex-col justify-between leading-normal bg-white border-b border-l border-r rounded-b border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light lg:rounded-b-none lg:rounded-r hover:bg-yellow-100"
        >
          <section class="mx-1">
            <h5 class="m-1 text-lg font-semibold leading-snug align-middle text-grey-900">
              {{ item.title }}
            </h5>
            <p
              class="text-sm font-medium break-all text-grey-600 align-middle overflow-auto tracking-tighter line-clamp-5 hover:line-clamp-none"
            >
              {{ item.text }}
            </p>
          </section>
          <footer class="flex justify-between mb-0 item-center">
            <small class="block mt-3 text-gray-800">
              -- 来自
              <cite class="text-red-400">{{ item.source }}</cite>
            </small>
            <a
              class="inline-block p-1 m-1 text-xs text-gray-500 bg-transparent rounded-md shadow-md hover:-translate-y-0.5 transform transition focus:outline-none hover:bg-gray-600 hover:text-white"
              :href="item.link"
              target="_blank"
            >
              <span class="px-1 font-light text-indigo-400">原文</span>
            </a>
          </footer>
        </article>
      </div>
    </div>
  </div>
</template>
<script>
import * as timeago from 'timeago.js'
export default {
  name: 'News',
  props: {
    items: Array
  },
  methods: {
    changeTime(val) {
      const time = new Date(val) // 先将接收到的json格式的日期数据转换成可用的js对象日期
      return timeago.format(time, 'zh_CN') // 转换成类似于几天前的格式
    }
  }
}
</script>
