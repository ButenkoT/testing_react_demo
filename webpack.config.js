var path = require('path');
var webpack = require('webpack');


module.exports = {
  devtool: 'eval',

  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    './scripts/index.js'
  ],

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  output: {
    path: path.resolve('build'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        include: [path.resolve('scripts')]
      }
    ]
  },
  stats: {
    colors: true
  },
  devServer: {
    hot: true,
    stats: {
      chunkModules: false,
      colors: true
    }
  }
};