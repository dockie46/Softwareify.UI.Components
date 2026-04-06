import { Meta, StoryObj } from '@storybook/react';
import { default as EntityInfo } from './EntityInfo';
declare const meta: Meta<typeof EntityInfo>;
export default meta;
type Story = StoryObj<typeof EntityInfo>;
export declare const Default: Story;
export declare const WithTitle: Story;
export declare const Bordered: Story;
export declare const SingleColumn: Story;
/**
 * Two rows: (1) **label + value** using the full component width as a normal pair; (2) **value only** on a second
 * row spanning the full width (`td colSpan={2}` — no grey label column). Record: use `''` as key for row 2.
 */
export declare const OptionalLabel: Story;
/** Same layout as OptionalLabel, array form: omit `label` on the value-only row. */
export declare const OptionalLabelArray: Story;
/** Object shorthand: keys are labels (handy for detail panels). */
export declare const FromRecord: Story;
/** Multiple lines in one row without wrapping `value` yourself. */
export declare const StackedValues: Story;
/** Full-width row when using 3 columns (Ant Design `span`). */
export declare const SpanColumns: Story;
export declare const Loading: Story;
/**
 * Two columns: **section `title` on the left**; right uses an **invisible** copy of the same `<span>`
 * so header height matches. **CSS Grid** (`minmax(0, 1fr)`) avoids flex/`Col` sub-pixel width rounding.
 * When side-by-side (`lg+`), both panels **stretch to the same row height** (shorter card grows; bordered
 * `view` + table fill the cell — same idea as `FiveLeftOneRight`).
 */
export declare const TwoColumnRightStacked: Story;
/** One `EntityInfo`, two label/value pairs **per row** (`column={2}`). Not the same as page two-column layout. */
export declare const TwoPairsPerRow: Story;
/**
 * Five rows on the left, one row on the right; same column width (`lg={12}`). The right block stretches to the
 * left column’s height so the single cell’s content area matches vertically (Ant `Descriptions` is a table — a
 * small stretch stylesheet is required).
 */
export declare const FiveLeftOneRight: Story;
