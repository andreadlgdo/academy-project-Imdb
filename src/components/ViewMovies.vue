<template>
  <div class="main">
    <ToolBar />
    <main class="main_view-movies">
      <div class="main_all">
        <section
          :class="{ 'main_movies-little': getIsToChangeView }"
          class="main_movies"
        >
          <div
            class="main_movie"
            v-for="(movie, index) in getMovies"
            :key="index"
          >
            <h2>{{ movie.primaryTitle }}</h2>
            <p>Score : {{ movie.averageRating }}</p>
            <ul>
              <li v-for="(genre, index) in movie.genres" :key="index">
                {{ genre }}
              </li>
            </ul>
          </div>
        </section>
      </div>
      <transition name="slide-fade">
        <AsideFilters v-if="getOpenFilters" />
      </transition>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ToolBar from "@/components/ToolBar.vue";
import AsideFilters from "@/components/AsideFilters.vue";
import createStore from "@/store";

export default defineComponent({
  name: "ViewMovies",
  components: { ToolBar, AsideFilters },
  computed: {
    getOpenFilters() {
      return createStore.state.isOpen;
    },
    getIsToChangeView() {
      console.log(createStore.state.changeView);
      return createStore.state.changeView;
    },
    getMovies() {
      if (createStore.state.filmsByGenre.length === 0) {
        return createStore.state.allFilms;
      } else {
        return createStore.state.filmsByGenre;
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.main {
  position: relative;
  height: 100%;
}
.main_all {
  overflow-y: scroll;
}
.main_view-movies {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.main_movies {
  display: grid;
  margin: 2rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
.main_movies_little {
  display: grid;
  margin: 2rem;
  grid-template-columns: 1fr 1fr;
}
.main_movie {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.slide-fade-enter-active {
  animation: bounce-in 0.5s;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
