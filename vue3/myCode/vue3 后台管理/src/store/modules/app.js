/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
export default {
  namespaced: true,
  state: () => ({
    sidebarOpened: true,
  }),
  mutations: {
    triggerSidebarOpened(state) {
      state.sidebarOpened = !state.sidebarOpened;
    },
  },
  actions: {},
};
