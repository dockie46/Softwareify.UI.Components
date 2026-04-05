import { useDrag, useDrop } from 'react-dnd'
import { DRAG_TYPE } from '../types'
import type { ReactNode } from 'react'
import { useRef } from 'react'

interface DraggableHeaderProps {
  title: ReactNode
  columnKey: string
  index: number
  moveColumn: (dragIndex: number, hoverIndex: number) => void
}

const DraggableHeader = ({ title, columnKey, index, moveColumn }: DraggableHeaderProps) => {
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
      {typeof title === 'string' || typeof title === 'number' ? title : String(title ?? '')}
    </div>
  )
}

export default DraggableHeader
