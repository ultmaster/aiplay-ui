const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, '../dist');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
var config  = require('./common');

config.devtool  = 'source-map';

config.output = {
  path: buildPath,
  filename: '[name].[hash].js',
  chunkFilename: '[name].[hash].js',
  publicPath: '/',
};

config.plugins.unshift(
  new webpack.DefinePlugin({
    'process.env':{
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      drop_console: true,
      drop_debugger: true,
      warnings: false,
    },
    output: {
      comments: false
    }
  }),
  new HtmlWebpackPlugin({
    filename: path.resolve(buildPath, 'index.html'),
    template: 'assets/index.html',
    inject: 'body'
  }),
  new CompressionPlugin({
    asset: "[path].gz[query]",
    algorithm: "gzip",
    test: /\.js$|\.css$|\.html$/,
    threshold: 10240,
    minRatio: 0.8
  })
);

module.exports = config;
