<template>
  <div
    class="NavigationContainer"
  >
  <img src="/logo.svg" alt="logo" />
  <nav>
    <ul class="Navigation">
      <li><a href="/about">About</a></li>
      <li><a href="/projects">Projects</a></li>
    </ul>
  </nav>
  </div>
</template>
<script setup lang="ts">

const router = useRouter()
const error = ref<string>('')

</script>
<style>

.NavigationContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100vw;
  background-color: #f5f5f5;
}
.Navigation {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>