<template>
  <div class="categories_slide-1">
    <button class="button_categories-9">
      <p class="button_categories-text">Crime</p>
    </button>
    <button class="button_categories-10">
      <p class="button_categories-text">Fantasy</p>
    </button>
    <button class="button_categories-11">
      <p class="button_categories-text">Adventure</p>
    </button>
    <button class="button_categories-12">
      <p class="button_categories-text">Superhero</p>
    </button>
  </div>
</template>

<script type="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ThreeCategories"
});
</script>

<style scoped>
.categories_slide-1 {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.button_categories-9,
.button_categories-10,
.button_categories-11,
.button_categories-12 {
  border-radius: 30px;
  height: 18rem;
  width: 12rem;
  opacity: 0.6;
  border: none;
}
.button_categories-9:hover,
.button_categories-10:hover,
.button_categories-11:hover,
.button_categories-12:hover {
  opacity: 1;
}
.button_categories-9 {
  background-image: url("../../assets/images/categories/crime.png");
  background-size: cover;
}
.button_categories-10 {
  background-image: url("../../assets/images/categories/fantasy.png");
  background-size: cover;
}
.button_categories-11 {
  background-image: url("../../assets/images/categories/adventure.png");
  background-size: cover;
}
.button_categories-12 {
  background-image: url("../../assets/images/categories/superhero.png");
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
