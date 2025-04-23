export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],

  modules: [
    '@vueuse/motion/nuxt',
    // other modules if any
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  build: {
    transpile: ['vue-countup-v3']
  },

  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css',
          crossorigin: 'anonymous'
        }
      ]
    }
  },

  compatibilityDate: '2025-04-23'
})