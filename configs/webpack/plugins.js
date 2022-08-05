const path = require('path');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

const Plugins = (mode) => {
  if (mode === 'production') {
    return [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../../src/index.html'),
      }),
      new MiniCssExtractPlugin({
        filename: 'css/bundle.[contenthash].min.css',
        chunkFilename: 'css/bundle.[contenthash].min.css',
      }),
      new webpack.DefinePlugin({
        'process.env': {
          BACKEND_URL: JSON.stringify('https://202.51.232.124:7000'),
        },
      }),
    ];
  }

  return [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../../src/index.html'),
    }),
    new MiniCssExtractPlugin({}),
    new ReactRefreshPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        BACKEND_URL: JSON.stringify('https://202.51.232.124:3000'),
      },
    }),
  ];
};

module.exports = Plugins;
