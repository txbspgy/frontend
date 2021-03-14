import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon.vue'

Vue.component('svg-icon', SvgIcon)

// 引用svg图标
const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('@/assets/icons/svg', false, /\.svg$/)
requireAll(req)
// 引用项目 assets/svg 目录下的所有 .svg 文件
// 如果第二个参数为 true ，程序将会遍历 assets/svg 目录下的子目录，并引用其中的 .svg 文件
// 如果不需要遍历子目录，可设为 false
// 引用方式 <svg-icon icon-class="heart-fill" />
