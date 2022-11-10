<template>
  <main class="main_resultRandom">
    <h2 class="main_randomTitle">Your personal results</h2>
    <ChangeView />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ChangeView from "@/components/ChangeView.vue";

export default defineComponent({
  name: "ResultRandomSearch",
  components: { ChangeView },
});
</script>

<style scoped>
.main_resultRandom {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 1rem;
}
.main_randomTitle {
  display: flex;
  justify-content: left;
  align-items: center;
  padding-left: 2rem;
  font-family: Arial;
  font-weight: lighter;
  font-variant: all-small-caps;
}
</style>
