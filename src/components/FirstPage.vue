<template>
  <Header />
  <main class="main">
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
    <section class="main_genders">
      <h2 class="section_name">Genders</h2>
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

export default defineComponent({
  name: "FirstPage",
  components: {
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
      let element = document.querySelector(".main");
      if (element !== null) element.remove();
    },
  },
});
</script>

<style scoped>
.main {
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
