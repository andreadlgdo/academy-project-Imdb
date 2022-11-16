import { createStore } from "vuex";
import { requestFilms } from "../js/index";

export default createStore({
  state: {
    isOpen: false,
    filterByGenre: "",
    isGoToSeeAllMoviesByGenre: false,
    changeView: false,
    films: [] as any[],
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
    setFilms(state, value) {
      state.films = value;
    },
    setView(state, value) {
      state.changeView = value;
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
    setView(context, value) {
      context.commit("setView", value);
    },
    async setMovieFilter(context, value) {
      const response = await requestFilms(value);
      context.commit("setFilms", response);
    },
  },
});
