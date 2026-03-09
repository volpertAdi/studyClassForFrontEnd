import { Button } from "@mui/material";
import type { ColumnConfig } from "../types/studentsListTypes";

export const STUDENT_COLUMNS: ColumnConfig[] = [
  { id: 'id', label: 'ID' },
  { id: 'firstName', label: 'First Name' },
  { id: 'lastName', label: 'Last Name' },
  { id: 'age', label: 'Age' },
  { id: 'profession', label: 'Profession' },
  { 
    id: 'assign', 
    label: 'Assign',
    render: (row, { onAssign }) => (
      <Button variant="outlined" onClick={() => onAssign(row.id)}>
        {!!row.classroomId ? 'REASSIGN' : 'ASSIGN TO CLASS'}
      </Button>
    )
  },
  { 
    id: 'delete', 
    label: 'Delete',
    render: (row, { onDelete }) => (
      <Button variant="outlined" color="error" onClick={() => onDelete(row.id)}>
        DELETE
      </Button>
    )
  },
];

export const CLASS_SELECT_TITLE = 'Available Classes';