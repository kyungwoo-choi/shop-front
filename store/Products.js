'use strict';
export const state = () => ({
  categories: {}
});
export const mutations = {};
export const getters = {};
export const actions = {
  async fetchCategories({commit}) {
    const response = await this.$axios.get('/categories');

    return response.data.data.tree;
  }
};

