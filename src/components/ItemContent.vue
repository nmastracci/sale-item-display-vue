<template>
  <div :class="refactor ? 'item-content-refactored' : 'item-content'">
    <div>
      <h4 class="text-bold">{{ itemContent.default_category }}</h4>
      <h3 @click="toggleParentClass" class="text-light-weight">
        {{ itemContent.name }}
      </h3>
      <p class="text-light-weight">{{ itemContent.description }}</p>
      <p>$ {{ itemContent.price }}</p>
    </div>
    <label>{{ itemContent.option_label }}</label>
    <ul class="gift-option">
      <li
        v-for="(option, i) in itemContent.gift_options"
        :key="i + '-gift-option'"
        class="'pointer'"
        @click="selectOption(i)"
      >
        <label
          :for="option.description"
          :class="[{ 'active-selection': i === activeSelection }]"
          >{{ option.description }}
          <input
            type="radio"
            :value="option.description"
            :name="option.description"
          />
        </label>
      </li>
    </ul>
    <button>Add to Bag</button>
  </div>
</template>
<script>
export default {
  name: 'ItemContent',

  data() {
    return {
      refactor: false,
      activeSelection: 0
    };
  },
  methods: {
    toggleParentClass() {
      this.refactor = !this.refactor;
    },
    selectOption(i) {
      this.activeSelection = i;
    }
  },
  computed: {
    itemContent() {
      return this.$store.state.itemContent;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';
.item-content {
  align-self: center;
  grid-row: 1 / 8;
  grid-column: 6 / 12;
  padding-left: 4rem;
  margin-bottom: 6rem;
  // Note: The original mockup colour is somewhere around #2c3e50
  // however the overlaid text becomes barely visible
  // therefore an executive decision to increase the text colour contrast was made
  color: $dark-text-color;
  z-index: 2;
  div {
    padding-bottom: 2rem;
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
    margin-bottom: 2rem;
  }
  p {
    margin: 0.5rem 0 1.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 8rem;
  }
  button {
    margin: 3rem 0 0;
    padding: 0.5rem 3rem;
    text-transform: uppercase;
    background-color: transparent;
    border: 0.125rem solid $dark-text-color;
    transition: all 0.3s ease;
    &:hover {
      border: 0.125rem solid $main-text-color;
      background-color: $main-text-color;
      color: #fff;
      font-weight: 500;
    }
  }
}
.item-content-refactored {
  @extend .item-content;
  padding: 2rem;
  background-color: #fff;
  margin-left: 2rem;
  color: $main-text-color;
  .gift-option {
    label {
      color: lighten($main-text-color, 10%);
    }
    .active-selection {
      color: darken($main-text-color, 50%);
      font-weight: 900;
    }
  }
}

.gift-option {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
  line-height: 1rem;
  li {
    margin: 1rem 0 0;
    input {
      visibility: hidden;
    }
    label {
      cursor: pointer;
      color: $light-text-color;
      letter-spacing: 0;
    }
    .active-selection {
      color: darken($main-text-color, 50%);
      font-weight: 500;
    }
  }
}
</style>
