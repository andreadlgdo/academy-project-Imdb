import { createStore } from "vuex";

export default createStore({
  state: {
    isOpen: false,
    filterByGenre: "",
    isGoToSeeAllMoviesByGenre: false,
  },
  mutations: {
    change(state, value) {
      state.isOpen = value;
    },
    changeGenre(state, value) {
      state.filterByGenre = value;
    },
    setMoviesByGenre(state, value) {
      state.isGoToSeeAllMoviesByGenre = value;
    },
  },
  actions: {
    change(context, value) {
      context.commit("change", value);
    },
    changeGenre(context, value) {
      context.commit("changeGenre", value);
    },
    setMovieByGenre(context, value) {
      context.commit("setMoviesByGenre", value);
    },
  },
});
