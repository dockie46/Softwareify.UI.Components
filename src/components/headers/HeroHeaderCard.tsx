import { Avatar, Card, Grid, Typography } from 'antd'
import type { ReactNode } from 'react'

type HeroHeaderCardProps = {
  avatar?: ReactNode
  title: ReactNode
  subtitle?: ReactNode
  meta?: ReactNode
  rightContent?: ReactNode
  brandPrimary?: string
  cardGradient?: string
}

const HeroHeaderCard = ({
  avatar,
  title,
  subtitle,
  meta,
  rightContent,
  brandPrimary = '#ED1C24',
  /** Same surface as the app top bar (`--color-header-gradient`). */
  cardGradient = 'var(--color-header-gradient)',
}: HeroHeaderCardProps) => {
  const screens = Grid.useBreakpoint()
  const isMobile = !screens.md
  const isCompact = !screens.lg

  return (
    <Card
      variant="borderless"
      style={{
        flexShrink: 0,
        background: cardGradient,
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
      }}
      styles={{
        body: {
          background: 'transparent',
          padding: isMobile ? '16px 16px' : '28px 32px',
        },
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: isCompact ? 'flex-start' : 'center',
          gap: isCompact ? 12 : 20,
          flexWrap: isCompact ? 'wrap' : 'nowrap',
        }}
      >
        {avatar && (
          <Avatar
            size={isMobile ? 52 : 72}
            style={{
              background: brandPrimary,
              fontSize: isMobile ? 16 : 24,
              fontWeight: 700,
              flexShrink: 0,
            }}
          >
            {avatar}
          </Avatar>
        )}
        <div style={{ flex: 1, minWidth: 0 }}>
          <Typography.Title level={isCompact ? 4 : 3} style={{ color: '#ffffff', margin: 0 }}>
            {title}
          </Typography.Title>
          {subtitle && (
            <Typography.Text
              style={{
                color: 'rgba(255,255,255,0.55)',
                fontSize: isCompact ? 12 : 13,
              }}
            >
              {subtitle}
            </Typography.Text>
          )}
          {meta && <div style={{ marginTop: 4 }}>{meta}</div>}
        </div>
        {rightContent ? (
          <div
            style={{
              marginLeft: isCompact ? 0 : 'auto',
              display: 'flex',
              alignItems: 'center',
              width: isCompact ? '100%' : 'auto',
              justifyContent: isCompact ? 'flex-start' : 'flex-end',
            }}
          >
            {rightContent}
          </div>
        ) : null}
      </div>
    </Card>
  )
}

export default HeroHeaderCard
