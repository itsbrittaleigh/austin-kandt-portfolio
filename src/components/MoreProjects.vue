<template>
  <div class="more-projects__section wrapper">
    <h2 class="m-bottom-10">More Projects</h2>
    <div class="more-projects">
      <router-link
        class="more-projects__project"
        v-for="project in randomProjects"
        :key="project.slug"
        :to="{
          name: 'project',
          params: {
            title: project.slug,
          },
        }"
      >
        <a>
          <img
            class="more-projects__project-image"
            :src="`/images/${project.image}`"
            :alt="project.name"
          />
        </a>
      </router-link>
      <router-link
        class="more-projects__all-projects-link"
        to="/projects"
      >
        <a class="project__link is-marginless">
          See all
          <arrow-icon></arrow-icon>
        </a>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import shuffleArray from '../utilities/shuffleArray';
import ArrowIcon from './icons/Arrow.vue';

export default {
  name: 'MoreProjects',
  data() {
    return {};
  },
  components: {
    'arrow-icon': ArrowIcon,
  },
  computed: {
    ...mapGetters([
      'projects',
    ]),
    randomProjects() {
      const randomizedProjects = shuffleArray(this.projects);
      return randomizedProjects.slice(0, 3);
    },
  },
};
</script>

<style>
.more-projects {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
}

.more-projects__project {
  box-shadow: 0px 8px 15px rgba(136, 136, 136, 0.35);
  margin-bottom: 10px;
  width: calc((100% - 10px) / 2);
}

.more-projects__project-image {
  display: block;
  width: 100%;
}

.more-projects__all-projects-link {
  align-items: center;
  display: flex;
  justify-content: center;
  width: calc((100% - 10px) / 2);
}

@media only screen and (min-width: 768px) {
  .more-projects__section {
    margin-top: 134px;
    padding-bottom: 47px;
  }

  .more-projects__project {
    width: calc((100% - 40px) / 3);
  }

  .more-projects__all-projects-link {
    position: absolute;
    top: calc(100% + 20px);
    right: 0;
    width: auto;
  }
}
</style>
