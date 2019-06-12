<template>
  <div>
    <div class="image-container">
      <h3>{{title}}</h3>
      <img :src="img0" class="proj-thumbnail" v-on:click="show = !show">
    </div>
    <transition name="fade">
      <div v-if="show" class="description-container" v-on:click.self="show = !show">
        <div class="description">
          <h2>{{title}}</h2>
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
                    class="proj-slide"
                    style="display:block; margin-left:auto; margin-right: auto;"
                  >
                </slide>
                <slide>
                  <img
                    :src="img1"
                    class="proj-slide"
                    style="display:block; margin-left:auto; margin-right: auto;"
                  >
                </slide>
                <slide>
                  <img
                    :src="img2"
                    class="proj-slide"
                    style="display:block; margin-left:auto; margin-right: auto;"
                  >
                </slide>
              </carousel>
            </div>

            <div class="col-6">
              <p>{{description}}</p>
              <p>
                <a :href="link" target="blank">See it live!</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  name: "Project",
  // props: { title: String, link: String, description: String, img: link },
  props: ["title", "link", "description", "img0", "img1", "img2"],
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
