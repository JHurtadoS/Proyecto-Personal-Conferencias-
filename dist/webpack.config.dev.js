"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var path = require('path');

var MiniCssExtractPlugin = require("mini-css-extract-plugin");

var devMode = process.env.NODE_ENV !== "production";
module.exports = {
  mode: 'development',
  entry: './src/js/main.js',
  watch: true,
  output: _defineProperty({
    path: path.resolve(__dirname + '/build'),
    filename: '[name].js'
  }, "filename", 'bundle.js'),
  plugins: [new MiniCssExtractPlugin({
    filename: "[name].css",
    chunkFilename: "[id].css"
  })],
  module: {
    rules: [{
      test: /\.s[ac]ss$/i,
      use: [{
        loader: MiniCssExtractPlugin.loader,
        options: {
          publicPath: ''
        }
      }, {
        loader: "css-loader",
        options: {
          sourceMap: true
        }
      }, {
        loader: "sass-loader",
        options: {
          sourceMap: true
        }
      }]
    }]
  }
};