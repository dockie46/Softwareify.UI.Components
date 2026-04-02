import { BaseFormItemProps } from '../models/form';
import { Rule } from 'antd/es/form';
export declare const objectToFormData: (obj: any, rootName?: any, ignoreList?: any[]) => FormData;
export declare const getRules: (props: BaseFormItemProps | undefined, type?: "email" | "url" | "phone" | string, placeholder?: string) => Rule[];
export declare const datesToDayjs: (model: any) => any;
