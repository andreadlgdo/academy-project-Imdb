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
        <td>{{ film.title }}</td>
        <td>{{ film.score }}</td>
      </tr>
    </table>
  </section>
  <section class="section_button">
    <button @click="removeLikes()" class="button_remove-likes">
      Remove likes
    </button>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";

export default defineComponent({
  name: "FilmsLiked",
  components: { Header },
  computed: {
    getTitlesFilms() {
      let f = [] as any;
      let filmsString = localStorage.getItem("titleFilm");
      let scoreString = localStorage.getItem("scoreFilm");
      if (filmsString != null && scoreString != null) {
        let filmsStore = filmsString
          .substring(1, filmsString.length - 1)
          .split(",");
        let scoreStore = scoreString
          .substring(1, scoreString.length - 1)
          .split(",");
        for (let i = 0; i < filmsStore.length; i++) {
          let elem = {
            title: filmsStore[i].substring(1, filmsStore[i].length - 1),
            score: scoreStore[i],
          };
          f[i] = elem;
        }
      }
      console.log(f);
      return f;
    },
  },
  methods: {
    removeLikes: function () {
      localStorage.clear();
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
.section_button {
  margin: 5rem;
  display: flex;
  justify-content: right;
  align-items: center;
}
</style>
