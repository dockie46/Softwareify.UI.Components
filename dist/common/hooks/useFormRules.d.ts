import { Rule } from 'antd/es/form';
import { BaseFormItemProps } from '../models/form';
/**
 * Hook to generate form validation rules based on form item properties.
 * Proper hook implementation (unlike previous getRules function which violated hooks rules).
 */
export declare const useFormRules: (props: BaseFormItemProps | undefined, type?: "email" | "url" | "phone" | string, placeholder?: string) => Rule[];
