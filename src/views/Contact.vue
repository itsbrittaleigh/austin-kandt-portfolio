<template>
  <div class="container">
    <div class="about">
      <img src="https://placebear.com/800/800" alt="">
      <div class="content">
        <h2>About</h2>
        <p>
          I've always felt a strong pull towards different forms of media, especially
          those that featured unique illustrative work. In pursuit of my desire to affect
          the same media I grew up loving, I set out studying classical illustrative
          techniques at the Birmingham-Bloomfield Art Center, and later the College for
          Creative Studies. It was here that I was exposed to graphic design and the
          possibilities of merging traditional techniques with today's technologies.
        </p>
        <div class="methods">
          <a href="mailto:austinkandt@gmail.com" target="_blank">austinkandt@gmail.com</a>
          <a href="tel:+12483027435">(248) 302-7435</a>
        </div>
      </div>
    </div>
    <div class="contact">
      <h2>Contact</h2>
      <contact-form></contact-form>
    </div>
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

<style lang="scss" scoped>
@import "../assets/styles/app.scss";
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

