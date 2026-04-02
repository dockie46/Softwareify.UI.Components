import { FormItemProps } from 'antd';
import { NamePath } from 'antd/es/form/interface';
export interface BaseFormItemProps extends FormItemProps {
    label?: string;
    name: NamePath;
    hidden?: boolean;
}
export interface FormItemWrapperProps<TForm extends BaseFormItemProps, TElement> {
    formProps?: TForm;
    elementProps?: TElement;
}
