<template>
  <div id="sentinel"></div>
  <div
    class="NavigationContainer"
    :class="{ HomeNavigationContainer: isHome, sticky: isSticky }"
  >
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
<script setup lang="ts"></script>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
const router = useRouter();
const route = useRoute();

const error = ref<string>("");
const isHome = computed(() => router.currentRoute.value.path === "/");

const isSticky = ref(false);

onMounted(() => {
  const navMenu = document.querySelector(".NavigationContainer");
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        isSticky.value = false;
      } else {
        isSticky.value = true;
      }
    });
  }, observerOptions);

  // Assume sentinel is available in DOM
  const sentinel = document.querySelector("#sentinel");
  if (sentinel) {
    observer.observe(sentinel);
  }

  console.log("route", route.path);
  if (route.path === "/") {
    const arrow = document.querySelector(".router-link-active");
    arrow.classList.add("router-link-active-home");
  }
  onBeforeUnmount(() => {
    if (sentinel) {
      observer.unobserve(sentinel);
    }
  });
});
</script>

<style lang="scss">
#sentinel {
  position: absolute;
  height: 75vh;
  width: 100vw;
  visibility: hidden;
  user-select: none;
  pointer-events: none;
  top: 0;
}
.NavigationContainer {
  z-index: 100;
  position: fixed;
  right: 5%;
  top: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;
}
.NavigationContainer.sticky {
  top: 5vh;
  right: 5%;
  transition: all 0.5s ease-in-out;
}

.HomeNavigationContainer {
  right: 8%;
  top: 60vh;
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
    font-size: 16px;
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
    width: 38px;
    height: 9px;
  }
}
.router-link-active-home::after {
  animation: slide-loop 2s cubic-bezier(0.65, 0.1, 0.42, 1.56) infinite;
}

@include breakpoint(small) {
  .HomeNavigationContainer {
    top: 70vh;
  }
}

@include breakpoint(xmedium) {
  .HomeNavigationContainer .Navigation li a {
    font-size: 22px;
  }
  .router-link-active::after {
    .HomeNavigationContainer & {
      width: 48px;
      height: 10px;
    }
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
@keyframes slide-loop {
  0% {
    left: 125%;
  }
  50% {
    left: 110%;
  }
  100% {
    left: 125%;
  }
}
@media (prefers-reduced-motion) {
  .router-link-active::after {
    animation: none;
    transition: none;
  }
  .router-link-active-home::after {
    animation: none;
  }
}
</style>
