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
import Header from './components/Header.vue';
import Stage from './components/Stage.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Stage,
    Footer
  },
  computed: {
    itemId() {
      return this.$store.state.itemId;
    }
  },
  created() {
    this.$store.dispatch('getItem');
  },
  watch: {
    $route(to) {
      if (this.$store.state.itemId !== to.params.id) {
        this.$store
          .dispatch('updateItemId', to.params.id)
          .then(() => this.$store.dispatch('getItem'));
      }
    }
  }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Spartan:200,500,900&display=swap');
@import './scss/_variables.scss';
/*
// GLOBAL UTILITY CLASSES
*/
.text-bold {
  font-weight: 900;
}
.text-light-weight {
  font-weight: 200;
}
.text-light-colour {
  color: $main-text-color;
}
.pointer {
  cursor: pointer;
}
.text-hover {
  transition: all 0.2s ease;
  &:hover {
    font-weight: 900;
  }
}
/* */

body {
  font-family: $font-family;
  font-weight: 500;
  background-color: #f5f5f5;
}
#app {
  font-family: $font-family;
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
  background-color: $dark-text-color;
  width: 6rem;
}
</style>
