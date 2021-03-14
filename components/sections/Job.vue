<template>
  <div class="grid md:grid-cols-2">
    <div class="group flex flex-col justify-between items-center mx-auto md:p-1">
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
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            ></path>
          </svg>
          <h1 class="text text-left text-2xl font-bold md:px-4">招聘信息</h1>
        </div>
        <div class="border-indigo-500 border-b-2 border-t-2 w-44 rounded-t-md flex-none"></div>
      </div>
      <div class="content my-8 items-center">
        <p
          class="w-full font-bold lg:text-xl bg-gradient-to-r from-red-500 to-pink-800 bg-clip-text text-transparent lg:max-w-xl"
        >
          你不必是最好的
        </p>
        <p
          class="my-2 w-full font-bold lg:text-xl bg-gradient-to-r from-red-500 to-pink-800 bg-clip-text text-transparent lg:max-w-xl"
        >
          但你总要比你昨天更好
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
    <div class="box relative max-h-96 flex flex-col sm:justify-center items-center my-4 md:my-1">
      <div class="relative md:max-w-md">
        <div
          class="card bg-blue-400 shadow-lg rounded-3xl w-full h-full absolute transform -rotate-6"
        ></div>
        <div
          class="card bg-red-400 shadow-lg w-full h-full rounded-3xl absolute transform rotate-6"
        ></div>
        <div class="relative rounded-3xl bg-gray-100 shadow-md overflow-hidden mx-2 px-4 pb-24">
          <h2 class="mt-4 text-2xl font-extrabold text-brand text-center">招聘 信息</h2>
          <p class="p-2 text-base font-semibold text-center text-red-500">
            你好 我是张三 我是C1驾驶员 寻个代驾
          </p>
          <form ref="uploadForm" class="mt-2" @submit.prevent="sendToStrapi">
            <div class="flex">
              <label for="name" class="text-red-400 text-lg font-semibold">姓名:</label>
              <input
                type="text"
                name="name"
                placeholder="填您的姓名如:张三"
                class="flex-grow ml-2 border-none bg-gray-100 rounded-xl shadow-lg hover:bg-blue-100 h-10 focus:bg-blue-100 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div class="mt-3 flex">
              <label for="phone" class="text-red-400 text-lg font-semibold">电话:</label>
              <input
                type="text"
                name="phone"
                placeholder="填您的电话如:13506356789"
                class="flex-grow ml-2 border-none bg-gray-100 rounded-xl shadow-lg hover:bg-blue-100 h-10 focus:bg-blue-100 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div class="mt-3 flex">
              <label for="work" class="text-red-400 text-lg font-semibold">职业:</label>
              <div class="flex flex-col">
                <input
                  type="text"
                  name="work"
                  placeholder="填职位--下面文件上传一张单位大门图片"
                  class="flex-grow ml-2 border-none bg-gray-100 rounded-xl shadow-lg hover:bg-blue-100 h-10 focus:bg-blue-100 focus:outline-none focus:ring focus:border-blue-300"
                />
                <input type="file" name="image" class="ml-3 h-10 border-none bg-transparent" />
              </div>
            </div>

            <div class="text-right mr-10">
              <button class="text-red-400 bg-blue-400 btn btn-primary">保存</button>
            </div>
          </form>
          <div class="absolute inset-x-0 bottom-4 space-y-1">
            <div class="scroller flex space-x-1 text-xs text-red-300 whitespace-nowrap">
              <a
                v-for="(job, index) in jobsData"
                :key="index"
                class="bg-gray-200 py-1 px-3 rounded transition duration-500 ease-out transform hover:scale-150 hover:text-red-500 hover:bg-transparent"
              >
                {{ job.title }}-{{ job.unit }}
              </a>
            </div>
            <div class="scroller flex space-x-1 text-xs text-red-300 whitespace-nowrap">
              <a
                v-for="(job, index) in jobsData"
                :key="index"
                class="bg-gray-200 py-1 px-3 rounded transition duration-500 ease-out transform hover:scale-150 hover:text-red-500 hover:bg-transparent"
              >
                {{ job.title }}-{{ job.unit }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    jobsData: Array
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
      this.$http.$post('http://localhost:1337/Upjobs', formData).then(res => console.log(res))
    }
  }
}
</script>
<style scoped>
.box {
  animation: box 5s ease-out 2s forwards;
}
@keyframes box {
  0% {
    right: -50rem;
  }
  50% {
    right: -10rem;
  }
  100% {
    right: 0rem;
  }
}
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
