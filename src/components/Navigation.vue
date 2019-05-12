<template>
  <nav class="navigation">
    <span class="wrapper">
      <ul class="navigation__items">
        <span class="navigation__items--left">
          <li class="navigation__item m-right-20">
            <a href="https://www.linkedin.com/in/austinkandt/" target="_blank">
              <linkedin-icon />
            </a>
          </li>
          <li class="navigation__item m-right-20">
            <a href="https://dribbble.com/austinkandt" target="_blank">
              <dribbble-icon />
            </a>
          </li>
          <li class="navigation__item m-right-20">
            <a href="https://www.instagram.com/austinkandt/" target="_blank">
              <instagram-icon />
            </a>
          </li>
          <li class="navigation__logo">
            <router-link to="/">
              <a>i kandt . design</a>
            </router-link>
          </li>
        </span>
        <span class="navigation__items--right">
          <li class="navigation__item">
            <router-link to="/projects">
              <a>Work</a>
            </router-link>
          </li>
          <li class="navigation__item m-left-20">
            <router-link to="/contact">
              <a>Info</a>
            </router-link>
          </li>
        </span>
      </ul>
    </span>
  </nav>
</template>

<script>
import DribbbleIcon from './icons/Dribbble.vue';
import InstagramIcon from './icons/Instagram.vue';
import LinkedInIcon from './icons/LinkedIn.vue';

export default {
  name: 'Navigation',
  data() {
    return {};
  },
  components: {
    'dribbble-icon': DribbbleIcon,
    'instagram-icon': InstagramIcon,
    'linkedin-icon': LinkedInIcon,
  },
};
</script>

<style>
.navigation {
 padding: 90px 0;
}

.navigation__items {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.navigation__items--left {
  display: flex;
  flex-wrap: wrap;
}

.navigation__items--right {
  display: none;
}

.navigation__item {
  display: flex;
  align-items: center;
}

.navigation__logo {
  font-size: 26px;
  font-weight: bold;
  width: 100%;
}

@media only screen and (min-width: 768px) {
  .navigation {
    padding: 110px 0;
  }

  .navigation__items--right {
    display: flex;
  }

  .navigation__logo {
    width: auto;
  }
}
</style>
