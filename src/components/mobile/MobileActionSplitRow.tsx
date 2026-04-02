import type { ReactNode } from 'react'

type MobileActionSplitRowProps = {
  left: ReactNode
  right: ReactNode
}

const MobileActionSplitRow = ({ left, right }: MobileActionSplitRowProps) => {
  return (
    <div className="flex items-stretch gap-3 w-full">
      <div className="flex-1 flex justify-center">{left}</div>
      <div
        style={{
          width: 1,
          alignSelf: 'stretch',
          background: 'var(--color-border-light)',
        }}
      />
      <div className="flex-1 flex justify-center">{right}</div>
    </div>
  )
}

export default MobileActionSplitRow
