/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import locale from 'element-plus/lib/locale/lang/zh-cn';

export default (app) => {
  app.use(ElementPlus, { locale });
};
