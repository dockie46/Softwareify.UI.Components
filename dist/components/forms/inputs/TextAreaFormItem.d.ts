import { BaseFormItemProps, FormItemWrapperProps } from '../../../common/models/form';
import { TextAreaProps } from 'antd/es/input';
interface Props extends FormItemWrapperProps<BaseFormItemProps, TextAreaProps> {
}
declare const TextAreaFormItem: ({ elementProps, formProps }: Props) => import("react/jsx-runtime").JSX.Element;
export default TextAreaFormItem;
