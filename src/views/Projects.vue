<template>
  <div class="projects">
    <div class="wrapper">
      <h1><strong>Work</strong><em> &mdash; Selected projects from 2016 - 2019</em></h1>
      <p class="project__description project__description--header m-top-10 m-bottom-75">
        Here you’ll see a wide range of project types and industries that I’ve had the pleasure to
        work for over the recent years. You can keep track of more day to day stuff on my
        <a href="https://dribbble.com/austinkandt" target="_blank">Dribbble page.</a>
      </p>
      <section class="project">
        <router-link to="/projects/amtech">
          <a>
            <img class="project__image" src="/images/feature__amtech.jpg" alt="Amtech" />
          </a>
        </router-link>
        <div>
          <h2 class="is-marginless">
            <router-link to="/projects/amtech">
              <a>
                Amtech
              </a>
            </router-link>
          </h2>
          <p class="project__type"><em>&mdash; Branding, graphic design, web illustration</em></p>
          <p class="project__description">
            Amtech was looking to merge their unique approach to electronics manufacturing with
            high-end design solutions as a way to bring new opportunities to their business.
          </p>
        </div>
      </section>
      <section class="project">
        <router-link to="/projects/daily-ui">
          <a>
            <img class="project__image" src="/images/feature__daily-ui.jpg" alt="Daily UI" />
          </a>
        </router-link>
        <div>
          <h2 class="is-marginless">
            <router-link to="/projects/daily-ui">
              <a>
                Daily UI
              </a>
            </router-link>
          </h2>
          <p class="project__type"><em>&mdash; User interface design, graphic design</em></p>
          <p class="project__description">
            Daily UI is a 100 day design challenge with the goal of pushing your skills and
            portfolio in user interface and product design. Here is a collection of my daily work.
          </p>
        </div>
      </section>
      <section class="project">
        <router-link to="/projects/downtown-detroit-partnership">
          <a>
            <img
              alt="Downtown Detroit Partnership"
              class="project__image"
              src="/images/feature__ddp.jpg"
            />
          </a>
        </router-link>
        <div>
          <h2 class="is-marginless">
            <router-link to="/projects/downtown-detroit-partnership">
              <a>
                Downtown Detroit Partnership
              </a>
            </router-link>
          </h2>
          <p class="project__type"><em>&mdash; Graphic design, web illustration</em></p>
          <p class="project__description">
            DDP is commited in their mission of growing Detroit’s urban core. I worked closely with
            their team developing a wide range of designs for print, events, and functional use.
          </p>
        </div>
      </section>
      <section class="project">
        <router-link to="/projects/gaddis-gaming">
          <a>
            <img
              alt="Gaddis Gaming"
              class="project__image"
              src="/images/feature__gaddis-gaming.jpg"
            />
          </a>
        </router-link>
        <div>
          <h2 class="is-marginless">
            <router-link to="/projects/gaddis-gaming">
              <a>
                Gaddis Gaming
              </a>
            </router-link>
          </h2>
          <p class="project__type"><em>&mdash; Art direction, branding, graphic design</em></p>
          <p class="project__description">
            Gaddis Gaming was looking for an influx of funding from Kickstarter to take their table
            topper to the next level, and needed high level branding and design to stand out from
            the crowd.
          </p>
        </div>
      </section>
      <section class="project">
        <router-link to="/projects/hack-wsu">
          <a>
            <img class="project__image" src="/images/feature__hack-wsu.jpg" alt="Hack WSU" />
          </a>
        </router-link>
        <div>
          <h2 class="is-marginless">
            <router-link to="/projects/hack-wsu">
              <a>
                Hack WSU
              </a>
            </router-link>
          </h2>
          <p class="project__type"><em>&mdash; Graphic design, web illustration</em></p>
          <p class="project__description">
            Wayne State University was holding their yearly hackathon, and they were looking to
            take a major step up from previous years attendance numbers with a unique design
            concept.
          </p>
        </div>
      </section>
      <section class="project">
        <router-link to="/projects/safewhistle">
          <a>
            <img class="project__image" src="/images/feature__safewhistle.jpg" alt="SafeWhistle" />
          </a>
        </router-link>
        <div>
          <h2 class="is-marginless">
            <router-link to="/projects/safewhistle">
              <a>
                Safewhistle
              </a>
            </router-link>
          </h2>
          <p class="project__type"><em>&mdash; Branding, graphic design, product design</em></p>
          <p class="project__description">
            An anonymous whistleblowing platform for corporations. Safewhistle provided a unique
            challenge in implementing a cohesive brand and product at every level.
          </p>
        </div>
      </section>
    </div>
    <dribbble-posts />
  </div>
</template>

<script>
import DribbblePosts from '../components/DribbblePosts.vue';

export default {
  name: 'Home',
  data() {
    return {};
  },
  components: {
    'dribbble-posts': DribbblePosts,
  },
};
</script>

<style scoped>
.project {
  margin: 0 0 80px;
}

.project__image {
  box-shadow: 0px 8px 15px rgba(136, 136, 136, 0.35);
  margin-bottom: 40px;
  width: 100%;
}

h2 {
  font-size: 26px;
  line-height: 1.346;
}

.project__type {
  font-size: 22px;
  line-height: 1.364;
  margin: 0 0 10px;
}

.project__description {
  font-size: 16px;
  line-height: 1.375;
  margin-top: 10px;
}

.project__description--header a {
  text-decoration: underline;
}

@media only screen and (min-width: 768px) {
  .project__description--header {
    max-width: 504px;
    margin-bottom: 253px;
  }

  .project {
    align-items: center;
    display: flex;
    margin-bottom: 40px;
  }

  .project:last-of-type {
    margin-bottom: 112px;
  }

  .project__image {
    margin: 0 40px 0 0;
    width: 300px;
  }

  .project > div {
    flex: 1;
  }
}
</style>
