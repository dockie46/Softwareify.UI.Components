type PrimaryKeyProps = {
    value: string | undefined;
    label?: string;
    copyTooltip?: string;
    copiedTooltip?: string;
};
declare const PrimaryKey: ({ value, label, copyTooltip, copiedTooltip }: PrimaryKeyProps) => import("react/jsx-runtime").JSX.Element | null;
export default PrimaryKey;
