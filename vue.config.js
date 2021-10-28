const webpack = require('webpack')
module.exports = {
    chainWebpack: config => {
      config.module.rule('pug')
        .test(/\.pug$/)
        .use('pug-html-loader')
        .loader('pug-html-loader')
        .end()
  },
  configureWebpack: {
      plugins: [
          new webpack.ProvidePlugin({
              $: 'jquery',
              jQuery: 'jquery',
              'windows.jQuery': 'jquery'
          })
      ]
  }
}
