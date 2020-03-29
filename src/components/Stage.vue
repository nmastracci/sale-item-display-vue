<template>
  <div id="stage">
    <div id="image-container">
      <img :src="itemContent.image" :alt="itemContent.description" />
    </div>
    <ItemContent :item-content-prop="itemContent" />
  </div>
</template>

<script>
import axios from "axios";
import ItemContent from "./ItemContent";
export default {
  name: "Stage",
  components: {
    ItemContent
  },
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
  created() {
    axios
      .get(`https://portal.giftagram.com/api/gift/details?ids=${this.itemId}`)
      .then(response => {
        this.itemContent = response.data.data[0];
      })
      .catch(error => console.log(error));
  }
};
</script>
<style  lang="scss" scoped>
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
