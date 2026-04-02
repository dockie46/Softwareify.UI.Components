import { Gutter } from 'antd/es/grid/row';
import { ReactNode } from 'react';
interface FormItemWrapperProps {
    firstItem: ReactNode;
    secondItem?: ReactNode;
    style?: React.CSSProperties;
    gutter?: Gutter | [Gutter, Gutter];
}
declare const FormItemWrapper: ({ firstItem, secondItem, style, gutter }: FormItemWrapperProps) => import("react/jsx-runtime").JSX.Element;
export default FormItemWrapper;
