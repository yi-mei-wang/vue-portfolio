<template>
  <div id="app">
    <Header data-aos="fade-right"/>
    <Profile data-aos="fade-up"/>
    <!-- <h1>{{ msg }}</h1> -->
    <Contact data-aos="fade-up"/>
    <Skills data-aos="fade-up"/>
    <Projects/>
    <Footer/>
  </div>
</template>

<script>
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
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
    Footer,
    Header,
    Profile,
    Projects,
    Skills
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Roboto", "Avenir", "Helvetica Neue", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(201, 182, 76);
  box-sizing: border-box;
  font-weight: 300;
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
  box-shadow: 0 5px 35px rgba(0, 0, 0, 0.25);
  background-color: beige;
  color: black;
}

.code {
  font-family: "Abril Fatface", "Courier New", Courier, monospace;
}
</style>
