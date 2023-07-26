<template>
  <div id="sentinel"></div>
  <div
    class="NavigationContainer"
    :class="{ HomeNavigationContainer: isHome, sticky: isSticky }"
  >
    <nav class="Navigation-desktop">
      <ul class="Navigation">
        <li><NuxtLink to="/">Intro</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/projects">Projects</NuxtLink></li>
        <li><NuxtLink to="/contact">Contact</NuxtLink></li>
      </ul>
    </nav>
    <nav class="Navigation-mobile">
      <div
        class="Navigation-menu"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
      >
        <SvgMenu />
        <span> Menu</span>
      </div>
      <div class="Navigation-overlay" v-show="isMobileMenuOpen">
        <div
          :class="`Navigation-menu ${isMobileMenuOpen ? 'reversed' : ''}`"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
        >
          <SvgClose />
          <span> Close</span>
        </div>
        <ul>
          <li><NuxtLink to="/">Intro</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/projects">Projects</NuxtLink></li>
          <li><NuxtLink to="/contact">Contact</NuxtLink></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import SvgMenu from "~/assets/images/menu.svg?component";
import SvgClose from "~/assets/images/close.svg?component";
const router = useRouter();
const route = useRoute();

const error = ref<string>("");
const isHome = computed(() => router.currentRoute.value.path === "/");

const isSticky = ref(false);
const isMobileMenuOpen = ref(false);

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

  // Observe the sentinel element to check if the navigation should move up.
  const sentinel = document.querySelector("#sentinel");
  if (sentinel) {
    observer.observe(sentinel);
  }

  if (route.path === "/") {
    const arrow = document.querySelector(".router-link-active");
    arrow?.classList.add("router-link-active-home");
  }
  if (route.path.includes("/project")) {
    const arrow = document.querySelector(".router-link-active");
    arrow?.classList.remove("router-link-active-home");
  }
  // Unmount the sentinel observer when the component is unmounted.
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
  position: fixed;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;
  right: 0;
  top: 0;
  width: 100vw;

  @include breakpoint(medium) {
    right: 5%;
    width: auto;
    top: 70vh;
    &.sticky {
      top: 5vh;
      right: 5%;
      transition: all 0.5s ease-in-out;
    }
  }
}

.HomeNavigationContainer {
  right: 8%;
  top: 60vh;
}

.Navigation-mobile {
  display: block;
  @include breakpoint(medium) {
    display: none;
  }
}
.Navigation-desktop {
  display: none;

  @include breakpoint(medium) {
    display: block;
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
}
.Navigation-menu {
  position: absolute;
  margin-top: 48px;
  right: 5%;
  cursor: pointer;
  svg {
    margin-bottom: 4px;
  }
  span {
    font-family: "Raleway", sans-serif;
    font-weight: 700;
  }
  &:hover {
    span,
    svg {
      color: $c-primary;
    }
  }
  &.reversed {
    span,
    svg {
      color: $c-white;
    }
    &:hover {
      span,
      svg {
        color: $c-primary;
      }
    }
  }
}
.Navigation {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
  li a {
    text-decoration: none;
    color: $c-black;
    font-family: "Raleway", sans-serif;
    font-weight: 600;
    position: relative;

    &:hover {
      color: $c-primary;
    }

    .HomeNavigationContainer & {
      letter-spacing: 2px;
      font-size: 16px;
    }
  }
}
.Navigation-overlay {
  // display: flex;
  position: absolute;
  top: 0;
  left: 0;
  background-color: $c-black;
  height: 100dvh;
  width: 100dvw;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100dvh;
    li a {
      text-decoration: none;
      color: $c-white;
      font-family: "Raleway", sans-serif;
      font-size: 48px;
      &:hover {
        color: $c-primary;
      }
    }
  }
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
