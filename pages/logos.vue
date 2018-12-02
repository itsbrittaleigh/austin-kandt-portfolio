<template>
  <div class="logos">
    <div class="container">
      <h1>{{ headline }}</h1>
      <vue-markdown>{{ body }}</vue-markdown>
      <div class="assets">
        <div
          v-for="(asset, index) in images"
          :key="index"
          class="image-container"
          :style="`width: ${asset.dimensions.width * 200 / asset.dimensions.height}px;
            flex-grow: ${asset.dimensions.width * 200 / asset.dimensions.height}`"
        >
          <i :style="`padding-bottom: ${asset.dimensions.height / asset.dimensions.width * 100}%`"></i>
          <img
            :src="asset.image"
            :alt="asset.label"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';

export default {
  name: 'Logos',
  async asyncData({ params }) {
    const pageData = await import('~/content/pages/logos.json');
    return pageData;
  },
  components: {
    'vue-markdown': VueMarkdown,
  },
  head() {
    return {
      title: this.meta.title,
      meta: [
        { hid: 'description', name: 'description', content: this.meta.description }
      ]
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/app.scss";
h1 {
  margin: 40px 0 20px;
}
p {
  max-width: 375px;
  font-size: 13px;
  line-height: 1.6em;
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
</style>

