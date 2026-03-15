import { Button } from "@mui/material";
import * as S from '../components/studentsTable/studentsStyle';
import type { ColumnConfig } from "../types/studentsListTypes";
import { useAppTheme } from "../context/ThemeContext/ThemeContext";

export const STUDENT_COLUMNS: ColumnConfig[] = [
  { id: 'id', label: 'ID' },
  { id: 'firstName', label: 'First Name' },
  { id: 'lastName', label: 'Last Name' },
  { id: 'age', label: 'Age' },
  { id: 'profession', label: 'Profession' },
  {
    id: 'assign',
    label: 'Assign',
    render: (row, { onAssign }) => {
      const { mainColor } = useAppTheme(); 
      
      return (
        <S.AssignClassButton 
          variant="outlined" 
          onClick={() => onAssign(row.id)} 
          mainColor={mainColor}
        >
          {!!row.classroomId ? 'REASSIGN' : 'ASSIGN TO CLASS'}
        </S.AssignClassButton>
      );
    }
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