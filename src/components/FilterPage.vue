<template>
  <div class="main">
    <Toolbar />
    <div style="display: flex">
      <div style="display: flex; flex-direction: column">
        <h1
          @click="isExpanded = !isExpanded"
          :class="{ 'facet--expanded': isExpanded }"
        >
          Sort
        </h1>
        <ul v-if="isExpanded">
          <li>Price</li>
          <li>Price</li>
          <li>Price</li>
        </ul>
      </div>
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
  data() {
    return {
      isExpanded: false,
    };
  },
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
.facet--expanded {
  background-color: red;
}
</style>
