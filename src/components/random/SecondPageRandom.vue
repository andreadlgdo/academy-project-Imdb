<template>
  <main class="main_second-random" v-if="!isGoLastPage">
    <h2 class="app_section-title">HOW MUCH TIME DO YOU HAVE?</h2>
    <section class="main_section-slider">
      <div class="main_slider">
        <input
          class="section_slide"
          type="range"
          min="50"
          max="250"
          value="150"
          @mousemove="changeValue()"
        />
        <label class="label_slide">150 minutes</label>
      </div>
    </section>
    <div class="main_buttons">
      <button @click="goToLastPage(true)" class="button_nextLast">
        <img
          class="button_next-img"
          :src="require('@/assets/images/next.png')"
          alt="next"
        />
      </button>
    </div>
  </main>
  <LastPageRandom v-if="isGoLastPage" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LastPageRandom from "@/components/random/LastPageRandom.vue";
import createStore from "@/store";

export default defineComponent({
  name: "SecondPageRandom",
  components: { LastPageRandom },
  data: function () {
    return {
      isGoLastPage: false,
      minutesFinal: "150",
    };
  },
  methods: {
    goToLastPage: function (value: boolean) {
      this.isGoLastPage = value;
      createStore.dispatch("setRandomFilters", "maxMinutes");
      createStore.dispatch("setRandomParams", this.minutesFinal);
    },
    changeValue: function () {
      let element = document.querySelector<HTMLInputElement>(".section_slide");
      let label = document.querySelector(".label_slide");
      if (element != null && label != null) {
        this.minutesFinal = element.value;
        label.textContent = this.minutesFinal + " minutes";
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.main_second-random {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.app_section-title {
  font-family: "Bodoni 72 Oldstyle";
  font-size: 6rem;
}
.main_section-slider {
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
.button_nextLast {
  background: white;
  border: none;
  height: 4rem;
  width: 4rem;
  background: #efc592;
  margin-right: 4rem;
  &:hover {
    background: #faa544;
  }
}
.button_next-img {
  height: 3rem;
  width: 3rem;
}
.main_slider {
  display: flex;
  flex-direction: column;
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
  margin-bottom: 2rem;
  &:hover {
    opacity: 1;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 25px;
    height: 25px;
    background: cadetblue;
  }
}
.label_slide {
  font-size: 3rem;
}
</style>
