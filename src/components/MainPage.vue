<template>
  <Header @view-all="goViewAllMovies(true, '')" />
  <main class="main_page" v-if="!isGoToSeeAllMovies">
    <section class="main_section-categories">
      <h2 class="section_title">Categories</h2>
      <div class="slide_content">
        <div class="sliding-panel">
          <Categories @change-page="(genre) => goViewAllMovies(true, genre)" />
        </div>
      </div>
    </section>
    <section class="main_section-news">
      <div class="section_news">
        <h2 class="section_title">News</h2>
        <a class="section_view-all" @click="goViewAllMovies(true, '')"
          >View all
          <img
            class="section_icon-arrow"
            :src="require('@/assets/images/arrow.png')"
            alt="arrow"
        /></a>
      </div>
      <div class="slide_content">
        <div class="sliding-panel">
          <section class="section">
            <div class="section_news-info">
              <section class="movie_info">
                <section
                  class="movie_all-info"
                  v-for="(movie, index) in getNewsMovies"
                  :key="index"
                >
                  <img
                    v-if="getImages[index] !== 'button'"
                    class="image-img"
                    :src="getImages[index]"
                  />
                  <button
                    v-if="getImages[index] === 'button'"
                    class="image-button"
                  ></button>
                  <p class="title_movie">{{ movie.primaryTitle }}</p>
                </section>
              </section>
            </div>
          </section>
        </div>
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
import createStore from "@/store";

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
  computed: {
    getNewsMovies() {
      return createStore.state.filmsNew;
    },
    getImages() {
      createStore.state.images.forEach((e, index) => {
        if (e === "N/A" || e === undefined) {
          createStore.state.images[index] = "button";
        }
      });
      return createStore.state.images;
    },
    getOpenHeader() {
      return createStore.state.openHeader;
    },
  },
  methods: {
    goViewAllMovies: function (value: boolean, genre: string) {
      this.isGoToSeeAllMovies = value;
      createStore.dispatch("setOpenHeader", !this.getOpenHeader);
      if (genre === "") createStore.dispatch("setAllFilms");
      else createStore.dispatch("setMovieFilter", genre);
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
  width: 90%;
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
.section {
  display: flex;
}
.section_news-info {
  display: flex;
  flex-direction: column;
}
.movie_info {
  display: flex;
  gap: 2rem;
}
.slide_content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.image-img,
.image-button {
  height: 13rem;
  width: 8rem;
  border-radius: 30px;
  border: none;
  opacity: 0.6;
  &:hover {
    opacity: 1;
  }
}
.image-button {
  background-image: url("@/assets/images/NotFound1.png");
  background-size: cover;
  &:hover {
    opacity: 1;
  }
}
.title_movie {
  font-weight: bold;
}
.movie_all-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
