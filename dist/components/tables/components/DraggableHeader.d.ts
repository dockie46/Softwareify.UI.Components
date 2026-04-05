import { ReactNode } from 'react';
interface DraggableHeaderProps {
    title: ReactNode;
    columnKey: string;
    index: number;
    moveColumn: (dragIndex: number, hoverIndex: number) => void;
}
declare const DraggableHeader: ({ title, columnKey, index, moveColumn }: DraggableHeaderProps) => import("react/jsx-runtime").JSX.Element;
export default DraggableHeader;
