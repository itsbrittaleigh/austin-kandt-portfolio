/* eslint-disable no-shadow */

import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash';

import NavigationModule from './modules/Navigation';

import Projects from '../data/Projects';
import Assets from '../data/Assets';

Vue.use(Vuex);

const state = {
  projects: Projects,
  assets: Assets,
};

const getters = {
  projects: state => state.projects,
  brands: (state) => {
    const brands = [];
    _.forEach(state.projects, (project) => {
      if (project.type === 'brand') {
        brands.push(project);
        const brand = brands[brands.length - 1];
        brand.assets = [];
        _.forEach(state.assets, (asset) => {
          if (asset.project === brand.slug) {
            if (asset.isHero) brand.heroAsset = asset.image;
            else if (asset.isFeatured) brand.featuredAsset = asset.image;
            else brand.assets.push(asset);
          }
        });
      }
    });
    return brands;
  },
  illustrations: (state) => {
    const illustrations = [];
    _.forEach(state.projects, (project) => {
      if (project.type === 'illustration') {
        illustrations.push(project);
        const illustration = illustrations[illustrations.length - 1];
        illustration.assets = [];
        _.forEach(state.assets, (asset) => {
          if (asset.project === illustration.slug) {
            if (asset.isFeatured) illustration.featuredAsset = asset.image;
            else illustration.assets.push(asset.image);
          }
        });
      }
    });
    return illustrations;
  },
  logos: (state) => {
    const logos = _.find(state.projects, { slug: 'logos' });
    logos.assets = [];
    _.forEach(state.assets, (asset) => {
      if (asset.project === 'logos') {
        logos.assets.push(asset);
      }
    });
    return logos;
  },
};

const mutations = {};

const actions = {};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    NavigationModule,
  },
});
