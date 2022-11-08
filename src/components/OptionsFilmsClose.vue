<template>
  <section class="section">
    <section class="section_filters-sort">
      <button class="section_button" @click="goFilters(true)">
        <img
          class="button_filters-img"
          src="../assets/images/filtrar.png"
          alt="filter"
        />
        <p class="button_filters-name">Filters & sort</p>
      </button>
    </section>
    <ChangeView />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ChangeView from "@/components/ChangeView.vue";
import createStore from "@/store";

export default defineComponent({
  name: "OptionsFilmsClose",
  components: { ChangeView },
  data: function () {
    return {
      isOpenFilters: false,
    };
  },
  methods: {
    goFilters: function (value: boolean) {
      createStore.dispatch("change", value);
      let element = document.querySelector(".section");
      if (element !== null) element.remove();
    },
  },
});
</script>

<style scoped>
.section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 1rem;
}
.section_filters-sort {
  display: flex;
  justify-content: left;
  align-items: center;
  padding-left: 2rem;
}
.section_button {
  display: flex;
  justify-content: left;
  align-items: center;
  border: none;
  background: white;
  padding-right: 1rem;
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
.section_button:hover {
  background: gainsboro;
}
</style>
