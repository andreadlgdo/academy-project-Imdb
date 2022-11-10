<template>
  <main class="main_second-random">
    <h2 class="main_second-title">HOW MUCH TIME DO YOU HAVE?</h2>
    <section class="main_section-slider">
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
      <button @click="goToLastPage(true)" class="button_nextLast">
        <img
          class="button_next-img"
          src="../../assets/images/next.png"
          alt="next"
        />
      </button>
    </div>
  </main>
  <MainModal v-if="isGoLastPage">
    <LastPageRandom />
  </MainModal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LastPageRandom from "@/components/random/LastPageRandom.vue";

export default defineComponent({
  name: "SecondPageRandom",
  components: { LastPageRandom },
  data: function () {
    return {
      isGoLastPage: false,
    };
  },
  methods: {
    goToLastPage: function (value: boolean) {
      this.isGoLastPage = value;
      let element = document.querySelector(".main_second-random");
      if (element !== null) element.remove();
    },
  },
});
</script>

<style scoped>
.main_second-random {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.main_second-title {
  font-family: "Bodoni 72 Oldstyle";
  font-size: 6rem;
}
.main_section-slider {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 7rem;
  margin-bottom: 7rem;
}
.main_buttons {
  display: flex;
  justify-content: right;
  margin-right: 3rem;
}
.button_nextLast {
  background: white;
  border: none;
  height: 4rem;
  width: 4rem;
}
.button_nextLast:hover {
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
