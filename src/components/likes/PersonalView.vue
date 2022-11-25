<template>
  <section>
    <button @click="goLikes(true)" class="button_personal">
      <img class="img_personal" :src="require('@/assets/images/heart.svg')" />
    </button>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import createStore from "@/store";

export default defineComponent({
  name: "PersonalView",
  computed: {
    getOpenHeader() {
      return createStore.state.openHeader;
    },
  },
  methods: {
    goLikes: function (value: boolean) {
      createStore.dispatch("setMovieByGenre", false);
      createStore.dispatch("setTypeOfSearch", "");
      if (this.getOpenHeader)
        createStore.dispatch("setOpenHeader", !this.getOpenHeader);
      createStore.dispatch("setLikes", value);
    },
  },
});
</script>

<style lang="scss" scoped>
.button_personal {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 3rem;
  height: 3rem;
  width: 3rem;
  background: transparent;
  border: black solid;
  border-radius: 30px;
  &:hover {
    border: red solid;
    width: 10rem;
    &:after {
      content: "Likes";
      font-size: 1rem;
      margin-left: 1rem;
    }
  }
}
.img_personal {
  height: 1.5rem;
  width: 1.5rem;
  background: transparent;
}
</style>
