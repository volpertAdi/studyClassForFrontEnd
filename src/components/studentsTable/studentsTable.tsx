import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import * as S from './studentsStyle';
//consts
import { STUDENT_COLUMNS } from '../../consts/studentsListConsts';
//types
import type { ColumnConfig, DataTableProps } from '../../types/studentsListTypes';
import type { student } from '../../types/createFormsTypes';

const StudentsTable = ({ data, onAssign, onDelete }: DataTableProps) => {
  return (
    <S.StyledTableRoot>
        <S.StyledTableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        {STUDENT_COLUMNS.map((column: ColumnConfig) => (
                        <TableCell key={column.id} align="center" sx={{ fontWeight: 'bold' }}>
                            {column.label}
                        </TableCell>
                        ))}
                    </TableRow>
                </TableHead>

                <TableBody>
                    {data.map((row) => (
                        <TableRow key={row.id}>
                        {STUDENT_COLUMNS.map((column: ColumnConfig) => (
                            <TableCell key={column.id} align="center">
                            {column.render 
                                ? column.render(row, { onAssign, onDelete }) 
                                : (row[column.id as keyof student] as any)}
                            </TableCell>
                        ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </S.StyledTableContainer>
    </S.StyledTableRoot>
  );
};

export default StudentsTable;