/**
 * Ant Design `Form.Item` as a named export for composite fields (maps, time-entry blocks,
 * custom controls). Prefer `InputFormItem`, `SelectFormItem`, etc. for standard inputs.
 */
export declare const FormItem: (<Values = any>(props: import('antd').FormItemProps<Values>) => React.ReactElement) & {
    useStatus: () => {
        status?: import('antd/es/form/FormItem').ValidateStatus;
        errors: React.ReactNode[];
        warnings: React.ReactNode[];
    };
};
