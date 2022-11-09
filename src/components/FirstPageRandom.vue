<template>
  <HeaderRandom />
  <main class="main">
    <h2 class="main_title">HOW ARE YOU?</h2>
    <div class="main_buttons">
      <button class="button1">Romantic</button>
      <button>Dramatic</button>
      <button>Bored</button>
      <button>Sad</button>
      <button>Happy</button>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderRandom from "./HeaderRandom.vue";

export default defineComponent({
  name: "FirstPageRandom",
  components: {
    HeaderRandom,
  },
});
</script>

<style scoped>
.main {
  display: grid;
  grid-template-rows: 30% 70%;
}
.main_title {
  font-family: "Bodoni 72 Oldstyle";
  font-size: 7rem;
}
.main_buttons {
  display: grid;
  grid-template-areas:
    "button1 button2 button3"
    "button 4 button 4";
}
</style>
