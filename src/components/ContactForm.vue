<template>
  <form method="post" @submit.prevent="handleSubmit">
    <input type="hidden" name="form-name" value="contact">
    <p
      v-for="(error, index) in errors"
      :key="index"
    >
      {{ error }}
    </p>
    <p
      v-if="wasSuccessful"
      class="center"
    >
      I have received your message and will be responding soon.
    </p>
    <template v-else class="Fields">
      <p class="is-hidden">
        <label>Don’t fill this out: <input name="bot-field"></label>
      </p>
      <div class="Field Field--half">
        <label
          for="name"
          class="Field__label"
        >
          Name *
        </label>
        <input type="text" v-model="name">
      </div>
      <div class="Field Field--half">
        <label
          for="email"
          class="Field__label"
        >
          Email *
        </label>
        <input type="email" v-model="email">
      </div>
      <div class="Field">
        <label
          for="company"
          class="Field__label"
        >
          Company (optional)
        </label>
        <input type="text" v-model="company">
      </div>
      <div class="Field">
        <label
          for="title"
          class="Field__label"
        >
          Title (optional)
        </label>
        <input type="text" v-model="title">
      </div>
      <div class="Field">
        <label
          for="message"
          class="Field__label"
        >
          Message *
        </label>
        <textarea v-model="message" />
      </div>
      <button type="submit">Send Now</button>
    </template>
  </form>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      errors: [],
      company: '',
      email: '',
      message: '',
      name: '',
      title: '',
      wasSuccessful: false,
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
        .join('&');
    },
    handleSubmit() {
      if (this.validateForm()) {
        fetch('/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: this.encode({
            'form-name': 'contact',
            ...this.form,
          }),
        })
          .then(this.wasSuccessful = true)
          .catch(error => this.errors.push(error));
      }
    },
    validateForm() {
      this.errors = [];
      if (!this.name) this.errors.push('Please provide your name.');
      if (!this.email) this.errors.push('Please provide your email address.');
      else if (!this.validateEmail()) this.errors.push('Please provide a valid email address.');
      if (!this.message) this.errors.push('Please write a brief message.');
      return (this.errors.length === 0);
    },
    validateEmail() {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(this.email).toLowerCase());
    },
  },
};
</script>

<style scoped>
.Field__label {
  display: block;
}
.Field__input {
  display: block;
}
</style>
