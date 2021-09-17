import Vue from 'vue';
import VueRouter from 'vue-router';
import modules from './modules';

Vue.use(VueRouter);

const _router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: modules
});

export default _router;
