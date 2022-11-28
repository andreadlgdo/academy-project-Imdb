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
                @click="setSaved(movie)"
                class="heart_isNotSave"
                v-if="!movie.saved"
              >
                <img
                  class="heart_icon"
                  :src="require('@/assets/images/save.svg')"
                />
              </button>
              <button
                @click="unSaved(movie)"
                class="heart_isSave"
                v-if="movie.saved"
              >
                <img
                  class="heart_icon"
                  :src="require('@/assets/images/save.svg')"
                />
              </button>
              <button
                @click="setLike(movie)"
                class="heart_isNotLike"
                v-if="!movie.liked"
              >
                <img
                  class="heart_icon"
                  :src="require('@/assets/images/heart.svg')"
                />
              </button>
              <button
                @click="unLike(movie)"
                class="heart_isLike"
                v-if="movie.liked"
              >
                <img
                  class="heart_icon"
                  :src="require('@/assets/images/heart.svg')"
                />
              </button>
              <button
                @click="setSeen(movie)"
                class="heart_isNotSeen"
                v-if="!movie.seen"
              >
                <img
                  class="heart_icon"
                  :src="require('@/assets/images/tick.svg')"
                />
              </button>
              <button
                @click="unSeen(movie)"
                class="heart_isSeen"
                v-if="movie.seen"
              >
                <img
                  class="heart_icon"
                  :src="require('@/assets/images/tick.svg')"
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
      indexLikedTitle: 0,
      indexLikedScore: 0,
      indexSavedTitle: 0,
      indexSavedScore: 0,
      indexSeenTitle: 0,
      indexSeenScore: 0,
      titlesLiked: [] as any[],
      scoresLiked: [] as any[],
      titlesSeen: [] as any[],
      scoresSeen: [] as any[],
      titlesSaved: [] as any[],
      scoresSaved: [] as any[],
    };
  },
  methods: {
    setLike: function (movie: any) {
      movie.liked = true;
      this.setSession(movie);
    },
    unLike: function (movie: any) {
      movie.liked = false;
      this.removeSession(movie);
    },
    setSeen: function (movie: any) {
      movie.seen = true;
      this.setSeenSession(movie);
    },
    unSeen: function (movie: any) {
      movie.seen = false;
      this.removeSeenSession(movie);
    },
    setSaved: function (movie: any) {
      movie.saved = true;
      this.setSavedSession(movie);
    },
    unSaved: function (movie: any) {
      movie.saved = false;
      this.removeSavedSession(movie);
    },
    setSession: function (value: any) {
      this.scoresLiked[this.indexLikedScore] = value.averageRating;
      this.titlesLiked[this.indexLikedTitle] = value.primaryTitle;
      this.indexLikedTitle++;
      this.indexLikedScore++;
      if (localStorage.getItem("titleFilm") != null) {
        let titleFilm = localStorage.getItem("titleFilm");
        if (titleFilm !== null && this.indexLikedTitle == 1) {
          let f = titleFilm.substring(1, titleFilm.length - 1).split(",");
          for (let j = 0; j < f.length; j++) {
            this.titlesLiked[this.indexLikedTitle++] = f[j].substring(
              1,
              f[j].length - 1
            );
          }
        }
        localStorage.titleFilm = JSON.stringify(this.titlesLiked);
      } else {
        localStorage.titleFilm = JSON.stringify(this.titlesLiked);
      }
      if (localStorage.getItem("scoreFilm") != null) {
        let scoreFilm = localStorage.getItem("scoreFilm");
        if (scoreFilm != null && this.indexLikedScore == 1) {
          let f = scoreFilm.substring(1, scoreFilm.length - 1).split(",");
          for (let j = 0; j < f.length; j++) {
            this.scoresLiked[this.indexLikedScore++] = f[j];
          }
        }
        for (let j = 0; j < this.scoresLiked.length; j++) {
          if (typeof this.scoresLiked[j] === "string") {
            this.scoresLiked[j] = parseInt(this.scoresLiked[j]);
          }
        }
        localStorage.scoreFilm = JSON.stringify(this.scoresLiked);
      } else {
        localStorage.scoreFilm = JSON.stringify(this.scoresLiked);
      }
    },
    setSavedSession: function (value: any) {
      this.scoresSaved[this.indexSavedScore] = value.averageRating;
      this.titlesSaved[this.indexSavedTitle] = value.primaryTitle;
      this.indexSavedTitle++;
      this.indexSavedScore++;
      if (localStorage.getItem("titleSavedFilm") != null) {
        let titleFilm = localStorage.getItem("titleSavedFilm");
        if (titleFilm !== null && this.indexSavedTitle == 1) {
          let f = titleFilm.substring(1, titleFilm.length - 1).split(",");
          for (let j = 0; j < f.length; j++) {
            this.titlesSaved[this.indexSavedTitle++] = f[j].substring(
              1,
              f[j].length - 1
            );
          }
        }
        localStorage.titleSavedFilm = JSON.stringify(this.titlesSaved);
      } else {
        localStorage.titleSavedFilm = JSON.stringify(this.titlesSaved);
      }
      if (localStorage.getItem("scoreSavedFilm") != null) {
        let scoreFilm = localStorage.getItem("scoreSavedFilm");
        if (scoreFilm != null && this.indexSavedScore == 1) {
          let f = scoreFilm.substring(1, scoreFilm.length - 1).split(",");
          for (let j = 0; j < f.length; j++) {
            this.scoresSaved[this.indexSavedScore++] = f[j];
          }
        }
        for (let j = 0; j < this.scoresSaved.length; j++) {
          if (typeof this.scoresSaved[j] === "string") {
            this.scoresSaved[j] = parseInt(this.scoresSaved[j]);
          }
        }
        localStorage.scoreSavedFilm = JSON.stringify(this.scoresSaved);
      } else {
        localStorage.scoreSavedFilm = JSON.stringify(this.scoresSaved);
      }
    },
    setSeenSession: function (value: any) {
      this.scoresSeen[this.indexSeenScore] = value.averageRating;
      this.titlesSeen[this.indexSeenTitle] = value.primaryTitle;
      this.indexSeenTitle++;
      this.indexSeenScore++;
      if (localStorage.getItem("titleSeenFilm") != null) {
        let titleFilm = localStorage.getItem("titleSeenFilm");
        if (titleFilm !== null && this.indexSeenTitle == 1) {
          let f = titleFilm.substring(1, titleFilm.length - 1).split(",");
          for (let j = 0; j < f.length; j++) {
            this.titlesSeen[this.indexSeenTitle++] = f[j].substring(
              1,
              f[j].length - 1
            );
          }
        }
        localStorage.titleSeenFilm = JSON.stringify(this.titlesSeen);
      } else {
        localStorage.titleSeenFilm = JSON.stringify(this.titlesSeen);
      }
      if (localStorage.getItem("scoreSeenFilm") != null) {
        let scoreFilm = localStorage.getItem("scoreSeenFilm");
        if (scoreFilm != null && this.indexSeenScore == 1) {
          let f = scoreFilm.substring(1, scoreFilm.length - 1).split(",");
          for (let j = 0; j < f.length; j++) {
            this.scoresSeen[this.indexSeenScore++] = f[j];
          }
        }
        for (let j = 0; j < this.scoresSeen.length; j++) {
          if (typeof this.scoresSeen[j] === "string") {
            this.scoresSeen[j] = parseInt(this.scoresSeen[j]);
          }
        }
        localStorage.scoreSeenFilm = JSON.stringify(this.scoresSeen);
      } else {
        localStorage.scoreSeenFilm = JSON.stringify(this.scoresSeen);
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
          console.log(this.titlesLiked);
          for (let i = 0; i < this.titlesLiked.length; i++) {
            console.log(i);
            this.titlesLiked.pop();
            this.scoresLiked.pop();
          }
          console.log(this.titlesLiked);
          for (let j = 0; j < film.length; j++) {
            if (
              film[j].substring(1, film[j].length - 1) !== "" &&
              film[j].substring(1, film[j].length - 1).length !== 0
            ) {
              this.titlesLiked[j] = film[j].substring(1, film[j].length - 1);
              this.scoresLiked[j] = score[j];
            }
          }
          for (let j = 0; j < this.scoresLiked.length; j++) {
            if (typeof this.scoresLiked[j] === "string") {
              this.scoresLiked[j] = parseInt(this.scoresLiked[j]);
            }
          }
          console.log("titulos despues borrar" + this.titlesLiked);
          localStorage.titleFilm = JSON.stringify(this.titlesLiked);
          localStorage.scoreFilm = JSON.stringify(this.scoresLiked);
          console.log("Despues borrar" + localStorage.getItem("titleFilm"));
        } else localStorage.clear();
      }
    },
    removeSavedSession: function (value: any) {
      const films = localStorage.getItem("titleSavedFilm");
      const scores = localStorage.getItem("scoreSavedFilm");

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
          for (let i = 0; i < this.titlesSaved.length; i++) {
            this.titlesSaved.pop();
            this.scoresSaved.pop();
          }
          for (let j = 0; j < film.length; j++) {
            if (
              film[j].substring(1, film[j].length - 1) !== "" &&
              film[j].substring(1, film[j].length - 1).length !== 0
            ) {
              this.titlesSaved[j] = film[j].substring(1, film[j].length - 1);
              this.scoresSaved[j] = score[j];
            }
          }
          for (let j = 0; j < this.scoresSaved.length; j++) {
            if (typeof this.scoresSaved[j] === "string") {
              this.scoresSaved[j] = parseInt(this.scoresSaved[j]);
            }
          }
          localStorage.titleSavedFilm = JSON.stringify(this.titlesSaved);
          localStorage.scoreSavedFilm = JSON.stringify(this.scoresSaved);
        } else localStorage.clear();
      }
    },
    removeSeenSession: function (value: any) {
      const films = localStorage.getItem("titleSeenFilm");
      const scores = localStorage.getItem("scoreSeenFilm");

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
          for (let i = 0; i < this.titlesSeen.length; i++) {
            this.titlesSeen.pop();
            this.scoresSeen.pop();
          }
          for (let j = 0; j < film.length; j++) {
            if (
              film[j].substring(1, film[j].length - 1) !== "" &&
              film[j].substring(1, film[j].length - 1).length !== 0
            ) {
              this.titlesSeen[j] = film[j].substring(1, film[j].length - 1);
              this.scoresSeen[j] = score[j];
            }
          }
          for (let j = 0; j < this.scoresSeen.length; j++) {
            if (typeof this.scoresSeen[j] === "string") {
              this.scoresSeen[j] = parseInt(this.scoresSeen[j]);
            }
          }
          localStorage.titleSeenFilm = JSON.stringify(this.titlesSeen);
          localStorage.scoreSeenFilm = JSON.stringify(this.scoresSeen);
        } else {
          localStorage.removeItem("titleSeenFilm");
          localStorage.removeItem("scoreSeenFilm");
        }
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
  gap: 1rem;
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
  border: red solid 3px;
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
.heart_isSave {
  display: flex;
  align-content: center;
  padding: 0.5rem;
  border: #faa544 solid 3px;
  background: white;
  border-radius: 30px;
  &:hover {
    border: black solid;
    &:before {
      content: "Unsave";
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
.heart_isNotSave {
  display: flex;
  align-content: center;
  background: white;
  color: black;
  padding: 0.5rem;
  border-radius: 30px;
  &:hover {
    border: #faa544 solid;
    &:before {
      content: "Save";
      margin-right: 0.5rem;
    }
  }
}
.heart_isNotSeen {
  display: flex;
  align-content: center;
  background: white;
  color: black;
  padding: 0.5rem;
  border-radius: 30px;
  &:hover {
    border: rgba(40, 200, 26, 0.84) solid;
    &:before {
      content: "Seen";
      margin-right: 0.5rem;
    }
  }
}
.heart_isSeen {
  display: flex;
  align-content: center;
  padding: 0.5rem;
  border: rgba(40, 200, 26, 0.84) solid 3px;
  background: white;
  border-radius: 30px;
  &:hover {
    border: black solid;
    &:before {
      content: "Unseen";
      margin-right: 0.5rem;
    }
  }
}
.heart_icon {
  height: 1rem;
  width: 1rem;
}
</style>
