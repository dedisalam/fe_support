const path = require('path');

const Output = (mode) => {
  if (mode === 'production') {
    return {
      filename: 'js/bundle.[contenthash].min.js',
      path: path.resolve(__dirname, '../../dist'),
      publicPath: '/',
    };
  }

  return {
    publicPath: '/',
  };
};

module.exports = Output;
