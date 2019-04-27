<template>
  <component :is="project.slug" />
</template>

<script>
import { mapGetters } from 'vuex';
import Amtech from './projects/Amtech.vue';
import DailyUI from './projects/DailyUI.vue';
import DowntownDetroitPartnership from './projects/DowntownDetroitPartnership.vue';
import GaddisGaming from './projects/GaddisGaming.vue';
import HackWSU from './projects/HackWSU.vue';
import Safewhistle from './projects/Safewhistle.vue';

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
    'daily-ui': DailyUI,
    'downtown-detroit-partnership': DowntownDetroitPartnership,
    'gaddis-gaming': GaddisGaming,
    'hack-wsu': HackWSU,
    safewhistle: Safewhistle,
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
