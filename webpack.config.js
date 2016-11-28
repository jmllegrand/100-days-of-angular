/**
 * Created by jmlegrand on 19/11/16.
 */

'use strict';

var HtmlWebpack = require('html-webpack-plugin');
var webpack = require('webpack');
//var path = require('path');


module.exports = {
  entry: {
    app: './app/main.ts',
    vendor: './app/vendor.ts'
  },
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test:  /\.ts$/, loader: 'ts-loader'}
    ]
  },
  resolve: {
    extensions: [ '', '.js', '.ts' ]
  }
  /*plugins: [
    /*new ChunkWebpack({
      filename: 'vendor.bundle.js',
      minChunks: Infinity,
      name: 'vendor'
    }),*/
    /*new HtmlWebpack({
      filename: 'index.html',
      inject: 'body'
      //template: path.resolve(rootDir, 'src', 'index.html')
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]*/
};







