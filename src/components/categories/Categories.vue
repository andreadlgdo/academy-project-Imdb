<template>
  <ul class="categories">
    <li v-for="(category, index) in categories" :key="index" class="category">
      <img class="category-image" :src="category.image" alt="category image" />
      <button class="category-title">
        {{ category.title }}
      </button>
    </li>
  </ul>
</template>

<script type="ts">
import { defineComponent } from "vue";


export default defineComponent({
  name: "FirstCategories",
  props: ['categories'],
});
</script>

<style lang="scss" scoped>
.categories {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  gap: 30px;
  .category {
    display: flex;
    list-style: none;
    border-radius: 30px;
    position: relative;
    &-image {
      height: 18rem;
      width: 12rem;
      opacity: 0.6;
      border-radius: 30px;
      &:hover {
        opacity: 1;
      }
    }
    &-title {
      height: 50px;
      position: absolute;
      right: 0;
      left: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      font-size: 2rem;
      background: black;
      color: white;
      font-weight: bold;
      cursor: pointer;
      border: none;
    }
  }
}
</style>
