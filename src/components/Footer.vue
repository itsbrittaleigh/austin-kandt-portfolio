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

@media only screen and (min-width: 768px) {
  footer {
    padding: 60px 0 20px;
  }

  br {
    display: none;
  }
}
</style>
