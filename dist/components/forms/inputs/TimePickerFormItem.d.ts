import { BaseFormItemProps, FormItemWrapperProps } from '../../../common/models/form';
import { TimePickerProps } from 'antd';
interface Props extends FormItemWrapperProps<BaseFormItemProps, TimePickerProps> {
}
declare const TimePickerFormItem: ({ formProps, elementProps }: Props) => import("react/jsx-runtime").JSX.Element;
export default TimePickerFormItem;
