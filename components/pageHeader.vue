<template>
  <div class="PageHeader">
    <img
      class="PageHeader-image"
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
  height: 100%;
  display: grid;
  // justify-content: flex-end;
  // align-items: flex-end;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 150px 1fr;

  h1 {
    font-family: Raleway;
    font-weight: 900;
    letter-spacing: 2px;
    font-size: 48px;
    margin-bottom: 0;
    grid-column: 1 /-1;
    grid-row: 1 / 1;
    text-align: center;
    color: $c-primary;
  }

  .PageHeader-image {
    grid-row: 2 / -1;
    grid-column: 1 / -1;
    background: $c-primary;
  }
}
@include breakpoint(medium) {
  .PageHeader {
    grid-template-rows: 1fr 1fr 1fr;
    padding-right: 5%;
    h1 {
      font-family: Raleway;
      font-weight: 900;
      letter-spacing: 2px;
      font-size: 48px;
      margin-bottom: 0;
      grid-column: 4 /-1;
      grid-row: 2 / 2;
      text-align: right;
    }

    .PageHeader-image {
      grid-row: 1 / -1;
      grid-column: 1 / 4;
    }
  }
}
@include breakpoint(xmedium) {
  .PageHeader {
    .PageHeader-image {
      grid-row: 1 / -1;
      grid-column: 1 / 3;
    }
  }
}
</style>
