import { Card, Skeleton } from 'antd'

type DetailSkeletonProps = {
  cards?: number
  variant?: 'user' | 'project'
}

const DetailSkeleton = ({ cards = 4, variant = 'user' }: DetailSkeletonProps) => {
  if (variant === 'project') {
    return (
      <div className="flex flex-col gap-4">
        <Card>
          <Skeleton
            active
            title={{ width: '30%' }}
            paragraph={{ rows: 5, width: ['45%', '45%', '60%', '45%', '45%'] }}
          />
        </Card>
        <Card>
          <Skeleton active paragraph={{ rows: 4 }} />
        </Card>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4">
      <Card>
        <Skeleton
          avatar={{ size: 72, shape: 'circle' }}
          active
          paragraph={{ rows: 2, width: ['40%', '25%'] }}
          title={{ width: '30%' }}
        />
      </Card>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${cards}, 1fr)`,
          gap: 12,
        }}
      >
        {[...Array(cards)].map((_, i) => (
          <Card key={i}>
            <Skeleton active paragraph={{ rows: 1 }} title={{ width: '60%' }} />
          </Card>
        ))}
      </div>
      <Card>
        <Skeleton active paragraph={{ rows: 4 }} />
      </Card>
    </div>
  )
}

export default DetailSkeleton
