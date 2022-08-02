const DevServer = require('./devServer');
const Resolve = require('./resolve');
const Output = require('./output');
const Optimization = require('./optimization');
const Plugins = require('./plugins');

const Config = {
  mode: 'development',
  devServer: DevServer(),
  resolve: Resolve(),
  output: Output('development'),
  devtool: 'cheap-module-source-map',
  optimization: Optimization('development'),
  plugins: Plugins('development'),
};

module.exports = Config;
