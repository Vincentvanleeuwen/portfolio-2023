<template>
  <PageHeader title="Projects" />
  <section>
    <suspense>
      <template #default>
        <section class="Triangle-container">
          <div
            v-for="project in projects"
            :key="project.id"
            class="Triangle"
            @click="$router.push(`project/${project.id}`)"
          >
            <p style="color: white">{{ project.title }}</p>
            <SvgRinus v-if="project.title === 'Rinus'" />
            <SvgMomkai v-else-if="project.title === 'Momkai'" />
            <SvgNFPConnects v-else-if="project.title === 'NFP'" />
            <SvgDEN v-else-if="project.title === 'DEN'" />
            <SvgPraPla v-else-if="project.title === 'PraPla'" />
            <SvgCombinify v-else-if="project.title === 'Combinify'" />
          </div>
        </section>
      </template>

      <template #fallback> Loading... </template>
    </suspense>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
  title: "Projects",
});

import { useProjectStore } from "~/stores/project";
import SvgRinus from "~/assets/images/rinus.svg?component";
import SvgMomkai from "~/assets/images/Momkai.svg?component";
import SvgNFPConnects from "~/assets/images/NFPConnects.svg?component";
import SvgDEN from "~/assets/images/DEN.svg?component";
import SvgPraPla from "~/assets/images/PraPla.svg?component";
import SvgCombinify from "~/assets/images/Combinify.svg?component";

const projectStore = useProjectStore();
const projects = projectStore.projects;
</script>

<style lang="scss">
.Triangle-container {
  // @include grid(repeat($grid-columns, 1fr), $grid-gap);
  display: grid;
  padding-left: 0;
  grid-template-columns: $triangle-width;
  column-gap: $column-gap;
  height: 100vh;
  margin: 0 auto;
  width: $triangle-width;
  @include breakpoint(medium) {
    width: calc(2 * $triangle-width + $column-gap);
    grid-template-columns: repeat(2, $triangle-width);
  }

  @include breakpoint(xlarge) {
    transform: scale(1.5);
    transform-origin: top center;
  }
}
// .Triangle {
//   position: relative;
// }
.Triangle {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: $triangle-width;
  height: $triangle-height;
  background: black;
  clip-path: polygon(0 0, 100% 50%, 0 100%);
  cursor: pointer;

  svg {
    position: absolute;
    width: 120px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  &:nth-child(even) {
    clip-path: polygon(100% 0, 0 50%, 100% 100%);
  }

  &:first-child {
    grid-row: 1 / 2;
    grid-column: 1;
    background: #00aadb;
    svg {
      transform: translate(-75%, -50%);
    }
  }
  &:nth-child(2) {
    margin-top: -120px;
    grid-row: 2 / 3;
    grid-column: 1;
    background: #000000;

    @include breakpoint(medium) {
      margin-top: -175px;
      grid-row: 2 / 3;
      grid-column: 1;
    }
    svg {
      width: 80px;
      transform: translate(-00%, -50%);
    }
  }
  &:nth-child(3) {
    margin-top: 60px;
    grid-row: 2 / 3;
    grid-column: 1;
    background: #480e30;

    @include breakpoint(medium) {
      margin-top: -175px;
      grid-row: 2 / 3;
      grid-column: 2;
    }
    svg {
      width: 150px;
      transform: translate(-60%, -50%);
    }
  }
  &:nth-child(4) {
    margin-top: -120px;
    grid-row: 3;
    grid-column: 1;
    background: #ffe3ed;

    @include breakpoint(medium) {
      margin-top: -175px;
      grid-row: 3;
      grid-column: 2;
    }

    svg {
      transform: translate(-30%, -50%);
    }
  }
  &:nth-child(5) {
    margin-top: -120px;
    grid-row: 4;
    grid-column: 1;
    background: #bfebaf;
    @include breakpoint(medium) {
      margin: 0;
      grid-row: 3 / 4;
      grid-column: 2;
    }
    svg {
      width: 100px;
      transform: translate(-85%, -50%);
    }
  }
  &:last-child {
    margin-top: 60px;
    grid-row: 4;
    grid-column: 1;
    background: #101010;
    @include breakpoint(medium) {
      margin: 0;
      grid-row: 3 / 4;
      grid-column: 1;
    }

    svg {
      position: absolute;
      width: 175px;
      left: 50%;
      top: 50%;
      transform: translate(-38%, -50%);
    }
  }
}

button {
  max-height: 30px;
  margin-bottom: 0.5rem;
  max-width: 120px;
}
</style>
