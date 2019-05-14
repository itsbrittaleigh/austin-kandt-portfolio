<template>
  <div id="projects">
    <h1><strong>Austin Kandt</strong> &mdash; UI & Graphic Designer</h1>
    <p>
      Here you’ll see a wide range of project types and industries that I’ve had the pleasure to
      work for over the recent years. You can keep track of more day to day stuff on my dribbble
      page.
    </p>
    <section class="project">
      <router-link to="/projects/amtech">
        <a>
          <img src="https://placekitten.com/300/225" alt="" />
        </a>
      </router-link>
      <h2>
        <router-link to="/projects/amtech">
          <a>
            Amtech
          </a>
        </router-link>
      </h2>
      <p><em>&mdash; Branding, graphic design, web illustration</em></p>
      <p>
        The manufacturing space is known to be a little slower when it comes to viewing high-end
        design solutions as a potential advantage. Luckily, Amtech saw the opportunties.
      </p>
    </section>
    <section class="project">
      <router-link to="/projects/daily-ui">
        <a>
          <img src="https://placekitten.com/300/225" alt="" />
        </a>
      </router-link>
      <h2>
        <router-link to="/projects/daily-ui">
          <a>
            Daily UI
          </a>
        </router-link>
      </h2>
      <p><em>&mdash; User interface design, graphic design</em></p>
      <p>
        Daily UI is a 100 day design challenge with the goal of pushing your skills and portfolio
        in user interface and product design. Here is a collection of my daily work.
      </p>
    </section>
    <section class="project">
      <router-link to="/projects/downtown-detroit-partnership">
        <a>
          <img src="https://placekitten.com/300/225" alt="" />
        </a>
      </router-link>
      <h2>
        <router-link to="/projects/downtown-detroit-partnership">
          <a>
            Downtown Detroit Partnership
          </a>
        </router-link>
      </h2>
      <p><em>&mdash; Graphic design, web illustration</em></p>
      <p>
        DDP is commited in their mission of growing Detroit’s urban core. I worked closely with
        their team developing a wide range of designs for print, events, and functional use.
      </p>
    </section>
    <section class="project">
      <router-link to="/projects/gaddis-gaming">
        <a>
          <img src="https://placekitten.com/300/225" alt="" />
        </a>
      </router-link>
      <h2>
        <router-link to="/projects/gaddis-gaming">
          <a>
            Gaddis Gaming
          </a>
        </router-link>
      </h2>
      <p><em>&mdash; Art direction, branding, graphic design</em></p>
      <p>
        Gaddis Gaming was looking for an influx of funding from Kickstarter to take their table
        topper to the next level, and needed high level branding and design to stand out from the
        crowd.
      </p>
    </section>
    <section class="project">
      <router-link to="/projects/hack-wsu">
        <a>
          <img src="https://placekitten.com/300/225" alt="" />
        </a>
      </router-link>
      <h2>
        <router-link to="/projects/hack-wsu">
          <a>
            Hack WSU
          </a>
        </router-link>
      </h2>
      <p><em>&mdash; Graphic design, web illustration</em></p>
      <p>
        Wayne State University was holding their yearly hackathon, and they were looking to take a
        major step up from previous years attendance numbers with a unique design concept.
      </p>
    </section>
    <section class="project">
      <router-link to="/projects/safewhistle">
        <a>
          <img src="https://placekitten.com/300/225" alt="" />
        </a>
      </router-link>
      <h2>
        <router-link to="/projects/safewhistle">
          <a>
            Safewhistle
          </a>
        </router-link>
      </h2>
      <p><em>&mdash; Branding, graphic design, product design</em></p>
      <p>
        An anonymous whistleblowing platform for corporations. Safewhistle provided a unique
        challenge in implementing a cohesive brand and product at every level.
      </p>
    </section>
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

<style>

</style>
