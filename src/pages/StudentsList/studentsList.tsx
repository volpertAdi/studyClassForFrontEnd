import { useEffect, useState } from 'react';
import * as S from './studentsListStyle';
import { useNotification } from '../../context/NotificationContext';
import DataTable from '../../components/studentsTable/studentsTable';
import type { student } from '../../types/createFormsTypes';
import { getAllStudents } from '../../Api/user.api';

const StudentsListPage = () => {
  const [students, setStudents] = useState<student[]>([]);
  const { showModal } = useNotification();

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const data = await getAllStudents();
        setStudents(data);
      } catch (error) {
        showModal('Error', 'Failed to fetch students', 'error');
      }
    };
    fetchStudents();
  }, []);

  const handleAssign = (id: string) => {
    console.log('Assigning:', id)
  };
  
  const handleDelete = (id: string) => {
    showModal('Delete?', `ID: ${id}`, 'error')
  };

  return (
    <S.PageWrapper>
      <DataTable data={students} onAssign={handleAssign} onDelete={handleDelete} />
    </S.PageWrapper>
  );
};

export default StudentsListPage;