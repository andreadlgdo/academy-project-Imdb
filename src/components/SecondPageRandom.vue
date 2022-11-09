<template>
  <main class="main">
    <h2 class="main_title">HOW MUCH TIME DO YOU HAVE?</h2>
    <section class="main_section">
      <div class="main_slider">
        <input
          class="section_slide"
          type="range"
          min="50"
          max="250"
          value="150"
        />
      </div>
    </section>
    <div class="main_buttons">
      <button class="button_next">
        <img
          class="button_next-img"
          src="../assets/images/next.png"
          alt="next"
        />
      </button>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SecondPageRandom",
  methods: {},
});
</script>

<style scoped>
.main {
  display: grid;
  grid-template-rows: 35% 55% 10%;
}
.main_title {
  font-family: "Bodoni 72 Oldstyle";
  font-size: 6rem;
}
.main_section {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  margin-bottom: 5rem;
}
.main_buttons {
  display: flex;
  justify-content: right;
  margin-right: 3rem;
}
.button_next {
  background: white;
  border: none;
  height: 4rem;
  width: 4rem;
}
.button_next:hover {
  background: lightblue;
}
.button_next-img {
  height: 3rem;
  width: 3rem;
}
.section_slide {
  width: 50rem;
  -webkit-appearance: none;
  height: 25px;
  background: lightblue;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
}
.section_slide:hover {
  opacity: 1;
}
.section_slide::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 25px;
  height: 25px;
  background: cadetblue;
}
</style>
