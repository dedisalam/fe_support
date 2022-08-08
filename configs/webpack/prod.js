const Module = require("./module");
const Optimization = require("./optimization");
const Output = require("./output");
const Plugins = require("./plugins");
const Resolve = require("./resolve");

const Config = (env) => {
  return {
    mode: env.mode,
    resolve: Resolve(),
    module: Module,
    output: Output(env),
    devtool: "source-map",
    optimization: Optimization(env),
    plugins: Plugins(env),
  };
};

module.exports = Config;
