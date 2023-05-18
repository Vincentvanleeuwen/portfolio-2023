<template>
  <div class="PageHeader">
    <h1>{{ props.title }}</h1>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
}
const props = withDefaults(defineProps<Props>(), {
  title: "",
});
</script>

<style lang="scss">
.PageHeader {
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  h1 {
    font-family: Raleway;
    font-weight: 900;
    letter-spacing: 2px;
    font-size: 48px;
    margin-bottom: 0;
  }
}
</style>
