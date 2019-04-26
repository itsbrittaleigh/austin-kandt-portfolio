<template>
  <a
    href=""
    v-scroll-to="'#app'"
  >
    &uarr;
  </a>
</template>

<script>
export default {
  name: 'ToTop',
  data() {
    return {};
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style>

</style>
