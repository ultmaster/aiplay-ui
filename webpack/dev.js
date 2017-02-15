const webpack = require('webpack');
var config  = require('./common');

config.cache   = true;
config.devtool = 'eval';

config.devServer = {
  contentBase: 'src/dev', // Relative directory for base of server
  devtool: 'eval',
  inline: true,
  port: 3000, // Port Number
  host: 'localhost', // Change to '0.0.0.0' for external facing server
  historyApiFallback: {
    index: 'index.html'
  }
};

config.output = {
  filename: '[name].js',
  chunkFilename: '[name].js',
};

config.entry.app.unshift(
  'webpack/hot/dev-server',
  'webpack/hot/only-dev-server'
);

config.plugins.unshift(
  new webpack.HotModuleReplacementPlugin()
);

module.exports = config;



