<template>
  <div id="daily-ui">
    <div class="wrapper">
      <header class="project-intro">
        <daily-ui-icon />
        <h1 class="project-intro__title">
          <strong>Daily UI</strong>
          <em class="project-intro__title--emphasized">&mdash; 100 user interface designs</em>
        </h1>
        <p class="project-intro__snippet">
          In order to continually push my design skills, I decided to take on the Daily UI challenge
          by creating for a wide range of applications, screen types, and scenarios that one would
          encounter in this industry.
        </p>
        <p class="project-intro__snippet m-top-30">
          I always come at the problem from the side of the user. What are they trying to
          accomplish? Where do their eyes look first? What sort of enjoyment are they getting
          from the interaction?
        </p>
      </header>
    </div>
    <section class="project">
      <p>001 Sign Up</p>
      <img src="https://placekitten.com/300/650" alt="" />
    </section>
    <section class="project">
      <p>002 Credit Card</p>
      <img src="https://placekitten.com/620/815" alt="" />
    </section>
    <section class="project">
      <p>003 Landing Page</p>
      <img src="https://placekitten.com/940/668" alt="" />
    </section>
    <section class="project">
      <p>004 Calculator</p>
      <img src="https://placekitten.com/460/818" alt="" />
      <img src="https://placekitten.com/460/818" alt="" />
    </section>
    <section class="project">
      <p>005 App Icon</p>
      <img src="https://placekitten.com/620/465" alt="" />
    </section>
    <section class="project">
      <p>006 Profile</p>
      <img src="https://placekitten.com/300/534" alt="" />
    </section>
  </div>
</template>

<script>
import DailyUIIcon from '../../components/icons/DailyUI.vue';

export default {
  name: 'DailyUI',
  data() {
    return {};
  },
  components: {
    'daily-ui-icon': DailyUIIcon,
  },
};
</script>

<style>

</style>
