<template>
  <PageHeader title="About" image="/images/about-header.jpg" />
  <section class="Container">
    <article>
      <h2>Who are you?!</h2>
      <p>
        From a young age, I found my passion in the digital world, beginning
        with creating YouTube backgrounds for amateur e-sport teams. This
        initial interest naturally evolved into a fascination with graphic
        design and ultimately, a love for web design.
      </p>
      <p>
        Possessing a logical mindset and an aptitude for calculus, I ventured
        into JavaScript, creating my first game of 'rock, paper, scissors'. This
        sparked my journey of deeper exploration where I discovered new
        techniques, and I've been on a continuous learning path in the world of
        coding ever since.
      </p>
      <p>
        Over the years, I've had the privilege of working with distinguished
        companies such as Momkai, Gillz, Spont, and Link IT. These
        collaborations allowed me to contribute to high-profile projects like
        KNVB (Rinus, Dugout, Online United), Qmusic, DEN, and NFP.
      </p>
      <p>
        My tenure at various agencies taught me the value of adaptability.
        Present me with a new framework, and I'll thoroughly explore it,
        ensuring its proper and effective application in my projects.
      </p>
      <p>
        My mission is to create websites that are not only performance-optimized
        but also accessible to all users. With an eye for precision, I ensure
        that every design is faithfully translated into its intended final form.
        My love for this craft is boundless and each project is an opportunity
        to create something remarkable.
      </p>
      <h2>Technical Skills</h2>
      <p>
        I have refined my abilities at various agencies, becoming proficient in
        a broad range of frameworks and libraries. I have experience working
        with various languages and frameworks, see below to see specifics. My
        adaptability and expertise enable me to cater to your specific
        requirements and create customized solutions for your project.
      </p>
    </article>
    <section class="Skills">
      <div class="Skills-container">
        <h3>Languages</h3>
        <div class="Skills-list">
          <a href="https://dev.w3.org/html5/spec-LC/" target="_blank">
            <img src="../assets/images/skills/html.svg" alt="HTML5 Logo" />
          </a>
          <img src="../assets/images/skills/css.svg" alt="CSS3 Logo" />
          <img
            src="../assets/images/skills/javascript.svg"
            alt="JavaScript Logo"
          />
          <img
            src="../assets/images/skills/typescript.svg"
            alt="TypeScript Logo"
          />
        </div>
      </div>
      <div class="Skills-container">
        <h3>Backend frameworks</h3>
        <div class="Skills-list">
          <img src="../assets/images/skills/firebase.svg" alt="Firebase Logo" />
          <img src="../assets/images/skills/mongo.svg" alt="MongoDB Logo" />
          <img src="../assets/images/skills/craft.svg" alt="CraftCMS Logo" />
          <img
            src="../assets/images/skills/wordpress.svg"
            alt="Wordpress Logo"
          />
          <img src="../assets/images/skills/node.svg" alt="NodeJS Logo" />
        </div>
      </div>
      <div class="Skills-container">
        <h3>Frontend frameworks</h3>
        <div class="Skills-list">
          <img src="../assets/images/skills/react.svg" alt="React Logo" />
          <img src="../assets/images/skills/vue.svg" alt="Vue Logo" />
          <img src="../assets/images/skills/angular.svg" alt="Angular Logo" />
          <img src="../assets/images/skills/sass.svg" alt="SASS Logo" />
          <img src="../assets/images/skills/next.svg" alt="Next Logo" />
          <img src="../assets/images/skills/nuxt.svg" alt="Nuxt Logo" />
          <img src="../assets/images/skills/graphql.svg" alt="GraphQL Logo" />
          <img src="../assets/images/skills/socketio.svg" alt="SocketIO Logo" />
        </div>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
});
</script>

<style lang="scss">
.Container {
  padding: 0 3rem 8rem;
}
h2,
.Skills {
  max-width: 580px;
  margin: 0 auto;
}

.Skills {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
.Skills-container {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  flex-wrap: nowrap;
  margin-bottom: 3rem;

  h3 {
    margin-bottom: 2rem;
  }
}
.Skills-list {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 1rem;
  column-gap: 4rem;

  img {
    width: 50px;
    height: 50px;
  }
}

@include breakpoint(medium) {
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
    }
  }
}
</style>
