import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';
import router from '../router/index';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    itemId: 2529,
    itemContent: {
      default_category: 'For Her',
      name: 'Bing Bang Tiny Vivienne Silver Ring',
      description:
        'Mini stack ring featuring a chic little spike, a modern and edgy silhouette that will never go out of style!',
      price: 65,
      image: 'https://gift-images.giftagram.com/1458853900.png',
      option_label: 'Size',
      gift_options: [
        {
          description: '4'
        },
        {
          description: '6'
        },
        {
          description: '7'
        },
        {
          description: '8'
        }
      ]
    }
  },
  mutations: {
    setItemContent(state, itemContent) {
      state.itemContent = itemContent;
    },
    setItemId(state, itemId) {
      state.itemId = itemId;
    },
    increment(state) {
      state.itemId++;
    },
    decrement(state) {
      state.itemId--;
    }
  },
  actions: {
    getItem(context) {
      axios
        .get(
          `https://portal.giftagram.com/api/gift/details?ids=${context.state.itemId}`
        )
        .then(response => {
          router.push({
            name: 'gift',
            params: { id: context.state.itemId }
          });
          context.commit('setItemContent', response.data.data[0]);
        })
        .catch(error => console.log(error));
    },
    incrementItemId(context) {
      context.commit('increment');
    },
    decrementItemId(context) {
      context.commit('decrement');
    }
  }
});
