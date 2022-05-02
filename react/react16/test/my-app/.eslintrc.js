/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  extends: 'eslint:recommended',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  // parser: 'babel-eslint',
  // parser: '@babel/eslint-parser',
  // parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-undef': 0,
    'no-case-declarations': 0,
    'no-prototype-builtins': 0,
    'no-inner-declarations': 0,
    'no-self-assign': 0,
    'no-useless-escape': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': 0,
    'no-fallthroug': 0,
    'no-redeclare': 0,
    'no-unused-vars': 0,
    'no-unreachable': 0,
    'no-dupe-class-members': 0,
  },
};
