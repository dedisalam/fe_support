import type { Configuration } from 'webpack';
import Module from './module';
import Optimization from './optimization';
import Output from './output';
import Plugins from './plugins';
import Resolve from './resolve';

const config: Configuration = {
  mode: 'production',
  resolve: Resolve(),
  module: Module,
  output: Output('production'),
  devtool: 'source-map',
  optimization: Optimization('production'),
  plugins: Plugins('production'),
};

export default config;
