/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */

import { createStore } from 'vuex';
import user from './modules/user.js';
import app from './modules/app';
import getters from './getters';
import theme from './modules/theme.js';

export default createStore({
  state: {},
  getters,
  mutations: {},
  actions: {},
  modules: {
    user,
    app,
    theme,
  },
});
