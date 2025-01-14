import { nodeResolve } from '@rollup/plugin-node-resolve';

export const BASE = {
  plugins: [
    nodeResolve({ browser: true }),
  ],
  input: 'src/index.js',
  output: {
    file: 'dist/npm-version-element.js',
    format: 'umd',
    indent: false,
  },
};
