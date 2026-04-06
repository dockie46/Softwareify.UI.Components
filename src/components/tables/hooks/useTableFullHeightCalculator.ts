import type { Reference } from 'rc-table/lib/interface'
import { useCallback, useRef } from 'react'
import { useResizeDetector } from 'react-resize-detector'

/**
 * Measures the wrapper and header filter row so the table body gets a usable `scroll.y`.
 * When `scrollY` is set, that value wins; otherwise height is derived from the container.
 */
export const useTableFullHeightCalculator = (
  scrollY: string | number | undefined,
  tableHeaderRef: React.RefObject<HTMLDivElement | null>,
  isMobile: boolean,
) => {
  const tableRef = useRef<Reference>(null)

  const recalculateTableHeight = useCallback(
    (wrapper: HTMLDivElement | null): number | string | undefined => {
      if (!wrapper) return undefined

      const tableHeader = wrapper.querySelector('thead.ant-table-thead')?.clientHeight ?? 0
      const containerPadding = 8

      if (scrollY) {
        const heightValue = +scrollY + tableHeader - containerPadding

        // Apply styles to internal antd elements that can't be accessed via React refs
        const emptyPlaceholder = wrapper.querySelector('div.ant-table-placeholder')
        if (emptyPlaceholder instanceof HTMLElement) {
          emptyPlaceholder.style.minHeight = `${heightValue}px`
          emptyPlaceholder.style.maxHeight = `${heightValue}px`
        }

        const spinLoading = wrapper.querySelector('div.ant-table-container')
        if (spinLoading instanceof HTMLElement) {
          spinLoading.style.minHeight = `${heightValue}px`
          spinLoading.style.maxHeight = `${heightValue}px`
        }

        return scrollY
      }

      const tableFooter = wrapper.querySelector('div.ant-table-footer')?.clientHeight ?? 0
      const tablePaging = isMobile ? 24 : 40

      const container = wrapper.clientHeight ?? 0
      const filterSection = tableHeaderRef.current?.clientHeight ?? 0

      const filterSectionMargin = 16

      const height =
        container - tableHeader - tableFooter - filterSection - containerPadding - filterSectionMargin - tablePaging

      const tableWrapper = wrapper.querySelector('div.ant-table-wrapper')
      if (tableWrapper instanceof HTMLElement) {
        tableWrapper.style.maxHeight = `${height + tableHeader}px`
        tableWrapper.style.height = '100%'
      }

      return height
    },
    [scrollY, tableHeaderRef, isMobile]
  )

  const tableWrapperResizeDetector = useResizeDetector<HTMLDivElement>({
    refreshMode: 'debounce',
    onResize: () => {
      if (tableWrapperResizeDetector.ref.current) {
        recalculateTableHeight(tableWrapperResizeDetector.ref.current)
      }
    },
    refreshRate: 1,
  })

  const getTableHeight = useCallback((): number | string | undefined => {
    const wrapper = tableWrapperResizeDetector.ref.current
    if (!wrapper) return undefined
    return recalculateTableHeight(wrapper)
  }, [recalculateTableHeight, tableWrapperResizeDetector.ref])

  return {
    tableWrapperRef: tableWrapperResizeDetector.ref,
    tableRef: tableRef,
    getTableHeight: getTableHeight,
  }
}
