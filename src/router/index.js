import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '../App.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [{ name: 'gift', path: '/gift/:id', component: App }]
});
