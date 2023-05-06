// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: [["defineStore", "definePiniaStore"]],
      },
    ],
  ],
  css: ['normalize.css/normalize.css'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/style/_globals.scss" as *;`,
        },
      },
    },
  },
  runtimeConfig: {
    public: {
      // strapiToken: process.env.NUXT_PUBLIC_STRAPI_SECRET_TOKEN,
    }
  }
})
