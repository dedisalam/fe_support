import type { Configuration as Webpack } from 'webpack';
import type { Configuration as WebpackDevServer } from 'webpack-dev-server';
import DevServer from './devServer';
import Optimization from './optimization';
import Output from './output';
import Plugins from './plugins';
import Resolve from './resolve';

type Configuration = Webpack & WebpackDevServer;

const config: Configuration = {
  mode: 'development',
  devServer: DevServer(),
  resolve: Resolve(),
  output: Output('development'),
  devtool: 'cheap-module-source-map',
  optimization: Optimization('development'),
  plugins: Plugins('development'),
};

export default config;
