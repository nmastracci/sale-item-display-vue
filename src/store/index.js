import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    itemId: 2530,
    itemContent: {
      default_category: 'Dress',
      name: 'Roxane',
      description: 'Crossover-neck dress in stretch crepe',
      price: 199,
      image: 'https://images.giftagram.com/category_placeholder.png',
      option_label: 'Colour',
      gift_options: [
        {
          description: 'Noir'
        },
        {
          description: 'Blanc'
        }
      ]
    }
  },
  mutations: {
    setItemContent(state, itemContent) {
      state.itemContent = itemContent;
    }
  },
  actions: {
    getItem({ id }) {
      axios
        .get(`https://portal.giftagram.com/api/gift/details?ids=2529`)
        .then(response => {
          this.commit('setItemContent', response.data.data[0]);
        })
        .catch(error => console.log(error));
    }
  }
});
