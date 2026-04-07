import type { ThemeConfig } from 'antd'

// ─── Brand Colors ───────────────────────────────────────────
export const brand = {
  primary: '#ED1C24',
  dark: '#080808',
  gray: '#7C7C7C',
  white: '#ffffff',
  black: '#000000',
} as const

// ─── Semantic Colors ────────────────────────────────────────
// Concrete defaults that work out of the box. Consumers can override
// via SoftwareifyThemeProvider's theme prop or CSS variables.
export const colors = {
  success: '#52c41a',
  warning: '#fa8c16',
  error: '#f5222d',
  info: '#1677ff',

  textPrimary: '#262626',
  textSecondary: '#595959',
  textMuted: '#8c8c8c',
  textInverse: '#ffffff',

  bgPrimary: '#ffffff',
  bgSecondary: '#fafafa',
  bgElevated: '#ffffff',

  border: '#E7EAF0',
  borderLight: '#F0F0F0',

  headerBg: '#000000',
  headerGradient: 'linear-gradient(135deg, #080808 0%, #1a1a1a 100%)',
  cardGradient: 'linear-gradient(135deg, #fafafa 0%, #ffffff 100%)',
} as const

// ─── Typography ─────────────────────────────────────────────
export const fontSize = {
  xs: 12,
  sm: 13,
  base: 14,
  md: 15,
  lg: 16,
  xl: 18,
  '2xl': 24,
  '3xl': 30,
} as const

export const fontWeight = {
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const

// ─── Spacing ────────────────────────────────────────────────
export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  '2xl': 24,
  '3xl': 28,
  '4xl': 32,
} as const

// ─── Border Radius ──────────────────────────────────────────
export const radius = {
  sm: 4,
  md: 4,
  lg: 8,
  xl: 12,
  round: 20,
} as const

// ─── Ant Design Theme Config ────────────────────────────────
/**
 * antd v6 ConfigProvider theme configuration.
 * Maps Softwareify design tokens to antd tokens.
 * 
 * Precedence:
 * 1. Explicit theme prop passed to SoftwareifyThemeProvider
 * 2. CSS variables (--color-* et al)
 * 3. These defaults
 */
export const softwareifyTheme: ThemeConfig = {
  token: {
    // Brand colors
    colorPrimary: brand.primary,
    colorBgContainer: colors.bgPrimary,
    colorBorder: colors.border,
    colorError: colors.error,
    colorSuccess: colors.success,
    colorWarning: colors.warning,
    colorInfo: colors.info,

    // Typography
    fontSize: fontSize.base,
    fontSizeHeading1: fontSize['3xl'],
    fontSizeHeading2: fontSize['2xl'],
    fontSizeHeading3: fontSize.xl,
    fontSizeHeading4: fontSize.lg,
    fontSizeHeading5: fontSize.md,
    fontWeightStrong: fontWeight.semibold,

    // Spacing and sizing (antd uses margin/padding as base, with XS/SM/MD/LG/XL variants)
    margin: spacing.md,
    marginXS: spacing.xs,
    marginSM: spacing.sm,
    marginLG: spacing.lg,
    marginXL: spacing.xl,

    padding: spacing.md,
    paddingXS: spacing.xs,
    paddingSM: spacing.sm,
    paddingLG: spacing.lg,
    paddingXL: spacing.xl,

    // Border radius
    borderRadius: radius.md,
    borderRadiusLG: radius.lg,
    borderRadiusSM: radius.sm,

    // Other common tokens
    lineHeight: 1.5,
  },
}
