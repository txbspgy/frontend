<template>
  <div>
    <div id="weather-v2-plugin-simple"></div>
  </div>
</template>

<script>
export default {
  name: 'Weather',
  mounted() {
    window.WIDGET = {
      CONFIG: {
        modules: '102',
        background: 4,
        tmpColor: '67C23A',
        tmpSize: '14',
        cityColor: '67C23A',
        citySize: '14',
        aqiSize: 16,
        weatherIconSize: 24,
        alertIconSize: '16',
        padding: '10px 10px 10px 10px',
        shadow: '0',
        language: 'zh',
        borderRadius: '30',
        fixed: 'true',
        vertical: 'middle',
        horizontal: 'center',
        right: '120',
        top: 10,
        key: 'ngSIGJSok5'
      }
    }
    // eslint-disable-next-line semi-style
    ;(function (d) {
      const c = d.createElement('link')
      c.rel = 'stylesheet'
      c.href = 'https://apip.weatherdt.com/simple/static/css/weather-simple.css?v=2.0'
      const s = d.createElement('script')
      s.src = 'https://apip.weatherdt.com/simple/static/js/weather-simple-common.js?v=2.0'
      const sn = d.getElementsByTagName('script')[0]
      sn.parentNode.insertBefore(c, sn)
      sn.parentNode.insertBefore(s, sn)
    })(document)
  }
}
</script>
