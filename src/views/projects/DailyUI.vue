<template>
  <div id="daily-ui">
    <div class="wrapper">
      <header class="project-intro">
        <daily-ui-icon />
        <h1 class="project-intro__title">
          <strong>Daily UI</strong>
          <em class="project-intro__title--emphasized">&mdash; 100 user interface designs</em>
        </h1>
        <p class="project-intro__snippet">
          I decided to partake in a daily UI challenge by creating for a wide range of
          applications, screen types, and scenarios that one would encounter in this industry.
        </p>
        <p class="project-intro__snippet m-top-30">
          I always come at the problem from the side of the user. What are they trying to
          accomplish? Where do their eyes look first? What sort of enjoyment are they getting from
          the interaction?
        </p>
      </header>
    </div>
    <div class="wrapper">
      <div class="desktop-row row-1-2">
        <section class="daily-ui-project">
          <p class="daily-ui-project__label align-left">
            <em>
              ~ 001
              <br>
              Sign Up
            </em>
          </p>
          <img
            alt=""
            class="daily-ui-project__image"
            src="/images/daily-ui_001_signup.gif"
          />
        </section>
        <section class="daily-ui-project">
          <p class="daily-ui-project__label align-right">
            <em>
              ~ 002
              <br>
              Credit Card
            </em>
          </p>
          <img
            alt=""
            class="daily-ui-project__image"
            src="/images/daily-ui_002_creditcard.png"
          />
        </section>
      </div>
      <div class="desktop-row row-1">
        <section class="daily-ui-project">
          <p class="daily-ui-project__label align-left">
            <em>
              ~ 003
              <br>
              Landing Page
            </em>
          </p>
          <img
            alt=""
            class="daily-ui-project__image"
            src="/images/daily-ui_003_landingpage.jpg"
          />
        </section>
      </div>
      <div class="desktop-row row-1-1">
        <section class="daily-ui-project">
          <p class="daily-ui-project__label align-left">
            <em>
              ~ 004
              <br>
              Calculator
            </em>
          </p>
          <img
            alt=""
            class="daily-ui-project__image"
            src="/images/daily-ui_004_calculator_dark.jpg"
          />
        </section>
        <section class="daily-ui-project">
          <img
            alt=""
            class="daily-ui-project__image"
            src="/images/daily-ui_004_calculator_light.jpg"
          />
        </section>
      </div>
      <div class="desktop-row row-2-1">
        <section class="daily-ui-project">
          <p class="daily-ui-project__label align-left">
            <em>
              ~ 005
              <br>
              App Icon
            </em>
          </p>
          <img
            alt=""
            class="daily-ui-project__image"
            src="/images/daily-ui_005_appicon.jpg"
          />
        </section>
        <section class="daily-ui-project">
          <p class="daily-ui-project__label align-right">
            <em>
              ~ 006
              <br>
              User Profile
            </em>
          </p>
          <img
            alt=""
            class="daily-ui-project__image"
            src="/images/daily-ui_006_userprofile.jpg"
          />
        </section>
      </div>
      <div class="desktop-row row-1">
        <section class="daily-ui-project">
          <p class="daily-ui-project__label align-left">
            <em>
              ~ 009
              <br>
              Music Player
            </em>
          </p>
          <img
            alt=""
            class="daily-ui-project__image"
            src="/images/daily-ui_009_musicplayer.jpg"
          />
        </section>
      </div>
    </div>
    <cta-section />
    <more-projects />
  </div>
</template>

<script>
import CTASection from '../../components/CTASection.vue';
import DailyUIIcon from '../../components/icons/DailyUI.vue';
import MoreProjects from '../../components/MoreProjects.vue';

export default {
  name: 'DailyUI',
  data() {
    return {};
  },
  components: {
    'cta-section': CTASection,
    'daily-ui-icon': DailyUIIcon,
    'more-projects': MoreProjects,
  },
};
</script>

<style scoped>
.project-intro {
  margin-bottom: 133px;
}

.wrapper:nth-child(2) {
  margin-bottom: 198px;
}

@media only screen and (min-width: 768px) {
  .project-intro {
    margin-bottom: 185px;
  }

  .wrapper:nth-child(2) {
    margin-bottom: 408px;
  }
}
</style>
