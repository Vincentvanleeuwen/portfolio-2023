<template>
  <div class="NavigationContainer">
    <nav>
      <ul class="Navigation">
        <li><a href="/about">About</a></li>
        <li><a href="/projects">Projects</a></li>
      </ul>
    </nav>
  </div>
</template>
<script setup lang="ts">
const router = useRouter();
const error = ref<string>("");
</script>
<style>
.NavigationContainer {
  position: fixed;
  bottom: 3rem;
  right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
}
.Navigation {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
