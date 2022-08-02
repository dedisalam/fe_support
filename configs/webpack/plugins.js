const path = require('path');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
    ];
  }

  return [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../../src/index.html'),
    }),
    new MiniCssExtractPlugin({}),
    new ReactRefreshPlugin(),
  ];
};

module.exports = Plugins;
