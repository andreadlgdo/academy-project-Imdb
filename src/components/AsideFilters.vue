<template>
  <aside class="aside">
    <section class="aside_title">
      <h2 class="aside_sort-filters">SORT & FILTERS</h2>
      <button class="aside_button-close" @click="closeFilters(false)">
        <img
          class="aside_img-close"
          :src="require('@/assets/images/cross.png')"
          alt="cross"
        />
      </button>
    </section>
    <nav class="nav_aside">
      <section class="nav_item">
        <button class="button_aside" @click="isOpenSort = !isOpenSort">
          Sort by
        </button>
        <ul class="nav_subItem" v-if="isOpenSort">
          <li><input type="radio" name="sort-by" checked /> No sorted</li>
          <li><input type="radio" name="sort-by" /> By score: Low to High</li>
          <li><input type="radio" name="sort-by" /> By score: High to Low</li>
        </ul>
      </section>
      <section class="nav_item">
        <button class="button_aside" @click="isOpenScore = !isOpenScore">
          Score
        </button>
        <div class="nav_subItem" v-if="isOpenScore">
          <div class="slider_score">
            <Slider class="slider" v-model="range" :max="10" :min="0" />
          </div>
        </div>
      </section>
      <section class="nav_item">
        <button class="button_aside" @click="isOpenGenre = !isOpenGenre">
          Genre
        </button>
        <div class="nav_subItem" v-if="isOpenGenre"></div>
      </section>
      <section class="nav_item">
        <button class="button_aside" @click="isOpenYear = !isOpenYear">
          Time
        </button>
        <div class="nav_subItem" v-if="isOpenYear">
          <div class="slider_score">
            <Slider
              class="slider"
              v-model="rangeYear"
              :max="2022"
              :min="1980"
            />
          </div>
        </div>
      </section>
      <section class="nav_item">
        <button class="button_aside" @click="isOpenMinutes = !isOpenMinutes">
          Minutes
        </button>
        <div class="nav_subItem" v-if="isOpenMinutes">
          <div class="slider_score">
            <Slider class="slider" v-model="rangeTime" :max="300" :min="50" />
          </div>
        </div>
      </section>
    </nav>
    <div class="aside_button-applyFilters">
      <button class="button_view-results">View X Results</button>
    </div>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import createStore from "@/store";
import Slider from "@vueform/slider";

export default defineComponent({
  name: "AsideFilters",
  components: { Slider },
  data: function () {
    return {
      isOpenSort: false,
      isOpenScore: false,
      isOpenYear: false,
      isOpenGenre: false,
      isOpenMinutes: false,
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
  },
});
</script>

<style lang="scss" scoped>
.aside {
  position: absolute;
  top: 0;
  background: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-right: solid lightgrey;
  padding-top: 2rem;
}
.nav_scroll {
  overflow: auto;
  scoll-snap-type: y mandatory;
}
.nav_aside {
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
}
.nav_subItem {
  list-style: none;
  li {
    display: flex;
    justify-content: left;
    padding-bottom: 0.5rem;
  }
}
.nav_item {
  border-bottom: solid lightgrey;
}
.button_aside {
  width: 100%;
  border-style: none;
  background: white;
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-size: 1rem;
}
.aside_title {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
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
.slider {
  width: 80%;
}
.slider_score {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  margin-top: 2rem;
}
.button_view-results {
  border-radius: 30px;
  height: 3rem;
  width: 15rem;
  border: none;
  background: lightblue;
  &:hover {
    background: rgba(166, 235, 255, 0.67);
  }
}
</style>
<style src="@vueform/slider/themes/default.css"></style>
