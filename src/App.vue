<template>
  <div id="app">
    <app-navigation />
    <main>
      <transition name="fade" mode="out-in">
        <router-view :key="$route.fullPath" />
      </transition>
    </main>
    <app-footer />
    <to-top />
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import Navigation from './components/Navigation.vue';
import ToTop from './components/ToTop.vue';

export default {
  name: 'App',
  data() {
    return {};
  },
  components: {
    'app-navigation': Navigation,
    'app-footer': Footer,
    'to-top': ToTop,
  },
};
</script>

<style>
@import url('./assets/styles/app.css');

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
