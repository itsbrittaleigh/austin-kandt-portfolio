<template>
  <div id="safewhistle">
    <div class="wrapper">
      <header class="project-intro">
        <safewhistle-icon />
        <h1 class="project-intro__title">
          <strong>Safewhistle</strong>
          <em class="project-intro__title--emphasized">
            &mdash; Trust through transparency
          </em>
        </h1>
        <p class="project-intro__snippet">
          Safewhistle is an anonymous whistleblowing platform, designed to create an open door for
          employees to speak and collaborate with the proper level of management at their
          organization or business.
        </p>
        <h2 class="project-intro__heading">Scope of Work</h2>
        <p class="project-intro__snippet">
          I was tasked from the beginning to create the entire brand identity system (logo, colors,
          font, etc.), collaborate on the product design itself, and create and manage the printed
          marketing material.
        </p>
      </header>
    </div>
  </div>
</template>

<script>
import SafewhistleIcon from '../../components/icons/Safewhistle.vue';

export default {
  name: 'Safewhistle',
  data() {
    return {};
  },
  components: {
    'safewhistle-icon': SafewhistleIcon,
  },
};
</script>
