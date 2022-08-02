import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import type { Configuration } from 'webpack';

const Optimization = (mode: Configuration['mode']): Configuration['optimization'] => {
  if (mode === 'production') {
    return {
      splitChunks: {
        chunks: 'all',
        minSize: 150000,
        maxSize: 200000,
        cacheGroups: {
          styles: {
            name: 'styles',
            type: 'css/mini-extract',
            chunks: 'all',
            enforce: true,
          },
        },
      },
      minimize: true,
      minimizer: [
        new CssMinimizerPlugin(),
        new TerserPlugin({
          minify: TerserPlugin.swcMinify,
          terserOptions: {
            compress: true,
            format: {
              comments: false,
            },
          },
          extractComments: false,
        }),
      ],
    };
  }

  return {};
};

export default Optimization;
