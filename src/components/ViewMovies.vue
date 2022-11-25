<template>
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.0/animate.min.css"
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
            class="main_movie"
            v-for="(movie, index) in getMovies"
            :key="index"
          >
            <transition>
              <div
                @click="changeCart = !changeCart"
                class="first_side"
                v-if="!changeCart"
              >
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
            <div class="heart_button">
              <button
                @click="setLike(movie)"
                class="heart_isNotLike"
                v-if="!movie.like"
              >
                <img
                  class="heart_icon-unlike"
                  :src="require('@/assets/images/heart.svg')"
                />
              </button>
              <button
                @click="unLike(movie)"
                class="heart_isLike"
                v-if="movie.like"
              >
                <img
                  class="heart_icon-like"
                  :src="require('@/assets/images/heart.svg')"
                />
              </button>
            </div>
            <transition
              name="custom-classes-transition"
              enter-active-class="animate__animated animate__tada"
            >
              <div
                @click="changeCart = !changeCart"
                class="second_side"
                v-if="changeCart"
              >
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
import { ParserOptions } from "@typescript-eslint/parser/dist/parser";

export default defineComponent({
  name: "ViewMovies",
  components: { ToolBar, AsideFilters, Starts },
  data: function () {
    return {
      changeCart: false,
      indextTitle: 0,
      indexScore: 0,
      titles: [] as any[],
      scores: [] as any[],
    };
  },
  methods: {
    setLike: function (movie: any) {
      movie.like = true;
      this.setSession(movie);
    },
    unLike: function (movie: any) {
      movie.like = false;
      this.removeSession(movie);
    },
    setSession: function (value: any) {
      console.log(this.scores);
      this.scores[this.indexScore] = value.averageRating;
      this.titles[this.indextTitle] = value.primaryTitle;
      this.indextTitle++;
      this.indexScore++;
      if (this.indextTitle !== null)
        localStorage.setItem("count", this.indextTitle.toString());
      if (localStorage.getItem("titleFilm") != null) {
        let titleFilm = localStorage.getItem("titleFilm");
        if (titleFilm !== null && this.indextTitle == 1) {
          let f = titleFilm.substring(1, titleFilm.length - 1).split(",");
          for (let j = 0; j < f.length; j++) {
            this.titles[this.indextTitle++] = f[j].substring(
              1,
              f[j].length - 1
            );
          }
        }
        localStorage.titleFilm = JSON.stringify(this.titles);
      } else {
        localStorage.titleFilm = JSON.stringify(this.titles);
      }
      if (localStorage.getItem("scoreFilm") != null) {
        let scoreFilm = localStorage.getItem("scoreFilm");
        if (scoreFilm != null && this.indexScore == 1) {
          let f = scoreFilm.substring(1, scoreFilm.length - 1).split(",");
          for (let j = 0; j < f.length; j++) {
            this.scores[this.indexScore++] = f[j];
          }
        }
        for (let j = 0; j < this.scores.length; j++) {
          console.log(typeof this.scores[j]);
          if (typeof this.scores[j] === "string") {
            this.scores[j] = parseInt(this.scores[j]);
          }
        }
        localStorage.scoreFilm = JSON.stringify(this.scores);
      } else {
        localStorage.scoreFilm = JSON.stringify(this.scores);
      }
    },
    removeSession: function (value: any) {
      const films = localStorage.getItem("titleFilm");
      const scores = localStorage.getItem("scoreFilm");

      if (films !== null && scores !== null) {
        const film = films.substring(1, films.length - 1).split(",");
        if (film.length > 1) {
          const score = scores.substring(1, scores.length - 1).split(",");
          for (let j = 0; j < film.length; j++) {
            if (
              film[j].substring(1, film[j].length - 1) === value.primaryTitle
            ) {
              film[j] = "";
              score[j] = "";
            }
          }
          console.log(this.titles);
          for (let i = 0; i < this.titles.length; i++) {
            console.log(i);
            this.titles.pop();
            this.scores.pop();
          }
          console.log(this.titles);
          for (let j = 0; j < film.length; j++) {
            if (
              film[j].substring(1, film[j].length - 1) !== "" &&
              film[j].substring(1, film[j].length - 1).length !== 0
            ) {
              this.titles[j] = film[j].substring(1, film[j].length - 1);
              this.scores[j] = score[j];
            }
          }
          for (let j = 0; j < this.scores.length; j++) {
            if (typeof this.scores[j] === "string") {
              this.scores[j] = parseInt(this.scores[j]);
            }
          }
          console.log("titulos despues borrar" + this.titles);
          localStorage.titleFilm = JSON.stringify(this.titles);
          localStorage.scoreFilm = JSON.stringify(this.scores);
          console.log("Despues borrar" + localStorage.getItem("titleFilm"));
        } else localStorage.clear();
      }
    },
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
          return createStore.state.moviesByFilters;
        }
        console.log(createStore.state.allFilms);
        return createStore.state.allFilms;
      } else {
        if (createStore.state.isFilters) {
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
  height: 95%;
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
  box-shadow: 3px 3px lightgrey, -1em 0 0.4em lightgrey;
  background: white;
  margin: 1rem;
  display: flex;
  flex-direction: column;
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
.heart_button {
  display: flex;
  justify-content: right;
  margin: 1rem;
  padding-right: 1rem;
}
input[type="radio"] {
  display: none;
}
.heart_isLike {
  display: flex;
  align-content: center;
  padding: 0.5rem;
  border: red solid;
  background: white;
  border-radius: 30px;
  &:hover {
    border: black solid;
    &:before {
      content: "Unlike";
      margin-right: 0.5rem;
    }
  }
}
.heart_isNotLike {
  display: flex;
  align-content: center;
  background: white;
  color: black;
  padding: 0.5rem;
  border-radius: 30px;
  &:hover {
    border: red solid;
    &:before {
      content: "Like";
      margin-right: 0.5rem;
    }
  }
}
.heart_icon-like {
  height: 1rem;
  width: 1rem;
}
.heart_icon-unlike {
  height: 1rem;
  width: 1rem;
}
</style>
