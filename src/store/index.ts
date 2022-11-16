import { createStore } from "vuex";
import {
  requestAllFilms,
  requestFilmsByGenre,
  requestLatestFilms,
} from "../js/index";

export default createStore({
  state: {
    isOpen: false,
    filterByGenre: "",
    isGoToSeeAllMoviesByGenre: false,
    changeView: false,
    filmsByGenre: [] as any[],
    filmsNew: [] as any[],
    allFilms: [] as any[],
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
      state.filmsByGenre = value;
    },
    setAllFilms(state, value) {
      state.allFilms = value;
    },
    setFilmsNew(state, value) {
      state.filmsNew = value;
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
      const response = await requestFilmsByGenre(value);
      context.commit("setFilms", response);
    },
    async setFilmsNew(context) {
      const response = await requestLatestFilms();
      context.commit("setFilmsNew", response);
    },
    async setAllFilms(context) {
      const response = await requestAllFilms();
      context.commit("setAllFilms", response);
    },
  },
});
