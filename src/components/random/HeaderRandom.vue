<template>
  <div class="header">
    <h1 class="header_title">The world of movies</h1>
    <div class="header_logo">
      <img
        src="../../assets/images/icon3.png"
        class="header_logo-img"
        alt="logo"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeaderRandom",
});
</script>

<style scoped>
.header {
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-wrap: wrap;
  margin: 0rem;
  border-bottom: solid black;
  padding: 1rem;
  border-width: 0.3rem;
}
.header_title {
  display: flex;
  justify-content: left;
  align-items: center;
  padding-left: 7rem;
  font-family: fantasy;
  font-weight: 700;
  font-size: 3.5rem;
  font-variant: all-small-caps;
}
.header_logo {
  display: flex;
  justify-content: right;
  padding-right: 7rem;
  align-items: center;
}
.header_logo-img {
  height: 10rem;
  width: 12rem;
  border-radius: 50%;
}
</style>
