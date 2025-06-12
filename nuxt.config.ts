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
    preset: "netlify",
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
    head: {
      title: "My Awesome App",
      meta: [
        // Windows tile
        { name: "msapplication-TileColor", content: "#ffffff" },
        { name: "msapplication-TileImage", content: "/mstile-150x150.png" },
        // theme color for mobile
        { name: "theme-color", content: "#ffffff" },
      ],
      link: [
        // PWA manifest
        { rel: "manifest", href: "/site.webmanifest" },
        // Standard favicons
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        { rel: "shortcut icon", href: "/favicon.ico" },
        // iOS touch icon
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        // Android Chrome
        {
          rel: "icon",
          type: "image/png",
          sizes: "192x192",
          href: "/android-chrome-192x192.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "512x512",
          href: "/android-chrome-512x512.png",
        },
      ],
    },
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
