import Vue from 'vue';
import Store from './store';
import Router from './router';
import Resources from './resources';

import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store: Store,
  router: Router,
  i18n: Resources  
}).$mount('#app');
