<template>
  <nav class="section_toolbar">
    <section></section>
    <section class="section_right">
      <button @click="randomSearch()" class="button_random">
        <img
          class="random_icon"
          :src="require('@/assets/images/random/random.svg')"
        />
      </button>
      <PersonalView />
    </section>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import createStore from "@/store";
import PersonalView from "@/components/personal/PersonalView.vue";

export default defineComponent({
  name: "InfoBar",
  components: { PersonalView },
  methods: {
    randomSearch: function () {
      createStore.dispatch("setTypeOfSearch", "random");
    },
  },
});
</script>

<style lang="scss" scoped>
.section_toolbar {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: lightgrey solid;
}
.section_right {
  display: flex;
  justify-content: right;
  align-items: center;
}
.button_random {
  height: 3rem;
  width: 3rem;
  border: black solid;
  border-radius: 30px;
  margin-right: 1rem;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    width: 12rem;
    border: #f2ad9f solid;
    &:after {
      content: "Random Search";
      margin-left: 1rem;
      font-size: 1rem;
    }
  }
}
.random_icon {
  height: 1.8rem;
  width: 1.8rem;
}
</style>
