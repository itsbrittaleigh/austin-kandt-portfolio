import Vue from 'vue';
import Router from 'vue-router';
import Contact from './views/Contact.vue';
import Home from './views/Home.vue';
import Projects from './views/Projects.vue';
import Project from './views/Project.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects,
    },
    {
      path: '/project/:title',
      name: 'project',
      component: Project,
      props: true,
    },
  ],
});

export default router;
