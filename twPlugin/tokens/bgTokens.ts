import { colorPrimitives } from '../primitives';

export const bgColorTokens = {
  // For primary application backgrounds or surfaces (e.g., cards, containers)
  surface: {
    DEFAULT: colorPrimitives.gray[2], // Light gray for clean surfaces
    muted: colorPrimitives.gray[4], // Slightly darker for subtle surface differentiation
    overlay: colorPrimitives.gray[9], // For overlays like modals or dropdowns
    skeleton: colorPrimitives.gray[9], // For skeleton loaders and placeholders
    disabled: colorPrimitives.gray[5], // Muted mid-gray for disabled surfaces
  },

  // For brand-specific elements like headers, footers, or primary buttons
  brand: {
    DEFAULT: colorPrimitives.gray[7], // Muted brand background
    disabled: colorPrimitives.gray[6], // Muted darker gray for disabled brand areas
    medium: colorPrimitives.gray[8],
  },

  // For states indicating success (e.g., notifications, success banners)
  success: {
    DEFAULT: colorPrimitives.green[1], // Green background for success
    disabled: colorPrimitives.gray[4], // Neutral muted tone for disabled success
  },

  // For error or danger states (e.g., error messages, alerts)
  danger: {
    DEFAULT: colorPrimitives.red[1], // Red background for danger or errors
    disabled: colorPrimitives.gray[5], // Muted mid-gray for disabled danger
  },

  // For warnings (e.g., alert banners, cautions)
  warning: {
    DEFAULT: colorPrimitives.orange[1], // Orange background for warnings
    disabled: colorPrimitives.gray[5], // Muted mid-gray for disabled warnings
  },

  // For informational states (e.g., tips, hints, or system messages)
  info: {
    DEFAULT: colorPrimitives.blue[1], // Blue for primary informational elements
    soft: colorPrimitives.blue[2], // Softer blue for secondary information
    disabled: colorPrimitives.gray[4], // Neutral muted tone for disabled info
  },

  // For primary emphasis areas like buttons, headers, or key highlights
  primary: {
    DEFAULT: colorPrimitives.yellow[1], // Yellow for primary focus areas
    muted: colorPrimitives.yellow[3], // Muted yellow for less prominent emphasis
    disabled: colorPrimitives.gray[4], // Neutral muted tone for disabled primary
  },

  // For clean, minimal backgrounds (e.g., default white backgrounds)
  light: {
    DEFAULT: colorPrimitives.white[1], // Pure white for light and clean UI areas
    disabled: colorPrimitives.gray[3], // Soft neutral gray for disabled light elements
  },

  // For neutral elements like dividers, borders, or secondary backgrounds
  neutral: {
    DEFAULT: colorPrimitives.neutral[2], // Neutral light background for less emphasis
    soft: colorPrimitives.neutral[1], // Even lighter neutral for subtle UI
    disabled: colorPrimitives.gray[5], // Muted mid-gray for disabled neutral elements
  },

  // For dark-themed backgrounds or high-contrast elements
  dark: {
    DEFAULT: colorPrimitives.black[2], // Deep black for dark themes
    muted: colorPrimitives.black[1], // Slightly softer black for muted dark areas
    disabled: colorPrimitives.gray[8], // Soft dark-gray for disabled dark elements
  },
};
