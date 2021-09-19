import Vue from 'vue';
import Store from './store';
import Router from './router';
import Resources from './resources';

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import App from './App.vue';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(Loading);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store: Store,
  router: Router,
  i18n: Resources  
}).$mount('#app');