<template>
  <div class="main">
    <div>Wang Yi Mei© 2019 | Created on Vue.js</div>
  </div>
</template>

<script>
import Contact from "./Contact";
export default {
  name: "Footer",
  components: { Contact }
};
</script>

<style lang="scss" scoped>
.main {
  padding: 0.7rem;
  display: block;
  width: 100vw;
  margin: 0;
  border-top: none;
  font-weight: 300;
}
</style>
