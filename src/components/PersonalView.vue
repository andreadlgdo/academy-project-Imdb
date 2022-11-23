<template>
  <section>
    <button @click="profileIsOpen = !profileIsOpen" class="button_personal">
      <img class="img_personal" :src="require('@/assets/images/profile.png')" />
    </button>
    <div class="aside_rigth" v-if="profileIsOpen">
      <button @click="goLikes(true)" class="like_films">Likes</button>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import createStore from "@/store";
import FilmsLiked from "@/components/FilmsLiked.vue";
export default defineComponent({
  name: "PersonalView",
  data: function () {
    return {
      profileIsOpen: false,
    };
  },
  computed: {},
  methods: {
    goLikes: function (value: boolean) {
      createStore.dispatch("setMovieByGenre", false);
      createStore.dispatch("setTypeOfSearch", "");
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
  background: white;
  border: none;
  position: relative;
  &:hover {
    border-radius: 30px;
    background: gainsboro;
  }
}
.img_personal {
  height: 3rem;
  width: 3rem;
}
.aside_rigth {
  position: absolute;
  top: 8%;
  display: flex;
  flex-direction: column;
}
.like_films {
  height: 2rem;
  width: 6rem;
  border: #efc592 solid;
  background: #f7dfc2;
  &:hover {
    background: #efc592;
  }
}
</style>
