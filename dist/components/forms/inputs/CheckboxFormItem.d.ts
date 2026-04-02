import { BaseFormItemProps, FormItemWrapperProps } from '../../../common/models/form';
import { CheckboxProps } from 'antd';
interface Props extends FormItemWrapperProps<BaseFormItemProps, CheckboxProps> {
    children?: React.ReactNode;
}
declare const CheckboxFormItem: ({ formProps, elementProps, children }: Props) => import("react/jsx-runtime").JSX.Element;
export default CheckboxFormItem;
