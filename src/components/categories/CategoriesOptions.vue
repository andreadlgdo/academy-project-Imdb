<template>
  <section class="buttons_categories">
    <div class="before">
      <button class="categories_before" @click="beforePage()">
        <img
          class="before_img"
          alt="before"
          :src="require('@/assets/images/next2.png')"
        />
      </button>
    </div>
    <MainModal v-if="firsPage">
      <FirstCategories />
    </MainModal>
    <MainModal v-if="secondPage">
      <SecondCategories />
    </MainModal>
    <MainModal v-if="threePage">
      <ThreeCategories />
    </MainModal>
    <div class="next">
      <button class="categories_next" @click="nextPage()">
        <img
          class="next_img"
          alt="next"
          :src="require('@/assets/images/next2.png')"
        />
      </button>
    </div>
  </section>
</template>

<script type="ts">
import { defineComponent } from "vue";
import FirstCategories from "@/components/categories/FirstCategories.vue";
import SecondCategories from "@/components/categories/SecondCategories.vue";
import ThreeCategories from "@/components/categories/ThreeCategories.vue";

export default defineComponent({
  name: "CategoriesOptions",
  components: {ThreeCategories, SecondCategories, FirstCategories },
  data: function () {
    return {
      numberPage: 1,
      firsPage: true,
      secondPage: false,
      threePage: false,
    };
  },
  methods: {
    nextPage: function () {
      if (this.numberPage == 3) this.numberPage = 1;
      else this.numberPage++;
      this.chosePage();
    },
    beforePage: function (){
      if (this.numberPage == 1) this.numberPage=3;
      else this.numberPage--;
      this.chosePage();
    },
    chosePage: function (){
      if(this.numberPage == 1) {
        this.firsPage = true;
        this.secondPage = false;
        this.threePage = false;
      }else if (this.numberPage == 2) {
        this.secondPage = true;
        this.firsPage = false;
        this.threePage = false;
      }else if (this.numberPage == 3) {
        this.threePage = true;
        this.secondPage = false;
        this.firsPage = false;
      }
    }
  },
});
</script>

<style scoped>
.buttons_categories {
  display: grid;
  grid-template-columns: 10% 80% 10%;
}
.next,
.before {
  display: flex;
  justify-content: center;
  align-items: center;
}
.categories_next,
.categories_before {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  width: 3rem;
  background: white;
  border: none;
}
.categories_next:hover,
.categories_before:hover {
  background: #f2ad9f;
}
.next_img,
.before_img {
  height: 3rem;
  width: 3rem;
}
.before_img {
  transform: scaleX(-1);
}
</style>
