<template>
  <div class="container">
    <div class="about">
      <img :src="photo" alt="Photo of Austin">
      <div class="content">
        <h2>{{ headline }}</h2>
        <p>{{ body }}</p>
        <div class="methods">
          <a :href="`mailto:${email}`" target="_blank">{{ email }}</a>
          <a :href="`tel:+1${stripPhone(phone)}`">{{ phone }}</a>
        </div>
      </div>
    </div>
    <div class="contact">
      <h2>{{ form }}</h2>
      <contact-form></contact-form>
    </div>
  </div>
</template>

<script>
import ContactForm from '../components/ContactForm.vue';

export default {
  name: 'Contact',
  async asyncData({ params }) {
    const pageData = await import('~/content/pages/contact.json');
    return pageData;
  },
  components: {
    'contact-form': ContactForm,
  },
  methods: {
    stripPhone(phoneNumber) {
      return phoneNumber.replace( /^\D+/g, '');
    },
  },
  head() {
    return {
      title: this.meta.title,
      meta: [
        { hid: 'description', name: 'description', content: this.meta.description }
      ]
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/app.scss";
.about {
  position: relative;
  padding-top: 50px;
  h2 {
    position: absolute;
    top: 0;
  }
  img {
    $size: 220px;
    display: block;
    width: $size;
    height: $size;
    border-radius: $size;
    object-fit: cover;
    margin: 20px auto 40px;
  }
  a {
    font-weight: bold;
    display: block;
    font-size: 16px;
    margin-bottom: 20px;
  }
  @media only screen and (min-width: $medium) {
    padding-top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    h2 {
      position: static;
    }
    p {
      font-size: 13px;
      line-height: normal;
    }
    .content {
      width: 450px;
    }
    .methods {
      display: flex;
      a {
        width: 50%;
      }
    }
  }
}
.contact {
  margin-top: 40px;
  h2 {
    text-align: center;
  }
  @media only screen and (min-width: $medium) {
    margin-top: 100px;
    h2 {
      margin-bottom: 30px;
    }
  }
}
</style>

