import { BaseFormItemProps, FormItemWrapperProps } from '../../../common/models/form';
import { SelectProps } from 'antd';
interface Props extends FormItemWrapperProps<BaseFormItemProps, SelectProps> {
}
declare const SelectFormItem: ({ elementProps, formProps }: Props) => import("react/jsx-runtime").JSX.Element;
export default SelectFormItem;
