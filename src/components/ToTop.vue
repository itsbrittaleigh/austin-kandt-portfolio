<template>
  <a
    href=""
    v-scroll-to="'#app'"
    class="to-top"
  >
    <arrow-icon />
  </a>
</template>

<script>
import ArrowIcon from './icons/Arrow.vue';

export default {
  name: 'ToTop',
  data() {
    return {};
  },
  components: {
    'arrow-icon': ArrowIcon,
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style>
.to-top {
  align-items: center;
  background: var(--white);
  border-radius: 50px;
  border: 1px solid var(--black);
  bottom: 10px;
  display: flex;
  height: 50px;
  justify-content: center;
  position: fixed;
  right: 10px;
  width: 50px;
}

.to-top svg {
  transform: rotate(-90deg);
}

@media only screen and (min-width: 768px) {
  .to-top {
    bottom: 55px;
    right: 55px;
  }
}
</style>
