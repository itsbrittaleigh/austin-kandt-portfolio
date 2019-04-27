import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(VueScrollTo);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
