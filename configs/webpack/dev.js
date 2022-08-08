const DevServer = require("./devServer");
const Module = require("./module");
const Output = require("./output");
const Plugins = require("./plugins");
const Resolve = require("./resolve");

const Config = (env) => {
  return {
    devServer: DevServer(),
    devtool: "eval-source-map",
    mode: "development",
    module: Module,
    output: Output(env),
    plugins: Plugins(env),
    resolve: Resolve(),
  };
};

module.exports = Config;
