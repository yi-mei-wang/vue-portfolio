<template>
  <div class="main">
    <div class="image-container">
      <h3 class="proj-title">{{title}}</h3>
      <img :src="img0" class="proj-thumbnail clickable" v-on:click="currentSlide = 1">
    </div>
    <transition name="fade">
      <div v-if="show" class="carousel-main clickable" v-on:click.self="show = !show">
        <div class="carousel-container">
          <carousel :per-page="1" :mouse-drag="false" :navigationEnabled="true" :loop="true">
            <slide>
              <Project
                class="project"
                title="Meistagram"
                link="https://meistagram.yimeiwang.me"
                img0="https://meistagram.s3.amazonaws.com/meistagram0.png"
                img1="https://meistagram.s3.amazonaws.com/meistagram1.png"
                img2="https://meistagram.s3.amazonaws.com/meistagram2.png"
                p0="My very first project. This is an Instagram clone built using React.js that was completed within the first two weeks of learning the framework."
                p1="I tried to incorporate as many design elements from Instagram as possible, such as the double-tap-to-like feature. "
                p2="I also learnt how to use the Context API and Higher-Order Components. For the sake of practice, I implemented both in this Single Page Application. "
              />
            </slide>
            <slide>
              <Project
                class="project"
                title="Meisterkram"
                link="https://meisterkram.yimeiwang.me"
                img0="https://meistagram.s3.amazonaws.com/meisterkram0.png"
                img1="https://meistagram.s3.amazonaws.com/meisterkram1.png"
                img2="https://meistagram.s3.amazonaws.com/meisterkram3.png"
                p0="Yet another Instagram clone, but built using Python Flask. This was my first time working on the full stack."
                p1="I implemented additional features such as Google OAuth to manage login and a payment feature to allow Meisterkrammers to make a donation to other users."
              />
            </slide>
            <slide>
              <Project
                class="project"
                title="Advengers"
                link="https://advengers.yimeiwang.me"
                img0="https://meistagram.s3.amazonaws.com/advengers0.png"
                img1="https://meistagram.s3.amazonaws.com/advengers1.png"
                img2="https://meistagram.s3.amazonaws.com/advengers2.png"
                p0="A billboard advert automator to make the lives of marketers and billboard vendors easier. Currently, the advert life cycle can be rather long and tedious."
                p1="The software simplifies and handles everything, from the receiving of orders, scheduling of time slots, moderating of advert content and updating of billboard. The front end was built in React while the back-end server was built in Python. "
                p2="I wrote a script to train an AI model to identify and remove content that is not allowed on the advertising platform, such as alcohol, cigarettes and weapons."
              />
            </slide>
          </carousel>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import Project from "../components/Project";

export default {
  name: "ProjectCarousel",
  data() {
    return {
      show: true,
      currentSlide: 1
    };
  },
  components: {
    Carousel,
    Project,
    Slide
  }
};
</script>

<style lang="scss" scoped>
@import "../stylesheets/Project.scss";

h3 {
  margin-bottom: 10px;
}

.main {
  background-color: blue;
  height: 100vh;
}

.carousel-main {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9;
  background-color: rgba(20, 20, 20, 0.6);
}

.carousel-container {
  background-color: red;
  width: 90%;
  height: 90%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
