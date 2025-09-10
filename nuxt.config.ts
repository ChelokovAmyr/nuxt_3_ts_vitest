import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
    vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  runtimeConfig: {
    apiSecret: process.env.API_SECRET,
    public: {
      apiBase: process.env.API_BASE,
      siteName: process.env.NUXT_PUBLIC_SITE_NAME
    }
  },
  css: ['~/assets/css/main.css'],
  modules: ['@pinia/nuxt'],
    typescript: {
    typeCheck: true
  },
})