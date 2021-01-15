const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'XDML - 写代码啦',
      template: 'src/assets/index.html'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader', // Or `url-loader` or your other loader
          },
        ],
      },
      {
        test: /\.styl$/,
        loader: ["style-loader","css-loader","stylus-loader"],
      },
      {
        test: /\.less$/,
        loader: ["style-loader","css-loader","less-loader"], 
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require('dart-scss')
            },
          },
        ],
      },
    ],
  },
};


module.exports = {
  module: {
    rules: [
    
    ],
  },
};






