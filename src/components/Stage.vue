<template>
  <div id="stage">
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
</style>
