<template>
  <section class="sectionOpen">
    <aside class="sectionOpen_aside">
      <div class="aside_title">
        <h2 class="aside_sort-filters">SORT & FILTERS</h2>
        <button class="aside_button-close" @click="closeFilters(true)">
          <img
            class="aside_img-close"
            src="../assets/images/cross.png"
            alt="cross"
          />
        </button>
      </div>
      <nav class="nav">
        <div class="nav_item">
          <button class="nav_button-sort" @click="openSortBy()">Sort by</button>
          <ul class="nav_sublist1">
            <li><input type="radio" name="sort-by" />No sorted</li>
            <li><input type="radio" name="sort-by" />By score: Low to High</li>
            <li><input type="radio" name="sort-by" />By score: High to Low</li>
          </ul>
        </div>
        <div class="nav_item-score">
          <button class="nav_button-score" @click="openFilterByScore()">
            Score
          </button>
          <ul class="nav_sublist2">
            <li><input type="radio" name="sort-by" />No sorted</li>
            <li><input type="radio" name="sort-by" />By score: Low to High</li>
            <li><input type="radio" name="sort-by" />By score: High to Low</li>
          </ul>
        </div>
        <div class="nav_item-gender">
          <button class="nav_button-gender" @click="openScoreBy()">
            Gender
          </button>
          <ul class="nav_sublist3"></ul>
        </div>
        <div class="nav_item-year">
          <button class="nav_button-year">Year</button>
          <ul class="nav_sublist4"></ul>
        </div>
        <div class="nav_item-time">
          <button class="nav_button-time">Time</button>
          <ul class="nav_sublist5"></ul>
        </div>
      </nav>
    </aside>
    <section class="sectionOpen_view">
      <ChangeView />
      <div>
        <h2>Movies</h2>
        <p>all movies</p>
      </div>
    </section>
  </section>
  <MainModal v-if="isOpenFilters">
    <OptionsFilmsClose />
  </MainModal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ChangeView from "./ChangeView.vue";
import OptionsFilmsClose from "@/components/OptionsFilmsClose.vue";

export default defineComponent({
  name: "OptionsFilmsOpen",
  components: { ChangeView },
  data: function () {
    return {
      isOpenFilters: false,
      isOpenSort: false,
      isOpenScore: false,
      itemsOpened: [],
    };
  },
  methods: {
    closeFilters: function (value: boolean) {
      this.isOpenFilters = value;
      let element = document.querySelector(".sectionOpen");
      if (element !== null) element.remove();
    },
    openSortBy: function () {
      if (this.isOpenSort === false) {
        this.isOpenSort = true;
        let element = document.querySelector<HTMLElement>(".nav_sublist1");
        if (element !== null) element.style.overflow = "visible";
        element = document.querySelector<HTMLElement>(".nav");
        if (element !== null)
          element.style.gridTemplateRows = "20% 10% 10% 10% 10%";
        element = document.querySelector<HTMLElement>(".nav_item");
        if (element !== null) {
          element.style.display = "grid";
          element.style.gridTemplateRows = "40% 60%";
          element.style.borderBottom = "solid lightgrey";
        }
        element = document.querySelector<HTMLElement>(".nav_button-sort");
        if (element !== null) element.style.borderBottom = "none";
      } else {
        this.isOpenSort = false;
        let element = document.querySelector<HTMLElement>(".nav_sublist1");
        if (element !== null) element.style.overflow = "hidden";
        element = document.querySelector<HTMLElement>(".nav");
        if (element !== null)
          element.style.gridTemplateRows = "10% 10% 10% 10%";
        element = document.querySelector<HTMLElement>(".nav_item");
        if (element !== null) {
          element.style.display = "block";
          element.style.borderBottom = "none";
        }
        element = document.querySelector<HTMLElement>(".nav_button-sort");
        if (element !== null) element.style.borderBottom = "solid lightgrey";
      }
    },
    openFilterByScore: function () {
      if (this.isOpenScore === false) {
        this.isOpenScore = true;
        let element = document.querySelector<HTMLElement>(".nav_sublist2");
        if (element !== null) element.style.overflow = "visible";
        element = document.querySelector<HTMLElement>(".nav");
        if (element !== null)
          element.style.gridTemplateRows = "10% 20% 10% 10% 10%";
        element = document.querySelector<HTMLElement>(".nav_item-score");
        if (element !== null) {
          element.style.display = "grid";
          element.style.gridTemplateRows = "40% 60%";
          element.style.borderBottom = "solid lightgrey";
        }
        element = document.querySelector<HTMLElement>(".nav_button-score");
        if (element !== null) element.style.borderBottom = "none";
      } else {
        this.isOpenScore = false;
        let element = document.querySelector<HTMLElement>(".nav_sublist2");
        if (element !== null) element.style.overflow = "hidden";
        element = document.querySelector<HTMLElement>(".nav");
        if (element !== null)
          element.style.gridTemplateRows = "10% 10% 10% 10% 10%";
        element = document.querySelector<HTMLElement>(".nav_item-score");
        if (element !== null) {
          element.style.display = "block";
          element.style.borderBottom = "none";
        }
        element = document.querySelector<HTMLElement>(".nav_button-score");
        if (element !== null) element.style.borderBottom = "solid lightgrey";
      }
    },
  },
});
</script>

<style scoped>
.sectionOpen {
  display: grid;
  grid-template-columns: 35% 65%;
  height: 100%;
}
.sectionOpen_view {
  display: flex;
  flex-direction: column;
}
.sectionOpen_aside {
  display: grid;
  grid-template-rows: 10% 90%;
  border-right: solid lightgrey;
  padding-top: 2rem;
}
.aside_title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 2rem;
  border-bottom: solid lightgrey 10px;
}
.aside_img-close {
  height: 2rem;
  width: 2rem;
}
.aside_button-close {
  margin-right: 2rem;
  background: white;
  border: none;
}
.aside_button-close:hover {
  border-radius: 40px;
  background: lightblue;
}
.aside_sort-filters {
  margin-left: 3rem;
}
.nav {
  display: grid;
  grid-template-rows: 10% 10% 10% 10% 10%;
}
.nav_sublist1,
.nav_sublist2,
.nav_sublist3 {
  display: flex;
  flex-direction: column;
  justify-content: left;
  list-style: none;
  height: 0;
  overflow: scroll;
}
.nav_button-sort,
.nav_button-score,
.nav_button-gender,
.nav_button-year,
.nav_button-time {
  height: 100%;
  width: 100%;
  border-style: none;
  background: white;
  border-bottom: solid lightgrey;
  padding: 1rem;
}
</style>
