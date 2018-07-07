/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */

const state = {
  menuIsOpen: false,
};

const getters = {
  menuIsOpen: state => state.menuIsOpen,
};

const actions = {
  toggleMenu(context) {
    context.commit('toggleMenu');
  },
  closeMenu(context) {
    context.commit('closeMenu');
  },
};

const mutations = {
  toggleMenu(state) {
    state.menuIsOpen = !state.menuIsOpen;
  },
  closeMenu(state) {
    state.menuIsOpen = false;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
