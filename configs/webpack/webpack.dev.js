const DevServer = require("./devServer");
const Optimization = require("./optimization");
const Output = require("./output");
const Plugins = require("./plugins");
const Resolve = require("./resolve");

const Config = {
  mode: "development",
  devServer: DevServer(),
  resolve: Resolve(),
  output: Output("development"),
  devtool: "cheap-module-source-map",
  optimization: Optimization("development"),
  plugins: Plugins("development"),
};

module.exports = Config;
