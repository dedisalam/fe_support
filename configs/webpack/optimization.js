const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const Optimization = (env) => {
  switch (env.mode) {
    case "production":
      return {
        splitChunks: {
          chunks: "all",
          minSize: 150000,
          maxSize: 200000,
          cacheGroups: {
            styles: {
              name: "styles",
              type: "css/mini-extract",
              chunks: "all",
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

    default:
      return {};
  }
};

module.exports = Optimization;
