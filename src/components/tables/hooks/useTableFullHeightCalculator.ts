import type { Reference } from 'rc-table/lib/interface'
import { useRef } from 'react'
import { useResizeDetector } from 'react-resize-detector'

export const useTableFullHeightCalculator = (
  scrollY: string | number | undefined,
  tableHeaderRef: React.RefObject<HTMLDivElement>,
  screens: Record<string, boolean>,
) => {
  const tableRef = useRef<Reference>(null)

  const tableWrapperResizeDetector = useResizeDetector<HTMLDivElement>({
    refreshMode: 'debounce',
    onResize: () => recalculateTableHeight(),
    refreshRate: 1,
  })

  const recalculateTableHeight = (): number | string => {
    const tableWrapper = tableWrapperResizeDetector.ref.current?.querySelector('div.ant-table-wrapper')
    const tableHeader =
      tableWrapperResizeDetector.ref.current?.querySelector('thead.ant-table-thead')?.clientHeight ?? 0

    const containerPadding = 8

    if (scrollY) {
      const emptyPlaceholder = tableWrapperResizeDetector.ref.current?.querySelector('div.ant-table-placeholder')
      emptyPlaceholder?.setAttribute(
        'style',
        `min-height: ${+scrollY + tableHeader - containerPadding}px; max-height: ${
          +scrollY + tableHeader - containerPadding
        }px`,
      )

      const spinLoading = tableWrapperResizeDetector.ref.current?.querySelector('div.ant-table-container')
      spinLoading?.setAttribute(
        'style',
        `min-height: ${+scrollY + tableHeader - containerPadding}px; max-height: ${
          +scrollY + tableHeader - containerPadding
        }px`,
      )

      return scrollY
    }

    const tableFooter =
      tableWrapperResizeDetector.ref.current?.querySelector('div.ant-table-footer')?.clientHeight ?? 0
    const tablePaging = screens.xs ? 24 : 40

    const container = tableWrapperResizeDetector.ref.current?.clientHeight ?? 0
    const filterSection = tableHeaderRef.current?.clientHeight ?? 0

    const filterSectionMargin = 16

    const height =
      container - tableHeader - tableFooter - filterSection - containerPadding - filterSectionMargin - tablePaging

    if (tableWrapper) {
      tableWrapper.setAttribute('style', `max-height:${height + tableHeader}px;height: 100%`)
    }

    return height
  }

  return {
    tableWrapperRef: tableWrapperResizeDetector.ref,
    tableRef: tableRef,
    getTableHeight: recalculateTableHeight,
  }
}
