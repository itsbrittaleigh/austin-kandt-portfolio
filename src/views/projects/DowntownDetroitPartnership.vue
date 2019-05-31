<template>
  <div id="downtown-detroit-partnership">
    <div class="wrapper">
      <header class="project-intro">
        <ddp-icon />
        <h1 class="project-intro__title">
          <strong>Downtown Detroit Partnership</strong>
          <em class="project-intro__title--emphasized">
            &mdash; Advancing Detroit through engagement
          </em>
        </h1>
        <p class="project-intro__snippet">
          The Downtown Detroit Partnership strengthens the city of Detroit through programs, events,
          and initiatives designed to create a vibrant urban core.
        </p>
        <p class="project-intro__snippet m-top-30">
          I worked extensively with them in the creation of a wide range of design material for
          events and community outreach initiatives.
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
          <h2 class="project-section__heading">
            <strong>Ambassador Vehicles</strong>
            <em class="project-section__heading--emphasized">&mdash; Vehicle design</em>
          </h2>
          <p class="project-section__snippet">
            DDP was looking for a refresh of their downtown vehicles to be more noticeable and
            welcoming to help facilitate a better back and forth between their ambassadors and the
            people that visit downtown.
          </p>
        </div>
      </div>
      <img class="project-section__hero" src="/images/ddp_vehicles_header.jpg" alt="" />
    </section>
    <section
      :class="
        `project-section
        project-section-2
        project-section--image-columns
        project-section--with-background-alt`
      "
    >
      <div class="project-section__band project-section__band--ddp-green" />
      <div class="wrapper">
        <img
          alt=""
          class="project-section__image project-section__image--with-shadow"
          src="/images/ddp_vehicle_pic.jpg"
        />
        <img
          alt=""
          class="project-section__image project-section__image--with-shadow"
          src="/images/ddp_vehicle1_outline.jpg"
        />
        <img
          alt=""
          class="project-section__image project-section__image--with-shadow"
          src="/images/ddp_vehicle1_pic.jpg"
        />
        <img
          alt=""
          class="project-section__image project-section__image--with-shadow"
          src="/images/ddp_vehicle2_outline.jpg"
        />
        <img
          alt=""
          class="project-section__image project-section__image--with-shadow"
          src="/images/ddp_vehicle2_pic.jpg"
        />
        <img
          alt=""
          class="project-section__image project-section__image--with-shadow"
          src="/images/ddp_vehicle3_outline.jpg"
        />
        <img
          alt=""
          class="project-section__image project-section__image--with-shadow"
          src="/images/ddp_vehicle3_pic.jpg"
        />
      </div>
    </section>
    <div class="wrapper">
      <section class="project-section project-section-3 project-section--desktop-flex">
        <img
          alt=""
          class="project-section__image project-section__image--no-shadow fullstack-mockup"
          src="/images/DDP_perceptionsreport_MOCKUP2.jpg"
        />
        <div class="project-section__description">
          <h2 class="project-section__heading">
            <strong>2018 Perceptions Report</strong>
            <em>&mdash; Print media, infographics</em>
          </h2>
          <p class="project-section__snippet m-bottom-40">
            Every year DDP collects data through surveys sent out to a diverse sample size of
            residents. I was tasked with making this data accessible and easy to digest in a 20
            page booklet for residents and influencers.
          </p>
        </div>
      </section>
    </div>
    <section
      :class="
        `project-section
        project-section-4
        project-section--image-columns`
      "
    >
      <div class="project-section__band project-section__band--ddp-blue" />
      <div class="wrapper">
        <img
          alt=""
          class="project-section__image project-section__image--with-shadow"
          src="/images/DDP_perceptionsreport_cover.jpg"
        />
        <img
          alt=""
          class="project-section__image project-section__image--with-shadow"
          src="/images/DDP_perceptionsreport_pg2n3.jpg"
        />
        <img
          alt=""
          class="project-section__image project-section__image--with-shadow"
          src="/images/DDP_perceptionsreport_pg8n9.jpg"
        />
        <img
          alt=""
          class="project-section__image project-section__image--with-shadow"
          src="/images/DDP_perceptionsreport_pg10n11.jpg"
        />
      </div>
    </section>
    <div class="wrapper">
      <section class="project-section project-section-5 project-section--desktop-flex">
        <img
          alt=""
          class="project-section__image project-section__image--full-width"
          src="/images/ddp_summerparks_pic.jpg"
        />
        <div class="project-section__description">
          <h2 class="project-section__heading">
            <strong>Summer Parks</strong>
            <em>&mdash; Signage, social media graphics</em>
          </h2>
          <p class="project-section__snippet m-bottom-40">
            Every year DDP collects data through surveys sent out to a diverse sample size of
            residents. I was tasked with making this data accessible and easy to digest in a 20
            page booklet for residents and influencers.
          </p>
        </div>
      </section>
    </div>
    <cta-section />
    <more-projects />
  </div>
</template>

<script>
import CTASection from '../../components/CTASection.vue';
import DDPIcon from '../../components/icons/DowntownDetroitPartnership.vue';
import MoreProjects from '../../components/MoreProjects.vue';

export default {
  name: 'DowntownDetroitPartnership',
  data() {
    return {};
  },
  components: {
    'cta-section': CTASection,
    'ddp-icon': DDPIcon,
    'more-projects': MoreProjects,
  },
};
</script>

<style>
.project-section-2 {
  padding-bottom: 78px;
}

.project-section-3 {
  margin-top: 80px;
}

.project-section-4 {
  margin-top: 40px;
}

.project-section-5 {
  margin-top: 156px;
}

.project-section-5 .project-section__description {
  margin-top: 40px;
}
</style>
