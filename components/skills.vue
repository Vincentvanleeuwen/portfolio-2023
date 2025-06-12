<template>
  <section class="Skills">
    <h2>Familiar Frameworks and Languages</h2>
    <client-only>
      <TechSphere :techs="flatSkills" />
    </client-only>

    <!-- Screen‐reader & keyboard only fallback -->
    <ul class="sr-only tech-list">
      <li v-for="tech in flatSkills" :key="tech.name">
        <a :href="tech.link" target="_blank" rel="noopener">
          {{ tech.name }}: {{ tech.description }}
        </a>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import raw from "~/assets/data/skills.json";

type Skill = {
  name: string;
  icon: string;
  link: string;
  description: string;
  hoverActive?: boolean;
};

// 1) The raw JSON is typed as Record<string,Skill[]>
const skillData = raw as Record<string, Skill[]>;

// 2) Flatten into one array
const flatSkills = computed(() =>
  Object.entries(skillData).flatMap(([category, arr]) =>
    arr.map((item) => ({
      name: item.name,
      icon: item.icon,
      link: item.link,
      description: item.description,
    }))
  )
);
</script>

<style scoped lang="scss">
.Skills {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  h2 {
    margin-bottom: 2rem;
  }
}

/* visually hide but keep in accessibility tree */
.sr-only {
  position: absolute !important;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap; /* prevent line-breaks */
  border: 0;
}
</style>
