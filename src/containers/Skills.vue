<template>
  <div class="wrapper">
    <div>
      <div class="notch"></div>
    </div>
    <div class="main">
      <h2>Skills</h2>
      <span class="underline"></span>

      <div class="skill-title">
        <h4>Languages</h4>
      </div>
      <div class="skills-section">
        <Skill skill="Python" img="https://meistagram.s3.amazonaws.com/python.png"/>
        <Skill skill="JavaScript" img="https://meistagram.s3.amazonaws.com/es6.png"/>
        <Skill skill="HTML" img="https://meistagram.s3.amazonaws.com/html5.png"/>
        <Skill skill="CSS" img="https://meistagram.s3.amazonaws.com/css3.png"/>
      </div>
      <div class="skill-title">
        <h4>Frameworks and Technologies</h4>
      </div>
      <div class="skills-section">
        <Skill skill="SCSS" img="https://meistagram.s3.amazonaws.com/sass.png"/>
        <Skill skill="React" img="https://meistagram.s3.amazonaws.com/react.png"/>
        <Skill skill="REST API" img="https://meistagram.s3.amazonaws.com/rest.png"/>
        <Skill skill="Flask" img="https://meistagram.s3.amazonaws.com/flask.png"/>
      </div>
      <div class="skill-title">
        <h4>Database</h4>
      </div>
      <div class="skills-section">
        <Skill skill="PostgreSQL" img="https://meistagram.s3.amazonaws.com/postgres.png"/>
        <Skill skill="Peewee" img="https://meistagram.s3.amazonaws.com/peewee.png"/>
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
  h4 {
    margin-bottom: 0;
  }
}
</style>
