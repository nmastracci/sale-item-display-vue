<template>
  <div id="stage">
    <div class="navigation">
      <span class="pointer" @click="previousGift">Prev</span>
      <span class="pointer" @click="nextGift">Next>></span>
    </div>
    <div id="image-container">
      <img :src="itemContent.image" :alt="itemContent.description" />
    </div>
    <div class="next-item"></div>
    <ItemContent />
  </div>
</template>

<script>
import ItemContent from './ItemContent';
export default {
  name: 'Stage',
  components: {
    ItemContent
  },
  data() {
    return {};
  },
  computed: {
    itemId() {
      return this.$store.state.itemId;
    },
    itemContent() {
      return this.$store.state.itemContent;
    }
  },
  methods: {
    nextGift() {
      this.$store
        .dispatch('incrementItemId')
        .then(() => this.$store.dispatch('getItem'));
    },
    previousGift() {
      this.$store
        .dispatch('decrementItemId')
        .then(() => this.$store.dispatch('getItem'));
    }
  }
};
</script>
<style lang="scss" scoped>
#stage {
  display: grid;
  grid-row: 1 / 8;
  grid-column: 3 / 14;
  grid-template-columns: repeat(11, 7.5rem);
  grid-template-rows: subgrid;
  z-index: 1;
  #image-container {
    grid-row: 1 / 8;
    grid-column: 1 / 7;
    background-color: #eee4e5;

    overflow: hidden;
    img {
      height: 100%;
      object-fit: cover;
    }
  }
}
.navigation {
  grid-row: 1/2;
  grid-column: 11/12;
  z-index: 4;
  span {
    text-transform: uppercase;
    margin: 0.75rem;
  }
}
</style>
