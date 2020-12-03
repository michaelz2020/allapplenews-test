export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'AllAppleNews',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Latest Apple News',
      },
      { name: 'robots', content: 'index,follow' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/allapplenews_favcon.png' },
    ],
    htmlAttrs: {
      lang: 'en',
    },
    noscript: [{ innerHTML: 'This website requires JavaScript.' }],
  },

  generate: {
    fallback: true,
    exclude: [
      '/products/air-tag/',
      '/products/undefined/',
      '/articles/undefined/',
      '/apps/undefined/',
      '/news/undefined/',
    ],
  },

  router: {
    trailingSlash: true,
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [{ src: '@/plugins/youtube.js', ssr: false }, '~/plugins/jsonld'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',

    //Doc: https://sanity.nuxtjs.org/quick-start
    '@nuxtjs/sanity',

    // Doc: https://github.com/nuxt-community/google-fonts-module
    '@nuxtjs/google-fonts',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@ax2/lozad-module',

    //Social Sharing (https://www.npmjs.com/package/vue-social-sharing)
    'vue-social-sharing/nuxt',

    //Robot.txt (https://www.npmjs.com/package/@nuxtjs/robots)
    '@nuxtjs/robots',
  ],

  //Sanity Configuration (https://sanity.nuxtjs.org/)
  sanity: {
    projectId: '8bnexcoe', // string, required
    dataset: 'production', // string, required
    useCdn: true, // boolean, optional, default is false
    imageHelper: false,
    contentHelper: false,
    minimal: true,
  },

  //Google Font Configuration
  googleFonts: {
    families: {
      // 'Source+Sans+Pro': [ 400, 600, 700],
      'Open+Sans': [400, 600, 700],
      'Cormorant+Garamond': true,
    },
    display: 'swap',
  },

  //Robot.txt
  robots: {
    UserAgent: '*',
    Disallow: '/',
    // Sitemap: 'https://allapplenews.com/sitemap.xml',
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ['vue-instantsearch', 'instantsearch.js/es'],
  },
}
