<template>
  <div>
    <div class="image-container">
      <img :src="img0" class="proj-thumbnail" v-on:click="show = !show">
      <h3>{{title}}</h3>
    </div>
    <transition name="fade">
      <div v-if="show" class="description-container" v-on:click.self="show = !show">
        <div class="description">
          <h2>{{title}}</h2>

          <div class="row">
            <div class="col-6">
              <carousel :per-page="1" :mouse-drag="false">
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
.description-container {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9;
  background-color: rgba(240, 240, 240, 0.8);
}

.description {
  width: 90%;
  height: 90%;
  position: fixed;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  box-shadow: 0 0px 35px rgba(255, 255, 255, 0.4);
  overflow: scroll;

  p {
    margin-left: auto;
    margin-right: auto;
    line-height: 1.5rem;
    padding: 1rem;
  }
}

.proj-thumbnail {
  max-width: 300px;
  max-height: 300px;
  object-fit: cover;
  box-shadow: 5px 5px 35px rgba(155, 155, 155, 0.5);
}

.row {
  display: flex;
  flex-wrap: wrap;
}

.col-6 {
  width: 50%;
  justify-content: center;
}

.proj-slide {
  max-width: 350px;
  width: 100%;
  margin: 1rem;
}

.image-container {
  margin: 1rem;
}

@media (max-width: 426px) {
  .col-6 {
    width: 100%;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
