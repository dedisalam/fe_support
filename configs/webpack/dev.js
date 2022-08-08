const DevServer = require("./devServer");
const Optimization = require("./optimization");
const Output = require("./output");
const Plugins = require("./plugins");
const Resolve = require("./resolve");

const Config = (env) => {
  return {
    mode: "development",
    devServer: DevServer(),
    resolve: Resolve(),
    output: Output(env),
    devtool: "cheap-module-source-map",
    optimization: Optimization(env),
    plugins: Plugins(env),
  };
};

module.exports = Config;
