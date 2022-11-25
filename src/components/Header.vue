<template>
  <div class="header">
    <div class="header_search">
      <div :class="{ finder_open: opened }">
        <input
          placeholder="&#128270;   Buscar..."
          type="text"
          @click="isOpen()"
          class="header_searcher"
        />
        <div class="finder" v-if="getOpenHeader">
          <section class="finder_left">
            <button @click="setFirstPage(false)" class="finder_back">
              Back to top
            </button>
            <button @click="$emit('view-all')" class="finder_back">
              All movies
            </button>
            <button @click="goMainPage()" class="finder_back">Main page</button>
          </section>
          <section class="finder_right">
            <p class="right_title">More popular</p>
            <div class="sliding-panel">
              <div class="section">
                <div class="section_popular">
                  <section class="movie_info">
                    <section
                      class="movie_all-info"
                      v-for="(movie, index) in getNewsMovies"
                      :key="index"
                    >
                      <p class="title_movie">{{ movie.primaryTitle }}</p>
                      <Starts :rating="movie.averageRating"></Starts>
                    </section>
                  </section>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
    <section class="section_title">
      <button @click="setFirstPage(false)" class="header_title">
        The world of movies
      </button>
    </section>
    <div class="header_logo">
      <img
        :src="require('@/assets/images/logo.png')"
        class="header_logo-img"
        alt="logo"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import createStore from "@/store";
import Starts from "@/components/StartRating.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
  components: { Starts },
  data: function () {
    return {
      opened: false,
    };
  },
  computed: {
    getNewsMovies() {
      return createStore.state.filmsNew;
    },
    getOpenHeader() {
      return createStore.state.openHeader;
    },
    getImages() {
      createStore.state.images.forEach((e, index) => {
        if (e === "N/A" || e === undefined) {
          createStore.state.images[index] = "button";
        }
      });
      return createStore.state.images;
    },
  },
  methods: {
    setFirstPage: function (value: boolean) {
      if (this.getOpenHeader) createStore.dispatch("setOpenHeader", false);
      createStore.dispatch("setMovieByGenre", false);
      createStore.dispatch("setFirstPage", value);
      createStore.dispatch("setLikes", false);
      createStore.dispatch("setTypeOfSearch", "");
    },
    isOpen: function () {
      createStore.dispatch("setOpenHeader", !this.getOpenHeader);
    },
    goMainPage: function () {
      createStore.dispatch("setOpenHeader", !this.getOpenHeader);
      createStore.dispatch("setMovieByGenre", false);
      createStore.dispatch("setLikes", false);
      createStore.dispatch("setTypeOfSearch", "normal");
    },
  },
});
</script>

<style lang="scss" scoped>
.header {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  flex-wrap: wrap;
  margin: 0rem;
  border-bottom: solid lightgrey;
  padding: 1rem;
  border-width: 0.3rem;
}
.section_title {
  display: flex;
  justify-content: center;
  align-items: center;
}
.header_title {
  padding: 1rem;
  border: black solid;
  background: transparent;
  font-family: Copperplate;
  font-weight: lighter;
  font-size: 2.5rem;
  font-variant: all-small-caps;
  &:hover {
    border: #faa544 solid;
  }
}
.header_logo {
  display: flex;
  justify-content: center;
  align-items: center;
}
.header_logo-img {
  height: 8rem;
  width: 10rem;
  border-radius: 50%;
}
.header_search {
  display: flex;
  justify-content: center;
  align-items: center;
}
.header_searcher {
  height: 2.5rem;
  width: 15rem;
  padding-left: 1rem;
  border: none;
  border-bottom: black solid;
  &:hover {
    border-bottom: #faa544 solid;
  }
}
.header_search-icon {
  height: 2.5rem;
  width: 2.5rem;
}
.finder {
  height: 15rem;
  width: 30rem;
  display: grid;
  grid-template-columns: 30% 70%;
  border: lightgrey solid;
  background: white;
  position: absolute;
  z-index: 1;
}
.finder_open {
  display: grid;
  grid-template-rows: 20% 80%;
}
.finder_left {
  margin: 1rem;
  display: flex;
  flex-direction: column;
}
.finder_right {
  display: flex;
  flex-direction: column;
}
.finder_back {
  border: none;
  padding: 0.5rem;
  background: #f7dfc2;
  border-radius: 30px;
  margin-bottom: 1rem;
  &:hover {
    background: #f2ad9f;
  }
}
.sliding-panel {
  width: 100%;
  overflow-x: scroll;
}
.section {
  display: flex;
}
.section_popular {
  display: flex;
  flex-direction: column;
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
.movie_info {
  display: flex;
  gap: 2rem;
}
.movie_all-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.right_title {
  display: flex;
  font-family: sans-serif;
  padding-left: 2rem;
  justify-content: left;
  padding-bottom: 1rem;
  border-bottom: lightgrey solid;
}
</style>
