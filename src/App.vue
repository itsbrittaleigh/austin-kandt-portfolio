<template>
  <div id="app">
    <app-navigation />
    <main>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </main>
  </div>
  <!-- Footer -->
  <!-- To Top -->
</template>

<script>
import Navigation from './components/Navigation.vue';

export default {
  name: 'App',
  data() {
    return {};
  },
  components: {
    'app-navigation': Navigation,
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
