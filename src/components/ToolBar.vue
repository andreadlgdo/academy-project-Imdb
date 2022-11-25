<template>
  <section class="section_toolbar">
    <section class="section_filters-sort">
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
import PersonalView from "@/components/likes/PersonalView.vue";

export default defineComponent({
  name: "ToolBar",
  components: { PersonalView, ChangeView },
  methods: {
    goFilters: function (value: boolean) {
      createStore.dispatch("change", value);
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
</style>
