<template>
  <section class="personal_info">
    <button v-if="!getOpenSaved" @click="goSaved(true)" class="button_save">
      <img class="img_personal" :src="require('@/assets/images/save.svg')" />
    </button>
    <button v-if="!getOpenLiked" @click="goLikes(true)" class="button_personal">
      <img class="img_personal" :src="require('@/assets/images/heart.svg')" />
    </button>
    <button v-if="!getOpenSeen" @click="goSeen(true)" class="button_seen">
      <img class="img_personal" :src="require('@/assets/images/tick.svg')" />
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
    getOpenLiked() {
      return createStore.state.goLikes;
    },
    getOpenSeen() {
      return createStore.state.goSeen;
    },
    getOpenSaved() {
      return createStore.state.goSaved;
    },
  },
  methods: {
    goLikes: function (value: boolean) {
      createStore.dispatch("setMovieByGenre", false);
      createStore.dispatch("setTypeOfSearch", "");
      if (this.getOpenHeader)
        createStore.dispatch("setOpenHeader", !this.getOpenHeader);
      createStore.dispatch("setLikes", value);
      createStore.dispatch("setSaved", false);
      createStore.dispatch("setSeen", false);
    },
    goSaved: function (value: boolean) {
      createStore.dispatch("setMovieByGenre", false);
      createStore.dispatch("setTypeOfSearch", "");
      if (this.getOpenHeader)
        createStore.dispatch("setOpenHeader", !this.getOpenHeader);
      createStore.dispatch("setLikes", false);
      createStore.dispatch("setSeen", false);
      createStore.dispatch("setSaved", value);
    },
    goSeen: function (value: boolean) {
      createStore.dispatch("setMovieByGenre", false);
      createStore.dispatch("setTypeOfSearch", "");
      if (this.getOpenHeader)
        createStore.dispatch("setOpenHeader", !this.getOpenHeader);
      createStore.dispatch("setLikes", false);
      createStore.dispatch("setSaved", false);
      createStore.dispatch("setSeen", value);
    },
  },
});
</script>

<style lang="scss" scoped>
.button_personal {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  width: 3rem;
  background: transparent;
  border: black solid;
  margin-right: 1rem;
  border-radius: 30px;
  &:hover {
    border: red solid 3px;
    width: 10rem;
    &:after {
      content: "Likes";
      font-size: 1rem;
      margin-left: 1rem;
    }
  }
}
.button_save {
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
    width: 10rem;
    border: #faa544 solid 3px;
    &:after {
      content: "Save";
      margin-left: 1rem;
      font-size: 1rem;
    }
  }
}
.button_seen {
  height: 3rem;
  width: 3rem;
  border: black solid;
  border-radius: 30px;
  margin-right: 1rem;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 3rem;
  &:hover {
    width: 10rem;
    border: rgba(40, 200, 26, 0.84) solid 3px;
    &:after {
      content: "Seen";
      margin-left: 1rem;
      font-size: 1rem;
    }
  }
}
.personal_info {
  display: flex;
  justify-content: center;
  align-items: center;
}
.img_personal {
  height: 1.5rem;
  width: 1.5rem;
  background: transparent;
}
</style>
