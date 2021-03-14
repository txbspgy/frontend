<template>
  <div class="wrapper -mt-12 relative mx-auto">
    <swiper :options="swiperOption" class="swiper w-full h-full md:w-3/5">
      <swiper-slide
        v-for="item in lunbos"
        :key="item.id"
        class="swiper-slide text-white flex flex-col bg-center bg-cover py-1 box-border bg-transparent"
      >
        <figure>
          <img :src="item.img" alt="轮播" class="w-full object-cover" />
          <figcaption class="container absolute left-0 p-4 top-2 md:p-6 md:top-4 sm:w-2/3 md:w-1/2">
            <div
              class="title mb-2 text-lg md:text-2xl font-bold text-brand"
              data-swiper-parallax="-60"
            >
              {{ item.title }}
            </div>
            <div class="text-sm md:text-xl text-brand leading-5 mb-4" data-swiper-parallax="-120">
              <p>
                {{ item.text }}
              </p>
            </div>
          </figcaption>
        </figure>
      </swiper-slide>
      <div slot="pagination" class="swiper-pagination swiper-pagination-blue"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  props: {
    lunbos: {
      type: Array,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      swiperOption: {
        parallax: true,
        debugger: true,
        observer: true, // 动态加载图片在strapi获取数据，自动初始化swiper
        observeParents: true, // 修改swiper的父元素时，自动初始化swiper
        autoplay: {
          delay: 3000, // 自动切换时间设置
          stopOnLastSlide: false, // 当自动切换到最后一张时是否停止自动切换
          disableOnInteraction: true // 用户触摸时是否停止自动切换
        },
        // speed: 2000, // 切换图片速度毫秒
        // grabCursor: true,
        // slidesPerView: 1.2, //设置slider容器能够同时显示的slides数量(carousel模式)
        // centeredSlides: true,
        // centeredSlidesBounds: true,
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 10, // 在slide之间设置距离（单位px）。
        pagination: {
          el: '.swiper-pagination',
          clickable: true // 点击分页器的指示点分页器会控制Swiper切换
        }
      }
    }
  }
}
</script>
