<template>
  <div id="home">
    <div class="wrapper">
      <div class="intro project-intro">
        <house-of-kandt-icon />
        <h1 class="project-intro__title">
          <strong>Austin Kandt </strong>
          <em class="project-intro__title--emphasized">&mdash; UI & Graphic Designer</em>
        </h1>
        <p class="project-intro__snippet">
          Welcome to my portfolio website. Currently working and accepting freelance gigs at Kandt
          Design, LLC.
        </p>
        <router-link to="/contact">
          <a class="project__link">
            More info
            <arrow-icon></arrow-icon>
          </a>
        </router-link>
      </div>
    </div>
    <section class="project ddp project--reverse-mobile">
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
        <router-link to="/projects/downtown-detroit-partnership">
          <img class="project__hero" src="/images/projects_ddp.jpg" alt="Mockup of mockup" />
        </router-link>
      </div>
    </section>
    <section class="project daily-ui m-bottom-100">
      <div class="wrapper">
        <router-link to="/projects/daily-ui">
          <img
            alt="Mockup of mobile application"
            class="project__hero project__hero--alt"
            src="/images/projects_cozilo.jpg"
          />
        </router-link>
        <div class="project__description m-top-50">
          <daily-ui-icon class-name="project__icon"></daily-ui-icon>
          <h2 class="project__title">Daily UI</h2>
          <p class="project__snippet">
            Daily UI is a 100 day design challenge with the goal of pushing your skills and
            portfolio in user interface and product design. Here is a collection of my daily work.
          </p>
          <router-link to="/projects/daily-ui">
            <a class="project__link">
              Take a look
              <arrow-icon></arrow-icon>
            </a>
          </router-link>
        </div>
      </div>
    </section>
    <dribbble-posts />
    <section class="project safewhistle project--reverse-mobile m-top-0">
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
          src="/images/projects_safewhistle.jpg"
          alt="Mockup of mockup"
        />
      </div>
    </section>
    <cta-section />
    <more-projects />
  </div>
</template>

<script>
import ArrowIcon from '../components/icons/Arrow.vue';
import CTASection from '../components/CTASection.vue';
import DailyUIIcon from '../components/icons/DailyUI.vue';
import DDPLogo from '../components/icons/DowntownDetroitPartnership.vue';
import DribbblePosts from '../components/DribbblePosts.vue';
import HouseOfKandtIcon from '../components/icons/HouseOfKandt.vue';
import MoreProjects from '../components/MoreProjects.vue';
import SafewhistleLogo from '../components/icons/Safewhistle.vue';

export default {
  name: 'Home',
  data() {
    return {};
  },
  components: {
    'arrow-icon': ArrowIcon,
    'cta-section': CTASection,
    'daily-ui-icon': DailyUIIcon,
    'ddp-logo': DDPLogo,
    'dribbble-posts': DribbblePosts,
    'house-of-kandt-icon': HouseOfKandtIcon,
    'more-projects': MoreProjects,
    'safewhistle-logo': SafewhistleLogo,
  },
};
</script>

<style scoped>
.intro {
  max-width: 500px;
}

.project.safewhistle {
  margin-bottom: 100px;
}

@media only screen and (min-width: 768px) {
  .intro {
    margin: 85px 0 195px;
  }

  .project.ddp .project__description,
  .project.safewhistle .project__description {
    margin-right: 60px;
    width: 320px;
  }

  .project.ddp {
    align-items: center;
    display: flex;
    margin-top: 282px;
  }

  .project.ddp .project__description,
  .project.safewhistle .project__description {
    margin-left: 25px;
  }

  .project.ddp .project__description .wrapper,
  .project.safewhistle .project__description .wrapper {
    margin: 0;
  }

  .project.ddp .project__hero-container {
    flex: 1;
  }

  .project.daily-ui .wrapper {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 195px auto;
  }

  .project.daily-ui .wrapper a {
    margin-right: 60px;
    width: 60%;
    max-width: 560px
  }

  .project.daily-ui .wrapper .project__description {
    flex: 1;
    margin-top: 0;
  }

  .project.safewhistle {
    background: #EDF1F4 url('/images/projects_safewhistle.jpg') no-repeat;
    background-position: top -200px right -500px;
    background-size: cover;
    padding: 353px 0 157px;
  }

  .project.safewhistle .project__hero-container {
    display: none;
    visibility: hidden;
  }

  .project.safewhistle {
    margin-bottom: 308px;
  }
}

@media only screen and (min-width: 990px) {
  .project.ddp .project__description,
  .project.safewhistle .project__description {
    margin-left: calc((100vw - 940px) / 2);
  }
}
</style>

