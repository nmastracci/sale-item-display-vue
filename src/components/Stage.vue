<template>
  <div id="stage">
    <div id="image-container">
      <img :src="itemContent.image" :alt="itemContent.description" />
    </div>
    <div id="item-content">
      <div>
        <h4 class="text-bold">{{ itemContent.default_category }}</h4>
        <h3 class="text-light-weight">{{ itemContent.name }}</h3>
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
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Stage",
  data() {
    return {
      itemId: 2530,
      itemContent: {
        default_category: "Dress",
        name: "Roxane",
        description: "Crossover-neck dress in stretch crepe",
        price: 199,
        image: "https://images.giftagram.com/category_placeholder.png",
        option_label: "Colour",
        gift_options: [
          {
            description: "Noir"
          },
          {
            description: "Blanc"
          }
        ]
      }
    };
  },
  mounted() {
    axios
      .get(`https://portal.giftagram.com/api/gift/details?ids=${this.itemId}`)
      .then(response => {
        this.itemContent = response.data.data[0];
      })
      .catch(error => console.log(error));
  }
};
</script>
<style  lang="scss">
@import "../scss/_variables.scss";
#stage {
  display: grid;
  grid-row: 1 / 8;
  grid-column: 3 / 14;
  grid-template-columns: repeat(11, 7.5rem);
  grid-template-rows: subgrid;
  z-index: 1;
}
#item-content {
  align-self: center;
  grid-row: 1 / 8;
  grid-column: 6 / 11;
  padding-left: 4rem;
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
    margin: 6rem 0;
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
