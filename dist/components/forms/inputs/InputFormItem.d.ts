import { BaseFormItemProps, FormItemWrapperProps } from '../../../common/models/form';
import { InputProps } from 'antd';
interface Props extends FormItemWrapperProps<BaseFormItemProps, InputProps> {
}
declare const InputFormItem: ({ elementProps, formProps }: Props) => import("react/jsx-runtime").JSX.Element;
export default InputFormItem;
