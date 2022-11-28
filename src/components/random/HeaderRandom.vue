<template>
  <div class="header">
    <section class="section_title">
      <button @click="setFirstPage(false)" class="header_title">
        The world of movies
      </button>
    </section>
    <div class="header_logo">
      <img
        :src="require('@/assets/images/logo.png')"
        class="header_logo-img"
        alt="logo"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import createStore from "@/store";

export default defineComponent({
  name: "HeaderRandom",
  computed: {
    getOpenHeader() {
      return createStore.state.openHeader;
    },
  },
  methods: {
    setFirstPage: function (value: boolean) {
      if (this.getOpenHeader) createStore.dispatch("setOpenHeader", false);
      createStore.dispatch("setMovieByGenre", false);
      createStore.dispatch("setFirstPage", value);
      createStore.dispatch("setLikes", false);
      createStore.dispatch("setSaved", false);
      createStore.dispatch("setTypeOfSearch", "");
    },
  },
});
</script>

<style lang="scss" scoped>
.header {
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-wrap: wrap;
  margin: 0rem;
  border-bottom: solid lightgrey;
  padding: 1rem;
  border-width: 0.3rem;
}
.section_title {
  display: flex;
  justify-content: left;
  align-items: center;
  margin-left: 3rem;
}
.header_title {
  padding: 1rem;
  border: black solid;
  background: transparent;
  font-family: Copperplate;
  font-weight: lighter;
  font-size: 2.5rem;
  font-variant: all-small-caps;
  &:hover {
    border: #faa544 solid;
  }
}
.header_logo {
  display: flex;
  justify-content: right;
  padding-right: 7rem;
  align-items: center;
  &-img {
    height: 8rem;
    width: 10rem;
    border-radius: 50%;
  }
}
</style>
