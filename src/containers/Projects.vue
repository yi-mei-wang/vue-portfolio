<template>
  <div class="wrapper">
    <div>
      <div class="notch"></div>
    </div>
    <div class="main">
      <h2>Projects</h2>
      <span class="underline"></span>
      <br>
      <small>Click on the images to find out more!</small>

      <div class="projects">
        <ProjectCarousel/>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import Project from "../components/Project";
import ProjectCarousel from "../components/ProjectCarousel";

export default {
  name: "Projects",
  components: {
    ProjectCarousel
  }
};
</script>

<style lang="scss" scoped>
.projects {
  justify-content: center;
}
</style>
