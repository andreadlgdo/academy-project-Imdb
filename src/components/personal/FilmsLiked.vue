<template>
  <Header @view-all="goViewAllMovies(true, '')" />
  <div v-if="!getSeeAllMovies">
    <section class="section_likes">
      <div class="section_title">
        <h2 class="table_title">Movies you like</h2>
      </div>
      <section class="section_table">
        <table class="table_saved">
          <tr>
            <th>Film</th>
            <th>Score</th>
            <th>You like</th>
          </tr>
          <tr
            :v-if="getTitlesFilms.length !== 0"
            v-for="(film, index) in getTitlesFilms"
            :key="index"
          >
            <td>{{ film.title }}</td>
            <td>{{ film.score }}</td>
            <td>❤️</td>
          </tr>
        </table>
      </section>
    </section>
    <section class="section_button">
      <button @click="removeLikes()" class="button_remove-likes">
        Remove likes
      </button>
    </section>
  </div>
  <ViewMovies v-if="getSeeAllMovies" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import createStore from "@/store";
import ViewMovies from "@/components/ViewMovies.vue";
export default defineComponent({
  name: "FilmsLiked",
  components: { Header, ViewMovies },
  computed: {
    getSeeAllMovies() {
      return createStore.state.isGoToSeeAllMoviesByGenre;
    },
    getLikes() {
      return createStore.state.goLikes;
    },
    getTitlesFilms() {
      let f = [] as any;
      let filmsString = localStorage.getItem("titleFilm");
      let scoreString = localStorage.getItem("scoreFilm");
      if (filmsString != null && scoreString != null) {
        console.log(filmsString);
        let filmsStore = filmsString
          .substring(1, filmsString.length - 1)
          .split(",");
        let scoreStore = scoreString
          .substring(1, scoreString.length - 1)
          .split(",");
        let j = 0;
        for (let i = 0; i < filmsStore.length; i++) {
          console.log(typeof scoreStore[i]);
          if (scoreStore[i] === "null") {
            console.log(scoreStore[i]);
          } else {
            let elem = {
              title: filmsStore[j].substring(1, filmsStore[j].length - 1),
              score: scoreStore[j],
            };
            f[j] = elem;
            j++;
          }
        }
      }
      console.log(f);
      return f;
    },
    getOpenHeader() {
      return createStore.state.openHeader;
    },
  },
  methods: {
    removeLikes: function () {
      localStorage.clear();
      location.reload();
    },
    goViewAllMovies: function (value: boolean, genre: string) {
      createStore.dispatch("setMovieByGenre", value);
      if (this.getOpenHeader)
        createStore.dispatch("setOpenHeader", !this.getOpenHeader);
      if (genre === "") createStore.dispatch("setAllFilms");
      else createStore.dispatch("setMovieFilter", genre);
    },
  },
});
</script>

<style lang="scss" scoped>
.section_saved {
  display: flex;
  flex-direction: column;
}
.section_table {
  display: flex;
  justify-content: center;
  align-items: center;
}
.table_saved {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 90%;
}
.table_saved td {
  border: 1px solid black;
  padding: 1rem;
}
.table_saved th {
  border-bottom: 5px solid black;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  font-size: 2rem;
  font-variant: all-small-caps;
}
.button_remove-likes {
  border-radius: 30px;
  border: none;
  border: red solid;
  background: white;
  color: red;
  height: 3rem;
  width: 10rem;
  font-size: 1rem;
  &:hover {
    background: rgba(255, 0, 11, 0.55);
    color: black;
  }
}
.section_title {
  display: flex;
  justify-content: left;
  align-items: center;
}
.table_title {
  font-family: Copperplate;
  font-size: 3rem;
  padding-left: 4rem;
  padding-bottom: 1rem;
  padding-top: 1rem;
}
.section_button {
  display: flex;
  justify-content: right;
  align-items: center;
  margin: 5rem;
  padding-bottom: 3rem;
}
</style>
