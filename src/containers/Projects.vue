<template>
  <div class="wrapper">
    <div>
      <div class="notch"></div>
    </div>
    <div class="main">
      <h2>Projects</h2>
      <span class="underline"></span>
      <br>
      <small>Click on the images to find out more!</small>

      <div class="projects">
        <Project
          class="project"
          title="Meistagram"
          link="https://meistagram.yimeiwang.me"
          img0="https://meistagram.s3.amazonaws.com/meistagram0.png"
          img1="https://meistagram.s3.amazonaws.com/meistagram1.png"
          img2="https://meistagram.s3.amazonaws.com/meistagram2.png"
          p0="My very first project. This is an Instagram clone built using React.js that was completed within the first two weeks of learning the framework."
          p1="I tried to incorporate as many design elements from Instagram as possible, such as the double-tap-to-like feature. "
          p2="I also learnt how to use the Context API and Higher-Order Components. For the sake of practice, I implemented both in this Single Page Application. "
        />
        <Project
          class="project"
          title="Meisterkram"
          link="https://meisterkram.yimeiwang.me"
          img0="https://meistagram.s3.amazonaws.com/meisterkram0.png"
          img1="https://meistagram.s3.amazonaws.com/meisterkram1.png"
          img2="https://meistagram.s3.amazonaws.com/meisterkram3.png"
          p0="Yet another Instagram clone, but built using Python Flask. This was my first time working on the full stack."
          p1="I implemented additional features such as Google OAuth to manage login and a payment feature to allow Meisterkrammers to make a donation to other users."
        />
        <Project
          class="project"
          title="Advengers"
          link="https://advengers.yimeiwang.me"
          img0="https://meistagram.s3.amazonaws.com/advengers0.png"
          img1="https://meistagram.s3.amazonaws.com/advengers1.png"
          img2="https://meistagram.s3.amazonaws.com/advengers2.png"
          p0="A billboard advert automator to make the lives of marketers and billboard vendors easier. Currently, the advert life cycle can be rather long and tedious."
          p1="The software simplifies and handles everything, from the receiving of orders, scheduling of time slots, moderating of advert content and updating of billboard. The front end was built in React while the back-end server was built in Python. "
          p2="I wrote a script to train an AI model to identify and remove content that is not allowed on the advertising platform, such as alcohol, cigarettes and weapons."
        />
      </div>
    </div>
  </div>
</template>

<script>
import Project from "../components/Project";
export default {
  name: "Projects",
  components: {
    Project
  }
};
</script>

<style lang="scss" scoped>
.projects {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
