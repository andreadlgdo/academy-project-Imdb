import { createStore } from "vuex";
import {
  requestAllFilms,
  requestFilmsByGenre,
  requestImages,
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
    images: [] as any[],
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
    setImages(state, value) {
      state.images = value;
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
      await context.dispatch("findImages", response);
      context.commit("setFilms", response);
    },
    async setFilmsNew(context) {
      const response = await requestLatestFilms();
      await context.dispatch("findImages", response);
      context.commit("setFilmsNew", response);
    },
    async setAllFilms(context) {
      const response = await requestAllFilms();
      await context.dispatch("findImages", response);
      context.commit("setAllFilms", response);
    },
    async findImages(context, films) {
      const allImages = [] as any[];
      for (let i = 0; i < films.length; i++) {
        const image = "N/A";
        //await requestImages(films[i].primaryTitle);
        allImages[i] = image;
      }
      context.commit("setImages", allImages);
    },
  },
});
