<template>
  <section
    class="Skills"
    @mouseover="mouseWithinContainer = false"
    @mouseleave="mouseWithinContainer = true"
  >
    <div
      class="Skills-container"
      v-for="(categories, categoryName, index) in skillData"
      :key="index"
    >
      <h3>{{ categoryName }}</h3>
      <div class="Skills-list">
        <div
          class="Skills-item"
          v-for="(item, key, index) in categories"
          :key="index"
        >
          <div class="Tooltip" :class="{ isActive: item.hoverActive }">
            {{ item.name }}
          </div>
          <a
            tabindex="0"
            :aria-label="item.name"
            :href="item.link"
            target="_blank"
          >
            <img :src="item.icon" :alt="`${item.name} Logo`" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import * as rawSkillData from "../assets/data/skills.json";
const skillData = reactive(rawSkillData.default);
const mouseWithinContainer = ref(false);

// Toggle the tooltips between items
setInterval(() => {
  // Reset hover states
  Object.values(skillData).forEach((category) => {
    category.forEach((item) => {
      item.hoverActive = false;
    });
  });

  // Skip function if user is interacting with element
  if (!mouseWithinContainer.value) return;

  // Enable random hover state
  const randomIndex = (length) => Math.floor(Math.random() * length);
  const getRandomCategory = randomIndex(Object.values(skillData).length);
  const getRandomItem = randomIndex(
    Object.values(skillData)[getRandomCategory].length
  );

  Object.values(skillData)[getRandomCategory][getRandomItem].hoverActive = true;
}, 2000);
</script>

<style lang="scss">
.Skills {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  max-width: 580px;
  margin: 3rem auto !important;

  @include breakpoint(medium) {
    margin-top: 3rem;
  }
}
.Skills-container {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  flex-wrap: nowrap;
  margin-bottom: 3rem;
  width: 100%;

  @include breakpoint(medium) {
    flex-direction: row;
  }

  h3 {
    margin-bottom: 2rem;
    text-transform: capitalize;
    width: 100%;
    border-bottom: 1px solid $c-black;

    @include breakpoint(medium) {
      width: 200px;
      height: 100%;
      margin-right: 1rem;
      border-bottom: none;
    }
  }
}
.Skills-list {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 3rem;
  column-gap: 4rem;

  @include breakpoint(medium) {
    row-gap: 1rem;
  }

  img {
    width: 50px;
    height: 50px;
  }
}

.Skills-item {
  position: relative;
  width: 60px;
  display: flex;
  justify-content: center;

  .Tooltip::before {
    @include breakpoint(medium) {
      content: "";
      display: block;
      width: 0;
      height: 0;
      position: absolute;
      left: 50%;
      bottom: -8px;
      transform: translateX(-50%);
      border-right: 8px solid transparent;
      border-left: 8px solid transparent;
      border-top: 8px solid $c-primary;
    }
  }
  &:hover .Tooltip {
    @include breakpoint(medium) {
      opacity: 1;
    }
  }
}
.Tooltip {
  position: absolute;
  bottom: -32px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 1;
  pointer-events: none;
  font-size: 12px;
  font-family: Roboto;
  font-weight: 900;
  color: $c-black;
  padding: 5% 10%;
  text-align: left;

  @include breakpoint(small) {
    font-size: 11px;
  }
  @include breakpoint(medium) {
    opacity: 0;
    transition: all 0.3s;
    top: -40px;
    bottom: unset;
    pointer-events: none;
    font-size: 16px;
    color: $c-white;
    background-color: $c-primary;
    padding: 5% 10%;
    text-align: center;
  }
  &.isActive {
    opacity: 1 !important;
  }
}
</style>
