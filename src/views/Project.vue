<template>
  <div id="project">
    <component :is="project.slug" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Amtech from './projects/Amtech.vue';

export default {
  name: 'Project',
  props: ['title'],
  data() {
    return {
      project: {},
    };
  },
  components: {
    amtech: Amtech,
  },
  computed: {
    ...mapGetters([
      'projects',
    ]),
  },
  mounted() {
    this.project = this.projects.find(project => project.slug === this.title);
  },
};
</script>

<style>

</style>
