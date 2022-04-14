/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir);
}

// chainWebpack todo
module.exports = {
  chainWebpack(config) {
    // 设置 svg-sprite-loader
    config.module.rule('svg').exclude.add(resolve('src/icons')).end();
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
      .end();
  },
  devServer: {
    // 配置反向代理
    proxy: {
      // 当地址中有/api的时候会触发代理机制
      '/api': {
        // 要代理的服务器地址  这里不用写 api
        target: 'https://api.imooc-admin.lgdsunday.club/',
        changeOrigin: true, // 是否跨域
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        path: require.resolve('path-browserify'),
      },
    },
  },
};

// todo 含义
// const { defineConfig } = require('@vue/cli-service');
// module.exports = defineConfig({
//   transpileDependencies: true,
// });
