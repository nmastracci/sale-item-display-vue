<template>
  <div id="stage">
    <div id="image-container">
      <img :src="itemContent.image" :alt="itemContent.description" />
    </div>
    <div id="item-content">
      <div>
        <h4 class="text-bold">{{ itemContent.default_category }}</h4>
        <h3 class="text-light">{{ itemContent.name }}</h3>
        <p>{{ itemContent.description }}</p>
        <p>${{ itemContent.price }}</p>
      </div>
      <label class="text-bold">{{ itemContent.option_label }}</label>
      <ul class="gift-option">
        <li
          v-for="(option, i) in itemContent.gift_options"
          :key="i + '-gift-option'"
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
      itemId: 2529,
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
<style scoped lang="scss">
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
  color: #000;
  z-index: 2;

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
  button {
    margin: 6rem 0;
    padding: 0.5rem 3rem;
    text-transform: uppercase;
    background-color: transparent;
    border: 0.125rem solid #000;
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
  color: #000;
  list-style: none;
  display: flex;
  margin: 0.5rem 0;
  padding: 0;
  li {
    margin-right: 1.5rem;
  }
}
</style>
