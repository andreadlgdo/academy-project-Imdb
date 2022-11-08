<template>
  <MainModal v-if="!getStateFilters">
    <OptionsFilms />
  </MainModal>
  <MainModal v-if="getStateFilters">
    <OptionsFilmsOpen />
  </MainModal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import OptionsFilms from "@/components/OptionsFilmsClose.vue";
import OptionsFilmsOpen from "@/components/OptionsFilmsOpen.vue";
import createStore from "@/store";

export default defineComponent({
  name: "FirstPage",
  components: { OptionsFilms, OptionsFilmsOpen },
  computed: {
    getStateFilters() {
      console.log(createStore.state.isOpen);
      return createStore.state.isOpen;
    },
  },
});
</script>

<style scoped></style>
