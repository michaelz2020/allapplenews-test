/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

module.exports = {
  theme: {
    extend: {
      colors: {
        bgLightGray: '#f9f9f9',
        bgLightGreyDark: '#E6EBEC',
        bgDarkGrey: '#333333',
        bgGrayDarkHover: '#4d4d4d',
        bgDarkGreyDarker: '#1a1a1a',
        accent: '#0000ff',
        accentLight: '#3333ff',
        textDark: '#4d4d4d',
        textMedium: '#666666',
        textLight: '#808080',
      },
      height: {
        card: '33rem',
        cardFeatured: '36rem',
        70: '18rem',
        80: '20rem',
        84: '22rem',
        88: '24rem',
        92: '26rem',
        96: '28rem',
        100: '30rem',
      },
      width: {
        64: '20rem',
        70: '24rem',
        screenShot: '60rem',
      },
      inset: {
        1: '1rem',
      },
      minWidth: {
        sm: '12rem',
        md: '16rem',
        lg: '20rem',
      },
      maxWidth: {
        xxs: '18rem',
        '6xl': '80rem',
        '7xl': '88rem',
        mdScreen: '1440px',
      },
      maxHeight: {
        80: '20rem',
        96: '24rem',
      },
      fontSize: {
        '7xl': '5rem',
      },
    },
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
      serif: ['Cormorant Garamond'],
    },

    boxShadow: {
      stacked: '5px 5px 0 -1px white, 5px 5px black',
      stackedHovered: '0 0 0 -1px, 0 0 0 0 black',
    },
  },
  variants: {
    borderWidth: ['responsive', 'last', 'hover', 'focus'],
    margin: ['responsive', 'odd', 'hover', 'focus'],
    padding: ['responsive', 'first', 'last', 'hover', 'focus'],
    textColor: ['responsive', 'group-hover', 'hover', 'focus'],
  },
  plugins: [require('@tailwindcss/typography')],
  purge: {
    enabled: true,
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      // TypeScript
      'plugins/**/*.ts',
      'nuxt.config.ts',
    ],
  },
}
