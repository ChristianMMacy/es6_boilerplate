const path = require('path')
const webpack = require('webpack')

module.exports = {
  // cache: true,
  // watchDelay: 800,
  context: path.join(__dirname, 'src'),

  module: {
      preLoaders: [
          {test: /\.es6$/, exclude: /(node_modules|test)/, loader: 'isparta-instrumenter', query: { babel: {presets: ['es2015', 'stage-0']} } },
      ],
      loaders: [
          {test: /\.es6$/, exclude: /node_modules/, loader: 'babel-loader', query: { presets: ['es2015', 'stage-0'] } },
      ]
  },
  resolve: {
      root: [
        path.join(__dirname, 'src')
      ],
      extensions: ['', '.es6', '.js']
  }
}
