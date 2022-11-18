<template>
  <section class="stars">
    <div v-for="(score, index) in getScore" :key="index">
      <input class="start_input" checked type="radio" name="stars" />
      <label class="start_label" v-if="score" style="color: orange">★</label>
      <label class="start_label" v-if="!score">★</label>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "StartRating",
  props: ["rating"],
  data: function () {
    return {
      number: [false, false, false, false, false],
    };
  },
  computed: {
    getScore() {
      let number = [false, false, false, false, false];
      console.log(this.rating);
      if (this.rating < 3) number = [true, false, false, false, false];
      else if (this.rating < 5) number = [true, true, false, false, false];
      else if (this.rating < 7) number = [true, true, true, false, false];
      else if (this.rating < 9) number = [true, true, true, true, false];
      else if (this.rating <= 10) number = [true, true, true, true, true];
      return number;
    },
  },
});
</script>

<style scoped>
.stars {
  display: flex;
}
.start_label {
  color: grey;
}
input[type="radio"] {
  display: none;
}
</style>
