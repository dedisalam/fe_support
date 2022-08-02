import { resolve } from 'path';
import type { Configuration } from 'webpack';

const Resolve = (): Configuration['resolve'] => ({
  alias: {
    '@assets': resolve(__dirname, '../../src/assets'),
    '@atoms': resolve(__dirname, '../../src/components/atoms'),
    '@molecules': resolve(__dirname, '../../src/components/molecules'),
    '@organisms': resolve(__dirname, '../../src/components/organisms'),
    '@templates': resolve(__dirname, '../../src/components/templates'),
    '@constants': resolve(__dirname, '../../src/constants'),
    '@helpers': resolve(__dirname, '../../src/helpers'),
    '@hooks': resolve(__dirname, '../../src/hooks'),
    '@props': resolve(__dirname, '../../src/interfaces/components'),
    '@args': resolve(__dirname, '../../src/interfaces/hooks'),
    '@pages': resolve(__dirname, '../../src/pages'),
    '@routes': resolve(__dirname, '../../src/routes'),
    '@services': resolve(__dirname, '../../src/services'),
    '@validations': resolve(__dirname, '../../src/validations'),
  },
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
});

export default Resolve;
