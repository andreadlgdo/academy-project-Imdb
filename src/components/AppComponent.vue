<template>
  <div class="mainPage">
    <div class="main_title">
      <p class="main_title-company">IMDb</p>
      <h1 class="main_title-movies">
        The world <br />
        of movies
      </h1>
    </div>
    <div class="buttons">
      <div class="button_start-exploring">
        <button class="button" @click="search(true)">Start exploring</button>
      </div>
      <div class="button_random-search">
        <button class="button" @click="searchRandom(true)">
          Random search
        </button>
      </div>
    </div>
  </div>
  <MainModal v-if="isOpen">
    <FirstPage />
  </MainModal>
  <MainModal v-if="isOpenRandom">
    <FirstPageRandom />
  </MainModal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FirstPage from "./FirstPage.vue";
import FirstPageRandom from "./FirstPageRandom.vue";

export default defineComponent({
  name: "AppComponent",
  components: {
    FirstPage,
    FirstPageRandom,
  },
  data: function () {
    return {
      isOpen: false,
      isOpenRandom: false,
    };
  },
  methods: {
    search: function (value: boolean) {
      this.isOpen = value;
      let element = document.querySelector(".mainPage");
      if (element !== null) element.remove();
    },
    searchRandom: function (value: boolean) {
      this.isOpenRandom = value;
      let element = document.querySelector(".mainPage");
      if (element !== null) element.remove();
    },
  },
});
</script>

<style scoped>
.mainPage {
  display: grid;
  grid-template-rows: 70% 30%;
  background: cadetblue;
  height: 100%;
}
.main_title-company {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Academy Engraved LET";
  font-size: 3rem;
  color: black;
  font-weight: bold;
}
.main_title-movies {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Al Tarikh";
  font-size: 10rem;
  font-variant: all-small-caps;
  padding-bottom: 10rem;
  color: white;
}
.buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.button_start-exploring {
  display: flex;
  justify-content: right;
  padding-right: 2rem;
}
.button_random-search {
  display: flex;
  justify-content: left;
  padding-left: 2rem;
}
.button {
  height: 4rem;
  width: 15rem;
  border-radius: 30px;
  border-color: white;
  background: white;
  font-size: 1rem;
}
.button:hover {
  background: aliceblue;
}
</style>
