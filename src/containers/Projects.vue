<template>
  <div class="main">
    <h2>Projects</h2>
    <div class="projects">
      <Project v-bind:proj="proj" class="project"/>
      <Project v-bind:proj="proj" class="project"/>
      <Project v-bind:proj="proj" class="project"/>
    </div>
  </div>
</template>

<script>
import Project from "../components/Project";
export default {
  name: "Projects",
  props: ["proj"],
  components: {
    Project
  }
};
</script>

<style scoped>
.main {
  border: 1px solid #bbb;
  margin: 1rem;
}
.projects {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
