<template>
  <div class="py-14">
    <header
      class="wrapper w-full h-14 opacity-75 fixed z-50 inset-x-0 top-0 bg-gradient-to-b from-blue-200 to-gray-100 px-2"
      :class="fixed ? ' shadow-lg' : 'py-1'"
    >
      <div class="mx-auto px-2">
        <div class="flex justify-between items-center p-2">
          <div class="flex flex-shrink-0 justify-between lg:ml-4">
            <a href="/" class="inline-flex items-center px-2 justify-center md:ml-4">
              <img
                class="h-8 w-auto sm:h-10"
                alt="logo"
                src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png"
                :class="fixed ? 'sm:w-10 sm:h-10' : 'sm:w-12 sm:h-12'"
              />
              <span class="text-2xl font-extrabold md:ml-6 text-blue-500">临清云</span>
            </a>
          </div>
          <nav
            :class="{ flex: open, hidden: !open }"
            class="flex-col flex-1 hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row space-x-10 md:mr-32"
          >
            <a
              class="px-4 py-2 mt-2 text-lg font-medium text-blue-800 bg-gray-100 rounded-lg md:mt-0 hover:text-blue-600 hover:bg-blue-200 focus:bg-blue-200 focus:outline-none focus:shadow-outline"
              href="/"
            >
              首页
            </a>
            <brand />
          </nav>
          <div class="w-28 ml-10 flex flex-shrink-0 bg-center p-2">
            <Weather />
          </div>
          <!-- <div class="hidden flex items-center md:block">
          <button
            href="/login"
            class="inline-block px-4 py-2 mt-4 text-sm no-underline leading-none text-white border border-white rounded hover:border-transparent hover:text-teal-500 hover:bg-white lg:mt-0"
            type="button"
            v-on:click="toggleModal()"
          >
            登录
          </button>
          <login v-if="showModal" />
        </div> -->
          <div class="md:hidden">
            <button
              type="button"
              class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              @click="open = !open"
            >
              <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
                <path
                  v-show="!open"
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
                <path
                  v-show="open"
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div
          v-if="open"
          class="absolute top-10 z-50 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div
            class="p-6 flex rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50 items-center justify-end"
          >
            <a
              class="px-3 py-2 text-lg font-medium text-blue-800 rounded-lg hover:text-blue-600 hover:bg-blue-200 focus:outline-none focus:bg-blue-200"
              href="/"
            >
              首页
            </a>
            <brand />
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
import brand from '../../pages/brand'
export default {
  name: 'Header',
  components: {
    brand,
    Weather: () => import('./Weather')
  },
  data() {
    return { open: false, fixed: false }
  },
  mounted() {
    const listener = () => {
      this.fixed = window.scrollY > 0
    }
    window.addEventListener('scroll', listener, false)
    this.$once('hook:beforeDestroy', () => {
      window.removeEventListener('scroll', listener, false)
    })
  }
}
</script>
