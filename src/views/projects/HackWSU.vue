<template>
  <div id="hack-wsu">
    <div class="wrapper">
      <header class="project-intro">
        <hack-wsu-icon />
        <h1 class="project-intro__title">
          <strong>Hack WSU</strong>
          <em class="project-intro__title--emphasized">
            &mdash; Creating Detroit's largest hackathon
          </em>
        </h1>
        <p class="project-intro__snippet">
          Every year, Wayne State University holds a 24 hour hack-a-thon to promote innovation and
          learning within there tech community. They were looking to take a step forward with a new
          concept to draw students.
        </p>
        <h2 class="project-intro__heading">Scope of Work</h2>
        <p class="project-intro__snippet">
          Create an entirely new brand for the 2017 event, complete with illustrations to promote
          on the website, event signage, and merchandise.
        </p>
      </header>
    </div>
    <div class="wrapper">
      <section class="project-section project-section-1 project-section--desktop-flex">
        <img
          alt=""
          class="project-section__image project-section__image--full-width"
          src="/images/hackwsu_photo1.jpg"
        />
        <div class="project-section__description">
          <h2 class="project-section__heading">
            <strong>Connecting to the "Hacker" Community</strong>
          </h2>
          <p class="project-section__snippet">
            Sharing in my videogame geekdom with the rest of the community gave me instant
            inspiration to design 8-bit illustrations for the event to help create more buzz and by
            in from students. As a result, this was by far the highest attended Hackathon that
            Wayne State had hosted, and a lot of cool innovations were worked on by the
            participants.
          </p>
        </div>
      </section>
    </div>
    <section class="project-section project-section-2">
      <div class="wrapper">
        <img
          alt=""
          class="project-section__image is-marginless"
          src="/images/hackwsu_characters2.png"
        />
      </div>
    </section>
    <section class="project-section project-section-3 project-section--with-reverse-background">
      <div class="wrapper">
        <div class="row row--1">
          <div class="is-marginless">
            <img
              alt=""
              class="project-section__image project-section__image--with-shadow"
              src="/images/hackwsu_sunsethero.jpg"
            />
          </div>
        </div>
        <div class="row row--1 row--desktop-2">
          <div class="is-marginless">
            <img
              alt=""
              class="project-section__image project-section__image--with-shadow"
              src="/images/hackwsu_photo2.jpg"
            />
          </div>
          <div class="is-marginless">
            <img
              alt=""
              class="project-section__image project-section__image--with-shadow"
              src="/images/hackwsu_photo6.jpg"
            />
          </div>
        </div>
        <div class="row row--1">
          <div class="is-marginless">
            <img
              alt=""
              class="project-section__image project-section__image--with-shadow"
              src="/images/hackwsu_underground.jpg"
            />
          </div>
        </div>
        <div class="row row--1">
          <div class="is-marginless">
            <img
              alt=""
              class="project-section__image project-section__image--with-shadow"
              src="/images/hackwsu_photo6.jpg"
            />
          </div>
        </div>
        <div class="row row--1 row--desktop-2">
          <div class="is-marginless">
            <img
              alt=""
              class="project-section__image project-section__image--with-shadow"
              src="/images/hackwsu_photo5.jpg"
            />
          </div>
          <div class="is-marginless">
            <img
              alt=""
              class="project-section__image project-section__image--with-shadow"
              src="/images/hackwsu_photo3.jpg"
            />
          </div>
        </div>
      </div>
    </section>
    <cta-section />
    <more-projects />
  </div>
</template>

<script>
import CTASection from '../../components/CTASection.vue';
import HackWSUIcon from '../../components/icons/HackWSU.vue';
import MoreProjects from '../../components/MoreProjects.vue';

export default {
  name: 'HackWSU',
  data() {
    return {};
  },
  components: {
    'cta-section': CTASection,
    'hack-wsu-icon': HackWSUIcon,
    'more-projects': MoreProjects,
  },
};
</script>

<style scoped>
.project-section-1 {
  margin-bottom: 121px;
}

.project-section-2 {
  margin-bottom: -13px;
}

.project-section-2 .project-section__image {
  position: relative;
  z-index: 10;
}

.project-section-3 {
  padding-top: 203px;
  margin-bottom: 208px;
}

@media only screen and (min-width: 768px) {
  .project-section-1 {
    margin-bottom: 200px;
  }

  .project-section-2 {
    margin-bottom: -38px;
  }
}
</style>
