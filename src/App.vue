<template>
  <div id="app">
    <Header />
    <div class="grid-container">
      <div id="style-block"></div>
      <Stage />
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Stage from "./components/Stage.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Stage,
    Footer
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Sulphur+Point:300,400,700&display=swap");
@import "./scss/_variables.scss";
/*
// GLOBAL UTILITY CLASSES
*/
.text-bold {
  font-weight: 700;
}
.text-light-weight {
  font-weight: 300;
}
.text-light-colour {
  color: $main-text-color;
}
.pointer {
  cursor: pointer;
}
/* */

body {
  font-family: "Sulphur Point", sans-serif;
  font-weight: 400;
  background-color: #f5f5f5;
}
#app {
  font-family: "Sulphur Point", Montserrat, sans-serif;
  color: $main-text-color;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(13, 7.5rem);
  grid-template-rows: repeat(10, 6.5rem);
  margin: 0 auto;
  padding-top: 6rem;
}
#style-block {
  grid-row: 1 / span 6;
  grid-column: 1/3;
  justify-self: end;
  background-color: #090c10;
  width: 6rem;
}
</style>
