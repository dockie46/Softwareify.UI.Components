import { MainHeaderProps } from './MainHeader';
export type SectionHeaderProps = Pick<MainHeaderProps, 'title' | 'filters' | 'actions'>;
declare const SectionHeader: (props: SectionHeaderProps) => import("react/jsx-runtime").JSX.Element;
export default SectionHeader;
