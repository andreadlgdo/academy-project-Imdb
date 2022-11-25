<template>
  <transition name="init">
    <main class="main_app" v-if="!getOtherPage">
      <section class="app_section-title">
        <p class="main_title-company">IMDb</p>
        <h1 class="main_title-movies">
          The world <br />
          of movies
        </h1>
      </section>
      <section class="app_section-buttons">
        <div class="button_start-exploring">
          <button class="button-search" @click="setSearchType('normal')">
            Start exploring
          </button>
        </div>
        <div class="button_random-search">
          <button class="button-search" @click="setSearchType('random')">
            Random search
          </button>
        </div>
      </section>
    </main>
  </transition>
  <FirstPage v-if="getTypeOfSearch === 'normal'" />
  <FirstPageRandom v-if="getTypeOfSearch === 'random'" />
  <FilmsLiked v-if="getIsGoLikes" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FirstPage from "@/components/MainPage.vue";
import FirstPageRandom from "@/components/random/FirstPageRandom.vue";
import createStore from "@/store";
import FilmsLiked from "@/components/likes/FilmsLiked.vue";

export default defineComponent({
  name: "App",
  components: {
    FirstPage,
    FirstPageRandom,
    FilmsLiked,
  },
  computed: {
    getOtherPage() {
      return createStore.state.firstPage;
    },
    getTypeOfSearch() {
      console.log(createStore.state.typeOfSearch);
      return createStore.state.typeOfSearch;
    },
    getIsGoLikes() {
      console.log(createStore.state.goLikes);
      return createStore.state.goLikes;
    },
  },
  methods: {
    setSearchType: function (value: string) {
      createStore.dispatch("setTypeOfSearch", value);
      createStore.dispatch("setFirstPage", true);
      if (value === "normal") {
        createStore.dispatch("setFilmsNew");
      }
    },
  },
});
</script>

<style lang="scss">
html {
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  height: 100%;
  position: relative;
}
body {
  margin: 0rem;
  height: 100%;
}
.main_app {
  display: flex;
  flex-direction: column;
  background-image: url("@/assets/images/movies.png");
  background-size: cover;
  height: 100%;
}
.main_title-company {
  display: flex;
  justify-content: right;
  align-items: center;
  font-family: "Academy Engraved LET";
  font-size: 3rem;
  padding-right: 21rem;
  color: black;
  font-weight: bold;
}
.main_title-movies {
  display: flex;
  justify-content: right;
  align-items: center;
  font-family: "Al Tarikh";
  font-size: 10rem;
  padding-right: 6rem;
  font-variant: all-small-caps;
  color: black;
}
.app_section-buttons {
  display: flex;
  justify-content: right;
  align-items: center;
  padding-right: 8rem;
}
.button_start-exploring {
  display: flex;
  justify-content: right;
  padding-right: 2rem;
}
.button_random-search {
  display: flex;
  justify-content: left;
  padding-left: 2rem;
}
.button-search {
  height: 4rem;
  width: 15rem;
  border-radius: 30px;
  border-color: #efc592;
  background: #efc592;
  font-size: 1rem;
  &:hover {
    background: #faa544;
  }
}
.init-enter-active {
  transition: all 0.3s ease;
}
.init-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.init-enter, .init-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
