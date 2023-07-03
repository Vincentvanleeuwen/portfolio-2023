<template>
  <div class="HomeContainer">
    <div class="ImageContainer">
      <img src="/images/self-portrait.png" alt="Portrait" class="Portrait" />
      <img
        src="/images/self-portrait-mobile.png"
        alt="Portrait"
        class="Portrait-mobile"
      />
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
  flex-direction: column-reverse;
  height: 100dvh;
  overflow: hidden;
}

.ImageContainer {
  flex: 0.5;
  background-color: $c-primary-light;
  position: relative;
}
.ImageContainer img {
  width: 100%;
  max-height: 90%;
  object-fit: contain;
  margin-left: -15%;
}

.Portrait,
.Portrait-mobile {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  object-fit: cover;
  object-position: bottom;
}
.Portrait {
  display: none;
}
.Portrait-mobile {
  display: block;
}

.ContentContainer {
  flex: 0.4;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-left: 5%;
}

.HomeTitle {
  font-family: "Raleway", sans-serif;
  font-weight: 900;
  font-size: 3rem;
  font-size: clamp(
    3rem,
    2.5357142857142856rem + 2.3214285714285716vw,
    4.625rem
  );
  line-height: 96px;
  letter-spacing: 0.125rem;
  letter-spacing: clamp(
    0.125rem,
    -0.01785714285714285rem + 0.7142857142857143vw,
    0.625rem
  );
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
  font-size: 1rem;
  font-size: clamp(1rem, 0.7142857142857143rem + 1.4285714285714286vw, 2rem);
  line-height: 1.5rem;
  line-height: clamp(1.5rem, 1.0714285714285714rem + 2.142857142857143vw, 3rem);
  color: $c-black;
  margin: 0;
}

#typed {
  padding-left: 0.5rem;
  text-decoration: underline;
}
.HomeTitle-icon {
  display: inline-block;
  animation: wave-animation 10s infinite;
  transform-origin: 70% 70%;
}

@include breakpoint(xsmall) {
  .ImageContainer img {
    width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
}

@include breakpoint(medium) {
  .ImageContainer {
    flex: 1.2;
    background-color: $c-primary-light;
    position: relative;
  }
  .ImageContainer img {
    max-height: 100%;
    width: 100%;
    margin-left: 0;
  }

  .ContentContainer {
    flex: 1;
    padding-top: 10%;
  }
}
@include breakpoint(xmedium) {
  .ContentContainer {
    align-items: flex-start;
  }
  .Portrait-mobile {
    display: none;
  }
  .Portrait {
    display: block;
  }
  .HomeContainer {
    flex-direction: row;
  }
}

@keyframes wave-animation {
  0% {
    transform: rotate(0deg);
  }
  2% {
    transform: rotate(14deg);
  }
  4% {
    transform: rotate(-8deg);
  }
  8% {
    transform: rotate(14deg);
  }
  12% {
    transform: rotate(-4deg);
  }
  16% {
    transform: rotate(10deg);
  }
  20% {
    transform: rotate(0deg);
  }
  24% {
    transform: rotate(0deg);
  }
}
</style>
