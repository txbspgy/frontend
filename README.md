strapi名字txbspgy@gmail.com
      密码Wcb372502


1,logo图标
太阳https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png
<svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      class="h-6 w-6 cursor-pointer hidden"
      id="toggle-light"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
   </svg>

月亮https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather10-512.png
<svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      class="h-6 w-6 cursor-pointer hidden"
      id="toggle-dark"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>

2,env设置
API-URL='https://chriswray.dev'

3,@tailwindcss/aspect-ratio设置图片宽高比
组合aspect-w-{n}和aspect-h-{n}类以指定元素的长宽比
<div class="aspect-w-16 aspect-h-9">
使用aspect-none以除去任何宽高比的行为
<div class="aspect-w-16 aspect-h-9 lg:aspect-none">
由于当前需要实现的方式（旧的padding-bottom技巧），您需要将宽高比分配给父元素，并使实际元素要确定该父元素的唯一子元素的大小

4,@tailwindcss/forms表单样式
确保添加type="text"
<input type="text" class="block w-full border-gray-300 rounded-md focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 sm:text-sm sm:leading-5">

5,文字颜色过渡
bg-clip-text text-transparent bg-gradient-to-t from-red-700 to-yellow-500
6,m3u8
CCTV-1高清 http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8
CCTV-3高清 http://ivi.bupt.edu.cn/hls/cctv3hd.m3u8
CCTV-5高清 http://ivi.bupt.edu.cn/hls/cctv5hd.m3u8
CCTV-5+高清 http://ivi.bupt.edu.cn/hls/cctv5phd.m3u8
CCTV-6高清 http://ivi.bupt.edu.cn/hls/cctv6hd.m3u8
CCTV-8高清 http://ivi.bupt.edu.cn/hls/cctv8hd.m3u8
CHC高清电影 http://ivi.bupt.edu.cn/hls/chchd.m3u8
北京卫视高清 http://ivi.bupt.edu.cn/hls/btv1hd.m3u8
北京文艺高清 http://ivi.bupt.edu.cn/hls/btv2hd.m3u8
北京体育高清 http://ivi.bupt.edu.cn/hls/btv6hd.m3u8
北京纪实高清 http://ivi.bupt.edu.cn/hls/btv11hd.m3u8
湖南卫视高清 http://ivi.bupt.edu.cn/hls/hunanhd.m3u8
浙江卫视高清 http://ivi.bupt.edu.cn/hls/zjhd.m3u8
江苏卫视高清 http://ivi.bupt.edu.cn/hls/jshd.m3u8
东方卫视高清 http://ivi.bupt.edu.cn/hls/dfhd.m3u8
安徽卫视高清 http://ivi.bupt.edu.cn/hls/ahhd.m3u8
黑龙江卫视高清 http://ivi.bupt.edu.cn/hls/hljhd.m3u8
辽宁卫视高清 http://ivi.bupt.edu.cn/hls/lnhd.m3u8
深圳卫视高清 http://ivi.bupt.edu.cn/hls/szhd.m3u8
广东卫视高清 http://ivi.bupt.edu.cn/hls/gdhd.m3u8
天津卫视高清 http://ivi.bupt.edu.cn/hls/tjhd.m3u8
湖北卫视高清 http://ivi.bupt.edu.cn/hls/hbhd.m3u8
山东卫视高清 http://ivi.bupt.edu.cn/hls/sdhd.m3u8

7,
yarn upgrade-interactive --latest
// 需要手动选择升级的依赖包，按空格键选择，a 键切换所有，i 键反选选择
8,
字体多色
<h1 class="font-bold text-3xl text-center max-w-2xl mx-auto mt-12 bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent" >
9,变大
transition duration-500 ease-out  transform hover:scale-110
10,button样式
<button
        class="transition py-2 px-4 font-bold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 focus:outline-none">
        {{ message }}
      </button>
11,图片从上往下变黑
<div class="bg-gray-200 rounded-xl relative text-white">
  <div class="absolute top-0 left-0 right-0 bottom-0 w-full h-full z-10 bg-gradient-to-b from-transparent to-black"></div>
  <img src="" alt="" class="object-cover h-96 w-full rounded-xl">
  <div class="p-6 absolute bottom-0 left-0 z-20">
    <h2 class="text-2xl font-bold mb-2">Card title</h2>
  </div>
</div>
