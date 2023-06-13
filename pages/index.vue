<template>
  <div class="HomeContainer">
    <div class="ImageContainer">
      <img src="/images/self-portrait.png" alt="Portrait" class="portrait" />
    </div>
    <div class="ContentContainer">
      <h1 class="HomeTitle">Hey! <span class="HomeTitle-icon">👋</span></h1>
      <p class="Description">I'm Vincent van Leeuwen</p>
      <p class="DynamicDescription">
        A <span id="typed">Front End Developer</span>
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from "vue";

definePageMeta({
  layout: "default",
});

interface TypedInstance {
  destroy(): void;
}

type TypedConstructor = {
  new (selector: string, options: object): TypedInstance;
};

let Typed: TypedConstructor | null = null;
let typed = ref<TypedInstance | null>(null);

onMounted(async () => {
  console.log(process.client);

  if (process.client) {
    const module = await import("typed.js");
    Typed = module.default;
    const options = {
      strings: [
        "^1000 TypeScript Trendsetter",
        "SASS Architect",
        "User Interface Craftsman",
        "Creative Web Designer",
        "Responsive Design Advocate",
        "Usability Evangelist",
        "Vue.js Enthusiast",
        "React.js Connoisseur",
        "Progressive Web App Pioneer",
        "Semantic Web Savant",
        "Browser Compatibility Chief",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      smartBackspace: true,
    };
    if (Typed !== null) {
      console.log("timeout");
      typed.value = new Typed("#typed", options);
    }
  }
});

onBeforeUnmount(() => {
  if (process.client) {
    typed.value?.destroy();
  }
});
</script>
<style lang="scss">
/* Sample `apply` at-rules with Tailwind CSS
.HomeContainer {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.HomeContainer {
  display: flex;
  height: 100vh;
  overflow: hidden;
}

.ImageContainer {
  flex: 1;
  background-color: $c-primary-light;
  position: relative;
}
.ImageContainer img {
  max-height: 80%;
  object-fit: contain;
}

.portrait {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  object-fit: cover;
  object-position: bottom;
}

.ContentContainer {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 5%;
  padding-top: 10%;
}

.HomeTitle {
  font-family: "Raleway", sans-serif;
  font-weight: 900;
  font-size: 74px;
  line-height: 96px;
  letter-spacing: 10px;
  margin: 0;
  margin-bottom: 2rem;
  color: $c-primary;
}

.Description,
.DynamicDescription {
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 32px;
  line-height: 50px;
  color: $c-black;
}

#typed {
  padding-left: 0.5rem;
  text-decoration: underline;
}
.HomeTitle-icon {
  display: inline-block;
  animation: wave-animation 1s 1 1s;
  transform-origin: 70% 70%;
}
@keyframes wave-animation {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(14deg);
  }
  20% {
    transform: rotate(-8deg);
  }
  30% {
    transform: rotate(14deg);
  }
  40% {
    transform: rotate(-4deg);
  }
  50% {
    transform: rotate(10deg);
  }
  60% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>
