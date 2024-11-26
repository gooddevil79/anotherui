import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import copy from 'rollup-plugin-copy';
import del from 'rollup-plugin-delete';
import postcss from 'rollup-plugin-postcss';

/**
 * @type {import('rollup').RollupOptions}
 */

export default {
  input: ['./src/index.ts'],
  external: ['react', 'react-dom'],
  output: [{ dir: './dist/', format: 'esm', sourcemap: true }],
  plugins: [
    del({ targets: 'dist/*' }),
    resolve(),
    commonjs(),
    postcss({
      minimize: true,
      extract: true,
      sourceMap: true,
    }),
    typescript(),
    copy({
      targets: [{ src: './package.json', dest: 'dist/' }],
    }),
  ],
};
