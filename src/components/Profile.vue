<template>
  <div class="wrapper">
    <div>
      <div class="notch"></div>
    </div>
    <div class="main">
      <h3>Story time!</h3>
      <span class="underline"></span>

      <p>
        In my past life, I was a
        Psychology graduate who went on to become an English teacher. However, I knew working with children was not my calling. I felt lost then because I didn't know what to do.
      </p>
      <p>That was until I met programming and the rest, as they said, was history. I started with Harvard's CS50 and swiftly fell in love with C (seriously). I eventually moved on to Python and JavaScript.</p>

      <h2>Who am I?</h2>
      <span class="underline"></span>
      <!-- STORY TIME -->
      <!-- Please rephrase omg -->
      <p>
        I am a
        <span class="highlight">full stack web developer</span> looking for freelance opportunities.
      </p>

      <p>
        My background in
        Psychology has made me more attuned to user needs and behaviour, which helps me to design user interfaces with
        <span
          class="highlight"
        >good UX</span>.
      </p>
      <p>
        On the other hand, my strong
        <span class="highlight">problem-solving</span>,
        <span class="highlight">debugging</span>, and
        <span class="highlight">logical thinking skills</span> make me a good programmer, especially when working on the backend.
      </p>

      <p>Contact me via any of the channels below. I would love to talk to you about how I can help you achieve your design and/or development goals.</p>
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
    line-height: 1.5rem;
  }
}
</style>
