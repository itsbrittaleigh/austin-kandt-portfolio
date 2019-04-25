<template>
  <nav>
    <ul>
      <span class="Nav__left">
        <li>
          <a href="https://www.linkedin.com/in/austinkandt/" target="_blank">
            <img src="https://placekitten.com/20" alt="LinkedIn logo" />
          </a>
        </li>
        <li>
          <a href="https://dribbble.com/austinkandt" target="_blank">
            <img src="https://placekitten.com/20" alt="Dribbble logo" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/austinkandt/" target="_blank">
            <img src="https://placekitten.com/20" alt="Instagram logo" />
          </a>
        </li>
      </span>
      <span class="Nav__right">
        <li>
          <router-link to="/projects">
            <a>Work</a>
          </router-link>
        </li>
        <li>
          <router-link to="/contact">
            <a>Info</a>
          </router-link>
        </li>
      </span>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {};
  },
};
</script>

<style>
ul {
  margin: 0;
}
</style>
