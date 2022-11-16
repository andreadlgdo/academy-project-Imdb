<template>
  <section class="section_change-layaout">
    <p class="section_view">VIEW</p>
    <button class="button_view">
      <img
        class="button_view-img"
        @click="changeView(false)"
        :src="require('@/assets/images/squares.png')"
        alt="squares"
      />
    </button>
    <button class="button_view">
      <img
        class="button_view-img"
        @click="changeView(true)"
        :src="require('@/assets/images/4-squares.png')"
        alt="4 squares"
      />
    </button>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import createStore from "@/store";

export default defineComponent({
  name: "ChangeView",
  methods: {
    changeView: function (value: boolean) {
      createStore.dispatch("setView", value);
      console.log(createStore.state.changeView);
    },
  },
});
</script>

<style scoped>
.section_change-layaout {
  display: flex;
  justify-content: right;
  align-items: center;
  margin-right: 4rem;
}
.button_view {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.5rem;
  width: 3.5rem;
  background: white;
  border: none;
}
.button_view:hover {
  background: gainsboro;
}
.button_view-img {
  height: 2.5rem;
  width: 2.5rem;
}
.section_view {
  padding-right: 1rem;
}
</style>
