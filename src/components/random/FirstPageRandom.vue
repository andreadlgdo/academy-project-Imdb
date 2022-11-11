<template>
  <HeaderRandom />
  <main class="main_first-random">
    <h2 class="main_second-title">HOW ARE YOU?</h2>
    <section class="main_section-slider">
      <button class="button_emotions-1" @click="selectItem(1)">Romantic</button>
      <button class="button_emotions-2" @click="selectItem(2)">Afraid</button>
      <button class="button_emotions-3" @click="selectItem(3)">Bored</button>
      <button class="button_emotions-4" @click="selectItem(4)">Sad</button>
      <button class="button_emotions-5" @click="selectItem(5)">Happy</button>
      <button class="button_emotions-6" @click="selectItem(6)">Lazy</button>
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
      itemsSelected: [false, false, false, false, false, false],
      goToNextPage: false,
      numberTrue: 0,
    };
  },
  components: {
    HeaderRandom,
    SecondPageRandom,
  },
  methods: {
    selectItem: function (value: number) {
      if (this.numberTrue == 2 && this.itemsSelected[value - 1] == false) {
        alert("You can only choose two options");
      } else {
        if (this.itemsSelected[value - 1] == true) {
          this.itemsSelected[value - 1] = false;
          this.numberTrue--;
          let element = document.querySelector<HTMLElement>(
            ".button_emotions-" + value
          );
          if (element != null) {
            element.style.fontWeight = "normal";
            element.style.opacity = "0.6";
          }
        } else {
          this.numberTrue++;
          this.itemsSelected[value - 1] = true;
          for (let i = 0; i < this.itemsSelected.length; i++) {
            if (this.itemsSelected[i]) {
              let element = document.querySelector<HTMLElement>(
                ".button_emotions-" + value
              );
              if (element != null) {
                element.style.opacity = "1";
                element.style.fontWeight = "bold";
              }
            }
          }
        }
      }
    },
    goToSecondPage: function () {
      if (this.numberTrue > 0) {
        this.goToNextPage = true;
        let element = document.querySelector(".main_first-random");
        if (element !== null) element.remove();
      } else {
        this.goToNextPage = false;
        alert("You need to choose at least one option");
      }
    },
  },
});
</script>

<style scoped>
.main_first-random {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background: #f7dfc2;
}
.main_second-title {
  font-family: "Bodoni 72 Oldstyle";
  font-size: 7rem;
}
.main_section-slider {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}
.button_emotions-1,
.button_emotions-2,
.button_emotions-3,
.button_emotions-4,
.button_emotions-5,
.button_emotions-6 {
  background: lightblue;
  border-radius: 30px;
  height: 10rem;
  width: 10rem;
  font-size: 2rem;
  font-family: "Al Tarikh";
  opacity: 0.6;
}
.button_emotions-1 {
  background-image: url("../../assets/images/random/1.png");
  background-size: cover;
}
.button_emotions-2 {
  background-image: url("../../assets/images/random/2.png");
  background-size: cover;
  color: black;
}
.button_emotions-3 {
  background-image: url("../../assets/images/random/3.png");
  background-size: cover;
  color: darkorange;
}
.button_emotions-4 {
  background-image: url("../../assets/images/random/4.png");
  background-size: cover;
  color: black;
}
.button_emotions-5 {
  background-image: url("../../assets/images/random/5.png");
  background-size: cover;
}
.button_emotions-6 {
  background-image: url("../../assets/images/random/6.png");
  background-size: cover;
}
.button_emotions-1:hover,
.button_emotions-2:hover,
.button_emotions-3:hover,
.button_emotions-4:hover,
.button_emotions-5:hover,
.button_emotions-6:hover {
  font-weight: bold;
  opacity: 1;
}
.main_buttons {
  display: flex;
  justify-content: right;
  margin-right: 3rem;
  margin-bottom: 3rem;
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
