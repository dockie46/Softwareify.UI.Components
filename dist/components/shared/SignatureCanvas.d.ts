type SignatureCanvasProps = {
    width?: number;
    height?: number;
    onSign: (dataUrl: string) => void;
    disabled?: boolean;
    clearLabel?: string;
    confirmLabel?: string;
};
declare const SignatureCanvas: ({ width, height, onSign, disabled, clearLabel, confirmLabel, }: SignatureCanvasProps) => import("react/jsx-runtime").JSX.Element;
export default SignatureCanvas;
