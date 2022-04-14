/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import installElementPlus from './plugins/element';
// 导入 svgIcon
import installIcons from '@/icons';
import './styles/index.scss';

const app = createApp(App);
installElementPlus(app);
installIcons(app);
app.use(store).use(router).mount('#app');
