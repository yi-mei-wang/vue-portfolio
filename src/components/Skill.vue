<template>
  <div>
    <div class="skill">{{skill}}</div>
    <img :src="img">
  </div>
</template>

<script>
export default {
  name: "Skill",
  props: ["skill", "img"]
};
</script>

<style lang="scss" scoped>
@import "../stylesheets/_variables.scss";

.skill {
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $primary;
  margin: 0.5rem;
}

img {
  max-width: 100px;
  margin: 10px;
}
</style>
