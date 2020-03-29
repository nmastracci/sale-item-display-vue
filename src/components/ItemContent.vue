<template>
  <div :class="refactor ? 'item-content-refactored' : 'item-content'">
    <div>
      <h4 class="text-bold">{{ itemContent.default_category }}</h4>
      <h3 @click="toggleParentClass" class="text-light-weight">{{ itemContent.name }}</h3>
      <p class="text-light-weight">{{ itemContent.description }}</p>
      <p>$ {{ itemContent.price }}</p>
    </div>
    <label class="text-bold">{{ itemContent.option_label }}</label>
    <ul class="gift-option">
      <li
        v-for="(option, i) in itemContent.gift_options"
        :key="i + '-gift-option'"
        class="pointer"
      >{{ option.description }}</li>
    </ul>
    <button>Add to Bag</button>
  </div>
</template>
<script>
export default {
  name: "ItemContent",
  props: {
    itemContentProp: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      itemContent: this.itemContentProp,
      refactor: false
    };
  },
  methods: {
    toggleParentClass() {
      this.refactor = !this.refactor;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/_variables.scss";
.item-content {
  align-self: center;
  grid-row: 1 / 8;
  grid-column: 6 / 11;
  padding-left: 4rem;
  margin-bottom: 6rem;
  // Note: The original mockup colour is somewhere around #2c3e50
  // however the overlaid text becomes barely visible
  // therefore an executive decision to increase the text colour contrast was made
  color: #090c10;
  z-index: 2;
  div {
    padding-bottom: 1rem;
  }
  label,
  h4,
  h3 {
    text-transform: uppercase;
    letter-spacing: 0.25rem;
    margin: 0;
    padding: 0;
  }
  h3 {
    font-size: 2rem;
  }
  h4 {
    margin-bottom: 1.5rem;
  }
  p {
    margin: 0 0 1.5rem;
  }
  button {
    margin: 6rem 0 0;
    padding: 0.5rem 3rem;
    text-transform: uppercase;
    background-color: transparent;
    border: 0.125rem solid #090c10;
    transition: all 0.3s ease;
    &:hover {
      border: 0.125rem solid $main-text-color;
      background-color: $main-text-color;
      color: #fff;
    }
  }
}
.item-content-refactored {
  @extend .item-content;
  padding: 2rem;
  background-color: #fff;
  margin-left: 2rem;
}

.gift-option {
  color: #090c10;
  list-style: none;
  display: flex;
  margin: 0.5rem 0;
  padding: 0;
  li {
    padding-right: 1.5rem;
  }
}
</style>