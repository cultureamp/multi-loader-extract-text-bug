var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var multiLoader = require('multi-loader');

const extractCssPlugin = new ExtractTextPlugin({
  filename: '[name].bundle.css',
});

module.exports = {
  entry: path.join(__dirname, 'index.js'),
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'dist'),
    pathinfo: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: extractCssPlugin.extract({ use: ['css-loader'] }),
      },
      {
        test: /\.(png|gif|jpg)$/,
        loader: multiLoader('file-loader', 'url-loader'),
      },
    ],
  },
  plugins: [extractCssPlugin],
};
