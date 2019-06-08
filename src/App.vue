<template>
  <div id="app">
    <Header data-aos="fade-right"/>
    <Profile data-aos="fade-left"/>
    <!-- <h1>{{ msg }}</h1> -->
    <Contact data-aos="fade-right"/>
    <Skills data-aos="fade-left"/>
    <Projects data-aos="fade-right"/>
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
@import "./stylesheets/App.scss";
</style>
