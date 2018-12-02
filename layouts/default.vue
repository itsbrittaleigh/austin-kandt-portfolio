<template>
  <div id="app">
    <header :class="{ 'menu-open': menuIsOpen }">
      <div class="container">
        <nuxt-link
          :to="{ name: 'index' }"
          class="logo"
        >
          Austin Kandt
        </nuxt-link>
        <button @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav>
          <ul>
            <li @click="closeMenu()">
              <nuxt-link
                :to="{ name: 'brand-identity' }"
                :class="{'nuxt-link-active': brandsIsActive() }"
              >
                Brand Identity
              </nuxt-link>
            </li>
            <li @click="closeMenu()">
              <nuxt-link
                :to="{ name: 'illustrations' }"
              >
                Illustrations
              </nuxt-link>
            </li>
            <li @click="closeMenu()">
              <nuxt-link
                :to="{ name: 'logos' }"
              >
                Logo Design
              </nuxt-link>
            </li>
            <li @click="closeMenu()">
              <nuxt-link
                :to="{ name: 'contact' }"
              >
                Contact
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <main>
      <transition name="fade">
        <nuxt/>
      </transition>
    </main>
    <footer>
      <div class="container">
        <nav>
          <ul>
            <li>
              <nuxt-link
                :to="{ name: 'index' }"
              >
                Brand Identity
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                :to="{ name: 'illustrations' }"
              >
                Illustrations
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                :to="{ name: 'logos' }"
              >
                Logo Design
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                :to="{ name: 'contact' }"
              >
                Contact
              </nuxt-link>
            </li>
          </ul>
        </nav>
        <p>&copy; 2018 by Austin Kandt</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'default',
  data() {
    return {
      menuIsOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuIsOpen = !this.menuIsOpen;
    },
    closeMenu() {
      this.menuIsOpen = false;
    },
    brandsIsActive() {
      return this.$route.path === '/';
    }
  },
};
</script>

<style lang="scss">
@import '~/assets/styles/app.scss';
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0 35px;
  .logo {
    text-transform: uppercase;
    font-size: 16px;
    letter-spacing: 5px;
    font-weight: bold;
    color: $gray;
    text-decoration: none;
  }
}
footer {
  padding: 20px 0;
  ul {
    list-style-type: none;
    margin: 0 0 30px;
    padding: 0;
    display: none;
    a {
      padding: 0 10px;
      text-transform: uppercase;
      color: #808080;
      text-decoration: none;
      font-size: 12px;
      transition: 0.4s;
      &:hover {
        color: darken(#808080, 20%);
      }
    }
  }
  p {
    font-size: 12px;
    font-style: italic;
    text-align: center;
  }
  @media only screen and (min-width: 768px) {
    padding: 40px 0;
    ul {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
