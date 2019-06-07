<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <Profile/>
    <Contact/>
    <Skills/>
    <Projects/>
  </div>
</template>

<script>
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import Projects from "./containers/Projects";
import Skills from "./containers/Skills";

export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Mei's Portfolio"
    };
  },
  components: {
    Contact,
    Profile,
    Projects,
    Skills
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", "Helvetica Neue", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  box-sizing: border-box;
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
  &:hover {
    color: red;
  }
}

.main {
  border: 1px solid #bbb;
  margin: 3rem;
  padding: 1rem 2rem;
}

.code {
  font-family: "Courier New", Courier, monospace;
}
</style>
