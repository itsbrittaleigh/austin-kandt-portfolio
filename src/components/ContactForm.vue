<template>
  <form method="post" netlify>
    <input type="hidden" name="form-name" value="contact">
    <p class="hidden">
      <label>Don’t fill this out: <input name="bot-field"></label>
    </p>
    <div class="field field--half">
      <label for="name">Full Name *</label>
      <input type="text" v-model="name">
    </div>
    <div class="field field--half">
      <label for="email">Email Address *</label>
      <input type="email" v-model="email">
    </div>
    <div class="field">
      <label for="phone">Phone Number</label>
      <input type="tel" v-model="phone">
    </div>
    <div class="field">
      <label for="message">Write Your Request</label>
      <textarea v-model="message"></textarea>
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

