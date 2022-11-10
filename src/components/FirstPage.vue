<template>
  <Header />
  <main class="main_first-random">
    <section class="main_news">
      <div class="section_title">
        <h2 class="section_name">News</h2>
        <a class="section_view-all" @click="goOtherPage(true)"
          >View all
          <img
            class="section_arrow"
            src="../assets/images/arrow.png"
            alt="arrow"
        /></a>
      </div>
    </section>
    <section class="main_categories">
      <h2 class="section_name">Categories</h2>
      <CategoriesOptions />
    </section>
  </main>
  <MainModal v-if="isGoToOtherPage">
    <FilterPage />
  </MainModal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./Header.vue";
import FilterPage from "./FilterPage.vue";
import CategoriesOptions from "@/components/CategoriesOptions.vue";

export default defineComponent({
  name: "FirstPage",
  components: {
    CategoriesOptions,
    Header,
    FilterPage,
  },
  data: function () {
    return {
      isGoToOtherPage: false,
    };
  },
  methods: {
    goOtherPage: function (value: boolean) {
      this.isGoToOtherPage = value;
      let element = document.querySelector(".main_first-random");
      if (element !== null) element.remove();
    },
  },
});
</script>

<style scoped>
.main_first-random {
  margin-left: 3rem;
  margin-right: 3rem;
  margin-top: 1rem;
}
.section_title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.section_name {
  display: flex;
  justify-content: left;
  padding-left: 4rem;
  font-family: serif;
  font-size: 3rem;
}
.section_view-all {
  display: flex;
  align-items: center;
  margin-right: 5rem;
  color: black;
}
.section_view-all:hover {
  color: cadetblue;
}
.section_arrow {
  margin-left: 1rem;
}
</style>
