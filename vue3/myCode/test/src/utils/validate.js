/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
/**
 * 判断是否为外部资源
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path);
}
