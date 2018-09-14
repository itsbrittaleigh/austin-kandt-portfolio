<template>
  <div id="app">
    <header :class="{ 'menu-open': menuIsOpen }">
      <div class="container">
        <router-link
          :to="{ name: 'home' }"
          class="logo"
        >
          Austin Kandt
        </router-link>
        <button @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav>
          <ul>
            <li @click="closeMenu()">
              <router-link
                :to="{ name: 'brands' }"
                :class="{
                  'router-link-active': brandsIsActive(),
                }"
              >
                Brand Identity
              </router-link>
            </li>
            <li @click="closeMenu()">
              <router-link
                :to="{ name: 'illustrations' }"
              >
                Illustrations
              </router-link>
            </li>
            <li @click="closeMenu()">
              <router-link
                :to="{ name: 'logos' }"
              >
                Logo Design
              </router-link>
            </li>
            <li @click="closeMenu()">
              <router-link
                :to="{ name: 'contact' }"
              >
                Contact
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <main>
      <transition name="fade">
        <router-view/>
      </transition>
    </main>
    <footer>
      <div class="container">
        <nav>
          <ul>
            <li>
              <router-link
                :to="{ name: 'brands' }"
              >
                Brand Identity
              </router-link>
            </li>
            <li>
              <router-link
                :to="{ name: 'illustrations' }"
              >
                Illustrations
              </router-link>
            </li>
            <li>
              <router-link
                :to="{ name: 'logos' }"
              >
                Logo Design
              </router-link>
            </li>
            <li>
              <router-link
                :to="{ name: 'contact' }"
              >
                Contact
              </router-link>
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
  name: 'App',
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
      return window.location.pathname === '/';
    },
  },
};
</script>

<style lang="scss">
@import './assets/styles/app.scss';
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
