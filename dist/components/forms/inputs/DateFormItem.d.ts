import { BaseFormItemProps, FormItemWrapperProps } from '../../../common/models/form';
import { DatePickerProps } from 'antd/lib';
interface Props extends FormItemWrapperProps<BaseFormItemProps, DatePickerProps> {
}
declare const DateFormItem: ({ formProps, elementProps }: Props) => import("react/jsx-runtime").JSX.Element;
export default DateFormItem;
