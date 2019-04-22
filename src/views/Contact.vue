<template>
  <div id="contact">
    <contact-form />
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
