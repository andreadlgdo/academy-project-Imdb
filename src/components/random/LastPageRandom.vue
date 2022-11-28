<template>
  <main class="main_last-random" v-if="!goResultPage">
    <h2 class="main_last-title">ARE YOU DEMANDING?</h2>
    <section class="main_section-buttons">
      <button class="button_score-1" @click="changeColor(1)">1</button>
      <button class="button_score-2" @click="changeColor(2)">2</button>
      <button class="button_score-3" @click="changeColor(3)">3</button>
      <button class="button_score-4" @click="changeColor(4)">4</button>
      <button class="button_score-5" @click="changeColor(5)">5</button>
      <button class="button_score-6" @click="changeColor(6)">6</button>
      <button class="button_score-7" @click="changeColor(7)">7</button>
      <button class="button_score-8" @click="changeColor(8)">8</button>
      <button class="button_score-9" @click="changeColor(9)">9</button>
      <button class="button_score-10" @click="changeColor(10)">10</button>
    </section>
    <section class="main_buttons">
      <button class="button_nextResults" @click="goToResultsPage()">
        <img
          class="button_next-img"
          :src="require('@/assets/images/next.png')"
          alt="next"
        />
      </button>
    </section>
  </main>
  <ResultRandomSearch v-if="goResultPage" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ResultRandomSearch from "@/components/random/ResultRandomSearch.vue";
import createStore from "@/store";

export default defineComponent({
  name: "LastPageRandom",
  components: { ResultRandomSearch },
  data: function () {
    return {
      isClickScore: false,
      numberBottonClick: 0,
      goResultPage: false,
    };
  },
  methods: {
    changeColor: function (value: number) {
      if (this.numberBottonClick !== 0) {
        let button = document.querySelector<HTMLInputElement>(
          ".button_score-" + this.numberBottonClick
        );
        if (button != null) button.style.border = "none";
      }
      this.isClickScore = true;
      let button = document.querySelector<HTMLInputElement>(
        ".button_score-" + value
      );
      if (button != null) {
        button.style.border = "solid black";
        this.numberBottonClick = value;
      }
    },
    goToResultsPage: function () {
      if (this.isClickScore) {
        this.goResultPage = true;
        createStore.dispatch("setRandomParams", this.numberBottonClick);
        createStore.dispatch("setRandomFilters", "minScore");
        createStore.dispatch("searchRandom");
      } else {
        this.goResultPage = false;
        alert("You need to choose an option");
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.main_last-random {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.main_last-title {
  font-family: "Bodoni 72 Oldstyle";
  font-size: 7rem;
}
.main_section-buttons {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
}
.main_buttons {
  display: flex;
  justify-content: right;
  margin-right: 3rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
}
.button_nextResults {
  background: white;
  border: none;
  height: 4rem;
  width: 4rem;
  margin-top: 5rem;
  margin-right: 6rem;
  &:hover {
    background: #faa544;
  }
}
.button_next-img {
  height: 3rem;
  width: 3rem;
}
.button_score-1 {
  background: #f7dfc2;
  height: 3rem;
  width: 3rem;
  border: none;
  border-radius: 50%;
  font-size: 1rem;
}
.button_score-2 {
  background: #f7dfc2;
  height: 4rem;
  width: 4rem;
  border: none;
  border-radius: 50%;
  font-size: 1rem;
}
.button_score-3 {
  background: #f7dfc2;
  height: 5rem;
  width: 5rem;
  border: none;
  border-radius: 50%;
  font-size: 1rem;
}
.button_score-4 {
  background: #efc592;
  height: 6rem;
  width: 6rem;
  border: none;
  border-radius: 50%;
  font-size: 1.5rem;
}
.button_score-5 {
  background: #efc592;
  height: 7rem;
  width: 7rem;
  border: none;
  border-radius: 50%;
  font-size: 1.5rem;
}
.button_score-6 {
  background: #efc592;
  height: 8rem;
  width: 8rem;
  border: none;
  border-radius: 50%;
  font-size: 1.5rem;
}
.button_score-7 {
  background: #f2ad9f;
  height: 9rem;
  width: 9rem;
  border: none;
  border-radius: 50%;
  font-size: 2rem;
}
.button_score-8 {
  background: #f2ad9f;
  height: 10rem;
  width: 10rem;
  border: none;
  border-radius: 50%;
  font-size: 2rem;
}
.button_score-9 {
  background: #faa544;
  height: 13rem;
  width: 13rem;
  border: none;
  border-radius: 50%;
  font-size: 4rem;
}
.button_score-10 {
  background: #faa544;
  height: 14rem;
  width: 14rem;
  border: none;
  border-radius: 50%;
  font-size: 4rem;
}
</style>
