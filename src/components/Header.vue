<template>
  <!-- This should be responsive in case someone is viewing this on mobile -->
  <div id="header">
    <div id="left">
      <p>I'm</p>
      <p class="ampersand">&</p>
      <p>I'm</p>
      <p>Soft</p>
      <p>Engi</p>
    </div>
    <!-- Should disappear if view width is smaller than a mobile -->
    <div id="right">
      <p>Mei</p>
      <p>&</p>
      <p>a</p>
      <p>ware</p>
      <p>neer.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      show: true
    };
  }
};
</script>

<style lang="scss">
@import "../stylesheets/_fonts.scss";
@import "../stylesheets/_variables.scss";
@import "../stylesheets/Header.scss";
</style>