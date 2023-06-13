<template>
  <div class="PageHeader">
    <img
      v-if="props.image"
      :src="props.image"
      alt=" a young man sitting in front of a computer screen looking at his computer"
    />
    <h1>{{ props.title }}</h1>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  image: string;
}
const props = withDefaults(defineProps<Props>(), {
  title: "",
  image: "",
});
</script>

<style lang="scss">
.PageHeader {
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding-right: 5%;

  h1 {
    font-family: Raleway;
    font-weight: 900;
    letter-spacing: 2px;
    font-size: 48px;
    margin-bottom: 0;
  }
}
</style>
