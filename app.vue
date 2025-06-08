<template>
  <NuxtLayout>
    <Navigation />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

if (typeof document !== "undefined" && "startViewTransition" in document) {
  router.beforeEach((to, from, next) => {
    document.startViewTransition(() => next());
  });
}
</script>
