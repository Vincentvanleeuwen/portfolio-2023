<template>
  <section class="Skills">
    <h2>Familiar Frameworks and Languages</h2>
    <client-only>
      <TechSphere :techs="flatSkills" />
    </client-only>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import raw from "~/assets/data/skills.json";

type Skill = {
  name: string;
  icon: string;
  link: string;
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
      // you could include category or link in details:
      details: `${item.name} (${category})`,
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
</style>
