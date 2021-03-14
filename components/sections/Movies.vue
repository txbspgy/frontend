<template>
  <div id="movies" class="relative space-y-5 py-2">
    <div class="container mx-auto my-6 sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:my-10">
      <div class="flex flex-col w-full md:m-6 lg:justify-between lg:flex-row">
        <div class="group items-center md:m-4">
          <div class="flex mx-4">
            <svg
              class="w-10 h-10 inline-block text-red-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              ></path>
            </svg>
            <h1 class="text text-left text-2xl font-bold md:px-4">高清影视</h1>
          </div>
          <div class="border-indigo-500 border-b-2 border-t-2 w-44 rounded-t-md flex-none"></div>
        </div>
        <p class="m-2 w-full text-gray-700 md:mr-20 lg:text-lg lg:max-w-md">
          最新视频剪辑,影视 网红 体育 综艺 电视直播
        </p>
      </div>
      <div class="tab">
        <ul class="tab-title flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
          <li
            v-for="(item, index) in todos"
            :key="index"
            class="-mb-px mr-2 last:mr-0 flex-auto text-center"
          >
            <a
              class="px-1 py-1 text-base font-bold uppercase md:px-5 md:py-3 shadow-lg rounded block leading-normal hover:bg-green-600 hover:text-white"
              :class="{
                'text-green-600 bg-white': item.id !== active,
                'text-white bg-green-600': item.id === active
              }"
              @click="toggleTabs(item.id)"
            >
              {{ item.name }}
            </a>
          </li>
        </ul>
        <div class="tab-content tab-space relative">
          <div class="grid grid-cols-1 gap-1 mx-auto sm:grid-cols-2 xl:grid-cols-4">
            <div
              v-for="movie in movies.slice(0, 8)"
              :key="movie.id"
              class="w-full my-1 flex flex-col items-center justify-center overflow-hidden"
            >
              <div class="overflow-hidden rounded-lg w-full">
                <video
                  ref="videoPlayer"
                  controls
                  width="320px"
                  preload="auto"
                  data-setup="{}"
                  webkit-playsinline="true"
                  x5-video-player-type="h5-page"
                  x5-video-orientation="h5"
                  x5-video-player-fullscreen="false"
                  x-webkit-airplay="true"
                  x5-video-ignore-metadata="true"
                  playsinline="true"
                  class="video-js vjs-default-skin object-fill aspect-w-16 aspect-h-9 w-full"
                >
                  <source :src="movie.link" :type="movie.type" />
                </video>
              </div>
              <div class="w-full items-center justify-between rounded-b-lg p-1 bg-white">
                <h1 class="text-base font-bold">
                  {{ movie.title }}
                </h1>
                <p class="text-xs text-gray-500">{{ movie.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import videojs from 'video.js'
import 'video.js/dist/video-js.min.css'

export default {
  props: ['todos', 'moviesData'],
  // async asyncData({ $strapi }) {
  //   return {
  //     moviesData: await $strapi.$movies.find(),
  //     todos: await $strapi.$todos.find()
  //   }  :poster="movie.img"
  // },
  data() {
    return {
      active: 1,
      movies: []
    }
  },
  computed: {
    player() {
      return videojs(this.$refs.videoPlayer, {
        html5: {
          vhs: {
            withCredentials: true
          }
        },
        language: 'zh-CN',
        fluid: true, // 是否自适应布局
        autoplay: true,
        muted: true, // 是否静音播放视频
        controls: true,
        preload: 'auto',
        aspectRatio: '16:9',
        breakpoints: 'vjs-layout-medium',
        liveui: true,
        // controlBar: {
        //   timeDivider: true,
        //   durationDisplay: true
        // },
        playbackRates: [0.7, 1.0, 1.5, 2.0]
      })
    }
  },
  mounted() {
    this.movies = this.moviesData
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose()
    }
  },

  methods: {
    toggleTabs(index) {
      this.active = index

      this.movies = this.moviesData.filter(moviesData => {
        return moviesData.todos[0].id === index
      })
      // this.$emit('tabClick', index)
    },
    videoReload() {
      this.player.reset()
      this.player.src(this.movie.link)
      this.player.load(this.movie.link)
      this.player.play()
    }
  },
  head() {
    return {
      title: '运河名城-临清',
      meta: [
        {
          hid: '临清云,精选短视频',
          name: '临清云,精选短视频',
          content: '临清云,精选短视频'
        }
      ]
    }
  }
}
</script>

<style scoped>
.video-js .vjs-time-control {
  display: block;
}
.video-js .vjs-remaining-time {
  display: none;
}
</style>
