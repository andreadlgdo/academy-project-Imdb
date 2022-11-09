<template>
  <HeaderRandom />
  <main class="main">
    <h2 class="main_title">HOW ARE YOU?</h2>
    <section class="main_section">
      <div class="section_buttons-1">
        <button class="button" @click="changeColor(1)">Romantic</button>
        <button class="button" @click="changeColor(2)">Dramatic</button>
        <button class="button" @click="changeColor(3)">Bored</button>
      </div>
      <div class="section_buttons-2">
        <button class="button" @click="changeColor(4)">Sad</button>
        <button class="button" @click="changeColor(5)">Happy</button>
      </div>
    </section>
    <div class="main_buttons">
      <button @click="goToSecondPage()" class="button_next">
        <img
          class="button_next-img"
          src="../assets/images/next.png"
          alt="next"
        />
      </button>
    </div>
  </main>
  <MainModal v-if="goToNextPage">
    <SecondPageRandom />
  </MainModal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderRandom from "./HeaderRandom.vue";
import SecondPageRandom from "./SecondPageRandom.vue";

export default defineComponent({
  name: "FirstPageRandom",
  data: function () {
    return {
      isClick: false,
      goToNextPage: false,
    };
  },
  components: {
    HeaderRandom,
    SecondPageRandom,
  },
  methods: {
    changeColor: function (value: number) {
      this.isClick = true;
      let button = document.querySelectorAll<HTMLInputElement>(".button");
      if (button != null) {
        button.forEach((e) => (e.style.backgroundColor = "lightblue"));
        button[value - 1].style.backgroundColor = "cadetblue";
      }
    },
    goToSecondPage: function () {
      if (this.isClick) this.goToNextPage = true;
      else this.goToNextPage = false;
      let element = document.querySelector(".main");
      if (element !== null) element.remove();
    },
  },
});
</script>

<style scoped>
.main {
  display: grid;
  grid-template-rows: 35% 55% 10%;
}
.main_title {
  font-family: "Bodoni 72 Oldstyle";
  font-size: 7rem;
}
.main_section {
  display: grid;
  margin-top: 4rem;
  grid-template-rows: 1fr 1fr;
}
.section_buttons-1,
.section_buttons-2 {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.button {
  background: lightblue;
  border-color: lightblue;
  border-radius: 30px;
  height: 5rem;
  width: 18rem;
  font-size: 2rem;
  font-family: "Al Tarikh";
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
</style>
