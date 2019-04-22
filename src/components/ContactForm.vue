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
    <template v-else class="fields">
      <p class="hidden">
        <label>Don’t fill this out: <input name="bot-field"></label>
      </p>
      <div class="field field--half">
        <label
          for="name"
          :class="{ lift: liftName }"
        >
          Name *
        </label>
        <input type="text" v-model="name">
      </div>
      <div class="field field--half">
        <label
          for="email"
          :class="{ lift: liftEmail }"
        >
          Email *
        </label>
        <input type="email" v-model="email">
      </div>
      <div class="field">
        <label
          for="company"
          :class="{ lift: liftCompany }"
        >
          Company (optional)
        </label>
        <input type="text" v-model="company">
      </div>
      <div class="field">
        <label
          for="title"
          :class="{ lift: liftTitle }"
        >
          Title (optional)
        </label>
        <input type="text" v-model="title">
      </div>
      <div class="field">
        <label
          for="message"
          :class="{ lift: liftMessage }"
        >
          Message
        </label>
        <textarea v-model="message"></textarea>
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
      name: '',
      email: '',
      company: '',
      title: '',
      message: '',
      errors: [],
      wasSuccessful: false,
    };
  },
  computed: {
    liftName() {
      return this.name;
    },
    liftEmail() {
      return this.email;
    },
    liftPhone() {
      return this.phone;
    },
    liftMessage() {
      return this.message;
    },
    form() {
      return {
        name: this.name,
        email: this.email,
        phone: this.phone,
        message: this.message,
      };
    },
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
        .join('&');
    },
    handleSubmit() {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({ 'form-name': 'contact', ...this.form }),
      })
        .then(this.wasSuccessful = true)
        .catch(error => this.errors.push(error));
    },
  },
};
</script>

<style scoped>
.hidden {
  display: none;
  visibility: hidden;
}
</style>

