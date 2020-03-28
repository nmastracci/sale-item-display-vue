<template>
  <div id="app">
    <Header />
    <Stage />
    <Footer />
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

body {
  font-family: "Sulphur Point", sans-serif;
  font-weight: 300;
  background-color: #f5f5f5;
  color: #1e1e1e;
  // chosen text: #2F2F2F
  // unchosen text: #ACACAC // #989898
  // secondary colour? #5A5A5A
}
#app {
  margin: 0;
  padding: 0;
  font-family: "Sulphur Point", Montserrat, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 110rem;
  align-self: center;
}
// Global Utility Classes
.text-bold {
  font-weight: 700;
}
.text-light {
  font-weight: 300;
}
</style>
