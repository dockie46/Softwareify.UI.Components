import { FixedStatus } from '../types';
export declare function useColumnManager(columns: any[]): {
    getColumnKey: (col: any) => string;
    getVisibleColumns: () => {
        key: string;
        fixed: boolean | "left" | "right";
    }[];
    getEditingColumns: () => {
        key: string;
        visible: boolean;
        fixed: boolean | "left" | "right";
    }[];
    startEditing: () => void;
    applyChanges: () => void;
    cancelChanges: () => void;
    resetToDefault: () => void;
    moveColumn: (dragIndex: number, hoverIndex: number) => void;
    toggleVisibility: (key: string) => void;
    setFixedStatus: (key: string, status: FixedStatus) => void;
};
