import type { Meta, StoryObj } from '@storybook/react'
import { Col, Grid, Row, Tag } from 'antd'
import EntityInfo from './EntityInfo'
import type { EntityInfoProps } from './EntityInfo'

const { useBreakpoint } = Grid

const meta: Meta<typeof EntityInfo> = {
  title: 'DataDisplay/EntityInfo',
  component: EntityInfo,
  /** Sparse `items` (e.g. `{ value }` without `label`) breaks if Storybook controls serialize `args`. */
  argTypes: {
    items: { control: false },
  },
}

export default meta
type Story = StoryObj<typeof EntityInfo>

export const Default: Story = {
  args: {
    items: [
      { label: 'Name', value: 'John Doe' },
      { label: 'Email', value: 'john@example.com' },
      { label: 'Phone', value: '+420 123 456 789' },
      { label: 'Role', value: 'Admin' },
    ],
  },
}

export const WithTitle: Story = {
  args: {
    title: 'User Details',
    items: [
      { label: 'Name', value: 'Jane Smith' },
      { label: 'Email', value: 'jane@example.com' },
      { label: 'Status', value: <Tag color="green">Active</Tag> },
      { label: 'Created', value: '2024-01-15' },
    ],
  },
}

export const Bordered: Story = {
  args: {
    title: 'Project Info',
    bordered: true,
    items: [
      { label: 'Project', value: 'Softwareify' },
      { label: 'Version', value: '1.0.0' },
      { label: 'License', value: 'Private' },
      { label: 'Status', value: <Tag color="blue">Active</Tag> },
    ],
  },
}

export const SingleColumn: Story = {
  args: {
    column: 1,
    items: [
      { label: 'Description', value: 'A long description that spans the full width of the container.' },
      { label: 'Notes', value: 'Additional notes for this item.' },
    ],
  },
}

/**
 * Two rows: (1) **label + value** using the full component width as a normal pair; (2) **value only** on a second
 * row spanning the full width (`td colSpan={2}` — no grey label column). Record: use `''` as key for row 2.
 */
export const OptionalLabel: Story = {
  args: {
    bordered: true,
    column: 1,
    items: {
      'Field label': 'Value in the right column; label and value together span the full width.',
      '':
        'Second row: value only — full width, no label cell (empty string key). Long text wraps inside this single cell.',
    } satisfies EntityInfoProps['items'],
  },
}

/** Same layout as OptionalLabel, array form: omit `label` on the value-only row. */
export const OptionalLabelArray: Story = {
  args: {
    bordered: true,
    column: 1,
    items: [
      {
        label: 'Field label',
        value: 'Value in the right column; label and value together span the full width.',
      },
      {
        value:
          'Second row: value only — full width, no label cell (`{ value }` without `label`). Long text wraps inside this single cell.',
      },
    ],
  },
}

/** Object shorthand: keys are labels (handy for detail panels). */
export const FromRecord: Story = {
  args: {
    title: 'Shipment',
    bordered: true,
    items: {
      Reference: 'SO-1042',
      Carrier: 'DHL',
      Status: <Tag color="processing">In transit</Tag>,
    },
  },
}

/** Multiple lines in one row without wrapping `value` yourself. */
export const StackedValues: Story = {
  args: {
    column: 2,
    items: [
      { label: 'Billing address', value: ['Softwareify s.r.o.', 'Prague, CZ'] },
      { label: 'Contact', value: ['billing@example.com', '+420 123 456 789'] },
    ],
  },
}

/** Full-width row when using 3 columns (Ant Design `span`). */
export const SpanColumns: Story = {
  args: {
    column: 3,
    bordered: true,
    items: [
      { label: 'SKU', value: 'X-99' },
      { label: 'Qty', value: 12 },
      { label: 'Note', value: 'Fragile', span: 3 },
    ],
  },
}

export const Loading: Story = {
  args: {
    loading: true,
    items: [
      { label: 'Name', value: '' },
      { label: 'Email', value: '' },
      { label: 'Phone', value: '' },
    ],
  },
}

const twoColumnRightStackedTitle = <span>Order</span>

/**
 * Two columns: **section `title` on the left**; right uses an **invisible** copy of the same `<span>`
 * so header height matches. **CSS Grid** (`minmax(0, 1fr)`) avoids flex/`Col` sub-pixel width rounding.
 * When side-by-side (`lg+`), both panels **stretch to the same row height** (shorter card grows; bordered
 * `view` + table fill the cell — same idea as `FiveLeftOneRight`).
 */
