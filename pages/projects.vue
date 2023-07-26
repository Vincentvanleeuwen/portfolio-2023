<template>
  <PageHeader title="Projects" />
  <section id="maincontent">
    <section class="Triangle-container">
      <div
        v-for="project in projects"
        :key="project.id"
        class="Triangle"
        @click="$router.push(`project/${project.title.toLowerCase()}`)"
        :aria-label="`Open the ${project.title} project`"
        tabindex="0"
      >
        <div class="Triangle-inner">
          <SvgRinus v-if="project.title === 'KNVB Rinus'" />
          <SvgMomkai v-else-if="project.title === 'Momkai'" />
          <SvgNFPConnects v-else-if="project.title === 'NFP'" />
          <SvgDEN v-else-if="project.title === 'DEN'" />
          <SvgPraPla v-else-if="project.title === 'PraPla'" />
          <SvgCombinify v-else-if="project.title === 'Combinify'" />
        </div>
        <span class="Triangle-button"> Read about {{ project.title }} </span>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
  title: "Projects",
});
import animateElement from "~/utils/animateElement";

import { useProjectStore } from "~/stores/project";
import SvgRinus from "~/assets/images/rinus.svg?component";
import SvgMomkai from "~/assets/images/Momkai.svg?component";
import SvgNFPConnects from "~/assets/images/NFPConnects.svg?component";
import SvgDEN from "~/assets/images/DEN.svg?component";
import SvgPraPla from "~/assets/images/PraPla.svg?component";
import SvgCombinify from "~/assets/images/Combinify.svg?component";

const projectStore = useProjectStore();
const projects = projectStore.projects;

onMounted(() => {
  const triangles = document.querySelectorAll(".Triangle");
  animateElement(triangles);
});
</script>

<style lang="scss">
.Triangle-container {
  display: grid;
  padding-left: 0;
  grid-template-columns: $triangle-width;
  column-gap: $column-gap;
  margin: 0 auto;
  width: $triangle-width;
  padding-bottom: 100px;

  @include breakpoint(medium) {
    width: calc(2 * $triangle-width + $column-gap);
    grid-template-columns: repeat(2, $triangle-width);
  }

  @include breakpoint(xlarge) {
    transform: scale(1.5);
    transform-origin: top center;
  }
}
.Triangle {
  position: relative;
  width: $triangle-width;
  height: $triangle-height;
  overflow: hidden;
  opacity: 0;
  transform: translateY(100px);
  clip-path: polygon(0 0, 100% 50%, 0 100%);
  cursor: pointer;
  transition: all 0.5s cubic-bezier(1, -0.03, 0.83, 0.67);
  &:nth-child(even) {
    clip-path: polygon(100% 0, 0 50%, 100% 100%);
  }
  &:first-child {
    grid-row: 1 / 2;
    grid-column: 1;
    background: url("~/assets/images/rinus-polygon.png") center center no-repeat;
    background-size: contain;
    svg {
      transform: translate(-75%, -50%);
    }
    .Triangle-inner {
      background: #00aadb;
    }
    &:before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-image: linear-gradient(to bottom right, $c-black, $c-black);
      opacity: 0.6;
    }
  }
  &:nth-child(2) {
    margin-top: -120px;
    grid-row: 2 / 3;
    grid-column: 1;
    background: url("~/assets/images/momkai-polygon.png") no-repeat;
    background-size: contain;
    transition-delay: 0.2s;

    @include breakpoint(medium) {
      margin-top: -130px;
      grid-row: 2 / 3;
      grid-column: 1;
    }
    svg {
      width: 80px;
      transform: translate(-00%, -50%);
    }
    .Triangle-inner {
      background: #000000;
    }
    &:before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-image: linear-gradient(to bottom right, $c-black, $c-black);
      opacity: 0.6;
    }
  }
  &:nth-child(3) {
    margin-top: 60px;
    grid-row: 2 / 3;
    grid-column: 1;
    background: url("~/assets/images/nfp-polygon.png") center center no-repeat;
    background-size: contain;
    transition-delay: 0.4s;
    @include breakpoint(medium) {
      margin-top: -130px;
      grid-row: 2 / 3;
      grid-column: 2;
    }
    svg {
      width: 150px;
      transform: translate(-60%, -50%);
    }
    .Triangle-inner {
      background: #480e30;
    }
    &:before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-image: linear-gradient(to bottom right, $c-black, $c-black);
      opacity: 0.6;
    }
  }
  &:nth-child(4) {
    margin-top: -120px;
    grid-row: 3;
    grid-column: 1;
    background: url("~/assets/images/den-polygon.png") center center no-repeat;
    background-size: contain;
    transition-delay: 0.5s;

    @include breakpoint(medium) {
      margin-top: -130px;
      grid-row: 3;
      grid-column: 2;
    }

    svg {
      transform: translate(-30%, -50%);
    }
    .Triangle-inner {
      background: #ffe3ed;
    }
    &:before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-image: linear-gradient(to bottom right, $c-black, $c-black);
      opacity: 0.6;
    }
  }
  &:nth-child(5) {
    margin-top: -120px;
    grid-row: 4;
    grid-column: 1;
    background: url("~/assets/images/prapla-polygon.png") center center
      no-repeat;
    background-size: contain;
    transition-delay: 0.6s;

    @include breakpoint(medium) {
      margin-top: 40px;
      grid-row: 3 / 4;
      grid-column: 2;
    }
    svg {
      width: 100px;
      transform: translate(-85%, -50%);
    }
    .Triangle-inner {
      background: #bfebaf;
    }
    &:before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-image: linear-gradient(to bottom right, $c-black, $c-black);
      opacity: 0.6;
    }
  }
  &:last-child {
    margin-top: 60px;
    grid-row: 4;
    grid-column: 1;
    background: url("~/assets/images/combinify-polygon.png") center center
      no-repeat;
    background-size: contain;
    transition-delay: 0.8s;

    @include breakpoint(medium) {
      margin-top: 40px;
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
    .Triangle-inner {
      background: #101010;
    }
    &:before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-image: linear-gradient(to bottom right, $c-black, $c-black);
      opacity: 0.6;
    }
  }
}

.Triangle-inner {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 100%;
  transition: all 0.5s cubic-bezier(1, -0.03, 0.83, 0.67);
  background: rgb(224, 229, 234);
  z-index: 2;

  svg {
    position: absolute;
    width: 120px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}

.Triangle:nth-child(odd):hover .Triangle-inner {
  transform: translateX(100%);
}
.Triangle:nth-child(even):hover .Triangle-inner {
  transform: translateX(-100%);
}
.Triangle-button {
  position: absolute;
  white-space: nowrap;
  font-family: Raleway;
  font-weight: 800;
  color: $c-white;
  z-index: 0;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-decoration: underline;
  text-underline-offset: 2px;
  cursor: pointer;
}

.animate-in {
  opacity: 1; /* When the animate-in class is added, the triangles will become visible */
  transform: translateY(0px);
}
</style>
