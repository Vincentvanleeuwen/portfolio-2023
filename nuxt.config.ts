// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from "vite-svg-loader";

export default defineNuxtConfig({
  ssr: true,
  image: {
    provider: "ipx",
  },
  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: [["defineStore", "definePiniaStore"]],
      },
    ],
    "@nuxtjs/google-fonts",
    "@nuxt/image-edge",
  ],
  css: ["normalize.css/normalize.css"],
  vite: {
    plugins: [svgLoader()],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/style/_globals.scss" as *;`,
        },
      },
    },
  },
  routeRules: {
    "/contact": { prerender: true },
  },
  googleFonts: {
    prefetch: true,
    families: {
      Roboto: true,
      "Josefin+Sans": true,
      Lato: [100, 300],
      Raleway: {
        wght: [300, 700, 900],
        ital: [100],
      },
    },
  },
  runtimeConfig: {
    public: {
      // strapiToken: process.env.NUXT_PUBLIC_STRAPI_SECRET_TOKEN,
    },
  },
});
