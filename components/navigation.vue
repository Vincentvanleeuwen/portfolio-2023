<template>
  <div class="NavigationContainer" :class="{ HomeNavigationContainer: isHome }">
    <nav>
      <ul class="Navigation">
        <li><NuxtLink to="/">Intro</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/projects">Projects</NuxtLink></li>
        <li><NuxtLink to="/contact">Contact</NuxtLink></li>
      </ul>
    </nav>
  </div>
</template>
<script setup lang="ts">
const router = useRouter();
const error = ref<string>("");
const isHome = computed(() => router.currentRoute.value.path === "/");
</script>
<style lang="scss">
.NavigationContainer {
  position: fixed;
  bottom: 3rem;
  right: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.HomeNavigationContainer {
  right: 8%;
}
.Navigation {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
}
.Navigation li a {
  text-decoration: none;
  color: $c-black;
  font-family: "Raleway", sans-serif;
  font-weight: 600;
  position: relative;

  .HomeNavigationContainer & {
    letter-spacing: 2px;
    font-size: 28px;
  }
}

.router-link-active::after {
  position: absolute;
  top: 50%;
  left: 125%;
  transform: translateY(-50%);
  content: "";
  display: inline-block;
  width: 43.33px;
  height: 10px;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 78 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='12' y='7' width='66' height='4' fill='%230B0B0B'/%3E%3Cpath d='M-3.93402e-07 9L13.5 1.20577L13.5 16.7942L-3.93402e-07 9Z' fill='%230B0B0B'/%3E%3C/svg%3E%0A");
  background-size: contain;
  background-repeat: no-repeat;
  animation: slide-in 1s cubic-bezier(0.65, 0.1, 0.42, 1.56) forwards;
  .HomeNavigationContainer & {
    width: 78px;
    height: 18px;
  }
}

@keyframes slide-in {
  0% {
    left: 300%;
  }
  100% {
    left: 125%;
  }
}
</style>
