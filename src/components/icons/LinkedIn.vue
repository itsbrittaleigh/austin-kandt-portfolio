<template>
   <svg
    aria-labelledby="linkedInIconTitle"
    fill="none" xmlns="http://www.w3.org/2000/svg"
    :height="height"
    :viewBox="`0 0 ${width} ${height}`"
    :width="width"
  >
    <title id="linkedInIconTitle">Austin Kandt's LinkedIn Profile</title>
    <path
      clip-rule="evenodd"
      :d="`M18.5233 0H1.47778C0.661944 0 0 0.641389 0 1.43333V18.5667C0 19.3578 0.661944 20 1.47778
        20H18.5233C19.3392 20 20 19.3578 20 18.5667V1.43333C20 0.641389 19.3392 0 18.5233
        0ZM3.04139 16.7417H6.06333V7.71167H3.04139V16.7417ZM4.55306 6.47778H4.53222C3.51889 6.47778
        2.8625 5.78444 2.8625 4.9175C2.8625 4.03222 3.53833 3.35833 4.57139 3.35833C5.60556 3.35833
        6.24139 4.03222 6.26083 4.9175C6.26083 5.78556 5.60556 6.47778 4.55306 6.47778ZM16.9564
        16.7417H13.9356V11.9097C13.9356 10.6956 13.4972 9.8675 12.4056 9.8675C11.5689 9.8675
        11.0731 10.4264 10.855 10.9658C10.7747 11.1589 10.7553 11.4281 10.7553
        11.6969V16.7417H7.73444C7.73444 16.7417 7.77444 8.55806 7.73444
        7.71167H10.7553V8.99194C11.1567 8.37667 11.8728 7.49889 13.4778 7.49889C15.4656 7.49889
        16.9564 8.78917 16.9564 11.5636V16.7417ZM10.7356 9.02028C10.7411 9.01139 10.7475 9.00167
        10.7553 8.99194V9.02028H10.7356Z`"
      :fill="color"
      fill-rule="evenodd"
    />
  </svg>
</template>

<script>
export default {
  name: 'InstagramIcon',
  props: {
    color: {
      default: '#333333',
      type: String,
    },
    height: {
      default: 20,
      type: Number,
    },
    width: {
      default: 20,
      type: Number,
    },
  },
  data() {
    return {};
  },
};
</script>
