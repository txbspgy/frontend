<template>
  <div
    id="daohang"
    class="container space-y-5 px-2 mx-auto my-6 sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:my-10"
  >
    <div class="flex flex-col w-full md:m-6 lg:justify-between lg:flex-row">
      <div class="group items-center">
        <div class="flex">
          <svg-icon icon-class="nav" class="w-10 h-10" />
          <h1 class="text text-left text-2xl font-bold md:px-4">酷站导航</h1>
        </div>
        <div class="border-indigo-500 border-b-2 border-t-2 w-44 rounded-t-md flex-none"></div>
      </div>
      <p class="m-2 w-full text-gray-700 md:mr-20 lg:text-lg lg:max-w-md">
        汇聚时事新闻，聚焦百姓生活
      </p>
    </div>
    <div class="container mx-auto">
      <h2 class="text-left text-lg font-semibold text-brand md:px-4">视听优选</h2>
      <div class="grid grid-cols-2 gap-1 mx-auto sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
        <div
          v-for="item in movies"
          :key="item.id"
          class="flex flex-col px-2 py-1 w-36 h-24 rounded-lg items-center justify-center max-w-sm mx-auto my-2 bg-gray-300 shadow-2xl hover:shadow-none hover:bg-white"
        >
          <a :href="item.link" class="relative max-w-xs" target="_blank">
            <div class="flex">
              <img class="lazy object-cover w-12 h-12 pt-1" :src="item.img" loading="lazy" />
              <span class="block p-2 text-xs text-orange-600 font-semibold">
                {{ item.title }}
              </span>
            </div>

            <div class="">
              <p class="leading-normal text-sm text-orange-500">
                {{ item.text }}
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="container mx-auto">
      <h2 class="text-left text-lg font-semibold text-brand md:px-4">知识库</h2>
      <div class="grid grid-cols-2 gap-1 mx-auto sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
        <div
          v-for="item in zhishi"
          :key="item.id"
          class="flex flex-col px-2 py-1 w-36 h-24 rounded-lg items-center justify-center max-w-sm mx-auto my-2 bg-gray-300 hover:bg-white shadow-2xl hover:shadow-none"
        >
          <a :href="item.link" class="relative max-w-xs" target="_blank">
            <div class="flex">
              <img class="lazy object-cover w-12 h-12 pt-1" :src="item.img" loading="lazy" />
              <span class="block p-2 text-xs text-orange-600 font-semibold">
                {{ item.title }}
              </span>
            </div>

            <div class="">
              <p class="leading-normal text-sm text-orange-500">
                {{ item.text }}
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="container mx-auto">
      <h2 class="text-left text-lg font-semibold text-brand md:px-4">百家生活</h2>
      <div class="grid grid-cols-2 gap-1 mx-auto sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
        <div
          v-for="item in shenghuo"
          :key="item.id"
          class="flex flex-col px-2 py-1 w-36 h-24 rounded-lg items-center justify-center max-w-sm mx-auto my-2 bg-gray-300 hover:bg-white shadow-2xl hover:shadow-none"
        >
          <a :href="item.link" class="relative max-w-xs" target="_blank">
            <div class="flex">
              <img class="lazy object-cover w-12 h-12 pt-1" :src="item.img" loading="lazy" />
              <span class="block p-2 text-xs text-orange-600 font-semibold">
                {{ item.title }}
              </span>
            </div>

            <div class="">
              <p class="leading-normal text-sm text-orange-500">
                {{ item.text }}
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="container mx-auto">
      <h2 class="text-left text-lg font-semibold text-brand md:px-4">综艺体育</h2>
      <div class="grid grid-cols-2 gap-1 mx-auto sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
        <div
          v-for="item in tiyu"
          :key="item.id"
          class="flex flex-col px-2 py-1 w-36 h-24 rounded-lg items-center justify-center max-w-sm mx-auto my-2 bg-gray-300 hover:bg-white shadow-2xl hover:shadow-none"
        >
          <a :href="item.link" class="relative max-w-xs" target="_blank">
            <div class="flex">
              <img class="lazy object-cover w-12 h-12 pt-1" :src="item.img" loading="lazy" />
              <span class="block p-2 text-xs text-orange-600 font-semibold">
                {{ item.title }}
              </span>
            </div>

            <div class="">
              <p class="leading-normal text-sm text-orange-500">
                {{ item.text }}
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Daohang',
  data() {
    return {
      movies: [
        {
          id: 1,
          link: 'https://www.xinpianchang.com/channel/index/sort-like',
          title: '新片场',
          text: '趣味创意短视频作品',
          img: 'http://guozhivip.com/lab/images/get.ico'
        },
        {
          id: 2,
          link: 'https://www.cupfox.com/',
          title: '茶杯狐',
          text: '影视资源搜索简单方便无广告',
          img: 'https://i.loli.net/2018/08/04/5b65b28a65aae.png'
        },
        {
          id: 3,
          link: 'https://music.163.com/',
          title: '网易云音乐',
          text: '专注于发现与分享的音乐平台',
          img: 'http://p3.music.126.net/tBTNafgjNnTL1KlZMt7lVA==/18885211718935735.jpg'
        },
        {
          id: 4,
          link: 'https://www.itingwa.com/',
          title: '听蛙音乐',
          text: '听最好听的轻音乐',
          img: 'http://guozhivip.com/lab/images/qyy.ico'
        },
        {
          id: 5,
          link: 'https://www.nfmovies.com/',
          title: '奈菲影视',
          text: '奈菲高清影视',
          img: 'https://www.nfmovies.com/favicon.ico'
        },
        {
          id: 6,
          link: 'https://music.migu.cn/v3',
          title: '咪咕音乐',
          text: '海量音乐资源 SQ无损音质',
          img: 'https://music.migu.cn/favicon.ico'
        },
        {
          id: 7,
          link: 'https://www.meijutt.tv/',
          title: '美剧天堂',
          text: '美剧大全',
          img: 'http://guozhivip.com/lab/images/alex.jpg'
        },
        {
          id: 8,
          link: 'https://91mjw.com/',
          title: '91美剧',
          text: '美剧更新',
          img: 'http://guozhivip.com/lab/images/jp.png'
        }
      ],

      zhishi: [
        {
          id: 1,
          link: 'https://www.allhistory.com/',
          title: '全历史',
          text: '深入了解历史画廊',
          img: 'http://guozhivip.com/lab/images/qls.svg'
        },
        {
          id: 2,
          link: 'https://zh.wikihow.com/%E9%A6%96%E9%A1%B5',
          title: 'WikiHow',
          text: 'Get学习、工作、生活小技能',
          img: 'http://guozhivip.com/lab/images/zs.png'
        },
        {
          id: 3,
          link: 'https://www.yxgapp.com/',
          title: '译学馆',
          text: '分享国外有价值的学习资源',
          img: 'http://guozhivip.com/lab/images/e.png'
        },
        {
          id: 4,
          link: 'http://www.mvyxws.com/',
          title: '医学微视',
          text: '科普医学知识的良心网站',
          img: 'http://guozhivip.com/lab/images/yxws.png'
        },
        {
          id: 5,
          link: 'https://www.xiangdang.net/',
          title: '香当网',
          text: '党团公文企业论文合同等各式范文',
          img: 'https://static.xiangdang.net/favicon.ico'
        },
        {
          id: 6,
          link: 'https://yiban.io/',
          title: '壹伴',
          text: '更好用的微信公众号编辑器',
          img: 'https://assets.yiban.io/assets/imgs/favicon-new-8615028296.ico'
        },
        {
          id: 7,
          link: 'https://www.52doutu.cn/',
          title: '表情包制作',
          text: '在线制作表情/下载',
          img: 'https://www.52doutu.cn/favicon.ico'
        },
        {
          id: 8,
          link: 'https://www.skypixel.com/',
          title: '天空之城',
          text: '专注于航拍影像的网站 设计精美',
          img: 'http://spcn-webfront.skypixel.com/skypixel/public/favicon.ico'
        }
      ],

      shenghuo: [
        {
          id: 1,
          link: 'https://topbook.cc/',
          title: 'Topbook',
          text: '高效生活研究所',
          img: 'http://guozhivip.com/lab/images/tb.png'
        },
        {
          id: 2,
          link: 'https://colors.ichuantong.cn/',
          title: '中国传统颜色',
          text: '中国古典色在线手册',
          img: 'http://guozhivip.com/lab/images/gds.jpg'
        },
        {
          id: 3,
          link: 'https://www.kujiale.com/xiaoguotu/suggestion',
          title: '酷家乐',
          text: '优秀家装设计鉴赏',
          img: 'http://guozhivip.com/lab/images/kj.jpg'
        },
        {
          id: 4,
          link: 'https://720yun.com/channel',
          title: '720Yun',
          text: '全景，重新记录世界',
          img: 'http://guozhivip.com/lab/images/qj.png'
        },
        {
          id: 5,
          link: 'https://www.smzdm.com/',
          title: '什么值得买',
          text: '认真生活 好好花钱',
          img: 'https://www.smzdm.com/favicon.ico'
        },
        {
          id: 6,
          link: 'https://tophub.today/',
          title: '今日热榜',
          text: '集合热门平台的实时热榜',
          img: 'https://tophub.today/favicon.ico'
        },
        {
          id: 7,
          link: 'http://guozhivip.com/rank/',
          title: '果汁排行榜',
          text: '聚合各种排行榜',
          img: 'http://guozhivip.com/images/ic.ico'
        },
        {
          id: 8,
          link: 'http://lackar.com/aa/',
          title: '站内搜索',
          text: '填上关键词再点你喜欢的网站',
          img: 'http://lackar.com/aa/favicon.ico'
        }
      ],
      tiyu: [
        {
          id: 1,
          link: 'https://www.zhibo8.cc',
          title: '直播8',
          text: '汇聚足球篮球直播精选',
          img: 'https://www.zhibo8.cc/favicon.ico'
        },
        {
          id: 2,
          link: 'https://www.bilibili.com/',
          title: '哔哩哔哩',
          text: '不光综艺多 超级多学习资源',
          img: 'https://www.bilibili.com/favicon.ico'
        },
        {
          id: 3,
          link: 'https://music.migu.cn/v3',
          title: '咪咕音乐',
          text: '海量音乐资源 SQ无损音质',
          img: 'https://music.migu.cn/favicon.ico'
        },
        {
          id: 4,
          link: 'https://www.cupfox.com/',
          title: '茶杯狐',
          text: '影视资源搜索简单方便无广告',
          img: 'https://i.loli.net/2018/08/04/5b65b28a65aae.png'
        },
        {
          id: 5,
          link: 'https://www.hupu.com/',
          title: '虎扑体育',
          text: '汇聚足球篮球赛事',
          img: 'https://w1.hoopchina.com.cn/images/pc/old/favicon.ico'
        },
        {
          id: 6,
          link: '',
          title: '',
          text: '',
          img: 'http://guozhivip.com/lab/images/get.ico'
        },
        {
          id: 7,
          link: '',
          title: '',
          text: '',
          img: 'http://guozhivip.com/lab/images/get.ico'
        },
        {
          id: 8,
          link: '',
          title: '',
          text: '',
          img: 'http://guozhivip.com/lab/images/get.ico'
        }
      ]
    }
  },
  methods: {
    loadImg() {
      this.$emit('load')
    }
  }
}
</script>
