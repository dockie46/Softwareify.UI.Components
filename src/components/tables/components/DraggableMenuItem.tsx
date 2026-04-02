import { Button, Switch, Tooltip } from 'antd'
import { DRAG_TYPE } from '../types'
import type { DraggableMenuItemProps, FixedStatus } from '../types'
import { MenuOutlined, PushpinOutlined } from '@ant-design/icons'
import { useDrag, useDrop } from 'react-dnd'
import { useRef } from 'react'

const THEME = {
  primary: '#1890ff',
  secondary: '#f5f7fa',
  accent: '#e6f7ff',
  border: '#e8e8e8',
  success: '#52c41a',
}

const DraggableMenuItem: React.FC<DraggableMenuItemProps> = ({
  columnKey,
  index,
  isVisible,
  fixed,
  title,
  moveColumn,
  toggleVisibility,
  setFixedStatus,
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const ITEM_HEIGHT = 44

  const [, drop] = useDrop({
    accept: DRAG_TYPE,
    hover(item: { index: number; columnKey: string }, monitor) {
      if (!ref.current) return
      const dragIndex = item.index
      const hoverIndex = index

      if (dragIndex === hoverIndex) return

      const hoverBoundingRect = ref.current.getBoundingClientRect()
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      const clientOffset = monitor.getClientOffset()
      if (!clientOffset) return
      const hoverClientY = clientOffset.y - hoverBoundingRect.top

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return

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

  const getPinColor = () => {
    if (fixed === 'left') return THEME.primary
    if (fixed === 'right') return THEME.success
    return '#d9d9d9'
  }

  const handlePinClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    let newStatus: FixedStatus = false
    if (fixed === false) newStatus = 'left'
    else if (fixed === 'left') newStatus = 'right'
    setFixedStatus(columnKey, newStatus)
  }

  return (
    <div
      ref={ref}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
        display: 'flex',
        alignItems: 'center',
        padding: '8px 12px',
        borderBottom: `1px solid ${THEME.border}`,
        height: `${ITEM_HEIGHT}px`,
        backgroundColor: isDragging ? '#f5f5f5' : index % 2 === 0 ? '#ffffff' : '#fafafa',
        transition: 'all 0.2s',
        position: 'relative',
      }}
    >
      {isVisible && (
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '3px',
            backgroundColor: fixed ? getPinColor() : 'transparent',
          }}
        />
      )}

      <MenuOutlined
        style={{
          marginRight: 12,
          cursor: 'grab',
          color: '#8c8c8c',
          fontSize: '14px',
        }}
      />

      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        <div
          style={{
            opacity: isVisible ? 1 : 0.5,
            transition: 'opacity 0.2s',
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            maxWidth: 'calc(100% - 100px)',
          }}
        >
          {fixed && (
            <span
              style={{
                marginRight: 6,
                fontSize: 12,
                padding: '1px 4px',
                background: fixed === 'left' ? THEME.accent : '#f6ffed',
                color: fixed === 'left' ? THEME.primary : THEME.success,
                borderRadius: 4,
                flexShrink: 0,
              }}
            >
              {fixed === 'left' ? 'LEFT' : 'RIGHT'}
            </span>
          )}
          <span
            style={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {title}
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Tooltip title={fixed ? `Fixed ${fixed}` : 'Pin column'}>
            <Button
              type="text"
              icon={
                <PushpinOutlined
                  style={{
                    color: getPinColor(),
                    transform: fixed ? 'rotate(-45deg)' : 'none',
                    transition: 'transform 0.2s, color 0.2s',
                  }}
                />
              }
              onClick={handlePinClick}
              style={{
                marginRight: 4,
                padding: '0 8px',
              }}
            />
          </Tooltip>

          <Switch
            checked={isVisible}
            size="small"
            onChange={() => toggleVisibility(columnKey)}
            style={{
              backgroundColor: isVisible ? THEME.primary : undefined,
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default DraggableMenuItem
