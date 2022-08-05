const Dev = require("./webpack.dev");
const Prod = require("./webpack.prod");

const Config = (env) => {
  if (env.production) {
    return Prod;
  }
  return Dev;
};

module.exports = Config;
