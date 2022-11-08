<template>
  <AppComponent />
  <!--<img alt="Vue logo" src="./assets/logo.png" />-->
  <!--<HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppComponent from "@/components/AppComponent.vue";

export default defineComponent({
  name: "App",
  components: {
    AppComponent,
  },
});
</script>

<style>
html {
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
body {
  margin: 0rem;
  height: 100%;
}
</style>
