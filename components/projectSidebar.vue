<template>
  <aside class="ProjectSidebar">
    <div class="ProjectSidebar-container" v-if="props?.techStack.length">
      <h3>Tech stack</h3>
      <div class="ProjectSiderbar-items">
        <div class="ProjectSidebar-item" v-for="item in props?.techStack">
          <a class="ProjectSidebar-link" :href="item?.link" target="_blank">
            <img
              class="ProjectSidebar-image"
              :src="item.image"
              :alt="item.alt"
            />
            <p>{{ item.name }}</p>
          </a>
        </div>
      </div>
    </div>
    <div class="ProjectSidebar-container" v-if="props?.collaborators.length">
      <h3>Collaborators</h3>
      <div class="ProjectSiderbar-items">
        <div class="ProjectSidebar-item" v-for="item in props.collaborators">
          <a class="ProjectSidebar-link" :href="item?.link" target="_blank">
            <img
              class="ProjectSidebar-image"
              :src="item.image"
              :alt="item.alt"
            />
            <p>{{ item.name }}</p>
          </a>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
interface Item {
  name: string;
  image: string;
  link?: string;
  alt?: string; // added this optional prop to match your object structure
}

interface Props {
  techStack: Array<Item>;
  collaborators: Array<Item>;
}

const props = withDefaults(defineProps<Props>(), {
  techStack: () => [],
  collaborators: () => [],
});
</script>

<style lang="scss">
aside.ProjectSidebar {
  position: static;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  top: 2rem;
  column-gap: 2rem;
  margin-bottom: 2rem;

  @include breakpoint(xmedium) {
    position: sticky;
    justify-content: center;
  }
  @include breakpoint(xmedium) {
    float: left;
    justify-content: flex-start;
    flex-direction: column;
  }
}
.ProjectSidebar-container {
  width: 175px;
  min-width: 175px;
  height: auto;
  background-color: $c-white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1rem 2rem;
  margin: 0 0 1rem;
  border-radius: 10px;
  row-gap: 1rem;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
  @include breakpoint(small) {
    width: 175px;
    min-width: 175px;
  }

  @include breakpoint(xmedium) {
    justify-content: flex-start;
    width: 20vh;
  }
}
.ProjectSidebar-item {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 0.5rem;
  p {
    margin-left: 8px;
  }
}
.ProjectSidebar-link {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  text-decoration: none;
  color: $c-black;
  cursor: pointer;
  &:hover {
    color: $c-primary;
  }
}
.ProjectSidebar-image {
  width: 25px;
  height: 25px;
}
</style>
