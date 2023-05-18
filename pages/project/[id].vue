<template>
  <div>
    <h1>{{ projectTitle }}</h1>
    <p>{{ projectDescription }}</p>
  </div>
</template>

<script setup lang="ts">
import { useProjectStore } from "~/stores/project";
import { Project } from "~/types/project";
definePageMeta({
  layout: "default",
});
const projectStore = useProjectStore();
const router = useRouter();
console.log(router);
// const id = router.params.id as number
let projectTitle: string;
let projectDescription: string;
console.log(projectStore);

onMounted(() => {
  // if (Object.keys(userStore.user).length === 0 && !localStorage?.getItem('token')) {
  //   router.push('/signup')
  // }
  projectTitle = projectStore.projects[1].title;
  projectDescription = projectStore.projects[1].description;
});
</script>

<style scoped>
h1 {
  font-weight: 700;
  font-size: 2rem;
  margin: 0.5em 0;
}
</style>
