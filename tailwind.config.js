import twAnimate from 'tailwindcss-animate';

import { auTwPlugin } from './twPlugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,ts,tsx,jsx}',
    '.storybook/*.ts',
    '.storybook/*.tsx',
  ],
  plugins: [auTwPlugin, twAnimate],
};
