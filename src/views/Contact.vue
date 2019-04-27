<template>
  <div id="contact">
    <p>
      User interface and graphic designer focused on the proliferation of functional design in the
      tech world.
      <br>
      Happily working and accepting freelance gigs as a designer at my LLC, i kandt design.
    </p>
    <p>
      BFA in illustration from the College for Creative Studies.
      <br>
      I frequently travel internationaly, most recently &mdash; New Zealand.
    </p>
    <router-link to="/projects">
      <a>See my work</a>
    </router-link>
    <section class="Contact">
      <p>Oh look, a message box. You know what to do.</p>
      <contact-form />
    </section>
  </div>
</template>

<script>
import ContactForm from '../components/ContactForm.vue';

export default {
  name: 'Contact',
  data() {
    return {};
  },
  components: {
    'contact-form': ContactForm,
  },
};
</script>

<style>

</style>
