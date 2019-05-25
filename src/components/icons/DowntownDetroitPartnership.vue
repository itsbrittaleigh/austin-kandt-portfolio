<template>
  <svg :class="className" viewBox="0 0 62.5 100">
    <g>
      <polygon
        points="35.59,31.58 35.59,0 64.44,15.81"
        fill="#AED1E4"
      />
      <polygon
        points="35.59,65.76 35.59,34.19 64.44,50"
        fill="#282B57"
      />
      <polygon
        points="65.2,17.07 65.2,48.65 36.35,32.83"
        fill="#00ABDB"
      />
      <polygon
        points="35.59,100 35.59,68.42 64.44,84.23"
        fill="#DADE62"
      />
      <polygon
        points="65.2,51.3 65.2,82.88 36.35,67.07 "
        fill="#009D83"
      />
      <polygon
        points="29.61,68.4 29.61,99.97 0.76,84.16"
        fill="#00ABDB"
      />
      <polygon
        points="29.61,34.19 29.61,65.76 0.76,49.95"
        fill="#282B57"
      />
      <polygon
        points="0,82.88 0,51.3 28.85,67.11"
        fill="#AED1E4"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'DDPLogo',
  props: {
    className: {
      default: '',
      type: String,
    },
    height: {
      default: 100,
      type: Number,
    },
    width: {
      default: 62.5,
      type: Number,
    },
  },
  data() {
    return {};
  },
};
</script>
