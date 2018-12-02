<template>
  <div class="illustrations">
    <div class="container">
      <div
        v-for="illustration in orderedIllustrations"
        :key="illustration.order"
        class="illustration"
      >
        <nuxt-link
          :to="illustration._path"
        >
          <img
            :src="illustration.featured"
            :alt="`${illustration.name} illustrations`"
          >
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'illustrations',
  async asyncData({ params }) {
    const illustrationsPageData = await import('~/content/pages/illustrations.json');
    const illustrations = await require.context('~/content/illustrations/', false, /\.json$/);
    const searchIllustrations = await illustrations.keys().map((key) => ({
      ...illustrations(key),
      _path: `/illustrations/${key.replace('.json', '').replace('./', '')}`
    }));
    const pageData = {
      illustrations: searchIllustrations,
      ...illustrationsPageData,
    }
    return pageData;
  },
  computed: {
    orderedIllustrations() {
      // eslint-disable-next-line
      return this.illustrations.sort((a, b) => a.order - b.order);
    },
  },
  head() {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.description }
      ]
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/app.scss";
.illustrations {
  .illustration {
    margin: 0 0 15px;
    @media only screen and (min-width: $medium) {
      margin-bottom: 30px;
    }
    background: rgb(42, 168, 204);
    cursor: pointer;
    img {
      display: block;
      max-width: 100%;
      transition: 0.4s;
    }
    &:hover {
      img {
        opacity: 0.6;
      }
    }
  }
}
</style>
