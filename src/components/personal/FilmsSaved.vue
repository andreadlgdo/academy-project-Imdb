<template>
  <Header @view-all="goViewAllMovies(true, '')" />
  <div v-if="!getSeeAllMovies">
    <InfoBar />
    <section class="section_saved">
      <div class="section_title">
        <h2 class="table_title">Saved movies</h2>
      </div>
      <section class="section_table">
        <table class="table_saved">
          <tr>
            <th>Film</th>
            <th>Score</th>
            <th>Save</th>
          </tr>
          <tr
            :v-if="getTitlesFilms.length !== 0"
            v-for="(film, index) in getTitlesFilms"
            :key="index"
          >
            <td>{{ film.title }}</td>
            <td>{{ film.score }}</td>
            <td>
              <img
                :src="require('@/assets/images/saveColor.png')"
                style="height: 1.5rem; width: 1.5rem; background: white"
              />
            </td>
          </tr>
        </table>
      </section>
    </section>
    <section class="section_button">
      <button @click="removeLikes()" class="button_remove-likes">
        Remove all saved films
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
import InfoBar from "@/components/InfoBar.vue";
export default defineComponent({
  name: "FilmsLiked",
  components: { InfoBar, Header, ViewMovies },
  computed: {
    getSeeAllMovies() {
      return createStore.state.isGoToSeeAllMoviesByGenre;
    },
    getTitlesFilms() {
      let f = [] as any;
      let filmsString = localStorage.getItem("titleSavedFilm");
      let scoreString = localStorage.getItem("scoreSavedFilm");
      if (filmsString != null && scoreString != null) {
        let filmsStore = filmsString
          .substring(1, filmsString.length - 1)
          .split(",");
        let scoreStore = scoreString
          .substring(1, scoreString.length - 1)
          .split(",");
        let j = 0;
        for (let i = 0; i < filmsStore.length; i++) {
          console.log(scoreStore[i] === "null");
          if (scoreStore[i] === "null") {
            console.log(scoreStore[i]);
          } else {
            let elem = {
              title: filmsStore[i].substring(1, filmsStore[i].length - 1),
              score: scoreStore[i],
            };
            let igual = false;
            for (let k = 0; k < f.length; k++) {
              if (f[k].title === elem.title) {
                igual = true;
              }
            }
            if (!igual) {
              f[j] = elem;
              j++;
            }
          }
        }
      }
      return f;
    },
    getOpenHeader() {
      return createStore.state.openHeader;
    },
  },
  methods: {
    removeLikes: function () {
      localStorage.removeItem("titleSavedFilm");
      localStorage.removeItem("scoreSavedFilm");
      location.reload();
    },
    goViewAllMovies: function (value: boolean, genre: string) {
      createStore.dispatch("setMovieByGenre", value);
      if (this.getOpenHeader)
        createStore.dispatch("setOpenHeader", !this.getOpenHeader);
      createStore.dispatch("setSaved", false);
      createStore.dispatch("setTypeOfSearch", "normal");
      createStore.dispatch("setAllFilms");
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
  border: red solid;
  background: white;
  color: red;
  height: 3rem;
  width: 15rem;
  font-size: 1rem;
  &:hover {
    background: red;
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
