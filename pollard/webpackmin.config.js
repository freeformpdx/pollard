var path = require('path');
var webpack = require('webpack');

module.exports = {

  entry: "./index",
  devtool: "source-map",
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "bundle.min.js"
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true}),
		new webpack.ProvidePlugin({
			'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
		}),
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/,
      include: __dirname
    }, {
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/,
      include: path.join(__dirname, '..', '..', 'src')
    }, {
      test: /\.css?$/,
      loaders: ['style', 'raw'],
      include: __dirname
    }]
  }
};
