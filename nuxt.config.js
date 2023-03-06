export default {
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'CityGroup',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'CityGroup' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/style.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/$api.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: ['~/components/', { path: '~/components/base/', prefix: 'base'}],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    //https://www.npmjs.com/package/@nuxtjs/svg
    "@nuxtjs/svg",
  ],

  styleResources: {
    scss: ['./assets/css/style.scss'],
    hoistUseStatements: true,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    "@nuxtjs/i18n",
    '@nuxtjs/style-resources',
  ],

  i18n: {
    langDir: '~/locales/',
    locales: [
      { code: 'uk', name: 'UK', file: 'uk.js' },
    ],
    defaultLocale: 'uk',
    vueI18nLoader: true,
    vueI18n: {
      fallbackLocale: 'uk',
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.API_URL,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
}
