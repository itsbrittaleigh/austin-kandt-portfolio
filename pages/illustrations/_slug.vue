<template>
  <div class="illustration">
    <div class="container">
      <div class="description">
        <h1>{{ title }}</h1>
        <p class="lead"><em>{{ services }}</em></p>
        <p>{{ description }}</p>
      </div>
      <div class="assets">
        <div
          v-for="(asset, index) in images"
          :key="index"
          class="image-container"
        >
          <img :src="asset.image" :alt="asset.label">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Illustration',
  async asyncData({ params }) {
    const pageData = await import(`~/content/illustrations/${params.slug}.json`);
    return pageData;
  },
  head() {
    return {
      title: `Austin Kandt | Illustrations - ${this.title}`,
      meta: [
        { hid: 'description', name: 'description', content: this.description }
      ]
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/app.scss";
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
