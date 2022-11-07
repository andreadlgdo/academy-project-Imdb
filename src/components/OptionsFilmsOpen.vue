<template>
  <section class="sectionOpen">
    <aside class="sectionOpen_aside">
      <div class="aside_title">
        <h2 class="aside_sort-filters">SORT & FILTERS</h2>
        <button class="aside_button-close" @click="closeFilters(true)">
          <img
            class="aside_img-close"
            src="../assets/images/cross.png"
            alt="cross"
          />
        </button>
      </div>
      <div></div>
    </aside>
    <section class="sectionOpen_view">
      <ChangeView />
      <div>
        <h2>Movies</h2>
        <p>all movies</p>
      </div>
    </section>
  </section>
  <MainModal v-if="isOpenFilters">
    <OptionsFilmsClose />
  </MainModal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ChangeView from "./ChangeView.vue";
import OptionsFilmsClose from "@/components/OptionsFilmsClose.vue";

export default defineComponent({
  name: "OptionsFilmsOpen",
  components: { ChangeView },
  data: function () {
    return {
      isOpenFilters: false,
    };
  },
  methods: {
    closeFilters: function (value: boolean) {
      this.isOpenFilters = value;
      let element = document.querySelector(".sectionOpen");
      if (element !== null) element.remove();
    },
  },
});
</script>

<style scoped>
.sectionOpen {
  display: grid;
  grid-template-columns: 35% 65%;
}
.sectionOpen_view {
  display: flex;
  flex-direction: column;
}
.sectionOpen_aside {
  display: flex;
  flex-direction: column;
  border-right: solid lightgrey;
  padding-top: 2rem;
}
.aside_title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 2rem;
  border-bottom: solid lightgrey 10px;
}
.aside_img-close {
  height: 2rem;
  width: 2rem;
}
.aside_button-close {
  margin-right: 2rem;
  background: white;
  border: none;
}
.aside_button-close:hover {
  border-radius: 40px;
  background: lightblue;
}
.aside_sort-filters {
  margin-left: 3rem;
}
</style>
