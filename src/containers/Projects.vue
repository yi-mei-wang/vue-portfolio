<template>
  <div class="main">
    <h2>Projects</h2>
    <div class="projects">
      <Project class="project"/>
      <Project class="project"/>
      <Project class="project"/>
    </div>
  </div>
</template>

<script>
import Project from "../components/Project";
export default {
  name: "Projects",
  components: {
    Project
  }
};
</script>

<style scoped>
.projects {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
