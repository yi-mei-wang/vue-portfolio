<template>
  <div class="main">
    <h2>MAH SKEELZ</h2>
    <div class="skills-section">
      <div></div>
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
/* .main {
  display: inline;
} */

.skills-section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  /* border: 1px solid black; */
}
.skill-title {
  width: 150px;
  text-align: right;
  margin-right: 1rem;
  /* border: 1px solid black; */
}
@media (max-width: 426px) {
  .skill-title {
    width: 100%;
    text-align: center;
  }

  .skills-section {
    justify-content: center;
  }
}

@media (min-width: 426px) and (max-width: 800px) {
  .skills-section {
    flex-wrap: nowrap;
  }
}
</style>
