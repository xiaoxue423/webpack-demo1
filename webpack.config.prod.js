const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const base = require('./webpack.config.base.js')

module.exports = {
  ...base,
  // mode是用来切换模式的
  mode: 'production',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    ...base.plugins,
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    })
],
  module: {
    rules: [
      ...base.module.rules,
      {
        // .css结尾
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
};




