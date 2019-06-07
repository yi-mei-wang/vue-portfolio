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
.skill {
  border: 1px solid pink;
}
</style>
