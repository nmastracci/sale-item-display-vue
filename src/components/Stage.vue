<template>
  <div id="stage">
    <div id="style-block"></div>
    <div id="image-container">
      <img :src="itemContent.image" :alt="itemContent.description" />
    </div>
    <div id="item-content">
      <h4 class="text-bold">{{ itemContent.default_category }}</h4>
      <h3 class="text-light">{{ itemContent.name }}</h3>
      <p>{{ itemContent.description }}</p>
      <p>${{ itemContent.price }}</p>
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
  margin: 4rem 4rem 0;
  text-align: left;
}
#item-content {
  margin: 6rem 0 0 -4rem;
  text-align: left;
  color: #000;
  max-width: 35rem;
  display: inline-block;
  vertical-align: top;
  label,
  h4,
  h3 {
    text-transform: uppercase;

    letter-spacing: 0.25rem;
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
#style-block {
  background-color: #000;
  width: 6rem;
  height: 20rem;
  display: inline-block;
  vertical-align: top;
}
#image-container {
  width: 50rem;
  height: 50rem;
  background-color: #eee4e5;
  display: inline-block;
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
