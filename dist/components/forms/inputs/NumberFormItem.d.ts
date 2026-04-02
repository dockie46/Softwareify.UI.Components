import { BaseFormItemProps, FormItemWrapperProps } from '../../../common/models/form';
import { InputNumberProps } from 'antd';
interface Props extends FormItemWrapperProps<BaseFormItemProps, InputNumberProps> {
}
declare const NumberFormItem: ({ elementProps, formProps }: Props) => import("react/jsx-runtime").JSX.Element;
export default NumberFormItem;
