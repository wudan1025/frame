/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
import { login, getUserInfo } from '@/api/sys';
import md5 from 'md5';
import { setItem, getItem } from '@/utils/storage';
import { TOKEN } from '@/constant';
import router from '@/router';
import { setTimeStamp } from '@/utils/auth';

export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || '',
    userInfo: {},
  }),
  mutations: {
    setToken(state, token) {
      state.token = token;
      setItem(TOKEN, token);
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    },
  },
  actions: {
    login(context, userInfo) {
      const { username, password } = userInfo;
      return new Promise((resolve, reject) => {
        login({
          username,
          password: md5(password),
        })
          .then((data) => {
            setTimeStamp();
            // this.commit('user/setToken', data.token);
            resolve();
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    async getUserInfo(context) {
      const res = await getUserInfo();
      this.commit('user/setUserInfo', res);
      return res;
    },

    logout() {
      this.commit('user/setToken', '');
      this.commit('user/setUserInfo', {});
      // removeAllItem();
      router.push('/login');
    },
  },
};
