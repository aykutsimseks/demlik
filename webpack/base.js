const app_root = 'src';

const path = require('path');
const extend = require('lodash/extend');
const merge = require('lodash/merge');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const defaults = {

  output: {
    // We need to give Webpack a path. It does not actually need it,
    // because files are kept in memory in webpack-dev-server, but an
    // error will occur if nothing is specified. We use the buildPath
    // as that points to where the files will eventually be bundled
    // in production
    path: path.resolve(__dirname, '../public', 'build'),
    filename: 'bundle.js',

    // Everything related to Webpack should go through a build path,
    // localhost:3000/build. That makes proxying easier to handle
    publicPath: '/build/',
  },

  module: {
    // rules : [ // Webpack 2
    loaders: [
      {
        test: /\.js$/i,
        // loader: 'babel-loader', // Webpack 2
        loader: 'babel',
        include: path.join(__dirname, '..', app_root),
        exclude: /node_modules/,
      },

      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass')
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
      },
      // {
      //   test: /\.(css|scss)$/i,
      //   loader: 'style-loader!css-loader!sass-loader',
      // },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader?name=assets/img/[name].[ext]',
      },
      // {
      //   test: /\.(eot|woff|woff2|ttf|svg)(\?\S*)?$/i,
      //   loader: 'url-loader?limit=1&name=[name].[ext]',
      // },
      {
        test: /\.json$/i,
        loader: 'json-loader',
      },
    ],
  },

  resolve: {
    alias: {
      'babel-runtime': path.resolve(__dirname, '../node_modules/babel-runtime'),
      react: path.resolve(__dirname, '../node_modules/react'),
    },
  },
};

module.exports.defaults = defaults;

module.exports.app_root = app_root;

module.exports.extend = config => extend({}, defaults, config);

module.exports.merge = config => merge({}, defaults, config);
