<template>
  <div id="amtech">
    <div class="wrapper">
      <header class="project-intro">
        <amtech-icon />
        <h1 class="project-intro__title">
          <strong>Amtech</strong>
          <em class="project-intro__title--emphasized">
            &mdash; Innovative electronics manufacturing
          </em>
        </h1>
        <p class="project-intro__snippet">
          Amtech is unique in that they are forward thinking in the way they approach the
          electronics manufacturing space by utilizing their customizable floor space to fit any
          project. They were looking for an equally unique branding solution to showcase their
          values.
        </p>
        <h2 class="project-intro__heading">Scope of Work</h2>
        <p class="project-intro__snippet">
          A new brand design and identity, marketing material to get out the word, and web assets /
          illustrations for a new front facing website.
        </p>
      </header>
    </div>
    <section
      :class="`
        project-section
        project-section-1
        project-section--to-edge
        project-section--reversed-desktop`
      ">
      <div class="project-section__description">
        <div class="wrapper">
          <h2 class="project-section__heading">Adapting for the Future</h2>
          <p class="project-section__snippet">
            Amtech was founded in 1995 by immigrants looking for their small piece of the American
            dream. When first created, design was the last thing on their mind. We started by
            bringing a little bit of the old, and adapting it for the bright future that Amtech has
            in the electronics manufacturing space.
          </p>
        </div>
      </div>
      <img class="project-section__hero" src="/images/amtech_frame3.jpg" alt="" />
    </section>
    <section
      :class="`
        project-section
        project-section-2
        project-section--image-columns
        project-section--with-background`
      "
    >
      <div class="project-section__band project-section__band--amtech" />
      <div class="wrapper">
        <img
          alt=""
          class="project-section__image project-section__image--with-shadow"
          src="/images/amtech_logotype2.jpg"
        />
        <div class="col-rt">
          <img
            alt=""
            class="project-section__image project-section__image--with-shadow"
            src="/images/amtech_icon.jpg"
          />
          <img
            alt=""
            class="project-section__image project-section__image--with-shadow"
            src="/images/amtech_businesscards.jpg"
          />
          <img
            alt=""
            class="project-section__image project-section__image--with-shadow"
            src="/images/feature__amtech.jpg"
          />
          <img
            class="project-section__image project-section__image--with-shadow"
            src="/images/amtech_logotype3.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
    <div class="wrapper">
      <section
        :class="
          `project-section
          project-section-3
          project-section--desktop-flex
          project-section--reversed-desktop`
        "
      >
        <img
          alt=""
          class="project-section__image project-section__image--no-shadow fullstack-mockup"
          src="/images/amtech_fullstack.svg"
        />
        <div class="project-section__description">
          <h2 class="project-section__heading">
            <strong>Telling the Story Visually</strong>
            <em>&mdash; Web graphics and illustrations</em>
          </h2>
          <p class="project-section__snippet m-bottom-40">
            Talking about electronics isn’t always the most accessible conversation for everyone.
            Creating visuals to help future customers understand exactly what Amtech does was
            crucial.
          </p>
        </div>
      </section>
    </div>
    <section class="project-section project-section-4 project-section--background-image">
      <img
        alt=""
        class="project-section__image project-section__image--short hidden-on-desktop m-bottom-40"
        src="/images/amtech_circuitboard.jpg"
      />
      <div class="wrapper">
        <h2 class="project-section__heading">
          <strong>Accelerating Growth</strong>
          <em>&mdash; Marketing materials</em>
        </h2>
        <p class="project-section__snippet">
          Simply creating the companies brand identity isn’t enough. How that brand gets put to use
          and presented to customers is even more crucial to determine the effectiveness of all that
          work. Marketing collateral was created for trade shows, conferences, and sales meetings to
          help push Amtech’s growth forward.
        </p>
      </div>
    </section>
    <section class="project-section project-section-5 project-section--image-columns">
      <div class="project-section__band project-section__band--amtech-black" />
      <div class="wrapper">
        <div class="col-lt">
          <img
            alt=""
            class="project-section__image project-section__image--with-shadow"
            src="/images/amtech_brochure2.jpg"
          />
          <img
            alt=""
            class="project-section__image project-section__image--with-shadow"
            src="/images/amtech_poster.jpg"
          />
          <img
            alt=""
            class="project-section__image"
            src="/images/amtech_banner1.png"
          />
        </div>
        <img
          alt=""
          class="project-section__image project-section__image--with-shadow"
          src="/images/amtech_brochure1.jpg"
        />
      </div>
    </section>
    <cta-section />
    <more-projects />
  </div>
</template>

<script>
import AmtechIcon from '../../components/icons/Amtech.vue';
import CTASection from '../../components/CTASection.vue';
import MoreProjects from '../../components/MoreProjects.vue';

export default {
  name: 'Amtech',
  data() {
    return {};
  },
  components: {
    'amtech-icon': AmtechIcon,
    'cta-section': CTASection,
    'more-projects': MoreProjects,
  },
};
</script>

<style scoped>
.project-section-1 {
  margin-top: 65px;
}

.project-section-2 {
  margin-top: 62px;
}

.project-section-3 {
  padding: 100px 0 40px;
}

.project-section-5 {
  margin: 78px 0 248px;
}

@media only screen and (min-width: 768px) {
  .project-section--background-image {
    background-image: url('/images/amtech_circuitboard.jpg');
  }

  .fullstack-mockup {
    max-width: 540px;
    width: 60%;
  }

  .project-intro {
    margin-top: 44px;
  }

  .project-section-1 {
    margin-top: 108px;
  }

  .project-section-2 {
    margin-top: 154px;
  }

  .project-section-3 {
    padding: 112px 0 123px;
  }

  .project-section-4 {
    padding: 113px 0 112px;
  }

  .project-section-5 {
    margin: 112px 0 369px;
  }
}
</style>
