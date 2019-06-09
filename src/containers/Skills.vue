<template>
  <div class="main">
    <h2>MAH SKEELZ</h2>
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
</template>

<script>
import Skill from "../components/Skill";

export default {
  name: "Skills",
  components: { Skill }
};
</script>

<style scoped>
@import "../stylesheets/Skills.scss";
.main {
  width: 60%;
}
</style>
