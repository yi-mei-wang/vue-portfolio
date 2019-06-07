<template>
  <div id="app">
    <h1>{{ projs }}</h1>
    <input v-model="projs">
    <Projects v-bind:proj="projs"/>
  </div>
</template>

<script>
import Projects from "./containers/Projects";

export default {
  name: "app",
  data() {
    return {
      projs: "Welcome to Your Vue.js App"
    };
  },
  components: {
    Projects
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
