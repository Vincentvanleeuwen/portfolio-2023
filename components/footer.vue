<template>
  <div class="FooterContainer">
    <h3>Let’s connect</h3>
    <p>
      If you're looking for a skilled and enthusiastic web designer and
      developer who is eager to contribute to your company's success, I would be
      thrilled to discuss how my expertise can benefit your business. Please
      feel free to reach out, and let's create something extraordinary together.
    </p>
    <NuxtLink class="CallToAction" to="/contact">Get in touch</NuxtLink>
  </div>
</template>
<script setup lang="ts"></script>

<style lang="scss">
.FooterContainer {
  background-color: $c-black;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 15% 3rem 20%;
  overflow: hidden;

  h3 {
    font-family: "Raleway";
    font-weight: 900;
    font-size: 3rem;
    font-size: clamp(3rem, 2.7142857142857144rem + 1.4285714285714286vw, 4rem);
    color: $c-white;
  }
  p {
    color: $c-white;
    font-family: "Roboto";
    font-weight: 500;
    max-width: 580px;
    text-align: center;
  }
}

.CallToAction {
  background-color: $c-cta;
  padding: 12px 16px;
  font-family: "Raleway";
  font-weight: 900;
  color: $c-black;
  text-decoration: none;
  font-size: 20px;
}
@include breakpoint(medium) {
  .FooterContainer {
    padding: 5% 0 10%;

    p {
      text-align: left;
    }
  }
}
</style>
