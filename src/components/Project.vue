<template>
  <div>
    <div class="image-container">
      <h3 class="proj-title">{{title}}</h3>
      <img :src="img0" class="proj-thumbnail clickable" v-on:click="show = !show" />
    </div>
    <transition name="fade">
      <div v-if="show" class="description-container clickable" v-on:click.self="show = !show">
        <div class="description">
          <button class="close-button clickable" v-on:click="show =! show">✕</button>
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
                    class="proj-slide"
                    style="display:block; margin-left:auto; margin-right: auto;"
                  />
                </slide>
                <slide>
                  <img
                    :src="img1"
                    class="proj-slide"
                    style="display:block; margin-left:auto; margin-right: auto;"
                  />
                </slide>
                <slide>
                  <img
                    :src="img2"
                    class="proj-slide"
                    style="display:block; margin-left:auto; margin-right: auto;"
                  />
                </slide>
              </carousel>
            </div>Scroll down to see more
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
      </div>
    </transition>
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
</style>
