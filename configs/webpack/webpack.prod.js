const Resolve = require('./resolve');
const Output = require('./output');
const Optimization = require('./optimization');
const Plugins = require('./plugins');
const Module = require('./module');

const Config = {
  mode: 'production',
  resolve: Resolve(),
  module: Module,
  output: Output('production'),
  devtool: 'source-map',
  optimization: Optimization('production'),
  plugins: Plugins('production'),
};

module.exports = Config;
