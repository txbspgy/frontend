<template>
  <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <!-- Widget -->
      <div class="bg-white rounded-2xl w-96 p-6 flex flex-col space-y-6">
        <p class="font-bold border-b border-gray-100 pb-2">Young Web Developers</p>
        <div class="flex space-x-4 items-center">
          <img
            src="https://pbs.twimg.com/profile_images/1290682535308144640/nql3q8fL_400x400.jpg"
            class="rounded-full w-16 transform duration-300 hover:scale-105 hover:shadow-lg"
          />
          <div class="flex w-full justify-between">
            <div>
              <p class="font-semibold">French BOY</p>
              <p class="text-xs text-gray-500 flex items-center space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="12" cy="11" r="3" />
                  <path
                    d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"
                  />
                </svg>
                <span>Lagos, Nigeria</span>
              </p>
            </div>
            <button
              class="rounded-full border focus:outline-none border-gray-300 px-6 text-sm text-gray-500 transform duration-300 hover:bg-yellow-500 hover:text-purple-50 hover:border-yellow-100"
            >
              Follow
            </button>
          </div>
        </div>

        <div class="flex space-x-4 items-center">
          <img
            src="https://pbs.twimg.com/profile_images/1359142087971778565/9BRaWBly_400x400.jpg"
            class="rounded-full w-16 transform duration-300 hover:scale-105 hover:shadow-lg"
          />
          <div class="flex w-full justify-between">
            <div>
              <p class="font-semibold">French BOY</p>
              <p class="text-xs text-gray-500 flex items-center space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="12" cy="11" r="3" />
                  <path
                    d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"
                  />
                </svg>
                <span>Rwanda</span>
              </p>
            </div>
            <button
              class="rounded-full border focus:outline-none border-gray-300 px-6 text-sm text-gray-500 transform duration-300 hover:bg-yellow-500 hover:text-purple-50 hover:border-yellow-100"
            >
              Follow
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'jobs',
  components: {},
  data() {
    return {}
  }
}
</script>

<style lang="postcss" scoped></style>
