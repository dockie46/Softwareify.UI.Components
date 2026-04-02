import { BaseFormItemProps, FormItemWrapperProps } from '../../../common/models/form';
import { SwitchProps } from 'antd';
interface Props extends FormItemWrapperProps<BaseFormItemProps, SwitchProps> {
}
declare const SwitchFormItem: ({ elementProps, formProps }: Props) => import("react/jsx-runtime").JSX.Element;
export default SwitchFormItem;
