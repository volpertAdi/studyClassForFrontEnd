import type { student } from "./createFormsTypes";

export interface DataTableProps {
  data: student[];
  onAssign: (id: string) => void;
  onDelete: (id: string) => void;
}

export interface ColumnConfig {
  id: string;
  label: string;
  render?: (
    row: student, 
    actions: { onAssign: (id: string) => void; onDelete: (id: string) => void }
  ) => React.ReactNode;
}
