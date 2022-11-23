<template>
  <Header />
  <section class="section_table">
    <h2>Movies you like</h2>
    <table class="table_likes">
      <tr>
        <th>Film</th>
        <th>Score</th>
      </tr>
      <tr v-for="(film, index) in getTitlesFilms" :key="index">
        <td>{{ film }}</td>
        <td>{{ film }}</td>
      </tr>
    </table>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";

console.log(localStorage.getItem("scoreFilm"));
console.log(localStorage.getItem("titleFilm"));
export default defineComponent({
  name: "FilmsLiked",
  components: { Header },
  computed: {
    getTitlesFilms() {
      let titles = [] as any[];
      let filmsString = localStorage.getItem("titleFilm");
      if (filmsString != null) {
        let filmsStore = filmsString
          .substring(1, filmsString.length - 1)
          .split(",");
        console.log(filmsStore);
        for (let i = 0; i < filmsStore.length; i++) {
          titles[i] = filmsStore[i].substring(1, filmsStore[i].length - 1);
        }
      }
      let scores = [] as any;
      let scoreString = localStorage.getItem("scoreFilm");
      if (scoreString != null) {
        let scoreStore = scoreString
          .substring(1, scoreString.length - 1)
          .split(",");
        for (let i = 0; i < scoreStore.length; i++) {
          scores[i] = scoreStore[i];
        }
      }
      let films = [
        {
          score: scores[0],
          title: titles[0],
        },
        {
          score: scores[1],
          title: titles[1],
        },
        {
          score: scores[2],
          title: titles[2],
        },
      ] as any;
      console.log(films[0].score);
      return titles;
    },
  },
});
</script>

<style lang="scss" scoped>
.section_table {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.table_likes {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 90%;
}
.table_likes td,
.table_likes th {
  border: 1px solid black;
  padding: 8px;
}
.table_likes th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background: #efc592;
}
</style>
