<template>
  <div class="brand">
    <div class="container">
      <div class="hero">
        <img
          :src="`/images/${brand.heroAsset}`"
          :alt="`${brand.name} cover`"
        >
      </div>
      <div class="description">
        <h1>{{ brand.name }}</h1>
        <p class="lead"><em>{{ brand.servicesProvided }}</em></p>
        <p>{{ brand.description }}</p>
        <a
          v-if="brand.credit"
          :href="brand.credit.link"
          class="credit"
        >
          {{ brand.credit.text }}
        </a>
      </div>
      <div class="assets">
        <div
          v-for="(asset, index) in brand.assets"
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
  name: 'Brand',
  props: ['title'],
  data() {
    return {
      brand: {},
      isLoaded: false,
    };
  },
  computed: {
    ...mapGetters([
      'brands',
    ]),
  },
  mounted() {
    this.brand = _.find(this.brands, brand => brand.slug === this.title);
    document.title = `Brand Identity | ${this.brand.name}`;
    document.querySelector('meta[name="description"]').content = this.brand.description;
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/app.scss";
.brand {
  .hero {
    img {
      max-width: 100%;
      display: block;
      margin: 0 auto;
    }
  }
  .description {
    padding: 40px 0;
    max-width: 300px;
    margin: 0 auto;
    h1,
    p {
      text-align: center;
    }
    p:not(.lead) {
      font-size: 13px;
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
        width: calc(50% - 20px);
        height: 300px;
        margin: 10px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
}
</style>
