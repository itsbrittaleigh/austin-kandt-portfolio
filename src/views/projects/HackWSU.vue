<template>
  <div id="hack-wsu">
    <div class="wrapper">
      <header class="project-intro">
        <hack-wsu-icon />
        <h1 class="project-intro__title">
          <strong>Hack WSU</strong>
          <em class="project-intro__title--emphasized">
            &mdash; Creating Detroit's largest hackathon
          </em>
        </h1>
        <p class="project-intro__snippet">
          Every year, Wayne State University holds a 24 hour hack-a-thon to promote innovation and
          learning within there tech community. They were looking to take a step forward with a new
          concept to draw students.
        </p>
        <h2 class="project-intro__heading">Scope of Work</h2>
        <p class="project-intro__snippet">
          Create an entirely new brand for the 2017 event, complete with illustrations to promote
          on the website, event signage, and merchandise.
        </p>
      </header>
    </div>
  </div>
</template>

<script>
import HackWSUIcon from '../../components/icons/HackWSU.vue';

export default {
  name: 'HackWSU',
  data() {
    return {};
  },
  components: {
    'hack-wsu-icon': HackWSUIcon,
  },
};
</script>

<style>

</style>
