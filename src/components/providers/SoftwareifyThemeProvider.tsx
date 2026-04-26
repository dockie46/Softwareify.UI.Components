import { ConfigProvider } from 'antd'
import type { ThemeConfig } from 'antd'
import type { ReactNode } from 'react'

export interface SoftwareifyThemeProviderProps {
  children: ReactNode
  theme?: ThemeConfig
}

/**
 * Theme provider wrapping antd ConfigProvider.
 * 
 * Applies Softwareify design tokens to antd components with support for:
 * - Direct theme config via props
 * - CSS variables as fallback (--color-success, --color-brand-primary, etc.)
 * - antd v6 token precedence: props > CSS variables > antd defaults
 */
export function SoftwareifyThemeProvider({ children, theme }: SoftwareifyThemeProviderProps) {
  return (
    <ConfigProvider theme={theme}>
      {children}
    </ConfigProvider>
  )
}

export default SoftwareifyThemeProvider
