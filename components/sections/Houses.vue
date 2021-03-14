<template>
  <div class="relative py-2 space-y-2">
    <div class="container px-2 mx-auto my-6 sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:my-10">
      <div class="tab">
        <ul class="tab-title flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
          <li
            v-for="(item, index) in items"
            :key="index"
            class="-mb-px mr-2 last:mr-0 flex-auto text-center"
          >
            <a
              class="px-3 py-1 text-base font-bold uppercase md:px-5 md:py-3 shadow-lg rounded block leading-normal hover:bg-green-600 hover:text-white"
              :class="{
                'text-green-600 bg-white': item.id !== active,
                'text-white bg-green-600': item.id === active
              }"
              @click="toggleTabs(item.id)"
            >
              {{ item.quyu }}
            </a>
          </li>
        </ul>
        <div class="tab-content tab-space relative">
          <div
            class="grid grid-cols-2 gap-2 place-items-stretch sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 md:gap-4"
          >
            <figure
              v-for="(house, index) in houses.slice(0, 12)"
              :key="index"
              class="flex flex-col items-center justify-center max-w-sm mx-auto my-2 focus:outline-none relative"
            >
              <img
                :src="house.img"
                alt="卖房......"
                class="lazy w-full h-48 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
                loading="lazy"
              />
              <figcaption
                class="absolute inset-x-0 top-0 bg-black opacity-0 hover:opacity-75 h-full rounded-lg"
              >
                <div class="px-4 text-white">
                  <p class="font-normal text-sm py-3">{{ house.name }}</p>
                  <hr />
                  <p class="pt-3 font-light text-sm">{{ house.text }}</p>
                </div>
              </figcaption>
              <figcaption class="-mt-6 overflow-hidden bg-white rounded-lg shadow-lg">
                <div
                  class="py-1 text-xs font-semibold tracking-wide text-center text-gray-800 uppercase"
                >
                  {{ house.name }}
                </div>
                <address class="flex items-center justify-between px-1 py-1 bg-gray-500">
                  <h1 class="text-xs font-medium text-white">
                    {{ house.address }}
                  </h1>
                </address>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'houses',
  props: ['items', 'housesData'],
  data() {
    return {
      active: 1,
      houses: []
    }
  },
  mounted() {
    this.houses = this.housesData
  },
  methods: {
    toggleTabs(index) {
      this.active = index

      this.houses = this.housesData.filter(housesData => {
        return housesData.categories[0].id === index
      })
    }
  }
}
</script>
