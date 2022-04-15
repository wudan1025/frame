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
// i18n （PS：导入放到 APP.vue 导入之前，因为后面我们会在 app.vue 中使用国际化内容）
import i18n from '@/i18n';
import './styles/index.scss';

const app = createApp(App);
installElementPlus(app);
installIcons(app);
app.use(i18n);
app.use(store).use(router).mount('#app');
