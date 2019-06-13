<template>
  <div class="wrapper">
    <div>
      <div class="notch"></div>
    </div>
    <div class="main">
      <h2>Drop me a line!</h2>
      <span class="underline"></span>

      <!-- <div>
        
        <a href="mailto:contactmei.tk@gmail.com" target="blank">contactmei.tk@gmail.com</a>
        <br>
        <a href="https://www.linkedin.com/in/wangyimei" target="blank">LinkedIn</a>
        <br>
        <a href="https://www.github.com/yi-mei-wang" target="blank">Github</a>
      </div>-->

      <div class="form">
        <form>
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
            <button @click="handleClick">SUBMIT</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Contact",
  // define methods
  methods: {
    handleClick: function(e) {
      let data = JSON.stringify({
        name: "mei",
        email: "yimei.wym@gmail.com",
        msg: "oops"
      });
      e.preventDefault();
      alert("test");
      axios
        .post("https://hooks.zapier.com/hooks/catch/5153017/vjks0j/", data)
        .then(res => {
          console.log(res);
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
.form {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  width: 100%;
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
  width: 100px;
  height: 40px;
  border-radius: 0;
  letter-spacing: 2px;
  border: none;
  background-color: $vuegreen;
  font-weight: 800;
  color: white;
}
</style>
