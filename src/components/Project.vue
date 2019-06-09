<template>
  <div>
    <!-- <div class="proj-card">
    <div class="inner-div">-->
    <div class="image-container">
      <img :src="img" class="proj-thumbnail" v-on:click="show = !show">
    </div>
    <!-- </div> -->
    <transition name="fade">
      <div v-if="show" class="description-container" v-on:click="show = !show">
        <div class="description">
          <h2>{{title}}</h2>
          <img
            :src="img"
            class="proj-thumbnail"
            style="display:block; margin-left:auto; margin-right: auto;"
          >
          <p>{{description}}</p>
          <p>
            <a :href="link" target="blank" v-on:click="show = !show">See it live!</a>
          </p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Project",
  // props: { title: String, link: String, description: String, img: link },
  props: ["title", "link", "description", "img"],
  data() {
    return {
      show: false
    };
  }
};
</script>

<style lang="scss" scoped>
.description-container {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9;
  background-color: rgba(255, 255, 255, 0.3);
}

.description {
  width: 80%;
  height: 80%;
  position: fixed;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  box-shadow: 0 0px 35px rgba(255, 255, 255, 0.4);

  p {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.5rem;
  }
}

.proj-thumbnail {
  width: 200px;
  height: 200px;
  object-fit: cover;
}

.proj-card {
  min-width: 250px;
  min-height: 300px;
  background-color: white;
  border: 1px solid #bbb;
  margin: 1rem;
  padding: 1rem;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.25);
}

.image-container {
  margin: 1rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