export const TwoColumnRightStacked: Story = {
  render: function TwoColumnRightStackedRender() {
    const screens = useBreakpoint()
    const twoCol = !!screens.lg

    return (
      <>
        <style>
          {`
            .entity-info-two-column-stacked__grid {
              align-items: stretch;
            }
            .entity-info-two-column-stacked__cell {
              display: flex;
              flex-direction: column;
              min-height: 0;
              height: 100%;
            }
            .entity-info-two-column-stacked__cell > .ant-descriptions.entity-info--bordered-native {
              flex: 1;
              display: flex;
              flex-direction: column;
              min-height: 0;
              height: 100%;
            }
            .entity-info-two-column-stacked__cell .entity-info--bordered-native > .ant-descriptions-view {
              flex: 1;
              display: flex;
              flex-direction: column;
              min-height: 0;
            }
            .entity-info-two-column-stacked__cell .entity-info--bordered-native > .ant-descriptions-view > table {
              width: 100%;
              height: 100%;
              min-height: 0;
            }
            .entity-info-two-column-stacked__cell .entity-info--bordered-native .ant-descriptions-row--value-only {
              height: 100%;
            }
            .entity-info-two-column-stacked__cell .entity-info--bordered-native .ant-descriptions-row--value-only > td {
              height: 100%;
              vertical-align: top;
            }
          `}
        </style>
        <div
          className="entity-info-two-column-stacked__grid"
          style={{
            display: 'grid',
            gridTemplateColumns: twoCol ? 'minmax(0, 1fr) minmax(0, 1fr)' : 'minmax(0, 1fr)',
            gap: 0,
            width: '100%',
          }}
        >
          <div className="entity-info-two-column-stacked__cell">
            <EntityInfo
              bordered
              column={1}
              title={twoColumnRightStackedTitle}
              items={{
                ID: 'SO-1042',
                Customer: 'Acme Ltd.',
                Total: '12 400 CZK',
              }}
            />
          </div>
          <div className="entity-info-two-column-stacked__cell">
            <EntityInfo
              bordered
              column={1}
              title={
                <span style={{ opacity: 0, userSelect: 'none' }} aria-hidden>
                  Order
                </span>
              }
              items={
                [
                  {
                    value: [
                      'Step 1: Picked',
                      <span key="s2">
                        Step 2: <Tag color="processing">Packing</Tag>
                      </span>,
                      'Step 3: Ship',
                      'Notes: leave at reception if absent.',
                    ],
                  },
                ] satisfies EntityInfoProps['items']
              }
            />
          </div>
        </div>
      </>
    )
  },
}

/** One `EntityInfo`, two label/value pairs **per row** (`column={2}`). Not the same as page two-column layout. */
export const TwoPairsPerRow: Story = {
  args: {
    bordered: true,
    column: 2,
    items: [
      { label: 'Left A', value: 'Value A' },
      { label: 'Right B', value: 'Value B' },
      { label: 'Left C', value: 'Value C' },
      { label: 'Right D', value: 'Value D' },
    ],
  },
}

/**
 * Five rows on the left, one row on the right; same column width (`lg={12}`). The right block stretches to the
 * left column’s height so the single cell’s content area matches vertically (Ant `Descriptions` is a table — a
 * small stretch stylesheet is required).
 */
export const FiveLeftOneRight: Story = {
  render: () => (
    <>
      <style>
        {`
          .entity-info-five-left-one-right__stretch-right .ant-descriptions {
            height: 100%;
            display: flex;
            flex-direction: column;
          }
          .entity-info-five-left-one-right__stretch-right .ant-descriptions-view {
            flex: 1;
            display: flex;
            flex-direction: column;
            min-height: 0;
          }
          .entity-info-five-left-one-right__stretch-right .ant-descriptions-view table {
            height: 100%;
            flex: 1;
          }
          .entity-info-five-left-one-right__stretch-right .ant-descriptions-view tbody tr {
            height: 100%;
          }
          .entity-info-five-left-one-right__stretch-right .ant-descriptions-item-content {
            vertical-align: top;
            height: 100%;
          }
        `}
      </style>
      <Row gutter={0} align="stretch">
        <Col xs={24} lg={12}>
          <EntityInfo
            bordered
            column={1}
            items={[
              { label: 'Reference', value: 'SO-1042' },
              { label: 'Customer', value: 'Acme Ltd.' },
              { label: 'Created', value: '2026-04-01' },
              { label: 'Owner', value: 'Jane Smith' },
              { label: 'Department', value: 'Operations' },
            ]}
          />
        </Col>
        <Col xs={24} lg={12} style={{ display: 'flex' }}>
          <div
            className="entity-info-five-left-one-right__stretch-right"
            style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}
          >
            <EntityInfo
              bordered
              column={1}
              style={{ flex: 1, width: '100%', minHeight: 0, display: 'flex', flexDirection: 'column' }}
              items={[
                {
                  label: 'Decision',
                  value: <Tag color="success">Released</Tag>,
                },
              ]}
            />
          </div>
        </Col>
      </Row>
    </>
  ),
}
