<template>
  <form method="post" netlify-honeypot="bot-field" netlify>
    <input type="hidden" name="form-name" value="contact">
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
      <input type="text" v-model="contact.name">
    </div>
    <div class="field field--half">
      <label
        for="email"
        :class="{ lift: liftEmail }"
      >
        Email Address *
      </label>
      <input type="email" v-model="contact.email">
    </div>
    <div class="field">
      <label
        for="phone"
        :class="{ lift: liftPhone }"
      >
        Phone Number
      </label>
      <input type="tel" v-model="contact.phone">
    </div>
    <div class="field">
      <label
        for="message"
        :class="{ lift: liftMessage }"
      >
        Write Your Request
      </label>
      <textarea v-model="contact.message"></textarea>
    </div>
    <button type="submit">Send Now</button>
  </form>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      contact: {
        name: '',
        email: '',
        phone: '',
        message: '',
      },
    };
  },
  computed: {
    liftName() {
      return this.contact.name;
    },
    liftEmail() {
      return this.contact.email;
    },
    liftPhone() {
      return this.contact.phone;
    },
    liftMessage() {
      return this.contact.message;
    },
  },
  methods: {
    validate() {
      return false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/app.scss";
.field {
  width: 100%;
  position: relative;
}
.hidden {
  display: none;
  visibility: hidden;
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

