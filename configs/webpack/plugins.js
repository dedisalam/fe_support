const path = require("path");
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const DEV_ENV = require("../environment/development");
const PROD_ENV = require("../environment/production");

const Plugins = (env) => {
  switch (env.mode) {
    case "production":
      return [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, "../../src/index.html"),
        }),
        new MiniCssExtractPlugin({
          filename: "css/bundle.[contenthash].min.css",
          chunkFilename: "css/bundle.[contenthash].min.css",
        }),
        new webpack.DefinePlugin({
          "process.env": JSON.stringify(PROD_ENV),
        }),
      ];

    case "development":
      return [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, "../../src/index.html"),
        }),
        new MiniCssExtractPlugin({
          filename: "css/[name].css",
          chunkFilename: "css/[name].css",
        }),
        new webpack.DefinePlugin({
          "process.env": JSON.stringify(DEV_ENV),
        }),
      ];

    default:
      return [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, "../../src/index.html"),
        }),
        new MiniCssExtractPlugin({}),
        new ReactRefreshPlugin(),
        new webpack.DefinePlugin({
          "process.env": JSON.stringify(DEV_ENV),
        }),
      ];
  }
};

module.exports = Plugins;
