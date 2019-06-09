<template>
  <div class="proj-card">
    <div class="inner-div">
      <h3>{{title}}</h3>
      <img src="../assets/laptop.png" class="proj-thumbnail">
      <div class="proj-description">
        <p>{{description}}</p>
        <p>
          Here is a
          <a :href="link">link</a>.
        </p>
      </div>
    </div>

    <button v-on:click="show = !show">Toggle</button>
    <transition name="fade">
      <div v-if="show" class="description">
        {{description}}
        <button v-on:click="show = !show">Toggle</button>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Project",
  props: { title: String, link: String, description: String },
  data() {
    return {
      show: false
    };
  }
};
</script>

<style lang="scss" scoped>
.description {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.8);
}
.proj-thumbnail {
  width: 200px;
  height: 150px;
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

.proj-description {
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
