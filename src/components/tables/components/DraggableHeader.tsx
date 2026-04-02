import { useDrag, useDrop } from 'react-dnd'
import type { BaseModel } from '@/common/models'
import { DRAG_TYPE } from '../types'
import type { DraggableHeaderProps } from '../types'
import { useRef } from 'react'

function DraggableHeader<T extends BaseModel<number>>({
  title,
  columnKey,
  index,
  moveColumn,
}: DraggableHeaderProps<T>) {
  const ref = useRef<HTMLDivElement>(null)

  const [, drop] = useDrop({
    accept: DRAG_TYPE,
    hover(item: { index: number; columnKey: string }) {
      if (!ref.current) return
      const dragIndex = item.index
      const hoverIndex = index
      if (dragIndex === hoverIndex) return
      moveColumn(dragIndex, hoverIndex)
      item.index = hoverIndex
    },
  })

  const [{ isDragging }, drag] = useDrag({
    type: DRAG_TYPE,
    item: { index, columnKey },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  drag(drop(ref))

  return (
    <div
      ref={ref}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {title?.toString()}
    </div>
  )
}

export default DraggableHeader
