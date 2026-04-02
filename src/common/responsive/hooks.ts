import { Grid } from 'antd'

export const useResponsive = () => {
  const screens = Grid.useBreakpoint()
  const isMobile = !screens.md
  const isTablet = Boolean(screens.md) && !screens.lg
  const isCompact = !screens.lg

  return {
    screens,
    isMobile,
    isTablet,
    isCompact,
  }
}
