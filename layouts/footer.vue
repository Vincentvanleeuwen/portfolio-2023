<template>
  <Navigation />
  <NuxtPage />
  <Footer />
</template>

<script setup lang="ts">
useHead({
  title: "Vincent van Leeuwen Portfolio",
  meta: [
    {
      name: "description",
      content:
        "Portfolio website from the front end developer Vincent van Leeuwen",
    },
  ],
  link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
  htmlAttrs: {
    lang: "en",
  },
});
</script>

<style lang="scss">
.Container {
  width: 100%;
  height: 100%;
  padding-bottom: 200px;
}
</style>
