const base = require('./webpack.config.base.js')

module.exports = {
  //把base的所有属性抄到这里来
  ...base,
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],   
      },
    ],
  },
};




