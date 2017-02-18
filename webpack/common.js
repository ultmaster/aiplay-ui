const webpack = require('webpack');
const path = require('path');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');

const config = {
  entry: {
    app: [path.resolve(__dirname, '../src/app.js')],
  },
  plugins: [
  ],
  module: {
    loaders: [
      {
        test: /\.js$/, // All .js files
        loaders: ['babel-loader'],
        exclude: [nodeModulesPath],
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: [nodeModulesPath],
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        loaders: ['url-loader?limit=10000&name=[path][name].[ext]'],
        exclude: [nodeModulesPath]
      }
    ],
  },
};

module.exports = config;
