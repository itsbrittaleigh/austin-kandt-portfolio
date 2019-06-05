<template>
  <form method="post" @submit.prevent="handleSubmit">
    <input type="hidden" name="form-name" value="contact">
    <p class="is-hidden">
      <label>Don’t fill this out: <input name="bot-field"></label>
    </p>
    <p
      v-if="formErrored"
      class="text-center form__error"
    >
      There was a problem submitting your form. Please try again later.
    </p>
    <section class="form__fields">
      <div class="col-lt">
        <div class="form__field">
          <label
            for="name"
            class="form__label"
          >
            Name *
            <span class="form__error" v-if="nameError">{{ nameError }}</span>
          </label>
          <input
            :class="{
              'form__input': true,
              'form__input--error': nameError,
            }"
            placeholder="Austin Kandt"
            type="text"
            v-model="name"
          />
        </div>
        <div class="form__field">
          <label
            for="email"
            class="form__label"
          >
            Email *
            <span class="form__error" v-if="emailError">{{ emailError }}</span>
          </label>
          <input
            :class="{
              'form__input': true,
              'form__input--error': emailError,
            }"
            placeholder="austinkandt@gmail.com"
            type="text"
            v-model="email"
          />
        </div>
        <div class="form__field">
          <label
            for="company"
            class="form__label form__label--optional"
          >
            Company (Optional)
          </label>
          <input
            class="form__input"
            type="text"
            v-model="company"
            placeholder="Kandt Design, LLC"
          />
        </div>
        <div class="form__field">
          <label
            for="title"
            class="form__label form__label--optional"
          >
            Title (Optional)
          </label>
          <input
            class="form__input"
            placeholder="Founder"
            type="text"
            v-model="title"
          />
        </div>
      </div>
      <div class="col-rt">
        <div class="form__field">
          <label
            for="message"
            class="form__label"
          >
            Message *
            <span class="form__error" v-if="messageError">{{ messageError }}</span>
          </label>
          <textarea
            :class="{
              'form__textarea': true,
              'form__textarea--error': messageError,
            }"
            placeholder="Type message ..."
            v-model="message"
          />
        </div>
      </div>
      <button
        :class="{
          'form__button': true,
          'form__button--success': wasSuccessful,
        }"
        type="submit"
      >
        {{ wasSuccessful ? 'Sent!' : 'Send' }}
      </button>
    </section>
  </form>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      company: '',
      email: '',
      emailError: null,
      formErrored: false,
      message: '',
      messageError: null,
      name: '',
      nameError: null,
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
            name: this.name,
            email: this.email,
            company: this.company,
            title: this.title,
            message: this.message,
          }),
        })
          .then(this.wasSuccessful = true)
          .catch(this.formError = true);
      }
    },
    validateForm() {
      if (!this.name) this.nameError = ' - Required';
      else this.nameError = null;

      if (!this.email) this.emailError = ' - Required';
      else if (!this.validateEmail()) this.emailError = ' - Not a valid email';
      else this.emailError = null;

      if (!this.message) this.messageError = ' - Required';
      else if (this.message.length < 20) this.messageError = ' - 20 character minimum';
      else this.messageError = null;

      return !this.nameError && !this.emailError && !this.messageError;
    },
    validateEmail() {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      return re.test(String(this.email).toLowerCase());
    },
  },
};
</script>
