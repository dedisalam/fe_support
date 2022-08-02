const path = require('path');

const Resolve = () => ({
  alias: {
    '@assets': path.resolve(__dirname, '../../src/assets'),
    '@atoms': path.resolve(__dirname, '../../src/components/atoms'),
    '@molecules': path.resolve(__dirname, '../../src/components/molecules'),
    '@organisms': path.resolve(__dirname, '../../src/components/organisms'),
    '@templates': path.resolve(__dirname, '../../src/components/templates'),
    '@constants': path.resolve(__dirname, '../../src/constants'),
    '@helpers': path.resolve(__dirname, '../../src/helpers'),
    '@hooks': path.resolve(__dirname, '../../src/hooks'),
    '@props': path.resolve(__dirname, '../../src/interfaces/components'),
    '@args': path.resolve(__dirname, '../../src/interfaces/hooks'),
    '@pages': path.resolve(__dirname, '../../src/pages'),
    '@routes': path.resolve(__dirname, '../../src/routes'),
    '@services': path.resolve(__dirname, '../../src/services'),
    '@validations': path.resolve(__dirname, '../../src/validations'),
  },
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
});

module.exports = Resolve;
