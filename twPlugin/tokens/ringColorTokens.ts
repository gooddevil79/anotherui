import { colorPrimitives } from '../primitives';

export const ringColorTokens = {
  surface: {
    DEFAULT: `ring-[${colorPrimitives.gray[2]}]`,
    muted: `ring-[${colorPrimitives.gray[4]}]`,
  },

  brand: {
    DEFAULT: `ring-[${colorPrimitives.gray[3]}]`,
  },

  success: {
    DEFAULT: `ring-[${colorPrimitives.green[1]}]`,
  },

  danger: {
    DEFAULT: `ring-[${colorPrimitives.red[1]}]`,
  },

  warning: {
    DEFAULT: `ring-[${colorPrimitives.orange[1]}]`,
  },

  info: {
    DEFAULT: `ring-[${colorPrimitives.blue[1]}]`,
    soft: `ring-[${colorPrimitives.blue[2]}]`,
  },

  primary: {
    DEFAULT: `ring-[${colorPrimitives.yellow[1]}]`,
    muted: `ring-[${colorPrimitives.yellow[3]}]`,
  },

  light: {
    DEFAULT: `ring-[${colorPrimitives.white[1]}]`,
  },

  neutral: {
    DEFAULT: `ring-[${colorPrimitives.neutral[2]}]`,
    soft: `ring-[${colorPrimitives.neutral[1]}]`,
  },

  dark: {
    DEFAULT: `ring-[${colorPrimitives.black[2]}]`,
    muted: `ring-[${colorPrimitives.black[1]}]`,
  },
};
