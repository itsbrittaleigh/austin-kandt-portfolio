<template>
  <div class="brand">
    <div class="container">
      <div class="hero">
        <img
          :src="hero"
          :alt="`${title} cover`"
        >
      </div>
      <div class="description">
        <h1>{{ title }}</h1>
        <p class="lead"><em>{{ services }}</em></p>
        <p>{{ description }}</p>
        <a
          v-if="credit"
          :href="credit.link"
          class="credit"
        >
          {{ credit.text }}
        </a>
      </div>
      <div class="assets">
        <div
          v-for="(asset, index) in images"
          :key="index"
          class="image-container"
          :style="`width: ${asset.dimensions.width * 250 / asset.dimensions.height}px;
            flex-grow: ${asset.dimensions.width * 250 / asset.dimensions.height}`"
        >
          <i :style="`padding-bottom: ${asset.dimensions.height / asset.dimensions.width * 100}%`"></i>
          <img :src="asset.image" :alt="asset.label">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Brand',
  async asyncData({ params }) {
    const pageData = await import(`~/content/brands/${params.slug}.json`);
    return pageData;
  },
  head() {
    return {
      title: `Austin Kandt | Brand Identity - ${this.title}`,
      meta: [
        { hid: 'description', name: 'description', content: this.description }
      ]
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/app.scss";
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
    display: flex;
    flex-wrap: wrap;
    &:after {
      content: '';
      flex-grow: 999999999;
    }
    .image-container {
      margin: 10px;
      position: relative;
    }
    i {
      display: block;
    }
    img {
      position: absolute;
      top: 0;
      width: 100%;
      vertical-align: bottom;
    }
  }
}
</style>
