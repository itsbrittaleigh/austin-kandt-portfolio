<template>
  <div id="contact">
    <div class="wrapper">
      <div class="project__description">
        <p class="project__snippet m-bottom-40">
          Moving from painting, to graphic design, to branding, to user interfaces, to product
          development, I thought I was safe to say I’d seen it all at this point. I’ll never stop
          learning and adapting in this industry.
        </p>
        <p class="project__snippet m-bottom-40">
          BFA in illustration from the College for Creative Studies.
          <br>
          I frequently travel internationaly, most recently &mdash; New Zealand.
        </p>
        <router-link to="/projects">
          <a class="project__link">
            See my work
            <arrow-icon />
          </a>
        </router-link>
      </div>
      <section class="contact">
        <contact-form />
      </section>
    </div>
  </div>
</template>

<script>
import ArrowIcon from '../components/icons/Arrow.vue';
import ContactForm from '../components/ContactForm.vue';

export default {
  name: 'Contact',
  data() {
    return {};
  },
  components: {
    'arrow-icon': ArrowIcon,
    'contact-form': ContactForm,
  },
};
</script>

<style scoped>
.project__description {
  margin-top: 30px;
}

.contact {
  margin-top: 126px;
}

@media only screen and (min-width: 768px) {
  .project__description {
    margin-top: 10px;
  }

  .contact {
    margin-top: 177px;
  }
}
</style>
