import { resolve } from 'path';
import type { Configuration } from 'webpack';

const Output = (mode: Configuration['mode']): Configuration['output'] => {
  if (mode === 'production') {
    return {
      filename: 'js/bundle.[contenthash].min.js',
      path: resolve(__dirname, '../../dist'),
      publicPath: '/',
    };
  }

  return {
    publicPath: '/',
  };
};

export default Output;
