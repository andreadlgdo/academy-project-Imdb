<template>
  <link
    href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1"
    rel="stylesheet"
    type="text/css"
  />
  <main>
    <section class="main_resultRandom">
      <h2 class="main_randomTitle">Your personal results</h2>
      <ChangeView />
    </section>
    <section v-if="getMovies.length !== 0" class="main_view-movies">
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
    </section>
    <section v-if="getMovies.length === 0">
      <img
        :src="require('../../assets/images/NoResults.png')"
        class="image_NoResults"
      />
      <button class="button_repeat-search">Repeat search</button>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ChangeView from "@/components/ChangeView.vue";
import createStore from "@/store";
import Starts from "@/components/StartRating.vue";

export default defineComponent({
  name: "ResultRandomSearch",
  components: { ChangeView, Starts },
  data: function () {
    return {
      toFirstPage: false,
      changeCart: false,
    };
  },
  computed: {
    getImages() {
      createStore.state.images.forEach((e, index) => {
        if (e === "N/A" || e === undefined) {
          createStore.state.images[index] = "button";
        }
      });
      return createStore.state.images;
    },
    getMovies() {
      return createStore.state.randomFilms;
    },
    getChangeView() {
      return createStore.state.changeView;
    },
  },
});
</script>

<style scoped>
.main_resultRandom {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 1rem;
}
.main_randomTitle {
  display: flex;
  justify-content: left;
  align-items: center;
  padding-left: 2rem;
  font-family: Arial;
  font-weight: lighter;
  font-variant: all-small-caps;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  margin: 1rem;
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
  align-items: center;
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
