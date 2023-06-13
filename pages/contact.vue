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
.CardList {
  // @include grid(repeat($grid-columns, 1fr), $grid-gap);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 100vh;
  width: 100vw;
  // grid-template-rows: auto 20%;
}
.Card {
  // grid-row: 1 / 2;
  // grid-column: 3 / 9;
  width: 80%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

button {
  max-height: 30px;
  margin-bottom: 0.5rem;
  max-width: 120px;
}
</style>
