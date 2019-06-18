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
          <form method="POST">
            <div class="form-group">
              <transition name="fade">
                <div v-if="success" class="clickable flash-success">
                  Your message has been sent. I'll get back to you ASAP.
                  <span
                    @click="success=false"
                  >✕</span>
                </div>
                <div v-if="missing" class="clickable flash-failure">
                  All fields are required.
                  <span @click="missing=false">✕</span>
                </div>
                <div v-if="failure" class="clickable flash-failure">
                  An error occurred, please try again later.
                  <span @click="failure=false">✕</span>
                </div>
              </transition>
            </div>
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" id="name" name="name">
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="text" id="email" name="email">
            </div>
            <div class="form-group">
              <label for="number">Contact number</label>
              <input type="text" id="number" name="number">
            </div>
            <div class="form-group">
              <label for="message">Your message</label>
              <textarea name="msg" id="msg" rows="3"></textarea>
            </div>

            <!-- On click, call function -->
            <div class="form-group">
              <button class="clickable" @click="handleClick">SEND MESSAGE</button>
            </div>
          </form>
        </div>

        <div id="contact-links">
          <div>
            <h3>Other links</h3>
            <div id="links">
              <div class="link-group">
                <a href="https://www.github.com/yi-mei-wang" target="blank">
                  <img src="https://meistagram.s3.amazonaws.com/github.png" alt="GitHub logo">
                </a>
              </div>
              <div class="link-group">
                <a href="https://www.linkedin.com/in/wangyimei" target="blank">
                  <img src="https://meistagram.s3.amazonaws.com/linkedin.png" alt="LinkedIn logo">
                </a>
              </div>
            </div>
          </div>
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
      success: false,
      failure: false,
      missing: false
    };
  },
  methods: {
    handleClick: function(e) {
      e.preventDefault();
      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let number = document.getElementById("number").value;
      let msg = document.getElementById("msg").value;

      if (!name.length || !email.length || !number.length || !msg.length) {
        this.missing = true;
      } else {
        let data = JSON.stringify({
          name,
          email,
          number,
          msg
        });

        axios
          .post("https://hooks.zapier.com/hooks/catch/5153017/vjks0j/", data)
          .then(res => {
            this.success = res.data.status === "success" && true;
          })
          .catch(err => {
            this.failure = true;
          });
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "../stylesheets/Contact.scss";
</style>
