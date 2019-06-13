<template>
  <div class="wrapper">
    <div>
      <div class="notch"></div>
    </div>
    <div class="main">
      <h2>Get in touch!</h2>
      <span class="underline"></span>

      <div class="contact-wrapper">
        <div id="form">
          <h3>Drop me a line!</h3>
          <form>
            <transition name="fade">
              <div v-if="show" class="flash">Your message has been sent!</div>
            </transition>
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" name="name">
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="text" name="email">
            </div>
            <div class="form-group">
              <label for="number">Contact number</label>
              <input type="text" name="number">
            </div>
            <div class="form-group">
              <label for="message">Your message</label>
              <textarea name="msg" rows="3"></textarea>
            </div>

            <!-- On click, call function -->
            <div class="form-group">
              <button @click="handleClick">SEND MESSAGE</button>
            </div>
          </form>
        </div>

        <div id="contact-links">
          <a href="mailto:contactmei.tk@gmail.com" target="blank">contactmei.tk@gmail.com</a>
          <br>
          <a href="https://www.linkedin.com/in/wangyimei" target="blank">LinkedIn</a>
          <br>
          <a href="https://www.github.com/yi-mei-wang" target="blank">Github</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Contact",
  data() {
    return {
      show: false
    };
  },
  methods: {
    handleClick: function(e) {
      let data = JSON.stringify({
        name: "mei",
        email: "yimei.wym@gmail.com",
        msg: "oops"
      });
      e.preventDefault();
      axios
        .post("https://hooks.zapier.com/hooks/catch/5153017/vjks0j/", data)
        .then(res => {
          if (res.data.status === "success") {
            this.show = true;
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped lang="scss">
@import "../stylesheets/_variables.scss";

.main {
  width: 100vw;
}

h3 {
  margin-bottom: 10px;
}

.flash {
  width: 100%;
  background: $palepurple;
  padding: 0.5rem;
}

.contact-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin-top: 1rem;
  border: 1px solid black;
}

#form,
#contact-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: calc(80vw / 2);
  min-width: 250px;
  border: 1px solid blue;
  margin: 0.5rem;
}

form {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.form-group {
  width: 80%;
  display: block;
}

label {
  margin: 0.5rem 0.5rem 0 0.5rem;
  display: block;
  text-align: left;
}

input,
textarea {
  width: 100%;
  margin: 0.5rem;
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid #666;
}

input {
  height: 1.6rem;
}

button {
  padding: 0.5rem;
  height: 40px;
  border-radius: 0;
  letter-spacing: 2px;
  border: none;
  background-color: $vuegreen;
  font-weight: 800;
  color: white;
}
</style>
