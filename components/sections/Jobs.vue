<template>
  <div
    id="jobs"
    class="container space-y-2 px-2 mx-auto my-6 sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:my-10"
  >
    <div class="tab">
      <ul class="tab-title flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
        <li
          v-for="(item, index) in items"
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
        <div
          class="grid grid-cols-2 gap-2 md:gap-4 place-items-stretch sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
        >
          <div
            v-for="(job, index) in jobs.slice(0, 12)"
            :key="index"
            class="relative flex flex-col items-center justify-center max-w-sm mx-auto my-2"
          >
            <div class="bg-card"></div>
            <figure
              class="relative z-5 max-w-sm overflow-hidden rounded-lg transform hover:scale-110 transition duration-500"
            >
              <img
                class="lazy object-cover w-full h-48"
                :src="job.img"
                alt="招聘......"
                loading="lazy"
              />
              <figcaption class="absolute left-0 px-2 py-2 top-0">
                <h4 class="mb-3 text-xl font-semibold tracking-tight text-white">
                  {{ job.title }}
                </h4>
                <p class="leading-normal text-gray-100">
                  {{ job.unit }}
                </p>
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
  name: 'jobs',
  props: ['items', 'jobsData'],

  data() {
    return {
      active: 1,
      jobs: []
    }
  },
  mounted() {
    this.jobs = this.jobsData
  },

  methods: {
    toggleTabs(index) {
      this.active = index

      this.jobs = this.jobsData.filter(jobsData => {
        return jobsData.works[0].id === index
      })
      // this.$emit('tabClick', index)
    }
  }
}
</script>
