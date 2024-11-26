import type { Config } from 'tailwindcss';

import { F } from '@mobily/ts-belt';
import twAnimate from 'tailwindcss-animate';
import plugin from 'tailwindcss/plugin';

import {
  bgColorTokens,
  radiusTokens,
  ringColorTokens,
  textColorTokens,
  textSizeTokens,
} from './tokens';

const config = {
  content: [],
  plugins: [twAnimate],
  theme: {
    extend: {
      backgroundColor: bgColorTokens,
      borderRadius: radiusTokens,
      textColor: textColorTokens,
      borderColor: bgColorTokens,
      fontSize: textSizeTokens,
      ringColor: ringColorTokens,
      ringOffsetColor: ringColorTokens,
    },
  },
} satisfies Config;

export const auTwPlugin = plugin(F.identity, config);
