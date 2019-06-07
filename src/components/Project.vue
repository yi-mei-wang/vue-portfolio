<template>
  <div class="proj-card">
    <img src="../assets/laptop.png" class="proj-thumbnail">
    <div class="proj-description">
      <p>This is the description of my project.</p>
      <p>
        Here is a
        <a href="http://">link</a>.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Project"
};
</script>

<style>
.proj-thumbnail {
  width: 200px;
  height: 150px;
  object-fit: cover;
}

.proj-card {
  width: 250px;
  height: 300px;
  background-color: white;
  border: 1px solid #bbb;
  margin: 1rem;
  padding: 1rem;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.25);
}
</style>
