<template>
  <div class="header">
    <h1 class="header_title">The world of movies</h1>
    <div class="header_search">
      <div :class="{ finder_open: opened }">
        <input type="text" @click="isOpen()" class="header_searcher" />
        <div class="finder" v-if="getOpenHeader">
          <section class="finder_left">
            <button @click="setFirstPage(false)" class="finder_back">
              Back to top
            </button>
            <button @click="$emit('view-all')" class="finder_back">All movies</button>
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
      <button class="header_search-button">
        <img
          :src="require('@/assets/images/search.png')"
          class="header_search-icon"
          alt="searcher"
        />
      </button>
    </div>
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
      createStore.dispatch("setOpenHeader", !this.getOpenHeader);
      createStore.dispatch("setFirstPage", value);
    },
    isOpen: function (){
      createStore.dispatch("setOpenHeader", !this.getOpenHeader);
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
  border-bottom: solid black;
  padding: 1rem;
  border-width: 0.3rem;
}
.header_title {
  display: flex;
  justify-content: left;
  align-items: center;
  padding-left: 2rem;
  font-family: fantasy;
  font-weight: 700;
  font-size: 2.5rem;
  font-variant: all-small-caps;
}
.header_logo {
  display: flex;
  justify-content: center;
  align-items: center;
}
.header_logo-img {
  height: 10rem;
  width: 12rem;
  border-radius: 50%;
}
.header_search {
  display: flex;
  justify-content: center;
  align-items: center;
}
.header_searcher {
  height: 2.5rem;
  width: 28rem;
  border-radius: 30px;
  padding-left: 1.5rem;
}
.header_search-button {
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  height: 4rem;
  width: 5rem;
  margin-left: 1rem;
  border: none;
  border-radius: 50%;
}
.header_search-button:hover {
  background: aliceblue;
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
