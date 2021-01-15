var path = require('path');

module.exports = {
    // mode是用来切换模式的
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    // filename: 'index.js'
    filename: '[name].[contenthash].js',
  }
};


