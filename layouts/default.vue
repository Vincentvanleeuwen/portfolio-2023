<template>
  <a href="#maincontent" class="SkipLink">Skip to content</a>
  <Navigation />
  <NuxtPage />
</template>

<script setup lang="ts"></script>

<style lang="scss">
.Container {
  width: 100%;
  height: 100%;
  padding-bottom: 200px;
}
.SkipLink {
  position: absolute;
  top: -40px;
  left: 0;
  padding: 10px;
  background-color: $c-black;
  color: $c-white;
  text-decoration: none;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  z-index: 1000;
  &:focus {
    opacity: 1;
    top: 0;
  }
}
button,
a,
input,
textarea,
select,
strong,
span,
h1,
h2,
h3,
h4,
h5 {
  &:focus {
    outline: none !important;
    border: 1px solid $c-primary;
  }
}
</style>
