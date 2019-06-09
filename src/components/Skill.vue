<template>
  <div class="skill">{{skill}}</div>
</template>

<script>
export default {
  name: "Skill",
  props: ["skill"]
};
</script>

<style lang="scss" scoped>
@import "../stylesheets/_variables.scss";

.skill {
  height: 20px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $secondary;
  margin: 0.5rem;
}
</style>
