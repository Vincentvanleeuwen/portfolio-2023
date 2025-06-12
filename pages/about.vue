<template>
  <PageHeader title="About" image="/images/about-header.webp" />
  <section id="maincontent" class="Container">
    <article>
      <h2>Who are you?!</h2>
      <p>
        I'm Vincent van Leeuwen, a Front-end Developer with a passion for
        merging performance and accessibility in web design. My drive is to
        create digital platforms that are not only finely tuned for speed, but
        inclusively crafted to be user-friendly for all.
      </p>
      <p>
        I found my passion in the digital world, beginning with creating YouTube
        backgrounds for amateur e-sport teams. This initial interest naturally
        evolved into a fascination with graphic design and ultimately, a love
        for web design.
      </p>
      <p>
        Possessing a logical mindset, I ventured into JavaScript, creating my
        first game of 'rock, paper, scissors'.This sparked my journey to
        discover new techniques and continue to learn about the world of coding.
      </p>
      <p>
        Over the years, I've had the privilege of working with distinguished
        companies such as Momkai, Gillz, Spont, and Link IT. These
        collaborations allowed me to contribute to high-profile projects like
        KNVB (Rinus, Dugout, Online United), Qmusic, DEN, and NFP.
      </p>
      <p>
        My time at various agencies taught me the value of adaptability. Present
        me with a new framework, and I'll thoroughly explore it, ensuring its
        proper and effective application in any projects.
      </p>
      <p>
        My mission is to create websites that are not only performance-optimized
        but also accessible to all users. With an eye for precision, I ensure
        that every design is faithfully translated into its intended final form.
        My love for this craft is boundless and each project is an opportunity
        to create something remarkable.
      </p>
      <h2 class="Rotated">Technical Skills</h2>
      <p>
        I have experience working with various languages and frameworks, see
        below to see specifics. My adaptability and expertise enable me to cater
        to your specific requirements and create customized solutions for your
        project.
      </p>
    </article>
    <Skills />
  </section>
</template>

<script setup lang="ts">
import animateElement from "~/utils/animateElement";

definePageMeta({
  layout: "footer",
  viewTransition: true,
});

onMounted(() => {
  const subtitles = document.querySelectorAll(".Container article h2");
  const paragraphs = document.querySelectorAll(".Container article p");
  animateElement(subtitles);
  animateElement(paragraphs);
});
</script>

<style lang="scss" scoped>
.Container {
  padding: 0 1.5rem 8rem;

  @include breakpoint(medium) {
    padding: 0 3rem 8rem;
  }
}
article {
  position: relative;
  max-width: 580px;
  margin: 0 auto;
  padding-top: 0;
}

h2 {
  position: relative;
  opacity: 0;
  transition: all 0.5s ease-out; /* Transition effect for the animation */
  transform: translateY(100px);
}

p {
  opacity: 0;
  transition: all 0.8s ease-in-out;

  &:not(:last-of-type) {
    margin-bottom: 2rem;
  }
}
.animate-in {
  opacity: 1; /* When the animate-in class is added, the subtitles will become visible */
  transform: translateY(0px);
}
h2::before {
  content: "";
  z-index: -1;
  position: absolute;
  width: calc($triangle-width/2.5);
  height: calc($triangle-height/2.5);
  overflow: hidden;
  clip-path: polygon(100% 0, 0 50%, 100% 100%);
  background-color: $c-primary-light;
  transform: translate(32px, -38px);
  transition: all 0.2s ease-in-out;
  opacity: inherit;
}
h2.Rotated::before {
  transform: rotate(160deg) translate(-70px, 45px);
}

@include breakpoint(xmedium) {
  h2:first-of-type {
    position: absolute;
    top: -100px;
    right: 100px;
    margin: 0;
  }
  article {
    padding-top: 64px;
  }
}
</style>
