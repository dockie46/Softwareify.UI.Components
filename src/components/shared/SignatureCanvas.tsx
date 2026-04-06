import { useRef, useEffect, useCallback, useState } from 'react'
import { Button, Space } from 'antd'
import { ClearOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'

type SignatureCanvasProps = {
  width?: number
  height?: number
  onSign: (dataUrl: string) => void
  disabled?: boolean
  clearLabel?: string
  confirmLabel?: string
}

const SignatureCanvas = ({
  width = 400,
  height = 200,
  onSign,
  disabled = false,
  clearLabel,
  confirmLabel,
}: SignatureCanvasProps) => {
  const { t } = useTranslation()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [hasDrawn, setHasDrawn] = useState(false)

  const getCtx = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return null
    return canvas.getContext('2d')
  }, [])

  const clearCanvas = useCallback(() => {
    const ctx = getCtx()
    const canvas = canvasRef.current
    if (!ctx || !canvas) return
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    setHasDrawn(false)
  }, [getCtx])

  useEffect(() => {
    const ctx = getCtx()
    if (!ctx) return
    const computedColor = getComputedStyle(canvasRef.current!).getPropertyValue('--color-text-primary').trim()
    ctx.strokeStyle = computedColor || '#000'
    ctx.lineWidth = 2
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
  }, [getCtx])

  const getPosition = (e: React.MouseEvent | React.TouchEvent): { x: number; y: number } | null => {
    const canvas = canvasRef.current
    if (!canvas) return null
    const rect = canvas.getBoundingClientRect()
    const scaleX = canvas.width / rect.width
    const scaleY = canvas.height / rect.height

    if ('touches' in e) {
      const touch = e.touches[0]
      if (!touch) return null
      return {
        x: (touch.clientX - rect.left) * scaleX,
        y: (touch.clientY - rect.top) * scaleY,
      }
    }
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    }
  }

  const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
    if (disabled) return
    const ctx = getCtx()
    const pos = getPosition(e)
    if (!ctx || !pos) return
    ctx.beginPath()
    ctx.moveTo(pos.x, pos.y)
    setIsDrawing(true)
  }

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing || disabled) return
    const ctx = getCtx()
    const pos = getPosition(e)
    if (!ctx || !pos) return
    ctx.lineTo(pos.x, pos.y)
    ctx.stroke()
    setHasDrawn(true)
  }

  const stopDrawing = () => {
    setIsDrawing(false)
  }

  const handleConfirm = () => {
    const canvas = canvasRef.current
    if (!canvas || !hasDrawn) return
    onSign(canvas.toDataURL('image/png'))
  }

  return (
    <div className="flex flex-col gap-2">
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        style={{
          border: '1px solid var(--color-border, #d9d9d9)',
          borderRadius: 8,
          cursor: disabled ? 'default' : 'crosshair',
          touchAction: 'none',
          width: '100%',
          maxWidth: width,
          height: 'auto',
          aspectRatio: `${width} / ${height}`,
        }}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        onTouchStart={startDrawing}
        onTouchMove={draw}
        onTouchEnd={stopDrawing}
      />
      {!disabled && (
        <Space>
          <Button size="small" icon={<ClearOutlined />} onClick={clearCanvas} disabled={!hasDrawn}>
            {clearLabel ?? t('global.btns.clear')}
          </Button>
          <Button size="small" type="primary" onClick={handleConfirm} disabled={!hasDrawn}>
            {confirmLabel ?? t('global.btns.confirm')}
          </Button>
        </Space>
      )}
    </div>
  )
}

export default SignatureCanvas
