<template>
  <div class="main">
    <ToolBar />
    <main class="main_view-movies">
      <section class="main_movies">
        <h1>Hola</h1>
      </section>
      <transition name="slide-fade">
        <AsideFilters v-if="getOpenFilters" />
      </transition>
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
.slide-fade-enter-active {
  animation: bounce-in 0.5s;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
