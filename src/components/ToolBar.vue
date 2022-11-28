<template>
  <section class="section_toolbar">
    <section class="section_filters-sort">
      <button @click="goMainPage()" class="button_home">
        <img class="home_icon" :src="require('@/assets/images/home.png')" />
      </button>
      <button class="button_open-filters" @click="goFilters(true)">
        <img
          class="button_filters-img"
          :src="require('@/assets/images/filtrar.png')"
          alt="filter"
        />
        <p class="button_filters-name">Filters & sort</p>
      </button>
    </section>
    <div class="right_toolBar">
      <ChangeView />
      <PersonalView />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ChangeView from "@/components/ChangeView.vue";
import createStore from "@/store";
import PersonalView from "@/components/personal/PersonalView.vue";

export default defineComponent({
  name: "ToolBar",
  components: { PersonalView, ChangeView },
  computed: {
    getOpenHeader() {
      return createStore.state.openHeader;
    },
  },
  methods: {
    goFilters: function (value: boolean) {
      createStore.dispatch("change", value);
    },
    goMainPage: function () {
      if (this.getOpenHeader) createStore.dispatch("setOpenHeader", false);
      createStore.dispatch("setMovieByGenre", false);
      createStore.dispatch("setLikes", false);
      createStore.dispatch("setSaved", false);
      createStore.dispatch("setSeen", false);
      createStore.dispatch("setTypeOfSearch", "normal");
    },
  },
});
</script>

<style lang="scss" scoped>
.section_toolbar {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: lightgrey solid;
}
.section_filters-sort {
  display: flex;
  justify-content: left;
  align-items: center;
  padding-left: 2rem;
}
.button_open-filters {
  display: flex;
  justify-content: left;
  align-items: center;
  border: none;
  background: white;
  padding-right: 1rem;
  &:hover {
    background: gainsboro;
  }
}
.button_filters-name {
  padding-left: 1rem;
  font-size: 1rem;
  font-family: sans-serif;
}
.button_filters-img {
  height: 2.5rem;
  width: 2.5rem;
}
.right_toolBar {
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 1.5rem;
}
.button_home {
  height: 3rem;
  width: 3rem;
  border: black solid;
  border-radius: 30px;
  margin-right: 1rem;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    width: 12rem;
    border: cadetblue solid 3px;
    &:after {
      content: "Home";
      margin-left: 1rem;
      font-size: 1rem;
    }
  }
}
.home_icon {
  height: 1.8rem;
  width: 1.8rem;
}
</style>
