<template>
  <div id="gaddis-gaming">
    <div class="wrapper">
      <header class="project-intro">
        <gaddis-gaming-icon />
        <h1 class="project-intro__title">
          <strong>Gaddis Gaming</strong>
          <em class="project-intro__title--emphasized">
            &mdash; High end gaming
          </em>
        </h1>
        <p class="project-intro__snippet">
          After the launch of their prototype table topper, Gaddis Gaming was looking for an influx
          of funding to take their product to the next level. The plan was to fully redo the
          branding and product to position the company for a successful Kickstarter campaign.
        </p>
        <h2 class="project-intro__heading">Scope of Work</h2>
        <p class="project-intro__snippet">
          I created the entire brand identity system, designed the guard rails on the product
          itself, and created and managed the launch of the Kickstarter campaign.
        </p>
      </header>
    </div>
    <section class="project-section project-section-1 project-section--to-edge">
      <img class="project-section__hero" src="/images/gg_pic1_product.jpg" alt="" />
      <div class="project-section__description">
        <div class="wrapper">
          <h2 class="project-section__heading">
            <strong>Appealing to the Gamer Community</strong>
          </h2>
          <p class="project-section__snippet">
            Table top gaming, such as D n’ D and Warhammer 40K, is a big deal within a niche
            market. Gamers are looking for a quality product that extends the realm of fantasy that
            they are playing in. Combining this with a clean, modern aesthetic, we were able to
            create an identity that stuck.
          </p>
        </div>
      </div>
    </section>
    <section class="project-section project-section-2 project-section--image-columns">
      <div class="project-section__band project-section__band--gaddis-blue" />
      <div class="wrapper">
        <img
          alt=""
          class="project-section__image project-section__image--with-shadow"
          src="/images/gg_logo1.jpg"
        />
        <div class="col-lt">
          <img
            alt=""
            class="project-section__image project-section__image--with-shadow"
            src="/images/gg_logo2.jpg"
          />
          <img
            alt=""
            class="project-section__image project-section__image--with-shadow"
            src="/images/gg_pic2_tshirt.jpg"
          />
          <img
            alt=""
            class="project-section__image project-section__image--with-shadow"
            src="/images/gg_businesscards.jpg"
          />
          <img
            alt=""
            class="project-section__image project-section__image--with-shadow"
            src="/images/gg_logo_gif.jpg"
          />
        </div>
      </div>
    </section>
    <section class="project-section project-section-3">
      <div class="wrapper">
        <div class="project-section__description">
          <h2 class="project-section__heading"><strong>Brand Iterations</strong></h2>
          <p class="project-section__snippet">
            Different iterations of the brand were worked through to try and highlight particular
            attributes to connect with the people who would be Gaddis’s customers.
          </p>
        </div>
        <div class="daily-ui-project daily-ui-project-1">
          <p class="daily-ui-project__label align-left">
            <em>
              ~ Concept
              <br>
              #001
            </em>
          </p>
          <img
            alt=""
            class="daily-ui-project__image"
            src="/images/gg_stylescape1_1.jpg"
          />
          <img
            alt=""
            class="daily-ui-project__image"
            src="/images/gg_stylescape1_2.jpg"
          />
        </div>
        <div class="daily-ui-project daily-ui-project-2">
          <p class="daily-ui-project__label align-left">
            <em>
              ~ Concept
              <br>
              #002
            </em>
          </p>
          <img
            alt=""
            class="daily-ui-project__image"
            src="/images/gg_stylescape2_1.jpg"
          />
          <img
            alt=""
            class="daily-ui-project__image"
            src="/images/gg_stylescape2_2.jpg"
          />
        </div>
        <div class="daily-ui-project daily-ui-project-3">
          <p class="daily-ui-project__label align-left">
            <em>
              ~ Concept
              <br>
              #003
            </em>
          </p>
          <img
            alt=""
            class="daily-ui-project__image"
            src="/images/gg_stylescape3_1.jpg"
          />
          <img
            alt=""
            class="daily-ui-project__image"
            src="/images/gg_stylescape3_2.jpg"
          />
        </div>
      </div>
    </section>
    <div class="wrapper">
      <section
        :class="`
          project-section
          project-section-4
          project-section--desktop-flex
          project-section--reversed-desktop
        `"
      >
        <div class="project-section__description">
          <h2 class="project-section__heading"><strong>The Gaddis Gaming Table Topper</strong></h2>
          <p class="project-section__snippet">
            Being a Kickstarter campaign, Gaddis was still finalizing it’s products details and
            wanted to offer custom guard rails to add more value for it’s supporters.
          </p>
        </div>
        <img
          alt=""
          class="project-section__image project-section__image--full-width"
          src="/images/gg_pic2_product.jpg"
        />
      </section>
    </div>
    <section class="project-section project-section-5 project-section--image-columns">
      <div class="project-section__band project-section__band--gaddis-black" />
      <div class="wrapper">
        <img
          alt=""
          class="project-section__image"
          src="/images/gg_table2.png"
        />
        <div class="col-rt">
          <img
            alt=""
            class="project-section__image project-section__image--with-shadow"
            src="/images/gg_tablelines.jpg"
          />
          <img
            alt=""
            class="project-section__image project-section__image--with-shadow"
            src="/images/gg_tableguard1.png"
          />
          <img
            alt=""
            class="project-section__image project-section__image--with-shadow"
            src="/images/gg_tableguard2.png"
          />
          <img
            alt=""
            class="project-section__image project-section__image--with-shadow"
            src="/images/gg_tableguard3.png"
          />
          <img
            alt=""
            class="project-section__image project-section__image--with-shadow"
            src="/images/gg_tableguard4.png"
          />
          <img
            alt=""
            class="project-section__image project-section__image--with-shadow"
            src="/images/gg_tableguard_pic2.jpg"
          />
          <img
            alt=""
            class="project-section__image project-section__image--with-shadow"
            src="/images/gg_tableguard_pic1.jpg"
          />
        </div>
      </div>
    </section>
    <cta-section />
    <more-projects />
  </div>
</template>

<script>
import CTASection from '../../components/CTASection.vue';
import GaddisGamingIcon from '../../components/icons/GaddisGaming.vue';
import MoreProjects from '../../components/MoreProjects.vue';

export default {
  name: 'GaddisGaming',
  data() {
    return {};
  },
  components: {
    'cta-section': CTASection,
    'gaddis-gaming-icon': GaddisGamingIcon,
    'more-projects': MoreProjects,
  },
};
</script>

<style scoped>
.project-intro {
  margin-bottom: 52px;
}

.project-section-2 {
  margin-top: 93px;
}

.project-section-3 {
  margin-top: 156px;
}

.project-section-4 {
  margin-top: 156px;
}

.project-section-5 {
  margin: 159px 0 260px;
}

.daily-ui-project .daily-ui-project__image {
  margin-bottom: 20px;
}

.daily-ui-project-1 {
  margin-top: 86px;
}

.daily-ui-project-2,
.daily-ui-project-3 {
  margin-top: 10px;
}

@media only screen and (min-width: 768px) {
  .project-section-1 {
    margin-top: 98px;
  }

  .project-section-2 {
    margin-top: 80px;
  }

  .project-section-3 {
    margin-top: 100px;
  }

  .project-section-3 .project-section__description {
    width: 560px;
  }

  .project-section-4 {
    margin-top: 200px
  }

  .project-section-5 {
    margin: 147px 0 374px;
  }

  .daily-ui-project-1 {
    margin-top: 20px;
  }

  .daily-ui-project-2,
  .daily-ui-project-3 {
    margin-top: 40px;
  }
}

@media only screen and (min-width: 990px) {
  .project-section-1 .project-section__description {
    margin-right: calc((100vw - 940px) / 2);
  }
}
</style>
