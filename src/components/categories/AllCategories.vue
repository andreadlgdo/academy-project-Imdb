<template>
  <ul class="categories">
    <li
      @click="$emit('change-page', category.title)"
      v-for="(category, index) in categories"
      :key="index"
      class="category"
    >
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
  name: "AllCategories",
  data() {
    return {
      categories: [
        {
          title: "Comedy",
          image: require("@/assets/images/categories/comedy.png"),
        },
        {
          title: "Romance",
          image: require("@/assets/images/categories/romantic.png"),
        },
        {
          title: "Horror",
          image: require("@/assets/images/categories/horror.png"),
        },
        {
          title: "Action",
          image: require("@/assets/images/categories/action.png"),
        },
        {
          title: "Sci-Fi",
          image: require("@/assets/images/categories/sci-fi.png"),
        },
        {
          title: "Drama",
          image: require("@/assets/images/categories/drama.png"),
        },
        {
          title: "Thriller",
          image: require("@/assets/images/categories/thriller.png"),
        },
        {
          title: "Animation",
          image: require("@/assets/images/categories/animation.png"),
        },
        {
          title: "Crime",
          image: require("@/assets/images/categories/crime.png"),
        },
        {
          title: "Fantasy",
          image: require("@/assets/images/categories/fantasy.png"),
        },
        {
          title: "Adventure",
          image: require("@/assets/images/categories/adventure.png"),
        },
        {
          title: "Family",
          image: require("@/assets/images/categories/family.png"),
        },
        {
          title: "Documentary",
          image: require("@/assets/images/categories/documentary.png"),
        },
        {
          title: "Musical",
          image: require("@/assets/images/categories/musical.png"),
        },
        {
          title: "War",
          image: require("@/assets/images/categories/war.png"),
        },
        {
          title: "Biography",
          image: require("@/assets/images/categories/biography.png"),
        },
        {
          title: "Mystery",
          image: require("@/assets/images/categories/mystery.png"),
        },
      ]
    }
  }
});
</script>

<style lang="scss" scoped>
.categories {
  display: flex;
  flex-flow: row nowrap;
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
      font-size: 1.8rem;
      background: black;
      color: white;
      font-weight: bold;
      cursor: pointer;
      border: none;
    }
  }
}
</style>
