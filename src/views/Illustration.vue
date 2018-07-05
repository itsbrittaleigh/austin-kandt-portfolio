<template>
  <div class="illustration">
    <div class="container">
      <div class="description">
        <h1>{{ illustration.name }}</h1>
        <p class="lead"><em>{{ illustration.servicesProvided }}</em></p>
        <p>{{ illustration.description }}</p>
      </div>
      <div class="assets">
        <img
          v-for="(asset, index) in illustration.assets"
          :key="index"
          :src="`/images/${asset}`"
          alt=""
        >
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import { mapGetters } from 'vuex';

export default {
  name: 'Illustration',
  props: ['title'],
  data() {
    return {
      illustration: {},
      isLoaded: false,
    };
  },
  computed: {
    ...mapGetters([
      'illustrations',
    ]),
  },
  mounted() {
    this.illustration = _.find(
      this.illustrations,
      illustration => illustration.slug === this.title,
    );
  },
};
</script>

<style lang="scss" scoped>
.illustration {
  .description {
    padding: 0 0 40px;
  }
}
</style>
