<template>
  <Header />
  <main class="main_page" v-if="!isGoToSeeAllMovies">
    <section class="main_section-news">
      <div class="section_news">
        <h2 class="section_title">News</h2>
        <a class="section_view-all" @click="goViewAllMovies(true)"
          >View all
          <img
            class="section_icon-arrow"
            :src="require('@/assets/images/arrow.png')"
            alt="arrow"
        /></a>
      </div>
    </section>
    <section class="main_section-categories">
      <h2 class="section_title">Categories</h2>
      <div class="sliding-panel">
        <Categories @change-page="goViewAllMovies(true)" />
      </div>
    </section>
  </main>
  <FilterPage v-if="isGoToSeeAllMovies" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./Header.vue";
import FilterPage from "./ViewMovies.vue";
import Categories from "@/components/categories/AllCategories.vue";

export default defineComponent({
  name: "MainPage",
  components: {
    Header,
    FilterPage,
    Categories,
  },
  data: function () {
    return {
      isGoToSeeAllMovies: false,
    };
  },
  methods: {
    goViewAllMovies: function (value: boolean) {
      this.isGoToSeeAllMovies = value;
    },
  },
});
</script>

<style lang="scss" scoped>
.main_page {
  margin-left: 3rem;
  margin-right: 3rem;
  margin-top: 1rem;
}
.sliding-panel {
  width: 100%;
  overflow-x: scroll;
}
.section_news {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.section_title {
  display: flex;
  justify-content: left;
  padding-left: 4rem;
  font-family: serif;
  font-size: 3rem;
}
.section_view-all {
  display: flex;
  align-items: center;
  margin-right: 5rem;
  color: black;
  &:hover {
    color: cadetblue;
    font-weight: bold;
  }
}
.section_icon-arrow {
  margin-left: 1rem;
}
</style>
