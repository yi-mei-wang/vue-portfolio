<template>
  <div id="app">
    <Header data-aos="fade-up"/>
    <Profile data-aos="fade-up"/>
    <Projects data-aos="fade-up"/>
    <Skills data-aos="fade-up"/>
    <Contact data-aos="fade-up"/>
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
