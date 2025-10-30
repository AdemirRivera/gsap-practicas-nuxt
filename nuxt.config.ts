export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app: {
    head: { title: 'GSAP Test' }
  },

  modules: ['@nuxtjs/tailwindcss']
})