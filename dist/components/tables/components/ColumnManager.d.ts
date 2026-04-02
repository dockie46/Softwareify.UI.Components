import { FixedStatus } from '../types';
interface ColumnManagerProps {
    columns: {
        key: string;
        visible: boolean;
        fixed: FixedStatus;
        title: string;
    }[];
    moveColumn: (dragIndex: number, hoverIndex: number) => void;
    toggleVisibility: (key: string) => void;
    setFixedStatus: (key: string, status: FixedStatus) => void;
    resetToDefault: () => void;
    onCancel: () => void;
    onApply: () => void;
}
declare const ColumnManager: React.FC<ColumnManagerProps>;
export default ColumnManager;
