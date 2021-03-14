// eslint-disable-next-line nuxt/no-cjs-in-config
const path = require('path')
require('dotenv').config()
export default {
  target: 'static',
  env: {
    NODE_ENV: process.env.NODE_ENV
  },
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  head: {
    title: '临清云',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1, user-scalable=no,viewport-fit=cover, minimum-scale=1, maximum-scale=1'
      }, // 禁止用户缩放
      { name: 'X-UA-Compatible', content: 'ie=edge,chrome=1' }, // 优先使用 IE 最新版本和 Chrome
      { name: 'Cache-Control', content: 'no-siteapp' }, // 转码申明：用百度打开网页可能会对其进行转码（比如贴广告），避免转码
      { name: 'Cache-Control', content: 'no-transform' }, // 不得对资源进行转换或转变
      { name: 'renderer', content: 'webkit' }, // 浏览器内核控制
      { name: 'robots', content: 'index,follow' }, // 搜索引擎索引方式
      { name: 'googlebot', content: 'index,follow' }, // 搜索谷歌引擎索引方式
      { name: 'google', content: 'notranslate' }, // 谷歌翻译
      {
        hid: 'description', // 简介
        name: 'description',
        content: '临清地方企业新闻导航平台,运河临清坐落在山东西部'
      },
      {
        hid: 'keywords', // 关键词
        name: 'keywords',
        content: '临清企业,导航,影视,临清房产,临清招聘,运河临清，轴承，纺织，狮猫'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    htmlAttrs: {
      lang: 'zh-CN',
      amp: true
    },
    bodyAttrs: {
      class: ['antialiased', 'bg-gray-100']
    }
  },
  loading: { color: '#1890FF' },
  css: [{ src: '@/assets/css/styles.css', lang: 'css' }, 'swiper/dist/css/swiper.css'],
  plugins: [
    { src: '~/plugins/weather.js', ssr: false },
    { src: '~/plugins/vueSwiper.js', ssr: false },
    { src: '~/plugins/icon.js', ssr: true }
  ],
  components: true,
  router: {
    middleware: ['device']
  },
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    ['@nuxtjs/dotenv', { filename: '.env.production' }]
    // 指定打包时使用的['@nuxtjs/dotenv', { filename: '.env.production' }]
  ],
  modules: [
    // '@nuxtjs/axios',
    '@nuxtjs/strapi',
    '@nuxt/http'
  ],
  strapi: {
    entities: [
      'news',
      'movies',
      'jobs',
      'banners',
      'categories',
      'works',
      'houses',
      'todos',
      'lunbos'
    ],
    url: process.env.API_URL || 'http://localhost:1337'
  },
  build: {
    extend(config, ctx) {
      // 排除 nuxt 原配置的影响,Nuxt 默认有vue-loader,会处理svg,img等
      // 找到匹配.svg的规则,然后将存放svg文件的目录排除
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'))
      svgRule.exclude = [path.resolve(__dirname, 'assets/icons/svg')]
      // 添加loader规则 /icons/svg for svg-sprite-loader
      config.module.rules.push({
        test: /\.svg$/, // 将存放svg的目录加入到loader处理目录
        include: [path.resolve(__dirname, 'assets/icons/svg')],
        loader: 'svg-sprite-loader',
        options: {
          symbolId: 'icon-[name]'
        }
      })
    }
  },
  tailwindcss: {
    configPath: 'tailwind.config.js',
    exposeConfig: true
  }
}
