import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import type { Configuration } from 'webpack';

const Module: Configuration['module'] = {
  rules: [
    {
      test: [/\.jsx?$/, /\.tsx?$/],
      use: ['babel-loader'],
      exclude: /node_modules/,
    },
    {
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader'],
    },
    {
      test: /\.(scss|sass)$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
    },
    {
      test: /\.(jpe?g|png|gif|svg)$/i,
      use: [
        'file-loader?hash=sha512&digest=hex&name=img/[contenthash].[ext]',
      ],
    },
  ],
};

export default Module;
