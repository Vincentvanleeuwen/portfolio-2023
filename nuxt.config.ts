// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from "vite-svg-loader";

export default defineNuxtConfig({
  ssr: true,
  image: {
    provider: "netlify",
    netlify: {
      baseURL: "https://vincreates.netlify.app",
    },
  },
  nitro: {
    preset: "static",
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
          quietDeps: true,
        },
      },
    },
    ssr: {
      noExternal: ["three", "three/examples/jsm/controls/OrbitControls"],
    },
  },
  routeRules: {
    "/contact": { prerender: true },
  },
  future: {
    // allow the schema to resolve compatibilityVersion
    compatibilityVersion: 4,
  },
  experimental: {
    viewTransition: true,
  },
  app: {
    viewTransition: true,
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
