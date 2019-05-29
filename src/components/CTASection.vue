<template>
  <section class="CTA">
    <div class="wrapper">
      <p>
        Thanks for looking. You can either poke around my social media pages, continue looking at
        projects, or
        <router-link to="/contact">
          <a>
            learn more about me and connect.
          </a>
        </router-link>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CTASection',
  data() {
    return {};
  },
};
</script>

<style>
.CTA {
  margin: 100px 0 30px;
  max-width: 540px;
}

.CTA p {
  font-size: 16px;
}

@media only screen and (min-width: 768px) {
  .CTA {
    margin-top: 308px;
  }

  .CTA p {
    font-size: 20px;
    width: 500px;
  }

  .CTA a {
    text-decoration: underline;
  }
}
</style>
