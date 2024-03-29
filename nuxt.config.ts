// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from "vite-svg-loader";

export default defineNuxtConfig({
  ssr: true,
  image: {
    provider: "netlify",
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
});
