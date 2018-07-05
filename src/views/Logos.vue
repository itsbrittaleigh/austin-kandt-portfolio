<template>
  <div class="logos">
    <div class="container">
      <h1>Logo Design</h1>
      <p>
        I love logos. Piecing together shapes and colors is like a puzzle where
        one tiny element has a cascading impact on the overall look and feel of the
        mark. These are just some of the designs I have had the pleasure to work on.
      </p>
      <div
        v-for="logo in logos"
        :key="logo.slug"
      >
        <img
          v-for="(asset, index) in logo.assets"
          :key="index"
          :src="`/images/${asset}`"
          alt=""
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Logos',
  data() {
    return {};
  },
  computed: {
    ...mapGetters([
      'logos',
    ]),
  },
};
</script>

<style lang="scss" scoped>
h1 {
  margin: 40px 0 20px;
}
p {
  max-width: 375px;
  font-size: 13px;
  line-height: 1.6em;
}
</style>

