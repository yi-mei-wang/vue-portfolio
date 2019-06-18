<template>
  <div class="description">
    <h2 class="proj-title">{{title}}</h2>
    <span class="underline"></span>
    <div class="row">
      <div class="col-6">
        <carousel
          :per-page="1"
          :mouse-drag="false"
          :navigationEnabled="true"
          :loop="true"
          :autoplay="true"
          :autoplayTimeout="3500"
        >
          <slide>
            <img
              :src="img0"
              class="carousel-img"
              style="display:block; margin-left:auto; margin-right: auto;"
            >
          </slide>
          <slide>
            <img
              :src="img1"
              class="carousel-img"
              style="display:block; margin-left:auto; margin-right: auto;"
            >
          </slide>
          <slide>
            <img
              :src="img2"
              class="carousel-img"
              style="display:block; margin-left:auto; margin-right: auto;"
            >
          </slide>
        </carousel>
      </div>

      <div class="col-6">
        <p>{{p0}}</p>
        <p>{{p1}}</p>
        <p>{{p2}}</p>
      </div>
    </div>
    <div>
      <a :href="link" target="blank">
        <button class="clickable">See it live!</button>
      </a>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  name: "Project",
  // props: { title: String, link: String, description: String, img: link },
  props: ["title", "link", "img0", "img1", "img2", "p0", "p1", "p2"],
  data() {
    return {
      show: false
    };
  },
  components: { Carousel, Slide }
};
</script>

<style lang="scss" scoped>
@import "../stylesheets/Project.scss";

h3 {
  margin-bottom: 10px;
}
</style>
