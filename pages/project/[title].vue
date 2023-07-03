<template>
  <div>
    <h1>{{ project?.title }}</h1>
    <p>{{ project?.description }}</p>
  </div>
</template>

<script setup lang="ts">
import { useProjectStore } from "~/stores/project";
definePageMeta({
  layout: "footer",
});
const projectStore = useProjectStore();
const route = useRoute();

let title = Array.isArray(route.params.title)
  ? route.params.title[0]
  : route.params.title;
const project = projectStore.getProject(title.toLowerCase());
</script>

<style scoped>
h1 {
  font-weight: 700;
  font-size: 2rem;
  margin: 0.5em 0;
}
</style>
