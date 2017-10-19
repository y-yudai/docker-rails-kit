const path = require('path');
const glob = require('glob');

const SRC = './frontend/javascripts';
const DIST = './app/assets/javascripts/webpack';
const IS_DEV = process.env.NODE_ENV === 'development';

const entries = glob.sync(`${SRC}/**/*.bundle.js`).reduce((object, file) => {
  object[file.replace(SRC, '')] = file;
  return object;
}, {});

const config = {
  entry: entries,

  devtool: IS_DEV ? 'inline-source-map' : '',

  output: {
    filename: '[name]',
    path: path.resolve(__dirname, DIST)
  },

  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: { js: 'babel-loader' }
        }
      }
    ]
  },

  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
};

module.exports = config;
