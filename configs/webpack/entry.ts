import { resolve } from 'path';
import type { Configuration } from 'webpack';

const Entry: Configuration['entry'] = resolve(__dirname, '../../src/index.tsx');

export default Entry;
