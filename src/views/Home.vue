<template>
  <div id="home">
    <h1><strong>Austin Kandt</strong> &mdash; UI & Graphic Designer</h1>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam nemo vel a autem maxime
      corrupti maiores esse eum, nisi aliquam id placeat veritatis necessitatibus ratione itaque,
      quae non nesciunt quaerat!
    </p>
    <router-link to="/contact">
      <a>More info &rarr;</a>
    </router-link>
    <section class="Project">
      <img src="https://placekitten.com/33/50" alt="Downtown Detroit Partnership logo" />
      <h2>Downtown Detroit Partnership</h2>
      <p>
        DDP is commited in their mission of growing Detroit’s urban core. I worked closely with
        their team developing a wide range of designs for print, events, and functional use.
      </p>
      <router-link to="/projects/downtown-detroit-partnership">
        <a>Take a look &rarr;</a>
      </router-link>
      <img src="https://placekitten.com/810" alt="Mockup of mockup" />
    </section>
    <section class="Project">
      <img src="https://placekitten.com/560/420" alt="Mockup of mobile application" />
      <img src="https://placekitten.com/50" alt="Daily UI icon" />
      <h2>Daily UI</h2>
      <p>
        Daily UI is a 100 day design challenge with the goal of pushing your skills and portfolio
        in user interface and product design. Here is a collection of my daily work.
      </p>
      <router-link to="/projects/daily-ui">
        <a>Take a look &rarr;</a>
      </router-link>
    </section>
    <dribbble-posts />
    <section class="Project">
      <img src="https://placekitten.com/50/42" alt="SafeWhistle logo" />
      <h2>SafeWhistle</h2>
      <p>
        An anonymous whistleblowing platform for corporations. Safewhistle provided a unique
        challenge in implementing a cohesive brand and product at every level.
      </p>
      <router-link to="/projects/safewhistle">
        <a>Take a look &rarr;</a>
      </router-link>
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
import DribbblePosts from '../components/DribbblePosts.vue';
import MoreProjects from '../components/MoreProjects.vue';

export default {
  name: 'Home',
  data() {
    return {};
  },
  components: {
    'dribbble-posts': DribbblePosts,
    'more-projects': MoreProjects,
  },
};
</script>

<style>

</style>
