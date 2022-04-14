/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
import variables from '@/styles/variables.scss';
const getters = {
  token: (state) => state.user.token,
  userInfo: (state) => state.user.userInfo,
  cssVar: (state) => variables,
  /**
   * @returns true 表示已存在用户信息
   */
  hasUserInfo: (state) => {
    return JSON.stringify(state.user.userInfo) !== '{}';
  },
  sidebarOpened: (state) => state.app.sidebarOpened,
};
export default getters;
