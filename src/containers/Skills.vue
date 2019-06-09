<template>
  <div class="wrapper">
    <div>
      <div class="notch"></div>
    </div>
    <div class="main">
      <h2>Skills</h2>
      <span class="underline"></span>

      <div class="skills-section">
        <div class="skill-title">
          <h4>Languages</h4>
        </div>
        <Skill skill="JavaScript"/>
        <Skill skill="HTML"/>
        <Skill skill="CSS"/>
        <Skill skill="Python"/>
      </div>
      <div class="skills-section">
        <div class="skill-title">
          <h4>Frameworks and Technologies</h4>
        </div>
        <Skill skill="SCSS"/>
        <Skill skill="React"/>
        <Skill skill="Flask"/>
      </div>
      <div class="skills-section">
        <div class="skill-title">
          <h4>Database</h4>
        </div>
        <Skill skill="PostgreSQL"/>
        <Skill skill="Peewee"/>
      </div>
    </div>
  </div>
</template>

<script>
import Skill from "../components/Skill";

export default {
  name: "Skills",
  components: { Skill }
};
</script>

<style scoped lang="scss">
@import "../stylesheets/Skills.scss";
.main {
  h2,
  h3 {
    margin-bottom: -10px;
  }
}
</style>
