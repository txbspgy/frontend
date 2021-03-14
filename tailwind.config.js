const colors = require('tailwindcss/colors')
module.exports = {
  darkMode: false,
  theme: {
    minHeight: {
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%'
    },
    extend: {
      colors: {
        primary: '#21CFF3',
        secondary: '#ffe18d',
        brand: '#ff5900',
        transparent: 'transparent',
        current: 'currentColor'
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            a: {
              transition: 'ease-in-out .15s',
              'text-decoration': 'none',
              color: theme('colors.indigo.700'),
              '&:hover': {
                color: theme('colors.gray.700')
              }
            }
          }
        }
      })
    }
  },
  variants: {
    scale: ['responsive', 'hover', 'focus', 'focus-within'],
    extend: {
      borderColor: ['responsive', 'active', 'hover', 'focus', 'focus-within'],
      borderRadius: ['responsive', 'active'],
      borderWidth: ['responsive', 'hover', 'focus'],
      textColor: ['responsive', 'hover', 'focus', 'active'],
      backgroundColor: ['responsive', 'hover', 'focus', 'active'],
      backgroundImage: ['responsive', 'hover', 'focus'],
      opacity: ['responsive', 'hover', 'focus', 'disabled'],
      translate: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
      lineClamp: ['hover'],
      placeholderColor: ['hover', 'active'],
      gridRow: ['responsive', 'hover'],
      gridColumn: ['responsive', 'hover'],
      gridAutoFlow: ['hover', 'focus'],
      placeItems: ['hover', 'focus'],
      ringOffsetColor: ['hover', 'focus', 'active'],
      ringOffsetWidth: ['hover', 'focus', 'active'],
      boxShadow: ['responsive', 'hover', 'focus', 'focus-within'],
      scale: ['responsive', 'hover', 'focus', 'group-hover'],
      transitionProperty: ['hover', 'focus']
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp')
  ],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}'
    ]
  }
}
