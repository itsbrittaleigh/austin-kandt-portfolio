<template>
  <div class="illustrations">
    <div class="container">
      <div
        v-for="illustration in illustrations"
        :key="illustration.slug"
        class="illustration"
      >
        <router-link
          :to="{
            name: 'illustration',
            params: {
              title: illustration.slug,
            },
          }"
        >
          <img
            :src="`./images/${illustration.featuredAsset}`"
            alt=""
          >
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'illustrations',
  data() {
    return {};
  },
  computed: {
    ...mapGetters([
      'illustrations',
    ]),
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/app.scss";
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
