<template>
  <aside class="sectionOpen_aside facets">
    <div class="aside_title">
      <h2 class="aside_sort-filters">SORT & FILTERS</h2>
      <button class="aside_button-close" @click="closeFilters(false)">
        <img
          class="aside_img-close"
          :src="require('@/assets/images/cross.png')"
          alt="cross"
        />
      </button>
    </div>
    <nav class="nav">
      <div class="nav_item-1">
        <button class="nav_button-1" @click="openSortBy(1)">Sort by</button>
        <ul class="nav_sublist1" hidden>
          <li><input type="radio" name="sort-by" checked /> No sorted</li>
          <li><input type="radio" name="sort-by" /> By score: Low to High</li>
          <li><input type="radio" name="sort-by" /> By score: High to Low</li>
        </ul>
      </div>
      <div class="nav_item-2">
        <button class="nav_button-2" @click="openSortBy(2)">Score</button>
        <div class="nav_sublist2">
          <Slider class="slider-2" v-model="range" :max="10" :min="0" />
        </div>
      </div>
      <div class="nav_item-3">
        <button class="nav_button-3" @click="openSortBy(3)">Gender</button>
        <ul class="nav_sublist3"></ul>
      </div>
      <div class="nav_item-4">
        <button class="nav_button-4" @click="openSortBy(4)">Year</button>
        <div class="nav_sublist4">
          <Slider
            class="slider-2"
            v-model="rangeYear"
            :max="2022"
            :min="1980"
          />
        </div>
      </div>
      <div class="nav_item-5">
        <button class="nav_button-5" @click="openSortBy(5)">Time</button>
        <div class="nav_sublist5">
          <Slider
            class="slider-2"
            v-model="rangeTime"
            :max="300"
            :min="50"
            :step="5"
          />
        </div>
      </div>
    </nav>
    <div class="aside_button-aplyFilters">
      <button class="button_view-results">View X Results</button>
    </div>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import createStore from "@/store";
import Slider from "@vueform/slider";

export default defineComponent({
  name: "FacetsComponent",
  components: { Slider },
  data: function () {
    return {
      itemsOpened: [false, false, false, false, false],
      plusView: [10, 10, 10, 10, 10],
      range: [0, 10],
      rangeTime: [50, 300],
      rangeYear: [1980, 2022],
    };
  },
  methods: {
    closeFilters: function (value: boolean) {
      createStore.state.isOpen = value;
      let element = document.querySelector(".sectionOpen");
      if (element !== null) element.remove();
    },
    openSortBy: function (value: number) {
      if (!this.itemsOpened[value - 1]) {
        this.itemsOpened[value - 1] = true;
        let element = document.querySelector<HTMLElement>(
          ".nav_sublist" + value
        );
        if (element !== null) element.style.visibility = "visible";
        element = document.querySelector<HTMLElement>(".nav");
        if (element !== null) {
          for (let i = 0; i < this.itemsOpened.length; i++) {
            if (this.itemsOpened[i]) this.plusView[i] = 30;
          }
          element.style.gridTemplateRows =
            this.plusView[0] +
            "% " +
            this.plusView[1] +
            "% " +
            this.plusView[2] +
            "% " +
            this.plusView[3] +
            "% " +
            this.plusView[4] +
            "%";
        }
        element = document.querySelector<HTMLElement>(".nav_item-" + value);
        if (element !== null) {
          element.style.display = "grid";
          element.style.gridTemplateRows = "40% 60%";
          element.style.borderBottom = "solid lightgrey";
        }
        element = document.querySelector<HTMLElement>(".nav_button-" + value);
        if (element !== null) element.style.borderBottom = "none";
      } else {
        this.itemsOpened[value - 1] = false;
        let element = document.querySelector<HTMLElement>(
          ".nav_sublist" + value
        );
        if (element !== null) element.style.visibility = "hidden";
        element = document.querySelector<HTMLElement>(".nav");
        if (element !== null) {
          for (let i = 0; i < this.itemsOpened.length; i++) {
            if (!this.itemsOpened[i]) this.plusView[i] = 12;
          }
          element.style.gridTemplateRows =
            this.plusView[0] +
            "% " +
            this.plusView[1] +
            "% " +
            this.plusView[2] +
            "% " +
            this.plusView[3] +
            "% " +
            this.plusView[4] +
            "%";
        }
        element = document.querySelector<HTMLElement>(".nav_item-" + value);
        if (element !== null) {
          element.style.display = "block";
          element.style.borderBottom = "none";
        }
        element = document.querySelector<HTMLElement>(".nav_button-" + value);
        if (element !== null) element.style.borderBottom = "solid lightgrey";
      }
    },
  },
});
</script>

<style scoped>
.facets {
  position: absolute;
  top: 0;
  background-color: white;
}
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
  grid-template-rows: 10% 75% 15%;
  border-right: solid lightgrey;
  padding-top: 2rem;
}
.nav {
  display: grid;
  grid-template-rows: 12% 12% 12% 12% 12%;
  overflow: auto;
  scroll-snap-type: y mandatory;
}
.nav_sublist1,
.nav_sublist3 {
  display: flex;
  flex-direction: column;
  list-style: none;
  visibility: hidden;
}
.nav_sublist2,
.nav_sublist4,
.nav_sublist5 {
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: hidden;
}
.nav_sublist1 li {
  display: flex;
  justify-content: left;
  padding-left: 2rem;
}
.nav_button-1,
.nav_button-2,
.nav_button-3,
.nav_button-4,
.nav_button-5 {
  height: 100%;
  width: 100%;
  border-style: none;
  background: white;
  border-bottom: solid lightgrey;
  padding: 1rem;
  font-size: 1rem;
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
.button_view-results {
  border-radius: 30px;
  height: 3rem;
  width: 15rem;
  border: none;
  background: lightblue;
}
.slider-2 {
  width: 80%;
}
</style>
<style src="@vueform/slider/themes/default.css"></style>
