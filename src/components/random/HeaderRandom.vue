<template>
  <div class="header">
    <h1 class="header_title">The world of movies</h1>
    <div class="header_logo">
      <img
        :src="require('@/assets/images/logo.png')"
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

<style lang="scss" scoped>
.header {
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-wrap: wrap;
  margin: 0rem;
  border-bottom: solid black;
  padding: 1rem;
  border-width: 0.3rem;
  background: #f7dfc2;
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
  &-img {
    height: 10rem;
    width: 12rem;
    border-radius: 50%;
  }
}
</style>
