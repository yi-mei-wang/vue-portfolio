<template>
  <div class="wrapper">
    <div>
      <div class="notch"></div>
    </div>
    <div class="main">
      <h2>Projects</h2>
      <span class="underline"></span>

      <div class="projects">
        <Project
          class="project"
          title="Meistagram"
          link="https://www.google.com"
          description="generic description passed down as props"
        />
        <Project
          class="project"
          title="Meisterkram"
          link="https://www.google.com"
          description="generic description passed down as props"
        />
        <Project
          class="project"
          title="Advengers"
          link="https://www.google.com"
          description="generic description passed down as props"
        />
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

h2,
h3 {
  margin-bottom: -10px;
}
</style>
