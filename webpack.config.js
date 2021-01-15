var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // mode是用来切换模式的
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    // filename: 'index.js'
    filename: '[name].[contenthash].js',
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'XDML - 写代码啦',
    // filename: 'assets/admin.html'
    template: 'src/assets/index.html'
  })],
  module: {
    rules: [
      {
        // .css结尾
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};



