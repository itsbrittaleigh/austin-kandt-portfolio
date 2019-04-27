<template>
  <div id="more-projects">
    <router-link
      v-for="project in projects"
      :key="project.slug"
      :to="`/projects/${project.slug}`"
    >
      <a>
        <img src="https://placekitten.com/300/225" alt="" />
      </a>
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'MoreProjects',
  data() {
    return {
      randomProjects: [],
    };
  },
  computed: {
    ...mapGetters([
      'projects',
    ]),
  },
};
</script>

<style>

</style>
