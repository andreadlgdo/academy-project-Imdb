<template>
  <div class="categories_slide-1">
    <button class="button_categories-5">
      <p class="button_categories-text">SCI-FI</p>
    </button>
    <button class="button_categories-6">
      <p class="button_categories-text">Drama</p>
    </button>
    <button class="button_categories-7">
      <p class="button_categories-text">Thriller</p>
    </button>
    <button class="button_categories-8">
      <p class="button_categories-text">Animation</p>
    </button>
  </div>
</template>

<script type="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SecondCategories"
});
</script>

<style scoped>
.categories_slide-1 {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.button_categories-5,
.button_categories-6,
.button_categories-7,
.button_categories-8 {
  border-radius: 30px;
  height: 18rem;
  width: 12rem;
  opacity: 0.6;
  border: none;
}
.button_categories-6:hover,
.button_categories-7:hover,
.button_categories-8:hover,
.button_categories-5:hover {
  opacity: 1;
}
.button_categories-5 {
  background-image: url("../../assets/images/categories/sci-fi.png");
  background-size: cover;
}
.button_categories-6 {
  background-image: url("../../assets/images/categories/drama.png");
  background-size: cover;
}
.button_categories-7 {
  background-image: url("../../assets/images/categories/thriller.png");
  background-size: cover;
}
.button_categories-8 {
  background-image: url("../../assets/images/categories/animation.png");
  background-size: cover;
}
.button_categories-text {
  font-size: 2rem;
  font-weight: bold;
  opacity: 1;
  background: black;
  color: white;
}
</style>
