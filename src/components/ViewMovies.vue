<template>
  <link
    href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1"
    rel="stylesheet"
    type="text/css"
  />
  <div class="main">
    <ToolBar />
    <main class="main_view-movies">
      <div class="main_all">
        <section
          :class="{ 'main_movies-little': getChangeView }"
          class="main_movies"
        >
          <div
            @click="changeCart = !changeCart"
            class="main_movie"
            v-for="(movie, index) in getMovies"
            :key="index"
          >
            <transition
              name="custom-classes-transition"
              leave-active-class="animated bounceOutRight"
            >
              <div class="first_side" v-if="!changeCart">
                <h2>{{ movie.primaryTitle }}</h2>
                <img
                  v-if="getImages[index] !== 'button'"
                  class="image-img"
                  :src="getImages[index]"
                />
                <button
                  v-if="getImages[index] === 'button'"
                  class="image-button"
                ></button>
                <div class="movie_score">
                  <Starts :rating="movie.averageRating"></Starts>
                  <p class="score_number">Score: {{ movie.averageRating }}</p>
                </div>
              </div>
            </transition>
            <transition>
              <div class="second_side" v-if="changeCart">
                <h2>{{ movie.primaryTitle }}</h2>
                <div class="movie_score">
                  <Starts :rating="movie.averageRating"></Starts>
                  <p class="score_number">Score: {{ movie.averageRating }}</p>
                </div>
                <div class="buttons_genre">
                  <button
                    class="genre"
                    v-for="(genre, index) in movie.genres"
                    :key="index"
                  >
                    {{ genre }}
                  </button>
                </div>
              </div>
            </transition>
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
import Starts from "@/components/StartRating.vue";
import createStore from "@/store";

export default defineComponent({
  name: "ViewMovies",
  components: { ToolBar, AsideFilters, Starts },
  data: function () {
    return {
      changeCart: false,
    };
  },
  computed: {
    getOpenFilters() {
      return createStore.state.isOpen;
    },
    getImages() {
      createStore.state.images.forEach((e, index) => {
        if (e === "N/A" || e === undefined) {
          createStore.state.images[index] = "button";
        }
      });
      return createStore.state.images;
    },
    getMovies() {
      if (createStore.state.filmsByGenre.length === 0) {
        if (createStore.state.isFilters) {
          console.log(createStore.state.moviesByFilters);
          return createStore.state.moviesByFilters;
        }
        return createStore.state.allFilms;
      } else {
        if (createStore.state.isFilters) {
          console.log("test");
          return createStore.state.moviesByFilters;
        }
        return createStore.state.filmsByGenre;
      }
    },
    getChangeView() {
      return createStore.state.changeView;
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
.main_movies-little {
  display: grid;
  margin: 2rem;
  grid-template-columns: 1fr 1fr;
}
.main_movie {
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  margin: 1rem;
}
.first_side {
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
.image-img,
.image-button {
  height: 20rem;
  width: 15rem;
  border-radius: 30px;
  border: none;
}
.image-button {
  background-image: url("@/assets/images/NotFound1.png");
  background-size: cover;
}
.movie_score {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 1rem;
}
.score_number {
  font-size: 1rem;
}
.second_side {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.buttons_genre {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
}
.genre {
  border: none;
  background: lightblue;
  border-radius: 30px;
  padding: 1rem;
}
</style>
