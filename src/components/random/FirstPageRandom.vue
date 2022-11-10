<template>
  <HeaderRandom />
  <main class="main_first-random">
    <h2 class="main_second-title">HOW ARE YOU?</h2>
    <section class="main_section-slider">
      <div class="section_buttons-1">
        <button class="button-emotions" @click="changeColor(1)">
          Romantic
        </button>
        <button class="button-emotions" @click="changeColor(2)">
          Dramatic
        </button>
        <button class="button-emotions" @click="changeColor(3)">Bored</button>
      </div>
      <div class="section_buttons-2">
        <button class="button-emotions" @click="changeColor(4)">Sad</button>
        <button class="button-emotions" @click="changeColor(5)">Happy</button>
      </div>
    </section>
    <div class="main_buttons">
      <button @click="goToSecondPage()" class="button_nextSecond">
        <img
          class="button_next-img"
          src="../../assets/images/next.png"
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
      let button =
        document.querySelectorAll<HTMLInputElement>(".button-emotions");
      if (button != null) {
        button.forEach((e) => (e.style.backgroundColor = "lightblue"));
        button[value - 1].style.backgroundColor = "cadetblue";
      }
    },
    goToSecondPage: function () {
      if (this.isClick) this.goToNextPage = true;
      else this.goToNextPage = false;
      let element = document.querySelector(".main_first-random");
      if (element !== null) element.remove();
    },
  },
});
</script>

<style scoped>
.main_first-random {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.main_second-title {
  font-family: "Bodoni 72 Oldstyle";
  font-size: 7rem;
}
.main_section-slider {
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
}
.section_buttons-1,
.section_buttons-2 {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.section_buttons-1 {
  margin-bottom: 2rem;
}
.button-emotions {
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
  margin-bottom: 1rem;
}
.button_nextSecond {
  background: white;
  border: none;
  height: 4rem;
  width: 4rem;
}
.button_nextSecond:hover {
  background: lightblue;
}
.button_next-img {
  height: 3rem;
  width: 3rem;
}
</style>
