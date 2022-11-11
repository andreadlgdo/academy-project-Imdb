<template>
  <div class="categories_slide-1">
    <button class="button_categories-1">
      <p class="button_categories-text">Comedy</p>
    </button>
    <button class="button_categories-2">
      <p class="button_categories-text">Romance</p>
    </button>
    <button class="button_categories-3">
      <p class="button_categories-text">Horror</p>
    </button>
    <button class="button_categories-4">
      <p class="button_categories-text">Action</p>
    </button>
  </div>
</template>

<script type="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FirstCategories",
});
</script>

<style scoped>
.categories_slide-1 {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.button_categories-1,
.button_categories-2,
.button_categories-3,
.button_categories-4 {
  border-radius: 30px;
  height: 18rem;
  width: 12rem;
  opacity: 0.6;
  border: none;
}
.button_categories-1:hover,
.button_categories-2:hover,
.button_categories-3:hover,
.button_categories-4:hover {
  opacity: 1;
}
.button_categories-1 {
  background-image: url("../../assets/images/categories/comedy.png");
  background-size: cover;
}
.button_categories-2 {
  background-image: url("../../assets/images/categories/romantic.png");
  background-size: cover;
}
.button_categories-3 {
  background-image: url("../../assets/images/categories/horror.png");
  background-size: cover;
}
.button_categories-4 {
  background-image: url("../../assets/images/categories/action.png");
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
