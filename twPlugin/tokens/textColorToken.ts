import { colorPrimitives } from '../primitives';

export const textColorTokens = {
  // Primary text used in general UI and content
  body: {
    DEFAULT: colorPrimitives.gray[10], // Main text color for paragraphs, body content
    fg: colorPrimitives.gray[1], // Lighter text on dark background (inverse)
  },
  // Text related to brand identity or focus elements
  brand: {
    DEFAULT: colorPrimitives.gray[7], // Brand text color
    fg: colorPrimitives.white[1], // Inverse color for brand text on dark background
  },
  // Text indicating success, used in positive feedback
  success: {
    DEFAULT: colorPrimitives.green[1], // Success messages, input validation success
    fg: colorPrimitives.white[1], // Inverse success color for dark background
  },
  // Text related to danger or error states
  danger: {
    DEFAULT: colorPrimitives.red[1], // Error messages, critical alerts
    fg: colorPrimitives.white[1], // Inverse danger color for dark background
  },
  // Text signaling caution or warnings
  warning: {
    DEFAULT: colorPrimitives.orange[1], // Warnings, cautionary messages
    fg: colorPrimitives.white[1], // Inverse warning color for dark background
  },
  // Informational text, providing helpful tips or statuses
  info: {
    DEFAULT: colorPrimitives.blue[1], // Informational messages, status updates
    fg: colorPrimitives.white[1], // Inverse info color for dark background
  },
  // Neutral text for standard content or background text
  neutral: {
    DEFAULT: colorPrimitives.gray[6], // Neutral text (e.g., secondary text, disabled items)
    fg: colorPrimitives.black[1], // Inverse neutral color for dark background
  },
};
