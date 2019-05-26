<template>
  <div id="home">
    <div class="wrapper">
      <div class="intro">
        <h1><strong>Austin Kandt</strong><em>&mdash; UI & Graphic Designer</em></h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam nemo vel a autem maxime
          corrupti maiores esse eum, nisi aliquam id placeat veritatis necessitatibus ratione
          itaque, quae non nesciunt quaerat!
        </p>
        <router-link to="/contact">
          <a class="project__link">
            More info
            <arrow-icon></arrow-icon>
          </a>
        </router-link>
      </div>
    </div>
    <section class="project project--reverse-mobile">
      <div class="project__description">
        <div class="wrapper">
          <ddp-logo class-name="project__icon"></ddp-logo>
          <h2 class="project__title">Downtown Detroit Partnership</h2>
          <p class="project__snippet">
            DDP is commited in their mission of growing Detroit’s urban core. I worked closely with
            their team developing a wide range of designs for print, events, and functional use.
          </p>
          <router-link
            to="/projects/downtown-detroit-partnership"
          >
            <a class="project__link">
              Take a look
              <arrow-icon></arrow-icon>
            </a>
          </router-link>
        </div>
      </div>
      <div class="project__hero-container">
        <img class="project__hero" src="../assets/images/projects_ddp.jpg" alt="Mockup of mockup" />
      </div>
    </section>
    <section class="project daily-ui m-bottom-100">
      <div class="wrapper">
        <img
          alt="Mockup of mobile application"
          class="project__hero project__hero--alt"
          src="../assets/images/projects_cozilo.jpg"
        />
        <div class="project__description m-top-50">
          <daily-ui-icon class-name="project__icon"></daily-ui-icon>
          <h2 class="project__title">Daily UI</h2>
          <p class="project__snippet">
            Daily UI is a 100 day design challenge with the goal of pushing your skills and
            portfolio in user interface and product design. Here is a collection of my daily work.
          </p>
          <router-link
            class="project__link"
            to="/projects/daily-ui"
          >
            <a>
              Take a look
              <arrow-icon></arrow-icon>
            </a>
          </router-link>
        </div>
      </div>
    </section>
    <dribbble-posts />
    <section class="project project--reverse-mobile m-top-0">
      <div class="project__description">
        <div class="wrapper">
          <safewhistle-logo class-name="project__icon"></safewhistle-logo>
          <h2 class="project__title">SafeWhistle</h2>
          <p class="project__snippet">
            An anonymous whistleblowing platform for corporations. Safewhistle provided a unique
            challenge in implementing a cohesive brand and product at every level.
          </p>
          <router-link to="/projects/safewhistle">
            <a class="project__link">
              Take a look
              <arrow-icon></arrow-icon>
            </a>
          </router-link>
        </div>
      </div>
      <div class="project__hero-container">
        <img
          class="project__hero left--100"
          src="../assets/images/projects_safewhistle.jpg"
          alt="Mockup of mockup"
        />
      </div>
    </section>
    <section class="CTA">
      <div class="wrapper">
        <p>
          Thanks for looking. You can either poke around my social media pages, continue looking at
          projects, or learn more about me and connect.
        </p>
      </div>
    </section>
    <more-projects />
  </div>
</template>

<script>
import ArrowIcon from '../components/icons/Arrow.vue';
import DailyUIIcon from '../components/icons/DailyUI.vue';
import DDPLogo from '../components/icons/DowntownDetroitPartnership.vue';
import DribbblePosts from '../components/DribbblePosts.vue';
import MoreProjects from '../components/MoreProjects.vue';
import SafewhistleLogo from '../components/icons/Safewhistle.vue';

export default {
  name: 'Home',
  data() {
    return {};
  },
  components: {
    'arrow-icon': ArrowIcon,
    'daily-ui-icon': DailyUIIcon,
    'ddp-logo': DDPLogo,
    'dribbble-posts': DribbblePosts,
    'more-projects': MoreProjects,
    'safewhistle-logo': SafewhistleLogo,
  },
};
</script>

<style scoped>
.intro {
  max-width: 460px;
}

.project.daily-ui .wrapper {
  align-items: center;
  display: flex;
  justify-content: space-between;
}

.project.daily-ui .wrapper img {
  margin-right: 60px;
  width: 560px;
}

.project.daily-ui .wrapper .project__description {
  flex: 1;
  margin-top: 0;
}

.CTA {
  margin-top: 100px;
}

@media only screen and (min-width: 768px) {
  .CTA {
    margin-top: 308px;
    width:670px;
  }
}
</style>

