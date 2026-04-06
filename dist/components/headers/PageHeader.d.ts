import { MainHeaderProps } from './MainHeader';
export type PageHeaderProps = Omit<MainHeaderProps, 'variant'>;
declare const PageHeader: (props: PageHeaderProps) => import("react/jsx-runtime").JSX.Element;
export default PageHeader;
