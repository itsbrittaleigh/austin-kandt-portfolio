<template>
  <div id="home">
    <div class="wrapper">
      <h1><strong>Austin Kandt</strong><em>&mdash; UI & Graphic Designer</em></h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam nemo vel a autem maxime
        corrupti maiores esse eum, nisi aliquam id placeat veritatis necessitatibus ratione itaque,
        quae non nesciunt quaerat!
      </p>
      <router-link to="/contact">
        <a class="project__link">
          More info
          <arrow-icon></arrow-icon>
        </a>
      </router-link>
    </div>
    <section class="project project--reverse-mobile">
      <div class="project__description">
        <div class="wrapper">
          <ddp-logo></ddp-logo>
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
    <section class="project m-bottom-100">
      <div class="project__hero-container project__hero-wrapper-width project__hero--shadowed">
        <img
          alt="Mockup of mobile application"
          class="project__hero"
          src="../assets/images/projects_cozilo.jpg"
        />
      </div>
      <div class="wrapper">
        <div class="project__description m-top-50">
          <daily-ui-icon></daily-ui-icon>
          <h2 class="project__title">Daily UI</h2>
          <p class="project__snippet">
            Daily UI is a 100 day design challenge with the goal of pushing your skills and
            portfolio in user interface and product design. Here is a collection of my daily work.
          </p>
        </div>
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
    </section>
    <dribbble-posts />
    <section class="project project--reverse-mobile m-top-0">
      <div class="project__description">
        <div class="wrapper">
          <safewhistle-logo></safewhistle-logo>
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
      <p>
        Thanks for looking. You can either poke around my social media pages, continue looking at
        projects, or learn more about me and connect.
      </p>
    </section>
    <more-projects />
  </div>
</template>

<script>
import ArrowIcon from '../components/icons/Arrow.vue';
import DailyUIIcon from '../components/icons/DailyUI.vue';
import DDPLogo from '../components/logos/DowntownDetroitPartnership.vue';
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
