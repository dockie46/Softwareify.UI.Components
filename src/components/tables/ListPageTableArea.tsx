import type { ReactNode } from 'react'

export const ListPageTableArea = ({
  children,
  grow = true,
  className,
}: {
  children: ReactNode
  grow?: boolean
  className?: string
}) => {
  return (
    <div
      className={['min-h-0 w-full', grow ? 'flex-1' : '', className ?? ''].filter(Boolean).join(' ')}
    >
      {children}
    </div>
  )
}
