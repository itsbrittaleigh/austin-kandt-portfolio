<template>
  <div class="brands">
    <div class="container">
      <div
        v-for="(brand, index) in brands"
        :key="index"
        class="brand"
      >
        <nuxt-link
          :to="brand._path"
        >
          <img
            :src="brand.featured"
            :alt="`${brand.title} branding`"
          >
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Brands',
  async asyncData({ params }) {
    const brandsPageData = await import('~/content/pages/brands.json');
    const brands = await require.context('~/content/brands/', false, /\.json$/);
    const searchBrands = await brands.keys().map((key) => ({
      ...brands(key),
      _path: `/brand-identity/${key.replace('.json', '').replace('./', '')}`
    }));
    const pageData = {
      brands: searchBrands,
      ...brandsPageData,
    }
    return pageData;
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
.brands {
  .brand {
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
