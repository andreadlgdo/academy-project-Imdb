<template>
  <div class="main">
    <ToolBar />
    <main class="main_view-movies">
      <section class="main_movies">
        <h1>Hola</h1>
      </section>
      <AsideFilters v-if="getOpenFilters" />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ToolBar from "@/components/ToolBar.vue";
import AsideFilters from "@/components/AsideFilters.vue";
import createStore from "@/store";

export default defineComponent({
  name: "ViewMovies",
  components: { ToolBar, AsideFilters },
  computed: {
    getOpenFilters() {
      return createStore.state.isOpen;
    },
  },
});
</script>

<style lang="scss" scoped>
.main {
  position: relative;
  height: 100%;
}
.main_view-movies {
  display: flex;
  height: 100%;
}
.main_movies {
  display: flex;
  flex-direction: column;
}
</style>
