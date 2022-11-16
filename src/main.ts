import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";

async function requestFilms() {
  const data = await fetch("http://localhost:8080/search/?genre=comedy");
  const results = await data.json();
  return results.hits;
}

requestFilms().then((allMovies) => {
  console.log(allMovies);
});

createApp(App).use(store).mount("#app");
