import Vue from 'vue';
import Router from 'vue-router';
import Brand from './views/Brand.vue';
import Brands from './views/Brands.vue';
import Illustrations from './views/Illustrations.vue';
import Illustration from './views/Illustration.vue';
import Logos from './views/Logos.vue';
import Contact from './views/Contact.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Brands,
    },
    {
      path: '/brand-identity',
      name: 'brands',
      component: Brands,
    },
    {
      path: '/brand-identity/:title',
      name: 'brand',
      component: Brand,
      props: true,
    },
    {
      path: '/illustrations',
      name: 'illustrations',
      component: Illustrations,
    },
    {
      path: '/illustrations/:title',
      name: 'illustration',
      component: Illustration,
      props: true,
    },
    {
      path: '/logos',
      name: 'logos',
      component: Logos,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
  ],
});
