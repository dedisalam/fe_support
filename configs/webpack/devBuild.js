const Output = require("./output");
const Plugins = require("./plugins");
const Resolve = require("./resolve");

const Config = (env) => {
  return {
    devtool: "eval-source-map",
    mode: env.mode,
    output: Output(env),
    plugins: Plugins(env),
    resolve: Resolve(),
  };
};

module.exports = Config;
