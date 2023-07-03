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
          <a :href="item.link" target="_blank">
            <img :src="item.icon" :alt="`${item.name} Logo`" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const skillData = reactive({
  languages: [
    {
      name: "HTML5",
      link: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
      icon: "/images/skills/html.svg",
      hoverActive: false,
    },
    {
      name: "CSS3",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      icon: "/images/skills/css.svg",
      hoverActive: false,
    },
    {
      name: "JavaScript",
      link: "https://developer.mozilla.org/en/JavaScript",
      icon: "/images/skills/javascript.svg",
      hoverActive: false,
    },
    {
      name: "TypeScript",
      link: "https://www.typescriptlang.org/",
      icon: "/images/skills/typescript.svg",
      hoverActive: false,
    },
  ],
  frontend: [
    {
      name: "React",
      link: "https://react.dev/",
      icon: "/images/skills/react.svg",
      hoverActive: false,
    },
    {
      name: "Vue",
      link: "https://vuejs.org/",
      icon: "/images/skills/vue.svg",
      hoverActive: false,
    },
    {
      name: "Angular",
      link: "https://angular.io/",
      icon: "/images/skills/angular.svg",
      hoverActive: false,
    },
    {
      name: "Sass",
      link: "https://sass-lang.com/",
      icon: "/images/skills/sass.svg",
      hoverActive: false,
    },
    {
      name: "Next",
      link: "https://nextjs.org/",
      icon: "/images/skills/next.svg",
      hoverActive: false,
    },
    {
      name: "Nuxt",
      link: "https://nuxt.com/",
      icon: "/images/skills/nuxt.svg",
      hoverActive: false,
    },
    {
      name: "GraphQL",
      link: "https://graphql.org/",
      icon: "/images/skills/graphql.svg",
      hoverActive: false,
    },
    {
      name: "SocketIO",
      link: "https://socket.io/",
      icon: "/images/skills/socketio.svg",
      hoverActive: false,
    },
  ],
  backend: [
    {
      name: "Firebase",
      link: "https://firebase.google.com/",
      icon: "/images/skills/firebase.svg",
      hoverActive: false,
    },
    {
      name: "MongoDB",
      link: "https://www.mongodb.com/",
      icon: "/images/skills/mongo.svg",
      hoverActive: false,
    },
    {
      name: "CraftCMS",
      link: "https://craftcms.com/",
      icon: "/images/skills/craft.svg",
      hoverActive: false,
    },
    {
      name: "Wordpress",
      link: "https://wordpress.com/",
      icon: "/images/skills/wordpress.svg",
      hoverActive: false,
    },
    {
      name: "Node",
      link: "https://nodejs.org/en",
      icon: "/images/skills/node.svg",
      hoverActive: false,
    },
  ],
});
const mouseWithinContainer = ref(false);

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
}, 3000);
</script>

<style lang="scss">
.Skills {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  max-width: 580px;
  margin: 0 auto;
}
.Skills-container {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  flex-wrap: nowrap;
  margin-bottom: 3rem;
  width: 100%;

  h3 {
    margin-bottom: 2rem;
    text-transform: capitalize;
    width: 100%;
    border-bottom: 1px solid $c-black;
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

  img {
    width: 50px;
    height: 50px;
  }
}

.Skills-item {
  position: relative;
}
.Tooltip {
  position: absolute;
  bottom: -32px;
  left: 0;
  opacity: 1;
  pointer-events: none;
  font-family: Roboto;
  font-weight: 900;
  color: $c-black;
  padding: 5% 10%;
  text-align: left;
}

@include breakpoint(medium) {
  .Tooltip.isActive {
    opacity: 1 !important;
  }
  .Skills {
    margin-top: 3rem;
  }
  .Skills-container {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: row;
    flex-wrap: nowrap;
    margin-bottom: 3rem;

    h3 {
      width: 200px;
      height: 100%;
      margin-right: 1rem;
      border-bottom: none;
    }
  }
  .Skills-list {
    row-gap: 1rem;
  }
  .Skills-item .Tooltip {
    opacity: 0;
    transition: all 0.3s;
    top: -40px;
    bottom: unset;
    left: 50%;
    transform: translateX(-50%);
    pointer-events: none;
    color: $c-white;
    background-color: $c-primary;
    padding: 5% 10%;
    text-align: center;
  }
  .Skills-item:hover .Tooltip {
    opacity: 1;
  }
  .Skills-item .Tooltip::before {
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
</style>
