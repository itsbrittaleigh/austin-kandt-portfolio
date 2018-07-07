<template>
  <div class="illustration">
    <div class="container">
      <div class="description">
        <h1>{{ illustration.name }}</h1>
        <p class="lead"><em>{{ illustration.servicesProvided }}</em></p>
        <p>{{ illustration.description }}</p>
      </div>
      <div class="assets">
        <div
          v-for="(asset, index) in illustration.assets"
          :key="index"
          class="image-container"
        >
          <img :src="`/images/${asset}`" alt="">
        </div>
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
    document.title = `Illustrations | ${this.illustration.name}`;
    document.querySelector('meta[name="description"]').content = this.illustration.description;
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/app.scss";
.illustration {
  .description {
    padding: 0 0 40px;
    @media only screen and (min-width: $medium) {
      width: 250px;
    }
  }
  .assets {
    .image-container {
      margin: 10px auto;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        display: block;
        max-width: 100%;
      }
    }
    @media only screen and (min-width: $medium) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .image-container {
        width: calc(100% - 40px);
        margin: 10px;
      }
    }
  }
  @media only screen and (min-width: $medium) {
    > .container {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
    }
    .description {
      order: 2;
    }
    .assets {
      order: 1;
      flex: 1;
    }
  }
}
</style>
