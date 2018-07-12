const webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    './main.js',
  ],
  output: {
    path: __dirname,
    filename: 'main-bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-0', 'react'],
          plugins: ['react-hot-loader/babel'],
        },
      },
    ],
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000',
        pathRewrite: {
          '^/api': '',
        },
      },
    },
    publicPath: '/',
    historyApiFallback: true,
  },
};
