<template>
  <div id="gaddis-gaming">
    <div class="wrapper">
      <header class="project-intro">
        <gaddis-gaming-icon />
        <h1 class="project-intro__title">
          <strong>Gaddis Gaming</strong>
          <em class="project-intro__title--emphasized">
            &mdash; High end gaming
          </em>
        </h1>
        <p class="project-intro__snippet">
          After the launch of their prototype table topper, Gaddis Gaming was looking for an influx
          of funding to take their product to the next level. The plan was to fully redo the
          branding and product to position the company for a successful Kickstarter campaign.
        </p>
        <h2 class="project-intro__heading">Scope of Work</h2>
        <p class="project-intro__snippet">
          I created the entire brand identity system, designed the guard rails on the product
          itself, and created and managed the launch of the Kickstarter campaign.
        </p>
      </header>
    </div>
  </div>
</template>

<script>
import GaddisGamingIcon from '../../components/icons/GaddisGaming.vue';

export default {
  name: 'GaddisGaming',
  data() {
    return {};
  },
  components: {
    'gaddis-gaming-icon': GaddisGamingIcon,
  },
};
</script>

<style>

</style>
