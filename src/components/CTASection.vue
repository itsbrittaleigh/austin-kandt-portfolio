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
  margin-bottom: 30px;
}

.CTA p {
  font-size: 16px;
  max-width: 540px;
}

.CTA a {
  text-decoration: underline;
}

@media only screen and (min-width: 768px) {
  .CTA {
    margin-bottom: 134px;
  }

  .CTA p {
    font-size: 20px;
    width: 500px;
  }
}
</style>
