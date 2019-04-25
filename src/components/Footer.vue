<template>
  <footer>
    <p>Copyright &copy; 2016 - {{ date.getFullYear() }} Austin Kandt. All rights reserved.</p>
  </footer>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      date: new Date(),
    };
  },
};
</script>

<style>

</style>
