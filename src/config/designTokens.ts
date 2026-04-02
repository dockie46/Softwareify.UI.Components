// ─── Brand Colors ───────────────────────────────────────────
export const brand = {
  primary: '#ED1C24',
  dark: '#080808',
  gray: '#7C7C7C',
  white: '#ffffff',
  black: '#000000',
} as const

// ─── Semantic Colors ────────────────────────────────────────
export const colors = {
  success: '#52c41a',
  warning: '#fa8c16',
  error: '#f5222d',
  info: '#1677ff',

  textPrimary: 'var(--color-text-primary)',
  textSecondary: 'var(--color-text-secondary)',
  textMuted: 'var(--color-text-muted)',
  textInverse: 'var(--color-text-inverse)',

  bgPrimary: 'var(--color-bg-primary)',
  bgSecondary: 'var(--color-bg-secondary)',
  bgElevated: 'var(--color-bg-elevated)',

  border: 'var(--color-border)',
  borderLight: 'var(--color-border-light)',

  headerBg: 'var(--color-header-bg)',
  headerGradient: 'var(--color-header-gradient)',
  cardGradient: 'var(--color-card-gradient)',
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
  md: 6,
  lg: 8,
  xl: 12,
  round: 20,
} as const
