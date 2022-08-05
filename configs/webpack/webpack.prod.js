const Module = require("./module");
const Optimization = require("./optimization");
const Output = require("./output");
const Plugins = require("./plugins");
const Resolve = require("./resolve");

const Config = {
  mode: "production",
  resolve: Resolve(),
  module: Module,
  output: Output("production"),
  devtool: "source-map",
  optimization: Optimization("production"),
  plugins: Plugins("production"),
};

module.exports = Config;
