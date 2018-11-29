<template>
  <div class="logos">
    <div class="container">
      <h1>Logo Design</h1>
      <p>
        I love logos. Piecing together shapes and colors is like a puzzle where
        one tiny element has a cascading impact on the overall look and feel of the
        mark. These are just some of the designs I have had the pleasure to work on.
      </p>
      <div class="assets">
        <div
          v-for="(asset, index) in logos.assets"
          :key="index"
          class="image-container"
          :style="`width: ${asset.width * 200 / asset.height}px;
            flex-grow: ${asset.width * 200 / asset.height}`"
        >
          <i :style="`padding-bottom: ${asset.height / asset.width * 100}%`"></i>
          <img
            :src="`/images/${asset.image}`"
            alt=""
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Logos',
  data() {
    return {
      logos: [],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/app.scss";
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

