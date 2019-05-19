<template>
  <section class="dribbble reverse-mobile">
    <div class="wrapper">
      <div class="dribbble__shots order-1">
        <img class="dribbble__shot" src="../assets/images/dailyui-001_signup.gif" alt="" />
        <img class="dribbble__shot" src="../assets/images/dailyui-005_appicon.jpg" alt="" />
        <img class="dribbble__shot" src="../assets/images/cozilo_logooptions.jpg" alt="" />
        <img class="dribbble__shot" src="../assets/images/amtech_opt1_icon.gif" alt="" />
      </div>
      <div class="dribbble__description order-0">
        <dribbble-icon color="#EA4C89" />
        <h2 class="m-top-5 m-bottom-0">Latest Dribbble Shots</h2>
        <a class="project__link m-top-0 m-bottom-20" href="https://dribbble.com/austinkandt" target="_blank">
          See more
          <arrow-icon></arrow-icon>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import ArrowIcon from './icons/Arrow.vue';
import DribbbleIcon from './icons/Dribbble.vue';

export default {
  name: 'DribbblePosts',
  data() {
    return {};
  },
  components: {
    'arrow-icon': ArrowIcon,
    'dribbble-icon': DribbbleIcon,
  },
};
</script>

<style scoped>
.dribbble {
  background: var(--light-gray);
  padding: 35px 0 40px;
}

.dribbble__description .dribbble-icon {
  height: 35px;
  width: 35px;
}

.dribbble__shots {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.dribbble__shot {
  border: 6px solid white;
  margin-bottom: 14px;
  width: calc((100% - 14px) / 2);
}

@media only screen and (max-width: 768px) {
  .dribbble .wrapper {
    display: flex;
    flex-direction: column;
  }

  .order-1 {
    order: 1;
  }

  .order-0 {
    order: 0;
  }
}
</style>
