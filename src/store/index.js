/* eslint-disable no-shadow */
import Vue from 'vue';
import Vuex from 'vuex';
import Projects from '../data/Projects';

Vue.use(Vuex);

const state = {
  projects: Projects,
};

const getters = {
  projects: state => state.projects,
};

const actions = {};
const mutations = {};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
