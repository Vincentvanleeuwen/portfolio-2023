<template>
  <div class="Container">
    <Navigation />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.Container {
  padding: 0 2rem;

  @include breakpoint(medium) {
    padding: 0 4rem;
  }
}
</style>
