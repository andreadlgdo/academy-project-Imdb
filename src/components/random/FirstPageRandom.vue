<template>
  <HeaderRandom />
  <main class="main_first-random" v-if="!goToNextPage">
    <h2 class="app_section-title">HOW ARE YOU?</h2>
    <section class="main_section-slider">
      <button
        v-for="(emotions, index) in buttons"
        :key="index"
        class="button_emotions"
        @click="selectItem(index)"
      >
        <img
          :src="emotions.image"
          alt="image emotion"
          class="button_emotions-img"
          :class="{ 'button_emotions-selected': this.itemsSelected[index] }"
        />
        <p
          class="button_emotions-title"
          :class="{
            'button_emotions-titleSelected': this.itemsSelected[index],
          }"
        >
          {{ emotions.title }}
        </p>
      </button>
    </section>
    <div class="main_buttons">
      <button @click="goToSecondPage()" class="button_nextSecond">
        <img
          class="button_next-img"
          :src="require('@/assets/images/next.png')"
          alt="next"
        />
      </button>
    </div>
  </main>
  <SecondPageRandom v-if="goToNextPage" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderRandom from "./HeaderRandom.vue";
import SecondPageRandom from "./SecondPageRandom.vue";
import createStore from "@/store";

export default defineComponent({
  name: "FirstPageRandom",
  data: function () {
    return {
      itemsSelected: [false, false, false, false, false, false],
      goToNextPage: false,
      numberTrue: 0,
      buttons: [
        {
          title: "Romantic",
          image: require("@/assets/images/random/1.png"),
        },
        {
          title: "Afraid",
          image: require("@/assets/images/random/2.png"),
        },
        {
          title: "Bored",
          image: require("@/assets/images/random/3.png"),
        },
        {
          title: "Sad",
          image: require("@/assets/images/random/4.png"),
        },
        {
          title: "Happy",
          image: require("@/assets/images/random/5.png"),
        },
        {
          title: "Lazy",
          image: require("@/assets/images/random/6.png"),
        },
      ],
    };
  },
  components: {
    HeaderRandom,
    SecondPageRandom,
  },
  methods: {
    selectItem: function (value: number) {
      if (this.numberTrue == 2 && this.itemsSelected[value] == false) {
        alert("You can only choose two options");
      } else {
        if (this.itemsSelected[value] == true) {
          this.itemsSelected[value] = false;
          this.numberTrue--;
        } else {
          this.numberTrue++;
          this.itemsSelected[value] = true;
        }
      }
    },
    sendEmotions: function () {
      const emotions = [
        "Romance",
        "Horror",
        "Drama",
        "Crime",
        "Comedy",
        "Action",
      ];
      for (let i = 0; i < this.itemsSelected.length; i++) {
        if (this.itemsSelected[i]) {
          let element =
            document.querySelectorAll<HTMLElement>(".button_emotions");
          if (element !== null) {
            createStore.dispatch("setRandomParams", emotions[i]);
            createStore.dispatch("setRandomFilters", "genres");
          }
        }
      }
    },
    goToSecondPage: function () {
      if (this.numberTrue > 0) {
        this.goToNextPage = true;
        this.sendEmotions();
      } else {
        this.goToNextPage = false;
        alert("You need to choose at least one option");
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.main_first-random {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.app_section-title {
  font-family: "Bodoni 72 Oldstyle";
  font-size: 7rem;
}
.main_section-slider {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}
.button_emotions {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  height: 10rem;
  width: 10rem;
  font-size: 2rem;
  font-family: "Al Tarikh";
  position: relative;
  border: none;
  &-img {
    position: absolute;
    height: 10rem;
    width: 10rem;
    opacity: 0.6;
    border-radius: 30px;
    &:hover {
      opacity: 1;
    }
  }
  &-selected {
    opacity: 1;
  }
  &-title {
    position: absolute;
    &Selected {
      font-weight: bold;
    }
  }
}
.main_buttons {
  display: flex;
  justify-content: flex-end;
  margin-right: 6rem;
  margin-top: 5rem;
}
.button_nextSecond {
  background: white;
  border: none;
  height: 4rem;
  width: 4rem;
  margin-bottom: 2rem;
  &:hover {
    background: #efc592;
  }
}
.button_next-img {
  height: 3rem;
  width: 3rem;
}
</style>
