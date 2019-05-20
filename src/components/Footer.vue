<template>
  <footer>
    <div class="wrapper">
      <p class="text-center">
        Copyright &copy; 2016 - {{ date.getFullYear() }} Austin Kandt.
        <br>
        All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      date: new Date(),
    };
  },
};
</script>

<style scoped>
footer {
  padding: 20px 0 40px;
}

p {
  font-size: 14px;
  line-height: 19px;
}
</style>
