import AOS from "aos";
import Vue from "vue";
import App from "./App.vue";
import "aos/dist/aos.css";
import "static/img/favicon-16x16.png";

new Vue({
  created() {
    AOS.init();
  },
  el: "#app",
  render: h => h(App)
});
