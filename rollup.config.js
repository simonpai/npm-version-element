import terser from '@rollup/plugin-terser';
import { BASE } from './rollup.config.base.js';

export default {
  ...BASE,
  plugins: [
    ...BASE.plugins,
    terser({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false
      },
    }),
  ],
  output: {
    ...BASE.output,
    file: 'dist/npm-version-element.min.js',
  },
};
