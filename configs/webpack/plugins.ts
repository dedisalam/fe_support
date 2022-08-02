import { resolve } from 'path';
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import type { Configuration } from 'webpack';

const Plugins = (mode: Configuration['mode']): Configuration['plugins'] => {
  if (mode === 'production') {
    return [
      new HtmlWebpackPlugin({
        template: resolve(__dirname, '../../src/index.html'),
      }),
      new MiniCssExtractPlugin({
        filename: 'css/bundle.[contenthash].min.css',
        chunkFilename: 'css/bundle.[contenthash].min.css',
      }),
    ];
  }

  return [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '../../src/index.html'),
    }),
    new MiniCssExtractPlugin({}),
    new ReactRefreshPlugin(),
  ];
};

export default Plugins;
