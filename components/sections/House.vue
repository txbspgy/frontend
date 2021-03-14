<template>
  <div class="grid md:grid-cols-2 mt-2">
    <div class="group flex flex-col justify-between items-center mx-auto md:p-3">
      <div>
        <div class="flex">
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
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            ></path>
          </svg>
          <h1 class="text text-left text-2xl font-bold md:px-4">房产信息</h1>
        </div>
        <div class="border-indigo-500 border-b-2 border-t-2 w-44 rounded-t-md flex-none"></div>
      </div>
      <div class="my-8 items-center">
        <p
          class="w-full font-bold lg:text-xl lg:max-w-md bg-gradient-to-r from-red-500 to-pink-800 bg-clip-text text-transparent"
        >
          安得广厦千万间
        </p>
        <p
          class="my-2 w-full font-bold bg-gradient-to-r from-red-500 to-pink-800 bg-clip-text text-transparent lg:text-xl lg:max-w-md"
        >
          大庇天下寒士俱欢颜
        </p>
      </div>
      <div class="flex -ml-2 md:-ml-10 md:-mb-10">
        <svg
          class="w-6 h-6 inline-block"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
          ></path>
        </svg>
        <p class="text-red-500 font-medium text-sm">有意向用户多多取证后再心动，我们不负法律责任</p>
      </div>
    </div>

    <div
      class="relative max-h-96 rounded-lg shadow-2xl mx-2 bg-gray-300 flex flex-col p-2 pb-24 items-center justify-center overflow-hidden md:max-w-md"
    >
      <h2 class="mt-4 text-2xl font-extrabold text-brand">房屋 信息</h2>
      <p class="p-2 text-base font-semibold text-red-500">
        你好 我是张三 我在中央帝京有套房 或租或售
      </p>
      <form ref="uploadForm" class="text-gray-800 ml-8" @submit.prevent="sendToStrapi">
        <div class="flex items-center space-x-2">
          <label for="name" class="text-red-400 text-lg font-semibold">姓名:</label>
          <input
            type="text"
            name="name"
            placeholder="填您的姓名如:张三"
            class="flex-grow bg-transparent border-b-4 border-gray-400 p-1 outline-none text-white focus:border-indigo-700 placeholder-gray-400 text-base"
          />
        </div>
        <div class="flex items-center space-x-2">
          <label for="phone" class="text-red-400 text-lg font-semibold">电话:</label>
          <input
            type="text"
            name="phone"
            placeholder="填您的电话如:13506356789"
            class="flex-grow bg-transparent border-b-4 border-gray-400 p-1 outline-none text-white focus:border-indigo-700 placeholder-gray-400 text-base"
          />
        </div>
        <div class="flex items-center space-x-2">
          <label for="house" class="text-red-400 text-lg font-semibold">位置:</label>
          <div class="flex flex-col">
            <input
              type="text"
              name="house"
              placeholder="房子位置--下面上传一张房子内饰图"
              class="flex-grow bg-transparent border-b-4 border-gray-400 p-1 outline-none text-white focus:border-indigo-700 placeholder-gray-400 text-base"
            />
            <input type="file" name="image" class="ml-3 h-10 border-none bg-transparent" />
          </div>
        </div>

        <div class="text-right mr-10">
          <button class="text-red-400 bg-gray-500 btn btn-secondary" type="submit" name="Submit">
            保存
          </button>
        </div>
      </form>
      <div class="absolute inset-x-0 bottom-4 space-y-1">
        <div class="scroller flex space-x-1 text-xs text-red-400 whitespace-nowrap">
          <a
            v-for="(house, index) in housesData"
            :key="index"
            class="bg-gray-200 py-1 px-3 rounded transition duration-500 ease-out transform hover:scale-150 hover:text-red-500 hover:bg-transparent"
          >
            {{ house.name }}-{{ house.address }}
          </a>
        </div>
        <div class="scroller flex space-x-1 text-xs text-red-400 whitespace-nowrap">
          <a
            v-for="(house, index) in housesData"
            :key="index"
            class="bg-gray-200 py-1 px-3 rounded transition duration-500 ease-out transform hover:scale-150 hover:text-red-500 hover:bg-transparent"
          >
            {{ house.name }}-{{ house.address }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    housesData: Array
  },
  methods: {
    sendToStrapi() {
      const form = this.$refs.uploadForm
      const formData = new FormData()
      const formElements = form.elements
      const data = {}
      formElements.forEach(currentElement => {
        if (!['submit', 'file'].includes(currentElement.type)) {
          data[currentElement.name] = currentElement.value
        } else if (currentElement.type === 'file') {
          if (currentElement.files.length === 1) {
            const file = currentElement.files[0]
            formData.append(`files.${currentElement.name}`, file, file.name)
          } else {
            for (let i = 0; i < currentElement.files.length; i++) {
              const file = currentElement.files[i]
              formData.append(`files.${currentElement.name}`, file, file.name)
            }
          }
        }
      })
      formData.append('data', JSON.stringify(data))
      this.$http.$post('http://localhost:1337/Uphouses', formData).then(res => console.log(res))
    }
  }
}
</script>
<style scoped>
.scroller {
  animation: 15s scroll infinite;
}
.scroller:first-child {
  animation-duration: 20s;
  animation-delay: 2s;
}
/* .scroller:nth-child(2) {
  animation-duration: 25s;
  animation-delay: 3s;
} */
@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}
</style>
