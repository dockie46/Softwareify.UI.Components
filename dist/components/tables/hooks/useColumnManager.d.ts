import { FixedStatus } from '../types';
import { ColumnsType } from 'antd/es/table';
import { BaseModel } from '../../../common/models';
/**
 * Hook for managing table column visibility, order, and fixed positioning.
 * Provides type-safe column management with generic constraint on data model.
 */
export declare function useColumnManager<T extends BaseModel<string | number>>(columns: ColumnsType<T>): {
    getColumnKey: (col: ColumnsType<T>[number]) => string;
    getVisibleColumns: () => Array<{
        key: string;
        fixed: FixedStatus;
    }>;
    getEditingColumns: () => Array<{
        key: string;
        visible: boolean;
        fixed: FixedStatus;
    }>;
    startEditing: () => void;
    applyChanges: () => void;
    cancelChanges: () => void;
    resetToDefault: () => void;
    moveColumn: (dragIndex: number, hoverIndex: number) => void;
    toggleVisibility: (key: string) => void;
    setFixedStatus: (key: string, status: FixedStatus) => void;
};
