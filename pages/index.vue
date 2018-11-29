<template>
  <div class="brands">
    <div class="container">
      <div
        v-for="brand in brands"
        :key="brand.slug"
        class="brand"
      >
        <router-link
          :to="{
            name: 'brand',
            params: {
              title: brand.slug,
            },
          }"
        >
          <img
            :src="`./images/${brand.featuredAsset}`"
            alt=""
          >
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Brands',
  data() {
    return {
      brands: [],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/app.scss";
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
