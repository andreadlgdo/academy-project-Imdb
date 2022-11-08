import { createStore } from "vuex";

export default createStore({
  state: {
    isOpen: false,
  },
  mutations: {
    change(state, value) {
      state.isOpen = value;
    },
  },
  actions: {
    change(context, value) {
      context.commit("change", value);
    },
  },
});
