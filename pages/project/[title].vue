<template>
  <div aria-hidden class="Triangle-background">
    <div
      class="Triangle Project-triangle"
      :style="`background: ${project?.color}`"
      v-for="i in 6"
    ></div>
  </div>
  <article class="Project">
    <h1 class="Project-title">{{ project?.title }}</h1>
    <a :href="project?.link" class="CallToAction">View {{ project?.title }}</a>
    <img
      class="Project-headerImage"
      src="/images/rinus-macbook.png"
      alt="placeholder image"
    />
    <div class="Project-stack">
      <h3>Tech stack</h3>
      <div class="Project-stackItem">
        <img
          class="Project-stackImage"
          src="/images/skills/graphql.svg"
          alt="placeholder image"
        />
        <p>GraphQL</p>
      </div>
    </div>
    <div class="Project-stakeholders"></div>
    <div class="Project-content">
      <p>{{ project?.description }}</p>
      <h2 class="Project-subTitle">My Role</h2>
      <p>{{ project?.role }}</p>
      <h2 class="Project-subTitle">Challenges</h2>
      <p>{{ project?.challenges }}</p>
      <h2 class="Project-subTitle">Learnings</h2>
      <p>{{ project?.learnings }}</p>
      <h2 class="Project-subTitle">Conclusion</h2>
      <p>{{ project?.conclusion }}</p>
      <div class="Project-buttonContainer">
        <a :href="project?.link" class="CallToAction"
          >View {{ project?.title }}</a
        >
        <NuxtLink class="CallToAction" to="/contact">Next Project</NuxtLink>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { useProjectStore } from "~/stores/project";
definePageMeta({
  layout: "footer",
});
const projectStore = useProjectStore();
const route = useRoute();

let title = Array.isArray(route.params.title)
  ? route.params.title[0]
  : route.params.title;
const project = projectStore.getProject(title.toLowerCase());
</script>

<style lang="scss" scoped>
.Project {
  padding: 2rem 3rem 4rem;
}

.Triangle-background {
  position: absolute;
  top: -50vh;
  left: 0;
  width: 100%;
  height: 195vh;
  z-index: -1;
  overflow: hidden;
}
.Triangle.Project-triangle::before {
  background-image: none;
}
.Triangle.Project-triangle {
  margin-top: 150px;

  position: relative;
  opacity: 0.1;
  transform: scale(2.6);
  clip-path: polygon(100% 0, 0 50%, 100% 100%);

  &:nth-child(even) {
    clip-path: polygon(0 0, 100% 50%, 0 100%);
  }
}

.Project-headerImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin: 6rem 0 2rem;
}
.Project-stack {
  width: 150px;
  height: auto;
  background-color: $c-white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.Project-stackItem {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
.Project-stackImage {
  width: 25px;
  height: 25px;
}
.Project-subTitle {
  font-family: "Raleway";
  font-weight: 900;
  font-size: 2rem;
  margin: 0.5em 0;
}
.Project-title {
  font-family: "Raleway";
  font-weight: 900;
  font-size: 48px;
  text-align: left;
  margin-bottom: 1rem;
}
p {
  white-space: pre-line;
}
.Project-content {
  max-width: 580px;
  margin: 0 auto;
  padding-bottom: 150px;
}
.Project-subTitle {
  margin: clamp(5rem, 3.5714285714285716rem + 7.142857142857142vw, 10rem) 0;
  &::before {
    content: "";
    z-index: -1;
    position: absolute;
    width: calc($triangle-width/2.5);
    height: calc($triangle-height/2.5);
    overflow: hidden;
    clip-path: polygon(100% 0, 0 50%, 100% 100%);
    background-color: $c-primary-light;
    transform: translate(32px, -34px);
  }
  &:first-of-type {
    &::before {
      transform: translate(-40px, -34px) rotate(180deg);
    }
  }
  &:nth-of-type(2) {
    &::before {
      transform: translate(90px, -34px);
    }
  }
  &:nth-of-type(3) {
    &::before {
      transform: translate(50px, -58px) rotate(160deg);
    }
  }
  &:nth-of-type(4) {
    &::before {
      transform: translate(50px, -48px) rotate(90deg);
    }
  }
}
.Project-buttonContainer {
  display: flex;
  justify-content: center;
  column-gap: 2rem;
  .CallToAction:last-child {
    background-color: $c-primary;
    color: $c-white;
  }
}
</style>
