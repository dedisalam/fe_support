const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const Module = {
  rules: [
    {
      test: [/\.jsx?$/, /\.tsx?$/],
      use: ["babel-loader"],
      exclude: /node_modules/,
    },
    {
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, "css-loader"],
    },
    {
      test: /\.(scss|sass)$/,
      use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
    },
    {
      test: /\.(jpe?g|png|gif|svg)$/i,
      use: ["file-loader?hash=sha512&digest=hex&name=img/[contenthash].[ext]"],
    },
  ],
};

module.exports = Module;
