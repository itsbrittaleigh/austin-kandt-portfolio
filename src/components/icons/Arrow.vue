<template>
  <svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect
      :fill="color"
      height="13"
      transform="rotate(135 25.6924 9.5)"
      x="25.6924"
      y="9.5"
      width="1.5"
    />
    <rect
      :fill="color"
      height="13"
      transform="rotate(45 24.6317 8.43933)"
      x="24.6317"
      y="8.43933"
      width="1.5"
    />
    <rect
      fill="#313131"
      height="1.5"
      width="24"
      y="8.75"
    />
  </svg>
</template>

<script>
export default {
  name: 'ArrowIcon',
  props: {
    color: {
      default: '#333333',
      type: String,
    },
  },
  data() {
    return {};
  },
};
</script>
