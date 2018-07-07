import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  store.commit('closeMenu');
  document.title = to.meta.title ? to.meta.title : 'Austin Kandt';
  if (document.querySelector('meta[name="description"]')) {
    document.querySelector('meta[name="description"').content = to.meta.description ? to.meta.description : '';
  }
  next();
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
