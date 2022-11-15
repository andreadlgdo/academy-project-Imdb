<template>
  <div class="main">
    <Toolbar />
    <div style="display: flex">
      <p>Results 1</p>
      <p>Results 1</p>
      <p>Results 1</p>
      <p>Results 1</p>
      <p>Results 1</p>
      <p>Results 1</p>
    </div>
    <Facets v-if="isOpen" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Toolbar from "@/components/toolbar.vue";
import Facets from "@/components/facets.vue";

export default defineComponent({
  name: "FirstPage",
  components: { Toolbar, Facets },
  computed: {
    isOpen() {
      return this.$store.state.isOpen;
    },
  },
});
</script>

<style scoped lang="scss">
.main {
  position: relative;
}
</style>
