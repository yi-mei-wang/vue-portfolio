<template>
  <div class="wrapper">
    <div>
      <div class="notch"></div>
    </div>
    <div class="main">
      <h2>Projects</h2>
      <div class="projects">
        <Project class="project" title="Meistagram"/>
        <Project class="project" title="Meisterkram"/>
        <Project class="project" title="Advengers"/>
      </div>
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

<style lang="scss" scoped>
.projects {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
