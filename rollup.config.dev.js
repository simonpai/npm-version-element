import { BASE } from './rollup.config.base.js';
import serve from 'rollup-plugin-serve';

export default {
  ...BASE,
  plugins: [
    ...BASE.plugins,
    serve({
      port: 20001,
    }),
  ],
  output: {
    ...BASE.output,
    indent: true,
  },
  watch: true,
};
