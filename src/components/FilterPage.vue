<template>
  <OptionsFilms />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import OptionsFilms from "@/components/OptionsFilmsClose.vue";

export default defineComponent({
  name: "FirstPage",
  components: { OptionsFilms },
});
</script>

<style scoped></style>
