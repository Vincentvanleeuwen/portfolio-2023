<template>
  <section>
    <suspense>
      <template #default> </template>

      <template #fallback> Loading... </template>
    </suspense>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
});
</script>

<style lang="scss">
// hello
</style>
