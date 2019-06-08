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
  height: 100px;
  width: 100px;
  display: inline-block;
  border: 1px solid $secondary;
}
</style>
