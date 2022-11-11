<template>
  <div class="header">
    <h1 class="header_title">The world of movies</h1>
    <div class="header_search">
      <input type="text" class="header_searcher" />
      <button class="header_search-button">
        <img
          :src="require('@/assets/images/search.png')"
          class="header_search-icon"
          alt="searcher"
        />
      </button>
    </div>
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

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
});
</script>

<style scoped>
.header {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  flex-wrap: wrap;
  margin: 0rem;
  border-bottom: solid black;
  padding: 1rem;
  border-width: 0.3rem;
}
.header_title {
  display: flex;
  justify-content: left;
  align-items: center;
  padding-left: 2rem;
  font-family: fantasy;
  font-weight: 700;
  font-size: 2.5rem;
  font-variant: all-small-caps;
}
.header_logo {
  display: flex;
  justify-content: center;
  align-items: center;
}
.header_logo-img {
  height: 10rem;
  width: 12rem;
  border-radius: 50%;
}
.header_search {
  display: flex;
  justify-content: center;
  align-items: center;
}
.header_searcher {
  height: 2.5rem;
  width: 28rem;
  border-radius: 30px;
  padding-left: 1.5rem;
}
.header_search-button {
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  height: 4rem;
  width: 5rem;
  margin-left: 1rem;
  border: none;
  border-radius: 50%;
}
.header_search-button:hover {
  background: aliceblue;
}
.header_search-icon {
  height: 2.5rem;
  width: 2.5rem;
}
</style>
