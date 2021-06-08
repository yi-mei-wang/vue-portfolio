<template>
  <div class="wrapper">
    <div>
      <div class="notch"></div>
    </div>
    <div class="main">
      <h2>Who am I?</h2>
      <span class="underline"></span>
      <!-- STORY TIME -->
      <!-- Please rephrase omg -->
      <p>
        I like to think of myself as a <span class="highlight">T-shaped developer</span> with a focus in the back-end.
      </p>
      <p>
        Most of my industry experience has been in 
        <span class="highlight">back-end development</span> but I also have some experience in <i>devops</i>, <i>Cloud</i>, <i>frontend (mostly React)</i>, and <i>digital marketing</i>. 
      </p>
      <p>Contact me via any of the channels below. I would love to talk to you about how I can help you achieve your development and/or organisational goals.</p>
      
      
    
    <h3>Story time!</h3>
    <span class="underline"></span>
    
    <p>
      Many people ask me how a psychology grad ended up doing what I'm doing. I started with Harvard's CS50 and C-riously fell in love with C. 
    </p>
    <p>
      I eventually moved on to Python and JavaScript, but I was thrown into <span class="highlight">Java</span> at my first enterprise job and now Java is my favourite language.
    </p>

    <p>
      I built this site using Vue in 2019, 2 months after learning React. I've been wanting to give it a revamp, but like many other devs, I'm busy starting new projects and not finishing them. 🤷
    </p>
    <p>
      Since building this, frontend and I don't speak as often anymore, so please get in touch if you have any ideas how to improve the design. I'd like to hear your thoughts!
    </p>

    
  </div>
</div>
</template>

<script>
import Skills from "../containers/Skills";

export default {
  name: "Profile",
  components: { Skills }
};
</script>


<style lang="scss" scoped>
.main {
  h3 {
    margin-top: 1.5rem;
  }

  p {
    line-height: 2rem;
  }
}
</style>
