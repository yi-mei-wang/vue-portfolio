<template>
  <div class="main">
    <h2>MAH SKEELZ</h2>
    <Skill skill="Python"/>
    <Skill skill="JavaScript"/>
    <Skill skill="PostgreSQL"/>
    <Skill skill="Flask"/>
    <Skill skill="Peewee"/>
    <Skill skill="React"/>
    <Skill skill="HTML"/>
    <Skill skill="SCSS"/>
  </div>
</template>

<script>
import Skill from "../components/Skill";

export default {
  name: "Skills",
  components: { Skill }
};
</script>

<style>
</style>
