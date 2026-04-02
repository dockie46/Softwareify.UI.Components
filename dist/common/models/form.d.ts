import { FormItemProps } from 'antd';
/**
 * Same as Ant Design `FormItemProps`. Do not narrow `label` to `string` — apps use
 * `ReactNode` for styled titles and i18n.
 */
export type BaseFormItemProps = FormItemProps;
export interface FormItemWrapperProps<TForm extends BaseFormItemProps, TElement> {
    formProps?: TForm;
    elementProps?: TElement;
}
