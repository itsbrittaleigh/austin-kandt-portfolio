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
          Full Name *
        </label>
        <input type="text" v-model="name">
      </div>
      <div class="field field--half">
        <label
          for="email"
          :class="{ lift: liftEmail }"
        >
          Email Address *
        </label>
        <input type="email" v-model="email">
      </div>
      <div class="field">
        <label
          for="phone"
          :class="{ lift: liftPhone }"
        >
          Phone Number
        </label>
        <input type="tel" v-model="phone">
      </div>
      <div class="field">
        <label
          for="message"
          :class="{ lift: liftMessage }"
        >
          Write Your Request
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
      phone: '',
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

<style lang="scss" scoped>
@import "~/assets/styles/app.scss";
.field {
  width: 100%;
  position: relative;
}
p {
  &.hidden {
    display: none;
    visibility: hidden;
  }
  &.center {
    text-align: center;
    width: 100%;
  }
}
input,
textarea {
  width: 100%;
  border: solid $gray;
  border-width: 0 0 1px 0;
  padding: 10px;
  margin-bottom: 15px;
}
input {
  height: 46px;
  font-size: 16px;
}
textarea {
  height: 138px;
}
label {
  position: absolute;
  left: 10px;
  top: 10px;
  font-size: 14px;
  color: lightgray;
  pointer-events: none;
  transition: 0.4s;
  &.lift {
    top: -5px;
    font-size: 12px;
    color: $gray;
  }
}
button {
  background: none;
  outline: none;
  border: none;
  width: 100%;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 14px;
}
@media only screen and (min-width: $medium) {
  form {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 650px;
    margin: 0 auto 50px;
    .field--half {
      width: calc(50% - 10px);
    }
  }
}
</style>

