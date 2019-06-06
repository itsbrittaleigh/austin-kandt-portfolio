<template>
  <div id="contact">
    <div class="wrapper">
      <div class="project__description">
        <p class="project__snippet m-bottom-40">
          From painting, to graphic design, to branding, to user interfaces, to product
          development, I enjoy all aspects of this industry. I’ll never stop learning and adapting.
        </p>
        <p class="project__snippet m-bottom-40">
          BFA in illustration from the College for Creative Studies.
          <br>
          I frequently travel internationaly, most recently
          <br>
          &mdash; <a href="https://instagram.com/austinkandt" target="_blank">New Zealand.</a>
        </p>
        <router-link to="/projects">
          <a>
            See my work
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

.project__description * {
  font-size: 16px;
}

.contact {
  margin-top: 126px;
}

a {
  text-decoration: underline;
}

@media only screen and (min-width: 768px) {
  .project__description {
    margin-top: 10px;
  }

  .project__snippet {
    max-width: 670px;
  }

  .project__description * {
    font-size: 26px;
  }

  .contact {
    margin-top: 177px;
  }
}
</style>
